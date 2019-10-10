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
var styles_1 = require("./styles");
var Dot = (function (_super) {
    __extends(Dot, _super);
    function Dot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dot.prototype.render = function () {
        return (React.createElement(react_native_1.View, __assign({}, this.props, { style: this._processStyle() })));
    };
    Dot.prototype._processProps = function () {
        var _a = this.props, Component = _a.Component, color = _a.color, colorSelected = _a.colorSelected, isLight = _a.isLight, selected = _a.selected, selectedStyle = _a.selectedStyle, size = _a.size, style = _a.style;
        var props = {
            Component: (typeof Component !== 'undefined' ? Component : undefined),
            color: (typeof color !== 'undefined' ? color : undefined),
            colorSelected: (typeof colorSelected !== 'undefined' ? colorSelected : undefined),
            isLight: (typeof isLight !== 'undefined' ? isLight : false),
            selected: (typeof selected !== 'undefined' ? selected : false),
            selectedStyle: (typeof selectedStyle !== 'undefined' ? selectedStyle : undefined),
            size: (typeof size !== 'undefined' ? size : undefined),
            style: (typeof style !== 'undefined' ? style : undefined),
        };
        return props;
    };
    Dot.prototype._processStyle = function () {
        var _a = this._processProps(), color = _a.color, colorSelected = _a.colorSelected, isLight = _a.isLight, selected = _a.selected, selectedStyle = _a.selectedStyle, size = _a.size, style = _a.style;
        var _style = {};
        if (isLight) {
            _style.backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
        }
        else {
            _style.backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        if (color) {
            _style.backgroundColor = color;
        }
        if (colorSelected && selected) {
            _style.backgroundColor = colorSelected;
        }
        if (size) {
            _style.width = _style.height = size;
            _style.borderRadius = size / 2;
        }
        return react_native_1.StyleSheet.flatten([styles_1.default.dot, _style, selected && selectedStyle, style]);
    };
    return Dot;
}(React.Component));
exports.default = Dot;
//# sourceMappingURL=Dot.js.map