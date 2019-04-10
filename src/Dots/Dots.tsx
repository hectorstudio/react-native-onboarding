import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import DotBase from './../Dot/Dot'
import { IDotsProps, IDotsState, TypeComponent, TypeStyle } from './../../index'
import styles from './styles'

export default class Dots extends React.Component<IDotsProps, IDotsState> {
  public render(): TypeComponent {
    const { Dot, color, currentPage, isLight, numPages, size } = this._processProps()

    return(
      <View { ...this.props } style={ this._processStyle() }>
        {[...Array(numPages)].map((_n: any, index: number) => (
          Dot ||
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

  private _processProps(): IDotsState {
    // tslint:disable-next-line: no-shadowed-variable
    const { Dot, color, currentPage, isLight, numPages, options, size, style } = this.props

    const props: IDotsState = {
      Dot: (options && options.Dot) || (Dot || undefined),
      color: (options && options.color) || (color || undefined),
      currentPage: (options && options.currentPage) || (currentPage || undefined),
      isLight: (options && options.isLight) || (isLight || false),
      numPages: (options && options.numPages) || (numPages || undefined),
      size: (options && options.size) || (size || undefined),
      style: (options && options.style) || (style || undefined),
    }
    return props
  }

  private _processStyle(): TypeStyle {
    const { style } = this._processProps()
    const _style: TypeStyle = {}

    return StyleSheet.flatten([styles.container, _style, style])
  }
}
