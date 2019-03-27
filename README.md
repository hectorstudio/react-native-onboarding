# TIC Makers - React Native Onboarding
React native component for onboarding.

Powered by [TIC Makers](https://ticmakers.com)

## Demo

[Onboarding Expo's snack]()

## Install

Install `@ticmakers-react-native/onboarding` package and save into `package.json`:

NPM
```shell
$ npm install @ticmakers-react-native/onboarding --save
```

Yarn
```shell
$ yarn add @ticmakers-react-native/onboarding
```

## How to use?

```javascript
import React from 'react'
import OnBoarding from '@ticmakers-react-native/onboarding'

export default class App extends React.Component {

  render() {

    // Define the pages, it will be displayed in order
    let pages = [
      {
        backgroundColor: '#fff',
        image: <Image source={ require('assets/circle.png') } />,
        subtitle: 'Done with React Native Onboarding Swiper',
        title: 'Onboarding',
      }, {
        backgroundColor: '#fe6e58',
        image: <Image source={ require('assets/square.png') } />,
        subtitle: 'This is the subtitle that sumplements the title.',
        title: 'The Title',
      }, {
        backgroundColor: '#999',
        image: <Image source={ require('assets/triangle.png') } />,
        subtitle: 'Beautiful, isn\'t it?',
        title: 'Triangle',
      }
    ]

    return (
      <OnBoarding pages={ pages } />
    )
  }
}
```

<!-- ### animatedValue -->

<!-- Each of scence will be injected in `this.props` with an `animatedValue` with `inputRange = [0, windowWidth]`. This can be used for any animation within the scence by using interpolate. For example:

```javascript
    var animateValue = this.props.animatedValue.interpolate({
        inputRange: [0, windowWidth],
        outputRange: [0, 10]
    })
```

(Please see actual code in the Expo example, file `./ExampleScenes/FirstScene.js` line `19` ) -->

## Properties

| Name | Type | Default Value | Definition |
| ---- | ---- | ------------- | ---------- |
| bottomBarHeight (optional) | number | 60 | A number for the height of the bottom bar
| bottomBarHighlight (optional) | boolean | true | A bool flag indicating whether the bottom bar should be highlighted
| containerStyles (optional) | object { ...styles } | - | Override the default container styles
| controlStatusBar (optional) | boolean | true | A bool flag indicating whether the status bar should change with the background color
| defaultPages (optional) | boolean | false | Use 3 pages generated by default
| imageContainerStyles (optional) | object { ...styles } | - | Override the default image container styles
| nextLabel (optional) | string / Element | Next | A string or a React-Native component for the Next label
| onDone | function | - | A callback that is fired after the OnBoarding is completed
| onSkip (optional) | function | - | A callback that is fired if the OnBoarding is skipped
| pages | array of object { backgroundColor: string(hex,rgb,etc), image: Element, title: string, titleStyles: object { ...styles } (optional), subtitle: string, subtitleStyles: object { ...styles } (optional) } | - | A array of pages to show in the component
| pageIndexCallback (optional) | function (indexPage: number) | - | A function that receives the page index as a parameter on page change
| showDone (optional) | boolean | true | A bool flag indicating whether the Done checkmark button is visible
| showNext (optional) | boolean | true | A bool flag indicating whether the Next button is visible
| showSkip (optional) | boolean | true | A bool flag indicating whether the Skip button is visible
| skipLabel (optional) | string / Element | Skip | A string OR a React-Native component for the Skip label
| skipToPage (optional) | number | - | When pressing skip, go to that page (ex. skipToPage={2}). `If this prop is provided, ignores onSkip`
| subtitleStyles (optional) | object { ...styles } | - | Override the default subtitle styles
| titleStyles (optional) | object { ...styles } | - | Override the default title styles
| transitionAnimationDuration (optional) | number | 500 | The duration in milliseconds for the animation of the background color for the page transition

<!-- ### Property injected in each scence `props`

| Name | Type | Default Value | Definition |
| ---- | ---- | ------------- | ---------- |
| animatedValue | interpolate value of Animated.Value | inputRange: [0, windowWidth] | an animated value, use for animation within a page by using `this.props.animatedValue.interpolate` -->

## Todo

- Test on Android & iOS
- Improve and add new features
- Add more styles
- Create tests
