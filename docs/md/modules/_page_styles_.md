[@ticmakers-react-native/onboarding](../README.md) > ["Page/styles"](../modules/_page_styles_.md)

# External module: "Page/styles"

## Index

### Variables

* [height](_page_styles_.md#height)
* [portrait](_page_styles_.md#portrait)
* [styles](_page_styles_.md#styles)
* [width](_page_styles_.md#width-2)

---

## Variables

<a id="height"></a>

###  height

**● height**: *`number`*

*Defined in Page/styles.ts:3*

___
<a id="portrait"></a>

### `<Const>` portrait

**● portrait**: *`boolean`* =  height > width

*Defined in Page/styles.ts:4*

___
<a id="styles"></a>

### `<Const>` styles

**● styles**: *`object`* =  StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: portrait ? 'center' : 'flex-start',
    // paddingTop: portrait ? 0 : 10,
  },

  backgroundImage: {
    left: 0,
    position: 'absolute',
    top: 0,
  },

  contentPage: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: portrait ? 'center' : 'flex-start',
    paddingTop: 60,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },

  bodyPage: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 60,
  },

  imageContainer: {
    alignItems: 'center',
    flex: 0,
    paddingBottom: portrait ? 60 : 10,
    width: '100%',
  },

  padding: {
    paddingHorizontal: 10,
  },

  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },

  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    paddingBottom: 15,
    textAlign: 'center',
  },

  titleLight: {
    color: '#000',
  },
})

*Defined in Page/styles.ts:6*

#### Type declaration

 backgroundImage: `object`

 left: `number`

 position: "absolute"

 top: `number`

 bodyPage: `object`

 alignItems: "center"

 flex: `number`

 flexDirection: "column"

 justifyContent: "center"

 marginBottom: `number`

 container: `object`

 flex: `number`

 flexDirection: "column"

 contentPage: `object`

 flex: `number`

 flexDirection: "column"

 paddingTop: `number`

 headerContainer: `object`

 alignItems: "center"

 flex: `number`

 justifyContent: "center"

 marginBottom: `number`

 width: `string`

 imageContainer: `object`

 alignItems: "center"

 flex: `number`

 paddingBottom: `number`

 width: `string`

 padding: `object`

 paddingHorizontal: `number`

 subtitle: `object`

 color: `string`

 fontSize: `number`

 textAlign: "center"

 subtitleLight: `object`

 color: `string`

 title: `object`

 color: `string`

 fontSize: `number`

 paddingBottom: `number`

 textAlign: "center"

 titleLight: `object`

 color: `string`

___
<a id="width-2"></a>

###  width

**● width**: *`number`*

*Defined in Page/styles.ts:3*

___

