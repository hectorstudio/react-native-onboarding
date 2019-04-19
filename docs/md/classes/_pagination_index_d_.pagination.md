[@ticmakers-react-native/onboarding](../README.md) > ["Pagination/index.d"](../modules/_pagination_index_d_.md) > [Pagination](../classes/_pagination_index_d_.pagination.md)

# Class: Pagination

Class to define the Pagination component used in Onboarding

*__class__*: Pagination

*__extends__*: {React.Component<IPaginationProps, IPaginationState>}

## Type parameters
#### SS 
## Hierarchy

 `Component`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md), [IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>

**↳ Pagination**

## Index

### Constructors

* [constructor](_pagination_index_d_.pagination.md#constructor)

### Properties

* [context](_pagination_index_d_.pagination.md#context)
* [props](_pagination_index_d_.pagination.md#props)
* [refs](_pagination_index_d_.pagination.md#refs)
* [state](_pagination_index_d_.pagination.md#state)
* [contextType](_pagination_index_d_.pagination.md#contexttype)

### Methods

* [CenterContent](_pagination_index_d_.pagination.md#centercontent)
* [Done](_pagination_index_d_.pagination.md#done)
* [Dots](_pagination_index_d_.pagination.md#dots)
* [LeftContent](_pagination_index_d_.pagination.md#leftcontent)
* [Next](_pagination_index_d_.pagination.md#next)
* [RightContent](_pagination_index_d_.pagination.md#rightcontent)
* [Skip](_pagination_index_d_.pagination.md#skip)
* [UNSAFE_componentWillMount](_pagination_index_d_.pagination.md#unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_pagination_index_d_.pagination.md#unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_pagination_index_d_.pagination.md#unsafe_componentwillupdate)
* [_getContent](_pagination_index_d_.pagination.md#_getcontent)
* [_isComponent](_pagination_index_d_.pagination.md#_iscomponent)
* [_processProps](_pagination_index_d_.pagination.md#_processprops)
* [componentDidCatch](_pagination_index_d_.pagination.md#componentdidcatch)
* [componentDidMount](_pagination_index_d_.pagination.md#componentdidmount)
* [componentDidUpdate](_pagination_index_d_.pagination.md#componentdidupdate)
* [componentWillMount](_pagination_index_d_.pagination.md#componentwillmount)
* [componentWillReceiveProps](_pagination_index_d_.pagination.md#componentwillreceiveprops)
* [componentWillUnmount](_pagination_index_d_.pagination.md#componentwillunmount)
* [componentWillUpdate](_pagination_index_d_.pagination.md#componentwillupdate)
* [forceUpdate](_pagination_index_d_.pagination.md#forceupdate)
* [getSnapshotBeforeUpdate](_pagination_index_d_.pagination.md#getsnapshotbeforeupdate)
* [isLastPage](_pagination_index_d_.pagination.md#islastpage)
* [render](_pagination_index_d_.pagination.md#render)
* [setState](_pagination_index_d_.pagination.md#setstate)
* [shouldComponentUpdate](_pagination_index_d_.pagination.md#shouldcomponentupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Pagination**(props: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*): [Pagination](_pagination_index_d_.pagination.md)

⊕ **new Pagination**(props: *[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)*, context?: *`any`*): [Pagination](_pagination_index_d_.pagination.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:404*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |

**Returns:** [Pagination](_pagination_index_d_.pagination.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:406*

*__deprecated__*: 

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md) |
| `Optional` context | `any` |

**Returns:** [Pagination](_pagination_index_d_.pagination.md)

___

## Properties

<a id="context"></a>

###  context

**● context**: *`any`*

*Inherited from Component.context*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:404*

If using the new style context, re-declare this in your class to be the `React.ContextType` of your `static contextType`.

```ts
static contextType = MyContext
context!: React.ContextType<typeof MyContext>
```

*__deprecated__*: if used without a type annotation, or without static contextType

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

___
<a id="props"></a>

###  props

**● props**: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> & `Readonly`<`object`>*

*Inherited from Component.props*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:429*

___
<a id="refs"></a>

###  refs

**● refs**: *`object`*

*Inherited from Component.refs*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:435*

*__deprecated__*: [https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)

#### Type declaration

[key: `string`]: `ReactInstance`

___
<a id="state"></a>

###  state

**● state**: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*

*Inherited from Component.state*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:430*

___
<a id="contexttype"></a>

### `<Static>``<Optional>` contextType

**● contextType**: *`Context`<`any`>*

*Inherited from Component.contextType*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:389*

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

<a id="centercontent"></a>

###  CenterContent

▸ **CenterContent**(): `TypeComponent`

*Defined in Pagination/index.d.ts:297*

Method that renders the center container component

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="done"></a>

###  Done

▸ **Done**(): `TypeComponent`

*Defined in Pagination/index.d.ts:312*

Method that renders the Done button

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="dots"></a>

###  Dots

▸ **Dots**(): `TypeComponent`

*Defined in Pagination/index.d.ts:319*

Method that renders the pagination Dots

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="leftcontent"></a>

###  LeftContent

▸ **LeftContent**(): `TypeComponent`

*Defined in Pagination/index.d.ts:290*

Method that renders the left container component

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="next"></a>

###  Next

▸ **Next**(): `TypeComponent`

*Defined in Pagination/index.d.ts:326*

Method that renders the Next button

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="rightcontent"></a>

###  RightContent

▸ **RightContent**(): `TypeComponent`

*Defined in Pagination/index.d.ts:304*

Method that renders the right container component

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="skip"></a>

###  Skip

▸ **Skip**(): `TypeComponent`

*Defined in Pagination/index.d.ts:333*

Methods that renders the Skip button

*__memberof__*: Pagination

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

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

### `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, nextState: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| nextState | `Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="_getcontent"></a>

### `<Private>` _getContent

▸ **_getContent**(position: *[TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition)*): `TypeComponent`[]

*Defined in Pagination/index.d.ts:349*

Method that renders the content of each container (left, center and right)

*__memberof__*: Pagination

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| position | [TypePaginationPosition](../modules/_pagination_index_d_.md#typepaginationposition) |  Position of the container |

**Returns:** `TypeComponent`[]

___
<a id="_iscomponent"></a>

### `<Private>` _isComponent

▸ **_isComponent**(kind: *`any`*): `boolean`

*Defined in Pagination/index.d.ts:366*

Method to valid if a object is a component

*__memberof__*: Pagination

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| kind | `any` |  Object to validate |

**Returns:** `boolean`

___
<a id="_processprops"></a>

### `<Private>` _processProps

▸ **_processProps**(): [IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)

*Defined in Pagination/index.d.ts:357*

Method that process the props of the component

*__memberof__*: Pagination

**Returns:** [IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)

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

### `<Optional>` componentDidMount

▸ **componentDidMount**(): `void`

*Inherited from ComponentLifecycle.componentDidMount*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:525*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** `void`

___
<a id="componentdidupdate"></a>

### `<Optional>` componentDidUpdate

▸ **componentDidUpdate**(prevProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, prevState: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*, snapshot?: *[SS]()*): `void`

*Inherited from NewLifecycle.componentDidUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:588*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| prevState | `Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)> |
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

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
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

▸ **componentWillUpdate**(nextProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, nextState: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| nextState | `Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="forceupdate"></a>

###  forceUpdate

▸ **forceUpdate**(callBack?: *`undefined` \| `function`*): `void`

*Inherited from Component.forceUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:421*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callBack | `undefined` \| `function` |

**Returns:** `void`

___
<a id="getsnapshotbeforeupdate"></a>

### `<Optional>` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, prevState: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:582*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| prevState | `Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)> |

**Returns:** `SS` \| `null`

___
<a id="islastpage"></a>

###  isLastPage

▸ **isLastPage**(): `boolean`

*Defined in Pagination/index.d.ts:340*

Method to check if the current page is the last page

*__memberof__*: Pagination

**Returns:** `boolean`

___
<a id="render"></a>

###  render

▸ **render**(): `TypeComponent`

*Overrides Component.render*

*Defined in Pagination/index.d.ts:283*

Method that renders the component

*__memberof__*: Pagination

**Returns:** `TypeComponent`

___
<a id="setstate"></a>

###  setState

▸ **setState**<`K`>(state: *`function` \| `null` \| `S` \| `object`*, callback?: *`undefined` \| `function`*): `void`

*Inherited from Component.setState*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:416*

**Type parameters:**

#### K :  `keyof IPaginationState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `function` \| `null` \| `S` \| `object` |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `void`

___
<a id="shouldcomponentupdate"></a>

### `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)>*, nextState: *`Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:536*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IPaginationProps](../interfaces/_pagination_index_d_.ipaginationprops.md)> |
| nextState | `Readonly`<[IPaginationState](../interfaces/_pagination_index_d_.ipaginationstate.md)> |
| nextContext | `any` |

**Returns:** `boolean`

___

