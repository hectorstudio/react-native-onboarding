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
var button_1 = require("@ticmakers-react-native/button");
var Dots_1 = require("./../Dots/Dots");
var DoneButton_1 = require("./../Pagination/DoneButton");
var styles_1 = require("./styles");
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this._processProps(), bottomBarHeight = _a.bottomBarHeight, containerStyle = _a.containerStyle, style = _a.style;
        var _style = react_native_1.StyleSheet.flatten([__assign({ height: bottomBarHeight }, styles_1.default.container), containerStyle, style]);
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
            if (core_1.AppHelper.isComponent(DoneComponent) || core_1.AppHelper.isElement(DoneComponent)) {
                var _s = react_native_1.StyleSheet.flatten([props.style, DoneComponent.props.style]);
                var _p = __assign(__assign(__assign({}, props), DoneComponent.props), { style: _s });
                return React.cloneElement(DoneComponent, _p);
            }
            else if (props.title) {
                return React.cloneElement(DoneButton_1.default, props);
            }
            return React.createElement(DoneButton_1.default, { key: "done", style: { paddingHorizontal: 8, paddingVertical: 6 } });
        }
    };
    Pagination.prototype.Dots = function () {
        var _a = this._processProps(), DotComponent = _a.DotComponent, currentPage = _a.currentPage, dotColorSelected = _a.dotColorSelected, dotSelectedStyle = _a.dotSelectedStyle, dotsColor = _a.dotsColor, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, hideDots = _a.hideDots, isLight = _a.isLight, numPages = _a.numPages;
        var props = {
            DotComponent: DotComponent,
            currentPage: currentPage,
            isLight: isLight,
            numPages: numPages,
            colorSelected: dotColorSelected,
            color: dotsColor,
            key: 'dots',
            selectedStyle: dotSelectedStyle,
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
            key: 'next',
            onPress: function () { return onNext && onNext(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, { alignSelf: 'center' }, nextStyle]),
            title: nextLabel,
        };
        if (!hideNext && !this.isLastPage()) {
            if (core_1.AppHelper.isComponent(NextComponent) || core_1.AppHelper.isElement(NextComponent)) {
                return React.cloneElement(NextComponent, props);
            }
            return React.createElement(button_1.default, __assign({ clear: true }, props));
        }
    };
    Pagination.prototype.Prev = function () {
        var _a = this._processProps(), PrevComponent = _a.PrevComponent, allowFontScaling = _a.allowFontScaling, isLight = _a.isLight, prevLabel = _a.prevLabel, prevStyle = _a.prevStyle, onPrev = _a.onPrev, usePrevious = _a.usePrevious;
        var props = {
            allowFontScaling: allowFontScaling,
            key: 'prev',
            onPress: function () { return onPrev && onPrev(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, { alignSelf: 'center' }, prevStyle]),
            title: prevLabel,
        };
        if (usePrevious && !this.isFirstPage()) {
            if (core_1.AppHelper.isComponent(PrevComponent) || core_1.AppHelper.isElement(PrevComponent)) {
                return React.cloneElement(PrevComponent, props);
            }
            return React.createElement(button_1.default, __assign({ clear: true }, props));
        }
    };
    Pagination.prototype.Skip = function () {
        var _a = this._processProps(), SkipComponent = _a.SkipComponent, allowFontScaling = _a.allowFontScaling, onSkip = _a.onSkip, skipLabel = _a.skipLabel, skipStyle = _a.skipStyle, hideSkip = _a.hideSkip, isLight = _a.isLight, usePrevious = _a.usePrevious;
        var props = {
            allowFontScaling: allowFontScaling,
            key: 'skip',
            onPress: function () { return onSkip && onSkip(); },
            style: react_native_1.StyleSheet.flatten([!isLight && styles_1.default.colorLight, skipStyle]),
            title: skipLabel,
        };
        if ((!hideSkip && usePrevious && this.isFirstPage()) || (!hideSkip && !usePrevious && !this.isLastPage())) {
            if (core_1.AppHelper.isComponent(SkipComponent) || core_1.AppHelper.isElement(SkipComponent)) {
                return React.cloneElement(SkipComponent, props);
            }
            return React.createElement(button_1.default, __assign({ clear: true }, props));
        }
    };
    Pagination.prototype.isFirstPage = function () {
        var currentPage = this._processProps().currentPage;
        return currentPage === 0;
    };
    Pagination.prototype.isLastPage = function () {
        var _a = this._processProps(), currentPage = _a.currentPage, numPages = _a.numPages;
        return (currentPage || 0) + 1 === numPages;
    };
    Pagination.prototype._getContent = function (position) {
        var _a = this._processProps(), donePosition = _a.donePosition, dotsPosition = _a.dotsPosition, nextPosition = _a.nextPosition, prevPosition = _a.prevPosition, skipPosition = _a.skipPosition;
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
        if (prevPosition === pos) {
            children.push(this.Prev());
        }
        if (skipPosition === pos) {
            children.push(this.Skip());
        }
        return children;
    };
    Pagination.prototype._processProps = function () {
        var _a = this.props, DoneComponent = _a.DoneComponent, DotComponent = _a.DotComponent, NextComponent = _a.NextComponent, PrevComponent = _a.PrevComponent, SkipComponent = _a.SkipComponent, allowFontScaling = _a.allowFontScaling, bottomBarHeight = _a.bottomBarHeight, centerContainerStyle = _a.centerContainerStyle, containerStyle = _a.containerStyle, currentPage = _a.currentPage, doneLabel = _a.doneLabel, donePosition = _a.donePosition, doneStyle = _a.doneStyle, dotColorSelected = _a.dotColorSelected, dotSelectedStyle = _a.dotSelectedStyle, dotsColor = _a.dotsColor, dotsPosition = _a.dotsPosition, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, numPages = _a.numPages, hideDone = _a.hideDone, hideDots = _a.hideDots, hideNext = _a.hideNext, hideSkip = _a.hideSkip, isLight = _a.isLight, leftContainerStyle = _a.leftContainerStyle, nextLabel = _a.nextLabel, nextPosition = _a.nextPosition, nextStyle = _a.nextStyle, onDone = _a.onDone, onNext = _a.onNext, onPrev = _a.onPrev, onSkip = _a.onSkip, prevLabel = _a.prevLabel, prevPosition = _a.prevPosition, prevStyle = _a.prevStyle, rightContainerStyle = _a.rightContainerStyle, skipLabel = _a.skipLabel, skipPosition = _a.skipPosition, skipStyle = _a.skipStyle, usePrevious = _a.usePrevious;
        var props = {
            DoneComponent: (typeof DoneComponent !== 'undefined' ? DoneComponent : undefined),
            DotComponent: (typeof DotComponent !== 'undefined' ? DotComponent : undefined),
            NextComponent: (typeof NextComponent !== 'undefined' ? NextComponent : undefined),
            PrevComponent: (typeof PrevComponent !== 'undefined' ? PrevComponent : undefined),
            SkipComponent: (typeof SkipComponent !== 'undefined' ? SkipComponent : undefined),
            allowFontScaling: (typeof allowFontScaling !== 'undefined' ? allowFontScaling : true),
            bottomBarHeight: (typeof bottomBarHeight !== 'undefined' ? bottomBarHeight : undefined),
            centerContainerStyle: (typeof centerContainerStyle !== 'undefined' ? centerContainerStyle : undefined),
            containerStyle: (typeof containerStyle !== 'undefined' ? containerStyle : undefined),
            currentPage: (typeof currentPage !== 'undefined' ? currentPage : 0),
            doneLabel: (typeof doneLabel !== 'undefined' ? doneLabel : undefined),
            donePosition: (typeof donePosition !== 'undefined' ? donePosition : 'right'),
            doneStyle: (typeof doneStyle !== 'undefined' ? doneStyle : undefined),
            dotColorSelected: (typeof dotColorSelected !== 'undefined' ? dotColorSelected : undefined),
            dotSelectedStyle: (typeof dotSelectedStyle !== 'undefined' ? dotSelectedStyle : undefined),
            dotsColor: (typeof dotsColor !== 'undefined' ? dotsColor : undefined),
            dotsPosition: (typeof dotsPosition !== 'undefined' ? dotsPosition : 'center'),
            dotsSize: (typeof dotsSize !== 'undefined' ? dotsSize : 6),
            dotsStyle: (typeof dotsStyle !== 'undefined' ? dotsStyle : undefined),
            hideDone: (typeof hideDone !== 'undefined' ? hideDone : false),
            hideDots: (typeof hideDots !== 'undefined' ? hideDots : false),
            hideNext: (typeof hideNext !== 'undefined' ? hideNext : false),
            hideSkip: (typeof hideSkip !== 'undefined' ? hideSkip : false),
            isLight: (typeof isLight !== 'undefined' ? isLight : false),
            leftContainerStyle: (typeof leftContainerStyle !== 'undefined' ? leftContainerStyle : undefined),
            nextLabel: (typeof nextLabel !== 'undefined' ? nextLabel : 'Next'),
            nextPosition: (typeof nextPosition !== 'undefined' ? nextPosition : 'right'),
            nextStyle: (typeof nextStyle !== 'undefined' ? nextStyle : undefined),
            numPages: (typeof numPages !== 'undefined' ? numPages : 0),
            onDone: (typeof onDone !== 'undefined' ? onDone : undefined),
            onNext: (typeof onNext !== 'undefined' ? onNext : undefined),
            onPrev: (typeof onPrev !== 'undefined' ? onPrev : undefined),
            onSkip: (typeof onSkip !== 'undefined' ? onSkip : undefined),
            prevLabel: (typeof prevLabel !== 'undefined' ? prevLabel : 'Previous'),
            prevPosition: (typeof prevPosition !== 'undefined' ? prevPosition : 'right'),
            prevStyle: (typeof prevStyle !== 'undefined' ? prevStyle : undefined),
            rightContainerStyle: (typeof rightContainerStyle !== 'undefined' ? rightContainerStyle : undefined),
            skipLabel: (typeof skipLabel !== 'undefined' ? skipLabel : 'Skip'),
            skipPosition: (typeof skipPosition !== 'undefined' ? skipPosition : 'left'),
            skipStyle: (typeof skipStyle !== 'undefined' ? skipStyle : undefined),
            usePrevious: (typeof usePrevious !== 'undefined' ? usePrevious : false),
        };
        return props;
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map