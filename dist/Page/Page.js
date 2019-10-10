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
var image_1 = require("@ticmakers-react-native/image");
var core_1 = require("@ticmakers-react-native/core");
var styles_1 = require("./styles");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this._processProps(), height = _a.height, width = _a.width;
        _this.state = {
            height: height,
            width: width,
        };
        return _this;
    }
    Page.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: this._processStyle() },
            this.ImageBackground(),
            React.createElement(react_native_1.View, { style: styles_1.default.contentPage },
                this.Header(),
                React.createElement(react_native_1.View, { style: styles_1.default.bodyPage },
                    this.Image(),
                    this.Title(),
                    this.Subtitle()))));
    };
    Page.prototype.ImageBackground = function () {
        var backgroundImage = this._processProps().backgroundImage;
        var _a = this.state, height = _a.height, width = _a.width;
        if (typeof backgroundImage !== 'undefined') {
            return (React.createElement(image_1.default, { source: backgroundImage, style: react_native_1.StyleSheet.flatten([styles_1.default.backgroundImage, { height: height, width: width }]) }));
        }
    };
    Page.prototype.Header = function () {
        var _a = this._processProps(), header = _a.header, headerContainerStyle = _a.headerContainerStyle;
        var props = {
            style: react_native_1.StyleSheet.flatten([styles_1.default.headerContainer, headerContainerStyle]),
        };
        var headerProps = {
            style: react_native_1.StyleSheet.flatten([{ resizeMode: 'contain', height: 160 }]),
        };
        if (core_1.AppHelper.isComponent(header)) {
            return (React.createElement(react_native_1.View, __assign({}, props), React.cloneElement(header)));
        }
        if (typeof header === 'number' || header && header.uri) {
            return (React.createElement(react_native_1.View, __assign({}, props), React.createElement(image_1.default, __assign({ source: header }, headerProps))));
        }
        if (typeof header !== 'undefined') {
            return (React.createElement(react_native_1.View, __assign({}, props), header));
        }
    };
    Page.prototype.Image = function () {
        var _a = this._processProps(), image = _a.image, imageContainerStyle = _a.imageContainerStyle;
        var props = {
            style: react_native_1.StyleSheet.flatten([styles_1.default.imageContainer, imageContainerStyle]),
        };
        var imageProps = {
            style: react_native_1.StyleSheet.flatten([{ resizeMode: 'contain', height: 160 }]),
        };
        if (core_1.AppHelper.isComponent(image)) {
            return (React.createElement(react_native_1.View, __assign({}, props), React.cloneElement(image)));
        }
        if (typeof image === 'number' || image && image.uri) {
            return (React.createElement(react_native_1.View, __assign({}, props), React.createElement(image_1.default, __assign({ source: image }, imageProps))));
        }
        if (typeof image !== 'undefined') {
            return (React.createElement(react_native_1.View, __assign({}, props), React.createElement(image_1.default, __assign({}, image, imageProps))));
        }
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
        if (title) {
            return (React.createElement(react_native_1.View, { style: [styles_1.default.padding] },
                React.createElement(react_native_1.Text, __assign({}, props), title)));
        }
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
        if (subtitle) {
            return (React.createElement(react_native_1.View, { style: styles_1.default.padding },
                React.createElement(react_native_1.Text, __assign({}, props), subtitle)));
        }
    };
    Page.prototype._processProps = function () {
        var _a = this.props, allowFontScaling = _a.allowFontScaling, backgroundImage = _a.backgroundImage, containerStyle = _a.containerStyle, header = _a.header, headerContainerStyle = _a.headerContainerStyle, height = _a.height, image = _a.image, imageContainerStyle = _a.imageContainerStyle, isLight = _a.isLight, style = _a.style, subtitle = _a.subtitle, subtitleStyle = _a.subtitleStyle, title = _a.title, titleStyle = _a.titleStyle, width = _a.width;
        var props = {
            allowFontScaling: (typeof allowFontScaling !== 'undefined' ? allowFontScaling : true),
            backgroundImage: (typeof backgroundImage !== 'undefined' ? backgroundImage : undefined),
            containerStyle: (typeof containerStyle !== 'undefined' ? containerStyle : undefined),
            header: (typeof header !== 'undefined' ? header : undefined),
            headerContainerStyle: (typeof headerContainerStyle !== 'undefined' ? headerContainerStyle : undefined),
            height: (typeof height !== 'undefined' ? height : react_native_1.Dimensions.get('screen').height),
            image: (typeof image !== 'undefined' ? image : undefined),
            imageContainerStyle: (typeof imageContainerStyle !== 'undefined' ? imageContainerStyle : undefined),
            isLight: (typeof isLight !== 'undefined' ? isLight : false),
            style: (typeof style !== 'undefined' ? style : undefined),
            subtitle: (typeof subtitle !== 'undefined' ? subtitle : undefined),
            subtitleStyle: (typeof subtitleStyle !== 'undefined' ? subtitleStyle : undefined),
            title: (typeof title !== 'undefined' ? title : undefined),
            titleStyle: (typeof titleStyle !== 'undefined' ? titleStyle : undefined),
            width: (typeof width !== 'undefined' ? width : react_native_1.Dimensions.get('screen').width),
        };
        return props;
    };
    Page.prototype._processStyle = function () {
        var containerStyle = this._processProps().containerStyle;
        var _a = this.state, height = _a.height, width = _a.width;
        var _style = {};
        return react_native_1.StyleSheet.flatten([styles_1.default.container, _style, containerStyle, { height: height, width: width }]);
    };
    return Page;
}(React.Component));
exports.default = Page;
//# sourceMappingURL=Page.js.map