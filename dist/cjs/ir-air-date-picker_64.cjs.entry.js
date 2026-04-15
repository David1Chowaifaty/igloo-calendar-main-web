'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const en = require('./en-a618650e.js');
const moment = require('./moment-1780b03a.js');
const ClickOutside = require('./ClickOutside-e563f721.js');
const v4 = require('./v4-9b297151.js');
const Token = require('./Token-8fd11984.js');
const agents_service = require('./agents.service-cfc67db1.js');
const booking_service = require('./booking.service-4abeb0a0.js');
const property_service = require('./property.service-15a3e045.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const system_service = require('./system.service-101141de.js');
const utils = require('./utils-b2964d18.js');
const utils$1 = require('./utils-f786503d.js');
const useTable = require('./useTable-206847ef.js');
const debounce = require('./debounce-1b63fe86.js');
const index$1 = require('./index-8bb117a0.js');
const index$2 = require('./index-e9a28e3e.js');
const axios = require('./axios-6e678d52.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const room_service = require('./room.service-f9117e70.js');
const locales_store = require('./locales.store-32782582.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./type-976db45d.js');
require('./booking-414ee8d7.js');
require('./index-fbf1fe1d.js');

const irAirDatePickerCss = ".air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover,.air-datepicker-cell.-in-range-.-focus-{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:\"\";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}.air-datepicker{--adp-font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:\"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration:.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92, 196, 239, .1);--adp-background-color-in-range-focused:rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover:rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0, 0, 0, .3);--adp-overlay-transition-duration:.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:\"\";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}:host{display:block}.custom-date-picker__calendar{--adp-padding:1rem;}";
const IrAirDatePickerStyle0 = irAirDatePickerCss;

const IrAirDatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
        this.datePickerFocus = index.createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = index.createEvent(this, "datePickerBlur", 7);
    }
    get el() { return index.getElement(this); }
    withClear;
    placeholder;
    label;
    dates;
    /**
     * Determines whether the date picker is rendered inline or in a pop-up.
     * If `true`, the picker is always visible inline.
     */
    inline = false;
    /**
     * The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`.
     */
    date = null;
    /**
     * Enables multiple dates.
     * If `true`, multiple selection is allowed.
     * If you pass a number (e.g. 3), that is the maximum number of selectable dates.
     */
    multipleDates = false;
    /**
     * Whether the picker should allow range selection (start and end date).
     */
    range = false;
    /**
     * Format for the date as it appears in the input field.
     * Follows the `AirDatepicker` format rules.
     */
    dateFormat = 'yyyy-MM-dd';
    /**
     * Enables the timepicker functionality (select hours and minutes).
     */
    timepicker = false;
    /**
     * The earliest date that can be selected.
     */
    minDate;
    /**
     * The latest date that can be selected.
     */
    maxDate;
    /**
     * Disables the input and prevents interaction.
     */
    disabled = false;
    /**
     * Closes the picker automatically after a date is selected.
     */
    autoClose = true;
    /**
     * Shows days from previous/next month in the current month's calendar.
     */
    showOtherMonths = true;
    /**
     * Allows selecting days from previous/next month shown in the current view.
     */
    selectOtherMonths = true;
    /**
     * Controls how the date picker is triggered.
     * - **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name="trigger">`).
     * - **`false`**: A default button input is used to open the picker.
     *
     * Defaults to `false`.
     */
    customPicker = false;
    /**
     * Pass a container element if you need the date picker to be appended to a specific element
     * for styling or positioning (particularly for arrow rendering).
     * If not provided, it defaults to `this.el`.
     */
    container;
    /**
     * If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.
     * This can be useful if you need the picker to fully re-initialize in response to dynamic changes,
     * but note that it may affect performance if triggered frequently.
     * Defaults to `false`.
     */
    forceDestroyOnUpdate = false;
    /**
     * If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).
     * Otherwise, empty-date changes will be ignored (no event emitted).
     *
     * Defaults to `false`.
     */
    emitEmptyDate = false;
    /**
     * Styles for the trigger container
     */
    triggerContainerStyle = '';
    currentDate = null;
    /**
     * Emitted when the selected date changes.
     * Returns the selected date as Moment objects.
     */
    dateChanged;
    /**
     * Emitted when the date picker gains focus or is opened.
     */
    datePickerFocus;
    /**
     * Emitted when the date picker loses focus or is closed.
     */
    datePickerBlur;
    datePicker;
    componentWillLoad() {
        // Sync initial @Prop to internal state
        if (this.date) {
            this.currentDate = this.toValidDate(this.date);
        }
    }
    componentDidLoad() {
        this.initializeDatepicker();
    }
    datePropChanged(newDate, oldDate) {
        if (this.isSameDates(newDate, oldDate)) {
            return;
        }
        this.updatePickerDate(newDate);
    }
    minDatePropChanged(newVal, oldVal) {
        if (!this.datePicker) {
            return;
        }
        if (!this.isSameDates(newVal, oldVal)) {
            this.datePicker?.update({ minDate: this.toValidDate(newVal) ?? undefined });
        }
    }
    maxDatePropChanged(newVal, oldVal) {
        if (!this.isSameDates(newVal, oldVal)) {
            this.datePicker?.update({ maxDate: this.toValidDate(newVal) ?? undefined });
        }
    }
    datesPropChanged(newDates = [], oldDates = []) {
        if (this.areDateListsEqual(newDates, oldDates)) {
            return;
        }
        this.updatePickerDates(newDates);
    }
    async clearDatePicker() {
        this.datePicker?.clear();
    }
    async syncSelection(options) {
        if (Array.isArray(options?.dates) || this.range) {
            const list = Array.isArray(options?.dates) ? options.dates : this.dates;
            this.forceSyncPickerDates(list ?? []);
            return;
        }
        const nextDate = options?.date !== undefined ? options.date : this.date;
        this.forceSyncPickerDate(nextDate ?? null);
    }
    isSameDates(d1, d2) {
        if (!d1 && !d2)
            return true;
        if (!d1 || !d2)
            return false;
        return moment.hooks(d1).isSame(moment.hooks(d2), this.timepicker ? 'minute' : 'day');
    }
    toValidDate(value) {
        if (!value)
            return null;
        if (value instanceof Date) {
            return isNaN(value.getTime()) ? null : value;
        }
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            const parsed = moment.hooks(value, 'YYYY-MM-DD', true);
            return parsed.isValid() ? parsed.toDate() : null;
        }
        const parsed = moment.hooks(value, moment.hooks.ISO_8601, true);
        if (parsed.isValid()) {
            return parsed.toDate();
        }
        const fallback = new Date(value);
        return isNaN(fallback.getTime()) ? null : fallback;
    }
    toValidDates(values) {
        if (!Array.isArray(values) || values.length === 0)
            return [];
        return values.map(v => this.toValidDate(v)).filter((date) => Boolean(date));
    }
    areDateListsEqual(first, second) {
        if (!first?.length && !second?.length)
            return true;
        if (!first || !second || first.length !== second.length)
            return false;
        return first.every((value, index) => this.isSameDates(value, second[index]));
    }
    updatePickerDates(nextDates = []) {
        if (!this.datePicker) {
            return;
        }
        const validDates = this.toValidDates(nextDates);
        this.datePicker.clear({ silent: true });
        if (validDates.length > 0) {
            this.datePicker.selectDate(validDates, { silent: true });
            this.currentDate = validDates[0];
            return;
        }
        this.currentDate = null;
        this.date = null;
    }
    forceSyncPickerDate(nextDate) {
        const valid = this.toValidDate(nextDate);
        if (!this.datePicker) {
            this.currentDate = valid;
            this.date = valid;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (!valid) {
            this.currentDate = null;
            this.date = null;
            return;
        }
        this.datePicker.selectDate(valid, { silent: true });
        this.currentDate = valid;
        this.date = valid;
    }
    forceSyncPickerDates(nextDates = []) {
        const validDates = this.toValidDates(nextDates);
        if (!this.datePicker) {
            this.currentDate = validDates[0] ?? null;
            this.date = validDates[0] ?? null;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (validDates.length > 0) {
            this.datePicker.selectDate(validDates, { silent: true });
        }
        this.currentDate = validDates[0] ?? null;
        this.date = validDates[0] ?? null;
    }
    updatePickerDate(newDate) {
        const valid = this.toValidDate(newDate);
        if (!valid) {
            // If invalid or null, just clear
            this.datePicker?.clear({ silent: true });
            this.currentDate = null;
            return;
        }
        // If it's a truly new date, select it
        if (!this.isSameDates(this.currentDate, valid)) {
            this.currentDate = valid;
            if (this.forceDestroyOnUpdate) {
                this.datePicker?.destroy();
                this.datePicker = undefined;
                this.initializeDatepicker();
            }
            else {
                this.datePicker?.selectDate(valid, { silent: true });
            }
        }
    }
    initializeDatepicker() {
        if (this.datePicker)
            return;
        const preselectedDates = this.toValidDates(this.dates);
        this.datePicker = new en.AirDatepicker(this.el, {
            container: this.container,
            inline: true,
            selectedDates: preselectedDates.length > 0 ? preselectedDates : this.currentDate ? [this.currentDate] : [],
            multipleDates: this.multipleDates,
            range: this.range,
            dateFormat: this.dateFormat,
            timepicker: this.timepicker,
            minDate: this.toValidDate(this.minDate) ?? undefined,
            maxDate: this.toValidDate(this.maxDate) ?? undefined,
            autoClose: this.autoClose,
            locale: en.default_1,
            showOtherMonths: this.showOtherMonths,
            selectOtherMonths: this.selectOtherMonths,
            onHide: () => {
                this.datePickerBlur.emit();
            },
            onShow: () => {
                this.datePickerFocus.emit();
            },
            onSelect: ({ date }) => this.handleDateSelect(date),
        });
        // this.datePicker.$datepicker.style.height = '280px';
        const datepickerEl = this.datePicker.$datepicker;
        if (!datepickerEl) {
            return;
        }
        datepickerEl.classList.add('ir-custom-date-picker__calendar');
        datepickerEl.classList.add('custom-date-picker__calendar');
        datepickerEl.style.borderWidth = '0px';
        datepickerEl.style.setProperty('--adp-cell-background-color-selected', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-cell-background-color-selected-hover', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month', 'var(--wa-color-brand-fill-normal)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month-focused', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-accent-color', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-day-name-color', 'lab(48.496% 0 0)');
        datepickerEl.style.setProperty('--adp-padding', '0px 0px 0.5rem 0px', 'important');
        datepickerEl.style.setProperty('--adp-border-color-inner', 'transparent', 'important');
    }
    handleDateSelect(selected) {
        const dates = Array.isArray(selected) ? selected.filter(Boolean) : selected ? [selected] : [];
        if (!dates.length || !(dates[0] instanceof Date)) {
            if (this.emitEmptyDate) {
                this.dateChanged.emit({
                    start: null,
                    end: null,
                    dates: selected,
                });
            }
            this.currentDate = null;
            this.date = null;
            return;
        }
        const startDate = dates[0];
        const endDate = this.range && dates.length > 1 ? dates[1] : startDate;
        this.currentDate = startDate;
        this.date = startDate;
        this.dateChanged.emit({
            start: startDate ? moment.hooks(startDate) : null,
            end: endDate ? moment.hooks(endDate) : null,
            dates: selected,
        });
    }
    disconnectedCallback() {
        this.datePicker?.destroy?.();
    }
    render() {
        return null;
    }
    static get watchers() { return {
        "date": ["datePropChanged"],
        "minDate": ["minDatePropChanged"],
        "maxDate": ["maxDatePropChanged"],
        "dates": ["datesPropChanged"]
    }; }
};
IrAirDatePicker.style = IrAirDatePickerStyle0;

/**
 * SlotManager - A reusable service for managing slot state in Stencil components
 *
 * Usage:
 * 1. Create an instance in your component
 * 2. Initialize in componentWillLoad()
 * 3. Setup observers in componentDidLoad()
 * 4. Cleanup in disconnectedCallback()
 * 5. Check slot state using hasSlot()
 */
class SlotManager {
    hostElement;
    slotNames;
    onStateChange;
    slotState = new Map();
    slotObserver = null;
    isInitialized = false;
    constructor(hostElement, slotNames, onStateChange) {
        this.hostElement = hostElement;
        this.slotNames = slotNames;
        this.onStateChange = onStateChange;
    }
    /**
     * Initialize the slot state. Call this in componentWillLoad()
     */
    initialize() {
        this.updateSlotState();
        this.isInitialized = true;
    }
    /**
     * Setup slot listeners and observers. Call this in componentDidLoad()
     */
    setupListeners() {
        if (!this.isInitialized) {
            console.warn('SlotManager: initialize() must be called before setupListeners()');
            return;
        }
        // Listen to slotchange events
        this.hostElement.addEventListener('slotchange', this.handleSlotChange);
        // Use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    /**
     * Remove all listeners and cleanup. Call this in disconnectedCallback()
     */
    destroy() {
        this.hostElement.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
        this.slotObserver = null;
        this.slotState.clear();
        this.isInitialized = false;
    }
    /**
     * Check if a specific slot has content
     */
    hasSlot(name) {
        return this.slotState.get(name) ?? false;
    }
    /**
     * Get all slot states as a Map
     */
    getSlotState() {
        return this.slotState;
    }
    /**
     * Get all slot names that have content
     */
    getActiveSlots() {
        return Array.from(this.slotState.entries())
            .filter(([_, hasContent]) => hasContent)
            .map(([name]) => name);
    }
    /**
     * Manually trigger a slot state update
     */
    refresh() {
        this.updateSlotState();
    }
    handleSlotChange = () => {
        this.updateSlotState();
        this.onStateChange?.();
    };
    updateSlotState() {
        const newState = new Map();
        this.slotNames.forEach(name => {
            newState.set(name, this.checkSlotHasContent(name));
        });
        this.slotState = newState;
    }
    checkSlotHasContent(name) {
        return Array.from(this.hostElement.children).some(child => child.getAttribute('slot') === name);
    }
}
/**
 * Convenience function to create a SlotManager with automatic lifecycle management
 * Returns helper methods that can be called directly in lifecycle hooks
 */
function createSlotManager(hostElement, slotNames, onStateChange) {
    const manager = new SlotManager(hostElement, slotNames, onStateChange);
    return {
        manager,
        // Lifecycle hooks
        initialize: () => manager.initialize(),
        setupListeners: () => manager.setupListeners(),
        destroy: () => manager.destroy(),
        // Query methods
        hasSlot: (name) => manager.hasSlot(name),
        getSlotState: () => manager.getSlotState(),
        getActiveSlots: () => manager.getActiveSlots(),
        refresh: () => manager.refresh(),
    };
}

const irAutocompleteCss = ".listbox {\n  display: block;\n  position: relative;\n  font: inherit;\n  box-shadow: var(--wa-shadow-m);\n  background: var(--wa-color-surface-raised);\n  border-color: var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n  padding-block: 0.5em;\n  padding-inline: 0;\n  overflow: auto;\n  overscroll-behavior: none;\n\n  /* Make sure it adheres to the popup's auto size */\n  max-width: var(--auto-size-available-width);\n  max-height: var(--auto-size-available-height);\n\n  &::slotted(wa-divider) {\n    --spacing: 0.5em;\n  }\n\n}\n\n::slotted(ir-autocomplete-option) {\n  display: block;\n}\n";
const IrAutocompleteStyle0 = irAutocompleteCss;

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change", 7);
        this.comboboxChange = index.createEvent(this, "combobox-change", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Emits `combobox-change` even when the selected value does not change.
     *
     * @default true
     */
    emitOnSameValue = true;
    /** Whether the autocomplete dropdown is open. */
    open = false;
    /** Placement of the autocomplete dropdown relative to the input. */
    placement = 'bottom';
    /** Name attribute forwarded to the underlying input element. */
    name;
    /** The value of the input. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 'small';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * Custom CSS classes applied to the inner `<ir-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    options = [];
    slotStateVersion = 0;
    textChange;
    comboboxChange;
    currentOption;
    listboxRef;
    inputRef;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hint'];
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    componentWillLoad() {
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
        this.updateOptionsFromSlot();
        this.syncSelectedFromValue(this.value);
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
        this.listboxRef?.addEventListener('click', this.handleOptionClick);
    }
    disconnectedCallback() {
        this.slotManager.destroy();
        this.listboxRef?.removeEventListener('click', this.handleOptionClick);
    }
    async show() {
        if (this.disabled)
            return;
        this.open = true;
    }
    async focusInput() {
        if (this.disabled)
            return;
        this.inputRef?.focusInput();
    }
    async hide() {
        this.open = false;
    }
    handleOpenChange(newValue) {
        if (!this.listboxRef)
            return;
        this.listboxRef.hidden = !newValue;
        if (!newValue) {
            this.clearCurrentOption();
            return;
        }
        this.ensureCurrentOption();
        if (this.currentOption) {
            requestAnimationFrame(() => {
                if (this.currentOption) {
                    this.scrollIntoView(this.currentOption, this.listboxRef, 'vertical', 'auto');
                }
            });
        }
    }
    getOffset(element, parent) {
        return {
            top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
            left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left),
        };
    }
    scrollIntoView(element, container, direction = 'vertical', behavior = 'smooth') {
        const offset = this.getOffset(element, container);
        const offsetTop = offset.top + container.scrollTop;
        const offsetLeft = offset.left + container.scrollLeft;
        const minX = container.scrollLeft;
        const maxX = container.scrollLeft + container.offsetWidth;
        const minY = container.scrollTop;
        const maxY = container.scrollTop + container.offsetHeight;
        if (direction === 'horizontal' || direction === 'both') {
            if (offsetLeft < minX) {
                container.scrollTo({ left: offsetLeft, behavior });
            }
            else if (offsetLeft + element.clientWidth > maxX) {
                container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
            }
        }
        if (direction === 'vertical' || direction === 'both') {
            if (offsetTop < minY) {
                container.scrollTo({ top: offsetTop, behavior });
            }
            else if (offsetTop + element.clientHeight > maxY) {
                container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
            }
        }
    }
    handleValueChange(newValue) {
        this.syncSelectedFromValue(newValue);
    }
    getAllOptions() {
        return this.options;
    }
    updateOptionsFromSlot(slotEl) {
        const slot = slotEl ?? this.listboxRef?.querySelector('slot');
        if (!slot) {
            this.options = Array.from(this.el.querySelectorAll('ir-autocomplete-option'));
            return;
        }
        const assigned = slot.assignedElements({ flatten: true });
        this.options = assigned.filter(el => el.tagName.toLowerCase() === 'ir-autocomplete-option');
    }
    clearCurrentOption() {
        const allOptions = this.getAllOptions();
        allOptions.forEach(el => {
            el.current = false;
            el.tabIndex = -1;
        });
        this.currentOption = undefined;
    }
    ensureCurrentOption() {
        const allOptions = this.getAllOptions().filter(option => !option.disabled);
        if (!allOptions.length) {
            this.clearCurrentOption();
            return;
        }
        const selected = allOptions.find(option => option.selected);
        const nextOption = selected ?? this.currentOption ?? allOptions[0];
        if (nextOption) {
            this.setCurrentOption(nextOption, { scroll: false });
        }
    }
    setCurrentOption(option, options = {}) {
        if (!option || option.disabled)
            return;
        const allOptions = this.getAllOptions();
        // Clear selection
        allOptions.forEach(el => {
            el.current = false;
            el.tabIndex = -1;
        });
        // Select the target option
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        if (options.scroll && this.listboxRef) {
            this.scrollIntoView(option, this.listboxRef, 'vertical', 'auto');
        }
    }
    getOptionLabel(option) {
        if (option.label)
            return option.label;
        return option.textContent?.trim() ?? '';
    }
    getOptionValue(option) {
        return option.value ?? this.getOptionLabel(option);
    }
    syncSelectedFromValue(value) {
        const allOptions = this.getAllOptions();
        let selectedOption;
        allOptions.forEach(option => {
            const matches = this.getOptionValue(option) === value || this.getOptionLabel(option) === value;
            option.selected = matches;
            if (matches) {
                selectedOption = option;
            }
        });
        if (selectedOption) {
            this.currentOption = selectedOption;
        }
        else if (this.currentOption && this.getOptionValue(this.currentOption) !== value && this.getOptionLabel(this.currentOption) !== value) {
            this.currentOption = undefined;
        }
    }
    selectOption(option) {
        if (!option || option.disabled)
            return;
        const allOptions = this.getAllOptions();
        allOptions.forEach(el => {
            el.selected = false;
        });
        option.selected = true;
        this.currentOption = option;
        const emitValue = this.getOptionValue(option);
        const displayValue = this.getOptionLabel(option);
        if (this.emitOnSameValue || (!this.emitOnSameValue && emitValue !== this.value)) {
            this.value = displayValue;
            this.comboboxChange.emit(emitValue);
        }
        this.hide();
        requestAnimationFrame(() => this.inputRef?.focusInput());
    }
    handleOptionClick = (event) => {
        const target = event.target;
        const option = target?.closest('ir-autocomplete-option');
        if (!option)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.selectOption(option);
    };
    handleTextChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextValue = event.detail ?? '';
        if (nextValue === this.value) {
            if (!this.open && this.getAllOptions().length) {
                this.show();
            }
            return;
        }
        this.value = nextValue;
        this.textChange.emit(nextValue);
        if (!this.open && this.getAllOptions().length) {
            this.show();
        }
    };
    handleOptionsSlotChange = (event) => {
        this.updateOptionsFromSlot(event.target);
        this.syncSelectedFromValue(this.value);
        if (this.open) {
            this.ensureCurrentOption();
        }
    };
    handleKeydownChange = (event) => {
        if (event.key === 'Escape' && this.open) {
            event.preventDefault();
            event.stopPropagation();
            this.hide();
            return;
        }
        if (event.key === 'Enter') {
            if (this.open && this.currentOption) {
                event.preventDefault();
                event.stopPropagation();
                this.selectOption(this.currentOption);
            }
            return;
        }
        if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
            const allOptions = this.getAllOptions().filter(option => !option.disabled);
            if (!allOptions.length)
                return;
            const baseOption = this.currentOption && allOptions.includes(this.currentOption) ? this.currentOption : allOptions[0];
            const currentIndex = allOptions.indexOf(baseOption);
            let newIndex = Math.max(0, currentIndex);
            // Prevent scrolling
            event.preventDefault();
            // Open it
            if (!this.open) {
                this.show();
                // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
                // opens for the first time
                if (this.currentOption || allOptions.some(option => option.selected)) {
                    return;
                }
            }
            if (event.key === 'ArrowDown') {
                newIndex = currentIndex + 1;
                if (newIndex > allOptions.length - 1)
                    newIndex = 0;
            }
            else if (event.key === 'ArrowUp') {
                newIndex = currentIndex - 1;
                if (newIndex < 0)
                    newIndex = allOptions.length - 1;
            }
            else if (event.key === 'Home') {
                newIndex = 0;
            }
            else if (event.key === 'End') {
                newIndex = allOptions.length - 1;
            }
            this.setCurrentOption(allOptions[newIndex], { scroll: true });
        }
    };
    render() {
        return (index.h(index.Host, { key: '10cb3dd6b976f22b6366f52d24727b0841f3202d' }, index.h("wa-popup", { key: '4ca783e3c5c11679ca47c9a502dbb55564e524d9', active: this.open, flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, placement: this.placement, exportparts: "popup, arrow, hover-bridge" }, index.h("ir-input", { key: '179bb8681e1abb5e2c618557826db3af70803dd6', slot: "anchor", ref: el => (this.inputRef = el), onKeyDown: this.handleKeydownChange, "onText-change": this.handleTextChange, name: this.name, value: this.value, type: this.type, defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, inputClass: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, mask: this.mask, returnMaskedValue: this.returnMaskedValue, disabled: this.disabled, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotManager.hasSlot('label') && index.h("slot", { key: '1dd1e29345a3e544c6ba5c4d86b93f2f42cbb506', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && index.h("slot", { key: '4a3803900e102d3740b71404a15e48f98682020e', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && index.h("slot", { key: '21d226b53a20512679b3d1d5cb3e5187db3f5484', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && index.h("slot", { key: '46aa523f0c85471ec0927d1c4a39ac34ada044c7', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && index.h("slot", { key: '824360ddc7c459ad455773486b20ad41600d04bb', name: "hint", slot: "hint" })), index.h("div", { key: 'a3d7aa58d26eed69ce083985fbac44f87c4c8ba8', id: "listbox", ref: el => (this.listboxRef = el), role: "listbox", "aria-expanded": this.open ? 'true' : 'false', "aria-multiselectable": 'false', "aria-labelledby": "label", part: "listbox", class: "listbox", tabindex: "-1", hidden: !this.open, onKeyDown: this.handleKeydownChange }, index.h("slot", { key: '77d8c4b2af82a4248b682bb9a10d682f9ed4718c', onSlotchange: this.handleOptionsSlotChange })))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "value": ["handleValueChange"]
    }; }
};
__decorate$5([
    ClickOutside.ClickOutside()
], IrAutocomplete.prototype, "hide", null);
IrAutocomplete.style = IrAutocompleteStyle0;

const irAutocompleteOptionCss = ":host{display:block}";
const IrAutocompleteOptionStyle0 = irAutocompleteOptionCss;

const IrAutocompleteOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    render() {
        return (index.h(index.Host, { key: '3b30d8d7cedd6a349021f63f04b23bf62a6b654a', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("wa-option", { key: '55c06048ea26d8e8d1b908d8d3df5e265bc4f430', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, index.h("slot", { key: 'e35f1ea3b098595fbbf4bd4731ca366f31e55be3' }), index.h("slot", { key: 'fb050d2dd84c748aa06318604b78cbeb78ace0cf', name: "start", slot: "start" }), index.h("slot", { key: '6b1fda351078def8c9d6934a7bbc44417bf68ede', name: "end", slot: "end" }))));
    }
};
IrAutocompleteOption.style = IrAutocompleteOptionStyle0;

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler", 7);
    }
    /**
     * The name of the button, used for identification purposes.
     */
    name;
    /**
     * The text content displayed inside the button.
     */
    text;
    /**
     * The color theme of the button.
     */
    btn_color = 'primary';
    /**
     * The size of the button.
     */
    size = 'md';
    /**
     * The size of the text inside the button.
     */
    textSize = 'md';
    /**
     * Whether the button should expand to the full width of its container.
     */
    btn_block = true;
    /**
     * Disables the button when set to true.
     */
    btn_disabled = false;
    /**
     * The button type attribute (`button`, `submit`, or `reset`).
     */
    btn_type = 'button';
    /**
     * Displays a loading indicator when true and disables the button.
     */
    isLoading = false;
    /**
     * Additional custom class names for the button.
     */
    btn_styles;
    /**
     * A unique identifier for the button instance.
     */
    btn_id = v4.v4();
    /**
     * Visual variant of the button: either standard (`default`) or icon-only (`icon`).
     */
    variant = 'default';
    /**
     * The name of the icon to display.
     */
    icon_name;
    /**
     * If true, applies a visible background when hovered.
     */
    visibleBackgroundOnHover = false;
    /**
     * Position of the icon relative to the button text.
     */
    iconPosition = 'left';
    /**
     * Custom style object for the icon.
     */
    icon_style;
    /**
     * Custom inline styles for the button element.
     */
    btnStyle;
    /**
     * Custom inline styles for the label/text inside the button.
     */
    labelStyle;
    /**
     * If true, renders the text property as raw HTML inside the button.
     */
    renderContentAsHtml = false;
    /**
     * Emits a custom click event when the button is clicked.
     */
    clickHandler;
    buttonEl;
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    /**
     * Triggers a bounce animation on the button.
     */
    async bounce() {
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        const disabled = this.btn_disabled || this.isLoading;
        if (this.variant === 'icon') {
            return (index.h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? index.h("span", { class: "icon-loader" }) : index.h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && index.h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (index.h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (index.h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? index.h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && index.h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

const irCityLedgerCss = ".sc-ir-city-ledger-h{display:block;height:100%}.city-ledger__agents-autocomplete.sc-ir-city-ledger{width:100%;margin-bottom:var(--wa-space-s, 0.5rem)}@media (min-width: 768px){.city-ledger__agents-autocomplete.sc-ir-city-ledger{max-width:400px}}.city-ledger__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.city-ledger__no-agent.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.625rem;padding:5rem 2rem;height:100%;text-align:center;color:var(--wa-color-text-quiet, #6b7280)}.city-ledger__no-agent-icon-container.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.city-ledger__no-agent-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.city-ledger__no-agent-sub.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:400px;line-height:1.6}.statement-tab-panel.sc-ir-city-ledger{min-height:400px}.statement__empty-state.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:4rem 2rem;color:var(--wa-color-text-quiet, #6b7280);text-align:center}.statement__empty-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement__empty-subtitle.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:360px}.statement__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:1.25rem}.statement__controls.sc-ir-city-ledger{display:flex;align-items:flex-end;flex-wrap:wrap;gap:1rem}.statement__period-group.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.375rem}.statement__label.sc-ir-city-ledger{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280)}.statement__dates.sc-ir-city-ledger{display:flex;align-items:center;gap:0.5rem}.statement__date-picker.sc-ir-city-ledger{width:160px}.statement__dates-sep.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #9ca3af);font-weight:500}.statement__action-bar.sc-ir-city-ledger{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);border-radius:0.625rem 0.625rem 0 0;font-size:0.875rem}.statement__action-bar-label.sc-ir-city-ledger{display:flex;align-items:center;font-weight:500;color:var(--wa-color-brand-on-quiet)}.statement__action-bar-buttons.sc-ir-city-ledger{display:flex;gap:0.5rem;flex-wrap:wrap}.statement__preview-wrapper.sc-ir-city-ledger{display:flex;flex-direction:column}.statement-doc.sc-ir-city-ledger{background:#fff;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-top:0;border-radius:0 0 0.75rem 0.75rem;padding:2rem;display:flex;flex-direction:column;gap:1.5rem;box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.04)}.statement-doc__header.sc-ir-city-ledger{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem}.statement-doc__hotel.sc-ir-city-ledger{display:flex;align-items:center;gap:0.875rem}.statement-doc__hotel-logo.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;background:var(--wa-color-neutral-fill-quiet, #f3f4f6);border-radius:0.5rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__title.sc-ir-city-ledger{margin:0;font-size:1.375rem;font-weight:700;color:var(--wa-color-text-normal, #111827)}.statement-doc__subtitle.sc-ir-city-ledger{margin:0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.25rem;text-align:right}.statement-doc__meta-row.sc-ir-city-ledger{display:flex;justify-content:flex-end;gap:0.5rem;font-size:0.8125rem}.statement-doc__meta-label.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta-value.sc-ir-city-ledger{font-weight:500;color:var(--wa-color-text-normal, #111827)}.statement-doc__statement-number.sc-ir-city-ledger{font-family:ui-monospace, 'Cascadia Code', monospace;font-size:0.8125rem}.statement-doc__divider.sc-ir-city-ledger{border:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);margin:0}.statement-doc__parties.sc-ir-city-ledger{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.statement-doc__party-label.sc-ir-city-ledger{margin:0 0 0.375rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__party-name.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement-doc__party-detail.sc-ir-city-ledger{margin:0.125rem 0 0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__summary.sc-ir-city-ledger{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.75rem}@media (min-width: 768px){.statement-doc__summary.sc-ir-city-ledger{grid-template-columns:repeat(4, 1fr)}}.statement-doc__summary-card.sc-ir-city-ledger{padding:1rem;border-radius:0.5rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);display:flex;flex-direction:column;gap:0.25rem}.statement-doc__summary-card--opening.sc-ir-city-ledger{border-color:var(--wa-color-neutral-border-quiet, #e5e7eb)}.statement-doc__summary-card--charges.sc-ir-city-ledger{border-color:#fecaca;background:#fef2f2}.statement-doc__summary-card--payments.sc-ir-city-ledger{border-color:#bbf7d0;background:#f0fdf4}.statement-doc__summary-card--due.sc-ir-city-ledger{border-color:var(--wa-color-brand-border-quiet, #bfdbfe);background:var(--wa-color-brand-fill-quiet, #eff6ff)}.statement-doc__summary-card-label.sc-ir-city-ledger{font-size:0.75rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);text-transform:uppercase;letter-spacing:0.03em}.statement-doc__summary-card-value.sc-ir-city-ledger{font-size:1.125rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums}.statement-doc__balance-due.sc-ir-city-ledger{color:var(--wa-color-brand-fill-loud, #2563eb)}.statement-doc__table-wrapper.sc-ir-city-ledger{overflow-x:auto;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem}.statement-doc__table.sc-ir-city-ledger{width:100%;border-collapse:collapse;font-size:0.875rem}.statement-doc__table.sc-ir-city-ledger thead.sc-ir-city-ledger th.sc-ir-city-ledger{padding:0.625rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);font-weight:600;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280);text-align:left;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);white-space:nowrap}.statement-doc__table.sc-ir-city-ledger tbody.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.625rem 0.875rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.statement-doc__table.sc-ir-city-ledger tfoot.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.75rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb);font-weight:700}.statement-doc__col--right.sc-ir-city-ledger{text-align:right}.statement-doc__opening-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:500;background:var(--wa-color-neutral-fill-quiet, #fafafa);color:var(--wa-color-text-quiet, #6b7280);font-size:0.8125rem}.statement-doc__totals-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:700}.statement-doc__table-note.sc-ir-city-ledger{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.8125rem;padding:1.5rem !important}.statement-doc__footer.sc-ir-city-ledger{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;padding:0.875rem 1rem}.statement-doc__payment-notice.sc-ir-city-ledger{display:flex;align-items:flex-start;gap:0.5rem;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__payment-notice.sc-ir-city-ledger p.sc-ir-city-ledger{margin:0;line-height:1.5}";
const IrCityLedgerStyle0 = irCityLedgerCss;

const IrCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket;
    p;
    baseurl;
    language = 'en';
    propertyid;
    agentId = null;
    resolvedPropertyId = null;
    currentTab = 'folio';
    isLoading = false;
    agents = [];
    selectedAgent = null;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    // Statement tab state
    statementFrom = null;
    statementTo = null;
    showStatementPreview = false;
    folioSummary = null;
    panels = [
        { id: 'folio', label: 'Folio' },
        { id: 'fiscal-documents', label: 'Fiscal Documents' },
        { id: 'create-statement', label: 'Create Statement' },
    ];
    tokenService = new Token.Token();
    agentsService = new agents_service.AgentsService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_service.BookingService();
    systemService = new system_service.SystemService();
    toolbarRef;
    createInvoiceDialogRef;
    currencies = [];
    componentWillLoad() {
        if (this.ticket) {
            if (this.baseurl) {
                this.tokenService.setBaseUrl(this.baseurl);
            }
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.ticket)
            this.init();
    }
    handleAgentIdChange(newId, oldId) {
        if (newId === oldId || this.isLoading)
            return;
        this.applyAgentIdProp();
    }
    getUniqueTaxValues() {
        let taxes = new Set();
        calendarData.calendar_data?.property.tax_categories?.forEach(t => {
            if (t.taxation_mode.code === '001')
                taxes.add(t.pct);
        });
        this.taxOptions = Array.from(taxes).map(t => ({ id: t.toString(), label: `${t}%` }));
    }
    applyAgentIdProp() {
        if (this.agentId == null)
            return;
        const agent = this.agents.find(a => a.id === this.agentId);
        if (!agent)
            return;
        this.selectedAgent = agent;
        this.showStatementPreview = false;
        this.folioSummary = null;
        requestAnimationFrame(() => {
            const autocomplete = this.el.querySelector('ir-autocomplete');
            if (autocomplete)
                autocomplete.value = agent.name;
        });
    }
    async init() {
        try {
            this.isLoading = true;
            // If a property name was supplied but no numeric id, resolve the id first.
            let propertyId = this.propertyid;
            if (!propertyId && this.p) {
                await this.propertyService.getExposedProperty({ id: null, language: this.language, aname: this.p });
                propertyId = calendarData.calendar_data.id;
            }
            this.resolvedPropertyId = propertyId;
            const resolvedByName = !this.propertyid && !!this.p;
            const [, setupEntries, agents, currencies] = await Promise.all([
                resolvedByName ? Promise.resolve() : this.propertyService.getExposedProperty({ id: propertyId, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_SVC_CATEGORY']),
                this.agentsService.getExposedAgents({ property_id: propertyId }),
                this.systemService.getExposedCurrencies(),
            ]);
            this.currencies = currencies;
            this.agents = agents ?? [];
            this.applyAgentIdProp();
            this.getUniqueTaxValues();
            const { svc_category } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.serviceCategoryOptions = (svc_category ?? []).map(entry => ({
                id: entry.CODE_NAME,
                label: entry.CODE_VALUE_EN,
            }));
            this.currencySymbol = calendarData.calendar_data.currency?.symbol ?? '$';
        }
        catch (error) {
            console.error('Failed to initialize city ledger', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: 'City Ledger' }, index.h("ir-autocomplete", { slot: "page-header",
            // size="medium"
            placeholder: "Select agent", class: "city-ledger__agents-autocomplete", "onCombobox-change": (e) => {
                this.selectedAgent = e.detail ? this.agents?.find(agent => agent.id === Number(e.detail)) : null;
                this.showStatementPreview = false;
                this.folioSummary = null;
            } }, this.agents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name)))), !this.selectedAgent ? (index.h("ir-empty-state", { message: "Select an agent to get started", class: "city-ledger__no-agent" }, index.h("div", { slot: "icon", class: 'city-ledger__no-agent-icon-container' }, index.h("wa-icon", { name: "building", class: "city-ledger__no-agent-icon" })), index.h("p", { class: "city-ledger__no-agent-sub" }, "Choose an agent from the selector above to view their city ledger folio, fiscal documents, and statements."))) : (index.h("div", { class: "city-ledger__content" }, index.h("ir-city-ledger-toolbar", { ref: el => (this.toolbarRef = el), agentId: this.selectedAgent?.id, currencySymbol: this.currencySymbol, onCreateInvoice: () => this.createInvoiceDialogRef.openModal() }), index.h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                this.currentTab = e.detail.name.toString();
            }, active: this.currentTab }, this.panels.map(panel => (index.h("wa-tab", { key: panel.id, panel: panel.id }, panel.label))), index.h("wa-tab-panel", { name: "folio" }, index.h("ir-city-ledger-folio", { agent: this.selectedAgent, propertyId: this.resolvedPropertyId, taxOptions: this.taxOptions, serviceCategoryOptions: this.serviceCategoryOptions, currencies: this.currencies, onFolioSummaryUpdate: e => (this.folioSummary = e.detail) })), index.h("wa-tab-panel", { name: "fiscal-documents" }, this.currentTab === 'fiscal-documents' && (index.h("ir-city-ledger-fiscal-documents", { agentId: this.selectedAgent?.id, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId }))), index.h("wa-tab-panel", { name: "create-statement", class: "statement-tab-panel" }, this.currentTab === 'create-statement' && (index.h("ir-city-ledger-statements", { agentId: this.selectedAgent?.id, agentName: this.selectedAgent?.name ?? '', currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId }))))))), index.h("ir-cl-invoice-dialog", { ref: el => (this.createInvoiceDialogRef = el), agentId: this.selectedAgent?.id, onInvoiceIssued: async () => {
                await this.toolbarRef?.refresh();
            } }), index.h("ir-cl-fiscal-document-preview", { ticket: this.ticket, propertyId: calendarData.calendar_data?.property?.id })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "propertyid": ["handlePropertyIdChange"],
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedger.style = IrCityLedgerStyle0;

const irCityLedgerFiscalDocumentsCss = ".sc-ir-city-ledger-fiscal-documents-h{display:block}.fiscal-documents.sc-ir-city-ledger-fiscal-documents{display:flex;flex-direction:column;gap:0.875rem}";
const IrCityLedgerFiscalDocumentsStyle0 = irCityLedgerFiscalDocumentsCss;

const IrCityLedgerFiscalDocuments = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    agentId = null;
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    cityLedgerService = new utils.CityLedgerService();
    handleAgentIdChange() {
        this.fiscalDocuments = [];
        this.hasFetched = false;
    }
    get filteredDocuments() {
        return this.fiscalDocuments;
    }
    async fetchFiscalDocuments(filters) {
        if (!this.agentId || (!filters.fromDate && !filters.toDate))
            return;
        this.isLoading = true;
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : moment.hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? this.filters.toDate : moment.hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agentId,
                START_DATE: effectiveFrom,
                END_DATE: effectiveTo,
                DOC_NUMBER: filters.docNumber || '',
                LIST_FD_TYPE_CODE: filters.type === 'all' ? null : [filters.type],
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-fiscal-documents] getFiscalDocuments error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'ffde97364ba5ae433013d4689a7ff78377000421' }, index.h("section", { key: '5c90c61d4a5feebdd1b2389c7ba1345885046ac9', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, index.h("ir-city-ledger-fiscal-documents-filters", { key: '8f18afdc032fa4d5b5b87d77532fecf996712d8b', filters: this.filters, onFiltersChange: event => {
                this.filters = event.detail;
            }, onApplyFilters: event => {
                this.filters = event.detail;
                this.fetchFiscalDocuments(event.detail);
            } }), index.h("ir-city-ledger-fiscal-documents-table", { key: '73350e6f70701411a35db7fcc3f6828f1a137816', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), hasFetched: this.hasFetched, ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) }))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedgerFiscalDocuments.style = IrCityLedgerFiscalDocumentsStyle0;

const ClTxTypeCode = {
    Payment: 'PAY',
    OpeningBalance: 'OB',
    Adjustment: 'ADJ',
    CreditNote: 'CN',
    DebitNote: 'DN',
    StandardChargeDebit: 'DB',
};
const FdTypes = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
};
const FdStatus = {
    Sent: 'SENT',
    Viewed: 'VIEWED',
    Paid: 'PAID',
    Partial: 'PARTIAL',
};

const irCityLedgerFiscalDocumentsFiltersCss = ".sc-ir-city-ledger-fiscal-documents-filters-h{display:block}.fiscal-filters.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:100%}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters{min-width:280px}@media (min-width: 640px){.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:fit-content}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{align-items:center}.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{min-width:300px}}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;gap:0.75rem}.fiscal-filters__field.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.375rem}.fiscal-filters__label.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.75rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters{height:2.125rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:0.375rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);padding:0 0.625rem;font-size:0.875rem}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters:focus-visible{outline:2px solid var(--wa-color-brand-border-normal);outline-offset:1px}.fiscal-filters__tax-switch.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--wa-color-text-normal);font-weight:600;min-height:2.125rem;white-space:nowrap}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem}.fiscal-filters__meta.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__active.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.8125rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__chips.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;flex-wrap:wrap;gap:0.375rem}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters{height:1.875rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:999px;padding:0 0.625rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font-size:0.8125rem;font-weight:600;line-height:1;cursor:pointer}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters:hover{background-color:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.fiscal-filters__chip--active.sc-ir-city-ledger-fiscal-documents-filters{border-color:var(--wa-color-brand-border-normal);color:var(--wa-color-brand-fill-loud);background-color:color-mix(in oklab, var(--wa-color-brand-fill-quiet) 40%, white)}@media (max-width: 1100px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{grid-template-columns:repeat(2, minmax(180px, 1fr))}}@media (max-width: 768px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{width:100%;grid-template-columns:1fr}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{width:100%}}";
const IrCityLedgerFiscalDocumentsFiltersStyle0 = irCityLedgerFiscalDocumentsFiltersCss;

const today = moment.hooks();
const IrCityLedgerFiscalDocumentsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange", 7);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    filtersChange;
    applyFilters;
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: FdTypes.Invoice },
        { label: 'Receipts', value: FdTypes.Receipt },
        { label: 'Credit Notes', value: FdTypes.CreditNote },
        { label: 'Debit Notes', value: FdTypes.DebitNote },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({
            ...this.filters,
            ...patch,
        });
    }
    render() {
        return (index.h("section", { key: '228adfe9dc1570380eb07c2fccc2f62e8ea272a3', class: "fiscal-filters", "aria-label": "Fiscal document filters" }, index.h("div", { key: 'c0a7c7f2d040e59cbf58041232c5b94d76df7ac2', class: "fiscal-filters__left" }, index.h("ir-date-range-filter", { key: '2d3a3a4f100f9ab8332d83e9575891ec5db32ded', maxDate: today.format('YYYY-MM-DD'), class: "fiscal-filters__dates", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) }), index.h("wa-select", { key: '8147dace3a071922b450d2eb2ec12878861dc933', value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Status" }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("ir-input", { key: '7bb4a04d8b52879f7d23b82a151e48c3680f9672', placeholder: "Search", class: "fiscal-filters__search" }, index.h("wa-icon", { key: '0df8ca3170b22f100995fd40a1685398974b63b4', name: "magnifying-glass", slot: "start" })), index.h("wa-switch", { key: '83ff5b941812a29391f10b57e80dfba95b7d21d0', id: "tax-switch", checked: this.filters.taxableOnly, onchange: event => this.updateFilters({ taxableOnly: event.target.checked }) }, "Taxes"), index.h("ir-custom-button", { key: '10a60ec00709d43d0c66cd96399ca008090e244f', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit(this.filters) }, index.h("wa-icon", { key: '131c342a8d092aa91f618b8edd109be79e67aa23', name: "magnifying-glass" })))));
    }
};
IrCityLedgerFiscalDocumentsFilters.style = IrCityLedgerFiscalDocumentsFiltersStyle0;

const irCityLedgerFiscalDocumentsTableCss = ".sc-ir-city-ledger-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-fiscal-documents-table{overflow-x:auto}.table.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-fiscal-documents-table tbody.sc-ir-city-ledger-fiscal-documents-table tr.sc-ir-city-ledger-fiscal-documents-table:last-child>td.sc-ir-city-ledger-fiscal-documents-table{border-bottom:0 !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-fiscal-documents-table .empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table,.ir-table-row.sc-ir-city-ledger-fiscal-documents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-fiscal-documents-table svg.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-fiscal-documents-table,.data-table.sc-ir-city-ledger-fiscal-documents-table{height:100%}.sc-ir-city-ledger-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.fiscal-table__heading.sc-ir-city-ledger-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-city-ledger-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-city-ledger-fiscal-documents-table{text-align:right !important}.fiscal-table__status-tag.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize}.fiscal-table__heading--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center}.fiscal-table__cell--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center}.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table::part(base){font-size:0.8125rem;font-weight:500}.fiscal-table__action-danger.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__totals.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f9fafb) !important;border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.fiscal-table__totals-label.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;color:var(--wa-color-text-quiet, #6b7280)}.fiscal-table__totals-value.sc-ir-city-ledger-fiscal-documents-table{font-variant-numeric:tabular-nums}.fiscal-table__totals-debit.sc-ir-city-ledger-fiscal-documents-table{color:#dc2626}.fiscal-table__totals-credit.sc-ir-city-ledger-fiscal-documents-table{color:#16a34a}.fiscal-table__empty.sc-ir-city-ledger-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-city-ledger-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-city-ledger-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}";
const IrCityLedgerFiscalDocumentsTableStyle0 = irCityLedgerFiscalDocumentsTableCss;

const IrCityLedgerFiscalDocumentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview", 7);
        this.fetchRequested = index.createEvent(this, "fetchRequested", 7);
    }
    rows = [];
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    agentId = null;
    fromDate = null;
    toDate = null;
    hasFetched = false;
    clFiscalDocumentPreview;
    fetchRequested;
    pendingAction = null;
    isConfirming = false;
    columnHelper = useTable.createColumnHelper();
    cityLedgerService = new utils.CityLedgerService();
    getStatusVariant(code) {
        const map = {
            PAID: 'success',
            ISSUED: 'brand',
            SENT: 'brand',
            DRAFT: 'neutral',
            PARTIAL: 'warning',
            VOID: 'danger',
        };
        return map[code?.toUpperCase()] ?? 'neutral';
    }
    handleAction(action, row) {
        switch (action) {
            case 'view':
            case 'preview':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                });
                break;
            case 'print':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                    autoPrint: true,
                });
                console.log('print', row);
                break;
            case 'download':
                console.log('download', row);
                break;
            case 'send-reminder':
                console.log('send-reminder', row);
                break;
            case 'apply-payment':
                console.log('apply-payment', row);
                break;
            case 'mark-paid':
                console.log('mark-paid', row);
                break;
            case 'void':
            case 'delete-draft':
            case 'convert-to-invoice':
                this.pendingAction = { action: action, row };
                break;
        }
    }
    async confirmPendingAction() {
        if (!this.pendingAction)
            return;
        const { action, row } = this.pendingAction;
        this.isConfirming = true;
        try {
            if (action === 'void') {
                await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
            }
            else if (action === 'delete-draft') {
                await this.cityLedgerService.deleteDraftFiscalDocument({ FD_ID: row.FD_ID });
            }
            else if (action === 'convert-to-invoice') {
                console.log('convert-to-invoice', row);
            }
            this.fetchRequested.emit();
        }
        finally {
            this.isConfirming = false;
            this.pendingAction = null;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: 'Status',
                cell: info => (index.h("wa-tag", { class: "fiscal-table__status-tag", variant: this.getStatusVariant(info.getValue()), size: "small" }, info.row.original.FD_STATUS_NAME ?? info.getValue())),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => index.h("span", { class: "fiscal-table__doc-number" }, info.getValue()),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => info.getValue(),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: 'Net Amount',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: 'Taxes',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ]
            : [
                this.columnHelper.accessor('TOTAL_AMOUNT', {
                    id: 'amount',
                    header: 'Amount (incl. taxes)',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ];
        return [
            ...base,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === utils.FD_TYPES.Draft;
                    // const isPaid = row.FD_STATUS_CODE === 'INV';
                    // const isInvoice = row.FD_TYPE_CODE === FD_TYPES.Invoice;
                    return (index.h("wa-dropdown", { "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, index.h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            index.h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            index.h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to Invoice"),
                            index.h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            index.h("wa-dropdown-item", { value: "view" }, "View Document"),
                            index.h("wa-dropdown-item", { value: "print" }, "Print"),
                            // <wa-dropdown-item value="download">Download PDF</wa-dropdown-item>,
                            // (!isPaid || !isInvoice) && <wa-divider></wa-divider>,
                            // !isPaid && <wa-dropdown-item value="send-reminder">Send Reminder</wa-dropdown-item>,
                            // !isPaid && isInvoice && <wa-dropdown-item value="apply-payment">Apply Payment</wa-dropdown-item>,
                            // !isPaid && <wa-dropdown-item value="mark-paid">Mark as Paid</wa-dropdown-item>,
                            // <wa-divider></wa-divider>,
                            index.h("wa-dropdown-item", { value: "void" }, index.h("span", { class: "fiscal-table__action-danger" }, "Void")),
                        ]));
                },
                enableSorting: false,
            }),
        ];
    }
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return index.h("span", { class: "fiscal-table__cell--zero" }, "\u2014");
        return index.h("span", null, utils$1.formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "fiscal-table__date-prompt" }, index.h("div", { class: "fiscal-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents")))));
        }
        const table = useTable.useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: this.columns.length }, this.isLoading ? index.h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), index.h("ir-fd-confirm-dialog", { open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: () => this.confirmPendingAction(), onCancelled: () => (this.pendingAction = null) })));
    }
};
IrCityLedgerFiscalDocumentsTable.style = IrCityLedgerFiscalDocumentsTableStyle0;

const irCityLedgerFolioCss = ".sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}";
const IrCityLedgerFolioStyle0 = irCityLedgerFolioCss;

const IrCityLedgerFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.folioSummaryUpdate = index.createEvent(this, "folioSummaryUpdate", 7);
    }
    agent = null;
    propertyId;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencies = [];
    isTransactionOpen = false;
    filters = {};
    data = [];
    isLoading = false;
    hasFetched = false;
    startingBalance = 0;
    closingBalance = 0;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    folioSummaryUpdate;
    cityLedgerService = new utils.CityLedgerService();
    handleAgentIdChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.clearData();
        }
    }
    clearData() {
        this.data = [];
        this.hasFetched = false;
        this.startingBalance = 0;
        this.closingBalance = 0;
        this.totalCount = 0;
        this.pageIndex = 0;
    }
    // private sortFolioRows(rows: FolioRow[]): FolioRow[] {
    //   const roomRows = rows.filter(r => r.docNumber !== null);
    //   const standaloneRows = rows.filter(r => r.docNumber === null);
    //   const groups = new Map<string, FolioRow[]>();
    //   for (const row of roomRows) {
    //     const key = `${row.bookingNumber}__${row.docNumber}`;
    //     if (!groups.has(key)) groups.set(key, []);
    //     groups.get(key)!.push(row);
    //   }
    //   for (const group of groups.values()) {
    //     group.sort((a, b) => a.serviceDate.localeCompare(b.serviceDate));
    //   }
    //   const slots: { anchorDate: string; rows: FolioRow[] }[] = [];
    //   for (const row of standaloneRows) {
    //     slots.push({ anchorDate: row.serviceDate, rows: [row] });
    //   }
    //   for (const group of groups.values()) {
    //     slots.push({ anchorDate: group[0].serviceDate, rows: group });
    //   }
    //   slots.sort((a, b) => a.anchorDate.localeCompare(b.anchorDate));
    //   return slots.flatMap(slot => slot.rows);
    // }
    async fetchFolioData() {
        if (!this.agent?.id || (!this.filters?.fromDate && !this.filters?.toDate))
            return;
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : moment.hooks(this.filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = this.filters.toDate ? this.filters.toDate : moment.hooks(this.filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            this.isLoading = true;
            const startRow = this.pageIndex * this.pageSize;
            const currencyId = calendarData.calendar_data?.property?.currency?.id;
            const statusParams = (() => {
                switch (this.filters?.status) {
                    case 'billed':
                        return { IS_LOCKED: true, IS_HOLD: null };
                    case 'held':
                        return { IS_LOCKED: null, IS_HOLD: true };
                    case 'unbilled':
                        return { IS_LOCKED: false, IS_HOLD: false };
                    default:
                        return { IS_LOCKED: null, IS_HOLD: null };
                }
            })();
            const [result, statement] = await Promise.all([
                this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agent?.id,
                    START_DATE: effectiveFrom,
                    END_DATE: effectiveTo,
                    START_ROW: startRow,
                    END_ROW: startRow + this.pageSize - 1,
                    SEARCH_QUERY: this.filters.search || null,
                    ...statusParams,
                }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agent?.id,
                    CURRENCY_ID: currencyId,
                    START_DATE: effectiveFrom,
                    END_DATE: effectiveTo,
                }),
            ]);
            const txList = result?.My_Cl_tx ?? [];
            this.totalCount = result?.TOTAL_COUNT ?? 0;
            const startingBal = statement?.STARTING_BALANCE ?? 0;
            this.startingBalance = startingBal;
            this.closingBalance = statement?.ENDING_BALANCE ?? 0;
            let totalDebits = 0;
            let totalCredits = 0;
            let unbilledCount = 0;
            const mappedRows = txList.map((tx) => {
                const mapped = utils.mapClTxToFolioRow(tx);
                totalDebits += tx.DEBIT || 0;
                totalCredits += tx.CREDIT || 0;
                if (mapped.status.label === 'Unbilled')
                    unbilledCount++;
                return { ...mapped, _rowId: v4.v4() };
            });
            this.data = mappedRows;
            this.folioSummaryUpdate.emit({
                startingBalance: startingBal,
                totalDebits,
                totalCredits,
                currentBalance: this.closingBalance,
                unbilledCount,
            });
        }
        catch (error) {
            console.error('Failed to fetch city ledger folio', error);
            this.data = [];
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'dde73d1582ca25ee20eb673facfa19d1d38ddf34' }, index.h("ir-city-ledger-folio-filters", { key: '21d4b8a88c7444481826714dc4d426de0fc9ec04', onFiltersChange: e => (this.filters = e.detail), onApplyFilters: async (e) => {
                this.filters = e.detail;
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onAddEntry: () => (this.isTransactionOpen = true) }), index.h("ir-city-ledger-folio-table", { key: 'ad1f91dfb29c996c4f5cf489382ab536f905fdfe', agentId: this.agent?.id, data: this.data, isLoading: this.isLoading, hasFetched: this.hasFetched, startingBalance: this.startingBalance, closingBalance: this.closingBalance, totalCount: this.totalCount, pageIndex: this.pageIndex, pageSize: this.pageSize, fromDate: this.filters?.fromDate, toDate: this.filters?.toDate, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, onPageChange: async (e) => {
                this.pageIndex = e.detail.pageIndex;
                this.pageSize = e.detail.pageSize;
                await this.fetchFolioData();
            }, onFetchRequested: async () => {
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onGenerateInvoice: e => console.log('Generate invoice for', e.detail) }), index.h("ir-city-ledger-transaction-drawer", { key: 'af5500bebd58ddd1b60e81472dc090ad69d7e05f', open: this.isTransactionOpen, taxOptions: this.taxOptions, serviceCategoryOptions: this.serviceCategoryOptions, agent: this.agent, onTransactionSaved: () => {
                this.fetchFolioData();
            }, onCloseDrawer: () => (this.isTransactionOpen = false) })));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedgerFolio.style = IrCityLedgerFolioStyle0;

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;flex-shrink:0;min-width:280px}.filters-bar__date_picker.sc-ir-city-ledger-folio-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;flex:1;min-width:0}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{flex-shrink:0;min-width:130px}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;max-width:400px}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}@media (max-width: 767px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:column;align-items:stretch;gap:0.625rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:100%;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{width:100}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{min-width:110px;flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{width:100%;justify-content:flex-end}}";
const IrCityLedgerFolioFiltersStyle0 = irCityLedgerFolioFiltersCss;

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrCityLedgerFolioFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange", 7);
        this.addEntry = index.createEvent(this, "addEntry", 7);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    dates = {
        from: undefined,
        to: undefined,
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    applyFilters;
    componentDidLoad() {
        this.emitFilters();
    }
    statuses = [
        { value: 'all', label: 'All entries' },
        { value: 'billed', label: 'Billed' },
        { value: 'held', label: 'Held' },
        { value: 'unbilled', label: 'Unbilled' },
    ];
    emitFilters() {
        this.filtersChange.emit({
            fromDate: this.dates.from?.format('YYYY-MM-DD'),
            toDate: this.dates.to?.format('YYYY-MM-DD'),
            status: this.statusFilter,
            search: this.searchQuery,
        });
    }
    emitFiltersDebounced() {
        this.emitFilters();
    }
    render() {
        return (index.h(index.Host, { key: 'd12946923492054212ca7afd65435706e7a4ad3e' }, index.h("div", { key: 'f6fc6b251659ffc2b2cc0a9bff668891b1d53441', class: "filters-bar" }, index.h("div", { key: '0822028b550fa9acb203c1c67216c4e2e8f477ca', class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: 'e80c60c827c57d84f4e407c9bf0852c739d2bb86', maxDate: moment.hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment.hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? moment.hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), index.h("div", { key: '47c466d22c3a43703aad7f85e009e29ddfd5f870', class: "filters-bar__search-group" }, index.h("wa-select", { key: '47d56116dddf696c14c68c45d42b84697564a84e', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (index.h("wa-option", { value: s.value, label: s.label }, s.label)))), index.h("ir-input", { key: 'da0eec3e3566ddb48ee96ebe12ed77d95abde38c', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, index.h("wa-icon", { key: '9d2daa53aca31a9d38c56a431d65fb9aa50d6aed', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: '533932411dcb7f05d029abdb334a0bca12ebda01', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, index.h("wa-icon", { key: 'ed83ac48a244bde3b5d1a3b76e0982410e1d7043', name: "magnifying-glass" }))), index.h("div", { key: '200fcfcd2ed93faab0a2356feda47abf9cc248ec', class: "filters-bar__actions" }, index.h("wa-dropdown", { key: 'c47bfa38fe7c2e380802adb141d3a1c08d57ab83' }, index.h("ir-custom-button", { key: 'f9ba9841e2490ef75a991d3f1963ad104dc66325', slot: "trigger", appearance: "outlined", withCaret: true }, index.h("wa-icon", { key: '8f23d2bea0a9a41f69c35305d4c0e80f2964fdf5', name: "download", slot: "start" }), index.h("span", { key: '4b194569bbe80515a6025ddb982e5a79ce170d92' }, "Export")), index.h("wa-dropdown-item", { key: '45d6b1e13d168fa0e4311cacb173a0896e03b9c0', value: "csv" }, index.h("wa-icon", { key: '2cb702028f417e35a042824a7da64bda176deeb2', slot: "icon", name: "file-csv" }), "Export as CSV"), index.h("wa-dropdown-item", { key: '3d80776adcd1ec8f3bde68888102ec198fc63041', value: "pdf" }, index.h("wa-icon", { key: '30072d2d408055884387beb9d0a20965ae8599da', slot: "icon", name: "file-pdf" }), "Export as PDF"), index.h("wa-divider", { key: '6f86a333ef5c1bb96b399872b54311be213eab66' }), index.h("wa-dropdown-item", { key: '5acb0a7d0d3dc5e730fab4014256aee2979fadf9', value: "print" }, index.h("wa-icon", { key: 'f90ed4e2d7beca2323191671ae254a29065992f7', slot: "icon", name: "print" }), "Print Folio")), index.h("ir-custom-button", { key: '0d207cd055f9178243941e835cf8d5aeee7e1196', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
    }
};
__decorate$4([
    debounce.Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
IrCityLedgerFolioFilters.style = IrCityLedgerFolioFiltersStyle0;

const irCityLedgerFolioTableCss = ".sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),\n    0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start){display:none}.header-button.sc-ir-city-ledger-folio-table::part(base){justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,\n    background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base){color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base){font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-right:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-right:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-right:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;right:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__date-prompt.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.folio-table__date-prompt-icon.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.folio-table__date-prompt-title.sc-ir-city-ledger-folio-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.folio-table__date-prompt-subtitle.sc-ir-city-ledger-folio-table{margin:0;font-size:0.8125rem;color:var(--wa-color-text-subtle, #6b7280);max-width:28rem;line-height:1.5}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:right;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:right !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}";
const IrCityLedgerFolioTableStyle0 = irCityLedgerFolioTableCss;

const DATE_DISPLAY_FORMAT$1 = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT$2 = 'YYYY-MM-DD';
const IrCityLedgerFolioTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChange = index.createEvent(this, "pageChange", 7);
        this.generateInvoice = index.createEvent(this, "generateInvoice", 7);
        this.fetchRequested = index.createEvent(this, "fetchRequested", 7);
    }
    // ─── Props ───────────────────────────────────────────────────────────────
    agentId = null;
    data = [];
    isLoading = false;
    startingBalance = 0;
    closingBalance = 0;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    fromDate = '';
    toDate = '';
    hasFetched = false;
    currencySymbol = '$';
    currencies = [];
    // ─── State ───────────────────────────────────────────────────────────────
    tableState = {};
    selectedRowIds = new Set();
    holdTargetRow = null;
    // ─── Events ──────────────────────────────────────────────────────────────
    pageChange;
    generateInvoice;
    fetchRequested;
    // ─── Private fields ──────────────────────────────────────────────────────
    columnHelper = useTable.createColumnHelper();
    pageSizes = [25, 50, 100];
    holdDialogRef;
    // ─── Utilities ───────────────────────────────────────────────────────────
    formatDate(date) {
        if (!date)
            return '';
        const m = moment.hooks(date, [DATE_INPUT_FORMAT$2, moment.hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT$1) : date;
    }
    // ─── Selection ────────────────────────────────────────────────────────────
    get selectedUnbilledRows() {
        return this.data.filter(row => this.selectedRowIds.has(row._rowId) && row.status?.label === 'Unbilled');
    }
    handleHoldToggled(rowId, newIsHold) {
        // Note: optimistic local update — parent will re-fetch on next search
        const updatedData = this.data.map(row => {
            if (row._rowId !== rowId)
                return row;
            const updatedRaw = { ...row._raw, IS_HOLD: newIsHold };
            const status = newIsHold ? { id: 'held', label: 'Held', variant: 'warning', description: '' } : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
            return { ...row, _raw: updatedRaw, status };
        });
        // Trigger re-render by reassigning (Stencil tracks Prop changes via reference)
        // Since data is a Prop we can't mutate it — we use a local state for optimistic UI
        this._localDataOverride = updatedData;
        this.holdTargetRow = null;
    }
    // Local override for optimistic hold/revert updates
    _localDataOverride = null;
    onDataChange() {
        this._localDataOverride = null;
    }
    get displayData() {
        return this._localDataOverride ?? this.data;
    }
    // ─── Currency helpers ─────────────────────────────────────────────────────
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    // ─── Column definitions ──────────────────────────────────────────────────
    columns = [
        this.columnHelper.accessor(row => row.status.label, {
            id: 'status',
            header: 'Status',
            size: 200,
            cell: info => {
                const value = info.getValue();
                const rowId = `status_${info.row.original._rowId}`;
                return (index.h("div", { class: "folio-table__status-cell" }, index.h("wa-tag", { size: "small", variant: info.row.original.status.variant }, value, value === 'Billed' && index.h("wa-icon", { name: "lock" })), value !== 'Billed' && (index.h(index.Fragment, null, index.h("wa-tooltip", { for: rowId }, value === 'Held' ? 'Revert to Unbilled' : 'Hold entry'), index.h("wa-button", { onClick: () => {
                        this.holdTargetRow = info.row.original;
                        this.holdDialogRef.openModal();
                    }, id: rowId, appearance: "plain", variant: "neutral", size: "small" }, index.h("wa-icon", { name: "ban", style: { color: value === 'Held' ? 'var(--wa-color-danger-fill-loud)' : 'var(--wa-color-neutral-fill-normal)' } }))))));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('serviceDate', {
            header: 'Service Date',
            cell: info => this.formatDate(info.getValue()),
            aggregatedCell: info => this.formatDate(info.getValue()),
            enableGrouping: true,
            aggregationFn: (columnId, leafRows) => {
                if (!leafRows.length)
                    return undefined;
                const dates = leafRows
                    .map(row => row.getValue(columnId))
                    .filter(Boolean)
                    .map(date => new Date(date));
                if (!dates.length)
                    return undefined;
                const latest = new Date(Math.max(...dates.map(d => d.getTime())));
                return latest.toISOString().split('T')[0];
            },
        }),
        this.columnHelper.accessor('bookingNumber', {
            header: 'Booking #',
            cell: info => (info.getValue() ? String(info.getValue()) : null),
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('description', {
            header: 'Description',
            cell: info => index.h("span", { class: "folio-table__description" }, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('docNumber', {
            header: 'Fiscal Doc',
            cell: info => index.h("span", null, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('debit', {
            header: 'Debit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils$1.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, utils$1.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableGrouping: false,
            enableSorting: false,
        }),
        this.columnHelper.accessor('credit', {
            header: 'Credit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { mask: 'price', disabled: true, value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils$1.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, utils$1.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.accessor('balance', {
            header: 'Balance',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils$1.formatAmount(symbol, +info.getValue()) : '')));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
    ];
    // ─── Table state ─────────────────────────────────────────────────────────
    onTableStateChange = (updater) => {
        const nextState = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(nextState))
            return;
        this.tableState = nextState;
    };
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (index.h("wa-button", { appearance: "plain", size: "small", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, index.h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), useTable.flexRender(cell.column.columnDef.cell, cell.getContext()), " ", index.h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return useTable.flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder())
            return null;
        return useTable.flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    // ─── Render helpers ──────────────────────────────────────────────────────
    renderTableHead(table) {
        return (index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            const canGroup = header.column.getCanGroup();
            const isGrouped = header.column.getIsGrouped();
            const sortDirection = header.column.getIsSorted();
            const isNumericCol = ['debit', 'credit', 'balance'].includes(header.column.id);
            return (index.h("th", { key: header.id, class: {
                    'booking_heading': !header.isPlaceholder,
                    'cell--align-end': isNumericCol,
                    'cell--align-center': header.column.id === 'select',
                    'sticky-column': header.column.id === 'status',
                    'folio-table__select-col': header.column.id === 'select',
                }, style: header.column.id === 'bookingNumber' ? { paddingInline: '0' } : undefined }, !header.isPlaceholder && (index.h("div", { class: {
                    'heading_container': true,
                    'heading_container--between': canSort || canGroup,
                    'heading_container--end': isNumericCol,
                } }, index.h("div", { class: {
                    'folio-table__col-label': true,
                    'folio-table__col-label--end': isNumericCol,
                    'folio-table__col-label--center': header.column.id === 'select',
                } }, index.h("span", null, useTable.flexRender(header.column.columnDef.header, header.getContext())), isGrouped && index.h("wa-icon", { style: { fontSize: '0.875rem', color: 'var(--wa-color-brand-fill-loud)' }, name: "object-group" }), sortDirection && (index.h("wa-icon", { style: { fontSize: '0.875rem', color: 'var(--wa-color-brand-fill-loud)' }, name: sortDirection === 'desc' ? 'arrow-up' : 'arrow-down' }))), (canSort || canGroup) && (index.h("wa-dropdown", { "onwa-select": e => {
                    switch (e.detail.item.value) {
                        case 'order-asc':
                            header.column.toggleSorting(true);
                            break;
                        case 'order-desc':
                            header.column.toggleSorting(false);
                            break;
                        case 'order-clear':
                            header.column.clearSorting();
                            break;
                        case 'group':
                            header.column.toggleGrouping();
                            break;
                    }
                }, style: { fontWeight: '400' } }, index.h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, index.h("wa-icon", { name: "ellipsis-vertical" })), canSort && (index.h(index.Fragment, null, sortDirection !== 'desc' && (index.h("wa-dropdown-item", { value: "order-asc" }, index.h("wa-icon", { slot: "icon", name: "arrow-up" }), "Sort Ascending")), sortDirection !== 'asc' && (index.h("wa-dropdown-item", { value: "order-desc" }, index.h("wa-icon", { slot: "icon", name: "arrow-down" }), "Sort Descending")), sortDirection && (index.h("wa-dropdown-item", { value: "order-clear" }, index.h("wa-icon", { slot: "icon", name: "up-down" }), "Clear Sort")))), canGroup && (index.h("wa-dropdown-item", { value: "group" }, index.h("wa-icon", { slot: "icon", name: isGrouped ? 'object-ungroup' : 'object-group' }), isGrouped ? 'UnGroup' : 'Group'))))))));
        }))))));
    }
    renderStartingBalanceRow() {
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? utils$1.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? utils$1.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, utils$1.formatAmount(this.currencySymbol, this.startingBalance))));
    }
    renderEndingBalanceRow() {
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? utils$1.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? utils$1.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, index.h("strong", null, this.closingBalance < 0 ? '-' : '', utils$1.formatAmount(this.currencySymbol, Math.abs(this.closingBalance))))));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (index.h("tr", null, index.h("td", { colSpan: this.columns.length, class: "folio-table__no-results" }, "No entries match the current filters.")));
        }
        return rows.map(row => {
            const isSelected = this.selectedRowIds.has(row.original._rowId);
            return (index.h("tr", { key: row.id, class: { 'ir-table-row': true, 'folio-table__row--selected': isSelected } }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                    'cell--align-end': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'cell--align-center': cell.column.id === 'select',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                    'folio-table__select-col': cell.column.id === 'select',
                } }, this.renderCell(cell))))));
        });
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        if (!this.agentId) {
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__empty-state" }, index.h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), index.h("p", null, "Select an agent to view the folio ledger."))));
        }
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__date-prompt" }, index.h("div", { class: "folio-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions")))));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__loading" }, index.h("ir-spinner", null))));
        }
        const table = useTable.useTable({
            data: this.displayData,
            columns: this.columns,
            state: this.tableState,
            enableGrouping: false,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
            getGroupedRowModel: useTable.getGroupedRowModel(),
            getExpandedRowModel: useTable.getExpandedRowModel(),
        });
        const total = this.totalCount;
        const pageCount = Math.ceil(total / this.pageSize);
        const showingFrom = total ? this.pageIndex * this.pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * this.pageSize + this.displayData.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        console.log(this.pageIndex);
        return (index.h(index.Host, null, hasUnbilledSelected && (index.h("div", { class: "folio-table__invoice-bar" }, index.h("span", { class: "folio-table__invoice-bar-text" }, index.h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, index.h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), index.h("ir-custom-button", { size: "small", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, this.renderTableHead(table), index.h("tbody", null, this.renderStartingBalanceRow(), this.renderDataRows(table), this.renderEndingBalanceRow()))), index.h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), index.h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) })));
    }
    static get watchers() { return {
        "data": ["onDataChange"]
    }; }
};
IrCityLedgerFolioTable.style = IrCityLedgerFolioTableStyle0;

const irCityLedgerStatementsCss = ".sc-ir-city-ledger-statements-h{display:block}.cl-statements.sc-ir-city-ledger-statements{display:flex;flex-direction:column;gap:1rem}";
const IrCityLedgerStatementsStyle0 = irCityLedgerStatementsCss;

const IrCityLedgerStatements = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    agentId = null;
    agentName = '';
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    filters = { fromDate: null, toDate: null };
    statement = null;
    rows = [];
    isLoading = false;
    hasFetched = false;
    printFilters = null;
    cityLedgerService = new utils.CityLedgerService();
    handleAgentIdChange() {
        this.statement = null;
        this.rows = [];
        this.hasFetched = false;
        this.filters = { fromDate: null, toDate: null };
        this.printFilters = null;
    }
    async fetchStatement(filters) {
        if (!this.agentId || !filters.fromDate || !filters.toDate)
            return;
        const currencyId = calendarData.calendar_data?.property?.currency?.id;
        if (!currencyId)
            return;
        this.isLoading = true;
        try {
            const [result, fiscalDocuments] = await Promise.all([
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: currencyId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                    LIST_FD_TYPE_CODE: [FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
                }),
            ]);
            this.statement = result ?? null;
            this.rows = fiscalDocuments ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-statements] getCLStatement error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    getPrintLabel() {
        if (!this.printFilters?.fromDate || !this.printFilters?.toDate)
            return 'Statement Preview';
        return `Statement — ${moment.hooks(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${moment.hooks(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        const currencyId = calendarData.calendar_data?.property?.currency?.id;
        return (index.h(index.Host, { key: 'efdf877b04c50a27dd5afc7bc5505b1b21d880a6' }, index.h("section", { key: '8c6603bbbdae60c6b6e3c5f767003d77c1227eab', class: "cl-statements", "aria-label": "City ledger statements" }, index.h("ir-city-ledger-statements-filter", { key: 'fa07ae850859fc8fb553cb7ac5d712c36d1be434', onFiltersChange: e => (this.filters = e.detail), onCreateStatement: e => {
                this.filters = e.detail;
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), index.h("ir-city-ledger-statements-table", { key: '2e08de5e03985e4342bdeff5c1c85d5402d891c4', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate })), index.h("ir-preview-screen-dialog", { key: '5c142138f03f9eb8d66a58f41a96e358d3370765', open: this.printFilters !== null, label: this.getPrintLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.printFilters = null;
            } }, this.printFilters && this.agentId && currencyId && (index.h("ir-cl-statement-preview", { key: '01728f62c9ea68ed7e9dae730f0d91e9f92a227a', ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, agentName: this.agentName, fromDate: this.printFilters.fromDate, toDate: this.printFilters.toDate, currencyId: currencyId })))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedgerStatements.style = IrCityLedgerStatementsStyle0;

const irCityLedgerStatementsFilterCss = ".sc-ir-city-ledger-statements-filter-h{display:block}.stmt-filters.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}.stmt-filters__left.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem}.stmt-filters__date-picker.sc-ir-city-ledger-statements-filter{width:100%;min-width:280px}.stmt-filters__right.sc-ir-city-ledger-statements-filter{display:flex;align-items:center;gap:0.5rem}";
const IrCityLedgerStatementsFilterStyle0 = irCityLedgerStatementsFilterCss;

const IrCityLedgerStatementsFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange", 7);
        this.createStatement = index.createEvent(this, "createStatement", 7);
        this.printStatement = index.createEvent(this, "printStatement", 7);
    }
    fromDate = null;
    toDate = null;
    filtersChange;
    createStatement;
    printStatement;
    render() {
        const canCreate = !!(this.fromDate && this.toDate);
        return (index.h(index.Host, { key: 'ffe66918b2aa73adacdc637b25b41a83c35688af' }, index.h("div", { key: '28183dc368f3dce1b7339f067f03639400b7c8d9', class: "stmt-filters" }, index.h("div", { key: '3fc5de850844434df0c075a9bc03aaac7a7c2deb', class: "stmt-filters__left" }, index.h("ir-date-range-filter", { key: '6fa282ddefa908e0428a97379d2ee2d2390de3b4', class: "stmt-filters__date-picker", maxDate: moment.hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), index.h("div", { key: '96c5c8d3cc5320678728063f17b3de663d34b664', class: "stmt-filters__right" }, index.h("ir-custom-button", { key: '7805025a5e8fb4177c5861a1ef250efb6660fdea', variant: "brand", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Create Statement"), index.h("ir-custom-button", { key: '656d3d70f3eca3ba813291640e70ede4c473791b', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
};
IrCityLedgerStatementsFilter.style = IrCityLedgerStatementsFilterStyle0;

const irCityLedgerStatementsTableCss = ".sc-ir-city-ledger-statements-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-statements-table{overflow-x:auto}.table.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-statements-table tbody.sc-ir-city-ledger-statements-table tr.sc-ir-city-ledger-statements-table:last-child>td.sc-ir-city-ledger-statements-table{border-bottom:0 !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-statements-table .empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-statements-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-statements-table,.ir-table-row.sc-ir-city-ledger-statements-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-statements-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-statements-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-statements-table svg.sc-ir-city-ledger-statements-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-statements-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-statements-table,.data-table.sc-ir-city-ledger-statements-table{height:100%}.sc-ir-city-ledger-statements-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.cell--align-end.sc-ir-city-ledger-statements-table{text-align:right !important}.stmt-table__doc-number.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.stmt-table__cell--zero.sc-ir-city-ledger-statements-table{color:var(--wa-color-text-quiet, #9ca3af)}.balance-row__label.sc-ir-city-ledger-statements-table{display:flex;align-items:center;font-size:0.8125rem}.balance-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.stmt-table__loading.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;flex:1;padding:3rem 2rem}.stmt-table__date-prompt.sc-ir-city-ledger-statements-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.stmt-table__date-prompt-icon.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.stmt-table__date-prompt-title.sc-ir-city-ledger-statements-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}";
const IrCityLedgerStatementsTableStyle0 = irCityLedgerStatementsTableCss;

const NUMERIC_COLS = new Set(['debit', 'credit', 'balance']);
const DATE_INPUT_FORMAT$1 = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const IrCityLedgerStatementsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    rows = [];
    startingBalance = 0;
    endingBalance = 0;
    currencySymbol = '$';
    currencies = [];
    isLoading = false;
    hasFetched = false;
    fromDate = null;
    toDate = null;
    columnHelper = useTable.createColumnHelper();
    formatDate(date) {
        if (!date)
            return '';
        const m = moment.hooks(date, [DATE_INPUT_FORMAT$1, moment.hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    getSymbol(currencyId) {
        if (!currencyId)
            return this.currencySymbol;
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return index.h("span", { class: "stmt-table__cell--zero" }, "\u2014");
        return index.h("span", null, utils$1.formatAmount(this.getSymbol(currencyId), value));
    }
    get runningBalances() {
        let balance = this.startingBalance;
        return this.rows.map(doc => {
            balance += (doc.DEBIT ?? 0) - (doc.CREDIT ?? 0);
            return balance;
        });
    }
    get columns() {
        const balances = this.runningBalances;
        return [
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                id: 'date',
                header: 'Date',
                cell: info => info.getValue() || this.formatDate(info.row.original.ISSUE_DATE),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => index.h("span", { class: "stmt-table__doc-number" }, info.getValue() ?? '—'),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => info.getValue() ?? '—',
            }),
            this.columnHelper.accessor('DEBIT', {
                id: 'debit',
                header: 'Debit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.accessor('CREDIT', {
                id: 'credit',
                header: 'Credit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'balance',
                header: 'Balance',
                cell: info => this.renderMoney(balances[info.row.index], info.row.original.CURRENCY_ID),
            }),
        ];
    }
    renderStartingBalanceRow() {
        const bal = this.startingBalance;
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, utils$1.formatAmount(this.currencySymbol, bal))));
    }
    renderEndingBalanceRow() {
        const bal = this.endingBalance;
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, index.h("strong", null, utils$1.formatAmount(this.currencySymbol, Math.abs(bal))))));
    }
    render() {
        if (!this.hasFetched) {
            return (index.h(index.Host, null, index.h("div", { class: "stmt-table__date-prompt" }, index.h("div", { class: "stmt-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "stmt-table__date-prompt-title" }, "Select a date range and click \"Create Statement\""))));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "stmt-table__loading" }, index.h("ir-spinner", null))));
        }
        const table = useTable.useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        const colCount = this.columns.length;
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: { 'cell--align-end': NUMERIC_COLS.has(header.column.id) } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, this.renderStartingBalanceRow(), table.getRowModel().rows.length === 0 ? (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: colCount }, "No fiscal documents in this period."))) : (table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'stmt-table__cell': true,
                'cell--align-end': NUMERIC_COLS.has(cell.column.id),
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext())))))))), this.renderEndingBalanceRow())))));
    }
};
IrCityLedgerStatementsTable.style = IrCityLedgerStatementsTableStyle0;

const irCityLedgerToolbarCss = ".sc-ir-city-ledger-toolbar-h{display:block}.toolbar.sc-ir-city-ledger-toolbar{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding:0.75rem 1rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.625rem;background:var(--wa-color-surface-default, #fff)}.toolbar__stats.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap}.toolbar__stats-placeholder.sc-ir-city-ledger-toolbar{flex:1}.toolbar__stat.sc-ir-city-ledger-toolbar{display:flex;flex-direction:column;gap:0.125rem}.toolbar__stat-label.sc-ir-city-ledger-toolbar{font-size:0.6875rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap}.toolbar__stat-value.sc-ir-city-ledger-toolbar{font-size:1rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums;white-space:nowrap}.toolbar__stat-value--negative.sc-ir-city-ledger-toolbar{color:var(--wa-color-danger-fill-loud, #dc2626)}.toolbar__stats-sep.sc-ir-city-ledger-toolbar{width:1px;height:2rem;background:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.toolbar__actions.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:0.5rem;margin-inline-start:auto;flex-shrink:0}";
const IrCityLedgerToolbarStyle0 = irCityLedgerToolbarCss;

const IrCityLedgerToolbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.createInvoice = index.createEvent(this, "createInvoice", 7);
    }
    agentId = null;
    currencySymbol = '$';
    accountOverview = null;
    createInvoice;
    cityLedgerService = new utils.CityLedgerService();
    componentWillLoad() {
        if (this.agentId)
            this.fetchOverview();
    }
    async handleAgentIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.accountOverview = null;
        if (newValue)
            await this.fetchOverview();
    }
    async refresh() {
        await this.fetchOverview();
    }
    async fetchOverview() {
        if (!this.agentId)
            return;
        this.accountOverview = await this.cityLedgerService.getCLAccountOverview({
            AGENCY_ID: this.agentId,
            CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
        });
    }
    render() {
        return (index.h(index.Host, { key: '52250e4abd2906f17beeb16ee2a9652e716a67e5' }, index.h("div", { key: 'ac58d0e3c436e068d57fc7681daeaffc0a8344dc', class: "toolbar" }, this.accountOverview ? (index.h("div", { class: "toolbar__stats" }, index.h("div", { class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, "Net Balance"), index.h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', utils$1.formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), index.h("div", { class: "toolbar__stats-sep" }), index.h("div", { class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, "Due Invoiced"), index.h("span", { class: "toolbar__stat-value" }, utils$1.formatAmount(this.currencySymbol, this.accountOverview.TOTAL_DUE_INVOICED))), index.h("div", { class: "toolbar__stats-sep" }), index.h("div", { class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), index.h("span", { class: "toolbar__stat-value" }, utils$1.formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))))) : (index.h("div", { class: "toolbar__stats-placeholder" })), index.h("div", { key: '4839d9d9a6c59ef966e2a0c7f40b8756bd08b67c', class: "toolbar__actions" }, index.h("ir-custom-button", { key: '07b58cc6b6cdc8e3bfa4422a04fae2d9c1c476e7', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedgerToolbar.style = IrCityLedgerToolbarStyle0;

const irCityLedgerTransactionDrawerCss = ".sc-ir-city-ledger-transaction-drawer-h{display:block}.city-ledger-transaction-drawer__footer.sc-ir-city-ledger-transaction-drawer{display:flex;gap:0.75rem}.city-ledger-transaction-drawer__btn.sc-ir-city-ledger-transaction-drawer{flex:1 1 0}";
const IrCityLedgerTransactionDrawerStyle0 = irCityLedgerTransactionDrawerCss;

const IrCityLedgerTransactionDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.transactionSaved = index.createEvent(this, "transactionSaved", 7);
    }
    open = false;
    formId = 'city-ledger-transaction-form';
    drawerLabel = 'New Entry';
    agent = null;
    booking = null;
    initialTransactionType = 'OB';
    taxOptions = [];
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    saveDisabled = false;
    closeDrawer;
    transactionSaved;
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (index.h("ir-drawer", { key: '522be364ff0a6f0f6353e00d1ea4debad7dd2eff', open: this.open, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.drawerLabel, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (index.h("ir-city-ledger-transaction-form", { key: 'c875369e1dac214cdaa094622fca1ec1b9f7f2c1', booking: this.booking, formId: this.formId, agent: this.agent, initialTransactionType: this.initialTransactionType, taxOptions: this.taxOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, onTransactionSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), index.h("div", { key: 'b1236193c7247edc962e6a26c77e8a580d3939db', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '6a9239b62c3f54d48ee9b32f4ce33a1600936bc3', appearance: "filled", size: "medium", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), index.h("ir-custom-button", { key: 'c9174db3d2def312317925f6acf2957b9aa89086', form: this.formId, size: "medium", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn", disabled: this.saveDisabled }, "Save"))));
    }
};
IrCityLedgerTransactionDrawer.style = IrCityLedgerTransactionDrawerStyle0;

const TRANSACTION_TYPE_RATES = {
    [ClTxTypeCode.OpeningBalance]: 'CR|DB',
    [ClTxTypeCode.Payment]: 'CR',
    [ClTxTypeCode.StandardChargeDebit]: 'DB',
    [ClTxTypeCode.Adjustment]: 'CR|DB',
    [ClTxTypeCode.CreditNote]: 'CR',
    [ClTxTypeCode.DebitNote]: 'DB',
};
const ENTRY_TYPES = ['CR', 'DB'];
const LINK_TYPES = ['INVOICE', 'BOOKING', 'NONE'];
const ADJUSTMENT_REASONS = ['ROUNDING_DIFFERENCE', 'GOODWILL_CREDIT', 'PRICE_MATCH', 'COMMISSION_CORRECTION', 'DISCOUNT_CORRECTION'];
const CREDIT_NOTE_MODES = ['cancel-invoice', 'goodwill'];
const DATE_FORMAT = 'YYYY-MM-DD';
const dateSchema = index$1.z
    .string()
    .refine(value => moment.hooks(value, DATE_FORMAT, true).isValid(), 'Date must be in YYYY-MM-DD format.')
    .refine(value => {
    const valueDate = moment.hooks(value, DATE_FORMAT, true).startOf('day');
    const minimumAllowedDate = moment.hooks().startOf('day').subtract(12, 'months');
    return !valueDate.isBefore(minimumAllowedDate);
}, 'Date cannot be older than 12 months from today.');
const commonFieldsSchema = index$1.z.object({
    date: dateSchema,
    amount: index$1.z.coerce.number().gt(0, 'Amount must be greater than 0.'),
    taxId: index$1.z.string().min(1, 'Tax selection is required.'),
    reference: index$1.z.string().optional(),
    notes: index$1.z.string().max(500).optional(),
});
const openingBalanceSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.OpeningBalance),
    entryType: index$1.z.enum(ENTRY_TYPES),
    isCutover: index$1.z.boolean(),
});
const paymentTypeSchema = index$1.z.object({
    code: index$1.z.string().min(3).max(4),
    description: index$1.z.string(),
    operation: index$1.z.enum(ENTRY_TYPES),
});
const paymentMethodSchema = index$1.z.object({
    code: index$1.z.string().min(3).max(4),
    description: index$1.z.string(),
    operation: index$1.z.string().optional().nullable(),
});
const paymentSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.Payment),
    payment_type: paymentTypeSchema.nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
    designation: index$1.z.string().optional(),
    invoiceId: index$1.z.string().optional(),
    onAccount: index$1.z.boolean(),
});
const manualChargeSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.StandardChargeDebit),
    serviceCategoryId: index$1.z.string().optional(),
});
const adjustmentSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.Adjustment),
    entryType: index$1.z.enum(ENTRY_TYPES),
    linkType: index$1.z.enum(LINK_TYPES),
    linkedId: index$1.z.string().optional(),
    reason: index$1.z.enum(ADJUSTMENT_REASONS).optional(),
});
const creditNoteSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.CreditNote),
    creditNoteMode: index$1.z.enum(CREDIT_NOTE_MODES),
    invoiceId: index$1.z.string().optional(),
    generatesFiscalDocument: index$1.z.literal(true),
});
const debitNoteSchema = commonFieldsSchema.extend({
    transactionType: index$1.z.literal(ClTxTypeCode.DebitNote),
    invoiceId: index$1.z.string().min(1, 'Invoice is required for debit note.'),
    generatesFiscalDocument: index$1.z.literal(true),
});
const cityLedgerTransactionSchema = index$1.z
    .discriminatedUnion('transactionType', [openingBalanceSchema, paymentSchema, manualChargeSchema, adjustmentSchema, creditNoteSchema, debitNoteSchema])
    .superRefine((data, ctx) => {
    if (data.transactionType === ClTxTypeCode.Payment && data.onAccount && data.invoiceId) {
        ctx.addIssue({
            code: index$1.z.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: 'Invoice must be empty when payment is marked as on account.',
        });
    }
    if (data.transactionType === ClTxTypeCode.Adjustment && data.linkType === 'NONE' && data.linkedId) {
        ctx.addIssue({
            code: index$1.z.ZodIssueCode.custom,
            path: ['linkedId'],
            message: 'linkedId must be empty when link type is NONE.',
        });
    }
    if (data.transactionType === ClTxTypeCode.CreditNote && data.creditNoteMode === 'cancel-invoice' && !data.invoiceId) {
        ctx.addIssue({
            code: index$1.z.ZodIssueCode.custom,
            path: ['invoiceId'],
            message: 'Invoice is required when cancelling an invoice.',
        });
    }
});
const DATE_INPUT_FORMAT = DATE_FORMAT;
const todayDate = () => moment.hooks().format(DATE_FORMAT);
const conditionalDefaultsByType = (transactionType) => {
    switch (transactionType) {
        case ClTxTypeCode.OpeningBalance:
            return {
                entryType: '',
                isCutover: false,
            };
        case ClTxTypeCode.Payment:
            return {
                payment_method: null,
                designation: undefined,
                invoiceId: undefined,
                onAccount: true,
            };
        case ClTxTypeCode.StandardChargeDebit:
            return {
                serviceCategoryId: undefined,
            };
        case ClTxTypeCode.Adjustment:
            return {
                entryType: '',
                linkType: 'NONE',
                linkedId: undefined,
            };
        case ClTxTypeCode.CreditNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
                creditNoteMode: 'cancel-invoice',
            };
        case ClTxTypeCode.DebitNote:
            return {
                invoiceId: undefined,
                generatesFiscalDocument: true,
            };
        default:
            return {};
    }
};
const createInitialTransactionFormDraft = (transactionType = ClTxTypeCode.OpeningBalance) => ({
    transactionType,
    date: todayDate(),
    amount: '',
    taxId: 'N/A',
    reference: '',
    notes: '',
    entryType: '',
    isCutover: false,
    payment_type: null,
    payment_method: null,
    designation: undefined,
    invoiceId: undefined,
    onAccount: false,
    serviceCategoryId: undefined,
    linkType: 'NONE',
    linkedId: undefined,
    reason: '',
    generatesFiscalDocument: transactionType === ClTxTypeCode.CreditNote || transactionType === ClTxTypeCode.DebitNote,
    ...conditionalDefaultsByType(transactionType),
});
const resetDraftForTransactionType = (nextType, current) => ({
    ...createInitialTransactionFormDraft(nextType),
    transactionType: nextType,
    date: current.date || todayDate(),
    amount: current.amount,
    taxId: current.taxId || 'N/A',
    reference: current.reference || '',
});
const buildTransactionPayloadInput = (draft) => {
    const basePayload = {
        transactionType: draft.transactionType,
        date: draft.date,
        amount: draft.amount,
        taxId: draft.taxId,
        reference: draft.reference || undefined,
    };
    switch (draft.transactionType) {
        case ClTxTypeCode.OpeningBalance:
            return {
                ...basePayload,
                entryType: draft.entryType,
                isCutover: draft.isCutover,
            };
        case ClTxTypeCode.Payment:
            return {
                ...basePayload,
                payment_method: draft.payment_method,
                designation: draft.designation,
                invoiceId: draft.onAccount ? undefined : draft.invoiceId,
                onAccount: draft.onAccount,
            };
        case ClTxTypeCode.StandardChargeDebit:
            return {
                ...basePayload,
                serviceCategoryId: draft.serviceCategoryId,
            };
        case ClTxTypeCode.Adjustment:
            return {
                ...basePayload,
                entryType: draft.entryType,
                linkType: draft.linkType,
                linkedId: draft.linkType === 'NONE' ? undefined : draft.linkedId,
                reason: draft.reason || undefined,
            };
        case ClTxTypeCode.CreditNote:
            return {
                ...basePayload,
                creditNoteMode: draft.creditNoteMode ?? 'cancel-invoice',
                invoiceId: draft.creditNoteMode === 'goodwill' ? undefined : draft.invoiceId,
                generatesFiscalDocument: true,
            };
        case ClTxTypeCode.DebitNote:
            return {
                ...basePayload,
                invoiceId: draft.invoiceId,
                generatesFiscalDocument: true,
            };
        default:
            return basePayload;
    }
};
const validateCityLedgerTransaction = (draft) => cityLedgerTransactionSchema.safeParse(buildTransactionPayloadInput(draft));
// ── Individual field schemas for ir-validator ────────────────────────────────
const transactionTypeFieldSchema = index$1.z.enum(Object.values(ClTxTypeCode));
const dateFieldSchema = dateSchema;
const amountFieldSchema = index$1.z.coerce.number().gt(0, 'Amount must be greater than 0.');
const taxIdFieldSchema = index$1.z.string().min(1, 'Tax selection is required.');
const entryTypeFieldSchema = index$1.z.enum(ENTRY_TYPES);
index$1.z.string().min(1, 'Payment type is required.');
const paymentMethodCodeFieldSchema = index$1.z.string().min(1, 'Payment method is required.');
const invoiceIdRequiredFieldSchema = index$1.z.string().min(1, 'Invoice is required.');
index$1.z.string().min(1, 'Service category is required.');
const linkTypeFieldSchema = index$1.z.enum(LINK_TYPES);
index$1.z.enum(ADJUSTMENT_REASONS);

const irCityLedgerTransactionFormCss = ".sc-ir-city-ledger-transaction-form-h{display:block;height:100%}.transaction-form.sc-ir-city-ledger-transaction-form{display:grid;gap:0.9rem}.transaction-form__field.sc-ir-city-ledger-transaction-form{display:grid;gap:0.35rem}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form,.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.transaction-form__field--full-width.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.transaction-form__field__entry-type.--credit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.transaction-form__field__entry-type.--debit.sc-ir-city-ledger-transaction-form:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}.amount-tax-group.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.35rem}.amount-tax-group__label.sc-ir-city-ledger-transaction-form{font-size:var(--wa-input-label-font-size-small, 0.875rem);font-weight:var(--wa-font-weight-semibold, 500);color:var(--wa-color-text-normal)}.amount-tax-group__required.sc-ir-city-ledger-transaction-form{color:var(--wa-color-danger-fill-loud)}.amount-tax-group__row.sc-ir-city-ledger-transaction-form{display:flex;align-items:stretch}.amount-tax-group__amount.sc-ir-city-ledger-transaction-form{flex:1;min-width:0}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(label){display:none}.amount-tax-group.sc-ir-city-ledger-transaction-form ir-input.sc-ir-city-ledger-transaction-form::part(base){border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form{flex-shrink:0;min-width:8.5rem}.amount-tax-group.sc-ir-city-ledger-transaction-form wa-select.sc-ir-city-ledger-transaction-form::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}.tx-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%}.tx-option__badges.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.25rem}.transaction-form__switch.sc-ir-city-ledger-transaction-form{padding:0.15rem 0}.transaction-form__error.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-fill-loud)}.transaction-form__fiscal-note.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.45rem;font-size:0.875rem;color:var(--wa-color-neutral-fill-loud)}.transaction-form__payment-type-option.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.payment-section.sc-ir-city-ledger-transaction-form{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section__title.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.payment-type-pill.sc-ir-city-ledger-transaction-form{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:var(--wa-color-success-fill-quiet, #f0fdf4);border:1px solid var(--wa-color-success-border-quiet, #bbf7d0);border-radius:0.5rem;font-size:0.8125rem}.payment-type-pill__name.sc-ir-city-ledger-transaction-form{font-weight:500;color:var(--wa-color-text-normal, #111827);flex:1}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form{width:100%}.payment-section.sc-ir-city-ledger-transaction-form wa-radio-group.sc-ir-city-ledger-transaction-form wa-radio.sc-ir-city-ledger-transaction-form{flex:1}.payment-invoice-select.sc-ir-city-ledger-transaction-form{animation:slide-in 0.18s ease}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.transaction-form__hint.sc-ir-city-ledger-transaction-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.transaction-form__textarea-label.sc-ir-city-ledger-transaction-form{font-size:0.875rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.transaction-form__notes.sc-ir-city-ledger-transaction-form{width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-quiet, #d1d5db);border-radius:0.375rem;font-size:0.875rem;font-family:inherit;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-surface-default, #fff);resize:vertical;min-height:4.5rem;outline:none;transition:border-color 0.15s ease,\n    box-shadow 0.15s ease}.transaction-form__notes.sc-ir-city-ledger-transaction-form:focus{border-color:var(--wa-color-brand-border-loud, #2563eb);box-shadow:0 0 0 2px var(--wa-color-brand-fill-quiet, #eff6ff)}.transaction-form__notes.sc-ir-city-ledger-transaction-form::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}";
const IrCityLedgerTransactionFormStyle0 = irCityLedgerTransactionFormCss;

const IrCityLedgerTransactionForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.transactionSaved = index.createEvent(this, "transactionSaved", 7);
        this.transactionValidationFailed = index.createEvent(this, "transactionValidationFailed", 7);
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange", 7);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview", 7);
    }
    formId = 'city-ledger-transaction-form';
    agent = null;
    initialTransactionType = 'OB';
    taxOptions = [];
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    language = 'en';
    booking = null;
    formData = createInitialTransactionFormDraft();
    paymentEntries = {
        types: [],
        groups: [],
        methods: [],
    };
    paymentTypeGroups = {};
    isLoading = true;
    isSubmitting = false;
    fiscalDocuments = [];
    transactionSaved;
    transactionValidationFailed;
    submitDisabledChange;
    clFiscalDocumentPreview;
    bookingService = new booking_service.BookingService();
    cityLedgerService = new utils.CityLedgerService();
    clTxTypes;
    get resolvedInitialType() {
        const obHidden = this.agent?.has_opening_balance || this.booking !== null;
        if (this.initialTransactionType === ClTxTypeCode.OpeningBalance && obHidden) {
            return ClTxTypeCode.StandardChargeDebit;
        }
        return this.initialTransactionType;
    }
    componentWillLoad() {
        this.formData = createInitialTransactionFormDraft(this.resolvedInitialType);
        this.fetchPaymentEntries();
    }
    handleInitialTransactionTypeChange(_newType) {
        this.formData = resetDraftForTransactionType(this.resolvedInitialType, this.formData);
    }
    updateFormData(patch) {
        this.formData = { ...this.formData, ...patch };
    }
    get isSubmitDisabled() {
        return this.formData.transactionType === ClTxTypeCode.DebitNote && !this.isLoading && this.fiscalDocuments.length === 0;
    }
    handleTransactionTypeChange(nextType) {
        this.formData = resetDraftForTransactionType(nextType, this.formData);
        if (nextType === ClTxTypeCode.Payment || nextType === ClTxTypeCode.CreditNote || nextType === ClTxTypeCode.DebitNote) {
            this.fetchFiscalDocumentsForType(nextType);
        }
        else {
            this.submitDisabledChange.emit(false);
        }
    }
    async fetchFiscalDocumentsForType(type) {
        try {
            this.isLoading = true;
            const LIST_FD_TYPE_CODE = [FdTypes.Invoice];
            if (type === ClTxTypeCode.Payment) {
                LIST_FD_TYPE_CODE.push(FdTypes.DebitNote);
            }
            this.fiscalDocuments = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agent?.id,
                START_DATE: null,
                END_DATE: null,
                LIST_FD_TYPE_CODE,
                FD_STATUS_CODE: type === ClTxTypeCode.Payment ? FdStatus.Sent : FdStatus.Paid,
            });
            if (type === ClTxTypeCode.CreditNote && this.fiscalDocuments.length === 0 && this.formData.creditNoteMode === 'cancel-invoice') {
                this.updateFormData({ creditNoteMode: 'goodwill', invoiceId: undefined });
            }
            if (type === ClTxTypeCode.Payment && this.fiscalDocuments.length === 0) {
                this.updateFormData({ onAccount: true, invoiceId: undefined });
            }
        }
        catch (error) {
            console.error('Failed to fetch fiscal documents', error);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.submitDisabledChange.emit(this.isSubmitDisabled);
        }
    }
    async fetchPaymentEntries() {
        try {
            this.isLoading = true;
            const setupEntries = await this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD', '_CL_TX_TYPE']);
            const { pay_type, pay_type_group, pay_method, cl_tx_type } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                types: pay_type ?? [],
                groups: pay_type_group ?? [],
                methods: pay_method ?? [],
            };
            this.clTxTypes = cl_tx_type;
            this.paymentTypeGroups = utils.buildPaymentTypes(this.paymentEntries);
        }
        catch (error) {
            console.error('Failed to load payment setup entries', error);
            this.paymentEntries = { types: [], groups: [], methods: [] };
            this.paymentTypeGroups = {};
        }
        finally {
            this.isLoading = false;
        }
    }
    buildParams(payload) {
        const amount = payload.amount;
        let credit = 0;
        let debit = 0;
        let payMethodCode = '';
        switch (payload.transactionType) {
            case ClTxTypeCode.OpeningBalance:
            case ClTxTypeCode.Adjustment:
                if (payload.entryType === 'CR')
                    credit = amount;
                else
                    debit = amount;
                break;
            case ClTxTypeCode.Payment:
            case ClTxTypeCode.CreditNote:
                credit = amount;
                break;
            case ClTxTypeCode.StandardChargeDebit:
            case ClTxTypeCode.DebitNote:
                debit = amount;
                break;
        }
        if (payload.transactionType === ClTxTypeCode.Payment) {
            payMethodCode = payload.payment_method?.code ?? '';
        }
        const noTaxTransaction = payload.transactionType === ClTxTypeCode.OpeningBalance || payload.transactionType === ClTxTypeCode.Payment;
        const hasVat = !noTaxTransaction && payload.taxId !== 'N/A';
        return {
            CL_TX_ID: -1,
            AGENCY_ID: this.agent.id,
            SERVICE_DATE: payload.date,
            CL_TX_TYPE_CODE: payload.transactionType,
            DESCRIPTION: payload.reference ?? payload.transactionType,
            DEBIT: debit,
            CREDIT: credit,
            CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
            PAY_METHOD_CODE: payMethodCode,
            EXTERNAL_REF: payload.reference ?? '',
            BH_ID: this.booking?.system_id ?? null,
            VAT_INCLUDED_CODE: (noTaxTransaction ? '' : hasVat ? '001' : '002'),
            VAT_PCT: noTaxTransaction ? null : hasVat ? Number(payload.taxId) : 0,
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const validation = validateCityLedgerTransaction(this.formData);
        if (!validation.success) {
            this.transactionValidationFailed.emit(validation.error.issues);
            return;
        }
        try {
            this.isSubmitting = true;
            const result = await this.cityLedgerService.issueManualCLTx(this.buildParams(validation.data));
            if (result?.My_Fd?.FD_TYPE_CODE && result.My_Fd.DOC_NUMBER) {
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: result.My_Fd.FD_TYPE_CODE,
                    documentNumber: result.My_Fd.DOC_NUMBER,
                    agentId: this.agent.id,
                    agentName: result.My_Fd.AGENCY_NAME ?? '',
                });
            }
            this.transactionSaved.emit();
        }
        catch (error) {
            console.error('Failed to save transaction', error);
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderTransactionTypeField() {
        return (index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: transactionTypeFieldSchema, value: this.formData.transactionType, valueEvent: "change" }, index.h("wa-select", { label: "Transaction Type", size: "small", defaultValue: this.formData.transactionType, value: this.formData.transactionType, required: true, onchange: event => {
                const value = event.target.value;
                this.handleTransactionTypeChange(value);
            } }, this.clTxTypes.map(type => {
            const rate = TRANSACTION_TYPE_RATES[type.CODE_NAME];
            const label = type.CODE_VALUE_EN;
            if (type.CODE_NAME === ClTxTypeCode.OpeningBalance && (this.agent.has_opening_balance || this.booking !== null)) {
                return null;
            }
            return (index.h("wa-option", { key: type.CODE_NAME, value: type.CODE_NAME, label: label }, index.h("div", { class: "tx-option" }, index.h("span", { class: "tx-option__label" }, label), index.h("span", { class: "tx-option__badges" }, (rate === 'CR' || rate === 'CR|DB') && index.h("wa-badge", { variant: "success" }, "Credit"), (rate === 'DB' || rate === 'CR|DB') && index.h("wa-badge", { variant: "danger" }, "Debit")))));
        })))));
    }
    renderCommonFields(withTaxes = true) {
        const minAllowedDate = moment.hooks().subtract(12, 'months').format(DATE_INPUT_FORMAT);
        return (index.h(index.Fragment, null, this.renderTransactionTypeField(), index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: dateFieldSchema, value: this.formData.date, valueEvent: "DateChanged" }, index.h("ir-date-select", { label: "Date", date: this.formData.date, minDate: minAllowedDate, emitEmptyDate: true, onDateChanged: event => {
                this.updateFormData({
                    date: event.detail.start ? event.detail.start.format(DATE_INPUT_FORMAT) : '',
                });
            } }))), withTaxes ? (index.h("div", { class: "amount-tax-group" }, index.h("span", { class: "amount-tax-group__label" }, "Amount (including taxes)"), index.h("div", { class: "amount-tax-group__row" }, index.h("ir-validator", { class: "amount-tax-group__amount", schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, index.h("ir-input", { label: "Amount (including taxes)", mask: "price", value: this.formData.amount, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, index.h("span", { slot: "start" }, calendarData.calendar_data.property?.currency?.symbol))), index.h("ir-validator", { schema: taxIdFieldSchema, value: this.formData.taxId, valueEvent: "change" }, index.h("wa-select", { size: "small", placeholder: "Tax", value: this.formData.taxId, onchange: event => {
                this.updateFormData({ taxId: event.target.value });
            } }, index.h("wa-option", { value: "N/A", label: "Not Applicable" }, "Not Applicable"), this.taxOptions.map(tax => (index.h("wa-option", { key: tax.id, label: tax.label, value: tax.id }, tax.label)))))))) : (index.h("div", { class: "transaction-form__field" }, index.h("ir-validator", { schema: amountFieldSchema, value: this.formData.amount, valueEvent: "text-change input-change" }, index.h("ir-input", { label: "Amount", mask: "price", value: this.formData.amount, required: true, "onText-change": (event) => {
                this.updateFormData({ amount: event.detail ?? '' });
            } }, index.h("span", { slot: "start" }, calendarData.calendar_data.property?.currency?.symbol)))))));
    }
    renderTypeFields() {
        const onFieldChange = (e) => this.updateFormData(e.detail);
        switch (this.formData.transactionType) {
            case ClTxTypeCode.OpeningBalance:
                return index.h("ir-cl-opening-balance-fields", { entryType: this.formData.entryType, onFieldChange: onFieldChange });
            case ClTxTypeCode.Payment:
                return (index.h("ir-cl-payment-fields", { paymentMethodCode: this.formData.payment_method?.code ?? '', isOnAccount: this.formData.onAccount, invoiceId: this.formData.invoiceId, paymentMethods: this.paymentEntries?.methods ?? [], unpaidInvoiceOptions: this.unpaidInvoiceOptions, noInvoices: this.fiscalDocuments.length === 0, language: this.language, onFieldChange: onFieldChange }));
            case ClTxTypeCode.Adjustment:
                return (index.h("ir-cl-adjustment-fields", { entryType: this.formData.entryType, linkType: this.formData.linkType, linkedId: this.formData.linkedId, bookingOptions: this.bookingOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, onFieldChange: onFieldChange }));
            case ClTxTypeCode.CreditNote:
                return (index.h("ir-cl-credit-note-fields", { creditNoteMode: this.formData.creditNoteMode, invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, isFetchingFiscalDocs: this.isLoading, onFieldChange: onFieldChange }));
            case ClTxTypeCode.DebitNote:
                return index.h("ir-cl-debit-note-fields", { invoiceId: this.formData.invoiceId, fiscalDocuments: this.fiscalDocuments, onFieldChange: onFieldChange });
            default:
                return null;
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: "dialog__loader-container" }, index.h("ir-spinner", null)));
        }
        if (this.isSubmitDisabled) {
            return (index.h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderTransactionTypeField(), this.renderTypeFields()));
        }
        return (index.h("form", { id: this.formId, class: "transaction-form", onSubmit: this.handleSubmit, novalidate: true }, this.renderCommonFields(this.formData.transactionType !== ClTxTypeCode.OpeningBalance && this.formData.transactionType !== ClTxTypeCode.Payment), this.renderTypeFields(), index.h("ir-input", { label: "Reference", value: this.formData.reference, "onText-change": (event) => {
                this.updateFormData({ reference: event.detail ?? '' });
            } })));
    }
    static get watchers() { return {
        "initialTransactionType": ["handleInitialTransactionTypeChange"]
    }; }
};
IrCityLedgerTransactionForm.style = IrCityLedgerTransactionFormStyle0;

const irClAdjustmentFieldsCss = ".sc-ir-cl-adjustment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-adjustment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-adjustment-fields,.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields{width:100%}.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields wa-radio.sc-ir-cl-adjustment-fields{flex:1}.entry-type.--credit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClAdjustmentFieldsStyle0 = irClAdjustmentFieldsCss;

const IrClAdjustmentFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange", 7);
    }
    entryType = '';
    linkType = 'NONE';
    linkedId;
    bookingOptions = [];
    unpaidInvoiceOptions = [];
    fieldChange;
    get linkedIdOptions() {
        if (this.linkType === 'BOOKING')
            return this.bookingOptions;
        if (this.linkType === 'INVOICE')
            return this.unpaidInvoiceOptions;
        return [];
    }
    render() {
        return (index.h(index.Fragment, { key: '7f0750bb10d1a36697f1ef6a7dfd2222e159a725' }, index.h("div", { key: '44250d3306550af54e0da6c56f149c9e8b7d93cd', class: "field field--full-width" }, index.h("ir-validator", { key: '66303979b868e585580b21fcb33aeaa235986ef9', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, index.h("wa-radio-group", { key: '8a71b38757d3a35f6e14c6b5a9db76e8ebf16f3e', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, index.h("wa-radio", { key: '51b281b447fee81d8139aae2006e5c88c63e214e', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), index.h("wa-radio", { key: '4e1c63271ffeb19535e70246e1628de53badc5ff', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))), index.h("div", { key: '9beff7e8d1fa9d6aea062134fd2331ae90147128', class: "field" }, index.h("ir-validator", { key: 'd2e63e68595b7e44f893c0c5d6d5b07146cd990d', schema: linkTypeFieldSchema, value: this.linkType, valueEvent: "change" }, index.h("wa-select", { key: '5cf84d9202004ad785afbf0bfb45fbe0f89ee575', label: "Link Type", size: "small", value: this.linkType, onchange: event => {
                const linkType = event.target.value;
                this.fieldChange.emit({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.linkedId,
                });
            } }, LINK_TYPES.map(lt => (index.h("wa-option", { key: lt, value: lt }, lt)))))), this.linkType !== 'NONE' && (index.h("div", { key: '7ecfb8ef9344ba7f07dfc88cda012eae7886e561', class: "field" }, index.h("wa-select", { key: '1bbf5ed7d6e019f4b5546394dc5c0e68967dc773', label: "Linked Record", size: "small", value: this.linkedId ?? '', onchange: event => {
                this.fieldChange.emit({ linkedId: event.target.value || undefined });
            } }, index.h("wa-option", { key: 'abafb23ee673d7aea657a9fde6fa4207fc169da8', value: "" }, "No linked record"), this.linkedIdOptions.map(option => (index.h("wa-option", { key: option.id, value: option.id }, option.label))))))));
    }
};
IrClAdjustmentFields.style = IrClAdjustmentFieldsStyle0;

const irClCreditNoteFieldsCss = ".sc-ir-cl-credit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-credit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-credit-note-fields,.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields{width:100%}.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields wa-radio.sc-ir-cl-credit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClCreditNoteFieldsStyle0 = irClCreditNoteFieldsCss;

const IrClCreditNoteFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange", 7);
    }
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        const noInvoices = this.fiscalDocuments.length === 0;
        return (index.h(index.Fragment, { key: 'b393c3bfb7dad2850ce2f479127d90ec1482fd75' }, index.h("div", { key: 'e4d046f059aaf7a47982c34c27c0ea502ab2bfb3', class: "field field--full-width" }, index.h("wa-radio-group", { key: 'a06daf239ad7ef2b80b62c1d7f7fab48c57fddfb', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, index.h("wa-radio", { key: '2d518b3096e55e81e8fbae764e20b5fa57788262', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), index.h("wa-radio", { key: '71e5275eea9cc2e241afab82e9b2a73b55d83d2a', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (index.h("div", { key: '0bb0c050d16201d2e30837699a7aeebd518e8db4', class: "field" }, index.h("ir-validator", { key: 'd75e77b9afe828a504cdbe9ade08b25df692e1bb', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, index.h("wa-select", { key: 'ddc93c0c0f694b6ddf34a97215462c558d5f0019', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, index.h("wa-option", { key: '8c867587f959c2638ada8cbf0acc8d5276c157d9', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (index.h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
    }
};
IrClCreditNoteFields.style = IrClCreditNoteFieldsStyle0;

class ClFiscalDocumentService {
    tokenService = new Token.Token();
    propertyService = new property_service.PropertyService();
    cityLedgerService = new utils.CityLedgerService();
    init(baseurl, ticket) {
        if (baseurl)
            this.tokenService.setBaseUrl(baseurl);
        this.tokenService.setToken(ticket);
    }
    async fetchData(propertyId, agentId, documentNumber) {
        const [propertyData, clResult] = await Promise.all([
            this.propertyService.getExposedProperty({ id: propertyId, language: 'en' }),
            this.cityLedgerService.fetchCL({
                AGENCY_ID: agentId,
                START_ROW: 0,
                END_ROW: 1000,
                SEARCH_QUERY: documentNumber,
            }),
        ]);
        return {
            property: propertyData?.My_Result ?? null,
            transactions: clResult?.My_Cl_tx ?? [],
        };
    }
}

const irClCreditNotePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClCreditNotePreviewStyle0 = irClCreditNotePreviewCss;

const IrClCreditNotePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    clPreviewReady;
    dataService = new ClFiscalDocumentService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load credit note data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "creditnote" }), index.h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$', invertAmounts: true }))));
    }
};
IrClCreditNotePreview.style = IrClCreditNotePreviewStyle0;

const irClDebitNoteFieldsCss = ".sc-ir-cl-debit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-debit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-debit-note-fields,.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields{width:100%}.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields wa-radio.sc-ir-cl-debit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClDebitNoteFieldsStyle0 = irClDebitNoteFieldsCss;

const IrClDebitNoteFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange", 7);
    }
    invoiceId;
    fiscalDocuments = [];
    fieldChange;
    render() {
        if (this.fiscalDocuments.length === 0) {
            return (index.h("wa-callout", { size: "small", variant: "warning" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "No paid invoices are available. A debit note requires at least one paid invoice to reference. Please issue an invoice first, then return to create the debit note."));
        }
        return (index.h("div", { class: "field" }, index.h("ir-validator", { schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, index.h("wa-select", { label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, index.h("wa-option", { value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (index.h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))));
    }
};
IrClDebitNoteFields.style = IrClDebitNoteFieldsStyle0;

const irClDebitNotePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClDebitNotePreviewStyle0 = irClDebitNotePreviewCss;

const IrClDebitNotePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    clPreviewReady;
    dataService = new ClFiscalDocumentService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load debit note data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "debitnote" }), index.h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClDebitNotePreview.style = IrClDebitNotePreviewStyle0;

const irClDocumentHeaderCss = ":host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
const IrClDocumentHeaderStyle0 = irClDocumentHeaderCss;

const DATE_DISPLAY$1 = 'MMM DD, YYYY';
const IrClDocumentHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    documentType = 'invoice';
    /** Property whose branding and details appear on the right side. */
    property;
    /** Optional document reference number shown in the meta block. */
    documentNumber;
    /** Name of the agent/company to bill to. */
    agentName;
    get primaryContact() {
        return this.property?.contacts?.find(c => c.type === 'marketing') ?? this.property?.contacts?.[0];
    }
    get documentTitle() {
        switch (this.documentType) {
            case 'invoice':
                return 'invoice';
            case 'receipt':
                return 'receipt';
            case 'creditnote':
                return 'credit note';
            case 'debitnote':
                return 'debit note';
            case 'statement':
                return 'account statement';
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (index.h(index.Host, { key: 'f41db6b71f40b0ae39d4ba9c7233528ed0e463f3' }, index.h("header", { key: 'c518688619a9f40f8e6e05fe0f1b0bb90d737510', class: "invoice__header" }, index.h("h3", { key: 'd87d7c2b4e98f9693793c89f3368fbf445e6e9ec', class: "invoice__title" }, this.documentTitle), index.h("section", { key: '481c3c9a4b23ff92713d99b6930085c6f37fbb59', class: "invoice__layout" }, index.h("div", { key: '380dfd1d5ba71676a1774040254b8409ace7cfa2', class: "invoice__column invoice__column--details" }, index.h("div", { key: '18e9aecc42b1593057cf6f0abeddb8ca424d34e3', class: "invoice__details" }, this.documentNumber && (index.h("div", { key: '3b38049da6e64abf036bd8877171976e95b7feea', class: "invoice__meta-row" }, index.h("span", { key: '7e065c6a53ff0b559fb3df7585fb0c193d2ec553', class: "invoice__meta-label" }, "Document #"), index.h("span", { key: '7ebbbf88c04a51eac25d785fb1094d2495f353d9', class: "invoice__meta-value" }, this.documentNumber))), index.h("div", { key: '1f05d27538d62fa56fc5a3ea0e8fe5f9ea31a738', class: "invoice__meta-row" }, index.h("span", { key: '9931905e539a008db93c0bda8301575f77033a96', class: "invoice__meta-label" }, "Date"), index.h("span", { key: '85f19e14a6f8470fc21c1a72b8ae5dc0a1a12aaa', class: "invoice__meta-value" }, moment.hooks().format(DATE_DISPLAY$1)))), this.agentName && (index.h("section", { key: 'cc664f3ae60a66206155c50d354ea2ace2b16475', class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { key: '8e851991068581fc59605e5a71ba7ff5cdfa14ad', class: "section-heading" }, "Bill To"), index.h("div", { key: '3b3c1547d75cf46e73fa04dafe33657c177df6dd', class: "bill-to" }, index.h("p", { key: '4e26f2b30c208b2d243f71c79aca19decb60092f', class: "bill-to__name" }, this.agentName))))), index.h("div", { key: 'e14e6ac3578d824411ce59893f26b42f6091e1a0', class: "invoice__column invoice__column--property" }, index.h("div", { key: 'cd7dbadda15aefec0b5e1af06430a06e7e59de23', class: "property-overview", "aria-label": "Property overview" }, logo && index.h("img", { key: '5b7a872e30c0cfc0c3fc8b421d0e18c3b460dcd0', src: logo, alt: p?.name, class: "property-logo" }), index.h("div", { key: 'd9fc2df77b53430a36961deb27032f39a2e58811', class: "property-overview__text" }, index.h("p", { key: '718fa9dde28c293080e8057aa84253a0cf7cdfc5', class: "property-overview__name" }, p?.name), propertyLocation && index.h("p", { key: '357702bfaf69ed6eeacb8c7354d0833da64d8c7b', class: "property-overview__location" }, propertyLocation), p?.address && index.h("p", { key: 'ca5556a8f0e0dd491d0402dff6f88e84c3a835c7', class: "property-overview__location" }, p.address), p?.phone && index.h("p", { key: 'f919761d0f8aa0c73a3b3baec3df6e30de0fd385', class: "property-overview__location" }, p.phone), this.primaryContact?.email && index.h("p", { key: 'd358d47e3b84d58910489837e78df2b0d124894a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { key: 'db23a861025e9fcd2d3e1561505499465bd93799', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
    }
};
IrClDocumentHeader.style = IrClDocumentHeaderStyle0;

const IrClFiscalDocumentPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyId;
    request = null;
    handlePreviewRequest(event) {
        this.request = { ...event.detail };
        // if (event.detail.autoPrint) {
        //   window.print();
        // }
    }
    getDialogLabel() {
        if (!this.request)
            return 'Preview';
        return `${this.getTypeLabel(this.request.fdTypeCode)} — ${this.request.documentNumber}`;
    }
    getTypeLabel(fdTypeCode) {
        switch (fdTypeCode) {
            case utils.FD_TYPES.Invoice:
            case utils.FD_TYPES.Draft:
                return 'Invoice Preview';
            case utils.FD_TYPES.CreditNote:
                return 'Credit Note Preview';
            case utils.FD_TYPES.DebitNote:
                return 'Debit Note Preview';
            case utils.FD_TYPES.Receipt:
                return 'Receipt Preview';
            default:
                return 'Document Preview';
        }
    }
    handleClPreviewReady(event) {
        event.stopPropagation();
        if (this.request?.autoPrint) {
            window.print();
        }
    }
    renderPreview() {
        if (!this.request)
            return null;
        const { fdTypeCode, documentNumber, agentId, agentName } = this.request;
        const commonProps = {
            ticket: this.ticket,
            propertyId: this.propertyId,
            agentId,
            agentName,
            documentNumber,
        };
        switch (fdTypeCode) {
            case utils.FD_TYPES.Invoice:
            case utils.FD_TYPES.Draft:
                return index.h("ir-cl-invoice-preview", { ...commonProps });
            case utils.FD_TYPES.CreditNote:
                return index.h("ir-cl-credit-note-preview", { ...commonProps });
            case utils.FD_TYPES.DebitNote:
                return index.h("ir-cl-debit-note-preview", { ...commonProps });
            case utils.FD_TYPES.Receipt:
                return index.h("ir-cl-receipt-preview", { ...commonProps });
            default:
                return index.h("ir-cl-invoice-preview", { ...commonProps });
        }
    }
    render() {
        return (index.h(index.Host, { key: 'a9a5357b4d1c640577adddc415a65781e216abf6' }, index.h("ir-preview-screen-dialog", { key: '7d0b5a515c1b0013ff47198f7e23408c3895776f', open: this.request !== null, label: this.getDialogLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.request = null;
            } }, this.renderPreview())));
    }
};

/**
 * Groups a flat array of transaction rows into a two-level hierarchy,
 * then sorts every level so the oldest SERVICE_DATE appears first.
 *
 * Level 1 — Booking groups:
 *   Rows that share the same BOOK_NBR are collapsed into a parent object
 *   { BOOK_NBR, subRows: [...] }. Rows with no BOOK_NBR are kept flat.
 *   The top-level array is sorted by each item's oldest SERVICE_DATE so that
 *   a booking group is "pulled up" by whichever of its rows has the earliest date.
 *
 * Level 2 — Unit groups (inside each booking's subRows):
 *   Within a booking, rows that share the same PR_ID (room/unit identifier)
 *   are further collapsed into { PR_ID, subRows: [...] }.
 *   Rows with PR_ID = 0 / null, or whose PR_ID is unique within the booking,
 *   are kept flat inside the booking's subRows.
 *   The booking's subRows array is sorted by each item's oldest SERVICE_DATE
 *   so that a unit group is pulled up by its earliest row.
 *
 *   The rows inside each unit group are also sorted oldest-first.
 *
 * @param  rows - Raw transaction rows from the API.
 * @returns {Array} Grouped and sorted rows ready for rendering.
 */
const groupData = (rows) => {
    // ── Sorting helper ────────────────────────────────────────────────────────
    /**
     * Returns the oldest SERVICE_DATE found within an item.
     * If the item is a group (has subRows), recurse to find the minimum date
     * across all descendants. If it is a plain row, return its own SERVICE_DATE.
     */
    const getOldestDate = item => {
        if (item.subRows && item.subRows.length > 0) {
            return item.subRows.reduce((oldest, child) => {
                const childDate = getOldestDate(child);
                if (!oldest)
                    return childDate;
                return childDate < oldest ? childDate : oldest;
            }, '');
        }
        return item.SERVICE_DATE ?? '';
    };
    const sortByOldestDate = arr => {
        return arr.sort((a, b) => {
            const dateA = getOldestDate(a);
            const dateB = getOldestDate(b);
            return dateA.localeCompare(dateB);
        });
    };
    // ── Level 1: split rows into "no booking" vs "has booking" ──────────────
    const standalone = [];
    const bookingMap = new Map();
    for (const row of rows) {
        if (!row.BOOK_NBR) {
            standalone.push(row);
        }
        else {
            if (!bookingMap.has(row.BOOK_NBR)) {
                bookingMap.set(row.BOOK_NBR, []);
            }
            bookingMap.get(row.BOOK_NBR).push(row);
        }
    }
    // ── Level 2: within each booking, group rows by PR_ID (unit/room) ───────
    const groupByUnit = bookingRows => {
        const unitStandalone = [];
        const unitMap = new Map();
        for (const row of bookingRows) {
            if (!row.PR_ID) {
                unitStandalone.push(row);
            }
            else {
                if (!unitMap.has(row.PR_ID)) {
                    unitMap.set(row.PR_ID, []);
                }
                unitMap.get(row.PR_ID).push(row);
            }
        }
        const unitGroups = [];
        for (const [prId, subRows] of unitMap.entries()) {
            const sorted = sortByOldestDate(subRows);
            const first = sorted[0];
            const last = sorted[sorted.length - 1];
            unitGroups.push({
                PR_ID: prId,
                subRows: sorted,
                occupancy: (first.ADULTS_NBR ?? 0) + (first.CHILD_NBR ?? 0) + (first.INFANT_NBR ?? 0),
                GUEST_FIRST_NAME: first.GUEST_FIRST_NAME ?? '',
                GUEST_LAST_NAME: first.GUEST_LAST_NAME ?? '',
                FROM_DATE: first.FROM_DATE ?? '',
                TO_DATE: last.TO_DATE ?? '',
                ROOM_CATEGORY_ID: first.ROOM_CATEGORY_ID ?? 0,
                ROOM_TYPE_ID: first.ROOM_TYPE_ID ?? 0,
            });
        }
        return sortByOldestDate([...unitStandalone, ...unitGroups]);
    };
    // ── Assemble final result ─────────────────────────────────────────────────
    const bookingGroups = [];
    for (const [bookNbr, bookingRows] of bookingMap.entries()) {
        bookingGroups.push({
            BOOK_NBR: bookNbr,
            subRows: groupByUnit(bookingRows),
        });
    }
    return sortByOldestDate([...standalone, ...bookingGroups]);
};

const irClFiscalDocumentTableCss = ".cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}@media print{.invoice-items{overflow-x:visible}.invoice-items__unit-row td{color:#374151}}";
const IrClFiscalDocumentTableStyle0 = irClFiscalDocumentTableCss;

const IrClFiscalDocumentTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    transactions = [];
    currencySymbol = '$';
    /** When true all monetary amounts are negated — used for credit notes. */
    invertAmounts = false;
    applySign(value) {
        return this.invertAmounts ? -(value ?? 0) : (value ?? 0);
    }
    renderMoney(value) {
        return utils$1.formatAmount(this.currencySymbol, this.applySign(value));
    }
    get prIdDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
            for (const room of rt.physicalrooms ?? []) {
                map.set(room.id, room);
            }
        }
        return map;
    }
    get roomTypesDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
            map.set(rt.id, rt);
        }
        return map;
    }
    get rateplanDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
            for (const rp of rt.rateplans ?? []) {
                map.set(rp.id, rp);
            }
        }
        return map;
    }
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
        }), { net: 0, tax: 0, total: 0 });
    }
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (index.h("tr", { key: String(tx.CL_TX_ID), class: cls }, index.h("td", { class: "cl-td cl-td--muted cl-td--nowrap" }, index.h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), index.h("td", { class: "cl-td invoice-items__td--desc-cell" }, index.h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, index.h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT })), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, index.h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (index.h(index.Fragment, null, index.h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, index.h("td", { colSpan: 8 }, index.h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, index.h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), moment.hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", moment.hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (index.h(index.Fragment, null, group.subRows.length > 1 && (index.h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, index.h("td", { colSpan: 8 }, index.h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
            const asAny = item;
            if ('subRows' in asAny && !('BOOK_NBR' in asAny)) {
                return this.renderUnitGroup(asAny);
            }
            return this.renderTxRow(asAny, 1);
        })));
    }
    renderTopLevelItem(item) {
        const asAny = item;
        if ('subRows' in asAny && 'BOOK_NBR' in asAny) {
            return this.renderBookingGroup(asAny);
        }
        return this.renderTxRow(asAny);
    }
    renderTotals() {
        const t = this.totals;
        return (index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.net)), " ", index.h("br", null), "Net Price"), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.tax)), index.h("br", null), "Taxes"), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.total)), index.h("br", null), "Total")));
    }
    render() {
        return (index.h(index.Host, { key: 'a1d2d49f4564a39b452eae8c3ab21a727a1dfd89' }, index.h("section", { key: '77d55bb1f74ba0aa29e8ebb8aeaed1ea1b429109', class: "invoice-items" }, index.h("table", { key: '73ba5227c2a00745ffc0bba5d51ea8727276aad6', class: "cl-table" }, index.h("thead", { key: 'bce5c29ab7983e68637991b7c970e63f7201b65d' }, index.h("tr", { key: 'd789449a46e4bd2f15d68d3cdf0cabaf77075ef0' }, index.h("th", { key: '6a6dcd25d1255234dff32feae8c8029191687650', class: "cl-th" }, "Date"), index.h("th", { key: 'ff21ed3a169c4b0710169146dc7d8e6d1b4da007', class: "cl-th", style: { width: '100%' } }, "Description"), index.h("th", { key: '1e756e391bfbb527c6279bb863f01cff27d83286', class: "cl-th cl-th--num" }, "Net Price"), index.h("th", { key: '7ad402e003cbea044e197745e6ea1d270cbd8af1', class: "cl-th" }, "VAT"), index.h("th", { key: '6b1ce176e92a93c4445e0c950cc29d7b4f61799e', class: "cl-th cl-th--num" }, "VAT Amount"), index.h("th", { key: 'eb61ef786f15abda0cfdb61fc072bb2d1ee36e55', class: "cl-th" }, "City ", index.h("br", { key: '5b757e55aa835c5413536bd9590f82d7ba6433f5' }), "Tax"), index.h("th", { key: '80996360f869550cb75f24e469057ad7f57b3cf0', class: "cl-th cl-th--num" }, "City Tax", index.h("br", { key: 'bcf72ce1db6333dc3483bc1133a1e60d4fd412f1' }), " Amount"), index.h("th", { key: '442f988de21a2235f15111214c3e201e2a51a4ee', class: "cl-th cl-th--num" }, "Total"))), index.h("tbody", { key: 'f30fb58b84ec772af6459bc3687782944ca8994d' }, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: 8 }, "No transactions found for this document."))) : (index.h(index.Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
};
IrClFiscalDocumentTable.style = IrClFiscalDocumentTableStyle0;

const irClInvoiceCityTaxAmountCellCss = ".sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxAmountCellStyle0 = irClInvoiceCityTaxAmountCellCss;

const IrClInvoiceCityTaxAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: '88dc2e678e952475a95c3c5ce2ed2e9da4a831f6' }, this.cityTaxPercent > 0 ? utils$1.formatAmount(this.currencySymbol, this.amount) : '');
    }
};
IrClInvoiceCityTaxAmountCell.style = IrClInvoiceCityTaxAmountCellStyle0;

const irClInvoiceCityTaxPctCellCss = ".sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxPctCellStyle0 = irClInvoiceCityTaxPctCellCss;

const IrClInvoiceCityTaxPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: '4664917054c4c8a232768829418f34f33b3726da' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
};
IrClInvoiceCityTaxPctCell.style = IrClInvoiceCityTaxPctCellStyle0;

const irClInvoiceDateCellCss = ".sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}";
const IrClInvoiceDateCellStyle0 = irClInvoiceDateCellCss;

const IrClInvoiceDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    date;
    render() {
        return index.h(index.Host, { key: 'f35126b006ab95b499b8eff53ba730a1d4b8edf6' }, moment.hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
};
IrClInvoiceDateCell.style = IrClInvoiceDateCellStyle0;

const irClInvoiceDescriptionCellCss = ".sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}";
const IrClInvoiceDescriptionCellStyle0 = irClInvoiceDescriptionCellCss;

const IrClInvoiceDescriptionCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    description;
    render() {
        return (index.h(index.Host, { key: 'c27a860965dae42794de2224e2e733bab89a7943' }, index.h("span", { key: 'bdf2b3bfabbef8d15b8022209542eb474d110438', class: "desc" }, this.description)));
    }
};
IrClInvoiceDescriptionCell.style = IrClInvoiceDescriptionCellStyle0;

const irClInvoiceDialogCss = ".sc-ir-cl-invoice-dialog-h{display:contents}.create-invoice-dialog__body.sc-ir-cl-invoice-dialog{display:flex;flex-direction:column;gap:0.75rem}.create-invoice-dialog__no-results.sc-ir-cl-invoice-dialog{margin:0}.create-invoice-dialog__error.sc-ir-cl-invoice-dialog{margin:0;font-size:0.8125rem;color:var(--wa-color-danger-500, #ef4444)}.create-invoice-dialog__footer.sc-ir-cl-invoice-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrClInvoiceDialogStyle0 = irClInvoiceDialogCss;

const IrClInvoiceDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceIssued = index.createEvent(this, "invoiceIssued", 7);
    }
    agentId = null;
    mode = 'default';
    bookingNbr = null;
    startDate = null;
    endDate = null;
    currencyId = null;
    isLoading = false;
    error = null;
    noResults = false;
    invoiceIssued;
    dialogRef;
    formRef;
    cityLedgerService = new utils.CityLedgerService();
    async openModal() {
        this.error = null;
        this.noResults = false;
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    async handleSubmit() {
        this.isLoading = true;
        this.error = null;
        this.noResults = false;
        try {
            if (this.mode === 'booking') {
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.startDate,
                    END_DATE: this.endDate,
                    BOOKING_NBR: this.bookingNbr,
                    FD_TYPE_CODE: utils.FD_TYPES.Draft,
                });
                this.invoiceIssued.emit(result);
                this.dialogRef.closeModal();
            }
            else {
                const { fromDate, toDate, is_checked_out_only } = await this.formRef.getValues();
                const clResult = await this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    START_ROW: 1,
                    END_ROW: 999999,
                    IS_CHECKED_OUT_ONLY: is_checked_out_only,
                    IS_HOLD: false,
                    IS_LOCKED: false,
                });
                // const targetCategories = ['ACM', 'TRF', 'GEN'];
                // const listClTxIds = [...new Set(clResult.My_Cl_tx.filter(tx => targetCategories.includes(tx.CATEGORY) && !tx.DOC_NUMBER).map(tx => tx.CL_TX_ID))];
                if (!clResult.My_Cl_tx?.length) {
                    this.noResults = true;
                    return;
                }
                const listClTxIds = [...new Set(clResult.My_Cl_tx.map(tx => tx.CL_TX_ID))];
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    LIST_CL_TX_ID: listClTxIds,
                    FD_TYPE_CODE: utils.FD_TYPES.Draft,
                });
                this.invoiceIssued.emit(result);
                this.dialogRef.closeModal();
            }
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : 'Failed to issue invoice.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '584b250ffb7190d3446a23748d74cb5baad9845a' }, index.h("ir-dialog", { key: 'f13ed158cbc9f19801546eba8dbf80a9711ce36c', label: "Create Invoice", ref: el => (this.dialogRef = el) }, index.h("div", { key: '9ca0ed62fc9bb4d0dd48df8322ef21163ab66cbc', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (index.h("p", { class: "create-invoice-dialog__message" }, "Issue a draft invoice for booking #", this.bookingNbr, " to the agent?")) : (index.h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (index.h("wa-callout", { key: '3624fff1421366a74b3d93e4d0788df632c46b16', variant: "warning", class: "create-invoice-dialog__no-results" }, index.h("wa-icon", { key: 'bd049c802c34b107967fb7409424f134a6f77dc8', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && index.h("p", { key: 'c7bfd6fa487498017a49ccb434ee966210e8de77', class: "create-invoice-dialog__error" }, this.error)), index.h("div", { key: 'df32af9d241098c3ec76de33c1d131662e2b84df', slot: "footer", class: "create-invoice-dialog__footer" }, index.h("ir-custom-button", { key: '0ae3be4d0f02b82b17880c6fdd56acd3ea2cde28', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), index.h("ir-custom-button", { key: '61083099272f810405eb816bb4fe2530a723e364', size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, "Show draft")))));
    }
};
IrClInvoiceDialog.style = IrClInvoiceDialogStyle0;

const irClInvoiceFormCss = ".sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-left:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}";
const IrClInvoiceFormStyle0 = irClInvoiceFormCss;

const IrClInvoiceForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED';
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (index.h(index.Host, { key: '8ee4381e580e29b50b5d0e1998757e1e0db9b268' }, index.h("wa-callout", { key: 'b5e9a53da52acb72fc753bed14447492ac17865d' }, index.h("wa-icon", { key: '630f190044a2cb95117233e0f775cf35d78816e4', slot: "icon", name: "circle-info" }), index.h("div", { key: '7a7887b0d1e389a7a0c018cfcbe0d150fab74ebc', class: "invoice-form__scope-text" }, index.h("span", { key: 'd3cc434465ea74e1cd11b8b0364ceb2719678dcf', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), index.h("span", { key: '95874a71d4d455bdc058323a2273caff8dc88479', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), index.h("div", { key: '40c545860f215a68ab1bc6b947de1aeef8b5dcc9', class: "invoice-form__field" }, index.h("ir-date-range-filter", { key: '5d544377d447020572b263719665a4e1b1eff5df', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment.hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), index.h("div", { key: '707d8ee906be29aa7b20764ce90bf12f33ecc698', class: "invoice-form__field" }, index.h("wa-checkbox", { key: '58e4137cf6042a2a7cea6bad9c4fea0bb285c177', checked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, "Include checked-out bookings only"))));
    }
};
IrClInvoiceForm.style = IrClInvoiceFormStyle0;

const irClInvoiceNetPriceCellCss = ".sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}";
const IrClInvoiceNetPriceCellStyle0 = irClInvoiceNetPriceCellCss;

const IrClInvoiceNetPriceCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: 'ecf45fd5066554838f48197062f1bb2a40412c6d' }, utils$1.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceNetPriceCell.style = IrClInvoiceNetPriceCellStyle0;

const irClInvoicePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClInvoicePreviewStyle0 = irClInvoicePreviewCss;

const IrClInvoicePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    clPreviewReady;
    dataService = new ClFiscalDocumentService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load invoice data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "invoice" }), index.h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClInvoicePreview.style = IrClInvoicePreviewStyle0;

const irClInvoiceTotalCellCss = ".sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}";
const IrClInvoiceTotalCellStyle0 = irClInvoiceTotalCellCss;

const IrClInvoiceTotalCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: '8a48c2a9763d321ad4d97dbbc914dc130f69e07b' }, utils$1.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceTotalCell.style = IrClInvoiceTotalCellStyle0;

const irClInvoiceVatAmountCellCss = ".sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceVatAmountCellStyle0 = irClInvoiceVatAmountCellCss;

const IrClInvoiceVatAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: 'c9f582f3c0a7282097f77daadb2d45aa56514791' }, utils$1.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceVatAmountCell.style = IrClInvoiceVatAmountCellStyle0;

const irClInvoiceVatPctCellCss = ".sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceVatPctCellStyle0 = irClInvoiceVatPctCellCss;

const IrClInvoiceVatPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    vatPercent;
    render() {
        return index.h(index.Host, { key: 'a83fcade683437ebad9e9fee92cb8bf0c58074d8' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = IrClInvoiceVatPctCellStyle0;

const irClOpeningBalanceFieldsCss = ".sc-ir-cl-opening-balance-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-opening-balance-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-opening-balance-fields,.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields{width:100%}.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields wa-radio.sc-ir-cl-opening-balance-fields{flex:1}.entry-type.--credit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClOpeningBalanceFieldsStyle0 = irClOpeningBalanceFieldsCss;

const IrClOpeningBalanceFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange", 7);
    }
    entryType = '';
    fieldChange;
    render() {
        return (index.h("div", { key: '447eeb446c4a710b08e39fca847f060fb7bb5bb8', class: "field field--full-width" }, index.h("ir-validator", { key: 'fbf23293881cfe930bcb2adf0355e8a9174c0d17', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, index.h("wa-radio-group", { key: '4efcac1d60cdfb130c96870966b43aafe6117e04', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, index.h("wa-radio", { key: '65d220e5699687569d7eb491ff737eb884452374', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), index.h("wa-radio", { key: '705f060f9b4f13b8e94d46a28830c9905a603b56', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))));
    }
};
IrClOpeningBalanceFields.style = IrClOpeningBalanceFieldsStyle0;

const irClPaymentFieldsCss = ".sc-ir-cl-payment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-payment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-payment-fields,.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.entry-type.--credit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.payment-section.sc-ir-cl-payment-fields{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.invoice-select.sc-ir-cl-payment-fields{animation:slide-in 0.18s ease}";
const IrClPaymentFieldsStyle0 = irClPaymentFieldsCss;

const IrClPaymentFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fieldChange = index.createEvent(this, "fieldChange", 7);
    }
    paymentMethodCode = '';
    isOnAccount = false;
    invoiceId;
    paymentMethods = [];
    unpaidInvoiceOptions = [];
    noInvoices = false;
    language = 'en';
    fieldChange;
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
    handlePaymentMethodChange(value) {
        const method = this.paymentMethods?.find(pm => pm.CODE_NAME === value);
        if (!method) {
            this.fieldChange.emit({ payment_method: null });
            return;
        }
        const payment_method = {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
        this.fieldChange.emit({ payment_method });
    }
    render() {
        return (index.h(index.Fragment, { key: 'b064c9758ddaae1bd4d3e2d74e86acd9248872ca' }, index.h("div", { key: '768a839a59bab56fde73d9efad81ed17cc48c9ec', class: "payment-section" }, index.h("div", { key: '9f39035789135f34b2a0e19b28a69ab3ad7d491f', class: "field" }, index.h("ir-validator", { key: '6313dc4f620e06f920187ef4f9c634655a890d87', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, index.h("wa-select", { key: 'e4ef29933d9d28d91e353033950bebe88aad751d', size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, index.h("wa-option", { key: '21a9ebe1d88d519e1004843a91afb32c0d5b3b6a', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (index.h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, utils$1.getEntryValue({ entry: method, language: this.language }))))))))));
    }
};
IrClPaymentFields.style = IrClPaymentFieldsStyle0;

const irClReceiptPreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.receipt-body{display:flex;flex-direction:column;gap:1.75rem}.receipt-section__title{margin:0 0 0.625rem;padding-bottom:0.375rem;font-size:0.6875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;border-bottom:1px solid #e5e7eb}.receipt-rows{display:flex;flex-direction:column;gap:0.35rem}.receipt-row{display:flex;align-items:baseline;gap:0.375rem;font-size:0.875rem}.receipt-row__label{color:#6b7280;font-weight:400;flex-shrink:0}.receipt-row__label::after{content:':'}.receipt-row__value{color:#111827;font-weight:500}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}.receipt-section__title{color:#374151}.receipt-row__label{color:#374151}}";
const IrClReceiptPreviewStyle0 = irClReceiptPreviewCss;

const IrClReceiptPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    ClEntry;
    error = null;
    property = null;
    paymentMethods = [];
    document = null;
    clPreviewReady;
    hasEmitted = false;
    dataService = new ClFiscalDocumentService();
    bookingService = new booking_service.BookingService();
    cityLedgerService = new utils.CityLedgerService();
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [{ property, transactions }, paymentMethods, documents] = await Promise.all([
                this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber),
                this.bookingService.getSetupEntriesByTableName('_PAY_METHOD'),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    DOC_NUMBER: this.documentNumber,
                }),
            ]);
            this.document = documents[0];
            this.property = property;
            this.ClEntry = transactions[0];
            this.paymentMethods = paymentMethods;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load receipt data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    getPaymentMethodLabel(code) {
        if (!code)
            return '—';
        const entry = this.paymentMethods.find(e => e.CODE_NAME === code);
        return entry?.CODE_VALUE_EN ?? code;
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        const tx = this.ClEntry;
        if (!tx) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "No receipt data found.")));
        }
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? utils$1.formatAmount(currency, v) : '—');
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "receipt" }), index.h("div", { class: "receipt-body" }, index.h("section", { class: "receipt-section" }, index.h("h4", { class: "receipt-section__title" }, "Payment Details"), index.h("div", { class: "receipt-rows" }, index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Amount Received"), index.h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Payment Method"), index.h("span", { class: "receipt-row__value" }, this.getPaymentMethodLabel(tx.PAY_METHOD_CODE))), tx.DESCRIPTION && (index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Reference"), index.h("span", { class: "receipt-row__value" }, tx.DESCRIPTION))))), index.h("section", { class: "receipt-section" }, index.h("h4", { class: "receipt-section__title" }, "Balance Summary (Account)"), index.h("div", { class: "receipt-rows" }, index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Balance Before Payment"), index.h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_BEFORE_TX))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Payment Received"), index.h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Balance After Payment"), index.h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_AFTER_TX)))))))));
    }
};
IrClReceiptPreview.style = IrClReceiptPreviewStyle0;

const irClStatementPreviewCss = ".cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:960px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.statement-period{display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;padding:0.5rem 0.75rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;font-size:0.8125rem}.statement-period__label{font-weight:600;color:#374151}.statement-period__value{color:#374151}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClStatementPreviewStyle0 = irClStatementPreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClStatementPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    fromDate;
    toDate;
    currencyId;
    isLoading = false;
    error = null;
    property = null;
    statement = null;
    fiscalDocuments = [];
    clPreviewReady;
    tokenService = new Token.Token();
    propertyService = new property_service.PropertyService();
    cityLedgerService = new utils.CityLedgerService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [propertyData, statement, fiscalDocuments] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                    LIST_FD_TYPE_CODE: [FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.statement = statement;
            this.fiscalDocuments = fiscalDocuments ?? [];
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load statement data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        if (!this.statement) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "No statement data found.")));
        }
        const { STARTING_BALANCE, ENDING_BALANCE } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? utils$1.formatAmount(currency, v) : '—');
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), index.h("table", { class: "cl-table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "cl-th" }, "Date"), index.h("th", { class: "cl-th" }, "Document #"), index.h("th", { class: "cl-th" }, "Type"), index.h("th", { class: "cl-th cl-th--num" }, "Debit"), index.h("th", { class: "cl-th cl-th--num" }, "Credit"), index.h("th", { class: "cl-th cl-th--num" }, "Balance"))), index.h("tbody", null, index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td", colSpan: 3 }, "Opening Balance \u2014 ", moment.hooks(this.fromDate).format(DATE_DISPLAY)), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(STARTING_BALANCE))), (() => {
            let running = STARTING_BALANCE;
            return this.fiscalDocuments.map(doc => {
                running += (doc.DEBIT ?? 0) - (doc.CREDIT ?? 0);
                return (index.h("tr", null, index.h("td", { class: "cl-td cl-td--nowrap" }, doc.ISSUE_DATE_DISPLAY || (doc.ISSUE_DATE ? moment.hooks(doc.ISSUE_DATE).format(DATE_DISPLAY) : '—')), index.h("td", { class: "cl-td" }, doc.DOC_NUMBER || '—'), index.h("td", { class: "cl-td" }, doc.FD_TYPE_NAME || '—'), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.DEBIT ? fmt(doc.DEBIT) : '—'), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.CREDIT ? fmt(doc.CREDIT) : '—'), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(running))));
            });
        })(), this.fiscalDocuments.length === 0 && (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: 6 }, "No fiscal documents found for this period."))), index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td", colSpan: 3 }, "Closing Balance \u2014 ", moment.hooks(this.toDate).format(DATE_DISPLAY)), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(ENDING_BALANCE))))))));
    }
};
IrClStatementPreview.style = IrClStatementPreviewStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const appCss = "/* Web Awesome core styles */\n/* @import url('../assets/webawesome/themes/webawesome.css'); */\n/* Generates --wa-color-{hue}-on tokens for pairing with any palette's key colors */\n:where(:root),\n:host {\n  /**\n    * Conditional tokens to check if the key color is >= 60\n    * Key colors are the most colorful tint in a scale, recorded as --wa-color-{hue} in each palette\n    * The numeric value of the key is isolated as --wa-color-{hue}-key\n    * If key < 60, the result is 0%\n    * If key >= 60, the result is 100%\n    * Intended to be used in the color-mix() functions below\n    */\n\n  --wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));\n  --wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));\n  --wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));\n  --wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));\n  --wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));\n  --wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));\n  --wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));\n  --wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));\n  --wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));\n  --wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));\n\n  /**\n    * Tokens to set text color with appropriate WCAG 2.1 contrast\n    * If key < 60, the text color is white\n    * If key >= 60, the text color is {hue}-10\n    */\n\n  --wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);\n  --wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);\n  --wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);\n  --wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);\n  --wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);\n  --wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);\n  --wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);\n  --wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);\n  --wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);\n  --wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white);\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-brand-blue {\n    --wa-color-brand-95: var(--wa-color-blue-95);\n    --wa-color-brand-90: var(--wa-color-blue-90);\n    --wa-color-brand-80: var(--wa-color-blue-80);\n    --wa-color-brand-70: var(--wa-color-blue-70);\n    --wa-color-brand-60: var(--wa-color-blue-60);\n    --wa-color-brand-50: var(--wa-color-blue-50);\n    --wa-color-brand-40: var(--wa-color-blue-40);\n    --wa-color-brand-30: var(--wa-color-blue-30);\n    --wa-color-brand-20: var(--wa-color-blue-20);\n    --wa-color-brand-10: var(--wa-color-blue-10);\n    --wa-color-brand-05: var(--wa-color-blue-05);\n    --wa-color-brand: var(--wa-color-blue);\n    --wa-color-brand-on: var(--wa-color-blue-on);\n  }\n\n  .wa-brand-red {\n    --wa-color-brand-95: var(--wa-color-red-95);\n    --wa-color-brand-90: var(--wa-color-red-90);\n    --wa-color-brand-80: var(--wa-color-red-80);\n    --wa-color-brand-70: var(--wa-color-red-70);\n    --wa-color-brand-60: var(--wa-color-red-60);\n    --wa-color-brand-50: var(--wa-color-red-50);\n    --wa-color-brand-40: var(--wa-color-red-40);\n    --wa-color-brand-30: var(--wa-color-red-30);\n    --wa-color-brand-20: var(--wa-color-red-20);\n    --wa-color-brand-10: var(--wa-color-red-10);\n    --wa-color-brand-05: var(--wa-color-red-05);\n    --wa-color-brand: var(--wa-color-red);\n    --wa-color-brand-on: var(--wa-color-red-on);\n  }\n\n  .wa-brand-orange {\n    --wa-color-brand-95: var(--wa-color-orange-95);\n    --wa-color-brand-90: var(--wa-color-orange-90);\n    --wa-color-brand-80: var(--wa-color-orange-80);\n    --wa-color-brand-70: var(--wa-color-orange-70);\n    --wa-color-brand-60: var(--wa-color-orange-60);\n    --wa-color-brand-50: var(--wa-color-orange-50);\n    --wa-color-brand-40: var(--wa-color-orange-40);\n    --wa-color-brand-30: var(--wa-color-orange-30);\n    --wa-color-brand-20: var(--wa-color-orange-20);\n    --wa-color-brand-10: var(--wa-color-orange-10);\n    --wa-color-brand-05: var(--wa-color-orange-05);\n    --wa-color-brand: var(--wa-color-orange);\n    --wa-color-brand-on: var(--wa-color-orange-on);\n  }\n\n  .wa-brand-yellow {\n    --wa-color-brand-95: var(--wa-color-yellow-95);\n    --wa-color-brand-90: var(--wa-color-yellow-90);\n    --wa-color-brand-80: var(--wa-color-yellow-80);\n    --wa-color-brand-70: var(--wa-color-yellow-70);\n    --wa-color-brand-60: var(--wa-color-yellow-60);\n    --wa-color-brand-50: var(--wa-color-yellow-50);\n    --wa-color-brand-40: var(--wa-color-yellow-40);\n    --wa-color-brand-30: var(--wa-color-yellow-30);\n    --wa-color-brand-20: var(--wa-color-yellow-20);\n    --wa-color-brand-10: var(--wa-color-yellow-10);\n    --wa-color-brand-05: var(--wa-color-yellow-05);\n    --wa-color-brand: var(--wa-color-yellow);\n    --wa-color-brand-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-brand-green {\n    --wa-color-brand-95: var(--wa-color-green-95);\n    --wa-color-brand-90: var(--wa-color-green-90);\n    --wa-color-brand-80: var(--wa-color-green-80);\n    --wa-color-brand-70: var(--wa-color-green-70);\n    --wa-color-brand-60: var(--wa-color-green-60);\n    --wa-color-brand-50: var(--wa-color-green-50);\n    --wa-color-brand-40: var(--wa-color-green-40);\n    --wa-color-brand-30: var(--wa-color-green-30);\n    --wa-color-brand-20: var(--wa-color-green-20);\n    --wa-color-brand-10: var(--wa-color-green-10);\n    --wa-color-brand-05: var(--wa-color-green-05);\n    --wa-color-brand: var(--wa-color-green);\n    --wa-color-brand-on: var(--wa-color-green-on);\n  }\n\n  .wa-brand-cyan {\n    --wa-color-brand-95: var(--wa-color-cyan-95);\n    --wa-color-brand-90: var(--wa-color-cyan-90);\n    --wa-color-brand-80: var(--wa-color-cyan-80);\n    --wa-color-brand-70: var(--wa-color-cyan-70);\n    --wa-color-brand-60: var(--wa-color-cyan-60);\n    --wa-color-brand-50: var(--wa-color-cyan-50);\n    --wa-color-brand-40: var(--wa-color-cyan-40);\n    --wa-color-brand-30: var(--wa-color-cyan-30);\n    --wa-color-brand-20: var(--wa-color-cyan-20);\n    --wa-color-brand-10: var(--wa-color-cyan-10);\n    --wa-color-brand-05: var(--wa-color-cyan-05);\n    --wa-color-brand: var(--wa-color-cyan);\n    --wa-color-brand-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-brand-indigo {\n    --wa-color-brand-95: var(--wa-color-indigo-95);\n    --wa-color-brand-90: var(--wa-color-indigo-90);\n    --wa-color-brand-80: var(--wa-color-indigo-80);\n    --wa-color-brand-70: var(--wa-color-indigo-70);\n    --wa-color-brand-60: var(--wa-color-indigo-60);\n    --wa-color-brand-50: var(--wa-color-indigo-50);\n    --wa-color-brand-40: var(--wa-color-indigo-40);\n    --wa-color-brand-30: var(--wa-color-indigo-30);\n    --wa-color-brand-20: var(--wa-color-indigo-20);\n    --wa-color-brand-10: var(--wa-color-indigo-10);\n    --wa-color-brand-05: var(--wa-color-indigo-05);\n    --wa-color-brand: var(--wa-color-indigo);\n    --wa-color-brand-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-brand-purple {\n    --wa-color-brand-95: var(--wa-color-purple-95);\n    --wa-color-brand-90: var(--wa-color-purple-90);\n    --wa-color-brand-80: var(--wa-color-purple-80);\n    --wa-color-brand-70: var(--wa-color-purple-70);\n    --wa-color-brand-60: var(--wa-color-purple-60);\n    --wa-color-brand-50: var(--wa-color-purple-50);\n    --wa-color-brand-40: var(--wa-color-purple-40);\n    --wa-color-brand-30: var(--wa-color-purple-30);\n    --wa-color-brand-20: var(--wa-color-purple-20);\n    --wa-color-brand-10: var(--wa-color-purple-10);\n    --wa-color-brand-05: var(--wa-color-purple-05);\n    --wa-color-brand: var(--wa-color-purple);\n    --wa-color-brand-on: var(--wa-color-purple-on);\n  }\n\n  .wa-brand-pink {\n    --wa-color-brand-95: var(--wa-color-pink-95);\n    --wa-color-brand-90: var(--wa-color-pink-90);\n    --wa-color-brand-80: var(--wa-color-pink-80);\n    --wa-color-brand-70: var(--wa-color-pink-70);\n    --wa-color-brand-60: var(--wa-color-pink-60);\n    --wa-color-brand-50: var(--wa-color-pink-50);\n    --wa-color-brand-40: var(--wa-color-pink-40);\n    --wa-color-brand-30: var(--wa-color-pink-30);\n    --wa-color-brand-20: var(--wa-color-pink-20);\n    --wa-color-brand-10: var(--wa-color-pink-10);\n    --wa-color-brand-05: var(--wa-color-pink-05);\n    --wa-color-brand: var(--wa-color-pink);\n    --wa-color-brand-on: var(--wa-color-pink-on);\n  }\n\n  .wa-brand-gray {\n    --wa-color-brand-95: var(--wa-color-gray-95);\n    --wa-color-brand-90: var(--wa-color-gray-90);\n    --wa-color-brand-80: var(--wa-color-gray-80);\n    --wa-color-brand-70: var(--wa-color-gray-70);\n    --wa-color-brand-60: var(--wa-color-gray-60);\n    --wa-color-brand-50: var(--wa-color-gray-50);\n    --wa-color-brand-40: var(--wa-color-gray-40);\n    --wa-color-brand-30: var(--wa-color-gray-30);\n    --wa-color-brand-20: var(--wa-color-gray-20);\n    --wa-color-brand-10: var(--wa-color-gray-10);\n    --wa-color-brand-05: var(--wa-color-gray-05);\n    --wa-color-brand: var(--wa-color-gray);\n    --wa-color-brand-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-neutral-gray {\n    --wa-color-neutral-95: var(--wa-color-gray-95);\n    --wa-color-neutral-90: var(--wa-color-gray-90);\n    --wa-color-neutral-80: var(--wa-color-gray-80);\n    --wa-color-neutral-70: var(--wa-color-gray-70);\n    --wa-color-neutral-60: var(--wa-color-gray-60);\n    --wa-color-neutral-50: var(--wa-color-gray-50);\n    --wa-color-neutral-40: var(--wa-color-gray-40);\n    --wa-color-neutral-30: var(--wa-color-gray-30);\n    --wa-color-neutral-20: var(--wa-color-gray-20);\n    --wa-color-neutral-10: var(--wa-color-gray-10);\n    --wa-color-neutral-05: var(--wa-color-gray-05);\n    --wa-color-neutral: var(--wa-color-gray);\n    --wa-color-neutral-on: var(--wa-color-gray-on);\n  }\n\n  .wa-neutral-red {\n    --wa-color-neutral-95: var(--wa-color-red-95);\n    --wa-color-neutral-90: var(--wa-color-red-90);\n    --wa-color-neutral-80: var(--wa-color-red-80);\n    --wa-color-neutral-70: var(--wa-color-red-70);\n    --wa-color-neutral-60: var(--wa-color-red-60);\n    --wa-color-neutral-50: var(--wa-color-red-50);\n    --wa-color-neutral-40: var(--wa-color-red-40);\n    --wa-color-neutral-30: var(--wa-color-red-30);\n    --wa-color-neutral-20: var(--wa-color-red-20);\n    --wa-color-neutral-10: var(--wa-color-red-10);\n    --wa-color-neutral-05: var(--wa-color-red-05);\n    --wa-color-neutral: var(--wa-color-red);\n    --wa-color-neutral-on: var(--wa-color-red-on);\n  }\n\n  .wa-neutral-orange {\n    --wa-color-neutral-95: var(--wa-color-orange-95);\n    --wa-color-neutral-90: var(--wa-color-orange-90);\n    --wa-color-neutral-80: var(--wa-color-orange-80);\n    --wa-color-neutral-70: var(--wa-color-orange-70);\n    --wa-color-neutral-60: var(--wa-color-orange-60);\n    --wa-color-neutral-50: var(--wa-color-orange-50);\n    --wa-color-neutral-40: var(--wa-color-orange-40);\n    --wa-color-neutral-30: var(--wa-color-orange-30);\n    --wa-color-neutral-20: var(--wa-color-orange-20);\n    --wa-color-neutral-10: var(--wa-color-orange-10);\n    --wa-color-neutral-05: var(--wa-color-orange-05);\n    --wa-color-neutral: var(--wa-color-orange);\n    --wa-color-neutral-on: var(--wa-color-orange-on);\n  }\n\n  .wa-neutral-yellow {\n    --wa-color-neutral-95: var(--wa-color-yellow-95);\n    --wa-color-neutral-90: var(--wa-color-yellow-90);\n    --wa-color-neutral-80: var(--wa-color-yellow-80);\n    --wa-color-neutral-70: var(--wa-color-yellow-70);\n    --wa-color-neutral-60: var(--wa-color-yellow-60);\n    --wa-color-neutral-50: var(--wa-color-yellow-50);\n    --wa-color-neutral-40: var(--wa-color-yellow-40);\n    --wa-color-neutral-30: var(--wa-color-yellow-30);\n    --wa-color-neutral-20: var(--wa-color-yellow-20);\n    --wa-color-neutral-10: var(--wa-color-yellow-10);\n    --wa-color-neutral-05: var(--wa-color-yellow-05);\n    --wa-color-neutral: var(--wa-color-yellow);\n    --wa-color-neutral-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-neutral-green {\n    --wa-color-neutral-95: var(--wa-color-green-95);\n    --wa-color-neutral-90: var(--wa-color-green-90);\n    --wa-color-neutral-80: var(--wa-color-green-80);\n    --wa-color-neutral-70: var(--wa-color-green-70);\n    --wa-color-neutral-60: var(--wa-color-green-60);\n    --wa-color-neutral-50: var(--wa-color-green-50);\n    --wa-color-neutral-40: var(--wa-color-green-40);\n    --wa-color-neutral-30: var(--wa-color-green-30);\n    --wa-color-neutral-20: var(--wa-color-green-20);\n    --wa-color-neutral-10: var(--wa-color-green-10);\n    --wa-color-neutral-05: var(--wa-color-green-05);\n    --wa-color-neutral: var(--wa-color-green);\n    --wa-color-neutral-on: var(--wa-color-green-on);\n  }\n\n  .wa-neutral-cyan {\n    --wa-color-neutral-95: var(--wa-color-cyan-95);\n    --wa-color-neutral-90: var(--wa-color-cyan-90);\n    --wa-color-neutral-80: var(--wa-color-cyan-80);\n    --wa-color-neutral-70: var(--wa-color-cyan-70);\n    --wa-color-neutral-60: var(--wa-color-cyan-60);\n    --wa-color-neutral-50: var(--wa-color-cyan-50);\n    --wa-color-neutral-40: var(--wa-color-cyan-40);\n    --wa-color-neutral-30: var(--wa-color-cyan-30);\n    --wa-color-neutral-20: var(--wa-color-cyan-20);\n    --wa-color-neutral-10: var(--wa-color-cyan-10);\n    --wa-color-neutral-05: var(--wa-color-cyan-05);\n    --wa-color-neutral: var(--wa-color-cyan);\n    --wa-color-neutral-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-neutral-blue {\n    --wa-color-neutral-95: var(--wa-color-blue-95);\n    --wa-color-neutral-90: var(--wa-color-blue-90);\n    --wa-color-neutral-80: var(--wa-color-blue-80);\n    --wa-color-neutral-70: var(--wa-color-blue-70);\n    --wa-color-neutral-60: var(--wa-color-blue-60);\n    --wa-color-neutral-50: var(--wa-color-blue-50);\n    --wa-color-neutral-40: var(--wa-color-blue-40);\n    --wa-color-neutral-30: var(--wa-color-blue-30);\n    --wa-color-neutral-20: var(--wa-color-blue-20);\n    --wa-color-neutral-10: var(--wa-color-blue-10);\n    --wa-color-neutral-05: var(--wa-color-blue-05);\n    --wa-color-neutral: var(--wa-color-blue);\n    --wa-color-neutral-on: var(--wa-color-blue-on);\n  }\n\n  .wa-neutral-indigo {\n    --wa-color-neutral-95: var(--wa-color-indigo-95);\n    --wa-color-neutral-90: var(--wa-color-indigo-90);\n    --wa-color-neutral-80: var(--wa-color-indigo-80);\n    --wa-color-neutral-70: var(--wa-color-indigo-70);\n    --wa-color-neutral-60: var(--wa-color-indigo-60);\n    --wa-color-neutral-50: var(--wa-color-indigo-50);\n    --wa-color-neutral-40: var(--wa-color-indigo-40);\n    --wa-color-neutral-30: var(--wa-color-indigo-30);\n    --wa-color-neutral-20: var(--wa-color-indigo-20);\n    --wa-color-neutral-10: var(--wa-color-indigo-10);\n    --wa-color-neutral-05: var(--wa-color-indigo-05);\n    --wa-color-neutral: var(--wa-color-indigo);\n    --wa-color-neutral-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-neutral-purple {\n    --wa-color-neutral-95: var(--wa-color-purple-95);\n    --wa-color-neutral-90: var(--wa-color-purple-90);\n    --wa-color-neutral-80: var(--wa-color-purple-80);\n    --wa-color-neutral-70: var(--wa-color-purple-70);\n    --wa-color-neutral-60: var(--wa-color-purple-60);\n    --wa-color-neutral-50: var(--wa-color-purple-50);\n    --wa-color-neutral-40: var(--wa-color-purple-40);\n    --wa-color-neutral-30: var(--wa-color-purple-30);\n    --wa-color-neutral-20: var(--wa-color-purple-20);\n    --wa-color-neutral-10: var(--wa-color-purple-10);\n    --wa-color-neutral-05: var(--wa-color-purple-05);\n    --wa-color-neutral: var(--wa-color-purple);\n    --wa-color-neutral-on: var(--wa-color-purple-on);\n  }\n\n  .wa-neutral-pink {\n    --wa-color-neutral-95: var(--wa-color-pink-95);\n    --wa-color-neutral-90: var(--wa-color-pink-90);\n    --wa-color-neutral-80: var(--wa-color-pink-80);\n    --wa-color-neutral-70: var(--wa-color-pink-70);\n    --wa-color-neutral-60: var(--wa-color-pink-60);\n    --wa-color-neutral-50: var(--wa-color-pink-50);\n    --wa-color-neutral-40: var(--wa-color-pink-40);\n    --wa-color-neutral-30: var(--wa-color-pink-30);\n    --wa-color-neutral-20: var(--wa-color-pink-20);\n    --wa-color-neutral-10: var(--wa-color-pink-10);\n    --wa-color-neutral-05: var(--wa-color-pink-05);\n    --wa-color-neutral: var(--wa-color-pink);\n    --wa-color-neutral-on: var(--wa-color-pink-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-success-green {\n    --wa-color-success-95: var(--wa-color-green-95);\n    --wa-color-success-90: var(--wa-color-green-90);\n    --wa-color-success-80: var(--wa-color-green-80);\n    --wa-color-success-70: var(--wa-color-green-70);\n    --wa-color-success-60: var(--wa-color-green-60);\n    --wa-color-success-50: var(--wa-color-green-50);\n    --wa-color-success-40: var(--wa-color-green-40);\n    --wa-color-success-30: var(--wa-color-green-30);\n    --wa-color-success-20: var(--wa-color-green-20);\n    --wa-color-success-10: var(--wa-color-green-10);\n    --wa-color-success-05: var(--wa-color-green-05);\n    --wa-color-success: var(--wa-color-green);\n    --wa-color-success-on: var(--wa-color-green-on);\n  }\n\n  .wa-success-red {\n    --wa-color-success-95: var(--wa-color-red-95);\n    --wa-color-success-90: var(--wa-color-red-90);\n    --wa-color-success-80: var(--wa-color-red-80);\n    --wa-color-success-70: var(--wa-color-red-70);\n    --wa-color-success-60: var(--wa-color-red-60);\n    --wa-color-success-50: var(--wa-color-red-50);\n    --wa-color-success-40: var(--wa-color-red-40);\n    --wa-color-success-30: var(--wa-color-red-30);\n    --wa-color-success-20: var(--wa-color-red-20);\n    --wa-color-success-10: var(--wa-color-red-10);\n    --wa-color-success-05: var(--wa-color-red-05);\n    --wa-color-success: var(--wa-color-red);\n    --wa-color-success-on: var(--wa-color-red-on);\n  }\n\n  .wa-success-orange {\n    --wa-color-success-95: var(--wa-color-orange-95);\n    --wa-color-success-90: var(--wa-color-orange-90);\n    --wa-color-success-80: var(--wa-color-orange-80);\n    --wa-color-success-70: var(--wa-color-orange-70);\n    --wa-color-success-60: var(--wa-color-orange-60);\n    --wa-color-success-50: var(--wa-color-orange-50);\n    --wa-color-success-40: var(--wa-color-orange-40);\n    --wa-color-success-30: var(--wa-color-orange-30);\n    --wa-color-success-20: var(--wa-color-orange-20);\n    --wa-color-success-10: var(--wa-color-orange-10);\n    --wa-color-success-05: var(--wa-color-orange-05);\n    --wa-color-success: var(--wa-color-orange);\n    --wa-color-success-on: var(--wa-color-orange-on);\n  }\n\n  .wa-success-yellow {\n    --wa-color-success-95: var(--wa-color-yellow-95);\n    --wa-color-success-90: var(--wa-color-yellow-90);\n    --wa-color-success-80: var(--wa-color-yellow-80);\n    --wa-color-success-70: var(--wa-color-yellow-70);\n    --wa-color-success-60: var(--wa-color-yellow-60);\n    --wa-color-success-50: var(--wa-color-yellow-50);\n    --wa-color-success-40: var(--wa-color-yellow-40);\n    --wa-color-success-30: var(--wa-color-yellow-30);\n    --wa-color-success-20: var(--wa-color-yellow-20);\n    --wa-color-success-10: var(--wa-color-yellow-10);\n    --wa-color-success-05: var(--wa-color-yellow-05);\n    --wa-color-success: var(--wa-color-yellow);\n    --wa-color-success-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-success-cyan {\n    --wa-color-success-95: var(--wa-color-cyan-95);\n    --wa-color-success-90: var(--wa-color-cyan-90);\n    --wa-color-success-80: var(--wa-color-cyan-80);\n    --wa-color-success-70: var(--wa-color-cyan-70);\n    --wa-color-success-60: var(--wa-color-cyan-60);\n    --wa-color-success-50: var(--wa-color-cyan-50);\n    --wa-color-success-40: var(--wa-color-cyan-40);\n    --wa-color-success-30: var(--wa-color-cyan-30);\n    --wa-color-success-20: var(--wa-color-cyan-20);\n    --wa-color-success-10: var(--wa-color-cyan-10);\n    --wa-color-success-05: var(--wa-color-cyan-05);\n    --wa-color-success: var(--wa-color-cyan);\n    --wa-color-success-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-success-blue {\n    --wa-color-success-95: var(--wa-color-blue-95);\n    --wa-color-success-90: var(--wa-color-blue-90);\n    --wa-color-success-80: var(--wa-color-blue-80);\n    --wa-color-success-70: var(--wa-color-blue-70);\n    --wa-color-success-60: var(--wa-color-blue-60);\n    --wa-color-success-50: var(--wa-color-blue-50);\n    --wa-color-success-40: var(--wa-color-blue-40);\n    --wa-color-success-30: var(--wa-color-blue-30);\n    --wa-color-success-20: var(--wa-color-blue-20);\n    --wa-color-success-10: var(--wa-color-blue-10);\n    --wa-color-success-05: var(--wa-color-blue-05);\n    --wa-color-success: var(--wa-color-blue);\n    --wa-color-success-on: var(--wa-color-blue-on);\n  }\n\n  .wa-success-indigo {\n    --wa-color-success-95: var(--wa-color-indigo-95);\n    --wa-color-success-90: var(--wa-color-indigo-90);\n    --wa-color-success-80: var(--wa-color-indigo-80);\n    --wa-color-success-70: var(--wa-color-indigo-70);\n    --wa-color-success-60: var(--wa-color-indigo-60);\n    --wa-color-success-50: var(--wa-color-indigo-50);\n    --wa-color-success-40: var(--wa-color-indigo-40);\n    --wa-color-success-30: var(--wa-color-indigo-30);\n    --wa-color-success-20: var(--wa-color-indigo-20);\n    --wa-color-success-10: var(--wa-color-indigo-10);\n    --wa-color-success-05: var(--wa-color-indigo-05);\n    --wa-color-success: var(--wa-color-indigo);\n    --wa-color-success-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-success-purple {\n    --wa-color-success-95: var(--wa-color-purple-95);\n    --wa-color-success-90: var(--wa-color-purple-90);\n    --wa-color-success-80: var(--wa-color-purple-80);\n    --wa-color-success-70: var(--wa-color-purple-70);\n    --wa-color-success-60: var(--wa-color-purple-60);\n    --wa-color-success-50: var(--wa-color-purple-50);\n    --wa-color-success-40: var(--wa-color-purple-40);\n    --wa-color-success-30: var(--wa-color-purple-30);\n    --wa-color-success-20: var(--wa-color-purple-20);\n    --wa-color-success-10: var(--wa-color-purple-10);\n    --wa-color-success-05: var(--wa-color-purple-05);\n    --wa-color-success: var(--wa-color-purple);\n    --wa-color-success-on: var(--wa-color-purple-on);\n  }\n\n  .wa-success-pink {\n    --wa-color-success-95: var(--wa-color-pink-95);\n    --wa-color-success-90: var(--wa-color-pink-90);\n    --wa-color-success-80: var(--wa-color-pink-80);\n    --wa-color-success-70: var(--wa-color-pink-70);\n    --wa-color-success-60: var(--wa-color-pink-60);\n    --wa-color-success-50: var(--wa-color-pink-50);\n    --wa-color-success-40: var(--wa-color-pink-40);\n    --wa-color-success-30: var(--wa-color-pink-30);\n    --wa-color-success-20: var(--wa-color-pink-20);\n    --wa-color-success-10: var(--wa-color-pink-10);\n    --wa-color-success-05: var(--wa-color-pink-05);\n    --wa-color-success: var(--wa-color-pink);\n    --wa-color-success-on: var(--wa-color-pink-on);\n  }\n\n  .wa-success-gray {\n    --wa-color-success-95: var(--wa-color-gray-95);\n    --wa-color-success-90: var(--wa-color-gray-90);\n    --wa-color-success-80: var(--wa-color-gray-80);\n    --wa-color-success-70: var(--wa-color-gray-70);\n    --wa-color-success-60: var(--wa-color-gray-60);\n    --wa-color-success-50: var(--wa-color-gray-50);\n    --wa-color-success-40: var(--wa-color-gray-40);\n    --wa-color-success-30: var(--wa-color-gray-30);\n    --wa-color-success-20: var(--wa-color-gray-20);\n    --wa-color-success-10: var(--wa-color-gray-10);\n    --wa-color-success-05: var(--wa-color-gray-05);\n    --wa-color-success: var(--wa-color-gray);\n    --wa-color-success-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-warning-yellow {\n    --wa-color-warning-95: var(--wa-color-yellow-95);\n    --wa-color-warning-90: var(--wa-color-yellow-90);\n    --wa-color-warning-80: var(--wa-color-yellow-80);\n    --wa-color-warning-70: var(--wa-color-yellow-70);\n    --wa-color-warning-60: var(--wa-color-yellow-60);\n    --wa-color-warning-50: var(--wa-color-yellow-50);\n    --wa-color-warning-40: var(--wa-color-yellow-40);\n    --wa-color-warning-30: var(--wa-color-yellow-30);\n    --wa-color-warning-20: var(--wa-color-yellow-20);\n    --wa-color-warning-10: var(--wa-color-yellow-10);\n    --wa-color-warning-05: var(--wa-color-yellow-05);\n    --wa-color-warning: var(--wa-color-yellow);\n    --wa-color-warning-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-warning-red {\n    --wa-color-warning-95: var(--wa-color-red-95);\n    --wa-color-warning-90: var(--wa-color-red-90);\n    --wa-color-warning-80: var(--wa-color-red-80);\n    --wa-color-warning-70: var(--wa-color-red-70);\n    --wa-color-warning-60: var(--wa-color-red-60);\n    --wa-color-warning-50: var(--wa-color-red-50);\n    --wa-color-warning-40: var(--wa-color-red-40);\n    --wa-color-warning-30: var(--wa-color-red-30);\n    --wa-color-warning-20: var(--wa-color-red-20);\n    --wa-color-warning-10: var(--wa-color-red-10);\n    --wa-color-warning-05: var(--wa-color-red-05);\n    --wa-color-warning: var(--wa-color-red);\n    --wa-color-warning-on: var(--wa-color-red-on);\n  }\n\n  .wa-warning-orange {\n    --wa-color-warning-95: var(--wa-color-orange-95);\n    --wa-color-warning-90: var(--wa-color-orange-90);\n    --wa-color-warning-80: var(--wa-color-orange-80);\n    --wa-color-warning-70: var(--wa-color-orange-70);\n    --wa-color-warning-60: var(--wa-color-orange-60);\n    --wa-color-warning-50: var(--wa-color-orange-50);\n    --wa-color-warning-40: var(--wa-color-orange-40);\n    --wa-color-warning-30: var(--wa-color-orange-30);\n    --wa-color-warning-20: var(--wa-color-orange-20);\n    --wa-color-warning-10: var(--wa-color-orange-10);\n    --wa-color-warning-05: var(--wa-color-orange-05);\n    --wa-color-warning: var(--wa-color-orange);\n    --wa-color-warning-on: var(--wa-color-orange-on);\n  }\n\n  .wa-warning-green {\n    --wa-color-warning-95: var(--wa-color-green-95);\n    --wa-color-warning-90: var(--wa-color-green-90);\n    --wa-color-warning-80: var(--wa-color-green-80);\n    --wa-color-warning-70: var(--wa-color-green-70);\n    --wa-color-warning-60: var(--wa-color-green-60);\n    --wa-color-warning-50: var(--wa-color-green-50);\n    --wa-color-warning-40: var(--wa-color-green-40);\n    --wa-color-warning-30: var(--wa-color-green-30);\n    --wa-color-warning-20: var(--wa-color-green-20);\n    --wa-color-warning-10: var(--wa-color-green-10);\n    --wa-color-warning-05: var(--wa-color-green-05);\n    --wa-color-warning: var(--wa-color-green);\n    --wa-color-warning-on: var(--wa-color-green-on);\n  }\n\n  .wa-warning-cyan {\n    --wa-color-warning-95: var(--wa-color-cyan-95);\n    --wa-color-warning-90: var(--wa-color-cyan-90);\n    --wa-color-warning-80: var(--wa-color-cyan-80);\n    --wa-color-warning-70: var(--wa-color-cyan-70);\n    --wa-color-warning-60: var(--wa-color-cyan-60);\n    --wa-color-warning-50: var(--wa-color-cyan-50);\n    --wa-color-warning-40: var(--wa-color-cyan-40);\n    --wa-color-warning-30: var(--wa-color-cyan-30);\n    --wa-color-warning-20: var(--wa-color-cyan-20);\n    --wa-color-warning-10: var(--wa-color-cyan-10);\n    --wa-color-warning-05: var(--wa-color-cyan-05);\n    --wa-color-warning: var(--wa-color-cyan);\n    --wa-color-warning-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-warning-blue {\n    --wa-color-warning-95: var(--wa-color-blue-95);\n    --wa-color-warning-90: var(--wa-color-blue-90);\n    --wa-color-warning-80: var(--wa-color-blue-80);\n    --wa-color-warning-70: var(--wa-color-blue-70);\n    --wa-color-warning-60: var(--wa-color-blue-60);\n    --wa-color-warning-50: var(--wa-color-blue-50);\n    --wa-color-warning-40: var(--wa-color-blue-40);\n    --wa-color-warning-30: var(--wa-color-blue-30);\n    --wa-color-warning-20: var(--wa-color-blue-20);\n    --wa-color-warning-10: var(--wa-color-blue-10);\n    --wa-color-warning-05: var(--wa-color-blue-05);\n    --wa-color-warning: var(--wa-color-blue);\n    --wa-color-warning-on: var(--wa-color-blue-on);\n  }\n\n  .wa-warning-indigo {\n    --wa-color-warning-95: var(--wa-color-indigo-95);\n    --wa-color-warning-90: var(--wa-color-indigo-90);\n    --wa-color-warning-80: var(--wa-color-indigo-80);\n    --wa-color-warning-70: var(--wa-color-indigo-70);\n    --wa-color-warning-60: var(--wa-color-indigo-60);\n    --wa-color-warning-50: var(--wa-color-indigo-50);\n    --wa-color-warning-40: var(--wa-color-indigo-40);\n    --wa-color-warning-30: var(--wa-color-indigo-30);\n    --wa-color-warning-20: var(--wa-color-indigo-20);\n    --wa-color-warning-10: var(--wa-color-indigo-10);\n    --wa-color-warning-05: var(--wa-color-indigo-05);\n    --wa-color-warning: var(--wa-color-indigo);\n    --wa-color-warning-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-warning-purple {\n    --wa-color-warning-95: var(--wa-color-purple-95);\n    --wa-color-warning-90: var(--wa-color-purple-90);\n    --wa-color-warning-80: var(--wa-color-purple-80);\n    --wa-color-warning-70: var(--wa-color-purple-70);\n    --wa-color-warning-60: var(--wa-color-purple-60);\n    --wa-color-warning-50: var(--wa-color-purple-50);\n    --wa-color-warning-40: var(--wa-color-purple-40);\n    --wa-color-warning-30: var(--wa-color-purple-30);\n    --wa-color-warning-20: var(--wa-color-purple-20);\n    --wa-color-warning-10: var(--wa-color-purple-10);\n    --wa-color-warning-05: var(--wa-color-purple-05);\n    --wa-color-warning: var(--wa-color-purple);\n    --wa-color-warning-on: var(--wa-color-purple-on);\n  }\n\n  .wa-warning-pink {\n    --wa-color-warning-95: var(--wa-color-pink-95);\n    --wa-color-warning-90: var(--wa-color-pink-90);\n    --wa-color-warning-80: var(--wa-color-pink-80);\n    --wa-color-warning-70: var(--wa-color-pink-70);\n    --wa-color-warning-60: var(--wa-color-pink-60);\n    --wa-color-warning-50: var(--wa-color-pink-50);\n    --wa-color-warning-40: var(--wa-color-pink-40);\n    --wa-color-warning-30: var(--wa-color-pink-30);\n    --wa-color-warning-20: var(--wa-color-pink-20);\n    --wa-color-warning-10: var(--wa-color-pink-10);\n    --wa-color-warning-05: var(--wa-color-pink-05);\n    --wa-color-warning: var(--wa-color-pink);\n    --wa-color-warning-on: var(--wa-color-pink-on);\n  }\n\n  .wa-warning-gray {\n    --wa-color-warning-95: var(--wa-color-gray-95);\n    --wa-color-warning-90: var(--wa-color-gray-90);\n    --wa-color-warning-80: var(--wa-color-gray-80);\n    --wa-color-warning-70: var(--wa-color-gray-70);\n    --wa-color-warning-60: var(--wa-color-gray-60);\n    --wa-color-warning-50: var(--wa-color-gray-50);\n    --wa-color-warning-40: var(--wa-color-gray-40);\n    --wa-color-warning-30: var(--wa-color-gray-30);\n    --wa-color-warning-20: var(--wa-color-gray-20);\n    --wa-color-warning-10: var(--wa-color-gray-10);\n    --wa-color-warning-05: var(--wa-color-gray-05);\n    --wa-color-warning: var(--wa-color-gray);\n    --wa-color-warning-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-danger-red {\n    --wa-color-danger-95: var(--wa-color-red-95);\n    --wa-color-danger-90: var(--wa-color-red-90);\n    --wa-color-danger-80: var(--wa-color-red-80);\n    --wa-color-danger-70: var(--wa-color-red-70);\n    --wa-color-danger-60: var(--wa-color-red-60);\n    --wa-color-danger-50: var(--wa-color-red-50);\n    --wa-color-danger-40: var(--wa-color-red-40);\n    --wa-color-danger-30: var(--wa-color-red-30);\n    --wa-color-danger-20: var(--wa-color-red-20);\n    --wa-color-danger-10: var(--wa-color-red-10);\n    --wa-color-danger-05: var(--wa-color-red-05);\n    --wa-color-danger: var(--wa-color-red);\n    --wa-color-danger-on: var(--wa-color-red-on);\n  }\n\n  .wa-danger-orange {\n    --wa-color-danger-95: var(--wa-color-orange-95);\n    --wa-color-danger-90: var(--wa-color-orange-90);\n    --wa-color-danger-80: var(--wa-color-orange-80);\n    --wa-color-danger-70: var(--wa-color-orange-70);\n    --wa-color-danger-60: var(--wa-color-orange-60);\n    --wa-color-danger-50: var(--wa-color-orange-50);\n    --wa-color-danger-40: var(--wa-color-orange-40);\n    --wa-color-danger-30: var(--wa-color-orange-30);\n    --wa-color-danger-20: var(--wa-color-orange-20);\n    --wa-color-danger-10: var(--wa-color-orange-10);\n    --wa-color-danger-05: var(--wa-color-orange-05);\n    --wa-color-danger: var(--wa-color-orange);\n    --wa-color-danger-on: var(--wa-color-orange-on);\n  }\n\n  .wa-danger-yellow {\n    --wa-color-danger-95: var(--wa-color-yellow-95);\n    --wa-color-danger-90: var(--wa-color-yellow-90);\n    --wa-color-danger-80: var(--wa-color-yellow-80);\n    --wa-color-danger-70: var(--wa-color-yellow-70);\n    --wa-color-danger-60: var(--wa-color-yellow-60);\n    --wa-color-danger-50: var(--wa-color-yellow-50);\n    --wa-color-danger-40: var(--wa-color-yellow-40);\n    --wa-color-danger-30: var(--wa-color-yellow-30);\n    --wa-color-danger-20: var(--wa-color-yellow-20);\n    --wa-color-danger-10: var(--wa-color-yellow-10);\n    --wa-color-danger-05: var(--wa-color-yellow-05);\n    --wa-color-danger: var(--wa-color-yellow);\n    --wa-color-danger-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-danger-green {\n    --wa-color-danger-95: var(--wa-color-green-95);\n    --wa-color-danger-90: var(--wa-color-green-90);\n    --wa-color-danger-80: var(--wa-color-green-80);\n    --wa-color-danger-70: var(--wa-color-green-70);\n    --wa-color-danger-60: var(--wa-color-green-60);\n    --wa-color-danger-50: var(--wa-color-green-50);\n    --wa-color-danger-40: var(--wa-color-green-40);\n    --wa-color-danger-30: var(--wa-color-green-30);\n    --wa-color-danger-20: var(--wa-color-green-20);\n    --wa-color-danger-10: var(--wa-color-green-10);\n    --wa-color-danger-05: var(--wa-color-green-05);\n    --wa-color-danger: var(--wa-color-green);\n    --wa-color-danger-on: var(--wa-color-green-on);\n  }\n\n  .wa-danger-cyan {\n    --wa-color-danger-95: var(--wa-color-cyan-95);\n    --wa-color-danger-90: var(--wa-color-cyan-90);\n    --wa-color-danger-80: var(--wa-color-cyan-80);\n    --wa-color-danger-70: var(--wa-color-cyan-70);\n    --wa-color-danger-60: var(--wa-color-cyan-60);\n    --wa-color-danger-50: var(--wa-color-cyan-50);\n    --wa-color-danger-40: var(--wa-color-cyan-40);\n    --wa-color-danger-30: var(--wa-color-cyan-30);\n    --wa-color-danger-20: var(--wa-color-cyan-20);\n    --wa-color-danger-10: var(--wa-color-cyan-10);\n    --wa-color-danger-05: var(--wa-color-cyan-05);\n    --wa-color-danger: var(--wa-color-cyan);\n    --wa-color-danger-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-danger-blue {\n    --wa-color-danger-95: var(--wa-color-blue-95);\n    --wa-color-danger-90: var(--wa-color-blue-90);\n    --wa-color-danger-80: var(--wa-color-blue-80);\n    --wa-color-danger-70: var(--wa-color-blue-70);\n    --wa-color-danger-60: var(--wa-color-blue-60);\n    --wa-color-danger-50: var(--wa-color-blue-50);\n    --wa-color-danger-40: var(--wa-color-blue-40);\n    --wa-color-danger-30: var(--wa-color-blue-30);\n    --wa-color-danger-20: var(--wa-color-blue-20);\n    --wa-color-danger-10: var(--wa-color-blue-10);\n    --wa-color-danger-05: var(--wa-color-blue-05);\n    --wa-color-danger: var(--wa-color-blue);\n    --wa-color-danger-on: var(--wa-color-blue-on);\n  }\n\n  .wa-danger-indigo {\n    --wa-color-danger-95: var(--wa-color-indigo-95);\n    --wa-color-danger-90: var(--wa-color-indigo-90);\n    --wa-color-danger-80: var(--wa-color-indigo-80);\n    --wa-color-danger-70: var(--wa-color-indigo-70);\n    --wa-color-danger-60: var(--wa-color-indigo-60);\n    --wa-color-danger-50: var(--wa-color-indigo-50);\n    --wa-color-danger-40: var(--wa-color-indigo-40);\n    --wa-color-danger-30: var(--wa-color-indigo-30);\n    --wa-color-danger-20: var(--wa-color-indigo-20);\n    --wa-color-danger-10: var(--wa-color-indigo-10);\n    --wa-color-danger-05: var(--wa-color-indigo-05);\n    --wa-color-danger: var(--wa-color-indigo);\n    --wa-color-danger-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-danger-purple {\n    --wa-color-danger-95: var(--wa-color-purple-95);\n    --wa-color-danger-90: var(--wa-color-purple-90);\n    --wa-color-danger-80: var(--wa-color-purple-80);\n    --wa-color-danger-70: var(--wa-color-purple-70);\n    --wa-color-danger-60: var(--wa-color-purple-60);\n    --wa-color-danger-50: var(--wa-color-purple-50);\n    --wa-color-danger-40: var(--wa-color-purple-40);\n    --wa-color-danger-30: var(--wa-color-purple-30);\n    --wa-color-danger-20: var(--wa-color-purple-20);\n    --wa-color-danger-10: var(--wa-color-purple-10);\n    --wa-color-danger-05: var(--wa-color-purple-05);\n    --wa-color-danger: var(--wa-color-purple);\n    --wa-color-danger-on: var(--wa-color-purple-on);\n  }\n\n  .wa-danger-pink {\n    --wa-color-danger-95: var(--wa-color-pink-95);\n    --wa-color-danger-90: var(--wa-color-pink-90);\n    --wa-color-danger-80: var(--wa-color-pink-80);\n    --wa-color-danger-70: var(--wa-color-pink-70);\n    --wa-color-danger-60: var(--wa-color-pink-60);\n    --wa-color-danger-50: var(--wa-color-pink-50);\n    --wa-color-danger-40: var(--wa-color-pink-40);\n    --wa-color-danger-30: var(--wa-color-pink-30);\n    --wa-color-danger-20: var(--wa-color-pink-20);\n    --wa-color-danger-10: var(--wa-color-pink-10);\n    --wa-color-danger-05: var(--wa-color-pink-05);\n    --wa-color-danger: var(--wa-color-pink);\n    --wa-color-danger-on: var(--wa-color-pink-on);\n  }\n\n  .wa-danger-gray {\n    --wa-color-danger-95: var(--wa-color-gray-95);\n    --wa-color-danger-90: var(--wa-color-gray-90);\n    --wa-color-danger-80: var(--wa-color-gray-80);\n    --wa-color-danger-70: var(--wa-color-gray-70);\n    --wa-color-danger-60: var(--wa-color-gray-60);\n    --wa-color-danger-50: var(--wa-color-gray-50);\n    --wa-color-danger-40: var(--wa-color-gray-40);\n    --wa-color-danger-30: var(--wa-color-gray-30);\n    --wa-color-danger-20: var(--wa-color-gray-20);\n    --wa-color-danger-10: var(--wa-color-gray-10);\n    --wa-color-danger-05: var(--wa-color-gray-05);\n    --wa-color-danger: var(--wa-color-gray);\n    --wa-color-danger-on: var(--wa-color-gray-on);\n  }\n}\n\n\n\n@layer wa-color-palette {\n  :where(:root),\n  .wa-palette-default {\n    --wa-color-red-95: #fff0ef /* oklch(96.667% 0.01632 22.08) */;\n    --wa-color-red-90: #ffdedc /* oklch(92.735% 0.03679 21.966) */;\n    --wa-color-red-80: #ffb8b6 /* oklch(84.803% 0.08289 20.771) */;\n    --wa-color-red-70: #fd8f90 /* oklch(76.801% 0.13322 20.052) */;\n    --wa-color-red-60: #f3676c /* oklch(68.914% 0.17256 20.646) */;\n    --wa-color-red-50: #dc3146 /* oklch(58.857% 0.20512 20.223) */;\n    --wa-color-red-40: #b30532 /* oklch(48.737% 0.19311 18.413) */;\n    --wa-color-red-30: #8a132c /* oklch(41.17% 0.1512 16.771) */;\n    --wa-color-red-20: #631323 /* oklch(33.297% 0.11208 14.847) */;\n    --wa-color-red-10: #3e0913 /* oklch(24.329% 0.08074 15.207) */;\n    --wa-color-red-05: #2a040b /* oklch(19.016% 0.06394 13.71) */;\n    --wa-color-red: var(--wa-color-red-50);\n    --wa-color-red-key: 50;\n\n    --wa-color-orange-95: #fff0e6 /* oklch(96.426% 0.02105 56.133) */;\n    --wa-color-orange-90: #ffdfca /* oklch(92.468% 0.04529 55.325) */;\n    --wa-color-orange-80: #ffbb94 /* oklch(84.588% 0.09454 50.876) */;\n    --wa-color-orange-70: #ff9266 /* oklch(76.744% 0.14429 42.309) */;\n    --wa-color-orange-60: #f46a45 /* oklch(68.848% 0.17805 35.951) */;\n    --wa-color-orange-50: #cd491c /* oklch(58.195% 0.17597 37.577) */;\n    --wa-color-orange-40: #9f3501 /* oklch(47.889% 0.14981 39.957) */;\n    --wa-color-orange-30: #802700 /* oklch(40.637% 0.1298 39.149) */;\n    --wa-color-orange-20: #601b00 /* oklch(33.123% 0.10587 39.117) */;\n    --wa-color-orange-10: #3c0d00 /* oklch(24.043% 0.07768 38.607) */;\n    --wa-color-orange-05: #280600 /* oklch(18.644% 0.0607 38.252) */;\n    --wa-color-orange: var(--wa-color-orange-60);\n    --wa-color-orange-key: 60;\n\n    --wa-color-yellow-95: #fef3cd /* oklch(96.322% 0.05069 93.748) */;\n    --wa-color-yellow-90: #ffe495 /* oklch(92.377% 0.10246 91.296) */;\n    --wa-color-yellow-80: #fac22b /* oklch(84.185% 0.16263 85.991) */;\n    --wa-color-yellow-70: #ef9d00 /* oklch(75.949% 0.16251 72.13) */;\n    --wa-color-yellow-60: #da7e00 /* oklch(67.883% 0.15587 62.246) */;\n    --wa-color-yellow-50: #b45f04 /* oklch(57.449% 0.13836 56.585) */;\n    --wa-color-yellow-40: #8c4602 /* oklch(47.319% 0.11666 54.663) */;\n    --wa-color-yellow-30: #6f3601 /* oklch(40.012% 0.09892 54.555) */;\n    --wa-color-yellow-20: #532600 /* oklch(32.518% 0.08157 53.927) */;\n    --wa-color-yellow-10: #331600 /* oklch(23.846% 0.05834 56.02) */;\n    --wa-color-yellow-05: #220c00 /* oklch(18.585% 0.04625 54.588) */;\n    --wa-color-yellow: var(--wa-color-yellow-80);\n    --wa-color-yellow-key: 80;\n\n    --wa-color-green-95: #e3f9e3 /* oklch(96.006% 0.03715 145.28) */;\n    --wa-color-green-90: #c2f2c1 /* oklch(91.494% 0.08233 144.35) */;\n    --wa-color-green-80: #93da98 /* oklch(82.445% 0.11601 146.11) */;\n    --wa-color-green-70: #5dc36f /* oklch(73.554% 0.15308 147.59) */;\n    --wa-color-green-60: #00ac49 /* oklch(64.982% 0.18414 148.83) */;\n    --wa-color-green-50: #00883c /* oklch(54.765% 0.15165 149.77) */;\n    --wa-color-green-40: #036730 /* oklch(45.004% 0.11963 151.06) */;\n    --wa-color-green-30: #0a5027 /* oklch(37.988% 0.09487 151.62) */;\n    --wa-color-green-20: #0a3a1d /* oklch(30.876% 0.07202 152.23) */;\n    --wa-color-green-10: #052310 /* oklch(22.767% 0.05128 152.45) */;\n    --wa-color-green-05: #031608 /* oklch(17.84% 0.03957 151.36) */;\n    --wa-color-green: var(--wa-color-green-60);\n    --wa-color-green-key: 60;\n\n    --wa-color-cyan-95: #e3f6fb /* oklch(96.063% 0.02111 215.26) */;\n    --wa-color-cyan-90: #c5ecf7 /* oklch(91.881% 0.04314 216.7) */;\n    --wa-color-cyan-80: #7fd6ec /* oklch(82.906% 0.08934 215.86) */;\n    --wa-color-cyan-70: #2fbedc /* oklch(74.18% 0.12169 215.86) */;\n    --wa-color-cyan-60: #00a3c0 /* oklch(65.939% 0.11738 216.42) */;\n    --wa-color-cyan-50: #078098 /* oklch(55.379% 0.09774 217.32) */;\n    --wa-color-cyan-40: #026274 /* oklch(45.735% 0.08074 216.18) */;\n    --wa-color-cyan-30: #014c5b /* oklch(38.419% 0.06817 216.88) */;\n    --wa-color-cyan-20: #003844 /* oklch(31.427% 0.05624 217.32) */;\n    --wa-color-cyan-10: #002129 /* oklch(22.851% 0.04085 217.17) */;\n    --wa-color-cyan-05: #00151b /* oklch(18.055% 0.03231 217.31) */;\n    --wa-color-cyan: var(--wa-color-cyan-70);\n    --wa-color-cyan-key: 70;\n\n    --wa-color-blue-95: #e8f3ff /* oklch(95.944% 0.01996 250.38) */;\n    --wa-color-blue-90: #d1e8ff /* oklch(92.121% 0.03985 248.26) */;\n    --wa-color-blue-80: #9fceff /* oklch(83.572% 0.08502 249.92) */;\n    --wa-color-blue-70: #6eb3ff /* oklch(75.256% 0.1308 252.03) */;\n    --wa-color-blue-60: #3e96ff /* oklch(67.196% 0.17661 254.97) */;\n    --wa-color-blue-50: #0071ec /* oklch(56.972% 0.20461 257.29) */;\n    --wa-color-blue-40: #0053c0 /* oklch(47.175% 0.1846 259.19) */;\n    --wa-color-blue-30: #003f9c /* oklch(39.805% 0.16217 259.98) */;\n    --wa-color-blue-20: #002d77 /* oklch(32.436% 0.1349 260.35) */;\n    --wa-color-blue-10: #001a4e /* oklch(23.965% 0.10161 260.68) */;\n    --wa-color-blue-05: #000f35 /* oklch(18.565% 0.07904 260.75) */;\n    --wa-color-blue: var(--wa-color-blue-50);\n    --wa-color-blue-key: 50;\n\n    --wa-color-indigo-95: #f0f2ff /* oklch(96.341% 0.0175 279.06) */;\n    --wa-color-indigo-90: #dfe5ff /* oklch(92.527% 0.0359 275.35) */;\n    --wa-color-indigo-80: #bcc7ff /* oklch(84.053% 0.07938 275.91) */;\n    --wa-color-indigo-70: #9da9ff /* oklch(75.941% 0.12411 276.95) */;\n    --wa-color-indigo-60: #808aff /* oklch(67.977% 0.17065 277.16) */;\n    --wa-color-indigo-50: #6163f2 /* oklch(57.967% 0.20943 277.04) */;\n    --wa-color-indigo-40: #4945cb /* oklch(48.145% 0.20042 277.08) */;\n    --wa-color-indigo-30: #3933a7 /* oklch(40.844% 0.17864 277.26) */;\n    --wa-color-indigo-20: #292381 /* oklch(33.362% 0.15096 277.21) */;\n    --wa-color-indigo-10: #181255 /* oklch(24.534% 0.11483 277.73) */;\n    --wa-color-indigo-05: #0d0a3a /* oklch(19.092% 0.08825 276.76) */;\n    --wa-color-indigo: var(--wa-color-indigo-50);\n    --wa-color-indigo-key: 50;\n\n    --wa-color-purple-95: #f7f0ff /* oklch(96.49% 0.02119 306.84) */;\n    --wa-color-purple-90: #eedfff /* oklch(92.531% 0.04569 306.6) */;\n    --wa-color-purple-80: #ddbdff /* oklch(84.781% 0.09615 306.52) */;\n    --wa-color-purple-70: #ca99ff /* oklch(76.728% 0.14961 305.27) */;\n    --wa-color-purple-60: #b678f5 /* oklch(68.906% 0.1844 304.96) */;\n    --wa-color-purple-50: #9951db /* oklch(58.603% 0.20465 304.87) */;\n    --wa-color-purple-40: #7936b3 /* oklch(48.641% 0.18949 304.79) */;\n    --wa-color-purple-30: #612692 /* oklch(41.23% 0.16836 304.92) */;\n    --wa-color-purple-20: #491870 /* oklch(33.663% 0.14258 305.12) */;\n    --wa-color-purple-10: #2d0b48 /* oklch(24.637% 0.10612 304.95) */;\n    --wa-color-purple-05: #1e0532 /* oklch(19.393% 0.08461 305.26) */;\n    --wa-color-purple: var(--wa-color-purple-50);\n    --wa-color-purple-key: 50;\n\n    --wa-color-pink-95: #feeff9 /* oklch(96.676% 0.02074 337.69) */;\n    --wa-color-pink-90: #feddf0 /* oklch(93.026% 0.04388 342.45) */;\n    --wa-color-pink-80: #fcb5d8 /* oklch(84.928% 0.09304 348.21) */;\n    --wa-color-pink-70: #f78dbf /* oklch(77.058% 0.14016 351.19) */;\n    --wa-color-pink-60: #e66ba3 /* oklch(69.067% 0.16347 353.69) */;\n    --wa-color-pink-50: #c84382 /* oklch(58.707% 0.17826 354.82) */;\n    --wa-color-pink-40: #9e2a6c /* oklch(48.603% 0.16439 350.08) */;\n    --wa-color-pink-30: #7d1e58 /* oklch(41.017% 0.14211 347.77) */;\n    --wa-color-pink-20: #5e1342 /* oklch(33.442% 0.11808 347.01) */;\n    --wa-color-pink-10: #3c0828 /* oklch(24.601% 0.08768 347.8) */;\n    --wa-color-pink-05: #28041a /* oklch(19.199% 0.06799 346.97) */;\n    --wa-color-pink: var(--wa-color-pink-50);\n    --wa-color-pink-key: 50;\n\n    --wa-color-gray-95: #f1f2f3 /* oklch(96.067% 0.00172 247.84) */;\n    --wa-color-gray-90: #e4e5e9 /* oklch(92.228% 0.0055 274.96) */;\n    --wa-color-gray-80: #c7c9d0 /* oklch(83.641% 0.00994 273.33) */;\n    --wa-color-gray-70: #abaeb9 /* oklch(75.183% 0.01604 273.78) */;\n    --wa-color-gray-60: #9194a2 /* oklch(66.863% 0.02088 276.18) */;\n    --wa-color-gray-50: #717584 /* oklch(56.418% 0.02359 273.77) */;\n    --wa-color-gray-40: #545868 /* oklch(46.281% 0.02644 274.26) */;\n    --wa-color-gray-30: #424554 /* oklch(39.355% 0.02564 276.27) */;\n    --wa-color-gray-20: #2f323f /* oklch(31.97% 0.02354 274.82) */;\n    --wa-color-gray-10: #1b1d26 /* oklch(23.277% 0.01762 275.14) */;\n    --wa-color-gray-05: #101219 /* oklch(18.342% 0.01472 272.42) */;\n    --wa-color-gray: var(--wa-color-gray-40);\n    --wa-color-gray-key: 40;\n  }\n}\n\n\n@layer wa-theme {\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark .wa-invert,\n  .wa-light .wa-theme-default,\n  .wa-dark .wa-theme-default.wa-invert,\n  .wa-dark .wa-theme-default .wa-invert {\n    /* #region Colors (Light) ~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: light;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: white;\n    --wa-color-surface-default: white;\n    --wa-color-surface-lowered: var(--wa-color-neutral-95);\n    --wa-color-surface-border: var(--wa-color-neutral-90);\n\n    --wa-color-text-normal: var(--wa-color-neutral-10);\n    --wa-color-text-quiet: var(--wa-color-neutral-40);\n    --wa-color-text-link: var(--wa-color-brand-40);\n\n    --wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 10%;\n    --wa-color-mix-active: black 20%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-95);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-90);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-90);\n    --wa-color-brand-border-normal: var(--wa-color-brand-80);\n    --wa-color-brand-border-loud: var(--wa-color-brand-60);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-40);\n    --wa-color-brand-on-normal: var(--wa-color-brand-30);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-95);\n    --wa-color-success-fill-normal: var(--wa-color-success-90);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-90);\n    --wa-color-success-border-normal: var(--wa-color-success-80);\n    --wa-color-success-border-loud: var(--wa-color-success-60);\n    --wa-color-success-on-quiet: var(--wa-color-success-40);\n    --wa-color-success-on-normal: var(--wa-color-success-30);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-95);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-90);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-90);\n    --wa-color-warning-border-normal: var(--wa-color-warning-80);\n    --wa-color-warning-border-loud: var(--wa-color-warning-60);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-40);\n    --wa-color-warning-on-normal: var(--wa-color-warning-30);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-95);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-90);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-90);\n    --wa-color-danger-border-normal: var(--wa-color-danger-80);\n    --wa-color-danger-border-loud: var(--wa-color-danger-60);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-40);\n    --wa-color-danger-on-normal: var(--wa-color-danger-30);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-90);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-80);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-on-loud: white;\n    /* #endregion */\n  }\n\n  .wa-dark,\n  .wa-invert,\n  .wa-dark .wa-theme-default,\n  .wa-light .wa-theme-default.wa-invert,\n  .wa-light .wa-theme-default .wa-invert {\n    /* #region Colors (Dark) ~~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: dark;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: var(--wa-color-neutral-10);\n    --wa-color-surface-default: var(--wa-color-neutral-05);\n    --wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);\n    --wa-color-surface-border: var(--wa-color-neutral-20);\n\n    --wa-color-text-normal: var(--wa-color-neutral-95);\n    --wa-color-text-quiet: var(--wa-color-neutral-60);\n    --wa-color-text-link: var(--wa-color-brand-70);\n\n    --wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 8%;\n    --wa-color-mix-active: black 16%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-10);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-20);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-20);\n    --wa-color-brand-border-normal: var(--wa-color-brand-30);\n    --wa-color-brand-border-loud: var(--wa-color-brand-40);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-60);\n    --wa-color-brand-on-normal: var(--wa-color-brand-70);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-10);\n    --wa-color-success-fill-normal: var(--wa-color-success-20);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-20);\n    --wa-color-success-border-normal: var(--wa-color-success-30);\n    --wa-color-success-border-loud: var(--wa-color-success-40);\n    --wa-color-success-on-quiet: var(--wa-color-success-60);\n    --wa-color-success-on-normal: var(--wa-color-success-70);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-10);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-20);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-20);\n    --wa-color-warning-border-normal: var(--wa-color-warning-30);\n    --wa-color-warning-border-loud: var(--wa-color-warning-40);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-60);\n    --wa-color-warning-on-normal: var(--wa-color-warning-70);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-10);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-20);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-20);\n    --wa-color-danger-border-normal: var(--wa-color-danger-30);\n    --wa-color-danger-border-loud: var(--wa-color-danger-40);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-60);\n    --wa-color-danger-on-normal: var(--wa-color-danger-70);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-20);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-70);\n    --wa-color-neutral-on-loud: var(--wa-color-neutral-05);\n    /* #endregion */\n  }\n\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark,\n  .wa-invert {\n    font-family: var(--wa-font-family-body);\n\n    /* #region Fonts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-font-family-body: ui-sans-serif, system-ui, sans-serif;\n    --wa-font-family-heading: var(--wa-font-family-body);\n    --wa-font-family-code: ui-monospace, monospace;\n    --wa-font-family-longform: ui-serif, serif;\n\n    /* Font sizes use a ratio of 1.125 to scale sizes proportionally.\n     * For larger font sizes, each size is twice 1.125x larger to maximize impact.\n     * Each value uses `rem` units and is rounded to the nearest whole pixel when rendered. */\n    --wa-font-size-scale: 1;\n    --wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px); /* 11px */\n    --wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px); /* 12px */\n    --wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px); /* 14px */\n    --wa-font-size-m: calc(1rem * var(--wa-font-size-scale)); /* 16px */\n    --wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px); /* 20px */\n    --wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px); /* 25px */\n    --wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px); /* 32px */\n    --wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px); /* 41px */\n    --wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px); /* 52px */\n\n    --wa-font-size-smaller: round(calc(1em / 1.125), 1px);\n    --wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);\n\n    --wa-font-weight-light: 300;\n    --wa-font-weight-normal: 400;\n    --wa-font-weight-semibold: 500;\n    --wa-font-weight-bold: 600;\n\n    --wa-font-weight-body: var(--wa-font-weight-normal);\n    --wa-font-weight-heading: var(--wa-font-weight-bold);\n    --wa-font-weight-code: var(--wa-font-weight-normal);\n    --wa-font-weight-longform: var(--wa-font-weight-normal);\n    --wa-font-weight-action: var(--wa-font-weight-semibold);\n\n    --wa-line-height-condensed: 1.2;\n    --wa-line-height-normal: 1.6;\n    --wa-line-height-expanded: 2;\n\n    --wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;\n    --wa-link-decoration-hover: underline;\n    /* #endregion */\n\n    /* #region Space ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-space-scale: 1;\n    --wa-space-3xs: calc(var(--wa-space-scale) * 0.125rem); /* 2px */\n    --wa-space-2xs: calc(var(--wa-space-scale) * 0.25rem); /* 4px */\n    --wa-space-xs: calc(var(--wa-space-scale) * 0.5rem); /* 8px */\n    --wa-space-s: calc(var(--wa-space-scale) * 0.75rem); /* 12px */\n    --wa-space-m: calc(var(--wa-space-scale) * 1rem); /* 16px */\n    --wa-space-l: calc(var(--wa-space-scale) * 1.5rem); /* 24px */\n    --wa-space-xl: calc(var(--wa-space-scale) * 2rem); /* 32px */\n    --wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem); /* 40px */\n    --wa-space-3xl: calc(var(--wa-space-scale) * 3rem); /* 48px */\n    --wa-space-4xl: calc(var(--wa-space-scale) * 4rem); /* 64px */\n\n    --wa-content-spacing: var(--wa-space-l);\n    /* #endregion */\n\n    /* #region Borders ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-style: solid;\n\n    --wa-border-width-scale: 1;\n    --wa-border-width-s: calc(var(--wa-border-width-scale) * 0.0625rem);\n    --wa-border-width-m: calc(var(--wa-border-width-scale) * 0.125rem);\n    --wa-border-width-l: calc(var(--wa-border-width-scale) * 0.1875rem);\n    /* #endregion */\n\n    /* #region Rounding ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-radius-scale: 1;\n    --wa-border-radius-s: calc(var(--wa-border-radius-scale) * 0.1875rem);\n    --wa-border-radius-m: calc(var(--wa-border-radius-scale) * 0.375rem);\n    --wa-border-radius-l: calc(var(--wa-border-radius-scale) * 0.75rem);\n\n    --wa-border-radius-pill: 9999px;\n    --wa-border-radius-circle: 50%;\n    --wa-border-radius-square: 0px;\n    /* #endregion */\n\n    /* #region Focus ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-focus-ring-style: solid;\n    --wa-focus-ring-width: 0.1875rem; /* 3px */\n    --wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);\n    --wa-focus-ring-offset: 0.0625rem; /* 1px */\n    /* #endregion */\n\n    /* #region Shadows ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-shadow-offset-x-scale: 0;\n    --wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * 0.125rem);\n    --wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * 0.25rem);\n    --wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * 0.5rem);\n\n    --wa-shadow-offset-y-scale: 1;\n    --wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * 0.125rem);\n    --wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * 0.25rem);\n    --wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * 0.5rem);\n\n    --wa-shadow-blur-scale: 1;\n    --wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * 0.125rem);\n    --wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * 0.25rem);\n    --wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * 0.5rem);\n\n    --wa-shadow-spread-scale: -0.5;\n    --wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * 0.125rem);\n    --wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * 0.25rem);\n    --wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * 0.5rem);\n\n    --wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)\n      var(--wa-shadow-spread-s) var(--wa-color-shadow);\n    --wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)\n      var(--wa-shadow-spread-m) var(--wa-color-shadow);\n    --wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)\n      var(--wa-shadow-spread-l) var(--wa-color-shadow);\n    /* #endregion */\n\n    /* #region Transitions ~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-transition-easing: ease;\n    --wa-transition-slow: 300ms;\n    --wa-transition-normal: 150ms;\n    --wa-transition-fast: 75ms;\n    /* #endregion */\n\n    /* #region Components ~~~~~~~~~~~~~~~~~~~~~~~ */\n    /* Form Controls */\n    --wa-form-control-background-color: var(--wa-color-surface-default);\n\n    --wa-form-control-border-color: var(--wa-color-neutral-border-loud);\n    --wa-form-control-border-style: var(--wa-border-style);\n    --wa-form-control-border-width: var(--wa-border-width-s);\n    --wa-form-control-border-radius: var(--wa-border-radius-m);\n\n    --wa-form-control-activated-color: var(--wa-color-brand-fill-loud);\n\n    --wa-form-control-label-color: var(--wa-color-text-normal);\n    --wa-form-control-label-font-weight: var(--wa-font-weight-semibold);\n    --wa-form-control-label-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-value-color: var(--wa-color-text-normal);\n    --wa-form-control-value-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-value-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-hint-color: var(--wa-color-text-quiet);\n    --wa-form-control-hint-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-hint-line-height: var(--wa-line-height-normal);\n\n    --wa-form-control-placeholder-color: var(--wa-color-gray-50);\n\n    --wa-form-control-required-content: '*';\n    --wa-form-control-required-content-color: inherit;\n    --wa-form-control-required-content-offset: 0.1em;\n\n    --wa-form-control-padding-block: 0.75em;\n    --wa-form-control-padding-inline: 1em;\n    --wa-form-control-height: round(\n      calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),\n      1px\n    );\n    --wa-form-control-toggle-size: round(1.25em, 1px);\n\n    /* Panels */\n    --wa-panel-border-style: var(--wa-border-style);\n    --wa-panel-border-width: var(--wa-border-width-s);\n    --wa-panel-border-radius: var(--wa-border-radius-l);\n\n    /* Tooltips */\n    --wa-tooltip-arrow-size: 0.375rem;\n\n    --wa-tooltip-background-color: var(--wa-color-text-normal);\n\n    --wa-tooltip-border-color: var(--wa-tooltip-background-color);\n    --wa-tooltip-border-style: var(--wa-border-style);\n    --wa-tooltip-border-width: var(--wa-border-width-s);\n    --wa-tooltip-border-radius: var(--wa-border-radius-s);\n\n    --wa-tooltip-content-color: var(--wa-color-surface-default);\n    --wa-tooltip-font-size: var(--wa-font-size-s);\n    --wa-tooltip-line-height: var(--wa-line-height-normal);\n    /* #endregion */\n  }\n}\n\nwa-input[aria-invalid='true']::part(base),\nwa-textarea[aria-invalid='true']::part(base),\nwa-select[aria-invalid='true']::part(combobox) {\n  --error-width: 2px;\n  border-color: var(--wa-color-danger-border-loud);\n  outline-color: var(--wa-color-danger-border-loud);\n\n  border-top-width: var(--error-width) !important;\n  border-left-width: var(--error-width) !important;\n  border-right-width: var(--error-width) !important;\n  border-bottom-width: var(--error-width) !important;\n}\n\n.ir-dialog__footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  width: 100%;\n}\n.dialog__loader-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  min-height: 50px;\n  min-width: 31rem;\n}\n\n.ir__drawer {\n  text-align: left !important;\n}\n\n.ir__drawer::part(header) {\n  border-bottom: 1px solid var(--wa-color-surface-border);\n  padding-bottom: calc(var(--spacing) / 2);\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n}\n.ir__drawer::part(body) {\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n  padding: 0;\n  padding-left: var(--ir-drawer-padding-left, var(--spacing));\n  padding-right: var(--ir-drawer-padding-right, var(--spacing));\n  padding-top: var(--ir-drawer-padding-top, var(--spacing));\n  padding-bottom: var(--ir-drawer-padding-bottom, var(--spacing));\n}\n.ir__drawer::part(footer) {\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n  padding-top: calc(var(--spacing) / 2);\n  border-top: 1px solid var(--wa-color-surface-border);\n}\n.ir__drawer-footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.ir__drawer-footer > * {\n  flex: 1 1 0%;\n}\n.drawer__loader-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n/* Place project-wide overrides below. */\n.my-custom-style {\n  background: #000;\n  color: white;\n}\n/* body {\n  background-color: var(--wa-color-surface-default) !important;\n} */\nhtml {\n  font-size: 14px !important;\n}\n/* body {\n  background-color: var(---wa-color-surface-default) !important;\n  color: var(--wa-color-text-normal) !important;\n} */\n.truncate {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n.ir-page__container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--wa-space-l, 1.5rem);\n  padding: var(--wa-space-l);\n  position: relative;\n}\n\n.ir-price {\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: right;\n  white-space: nowrap;\n  color: var(--wa-color-text-normal);\n  margin: 0;\n  padding: 0;\n}\n.page-title {\n  font-family: var(--wa-font-family-heading);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  text-wrap: balance;\n  font-size: var(--wa-font-size-xl);\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --wa-form-control-required-content-color: var(--wa-color-danger-border-loud, #f3676c);\n}\n/* td {\n  padding: 0 !important;\n} */\n.label-on-left {\n  display: grid;\n  gap: var(--wa-space-m);\n}\nwa-card::part(base) {\n  box-sizing: border-box;\n}\n\n/* Shared layout for form controls inside wa-select, wa-input, wa-textarea */\n@media (min-width: 768px) {\n  /* .label-on-left wa-switch::part(label) {\n    margin-inline-start: 0;\n    margin-inline-end: 0.5rem;\n  } */\n  .label-on-left {\n    align-items: center;\n    grid-template-columns: auto 1fr;\n  }\n  .label-on-left wa-switch::part(base),\n  .label-on-left wa-select::part(form-control),\n  .label-on-left wa-select,\n  .label-on-left wa-switch,\n  .label-on-left wa-input,\n  .label-on-left wa-textarea {\n    grid-column: 1 / -1;\n    grid-row-end: span 2;\n    display: grid;\n    grid-template-columns: subgrid;\n    gap: 0 var(--wa-space-l);\n    align-items: center;\n  }\n  .label-on-left wa-switch::part(base) {\n    direction: rtl;\n  }\n  .label-on-left wa-switch::part(base) > * {\n    justify-self: flex-start;\n    justify-content: flex-start;\n    direction: ltr; /* fix text direction */\n  }\n  /* Label alignment */\n  .label-on-left ::part(label) {\n    justify-content: flex-end;\n  }\n\n  /* Hint always in second column */\n  .label-on-left ::part(hint) {\n    grid-column: 2;\n  }\n}\n\n.ir-preview-print-container {\n  position: fixed;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n\n@media print {\n  body.ir-preview-dialog-print-mode {\n    background: #fff !important;\n  }\n  body.ir-preview-dialog-print-mode > *:not(.ir-preview-print-container) {\n    display: none !important;\n  }\n  body.ir-preview-dialog-print-mode .ir-preview-print-container {\n    opacity: 1;\n    pointer-events: auto;\n    position: static;\n    z-index: auto;\n    width: 100%;\n    min-height: auto;\n    margin: 0 auto;\n    padding: 1.5rem;\n    box-sizing: border-box;\n  }\n}\n\n@page {\n  margin: 0.5in;\n}\n";
const IrCommonStyle0 = appCss;

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    extraResources = '';
    disableResourceInjection;
    resources = onlineResources;
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.disableResourceInjection) {
            return;
        }
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        if (this.disableResourceInjection) {
            return;
        }
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return null;
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};
IrCommon.style = IrCommonStyle0;

const irCustomButtonCss = ":host{display:block}.ir__custom-button{width:100%}.ir__custom-button.--icon::part(base){height:auto;width:auto;padding:0}.ir__custom-button::part(base){height:var(--ir-c-btn-height, var(--wa-form-control-height));padding:var(--ir-c-btn-padding, 0 var(--wa-form-control-padding-inline));font-size:var(--ir-c-btn-font-size, auto)}.ir__custom-button.--link::part(base){height:fit-content;padding:0}.ir-button__link:focus{outline:none}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.ir-button__link{display:inline-flex;align-items:center;justify-content:center;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-brand-fill-loud);background-color:transparent;border-color:transparent}.ir-button__link:hover,.ir-button__link:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}";
const IrCustomButtonStyle0 = irCustomButtonCss;

const IrCustomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler", 7);
    }
    get el() { return index.getElement(this); }
    link;
    iconBtn;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant;
    /** The button's visual appearance. */
    appearance;
    /** The button's size. */
    size = 'small';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret;
    /** Disables the button. Does not apply to link buttons. */
    disabled;
    /** Draws the button in a loading state. */
    loading;
    /** Draws a pill-style button with rounded edges. */
    pill;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type = 'button';
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target;
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download;
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form;
    /** Used to override the form owner's `action` attribute. */
    formAction;
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype;
    /** Used to override the form owner's `method` attribute.  */
    formMethod;
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate;
    /** Used to override the form owner's `target` attribute. */
    formTarget;
    clickHandler;
    handleButtonClick(e) {
        this.clickHandler.emit(e);
    }
    render() {
        if (this.link) {
            return (index.h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" })));
        }
        return (index.h(index.Host, null, index.h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = IrCustomButtonStyle0;

const irDateRangeFilterCss = "@layer wa-utilities {\n  .sc-ir-date-range-filter-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-date-range-filter-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-date-range-filter-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n.sc-ir-date-range-filter-h {\n  display: block;\n}\n\n\n.drf-container.sc-ir-date-range-filter {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: var(--wa-form-control-height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  width: 100%;\n  overflow: visible;\n}\n\n.drf-container.sc-ir-date-range-filter:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n\n.drf-field.sc-ir-date-range-filter {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  padding-inline: var(--wa-form-control-padding-inline, 0.75rem);\n  height: 100%;\n  min-width: 0;\n}\n\n\n.drf-divider.sc-ir-date-range-filter {\n  display: inline-block;\n  width: 1px;\n  height: 55%;\n  background-color: var(--wa-color-neutral-border-quiet, #e5e7eb);\n  flex-shrink: 0;\n}\n\n\n.drf-text-btn.sc-ir-date-range-filter {\n  all: unset;\n  flex: 1;\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  color: var(--wa-form-control-value-color, #111827);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\n.drf-text-btn--placeholder.sc-ir-date-range-filter {\n  color: var(--wa-form-control-placeholder-color);\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.drf-text-btn.sc-ir-date-range-filter:focus-visible {\n  outline: none;\n}\n\n\n.drf-clear-btn.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #9ca3af);\n  border-radius: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 0.75rem;\n  transition: color 0.15s ease;\n}\n\n.drf-clear-btn.sc-ir-date-range-filter:hover {\n  color: var(--wa-color-text-normal, #374151);\n}\n\n.drf-clear-btn.sc-ir-date-range-filter:focus-visible {\n  outline: var(--wa-focus-ring);\n  border-radius: 50%;\n}\n\n\n.drf-cal-trigger.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.375rem;\n  background-color: var(--wa-color-neutral-fill-quiet, #f0f0f0);\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #6b7280);\n  transition: background-color 0.15s ease;\n}\n\n.drf-cal-trigger.sc-ir-date-range-filter:hover {\n  background-color: var(--wa-color-neutral-fill-normal, #e0e0e0);\n}\n\n.drf-cal-trigger.sc-ir-date-range-filter:focus-visible {\n  outline: var(--wa-focus-ring);\n}\n\n\n.drf-date-select.sc-ir-date-range-filter::part(input-base) {\n  display: none !important;\n}\n\n\n.drf-date-select.sc-ir-date-range-filter::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n\n.drf-quick-actions.sc-ir-date-range-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  width: 200px;\n}";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

const IrDateRangeFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.datesChanged = index.createEvent(this, "datesChanged", 7);
        this.dateCleared = index.createEvent(this, "dateCleared", 7);
    }
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => moment.hooks() },
        { label: '30 Days Ago', getDate: () => moment.hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment.hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment.hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment.hooks().subtract(1, 'year') },
    ];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate;
    /** Size variant passed through to inner form controls. */
    size = 'small';
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions = true;
    /** Earliest selectable date in YYYY-MM-DD format. */
    minDate;
    /** Latest selectable date in YYYY-MM-DD format. */
    maxDate;
    dates = { from: null, to: null };
    liveMessage = '';
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged;
    /** Fired when the user explicitly clears a date field. */
    dateCleared;
    groupId = `date-range-${Math.random().toString(36).substring(2, 9)}`;
    toDateSelectRef;
    fromDateSelectRef;
    hasControlledFromDate = false;
    hasControlledToDate = false;
    componentWillLoad() {
        this.hasControlledFromDate = this.fromDate !== undefined;
        this.hasControlledToDate = this.toDate !== undefined;
        this.syncInitialDates();
    }
    onFromDateChange(newValue) {
        this.hasControlledFromDate = this.hasControlledFromDate || newValue !== undefined;
        this.syncControlledDates('from', newValue);
    }
    onToDateChange(newValue) {
        this.hasControlledToDate = this.hasControlledToDate || newValue !== undefined;
        this.syncControlledDates('to', newValue);
    }
    /** Updates one side of the date range and emits the change. */
    selectDate(date, type) {
        this.dates = { ...this.dates, [type]: date };
        this.emitChange();
    }
    /** Clears one side of the date range. */
    clearDate(type) {
        const pickerRef = type === 'from' ? this.fromDateSelectRef : this.toDateSelectRef;
        pickerRef?.clearDatePicker();
        this.selectDate(null, type);
        this.dateCleared.emit({ field: type });
    }
    syncInitialDates() {
        this.dates = {
            from: this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    syncControlledDates(changedField, changedValue) {
        this.dates = {
            from: changedField === 'from' ? this.parseDate(changedValue) : this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: changedField === 'to' ? this.parseDate(changedValue) : this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    parseDate(value) {
        if (!value) {
            return null;
        }
        const parsed = moment.hooks(value, 'YYYY-MM-DD', true);
        return parsed.isValid() ? parsed : null;
    }
    emitChange() {
        const from = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const to = this.dates.to?.format('YYYY-MM-DD') ?? null;
        this.datesChanged.emit({ from, to });
        this.liveMessage = `Date range updated. From ${from ?? 'not set'} to ${to ?? 'not set'}.`;
    }
    /**
     * Caps the from-picker's max date at the to-date (or the global maxDate),
     * whichever is earlier.
     */
    getFromMaxDate(toStr) {
        if (!toStr)
            return this.maxDate;
        if (!this.maxDate)
            return toStr;
        return toStr < this.maxDate ? toStr : this.maxDate;
    }
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later.
     */
    getToMinDate(fromStr) {
        if (!fromStr)
            return this.minDate;
        if (!this.minDate)
            return fromStr;
        return fromStr > this.minDate ? fromStr : this.minDate;
    }
    render() {
        const fromLabel = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const toLabel = this.dates.to?.format('YYYY-MM-DD') ?? null;
        const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        return (index.h("div", { key: '839b3abb832f28f34149b5b1e3b6f908019f90aa', class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, index.h("span", { key: '7db2fd925be597dc86c874e4c868c079a7986da0', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), index.h("div", { key: '9fe56f7eff1ce60485cbe1a827a64d10f9d6a139', class: "drf-field" }, index.h("button", { key: '55fa3c152b10a037ad8ddbd282a3c66cbc103dca', class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.openDatePicker(), "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && (index.h("button", { key: '767c72666be6c170db0ae19026db565ab134840d', class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, index.h("wa-icon", { key: '22a0adc5bd7b378a06da502cbf19d709ab06ed49', name: "xmark" }))), index.h("ir-date-select", { key: 'b847aeca4b9154ce7c13699171a8c4ccefc44af7', ref: el => (this.fromDateSelectRef = el), date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: fromMaxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, index.h("button", { key: 'dbcc48a057ad2844319e6c8e7d014c40c4fddf9a', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, index.h("wa-icon", { key: '0a4b025a3c9b3e0bbd3f818843881c47481dd0f1', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: '47bb0f22af4c83c2eaa1fe94484f20914f8ade9a', class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef.closeDatePicker();
            } }, action.label))))))), index.h("span", { key: '19e713f7cb4c2cdbd06f83ac29bf1faf6c0bfa1a', class: "drf-divider", "aria-hidden": "true" }), index.h("div", { key: '29fca32c49f629edfce446fd3a32ac061d0349df', class: "drf-field" }, index.h("button", { key: '2e1e3bdf42cb2be33054167955f8eb2780b024bb', class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.openDatePicker(), "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && (index.h("button", { key: 'a1998361c6d2f26767b1035159aca0aed5ec14f1', class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, index.h("wa-icon", { key: '5b4b9affa45a22bd1a2e0d56bb0d9d9ef96101a5', name: "xmark" }))), index.h("ir-date-select", { key: 'b82f3418d835386f84e3dfc79aa737131de4acf6', ref: el => (this.toDateSelectRef = el), date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, index.h("button", { key: 'ac99d8d8cab2c65b8f367aa9c9d9562612091a4c', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, index.h("wa-icon", { key: '770d72f08cdfade03b00456220edfe46839d863e', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: 'a12b2b7c3301a8009871abdbdb4b505cc26cb9dc', class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef.closeDatePicker();
            } }, action.label))))))), index.h("span", { key: 'b56969fc699d726f6a2438941cead80050db3dd4', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
};
IrDateRangeFilter.style = IrDateRangeFilterStyle0;

const irDateSelectCss = ":host{display:flex;--arrow-size:0.375rem;--max-width:25rem;--show-duration:100ms;--hide-duration:100ms;--arrow-diagonal-size:calc((var(--arrow-size) * sin(45deg)));font-size:var(--wa-font-size-m);line-height:var(--wa-line-height-normal);text-align:start;white-space:normal}.ir-date-select__control{width:100%;display:flex}.ir-date-select__calendar{display:flex;flex-direction:column;width:max-content;max-width:var(--max-width);padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.ir-date-select__popup{--arrow-size:inherit;--show-duration:inherit;--hide-duration:inherit;pointer-events:auto}.ir-date-select__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.ir-date-select__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.ir-date-select__trigger,.ir-date-select__input{width:100%}";
const IrDateSelectStyle0 = irDateSelectCss;

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDateSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.datePickerFocus = index.createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = index.createEvent(this, "datePickerBlur", 7);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
    }
    get el() { return index.getElement(this); }
    withClear;
    placeholder;
    label;
    dates;
    /**
     * Determines whether the date picker is rendered inline or in a pop-up.
     * If `true`, the picker is always visible inline.
     */
    inline = false;
    /**
     * The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`.
     */
    date = null;
    /**
     * Enables multiple dates.
     * If `true`, multiple selection is allowed.
     * If you pass a number (e.g. 3), that is the maximum number of selectable dates.
     */
    multipleDates = false;
    /**
     * Whether the picker should allow range selection (start and end date).
     */
    range = false;
    /**
     * Format for the date as it appears in the input field.
     * Follows the `AirDatepicker` format rules.
     */
    dateFormat = 'yyyy-MM-dd';
    /**
     * Enables the timepicker functionality (select hours and minutes).
     */
    timepicker = false;
    /**
     * The earliest date that can be selected.
     */
    minDate;
    /**
     * The latest date that can be selected.
     */
    maxDate;
    /**
     * Disables the input and prevents interaction.
     */
    disabled = false;
    /**
     * Closes the picker automatically after a date is selected.
     */
    autoClose = true;
    /**
     * Shows days from previous/next month in the current month's calendar.
     */
    showOtherMonths = true;
    /**
     * Allows selecting days from previous/next month shown in the current view.
     */
    selectOtherMonths = true;
    /**
     * Controls how the date picker is triggered.
     * - **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name="trigger">`).
     * - **`false`**: A default button input is used to open the picker.
     *
     * Defaults to `false`.
     */
    customPicker = false;
    /**
     * Pass a container element if you need the date picker to be appended to a specific element
     * for styling or positioning (particularly for arrow rendering).
     * If not provided, it defaults to `this.el`.
     */
    container;
    /**
     * If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.
     * This can be useful if you need the picker to fully re-initialize in response to dynamic changes,
     * but note that it may affect performance if triggered frequently.
     * Defaults to `false`.
     */
    forceDestroyOnUpdate = false;
    /**
     * If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).
     * Otherwise, empty-date changes will be ignored (no event emitted).
     *
     * Defaults to `false`.
     */
    emitEmptyDate = false;
    /**
     * Styles for the trigger container
     */
    triggerContainerStyle = '';
    isActive = false;
    currentDate;
    slotManagerHasSlot = 0;
    isValid;
    datePickerFocus;
    datePickerBlur;
    dateChanged;
    static instanceCounter = 0;
    popupId;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    // Create slot manager with state change callback
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotManagerHasSlot++;
    });
    airDatePickerRef;
    componentWillLoad() {
        IrDateSelect.instanceCounter += 1;
        this.popupId = `ir-date-select-popup-${IrDateSelect.instanceCounter}`;
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotManagerHasSlot++;
        });
        this.slotManager.initialize();
        if (this.el.hasAttribute('aria-invalid')) {
            this.isValid = this.el.getAttribute('aria-invalid');
        }
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    handleAriaInvalidChange(newVal, oldVal) {
        if (newVal !== oldVal)
            this.isValid = newVal;
    }
    async clearDatePicker() {
        this.airDatePickerRef?.clearDatePicker();
    }
    async openDatePicker() {
        this.isActive = true;
    }
    async closeDatePicker() {
        this.isActive = false;
    }
    togglePicker() {
        this.isActive ? this.closeDatePicker() : this.openDatePicker();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.togglePicker();
                break;
            case 'Escape':
                if (this.isActive) {
                    event.preventDefault();
                    this.closeDatePicker();
                }
                break;
        }
    }
    get _label() {
        if (this.range) {
            return this.dates.map(d => moment.hooks(d).format('MMM DD, YYYY')).join(' → ');
        }
        if (!this.currentDate) {
            return null;
        }
        return this.timepicker ? moment.hooks(this.currentDate).format('MMM DD, YYYY, HH:mm') : moment.hooks(this.currentDate).format('MMM DD, YYYY');
    }
    render() {
        return (index.h(index.Host, { key: '70ab1b64564a00df466f4ab81104eb72000f606d', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, index.h("wa-popup", { key: '60c7bad6bf411ae57ed90800dfbea5b6cb6d4bec', arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, index.h("div", { key: 'f4f569a28d52b7f217337d4d8a3e7789c860ab18', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, index.h("div", { key: '8de0e89ca928ebb02ef0a23638c876021a0cde0b', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, index.h("slot", { key: '34f442d08e8c8635e153b687afa4884d8527f520', name: "trigger" }, index.h("ir-input", { key: '46cb9158faf88a09584846508258e009fb354020', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && index.h("slot", { key: 'b8ad23a3ef76e432185df99cc9f7126d2caf0031', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && index.h("slot", { key: 'c2bd0e3cd4d83ba9f82b9ec766d18b0b6dcd3473', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && index.h("slot", { key: 'd21246f5dd96edf2ffda48aec0bf55009cc61409', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && index.h("slot", { key: '3458968aff428f00d4c57a2e0c61d2dcbbe3d990', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && index.h("slot", { key: '9bd200fca87171596b350e769bf6536059ead406', name: "hint", slot: "hint" }))))), index.h("div", { key: 'c33646bff2401acde6e0c6308c5bb6f628c83b7f', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date selection dialog" }, index.h("ir-air-date-picker", { key: '685ba62ad42c1f08c2d2153796e528048c09aa2d', ref: el => (this.airDatePickerRef = el), withClear: this.withClear, placeholder: this.placeholder, label: this.label, dates: this.dates, inline: this.inline, date: this.date, multipleDates: this.multipleDates, range: this.range, dateFormat: this.dateFormat, timepicker: this.timepicker, minDate: this.minDate, maxDate: this.maxDate, disabled: this.disabled, autoClose: this.autoClose, showOtherMonths: this.showOtherMonths, selectOtherMonths: this.selectOtherMonths, customPicker: this.customPicker, container: this.container, forceDestroyOnUpdate: this.forceDestroyOnUpdate, emitEmptyDate: this.emitEmptyDate, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentDate = e.detail?.start;
                this.dateChanged.emit(e.detail);
                const shouldClose = this.autoClose && (!this.range || (this.range && e.detail.dates.length > 1));
                if (shouldClose) {
                    this.closeDatePicker();
                }
            } }), index.h("slot", { key: '6d6d8004bfe06c79e49b57a7ad5d00e977b6041c' })))));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
__decorate$3([
    ClickOutside.ClickOutside()
], IrDateSelect.prototype, "closeDatePicker", null);
IrDateSelect.style = IrDateSelectStyle0;

/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 */
function OverflowAdd(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            const host = getOverflowHost(this);
            if (host) {
                addOverflowForHost(host, tag);
            }
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 */
function OverflowRelease(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            const host = getOverflowHost(this);
            if (host) {
                removeOverflowForHost(host, tag);
            }
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/* ---------------------- Core registry & body lock logic --------------------- */
const TAG_REGISTRY = new Map();
// Attribute on <body> that holds a space-separated list of active tags
const BODY_ATTR = 'data-overflow-locks';
// Style element id prefix for per-tag CSS
const STYLE_ID_PREFIX = 'overflow-style-';
/** Ensure a <style> for this tag exists (once) and targets the body attr token. */
function ensureStyleForTag(tag) {
    if (!isDomAvailable())
        return;
    const styleId = STYLE_ID_PREFIX + tag;
    if (document.getElementById(styleId))
        return;
    // Determine if page has vertical overflow
    const hasOverflow = document.documentElement.scrollHeight > window.innerHeight;
    // Calculate scrollbar width (0 if no overflow)
    const scrollbarWidth = hasOverflow ? window.innerWidth - document.documentElement.clientWidth : 0;
    const css = `
    /* Auto-inserted overflow lock for "${tag}" */
    body[${BODY_ATTR}~="${tag}"] {
      overflow: hidden !important;
      /* margin-inline-end respects LTR/RTL direction */
      margin-inline-end: ${scrollbarWidth}px !important;
    }
  `.trim();
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
}
/** Add the tag token to body’s data-overflow-locks (space-separated tokens). */
function addBodyTag(tag) {
    if (!isDomAvailable())
        return;
    ensureStyleForTag(tag);
    const body = document.body;
    const current = (body.getAttribute(BODY_ATTR) || '').trim();
    const tokens = new Set(current ? current.split(/\s+/) : []);
    if (!tokens.has(tag)) {
        tokens.add(tag);
        body.setAttribute(BODY_ATTR, Array.from(tokens).join(' '));
    }
}
/** Remove the tag token from body’s data-overflow-locks. */
function removeBodyTag(tag) {
    if (!isDomAvailable())
        return;
    const body = document.body;
    const current = (body.getAttribute(BODY_ATTR) || '').trim();
    if (!current)
        return;
    const tokens = new Set(current.split(/\s+/));
    if (tokens.delete(tag)) {
        const next = Array.from(tokens).join(' ');
        if (next)
            body.setAttribute(BODY_ATTR, next);
        else
            body.removeAttribute(BODY_ATTR);
    }
}
/** Register a host under a tag, and lock the body for that tag if it’s the first. */
function addOverflowForHost(host, tag) {
    if (!host || !isDomAvailable())
        return;
    // Track on host
    host.__overflowTags__ ||= new Map();
    const counts = host.__overflowTags__;
    const previous = counts.get(tag) ?? 0;
    counts.set(tag, previous + 1);
    // Track globally
    let entry = TAG_REGISTRY.get(tag);
    if (!entry) {
        entry = { hosts: new Set(), count: 0 };
        TAG_REGISTRY.set(tag, entry);
    }
    if (previous === 0) {
        entry.hosts.add(host);
    }
    entry.count += 1;
    // If this is the first active lock for this tag, lock the body for this tag
    if (entry.count === 1) {
        addBodyTag(tag);
    }
    // Safety: auto-clean on detach
    attachDisconnectCleanup(host);
}
/** Unregister a host from a tag, and possibly unlock the body for that tag. */
function removeOverflowForHost(host, tag) {
    if (!host || !isDomAvailable())
        return;
    // Update host
    const counts = host.__overflowTags__;
    if (!counts)
        return;
    const current = counts.get(tag);
    if (!current)
        return;
    if (current > 1) {
        counts.set(tag, current - 1);
    }
    else {
        counts.delete(tag);
        if (counts.size === 0) {
            delete host.__overflowTags__;
        }
    }
    // Update global registry
    const entry = TAG_REGISTRY.get(tag);
    if (!entry)
        return;
    entry.count = Math.max(0, entry.count - 1);
    if (current === 1) {
        entry.hosts.delete(host);
    }
    if (entry.count === 0) {
        TAG_REGISTRY.delete(tag);
        removeBodyTag(tag);
        // Optional: also remove the injected style node if you prefer cleanup:
        // const style = document.getElementById(STYLE_ID_PREFIX + tag);
        // style?.remove();
    }
}
/** If a host is removed from the DOM without calling release, auto-clean its tags. */
function attachDisconnectCleanup(host) {
    if (!host || !isDomAvailable() || typeof MutationObserver === 'undefined')
        return;
    // Don’t attach multiple observers to the same host
    if (host.__overflowObserver__)
        return;
    const obs = new MutationObserver(() => {
        // If host is no longer connected, clear all tags it owned
        if (!host.isConnected) {
            const tagEntries = host.__overflowTags__ ? Array.from(host.__overflowTags__.entries()) : [];
            tagEntries.forEach(([tag, count]) => {
                for (let i = 0; i < count; i += 1) {
                    removeOverflowForHost(host, tag);
                }
            });
            obs.disconnect();
            delete host.__overflowObserver__;
        }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    host.__overflowObserver__ = obs;
}
function getOverflowHost(instance) {
    if (!isDomAvailable())
        return null;
    try {
        return index.getElement(instance);
    }
    catch {
        return null;
    }
}
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

const irDialogCss = ".ir-dialog__footer{display:flex;align-items:center;gap:0.5rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}";
const IrDialogStyle0 = irDialogCss;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDialogShow = index.createEvent(this, "irDialogShow", 7);
        this.irDialogHide = index.createEvent(this, "irDialogHide", 7);
        this.irDialogAfterShow = index.createEvent(this, "irDialogAfterShow", 7);
        this.irDialogAfterHide = index.createEvent(this, "irDialogAfterHide", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss = true;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide;
    slotState = new Map();
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    async openModal() {
        this.open = true;
    }
    async closeModal() {
        this.open = false;
    }
    handleWaHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.open = false;
        this.irDialogHide.emit(e.detail);
    }
    handleWaShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.open = true;
        this.irDialogShow.emit();
    }
    handleWaAfterHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterHide.emit();
    }
    handleWaAfterShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterShow.emit();
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (index.h("wa-dialog", { key: '3cfd5984b287350d7d834adf489a09ce39365410', "onwa-hide": this.handleWaHide.bind(this), "onwa-show": this.handleWaShow.bind(this), "onwa-after-hide": this.handleWaAfterHide.bind(this), "onwa-after-show": this.handleWaAfterShow.bind(this), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && index.h("slot", { key: 'fe0e2e0c9cc344ee428b935bfae5b0a1d8a680ed', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && index.h("slot", { key: '52a8c473e713d0f2cf962fa2686a5e0e984b2795', name: "label", slot: "label" }), index.h("slot", { key: 'e286bb6ae98bf7cd7d902a572b08aa151f9d5112' }), this.slotState.get('footer') && index.h("slot", { key: '6125230bbe5c3b0c79b01180132ced3115eed9b5', name: "footer", slot: "footer" })));
    }
};
__decorate$2([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate$2([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
IrDialog.style = IrDialogStyle0;

const irDrawerCss = ".ir__drawer{text-align:left !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-left:var(--ir-drawer-padding-left, var(--spacing));padding-right:var(--ir-drawer-padding-right, var(--spacing));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:0.5rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}";
const IrDrawerStyle0 = irDrawerCss;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.drawerShow = index.createEvent(this, "drawerShow", 7);
        this.drawerHide = index.createEvent(this, "drawerHide", 7);
    }
    get el() { return index.getElement(this); }
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label;
    /** The direction from which the drawer will open. */
    placement;
    /** Disables the header. This will also remove the default close button. */
    withoutHeader;
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss = true;
    slotStateVersion = 0; // Trigger re-renders when slots change
    /** Emitted when the drawer opens. */
    drawerShow;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    // Create slot manager with state change callback
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    onDrawerShow = (event) => {
        this.emitDrawerShow(event);
    };
    onDrawerHide = (event) => {
        this.emitDrawerHide(event);
    };
    componentWillLoad() {
        // Initialize slot manager with host element
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    emitDrawerShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.drawerShow.emit();
    }
    emitDrawerHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.drawerHide.emit(e.detail);
    }
    render() {
        return (index.h("wa-drawer", { key: 'b893c72c40777c8feaed543cd446d48137624826', id: this.el.id, "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotManager.hasSlot('header-actions') && index.h("slot", { key: '1a1c8ffc60c98e1278f0b381b04265ecacf53c0a', name: "header-actions", slot: "header-actions" }), this.slotManager.hasSlot('label') && index.h("slot", { key: '9a1a0fdd8d69873de646df8f78495edcd8cbe669', name: "label", slot: "label" }), index.h("slot", { key: '2ec67b5a64a1461d82e36f02dea4eac25daebd8d' }), this.slotManager.hasSlot('footer') && index.h("slot", { key: '944eba8370a17185a576f49e2cd1f996de765c5c', name: "footer", slot: "footer" })));
    }
};
__decorate$1([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate$1([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
IrDrawer.style = IrDrawerStyle0;

const irEmptyStateCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = 'No records found';
    render() {
        return (index.h(index.Host, { key: 'df9c8cc484b5632adc5450b2f7e2365143126c63' }, index.h("slot", { key: 'fcbe68aadeffc2ed0e105f0fdd0393365a8163d5', name: "icon" }, index.h("div", { key: '64c8641c9646986b900830ba026165e41e155434', class: 'icon_container' }, index.h("wa-icon", { key: '676ed28d472b715eeb57378d0938798815cf6fc3', name: "ban", style: { transform: 'rotate(90deg)' } }))), index.h("p", { key: '5701bb1a81ae5f38b9279ab9a646c5ff75cb03c3', part: "message", class: "message" }, this.message), index.h("slot", { key: 'ac392ae1e535ffc1d8a213394a461cba058c5dc9' })));
    }
};
IrEmptyState.style = IrEmptyStateStyle0;

const irFdConfirmDialogCss = ".confirm-dialog__message.sc-ir-fd-confirm-dialog{margin:0;font-size:0.9375rem;color:var(--wa-color-text-normal, #111827);line-height:1.5}.confirm-dialog__footer.sc-ir-fd-confirm-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrFdConfirmDialogStyle0 = irFdConfirmDialogCss;

const CONFIGS = {
    'void': doc => ({
        title: 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit note and cannot be undone.`,
        confirmLabel: 'Void',
        confirmVariant: 'danger',
    }),
    'delete-draft': doc => ({
        title: 'Delete Draft',
        message: `Are you sure you want to permanently delete draft ${doc}? This action cannot be undone.`,
        confirmLabel: 'Delete',
        confirmVariant: 'danger',
    }),
    'convert-to-invoice': doc => ({
        title: 'Convert to Invoice',
        message: `Are you sure you want to convert ${doc} to an invoice? This action cannot be undone.`,
        confirmLabel: 'Convert',
        confirmVariant: 'brand',
    }),
};
const IrFdConfirmDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmed = index.createEvent(this, "confirmed", 7);
        this.cancelled = index.createEvent(this, "cancelled", 7);
    }
    open = false;
    action = null;
    docNumber = 'this document';
    isConfirming = false;
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber) : null;
        return (index.h("ir-dialog", { key: '35509b0c95ef10221536283115f6ec6b39674b1c', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => this.cancelled.emit() }, index.h("p", { key: 'dfff8d2be95706b6ae62a5116b212fe89ee1574b', class: "confirm-dialog__message" }, config?.message ?? ''), index.h("div", { key: 'b71140fcfcf85821fa8e6a95816aabedd6aa3db5', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'df5d21ba6eea5ce2ab173ac0a4cc5b933cb35948', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), index.h("ir-custom-button", { key: '2497294feb8dd9d3db21ea3b2fd26626732dbbcc', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit(), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
    }
};
IrFdConfirmDialog.style = IrFdConfirmDialogStyle0;

const irHoldTransactionDialogCss = ".sc-ir-hold-transaction-dialog-h{display:contents}.hold-dialog__body.sc-ir-hold-transaction-dialog{display:flex;flex-direction:column;gap:0.875rem;font-size:0.875rem}.hold-dialog__details.sc-ir-hold-transaction-dialog{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog{display:flex;justify-content:space-between;padding:0.5rem 0.75rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog:last-child{border-bottom:0}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:first-child{color:var(--wa-color-text-quiet, #6b7280)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:last-child{font-weight:500}";
const IrHoldTransactionDialogStyle0 = irHoldTransactionDialogCss;

const IrHoldTransactionDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.holdToggled = index.createEvent(this, "holdToggled", 7);
    }
    row = null;
    currencySymbol = '$';
    isLoading = false;
    holdToggled;
    dialogRef;
    cityLedgerService = new utils.CityLedgerService();
    async openModal() {
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    async handleConfirm() {
        if (!this.row)
            return;
        const newIsHold = !this.row._raw.IS_HOLD;
        try {
            this.isLoading = true;
            await this.cityLedgerService.toggleCLTxHold({
                CL_TX_ID: this.row._raw.CL_TX_ID,
                IS_HOLD: newIsHold,
            });
            this.holdToggled.emit({ rowId: this.row._rowId, newIsHold });
            this.dialogRef.closeModal();
        }
        catch (error) {
            console.error('Failed to toggle hold status', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const isHeld = this.row?.status?.label === 'Held';
        return (index.h(index.Host, { key: 'a732d510366e6a836c3d99ff2277498e3038a759' }, index.h("ir-dialog", { key: '82e3fd993f519d5cf7e3116d366ca78c0958bf7d', label: isHeld ? 'Revert Transaction' : 'Hold Transaction', ref: el => (this.dialogRef = el) }, index.h("div", { key: 'a7bff90bce1860474febc9f2b8e6f001d8dc66a6', class: "hold-dialog__body" }, isHeld ? (index.h("p", null, "Revert this transaction back to ", index.h("strong", null, "Unbilled"), " status? It will re-enter the billing queue.")) : (index.h("p", null, "Place this transaction on ", index.h("strong", null, "Hold"), "? It will be excluded from invoicing until released."))), index.h("div", { key: '81ad63219d848bea45f467fef71a6b8b039a6f62', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '61427521ffa4e0b6ca4a00a467c16d70012d6af2', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), index.h("ir-custom-button", { key: 'dfbf9857d861e76d8889436a28cd89098f30a406', size: "medium", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, "Confirm")))));
    }
};
IrHoldTransactionDialog.style = IrHoldTransactionDialogStyle0;

const icons = {
    'clock': {
        d: 'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
        viewBox: '0 0 512 512',
    },
    'check': {
        viewBox: '0 0 448 512',
        d: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
    },
    'heart-fill': {
        viewBox: '0 0 512 512',
        d: 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z',
    },
    'envelope-circle-check': {
        viewBox: '0 0 640 512',
        d: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z',
    },
    'danger': {
        viewBox: '0 0 512 512',
        d: 'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
    },
    'bell': {
        viewBox: '0 0 448 512',
        d: 'M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z',
    },
    'burger_menu': {
        viewBox: '0 0 448 512',
        d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z',
    },
    'home': {
        viewBox: '0 0 576 512',
        d: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
    },
    'xmark': {
        viewBox: '0 0 384 512',
        d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    },
    'minus': {
        viewBox: '0 0 448 512',
        d: 'M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z',
    },
    'user': {
        viewBox: '0 0 448 512',
        d: 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z',
    },
    'heart': {
        viewBox: '0 0 512 512',
        d: 'M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z',
    },
    'user_group': {
        viewBox: '0 0 640 512',
        d: 'M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z',
    },
    'search': {
        viewBox: '0 0 512 512',
        d: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
    },
    'arrow_right': {
        viewBox: '0 0 448 512',
        d: 'M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z',
    },
    'arrow_left': {
        viewBox: '0 0 448 512',
        d: 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_info': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
    },
    'calendar': {
        viewBox: ' 0 0 448 512',
        d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z',
    },
    'xmark-fill': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z',
    },
    'globe': {
        viewBox: '0 0 256 256',
        d: 'M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6',
    },
    'facebook': {
        viewBox: '0 0 512 512',
        d: 'M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z',
    },
    'twitter': {
        viewBox: '0 0 512 512',
        d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    'whatsapp': {
        viewBox: '0 0 448 512',
        d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
    },
    'instagram': {
        viewBox: '0 0 448 512',
        d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    'youtube': {
        viewBox: '0 0 576 512',
        d: 'M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z',
    },
    'angle_left': {
        viewBox: '0 0 320 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_check': {
        d: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z',
        viewBox: '0 0 512 512',
    },
    'eraser': {
        viewBox: '0 0 576 512',
        d: 'M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z',
    },
    'file': {
        viewBox: '0 0 384 512',
        d: 'M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z',
    },
    'edit': {
        viewBox: '0 0 512 512',
        d: 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z',
    },
    'trash': {
        viewBox: '0 0 448 512',
        d: 'M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z',
    },
    'plus': {
        viewBox: '0 0 448 512',
        d: 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
    },
    'reciept': {
        viewBox: '0 0 384 512',
        d: 'M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
    },
    'print': {
        viewBox: '0 0 512 512',
        d: 'M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
    },
    'menu_list': {
        viewBox: '0 0 512 512',
        d: 'M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z',
    },
    'save': {
        viewBox: '0 0 448 512',
        d: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
    },
    'credit_card': {
        viewBox: '0 0 576 512',
        d: 'M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z',
    },
    'closed_eye': {
        viewBox: '0 0 640 512',
        d: 'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z',
    },
    'open_eye': {
        viewBox: '0 0 576 512',
        d: 'M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z',
    },
    'server': {
        viewBox: '0 0 512 512',
        d: 'M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z',
    },
    'double_caret_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'square_plus': {
        viewBox: '0 0 448 512',
        d: 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z',
    },
    'angles_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'angle_right': {
        viewBox: '0 0 320 512',
        d: 'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z',
    },
    'angles_right': {
        viewBox: '0 0 512 512',
        d: 'M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z',
    },
    'outline_user': {
        viewBox: '0 0 448 512',
        d: 'M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z',
    },
    'key': {
        viewBox: '0 0 512 512',
        d: 'M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z',
    },
    'unlock': {
        viewBox: '0 0 448 512',
        d: 'M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z',
    },
    'circle_plus': {
        viewBox: '0 0 15 15',
        d: 'M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z',
    },
    'arrow-right-from-bracket': {
        d: 'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z',
        viewBox: '0 0 512 512',
    },
    'note': {
        d: 'M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z',
        viewBox: '0 0 448 512',
    },
    'email': {
        viewBox: '0 0 512 512',
        d: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
    },
    'calendar-xmark': {
        viewBox: '0 0 448 512',
        d: 'M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z',
    },
    'arrow-trend-up': {
        viewBox: '0 0 640 640',
        d: 'M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z',
    },
    'hotel': {
        viewBox: '0 0 640 640',
        d: 'M80 88C80 74.7 90.7 64 104 64L536 64C549.3 64 560 74.7 560 88C560 101.3 549.3 112 536 112L528 112L528 528L536 528C549.3 528 560 538.7 560 552C560 565.3 549.3 576 536 576L104 576C90.7 576 80 565.3 80 552C80 538.7 90.7 528 104 528L112 528L112 112L104 112C90.7 112 80 101.3 80 88zM288 176L288 208C288 216.8 295.2 224 304 224L336 224C344.8 224 352 216.8 352 208L352 176C352 167.2 344.8 160 336 160L304 160C295.2 160 288 167.2 288 176zM192 160C183.2 160 176 167.2 176 176L176 208C176 216.8 183.2 224 192 224L224 224C232.8 224 240 216.8 240 208L240 176C240 167.2 232.8 160 224 160L192 160zM288 272L288 304C288 312.8 295.2 320 304 320L336 320C344.8 320 352 312.8 352 304L352 272C352 263.2 344.8 256 336 256L304 256C295.2 256 288 263.2 288 272zM416 160C407.2 160 400 167.2 400 176L400 208C400 216.8 407.2 224 416 224L448 224C456.8 224 464 216.8 464 208L464 176C464 167.2 456.8 160 448 160L416 160zM176 272L176 304C176 312.8 183.2 320 192 320L224 320C232.8 320 240 312.8 240 304L240 272C240 263.2 232.8 256 224 256L192 256C183.2 256 176 263.2 176 272zM416 256C407.2 256 400 263.2 400 272L400 304C400 312.8 407.2 320 416 320L448 320C456.8 320 464 312.8 464 304L464 272C464 263.2 456.8 256 448 256L416 256zM352 448L395.8 448C405.7 448 413.3 439 409.8 429.8C396 393.7 361 368 320.1 368C279.2 368 244.2 393.7 230.4 429.8C226.9 439 234.5 448 244.4 448L288.2 448L288.2 528L352.2 528L352.2 448z',
    },
    'arrow-trend-down': {
        viewBox: '0 0 640 640',
        d: 'M416 416C398.3 416 384 430.3 384 448C384 465.7 398.3 480 416 480L576 480C593.7 480 608 465.7 608 448L608 288C608 270.3 593.7 256 576 256C558.3 256 544 270.3 544 288L544 370.7L374.6 201.3C362.1 188.8 341.8 188.8 329.3 201.3L224 306.7L86.6 169.4C74.1 156.9 53.8 156.9 41.3 169.4C28.8 181.9 28.8 202.2 41.3 214.7L201.3 374.7C213.8 387.2 234.1 387.2 246.6 374.7L352 269.3L498.7 416L416 416z',
    },
    'angle-up': {
        viewBox: '0 0 640 640',
        d: 'M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z',
    },
    'angle-down': {
        viewBox: '0 0 640 640',
        d: 'M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z',
    },
    'ban': {
        viewBox: '0 0 640 640',
        d: 'M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z',
    },
};

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The name of the icon to render.
     * Must match a key from the imported `icons` map.
     *
     * Example:
     * ```tsx
     * <ir-icons name="check" />
     * ```
     */
    name;
    /**
     * Additional CSS class applied to the `<svg>` element.
     * Can be used for sizing, positioning, etc.
     */
    svgClassName;
    /**
     * Sets the `color` attribute on the `<svg>` element.
     * Accepts any valid CSS color string.
     */
    color;
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, index.h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const masks = {
    price: {
        mask: Number,
        scale: 2,
        radix: '.',
        mapToRadix: [','],
        normalizeZeros: true,
        padFractionalZeros: true,
        thousandsSeparator: ',',
    },
    email: {
        mask: /^\S*@?\S*$/,
        overwrite: false,
        prepare(value) {
            // Remove spaces
            return value
                .toLowerCase()
                .replace(/\s+/g, '') // remove all whitespace
                .replace(/[^a-z0-9@._'+\-]/g, '') // only allow chars from EMAIL_REGEX
                .replace(/\.{2,}/g, '.') // collapse multiple dots
                .replace(/@\./, '@'); // no dot immediately after @;
        },
        validate(value) {
            // Allow partial input while typing
            // but restrict characters to valid email charset
            return /^[a-zA-Z0-9._%+-]*(@?[a-zA-Z0-9.-]*)?$/.test(value);
        },
    },
    url: {
        mask: /^\S*$/,
        overwrite: false,
        prepare(appended /* string */) {
            return appended.replace(/^https?:\/\//i, '');
        },
        commit(value, masked) {
            masked._value = 'https://' + value.replace(/^https?:\/\//i, '');
        },
    },
    time: {
        mask: 'HH:mm',
        blocks: {
            HH: {
                mask: index$2.MaskedRange,
                from: 0,
                to: 23,
                placeholderChar: 'H',
            },
            mm: {
                mask: index$2.MaskedRange,
                from: 0,
                to: 59,
                placeholderChar: 'm',
            },
        },
        lazy: false,
        placeholderChar: '_',
    },
    date: {
        mask: Date,
        pattern: 'DD/MM/YYYY',
        lazy: false,
        min: moment.hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
        max: new Date(),
        format: date => moment.hooks(date).format('DD/MM/YYYY'),
        parse: str => moment.hooks(str, 'DD/MM/YYYY').toDate(),
        autofix: true,
        placeholderChar: '_',
        blocks: {
            YYYY: {
                mask: index$2.MaskedRange,
                from: 1900,
                to: moment.hooks().format('YYYY'),
                placeholderChar: 'Y',
            },
            MM: {
                mask: index$2.MaskedRange,
                from: 1,
                to: 12,
                placeholderChar: 'M',
            },
            DD: {
                mask: index$2.MaskedRange,
                from: 1,
                to: 31,
                placeholderChar: 'D',
            },
        },
    },
};

const irInputCss = "wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){--error-width:2px;border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-top-width:var(--error-width) !important;border-left-width:var(--error-width) !important;border-right-width:var(--error-width) !important;border-bottom-width:var(--error-width) !important}:host{display:block}";
const IrInputStyle0 = irInputCss;

const IrInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change", 7);
        this.inputBlur = index.createEvent(this, "input-blur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return index.getElement(this); }
    name;
    /** The value of the input. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 'small';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    textChange;
    inputBlur;
    inputFocus;
    isValid = true;
    slotState = new Map();
    _mask;
    inputRef;
    animationFrame;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
        this.updateSlotState();
    }
    componentDidLoad() {
        if (this.disabled) {
            this.inputRef.disabled = this.disabled;
        }
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.destroyMask();
        this.removeSlotListeners();
    }
    handleDisabledChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputRef.disabled = newValue;
        }
    }
    handleMaskPropsChange() {
        if (!this.inputRef)
            return;
        const hasMask = Boolean(this.resolveMask());
        if (!hasMask) {
            this.destroyMask();
            return;
        }
        this.rebuildMask();
    }
    handleAriaInvalidChange(e) {
        this.isValid = !JSON.parse(e);
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.internals.setFormValue(nextValue ?? '');
        this.textChange.emit(nextValue ?? '');
    };
    async initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        await customElements.whenDefined('wa-input'); // optional, but explicit
        await this.inputRef.updateComplete;
        const nativeInput = this.inputRef.input;
        if (!nativeInput)
            return;
        this._mask = index$2.IMask(nativeInput, maskOpts);
        if (this.value) {
            if (this.returnMaskedValue) {
                this._mask.unmaskedValue = this.value;
            }
            else {
                this._mask.value = this.value;
            }
        }
        this._mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            const value = isEmpty ? '' : this.returnMaskedValue ? this._mask.unmaskedValue : this._mask.value;
            this.handleInput(value);
        });
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        this._mask?.destroy();
        this._mask = undefined;
        this.clearAnimationFrame();
    }
    clearAnimationFrame() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
    buildMaskOptions() {
        const resolvedMask = this.resolveMask();
        if (!resolvedMask)
            return;
        const maskOpts = typeof resolvedMask === 'object' && resolvedMask !== null && !Array.isArray(resolvedMask) ? { ...resolvedMask } : { mask: resolvedMask };
        if (this.min !== undefined) {
            maskOpts.min = this.min;
        }
        if (this.max !== undefined) {
            maskOpts.max = this.max;
        }
        return maskOpts;
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks[this.mask];
        }
        return this.mask;
    }
    handleChange = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.mask)
            this.handleInput(e.target.value);
    };
    handleClear = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this._mask) {
            this._mask.value = '';
        }
        this.handleInput('');
    };
    handleBlur = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputBlur.emit();
    };
    handleFocus = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputFocus.emit();
    };
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    async focusInput() {
        this.inputRef?.focus();
    }
    async blurInput() {
        this.inputRef?.blur();
    }
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (index.h(index.Host, { key: '7d221175a9eb64e756b212f3b8117f39d9535651' }, index.h("wa-input", { key: '12e3ece531ab61fde6db6f868b23d13f0c5a1c6a', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && index.h("slot", { key: '36400e820204da3a1c574753105006124d2ec47c', name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { key: '58b6ba2f3ed6c5deeaae815ddadf0a930f67e24e', name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { key: '8ef06f04aba326e8686f3b3b344b94ddbae377bb', name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { key: '14d21886dbcdf8d0b45766ed171e6023618deb44', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { key: '551f417e48cabf36353bc4ea85ce8783b77d9ceb', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { key: '6b4ff643c00dd1c1aaae8ea39721b9180bf31f03', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { key: '524c64982943422fd72d3a89332350628586d879', name: "hint", slot: "hint" }))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": ["handleDisabledChange"],
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "aria-invalid": ["handleAriaInvalidChange"],
        "value": ["handleValueChange"]
    }; }
};
IrInput.style = IrInputStyle0;

const irInputCellCss = ":host{display:block;height:100%;width:100%}.cell-input{height:100%;width:100%}.cell-input:focus-within{z-index:10}.cell-input::part(wa-input){height:100%;z-index:1}.cell-input::part(base){height:100%;border-radius:0;border:0;font-size:1rem}.input-cell__container{height:100%;width:100%;box-sizing:border-box}.input-cell__container[data-active='false']{display:flex;flex-direction:column;align-items:end;justify-content:center;padding:var(--ir-cell-padding)}";
const IrInputCellStyle0 = irInputCellCss;

const IrInputCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cellValueChange = index.createEvent(this, "cellValueChange", 7);
    }
    get el() { return index.getElement(this); }
    /** The value of the input. */
    value;
    /** Disables the input. */
    disabled;
    /** Mask for the input field (optional) */
    mask;
    active = false;
    slotState = new Map();
    cellValueChange;
    inputRef;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    handleActiveChange() {
        if (this.active) {
            setTimeout(() => {
                this.inputRef?.focusInput();
            }, 100);
        }
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    render() {
        return (index.h("div", { key: 'd9a39d82fe3e017504dcc309c1bfca61e2ba6813', onDblClick: () => {
                if (this.disabled) {
                    return;
                }
                if (!this.active) {
                    this.active = true;
                }
            }, "data-active": String(this.active), class: "input-cell__container" }, this.active ? (index.h("ir-input", { ref: el => (this.inputRef = el), mask: this.mask, class: "cell-input", value: this.value, "onText-change": e => {
                this.value = e.detail;
            }, "onInput-blur": () => {
                this.active = false;
            }, onChange: () => {
                this.cellValueChange.emit(this.value);
            } }, this.slotState.get('label') && index.h("slot", { name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { name: "hint", slot: "hint" }))) : (index.h("slot", null))));
    }
    static get watchers() { return {
        "active": ["handleActiveChange"]
    }; }
};
IrInputCell.style = IrInputCellStyle0;

class InterceptorError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
    }
    /**
     * List of endpoint paths that should trigger loader logic and OTP handling.
     */
    handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
    /**
     * List of endpoints for which to suppress toast messages.
     */
    suppressToastEndpoints = [];
    /**
     * Indicates whether the loader is visible.
     */
    isShown = false;
    /**
     * Global loading indicator toggle.
     */
    isLoading = false;
    /**
     * Indicates if the intercepted request involves unassigned units.
     */
    isUnassignedUnit = false;
    /**
     * Count of `/Get_Exposed_Calendar` calls in progress.
     */
    endpointsCount = 0;
    /**
     * Identifier of the endpoint that manually disabled page loader.
     */
    isPageLoadingStopped = null;
    /**
     * Controls visibility of the OTP modal.
     */
    showModal;
    /**
     * Request path (used in OTP handling).
     */
    requestUrl;
    /**
     * The OTP endpoint path.
     */
    baseOTPUrl;
    /**
     * Email for OTP prompt.
     */
    email;
    /**
     * Emits a toast notification (`type`, `title`, `description`, `position`).
     */
    toast;
    otpModal;
    pendingConfig;
    pendingResolve;
    pendingReject;
    response;
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    /**
     * Sets up Axios request and response interceptors.
     */
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    /**
     * Returns true if the given endpoint is listed as "handled".
     */
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    /**
     * Handles outbound Axios requests.
     * - Triggers global loader for certain endpoints
     * - Tracks `/Get_Exposed_Calendar` calls separately
     */
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    /**
     * Handles inbound Axios responses:
     * - Resets loader
     * - Handles OTP flows and exception messages
     */
    async handleResponse(response) {
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_Exposed_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            return this.handleOtpResponse({ response, extractedUrl });
        }
        if (response.data.ExceptionMsg?.trim()) {
            this.handleResponseExceptions({ response, extractedUrl });
        }
        return response;
    }
    /**
     * Handles and throws known API exception messages.
     */
    handleResponseExceptions({ response, extractedUrl }) {
        this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
        throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
    }
    /**
     * Handles OTP-required API responses:
     * - Shows OTP modal
     * - Stores request context
     * - Defers resolution to OTP modal
     */
    handleOtpResponse({ extractedUrl, response }) {
        this.showModal = true;
        this.email = response.data.ExceptionMsg;
        const name = extractedUrl.slice(1);
        this.baseOTPUrl = name;
        if (name === 'Check_OTP_Necessity') {
            let methodName;
            try {
                const body = typeof response.config.data === 'string' ? JSON.parse(response.config.data) : response.config.data;
                methodName = body.METHOD_NAME;
            }
            catch (e) {
                console.error('Failed to parse request body for METHOD_NAME', e);
                methodName = name; // fallback
            }
            this.requestUrl = methodName;
        }
        else {
            this.requestUrl = name;
        }
        this.pendingConfig = response.config;
        this.response = response;
        return new Promise((resolve, reject) => {
            this.pendingResolve = resolve;
            this.pendingReject = reject;
            setTimeout(() => {
                this.otpModal?.openModal();
            }, 10);
        });
    }
    /**
     * Displays error toasts unless the endpoint is configured to suppress them.
     */
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: error,
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    /**
     * Handles the OTP modal completion.
     * Retries the request or cancels based on user action.
     */
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const { otp, type } = ev.detail;
        if (type === 'cancel') {
            const cancelResp = {
                config: this.pendingConfig,
                data: { cancelled: true, baseOTPUrl: this.baseOTPUrl },
                status: 0,
                statusText: 'OTP Cancelled',
                headers: {},
                request: {},
            };
            this.pendingResolve(cancelResp);
        }
        else if (type === 'success') {
            if (!otp) {
                this.pendingReject(new Error('OTP cancelled by user'));
            }
            else if (this.baseOTPUrl === 'Check_OTP_Necessity') {
                // don't resend, just resolve with the original response
                this.pendingResolve(this.response);
            }
            else {
                try {
                    const retryConfig = {
                        ...this.pendingConfig,
                        data: typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {},
                    };
                    const resp = await axios.axios.request(retryConfig);
                    this.pendingResolve(resp);
                }
                catch (err) {
                    this.pendingReject(err);
                }
            }
        }
        // common clean-up
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
        this.showModal = false;
        this.baseOTPUrl = null;
    }
    render() {
        return (index.h(index.Host, { key: '524e395377a9b2d69c7f3d6513731baaa2d8d41c' }, this.isLoading && !this.isPageLoadingStopped && (index.h("div", { key: '80a20aa01326bcea11324ac327c3e01aa678870b', class: "loadingScreenContainer" }, index.h("div", { key: '3142f6b1fdad0cd6035225a7b416c353879c093d', class: "loaderContainer" }, index.h("ir-spinner", { key: '51a01d772fe7e648fcd23c91d895bb59706083a0' })))), this.showModal && (index.h("ir-otp-modal", { key: '241985ec69d4257e05b33ba36feb6e3747062837', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLoadingScreenCss = ".loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:white;margin:0 !important;padding:0 !important}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (index.h("div", { key: '2dfff849809dc7cc6c55d0ee4d45721c8c954c72', class: "loader__container", "data-testid": "loading-screen" }, index.h("wa-spinner", { key: '5ea050750eaaac34ea7339160ff8203ce2deb3a1', style: { fontSize: '2.5rem' } })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irOtpCss = ".otp-input-wrapper.sc-ir-otp{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit.sc-ir-otp{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0;font-size:24px;font-weight:500;text-align:center;background-color:#fff;padding:0 !important}.otp-digit.sc-ir-otp:disabled{background-color:#e9ecef;cursor:not-allowed}input[type='number'].sc-ir-otp::-webkit-inner-spin-button,input[type='number'].sc-ir-otp::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number'].sc-ir-otp{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit.sc-ir-otp{width:35px;height:45px;font-size:20px}.otp-input-wrapper.sc-ir-otp{gap:6px}}@media (max-width: 360px){.otp-digit.sc-ir-otp{width:30px;height:40px;font-size:18px}.otp-input-wrapper.sc-ir-otp{gap:4px}}";
const IrOtpStyle0 = irOtpCss;

const IrOtp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpChange = index.createEvent(this, "otpChange", 7);
        this.otpComplete = index.createEvent(this, "otpComplete", 7);
    }
    /**
     * The length of the OTP code
     */
    length = 6;
    /**
     * The default OTP code
     */
    defaultValue;
    /**
     * Whether the input is disabled
     */
    disabled = false;
    /**
     * Placeholder character to display
     */
    placeholder = '';
    /**
     * Input type - can be 'text', 'password', 'number', or 'tel'
     */
    type = 'number';
    /**
     * Auto focus on the first input when component loads
     */
    autoFocus = true;
    /**
     * Whether to mask the input (show dots instead of text)
     */
    secure = false;
    /**
     * Allow only numbers (0-9) as input
     */
    numbersOnly = false;
    /**
     * Event emitted when the OTP value changes
     */
    otpChange;
    /**
     * Event emitted when the OTP is complete
     */
    otpComplete;
    /**
     * Current OTP value as an array of characters
     */
    otpValues = [];
    /**
     * Reference to input elements
     */
    inputRefs = [];
    /**
     * Initialize the component
     */
    componentWillLoad() {
        this.otpValues = Array(this.length).fill('');
        if (this.defaultValue) {
            this.setValue(this.defaultValue);
        }
    }
    /**
     * Focus the first input after component renders
     */
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            setTimeout(() => {
                this.inputRefs[0].focus();
            }, 0);
        }
    }
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength) {
        if (newLength < 1)
            return;
        const oldLength = this.otpValues.length;
        if (newLength > oldLength) {
            // Add empty slots
            this.otpValues = [...this.otpValues, ...Array(newLength - oldLength).fill('')];
        }
        else if (newLength < oldLength) {
            // Remove extra slots
            this.otpValues = this.otpValues.slice(0, newLength);
        }
        this.emitChanges();
    }
    /**
     * Update the current OTP value at the specified index
     */
    handleInput = (event, index) => {
        const input = event.target;
        let value = input.value;
        // For number input type, restrict to digits only
        if (this.numbersOnly) {
            value = value.replace(/[^0-9]/g, '');
        }
        // Take only the last character if someone enters multiple
        if (value.length > 1) {
            value = value.slice(-1);
            input.value = value;
        }
        this.otpValues[index] = value;
        this.emitChanges();
        // Move to next input if this one is filled
        if (value && index < this.length - 1) {
            this.inputRefs[index + 1].focus();
        }
    };
    /**
     * Handle keyboard navigation
     */
    handleKeyDown = (event, index) => {
        switch (event.key) {
            case 'Backspace':
                if (!this.otpValues[index] && index > 0) {
                    // If current field is empty and backspace is pressed, go to previous field
                    this.inputRefs[index - 1].focus();
                    // Prevent default to avoid browser navigation
                    event.preventDefault();
                }
                break;
            case 'Delete':
                // Clear current input on delete
                this.otpValues[index] = '';
                this.emitChanges();
                break;
            case 'ArrowLeft':
                // Move to previous input on left arrow
                if (index > 0) {
                    this.inputRefs[index - 1].focus();
                    event.preventDefault();
                }
                break;
            case 'ArrowRight':
                // Move to next input on right arrow
                if (index < this.length - 1) {
                    this.inputRefs[index + 1].focus();
                    event.preventDefault();
                }
                break;
            case 'Home':
                // Move to first input
                this.inputRefs[0].focus();
                event.preventDefault();
                break;
            case 'End':
                // Move to last input
                this.inputRefs[this.length - 1].focus();
                event.preventDefault();
                break;
        }
    };
    /**
     * Handle paste event to populate the OTP fields
     */
    handlePaste = (event, index) => {
        event.preventDefault();
        const pastedData = event.clipboardData?.getData('text') || '';
        // If numbersOnly is enabled, filter non-number characters
        const filteredData = this.numbersOnly ? pastedData.replace(/[^0-9]/g, '') : pastedData;
        // Fill OTP values with pasted data
        for (let i = 0; i < Math.min(filteredData.length, this.length - index); i++) {
            this.otpValues[index + i] = filteredData[i];
        }
        // Update inputs with new values
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        // Focus on the next empty input or the last one
        const nextEmptyIndex = this.otpValues.findIndex(val => !val);
        if (nextEmptyIndex !== -1 && nextEmptyIndex < this.length) {
            this.inputRefs[nextEmptyIndex].focus();
        }
        else {
            this.inputRefs[this.length - 1].focus();
        }
        this.emitChanges();
    };
    /**
     * Focus handler to select all text when focused
     */
    handleFocus = (event) => {
        const input = event.target;
        if (input.value) {
            setTimeout(() => input.select(), 0);
        }
    };
    /**
     * Helper method to emit change events
     */
    emitChanges() {
        const otpValue = this.otpValues.join('');
        this.otpChange.emit(otpValue);
        // If all fields are filled, trigger the complete event
        if (this.otpValues.every(val => val !== '') && this.otpValues.length === this.length) {
            this.otpComplete.emit(otpValue);
        }
    }
    /**
     * Manually clear all inputs
     */
    clear() {
        this.otpValues = Array(this.length).fill('');
        this.inputRefs.forEach(input => {
            input.value = '';
        });
        this.emitChanges();
        // Focus the first input after clearing
        if (this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    /**
     * Set OTP values programmatically
     */
    setValue(value) {
        const valueArray = value.split('');
        for (let i = 0; i < this.length; i++) {
            this.otpValues[i] = i < valueArray.length ? valueArray[i] : '';
        }
        // Update the actual input elements
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        this.emitChanges();
    }
    render() {
        return (index.h(index.Host, { key: '12b9e4cc14ed689bd4996fdccea08b5991ff8e42', class: "otp-input-container" }, index.h("div", { key: '08bd8061739df0256e6b41388c854a57bbcc7746', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index$1) => (index.h("input", { ref: el => (this.inputRefs[index$1] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit form-control input-sm", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index$1], onInput: e => this.handleInput(e, index$1), onKeyDown: e => this.handleKeyDown(e, index$1), onPaste: e => this.handlePaste(e, index$1), onFocus: this.handleFocus, "aria-label": `Digit ${index$1 + 1} of ${this.length}` }))))));
    }
    static get watchers() { return {
        "length": ["handleLengthChange"]
    }; }
};
IrOtp.style = IrOtpStyle0;

const irOtpModalCss = ":host{display:block}:root{--otp-modal-padding:1.5rem}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.otp-modal-header{border-bottom:0px !important}.otp-modal{z-index:9999999 !important;border:none;padding:0 !important;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.35rem;outline:0}.otp-modal-content{background-color:white;border:none;border-radius:0.35rem;outline:0}.otp-modal-title{margin-bottom:0;line-height:1.45}.otp-modal-body{max-height:100% !important;padding:0 var(--otp-modal-padding)}.otp-modal-header{display:flex;justify-content:space-between;padding:var(--otp-modal-padding);padding-bottom:1rem;border-top-left-radius:0.35rem;border-top-right-radius:0.35rem}.otp-modal-dialog{z-index:9999999 !important}.otp-modal-footer{border-top:0 !important;display:flex;gap:0.5rem;flex-direction:column;padding:var(--otp-modal-padding);padding-top:0.5rem !important}.verification-message{max-width:90%}.modal-loading-container{height:250px;width:80vw}@media (min-width: 768px){.otp-modal-dialog,.otp-modal-content{width:fit-content !important}.otp-modal-footer{flex-direction:row;align-items:center}.modal-loading-container{width:380px !important}.verification-message{max-width:350px !important}}";
const IrOtpModalStyle0 = irOtpModalCss;

const IrOtpModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpFinished = index.createEvent(this, "otpFinished", 7);
    }
    language = 'en';
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer = 60;
    /** URL or endpoint used to validate the OTP */
    requestUrl;
    /** URL or endpoint used to validate the OTP */
    baseOTPUrl;
    /** Whether the resend option should be visible */
    showResend = true;
    /** User's email address to display in the modal and send the OTP to */
    email;
    /** Number of digits the OTP should have */
    otpLength = 6;
    /** ticket for verifying and resending the verification code */
    ticket;
    otp = '';
    error = '';
    isLoading = false;
    timer = 60;
    dialogRef;
    timerInterval;
    systemService = new system_service.SystemService();
    roomService = new room_service.RoomService();
    tokenService = new Token.Token();
    otpVerificationSchema = index$1.z.object({ email: index$1.z.string().nonempty(), requestUrl: index$1.z.string().nonempty(), otp: index$1.z.string().length(this.otpLength) });
    /** Emits the final OTP (or empty on cancel) */
    otpFinished;
    isInitializing;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.fetchLocale();
        }
    }
    handleKeyDownChange(e) {
        if (e.key === 'Escape' && this.dialogRef?.open) {
            e.preventDefault();
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        // $(this.modalRef).modal({ backdrop: 'static', keyboard: false });
        // $(this.modalRef).modal('show');
        if (typeof this.dialogRef.showModal === 'function') {
            this.dialogRef.showModal();
        }
        else {
            // fallback for browsers without dialog support
            this.dialogRef.setAttribute('open', '');
        }
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        // $(this.modalRef).modal('hide');
        if (typeof this.dialogRef.close === 'function') {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.removeAttribute('open');
        }
        this.otp = null;
        this.clearTimer();
    }
    async fetchLocale() {
        if (!this.tokenService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await this.roomService.fetchLanguage(this.language, ['_USER_MGT']);
        this.isInitializing = false;
    }
    resetState() {
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.clearTimer();
    }
    startTimer() {
        this.clearTimer();
        this.timerInterval = window.setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            }
            else {
                this.clearTimer();
            }
        }, 1000);
    }
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    async focusFirstInput() {
        await new Promise(r => setTimeout(r, 50));
        const first = this.dialogRef.querySelector('input');
        first && first.focus();
    }
    handleOtpComplete = (e) => {
        this.error = '';
        this.otp = e.detail;
    };
    async verifyOtp() {
        if (this.otp.length < this.otpLength)
            return;
        this.isLoading = true;
        this.otpVerificationSchema.parse({
            otp: this.otp,
            requestUrl: this.requestUrl,
            email: this.email,
        });
        try {
            await this.systemService.validateOTP({ METHOD_NAME: this.requestUrl, OTP: this.otp });
            this.otpFinished.emit({ otp: this.otp, type: 'success' });
            this.closeModal();
        }
        catch (err) {
            this.error = 'Verification failed. Please try again.';
        }
        finally {
            this.isLoading = false;
        }
    }
    async resendOtp() {
        if (this.timer > 0)
            return;
        // Resend otp
        try {
            await this.systemService.resendOTP({ METHOD_NAME: this.requestUrl });
            this.timer = 60;
            this.startTimer();
        }
        catch (error) {
            console.log(error);
        }
    }
    handleCancelClicked() {
        if (this.baseOTPUrl === 'Check_OTP_Necessity') {
            this.closeModal();
            this.otpFinished.emit({
                otp: null,
                type: 'cancelled',
            });
            return;
        }
        window.location.reload();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (index.h(index.Host, { key: 'b15d76e8ff39fde344e26185978051afb7af7493' }, index.h("dialog", { key: '917437501eb9d8162e94b8d793068a522ed044ec', ref: el => (this.dialogRef = el), class: "otp-modal", "aria-modal": "true" }, index.h("form", { key: '311c9540415bd375018ef5b7b77cedb0893b1703', method: "dialog", class: "otp-modal-content" }, this.isInitializing || !locales_store.locales.entries ? (index.h("div", { class: 'd-flex align-items-center justify-content-center modal-loading-container' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("header", { class: "otp-modal-header" }, index.h("h5", { class: "otp-modal-title" }, locales_store.locales.entries.Lcz_VerifyYourIdentity)), index.h("section", { class: "otp-modal-body d-flex align-items-center flex-column" }, index.h("p", { class: "verification-message text-truncate" }, locales_store.locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), index.h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && index.h("p", { class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (index.h(index.Fragment, null, this.timer > 0 ? (index.h("p", { class: "small mt-1" }, locales_store.locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (index.h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: 'Didn’t receive code? Resend' }))))), index.h("footer", { class: "otp-modal-footer justify-content-auto" }, index.h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), index.h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales_store.locales.entries.Lcz_VerifyNow, isLoading: this.isLoading, btn_disabled: this.otp?.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrOtpModal.style = IrOtpModalStyle0;

const irPageCss = ".sc-ir-page-h{display:block;height:100%}.page-title.sc-ir-page{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.ir-page__container.sc-ir-page{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header.sc-ir-page{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}";
const IrPageStyle0 = irPageCss;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: 'ba0945fdf03eadb2e6f84e9399f2c0708c62a3d2' }, index.h("ir-interceptor", { key: '18892e41437360535d7d9d6e1e5ee8d6f212cc8e' }), index.h("ir-toast", { key: '12590ea4907be56a43e02518259860ab1ed55660' }), index.h("main", { key: 'dd46b5cff5ca791350d0c291c1c44dd6228064f1', class: "ir-page__container" }, index.h("header", { key: '567a74318f7e4a1823ddec1d12f84f35e7d58eac', class: "tax-page__header" }, index.h("slot", { key: 'dadf4fbbc4b63560b5d37737b5f2cd50b7f90032', name: "heading" }, index.h("div", { key: 'a1225ffde8f453926a8a3a469f665687e70661f2', class: "tax-page__heading" }, index.h("h3", { key: '035ea172551a1366ec4c72e7d7d7f0869b2fba88', class: "page-title" }, this.label), this.description && index.h("p", { key: '56a11d093e6eab887941b25223303ef6b0849a51', class: "tax-page__subtitle" }, this.description))), index.h("slot", { key: '86605719086bfcfa2476a1305f4e3a6f0a4c8526', name: "page-header" })), index.h("slot", { key: '054e4e4bf87c5aa86a1a753756be18c0a846983d' }))));
    }
};
IrPage.style = IrPageStyle0;

const irPaginationCss = ".sc-ir-pagination-h{display:block;font-family:var(--font-family, inherit);font-size:var(--font-size, 0.875rem);color:var(--text-color, #333)}.pagination-container.sc-ir-pagination{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:0.5rem 0;min-height:2.5rem}.pagination__current-page-select.sc-ir-pagination{margin-left:0.5rem;margin-right:0.5rem;max-width:70px}.pagination-container--disabled.sc-ir-pagination{opacity:0.6;pointer-events:none}.pagination-info.sc-ir-pagination{margin:0;color:var(--text-muted, #6c757d);font-size:var(--font-size-sm, 0.875rem);white-space:nowrap;padding:0}.buttons-container.sc-ir-pagination{display:flex;align-items:center;flex-wrap:wrap}.buttons-container.sc-ir-pagination ir-button.sc-ir-pagination{flex-shrink:0}.buttons-container.sc-ir-pagination ir-select.sc-ir-pagination{flex-shrink:0}.page-size-select.sc-ir-pagination{margin:0 0.5rem;min-width:5rem}@media (min-width: 768px){.pagination-container.sc-ir-pagination{flex-direction:row;align-items:center;justify-content:space-between;gap:1.25rem}.pagination-info.sc-ir-pagination{order:0}.buttons-container.sc-ir-pagination{justify-content:flex-end}}@media (max-width: 480px){.pagination-container.sc-ir-pagination{gap:0.5rem}.buttons-container.sc-ir-pagination{justify-content:center;gap:0.125rem}.pagination-info.sc-ir-pagination{text-align:center;width:100%}}@media (prefers-contrast: high){.pagination-info.sc-ir-pagination{color:var(--text-color, #000)}.pagination-container--disabled.sc-ir-pagination{opacity:0.8}}@media (prefers-reduced-motion: reduce){*.sc-ir-pagination{transition:none !important}}";
const IrPaginationStyle0 = irPaginationCss;

const IrPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChange = index.createEvent(this, "pageChange", 7);
        this.pageSizeChange = index.createEvent(this, "pageSizeChange", 7);
        this.firstPage = index.createEvent(this, "firstPage", 7);
        this.lastPage = index.createEvent(this, "lastPage", 7);
        this.previousPage = index.createEvent(this, "previousPage", 7);
        this.nextPage = index.createEvent(this, "nextPage", 7);
    }
    /**
     * Total number of pages available
     */
    pages = 0;
    /**
     * List of all page size
     */
    pageSizes;
    /**
     * Enables a dropdown for changing the number of items displayed per page.
     *
     * When set to `true`, users can select a page size from the `pageSizes` array.
     *
     * **Note:** This prop requires the `pageSizes` prop to be defined with one or more numeric values.
     * If `pageSizes` is empty or undefined, the page size selector will not be displayed.
     *
     * @default false
     */
    allowPageSizeChange;
    /**
     * Total number of records/items
     */
    total = 0;
    /**
     * Current active page number (1-based)
     */
    currentPage = 1;
    /**
     * Range of items currently being displayed
     */
    showing = { from: 0, to: 0 };
    /**
     * Whether to show total records count
     */
    showTotalRecords = true;
    /**
     * Label for the record type (e.g., 'items', 'tasks', 'records')
     */
    recordLabel = '';
    /**
     * Whether the pagination is disabled
     */
    disabled = false;
    /**
     * Page size for calculations
     */
    pageSize = 10;
    /**
     * Emitted when the current page changes
     */
    pageChange;
    /**
     * Emitted when the page size changes
     */
    pageSizeChange;
    /**
     * Emitted when the first page is requested
     */
    firstPage;
    /**
     * Emitted when the last page is requested
     */
    lastPage;
    /**
     * Emitted when the previous page is requested
     */
    previousPage;
    /**
     * Emitted when the next page is requested
     */
    nextPage;
    /**
     * Watch for changes to currentPage prop
     */
    validateCurrentPage(newValue) {
        if (newValue < 1) {
            console.warn('currentPage must be greater than 0');
        }
        if (newValue > this.pages) {
            console.warn('currentPage cannot be greater than total pages');
        }
    }
    /**
     * Watch for changes to pages prop
     */
    validatePages(newValue) {
        if (newValue < 0) {
            console.warn('pages must be greater than or equal to 0');
        }
    }
    /**
     * Renders the item range display text
     * @returns Formatted string showing current range and total
     */
    renderItemRange() {
        if (!this.showTotalRecords) {
            return '';
        }
        const from = Math.max(this.showing.from, 1);
        const to = Math.min(this.showing.to, this.total);
        return `${'View'} ${from} - ${to} ${'of'} ${this.total} ${this.recordLabel}`;
    }
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    handlePageChange(newPage, eventType = 'direct') {
        if (this.disabled || newPage < 1 || newPage > this.pages || newPage === this.currentPage) {
            return;
        }
        const eventData = {
            currentPage: newPage,
            totalPages: this.pages,
            pageSize: this.pageSize,
        };
        // Emit specific event type
        switch (eventType) {
            case 'first':
                this.firstPage.emit(eventData);
                break;
            case 'previous':
                this.previousPage.emit(eventData);
                break;
            case 'next':
                this.nextPage.emit(eventData);
                break;
            case 'last':
                this.lastPage.emit(eventData);
                break;
        }
        // Always emit the general page change event
        this.pageChange.emit(eventData);
    }
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    handlePageSizeChange(newPageSize) {
        const eventData = {
            currentPage: this.currentPage,
            totalPages: this.pages,
            pageSize: newPageSize,
        };
        // Emit specific event type
        this.pageSizeChange.emit(eventData);
    }
    /**
     * Checks if the component should be rendered
     * @returns True if pagination should be shown
     */
    shouldRender() {
        return this.pages > 0 && this.total > 0;
    }
    render() {
        if (!this.shouldRender()) {
            return null;
        }
        const isFirstPage = this.currentPage === 1;
        const isLastPage = this.currentPage === this.pages;
        console.log(this.currentPage);
        return (index.h("div", { class: {
                'pagination-container': true,
                'pagination-container--disabled': this.disabled,
            }, role: "navigation", "aria-label": "Pagination Navigation" }, this.showTotalRecords && (index.h("p", { class: "pagination-info", "aria-live": "polite" }, this.renderItemRange())), index.h("div", { class: "buttons-container" }, this.allowPageSizeChange && this.pageSizes && (index.h("wa-select", { value: String(this.pageSize), class: "pagination__current-page-select", onchange: e => this.handlePageSizeChange(+e.target.value), "aria-label": `Current page ${this.currentPage} of ${this.pages}`, disabled: this.disabled, size: "small", defaultValue: String(this.pageSize) }, this.pageSizes.map(size => (index.h("wa-option", { value: size.toString(), key: `page-size-${this.recordLabel}-${size}` }, size))))), this.pages > 1 && (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: () => this.handlePageChange(this.currentPage - 1, 'previous'), variant: "neutral", appearance: "plain", disabled: isFirstPage || this.disabled, "aria-label": "Go to previous page" }, index.h("wa-icon", { name: "angle-left", label: "Go to previous page" })), index.h("wa-select", { value: this.currentPage?.toString(), class: "pagination__current-page-select", onchange: e => this.handlePageChange(+e.target.value, 'direct'), "aria-label": `Current page ${this.currentPage} of ${this.pages}`, disabled: this.disabled, size: "small", defaultValue: this.currentPage ? this.currentPage?.toString() : '1' }, Array.from(Array(this.pages), (_, i) => i + 1).map(i => (index.h("wa-option", { value: i.toString(), key: `${this.recordLabel}-${i}` }, i)))), index.h("ir-custom-button", { "aria-label": "Go to next page", onClickHandler: () => this.handlePageChange(this.currentPage + 1, 'next'), disabled: isLastPage || this.disabled, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "angle-right", label: "Go to next page" })))))));
    }
    static get watchers() { return {
        "currentPage": ["validateCurrentPage"],
        "pages": ["validatePages"]
    }; }
};
IrPagination.style = IrPaginationStyle0;

const irPreviewScreenDialogCss = ":host{display:block}.ir-fullscreen-dialog::part(dialog){width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border-radius:0}@media print{@page {size:A4;margin:0}html,body{margin:0;padding:0;height:auto}.ir-fullscreen-dialog::part(dialog){position:static !important;width:auto !important;height:auto !important;max-height:none !important;overflow:visible !important;transform:none !important}.ir-fullscreen-dialog::part(header){display:none !important}body *{visibility:hidden}.ir-fullscreen-dialog,.ir-fullscreen-dialog *{visibility:visible}.ir-fullscreen-dialog{position:absolute;top:0;left:0;width:100%}}";
const IrPreviewScreenDialogStyle0 = irPreviewScreenDialogCss;

const IrPreviewScreenDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.previewAction = index.createEvent(this, "previewAction", 7);
        this.openChanged = index.createEvent(this, "openChanged", 7);
    }
    get el() { return index.getElement(this); }
    actionIconByType = {
        print: 'file-pdf',
        download: 'download',
    };
    printContainer;
    printPlaceholder;
    isPrintLayoutActive = false;
    handleBeforePrint = () => {
        if (!this.open) {
            return;
        }
        this.preparePrintLayout();
    };
    handleAfterPrint = () => {
        this.restorePrintLayout();
    };
    /**
     * The dialog's label as displayed in the header.
     * Required for accessibility and announced by assistive technologies.
     */
    label = 'Preview';
    /**
     * Indicates whether or not the preview dialog is open.
     * Toggle this attribute or use {@link openDialog} / {@link closeDialog} to control visibility.
     */
    open = false;
    /**
     * Determines which built-in action is rendered in the header.
     * `print` triggers `window.print()` while `download` downloads the configured URL.
     */
    action = 'print';
    /**
     * URL used when the action is set to `download`.
     * Can be overridden per invocation via {@link triggerAction}.
     */
    downloadUrl;
    /**
     * Suggested file name for downloaded previews.
     */
    downloadFileName;
    /**
     * When `true`, hides the default header action button so a custom implementation can be slotted.
     */
    hideDefaultAction = false;
    /**
     * Accessible label used for the default header action button.
     * Falls back to context-sensitive defaults when omitted.
     */
    actionButtonLabel;
    /**
     * Fired whenever the preview action is executed, either via the header button or programmatically.
     */
    previewAction;
    openChanged;
    _id = `download_btn_${v4.v4()}`;
    /**
     * Opens the preview dialog.
     */
    async openDialog() {
        this.open = true;
    }
    /**
     * Closes the preview dialog.
     */
    async closeDialog() {
        this.open = false;
    }
    /**
     * Executes the configured preview action.
     *
     * @param action Optional override of the default action type.
     * @param url Optional URL used for downloads. Falls back to the `downloadUrl` prop.
     * @param fileName Optional file name suggestion for downloads.
     * @returns Resolves with `true` when the action was attempted, `false` when prerequisites are missing.
     */
    async triggerAction(action = this.action, url, fileName) {
        const resolvedUrl = url ?? this.downloadUrl;
        const resolvedFileName = fileName ?? this.downloadFileName;
        let result = false;
        if (action === 'print') {
            result = this.runPrintAction();
        }
        else {
            result = this.runDownloadAction(resolvedUrl, resolvedFileName);
        }
        this.previewAction.emit({ action, url: resolvedUrl });
        return result;
    }
    runPrintAction() {
        if (typeof window === 'undefined' || typeof window.print !== 'function') {
            console.warn('[ir-preview-screen-dialog] window.print is not available in this environment.');
            return false;
        }
        this.preparePrintLayout();
        try {
            window.print();
        }
        finally {
            this.restorePrintLayout();
        }
        return true;
    }
    runDownloadAction(url, fileName) {
        if (!url) {
            console.warn('[ir-preview-screen-dialog] No download URL was provided.');
            return false;
        }
        if (typeof document === 'undefined') {
            console.warn('[ir-preview-screen-dialog] document is not available in this environment.');
            return false;
        }
        const anchor = document.createElement('a');
        anchor.href = url;
        if (fileName) {
            anchor.download = fileName;
        }
        anchor.target = '_blank';
        anchor.rel = 'noopener';
        anchor.style.display = 'none';
        const parent = document.body || document.documentElement;
        parent?.appendChild(anchor);
        anchor.click();
        anchor.remove();
        return true;
    }
    getActionLabel() {
        if (this.actionButtonLabel) {
            return this.actionButtonLabel;
        }
        return this.action === 'print' ? 'Print preview' : 'Download preview';
    }
    shouldDisableActionButton() {
        return this.action === 'download' && !this.downloadUrl;
    }
    handleActionButtonClick() {
        this.triggerAction();
    }
    preparePrintLayout() {
        if (typeof document === 'undefined' || this.printContainer || this.isPrintLayoutActive) {
            return;
        }
        const contentNodes = Array.from(this.el.children).filter((child) => !child.hasAttribute('slot'));
        if (!contentNodes.length) {
            return;
        }
        const placeholder = document.createComment('ir-preview-print-placeholder');
        this.el.insertBefore(placeholder, contentNodes[0]);
        const container = document.createElement('div');
        container.className = 'ir-preview-print-container';
        contentNodes.forEach(node => {
            container.appendChild(node);
        });
        document.body.appendChild(container);
        document.body.classList.add('ir-preview-dialog-print-mode');
        this.printPlaceholder = placeholder;
        this.printContainer = container;
        this.isPrintLayoutActive = true;
    }
    restorePrintLayout() {
        if (!this.printContainer || !this.printPlaceholder || typeof document === 'undefined') {
            return;
        }
        const targetParent = this.printPlaceholder.parentNode;
        if (targetParent) {
            while (this.printContainer.firstChild) {
                targetParent.insertBefore(this.printContainer.firstChild, this.printPlaceholder);
            }
        }
        this.printPlaceholder.remove();
        this.printContainer.remove();
        document.body.classList.remove('ir-preview-dialog-print-mode');
        this.printPlaceholder = undefined;
        this.printContainer = undefined;
        this.isPrintLayoutActive = false;
    }
    componentDidLoad() {
        if (typeof window === 'undefined') {
            return;
        }
        window.addEventListener('beforeprint', this.handleBeforePrint);
        window.addEventListener('afterprint', this.handleAfterPrint);
    }
    disconnectedCallback() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('beforeprint', this.handleBeforePrint);
            window.removeEventListener('afterprint', this.handleAfterPrint);
        }
        this.restorePrintLayout();
    }
    render() {
        return (index.h("ir-dialog", { key: '801b53bf2f55a6246f37b635b9fba242bd2ced4e', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openChanged.emit(false);
            }, label: this.label, open: this.open, class: "ir-fullscreen-dialog" }, !this.hideDefaultAction && (index.h(index.Fragment, { key: '416157347c265e2ee26087a7236984761a29f7f2' }, index.h("wa-tooltip", { key: 'beeed8bca92464db6f2ea5ec9c8bdf7e5e3f5527', for: this._id }, "Print PDF"), index.h("ir-custom-button", { key: '5a3a098450b04ed4ef42cb049a32de62a09ef56b', id: this._id, size: "medium", slot: "header-actions", variant: "neutral", appearance: "plain", onClickHandler: this.handleActionButtonClick.bind(this), disabled: this.shouldDisableActionButton() }, index.h("wa-icon", { key: '7660a0d88cc6a5c64924a24f2764f3b76ccb00c2', name: this.actionIconByType[this.action], label: this.getActionLabel(), "aria-label": this.getActionLabel() })))), index.h("slot", { key: '8904dcc2b4f9412e456a51757ac3c9c6f78847c6' })));
    }
};
IrPreviewScreenDialog.style = IrPreviewScreenDialogStyle0;

const irSpinnerCss = "";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Size of the spinner (diameter).
     * Example: `size={2}` with `unit="rem"` sets spinner to `2rem`.
     */
    size;
    /**
     * Thickness of the spinner's border.
     * Example: `borderWidth={4}` renders a `4px` or `4rem` thick border.
     */
    borderWidth;
    /**
     * CSS unit used for `size` and `borderWidth`.
     * Can be `'px'` or `'rem'`.
     */
    unit = 'rem';
    /**
     * Color of the spinner.
     * Accepts any valid CSS color string.
     */
    color;
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    /**
     * Applies CSS custom properties based on current prop values.
     */
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return (index.h(index.Host, { key: 'a6c3afe93ea048c9f31690ca2cda4c5aed40deed' }, index.h("wa-spinner", { key: '8d42ba3ebd423b1017531e2d8bca8de22616d392', style: { fontSize: '2rem' } })));
    }
    static get watchers() { return {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }; }
};
IrSpinner.style = IrSpinnerStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get element() { return index.getElement(this); }
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'bottom-left';
    /**
     * Array of active toast messages.
     */
    toasts = [];
    // @Listen('toast', { target: 'body' })
    // onToast(event: CustomEvent<IToast>) {
    //   const toast: IToast = event.detail;
    //   this.showToast(toast);
    // }
    // private showToast(toast: IToast) {
    //   const toastrOptions = {
    //     positionClass: 'toast-top-right',
    //     closeButton: true,
    //     timeOut: toast.duration || 5000,
    //   };
    //   switch (toast.type) {
    //     case 'success':
    //       toastr.success(toast.title, '', toastrOptions);
    //       break;
    //     case 'error':
    //       toastr.error(toast.title, '', toastrOptions);
    //       break;
    //   }
    // }
    render() {
        return index.h("ir-toast-provider", { key: '5e2da58b75981030b3e928a8cb5db511f9588cc2' });
    }
};
IrToast.style = IrToastStyle0;

const irToastAlertCss = ":host{--toast-shadow:var(--wa-shadow-l);--toast-translate:16px;--toast-accent-fg:#0f172a;display:block;box-sizing:border-box;max-width:min(420px, calc(100vw - 32px));pointer-events:auto;font-family:inherit}:host([data-position*='left']){--toast-translate:-16px}.toast{box-shadow:var(--toast-shadow);animation:toast-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;border-radius:var(--wa-panel-border-radius)}:host([data-leaving='true']) .toast{animation:toast-exit 200ms ease forwards}:host(:focus-within) .toast{box-shadow:0 0 0 2px #93c5fd, var(--toast-shadow)}.toast__leading{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;color:var(--toast-accent-fg)}.toast__icon{width:20px;height:20px;fill:currentColor}.toast__body{flex:1 1 0%;min-width:0;display:flex;flex-direction:column;gap:0.25rem}.toast__title{margin:0;font-weight:600;font-size:0.95rem}.toast__description{margin:0;font-size:0.85rem;line-height:1.35;opacity:0.85}@keyframes toast-enter{from{opacity:0;transform:translateX(var(--toast-translate)) translateY(6px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes toast-exit{from{opacity:1;transform:translateX(0) translateY(0)}to{opacity:0;transform:translateX(calc(var(--toast-translate) * 1.25)) translateY(-4px)}}@media (prefers-reduced-motion: reduce){.toast{animation:none}:host([data-leaving='true']) .toast{animation:none}}:host([variant='success']){--toast-accent-fg:#047857}:host([variant='warning']){--toast-accent-fg:#92400e}:host([variant='danger']){--toast-accent-fg:#b91c1c}";
const IrToastAlertStyle0 = irToastAlertCss;

const IrToastAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irToastDismiss = index.createEvent(this, "irToastDismiss", 7);
        this.irToastAction = index.createEvent(this, "irToastAction", 7);
        this.irToastInteractionChange = index.createEvent(this, "irToastInteractionChange", 7);
    }
    /** Unique identifier passed back to the provider when interacting with the toast */
    toastId;
    /** Heading displayed at the top of the toast */
    label;
    /** Plain text description for the toast body */
    description;
    /** Maps to visual style tokens */
    variant = 'info';
    /** Whether the close button should be rendered */
    dismissible = true;
    /** Optional primary action label */
    actionLabel;
    /** Indicates when the provider is playing the exit animation */
    leaving = false;
    /** Toast position drives enter/exit direction */
    position = 'top-right';
    irToastDismiss;
    irToastAction;
    irToastInteractionChange;
    interacting = false;
    setInteracting = (interacting) => {
        if (this.interacting === interacting) {
            return;
        }
        this.interacting = interacting;
        this.irToastInteractionChange.emit({ id: this.toastId, interacting });
    };
    getIcon() {
        switch (this.variant) {
            case 'success':
                return index.h("wa-icon", { slot: "icon", name: "circle-check" });
            case 'warning':
                return index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            case 'danger':
                return index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            default:
                return index.h("wa-icon", { slot: "icon", name: "circle-info" });
        }
    }
    get calloutVariant() {
        switch (this.variant) {
            case 'info':
                return 'neutral';
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'danger':
                return 'danger';
        }
    }
    render() {
        return (index.h("div", { key: '767cdc261c1edbdbad1283aeb273aa4f0fb6be16', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, index.h("wa-callout", { key: '8f20d3f8025a5ecc6ee70e291645cd372d39162c', variant: this.calloutVariant }, this.getIcon(), index.h("div", { key: 'd77110b8d46ed546a24829b0f11fa411ab070b90', class: "toast__body" }, this.label && index.h("h3", { key: 'c3ad568161ed096236d49d0119f8bbd02522235c', class: "toast__title" }, this.label), this.description && index.h("p", { key: '4ac090a06a8d3db2a5c6c2f7b58366f683690b6e', class: "toast__description" }, this.description)))));
    }
};
IrToastAlert.style = IrToastAlertStyle0;

const irToastProviderCss = ".sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}[popover]{all:unset}.toast-container{position:fixed;display:flex;flex-direction:column;gap:0.75rem;z-index:10000;max-width:100vw;box-sizing:border-box;padding:1rem;pointer-events:all}.toast-container--top{top:0}.toast-container--bottom{bottom:0}.toast-container--start{left:0;align-items:flex-start}.toast-container--center{left:50%;transform:translateX(-50%);align-items:center}.toast-container--end{right:0;align-items:flex-end}.toast-container.rtl.toast-container--start{left:auto;right:0;align-items:flex-end}.toast-container.rtl.toast-container--end{right:auto;left:0;align-items:flex-start}";
const IrToastProviderStyle0 = irToastProviderCss;

const IrToastProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    position = 'top-end';
    rtl = false;
    duration = 5000;
    toasts = [];
    popoverRef;
    toastTimers = new Map();
    componentDidLoad() {
        // Ensure popover API is supported
        if (this.popoverRef && typeof this.popoverRef.showPopover === 'function') {
            // Initially hide the popover
            try {
                this.popoverRef.hidePopover?.();
            }
            catch (e) {
                // Popover might not be shown yet
            }
        }
    }
    disconnectedCallback() {
        this.toastTimers.forEach(timer => {
            if (timer.timeoutId) {
                clearTimeout(timer.timeoutId);
            }
        });
        this.toastTimers.clear();
    }
    handleToast(event) {
        const detail = event?.detail || {};
        const payload = {
            ...detail,
            title: detail.title ?? 'Notification',
        };
        this.addToast(payload);
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const newToast = {
            id,
            type: toast.type ?? 'info',
            duration: toast.duration ?? this.duration,
            dismissible: toast.dismissible ?? true,
            leaving: false,
            ...toast,
        };
        this.toasts = [...this.toasts, newToast];
        this.announceToast(newToast);
        // Show popover when first toast is added
        if (this.toasts.length === 1) {
            this.showPopover();
        }
        if (newToast.duration && newToast.duration > 0) {
            this.startTimer(newToast.id, newToast.duration);
        }
        return id;
    }
    async removeToast(id) {
        // Mark toast as leaving for exit animation
        this.toasts = this.toasts.map(toast => (toast.id === id ? { ...toast, leaving: true } : toast));
        // Wait for animation to complete, then remove
        setTimeout(() => {
            this.clearTimer(id);
            this.toasts = this.toasts.filter(toast => toast.id !== id);
            // Hide popover when last toast is removed
            if (this.toasts.length === 0) {
                this.hidePopover();
            }
        }, 200); // Match the exit animation duration
    }
    async clearAllToasts() {
        this.toastTimers.forEach(timer => {
            if (timer.timeoutId) {
                clearTimeout(timer.timeoutId);
            }
        });
        this.toastTimers.clear();
        this.toasts = [];
        this.hidePopover();
    }
    showPopover() {
        if (this.popoverRef && typeof this.popoverRef.showPopover === 'function') {
            try {
                this.popoverRef.showPopover();
            }
            catch (e) {
                // Popover might already be shown
            }
        }
    }
    hidePopover() {
        if (this.popoverRef && typeof this.popoverRef.hidePopover === 'function') {
            try {
                this.popoverRef.hidePopover();
            }
            catch (e) {
                // Popover might already be hidden
            }
        }
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    startTimer(id, duration) {
        if (typeof window === 'undefined') {
            return;
        }
        this.clearTimer(id);
        const timeoutId = window.setTimeout(() => this.removeToast(id), duration);
        this.toastTimers.set(id, { timeoutId, remaining: duration, startedAt: Date.now() });
    }
    pauseTimer(id) {
        const timer = this.toastTimers.get(id);
        if (!timer || timer.timeoutId === undefined || timer.startedAt === undefined) {
            return;
        }
        clearTimeout(timer.timeoutId);
        const elapsed = Date.now() - timer.startedAt;
        const remaining = Math.max(timer.remaining - elapsed, 0);
        this.toastTimers.set(id, { remaining });
    }
    resumeTimer(id) {
        const timer = this.toastTimers.get(id);
        if (!timer || timer.timeoutId !== undefined) {
            return;
        }
        if (timer.remaining <= 0) {
            this.removeToast(id);
            return;
        }
        if (typeof window === 'undefined') {
            return;
        }
        const timeoutId = window.setTimeout(() => this.removeToast(id), timer.remaining);
        this.toastTimers.set(id, { timeoutId, remaining: timer.remaining, startedAt: Date.now() });
    }
    clearTimer(id) {
        const timer = this.toastTimers.get(id);
        if (timer?.timeoutId) {
            clearTimeout(timer.timeoutId);
        }
        this.toastTimers.delete(id);
    }
    announceToast(toast) {
        if (typeof document === 'undefined' || !this.el?.shadowRoot) {
            return;
        }
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', toast.type === 'error' || toast.type === 'danger' ? 'assertive' : 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${toast.type}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`;
        this.el.shadowRoot.appendChild(announcement);
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }
    getPositionClass() {
        const [vertical, horizontal] = this.position.split('-');
        return `toast-container--${vertical} toast-container--${horizontal}`;
    }
    getAlertPosition() {
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const horizontalMap = {
            start: this.rtl ? 'right' : 'left',
            end: this.rtl ? 'left' : 'right',
        };
        const resolvedHorizontal = horizontalMap[horizontal] ?? 'right';
        const resolvedVertical = vertical === 'bottom' ? 'bottom' : 'top';
        return `${resolvedVertical}-${resolvedHorizontal}`;
    }
    mapVariant(type) {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'error':
            case 'danger':
                return 'danger';
            default:
                return 'info';
        }
    }
    handleToastDismiss = (event) => {
        event.stopPropagation();
        this.removeToast(event.detail.id);
    };
    handleInteractionChange = (event) => {
        event.stopPropagation();
        if (event.detail.interacting) {
            this.pauseTimer(event.detail.id);
        }
        else {
            this.resumeTimer(event.detail.id);
        }
    };
    handlePopoverToggle = (event) => {
        // Prevent popover from being closed by user interaction or light dismiss
        if (this.toasts.length > 0) {
            event.preventDefault();
            this.showPopover();
        }
    };
    render() {
        return (index.h("div", { key: '5f2c5a31d53a5fe458625013098c41a60302e0e1', ref: el => (this.popoverRef = el), popover: "manual", class: "toast-popover", onToggle: this.handlePopoverToggle }, index.h("div", { key: '0d4f5f4694f81664544ab3ab7337d11bcb8a1103', class: `toast-container ${this.getPositionClass()} ${this.rtl ? 'rtl' : ''}`, role: "region", "aria-label": "Notifications", "aria-live": "polite", dir: this.rtl ? 'rtl' : 'ltr' }, this.toasts.map(toast => (index.h("div", { class: "toast-item", key: toast.id }, index.h("ir-toast-alert", { toastId: toast.id, label: toast.title, description: toast.description, dismissible: toast.dismissible, actionLabel: toast.actionLabel, position: this.getAlertPosition(), variant: this.mapVariant(toast.type), leaving: toast.leaving, onIrToastDismiss: this.handleToastDismiss, onIrToastInteractionChange: this.handleInteractionChange })))))));
    }
};
IrToastProvider.style = IrToastProviderStyle0;

const irValidatorCss = ":host{display:block;position:relative}.error-message{font-weight:var(--wa-form-control-hint-font-weight);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller);line-height:var(--wa-form-control-label-line-height);color:var(--wa-color-danger-fill-loud);}";
const IrValidatorStyle0 = irValidatorCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.validationChange = index.createEvent(this, "irValidationChange", 7);
        this.valueChange = index.createEvent(this, "irValueChange", 7);
    }
    get el() { return index.getElement(this); }
    /** Zod schema used to validate the child control's value. */
    schema;
    value;
    asyncValidation;
    showErrorMessage;
    /** Enables automatic validation on every value change. */
    autovalidate;
    /** Optional form id. Falls back to the closest ancestor form when omitted. */
    form;
    /** Event names (space/comma separated) dispatched when the child value changes. */
    valueEvent = 'input input-change value-change select-change';
    /** Event names (space/comma separated) dispatched when the child loses focus. */
    blurEvent = 'blur input-blur select-blur';
    /** Debounce delay (ms) before running validation for autovalidated changes. */
    validationDebounce = 200;
    /** Emits whenever the validation state toggles. */
    validationChange;
    /** Emits whenever the tracked value changes. */
    valueChange;
    isValid = true;
    autoValidateActive = false;
    errorMessage = '';
    childEl;
    formEl;
    slotEl;
    currentValue;
    hasInteracted = false;
    validationTimer;
    valueEventsBound = [];
    blurEventsBound = [];
    componentWillLoad() {
        if (!this.schema) {
            throw new Error('<ir-validator> requires a `schema` prop.');
        }
        this.syncAutovalidateFlag(this.autovalidate);
    }
    componentDidLoad() {
        this.slotEl = this.el.shadowRoot?.querySelector('slot');
        this.slotEl?.addEventListener('slotchange', this.handleSlotChange);
        this.initializeChildReference();
        this.attachFormListener();
    }
    disconnectedCallback() {
        this.teardownChildListeners();
        this.detachFormListener();
        this.slotEl?.removeEventListener('slotchange', this.handleSlotChange);
        this.clearValidationTimer();
    }
    async handleSchemaChange() {
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    async handleAutoValidatePropChange(next) {
        this.syncAutovalidateFlag(next);
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    }
    handleFormPropChange() {
        this.detachFormListener();
        this.attachFormListener();
    }
    handleValueEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    handleBlurEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    syncAutovalidateFlag(next) {
        this.autoValidateActive = JSON.parse(String(next ?? false));
    }
    parseEvents(spec) {
        if (!spec)
            return [];
        return spec
            .split(/[\s,]+/)
            .map(token => token.trim())
            .filter(Boolean);
    }
    async handleValuePropChange(next, previous) {
        if (Object.is(next, previous))
            return;
        // keep the tracked value in sync with external changes without emitting another change event
        this.updateValue(next, { suppressValidation: true, emitChange: false });
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    handleSlotChange = () => {
        this.initializeChildReference();
    };
    initializeChildReference() {
        const child = this.pickSingleChild();
        if (child === this.childEl)
            return;
        this.teardownChildListeners();
        if (!child)
            return;
        this.childEl = child;
        this.hasInteracted = false;
        this.registerChildListeners();
        const initialValue = this.readValueFromChild();
        this.updateValue(initialValue, { suppressValidation: !this.autoValidateActive, emitChange: true });
        if (!this.autoValidateActive) {
            this.updateAriaValidity(this.isValid);
        }
    }
    pickSingleChild() {
        const slotChildren = this.slotEl?.assignedElements({ flatten: true }) ?? Array.from(this.el.children);
        const elements = slotChildren.filter(node => node.nodeType === Node.ELEMENT_NODE);
        if (elements.length === 0) {
            console.warn('<ir-validator> requires exactly one child element but found none.');
            return undefined;
        }
        if (elements.length > 1) {
            console.warn(`<ir-validator> requires exactly one child element but found ${elements.length}. Using the first.`);
        }
        return elements[0];
    }
    registerChildListeners() {
        if (!this.childEl)
            return;
        this.unbindChildListeners();
        this.valueEventsBound = this.parseEvents(this.valueEvent);
        this.blurEventsBound = this.parseEvents(this.blurEvent);
        this.valueEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleBlurEvent));
    }
    unbindChildListeners() {
        if (!this.childEl)
            return;
        this.valueEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleBlurEvent));
        this.valueEventsBound = [];
        this.blurEventsBound = [];
    }
    teardownChildListeners() {
        if (this.childEl) {
            this.unbindChildListeners();
            this.childEl = undefined;
        }
        this.clearValidationTimer();
    }
    rebindChildListeners() {
        if (!this.childEl)
            return;
        this.registerChildListeners();
    }
    handleValueEvent = (event) => {
        if (!this.childEl)
            return;
        const nextValue = this.extractEventValue(event);
        this.hasInteracted = true;
        this.updateValue(nextValue);
    };
    handleBlurEvent = async () => {
        if (!this.childEl)
            return;
        this.hasInteracted = true;
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    };
    extractEventValue(event) {
        if ('detail' in event && event['detail'] && typeof event['detail'] === 'object' && 'value' in event.detail) {
            return event.detail.value;
        }
        const target = event.target;
        if (target && 'value' in target) {
            return target.value;
        }
        return this.readValueFromChild();
    }
    readValueFromChild() {
        if (this.value !== undefined) {
            return this.value;
        }
        if (!this.childEl)
            return undefined;
        if ('value' in this.childEl) {
            return this.childEl.value;
        }
        return this.childEl.getAttribute?.('value');
    }
    updateValue(nextValue, options = {}) {
        const previous = this.currentValue;
        this.currentValue = nextValue;
        if (options.emitChange !== false && !Object.is(previous, nextValue)) {
            this.valueChange.emit({ value: this.currentValue });
        }
        if (!options.suppressValidation && this.autoValidateActive && this.hasInteracted) {
            this.scheduleValidation();
        }
    }
    async validateCurrentValue(forceDisplay = false) {
        if (!this.schema)
            return true;
        const value = this.currentValue ?? this.readValueFromChild();
        this.currentValue = value;
        let result;
        if (this.asyncValidation) {
            result = await this.schema.safeParseAsync(value);
        }
        else {
            result = this.schema.safeParse(value);
        }
        const nextValidity = result.success;
        const previousValidity = this.isValid;
        this.isValid = nextValidity;
        if (!result.success) {
            this.errorMessage = result.error.issues[0]?.message ?? '';
        }
        else {
            this.errorMessage = '';
        }
        const shouldDisplay = forceDisplay || (this.autoValidateActive && this.hasInteracted);
        if (shouldDisplay) {
            this.updateAriaValidity(nextValidity);
            if (previousValidity !== nextValidity) {
                this.emitValidationChange();
            }
        }
        return nextValidity;
    }
    updateAriaValidity(valid) {
        if (!this.childEl)
            return;
        if (valid) {
            this.childEl.removeAttribute('aria-invalid');
        }
        else {
            this.childEl.setAttribute('aria-invalid', 'true');
        }
    }
    emitValidationChange() {
        this.validationChange.emit({ valid: this.isValid, value: this.currentValue });
    }
    attachFormListener() {
        this.formEl = this.resolveFormRef();
        this.formEl?.addEventListener('submit', this.handleFormSubmit, true);
    }
    detachFormListener() {
        this.formEl?.removeEventListener('submit', this.handleFormSubmit, true);
        this.formEl = undefined;
    }
    resolveFormRef() {
        if (typeof document !== 'undefined' && this.form) {
            const provided = document.getElementById(this.form);
            if (provided && provided instanceof HTMLFormElement) {
                return provided;
            }
        }
        return this.el.closest('form');
    }
    handleFormSubmit = async () => {
        this.hasInteracted = true;
        const valid = await this.flushValidation();
        if (!valid && !this.autoValidateActive) {
            this.autoValidateActive = true;
        }
    };
    async scheduleValidation() {
        // this.clearValidationTimer();
        // const delay = Number(this.validationDebounce);
        // if (immediate || !isFinite(delay) || delay <= 0) {
        return await this.validateCurrentValue(true);
        // }
        // this.validationTimer = setTimeout(async () => {
        //   this.validationTimer = undefined;
        //   await this.validateCurrentValue(true);
        // }, delay);
        // return this.isValid;
    }
    async flushValidation() {
        return await this.scheduleValidation();
    }
    clearValidationTimer() {
        if (this.validationTimer !== undefined) {
            clearTimeout(this.validationTimer);
            this.validationTimer = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { key: '035f6f154f9c84ef6ebfeb90d7f72d788061c342' }, index.h("slot", { key: '02a9af0add8ceded0f9e704afa561e5d3aa34b1b' }), !this.isValid && this.showErrorMessage && (index.h("span", { key: 'a36ff42fd925feff9678661291a7e1b3cb7aadc6', part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    static get watchers() { return {
        "schema": ["handleSchemaChange"],
        "autovalidate": ["handleAutoValidatePropChange"],
        "form": ["handleFormPropChange"],
        "valueEvent": ["handleValueEventChange"],
        "blurEvent": ["handleBlurEventChange"],
        "value": ["handleValuePropChange"]
    }; }
};
__decorate([
    debounce.Debounce(300)
], IrValidator.prototype, "scheduleValidation", null);
IrValidator.style = IrValidatorStyle0;

exports.ir_air_date_picker = IrAirDatePicker;
exports.ir_autocomplete = IrAutocomplete;
exports.ir_autocomplete_option = IrAutocompleteOption;
exports.ir_button = IrButton;
exports.ir_city_ledger = IrCityLedger;
exports.ir_city_ledger_fiscal_documents = IrCityLedgerFiscalDocuments;
exports.ir_city_ledger_fiscal_documents_filters = IrCityLedgerFiscalDocumentsFilters;
exports.ir_city_ledger_fiscal_documents_table = IrCityLedgerFiscalDocumentsTable;
exports.ir_city_ledger_folio = IrCityLedgerFolio;
exports.ir_city_ledger_folio_filters = IrCityLedgerFolioFilters;
exports.ir_city_ledger_folio_table = IrCityLedgerFolioTable;
exports.ir_city_ledger_statements = IrCityLedgerStatements;
exports.ir_city_ledger_statements_filter = IrCityLedgerStatementsFilter;
exports.ir_city_ledger_statements_table = IrCityLedgerStatementsTable;
exports.ir_city_ledger_toolbar = IrCityLedgerToolbar;
exports.ir_city_ledger_transaction_drawer = IrCityLedgerTransactionDrawer;
exports.ir_city_ledger_transaction_form = IrCityLedgerTransactionForm;
exports.ir_cl_adjustment_fields = IrClAdjustmentFields;
exports.ir_cl_credit_note_fields = IrClCreditNoteFields;
exports.ir_cl_credit_note_preview = IrClCreditNotePreview;
exports.ir_cl_debit_note_fields = IrClDebitNoteFields;
exports.ir_cl_debit_note_preview = IrClDebitNotePreview;
exports.ir_cl_document_header = IrClDocumentHeader;
exports.ir_cl_fiscal_document_preview = IrClFiscalDocumentPreview;
exports.ir_cl_fiscal_document_table = IrClFiscalDocumentTable;
exports.ir_cl_invoice_city_tax_amount_cell = IrClInvoiceCityTaxAmountCell;
exports.ir_cl_invoice_city_tax_pct_cell = IrClInvoiceCityTaxPctCell;
exports.ir_cl_invoice_date_cell = IrClInvoiceDateCell;
exports.ir_cl_invoice_description_cell = IrClInvoiceDescriptionCell;
exports.ir_cl_invoice_dialog = IrClInvoiceDialog;
exports.ir_cl_invoice_form = IrClInvoiceForm;
exports.ir_cl_invoice_net_price_cell = IrClInvoiceNetPriceCell;
exports.ir_cl_invoice_preview = IrClInvoicePreview;
exports.ir_cl_invoice_total_cell = IrClInvoiceTotalCell;
exports.ir_cl_invoice_vat_amount_cell = IrClInvoiceVatAmountCell;
exports.ir_cl_invoice_vat_pct_cell = IrClInvoiceVatPctCell;
exports.ir_cl_opening_balance_fields = IrClOpeningBalanceFields;
exports.ir_cl_payment_fields = IrClPaymentFields;
exports.ir_cl_receipt_preview = IrClReceiptPreview;
exports.ir_cl_statement_preview = IrClStatementPreview;
exports.ir_common = IrCommon;
exports.ir_custom_button = IrCustomButton;
exports.ir_date_range_filter = IrDateRangeFilter;
exports.ir_date_select = IrDateSelect;
exports.ir_dialog = IrDialog;
exports.ir_drawer = IrDrawer;
exports.ir_empty_state = IrEmptyState;
exports.ir_fd_confirm_dialog = IrFdConfirmDialog;
exports.ir_hold_transaction_dialog = IrHoldTransactionDialog;
exports.ir_icons = IrIcons;
exports.ir_input = IrInput;
exports.ir_input_cell = IrInputCell;
exports.ir_interceptor = IrInterceptor;
exports.ir_loading_screen = IrLoadingScreen;
exports.ir_otp = IrOtp;
exports.ir_otp_modal = IrOtpModal;
exports.ir_page = IrPage;
exports.ir_pagination = IrPagination;
exports.ir_preview_screen_dialog = IrPreviewScreenDialog;
exports.ir_spinner = IrSpinner;
exports.ir_toast = IrToast;
exports.ir_toast_alert = IrToastAlert;
exports.ir_toast_provider = IrToastProvider;
exports.ir_validator = IrValidator;

//# sourceMappingURL=ir-air-date-picker_64.cjs.entry.js.map