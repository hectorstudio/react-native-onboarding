import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Page component
 * @export
 * @interface IPageState
 */
export interface IPageState extends ViewProps {
  allowFontScaling?: boolean
  containerStyle?: TypeStyle
  header?: TypeComponent
  headerContainerStyle?: TypeStyle
  height?: number
  image: TypeComponent
  imageContainerStyle?: TypeStyle
  isLight?: boolean
  title: string | TypeComponent
  titleStyle?: TypeStyle
  subtitle?: string | TypeComponent
  subtitleStyle?: TypeStyle
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
 * Declaration for Page component
 * @class Page
 * @extends {React.Component<IPageProps, IPageState>}
 */
declare class Page extends React.Component<IPageProps, IPageState> {
}

/**
 * Export default
 */
export default Page
