[@ticmakers-react-native/onboarding](../README.md) > ["Page/index.d"](../modules/_page_index_d_.md) > [Page](../classes/_page_index_d_.page.md)

# Class: Page

Class to define the component Page used in Onboarding

*__class__*: Page

*__extends__*: {React.Component<IPageProps, IPageState>}

## Type parameters
#### SS 
## Hierarchy

 `Component`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md), [IPageState](../interfaces/_page_index_d_.ipagestate.md)>

**↳ Page**

## Index

### Constructors

* [constructor](_page_index_d_.page.md#constructor)

### Properties

* [context](_page_index_d_.page.md#context)
* [props](_page_index_d_.page.md#props)
* [refs](_page_index_d_.page.md#refs)
* [state](_page_index_d_.page.md#state)
* [contextType](_page_index_d_.page.md#contexttype)

### Methods

* [Header](_page_index_d_.page.md#header)
* [Image](_page_index_d_.page.md#image)
* [Subtitle](_page_index_d_.page.md#subtitle)
* [Title](_page_index_d_.page.md#title)
* [UNSAFE_componentWillMount](_page_index_d_.page.md#unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_page_index_d_.page.md#unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_page_index_d_.page.md#unsafe_componentwillupdate)
* [_isComponent](_page_index_d_.page.md#_iscomponent)
* [_processProps](_page_index_d_.page.md#_processprops)
* [_processStyle](_page_index_d_.page.md#_processstyle)
* [componentDidCatch](_page_index_d_.page.md#componentdidcatch)
* [componentDidMount](_page_index_d_.page.md#componentdidmount)
* [componentDidUpdate](_page_index_d_.page.md#componentdidupdate)
* [componentWillMount](_page_index_d_.page.md#componentwillmount)
* [componentWillReceiveProps](_page_index_d_.page.md#componentwillreceiveprops)
* [componentWillUnmount](_page_index_d_.page.md#componentwillunmount)
* [componentWillUpdate](_page_index_d_.page.md#componentwillupdate)
* [forceUpdate](_page_index_d_.page.md#forceupdate)
* [getSnapshotBeforeUpdate](_page_index_d_.page.md#getsnapshotbeforeupdate)
* [render](_page_index_d_.page.md#render)
* [setState](_page_index_d_.page.md#setstate)
* [shouldComponentUpdate](_page_index_d_.page.md#shouldcomponentupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Page**(props: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*): [Page](_page_index_d_.page.md)

⊕ **new Page**(props: *[IPageProps](../interfaces/_page_index_d_.ipageprops.md)*, context?: *`any`*): [Page](_page_index_d_.page.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:404*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |

**Returns:** [Page](_page_index_d_.page.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:406*

*__deprecated__*: 

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [IPageProps](../interfaces/_page_index_d_.ipageprops.md) |
| `Optional` context | `any` |

**Returns:** [Page](_page_index_d_.page.md)

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

**● props**: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> & `Readonly`<`object`>*

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

**● state**: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*

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

<a id="header"></a>

###  Header

▸ **Header**(): `TypeComponent`

*Defined in Page/index.d.ts:137*

Method that renders the Header component

*__memberof__*: Page

**Returns:** `TypeComponent`

___
<a id="image"></a>

###  Image

▸ **Image**(): `TypeComponent`

*Defined in Page/index.d.ts:144*

Method that renders the Image component

*__memberof__*: Page

**Returns:** `TypeComponent`

___
<a id="subtitle"></a>

###  Subtitle

▸ **Subtitle**(): `TypeComponent`

*Defined in Page/index.d.ts:158*

Method that renders the Subtitle component

*__memberof__*: Page

**Returns:** `TypeComponent`

___
<a id="title"></a>

###  Title

▸ **Title**(): `TypeComponent`

*Defined in Page/index.d.ts:151*

Method that renders the Title component

*__memberof__*: Page

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

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

### `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, nextState: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| nextState | `Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="_iscomponent"></a>

### `<Private>` _isComponent

▸ **_isComponent**(kind: *`any`*): `boolean`

*Defined in Page/index.d.ts:183*

Method to valid if a object is a component

*__memberof__*: Page

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| kind | `any` |  Object to validate |

**Returns:** `boolean`

___
<a id="_processprops"></a>

### `<Private>` _processProps

▸ **_processProps**(): [IPageState](../interfaces/_page_index_d_.ipagestate.md)

*Defined in Page/index.d.ts:166*

Method that process the props of the component

*__memberof__*: Page

**Returns:** [IPageState](../interfaces/_page_index_d_.ipagestate.md)

___
<a id="_processstyle"></a>

### `<Private>` _processStyle

▸ **_processStyle**(): `TypeStyle`

*Defined in Page/index.d.ts:174*

Method to process the prop style of the component

*__memberof__*: Page

**Returns:** `TypeStyle`

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

▸ **componentDidUpdate**(prevProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, prevState: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*, snapshot?: *[SS]()*): `void`

*Inherited from NewLifecycle.componentDidUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:588*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| prevState | `Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)> |
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

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
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

▸ **componentWillUpdate**(nextProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, nextState: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| nextState | `Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)> |
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

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, prevState: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:582*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| prevState | `Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)> |

**Returns:** `SS` \| `null`

___
<a id="render"></a>

###  render

▸ **render**(): `TypeComponent`

*Overrides Component.render*

*Defined in Page/index.d.ts:130*

Method that renders the component

*__memberof__*: Page

**Returns:** `TypeComponent`

___
<a id="setstate"></a>

###  setState

▸ **setState**<`K`>(state: *`function` \| `null` \| `S` \| `object`*, callback?: *`undefined` \| `function`*): `void`

*Inherited from Component.setState*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:416*

**Type parameters:**

#### K :  `keyof IPageState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `function` \| `null` \| `S` \| `object` |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `void`

___
<a id="shouldcomponentupdate"></a>

### `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)>*, nextState: *`Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:536*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IPageProps](../interfaces/_page_index_d_.ipageprops.md)> |
| nextState | `Readonly`<[IPageState](../interfaces/_page_index_d_.ipagestate.md)> |
| nextContext | `any` |

**Returns:** `boolean`

___
