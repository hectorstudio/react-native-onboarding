[@ticmakers-react-native/onboarding](../README.md) > ["Onboarding/index.d"](../modules/_onboarding_index_d_.md) > [IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)

# Interface: IOnboardingState

Interface to define the states of the Onboarding component

*__export__*: 

*__interface__*: IOnboardingState

## Hierarchy

**IOnboardingState**

↳  [IOnboardingProps](_onboarding_index_d_.ionboardingprops.md)

## Index

### Properties

* [DoneComponent](_onboarding_index_d_.ionboardingstate.md#donecomponent)
* [DotComponent](_onboarding_index_d_.ionboardingstate.md#dotcomponent)
* [NextComponent](_onboarding_index_d_.ionboardingstate.md#nextcomponent)
* [SkipComponent](_onboarding_index_d_.ionboardingstate.md#skipcomponent)
* [allowFontScalingButtons](_onboarding_index_d_.ionboardingstate.md#allowfontscalingbuttons)
* [allowFontScalingText](_onboarding_index_d_.ionboardingstate.md#allowfontscalingtext)
* [backgroundColorAnim](_onboarding_index_d_.ionboardingstate.md#backgroundcoloranim)
* [bottomBarHeight](_onboarding_index_d_.ionboardingstate.md#bottombarheight)
* [bottomBarHighlight](_onboarding_index_d_.ionboardingstate.md#bottombarhighlight)
* [containerStyle](_onboarding_index_d_.ionboardingstate.md#containerstyle)
* [controlStatusBar](_onboarding_index_d_.ionboardingstate.md#controlstatusbar)
* [currentPage](_onboarding_index_d_.ionboardingstate.md#currentpage)
* [defaultPages](_onboarding_index_d_.ionboardingstate.md#defaultpages)
* [doneLabel](_onboarding_index_d_.ionboardingstate.md#donelabel)
* [donePosition](_onboarding_index_d_.ionboardingstate.md#doneposition)
* [doneStyle](_onboarding_index_d_.ionboardingstate.md#donestyle)
* [dotsPosition](_onboarding_index_d_.ionboardingstate.md#dotsposition)
* [dotsSize](_onboarding_index_d_.ionboardingstate.md#dotssize)
* [dotsStyle](_onboarding_index_d_.ionboardingstate.md#dotsstyle)
* [flatlistProps](_onboarding_index_d_.ionboardingstate.md#flatlistprops)
* [headerContainerStyle](_onboarding_index_d_.ionboardingstate.md#headercontainerstyle)
* [height](_onboarding_index_d_.ionboardingstate.md#height)
* [hideDone](_onboarding_index_d_.ionboardingstate.md#hidedone)
* [hideDots](_onboarding_index_d_.ionboardingstate.md#hidedots)
* [hideNext](_onboarding_index_d_.ionboardingstate.md#hidenext)
* [hideSkip](_onboarding_index_d_.ionboardingstate.md#hideskip)
* [imageContainerStyle](_onboarding_index_d_.ionboardingstate.md#imagecontainerstyle)
* [nextLabel](_onboarding_index_d_.ionboardingstate.md#nextlabel)
* [nextPosition](_onboarding_index_d_.ionboardingstate.md#nextposition)
* [nextStyle](_onboarding_index_d_.ionboardingstate.md#nextstyle)
* [onChangePage](_onboarding_index_d_.ionboardingstate.md#onchangepage)
* [onDone](_onboarding_index_d_.ionboardingstate.md#ondone)
* [onSkip](_onboarding_index_d_.ionboardingstate.md#onskip)
* [pages](_onboarding_index_d_.ionboardingstate.md#pages)
* [paginationProps](_onboarding_index_d_.ionboardingstate.md#paginationprops)
* [previousPage](_onboarding_index_d_.ionboardingstate.md#previouspage)
* [skipLabel](_onboarding_index_d_.ionboardingstate.md#skiplabel)
* [skipPosition](_onboarding_index_d_.ionboardingstate.md#skipposition)
* [skipStyle](_onboarding_index_d_.ionboardingstate.md#skipstyle)
* [skipToPage](_onboarding_index_d_.ionboardingstate.md#skiptopage)
* [statusBarStyle](_onboarding_index_d_.ionboardingstate.md#statusbarstyle)
* [subtitleStyle](_onboarding_index_d_.ionboardingstate.md#subtitlestyle)
* [titleStyle](_onboarding_index_d_.ionboardingstate.md#titlestyle)
* [transitionAnimationDuration](_onboarding_index_d_.ionboardingstate.md#transitionanimationduration)
* [width](_onboarding_index_d_.ionboardingstate.md#width)

---

## Properties

<a id="donecomponent"></a>

### `<Optional>` DoneComponent

**● DoneComponent**: *`TypeComponent`*

*Defined in Onboarding/index.d.ts:97*

A React-Native component to replace the done button

*__type__*: {TypeComponent}

*__memberof__*: IOnboardingState

___
<a id="dotcomponent"></a>

### `<Optional>` DotComponent

**● DotComponent**: *`TypeComponent`*

*Defined in Onboarding/index.d.ts:104*

A React-Native component to replace the pagination dot

*__type__*: {TypeComponent}

*__memberof__*: IOnboardingState

___
<a id="nextcomponent"></a>

### `<Optional>` NextComponent

**● NextComponent**: *`TypeComponent`*

*Defined in Onboarding/index.d.ts:111*

A React-Native component to replace the next button

*__type__*: {TypeComponent}

*__memberof__*: IOnboardingState

___
<a id="skipcomponent"></a>

### `<Optional>` SkipComponent

**● SkipComponent**: *`TypeComponent`*

*Defined in Onboarding/index.d.ts:118*

A React-Native component to replace the skip button

*__type__*: {TypeComponent}

*__memberof__*: IOnboardingState

___
<a id="allowfontscalingbuttons"></a>

### `<Optional>` allowFontScalingButtons

**● allowFontScalingButtons**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:126*

Font scaling can cause troubles with high-resolution screens. You may want to disable it

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: true

___
<a id="allowfontscalingtext"></a>

### `<Optional>` allowFontScalingText

**● allowFontScalingText**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:134*

Font scaling can cause troubles with high-resolution screens. You may want to disable it

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: true

___
<a id="backgroundcoloranim"></a>

### `<Optional>` backgroundColorAnim

**● backgroundColorAnim**: *`Value` \| `ValueXY`*

*Defined in Onboarding/index.d.ts:141*

A React-Animated value to define background animation

*__type__*: {(Animated.Value \| Animated.ValueXY)}

*__memberof__*: IOnboardingState

___
<a id="bottombarheight"></a>

### `<Optional>` bottomBarHeight

**● bottomBarHeight**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:149*

A number for the height of the bottom bar

*__type__*: {number}

*__memberof__*: IOnboardingState

*__default__*: 60

___
<a id="bottombarhighlight"></a>

### `<Optional>` bottomBarHighlight

**● bottomBarHighlight**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:157*

A bool flag indicating whether the bottom bar should be highlighted

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: true

___
<a id="containerstyle"></a>

### `<Optional>` containerStyle

**● containerStyle**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:164*

Override the default container styles

*__type__*: {object}

*__memberof__*: IOnboardingState

___
<a id="controlstatusbar"></a>

### `<Optional>` controlStatusBar

**● controlStatusBar**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:172*

A bool flag indicating whether the status bar should change with the background color

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: true

___
<a id="currentpage"></a>

### `<Optional>` currentPage

**● currentPage**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:180*

A number to define what is the current page

*__type__*: {number}

*__memberof__*: IOnboardingState

*__default__*: 0

___
<a id="defaultpages"></a>

### `<Optional>` defaultPages

**● defaultPages**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:188*

Use 3 pages by default

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: false

___
<a id="donelabel"></a>

### `<Optional>` doneLabel

**● doneLabel**: *`undefined` \| `string`*

*Defined in Onboarding/index.d.ts:195*

Define a text to show in done button

*__type__*: {string}

*__memberof__*: IOnboardingState

___
<a id="doneposition"></a>

### `<Optional>` donePosition

**● donePosition**: *[TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition)*

*Defined in Onboarding/index.d.ts:203*

Define the position where the done button will be displayed

*__type__*: {TypePaginationPosition}

*__memberof__*: IOnboardingState

*__default__*: right

___
<a id="donestyle"></a>

### `<Optional>` doneStyle

**● doneStyle**: *`TypeStyle`*

*Defined in Onboarding/index.d.ts:210*

Apply a custom style to the done button

*__type__*: {TypeStyle}

*__memberof__*: IOnboardingState

___
<a id="dotsposition"></a>

### `<Optional>` dotsPosition

**● dotsPosition**: *[TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition)*

*Defined in Onboarding/index.d.ts:218*

Define the position where the pagination dots will be displayed

*__type__*: {TypePaginationPosition}

*__memberof__*: IOnboardingState

*__default__*: center

___
<a id="dotssize"></a>

### `<Optional>` dotsSize

**● dotsSize**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:225*

Apply a size to the pagination dots

*__type__*: {number}

*__memberof__*: IOnboardingState

___
<a id="dotsstyle"></a>

### `<Optional>` dotsStyle

**● dotsStyle**: *`TypeStyle`*

*Defined in Onboarding/index.d.ts:232*

Apply a custom style to the pagination dots

*__type__*: {TypeStyle}

*__memberof__*: IOnboardingState

___
<a id="flatlistprops"></a>

### `<Optional>` flatlistProps

**● flatlistProps**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:239*

Additional props for the which holds all the pages

*__type__*: {object}

*__memberof__*: IOnboardingState

___
<a id="headercontainerstyle"></a>

### `<Optional>` headerContainerStyle

**● headerContainerStyle**: *`TypeStyle`*

*Defined in Onboarding/index.d.ts:246*

Apply a custom style to the header container

*__type__*: {TypeStyle}

*__memberof__*: IOnboardingState

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:253*

Define a custom height to the pages

*__type__*: {number}

*__memberof__*: IOnboardingState

___
<a id="hidedone"></a>

### `<Optional>` hideDone

**● hideDone**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:261*

Set true for hide the done button

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: false

___
<a id="hidedots"></a>

### `<Optional>` hideDots

**● hideDots**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:269*

Set true for hide the pagination dots

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: false

___
<a id="hidenext"></a>

### `<Optional>` hideNext

**● hideNext**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:277*

Set true to hide the next button

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: false

___
<a id="hideskip"></a>

### `<Optional>` hideSkip

**● hideSkip**: *`undefined` \| `false` \| `true`*

*Defined in Onboarding/index.d.ts:285*

Set true to hide the skip button

*__type__*: {boolean}

*__memberof__*: IOnboardingState

*__default__*: false

___
<a id="imagecontainerstyle"></a>

### `<Optional>` imageContainerStyle

**● imageContainerStyle**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:292*

Override the default image container styles

*__type__*: {object}

*__memberof__*: IOnboardingState

___
<a id="nextlabel"></a>

### `<Optional>` nextLabel

**● nextLabel**: *`undefined` \| `string`*

*Defined in Onboarding/index.d.ts:300*

A text to show in the next button

*__type__*: {string}

*__memberof__*: IOnboardingState

*__default__*: Next

___
<a id="nextposition"></a>

### `<Optional>` nextPosition

**● nextPosition**: *[TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition)*

*Defined in Onboarding/index.d.ts:308*

Define the position where the next button will be displayed

*__type__*: {TypePaginationPosition}

*__memberof__*: IOnboardingState

*__default__*: right

___
<a id="nextstyle"></a>

### `<Optional>` nextStyle

**● nextStyle**: *`TypeStyle`*

*Defined in Onboarding/index.d.ts:315*

Apply a custom style to the next button

*__type__*: {TypeStyle}

*__memberof__*: IOnboardingState

___
<a id="onchangepage"></a>

### `<Optional>` onChangePage

**● onChangePage**: *`undefined` \| `function`*

*Defined in Onboarding/index.d.ts:322*

A function that receives the page index as a parameter on page change

*__type__*: {Function}

*__memberof__*: IOnboardingState

___
<a id="ondone"></a>

### `<Optional>` onDone

**● onDone**: *`undefined` \| `function`*

*Defined in Onboarding/index.d.ts:329*

A callback that is fired after the Onboarding is completed

*__type__*: {Function}

*__memberof__*: IOnboardingState

___
<a id="onskip"></a>

### `<Optional>` onSkip

**● onSkip**: *`undefined` \| `function`*

*Defined in Onboarding/index.d.ts:336*

A callback that is fired if the Onboarding is skipped

*__type__*: {Function}

*__memberof__*: IOnboardingState

___
<a id="pages"></a>

###  pages

**● pages**: *[IOnboardingPage](_onboarding_index_d_.ionboardingpage.md)[]*

*Defined in Onboarding/index.d.ts:343*

A array of pages to show in the component

*__type__*: {IOnboardingPage\[\]}

*__memberof__*: IOnboardingState

___
<a id="paginationprops"></a>

### `<Optional>` paginationProps

**● paginationProps**: *[IPaginationProps](_pagination_index_d_.ipaginationprops.md)*

*Defined in Onboarding/index.d.ts:350*

Define additional props for the pagination

*__type__*: {IPaginationProps}

*__memberof__*: IOnboardingState

___
<a id="previouspage"></a>

### `<Optional>` previousPage

**● previousPage**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:357*

A number to define what is the previous page

*__type__*: {number}

*__memberof__*: IOnboardingState

___
<a id="skiplabel"></a>

### `<Optional>` skipLabel

**● skipLabel**: *`undefined` \| `string`*

*Defined in Onboarding/index.d.ts:365*

A text to show in the skip button

*__type__*: {string}

*__memberof__*: IOnboardingState

*__default__*: Skip

___
<a id="skipposition"></a>

### `<Optional>` skipPosition

**● skipPosition**: *[TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition)*

*Defined in Onboarding/index.d.ts:373*

Define the position where the next button will be displayed

*__type__*: {TypePaginationPosition}

*__memberof__*: IOnboardingState

*__default__*: left

___
<a id="skipstyle"></a>

### `<Optional>` skipStyle

**● skipStyle**: *`TypeStyle`*

*Defined in Onboarding/index.d.ts:380*

Apply a custom style to the skip button

*__type__*: {TypeStyle}

*__memberof__*: IOnboardingState

___
<a id="skiptopage"></a>

### `<Optional>` skipToPage

**● skipToPage**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:387*

Index number of the page that will be displayed when the skip button is pressed

*__type__*: {number}

*__memberof__*: IOnboardingState

___
<a id="statusbarstyle"></a>

### `<Optional>` statusBarStyle

**● statusBarStyle**: *[TypeOnboardingStatusBarStyle](../modules/_onboarding_index_d_.md#typeonboardingstatusbarstyle)*

*Defined in Onboarding/index.d.ts:395*

Define a custom status bar style

*__type__*: {TypeOnboardingStatusBarStyle}

*__memberof__*: IOnboardingState

*__default__*: default

___
<a id="subtitlestyle"></a>

### `<Optional>` subtitleStyle

**● subtitleStyle**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:402*

Override the default subtitle styles

*__type__*: {object}

*__memberof__*: IOnboardingState

___
<a id="titlestyle"></a>

### `<Optional>` titleStyle

**● titleStyle**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:409*

Override the default title styles

*__type__*: {object}

*__memberof__*: IOnboardingState

___
<a id="transitionanimationduration"></a>

### `<Optional>` transitionAnimationDuration

**● transitionAnimationDuration**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:417*

The duration in milliseconds for the animation of the background color for the page transition

*__type__*: {number}

*__memberof__*: IOnboardingState

*__default__*: 500

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`undefined` \| `number`*

*Defined in Onboarding/index.d.ts:424*

Define a custom width to the pages

*__type__*: {number}

*__memberof__*: IOnboardingState

___

