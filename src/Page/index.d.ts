import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'
import { TypeImageSource, IImageProps } from '@ticmakers-react-native/image'

/**
 * Interface to define the props of the Page component
 * @interface IPageProps
 */
export interface IPageProps extends ViewProps {
  /**
   * Font scaling can cause troubles with high-resolution screens. You may want to disable it
   * @type {boolean}
   * @default true
   */
  allowFontScaling?: boolean

  /**
   * Set a custom background image in the page
   * @type {TypeImageSource}
   */
  backgroundImage?: TypeImageSource

  /**
   * Apply a custom style to the container of the component
   * @type {TypeStyle}
   */
  containerStyle?: TypeStyle

  /**
   * A React-Native component to replace the header
   * @type {TypeComponent}
   */
  header?: TypeComponent

  /**
   * Apply a custom style to the header
   * @type {TypeStyle}
   */
  headerContainerStyle?: TypeStyle

  /**
   * Define a custom height to the pages
   * @type {number}
   */
  height?: number

  /**
   * A React-Native component to replace the image
   * @type {TypeComponent}
   */
  image: TypeComponent | IImageProps

  /**
   * Apply a custom style to the image container
   * @type {TypeStyle}
   */
  imageContainerStyle?: TypeStyle

  /**
   * A boolean to set if the style is light or dark
   * @type {boolean}
   * @default true
   */
  isLight?: boolean

  /**
   * A React-Native component to replace the title
   * @type {(string | TypeComponent)}
   */
  title: string | TypeComponent

  /**
   * Apply a custom style to the title
   * @type {TypeStyle}
   */
  titleStyle?: TypeStyle

  /**
   * A React-Native component to replace the subtitle
   * @type {(string | TypeComponent)}
   */
  subtitle?: string | TypeComponent

  /**
   * Apply a custom style to the subtitle
   * @type {TypeStyle}
   */
  subtitleStyle?: TypeStyle

  /**
   * Define a custom width to the pages
   * @type {number}
   */
  width?: number
}

/**
 * Interface to define the props of the Page component
 * @interface IPageProps
 */
export interface IPageState {
  /** Define the height to the pages
   * @type {number}
   */
  height?: number

  /**
   * Define the width to the pages
   * @type {number}
   */
  width?: number
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
}

/**
 * Export default
 */
export default Page
