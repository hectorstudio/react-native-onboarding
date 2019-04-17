[@ticmakers-react-native/onboarding](../README.md) > ["Dots/index.d"](../modules/_dots_index_d_.md) > [IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)

# Interface: IDotsProps

Interface to define the props of the Dot component

*__export__*: 

*__interface__*: IDotsProps

*__extends__*: {IDotsState}

## Hierarchy

↳  [IDotsState](_dots_index_d_.idotsstate.md)

**↳ IDotsProps**

## Index

### Properties

* [DotComponent](_dots_index_d_.idotsprops.md#dotcomponent)
* [accessibilityActions](_dots_index_d_.idotsprops.md#accessibilityactions)
* [accessibilityComponentType](_dots_index_d_.idotsprops.md#accessibilitycomponenttype)
* [accessibilityElementsHidden](_dots_index_d_.idotsprops.md#accessibilityelementshidden)
* [accessibilityHint](_dots_index_d_.idotsprops.md#accessibilityhint)
* [accessibilityIgnoresInvertColors](_dots_index_d_.idotsprops.md#accessibilityignoresinvertcolors)
* [accessibilityLabel](_dots_index_d_.idotsprops.md#accessibilitylabel)
* [accessibilityLiveRegion](_dots_index_d_.idotsprops.md#accessibilityliveregion)
* [accessibilityRole](_dots_index_d_.idotsprops.md#accessibilityrole)
* [accessibilityStates](_dots_index_d_.idotsprops.md#accessibilitystates)
* [accessibilityTraits](_dots_index_d_.idotsprops.md#accessibilitytraits)
* [accessibilityViewIsModal](_dots_index_d_.idotsprops.md#accessibilityviewismodal)
* [accessible](_dots_index_d_.idotsprops.md#accessible)
* [collapsable](_dots_index_d_.idotsprops.md#collapsable)
* [color](_dots_index_d_.idotsprops.md#color)
* [currentPage](_dots_index_d_.idotsprops.md#currentpage)
* [hitSlop](_dots_index_d_.idotsprops.md#hitslop)
* [importantForAccessibility](_dots_index_d_.idotsprops.md#importantforaccessibility)
* [isLight](_dots_index_d_.idotsprops.md#islight)
* [nativeID](_dots_index_d_.idotsprops.md#nativeid)
* [needsOffscreenAlphaCompositing](_dots_index_d_.idotsprops.md#needsoffscreenalphacompositing)
* [numPages](_dots_index_d_.idotsprops.md#numpages)
* [onAccessibilityAction](_dots_index_d_.idotsprops.md#onaccessibilityaction)
* [onAccessibilityTap](_dots_index_d_.idotsprops.md#onaccessibilitytap)
* [onLayout](_dots_index_d_.idotsprops.md#onlayout)
* [onMagicTap](_dots_index_d_.idotsprops.md#onmagictap)
* [onMoveShouldSetResponder](_dots_index_d_.idotsprops.md#onmoveshouldsetresponder)
* [onMoveShouldSetResponderCapture](_dots_index_d_.idotsprops.md#onmoveshouldsetrespondercapture)
* [onResponderEnd](_dots_index_d_.idotsprops.md#onresponderend)
* [onResponderGrant](_dots_index_d_.idotsprops.md#onrespondergrant)
* [onResponderMove](_dots_index_d_.idotsprops.md#onrespondermove)
* [onResponderReject](_dots_index_d_.idotsprops.md#onresponderreject)
* [onResponderRelease](_dots_index_d_.idotsprops.md#onresponderrelease)
* [onResponderStart](_dots_index_d_.idotsprops.md#onresponderstart)
* [onResponderTerminate](_dots_index_d_.idotsprops.md#onresponderterminate)
* [onResponderTerminationRequest](_dots_index_d_.idotsprops.md#onresponderterminationrequest)
* [onStartShouldSetResponder](_dots_index_d_.idotsprops.md#onstartshouldsetresponder)
* [onStartShouldSetResponderCapture](_dots_index_d_.idotsprops.md#onstartshouldsetrespondercapture)
* [onTouchCancel](_dots_index_d_.idotsprops.md#ontouchcancel)
* [onTouchEnd](_dots_index_d_.idotsprops.md#ontouchend)
* [onTouchEndCapture](_dots_index_d_.idotsprops.md#ontouchendcapture)
* [onTouchMove](_dots_index_d_.idotsprops.md#ontouchmove)
* [onTouchStart](_dots_index_d_.idotsprops.md#ontouchstart)
* [options](_dots_index_d_.idotsprops.md#options)
* [pointerEvents](_dots_index_d_.idotsprops.md#pointerevents)
* [removeClippedSubviews](_dots_index_d_.idotsprops.md#removeclippedsubviews)
* [renderToHardwareTextureAndroid](_dots_index_d_.idotsprops.md#rendertohardwaretextureandroid)
* [shouldRasterizeIOS](_dots_index_d_.idotsprops.md#shouldrasterizeios)
* [size](_dots_index_d_.idotsprops.md#size)
* [style](_dots_index_d_.idotsprops.md#style)
* [testID](_dots_index_d_.idotsprops.md#testid)

---

## Properties

<a id="dotcomponent"></a>

### `<Optional>` DotComponent

**● DotComponent**: *`TypeComponent`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[DotComponent](_dots_index_d_.idotsstate.md#dotcomponent)*

*Defined in Dots/index.d.ts:17*

A React-Native component to replace the Dot

*__type__*: {TypeComponent}

*__memberof__*: IDotsState

___
<a id="accessibilityactions"></a>

### `<Optional>` accessibilityActions

**● accessibilityActions**: *`Array`<`string`>*

*Inherited from ViewPropsIOS.accessibilityActions*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1815*

Provides an array of custom actions available for accessibility.

*__platform__*: ios

___
<a id="accessibilitycomponenttype"></a>

### `<Optional>` accessibilityComponentType

**● accessibilityComponentType**: *"none" \| "button" \| "radiobutton_checked" \| "radiobutton_unchecked"*

*Inherited from AccessibilityPropsAndroid.accessibilityComponentType*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1931*

In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a “button”). If we were using native buttons, this would work automatically. Since we are using javascript, we need to provide a bit more context for TalkBack. To do so, you must specify the ‘accessibilityComponentType’ property for any UI component. For instances, we support ‘button’, ‘radiobutton\_checked’ and ‘radiobutton\_unchecked’ and so on.

*__platform__*: android

___
<a id="accessibilityelementshidden"></a>

### `<Optional>` accessibilityElementsHidden

**● accessibilityElementsHidden**: *`undefined` \| `false` \| `true`*

*Inherited from AccessibilityPropsIOS.accessibilityElementsHidden*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1961*

A Boolean value indicating whether the accessibility elements contained within this accessibility element are hidden to the screen reader.

*__platform__*: ios

___
<a id="accessibilityhint"></a>

### `<Optional>` accessibilityHint

**● accessibilityHint**: *`undefined` \| `string`*

*Inherited from AccessibilityProps.accessibilityHint*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1905*

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

___
<a id="accessibilityignoresinvertcolors"></a>

### `<Optional>` accessibilityIgnoresInvertColors

**● accessibilityIgnoresInvertColors**: *`undefined` \| `false` \| `true`*

*Inherited from AccessibilityPropsIOS.accessibilityIgnoresInvertColors*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1986*

[https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios](https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios)

*__platform__*: ios

___
<a id="accessibilitylabel"></a>

### `<Optional>` accessibilityLabel

**● accessibilityLabel**: *`undefined` \| `string`*

*Inherited from AccessibilityProps.accessibilityLabel*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1891*

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

___
<a id="accessibilityliveregion"></a>

### `<Optional>` accessibilityLiveRegion

**● accessibilityLiveRegion**: *"none" \| "polite" \| "assertive"*

*Inherited from AccessibilityPropsAndroid.accessibilityLiveRegion*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1939*

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. See [http://developer.android.com/reference/android/view/View.html#attr\_android:accessibilityLiveRegion](http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion) for references.

*__platform__*: android

___
<a id="accessibilityrole"></a>

### `<Optional>` accessibilityRole

**● accessibilityRole**: *`AccessibilityRole`*

*Inherited from AccessibilityProps.accessibilityRole*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1896*

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

___
<a id="accessibilitystates"></a>

### `<Optional>` accessibilityStates

**● accessibilityStates**: *`AccessibilityState`[]*

*Inherited from AccessibilityProps.accessibilityStates*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1900*

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

___
<a id="accessibilitytraits"></a>

### `<Optional>` accessibilityTraits

**● accessibilityTraits**: *`AccessibilityTrait` \| `AccessibilityTrait`[]*

*Inherited from AccessibilityPropsIOS.accessibilityTraits*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1968*

Accessibility traits tell a person using VoiceOver what kind of element they have selected. Is this element a label? A button? A header? These questions are answered by accessibilityTraits.

*__platform__*: ios

___
<a id="accessibilityviewismodal"></a>

### `<Optional>` accessibilityViewIsModal

**● accessibilityViewIsModal**: *`undefined` \| `false` \| `true`*

*Inherited from ViewPropsIOS.accessibilityViewIsModal*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1809*

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

*__platform__*: ios

___
<a id="accessible"></a>

### `<Optional>` accessible

**● accessible**: *`undefined` \| `false` \| `true`*

*Inherited from AccessibilityProps.accessible*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1885*

When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

___
<a id="collapsable"></a>

### `<Optional>` collapsable

**● collapsable**: *`undefined` \| `false` \| `true`*

*Inherited from ViewPropsAndroid.collapsable*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1843*

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.

___
<a id="color"></a>

### `<Optional>` color

**● color**: *`undefined` \| `string`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[color](_dots_index_d_.idotsstate.md#color)*

*Defined in Dots/index.d.ts:24*

Apply a custom color to the background of a Dot selected

*__type__*: {string}

*__memberof__*: IDotsState

___
<a id="currentpage"></a>

### `<Optional>` currentPage

**● currentPage**: *`undefined` \| `number`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[currentPage](_dots_index_d_.idotsstate.md#currentpage)*

*Defined in Dots/index.d.ts:31*

A number to define the current page

*__type__*: {number}

*__memberof__*: IDotsState

___
<a id="hitslop"></a>

### `<Optional>` hitSlop

**● hitSlop**: *`Insets`*

*Inherited from ViewProps.hitSlop*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2027*

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels. If a Touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}} NOTE The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

___
<a id="importantforaccessibility"></a>

### `<Optional>` importantForAccessibility

**● importantForAccessibility**: *"auto" \| "yes" \| "no" \| "no-hide-descendants"*

*Inherited from AccessibilityPropsAndroid.importantForAccessibility*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1952*

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. See [http://developer.android.com/reference/android/R.attr.html#importantForAccessibility](http://developer.android.com/reference/android/R.attr.html#importantForAccessibility) for references.

Possible values: 'auto' - The system determines whether the view is important for accessibility - default (recommended). 'yes' - The view is important for accessibility. 'no' - The view is not important for accessibility. 'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.

___
<a id="islight"></a>

### `<Optional>` isLight

**● isLight**: *`undefined` \| `false` \| `true`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[isLight](_dots_index_d_.idotsstate.md#islight)*

*Defined in Dots/index.d.ts:38*

Set true to define if the styles is light or dark

*__type__*: {boolean}

*__memberof__*: IDotState

___
<a id="nativeid"></a>

### `<Optional>` nativeID

**● nativeID**: *`undefined` \| `string`*

*Inherited from ViewProps.nativeID*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2079*

Used to reference react managed views from native code.

___
<a id="needsoffscreenalphacompositing"></a>

### `<Optional>` needsOffscreenAlphaCompositing

**● needsOffscreenAlphaCompositing**: *`undefined` \| `false` \| `true`*

*Inherited from ViewPropsAndroid.needsOffscreenAlphaCompositing*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1859*

Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).

Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

___
<a id="numpages"></a>

### `<Optional>` numPages

**● numPages**: *`undefined` \| `number`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[numPages](_dots_index_d_.idotsstate.md#numpages)*

*Defined in Dots/index.d.ts:45*

A number of the total of the pages

*__type__*: {number}

*__memberof__*: IDotsState

___
<a id="onaccessibilityaction"></a>

### `<Optional>` onAccessibilityAction

**● onAccessibilityAction**: *`undefined` \| `function`*

*Inherited from ViewPropsIOS.onAccessibilityAction*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1822*

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

*__platform__*: ios

___
<a id="onaccessibilitytap"></a>

### `<Optional>` onAccessibilityTap

**● onAccessibilityTap**: *`undefined` \| `function`*

*Inherited from AccessibilityPropsIOS.onAccessibilityTap*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1974*

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

*__platform__*: ios

___
<a id="onlayout"></a>

### `<Optional>` onLayout

**● onLayout**: *`undefined` \| `function`*

*Inherited from ViewProps.onLayout*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2034*

Invoked on mount and layout changes with

{nativeEvent: { layout: {x, y, width, height}}}.

___
<a id="onmagictap"></a>

### `<Optional>` onMagicTap

**● onMagicTap**: *`undefined` \| `function`*

*Inherited from AccessibilityPropsIOS.onMagicTap*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1980*

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

*__platform__*: ios

___
<a id="onmoveshouldsetresponder"></a>

### `<Optional>` onMoveShouldSetResponder

**● onMoveShouldSetResponder**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onMoveShouldSetResponder*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1683*

Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness

___
<a id="onmoveshouldsetrespondercapture"></a>

### `<Optional>` onMoveShouldSetResponderCapture

**● onMoveShouldSetResponderCapture**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onMoveShouldSetResponderCapture*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1759*

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern, where the deepest node is called first. That means that the deepest component will become responder when multiple Views return true for \*ShouldSetResponder handlers. This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder. This can be handled by using the capture phase. Before the responder system bubbles up from the deepest component, it will do a capture phase, firing on\*ShouldSetResponderCapture. So if a parent View wants to prevent the child from becoming responder on a touch start, it should have a onStartShouldSetResponderCapture handler which returns true.

___
<a id="onresponderend"></a>

### `<Optional>` onResponderEnd

**● onResponderEnd**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderEnd*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1689*

If the View returns true and attempts to become the responder, one of the following will happen:

___
<a id="onrespondergrant"></a>

### `<Optional>` onResponderGrant

**● onResponderGrant**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderGrant*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1695*

The View is now responding for touch events. This is the time to highlight and show the user what is happening

___
<a id="onrespondermove"></a>

### `<Optional>` onResponderMove

**● onResponderMove**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderMove*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1709*

The user is moving their finger

___
<a id="onresponderreject"></a>

### `<Optional>` onResponderReject

**● onResponderReject**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderReject*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1700*

Something else is the responder right now and will not release it

___
<a id="onresponderrelease"></a>

### `<Optional>` onResponderRelease

**● onResponderRelease**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderRelease*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1714*

Fired at the end of the touch, ie "touchUp"

___
<a id="onresponderstart"></a>

### `<Optional>` onResponderStart

**● onResponderStart**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderStart*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1716*

___
<a id="onresponderterminate"></a>

### `<Optional>` onResponderTerminate

**● onResponderTerminate**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderTerminate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1729*

The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (happens with control center/ notification center on iOS)

___
<a id="onresponderterminationrequest"></a>

### `<Optional>` onResponderTerminationRequest

**● onResponderTerminationRequest**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onResponderTerminationRequest*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1722*

Something else wants to become responder. Should this view release the responder? Returning true allows release

___
<a id="onstartshouldsetresponder"></a>

### `<Optional>` onStartShouldSetResponder

**● onStartShouldSetResponder**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onStartShouldSetResponder*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1678*

Does this view want to become responder on the start of a touch

___
<a id="onstartshouldsetrespondercapture"></a>

### `<Optional>` onStartShouldSetResponderCapture

**● onStartShouldSetResponderCapture**: *`undefined` \| `function`*

*Inherited from GestureResponderHandlers.onStartShouldSetResponderCapture*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1744*

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern, where the deepest node is called first. That means that the deepest component will become responder when multiple Views return true for \*ShouldSetResponder handlers. This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder. This can be handled by using the capture phase. Before the responder system bubbles up from the deepest component, it will do a capture phase, firing on\*ShouldSetResponderCapture. So if a parent View wants to prevent the child from becoming responder on a touch start, it should have a onStartShouldSetResponderCapture handler which returns true.

___
<a id="ontouchcancel"></a>

### `<Optional>` onTouchCancel

**● onTouchCancel**: *`undefined` \| `function`*

*Inherited from Touchable.onTouchCancel*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:437*

___
<a id="ontouchend"></a>

### `<Optional>` onTouchEnd

**● onTouchEnd**: *`undefined` \| `function`*

*Inherited from Touchable.onTouchEnd*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:436*

___
<a id="ontouchendcapture"></a>

### `<Optional>` onTouchEndCapture

**● onTouchEndCapture**: *`undefined` \| `function`*

*Inherited from Touchable.onTouchEndCapture*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:438*

___
<a id="ontouchmove"></a>

### `<Optional>` onTouchMove

**● onTouchMove**: *`undefined` \| `function`*

*Inherited from Touchable.onTouchMove*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:435*

___
<a id="ontouchstart"></a>

### `<Optional>` onTouchStart

**● onTouchStart**: *`undefined` \| `function`*

*Inherited from Touchable.onTouchStart*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:434*

___
<a id="options"></a>

### `<Optional>` options

**● options**: *[IDotsState](_dots_index_d_.idotsstate.md)*

*Defined in Dots/index.d.ts:65*

Prop for group all the props of the Dot component

___
<a id="pointerevents"></a>

### `<Optional>` pointerEvents

**● pointerEvents**: *"box-none" \| "none" \| "box-only" \| "auto"*

*Inherited from ViewProps.pointerEvents*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2059*

In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:

.box-none { pointer-events: none; } .box-none \* { pointer-events: all; }

box-only is the equivalent of

.box-only { pointer-events: all; } .box-only \* { pointer-events: none; }

But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.

___
<a id="removeclippedsubviews"></a>

### `<Optional>` removeClippedSubviews

**● removeClippedSubviews**: *`undefined` \| `false` \| `true`*

*Inherited from ViewProps.removeClippedSubviews*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2067*

This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).

___
<a id="rendertohardwaretextureandroid"></a>

### `<Optional>` renderToHardwareTextureAndroid

**● renderToHardwareTextureAndroid**: *`undefined` \| `false` \| `true`*

*Inherited from ViewPropsAndroid.renderToHardwareTextureAndroid*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1868*

Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.

On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

___
<a id="shouldrasterizeios"></a>

### `<Optional>` shouldRasterizeIOS

**● shouldRasterizeIOS**: *`undefined` \| `false` \| `true`*

*Inherited from ViewPropsIOS.shouldRasterizeIOS*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:1834*

Whether this view should be rendered as a bitmap before compositing.

On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.

Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.

___
<a id="size"></a>

### `<Optional>` size

**● size**: *`undefined` \| `number`*

*Inherited from [IDotsState](_dots_index_d_.idotsstate.md).[size](_dots_index_d_.idotsstate.md#size)*

*Defined in Dots/index.d.ts:52*

A number to define the size of the Dot

*__type__*: {number}

*__memberof__*: IDotState

___
<a id="style"></a>

### `<Optional>` style

**● style**: *`StyleProp`<`ViewStyle`>*

*Inherited from ViewProps.style*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2069*

___
<a id="testid"></a>

### `<Optional>` testID

**● testID**: *`undefined` \| `string`*

*Inherited from ViewProps.testID*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react-native/index.d.ts:2074*

Used to locate this view in end-to-end tests.

___

