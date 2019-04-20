[@ticmakers-react-native/onboarding](../README.md) > ["Pagination/DoneButton"](../modules/_pagination_donebutton_.md) > [DoneButton](../classes/_pagination_donebutton_.donebutton.md)

# Class: DoneButton

Class to define the component DoneButton used in Onboarding

*__class__*: DoneButton

*__extends__*: {Button}

## Type parameters
#### SS 
## Hierarchy

 `Button`

**↳ DoneButton**

## Index

### Properties

* [fadeAnimation](_pagination_donebutton_.donebutton.md#fadeanimation)
* [fadeDuration](_pagination_donebutton_.donebutton.md#fadeduration)

### Methods

* [ButtonComponent](_pagination_donebutton_.donebutton.md#buttoncomponent)
* [ButtonContent](_pagination_donebutton_.donebutton.md#buttoncontent)
* [IconLeft](_pagination_donebutton_.donebutton.md#iconleft)
* [IconRight](_pagination_donebutton_.donebutton.md#iconright)
* [Title](_pagination_donebutton_.donebutton.md#title)
* [UNSAFE_componentWillMount](_pagination_donebutton_.donebutton.md#unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_pagination_donebutton_.donebutton.md#unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_pagination_donebutton_.donebutton.md#unsafe_componentwillupdate)
* [componentDidCatch](_pagination_donebutton_.donebutton.md#componentdidcatch)
* [componentDidMount](_pagination_donebutton_.donebutton.md#componentdidmount)
* [componentDidUpdate](_pagination_donebutton_.donebutton.md#componentdidupdate)
* [componentWillMount](_pagination_donebutton_.donebutton.md#componentwillmount)
* [componentWillReceiveProps](_pagination_donebutton_.donebutton.md#componentwillreceiveprops)
* [componentWillUnmount](_pagination_donebutton_.donebutton.md#componentwillunmount)
* [componentWillUpdate](_pagination_donebutton_.donebutton.md#componentwillupdate)
* [getSnapshotBeforeUpdate](_pagination_donebutton_.donebutton.md#getsnapshotbeforeupdate)
* [render](_pagination_donebutton_.donebutton.md#render)
* [shouldComponentUpdate](_pagination_donebutton_.donebutton.md#shouldcomponentupdate)

---

## Properties

<a id="fadeanimation"></a>

###  fadeAnimation

**● fadeAnimation**: *`Value`* =  new Animated.Value(0)

*Defined in Pagination/DoneButton.tsx:18*

Initial value to the animation

*__memberof__*: DoneButton

___
<a id="fadeduration"></a>

###  fadeDuration

**● fadeDuration**: *`number`* = 1000

*Defined in Pagination/DoneButton.tsx:24*

Duration of the animation

*__memberof__*: DoneButton

___

## Methods

<a id="buttoncomponent"></a>

###  ButtonComponent

▸ **ButtonComponent**(): `TypeComponent`

*Defined in Pagination/DoneButton.tsx:58*

Method that renders the button

*__memberof__*: DoneButton

**Returns:** `TypeComponent`

___
<a id="buttoncontent"></a>

###  ButtonContent

▸ **ButtonContent**(): `TypeComponent`[]

*Inherited from Button.ButtonContent*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@ticmakers-react-native/button/index.d.ts:363*

Method that return a array of components for the button content

*__memberof__*: Button

**Returns:** `TypeComponent`[]

___
<a id="iconleft"></a>

###  IconLeft

▸ **IconLeft**(): `TypeComponent`

*Inherited from Button.IconLeft*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@ticmakers-react-native/button/index.d.ts:377*

Method that return the icon left component

*__memberof__*: Button

**Returns:** `TypeComponent`

___
<a id="iconright"></a>

###  IconRight

▸ **IconRight**(): `TypeComponent`

*Inherited from Button.IconRight*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@ticmakers-react-native/button/index.d.ts:384*

Method that return the icon right component

*__memberof__*: Button

**Returns:** `TypeComponent`

___
<a id="title"></a>

###  Title

▸ **Title**(): `TypeComponent`

*Inherited from Button.Title*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@ticmakers-react-native/button/index.d.ts:370*

Method thar return the title component

*__memberof__*: Button

**Returns:** `TypeComponent`

___
<a id="unsafe_componentwillmount"></a>

### `<Optional>` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:617*

Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use componentDidMount or the constructor instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Returns:** `void`

___
<a id="unsafe_componentwillreceiveprops"></a>

### `<Optional>` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<`IButtonProps`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillReceiveProps*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:649*

Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use static getDerivedStateFromProps instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<`IButtonProps`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

### `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<`IButtonProps`>*, nextState: *`Readonly`<`IButtonState`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:677*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use getSnapshotBeforeUpdate instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<`IButtonProps`> |
| nextState | `Readonly`<`IButtonState`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="componentdidcatch"></a>

### `<Optional>` componentDidCatch

▸ **componentDidCatch**(error: *`Error`*, errorInfo: *`ErrorInfo`*): `void`

*Inherited from ComponentLifecycle.componentDidCatch*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:546*

Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` |
| errorInfo | `ErrorInfo` |

**Returns:** `void`

___
<a id="componentdidmount"></a>

###  componentDidMount

▸ **componentDidMount**(): `void`

*Overrides ComponentLifecycle.componentDidMount*

*Defined in Pagination/DoneButton.tsx:31*

Method that fire when the component is mounted

*__memberof__*: DoneButton

**Returns:** `void`

___
<a id="componentdidupdate"></a>

### `<Optional>` componentDidUpdate

▸ **componentDidUpdate**(prevProps: *`Readonly`<`IButtonProps`>*, prevState: *`Readonly`<`IButtonState`>*, snapshot?: *[SS]()*): `void`

*Inherited from NewLifecycle.componentDidUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:588*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<`IButtonProps`> |
| prevState | `Readonly`<`IButtonState`> |
| `Optional` snapshot | [SS]() |

**Returns:** `void`

___
<a id="componentwillmount"></a>

### `<Optional>` componentWillMount

▸ **componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.componentWillMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:603*

Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use componentDidMount or the constructor instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Returns:** `void`

___
<a id="componentwillreceiveprops"></a>

### `<Optional>` componentWillReceiveProps

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<`IButtonProps`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillReceiveProps*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:632*

Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<`IButtonProps`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="componentwillunmount"></a>

### `<Optional>` componentWillUnmount

▸ **componentWillUnmount**(): `void`

*Inherited from ComponentLifecycle.componentWillUnmount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:541*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** `void`

___
<a id="componentwillupdate"></a>

### `<Optional>` componentWillUpdate

▸ **componentWillUpdate**(nextProps: *`Readonly`<`IButtonProps`>*, nextState: *`Readonly`<`IButtonState`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:662*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<`IButtonProps`> |
| nextState | `Readonly`<`IButtonState`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="getsnapshotbeforeupdate"></a>

### `<Optional>` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<`IButtonProps`>*, prevState: *`Readonly`<`IButtonState`>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:582*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<`IButtonProps`> |
| prevState | `Readonly`<`IButtonState`> |

**Returns:** `SS` \| `null`

___
<a id="render"></a>

###  render

▸ **render**(): `TypeComponent`

*Overrides Button.render*

*Defined in Pagination/DoneButton.tsx:45*

Method that renders the component

*__memberof__*: DoneButton

**Returns:** `TypeComponent`

___
<a id="shouldcomponentupdate"></a>

### `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<`IButtonProps`>*, nextState: *`Readonly`<`IButtonState`>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:536*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<`IButtonProps`> |
| nextState | `Readonly`<`IButtonState`> |
| nextContext | `any` |

**Returns:** `boolean`

___

