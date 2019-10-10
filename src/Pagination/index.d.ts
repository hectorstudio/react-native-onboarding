import * as React from 'react'
import { ViewProps, Animated } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'
import Button from '@ticmakers-react-native/button'

/**
 * Type to define the positions used in the Pagination component
 */
export type TypePaginationPosition = 'left' | 'center' | 'right' | undefined

/**
 * Interface to define the props of the Pagination component
 * @export
 * @interface IPaginationProps
 */
export interface IPaginationProps extends ViewProps {
  /**
   * A React-Native component to replace the Done button
   * @type {TypeComponent}
   */
  DoneComponent?: TypeComponent

  /**
   * A React-Native component to replace the pagination Dot
   * @type {TypeComponent}
   */
  DotComponent?: TypeComponent

  /**
   * A React-Native component to replace the Next button
   * @type {TypeComponent}
   */
  NextComponent?: TypeComponent

  /**
   * A React-Native component to replace the Previous button
   * @type {TypeComponent}
   */
  PrevComponent?: TypeComponent

  /**
   * A React-Native component to replace the Skip button
   * @type {TypeComponent}
   */
  SkipComponent?: TypeComponent

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @default true
   */
  allowFontScaling?: boolean

  /**
   * A number for the height of the bottom bar
   * @type {number}
   * @default 60
   */
  bottomBarHeight?: number

  /**
   * Apply a custom style to the pagination center container
   * @type {TypeStyle}
   */
  centerContainerStyle?: TypeStyle

  /**
   * Apply a custom style to the pagination container
   * @type {TypeStyle}
   */
  containerStyle?: TypeStyle

  /**
   * A number to define what is the current page
   * @type {number}
   * @default 0
   */
  currentPage?: number

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
   * Apply a custom color to the Dot selected
   * @type {string}
   */
  dotColorSelected?: string

  /**
   * Apply a custom style to the Dot selected
   * @type {TypeStyle}
   */
  dotSelectedStyle?: TypeStyle

  /**
   * Apply a custom color to all Dots
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
   * A boolean to set if the style is light or dark
   * @type {boolean}
   * @default true
   */
  isLight?: boolean

  /**
   * Apply a custom style to the pagination left container
   * @type {TypeStyle}
   */
  leftContainerStyle?: TypeStyle

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
   * A number of the total of the pages
   * @type {number}
   */
  numPages?: number

  /**
   * Method that fire when the button done is pressed
   * @type {Function}
   */
  onDone?: () => void

  /**
   * Method that fire when the button next is pressed
   * @type {Function}
   */
  onNext?: () => void

  /**
   * Method that fire when the button previous is pressed
   * @type {Function}
   */
  onPrev?: () => void

  /**
   * Method that fire when the button skip is pressed
   * @type {Function}
   */
  onSkip?: () => void

  /**
   * A text to show in the previous button
   * @type {string}
   * @default Previous
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
   * Apply a custom style to the pagination right container
   * @type {TypeStyle}
   */
  rightContainerStyle?: TypeStyle

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
   * Use to show the previous button
   * @type {boolean}
   */
  usePrevious?: boolean
}

/**
 * Interface to define the state of the Pagination component
 * @export
 * @interface IPaginationState
 */
export interface IPaginationState {
}

/**
 * Class to define the Pagination component used in Onboarding
 * @class Pagination
 * @extends {React.Component<IPaginationProps, IPaginationState>}
 */
declare class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  /**
   * Method that renders the component
   * @returns {TypeComponent}
   */
  public render(): TypeComponent

  /**
   * Method that renders the left container component
   * @returns {TypeComponent}
   */
  public LeftContent(): TypeComponent

  /**
   * Method that renders the center container component
   * @returns {TypeComponent}
   */
  public CenterContent(): TypeComponent

  /**
   * Method that renders the right container component
   * @returns {TypeComponent}
   */
  public RightContent(): TypeComponent

  /**
   * Method that renders the Done button
   * @returns {TypeComponent}
   */
  public Done(): TypeComponent

  /**
   * Method that renders the pagination Dots
   * @returns {TypeComponent}
   */
  public Dots(): TypeComponent

  /**
   * Method that renders the Next button
   * @returns {TypeComponent}
   */
  public Next(): TypeComponent

  /**
   * Method that renders the Previous button
   * @returns {TypeComponent}
   */
  public Prev(): TypeComponent

  /**
   * Methods that renders the Skip button
   * @returns {TypeComponent}
   */
  public Skip(): TypeComponent

  /**
   * Method to check if the current page is the first page
   * @returns {boolean}
   */
  public isFirstPage(): boolean

  /**
   * Method to check if the current page is the last page
   * @returns {boolean}
   */
  public isLastPage(): boolean

  /**
   * Method that renders the content of each container (left, center and right)
   * @private
   * @param {TypePaginationPosition} position     Position of the container
   * @returns {TypeComponent[]}
   */
  private _getContent(position: TypePaginationPosition): TypeComponent[]

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPaginationProps}
   */
  private _processProps(): IPaginationProps
}

/**
 * Class to define the component DoneButton used in Onboarding
 * @class DoneButton
 * @extends {Button}
 */
declare class DoneButton extends Button {
  /**
   * Initial value to the animation
   */
  public fadeAnimation?: Animated.Value

  /**
   * Duration of the animation
   */
  public fadeDuration?: number

  /**
   * Method that fire when the component is mounted
   * @returns {void}
   */
  public componentDidMount(): void

  /**
   * Method that renders the component
   * @returns {TypeComponent}
   */
  public render(): TypeComponent

  /**
   * Method that renders the button
   * @returns {TypeComponent}
   */
  public ButtonComponent(): TypeComponent
}

/**
 * Export default
 */
export default Pagination

export { DoneButton }
