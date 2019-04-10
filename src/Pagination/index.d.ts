import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

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
  dotsPosition?: TypePaginationPosition
  dotsStyle?: TypeStyle
  hideDone?: boolean
  hideNext?: boolean
  hideSkip?: boolean
  isLight?: boolean
  leftContainerStyle?: TypeStyle
  nextLabel?: string
  nextPosition?: TypePaginationPosition
  numPages: number
  onDone: () => void
  onNext?: () => void
  onSkip?: () => void
  rightContainerStyle?: TypeStyle
  skipLabel?: string
  skipPosition?: TypePaginationPosition
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
 * Export default
 */
export default Pagination
