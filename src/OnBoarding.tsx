import * as React from 'react'
import { Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

// Interfaces
import { IOnBoardingProps, IOnBoardingState } from './../index'

// Themes
// import { styles, theme } from './styles'

/**
 * Class to define the component OnBoarding
 * @export
 * @extends {React.Component<IOnBoardingProps>}
 */
export default class OnBoarding extends React.Component<IOnBoardingProps, IOnBoardingState> {
  constructor(props: IOnBoardingProps) {
    super(props)

    this.state = this.processProps()
  }

  /**
   * Method that renders the component
   * @returns JSX.Element
   * @memberof OnBoarding
   */
  public render() {
    const { allowFontScaling, bottomBarHeight, bottomBarHighlight, containerStyles, controlStatusBar, defaultPages, flatlistProps, imageContainerStyles, nextLabel, onDone, onSkip, pages, pageIndexCallback, showDone, showNext, showSkip, skipLabel, skipToPage, subTitleStyles, titleStyles, transitionAnimationDuration } = this.processProps()

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
        onDone={() => onDone && this.onDoneAction()}
        onSkip={() => onSkip && this.onSkipAction()}
        pages={ !defaultPages ? pages : this.defaultPages() }
        pageIndexCallback={ (pageIndex?: number) => pageIndexCallback && this.pageIndexAction(pageIndex) }
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
   * @returns Array<{backgroundColor: string, image: JSX.Element|string, title: string, subtitle: string}>
   * @memberof OnBoarding
   */
  public defaultPages() {
    return [{
      backgroundColor: '#fff',
      image: <Image source={require('./../../assets/images/circle.png')} />,
      subtitle: 'Done with React Native Onboarding Swiper',
      title: 'Onboarding',
    }, {
      backgroundColor: '#fe6e58',
      image: <Image source={require('./../../assets/images/square.png')} />,
      subtitle: 'This is the subtitle that sumplements the title.',
      title: 'The Title',
    }, {
      backgroundColor: '#999',
      image: <Image source={require('./../../assets/images/triangle.png')} />,
      subtitle: 'Beautiful, isn\'t it?',
      title: 'Triangle',
    }]
  }

  /**
   * Method that fire when the button Done is pressed
   * @private
   * @returns Function|Void
   * @memberof OnBoarding
   */
  private onDoneAction() {
    const { onDone } = this.processProps()

    if (typeof onDone === 'function') {
      return onDone()
    }
  }

  /**
   * Method that fire when the button Skip is pressed
   * @private
   * @returns Function|Void
   * @memberof OnBoarding
   */
  private onSkipAction() {
    const { onSkip } = this.processProps()

    if (typeof onSkip === 'function') {
      return onSkip()
    }
  }

  private pageIndexAction(pageIndex?: number) {
    const { pageIndexCallback } = this.processProps()

    if (typeof pageIndexCallback === 'function') {
      return pageIndexCallback(pageIndex as number)
    }
  }

  private processProps(): IOnBoardingState {
    const params: IOnBoardingState = {
      allowFontScaling: (this.props.options && this.props.options.allowFontScaling) || (this.props.allowFontScaling || true),
      bottomBarHeight: (this.props.options && this.props.options.bottomBarHeight) || (this.props.bottomBarHeight || 60),
      bottomBarHighlight: (this.props.options && this.props.options.bottomBarHighlight) || (this.props.bottomBarHighlight || true),
      controlStatusBar: (this.props.options && this.props.options.controlStatusBar) || (this.props.controlStatusBar || true),
      defaultPages: (this.props.options && this.props.options.defaultPages) || (this.props.defaultPages || false),
      flatlistProps: (this.props.options && this.props.options.flatlistProps) || (this.props.flatlistProps || undefined),
      nextLabel: (this.props.options && this.props.options.nextLabel) || (this.props.nextLabel || 'Next'),
      onDone: (this.props.options && this.props.options.onDone) || (this.props.onDone || undefined),
      onSkip: (this.props.options && this.props.options.onSkip) || (this.props.onSkip || undefined),
      pageIndexCallback: (this.props.options && this.props.options.pageIndexCallback) || (this.props.pageIndexCallback || undefined),
      pages: (this.props.options && this.props.options.pages) || (this.props.pages || []),
      showDone: (this.props.options && this.props.options.showDone) || (this.props.showDone || true),
      showNext: (this.props.options && this.props.options.showNext) || (this.props.showNext || true),
      showSkip: (this.props.options && this.props.options.showSkip) || (this.props.showSkip || true),
      skipLabel: (this.props.options && this.props.options.skipLabel) || (this.props.skipLabel || 'Skip'),
      skipToPage: (this.props.options && this.props.options.skipToPage) || (this.props.skipToPage || undefined),
      theme: (this.props.options && this.props.options.theme) || (this.props.theme || 'default'),
      transitionAnimationDuration: (this.props.options && this.props.options.transitionAnimationDuration) || (this.props.transitionAnimationDuration || 350),
    }

    return params
  }
}
