import React from 'react'

/**
 * Interface to define the states of the OnBoarding component
 * @export
 * @interface IOnBoardingState
 */
export interface IOnBoardingState {
  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it (bool:true)
   */
  allowFontScaling?: boolean

  /**
   * A number for the height of the bottom bar (number:60)
   */
  bottomBarHeight?: number

  /**
   * A bool flag indicating whether the bottom bar should be highlighted (bool:true)
   */
  bottomBarHighlight?: boolean

  /**
   * Override the default container styles (object:{})
   */
  containerStyles?: object

  /**
   * A bool flag indicating whether the status bar should change with the background color (bool:true)
   */
  controlStatusBar?: boolean

  /**
   * Use 3 pages by default (bool:false)
   */
  defaultPages?: boolean

  /**
   * Additional props for the <FlatList> which holds all the pages (object:{})
   */
  flatlistProps?: object

  /**
   * Override the default image container styles (object:{})
   */
  imageContainerStyles?: object

  /**
   * A string OR a React-Native component for the Next label (string:Next)
   */
  nextLabel?: JSX.Element | string

  /**
   * A callback that is fired after the OnBoarding is completed (function:void)
   */
  onDone?: () => any

  /**
   * A callback that is fired if the OnBoarding is skipped (function:void)
   */
  onSkip?: () => any

  /**
   * A array of pages to show in the component (array:[])
   */
  pages?: Array<{
    /**
     * A background color. The color of the font and dots adapts to the background color (string)
     */
    backgroundColor: string

    /**
     * A React-Native component to display at the top of the page (Component|string)
     */
    image: JSX.Element | string

    /**
     * A string OR a React-Native component (string)
     */
    title: string

    /**
     * Modify styles of a specific page's title (object:{})
     */
    titleStyles?: object

    /**
     * A string OR a React-Native component (string)
     */
    subtitle?: string

    /**
     * Modify styles of a specific page's subtitle (object:{})
     */
    subTitleStyles?: object
  }>

  /**
   * A function that receives the page index as a parameter on page change (function)
   */
  pageIndexCallback?: (indexPage: number) => any

  /**
   * A bool flag indicating whether the Done checkmark button is visible (bool:true)
   */
  showDone?: boolean

  /**
   * A bool flag indicating whether the Next button is visible (bool:true)
   */
  showNext?: boolean

  /**
   * A bool flag indicating whether the Skip button is visible (bool:true)
   */
  showSkip?: boolean

  /**
   * A string OR a React-Native component for the Skip label (string:Skip)
   */
  skipLabel?: JSX.Element | string

  /**
   * When pressing skip, go to that page (ex. skipToPage={2}). If this prop is provided, ignores onSkip (number)
   */
  skipToPage?: number

  /**
   * Override the default subtitle styles (object:{})
   */
  subTitleStyles?: object

  /**
   * Theme name to apply styles in the OnBoarding component (string:default)
   */
  theme?: string

  /**
   * Override the default title styles (object:{})
   */
  titleStyles?: object

  /**
   * The duration in milliseconds for the animation of the background color for the page transition (number:500)
   */
  transitionAnimationDuration?: number
}

/**
 * Interface to define the props of the OnBoarding component
 * @export
 * @interface IOnBoardingProps
 * @extends {IOnBoardingState}
 */
export interface IOnBoardingProps extends IOnBoardingState {
  /**
   * Prop for group all the props of the OnBoarding component
   */
  options?: IOnBoardingState
}

/**
 * Declaration for OnBoarding component
 * @class OnBoarding
 * @extends {React.Component<IOnBoardingProps, IOnBoardingState>}
 */
declare class OnBoarding extends React.Component<IOnBoardingProps, IOnBoardingState> {
}

/**
 * Declaration for OnBoarding module
 */
declare module OnBoarding {
}

/**
 * Export default
 */
export default OnBoarding
