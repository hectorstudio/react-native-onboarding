import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Dots from './../Dots/Dots'
import { IPaginationProps, IPaginationState, TypeComponent, TypeStyle } from './../../index'
import styles from './styles'

export default class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  public render(): TypeComponent {
    const { bottomBarHeight, containerStyle } = this._processProps()
    const _style = StyleSheet.flatten([{ height: bottomBarHeight, ...styles.container }, containerStyle])

    return(
      <View style={ _style }>
        { this.LeftContent() }
        { this.CenterContent() }
        { this.RightContent() }
      </View>
    )
  }

  public LeftContent(): TypeComponent {
    const { leftContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.buttonLeft, leftContainerStyle])

    return <View style={ _style }>{ this._getLeftContent() }</View>
  }

  public CenterContent(): TypeComponent {
    const { centerContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([centerContainerStyle])

    return <View style={ _style }>{ this._getCenterContent() }</View>
  }

  public RightContent(): TypeComponent {
    const { rightContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.buttonRight, rightContainerStyle])

    return <View style={ _style }>{ this._getRightContent() }</View>
  }

  public Dots(): TypeComponent {
    const { DotComponent, currentPage, dotsStyle, isLight, numPages } = this._processProps()
    const props = {
      currentPage,
      isLight,
      numPages,
      style: StyleSheet.flatten([styles.dots, dotsStyle]),
      // tslint:disable-next-line: object-literal-sort-keys
      Dot: DotComponent,
    }

    return <Dots { ...props } />
  }

  public Next(): TypeComponent {
    const { NextComponent, allowFontScaling, isLight } = this._processProps()
    const props = {
      allowFontScaling,
      style: StyleSheet.flatten([styles.subtitle, isLight && styles.subtitleLight, subtitleStyle]),
    }

    if (this._isComponent(NextComponent)) {
      return React.cloneElement(NextComponent as any, props)
    }

    return (
      <View style={ styles.buttonRight }>
        { NextButtonFinal }
        { DoneButtonFinal }
      </View>
    )
  }

  private _getLeftContent(): TypeComponent[] {
    const { donePosition, dotsPosition, nextPosition, skipPosition } = this._processProps()
    const pos = 'left'
    const children: TypeComponent[] = []

    if  (donePosition === pos) {
      children.push(this.Done())
    // tslint:disable-next-line: no-else-after-return
    } else if (dotsPosition === pos) {
      children.push(this.Dots())
    } else if (nextPosition === pos) {
      children.push(this.Next())
    } else if (skipPosition === pos) {
      children.push(this.Skip())
    }

    return children
  }

  private _getCenterContent(): TypeComponent {
    const { donePosition, dotsPosition, nextPosition, skipPosition } = this._processProps()
    const pos = 'center'

    if  (donePosition === pos) {
      return this.Done()
    // tslint:disable-next-line: no-else-after-return
    } else if (dotsPosition === pos) {
      return this.Dots()
    } else if (nextPosition === pos) {
      return this.Next()
    } else if (skipPosition === pos) {
      return this.Skip()
    }
  }

  private _getRightContent(): TypeComponent {
    const { donePosition, dotsPosition, nextPosition, skipPosition } = this._processProps()
    const pos = 'right'

    if  (donePosition === pos) {
      return this.Done()
    // tslint:disable-next-line: no-else-after-return
    } else if (dotsPosition === pos) {
      return this.Dots()
    } else if (nextPosition === pos) {
      return this.Next()
    } else if (skipPosition === pos) {
      return this.Skip()
    }
  }

  private _processProps(): IPaginationState {
    // tslint:disable-next-line: no-shadowed-variable
    const { DoneComponent, DotComponent, NextComponent, SkipComponent, allowFontScaling, bottomBarHeight, centerContainerStyle, containerStyle, currentPage, doneLabel, donePosition, dotsPosition, dotsStyle, numPages, hideDone, hideNext, hideSkip, isLight, leftContainerStyle, nextLabel, nextPosition, onDone, onNext, onSkip, rightContainerStyle, options, skipLabel, skipPosition } = this.props

    const props: IPaginationState = {
      DoneComponent: (options && options.DoneComponent) || (DoneComponent || undefined),
      DotComponent: (options && options.DotComponent) || (DotComponent || undefined),
      NextComponent: (options && options.NextComponent) || (NextComponent || undefined),
      SkipComponent: (options && options.SkipComponent) || (SkipComponent || undefined),
      allowFontScaling: (options && options.allowFontScaling) || (allowFontScaling || true),
      bottomBarHeight: (options && options.bottomBarHeight) || (bottomBarHeight || undefined),
      centerContainerStyle: (options && options.centerContainerStyle) || (centerContainerStyle || undefined),
      containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
      currentPage: (options && options.currentPage) || (currentPage || 0),
      doneLabel: (options && options.doneLabel) || (doneLabel || undefined),
      donePosition: (options && options.donePosition) || (donePosition || 'right'),
      dotsPosition: (options && options.dotsPosition) || (dotsPosition || 'center'),
      dotsStyle: (options && options.dotsStyle) || (dotsStyle || undefined),
      hideDone: (options && options.hideDone) || (hideDone || false),
      hideNext: (options && options.hideNext) || (hideNext || false),
      hideSkip: (options && options.hideSkip) || (hideSkip || false),
      isLight: (options && options.isLight) || (isLight || false),
      leftContainerStyle: (options && options.leftContainerStyle) || (leftContainerStyle || undefined),
      nextLabel: (options && options.nextLabel) || (nextLabel || 'Next'),
      nextPosition: (options && options.nextPosition) || (nextPosition || 'right'),
      numPages: (options && options.numPages) || (numPages || 0),
      onDone: (options && options.onDone) || (onDone || undefined),
      onNext: (options && options.onNext) || (onNext || undefined),
      onSkip: (options && options.onSkip) || (onSkip || undefined),
      rightContainerStyle: (options && options.rightContainerStyle) || (rightContainerStyle || undefined),
      skipLabel: (options && options.skipLabel) || (skipLabel || 'Skip'),
      skipPosition: (options && options.skipPosition) || (skipPosition || 'left'),
    }

    return props
  }

  /**
   * Method to valid if a object is a component
   * @private
   * @param {*} kind Object to validate
   * @returns {boolean}
   * @memberof Pagination
   */
  private _isComponent(kind: any): boolean {
    return (kind._owner && kind._owner.constructor.name === 'FiberNode' && kind.$$typeof && kind.$$typeof.constructor.name === 'Symbol')
  }
}
