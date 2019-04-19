import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Dot component
 * @export
 * @interface IDotState
 */
export interface IDotState extends ViewProps {
  /**
   * A React-Native component to replace this component
   * @memberof IDotState
   */
  Component?: TypeComponent

  /**
   * Apply a custom color to the background of a Dot selected
   * @type {string}
   * @memberof IDotState
   */
  color?: string

  /**
   * Set true to define if the styles is light or dark
   * @type {boolean}
   * @memberof IDotState
   */
  isLight?: boolean

  /**
   * Set true to define the Dot as selected
   * @type {boolean}
   * @memberof IDotState
   */
  selected?: boolean

  /**
   * A number to define the size of the Dot
   * @type {number}
   * @memberof IDotState
   */
  size?: number
}

/**
 * Interface to define the props of the Dot component
 * @export
 * @interface IDotProps
 * @extends {IDotState}
 */
export interface IDotProps extends IDotState {
  /**
   * Prop for group all the props of the Dot component
   */
  options?: IDotState
}

/**
 * Class to define the Dot component used in Onboarding
 * @class Dot
 * @extends {React.Component<IDotProps, IDotState>}
 */
declare class Dot extends React.Component<IDotProps, IDotState> {
  /**
   * Method to renders the component
   * @returns {TypeComponent}
   * @memberof Dot
   */
  public render(): TypeComponent

  /**
   * Method to process the props
   * @private
   * @returns {IDotState}
   * @memberof Dot
   */
  private _processProps(): IDotState

  /**
   * Method to process the prop style for the container
   * @private
   * @returns {TypeStyle}
   * @memberof Dot
   */
  private _processStyle(): TypeStyle
}

/**
 * Export default
 */
export default Dot
