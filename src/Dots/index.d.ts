import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Dot component
 * @export
 * @interface IDotsState
 */
export interface IDotsState extends ViewProps {
  /**
   * A React-Native component to replace the Dot
   * @type {TypeComponent}
   * @memberof IDotsState
   */
  DotComponent?: TypeComponent

  /**
   * Apply a custom color to the background of a Dot selected
   * @type {string}
   * @memberof IDotsState
   */
  color?: string

  /**
   * A number to define the current page
   * @type {number}
   * @memberof IDotsState
   */
  currentPage?: number

  /**
   * Set true to define if the styles is light or dark
   * @type {boolean}
   * @memberof IDotState
   */
  isLight?: boolean

  /**
   * A number of the total of the pages
   * @type {number}
   * @memberof IDotsState
   */
  numPages?: number

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
 * Class to define the Dots components used in Onboarding
 * @class Dots
 * @extends {React.Component<IDotsProps, IDotsState>}
 */
declare class Dots extends React.Component<IDotsProps, IDotsState> {
  /**
   * Method to renders the component
   * @returns {TypeComponent}
   * @memberof Dots
   */
  public render(): TypeComponent

  /**
   * Method to process the props
   * @private
   * @returns {IDotsState}
   * @memberof Dots
   */
  private _processProps(): IDotsState

  /**
   * Method to process the prop style
   * @private
   * @returns {TypeStyle}
   * @memberof Dots
   */
  private _processStyle(): TypeStyle
}


/**
 * Export default
 */
export default Dots
