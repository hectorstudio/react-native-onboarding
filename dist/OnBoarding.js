"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_onboarding_swiper_1 = require("react-native-onboarding-swiper");
class OnBoarding extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.processProps();
    }
    render() {
        const { allowFontScaling, bottomBarHeight, bottomBarHighlight, containerStyles, controlStatusBar, defaultPages, flatlistProps, imageContainerStyles, nextLabel, onDone, onSkip, pages, pageIndexCallback, showDone, showNext, showSkip, skipLabel, skipToPage, subTitleStyles, titleStyles, transitionAnimationDuration } = this.processProps();
        return (React.createElement(react_native_onboarding_swiper_1.default, { allowFontScaling: allowFontScaling, bottomBarHeight: bottomBarHeight, bottomBarHighlight: bottomBarHighlight, containerStyles: containerStyles, controlStatusBar: controlStatusBar, flatlistProps: flatlistProps, imageContainerStyles: imageContainerStyles, nextLabel: nextLabel, onDone: () => onDone && this.onDoneAction(), onSkip: () => onSkip && this.onSkipAction(), pages: !defaultPages ? pages : this.defaultPages(), pageIndexCallback: (pageIndex) => pageIndexCallback && this.pageIndexAction(pageIndex), showDone: showDone, showNext: showNext, showSkip: showSkip, skipLabel: skipLabel, skipToPage: skipToPage, subTitleStyles: subTitleStyles, titleStyles: titleStyles, transitionAnimationDuration: transitionAnimationDuration }));
    }
    defaultPages() {
        return [{
                backgroundColor: '#fff',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/images/circle.png') }),
                subtitle: 'Done with React Native Onboarding Swiper',
                title: 'Onboarding',
            }, {
                backgroundColor: '#fe6e58',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/images/square.png') }),
                subtitle: 'This is the subtitle that sumplements the title.',
                title: 'The Title',
            }, {
                backgroundColor: '#999',
                image: React.createElement(react_native_1.Image, { source: require('./../../assets/images/triangle.png') }),
                subtitle: 'Beautiful, isn\'t it?',
                title: 'Triangle',
            }];
    }
    onDoneAction() {
        const { onDone } = this.processProps();
        if (typeof onDone === 'function') {
            return onDone();
        }
    }
    onSkipAction() {
        const { onSkip } = this.processProps();
        if (typeof onSkip === 'function') {
            return onSkip();
        }
    }
    pageIndexAction(pageIndex) {
        const { pageIndexCallback } = this.processProps();
        if (typeof pageIndexCallback === 'function') {
            return pageIndexCallback(pageIndex);
        }
    }
    processProps() {
        const params = {
            allowFontScaling: (this.props.options && this.props.options.allowFontScaling) || (this.props.allowFontScaling || true),
            bottomBarHeight: (this.props.options && this.props.options.bottomBarHeight) || (this.props.bottomBarHeight || 60),
            bottomBarHighlight: (this.props.options && this.props.options.bottomBarHighlight) || (this.props.bottomBarHighlight || true),
            controlStatusBar: (this.props.options && this.props.options.controlStatusBar) || (this.props.controlStatusBar || true),
            defaultPages: (this.props.options && this.props.options.defaultPages) || (this.props.defaultPages || false),
            flatlistProps: (this.props.options && this.props.options.flatlistProps) || (this.props.flatlistProps || undefined),
            nextLabel: (this.props.options && this.props.options.nextLabel) || (this.props.nextLabel || 'Next'),
            onDone: (this.props.options && this.props.options.onDone) || (this.props.onDone || undefined),
            onSkip: (this.props.options && this.props.options.onSkip) || (this.props.onSkip || undefined),
            pageIndexCallback: (this.props.options && this.props.options.pageIndexCallback) || (this.props.pageIndexCallback || undefined),
            pages: (this.props.options && this.props.options.pages) || (this.props.pages || []),
            showDone: (this.props.options && this.props.options.showDone) || (this.props.showDone || true),
            showNext: (this.props.options && this.props.options.showNext) || (this.props.showNext || true),
            showSkip: (this.props.options && this.props.options.showSkip) || (this.props.showSkip || true),
            skipLabel: (this.props.options && this.props.options.skipLabel) || (this.props.skipLabel || 'Skip'),
            skipToPage: (this.props.options && this.props.options.skipToPage) || (this.props.skipToPage || undefined),
            theme: (this.props.options && this.props.options.theme) || (this.props.theme || 'default'),
            transitionAnimationDuration: (this.props.options && this.props.options.transitionAnimationDuration) || (this.props.transitionAnimationDuration || 350),
        };
        return params;
    }
}
exports.default = OnBoarding;
//# sourceMappingURL=OnBoarding.js.map