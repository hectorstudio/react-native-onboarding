import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import Dots from './../Dots/Dots'
import DoneButton from './../Pagination/DoneButton'
import Button from '@ticmakers-react-native/button'
import { IPaginationProps, IPaginationState, TypeComponent, TypePaginationPosition } from './../../index'
import styles from './styles'

/**
 * Class to define the Pagination component used in Onboarding
 * @class Pagination
 * @extends {React.Component<IPaginationProps, IPaginationState>}
 */
export default class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  /**
   * Method that renders the component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
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

  /**
   * Method that renders the left container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public LeftContent(): TypeComponent {
    const { leftContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.leftContainer, leftContainerStyle])

    return <View style={ _style }>{ this._getContent('left') }</View>
  }

  /**
   * Method that renders the center container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public CenterContent(): TypeComponent {
    const { centerContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.centerContainer, centerContainerStyle])

    return <View style={ _style }>{ this._getContent('center') }</View>
  }

  /**
   * Method that renders the right container component
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public RightContent(): TypeComponent {
    const { rightContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.rightContainer, rightContainerStyle])

    return <View style={ _style }>{ this._getContent('right') }</View>
  }

  /**
   * Method that renders the Done button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Done(): TypeComponent {
    const { DoneComponent, allowFontScaling, doneLabel, doneStyle, hideDone, isLight, onDone } = this._processProps()
    const props = {
      allowFontScaling,
      key: 'done',
      onPress: () => onDone && onDone(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, { alignSelf: 'center' }, doneStyle]),
      title: doneLabel,
    }

    if (!hideDone && this.isLastPage()) {
      if (this._isComponent(DoneComponent)) {
        const _s = StyleSheet.flatten([props.style, (DoneComponent as any).props.style])
        const _p = { ...props, ...(DoneComponent as any).props, style: _s }

        return React.cloneElement(DoneComponent as any, _p)
      // tslint:disable-next-line: no-else-after-return
      } else if (props.title) {
        return React.cloneElement(DoneButton as any, props)
      }

      return <DoneButton key="done" style={{ paddingHorizontal: 8, paddingVertical: 6 }} />
    }
  }

  /**
   * Method that renders the pagination Dots
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Dots(): TypeComponent {
    const { DotComponent, currentPage, dotsSize, dotsStyle, hideDots, isLight, numPages } = this._processProps()
    const props = {
      DotComponent,
      currentPage,
      isLight,
      numPages,
      // tslint:disable-next-line: object-literal-sort-keys
      key: 'dots',
      size: dotsSize,
      style: StyleSheet.flatten([styles.dots, dotsStyle]),
    }

    if (!hideDots) {
      return <Dots { ...props } />
    }
  }

  /**
   * Method that renders the Next button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Next(): TypeComponent {
    const { NextComponent, allowFontScaling, hideNext, isLight, nextLabel, nextStyle, onNext } = this._processProps()
    const props = {
      allowFontScaling,
      key: 'skip',
      onPress: () => onNext && onNext(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, { alignSelf: 'center' }, nextStyle]),
      title: nextLabel,
    }

    if (!hideNext && !this.isLastPage()) {
      if (this._isComponent(NextComponent)) {
        return React.cloneElement(NextComponent as any, props)
      }

      return <Button clear { ...props } />
    }
  }

  /**
   * Methods that renders the Skip button
   * @returns {TypeComponent}
   * @memberof Pagination
   */
  public Skip(): TypeComponent {
    const { SkipComponent, allowFontScaling, onSkip, skipLabel, skipStyle, hideSkip, isLight } = this._processProps()
    const props = {
      allowFontScaling,
      key: 'skip',
      onPress: () => onSkip && onSkip(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, skipStyle]),
      title: skipLabel,
    }

    if (!hideSkip) {
      if (this._isComponent(SkipComponent)) {
        return React.cloneElement(SkipComponent as any, props)
      }

      return <Button clear { ...props } />
    }
  }

  /**
   * Method to check if the current page is the last page
   * @returns {boolean}
   * @memberof Pagination
   */
  public isLastPage(): boolean {
    const { currentPage, numPages } = this._processProps()
    return (currentPage || 0) + 1 === numPages
  }

  /**
   * Method that renders the content of each container (left, center and right)
   * @private
   * @param {TypePaginationPosition} position     Position of the container
   * @returns {TypeComponent[]}
   * @memberof Pagination
   */
  private _getContent(position: TypePaginationPosition): TypeComponent[] {
    const { donePosition, dotsPosition, nextPosition, skipPosition } = this._processProps()
    const pos = position
    const children: TypeComponent[] = []

    if  (donePosition === pos) {
      children.push(this.Done())
    }
    if (dotsPosition === pos) {
      children.push(this.Dots())
    }
    if (nextPosition === pos) {
      children.push(this.Next())
    }
    if (skipPosition === pos) {
      children.push(this.Skip())
    }

    return children
  }

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPaginationState}
   * @memberof Pagination
   */
  private _processProps(): IPaginationState {
    const { DoneComponent, DotComponent, NextComponent, SkipComponent, allowFontScaling, bottomBarHeight, centerContainerStyle, containerStyle, currentPage, doneLabel, donePosition, doneStyle, dotsPosition, dotsSize, dotsStyle, numPages, hideDone, hideDots, hideNext, hideSkip, isLight, leftContainerStyle, nextLabel, nextPosition, nextStyle, onDone, onNext, onSkip, rightContainerStyle, options, skipLabel, skipPosition, skipStyle } = this.props

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
      doneStyle: (options && options.doneStyle) || (doneStyle || undefined),
      dotsPosition: (options && options.dotsPosition) || (dotsPosition || 'center'),
      dotsSize: (options && options.dotsSize) || (dotsSize || 6),
      dotsStyle: (options && options.dotsStyle) || (dotsStyle || undefined),
      hideDone: (options && options.hideDone) || (hideDone || false),
      hideDots: (options && options.hideDots) || (hideDots || false),
      hideNext: (options && options.hideNext) || (hideNext || false),
      hideSkip: (options && options.hideSkip) || (hideSkip || false),
      isLight: (options && options.isLight) || (isLight || false),
      leftContainerStyle: (options && options.leftContainerStyle) || (leftContainerStyle || undefined),
      nextLabel: (options && options.nextLabel) || (nextLabel || 'Next'),
      nextPosition: (options && options.nextPosition) || (nextPosition || 'right'),
      nextStyle: (options && options.nextStyle) || (nextStyle || undefined),
      numPages: (options && options.numPages) || (numPages || 0),
      onDone: (options && options.onDone) || (onDone || undefined),
      onNext: (options && options.onNext) || (onNext || undefined),
      onSkip: (options && options.onSkip) || (onSkip || undefined),
      rightContainerStyle: (options && options.rightContainerStyle) || (rightContainerStyle || undefined),
      skipLabel: (options && options.skipLabel) || (skipLabel || 'Skip'),
      skipPosition: (options && options.skipPosition) || (skipPosition || 'left'),
      skipStyle: (options && options.skipStyle) || (skipStyle || undefined),
    }

    return props
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
