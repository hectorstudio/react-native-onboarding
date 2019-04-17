import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import DotBase from './../Dot/Dot'
import { IDotsProps, IDotsState, TypeComponent, TypeStyle } from './../../index'
import styles from './styles'

/**
 * Class to define the Dots components used in Onboarding
 * @class Dots
 * @extends {React.Component<IDotsProps, IDotsState>}
 */
export default class Dots extends React.Component<IDotsProps, IDotsState> {
  /**
   * Method to renders the component
   * @returns {TypeComponent}
   * @memberof Dots
   */
  public render(): TypeComponent {
    const { DotComponent, color, currentPage, isLight, numPages, size } = this._processProps()

    return(
      <View { ...this.props } style={ this._processStyle() }>
        {[...Array(numPages)].map((_n: any, index: number) => (
          DotComponent ||
          <DotBase
            color={ color }
            isLight={ isLight }
            key={ index }
            selected={ index === currentPage }
            size={ size }
          />
        ))}
      </View>
    )
  }

  /**
   * Method to process the props
   * @private
   * @returns {IDotsState}
   * @memberof Dots
   */
  private _processProps(): IDotsState {
    const { DotComponent, color, currentPage, isLight, numPages, options, size, style } = this.props

    const props: IDotsState = {
      DotComponent: (options && options.DotComponent) || (DotComponent || undefined),
      color: (options && options.color) || (color || undefined),
      currentPage: (options && options.currentPage) || (currentPage || 0),
      isLight: (options && options.isLight) || (isLight || false),
      numPages: (options && options.numPages) || (numPages || undefined),
      size: (options && options.size) || (size || undefined),
      style: (options && options.style) || (style || undefined),
    }

    return props
  }

  /**
   * Method to process the prop style
   * @private
   * @returns {TypeStyle}
   * @memberof Dots
   */
  private _processStyle(): TypeStyle {
    const { style } = this._processProps()
    const _style: TypeStyle = {}

    return StyleSheet.flatten([styles.container, _style, style])
  }
}
