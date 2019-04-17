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
var button_1 = require("@ticmakers-react-native/button");
var icon_1 = require("@ticmakers-react-native/icon");
var DoneButton = (function (_super) {
    __extends(DoneButton, _super);
    function DoneButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fadeAnimation = new react_native_1.Animated.Value(0);
        _this.fadeDuration = 1000;
        return _this;
    }
    DoneButton.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            react_native_1.Animated.timing(_this.fadeAnimation, {
                duration: _this.fadeDuration,
                toValue: 1,
            }).start();
        }, 1000);
    };
    DoneButton.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(react_native_1.Animated.View, { style: { opacity: this.fadeAnimation } },
            children &&
                React.createElement(button_1.default, __assign({ clear: true }, this.props), children),
            !children && this.props.title &&
                React.createElement(button_1.default, __assign({ clear: true }, this.props)),
            !children && !this.props.title &&
                React.createElement(button_1.default, __assign({ clear: true }, this.props),
                    React.createElement(icon_1.default, { name: "checkbox-marked-circle-outline", type: "material-community", size: 30 }))));
    };
    return DoneButton;
}(button_1.default));
exports.default = DoneButton;
//# sourceMappingURL=DoneButton.js.map