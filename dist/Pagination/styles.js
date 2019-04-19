"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    leftContainer: {
        alignItems: 'flex-start',
        flexGrow: 1,
        width: 100,
    },
    centerContainer: {
        alignItems: 'center',
        flexGrow: 1,
    },
    rightContainer: {
        alignItems: 'flex-end',
        flexGrow: 1,
        width: 100,
    },
    dots: {
        flexShrink: 0,
    },
    colorLight: {
        color: 'white',
    },
    colorDark: {
        color: 'black',
    },
});
exports.default = exports.styles;
//# sourceMappingURL=styles.js.map