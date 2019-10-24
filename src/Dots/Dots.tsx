import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { AppHelper, TypeComponent, TypeStyle } from '@ticmakers-react-native/core'

import Dot from './../Dot/Dot'
import { IDotsProps, IDotsState, IDotProps } from './../../index'
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
   */
  public render(): TypeComponent {
    return(
      <View { ...this.props } style={ this._processStyle() }>
        { this.Dot() }
      </View>
    )
  }

  /**
   * Method that renders the Dot component
   * @returns {TypeComponent[]}
   */
  public Dot(): TypeComponent[] {
    const { DotComponent, color, colorSelected, currentPage, isLight, numPages, selectedStyle, size } = this._processProps()
    const dots: TypeComponent[] = []

    // tslint:disable-next-line: no-increment-decrement
    for (let i = 0; i < (numPages as number); i++) {
      const props: IDotProps = {
        color,
        colorSelected,
        isLight,
        selectedStyle,
        size,
        // tslint:disable-next-line: object-literal-sort-keys
        selected: i === currentPage,
        key: i,
      }

      if (AppHelper.isComponent(DotComponent) || AppHelper.isElement(DotComponent)) {
        dots.push(React.cloneElement(DotComponent as any, props))
      } else {
        dots.push(<Dot { ...props } />)
      }
    }

    return dots
  }

  /**
   * Method to process the props
   * @private
   * @returns {IDotsProps}
   */
  private _processProps(): IDotsProps {
    const { DotComponent, color, colorSelected, currentPage, isLight, numPages, selectedStyle, size, style } = this.props

    const props: IDotsProps = {
      DotComponent: (typeof DotComponent !== 'undefined' ? DotComponent : undefined),
      color: (typeof color !== 'undefined' ? color : undefined),
      colorSelected: (typeof colorSelected !== 'undefined' ? colorSelected : undefined),
      currentPage: (typeof currentPage !== 'undefined' ? currentPage : 0),
      isLight: (typeof isLight !== 'undefined' ? isLight : false),
      numPages: (typeof numPages !== 'undefined' ? numPages : undefined),
      selectedStyle: (typeof selectedStyle !== 'undefined' ? selectedStyle : undefined),
      size: (typeof size !== 'undefined' ? size : undefined),
      style: (typeof style !== 'undefined' ? style : undefined),
    }

    return props
  }

  /**
   * Method to process the prop style
   * @private
   * @returns {TypeStyle}
   */
  private _processStyle(): TypeStyle {
    const { style } = this._processProps()
    return StyleSheet.flatten([styles.container, style])
  }
}
