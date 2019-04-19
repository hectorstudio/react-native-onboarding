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
var tinycolor = require("tinycolor2");
var Page_1 = require("./../Page/Page");
var Pagination_1 = require("./../Pagination/Pagination");
var styles_1 = require("./styles");
var Onboarding = (function (_super) {
    __extends(Onboarding, _super);
    function Onboarding(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._processProps();
        _this._onSwipePageChange = _this._onSwipePageChange.bind(_this);
        _this.itemVisibleHotfix = { itemVisiblePercentThreshold: 100 };
        return _this;
    }
    Onboarding.prototype.componentDidUpdate = function () {
        var transitionAnimationDuration = this.props.transitionAnimationDuration;
        var backgroundColorAnim = this.state.backgroundColorAnim;
        if (typeof backgroundColorAnim !== 'undefined') {
            react_native_1.Animated.timing(backgroundColorAnim, {
                duration: transitionAnimationDuration,
                toValue: 1,
            }).start();
        }
    };
    Onboarding.prototype.render = function () {
        var _this = this;
        var _a = this._processProps(), bottomBarHighlight = _a.bottomBarHighlight, containerStyle = _a.containerStyle, controlStatusBar = _a.controlStatusBar, statusBarStyle = _a.statusBarStyle;
        var backgroundColorAnim = this.state.backgroundColorAnim;
        var previousPage = this.getPreviousPage();
        var currentPage = this.getCurrentPage();
        var currentBackgroundColor = currentPage && currentPage.backgroundColor;
        var isLight = tinycolor(currentBackgroundColor).getBrightness() > 180;
        var barStyle = statusBarStyle || isLight ? 'dark-content' : 'light-content';
        var backgroundColor = currentBackgroundColor;
        if (previousPage) {
            var previousBackgroundColor = previousPage.backgroundColor;
            backgroundColor = backgroundColorAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [previousBackgroundColor, currentBackgroundColor],
            });
        }
        var containerProps = {
            onLayout: this._onLayout.bind(this),
            style: react_native_1.StyleSheet.flatten([{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center' }, containerStyle]),
        };
        var containerPaginationProps = {
            style: react_native_1.StyleSheet.flatten([bottomBarHighlight && styles_1.default.overlay]),
        };
        var paginationProps = __assign({}, this._paginationProps(), { isLight: isLight });
        return (React.createElement(react_native_1.Animated.View, __assign({}, containerProps),
            controlStatusBar && React.createElement(react_native_1.StatusBar, { barStyle: barStyle }),
            React.createElement(react_native_1.FlatList, __assign({ ref: function (list) { return _this.flatList = list; } }, this._flatlistProps())),
            React.createElement(react_native_1.SafeAreaView, __assign({}, containerPaginationProps),
                React.createElement(Pagination_1.default, __assign({}, paginationProps)))));
    };
    Onboarding.prototype.defaultPages = function () {
        return [{
                backgroundColor: '#fff',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/circle.png') }),
                subtitle: 'Done with React Native Onboarding Swiper',
                title: 'Onboarding',
            }, {
                backgroundColor: '#fe6e58',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/square.png') }),
                subtitle: 'This is the subtitle that sumplements the title.',
                title: 'The Title',
            }, {
                backgroundColor: '#999',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/triangle.png') }),
                subtitle: 'Beautiful, isn\'t it?',
                title: 'Triangle',
            }];
    };
    Onboarding.prototype.renderPage = function (data) {
        var _a = this._processProps(), allowFontScalingText = _a.allowFontScalingText, containerStyle = _a.containerStyle, headerContainerStyle = _a.headerContainerStyle, imageContainerStyle = _a.imageContainerStyle, titleStyle = _a.titleStyle, subtitleStyle = _a.subtitleStyle;
        var _b = this.state, height = _b.height, width = _b.width;
        var item = data.item;
        var _c = item, backgroundColor = _c.backgroundColor, header = _c.header, image = _c.image, title = _c.title, subtitle = _c.subtitle;
        var isLight = tinycolor(backgroundColor).getBrightness() > 180;
        var props = {
            containerStyle: containerStyle,
            header: header,
            image: image,
            isLight: isLight,
            subtitle: subtitle,
            title: title,
            allowFontScaling: allowFontScalingText,
            headerContainerStyle: react_native_1.StyleSheet.flatten([headerContainerStyle, item.headerStyle]),
            height: height || react_native_1.Dimensions.get('window').height,
            imageContainerStyle: react_native_1.StyleSheet.flatten([imageContainerStyle, item.imageStyle]),
            subtitleStyle: react_native_1.StyleSheet.flatten([subtitleStyle, item.subtitleStyle]),
            titleStyle: react_native_1.StyleSheet.flatten([titleStyle, item.titleStyle]),
            width: width || react_native_1.Dimensions.get('window').width,
        };
        return React.createElement(Page_1.default, __assign({}, props));
    };
    Onboarding.prototype.getCurrentPage = function () {
        var pages = this._processProps().pages;
        var currentPage = this.state.currentPage;
        return pages[currentPage || 0] || undefined;
    };
    Onboarding.prototype.getPreviousPage = function () {
        var pages = this._processProps().pages;
        var _a = this.state, currentPage = _a.currentPage, previousPage = _a.previousPage;
        return currentPage !== previousPage && pages[previousPage || 0] || undefined;
    };
    Onboarding.prototype.goNext = function () {
        var currentPage = this.state.currentPage;
        this.flatList.scrollToIndex({
            animated: true,
            index: (currentPage || 0) + 1,
        });
    };
    Onboarding.prototype._onDone = function () {
        var onDone = this._processProps().onDone;
        if (onDone) {
            return onDone();
        }
    };
    Onboarding.prototype._onSkip = function () {
        var onSkip = this._processProps().onSkip;
        if (onSkip) {
            return onSkip();
        }
        return this._skipToLastPage();
    };
    Onboarding.prototype._onChangePage = function (index) {
        var onChangePage = this._processProps().onChangePage;
        if (onChangePage) {
            return onChangePage(index);
        }
    };
    Onboarding.prototype._onSwipePageChange = function (data) {
        var _this = this;
        var viewableItems = data.viewableItems;
        var currentPage = this.state.currentPage;
        var index = viewableItems[0] && viewableItems[0].index;
        if (typeof index !== 'undefined' && currentPage !== index) {
            this.setState(function (state) {
                _this._onChangePage(index);
                return {
                    backgroundColorAnim: new react_native_1.Animated.Value(0),
                    currentPage: index,
                    previousPage: currentPage,
                };
            });
        }
    };
    Onboarding.prototype._onLayout = function () {
        var _a = this.state, height = _a.height, width = _a.width;
        var window = react_native_1.Dimensions.get('window');
        var _h = height;
        var _w = width;
        if (!_h) {
            _h = window.height;
        }
        if (!_w) {
            _w = window.width;
        }
        this.setState({ height: _h, width: _w });
    };
    Onboarding.prototype._skipToLastPage = function () {
        var _a = this._processProps(), pages = _a.pages, skipToPage = _a.skipToPage;
        var index = skipToPage;
        if (!index) {
            index = pages.length - 1;
        }
        this.flatList.scrollToIndex({ index: index, animated: true });
    };
    Onboarding.prototype._processProps = function () {
        var _a = this.props, DoneComponent = _a.DoneComponent, DotComponent = _a.DotComponent, NextComponent = _a.NextComponent, SkipComponent = _a.SkipComponent, allowFontScalingButtons = _a.allowFontScalingButtons, allowFontScalingText = _a.allowFontScalingText, backgroundColorAnim = _a.backgroundColorAnim, bottomBarHeight = _a.bottomBarHeight, bottomBarHighlight = _a.bottomBarHighlight, containerStyle = _a.containerStyle, controlStatusBar = _a.controlStatusBar, currentPage = _a.currentPage, defaultPages = _a.defaultPages, doneLabel = _a.doneLabel, donePosition = _a.donePosition, doneStyle = _a.doneStyle, dotsPosition = _a.dotsPosition, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, flatlistProps = _a.flatlistProps, headerContainerStyle = _a.headerContainerStyle, height = _a.height, hideDone = _a.hideDone, hideDots = _a.hideDots, hideNext = _a.hideNext, hideSkip = _a.hideSkip, imageContainerStyle = _a.imageContainerStyle, nextLabel = _a.nextLabel, nextPosition = _a.nextPosition, nextStyle = _a.nextStyle, onChangePage = _a.onChangePage, onDone = _a.onDone, onSkip = _a.onSkip, options = _a.options, pages = _a.pages, paginationProps = _a.paginationProps, previousPage = _a.previousPage, skipLabel = _a.skipLabel, skipPosition = _a.skipPosition, skipStyle = _a.skipStyle, skipToPage = _a.skipToPage, statusBarStyle = _a.statusBarStyle, subtitleStyle = _a.subtitleStyle, titleStyle = _a.titleStyle, transitionAnimationDuration = _a.transitionAnimationDuration, width = _a.width;
        var params = {
            DoneComponent: (options && options.DoneComponent) || (DoneComponent || undefined),
            DotComponent: (options && options.DotComponent) || (DotComponent || undefined),
            NextComponent: (options && options.NextComponent) || (NextComponent || undefined),
            SkipComponent: (options && options.SkipComponent) || (SkipComponent || undefined),
            allowFontScalingButtons: (options && options.allowFontScalingButtons) || (allowFontScalingButtons || true),
            allowFontScalingText: (options && options.allowFontScalingText) || (allowFontScalingText || true),
            backgroundColorAnim: (options && options.backgroundColorAnim) || (backgroundColorAnim || new react_native_1.Animated.Value(0)),
            bottomBarHeight: (options && options.bottomBarHeight) || (bottomBarHeight || 60),
            bottomBarHighlight: (options && options.bottomBarHighlight) || (bottomBarHighlight || true),
            containerStyle: (options && options.containerStyle) || (containerStyle || undefined),
            controlStatusBar: (options && options.controlStatusBar) || (controlStatusBar || true),
            currentPage: (options && options.currentPage) || (currentPage || 0),
            defaultPages: (options && options.defaultPages) || (defaultPages || false),
            doneLabel: (options && options.doneLabel) || (doneLabel || undefined),
            donePosition: (options && options.donePosition) || (donePosition || 'right'),
            doneStyle: (options && options.doneStyle) || (doneStyle || undefined),
            dotsPosition: (options && options.dotsPosition) || (dotsPosition || 'center'),
            dotsSize: (options && options.dotsSize) || (dotsSize || 6),
            dotsStyle: (options && options.dotsStyle) || (dotsStyle || undefined),
            flatlistProps: (options && options.flatlistProps) || (flatlistProps || undefined),
            headerContainerStyle: (options && options.headerContainerStyle) || (headerContainerStyle || undefined),
            height: (options && options.height) || (height || undefined),
            hideDone: (options && options.hideDone) || (hideDone || false),
            hideDots: (options && options.hideDots) || (hideDots || false),
            hideNext: (options && options.hideNext) || (hideNext || false),
            hideSkip: (options && options.hideSkip) || (hideSkip || false),
            imageContainerStyle: (options && options.imageContainerStyle) || (imageContainerStyle || undefined),
            nextLabel: (options && options.nextLabel) || (nextLabel || 'Next'),
            nextPosition: (options && options.nextPosition) || (nextPosition || 'right'),
            nextStyle: (options && options.nextStyle) || (nextStyle || undefined),
            onChangePage: (options && options.onChangePage) || (onChangePage || undefined),
            onDone: (options && options.onDone) || (onDone || undefined),
            onSkip: (options && options.onSkip) || (onSkip || undefined),
            pages: (options && options.pages) || (pages || []),
            paginationProps: (options && options.paginationProps) || (paginationProps || undefined),
            previousPage: (options && options.previousPage) || (previousPage || 0),
            skipLabel: (options && options.skipLabel) || (skipLabel || 'Skip'),
            skipPosition: (options && options.skipPosition) || (skipPosition || 'left'),
            skipStyle: (options && options.skipStyle) || (skipStyle || undefined),
            skipToPage: (options && options.skipToPage) || (skipToPage || undefined),
            statusBarStyle: (options && options.statusBarStyle) || (statusBarStyle || undefined),
            subtitleStyle: (options && options.subtitleStyle) || (subtitleStyle || undefined),
            titleStyle: (options && options.titleStyle) || (titleStyle || undefined),
            transitionAnimationDuration: (options && options.transitionAnimationDuration) || (transitionAnimationDuration || 500),
            width: (options && options.width) || (width || undefined),
        };
        return params;
    };
    Onboarding.prototype._flatlistProps = function () {
        var _a = this._processProps(), defaultPages = _a.defaultPages, flatlistProps = _a.flatlistProps, pages = _a.pages;
        var width = this.state.width;
        return __assign({ data: defaultPages && this.defaultPages() || pages, extraData: width, horizontal: true, initialNumToRender: 1, keyExtractor: function (item, index) { return index.toString(); }, onViewableItemsChanged: this._onSwipePageChange, pagingEnabled: true, renderItem: this.renderPage.bind(this), showsHorizontalScrollIndicator: false, viewabilityConfig: this.itemVisibleHotfix }, flatlistProps);
    };
    Onboarding.prototype._paginationProps = function () {
        var _a = this._processProps(), DoneComponent = _a.DoneComponent, DotComponent = _a.DotComponent, NextComponent = _a.NextComponent, SkipComponent = _a.SkipComponent, allowFontScalingButtons = _a.allowFontScalingButtons, bottomBarHeight = _a.bottomBarHeight, defaultPages = _a.defaultPages, doneLabel = _a.doneLabel, donePosition = _a.donePosition, doneStyle = _a.doneStyle, dotsPosition = _a.dotsPosition, dotsSize = _a.dotsSize, dotsStyle = _a.dotsStyle, hideDone = _a.hideDone, hideDots = _a.hideDots, hideNext = _a.hideNext, hideSkip = _a.hideSkip, nextLabel = _a.nextLabel, nextPosition = _a.nextPosition, nextStyle = _a.nextStyle, pages = _a.pages, paginationProps = _a.paginationProps, skipLabel = _a.skipLabel, skipPosition = _a.skipPosition, skipStyle = _a.skipStyle;
        var currentPage = this.state.currentPage;
        return __assign({ DoneComponent: DoneComponent,
            DotComponent: DotComponent,
            NextComponent: NextComponent,
            SkipComponent: SkipComponent,
            bottomBarHeight: bottomBarHeight,
            doneLabel: doneLabel,
            donePosition: donePosition,
            doneStyle: doneStyle,
            dotsPosition: dotsPosition,
            dotsSize: dotsSize,
            dotsStyle: dotsStyle,
            hideDone: hideDone,
            hideDots: hideDots,
            hideNext: hideNext,
            hideSkip: hideSkip,
            nextLabel: nextLabel,
            nextPosition: nextPosition,
            nextStyle: nextStyle,
            skipLabel: skipLabel,
            skipPosition: skipPosition,
            skipStyle: skipStyle, allowFontScaling: allowFontScalingButtons, currentPage: currentPage || 0, numPages: defaultPages && this.defaultPages().length || pages.length, onDone: this._onDone.bind(this), onSkip: this._onSkip.bind(this), onNext: this.goNext.bind(this) }, paginationProps);
    };
    return Onboarding;
}(React.Component));
exports.default = Onboarding;
//# sourceMappingURL=Onboarding.js.map