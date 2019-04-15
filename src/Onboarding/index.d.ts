import * as React from 'react'
import { TypeComponent, TypeStyle, TypePaginationPosition, IPaginationProps } from './../../index'
import { Animated } from 'react-native';

/**
 * Type to define the status bar styles
 */
export type TypeOnboardingStatusBarStyle = 'default' | 'light-content' | 'dark-content' | undefined

/**
 * Interface to define the properties of a page
 * @export
 * @interface IOnboardingPage
 */
export interface IOnboardingPage {
  /**
   * A background color. The color of the font and dots adapts to the background color
   * @type {string}
   * @default white
   * @memberof IOnboardingPage
   */
  backgroundColor?: string

  /**
   * A React-Native component to display at the header of the page
   * @type {TypeComponent}
   * @memberof IOnboardingPage
   */
  header?: TypeComponent
  headerStyle?: TypeStyle

  /**
   * A React-Native component to display at the top of the page
   * @type {TypeComponent}
   * @memberof IOnboardingPage
   */
  image: TypeComponent
  imageStyle?: TypeStyle

  /**
   * A string OR a React-Native component
   * @type {string}
   * @memberof IOnboardingPage
   */
  title: string

  /**
   * Modify styles of a specific page's title
   * @type {TypeStyle}
   * @memberof IOnboardingPage
   */
  titleStyle?: TypeStyle

  /**
   * A string OR a React-Native component
   * @type {string}
   * @memberof IOnboardingPage
   */
  subtitle?: string

  /**
   * Modify styles of a specific page's subtitle
   * @type {TypeStyle}
   */
  subtitleStyle?: TypeStyle
}

/**
 * Interface to define the states of the OnBoarding component
 * @export
 * @interface IOnboardingState
 */
export interface IOnboardingState {
  DoneComponent?: TypeComponent
  DotComponent?: TypeComponent
  NextComponent?: TypeComponent
  SkipComponent?: TypeComponent

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @default true
   */
  allowFontScalingButtons?: boolean

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @default true
   */
  allowFontScalingText?: boolean
  backgroundColorAnim?: Animated.Value | Animated.ValueXY

  /**
   * A number for the height of the bottom bar
   * @default 60
   */
  bottomBarHeight?: number

  /**
   * A bool flag indicating whether the bottom bar should be highlighted
   * @default true
   */
  bottomBarHighlight?: boolean

  /**
   * Override the default container styles
   */
  containerStyle?: object

  /**
   * A bool flag indicating whether the status bar should change with the background color
   * @default true
   */
  controlStatusBar?: boolean
  currentPage?: number

  /**
   * Use 3 pages by default
   * @default false
   */
  defaultPages?: boolean
  doneLabel?: string
  donePosition?: TypePaginationPosition
  doneStyle?: TypeStyle
  dotsPosition?: TypePaginationPosition
  dotsSize?: number
  dotsStyle?: TypeStyle

  /**
   * Additional props for the <FlatList> which holds all the pages
   */
  flatlistProps?: object
  headerContainerStyle?: TypeStyle
  height?: number

  /**
   * A bool flag indicating whether the Done checkmark button is not visible
   * @default false
   */
  hideDone?: boolean
  hideDots?: boolean

  /**
   * A bool flag indicating whether the Next button is not visible
   * @default false
   */
  hideNext?: boolean

  /**
   * A bool flag indicating whether the Skip button is not visible
   * @default false
   */
  hideSkip?: boolean

  /**
   * Override the default image container styles
   */
  imageContainerStyle?: object

  /**
   * A string OR a React-Native component for the Next label
   * @default Next
   */
  nextLabel?: string
  nextPosition?: TypePaginationPosition
  nextStyle?: TypeStyle

  /**
   * A function that receives the page index as a parameter on page change
   */
  onChangePage?: (index: number) => any

  /**
   * A callback that is fired after the OnBoarding is completed
   */
  onDone?: () => any

  /**
   * A callback that is fired if the OnBoarding is skipped
   */
  onSkip?: () => any

  /**
   * A array of pages to show in the component
   */
  pages: IOnboardingPage[]
  paginationProps?: IPaginationProps
  previousPage?: number

  /**
   * A string OR a React-Native component for the Skip label
   * @default Skip
   */
  skipLabel?: string
  skipPosition?: TypePaginationPosition
  skipStyle?: TypeStyle

  /**
   * When pressing skip, go to that page (ex. skipToPage={2}). If this prop is provided, ignores onSkip
   */
  skipToPage?: number
  statusBarStyle?: TypeOnboardingStatusBarStyle

  /**
   * Override the default subtitle styles
   */
  subtitleStyle?: object

  /**
   * Theme name to apply styles in the OnBoarding component
   * @default default
   */
  // theme?: string

  /**
   * Override the default title styles
   */
  titleStyle?: object

  /**
   * The duration in milliseconds for the animation of the background color for the page transition
   * @default 500
   */
  transitionAnimationDuration?: number
  width?: number
}

/**
 * Interface to define the props of the OnBoarding component
 * @export
 * @interface IOnboardingProps
 * @extends {IOnboardingState}
 */
export interface IOnboardingProps extends IOnboardingState {
  /**
   * Prop for group all the props of the OnBoarding component
   */
  options?: IOnboardingState
}

/**
 * Declaration for OnBoarding component
 * @class OnBoarding
 * @extends {React.Component<IOnboardingProps, IOnboardingState>}
 */
declare class Onboarding extends React.Component<IOnboardingProps, IOnboardingState> {
}

/**
 * Declaration for OnBoarding module
 */
declare module '@ticmakers-react-native/onboarding'

/**
 * Export default
 */
export default Onboarding
