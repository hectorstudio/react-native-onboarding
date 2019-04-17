import * as React from 'react'
import { Animated, FlatListProps } from 'react-native'

import {
  IPaginationProps,
  TypeComponent,
  TypePaginationPosition,
  TypeStyle,
} from './../../index'

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

  /**
   * Apply a custom style to the header
   * @type {TypeStyle}
   * @memberof IOnboardingPage
   */
  headerStyle?: TypeStyle

  /**
   * A React-Native component to display at the top of the page
   * @type {TypeComponent}
   * @memberof IOnboardingPage
   */
  image: TypeComponent

  /**
   * Apply a custom style to the image
   * @type {TypeStyle}
   * @memberof IOnboardingPage
   */
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
 * Interface to define the states of the Onboarding component
 * @export
 * @interface IOnboardingState
 */
export interface IOnboardingState {
  /**
   * A React-Native component to replace the done button
   * @type {TypeComponent}
   * @memberof IOnboardingState
   */
  DoneComponent?: TypeComponent

  /**
   * A React-Native component to replace the pagination dot
   * @type {TypeComponent}
   * @memberof IOnboardingState
   */
  DotComponent?: TypeComponent

  /**
   * A React-Native component to replace the next button
   * @type {TypeComponent}
   * @memberof IOnboardingState
   */
  NextComponent?: TypeComponent

  /**
   * A React-Native component to replace the skip button
   * @type {TypeComponent}
   * @memberof IOnboardingState
   */
  SkipComponent?: TypeComponent

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @memberof IOnboardingState
   * @default true
   */
  allowFontScalingButtons?: boolean

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @memberof IOnboardingState
   * @default true
   */
  allowFontScalingText?: boolean

  /**
   * A React-Animated value to define background animation
   * @type {(Animated.Value | Animated.ValueXY)}
   * @memberof IOnboardingState
   */
  backgroundColorAnim?: Animated.Value | Animated.ValueXY

  /**
   * A number for the height of the bottom bar
   * @type {number}
   * @memberof IOnboardingState
   * @default 60
   */
  bottomBarHeight?: number

  /**
   * A bool flag indicating whether the bottom bar should be highlighted
   * @type {boolean}
   * @memberof IOnboardingState
   * @default true
   */
  bottomBarHighlight?: boolean

  /**
   * Override the default container styles
   * @type {object}
   * @memberof IOnboardingState
   */
  containerStyle?: object

  /**
   * A bool flag indicating whether the status bar should change with the background color
   * @type {boolean}
   * @memberof IOnboardingState
   * @default true
   */
  controlStatusBar?: boolean

  /**
   * A number to define what is the current page
   * @type {number}
   * @memberof IOnboardingState
   * @default 0
   */
  currentPage?: number

  /**
   * Use 3 pages by default
   * @type {boolean}
   * @memberof IOnboardingState
   * @default false
   */
  defaultPages?: boolean

  /**
   * Define a text to show in done button
   * @type {string}
   * @memberof IOnboardingState
   */
  doneLabel?: string

  /**
   * Define the position where the done button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IOnboardingState
   * @default right
   */
  donePosition?: TypePaginationPosition

  /**
   * Apply a custom style to the done button
   * @type {TypeStyle}
   * @memberof IOnboardingState
   */
  doneStyle?: TypeStyle

  /**
   * Define the position where the pagination dots will be displayed
   * @type {TypePaginationPosition}
   * @memberof IOnboardingState
   * @default center
   */
  dotsPosition?: TypePaginationPosition

  /**
   * Apply a size to the pagination dots
   * @type {number}
   * @memberof IOnboardingState
   */
  dotsSize?: number

  /**
   * Apply a custom style to the pagination dots
   * @type {TypeStyle}
   * @memberof IOnboardingState
   */
  dotsStyle?: TypeStyle

  /**
   * Additional props for the <FlatList> which holds all the pages
   * @type {object}
   * @memberof IOnboardingState
   */
  flatlistProps?: object

  /**
   * Apply a custom style to the header container
   * @type {TypeStyle}
   * @memberof IOnboardingState
   */
  headerContainerStyle?: TypeStyle

  /**
   * Define a custom height to the pages
   * @type {number}
   * @memberof IOnboardingState
   */
  height?: number

  /**
   * Set true for hide the done button
   * @type {boolean}
   * @memberof IOnboardingState
   * @default false
   */
  hideDone?: boolean

  /**
   * Set true for hide the pagination dots
   * @type {boolean}
   * @memberof IOnboardingState
   * @default false
   */
  hideDots?: boolean

  /**
   * Set true to hide the next button
   * @type {boolean}
   * @memberof IOnboardingState
   * @default false
   */
  hideNext?: boolean

  /**
   * Set true to hide the skip button
   * @type {boolean}
   * @memberof IOnboardingState
   * @default false
   */
  hideSkip?: boolean

  /**
   * Override the default image container styles
   * @type {object}
   * @memberof IOnboardingState
   */
  imageContainerStyle?: object

  /**
   * A text to show in the next button
   * @type {string}
   * @memberof IOnboardingState
   * @default Next
   */
  nextLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IOnboardingState
   * @default right
   */
  nextPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the next button
   * @type {TypeStyle}
   * @memberof IOnboardingState
   */
  nextStyle?: TypeStyle

  /**
   * A function that receives the page index as a parameter on page change
   * @type {Function}
   * @memberof IOnboardingState
   */
  onChangePage?: (index: number) => any

  /**
   * A callback that is fired after the Onboarding is completed
   * @type {Function}
   * @memberof IOnboardingState
   */
  onDone?: () => any

  /**
   * A callback that is fired if the Onboarding is skipped
   * @type {Function}
   * @memberof IOnboardingState
   */
  onSkip?: () => any

  /**
   * A array of pages to show in the component
   * @type {IOnboardingPage[]}
   * @memberof IOnboardingState
   */
  pages: IOnboardingPage[]

  /**
   * Define additional props for the pagination
   * @type {IPaginationProps}
   * @memberof IOnboardingState
   */
  paginationProps?: IPaginationProps

  /**
   * A number to define what is the previous page
   * @type {number}
   * @memberof IOnboardingState
   */
  previousPage?: number

  /**
   * A text to show in the skip button
   * @type {string}
   * @memberof IOnboardingState
   * @default Skip
   */
  skipLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IOnboardingState
   * @default left
   */
  skipPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the skip button
   * @type {TypeStyle}
   * @memberof IOnboardingState
   */
  skipStyle?: TypeStyle

  /**
   * Index number of the page that will be displayed when the skip button is pressed
   * @type {number}
   * @memberof IOnboardingState
   */
  skipToPage?: number

  /**
   * Define a custom status bar style
   * @type {TypeOnboardingStatusBarStyle}
   * @memberof IOnboardingState
   * @default default
   */
  statusBarStyle?: TypeOnboardingStatusBarStyle

  /**
   * Override the default subtitle styles
   * @type {object}
   * @memberof IOnboardingState
   */
  subtitleStyle?: object

  /**
   * Override the default title styles
   * @type {object}
   * @memberof IOnboardingState
   */
  titleStyle?: object

  /**
   * The duration in milliseconds for the animation of the background color for the page transition
   * @type {number}
   * @memberof IOnboardingState
   * @default 500
   */
  transitionAnimationDuration?: number

  /**
   * Define a custom width to the pages
   * @type {number}
   * @memberof IOnboardingState
   */
  width?: number
}

/**
 * Interface to define the props of the Onboarding component
 * @export
 * @interface IOnboardingProps
 * @extends {IOnboardingState}
 */
export interface IOnboardingProps extends IOnboardingState {
  /**
   * Prop for group all the props of the Onboarding component
   */
  options?: IOnboardingState
}

/**
 * Class to define the component Onboarding
 * @class Onboarding
 * @extends {React.Component<IOnboardingProps, IOnboardingState>}
 */
declare class Onboarding extends React.Component<IOnboardingProps, IOnboardingState> {
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
   * Method that fire when the component is updated
   * @returns {void}
   * @memberof Onboarding
   */
  public componentDidUpdate(): void

  /**
   * Method that renders the component
   * @returns {Element}
   * @memberof Onboarding
   */
  public render(): TypeComponent

  /**
   * Method that define 3 pages by default
   * @returns {IOnboardingPage[]}
   * @memberof Onboarding
   */
  public defaultPages(): IOnboardingPage[]

  /**
   * Method that renders the page in the component
   * @returns {TypeComponent}
   * @memberof Onboarding
   */
  public renderPage(data?: any): TypeComponent

  /**
   * Method to get the current page
   * @returns {(IOnboardingPage | undefined)}
   * @memberof Onboarding
   */
  public getCurrentPage(): IOnboardingPage | undefined

  /**
   * Method to get the previous page
   * @returns {(IOnboardingPage | undefined)}
   * @memberof Onboarding
   */
  public getPreviousPage(): IOnboardingPage | undefined

  /**
   * Method to advance to the next page
   * @returns {void}
   * @memberof Onboarding
   */
  public goNext(): void

  /**
   * Method that fire when the button Done is pressed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onDone(): void

  /**
   * Method that fire when the button Skip is pressed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onSkip(): void

  /**
   * Method that fire when a pages change, this returns the current index page
   * @private
   * @param {number} [index]   The current index page
   * @returns {void}
   * @memberof Onboarding
   */
  private _onChangePage(index: number): void

  /**
   * Method thar fire when a page is swiped
   * @private
   * @param {object} data     Event of the flatlist change
   * @returns {void}
   * @memberof Onboarding
   */
  private _onSwipePageChange(data: any): void

  /**
   * Method that fire when the layout is changed
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _onLayout(): void

  /**
   * Method that changes to the last page
   * @private
   * @returns {void}
   * @memberof Onboarding
   */
  private _skipToLastPage(): void

  /**
   * Method that process the props of the component
   * @private
   * @returns {IOnboardingState}
   * @memberof Onboarding
   */
  private _processProps(): IOnboardingState

  /**
   * Method that process the props for the FlatList
   * @private
   * @returns {FlatListProps<{}>}
   * @memberof Onboarding
   */
  private _flatlistProps(): FlatListProps<{}>

  /**
   * Method that process the props for the pagination
   * @author (Set the text for this tag by adding docthis.authorName to your settings file.)
   * @private
   * @returns {IPaginationProps}
   * @memberof Onboarding
   */
  private _paginationProps(): IPaginationProps
}


/**
 * Export default
 */
export default Onboarding
