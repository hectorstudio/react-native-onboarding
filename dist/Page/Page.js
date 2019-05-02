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
var styles_1 = require("./styles");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: this._processStyle() },
            this.Header(),
            this.Image(),
            this.Title(),
            this.Subtitle()));
    };
    Page.prototype.Header = function () {
        var _a = this._processProps(), header = _a.header, headerContainerStyle = _a.headerContainerStyle;
        var props = {
            style: react_native_1.StyleSheet.flatten([styles_1.default.headerContainer, headerContainerStyle]),
        };
        return (React.createElement(react_native_1.View, __assign({}, props), header));
    };
    Page.prototype.Image = function () {
        var _a = this._processProps(), image = _a.image, imageContainerStyle = _a.imageContainerStyle;
        var props = {
            style: react_native_1.StyleSheet.flatten([styles_1.default.imageContainer, imageContainerStyle]),
        };
        return (React.createElement(react_native_1.View, __assign({}, props), image));
    };
    Page.prototype.Title = function () {
        var _a = this._processProps(), allowFontScaling = _a.allowFontScaling, isLight = _a.isLight, title = _a.title, titleStyle = _a.titleStyle;
        if (core_1.AppHelper.isComponent(title)) {
            return React.cloneElement(title, { style: titleStyle });
        }
        var props = {
            allowFontScaling: allowFontScaling,
            style: react_native_1.StyleSheet.flatten([styles_1.default.title, isLight && styles_1.default.titleLight, titleStyle]),
        };
        return (React.createElement(react_native_1.View, { style: [styles_1.default.padding] },
            React.createElement(react_native_1.Text, __assign({}, props), title)));
    };
    Page.prototype.Subtitle = function () {
        var _a = this._processProps(), allowFontScaling = _a.allowFontScaling, isLight = _a.isLight, subtitle = _a.subtitle, subtitleStyle = _a.subtitleStyle;
        if (core_1.AppHelper.isComponent(subtitle)) {
            return React.cloneElement(subtitle, { style: subtitleStyle });
        }
        var props = {
            allowFontScaling: allowFontScaling,
            style: react_native_1.StyleSheet.flatten([styles_1.default.subtitle, isLight && styles_1.default.subtitleLight, subtitleStyle]),
        };
        return (React.createElement(react_native_1.View, { style: styles_1.default.padding },
            React.createElement(react_native_1.Text, __assign({}, props), subtitle)));
    };
    Page.prototype._processProps = function () {
        var _a = this.props, allowFontScaling = _a.allowFontScaling, containerStyle = _a.containerStyle, header = _a.header, headerContainerStyle = _a.headerContainerStyle, height = _a.height, image = _a.image, imageContainerStyle = _a.imageContainerStyle, isLight = _a.isLight, options = _a.options, style = _a.style, subtitle = _a.subtitle, subtitleStyle = _a.subtitleStyle, title = _a.title, titleStyle = _a.titleStyle, width = _a.width;
        var props = {
            allowFontScaling: (options && options.allowFontScaling) || (allowFontScaling || true),
            containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
            header: (options && options.header) || (header || undefined),
            headerContainerStyle: (options && options.headerContainerStyle) || (headerContainerStyle || undefined),
            height: (options && options.height) || (height || undefined),
            image: (options && options.image) || (image || undefined),
            imageContainerStyle: (options && options.imageContainerStyle) || (imageContainerStyle || undefined),
            isLight: (options && options.isLight) || (isLight || false),
            style: (options && options.style) || (style || undefined),
            subtitle: (options && options.subtitle) || (subtitle || undefined),
            subtitleStyle: (options && options.subtitleStyle) || (subtitleStyle || undefined),
            title: (options && options.title) || (title || undefined),
            titleStyle: (options && options.titleStyle) || (titleStyle || undefined),
            width: (options && options.width) || (width || undefined),
        };
        return props;
    };
    Page.prototype._processStyle = function () {
        var _a = this._processProps(), containerStyle = _a.containerStyle, height = _a.height, width = _a.width;
        var _style = {};
        return react_native_1.StyleSheet.flatten([styles_1.default.container, _style, containerStyle, { height: height, width: width }]);
    };
    return Page;
}(React.Component));
exports.default = Page;
//# sourceMappingURL=Page.js.map