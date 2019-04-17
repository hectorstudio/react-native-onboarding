import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Page component
 * @export
 * @interface IPageState
 */
export interface IPageState extends ViewProps {
  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @memberof IPageState
   * @default true
   */
  allowFontScaling?: boolean

  /**
   * Apply a custom style to the container of the component
   * @type {TypeStyle}
   * @memberof IPageState
   */
  containerStyle?: TypeStyle

  /**
   * A React-Native component to replace the header
   * @type {TypeComponent}
   * @memberof IPageState
   */
  header?: TypeComponent

  /**
   * Apply a custom style to the header
   * @type {TypeStyle}
   * @memberof IPageState
   */
  headerContainerStyle?: TypeStyle

  /**
   * Define a custom height to the pages
   * @type {number}
   * @memberof IPageState
   */
  height?: number

  /**
   * A React-Native component to replace the image
   * @type {TypeComponent}
   * @memberof IPageState
   */
  image: TypeComponent

  /**
   * Apply a custom style to the image container
   * @type {TypeStyle}
   * @memberof IPageState
   */
  imageContainerStyle?: TypeStyle

  /**
   * A boolean to set if the style is light or dark
   * @type {boolean}
   * @memberof IPageState
   * @default true
   */
  isLight?: boolean

  /**
   * A React-Native component to replace the title
   * @type {(string | TypeComponent)}
   * @memberof IPageState
   */
  title: string | TypeComponent

  /**
   * Apply a custom style to the title
   * @type {TypeStyle}
   * @memberof IPageState
   */
  titleStyle?: TypeStyle

  /**
   * A React-Native component to replace the subtitle
   * @type {(string | TypeComponent)}
   * @memberof IPageState
   */
  subtitle?: string | TypeComponent

  /**
   * Apply a custom style to the subtitle
   * @type {TypeStyle}
   * @memberof IPageState
   */
  subtitleStyle?: TypeStyle

  /**
   * Define a custom height to the pages
   * @type {number}
   * @memberof IPageState
   */
  width?: number
}

/**
 * Interface to define the props of the Page component
 * @export
 * @interface IPageProps
 * @extends {IPageState}
 */
export interface IPageProps extends IPageState {
  /**
   * Prop for group all the props of the Page component
   */
  options?: IPageState
}

/**
 * Class to define the component Page used in Onboarding
 * @class Page
 * @extends {React.Component<IPageProps, IPageState>}
 */
declare class Page extends React.Component<IPageProps, IPageState> {
  /**
   * Method that renders the component
   * @returns {TypeComponent}
   * @memberof Page
   */
  public render(): TypeComponent

  /**
   * Method that renders the Header component
   * @returns {TypeComponent}
   * @memberof Page
   */
  public Header(): TypeComponent

  /**
   * Method that renders the Image component
   * @returns {TypeComponent}
   * @memberof Page
   */
  public Image(): TypeComponent

  /**
   * Method that renders the Title component
   * @returns {TypeComponent}
   * @memberof Page
   */
  public Title(): TypeComponent

  /**
   * Method that renders the Subtitle component
   * @returns {TypeComponent}
   * @memberof Page
   */
  public Subtitle(): TypeComponent

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPageState}
   * @memberof Page
   */
  private _processProps(): IPageState

  /**
   * Method to process the prop style of the component
   * @private
   * @returns {TypeStyle}
   * @memberof Page
   */
  private _processStyle(): TypeStyle

  /**
   * Method to valid if a object is a component
   * @private
   * @param {*} kind Object to validate
   * @returns {boolean}
   * @memberof Page
   */
  private _isComponent(kind: any): boolean
}

/**
 * Export default
 */
export default Page
