/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
! function(factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function($) {
    "use strict";
    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
        SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        };
        $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    }, $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    }, $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS
    }
});