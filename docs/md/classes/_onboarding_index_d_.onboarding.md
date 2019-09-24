[@ticmakers-react-native/onboarding](../README.md) > ["Onboarding/index.d"](../modules/_onboarding_index_d_.md) > [Onboarding](../classes/_onboarding_index_d_.onboarding.md)

# Class: Onboarding

Class to define the component Onboarding

*__class__*: Onboarding

*__extends__*: {React.Component<IOnboardingProps, IOnboardingState>}

## Type parameters
#### SS 
## Hierarchy

 `Component`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md), [IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>

**↳ Onboarding**

## Index

### Constructors

* [constructor](_onboarding_index_d_.onboarding.md#constructor)

### Properties

* [context](_onboarding_index_d_.onboarding.md#context)
* [flatList](_onboarding_index_d_.onboarding.md#flatlist)
* [itemVisibleHotfix](_onboarding_index_d_.onboarding.md#itemvisiblehotfix)
* [props](_onboarding_index_d_.onboarding.md#props)
* [refs](_onboarding_index_d_.onboarding.md#refs)
* [state](_onboarding_index_d_.onboarding.md#state)
* [contextType](_onboarding_index_d_.onboarding.md#contexttype)

### Methods

* [UNSAFE_componentWillMount](_onboarding_index_d_.onboarding.md#unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_onboarding_index_d_.onboarding.md#unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_onboarding_index_d_.onboarding.md#unsafe_componentwillupdate)
* [_flatlistProps](_onboarding_index_d_.onboarding.md#_flatlistprops)
* [_onChangePage](_onboarding_index_d_.onboarding.md#_onchangepage)
* [_onDone](_onboarding_index_d_.onboarding.md#_ondone)
* [_onLayout](_onboarding_index_d_.onboarding.md#_onlayout)
* [_onSkip](_onboarding_index_d_.onboarding.md#_onskip)
* [_onSwipePageChange](_onboarding_index_d_.onboarding.md#_onswipepagechange)
* [_paginationProps](_onboarding_index_d_.onboarding.md#_paginationprops)
* [_processProps](_onboarding_index_d_.onboarding.md#_processprops)
* [_skipToLastPage](_onboarding_index_d_.onboarding.md#_skiptolastpage)
* [componentDidCatch](_onboarding_index_d_.onboarding.md#componentdidcatch)
* [componentDidMount](_onboarding_index_d_.onboarding.md#componentdidmount)
* [componentDidUpdate](_onboarding_index_d_.onboarding.md#componentdidupdate)
* [componentWillMount](_onboarding_index_d_.onboarding.md#componentwillmount)
* [componentWillReceiveProps](_onboarding_index_d_.onboarding.md#componentwillreceiveprops)
* [componentWillUnmount](_onboarding_index_d_.onboarding.md#componentwillunmount)
* [componentWillUpdate](_onboarding_index_d_.onboarding.md#componentwillupdate)
* [defaultPages](_onboarding_index_d_.onboarding.md#defaultpages)
* [forceUpdate](_onboarding_index_d_.onboarding.md#forceupdate)
* [getCurrentPage](_onboarding_index_d_.onboarding.md#getcurrentpage)
* [getPreviousPage](_onboarding_index_d_.onboarding.md#getpreviouspage)
* [getSnapshotBeforeUpdate](_onboarding_index_d_.onboarding.md#getsnapshotbeforeupdate)
* [goNext](_onboarding_index_d_.onboarding.md#gonext)
* [render](_onboarding_index_d_.onboarding.md#render)
* [renderPage](_onboarding_index_d_.onboarding.md#renderpage)
* [setState](_onboarding_index_d_.onboarding.md#setstate)
* [shouldComponentUpdate](_onboarding_index_d_.onboarding.md#shouldcomponentupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Onboarding**(props: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*): [Onboarding](_onboarding_index_d_.onboarding.md)

⊕ **new Onboarding**(props: *[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)*, context?: *`any`*): [Onboarding](_onboarding_index_d_.onboarding.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:425*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |

**Returns:** [Onboarding](_onboarding_index_d_.onboarding.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:427*

*__deprecated__*: 

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md) |
| `Optional` context | `any` |

**Returns:** [Onboarding](_onboarding_index_d_.onboarding.md)

___

## Properties

<a id="context"></a>

###  context

**● context**: *`any`*

*Inherited from Component.context*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:425*

If using the new style context, re-declare this in your class to be the `React.ContextType` of your `static contextType`.

```ts
static contextType = MyContext
context!: React.ContextType<typeof MyContext>
```

*__deprecated__*: if used without a type annotation, or without static contextType

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

___
<a id="flatlist"></a>

### `<Optional>` flatList

**● flatList**: *`any`*

*Defined in Onboarding/index.d.ts:451*

The reference to the FlatList component

*__type__*: {FlatList}

*__memberof__*: Onboarding

___
<a id="itemvisiblehotfix"></a>

### `<Optional>` itemVisibleHotfix

**● itemVisibleHotfix**: *`undefined` \| `object`*

*Defined in Onboarding/index.d.ts:458*

Hotfix to swipe the pages

*__type__*: {{ itemVisiblePercentThreshold: number }}

*__memberof__*: Onboarding

___
<a id="props"></a>

###  props

**● props**: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> & `Readonly`<`object`>*

*Inherited from Component.props*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:450*

___
<a id="refs"></a>

###  refs

**● refs**: *`object`*

*Inherited from Component.refs*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:456*

*__deprecated__*: [https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)

#### Type declaration

[key: `string`]: `ReactInstance`

___
<a id="state"></a>

###  state

**● state**: *`Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>*

*Inherited from Component.state*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:451*

___
<a id="contexttype"></a>

### `<Static>``<Optional>` contextType

**● contextType**: *`Context`<`any`>*

*Inherited from Component.contextType*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:410*

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

*__see__*: [https://reactjs.org/docs/context.html#classcontexttype](https://reactjs.org/docs/context.html#classcontexttype)

___

## Methods

<a id="unsafe_componentwillmount"></a>

### `<Optional>` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:638*

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

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillReceiveProps*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:670*

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
| nextProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

### `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, nextState: *`Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:698*

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
| nextProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| nextState | `Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="_flatlistprops"></a>

### `<Private>` _flatlistProps

▸ **_flatlistProps**(): `FlatListProps`<`__type`>

*Defined in Onboarding/index.d.ts:575*

Method that process the props for the FlatList

*__memberof__*: Onboarding

**Returns:** `FlatListProps`<`__type`>
> }

___
<a id="_onchangepage"></a>

### `<Private>` _onChangePage

▸ **_onChangePage**(index: *`number`*): `void`

*Defined in Onboarding/index.d.ts:534*

Method that fire when a pages change, this returns the current index page

*__memberof__*: Onboarding

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `void`

___
<a id="_ondone"></a>

### `<Private>` _onDone

▸ **_onDone**(): `void`

*Defined in Onboarding/index.d.ts:517*

Method that fire when the button Done is pressed

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="_onlayout"></a>

### `<Private>` _onLayout

▸ **_onLayout**(): `void`

*Defined in Onboarding/index.d.ts:551*

Method that fire when the layout is changed

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="_onskip"></a>

### `<Private>` _onSkip

▸ **_onSkip**(): `void`

*Defined in Onboarding/index.d.ts:525*

Method that fire when the button Skip is pressed

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="_onswipepagechange"></a>

### `<Private>` _onSwipePageChange

▸ **_onSwipePageChange**(data: *`any`*): `void`

*Defined in Onboarding/index.d.ts:543*

Method thar fire when a page is swiped

*__memberof__*: Onboarding

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `any` |  Event of the flatlist change |

**Returns:** `void`

___
<a id="_paginationprops"></a>

### `<Private>` _paginationProps

▸ **_paginationProps**(): [IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)

*Defined in Onboarding/index.d.ts:584*

Method that process the props for the pagination

*__author__*: (Set the text for this tag by adding docthis.authorName to your settings file.)

*__memberof__*: Onboarding

**Returns:** [IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)

___
<a id="_processprops"></a>

### `<Private>` _processProps

▸ **_processProps**(): [IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)

*Defined in Onboarding/index.d.ts:567*

Method that process the props of the component

*__memberof__*: Onboarding

**Returns:** [IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)

___
<a id="_skiptolastpage"></a>

### `<Private>` _skipToLastPage

▸ **_skipToLastPage**(): `void`

*Defined in Onboarding/index.d.ts:559*

Method that changes to the last page

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="componentdidcatch"></a>

### `<Optional>` componentDidCatch

▸ **componentDidCatch**(error: *`Error`*, errorInfo: *`ErrorInfo`*): `void`

*Inherited from ComponentLifecycle.componentDidCatch*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:567*

Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` |
| errorInfo | `ErrorInfo` |

**Returns:** `void`

___
<a id="componentdidmount"></a>

### `<Optional>` componentDidMount

▸ **componentDidMount**(): `void`

*Inherited from ComponentLifecycle.componentDidMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:546*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** `void`

___
<a id="componentdidupdate"></a>

###  componentDidUpdate

▸ **componentDidUpdate**(): `void`

*Overrides NewLifecycle.componentDidUpdate*

*Defined in Onboarding/index.d.ts:467*

Method that fire when the component is updated

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="componentwillmount"></a>

### `<Optional>` componentWillMount

▸ **componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.componentWillMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:624*

Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use componentDidMount or the constructor instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Returns:** `void`

___
<a id="componentwillreceiveprops"></a>

### `<Optional>` componentWillReceiveProps

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillReceiveProps*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:653*

Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="componentwillunmount"></a>

### `<Optional>` componentWillUnmount

▸ **componentWillUnmount**(): `void`

*Inherited from ComponentLifecycle.componentWillUnmount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:562*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** `void`

___
<a id="componentwillupdate"></a>

### `<Optional>` componentWillUpdate

▸ **componentWillUpdate**(nextProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, nextState: *`Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:683*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| nextState | `Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="defaultpages"></a>

###  defaultPages

▸ **defaultPages**(): [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md)[]

*Defined in Onboarding/index.d.ts:481*

Method that define 3 pages by default

*__memberof__*: Onboarding

**Returns:** [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md)[]

___
<a id="forceupdate"></a>

###  forceUpdate

▸ **forceUpdate**(callback?: *`undefined` \| `function`*): `void`

*Inherited from Component.forceUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:442*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `void`

___
<a id="getcurrentpage"></a>

###  getCurrentPage

▸ **getCurrentPage**(): [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md) \| `undefined`

*Defined in Onboarding/index.d.ts:495*

Method to get the current page

*__memberof__*: Onboarding

**Returns:** [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md) \| `undefined`

___
<a id="getpreviouspage"></a>

###  getPreviousPage

▸ **getPreviousPage**(): [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md) \| `undefined`

*Defined in Onboarding/index.d.ts:502*

Method to get the previous page

*__memberof__*: Onboarding

**Returns:** [IOnboardingPage](../interfaces/_onboarding_index_d_.ionboardingpage.md) \| `undefined`

___
<a id="getsnapshotbeforeupdate"></a>

### `<Optional>` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, prevState: *`Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:603*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| prevState | `Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)> |

**Returns:** `SS` \| `null`

___
<a id="gonext"></a>

###  goNext

▸ **goNext**(): `void`

*Defined in Onboarding/index.d.ts:509*

Method to advance to the next page

*__memberof__*: Onboarding

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): `TypeComponent`

*Overrides Component.render*

*Defined in Onboarding/index.d.ts:474*

Method that renders the component

*__memberof__*: Onboarding

**Returns:** `TypeComponent`

___
<a id="renderpage"></a>

###  renderPage

▸ **renderPage**(data?: *`any`*): `TypeComponent`

*Defined in Onboarding/index.d.ts:488*

Method that renders the page in the component

*__memberof__*: Onboarding

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |

**Returns:** `TypeComponent`

___
<a id="setstate"></a>

###  setState

▸ **setState**<`K`>(state: *`function` \| `null` \| `S` \| `object`*, callback?: *`undefined` \| `function`*): `void`

*Inherited from Component.setState*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:437*

**Type parameters:**

#### K :  `keyof IOnboardingState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `function` \| `null` \| `S` \| `object` |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `void`

___
<a id="shouldcomponentupdate"></a>

### `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)>*, nextState: *`Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:557*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IOnboardingProps](../interfaces/_onboarding_index_d_.ionboardingprops.md)> |
| nextState | `Readonly`<[IOnboardingState](../interfaces/_onboarding_index_d_.ionboardingstate.md)> |
| nextContext | `any` |

**Returns:** `boolean`

___

