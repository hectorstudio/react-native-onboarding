import * as React from 'react'
import { Animated, FlatListProps } from 'react-native'

import { IImageProps, TypeImageSource } from '@ticmakers-react-native/image'
import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'
import { IPaginationProps, TypePaginationPosition } from './../../index'

/**
 * Type to define the status bar styles
 */
export type TypeOnboardingStatusBarStyle = 'default' | 'light-content' | 'dark-content' | undefined

/**
 * Interface to define the properties of a page
 * @interface IOnboardingPage
 */
export interface IOnboardingPage {
  /**
   * A background color. The color of the font and dots adapts to the background color
   * @type {string}
   * @default white
   */
  backgroundColor?: string

  /**
   * A background image for the page
   * @type {TypeImageSource}
   */
  backgroundImage?: TypeImageSource

  /**
   * A React Component or Element to show the page
   * @type {TypeComponent}
   */
  Component?: TypeComponent

  /**
   * Set a custom style to the container of the page
   * @type {TypeStyle}
   */
  containerStyle?: TypeStyle

  /**
   * A React-Native component to display at the header of the page
   * @type {TypeComponent}
   */
  header?: TypeComponent

  /**
   * Apply a custom style to the header
   * @type {TypeStyle}
   */
  headerStyle?: TypeStyle

  /**
   * A React-Native component to display at the top of the page
   * @type {TypeComponent}
   */
  image?: TypeComponent | IImageProps

  /**
   * Apply a custom style to the image
   * @type {TypeStyle}
   */
  imageStyle?: TypeStyle

  /**
   * A string OR a React-Native component
   * @type {string}
   */
  title?: string

  /**
   * Modify styles of a specific page's title
   * @type {TypeStyle}
   */
  titleStyle?: TypeStyle

  /**
   * A string OR a React-Native component
   * @type {string}
   */
  subtitle?: string

  /**
   * Modify styles of a specific page's subtitle
   * @type {TypeStyle}
   */
  subtitleStyle?: TypeStyle
}

/**
 * Interface to define the props of the Onboarding component
 * @interface IOnboardingProps
 */
export interface IOnboardingProps {
  /**
   * A React-Native component to replace the done button
   * @type {TypeComponent}
   */
  DoneComponent?: TypeComponent

  /**
   * A React-Native component to replace the pagination dot
   * @type {TypeComponent}
   */
  DotComponent?: TypeComponent

  /**
   * A React-Native component to replace the next button
   * @type {TypeComponent}
   */
  NextComponent?: TypeComponent

  /**
   * A React-Native component to replace the previous button
   * @type {TypeComponent}
   */
  PrevComponent?: TypeComponent

  /**
   * A React-Native component to replace the skip button
   * @type {TypeComponent}
   */
  SkipComponent?: TypeComponent

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @default true
   */
  allowFontScalingButtons?: boolean

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @default true
   */
  allowFontScalingText?: boolean

  /**
   * A React-Animated value to define background animation
   * @type {(Animated.Value | Animated.ValueXY)}
   */
  backgroundColorAnim?: Animated.Value | Animated.ValueXY

  /**
   * A number for the height of the bottom bar
   * @type {number}
   * @default 60
   */
  bottomBarHeight?: number

  /**
   * A bool flag indicating whether the bottom bar should be highlighted
   * @type {boolean}
   * @default true
   */
  bottomBarHighlight?: boolean

  /**
   * Set a custom style to the bottom bar (pagination style)
   * @type {TypeStyle}
   */
  bottomBarStyle?: TypeStyle

  /**
   * Override the default container styles
   * @type {object}
   */
  containerStyle?: object

  /**
   * A bool flag indicating whether the status bar should change with the background color
   * @type {boolean}
   * @default true
   */
  controlStatusBar?: boolean

  /**
   * A number to define what is the current page
   * @type {number}
   * @default 0
   */
  currentPage?: number

  /**
   * Use 3 pages by default
   * @type {boolean}
   * @default false
   */
  defaultPages?: boolean

  /**
   * Define a text to show in done button
   * @type {string}
   */
  doneLabel?: string

  /**
   * Define the position where the done button will be displayed
   * @type {TypePaginationPosition}
   * @default right
   */
  donePosition?: TypePaginationPosition

  /**
   * Apply a custom style to the done button
   * @type {TypeStyle}
   */
  doneStyle?: TypeStyle

  /**
   * Apply a custom color to the pagination Dot selected
   * @type {string}
   */
  dotColorSelected?: string

  /**
   * Apply a custom style to the pagination Dot selected
   * @type {TypeStyle}
   */
  dotSelectedStyle?: TypeStyle

  /**
   * Apply a custom color to all pagination Dot
   * @type {string}
   */
  dotsColor?: string

  /**
   * Define the position where the pagination dots will be displayed
   * @type {TypePaginationPosition}
   * @default center
   */
  dotsPosition?: TypePaginationPosition

  /**
   * Apply a size to the pagination dots
   * @type {number}
   */
  dotsSize?: number

  /**
   * Apply a custom style to the pagination dots
   * @type {TypeStyle}
   */
  dotsStyle?: TypeStyle

  /**
   * Additional props for the <FlatList> which holds all the pages
   * @type {object}
   */
  flatlistProps?: object

  /**
   * Apply a custom style to the header container
   * @type {TypeStyle}
   */
  headerContainerStyle?: TypeStyle

  /**
   * Define a custom height to the pages
   * @type {number}
   */
  height?: number

  /**
   * Set true for hide the done button
   * @type {boolean}
   * @default false
   */
  hideDone?: boolean

  /**
   * Set true for hide the pagination dots
   * @type {boolean}
   * @default false
   */
  hideDots?: boolean

  /**
   * Set true to hide the next button
   * @type {boolean}
   * @default false
   */
  hideNext?: boolean

  /**
   * Set true to hide the skip button
   * @type {boolean}
   * @default false
   */
  hideSkip?: boolean

  /**
   * Override the default image container styles
   * @type {object}
   */
  imageContainerStyle?: object

  /**
   * A text to show in the next button
   * @type {string}
   * @default Next
   */
  nextLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @default right
   */
  nextPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the next button
   * @type {TypeStyle}
   */
  nextStyle?: TypeStyle

  /**
   * A function that receives the page index as a parameter on page change
   * @type {Function}
   */
  onChangePage?: (index: number) => any

  /**
   * A callback that is fired after the Onboarding is completed
   * @type {Function}
   */
  onDone?: () => any

  /**
   * A callback that is fired if the Onboarding is skipped
   * @type {Function}
   */
  onSkip?: () => any

  /**
   * A array of pages to show in the component
   * @type {IOnboardingPage[]}
   */
  pages: IOnboardingPage[]

  /**
   * Define additional props for the pagination
   * @type {IPaginationProps}
   */
  paginationProps?: IPaginationProps

  /**
   * Define a text to show in previous button
   * @type {string}
   */
  prevLabel?: string

  /**
   * Define the position where the previous button will be displayed
   * @type {TypePaginationPosition}
   * @default left
   */
  prevPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the previous button
   * @type {TypeStyle}
   */
  prevStyle?: TypeStyle

  /**
   * A number to define what is the previous page
   * @type {number}
   */
  previousPage?: number

  /**
   * A text to show in the skip button
   * @type {string}
   * @default Skip
   */
  skipLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @default left
   */
  skipPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the skip button
   * @type {TypeStyle}
   */
  skipStyle?: TypeStyle

  /**
   * Index number of the page that will be displayed when the skip button is pressed
   * @type {number}
   */
  skipToPage?: number

  /**
   * Define a custom status bar style
   * @type {TypeOnboardingStatusBarStyle}
   * @default default
   */
  statusBarStyle?: TypeOnboardingStatusBarStyle

  /**
   * Override the default subtitle styles
   * @type {object}
   */
  subtitleStyle?: object

  /**
   * Override the default title styles
   * @type {object}
   */
  titleStyle?: object

  /**
   * The duration in milliseconds for the animation of the background color for the page transition
   * @type {number}
   * @default 500
   */
  transitionAnimationDuration?: number

  /**
   * Use to show the previous button
   * @type {boolean}
   */
  usePrevious?: boolean

  /**
   * Define a custom width to the pages
   * @type {number}
   */
  width?: number
}

/**
 * Interface to define the state of the Onboarding component
 * @interface IOnboardingState
 */
export interface IOnboardingState {
  /**
   * A React-Animated value to define background animation
   * @type {(Animated.Value | Animated.ValueXY)}
   */
  backgroundColorAnim: Animated.Value | Animated.ValueXY

  /**
   * A number to define what is the current page
   * @type {number}
   * @default 0
   */
  currentPage: number

  /**
   * Define a custom height to the pages
   * @type {number}
   */
  height: number

  /**
   * A number to define what is the previous page
   * @type {number}
   */
  previousPage: number

  /**
   * Define a custom width to the pages
   * @type {number}
   */
  width: number
}

/**
 * Class to define the component Onboarding
 * @class Onboarding
 * @extends {React.Component<IOnboardingProps, IOnboardingProps>}
 */
declare class Onboarding extends React.Component<IOnboardingProps, IOnboardingProps> {
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
   * Method that fire when the component is updated
   * @returns {void}
   */
  public componentDidUpdate(): void

  /**
   * Method that renders the component
   * @returns {Element}
   */
  public render(): TypeComponent

  /**
   * Method that define 3 pages by default
   * @returns {IOnboardingPage[]}
   */
  public defaultPages(): IOnboardingPage[]

  /**
   * Method that renders the page in the component
   * @returns {TypeComponent}
   */
  public renderPage(data?: any): TypeComponent

  /**
   * Method to get the current page
   * @returns {(IOnboardingPage | undefined)}
   */
  public getCurrentPage(): IOnboardingPage | undefined

  /**
   * Method to get the previous page
   * @returns {(IOnboardingPage | undefined)}
   */
  public getPreviousPage(): IOnboardingPage | undefined

  /**
   * Method to advance to the next page
   * @returns {void}
   */
  public goNext(): void

  /**
   * Method to back to the previous page
   * @returns {void}
   */
  public goPrev(): void

  /**
   * Method that fire when the button Done is pressed
   * @private
   * @returns {void}
   */
  private _onDone(): void

  /**
   * Method that fire when the button Skip is pressed
   * @private
   * @returns {void}
   */
  private _onSkip(): void

  /**
   * Method that fire when a pages change, this returns the current index page
   * @private
   * @param {number} [index]   The current index page
   * @returns {void}
   */
  private _onChangePage(index: number): void

  /**
   * Method thar fire when a page is swiped
   * @private
   * @param {object} data     Event of the flatlist change
   * @returns {void}
   */
  private _onSwipePageChange(data: any): void

  /**
   * Method that fire when the layout is changed
   * @private
   * @returns {void}
   */
  private _onLayout(): void

  /**
   * Method that changes to the last page
   * @private
   * @returns {void}
   */
  private _skipToLastPage(): void

  /**
   * Method that process the props of the component
   * @private
   * @returns {IOnboardingProps}
   */
  private _processProps(): IOnboardingProps

  /**
   * Method that process the props for the FlatList
   * @private
   * @returns {FlatListProps<{}>}
   */
  private _flatlistProps(): FlatListProps<{}>

  /**
   * Method that process the props for the pagination
   * @private
   * @returns {IPaginationProps}
   */
  private _paginationProps(): IPaginationProps
}

/**
 * Export default
 */
export default Onboarding
