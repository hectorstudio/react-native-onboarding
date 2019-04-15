import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { IDotProps, IDotState, TypeComponent, TypeStyle } from './../../index'
import styles from './styles'

export default class Dot extends React.Component<IDotProps, IDotState> {
  public render(): TypeComponent {
    return(
      <View
        { ...this.props }
        style={ this._processStyle() }
      ></View>
    )
  }

  private _processProps(): IDotState {
    const { Component, color, isLight, options, selected, size, style } = this.props
    const props: IDotState = {
      Component: (options && options.Component) || (Component || undefined),
      color: (options && options.color) || (color || undefined),
      isLight: (options && options.isLight) || (isLight || false),
      selected: (options && options.selected) || (selected || false),
      size: (options && options.size) || (size || undefined),
      style: (options && options.style) || (style || undefined),
    }
    return props
  }

  private _processStyle(): TypeStyle {
    const { isLight, selected , style } = this._processProps()
    const _style: TypeStyle = {}

    if (isLight) {
      _style.backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'
    } else {
      _style.backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)'
    }

    return StyleSheet.flatten([styles.dot, _style, style])
  }
}
