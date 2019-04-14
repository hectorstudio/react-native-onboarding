import * as React from 'react'
import { Image, Animated, Dimensions, StyleSheet } from 'react-native'
import tinycolor from 'tinycolor2'

import Page from './../Page/Page'
import { IOnboardingProps, IOnboardingState, IOnboardingPage, TypeComponent, IPageProps } from './../../index'
import styles from './styles'

/**
 * Class to define the component Onboarding
 * @class Onboarding
 * @extends {React.Component<IOnboardingProps, IOnboardingState>}
 */
export default class Onboarding extends React.Component<IOnboardingProps, IOnboardingState> {
  public itemVisibleHotfix?: any

  constructor(props: IOnboardingProps) {
    super(props)
    this.state = this._processProps()

    this._onSwipePageChange = this._onSwipePageChange.bind(this)
    this.itemVisibleHotfix = { itemVisiblePercentThreshold: 100 }
  }

  public componentDidUpdate(): void {
    const { transitionAnimationDuration } = this.props
    const { backgroundColorAnim } = this.state

    if (backgroundColorAnim) {
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
    const { allowFontScaling, bottomBarHeight, bottomBarHighlight, containerStyles, controlStatusBar, defaultPages, flatlistProps, imageContainerStyles, nextLabel, onDone, onSkip, pages, pageIndexCallback, showDone, showNext, showSkip, skipLabel, skipToPage, subTitleStyles, titleStyles, transitionAnimationDuration } = this._processProps()

    return (
      <Onboarding
        allowFontScaling={ allowFontScaling }
        bottomBarHeight={ bottomBarHeight }
        bottomBarHighlight={ bottomBarHighlight }
        containerStyles={ containerStyles }
        controlStatusBar={ controlStatusBar }
        flatlistProps={ flatlistProps }
        imageContainerStyles={ imageContainerStyles }
        nextLabel={ nextLabel }
        onDone={() => onDone && this._onDone()}
        onSkip={() => onSkip && this._onSkip()}
        pages={ !defaultPages ? pages : this.defaultPages() }
        pageIndexCallback={ (pageIndex: number) => pageIndexCallback && this._onChangePage(pageIndex) }
        showDone={ showDone }
        showNext={ showNext }
        showSkip={ showSkip }
        skipLabel={ skipLabel }
        skipToPage={ skipToPage }
        subTitleStyles={ subTitleStyles }
        titleStyles={ titleStyles }
        transitionAnimationDuration={ transitionAnimationDuration }
      />
    )
  }

  /**
   * Method that define 3 pages by default
   * @returns {PagesTypes}
   * @memberof Onboarding
   */
  public defaultPages(): IOnboardingPage[] {
    return [{
      backgroundColor: '#fff',
      image: <Image source={require('./../assets/circle.png')} />,
      subtitle: 'Done with React Native Onboarding Swiper',
      title: 'Onboarding',
    }, {
      backgroundColor: '#fe6e58',
      image: <Image source={require('./../assets/square.png')} />,
      subtitle: 'This is the subtitle that sumplements the title.',
      title: 'The Title',
    }, {
      backgroundColor: '#999',
      image: <Image source={require('./../assets/triangle.png')} />,
      subtitle: 'Beautiful, isn\'t it?',
      title: 'Triangle',
    }]
  }

  public renderPage = (data?: any) => {
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

  private _onSwipePageChange = (data: any) => {
    const { viewableItems } = data

    if (viewableItems[0] && this.state.currentPage !== viewableItems[0].index) {
      this.setState((state) => {
        this._onChangePage(viewableItems[0].index)

        return {
          backgroundColorAnim: new Animated.Value(0),
          currentPage: viewableItems[0].index,
          previousPage: state.currentPage,
        }
      })
    }
  }

  private _onLayout() {
    const { height, width } = this.state
    const window = Dimensions.get('window')
    let _h = height
    let _w = width

    if (!_h) { _h = window.height }
    if (!_w) { _w = window.width }

    this.setState({ height: _h, width: _w })
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
}
