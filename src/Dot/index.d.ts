import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'

/**
 * Interface to define the props of the Dot component
 * @interface IDotProps
 */
export interface IDotProps extends ViewProps {
  /**
   * A React-Native component to replace this component
   */
  Component?: TypeComponent

  /**
   * Apply a custom color to the background of a Dot
   * @type {string}
   */
  color?: string

  /**
   * Apply a custom color to the background of a Dot selected
   * @type {string}
   */
  colorSelected?: string

  /**
   * Set true to define if the styles is light or dark
   * @type {boolean}
   */
  isLight?: boolean

  /**
   * Unique key for each Dot component
   * @type {string}
   */
  key?: string | number

  /**
   * Set true to define the Dot as selected
   * @type {boolean}
   */
  selected?: boolean

  /**
   * Apply a custom style to the Dot selected
   * @type {TypeStyle}
   */
  selectedStyle?: TypeStyle

  /**
   * A number to define the size of the Dot
   * @type {number}
   */
  size?: number
}

/**
 * Interface to define the state of the Dot component
 * @interface IDotState
 */
export interface IDotState {
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
   * @returns {IDotProps}
   * @memberof Dot
   */
  private _processProps(): IDotProps

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
