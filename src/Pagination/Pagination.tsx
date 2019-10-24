import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { AppHelper, TypeComponent } from '@ticmakers-react-native/core'
import Button from '@ticmakers-react-native/button'

import Dots from './../Dots/Dots'
import DoneButton from './../Pagination/DoneButton'
import { IPaginationProps, IPaginationState, TypePaginationPosition, IDotsProps } from './../../index'
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
   */
  public render(): TypeComponent {
    const { bottomBarHeight, containerStyle, style } = this._processProps()
    const _style = StyleSheet.flatten([{ height: bottomBarHeight, ...styles.container }, containerStyle, style])

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
   */
  public LeftContent(): TypeComponent {
    const { leftContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.leftContainer, leftContainerStyle])

    return <View style={ _style }>{ this._getContent('left') }</View>
  }

  /**
   * Method that renders the center container component
   * @returns {TypeComponent}
   */
  public CenterContent(): TypeComponent {
    const { centerContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.centerContainer, centerContainerStyle])

    return <View style={ _style }>{ this._getContent('center') }</View>
  }

  /**
   * Method that renders the right container component
   * @returns {TypeComponent}
   */
  public RightContent(): TypeComponent {
    const { rightContainerStyle } = this._processProps()
    const _style = StyleSheet.flatten([styles.rightContainer, rightContainerStyle])

    return <View style={ _style }>{ this._getContent('right') }</View>
  }

  /**
   * Method that renders the Done button
   * @returns {TypeComponent}
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
      if (AppHelper.isComponent(DoneComponent) || AppHelper.isElement(DoneComponent)) {
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
   */
  public Dots(): TypeComponent {
    const { DotComponent, currentPage, dotColorSelected, dotSelectedStyle, dotsColor, dotsSize, dotsStyle, hideDots, isLight, numPages } = this._processProps()

    const props: IDotsProps = {
      DotComponent,
      currentPage,
      isLight,
      numPages,
      // tslint:disable-next-line: object-literal-sort-keys
      colorSelected: dotColorSelected,
      color: dotsColor,
      key: 'dots',
      selectedStyle: dotSelectedStyle,
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
   */
  public Next(): TypeComponent {
    const { NextComponent, allowFontScaling, hideNext, isLight, nextLabel, nextStyle, onNext } = this._processProps()
    const props = {
      allowFontScaling,
      key: 'next',
      onPress: () => onNext && onNext(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, { alignSelf: 'center' }, nextStyle]),
      title: nextLabel,
    }

    if (!hideNext && !this.isLastPage()) {
      if (AppHelper.isComponent(NextComponent) || AppHelper.isElement(NextComponent)) {
        return React.cloneElement(NextComponent as any, props)
      }

      return <Button clear { ...props } />
    }
  }

  /**
   * Method that renders the Previous button
   * @returns {TypeComponent}
   */
  public Prev(): TypeComponent {
    const { PrevComponent, allowFontScaling, isLight, prevLabel, prevStyle, onPrev, usePrevious } = this._processProps()

    const props = {
      allowFontScaling,
      key: 'prev',
      onPress: () => onPrev && onPrev(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, { alignSelf: 'center' }, prevStyle]),
      title: prevLabel,
    }

    if (usePrevious && !this.isFirstPage()) {
      if (AppHelper.isComponent(PrevComponent) || AppHelper.isElement(PrevComponent)) {
        return React.cloneElement(PrevComponent as any, props)
      }

      return <Button clear { ...props } />
    }
  }

  /**
   * Methods that renders the Skip button
   * @returns {TypeComponent}
   */
  public Skip(): TypeComponent {
    const { SkipComponent, allowFontScaling, onSkip, skipLabel, skipStyle, hideSkip, isLight, usePrevious } = this._processProps()

    const props = {
      allowFontScaling,
      key: 'skip',
      onPress: () => onSkip && onSkip(),
      style: StyleSheet.flatten([!isLight && styles.colorLight, skipStyle]),
      title: skipLabel,
    }

    if ((!hideSkip && usePrevious && this.isFirstPage()) || (!hideSkip && !usePrevious && !this.isLastPage())) {
      if (AppHelper.isComponent(SkipComponent) || AppHelper.isElement(SkipComponent)) {
        return React.cloneElement(SkipComponent as any, props)
      }

      return <Button clear { ...props } />
    }
  }

  /**
   * Method to check if the current page is the first page
   * @returns {boolean}
   */
  public isFirstPage(): boolean {
    const { currentPage } = this._processProps()
    return currentPage === 0
  }

  /**
   * Method to check if the current page is the last page
   * @returns {boolean}
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
   */
  private _getContent(position: TypePaginationPosition): TypeComponent[] {
    const { donePosition, dotsPosition, nextPosition, prevPosition, skipPosition } = this._processProps()
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
    if (prevPosition === pos) {
      children.push(this.Prev())
    }
    if (skipPosition === pos) {
      children.push(this.Skip())
    }

    return children
  }

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPaginationProps}
   */
  private _processProps(): IPaginationProps {
    const { DoneComponent, DotComponent, NextComponent, PrevComponent, SkipComponent, allowFontScaling, bottomBarHeight, centerContainerStyle, containerStyle, currentPage, doneLabel, donePosition, doneStyle, dotColorSelected, dotSelectedStyle, dotsColor, dotsPosition, dotsSize, dotsStyle, numPages, hideDone, hideDots, hideNext, hideSkip, isLight, leftContainerStyle, nextLabel, nextPosition, nextStyle, onDone, onNext, onPrev, onSkip, prevLabel, prevPosition, prevStyle, rightContainerStyle, skipLabel, skipPosition, skipStyle, usePrevious } = this.props

    const props: IPaginationProps = {
      DoneComponent: (typeof DoneComponent !== 'undefined' ? DoneComponent : undefined),
      DotComponent: (typeof DotComponent !== 'undefined' ? DotComponent : undefined),
      NextComponent: (typeof NextComponent !== 'undefined' ? NextComponent : undefined),
      PrevComponent: (typeof PrevComponent !== 'undefined' ? PrevComponent : undefined),
      SkipComponent: (typeof SkipComponent !== 'undefined' ? SkipComponent : undefined),
      allowFontScaling: (typeof allowFontScaling !== 'undefined' ? allowFontScaling : true),
      bottomBarHeight: (typeof bottomBarHeight !== 'undefined' ? bottomBarHeight : undefined),
      centerContainerStyle: (typeof centerContainerStyle !== 'undefined' ? centerContainerStyle : undefined),
      containerStyle: (typeof containerStyle !== 'undefined' ? containerStyle : undefined),
      currentPage: (typeof currentPage !== 'undefined' ? currentPage : 0),
      doneLabel: (typeof doneLabel !== 'undefined' ? doneLabel : undefined),
      donePosition: (typeof donePosition !== 'undefined' ? donePosition : 'right'),
      doneStyle: (typeof doneStyle !== 'undefined' ? doneStyle : undefined),
      dotColorSelected: (typeof dotColorSelected !== 'undefined' ? dotColorSelected : undefined),
      dotSelectedStyle: (typeof dotSelectedStyle !== 'undefined' ? dotSelectedStyle : undefined),
      dotsColor: (typeof dotsColor !== 'undefined' ? dotsColor : undefined),
      dotsPosition: (typeof dotsPosition !== 'undefined' ? dotsPosition : 'center'),
      dotsSize: (typeof dotsSize !== 'undefined' ? dotsSize : 6),
      dotsStyle: (typeof dotsStyle !== 'undefined' ? dotsStyle : undefined),
      hideDone: (typeof hideDone !== 'undefined' ? hideDone : false),
      hideDots: (typeof hideDots !== 'undefined' ? hideDots : false),
      hideNext: (typeof hideNext !== 'undefined' ? hideNext : false),
      hideSkip: (typeof hideSkip !== 'undefined' ? hideSkip : false),
      isLight: (typeof isLight !== 'undefined' ? isLight : false),
      leftContainerStyle: (typeof leftContainerStyle !== 'undefined' ? leftContainerStyle : undefined),
      nextLabel: (typeof nextLabel !== 'undefined' ? nextLabel : 'Next'),
      nextPosition: (typeof nextPosition !== 'undefined' ? nextPosition : 'right'),
      nextStyle: (typeof nextStyle !== 'undefined' ? nextStyle : undefined),
      numPages: (typeof numPages !== 'undefined' ? numPages : 0),
      onDone: (typeof onDone !== 'undefined' ? onDone : undefined),
      onNext: (typeof onNext !== 'undefined' ? onNext : undefined),
      onPrev: (typeof onPrev !== 'undefined' ? onPrev : undefined),
      onSkip: (typeof onSkip !== 'undefined' ? onSkip : undefined),
      prevLabel: (typeof prevLabel !== 'undefined' ? prevLabel : 'Previous'),
      prevPosition: (typeof prevPosition !== 'undefined' ? prevPosition : 'right'),
      prevStyle: (typeof prevStyle !== 'undefined' ? prevStyle : undefined),
      rightContainerStyle: (typeof rightContainerStyle !== 'undefined' ? rightContainerStyle : undefined),
      skipLabel: (typeof skipLabel !== 'undefined' ? skipLabel : 'Skip'),
      skipPosition: (typeof skipPosition !== 'undefined' ? skipPosition : 'left'),
      skipStyle: (typeof skipStyle !== 'undefined' ? skipStyle : undefined),
      usePrevious: (typeof usePrevious !== 'undefined' ? usePrevious : false),
    }

    return props
  }
}
