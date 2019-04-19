
TIC Makers - React Native Onboarding
====================================

React native component for onboarding.

Powered by [TIC Makers](https://ticmakers.com)

Demo
----

Onboarding Expo's snack

Install
-------

Install `@ticmakers-react-native/onboarding` package and save into `package.json`:

NPM

```shell
$ npm install @ticmakers-react-native/onboarding --save
```

Yarn

```shell
$ yarn add @ticmakers-react-native/onboarding
```

How to use?
-----------

```javascript
import React from 'react'
import Onboarding from '@ticmakers-react-native/onboarding'

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
      <Onboarding
        pages={ pages }
        onDone={ () => this.props.navigation.navigate('RouteName') }
      />
    )
  }
}
```

Properties
----------

Name

Type

Default Value

Definition

bottomBarHeight `(optional)`

number

60

A number for the height of the bottom bar

bottomBarHighlight `(optional)`

boolean

true

A bool flag indicating whether the bottom bar should be highlighted

containerStyles `(optional)`

object { ...styles }

\-

Override the default container styles

controlStatusBar `(optional)`

boolean

true

A bool flag indicating whether the status bar should change with the background color

defaultPages `(optional)`

boolean

false

Use 3 pages generated by default

imageContainerStyles `(optional)`

object { ...styles }

\-

Override the default image container styles

nextLabel `(optional)`

string / Element

Next

A string or a React-Native component for the Next label

onDone

function

\-

A callback that is fired after the OnBoarding is completed

onSkip `(optional)`

function

\-

A callback that is fired if the OnBoarding is skipped

pages

array of object { pagesProperties }

\-

A array of pages to show in the component. `Show below pagesProperties`

pageIndexCallback `(optional)`

function(indexPage: number)

\-

A function that receives the page index as a parameter on page change

skipLabel `(optional)`

string / Element

Skip

A string OR a React-Native component for the Skip label

skipToPage `(optional)`

number

\-

When pressing skip, go to that page (ex. skipToPage={2}). `If this prop is provided, ignores onSkip`

subtitleStyles `(optional)`

object { ...styles }

\-

Override the default subtitle styles

titleStyles `(optional)`

object { ...styles }

\-

Override the default title styles

transitionAnimationDuration `(optional)`

number

500

The duration in milliseconds for the animation of the background color for the page transition

Pages properties
----------------

Name

Type

Default Value

Definition

backgroundColor

string(hex,rgb,etc)

\-

A background color. The color of the font and dots adapts to the background color

image

Element

\-

A React-Native component to display at the top of the page

title

string / Element

\-

A string OR a React-Native component

titleStyles `(optional)`

object { ...styles }

\-

Modify styles of a specific page's title

subtitle

string / Element

\-

A string OR a React-Native component

subtitleStyles `(optional)`

object { ...styles }

\-

Modify styles of a specific page's subtitle

Todo
----

*   Test on Android & iOS
*   Improve and add new features
*   Add more styles
*   Create tests
*   Add new props and components in readme

## Index

### External modules

* ["Dot/Dot"](modules/_dot_dot_.md)
* ["Dot/index.d"](modules/_dot_index_d_.md)
* ["Dot/styles"](modules/_dot_styles_.md)
* ["Dots/Dots"](modules/_dots_dots_.md)
* ["Dots/index.d"](modules/_dots_index_d_.md)
* ["Dots/styles"](modules/_dots_styles_.md)
* ["Onboarding/Onboarding"](modules/_onboarding_onboarding_.md)
* ["Onboarding/index.d"](modules/_onboarding_index_d_.md)
* ["Onboarding/styles"](modules/_onboarding_styles_.md)
* ["Page/Page"](modules/_page_page_.md)
* ["Page/index.d"](modules/_page_index_d_.md)
* ["Page/styles"](modules/_page_styles_.md)
* ["Pagination/DoneButton"](modules/_pagination_donebutton_.md)
* ["Pagination/Pagination"](modules/_pagination_pagination_.md)
* ["Pagination/index.d"](modules/_pagination_index_d_.md)
* ["Pagination/styles"](modules/_pagination_styles_.md)
* ["index"](modules/_index_.md)

---
