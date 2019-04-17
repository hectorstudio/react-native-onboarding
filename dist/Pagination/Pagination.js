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
var Dots_1 = require("./../Dots/Dots");
var DoneButton_1 = require("./../Pagination/DoneButton");
var button_1 = require("@ticmakers-react-native/button");
var styles_1 = require("./styles");
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this._processProps(), bottomBarHeight = _a.bottomBarHeight, containerStyle = _a.containerStyle;
        var _style = react_native_1.StyleSheet.flatten([__assign({ height: bottomBarHeight }, styles_1.default.container), containerStyle]);
        return (React.createElement(react_native_1.View, { style: _style },
            this.LeftContent(),
            this.CenterContent(),
            this.RightContent()));
    };
    Pagination.prototype.LeftContent = function () {
        var leftContainerStyle = this._processProps().leftContainerStyle;
        var _style = react_native_1.StyleSheet.flatten([styles_1.default.leftContainer, leftContainerStyle]);
        return React.createElement(react_native_1.View, { style: _style }, this._getContent('left'));
    };
    Pagination.prototype.CenterContent = function () {
        var centerContainerStyle = this._processProps().centerContainerStyle;
        var _style = react_native_1.StyleSheet.flatten([styles_1.default.centerContainer, centerContainerStyle]);
        return React.createElement(react_native_1.View, { style: _style }, this._getContent('center'));
    };
    Pagination.prototype.RightContent = function () {
        var rightContainerStyle = this._processProps().rightContainerStyle;
        var _style = react_native_1.StyleSheet.flatten([styles_1.default.rightContainer, rightContainerStyle]);
        return React.createElement(react_native_1.View, { style: _style }, this._getContent('right'));
    };
    Pagination.prototype.Done = function () {
        var _a = this._processProps(), DoneComponent = _a.DoneComponent, allowFontScaling = _a.allowFontScaling, doneLabel = _a.doneLabel, doneStyle = _a.doneStyle, hideDone = _a.hideDone, isLight = _a.isLight, onDone = _a.onDone;
        var props = {
            allowFontScaling: allowFontScaling,
            key: 'done',
            onPress: function () { return onDone && onDone(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, { alignSelf: 'center' }, doneStyle]),
            title: doneLabel,
        };
        if (!hideDone && this.isLastPage()) {
            if (this._isComponent(DoneComponent)) {
                return React.cloneElement(DoneComponent, props);
            }
            else if (props.title) {
                return React.cloneElement(DoneButton_1.default, props);
            }
            return React.createElement(DoneButton_1.default, { key: "done", style: { paddingHorizontal: 8, paddingVertical: 6 } });
        }
    };
    Pagination.prototype.Dots = function () {
        var _a = this._processProps(), DotComponent = _a.DotComponent, currentPage = _a.currentPage, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, hideDots = _a.hideDots, isLight = _a.isLight, numPages = _a.numPages;
        var props = {
            DotComponent: DotComponent,
            currentPage: currentPage,
            isLight: isLight,
            numPages: numPages,
            key: 'dots',
            size: dotsSize,
            style: react_native_1.StyleSheet.flatten([styles_1.default.dots, dotsStyle]),
        };
        if (!hideDots) {
            return React.createElement(Dots_1.default, __assign({}, props));
        }
    };
    Pagination.prototype.Next = function () {
        var _a = this._processProps(), NextComponent = _a.NextComponent, allowFontScaling = _a.allowFontScaling, hideNext = _a.hideNext, isLight = _a.isLight, nextLabel = _a.nextLabel, nextStyle = _a.nextStyle, onNext = _a.onNext;
        var props = {
            allowFontScaling: allowFontScaling,
            key: 'skip',
            onPress: function () { return onNext && onNext(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, { alignSelf: 'center' }, nextStyle]),
            title: nextLabel,
        };
        if (!hideNext && !this.isLastPage()) {
            if (this._isComponent(NextComponent)) {
                return React.cloneElement(NextComponent, props);
            }
            return React.createElement(button_1.default, __assign({ clear: true }, props));
        }
    };
    Pagination.prototype.Skip = function () {
        var _a = this._processProps(), SkipComponent = _a.SkipComponent, allowFontScaling = _a.allowFontScaling, onSkip = _a.onSkip, skipLabel = _a.skipLabel, skipStyle = _a.skipStyle, hideSkip = _a.hideSkip, isLight = _a.isLight;
        var props = {
            allowFontScaling: allowFontScaling,
            key: 'skip',
            onPress: function () { return onSkip && onSkip(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, skipStyle]),
            title: skipLabel,
        };
        if (!hideSkip) {
            if (this._isComponent(SkipComponent)) {
                return React.cloneElement(SkipComponent, props);
            }
            return React.createElement(button_1.default, __assign({ clear: true }, props));
        }
    };
    Pagination.prototype.isLastPage = function () {
        var _a = this._processProps(), currentPage = _a.currentPage, numPages = _a.numPages;
        return (currentPage || 0) + 1 === numPages;
    };
    Pagination.prototype._getContent = function (position) {
        var _a = this._processProps(), donePosition = _a.donePosition, dotsPosition = _a.dotsPosition, nextPosition = _a.nextPosition, skipPosition = _a.skipPosition;
        var pos = position;
        var children = [];
        if (donePosition === pos) {
            children.push(this.Done());
        }
        if (dotsPosition === pos) {
            children.push(this.Dots());
        }
        if (nextPosition === pos) {
            children.push(this.Next());
        }
        if (skipPosition === pos) {
            children.push(this.Skip());
        }
        return children;
    };
    Pagination.prototype._processProps = function () {
        var _a = this.props, DoneComponent = _a.DoneComponent, DotComponent = _a.DotComponent, NextComponent = _a.NextComponent, SkipComponent = _a.SkipComponent, allowFontScaling = _a.allowFontScaling, bottomBarHeight = _a.bottomBarHeight, centerContainerStyle = _a.centerContainerStyle, containerStyle = _a.containerStyle, currentPage = _a.currentPage, doneLabel = _a.doneLabel, donePosition = _a.donePosition, doneStyle = _a.doneStyle, dotsPosition = _a.dotsPosition, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, numPages = _a.numPages, hideDone = _a.hideDone, hideDots = _a.hideDots, hideNext = _a.hideNext, hideSkip = _a.hideSkip, isLight = _a.isLight, leftContainerStyle = _a.leftContainerStyle, nextLabel = _a.nextLabel, nextPosition = _a.nextPosition, nextStyle = _a.nextStyle, onDone = _a.onDone, onNext = _a.onNext, onSkip = _a.onSkip, rightContainerStyle = _a.rightContainerStyle, options = _a.options, skipLabel = _a.skipLabel, skipPosition = _a.skipPosition, skipStyle = _a.skipStyle;
        var props = {
            DoneComponent: (options && options.DoneComponent) || (DoneComponent || undefined),
            DotComponent: (options && options.DotComponent) || (DotComponent || undefined),
            NextComponent: (options && options.NextComponent) || (NextComponent || undefined),
            SkipComponent: (options && options.SkipComponent) || (SkipComponent || undefined),
            allowFontScaling: (options && options.allowFontScaling) || (allowFontScaling || true),
            bottomBarHeight: (options && options.bottomBarHeight) || (bottomBarHeight || undefined),
            centerContainerStyle: (options && options.centerContainerStyle) || (centerContainerStyle || undefined),
            containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
            currentPage: (options && options.currentPage) || (currentPage || 0),
            doneLabel: (options && options.doneLabel) || (doneLabel || undefined),
            donePosition: (options && options.donePosition) || (donePosition || 'right'),
            doneStyle: (options && options.doneStyle) || (doneStyle || undefined),
            dotsPosition: (options && options.dotsPosition) || (dotsPosition || 'center'),
            dotsSize: (options && options.dotsSize) || (dotsSize || 6),
            dotsStyle: (options && options.dotsStyle) || (dotsStyle || undefined),
            hideDone: (options && options.hideDone) || (hideDone || false),
            hideDots: (options && options.hideDots) || (hideDots || false),
            hideNext: (options && options.hideNext) || (hideNext || false),
            hideSkip: (options && options.hideSkip) || (hideSkip || false),
            isLight: (options && options.isLight) || (isLight || false),
            leftContainerStyle: (options && options.leftContainerStyle) || (leftContainerStyle || undefined),
            nextLabel: (options && options.nextLabel) || (nextLabel || 'Next'),
            nextPosition: (options && options.nextPosition) || (nextPosition || 'right'),
            nextStyle: (options && options.nextStyle) || (nextStyle || undefined),
            numPages: (options && options.numPages) || (numPages || 0),
            onDone: (options && options.onDone) || (onDone || undefined),
            onNext: (options && options.onNext) || (onNext || undefined),
            onSkip: (options && options.onSkip) || (onSkip || undefined),
            rightContainerStyle: (options && options.rightContainerStyle) || (rightContainerStyle || undefined),
            skipLabel: (options && options.skipLabel) || (skipLabel || 'Skip'),
            skipPosition: (options && options.skipPosition) || (skipPosition || 'left'),
            skipStyle: (options && options.skipStyle) || (skipStyle || undefined),
        };
        return props;
    };
    Pagination.prototype._isComponent = function (kind) {
        return (kind && kind._owner && kind._owner.constructor.name === 'FiberNode' && kind.$$typeof && kind.$$typeof.constructor.name === 'Symbol');
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map