[@ticmakers-react-native/onboarding](../README.md) > ["Dots/index.d"](../modules/_dots_index_d_.md) > [Dots](../classes/_dots_index_d_.dots.md)

# Class: Dots

Class to define the Dots components used in Onboarding

*__class__*: Dots

*__extends__*: {React.Component<IDotsProps, IDotsState>}

## Type parameters
#### SS 
## Hierarchy

 `Component`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md), [IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>

**↳ Dots**

## Index

### Constructors

* [constructor](_dots_index_d_.dots.md#constructor)

### Properties

* [context](_dots_index_d_.dots.md#context)
* [props](_dots_index_d_.dots.md#props)
* [refs](_dots_index_d_.dots.md#refs)
* [state](_dots_index_d_.dots.md#state)
* [contextType](_dots_index_d_.dots.md#contexttype)

### Methods

* [UNSAFE_componentWillMount](_dots_index_d_.dots.md#unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_dots_index_d_.dots.md#unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_dots_index_d_.dots.md#unsafe_componentwillupdate)
* [_processProps](_dots_index_d_.dots.md#_processprops)
* [_processStyle](_dots_index_d_.dots.md#_processstyle)
* [componentDidCatch](_dots_index_d_.dots.md#componentdidcatch)
* [componentDidMount](_dots_index_d_.dots.md#componentdidmount)
* [componentDidUpdate](_dots_index_d_.dots.md#componentdidupdate)
* [componentWillMount](_dots_index_d_.dots.md#componentwillmount)
* [componentWillReceiveProps](_dots_index_d_.dots.md#componentwillreceiveprops)
* [componentWillUnmount](_dots_index_d_.dots.md#componentwillunmount)
* [componentWillUpdate](_dots_index_d_.dots.md#componentwillupdate)
* [forceUpdate](_dots_index_d_.dots.md#forceupdate)
* [getSnapshotBeforeUpdate](_dots_index_d_.dots.md#getsnapshotbeforeupdate)
* [render](_dots_index_d_.dots.md#render)
* [setState](_dots_index_d_.dots.md#setstate)
* [shouldComponentUpdate](_dots_index_d_.dots.md#shouldcomponentupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Dots**(props: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*): [Dots](_dots_index_d_.dots.md)

⊕ **new Dots**(props: *[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)*, context?: *`any`*): [Dots](_dots_index_d_.dots.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:425*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |

**Returns:** [Dots](_dots_index_d_.dots.md)

*Inherited from Component.__constructor*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:427*

*__deprecated__*: 

*__see__*: [https://reactjs.org/docs/legacy-context.html](https://reactjs.org/docs/legacy-context.html)

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [IDotsProps](../interfaces/_dots_index_d_.idotsprops.md) |
| `Optional` context | `any` |

**Returns:** [Dots](_dots_index_d_.dots.md)

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
<a id="props"></a>

###  props

**● props**: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> & `Readonly`<`object`>*

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

**● state**: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*

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

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

### `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, nextState: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| nextState | `Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="_processprops"></a>

### `<Private>` _processProps

▸ **_processProps**(): [IDotsState](../interfaces/_dots_index_d_.idotsstate.md)

*Defined in Dots/index.d.ts:89*

Method to process the props

**Returns:** [IDotsState](../interfaces/_dots_index_d_.idotsstate.md)

___
<a id="_processstyle"></a>

### `<Private>` _processStyle

▸ **_processStyle**(): `TypeStyle`

*Defined in Dots/index.d.ts:96*

Method to process the prop style

**Returns:** `TypeStyle`

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

### `<Optional>` componentDidUpdate

▸ **componentDidUpdate**(prevProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, prevState: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*, snapshot?: *[SS]()*): `void`

*Inherited from NewLifecycle.componentDidUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:609*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| prevState | `Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)> |
| `Optional` snapshot | [SS]() |

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

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
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

▸ **componentWillUpdate**(nextProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, nextState: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*, nextContext: *`any`*): `void`

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
| nextProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| nextState | `Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)> |
| nextContext | `any` |

**Returns:** `void`

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
<a id="getsnapshotbeforeupdate"></a>

### `<Optional>` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, prevState: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:603*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| prevState | `Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)> |

**Returns:** `SS` \| `null`

___
<a id="render"></a>

###  render

▸ **render**(): `TypeComponent`

*Overrides Component.render*

*Defined in Dots/index.d.ts:82*

Method to renders the component

**Returns:** `TypeComponent`

___
<a id="setstate"></a>

###  setState

▸ **setState**<`K`>(state: *`function` \| `null` \| `S` \| `object`*, callback?: *`undefined` \| `function`*): `void`

*Inherited from Component.setState*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:437*

**Type parameters:**

#### K :  `keyof IDotsState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `function` \| `null` \| `S` \| `object` |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `void`

___
<a id="shouldcomponentupdate"></a>

### `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)>*, nextState: *`Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/hackettyam/www/@ticmakers/react-native/OnBoarding/node_modules/@types/react/index.d.ts:557*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[IDotsProps](../interfaces/_dots_index_d_.idotsprops.md)> |
| nextState | `Readonly`<[IDotsState](../interfaces/_dots_index_d_.idotsstate.md)> |
| nextContext | `any` |

**Returns:** `boolean`

___

