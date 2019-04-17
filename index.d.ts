import * as React from 'react'
import {
  RecursiveArray,
  RegisteredStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { IDotProps, IDotState } from './src/Dot/index'
import { IDotsProps, IDotsState } from './src/Dots/index'
import { IPageProps, IPageState } from './src/Page/index'
import { IPaginationProps, IPaginationState, TypePaginationPosition } from './src/Pagination/index'
import { IOnboardingProps, IOnboardingState, IOnboardingPage, TypeOnboardingStatusBarStyle } from './src/Onboarding/index'

/**
 * Type of component to typing components in the Input component
 */
export type TypeComponent =
  JSX.Element
  | React.ComponentClass
  | false
  | null
  | undefined

/**
 * Type to define the prop style of the Input component
 */
export type TypeStyle =
  false
  | ViewStyle
  | RegisteredStyle<ViewStyle>
  | RecursiveArray<false | ViewStyle | RegisteredStyle<ViewStyle> | null | undefined>
  | StyleProp<ViewStyle>[]
  | null
  | undefined

/**
 * Interface to define the properties of a page
 * @export
 * @interface IPage
 */
export interface IPage {
  /**
   * A background color. The color of the font and dots adapts to the background color
   */
  backgroundColor: string

  /**
   * A React-Native component to display at the top of the page
   */
  image: Element | string

  /**
   * A string OR a React-Native component
   */
  title: string

  /**
   * Modify styles of a specific page's title
   */
  titleStyles?: object

  /**
   * A string OR a React-Native component
   */
  subtitle: string

  /**
   * Modify styles of a specific page's subtitle
   */
  subTitleStyles?: object
}

/**
 * Type to define a array of pages
 */
export type PagesType = Array<IPage>

/**
 * Interface to define the states of the OnBoarding component
 * @export
 * @interface IOnBoardingState
 */
export interface IOnBoardingState {
  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @default true
   */
  allowFontScaling?: boolean

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
  containerStyles?: object

  /**
   * A bool flag indicating whether the status bar should change with the background color
   * @default true
   */
  controlStatusBar?: boolean

  /**
   * Use 3 pages by default
   * @default false
   */
  defaultPages?: boolean

  /**
   * Additional props for the <FlatList> which holds all the pages
   */
  flatlistProps?: object

  /**
   * Override the default image container styles
   */
  imageContainerStyles?: object

  /**
   * A string OR a React-Native component for the Next label
   * @default Next
   */
  nextLabel?: string | Element

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
  pages: PagesType

  /**
   * A function that receives the page index as a parameter on page change
   */
  pageIndexCallback?: (indexPage: number) => any

  /**
   * A bool flag indicating whether the Done checkmark button is visible
   * @default true
   */
  showDone?: boolean

  /**
   * A bool flag indicating whether the Next button is visible
   * @default true
   */
  showNext?: boolean

  /**
   * A bool flag indicating whether the Skip button is visible
   * @default true
   */
  showSkip?: boolean

  /**
   * A string OR a React-Native component for the Skip label
   * @default Skip
   */
  skipLabel?: string | Element

  /**
   * When pressing skip, go to that page (ex. skipToPage={2}). If this prop is provided, ignores onSkip
   */
  skipToPage?: number

  /**
   * Override the default subtitle styles
   */
  subTitleStyles?: object

  /**
   * Theme name to apply styles in the OnBoarding component
   * @default default
   */
  theme?: string

  /**
   * Override the default title styles
   */
  titleStyles?: object

  /**
   * The duration in milliseconds for the animation of the background color for the page transition
   * @default 500
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
 * Declaration for OnBoarding module
 */
declare module '@ticmakers-react-native/onboarding'

export {
  IDotProps,
  IDotState,

  IDotsProps,
  IDotsState,

  IPageProps,
  IPageState,

  IPaginationProps,
  IPaginationState,
  TypePaginationPosition,

  IOnboardingProps,
  IOnboardingState,
  IOnboardingPage,
  TypeOnboardingStatusBarStyle,
}
