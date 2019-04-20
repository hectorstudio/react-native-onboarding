import * as React from 'react'
import { ViewProps, Animated } from 'react-native'

import Button from '@ticmakers-react-native/button'
import { TypeComponent, TypeStyle } from './../../index'

/**
 * Type to define the positions used in the Pagination component
 */
export type TypePaginationPosition = 'left' | 'center' | 'right' | undefined

/**
 * Interface to define the states of the Pagination component
 * @export
 * @interface IPaginationState
 */
export interface IPaginationState extends ViewProps {
  /**
   * A React-Native component to replace the Done button
   * @type {TypeComponent}
   * @memberof IPaginationState
   */
  DoneComponent?: TypeComponent

  /**
   * A React-Native component to replace the pagination Dot
   * @type {TypeComponent}
   * @memberof IPaginationState
   */
  DotComponent?: TypeComponent

  /**
   * A React-Native component to replace the Next button
   * @type {TypeComponent}
   * @memberof IPaginationState
   */
  NextComponent?: TypeComponent

  /**
   * A React-Native component to replace the Skip button
   * @type {TypeComponent}
   * @memberof IPaginationState
   */
  SkipComponent?: TypeComponent

  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @memberof IPaginationState
   * @default true
   */
  allowFontScaling?: boolean

  /**
   * A number for the height of the bottom bar
   * @type {number}
   * @memberof IPaginationState
   * @default 60
   */
  bottomBarHeight?: number

  /**
   * Apply a custom style to the pagination center container
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  centerContainerStyle?: TypeStyle

  /**
   * Apply a custom style to the pagination container
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  containerStyle?: TypeStyle

  /**
   * A number to define what is the current page
   * @type {number}
   * @memberof IPaginationState
   * @default 0
   */
  currentPage: number

  /**
   * Define a text to show in done button
   * @type {string}
   * @memberof IPaginationState
   */
  doneLabel?: string

  /**
   * Define the position where the done button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IPaginationState
   * @default right
   */
  donePosition?: TypePaginationPosition

  /**
   * Apply a custom style to the done button
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  doneStyle?: TypeStyle

  /**
   * Define the position where the pagination dots will be displayed
   * @type {TypePaginationPosition}
   * @memberof IPaginationState
   * @default center
   */
  dotsPosition?: TypePaginationPosition

  /**
   * Apply a size to the pagination dots
   * @type {number}
   * @memberof IPaginationState
   */
  dotsSize?: number

  /**
   * Apply a custom style to the pagination dots
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  dotsStyle?: TypeStyle

  /**
   * Set true for hide the done button
   * @type {boolean}
   * @memberof IPaginationState
   * @default false
   */
  hideDone?: boolean

  /**
   * Set true for hide the pagination dots
   * @type {boolean}
   * @memberof IPaginationState
   * @default false
   */
  hideDots?: boolean

  /**
   * Set true to hide the next button
   * @type {boolean}
   * @memberof IPaginationState
   * @default false
   */
  hideNext?: boolean

  /**
   * Set true to hide the skip button
   * @type {boolean}
   * @memberof IPaginationState
   * @default false
   */
  hideSkip?: boolean

  /**
   * A boolean to set if the style is light or dark
   * @type {boolean}
   * @memberof IPaginationState
   * @default true
   */
  isLight?: boolean

  /**
   * Apply a custom style to the pagination left container
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  leftContainerStyle?: TypeStyle

  /**
   * A text to show in the next button
   * @type {string}
   * @memberof IPaginationState
   * @default Next
   */
  nextLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IPaginationState
   * @default right
   */
  nextPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the next button
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  nextStyle?: TypeStyle

  /**
   * A number of the total of the pages
   * @type {number}
   * @memberof IPaginationState
   */
  numPages: number

  /**
   * Method that fire when the button done is pressed
   * @type {Function}
   * @memberof IPaginationState
   */
  onDone: () => void

  /**
   * Method that fire when the button next is pressed
   * @type {Function}
   * @memberof IPaginationState
   */
  onNext?: () => void

  /**
   * Method that fire when the button skip is pressed
   * @type {Function}
   * @memberof IPaginationState
   */
  onSkip?: () => void

  /**
   * Apply a custom style to the pagination right container
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  rightContainerStyle?: TypeStyle

  /**
   * A text to show in the skip button
   * @type {string}
   * @memberof IPaginationState
   * @default Skip
   */
  skipLabel?: string

  /**
   * Define the position where the next button will be displayed
   * @type {TypePaginationPosition}
   * @memberof IPaginationState
   * @default left
   */
  skipPosition?: TypePaginationPosition

  /**
   * Apply a custom style to the skip button
   * @type {TypeStyle}
   * @memberof IPaginationState
   */
  skipStyle?: TypeStyle
}

/**
 * Interface to define the props of the Pagination component
 * @export
 * @interface IPaginationProps
 * @extends {IPaginationState}
 */
export interface IPaginationProps extends IPaginationState {
  /**
   * Prop for group all the props of the Pagination component
   * @type {IPaginationState}
   * @memberof IPaginationProps
   */
  options?: IPaginationState
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
   * @memberof Pagination
   */
  public render(): TypeComponent

  /**
   * Method that renders the left container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public LeftContent(): TypeComponent

  /**
   * Method that renders the center container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public CenterContent(): TypeComponent

  /**
   * Method that renders the right container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public RightContent(): TypeComponent


  /**
   * Method that renders the Done button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Done(): TypeComponent

  /**
   * Method that renders the pagination Dots
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Dots(): TypeComponent

  /**
   * Method that renders the Next button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Next(): TypeComponent

  /**
   * Methods that renders the Skip button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Skip(): TypeComponent

  /**
   * Method to check if the current page is the last page
   * @returns {boolean}
   * @memberof Pagination
   */
  public isLastPage(): boolean

  /**
   * Method that renders the content of each container (left, center and right)
   * @private
   * @param {TypePaginationPosition} position     Position of the container
   * @returns {TypeComponent[]}
   * @memberof Pagination
   */
  private _getContent(position: TypePaginationPosition): TypeComponent[]

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPaginationState}
   * @memberof Pagination
   */
  private _processProps(): IPaginationState

  /**
   * Method to valid if a object is a component
   * @private
   * @param {*} kind Object to validate
   * @returns {boolean}
   * @memberof Pagination
   */
  private _isComponent(kind: any): boolean
}

/**
 * Class to define the component DoneButton used in Onboarding
 * @class DoneButton
 * @extends {Button}
 */
declare class DoneButton extends Button {
  /**
   * Initial value to the animation
   * @memberof DoneButton
   */
  public fadeAnimation?: Animated.Value

  /**
   * Duration of the animation
   * @memberof DoneButton
   */
  public fadeDuration?: number

  /**
   * Method that fire when the component is mounted
   * @returns {void}
   * @memberof DoneButton
   */
  public componentDidMount(): void

  /**
   * Method that renders the component
   * @returns {TypeComponent}
   * @memberof DoneButton
   */
  public render(): TypeComponent

  /**
   * Method that renders the button
   * @returns {TypeComponent}
   * @memberof DoneButton
   */
  public ButtonComponent(): TypeComponent
}

/**
 * Export default
 */
export default Pagination

export { DoneButton }
