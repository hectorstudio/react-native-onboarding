import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import Dot from './../Dot/Dot'
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
    return(
      <View { ...this.props } style={ this._processStyle() }>
        { this.Dot() }
      </View>
    )
  }

  /**
   * Method that renders the Dot component
   * @returns {TypeComponent[]}
   * @memberof Dots
   */
  public Dot(): TypeComponent[] {
    const { DotComponent, color, currentPage, isLight, numPages, size } = this._processProps()
    const dots: TypeComponent[] = []

    // tslint:disable-next-line: no-increment-decrement
    for (let i = 0; i < (numPages as number); i++) {
      const props = {
        color,
        isLight,
        size,
        // tslint:disable-next-line: object-literal-sort-keys
        key: i,
        selected: i === currentPage,
      }

      if (this._isComponent(DotComponent)) {
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

  /**
   * Method to valid if a object is a component
   * @private
   * @param {*} kind    Object to validate
   * @returns {boolean}
   * @memberof Pagination
   */
  private _isComponent(kind: any): boolean {
    return (kind && kind._owner && kind._owner.constructor.name === 'FiberNode' && kind.$$typeof && kind.$$typeof.constructor.name === 'Symbol')
  }
}
