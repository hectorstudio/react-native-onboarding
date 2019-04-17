[@ticmakers-react-native/onboarding](../README.md) > ["Page/styles"](../modules/_page_styles_.md)

# External module: "Page/styles"

## Index

### Variables

* [height](_page_styles_.md#height)
* [potrait](_page_styles_.md#potrait)
* [styles](_page_styles_.md#styles)
* [width](_page_styles_.md#width-2)

---

## Variables

<a id="height"></a>

###  height

**● height**: *`number`*

*Defined in Page/styles.tsx:3*

___
<a id="potrait"></a>

### `<Const>` potrait

**● potrait**: *`boolean`* =  height > width

*Defined in Page/styles.tsx:4*

___
<a id="styles"></a>

### `<Const>` styles

**● styles**: *`object`* =  StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: potrait ? 'center' : 'flex-start',
    paddingTop: potrait ? 0 : 10,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    marginBottom: 60,
    width: '100%',
  },

  imageContainer: {
    alignItems: 'center',
    flex: 0,
    paddingBottom: potrait ? 60 : 10,
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

*Defined in Page/styles.tsx:6*

#### Type declaration

 container: `object`

 alignItems: "center"

 flex: `number`

 flexDirection: "column"

 justifyContent: "center" \| "flex-start"

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

*Defined in Page/styles.tsx:3*

___

