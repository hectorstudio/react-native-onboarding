import * as React from 'react'
import { Image, Animated, Dimensions, StyleSheet, StatusBar, FlatList, SafeAreaView, FlatListProps } from 'react-native'
import tinycolor from 'tinycolor2'

import Page from './../Page/Page'
import Pagination from './../Pagination/Pagination'
import { IOnboardingProps, IOnboardingState, IOnboardingPage, TypeComponent, IPageProps, IPaginationProps } from './../../index'
import styles from './styles'

/**
 * Class to define the component Onboarding
 * @class Onboarding
 * @extends {React.Component<IOnboardingProps, IOnboardingState>}
 */
export default class Onboarding extends React.Component<IOnboardingProps, IOnboardingState> {
  /**
   * The reference to the FlatList component
   * @type {FlatList}
   * @memberof Onboarding
   */
  public flatList?: any

  /**
   * Hotfix to swipe the pages
   * @type {{ itemVisiblePercentThreshold: number }}
   * @memberof Onboarding
   */
  public itemVisibleHotfix?: {
    itemVisiblePercentThreshold: number,
  }

  /**
   * Creates an instance of Onboarding.
   * @param {IOnboardingProps} props    props of the component
   * @memberof Onboarding
   */
  constructor(props: IOnboardingProps) {
    super(props)
    this.state = this._processProps()

    this._onSwipePageChange = this._onSwipePageChange.bind(this)
    this.itemVisibleHotfix = { itemVisiblePercentThreshold: 100 }
  }

  /**
   * Method that fire when the component is updated
   * @returns {void}
   * @memberof Onboarding
   */
  public componentDidUpdate(): void {
    const { transitionAnimationDuration } = this.props
    const { backgroundColorAnim } = this.state

    if (typeof backgroundColorAnim !== 'undefined') {
      Animated.timing(backgroundColorAnim, {
        duration: transitionAnimationDuration,
        toValue: 1,
      }).start()
    }
  }

  /**
   * Method that renders the component
   * @returns {Element}
   * @memberof Onboarding
   */
  public render(): TypeComponent {
    const { bottomBarHighlight, containerStyle, controlStatusBar, statusBarStyle } = this._processProps()
    const { backgroundColorAnim } = this.state
    const previousPage = this.getPreviousPage()
    const currentPage = this.getCurrentPage()
    const currentBackgroundColor = currentPage && currentPage.backgroundColor
    const isLight = tinycolor(currentBackgroundColor).getBrightness() > 180
    const barStyle = statusBarStyle || isLight ? 'dark-content' : 'light-content'
    let backgroundColor = currentBackgroundColor

    if (previousPage) {
      const previousBackgroundColor = previousPage.backgroundColor
      backgroundColor = (backgroundColorAnim as any).interpolate({
        inputRange: [0, 1],
        outputRange: [previousBackgroundColor, currentBackgroundColor],
      })
    }

    const containerProps = {
      onLayout: this._onLayout.bind(this),
      style: StyleSheet.flatten([{ backgroundColor, flex: 1, justifyContent: 'center' }, containerStyle]),
    }

    const containerPaginationProps = {
      style: StyleSheet.flatten([bottomBarHighlight && styles.overlay]),
    }

    const paginationProps = {
      ...this._paginationProps(),
      isLight,
    }

    return (
      <Animated.View { ...containerProps }>
        { controlStatusBar && <StatusBar barStyle={ barStyle } /> }

        <FlatList
          ref={ list => this.flatList = list }
          { ...this._flatlistProps() }
        />

        <SafeAreaView { ...containerPaginationProps }>
          <Pagination { ...paginationProps } />
        </SafeAreaView>
      </Animated.View>
    )
  }

  /**
   * Method that define 3 pages by default
   * @returns {IOnboardingPage[]}
   * @memberof Onboarding
   */
  public defaultPages(): IOnboardingPage[] {
    return [{
      backgroundColor: '#fff',
      image: <Image source={require('./../../assets/circle.png')} />,
      subtitle: 'Done with React Native Onboarding Swiper',
      title: 'Onboarding',
    }, {
      backgroundColor: '#fe6e58',
      image: <Image source={require('./../../assets/square.png')} />,
      subtitle: 'This is the subtitle that sumplements the title.',
      title: 'The Title',
    }, {
      backgroundColor: '#999',
      image: <Image source={require('./../../assets/triangle.png')} />,
      subtitle: 'Beautiful, isn\'t it?',
      title: 'Triangle',
    }]
  }

  /**
   * Method that renders the page in the component
   * @returns {TypeComponent}
   * @memberof Onboarding
   */
  public renderPage(data?: any): TypeComponent {
    const { allowFontScalingText, containerStyle, headerContainerStyle, imageContainerStyle, titleStyle, subtitleStyle } = this._processProps()
    const { height, width } = this.state

    const { item } = data
    const { backgroundColor, header, image, title, subtitle } = item as IOnboardingPage
    const isLight = tinycolor(backgroundColor).getBrightness() > 180

    const props: IPageProps = {
      containerStyle,
      header,
      image,
      isLight,
      subtitle,
      title,
      // tslint:disable-next-line: object-literal-sort-keys
      allowFontScaling: allowFontScalingText,
      headerContainerStyle: StyleSheet.flatten([headerContainerStyle, item.headerStyle]),
      height: height || Dimensions.get('window').height,
      imageContainerStyle: StyleSheet.flatten([imageContainerStyle, item.imageStyle]),
      subtitleStyle: StyleSheet.flatten([subtitleStyle, item.subtitleStyle]),
      titleStyle: StyleSheet.flatten([titleStyle, item.titleStyle]),
      width: width || Dimensions.get('window').width,
    }

    return <Page { ...props } />
  }

  /**
   * Method to get the current page
   * @returns {(IOnboardingPage | undefined)}
   * @memberof Onboarding
   */
  public getCurrentPage(): IOnboardingPage | undefined {
    const { pages } = this._processProps()
    const { currentPage } = this.state

    return pages[currentPage || 0] || undefined
  }

  /**
   * Method to get the previous page
   * @returns {(IOnboardingPage | undefined)}
   * @memberof Onboarding
   */
  public getPreviousPage(): IOnboardingPage | undefined {
    const { pages } = this._processProps()
    const { currentPage, previousPage } = this.state

    return currentPage !== previousPage && pages[previousPage || 0] || undefined
  }

  /**
   * Method to advance to the next page
   * @returns {void}
   * @memberof Onboarding
   */
  public goNext(): void {
    const { currentPage } = this.state
    this.flatList.scrollToIndex({
      animated: true,
      index: (currentPage || 0) + 1,
    })
  }

  /**
   * Method that fire when the button Done is pressed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onDone(): void {
    const { onDone } = this._processProps()

    if (onDone) {
      return onDone()
    }
  }

  /**
   * Method that fire when the button Skip is pressed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onSkip(): void {
    const { onSkip } = this._processProps()

    if (onSkip) {
      return onSkip()
    }

    return this._skipToLastPage()
  }

  /**
   * Method that fire when a pages change, this returns the current index page
   * @private
   * @param {number} [index]   The current index page
   * @returns {void}
   * @memberof Onboarding
   */
  private _onChangePage(index: number): void {
    const { onChangePage } = this._processProps()

    if (onChangePage) {
      return onChangePage(index as number)
    }
  }

  /**
   * Method thar fire when a page is swiped
   * @private
   * @param {object} data     Event of the flatlist change
   * @returns {void}
   * @memberof Onboarding
   */
  private _onSwipePageChange(data: any): void {
    const { viewableItems } = data
    const { currentPage } = this.state
    const index = viewableItems[0] && viewableItems[0].index

    if (typeof index !== 'undefined' && currentPage !== index) {
      this.setState((state: any) => {
        this._onChangePage(index)

        return {
          backgroundColorAnim: new Animated.Value(0),
          currentPage: index,
          previousPage: currentPage,
        }
      })
    }
  }

  /**
   * Method that fire when the layout is changed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onLayout(): void {
    const { height, width } = this.state
    const window = Dimensions.get('window')
    let _h = height
    let _w = width

    if (!_h) { _h = window.height }
    if (!_w) { _w = window.width }

    this.setState({ height: _h, width: _w })
  }

  /**
   * Method that changes to the last page
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _skipToLastPage(): void {
    const { pages, skipToPage } = this._processProps()
    let index = skipToPage

    if (!index) { index = pages.length - 1 }
    this.flatList.scrollToIndex({ index, animated: true })
  }

  /**
   * Method that process the props of the component
   * @private
   * @returns {IOnboardingState}
   * @memberof Onboarding
   */
  private _processProps(): IOnboardingState {
    const { DoneComponent, DotComponent, NextComponent, SkipComponent, allowFontScalingButtons, allowFontScalingText, backgroundColorAnim, bottomBarHeight, bottomBarHighlight, containerStyle, controlStatusBar, currentPage, defaultPages, doneLabel, donePosition, doneStyle, dotsPosition, dotsSize, dotsStyle, flatlistProps, headerContainerStyle, height, hideDone, hideDots, hideNext, hideSkip, imageContainerStyle, nextLabel, nextPosition, nextStyle, onChangePage, onDone, onSkip, options, pages, paginationProps, previousPage, skipLabel, skipPosition, skipStyle, skipToPage, statusBarStyle, subtitleStyle, titleStyle, transitionAnimationDuration, width } = this.props

    const params: IOnboardingState = {
      DoneComponent: (options && options.DoneComponent) || (DoneComponent || undefined),
      DotComponent: (options && options.DotComponent) || (DotComponent || undefined),
      NextComponent: (options && options.NextComponent) || (NextComponent || undefined),
      SkipComponent: (options && options.SkipComponent) || (SkipComponent || undefined),
      allowFontScalingButtons: (options && options.allowFontScalingButtons) || (allowFontScalingButtons || true),
      allowFontScalingText: (options && options.allowFontScalingText) || (allowFontScalingText || true),
      backgroundColorAnim: (options && options.backgroundColorAnim) || (backgroundColorAnim || new Animated.Value(0)),
      bottomBarHeight: (options && options.bottomBarHeight) || (bottomBarHeight || 60),
      bottomBarHighlight: (options && options.bottomBarHighlight) || (bottomBarHighlight || true),
      containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
      controlStatusBar: (options && options.controlStatusBar) || (controlStatusBar || true),
      currentPage: (options && options.currentPage) || (currentPage || 0),
      defaultPages: (options && options.defaultPages) || (defaultPages || false),
      doneLabel: (options && options.doneLabel) || (doneLabel || undefined),
      donePosition: (options && options.donePosition) || (donePosition || 'right'),
      doneStyle: (options && options.doneStyle) || (doneStyle || undefined),
      dotsPosition: (options && options.dotsPosition) || (dotsPosition || 'center'),
      dotsSize: (options && options.dotsSize) || (dotsSize || 6),
      dotsStyle: (options && options.dotsStyle) || (dotsStyle || undefined),
      flatlistProps: (options && options.flatlistProps) || (flatlistProps || undefined),
      headerContainerStyle: (options && options.headerContainerStyle) || (headerContainerStyle || undefined),
      height: (options && options.height) || (height || undefined),
      hideDone: (options && options.hideDone) || (hideDone || false),
      hideDots: (options && options.hideDots) || (hideDots || false),
      hideNext: (options && options.hideNext) || (hideNext || false),
      hideSkip: (options && options.hideSkip) || (hideSkip || false),
      imageContainerStyle: (options && options.imageContainerStyle) || (imageContainerStyle || undefined),
      nextLabel: (options && options.nextLabel) || (nextLabel || 'Next'),
      nextPosition: (options && options.nextPosition) || (nextPosition || 'right'),
      nextStyle: (options && options.nextStyle) || (nextStyle || undefined),
      onChangePage: (options && options.onChangePage) || (onChangePage || undefined),
      onDone: (options && options.onDone) || (onDone || undefined),
      onSkip: (options && options.onSkip) || (onSkip || undefined),
      pages: (options && options.pages) || (pages || []),
      paginationProps: (options && options.paginationProps) || (paginationProps || undefined),
      previousPage: (options && options.previousPage) || (previousPage || 0),
      skipLabel: (options && options.skipLabel) || (skipLabel || 'Skip'),
      skipPosition: (options && options.skipPosition) || (skipPosition || 'left'),
      skipStyle: (options && options.skipStyle) || (skipStyle || undefined),
      skipToPage: (options && options.skipToPage) || (skipToPage || undefined),
      statusBarStyle: (options && options.statusBarStyle) || (statusBarStyle || undefined),
      subtitleStyle: (options && options.subtitleStyle) || (subtitleStyle || undefined),
      titleStyle: (options && options.titleStyle) || (titleStyle || undefined),
      transitionAnimationDuration: (options && options.transitionAnimationDuration) || (transitionAnimationDuration || 500),
      width: (options && options.width) || (width || undefined),
    }

    return params
  }

  /**
   * Method that process the props for the FlatList
   * @private
   * @returns {FlatListProps<{}>}
   * @memberof Onboarding
   */
  private _flatlistProps(): FlatListProps<{}> {
    const { defaultPages, flatlistProps, pages } = this._processProps()
    const { width } = this.state

    return {
      data: defaultPages && this.defaultPages() || pages,
      extraData: width, // ensure that the list re-renders on orientation change
      horizontal: true,
      initialNumToRender: 1,
      keyExtractor: (item: any, index: number) => index.toString(),
      onViewableItemsChanged: this._onSwipePageChange,
      pagingEnabled: true,
      renderItem: this.renderPage.bind(this) as any,
      showsHorizontalScrollIndicator: false,
      viewabilityConfig: this.itemVisibleHotfix,
      ...flatlistProps,
    }
  }

  /**
   * Method that process the props for the pagination
   * @private
   * @returns {IPaginationProps}
   * @memberof Onboarding
   */
  private _paginationProps(): IPaginationProps {
    const { DoneComponent, DotComponent, NextComponent, SkipComponent, allowFontScalingButtons, bottomBarHeight, defaultPages, doneLabel, donePosition, doneStyle, dotsPosition, dotsSize, dotsStyle, hideDone, hideDots, hideNext, hideSkip, nextLabel, nextPosition, nextStyle, pages, paginationProps, skipLabel, skipPosition, skipStyle } = this._processProps()
    const { currentPage } = this.state

    return {
      DoneComponent,
      DotComponent,
      NextComponent,
      SkipComponent,
      bottomBarHeight,
      doneLabel,
      donePosition,
      doneStyle,
      dotsPosition,
      dotsSize,
      dotsStyle,
      hideDone,
      hideDots,
      hideNext,
      hideSkip,
      nextLabel,
      nextPosition,
      nextStyle,
      skipLabel,
      skipPosition,
      skipStyle,
      // tslint:disable-next-line: object-literal-sort-keys
      allowFontScaling: allowFontScalingButtons,
      currentPage: currentPage || 0,
      numPages: defaultPages && this.defaultPages().length || pages.length,
      onDone: this._onDone.bind(this),
      onSkip: this._onSkip.bind(this),
      onNext: this.goNext.bind(this),
      ...paginationProps,
    }
  }
}
