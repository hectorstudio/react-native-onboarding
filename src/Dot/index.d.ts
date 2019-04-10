import * as React from 'react'
import { ViewProps } from 'react-native'

import { TypeComponent, TypeStyle } from './../../index'

/**
 * Interface to define the states of the Dot component
 * @export
 * @interface IDotState
 */
export interface IDotState extends ViewProps {
  Component?: (props: IDotProps) => TypeComponent
  color?: string
  isLight?: boolean
  selected?: boolean
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
 * Declaration for Dot component
 * @class Dot
 * @extends {React.Component<IDotProps, IDotState>}
 */
declare class Dot extends React.Component<IDotProps, IDotState> {
}

/**
 * Export default
 */
export default Dot
