import * as React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

import Image, { TypeImageSource, IImageProps } from '@ticmakers-react-native/image'
import { AppHelper, TypeComponent, TypeStyle } from '@ticmakers-react-native/core'

import { IPageProps, IPageState } from './../../index'
import styles from './styles'

/**
 * Class to define the component Page used in Onboarding
 * @class Page
 * @extends {React.Component<IPageProps, IPageState>}
 */
export default class Page extends React.Component<IPageProps, IPageState> {
  constructor(props: IPageProps) {
    super(props)

    const { height, width } = this._processProps()
    this.state = {
      height,
      width,
    }
  }

  /**
   * Method that renders the component
   * @returns {TypeComponent}
   */
  public render(): TypeComponent {
    return (
      <View style={ this._processStyle() }>
        { this.ImageBackground() }

        <View style={ styles.contentPage }>
          { this.Header() }

          <View style={ styles.bodyPage }>
            { this.Image() }
            { this.Title() }
            { this.Subtitle() }
          </View>
        </View>
      </View>
    )
  }

  public ImageBackground(): TypeComponent {
    const { backgroundImage } = this._processProps()
    const { height, width } = this.state

    if (typeof backgroundImage !== 'undefined') {
      return (
        <Image
          source={ backgroundImage }
          style={ StyleSheet.flatten([styles.backgroundImage, { height, width }]) }
        />
      )
    }
  }

  /**
   * Method that renders the Header component
   * @returns {TypeComponent}
   */
  public Header(): TypeComponent {
    const { header, headerContainerStyle } = this._processProps()

    const props = {
      style: StyleSheet.flatten([styles.headerContainer, headerContainerStyle]),
    }

    const headerProps = {
      style: StyleSheet.flatten([{ resizeMode: 'contain', height: 160 }]),
    }

    if (AppHelper.isComponent(header) || AppHelper.isElement(header)) {
      return (
        <View { ...props }>
          { React.cloneElement(header as any) }
        </View>
      )
    }

    if (typeof header === 'number' || header && (header as any).uri) {
      return (
        <View { ...props }>
          { <Image source={ header as TypeImageSource } { ...headerProps } /> }
        </View>
      )
    }

    if (typeof header !== 'undefined') {
      return (
        <View { ...props }>{ header }</View>
      )
    }
  }

  /**
   * Method that renders the Image component
   * @returns {TypeComponent}
   */
  public Image(): TypeComponent {
    const { image, imageContainerStyle } = this._processProps()

    const props = {
      style: StyleSheet.flatten([styles.imageContainer, imageContainerStyle]),
    }

    const imageProps = {
      style: StyleSheet.flatten([{ resizeMode: 'contain', height: 160 }]),
    }

    if (AppHelper.isComponent(image) || AppHelper.isElement(image)) {
      return (
        <View { ...props }>
          { React.cloneElement(image as any) }
        </View>
      )
    }

    if (typeof image === 'number' || image && (image as any).uri) {
      return (
        <View { ...props }>
          { <Image source={ image as TypeImageSource } { ...imageProps } /> }
        </View>
      )
    }

    if (typeof image !== 'undefined') {
      return (
        <View { ...props }>
          { <Image { ...image as IImageProps } { ...imageProps } /> }
        </View>
      )
    }
  }

  /**
   * Method that renders the Title component
   * @returns {TypeComponent}
   */
  public Title(): TypeComponent {
    const { allowFontScaling, isLight, title, titleStyle } = this._processProps()

    if (AppHelper.isComponent(title) || AppHelper.isElement(title)) {
      return React.cloneElement(title as any, { style: titleStyle })
    }

    const props = {
      allowFontScaling,
      style: StyleSheet.flatten([styles.title, isLight && styles.titleLight, titleStyle]),
    }

    if (title) {
      return (
        <View style={ [styles.padding] }>
          <Text { ...props }>{ title }</Text>
        </View>
      )
    }
  }

  /**
   * Method that renders the Subtitle component
   * @returns {TypeComponent}
   */
  public Subtitle(): TypeComponent {
    const { allowFontScaling, isLight, subtitle, subtitleStyle } = this._processProps()

    if (AppHelper.isComponent(subtitle) || AppHelper.isElement(subtitle)) {
      return React.cloneElement(subtitle as any, { style: subtitleStyle })
    }

    const props = {
      allowFontScaling,
      style: StyleSheet.flatten([styles.subtitle, isLight && styles.subtitleLight, subtitleStyle]),
    }

    if (subtitle) {
      return (
        <View style={ styles.padding }>
          <Text { ...props }>{ subtitle }</Text>
        </View>
      )
    }
  }

  /**
   * Method that process the props of the component
   * @private
   * @returns {IPageState}
   */
  private _processProps(): IPageProps {
    const { allowFontScaling, backgroundImage, containerStyle, header, headerContainerStyle, height, image, imageContainerStyle, isLight, style, subtitle, subtitleStyle, title, titleStyle, width } = this.props

    const props: IPageProps = {
      allowFontScaling: (typeof allowFontScaling !== 'undefined' ? allowFontScaling : true),
      backgroundImage: (typeof backgroundImage !== 'undefined' ? backgroundImage : undefined),
      containerStyle: (typeof containerStyle !== 'undefined' ? containerStyle : undefined),
      header: (typeof header !== 'undefined' ? header : undefined),
      headerContainerStyle: (typeof headerContainerStyle !== 'undefined' ? headerContainerStyle : undefined),
      height: (typeof height !== 'undefined' ? height : Dimensions.get('screen').height),
      image: (typeof image !== 'undefined' ? image : undefined),
      imageContainerStyle: (typeof imageContainerStyle !== 'undefined' ? imageContainerStyle : undefined),
      isLight: (typeof isLight !== 'undefined' ? isLight : false),
      style: (typeof style !== 'undefined' ? style : undefined),
      subtitle: (typeof subtitle !== 'undefined' ? subtitle : undefined),
      subtitleStyle: (typeof subtitleStyle !== 'undefined' ? subtitleStyle : undefined),
      title: (typeof title !== 'undefined' ? title : undefined),
      titleStyle: (typeof titleStyle !== 'undefined' ? titleStyle : undefined),
      width: (typeof width !== 'undefined' ? width : Dimensions.get('screen').width),
    }

    return props
  }

  /**
   * Method to process the prop style of the component
   * @private
   * @returns {TypeStyle}
   */
  private _processStyle(): TypeStyle {
    const { containerStyle } = this._processProps()
    const { height, width } = this.state
    const _style: TypeStyle = {}

    return StyleSheet.flatten([styles.container, _style, containerStyle, { height, width }])
  }
}
