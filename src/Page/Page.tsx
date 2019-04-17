import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { IPageProps, IPageState, TypeComponent, TypeStyle } from './../../index'
import styles from './styles'

/**
 * Class to define the component Page used in Onboarding
 * @class Page
 * @extends {React.Component<IPageProps, IPageState>}
 */
export default class Page extends React.Component<IPageProps, IPageState> {
  public render(): TypeComponent {
    return(
      <View style={ this._processStyle() }>
        { this.Header() }
        { this.Image() }
        { this.Title() }
        { this.Subtitle() }
      </View>
    )
  }

  public Header(): TypeComponent {
    const { header, headerContainerStyle } = this._processProps()
    const props = {
      style: StyleSheet.flatten([styles.headerContainer, headerContainerStyle])
    }

    return (
      <View { ...props }>{ header }</View>
    )
  }

  public Image(): TypeComponent {
    const { image, imageContainerStyle } = this._processProps()
    const props = {
      style: StyleSheet.flatten([styles.imageContainer, imageContainerStyle])
    }

    return (
      <View { ...props }>{ image }</View>
    )
  }

  public Title(): TypeComponent {
    const { allowFontScaling, isLight, title, titleStyle } = this._processProps()

    if (this._isComponent(title)) {
      return React.cloneElement(title as any, { style: titleStyle })
    }

    const props = {
      allowFontScaling,
      style: StyleSheet.flatten([styles.title, isLight && styles.titleLight, titleStyle]),
    }

    return (
      <View style={ [styles.padding] }>
        <Text { ...props }>{ title }</Text>
      </View>
    )
  }

  public Subtitle(): TypeComponent {
    const { allowFontScaling, isLight, subtitle, subtitleStyle } = this._processProps()

    if (this._isComponent(subtitle)) {
      return React.cloneElement(subtitle as any, { style: subtitleStyle })
    }

    const props = {
      allowFontScaling,
      style: StyleSheet.flatten([styles.subtitle, isLight && styles.subtitleLight, subtitleStyle]),
    }

    return (
      <View style={ styles.padding }>
        <Text { ...props }>{ subtitle }</Text>
      </View>
    )
  }

  private _processProps(): IPageState {
    const { allowFontScaling, containerStyle, header, headerContainerStyle, height, image, imageContainerStyle, isLight, options, style, subtitle, subtitleStyle, title, titleStyle, width } = this.props

    const props: IPageState = {
      allowFontScaling: (options && options.allowFontScaling) || (allowFontScaling || true),
      containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
      header: (options && options.header) || (header || undefined),
      headerContainerStyle: (options && options.headerContainerStyle) || (headerContainerStyle || undefined),
      height: (options && options.height) || (height || undefined),
      image: (options && options.image) || (image || undefined),
      imageContainerStyle: (options && options.imageContainerStyle) || (imageContainerStyle || undefined),
      isLight: (options && options.isLight) || (isLight || false),
      style: (options && options.style) || (style || undefined),
      subtitle: (options && options.subtitle) || (subtitle || undefined),
      subtitleStyle: (options && options.subtitleStyle) || (subtitleStyle || undefined),
      title: (options && options.title) || (title || undefined),
      titleStyle: (options && options.titleStyle) || (titleStyle || undefined),
      width: (options && options.width) || (width || undefined),
    }

    return props
  }

  private _processStyle(): TypeStyle {
    const { containerStyle, height, width } = this._processProps()
    const _style: TypeStyle = {}

    return StyleSheet.flatten([styles.container, _style, containerStyle, { height, width }])
  }

  /**
   * Method to valid if a object is a component
   * @private
   * @param {*} kind Object to validate
   * @returns {boolean}
   * @memberof Page
   */
  private _isComponent(kind: any): boolean {
    return (kind._owner && kind._owner.constructor.name === 'FiberNode' && kind.$$typeof && kind.$$typeof.constructor.name === 'Symbol')
  }
}
