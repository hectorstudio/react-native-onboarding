import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'
import { IDotProps, IDotState } from './../../index'
import styles from './styles'

/**
 * Class to define the Dot component used in Onboarding
 * @class Dot
 * @extends {React.Component<IDotProps, IDotState>}
 */
export default class Dot extends React.Component<IDotProps, IDotState> {
  /**
   * Method to renders the component
   * @returns {TypeComponent}
   */
  public render(): TypeComponent {
    return(
      <View
        { ...this.props }
        style={ this._processStyle() }
      ></View>
    )
  }

  /**
   * Method to process the props
   * @private
   * @returns {IDotProps}
   */
  private _processProps(): IDotProps {
    const { Component, color, colorSelected, isLight, selected, selectedStyle, size, style } = this.props

    const props: IDotProps = {
      Component: (typeof Component !== 'undefined' ? Component : undefined),
      color: (typeof color !== 'undefined' ? color : undefined),
      colorSelected: (typeof colorSelected !== 'undefined' ? colorSelected : undefined),
      isLight: (typeof isLight !== 'undefined' ? isLight : false),
      selected: (typeof selected !== 'undefined' ? selected : false),
      selectedStyle: (typeof selectedStyle !== 'undefined' ? selectedStyle : undefined),
      size: (typeof size !== 'undefined' ? size : undefined),
      style: (typeof style !== 'undefined' ? style : undefined),
    }

    return props
  }

  /**
   * Method to process the prop style for the container
   * @private
   * @returns {TypeStyle}
   */
  private _processStyle(): TypeStyle {
    const { color, colorSelected, isLight, selected, selectedStyle, size, style } = this._processProps()
    const _style: TypeStyle = {}

    if (isLight) {
      _style.backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'
    } else {
      _style.backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)'
    }

    if (color) {
      _style.backgroundColor = color
    }

    if (colorSelected && selected) {
      _style.backgroundColor = colorSelected
    }

    if (size) {
      _style.width = _style.height = size
      _style.borderRadius = size / 2
    }

    return StyleSheet.flatten([styles.dot, _style, selected && selectedStyle,  style])
  }
}
