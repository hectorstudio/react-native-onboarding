import * as React from 'react'
import { ViewProps, Animated } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'
import Button from '@ticmakers-react-native/button'

/**
 *
 */
export type TypePaginationPosition = 'left' | 'center' | 'right' | undefined

/**
 * Interface to define the states of the Pagination component
 * @export
 * @interface IPaginationState
 */
export interface IPaginationState extends ViewProps {
  DoneComponent?: TypeComponent
  DotComponent?: TypeComponent
  NextComponent?: TypeComponent
  SkipComponent?: TypeComponent
  allowFontScaling?: boolean
  bottomBarHeight?: number
  centerContainerStyle?: TypeStyle
  containerStyle?: TypeStyle
  currentPage: number
  doneLabel?: string
  donePosition?: TypePaginationPosition
  doneStyle?: TypeStyle
  dotsPosition?: TypePaginationPosition
  dotsSize?: number
  dotsStyle?: TypeStyle
  hideDone?: boolean
  hideDots?: boolean
  hideNext?: boolean
  hideSkip?: boolean
  isLight?: boolean
  leftContainerStyle?: TypeStyle
  nextLabel?: string
  nextPosition?: TypePaginationPosition
  nextStyle?: TypeStyle
  numPages: number
  onDone: () => void
  onNext?: () => void
  onSkip?: () => void
  rightContainerStyle?: TypeStyle
  skipLabel?: string
  skipPosition?: TypePaginationPosition
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
   */
  options?: IPaginationState
}

/**
 * Declaration for Pagination component
 * @class Pagination
 * @extends {React.Component<IPaginationProps, IPaginationState>}
 */
declare class Pagination extends React.Component<IPaginationProps, IPaginationState> {
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
}

/**
 * Export default
 */
export default Pagination

export { DoneButton }
