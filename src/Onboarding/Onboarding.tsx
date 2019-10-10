import * as React from 'react'
import { Animated, Dimensions, StyleSheet, StatusBar, FlatList, SafeAreaView, FlatListProps } from 'react-native'
import * as tinycolor from 'tinycolor2'

import { AppHelper, TypeComponent } from '@ticmakers-react-native/core'
import Image, { IImageProps } from '@ticmakers-react-native/image'

import Page from './../Page/Page'
import Pagination from './../Pagination/Pagination'
import { IOnboardingProps, IOnboardingState, IOnboardingPage, IPageProps, IPaginationProps } from './../../index'
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
   */
  public flatList?: any

  /**
   * Hotfix to swipe the pages
   * @type {{ itemVisiblePercentThreshold: number }}
   */
  public itemVisibleHotfix?: {
    itemVisiblePercentThreshold: number,
  }

  /**
   * Creates an instance of Onboarding.
   * @param {IOnboardingProps} props    props of the component
   */
  constructor(props: IOnboardingProps) {
    super(props)

    const { backgroundColorAnim, currentPage, height, previousPage, width } = this._processProps() as any
    this.state = {
      backgroundColorAnim,
      currentPage,
      height,
      previousPage,
      width,
    }

    this._onSwipePageChange = this._onSwipePageChange.bind(this)
    this.itemVisibleHotfix = { itemVisiblePercentThreshold: 100 }
  }

  /**
   * Method that fire when the component is updated
   * @returns {void}
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
   */
  public render(): TypeComponent {
    const { bottomBarHighlight, containerStyle, controlStatusBar, statusBarStyle } = this._processProps()
    const { backgroundColorAnim } = this.state
    const previousPage = this.getPreviousPage()
    const currentPage = this.getCurrentPage()
    const currentBackgroundColor = (currentPage && currentPage.backgroundColor) || '#FFF'
    const isLight = tinycolor(currentBackgroundColor).getBrightness() > 180
    const barStyle = statusBarStyle || isLight ? 'dark-content' : 'light-content'
    let backgroundColor = currentBackgroundColor

    if (previousPage) {
      const previousBackgroundColor = previousPage.backgroundColor || '#FFF'
      backgroundColor = (backgroundColorAnim as any).interpolate({
        inputRange: [0, 1],
        outputRange: [previousBackgroundColor, currentBackgroundColor],
      })
    }

    const containerProps = {
      onLayout: this._onLayout.bind(this),
      style: StyleSheet.flatten([styles.container, { backgroundColor }, containerStyle]),
    }

    const containerPaginationProps = {
      style: StyleSheet.flatten([styles.paginationContainer, bottomBarHighlight && styles.overlay]),
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
   */
  public renderPage(data?: any): TypeComponent {
    const { allowFontScalingText, containerStyle, headerContainerStyle, imageContainerStyle, titleStyle, subtitleStyle } = this._processProps()
    const { height, width } = this.state

    const { item } = data
    const { backgroundColor, backgroundImage, Component, header, image, title, subtitle } = item as IOnboardingPage
    const isLight = tinycolor(backgroundColor).getBrightness() > 180

    if (Component && (AppHelper.isComponent(Component) || AppHelper.isElement(Component))) {
      return React.cloneElement(Component as any)
    }

    const props: IPageProps = {
      backgroundImage,
      containerStyle,
      header,
      image,
      isLight,
      subtitle,
      title,
      // tslint:disable-next-line: object-literal-sort-keys
      allowFontScaling: allowFontScalingText,
      headerContainerStyle: StyleSheet.flatten([headerContainerStyle, item.headerStyle]),
      height: height || Dimensions.get('screen').height,
      imageContainerStyle: StyleSheet.flatten([imageContainerStyle, item.imageStyle]),
      subtitleStyle: StyleSheet.flatten([subtitleStyle, item.subtitleStyle]),
      titleStyle: StyleSheet.flatten([titleStyle, item.titleStyle]),
      width: width || Dimensions.get('screen').width,
    }

    return <Page { ...props } />
  }

  /**
   * Method to get the current page
   * @returns {(IOnboardingPage | undefined)}
   */
  public getCurrentPage(): IOnboardingPage | undefined {
    const { defaultPages, pages } = this._processProps()
    const { currentPage } = this.state
    let _pages = pages

    if (defaultPages) {
      _pages = this.defaultPages()
    }

    return _pages[currentPage || 0] || undefined
  }

  /**
   * Method to get the previous page
   * @returns {(IOnboardingPage | undefined)}
   */
  public getPreviousPage(): IOnboardingPage | undefined {
    const { defaultPages, pages } = this._processProps()
    const { currentPage, previousPage } = this.state
    let _pages = pages

    if (defaultPages) {
      _pages = this.defaultPages()
    }

    return currentPage !== previousPage && _pages[previousPage || 0] || undefined
  }

  /**
   * Method to advance to the next page
   * @returns {void}
   */
  public goNext(): void {
    const { currentPage } = this.state
    this.flatList.scrollToIndex({
      animated: true,
      index: (currentPage || 0) + 1,
    })
  }

  /**
   * Method to back to the previous page
   * @returns {void}
   */
  public goPrev(): void {
    const { currentPage } = this.state
    this.flatList.scrollToIndex({
      animated: true,
      index: currentPage > 0 ? currentPage - 1 : 0,
    })
  }

  /**
   * Method that fire when the button Done is pressed
   * @private
   * @returns {void}
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
   */
  private _onChangePage(index: number): void {
    const { onChangePage } = this._processProps()

    if (onChangePage) {
      return onChangePage(index)
    }
  }

  /**
   * Method thar fire when a page is swiped
   * @private
   * @param {object} data     Event of the flatlist change
   * @returns {void}
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
          previousPage: state.currentPage,
        }
      })
    }
  }

  /**
   * Method that fire when the layout is changed
   * @private
   * @returns {void}
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
   */
  private _skipToLastPage(): void {
    const { defaultPages, pages, skipToPage } = this._processProps()
    let index = skipToPage
    let _pages = pages

    if (defaultPages) {
      _pages = this.defaultPages()
    }

    if (!index) { index = _pages.length - 1 }
    this.flatList.scrollToIndex({ index, animated: true })
  }

  /**
   * Method that process the props of the component
   * @private
   * @returns {IOnboardingProps}
   */
  private _processProps(): IOnboardingProps {
    const { DoneComponent, DotComponent, NextComponent, PrevComponent, SkipComponent, allowFontScalingButtons, allowFontScalingText, backgroundColorAnim, bottomBarHeight, bottomBarHighlight, containerStyle, controlStatusBar, currentPage, defaultPages, doneLabel, donePosition, doneStyle, dotColorSelected, dotSelectedStyle, dotsColor, dotsPosition, dotsSize, dotsStyle, flatlistProps, headerContainerStyle, height, hideDone, hideDots, hideNext, hideSkip, imageContainerStyle, nextLabel, nextPosition, nextStyle, onChangePage, onDone, onSkip, pages, paginationProps, prevLabel, prevPosition, prevStyle, previousPage, skipLabel, skipPosition, skipStyle, skipToPage, statusBarStyle, subtitleStyle, titleStyle, transitionAnimationDuration, usePrevious, width } = this.props

    const params: IOnboardingProps = {
      DoneComponent: (typeof DoneComponent !== 'undefined' ? DoneComponent : undefined),
      DotComponent: (typeof DotComponent !== 'undefined' ? DotComponent : undefined),
      NextComponent: (typeof NextComponent !== 'undefined' ? NextComponent : undefined),
      PrevComponent: (typeof PrevComponent !== 'undefined' ? PrevComponent : undefined),
      SkipComponent: (typeof SkipComponent !== 'undefined' ? SkipComponent : undefined),
      allowFontScalingButtons: (typeof allowFontScalingButtons !== 'undefined' ? allowFontScalingButtons : true),
      allowFontScalingText: (typeof allowFontScalingText !== 'undefined' ? allowFontScalingText : true),
      backgroundColorAnim: (typeof backgroundColorAnim !== 'undefined' ? backgroundColorAnim : new Animated.Value(0)),
      bottomBarHeight: (typeof bottomBarHeight !== 'undefined' ? bottomBarHeight : 60),
      bottomBarHighlight: (typeof bottomBarHighlight !== 'undefined' ? bottomBarHighlight : true),
      containerStyle: (typeof containerStyle !== 'undefined' ? containerStyle : undefined),
      controlStatusBar: (typeof controlStatusBar !== 'undefined' ? controlStatusBar : true),
      currentPage: (typeof currentPage !== 'undefined' ? currentPage : 0),
      defaultPages: (typeof defaultPages !== 'undefined' ? defaultPages : false),
      doneLabel: (typeof doneLabel !== 'undefined' ? doneLabel : undefined),
      donePosition: (typeof donePosition !== 'undefined' ? donePosition : 'right'),
      doneStyle: (typeof doneStyle !== 'undefined' ? doneStyle : undefined),
      dotColorSelected: (typeof dotColorSelected !== 'undefined' ? dotColorSelected : undefined),
      dotSelectedStyle: (typeof dotSelectedStyle !== 'undefined' ? dotSelectedStyle : undefined),
      dotsColor: (typeof dotsColor !== 'undefined' ? dotsColor : undefined),
      dotsPosition: (typeof dotsPosition !== 'undefined' ? dotsPosition : 'center'),
      dotsSize: (typeof dotsSize !== 'undefined' ? dotsSize : 6),
      dotsStyle: (typeof dotsStyle !== 'undefined' ? dotsStyle : undefined),
      flatlistProps: (typeof flatlistProps !== 'undefined' ? flatlistProps : undefined),
      headerContainerStyle: (typeof headerContainerStyle !== 'undefined' ? headerContainerStyle : undefined),
      height: (typeof height !== 'undefined' ? height : undefined),
      hideDone: (typeof hideDone !== 'undefined' ? hideDone : false),
      hideDots: (typeof hideDots !== 'undefined' ? hideDots : false),
      hideNext: (typeof hideNext !== 'undefined' ? hideNext : false),
      hideSkip: (typeof hideSkip !== 'undefined' ? hideSkip : false),
      imageContainerStyle: (typeof imageContainerStyle !== 'undefined' ? imageContainerStyle : undefined),
      nextLabel: (typeof nextLabel !== 'undefined' ? nextLabel : 'Next'),
      nextPosition: (typeof nextPosition !== 'undefined' ? nextPosition : 'right'),
      nextStyle: (typeof nextStyle !== 'undefined' ? nextStyle : undefined),
      onChangePage: (typeof onChangePage !== 'undefined' ? onChangePage : undefined),
      onDone: (typeof onDone !== 'undefined' ? onDone : undefined),
      onSkip: (typeof onSkip !== 'undefined' ? onSkip : undefined),
      pages: (typeof pages !== 'undefined' ? pages : []),
      paginationProps: (typeof paginationProps !== 'undefined' ? paginationProps : undefined),
      prevLabel: (typeof prevLabel !== 'undefined' ? prevLabel : 'Previous'),
      prevPosition: (typeof prevPosition !== 'undefined' ? prevPosition : 'left'),
      prevStyle: (typeof prevStyle !== 'undefined' ? prevStyle : undefined),
      previousPage: (typeof previousPage !== 'undefined' ? previousPage : 0),
      skipLabel: (typeof skipLabel !== 'undefined' ? skipLabel : 'Skip'),
      skipPosition: (typeof skipPosition !== 'undefined' ? skipPosition : 'left'),
      skipStyle: (typeof skipStyle !== 'undefined' ? skipStyle : undefined),
      skipToPage: (typeof skipToPage !== 'undefined' ? skipToPage : undefined),
      statusBarStyle: (typeof statusBarStyle !== 'undefined' ? statusBarStyle : undefined),
      subtitleStyle: (typeof subtitleStyle !== 'undefined' ? subtitleStyle : undefined),
      titleStyle: (typeof titleStyle !== 'undefined' ? titleStyle : undefined),
      transitionAnimationDuration: (typeof transitionAnimationDuration !== 'undefined' ? transitionAnimationDuration : 500),
      usePrevious: (typeof usePrevious !== 'undefined' ? usePrevious : false),
      width: (typeof width !== 'undefined' ? width : undefined),
    }

    return params
  }

  /**
   * Method that process the props for the FlatList
   * @private
   * @returns {FlatListProps<{}>}
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
   */
  private _paginationProps(): IPaginationProps {
    const { DoneComponent, DotComponent, NextComponent, PrevComponent, SkipComponent, allowFontScalingButtons, bottomBarHeight, defaultPages, doneLabel, donePosition, doneStyle, dotColorSelected, dotSelectedStyle, dotsColor, dotsPosition, dotsSize, dotsStyle, hideDone, hideDots, hideNext, hideSkip, nextLabel, nextPosition, nextStyle, pages, paginationProps, prevLabel, prevPosition, prevStyle, skipLabel, skipPosition, skipStyle, usePrevious } = this._processProps()
    const { currentPage } = this.state

    return {
      DoneComponent,
      DotComponent,
      NextComponent,
      PrevComponent,
      SkipComponent,
      bottomBarHeight,
      doneLabel,
      donePosition,
      doneStyle,
      dotColorSelected,
      dotSelectedStyle,
      dotsColor,
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
      prevLabel,
      prevPosition,
      prevStyle,
      skipLabel,
      skipPosition,
      skipStyle,
      usePrevious,
      // tslint:disable-next-line: object-literal-sort-keys
      allowFontScaling: allowFontScalingButtons,
      currentPage: currentPage || 0,
      numPages: defaultPages && this.defaultPages().length || pages.length,
      onDone: this._onDone.bind(this),
      onSkip: this._onSkip.bind(this),
      onNext: this.goNext.bind(this),
      onPrev: this.goPrev.bind(this),
      ...paginationProps,
    }
  }
}
