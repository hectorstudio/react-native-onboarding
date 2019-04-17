import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Dot component
 * @export
 * @interface IDotsState
 */
export interface IDotsState extends ViewProps {
  Dot?: TypeComponent
  color?: string
  currentPage?: number
  isLight?: boolean
  numPages?: number
  size?: number
}

/**
 * Interface to define the props of the Dot component
 * @export
 * @interface IDotsProps
 * @extends {IDotsState}
 */
export interface IDotsProps extends IDotsState {
  /**
   * Prop for group all the props of the Dot component
   */
  options?: IDotsState
}

/**
 * Declaration for Dot component
 * @class Dot
 * @extends {React.Component<IDotsProps, IDotsState>}
 */
declare class Dots extends React.Component<IDotsProps, IDotsState> {
}

/**
 * Export default
 */
export default Dots
