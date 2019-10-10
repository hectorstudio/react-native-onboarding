import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'

/**
 * Interface to define the props of the Dot component
 * @interface IDotsProps
 */
export interface IDotsProps extends ViewProps {
  /**
   * A React-Native component to replace the Dot
   * @type {TypeComponent}
   */
  DotComponent?: TypeComponent

  /**
   * Apply a custom color to the background of a Dot
   * @type {string}
   */
  color?: string

  /* Apply a custom color to the background of a Dot selected
   * @type {string}
   */
  colorSelected?: string

  /**
   * A number to define the current page
   * @type {number}
   */
  currentPage?: number

  /**
   * Set true to define if the styles is light or dark
   * @type {boolean}
   */
  isLight?: boolean

  /**
   * Unique key for each Dots component
   * @type {string}
   */
  key?: string | number

  /**
   * A number of the total of the pages
   * @type {number}
   */
  numPages?: number

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
 * @interface IDotsState
 */
export interface IDotsState {
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
   */
  public render(): TypeComponent

  /**
   * Method to process the props
   * @private
   * @returns {IDotsState}
   */
  private _processProps(): IDotsState

  /**
   * Method to process the prop style
   * @private
   * @returns {TypeStyle}
   */
  private _processStyle(): TypeStyle
}

/**
 * Export default
 */
export default Dots
