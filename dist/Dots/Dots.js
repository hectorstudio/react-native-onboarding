"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var core_1 = require("@ticmakers-react-native/core");
var Dot_1 = require("./../Dot/Dot");
var styles_1 = require("./styles");
var Dots = (function (_super) {
    __extends(Dots, _super);
    function Dots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dots.prototype.render = function () {
        return (React.createElement(react_native_1.View, __assign({}, this.props, { style: this._processStyle() }), this.Dot()));
    };
    Dots.prototype.Dot = function () {
        var _a = this._processProps(), DotComponent = _a.DotComponent, color = _a.color, colorSelected = _a.colorSelected, currentPage = _a.currentPage, isLight = _a.isLight, numPages = _a.numPages, selectedStyle = _a.selectedStyle, size = _a.size;
        var dots = [];
        for (var i = 0; i < numPages; i++) {
            var props = {
                color: color,
                colorSelected: colorSelected,
                isLight: isLight,
                selectedStyle: selectedStyle,
                size: size,
                selected: i === currentPage,
                key: i,
            };
            if (core_1.AppHelper.isComponent(DotComponent) || core_1.AppHelper.isElement(DotComponent)) {
                dots.push(React.cloneElement(DotComponent, props));
            }
            else {
                dots.push(React.createElement(Dot_1.default, __assign({}, props)));
            }
        }
        return dots;
    };
    Dots.prototype._processProps = function () {
        var _a = this.props, DotComponent = _a.DotComponent, color = _a.color, colorSelected = _a.colorSelected, currentPage = _a.currentPage, isLight = _a.isLight, numPages = _a.numPages, selectedStyle = _a.selectedStyle, size = _a.size, style = _a.style;
        var props = {
            DotComponent: (typeof DotComponent !== 'undefined' ? DotComponent : undefined),
            color: (typeof color !== 'undefined' ? color : undefined),
            colorSelected: (typeof colorSelected !== 'undefined' ? colorSelected : undefined),
            currentPage: (typeof currentPage !== 'undefined' ? currentPage : 0),
            isLight: (typeof isLight !== 'undefined' ? isLight : false),
            numPages: (typeof numPages !== 'undefined' ? numPages : undefined),
            selectedStyle: (typeof selectedStyle !== 'undefined' ? selectedStyle : undefined),
            size: (typeof size !== 'undefined' ? size : undefined),
            style: (typeof style !== 'undefined' ? style : undefined),
        };
        return props;
    };
    Dots.prototype._processStyle = function () {
        var style = this._processProps().style;
        return react_native_1.StyleSheet.flatten([styles_1.default.container, style]);
    };
    return Dots;
}(React.Component));
exports.default = Dots;
//# sourceMappingURL=Dots.js.map