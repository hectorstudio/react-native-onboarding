"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
var potrait = height > width;
exports.styles = react_native_1.StyleSheet.create({
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
});
exports.default = exports.styles;
//# sourceMappingURL=styles.js.map