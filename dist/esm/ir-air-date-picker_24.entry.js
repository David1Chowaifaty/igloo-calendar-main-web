import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { A as AirDatepicker, d as default_1 } from './en-d275c88a.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { C as ClickOutside } from './ClickOutside-e1255f85.js';
import { c as createSlotManager } from './slot-4b32bd27.js';
import { M as MaskedRange, I as IMask } from './index-e2caf943.js';
import { a as axios } from './axios-aa1335b8.js';
import { i as interceptor_requests } from './ir-interceptor.store-b1961d27.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getCoreRowModel } from './useTable-b8c70fc7.js';
import { o as objectType, n as numberType, e as enumType, s as stringType, b as booleanType, z } from './index-1e1f097b.js';
import { T as Token } from './Token-bcdb7c50.js';
import { l as locales } from './locales.store-cb784e95.js';
import { g as groupEntryTablesResult } from './utils-4409b691.js';
import { R as RoomService } from './room.service-e5d266c2.js';
import { S as SystemService } from './system.service-4455d4dc.js';
import './_commonjsHelpers-dc761540.js';
import './index-f100e9d2.js';
import './calendar-data-b1f645da.js';
import './type-cce4b8e0.js';

const irAirDatePickerCss = ".air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover,.air-datepicker-cell.-in-range-.-focus-{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:\"\";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}.air-datepicker{--adp-font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:\"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration:.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92, 196, 239, .1);--adp-background-color-in-range-focused:rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover:rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0, 0, 0, .3);--adp-overlay-transition-duration:.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:\"\";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}:host{display:block}.custom-date-picker__calendar{--adp-padding:1rem;}.air-datepicker-cell{color:var(--wa-color-text-normal);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.air-datepicker-cell.-current-.-focus-{color:var(--wa-color-brand-fill-loud)}.air-datepicker-cell.-focus-{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.air-datepicker-cell.-disabled-{cursor:not-allowed !important;text-decoration:line-through;opacity:0.5}.air-datepicker-cell.-disabled-.-focus-{background:var(--wa-color-surface-default)}";
const IrAirDatePickerStyle0 = irAirDatePickerCss;

const IrAirDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
        this.datePickerFocus = createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = createEvent(this, "datePickerBlur", 7);
    }
    get el() { return getElement(this); }
    /** Not wired to the picker. Accepted only for API parity with `ir-date-select`, which forwards all of its props. */
    withClear;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    placeholder;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    label;
    /**
     * Pre-selected dates for multi-select/range mode. Takes precedence over `date`
     * at initialization, and is re-applied through the `dates` watcher on change.
     */
    dates;
    /**
     * Not wired to the picker: the calendar is always created with `inline: true`
     * (visibility is controlled by the parent `ir-date-select` popup).
     */
    inline = false;
    /**
     * The selected date (single-select mode). Mutable: the component writes the latest
     * selection back into it from `onSelect`, and the parent can set it to move the
     * calendar selection programmatically (applied silently, no `dateChanged` emitted).
     */
    date = null;
    /** `true` for unlimited multi-select, or a number for a fixed max. Passed to AirDatepicker at init only. */
    multipleDates = false;
    /** Enables range selection (start + end). Passed to AirDatepicker at init only. */
    range = false;
    /** Display format for the picker (AirDatepicker format tokens, not moment tokens). Passed at init only. */
    dateFormat = 'yyyy-MM-dd';
    /** Enables the timepicker. Also switches `isSameDates` comparisons from day precision to minute precision. */
    timepicker = false;
    /** Earliest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    minDate;
    /** Latest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    maxDate;
    /** Not wired to the picker. Forwarded by `ir-date-select` (which handles disabling interaction itself). */
    disabled = false;
    /** Passed to AirDatepicker at init only. Has no visual effect on an inline calendar; the parent popup handles closing. */
    autoClose = true;
    /** Shows days from the previous/next month in the current view. Passed at init only. */
    showOtherMonths = true;
    /** Allows selecting the previous/next-month days shown in the current view. Passed at init only. */
    selectOtherMonths = true;
    /** Not wired to the picker. Forwarded by `ir-date-select` (trigger rendering is the parent's concern). */
    customPicker = false;
    /** Optional element AirDatepicker appends its calendar to (for positioning/styling). Defaults to the host. */
    container;
    /**
     * If `true`, a `date` prop change destroys and rebuilds the AirDatepicker instance
     * instead of calling `selectDate`. Use only when the picker must fully re-initialize;
     * rebuilding on every change is expensive.
     */
    forceDestroyOnUpdate = false;
    /**
     * If `true`, emits `dateChanged` with null values when the selection is cleared.
     * Otherwise clear-events are swallowed.
     */
    emitEmptyDate = false;
    /** Not wired to the picker. Forwarded by `ir-date-select` for API parity. */
    triggerContainerStyle = '';
    /**
     * Emitted when the user picks a date in the calendar (never for silent, prop-driven updates).
     * `start`/`end` are equal in single-select mode; `dates` holds every selected date as `YYYY-MM-DD`.
     */
    dateChanged;
    /** Emitted when the AirDatepicker reports `onShow`. */
    datePickerFocus;
    /** Emitted when the AirDatepicker reports `onHide`. */
    datePickerBlur;
    /**
     * The current selection, normalized to a Moment. Used as the comparison baseline so
     * prop updates that match the existing selection don't touch the picker.
     * Deliberately a plain field, not `@State`: this component renders `null`, so
     * state-driven re-renders would be pure overhead.
     */
    currentDate = null;
    /** The AirDatepicker instance. `undefined` until `componentDidLoad` and after disconnect. */
    datePicker;
    componentWillLoad() {
        if (this.date) {
            this.currentDate = this.toMoment(this.date);
        }
    }
    componentDidLoad() {
        this.initializeDatepicker();
    }
    disconnectedCallback() {
        this.datePicker?.destroy?.();
        this.datePicker = undefined;
    }
    /** Applies external `date` changes to the calendar, skipping same-day (or same-minute) no-ops. */
    datePropChanged(newDate, oldDate) {
        if (this.isSameDates(newDate, oldDate))
            return;
        this.updatePickerDate(newDate);
    }
    minDatePropChanged(newVal, oldVal) {
        if (!this.datePicker || this.isSameDates(newVal, oldVal))
            return;
        // update() re-applies opts.selectedDates (the initial selection), so pass the current one to keep it
        this.datePicker.update({ minDate: this.toMoment(newVal)?.format('YYYY-MM-DD'), selectedDates: [...this.datePicker.selectedDates] }, { silent: true });
    }
    maxDatePropChanged(newVal, oldVal) {
        if (!this.datePicker || this.isSameDates(newVal, oldVal))
            return;
        this.datePicker.update({ maxDate: this.toMoment(newVal)?.format('YYYY-MM-DD'), selectedDates: [...this.datePicker.selectedDates] }, { silent: true });
    }
    /** Applies external `dates` (multi/range) changes, skipping value-equal lists. */
    datesPropChanged(newDates = [], oldDates = []) {
        if (this.areDateListsEqual(newDates, oldDates))
            return;
        this.updatePickerDates(newDates);
    }
    /** Clears the calendar selection. Not silent: fires `onSelect` with an empty value (see `emitEmptyDate`). */
    async clearDatePicker() {
        this.datePicker?.clear();
    }
    /**
     * Force-resyncs the calendar to the given (or current) value, bypassing the equality
     * checks the watchers perform. Escape hatch for parents whose prop value didn't change
     * but whose picker drifted (e.g. after a silent internal clear). Always silent.
     */
    async syncSelection(options) {
        if (Array.isArray(options?.dates) || this.range) {
            const list = Array.isArray(options?.dates) ? options.dates : this.dates;
            this.forceSyncPickerDates(list ?? []);
            return;
        }
        const nextDate = options?.date !== undefined ? options.date : this.date;
        this.forceSyncPickerDate(nextDate ?? null);
    }
    // ── Moment helpers ────────────────────────────────────────────────────────
    /**
     * Normalizes any accepted date input to a valid Moment, or `null`.
     * Parse order: strict `YYYY-MM-DD` → strict ISO-8601 → loose fallback,
     * so canonical app dates never hit moment's slow/ambiguous loose parser.
     */
    toMoment(value) {
        if (!value)
            return null;
        if (hooks.isMoment(value))
            return value.isValid() ? value : null;
        const strict = hooks(value, 'YYYY-MM-DD', true);
        if (strict.isValid())
            return strict;
        const iso = hooks(value, hooks.ISO_8601, true);
        if (iso.isValid())
            return iso;
        const loose = hooks(value);
        return loose.isValid() ? loose : null;
    }
    /** Normalizes a list of date inputs, dropping unparseable entries. */
    toMoments(values) {
        if (!Array.isArray(values) || values.length === 0)
            return [];
        return values.map(v => this.toMoment(v)).filter((m) => m !== null);
    }
    /**
     * Value-equality for two date inputs at day precision (minute precision when
     * `timepicker` is on). Unparseable values are never equal to anything.
     */
    isSameDates(d1, d2) {
        if (!d1 && !d2)
            return true;
        if (!d1 || !d2)
            return false;
        const m1 = this.toMoment(d1);
        const m2 = this.toMoment(d2);
        if (!m1 || !m2)
            return false;
        return m1.isSame(m2, this.timepicker ? 'minute' : 'date');
    }
    /** Order-sensitive value-equality for two date lists (empty and missing lists are equal). */
    areDateListsEqual(first, second) {
        if (!first?.length && !second?.length)
            return true;
        if (!first || !second || first.length !== second.length)
            return false;
        return first.every((v, i) => this.isSameDates(v, second[i]));
    }
    // ── Picker state management ───────────────────────────────────────────────
    /**
     * Pushes a single-date value into the calendar without emitting `dateChanged`.
     * Clears on `null`/unparseable input; otherwise selects the day (or rebuilds the
     * whole instance when `forceDestroyOnUpdate` is set).
     */
    updatePickerDate(newDate) {
        const m = this.toMoment(newDate);
        if (!m) {
            this.datePicker?.clear({ silent: true });
            this.currentDate = null;
            return;
        }
        if (!this.isSameDates(this.currentDate, m)) {
            this.currentDate = m;
            if (this.forceDestroyOnUpdate) {
                this.datePicker?.destroy();
                this.datePicker = undefined;
                this.initializeDatepicker();
            }
            else {
                this.datePicker?.selectDate(m.format('YYYY-MM-DD'), { silent: true });
            }
        }
    }
    /** Replaces the calendar's multi/range selection without emitting `dateChanged`. */
    updatePickerDates(nextDates = []) {
        if (!this.datePicker)
            return;
        const moments = this.toMoments(nextDates);
        this.datePicker.clear({ silent: true });
        if (moments.length > 0) {
            this.datePicker.selectDate(moments.map(m => m.format('YYYY-MM-DD')), { silent: true });
            this.currentDate = moments[0];
            return;
        }
        this.currentDate = null;
        this.date = null;
    }
    /**
     * Unconditional single-date resync used by `syncSelection`: clears, re-selects, and
     * writes back `currentDate`/`date`. Before the picker exists it just stores the value
     * so `initializeDatepicker` picks it up.
     */
    forceSyncPickerDate(nextDate) {
        const m = this.toMoment(nextDate);
        if (!this.datePicker) {
            this.currentDate = m;
            this.date = m;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (!m) {
            this.currentDate = null;
            this.date = null;
            return;
        }
        this.datePicker.selectDate(m.format('YYYY-MM-DD'), { silent: true });
        this.currentDate = m;
        this.date = m;
    }
    /** Unconditional multi/range resync used by `syncSelection`. Mirrors `forceSyncPickerDate`. */
    forceSyncPickerDates(nextDates = []) {
        const moments = this.toMoments(nextDates);
        if (!this.datePicker) {
            this.currentDate = moments[0] ?? null;
            this.date = moments[0] ?? null;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (moments.length > 0) {
            this.datePicker.selectDate(moments.map(m => m.format('YYYY-MM-DD')), { silent: true });
        }
        this.currentDate = moments[0] ?? null;
        this.date = moments[0] ?? null;
    }
    /**
     * AirDatepicker `onSelect` handler — the only path that emits `dateChanged`.
     * Writes the selection back into `currentDate`/`date` so the watchers treat the
     * parent's echoed prop update as a no-op.
     */
    handleDateSelect(date) {
        const dates = (Array.isArray(date) ? date : date ? [date] : []).filter(Boolean);
        if (!dates.length) {
            if (this.emitEmptyDate) {
                this.dateChanged.emit({ start: null, end: null, dates: [] });
            }
            this.currentDate = null;
            this.date = null;
            return;
        }
        const startMoment = hooks(dates[0]);
        const endMoment = this.range && dates.length > 1 ? hooks(dates[1]) : startMoment;
        this.currentDate = startMoment;
        this.date = startMoment;
        this.dateChanged.emit({
            start: startMoment,
            end: endMoment,
            dates: dates.map(d => hooks(d).format('YYYY-MM-DD')),
        });
    }
    /**
     * Creates the inline AirDatepicker on the host element (idempotent), seeding the
     * selection from `dates` (preferred) or `currentDate`, then applies the Web Awesome
     * theme via CSS custom properties on the generated calendar element.
     */
    initializeDatepicker() {
        if (this.datePicker)
            return;
        const preselectedMoments = this.toMoments(this.dates);
        const selectedDates = preselectedMoments.length > 0 ? preselectedMoments.map(m => m.format('YYYY-MM-DD')) : this.currentDate ? [this.currentDate.format('YYYY-MM-DD')] : [];
        this.datePicker = new AirDatepicker(this.el, {
            container: this.container,
            inline: true,
            selectedDates,
            multipleDates: this.multipleDates,
            range: this.range,
            dateFormat: this.dateFormat,
            timepicker: this.timepicker,
            minDate: this.toMoment(this.minDate)?.format('YYYY-MM-DD'),
            maxDate: this.toMoment(this.maxDate)?.format('YYYY-MM-DD'),
            autoClose: this.autoClose,
            locale: default_1,
            showOtherMonths: this.showOtherMonths,
            selectOtherMonths: this.selectOtherMonths,
            onHide: () => this.datePickerBlur.emit(),
            onShow: () => this.datePickerFocus.emit(),
            onSelect: ({ date }) => this.handleDateSelect(date),
        });
        const datepickerEl = this.datePicker.$datepicker;
        if (!datepickerEl)
            return;
        datepickerEl.classList.add('ir-custom-date-picker__calendar');
        datepickerEl.classList.add('custom-date-picker__calendar');
        datepickerEl.style.borderWidth = '0px';
        datepickerEl.style.setProperty('--adp-cell-background-color-selected', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-cell-background-color-selected-hover', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month', 'var(--wa-color-brand-fill-normal)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month-focused', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-accent-color', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-background-color', 'var(--wa-color-surface-default,white)');
        datepickerEl.style.setProperty('--adp-day-name-color', 'lab(48.496% 0 0)');
        datepickerEl.style.setProperty('--adp-padding', '0px 0px 0.5rem 0px', 'important');
        datepickerEl.style.setProperty('--adp-border-color-inner', 'transparent', 'important');
        datepickerEl.style.setProperty('--adp-color-other-month-hover', 'var(--wa-color-text-normal)', 'important');
    }
    /** Headless: the calendar DOM is injected by AirDatepicker, not Stencil. */
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

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler", 7);
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
    btn_id = v4();
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
            return (h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? h("span", { class: "icon-loader" }) : h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

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

const appCss = "/* Web Awesome core styles */\n/* @import url('../assets/webawesome/themes/webawesome.css'); */\n/* Generates --wa-color-{hue}-on tokens for pairing with any palette's key colors */\n:where(:root),\n:host {\n  /**\n    * Conditional tokens to check if the key color is >= 60\n    * Key colors are the most colorful tint in a scale, recorded as --wa-color-{hue} in each palette\n    * The numeric value of the key is isolated as --wa-color-{hue}-key\n    * If key < 60, the result is 0%\n    * If key >= 60, the result is 100%\n    * Intended to be used in the color-mix() functions below\n    */\n\n  --wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));\n  --wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));\n  --wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));\n  --wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));\n  --wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));\n  --wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));\n  --wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));\n  --wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));\n  --wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));\n  --wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));\n\n  /**\n    * Tokens to set text color with appropriate WCAG 2.1 contrast\n    * If key < 60, the text color is white\n    * If key >= 60, the text color is {hue}-10\n    */\n\n  --wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);\n  --wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);\n  --wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);\n  --wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);\n  --wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);\n  --wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);\n  --wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);\n  --wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);\n  --wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);\n  --wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white);\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-brand-blue {\n    --wa-color-brand-95: var(--wa-color-blue-95);\n    --wa-color-brand-90: var(--wa-color-blue-90);\n    --wa-color-brand-80: var(--wa-color-blue-80);\n    --wa-color-brand-70: var(--wa-color-blue-70);\n    --wa-color-brand-60: var(--wa-color-blue-60);\n    --wa-color-brand-50: var(--wa-color-blue-50);\n    --wa-color-brand-40: var(--wa-color-blue-40);\n    --wa-color-brand-30: var(--wa-color-blue-30);\n    --wa-color-brand-20: var(--wa-color-blue-20);\n    --wa-color-brand-10: var(--wa-color-blue-10);\n    --wa-color-brand-05: var(--wa-color-blue-05);\n    --wa-color-brand: var(--wa-color-blue);\n    --wa-color-brand-on: var(--wa-color-blue-on);\n  }\n\n  .wa-brand-red {\n    --wa-color-brand-95: var(--wa-color-red-95);\n    --wa-color-brand-90: var(--wa-color-red-90);\n    --wa-color-brand-80: var(--wa-color-red-80);\n    --wa-color-brand-70: var(--wa-color-red-70);\n    --wa-color-brand-60: var(--wa-color-red-60);\n    --wa-color-brand-50: var(--wa-color-red-50);\n    --wa-color-brand-40: var(--wa-color-red-40);\n    --wa-color-brand-30: var(--wa-color-red-30);\n    --wa-color-brand-20: var(--wa-color-red-20);\n    --wa-color-brand-10: var(--wa-color-red-10);\n    --wa-color-brand-05: var(--wa-color-red-05);\n    --wa-color-brand: var(--wa-color-red);\n    --wa-color-brand-on: var(--wa-color-red-on);\n  }\n\n  .wa-brand-orange {\n    --wa-color-brand-95: var(--wa-color-orange-95);\n    --wa-color-brand-90: var(--wa-color-orange-90);\n    --wa-color-brand-80: var(--wa-color-orange-80);\n    --wa-color-brand-70: var(--wa-color-orange-70);\n    --wa-color-brand-60: var(--wa-color-orange-60);\n    --wa-color-brand-50: var(--wa-color-orange-50);\n    --wa-color-brand-40: var(--wa-color-orange-40);\n    --wa-color-brand-30: var(--wa-color-orange-30);\n    --wa-color-brand-20: var(--wa-color-orange-20);\n    --wa-color-brand-10: var(--wa-color-orange-10);\n    --wa-color-brand-05: var(--wa-color-orange-05);\n    --wa-color-brand: var(--wa-color-orange);\n    --wa-color-brand-on: var(--wa-color-orange-on);\n  }\n\n  .wa-brand-yellow {\n    --wa-color-brand-95: var(--wa-color-yellow-95);\n    --wa-color-brand-90: var(--wa-color-yellow-90);\n    --wa-color-brand-80: var(--wa-color-yellow-80);\n    --wa-color-brand-70: var(--wa-color-yellow-70);\n    --wa-color-brand-60: var(--wa-color-yellow-60);\n    --wa-color-brand-50: var(--wa-color-yellow-50);\n    --wa-color-brand-40: var(--wa-color-yellow-40);\n    --wa-color-brand-30: var(--wa-color-yellow-30);\n    --wa-color-brand-20: var(--wa-color-yellow-20);\n    --wa-color-brand-10: var(--wa-color-yellow-10);\n    --wa-color-brand-05: var(--wa-color-yellow-05);\n    --wa-color-brand: var(--wa-color-yellow);\n    --wa-color-brand-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-brand-green {\n    --wa-color-brand-95: var(--wa-color-green-95);\n    --wa-color-brand-90: var(--wa-color-green-90);\n    --wa-color-brand-80: var(--wa-color-green-80);\n    --wa-color-brand-70: var(--wa-color-green-70);\n    --wa-color-brand-60: var(--wa-color-green-60);\n    --wa-color-brand-50: var(--wa-color-green-50);\n    --wa-color-brand-40: var(--wa-color-green-40);\n    --wa-color-brand-30: var(--wa-color-green-30);\n    --wa-color-brand-20: var(--wa-color-green-20);\n    --wa-color-brand-10: var(--wa-color-green-10);\n    --wa-color-brand-05: var(--wa-color-green-05);\n    --wa-color-brand: var(--wa-color-green);\n    --wa-color-brand-on: var(--wa-color-green-on);\n  }\n\n  .wa-brand-cyan {\n    --wa-color-brand-95: var(--wa-color-cyan-95);\n    --wa-color-brand-90: var(--wa-color-cyan-90);\n    --wa-color-brand-80: var(--wa-color-cyan-80);\n    --wa-color-brand-70: var(--wa-color-cyan-70);\n    --wa-color-brand-60: var(--wa-color-cyan-60);\n    --wa-color-brand-50: var(--wa-color-cyan-50);\n    --wa-color-brand-40: var(--wa-color-cyan-40);\n    --wa-color-brand-30: var(--wa-color-cyan-30);\n    --wa-color-brand-20: var(--wa-color-cyan-20);\n    --wa-color-brand-10: var(--wa-color-cyan-10);\n    --wa-color-brand-05: var(--wa-color-cyan-05);\n    --wa-color-brand: var(--wa-color-cyan);\n    --wa-color-brand-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-brand-indigo {\n    --wa-color-brand-95: var(--wa-color-indigo-95);\n    --wa-color-brand-90: var(--wa-color-indigo-90);\n    --wa-color-brand-80: var(--wa-color-indigo-80);\n    --wa-color-brand-70: var(--wa-color-indigo-70);\n    --wa-color-brand-60: var(--wa-color-indigo-60);\n    --wa-color-brand-50: var(--wa-color-indigo-50);\n    --wa-color-brand-40: var(--wa-color-indigo-40);\n    --wa-color-brand-30: var(--wa-color-indigo-30);\n    --wa-color-brand-20: var(--wa-color-indigo-20);\n    --wa-color-brand-10: var(--wa-color-indigo-10);\n    --wa-color-brand-05: var(--wa-color-indigo-05);\n    --wa-color-brand: var(--wa-color-indigo);\n    --wa-color-brand-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-brand-purple {\n    --wa-color-brand-95: var(--wa-color-purple-95);\n    --wa-color-brand-90: var(--wa-color-purple-90);\n    --wa-color-brand-80: var(--wa-color-purple-80);\n    --wa-color-brand-70: var(--wa-color-purple-70);\n    --wa-color-brand-60: var(--wa-color-purple-60);\n    --wa-color-brand-50: var(--wa-color-purple-50);\n    --wa-color-brand-40: var(--wa-color-purple-40);\n    --wa-color-brand-30: var(--wa-color-purple-30);\n    --wa-color-brand-20: var(--wa-color-purple-20);\n    --wa-color-brand-10: var(--wa-color-purple-10);\n    --wa-color-brand-05: var(--wa-color-purple-05);\n    --wa-color-brand: var(--wa-color-purple);\n    --wa-color-brand-on: var(--wa-color-purple-on);\n  }\n\n  .wa-brand-pink {\n    --wa-color-brand-95: var(--wa-color-pink-95);\n    --wa-color-brand-90: var(--wa-color-pink-90);\n    --wa-color-brand-80: var(--wa-color-pink-80);\n    --wa-color-brand-70: var(--wa-color-pink-70);\n    --wa-color-brand-60: var(--wa-color-pink-60);\n    --wa-color-brand-50: var(--wa-color-pink-50);\n    --wa-color-brand-40: var(--wa-color-pink-40);\n    --wa-color-brand-30: var(--wa-color-pink-30);\n    --wa-color-brand-20: var(--wa-color-pink-20);\n    --wa-color-brand-10: var(--wa-color-pink-10);\n    --wa-color-brand-05: var(--wa-color-pink-05);\n    --wa-color-brand: var(--wa-color-pink);\n    --wa-color-brand-on: var(--wa-color-pink-on);\n  }\n\n  .wa-brand-gray {\n    --wa-color-brand-95: var(--wa-color-gray-95);\n    --wa-color-brand-90: var(--wa-color-gray-90);\n    --wa-color-brand-80: var(--wa-color-gray-80);\n    --wa-color-brand-70: var(--wa-color-gray-70);\n    --wa-color-brand-60: var(--wa-color-gray-60);\n    --wa-color-brand-50: var(--wa-color-gray-50);\n    --wa-color-brand-40: var(--wa-color-gray-40);\n    --wa-color-brand-30: var(--wa-color-gray-30);\n    --wa-color-brand-20: var(--wa-color-gray-20);\n    --wa-color-brand-10: var(--wa-color-gray-10);\n    --wa-color-brand-05: var(--wa-color-gray-05);\n    --wa-color-brand: var(--wa-color-gray);\n    --wa-color-brand-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-neutral-gray {\n    --wa-color-neutral-95: var(--wa-color-gray-95);\n    --wa-color-neutral-90: var(--wa-color-gray-90);\n    --wa-color-neutral-80: var(--wa-color-gray-80);\n    --wa-color-neutral-70: var(--wa-color-gray-70);\n    --wa-color-neutral-60: var(--wa-color-gray-60);\n    --wa-color-neutral-50: var(--wa-color-gray-50);\n    --wa-color-neutral-40: var(--wa-color-gray-40);\n    --wa-color-neutral-30: var(--wa-color-gray-30);\n    --wa-color-neutral-20: var(--wa-color-gray-20);\n    --wa-color-neutral-10: var(--wa-color-gray-10);\n    --wa-color-neutral-05: var(--wa-color-gray-05);\n    --wa-color-neutral: var(--wa-color-gray);\n    --wa-color-neutral-on: var(--wa-color-gray-on);\n  }\n\n  .wa-neutral-red {\n    --wa-color-neutral-95: var(--wa-color-red-95);\n    --wa-color-neutral-90: var(--wa-color-red-90);\n    --wa-color-neutral-80: var(--wa-color-red-80);\n    --wa-color-neutral-70: var(--wa-color-red-70);\n    --wa-color-neutral-60: var(--wa-color-red-60);\n    --wa-color-neutral-50: var(--wa-color-red-50);\n    --wa-color-neutral-40: var(--wa-color-red-40);\n    --wa-color-neutral-30: var(--wa-color-red-30);\n    --wa-color-neutral-20: var(--wa-color-red-20);\n    --wa-color-neutral-10: var(--wa-color-red-10);\n    --wa-color-neutral-05: var(--wa-color-red-05);\n    --wa-color-neutral: var(--wa-color-red);\n    --wa-color-neutral-on: var(--wa-color-red-on);\n  }\n\n  .wa-neutral-orange {\n    --wa-color-neutral-95: var(--wa-color-orange-95);\n    --wa-color-neutral-90: var(--wa-color-orange-90);\n    --wa-color-neutral-80: var(--wa-color-orange-80);\n    --wa-color-neutral-70: var(--wa-color-orange-70);\n    --wa-color-neutral-60: var(--wa-color-orange-60);\n    --wa-color-neutral-50: var(--wa-color-orange-50);\n    --wa-color-neutral-40: var(--wa-color-orange-40);\n    --wa-color-neutral-30: var(--wa-color-orange-30);\n    --wa-color-neutral-20: var(--wa-color-orange-20);\n    --wa-color-neutral-10: var(--wa-color-orange-10);\n    --wa-color-neutral-05: var(--wa-color-orange-05);\n    --wa-color-neutral: var(--wa-color-orange);\n    --wa-color-neutral-on: var(--wa-color-orange-on);\n  }\n\n  .wa-neutral-yellow {\n    --wa-color-neutral-95: var(--wa-color-yellow-95);\n    --wa-color-neutral-90: var(--wa-color-yellow-90);\n    --wa-color-neutral-80: var(--wa-color-yellow-80);\n    --wa-color-neutral-70: var(--wa-color-yellow-70);\n    --wa-color-neutral-60: var(--wa-color-yellow-60);\n    --wa-color-neutral-50: var(--wa-color-yellow-50);\n    --wa-color-neutral-40: var(--wa-color-yellow-40);\n    --wa-color-neutral-30: var(--wa-color-yellow-30);\n    --wa-color-neutral-20: var(--wa-color-yellow-20);\n    --wa-color-neutral-10: var(--wa-color-yellow-10);\n    --wa-color-neutral-05: var(--wa-color-yellow-05);\n    --wa-color-neutral: var(--wa-color-yellow);\n    --wa-color-neutral-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-neutral-green {\n    --wa-color-neutral-95: var(--wa-color-green-95);\n    --wa-color-neutral-90: var(--wa-color-green-90);\n    --wa-color-neutral-80: var(--wa-color-green-80);\n    --wa-color-neutral-70: var(--wa-color-green-70);\n    --wa-color-neutral-60: var(--wa-color-green-60);\n    --wa-color-neutral-50: var(--wa-color-green-50);\n    --wa-color-neutral-40: var(--wa-color-green-40);\n    --wa-color-neutral-30: var(--wa-color-green-30);\n    --wa-color-neutral-20: var(--wa-color-green-20);\n    --wa-color-neutral-10: var(--wa-color-green-10);\n    --wa-color-neutral-05: var(--wa-color-green-05);\n    --wa-color-neutral: var(--wa-color-green);\n    --wa-color-neutral-on: var(--wa-color-green-on);\n  }\n\n  .wa-neutral-cyan {\n    --wa-color-neutral-95: var(--wa-color-cyan-95);\n    --wa-color-neutral-90: var(--wa-color-cyan-90);\n    --wa-color-neutral-80: var(--wa-color-cyan-80);\n    --wa-color-neutral-70: var(--wa-color-cyan-70);\n    --wa-color-neutral-60: var(--wa-color-cyan-60);\n    --wa-color-neutral-50: var(--wa-color-cyan-50);\n    --wa-color-neutral-40: var(--wa-color-cyan-40);\n    --wa-color-neutral-30: var(--wa-color-cyan-30);\n    --wa-color-neutral-20: var(--wa-color-cyan-20);\n    --wa-color-neutral-10: var(--wa-color-cyan-10);\n    --wa-color-neutral-05: var(--wa-color-cyan-05);\n    --wa-color-neutral: var(--wa-color-cyan);\n    --wa-color-neutral-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-neutral-blue {\n    --wa-color-neutral-95: var(--wa-color-blue-95);\n    --wa-color-neutral-90: var(--wa-color-blue-90);\n    --wa-color-neutral-80: var(--wa-color-blue-80);\n    --wa-color-neutral-70: var(--wa-color-blue-70);\n    --wa-color-neutral-60: var(--wa-color-blue-60);\n    --wa-color-neutral-50: var(--wa-color-blue-50);\n    --wa-color-neutral-40: var(--wa-color-blue-40);\n    --wa-color-neutral-30: var(--wa-color-blue-30);\n    --wa-color-neutral-20: var(--wa-color-blue-20);\n    --wa-color-neutral-10: var(--wa-color-blue-10);\n    --wa-color-neutral-05: var(--wa-color-blue-05);\n    --wa-color-neutral: var(--wa-color-blue);\n    --wa-color-neutral-on: var(--wa-color-blue-on);\n  }\n\n  .wa-neutral-indigo {\n    --wa-color-neutral-95: var(--wa-color-indigo-95);\n    --wa-color-neutral-90: var(--wa-color-indigo-90);\n    --wa-color-neutral-80: var(--wa-color-indigo-80);\n    --wa-color-neutral-70: var(--wa-color-indigo-70);\n    --wa-color-neutral-60: var(--wa-color-indigo-60);\n    --wa-color-neutral-50: var(--wa-color-indigo-50);\n    --wa-color-neutral-40: var(--wa-color-indigo-40);\n    --wa-color-neutral-30: var(--wa-color-indigo-30);\n    --wa-color-neutral-20: var(--wa-color-indigo-20);\n    --wa-color-neutral-10: var(--wa-color-indigo-10);\n    --wa-color-neutral-05: var(--wa-color-indigo-05);\n    --wa-color-neutral: var(--wa-color-indigo);\n    --wa-color-neutral-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-neutral-purple {\n    --wa-color-neutral-95: var(--wa-color-purple-95);\n    --wa-color-neutral-90: var(--wa-color-purple-90);\n    --wa-color-neutral-80: var(--wa-color-purple-80);\n    --wa-color-neutral-70: var(--wa-color-purple-70);\n    --wa-color-neutral-60: var(--wa-color-purple-60);\n    --wa-color-neutral-50: var(--wa-color-purple-50);\n    --wa-color-neutral-40: var(--wa-color-purple-40);\n    --wa-color-neutral-30: var(--wa-color-purple-30);\n    --wa-color-neutral-20: var(--wa-color-purple-20);\n    --wa-color-neutral-10: var(--wa-color-purple-10);\n    --wa-color-neutral-05: var(--wa-color-purple-05);\n    --wa-color-neutral: var(--wa-color-purple);\n    --wa-color-neutral-on: var(--wa-color-purple-on);\n  }\n\n  .wa-neutral-pink {\n    --wa-color-neutral-95: var(--wa-color-pink-95);\n    --wa-color-neutral-90: var(--wa-color-pink-90);\n    --wa-color-neutral-80: var(--wa-color-pink-80);\n    --wa-color-neutral-70: var(--wa-color-pink-70);\n    --wa-color-neutral-60: var(--wa-color-pink-60);\n    --wa-color-neutral-50: var(--wa-color-pink-50);\n    --wa-color-neutral-40: var(--wa-color-pink-40);\n    --wa-color-neutral-30: var(--wa-color-pink-30);\n    --wa-color-neutral-20: var(--wa-color-pink-20);\n    --wa-color-neutral-10: var(--wa-color-pink-10);\n    --wa-color-neutral-05: var(--wa-color-pink-05);\n    --wa-color-neutral: var(--wa-color-pink);\n    --wa-color-neutral-on: var(--wa-color-pink-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-success-green {\n    --wa-color-success-95: var(--wa-color-green-95);\n    --wa-color-success-90: var(--wa-color-green-90);\n    --wa-color-success-80: var(--wa-color-green-80);\n    --wa-color-success-70: var(--wa-color-green-70);\n    --wa-color-success-60: var(--wa-color-green-60);\n    --wa-color-success-50: var(--wa-color-green-50);\n    --wa-color-success-40: var(--wa-color-green-40);\n    --wa-color-success-30: var(--wa-color-green-30);\n    --wa-color-success-20: var(--wa-color-green-20);\n    --wa-color-success-10: var(--wa-color-green-10);\n    --wa-color-success-05: var(--wa-color-green-05);\n    --wa-color-success: var(--wa-color-green);\n    --wa-color-success-on: var(--wa-color-green-on);\n  }\n\n  .wa-success-red {\n    --wa-color-success-95: var(--wa-color-red-95);\n    --wa-color-success-90: var(--wa-color-red-90);\n    --wa-color-success-80: var(--wa-color-red-80);\n    --wa-color-success-70: var(--wa-color-red-70);\n    --wa-color-success-60: var(--wa-color-red-60);\n    --wa-color-success-50: var(--wa-color-red-50);\n    --wa-color-success-40: var(--wa-color-red-40);\n    --wa-color-success-30: var(--wa-color-red-30);\n    --wa-color-success-20: var(--wa-color-red-20);\n    --wa-color-success-10: var(--wa-color-red-10);\n    --wa-color-success-05: var(--wa-color-red-05);\n    --wa-color-success: var(--wa-color-red);\n    --wa-color-success-on: var(--wa-color-red-on);\n  }\n\n  .wa-success-orange {\n    --wa-color-success-95: var(--wa-color-orange-95);\n    --wa-color-success-90: var(--wa-color-orange-90);\n    --wa-color-success-80: var(--wa-color-orange-80);\n    --wa-color-success-70: var(--wa-color-orange-70);\n    --wa-color-success-60: var(--wa-color-orange-60);\n    --wa-color-success-50: var(--wa-color-orange-50);\n    --wa-color-success-40: var(--wa-color-orange-40);\n    --wa-color-success-30: var(--wa-color-orange-30);\n    --wa-color-success-20: var(--wa-color-orange-20);\n    --wa-color-success-10: var(--wa-color-orange-10);\n    --wa-color-success-05: var(--wa-color-orange-05);\n    --wa-color-success: var(--wa-color-orange);\n    --wa-color-success-on: var(--wa-color-orange-on);\n  }\n\n  .wa-success-yellow {\n    --wa-color-success-95: var(--wa-color-yellow-95);\n    --wa-color-success-90: var(--wa-color-yellow-90);\n    --wa-color-success-80: var(--wa-color-yellow-80);\n    --wa-color-success-70: var(--wa-color-yellow-70);\n    --wa-color-success-60: var(--wa-color-yellow-60);\n    --wa-color-success-50: var(--wa-color-yellow-50);\n    --wa-color-success-40: var(--wa-color-yellow-40);\n    --wa-color-success-30: var(--wa-color-yellow-30);\n    --wa-color-success-20: var(--wa-color-yellow-20);\n    --wa-color-success-10: var(--wa-color-yellow-10);\n    --wa-color-success-05: var(--wa-color-yellow-05);\n    --wa-color-success: var(--wa-color-yellow);\n    --wa-color-success-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-success-cyan {\n    --wa-color-success-95: var(--wa-color-cyan-95);\n    --wa-color-success-90: var(--wa-color-cyan-90);\n    --wa-color-success-80: var(--wa-color-cyan-80);\n    --wa-color-success-70: var(--wa-color-cyan-70);\n    --wa-color-success-60: var(--wa-color-cyan-60);\n    --wa-color-success-50: var(--wa-color-cyan-50);\n    --wa-color-success-40: var(--wa-color-cyan-40);\n    --wa-color-success-30: var(--wa-color-cyan-30);\n    --wa-color-success-20: var(--wa-color-cyan-20);\n    --wa-color-success-10: var(--wa-color-cyan-10);\n    --wa-color-success-05: var(--wa-color-cyan-05);\n    --wa-color-success: var(--wa-color-cyan);\n    --wa-color-success-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-success-blue {\n    --wa-color-success-95: var(--wa-color-blue-95);\n    --wa-color-success-90: var(--wa-color-blue-90);\n    --wa-color-success-80: var(--wa-color-blue-80);\n    --wa-color-success-70: var(--wa-color-blue-70);\n    --wa-color-success-60: var(--wa-color-blue-60);\n    --wa-color-success-50: var(--wa-color-blue-50);\n    --wa-color-success-40: var(--wa-color-blue-40);\n    --wa-color-success-30: var(--wa-color-blue-30);\n    --wa-color-success-20: var(--wa-color-blue-20);\n    --wa-color-success-10: var(--wa-color-blue-10);\n    --wa-color-success-05: var(--wa-color-blue-05);\n    --wa-color-success: var(--wa-color-blue);\n    --wa-color-success-on: var(--wa-color-blue-on);\n  }\n\n  .wa-success-indigo {\n    --wa-color-success-95: var(--wa-color-indigo-95);\n    --wa-color-success-90: var(--wa-color-indigo-90);\n    --wa-color-success-80: var(--wa-color-indigo-80);\n    --wa-color-success-70: var(--wa-color-indigo-70);\n    --wa-color-success-60: var(--wa-color-indigo-60);\n    --wa-color-success-50: var(--wa-color-indigo-50);\n    --wa-color-success-40: var(--wa-color-indigo-40);\n    --wa-color-success-30: var(--wa-color-indigo-30);\n    --wa-color-success-20: var(--wa-color-indigo-20);\n    --wa-color-success-10: var(--wa-color-indigo-10);\n    --wa-color-success-05: var(--wa-color-indigo-05);\n    --wa-color-success: var(--wa-color-indigo);\n    --wa-color-success-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-success-purple {\n    --wa-color-success-95: var(--wa-color-purple-95);\n    --wa-color-success-90: var(--wa-color-purple-90);\n    --wa-color-success-80: var(--wa-color-purple-80);\n    --wa-color-success-70: var(--wa-color-purple-70);\n    --wa-color-success-60: var(--wa-color-purple-60);\n    --wa-color-success-50: var(--wa-color-purple-50);\n    --wa-color-success-40: var(--wa-color-purple-40);\n    --wa-color-success-30: var(--wa-color-purple-30);\n    --wa-color-success-20: var(--wa-color-purple-20);\n    --wa-color-success-10: var(--wa-color-purple-10);\n    --wa-color-success-05: var(--wa-color-purple-05);\n    --wa-color-success: var(--wa-color-purple);\n    --wa-color-success-on: var(--wa-color-purple-on);\n  }\n\n  .wa-success-pink {\n    --wa-color-success-95: var(--wa-color-pink-95);\n    --wa-color-success-90: var(--wa-color-pink-90);\n    --wa-color-success-80: var(--wa-color-pink-80);\n    --wa-color-success-70: var(--wa-color-pink-70);\n    --wa-color-success-60: var(--wa-color-pink-60);\n    --wa-color-success-50: var(--wa-color-pink-50);\n    --wa-color-success-40: var(--wa-color-pink-40);\n    --wa-color-success-30: var(--wa-color-pink-30);\n    --wa-color-success-20: var(--wa-color-pink-20);\n    --wa-color-success-10: var(--wa-color-pink-10);\n    --wa-color-success-05: var(--wa-color-pink-05);\n    --wa-color-success: var(--wa-color-pink);\n    --wa-color-success-on: var(--wa-color-pink-on);\n  }\n\n  .wa-success-gray {\n    --wa-color-success-95: var(--wa-color-gray-95);\n    --wa-color-success-90: var(--wa-color-gray-90);\n    --wa-color-success-80: var(--wa-color-gray-80);\n    --wa-color-success-70: var(--wa-color-gray-70);\n    --wa-color-success-60: var(--wa-color-gray-60);\n    --wa-color-success-50: var(--wa-color-gray-50);\n    --wa-color-success-40: var(--wa-color-gray-40);\n    --wa-color-success-30: var(--wa-color-gray-30);\n    --wa-color-success-20: var(--wa-color-gray-20);\n    --wa-color-success-10: var(--wa-color-gray-10);\n    --wa-color-success-05: var(--wa-color-gray-05);\n    --wa-color-success: var(--wa-color-gray);\n    --wa-color-success-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-warning-yellow {\n    --wa-color-warning-95: var(--wa-color-yellow-95);\n    --wa-color-warning-90: var(--wa-color-yellow-90);\n    --wa-color-warning-80: var(--wa-color-yellow-80);\n    --wa-color-warning-70: var(--wa-color-yellow-70);\n    --wa-color-warning-60: var(--wa-color-yellow-60);\n    --wa-color-warning-50: var(--wa-color-yellow-50);\n    --wa-color-warning-40: var(--wa-color-yellow-40);\n    --wa-color-warning-30: var(--wa-color-yellow-30);\n    --wa-color-warning-20: var(--wa-color-yellow-20);\n    --wa-color-warning-10: var(--wa-color-yellow-10);\n    --wa-color-warning-05: var(--wa-color-yellow-05);\n    --wa-color-warning: var(--wa-color-yellow);\n    --wa-color-warning-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-warning-red {\n    --wa-color-warning-95: var(--wa-color-red-95);\n    --wa-color-warning-90: var(--wa-color-red-90);\n    --wa-color-warning-80: var(--wa-color-red-80);\n    --wa-color-warning-70: var(--wa-color-red-70);\n    --wa-color-warning-60: var(--wa-color-red-60);\n    --wa-color-warning-50: var(--wa-color-red-50);\n    --wa-color-warning-40: var(--wa-color-red-40);\n    --wa-color-warning-30: var(--wa-color-red-30);\n    --wa-color-warning-20: var(--wa-color-red-20);\n    --wa-color-warning-10: var(--wa-color-red-10);\n    --wa-color-warning-05: var(--wa-color-red-05);\n    --wa-color-warning: var(--wa-color-red);\n    --wa-color-warning-on: var(--wa-color-red-on);\n  }\n\n  .wa-warning-orange {\n    --wa-color-warning-95: var(--wa-color-orange-95);\n    --wa-color-warning-90: var(--wa-color-orange-90);\n    --wa-color-warning-80: var(--wa-color-orange-80);\n    --wa-color-warning-70: var(--wa-color-orange-70);\n    --wa-color-warning-60: var(--wa-color-orange-60);\n    --wa-color-warning-50: var(--wa-color-orange-50);\n    --wa-color-warning-40: var(--wa-color-orange-40);\n    --wa-color-warning-30: var(--wa-color-orange-30);\n    --wa-color-warning-20: var(--wa-color-orange-20);\n    --wa-color-warning-10: var(--wa-color-orange-10);\n    --wa-color-warning-05: var(--wa-color-orange-05);\n    --wa-color-warning: var(--wa-color-orange);\n    --wa-color-warning-on: var(--wa-color-orange-on);\n  }\n\n  .wa-warning-green {\n    --wa-color-warning-95: var(--wa-color-green-95);\n    --wa-color-warning-90: var(--wa-color-green-90);\n    --wa-color-warning-80: var(--wa-color-green-80);\n    --wa-color-warning-70: var(--wa-color-green-70);\n    --wa-color-warning-60: var(--wa-color-green-60);\n    --wa-color-warning-50: var(--wa-color-green-50);\n    --wa-color-warning-40: var(--wa-color-green-40);\n    --wa-color-warning-30: var(--wa-color-green-30);\n    --wa-color-warning-20: var(--wa-color-green-20);\n    --wa-color-warning-10: var(--wa-color-green-10);\n    --wa-color-warning-05: var(--wa-color-green-05);\n    --wa-color-warning: var(--wa-color-green);\n    --wa-color-warning-on: var(--wa-color-green-on);\n  }\n\n  .wa-warning-cyan {\n    --wa-color-warning-95: var(--wa-color-cyan-95);\n    --wa-color-warning-90: var(--wa-color-cyan-90);\n    --wa-color-warning-80: var(--wa-color-cyan-80);\n    --wa-color-warning-70: var(--wa-color-cyan-70);\n    --wa-color-warning-60: var(--wa-color-cyan-60);\n    --wa-color-warning-50: var(--wa-color-cyan-50);\n    --wa-color-warning-40: var(--wa-color-cyan-40);\n    --wa-color-warning-30: var(--wa-color-cyan-30);\n    --wa-color-warning-20: var(--wa-color-cyan-20);\n    --wa-color-warning-10: var(--wa-color-cyan-10);\n    --wa-color-warning-05: var(--wa-color-cyan-05);\n    --wa-color-warning: var(--wa-color-cyan);\n    --wa-color-warning-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-warning-blue {\n    --wa-color-warning-95: var(--wa-color-blue-95);\n    --wa-color-warning-90: var(--wa-color-blue-90);\n    --wa-color-warning-80: var(--wa-color-blue-80);\n    --wa-color-warning-70: var(--wa-color-blue-70);\n    --wa-color-warning-60: var(--wa-color-blue-60);\n    --wa-color-warning-50: var(--wa-color-blue-50);\n    --wa-color-warning-40: var(--wa-color-blue-40);\n    --wa-color-warning-30: var(--wa-color-blue-30);\n    --wa-color-warning-20: var(--wa-color-blue-20);\n    --wa-color-warning-10: var(--wa-color-blue-10);\n    --wa-color-warning-05: var(--wa-color-blue-05);\n    --wa-color-warning: var(--wa-color-blue);\n    --wa-color-warning-on: var(--wa-color-blue-on);\n  }\n\n  .wa-warning-indigo {\n    --wa-color-warning-95: var(--wa-color-indigo-95);\n    --wa-color-warning-90: var(--wa-color-indigo-90);\n    --wa-color-warning-80: var(--wa-color-indigo-80);\n    --wa-color-warning-70: var(--wa-color-indigo-70);\n    --wa-color-warning-60: var(--wa-color-indigo-60);\n    --wa-color-warning-50: var(--wa-color-indigo-50);\n    --wa-color-warning-40: var(--wa-color-indigo-40);\n    --wa-color-warning-30: var(--wa-color-indigo-30);\n    --wa-color-warning-20: var(--wa-color-indigo-20);\n    --wa-color-warning-10: var(--wa-color-indigo-10);\n    --wa-color-warning-05: var(--wa-color-indigo-05);\n    --wa-color-warning: var(--wa-color-indigo);\n    --wa-color-warning-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-warning-purple {\n    --wa-color-warning-95: var(--wa-color-purple-95);\n    --wa-color-warning-90: var(--wa-color-purple-90);\n    --wa-color-warning-80: var(--wa-color-purple-80);\n    --wa-color-warning-70: var(--wa-color-purple-70);\n    --wa-color-warning-60: var(--wa-color-purple-60);\n    --wa-color-warning-50: var(--wa-color-purple-50);\n    --wa-color-warning-40: var(--wa-color-purple-40);\n    --wa-color-warning-30: var(--wa-color-purple-30);\n    --wa-color-warning-20: var(--wa-color-purple-20);\n    --wa-color-warning-10: var(--wa-color-purple-10);\n    --wa-color-warning-05: var(--wa-color-purple-05);\n    --wa-color-warning: var(--wa-color-purple);\n    --wa-color-warning-on: var(--wa-color-purple-on);\n  }\n\n  .wa-warning-pink {\n    --wa-color-warning-95: var(--wa-color-pink-95);\n    --wa-color-warning-90: var(--wa-color-pink-90);\n    --wa-color-warning-80: var(--wa-color-pink-80);\n    --wa-color-warning-70: var(--wa-color-pink-70);\n    --wa-color-warning-60: var(--wa-color-pink-60);\n    --wa-color-warning-50: var(--wa-color-pink-50);\n    --wa-color-warning-40: var(--wa-color-pink-40);\n    --wa-color-warning-30: var(--wa-color-pink-30);\n    --wa-color-warning-20: var(--wa-color-pink-20);\n    --wa-color-warning-10: var(--wa-color-pink-10);\n    --wa-color-warning-05: var(--wa-color-pink-05);\n    --wa-color-warning: var(--wa-color-pink);\n    --wa-color-warning-on: var(--wa-color-pink-on);\n  }\n\n  .wa-warning-gray {\n    --wa-color-warning-95: var(--wa-color-gray-95);\n    --wa-color-warning-90: var(--wa-color-gray-90);\n    --wa-color-warning-80: var(--wa-color-gray-80);\n    --wa-color-warning-70: var(--wa-color-gray-70);\n    --wa-color-warning-60: var(--wa-color-gray-60);\n    --wa-color-warning-50: var(--wa-color-gray-50);\n    --wa-color-warning-40: var(--wa-color-gray-40);\n    --wa-color-warning-30: var(--wa-color-gray-30);\n    --wa-color-warning-20: var(--wa-color-gray-20);\n    --wa-color-warning-10: var(--wa-color-gray-10);\n    --wa-color-warning-05: var(--wa-color-gray-05);\n    --wa-color-warning: var(--wa-color-gray);\n    --wa-color-warning-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-danger-red {\n    --wa-color-danger-95: var(--wa-color-red-95);\n    --wa-color-danger-90: var(--wa-color-red-90);\n    --wa-color-danger-80: var(--wa-color-red-80);\n    --wa-color-danger-70: var(--wa-color-red-70);\n    --wa-color-danger-60: var(--wa-color-red-60);\n    --wa-color-danger-50: var(--wa-color-red-50);\n    --wa-color-danger-40: var(--wa-color-red-40);\n    --wa-color-danger-30: var(--wa-color-red-30);\n    --wa-color-danger-20: var(--wa-color-red-20);\n    --wa-color-danger-10: var(--wa-color-red-10);\n    --wa-color-danger-05: var(--wa-color-red-05);\n    --wa-color-danger: var(--wa-color-red);\n    --wa-color-danger-on: var(--wa-color-red-on);\n  }\n\n  .wa-danger-orange {\n    --wa-color-danger-95: var(--wa-color-orange-95);\n    --wa-color-danger-90: var(--wa-color-orange-90);\n    --wa-color-danger-80: var(--wa-color-orange-80);\n    --wa-color-danger-70: var(--wa-color-orange-70);\n    --wa-color-danger-60: var(--wa-color-orange-60);\n    --wa-color-danger-50: var(--wa-color-orange-50);\n    --wa-color-danger-40: var(--wa-color-orange-40);\n    --wa-color-danger-30: var(--wa-color-orange-30);\n    --wa-color-danger-20: var(--wa-color-orange-20);\n    --wa-color-danger-10: var(--wa-color-orange-10);\n    --wa-color-danger-05: var(--wa-color-orange-05);\n    --wa-color-danger: var(--wa-color-orange);\n    --wa-color-danger-on: var(--wa-color-orange-on);\n  }\n\n  .wa-danger-yellow {\n    --wa-color-danger-95: var(--wa-color-yellow-95);\n    --wa-color-danger-90: var(--wa-color-yellow-90);\n    --wa-color-danger-80: var(--wa-color-yellow-80);\n    --wa-color-danger-70: var(--wa-color-yellow-70);\n    --wa-color-danger-60: var(--wa-color-yellow-60);\n    --wa-color-danger-50: var(--wa-color-yellow-50);\n    --wa-color-danger-40: var(--wa-color-yellow-40);\n    --wa-color-danger-30: var(--wa-color-yellow-30);\n    --wa-color-danger-20: var(--wa-color-yellow-20);\n    --wa-color-danger-10: var(--wa-color-yellow-10);\n    --wa-color-danger-05: var(--wa-color-yellow-05);\n    --wa-color-danger: var(--wa-color-yellow);\n    --wa-color-danger-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-danger-green {\n    --wa-color-danger-95: var(--wa-color-green-95);\n    --wa-color-danger-90: var(--wa-color-green-90);\n    --wa-color-danger-80: var(--wa-color-green-80);\n    --wa-color-danger-70: var(--wa-color-green-70);\n    --wa-color-danger-60: var(--wa-color-green-60);\n    --wa-color-danger-50: var(--wa-color-green-50);\n    --wa-color-danger-40: var(--wa-color-green-40);\n    --wa-color-danger-30: var(--wa-color-green-30);\n    --wa-color-danger-20: var(--wa-color-green-20);\n    --wa-color-danger-10: var(--wa-color-green-10);\n    --wa-color-danger-05: var(--wa-color-green-05);\n    --wa-color-danger: var(--wa-color-green);\n    --wa-color-danger-on: var(--wa-color-green-on);\n  }\n\n  .wa-danger-cyan {\n    --wa-color-danger-95: var(--wa-color-cyan-95);\n    --wa-color-danger-90: var(--wa-color-cyan-90);\n    --wa-color-danger-80: var(--wa-color-cyan-80);\n    --wa-color-danger-70: var(--wa-color-cyan-70);\n    --wa-color-danger-60: var(--wa-color-cyan-60);\n    --wa-color-danger-50: var(--wa-color-cyan-50);\n    --wa-color-danger-40: var(--wa-color-cyan-40);\n    --wa-color-danger-30: var(--wa-color-cyan-30);\n    --wa-color-danger-20: var(--wa-color-cyan-20);\n    --wa-color-danger-10: var(--wa-color-cyan-10);\n    --wa-color-danger-05: var(--wa-color-cyan-05);\n    --wa-color-danger: var(--wa-color-cyan);\n    --wa-color-danger-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-danger-blue {\n    --wa-color-danger-95: var(--wa-color-blue-95);\n    --wa-color-danger-90: var(--wa-color-blue-90);\n    --wa-color-danger-80: var(--wa-color-blue-80);\n    --wa-color-danger-70: var(--wa-color-blue-70);\n    --wa-color-danger-60: var(--wa-color-blue-60);\n    --wa-color-danger-50: var(--wa-color-blue-50);\n    --wa-color-danger-40: var(--wa-color-blue-40);\n    --wa-color-danger-30: var(--wa-color-blue-30);\n    --wa-color-danger-20: var(--wa-color-blue-20);\n    --wa-color-danger-10: var(--wa-color-blue-10);\n    --wa-color-danger-05: var(--wa-color-blue-05);\n    --wa-color-danger: var(--wa-color-blue);\n    --wa-color-danger-on: var(--wa-color-blue-on);\n  }\n\n  .wa-danger-indigo {\n    --wa-color-danger-95: var(--wa-color-indigo-95);\n    --wa-color-danger-90: var(--wa-color-indigo-90);\n    --wa-color-danger-80: var(--wa-color-indigo-80);\n    --wa-color-danger-70: var(--wa-color-indigo-70);\n    --wa-color-danger-60: var(--wa-color-indigo-60);\n    --wa-color-danger-50: var(--wa-color-indigo-50);\n    --wa-color-danger-40: var(--wa-color-indigo-40);\n    --wa-color-danger-30: var(--wa-color-indigo-30);\n    --wa-color-danger-20: var(--wa-color-indigo-20);\n    --wa-color-danger-10: var(--wa-color-indigo-10);\n    --wa-color-danger-05: var(--wa-color-indigo-05);\n    --wa-color-danger: var(--wa-color-indigo);\n    --wa-color-danger-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-danger-purple {\n    --wa-color-danger-95: var(--wa-color-purple-95);\n    --wa-color-danger-90: var(--wa-color-purple-90);\n    --wa-color-danger-80: var(--wa-color-purple-80);\n    --wa-color-danger-70: var(--wa-color-purple-70);\n    --wa-color-danger-60: var(--wa-color-purple-60);\n    --wa-color-danger-50: var(--wa-color-purple-50);\n    --wa-color-danger-40: var(--wa-color-purple-40);\n    --wa-color-danger-30: var(--wa-color-purple-30);\n    --wa-color-danger-20: var(--wa-color-purple-20);\n    --wa-color-danger-10: var(--wa-color-purple-10);\n    --wa-color-danger-05: var(--wa-color-purple-05);\n    --wa-color-danger: var(--wa-color-purple);\n    --wa-color-danger-on: var(--wa-color-purple-on);\n  }\n\n  .wa-danger-pink {\n    --wa-color-danger-95: var(--wa-color-pink-95);\n    --wa-color-danger-90: var(--wa-color-pink-90);\n    --wa-color-danger-80: var(--wa-color-pink-80);\n    --wa-color-danger-70: var(--wa-color-pink-70);\n    --wa-color-danger-60: var(--wa-color-pink-60);\n    --wa-color-danger-50: var(--wa-color-pink-50);\n    --wa-color-danger-40: var(--wa-color-pink-40);\n    --wa-color-danger-30: var(--wa-color-pink-30);\n    --wa-color-danger-20: var(--wa-color-pink-20);\n    --wa-color-danger-10: var(--wa-color-pink-10);\n    --wa-color-danger-05: var(--wa-color-pink-05);\n    --wa-color-danger: var(--wa-color-pink);\n    --wa-color-danger-on: var(--wa-color-pink-on);\n  }\n\n  .wa-danger-gray {\n    --wa-color-danger-95: var(--wa-color-gray-95);\n    --wa-color-danger-90: var(--wa-color-gray-90);\n    --wa-color-danger-80: var(--wa-color-gray-80);\n    --wa-color-danger-70: var(--wa-color-gray-70);\n    --wa-color-danger-60: var(--wa-color-gray-60);\n    --wa-color-danger-50: var(--wa-color-gray-50);\n    --wa-color-danger-40: var(--wa-color-gray-40);\n    --wa-color-danger-30: var(--wa-color-gray-30);\n    --wa-color-danger-20: var(--wa-color-gray-20);\n    --wa-color-danger-10: var(--wa-color-gray-10);\n    --wa-color-danger-05: var(--wa-color-gray-05);\n    --wa-color-danger: var(--wa-color-gray);\n    --wa-color-danger-on: var(--wa-color-gray-on);\n  }\n}\n\n\n\n@layer wa-color-palette {\n  :where(:root),\n  .wa-palette-default {\n    --wa-color-red-95: #fff0ef /* oklch(96.667% 0.01632 22.08) */;\n    --wa-color-red-90: #ffdedc /* oklch(92.735% 0.03679 21.966) */;\n    --wa-color-red-80: #ffb8b6 /* oklch(84.803% 0.08289 20.771) */;\n    --wa-color-red-70: #fd8f90 /* oklch(76.801% 0.13322 20.052) */;\n    --wa-color-red-60: #f3676c /* oklch(68.914% 0.17256 20.646) */;\n    --wa-color-red-50: #dc3146 /* oklch(58.857% 0.20512 20.223) */;\n    --wa-color-red-40: #b30532 /* oklch(48.737% 0.19311 18.413) */;\n    --wa-color-red-30: #8a132c /* oklch(41.17% 0.1512 16.771) */;\n    --wa-color-red-20: #631323 /* oklch(33.297% 0.11208 14.847) */;\n    --wa-color-red-10: #3e0913 /* oklch(24.329% 0.08074 15.207) */;\n    --wa-color-red-05: #2a040b /* oklch(19.016% 0.06394 13.71) */;\n    --wa-color-red: var(--wa-color-red-50);\n    --wa-color-red-key: 50;\n\n    --wa-color-orange-95: #fff0e6 /* oklch(96.426% 0.02105 56.133) */;\n    --wa-color-orange-90: #ffdfca /* oklch(92.468% 0.04529 55.325) */;\n    --wa-color-orange-80: #ffbb94 /* oklch(84.588% 0.09454 50.876) */;\n    --wa-color-orange-70: #ff9266 /* oklch(76.744% 0.14429 42.309) */;\n    --wa-color-orange-60: #f46a45 /* oklch(68.848% 0.17805 35.951) */;\n    --wa-color-orange-50: #cd491c /* oklch(58.195% 0.17597 37.577) */;\n    --wa-color-orange-40: #9f3501 /* oklch(47.889% 0.14981 39.957) */;\n    --wa-color-orange-30: #802700 /* oklch(40.637% 0.1298 39.149) */;\n    --wa-color-orange-20: #601b00 /* oklch(33.123% 0.10587 39.117) */;\n    --wa-color-orange-10: #3c0d00 /* oklch(24.043% 0.07768 38.607) */;\n    --wa-color-orange-05: #280600 /* oklch(18.644% 0.0607 38.252) */;\n    --wa-color-orange: var(--wa-color-orange-60);\n    --wa-color-orange-key: 60;\n\n    --wa-color-yellow-95: #fef3cd /* oklch(96.322% 0.05069 93.748) */;\n    --wa-color-yellow-90: #ffe495 /* oklch(92.377% 0.10246 91.296) */;\n    --wa-color-yellow-80: #fac22b /* oklch(84.185% 0.16263 85.991) */;\n    --wa-color-yellow-70: #ef9d00 /* oklch(75.949% 0.16251 72.13) */;\n    --wa-color-yellow-60: #da7e00 /* oklch(67.883% 0.15587 62.246) */;\n    --wa-color-yellow-50: #b45f04 /* oklch(57.449% 0.13836 56.585) */;\n    --wa-color-yellow-40: #8c4602 /* oklch(47.319% 0.11666 54.663) */;\n    --wa-color-yellow-30: #6f3601 /* oklch(40.012% 0.09892 54.555) */;\n    --wa-color-yellow-20: #532600 /* oklch(32.518% 0.08157 53.927) */;\n    --wa-color-yellow-10: #331600 /* oklch(23.846% 0.05834 56.02) */;\n    --wa-color-yellow-05: #220c00 /* oklch(18.585% 0.04625 54.588) */;\n    --wa-color-yellow: var(--wa-color-yellow-80);\n    --wa-color-yellow-key: 80;\n\n    --wa-color-green-95: #e3f9e3 /* oklch(96.006% 0.03715 145.28) */;\n    --wa-color-green-90: #c2f2c1 /* oklch(91.494% 0.08233 144.35) */;\n    --wa-color-green-80: #93da98 /* oklch(82.445% 0.11601 146.11) */;\n    --wa-color-green-70: #5dc36f /* oklch(73.554% 0.15308 147.59) */;\n    --wa-color-green-60: #00ac49 /* oklch(64.982% 0.18414 148.83) */;\n    --wa-color-green-50: #00883c /* oklch(54.765% 0.15165 149.77) */;\n    --wa-color-green-40: #036730 /* oklch(45.004% 0.11963 151.06) */;\n    --wa-color-green-30: #0a5027 /* oklch(37.988% 0.09487 151.62) */;\n    --wa-color-green-20: #0a3a1d /* oklch(30.876% 0.07202 152.23) */;\n    --wa-color-green-10: #052310 /* oklch(22.767% 0.05128 152.45) */;\n    --wa-color-green-05: #031608 /* oklch(17.84% 0.03957 151.36) */;\n    --wa-color-green: var(--wa-color-green-60);\n    --wa-color-green-key: 60;\n\n    --wa-color-cyan-95: #e3f6fb /* oklch(96.063% 0.02111 215.26) */;\n    --wa-color-cyan-90: #c5ecf7 /* oklch(91.881% 0.04314 216.7) */;\n    --wa-color-cyan-80: #7fd6ec /* oklch(82.906% 0.08934 215.86) */;\n    --wa-color-cyan-70: #2fbedc /* oklch(74.18% 0.12169 215.86) */;\n    --wa-color-cyan-60: #00a3c0 /* oklch(65.939% 0.11738 216.42) */;\n    --wa-color-cyan-50: #078098 /* oklch(55.379% 0.09774 217.32) */;\n    --wa-color-cyan-40: #026274 /* oklch(45.735% 0.08074 216.18) */;\n    --wa-color-cyan-30: #014c5b /* oklch(38.419% 0.06817 216.88) */;\n    --wa-color-cyan-20: #003844 /* oklch(31.427% 0.05624 217.32) */;\n    --wa-color-cyan-10: #002129 /* oklch(22.851% 0.04085 217.17) */;\n    --wa-color-cyan-05: #00151b /* oklch(18.055% 0.03231 217.31) */;\n    --wa-color-cyan: var(--wa-color-cyan-70);\n    --wa-color-cyan-key: 70;\n\n    --wa-color-blue-95: #e8f3ff /* oklch(95.944% 0.01996 250.38) */;\n    --wa-color-blue-90: #d1e8ff /* oklch(92.121% 0.03985 248.26) */;\n    --wa-color-blue-80: #9fceff /* oklch(83.572% 0.08502 249.92) */;\n    --wa-color-blue-70: #6eb3ff /* oklch(75.256% 0.1308 252.03) */;\n    --wa-color-blue-60: #3e96ff /* oklch(67.196% 0.17661 254.97) */;\n    --wa-color-blue-50: #0071ec /* oklch(56.972% 0.20461 257.29) */;\n    --wa-color-blue-40: #0053c0 /* oklch(47.175% 0.1846 259.19) */;\n    --wa-color-blue-30: #003f9c /* oklch(39.805% 0.16217 259.98) */;\n    --wa-color-blue-20: #002d77 /* oklch(32.436% 0.1349 260.35) */;\n    --wa-color-blue-10: #001a4e /* oklch(23.965% 0.10161 260.68) */;\n    --wa-color-blue-05: #000f35 /* oklch(18.565% 0.07904 260.75) */;\n    --wa-color-blue: var(--wa-color-blue-50);\n    --wa-color-blue-key: 50;\n\n    --wa-color-indigo-95: #f0f2ff /* oklch(96.341% 0.0175 279.06) */;\n    --wa-color-indigo-90: #dfe5ff /* oklch(92.527% 0.0359 275.35) */;\n    --wa-color-indigo-80: #bcc7ff /* oklch(84.053% 0.07938 275.91) */;\n    --wa-color-indigo-70: #9da9ff /* oklch(75.941% 0.12411 276.95) */;\n    --wa-color-indigo-60: #808aff /* oklch(67.977% 0.17065 277.16) */;\n    --wa-color-indigo-50: #6163f2 /* oklch(57.967% 0.20943 277.04) */;\n    --wa-color-indigo-40: #4945cb /* oklch(48.145% 0.20042 277.08) */;\n    --wa-color-indigo-30: #3933a7 /* oklch(40.844% 0.17864 277.26) */;\n    --wa-color-indigo-20: #292381 /* oklch(33.362% 0.15096 277.21) */;\n    --wa-color-indigo-10: #181255 /* oklch(24.534% 0.11483 277.73) */;\n    --wa-color-indigo-05: #0d0a3a /* oklch(19.092% 0.08825 276.76) */;\n    --wa-color-indigo: var(--wa-color-indigo-50);\n    --wa-color-indigo-key: 50;\n\n    --wa-color-purple-95: #f7f0ff /* oklch(96.49% 0.02119 306.84) */;\n    --wa-color-purple-90: #eedfff /* oklch(92.531% 0.04569 306.6) */;\n    --wa-color-purple-80: #ddbdff /* oklch(84.781% 0.09615 306.52) */;\n    --wa-color-purple-70: #ca99ff /* oklch(76.728% 0.14961 305.27) */;\n    --wa-color-purple-60: #b678f5 /* oklch(68.906% 0.1844 304.96) */;\n    --wa-color-purple-50: #9951db /* oklch(58.603% 0.20465 304.87) */;\n    --wa-color-purple-40: #7936b3 /* oklch(48.641% 0.18949 304.79) */;\n    --wa-color-purple-30: #612692 /* oklch(41.23% 0.16836 304.92) */;\n    --wa-color-purple-20: #491870 /* oklch(33.663% 0.14258 305.12) */;\n    --wa-color-purple-10: #2d0b48 /* oklch(24.637% 0.10612 304.95) */;\n    --wa-color-purple-05: #1e0532 /* oklch(19.393% 0.08461 305.26) */;\n    --wa-color-purple: var(--wa-color-purple-50);\n    --wa-color-purple-key: 50;\n\n    --wa-color-pink-95: #feeff9 /* oklch(96.676% 0.02074 337.69) */;\n    --wa-color-pink-90: #feddf0 /* oklch(93.026% 0.04388 342.45) */;\n    --wa-color-pink-80: #fcb5d8 /* oklch(84.928% 0.09304 348.21) */;\n    --wa-color-pink-70: #f78dbf /* oklch(77.058% 0.14016 351.19) */;\n    --wa-color-pink-60: #e66ba3 /* oklch(69.067% 0.16347 353.69) */;\n    --wa-color-pink-50: #c84382 /* oklch(58.707% 0.17826 354.82) */;\n    --wa-color-pink-40: #9e2a6c /* oklch(48.603% 0.16439 350.08) */;\n    --wa-color-pink-30: #7d1e58 /* oklch(41.017% 0.14211 347.77) */;\n    --wa-color-pink-20: #5e1342 /* oklch(33.442% 0.11808 347.01) */;\n    --wa-color-pink-10: #3c0828 /* oklch(24.601% 0.08768 347.8) */;\n    --wa-color-pink-05: #28041a /* oklch(19.199% 0.06799 346.97) */;\n    --wa-color-pink: var(--wa-color-pink-50);\n    --wa-color-pink-key: 50;\n\n    --wa-color-gray-95: #f1f2f3 /* oklch(96.067% 0.00172 247.84) */;\n    --wa-color-gray-90: #e4e5e9 /* oklch(92.228% 0.0055 274.96) */;\n    --wa-color-gray-80: #c7c9d0 /* oklch(83.641% 0.00994 273.33) */;\n    --wa-color-gray-70: #abaeb9 /* oklch(75.183% 0.01604 273.78) */;\n    --wa-color-gray-60: #9194a2 /* oklch(66.863% 0.02088 276.18) */;\n    --wa-color-gray-50: #717584 /* oklch(56.418% 0.02359 273.77) */;\n    --wa-color-gray-40: #545868 /* oklch(46.281% 0.02644 274.26) */;\n    --wa-color-gray-30: #424554 /* oklch(39.355% 0.02564 276.27) */;\n    --wa-color-gray-20: #2f323f /* oklch(31.97% 0.02354 274.82) */;\n    --wa-color-gray-10: #1b1d26 /* oklch(23.277% 0.01762 275.14) */;\n    --wa-color-gray-05: #101219 /* oklch(18.342% 0.01472 272.42) */;\n    --wa-color-gray: var(--wa-color-gray-40);\n    --wa-color-gray-key: 40;\n  }\n}\n\n\n@layer wa-theme {\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark .wa-invert,\n  .wa-light .wa-theme-default,\n  .wa-dark .wa-theme-default.wa-invert,\n  .wa-dark .wa-theme-default .wa-invert {\n    /* #region Colors (Light) ~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: light;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: white;\n    --wa-color-surface-default: white;\n    --wa-color-surface-lowered: var(--wa-color-neutral-95);\n    --wa-color-surface-border: var(--wa-color-neutral-90);\n\n    --wa-color-text-normal: var(--wa-color-neutral-10);\n    --wa-color-text-quiet: var(--wa-color-neutral-40);\n    --wa-color-text-link: var(--wa-color-brand-40);\n\n    --wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 10%;\n    --wa-color-mix-active: black 20%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-95);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-90);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-90);\n    --wa-color-brand-border-normal: var(--wa-color-brand-80);\n    --wa-color-brand-border-loud: var(--wa-color-brand-60);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-40);\n    --wa-color-brand-on-normal: var(--wa-color-brand-30);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-95);\n    --wa-color-success-fill-normal: var(--wa-color-success-90);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-90);\n    --wa-color-success-border-normal: var(--wa-color-success-80);\n    --wa-color-success-border-loud: var(--wa-color-success-60);\n    --wa-color-success-on-quiet: var(--wa-color-success-40);\n    --wa-color-success-on-normal: var(--wa-color-success-30);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-95);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-90);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-90);\n    --wa-color-warning-border-normal: var(--wa-color-warning-80);\n    --wa-color-warning-border-loud: var(--wa-color-warning-60);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-40);\n    --wa-color-warning-on-normal: var(--wa-color-warning-30);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-95);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-90);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-90);\n    --wa-color-danger-border-normal: var(--wa-color-danger-80);\n    --wa-color-danger-border-loud: var(--wa-color-danger-60);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-40);\n    --wa-color-danger-on-normal: var(--wa-color-danger-30);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-90);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-80);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-on-loud: white;\n    /* #endregion */\n  }\n\n  .wa-dark,\n  .wa-invert,\n  .wa-dark .wa-theme-default,\n  .wa-light .wa-theme-default.wa-invert,\n  .wa-light .wa-theme-default .wa-invert {\n    /* #region Colors (Dark) ~~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: dark;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: var(--wa-color-neutral-10);\n    --wa-color-surface-default: var(--wa-color-neutral-05);\n    --wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);\n    --wa-color-surface-border: var(--wa-color-neutral-20);\n\n    --wa-color-text-normal: var(--wa-color-neutral-95);\n    --wa-color-text-quiet: var(--wa-color-neutral-60);\n    --wa-color-text-link: var(--wa-color-brand-70);\n\n    --wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 8%;\n    --wa-color-mix-active: black 16%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-10);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-20);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-20);\n    --wa-color-brand-border-normal: var(--wa-color-brand-30);\n    --wa-color-brand-border-loud: var(--wa-color-brand-40);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-60);\n    --wa-color-brand-on-normal: var(--wa-color-brand-70);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-10);\n    --wa-color-success-fill-normal: var(--wa-color-success-20);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-20);\n    --wa-color-success-border-normal: var(--wa-color-success-30);\n    --wa-color-success-border-loud: var(--wa-color-success-40);\n    --wa-color-success-on-quiet: var(--wa-color-success-60);\n    --wa-color-success-on-normal: var(--wa-color-success-70);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-10);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-20);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-20);\n    --wa-color-warning-border-normal: var(--wa-color-warning-30);\n    --wa-color-warning-border-loud: var(--wa-color-warning-40);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-60);\n    --wa-color-warning-on-normal: var(--wa-color-warning-70);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-10);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-20);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-20);\n    --wa-color-danger-border-normal: var(--wa-color-danger-30);\n    --wa-color-danger-border-loud: var(--wa-color-danger-40);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-60);\n    --wa-color-danger-on-normal: var(--wa-color-danger-70);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-20);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-70);\n    --wa-color-neutral-on-loud: var(--wa-color-neutral-05);\n    /* #endregion */\n  }\n\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark,\n  .wa-invert {\n    font-family: var(--wa-font-family-body);\n\n    /* #region Fonts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-font-family-body: ui-sans-serif, system-ui, sans-serif;\n    --wa-font-family-heading: var(--wa-font-family-body);\n    --wa-font-family-code: ui-monospace, monospace;\n    --wa-font-family-longform: ui-serif, serif;\n\n    /* Font sizes use a ratio of 1.125 to scale sizes proportionally.\n     * For larger font sizes, each size is twice 1.125x larger to maximize impact.\n     * Each value uses `rem` units and is rounded to the nearest whole pixel when rendered. */\n    --wa-font-size-scale: 1;\n    --wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px); /* 11px */\n    --wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px); /* 12px */\n    --wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px); /* 14px */\n    --wa-font-size-m: calc(1rem * var(--wa-font-size-scale)); /* 16px */\n    --wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px); /* 20px */\n    --wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px); /* 25px */\n    --wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px); /* 32px */\n    --wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px); /* 41px */\n    --wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px); /* 52px */\n\n    --wa-font-size-smaller: round(calc(1em / 1.125), 1px);\n    --wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);\n\n    --wa-font-weight-light: 300;\n    --wa-font-weight-normal: 400;\n    --wa-font-weight-semibold: 500;\n    --wa-font-weight-bold: 600;\n\n    --wa-font-weight-body: var(--wa-font-weight-normal);\n    --wa-font-weight-heading: var(--wa-font-weight-bold);\n    --wa-font-weight-code: var(--wa-font-weight-normal);\n    --wa-font-weight-longform: var(--wa-font-weight-normal);\n    --wa-font-weight-action: var(--wa-font-weight-semibold);\n\n    --wa-line-height-condensed: 1.2;\n    --wa-line-height-normal: 1.6;\n    --wa-line-height-expanded: 2;\n\n    --wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;\n    --wa-link-decoration-hover: underline;\n    /* #endregion */\n\n    /* #region Space ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-space-scale: 1;\n    --wa-space-3xs: calc(var(--wa-space-scale) * 0.125rem); /* 2px */\n    --wa-space-2xs: calc(var(--wa-space-scale) * 0.25rem); /* 4px */\n    --wa-space-xs: calc(var(--wa-space-scale) * 0.5rem); /* 8px */\n    --wa-space-s: calc(var(--wa-space-scale) * 0.75rem); /* 12px */\n    --wa-space-m: calc(var(--wa-space-scale) * 1rem); /* 16px */\n    --wa-space-l: calc(var(--wa-space-scale) * 1.5rem); /* 24px */\n    --wa-space-xl: calc(var(--wa-space-scale) * 2rem); /* 32px */\n    --wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem); /* 40px */\n    --wa-space-3xl: calc(var(--wa-space-scale) * 3rem); /* 48px */\n    --wa-space-4xl: calc(var(--wa-space-scale) * 4rem); /* 64px */\n\n    --wa-content-spacing: var(--wa-space-l);\n    /* #endregion */\n\n    /* #region Borders ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-style: solid;\n\n    --wa-border-width-scale: 1;\n    --wa-border-width-s: calc(var(--wa-border-width-scale) * 0.0625rem);\n    --wa-border-width-m: calc(var(--wa-border-width-scale) * 0.125rem);\n    --wa-border-width-l: calc(var(--wa-border-width-scale) * 0.1875rem);\n    /* #endregion */\n\n    /* #region Rounding ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-radius-scale: 1;\n    --wa-border-radius-s: calc(var(--wa-border-radius-scale) * 0.1875rem);\n    --wa-border-radius-m: calc(var(--wa-border-radius-scale) * 0.375rem);\n    --wa-border-radius-l: calc(var(--wa-border-radius-scale) * 0.75rem);\n\n    --wa-border-radius-pill: 9999px;\n    --wa-border-radius-circle: 50%;\n    --wa-border-radius-square: 0px;\n    /* #endregion */\n\n    /* #region Focus ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-focus-ring-style: solid;\n    --wa-focus-ring-width: 0.1875rem; /* 3px */\n    --wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);\n    --wa-focus-ring-offset: 0.0625rem; /* 1px */\n    /* #endregion */\n\n    /* #region Shadows ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-shadow-offset-x-scale: 0;\n    --wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * 0.125rem);\n    --wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * 0.25rem);\n    --wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * 0.5rem);\n\n    --wa-shadow-offset-y-scale: 1;\n    --wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * 0.125rem);\n    --wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * 0.25rem);\n    --wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * 0.5rem);\n\n    --wa-shadow-blur-scale: 1;\n    --wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * 0.125rem);\n    --wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * 0.25rem);\n    --wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * 0.5rem);\n\n    --wa-shadow-spread-scale: -0.5;\n    --wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * 0.125rem);\n    --wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * 0.25rem);\n    --wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * 0.5rem);\n\n    --wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)\n      var(--wa-shadow-spread-s) var(--wa-color-shadow);\n    --wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)\n      var(--wa-shadow-spread-m) var(--wa-color-shadow);\n    --wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)\n      var(--wa-shadow-spread-l) var(--wa-color-shadow);\n    /* #endregion */\n\n    /* #region Transitions ~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-transition-easing: ease;\n    --wa-transition-slow: 300ms;\n    --wa-transition-normal: 150ms;\n    --wa-transition-fast: 75ms;\n    /* #endregion */\n\n    /* #region Components ~~~~~~~~~~~~~~~~~~~~~~~ */\n    /* Form Controls */\n    --wa-form-control-background-color: var(--wa-color-surface-default);\n\n    --wa-form-control-border-color: var(--wa-color-neutral-border-loud);\n    --wa-form-control-border-style: var(--wa-border-style);\n    --wa-form-control-border-width: var(--wa-border-width-s);\n    --wa-form-control-border-radius: var(--wa-border-radius-m);\n\n    --wa-form-control-activated-color: var(--wa-color-brand-fill-loud);\n\n    --wa-form-control-label-color: var(--wa-color-text-normal);\n    --wa-form-control-label-font-weight: var(--wa-font-weight-semibold);\n    --wa-form-control-label-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-value-color: var(--wa-color-text-normal);\n    --wa-form-control-value-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-value-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-hint-color: var(--wa-color-text-quiet);\n    --wa-form-control-hint-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-hint-line-height: var(--wa-line-height-normal);\n\n    --wa-form-control-placeholder-color: var(--wa-color-gray-50);\n\n    --wa-form-control-required-content: '*';\n    --wa-form-control-required-content-color: inherit;\n    --wa-form-control-required-content-offset: 0.1em;\n\n    --wa-form-control-padding-block: 0.75em;\n    --wa-form-control-padding-inline: 1em;\n    --wa-form-control-height: round(\n      calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),\n      1px\n    );\n    --wa-form-control-toggle-size: round(1.25em, 1px);\n\n    /* Panels */\n    --wa-panel-border-style: var(--wa-border-style);\n    --wa-panel-border-width: var(--wa-border-width-s);\n    --wa-panel-border-radius: var(--wa-border-radius-l);\n\n    /* Tooltips */\n    --wa-tooltip-arrow-size: 0.375rem;\n\n    --wa-tooltip-background-color: var(--wa-color-text-normal);\n\n    --wa-tooltip-border-color: var(--wa-tooltip-background-color);\n    --wa-tooltip-border-style: var(--wa-border-style);\n    --wa-tooltip-border-width: var(--wa-border-width-s);\n    --wa-tooltip-border-radius: var(--wa-border-radius-s);\n\n    --wa-tooltip-content-color: var(--wa-color-surface-default);\n    --wa-tooltip-font-size: var(--wa-font-size-s);\n    --wa-tooltip-line-height: var(--wa-line-height-normal);\n    /* #endregion */\n  }\n}\n\nwa-input[aria-invalid='true']::part(base),\nwa-textarea[aria-invalid='true']::part(base),\nwa-select[aria-invalid='true']::part(combobox) {\n  border-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n  outline-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n\n  border-top-width: var(--error-border-width) !important;\n  border-left-width: var(--error-border-width) !important;\n  border-right-width: var(--error-border-width) !important;\n  border-bottom-width: var(--error-border-width) !important;\n}\n\n.ir-dialog__footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  width: 100%;\n}\n.dialog__loader-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  min-height: 50px;\n  min-width: 31rem;\n}\n\n.ir__drawer {\n  text-align: left !important;\n}\n\n.ir__drawer::part(header) {\n  border-bottom: 1px solid var(--wa-color-surface-border);\n  padding-bottom: calc(var(--spacing) / 2);\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n}\n.ir__drawer::part(body) {\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n  padding: 0;\n  padding-left: var(--ir-drawer-padding-left, var(--spacing));\n  padding-right: var(--ir-drawer-padding-right, var(--spacing));\n  padding-top: var(--ir-drawer-padding-top, var(--spacing));\n  padding-bottom: var(--ir-drawer-padding-bottom, var(--spacing));\n}\n.ir__drawer::part(footer) {\n  background-color: var(--ir-drawer-background-color, var(--wa-color-surface-default));\n  padding-top: calc(var(--spacing) / 2);\n  border-top: 1px solid var(--wa-color-surface-border);\n}\n.ir__drawer-footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.ir__drawer-footer > * {\n  flex: 1 1 0%;\n}\n.drawer__loader-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n\n/* Place project-wide overrides below. */\n.my-custom-style {\n  background: #000;\n  color: white;\n}\n/* body {\n  background-color: var(--wa-color-surface-default) !important;\n} */\n:root {\n  --ir-color-muted-background: #f2f3f8;\n  --ir-color-loader: rgba(255, 255, 255, 0.2);\n  --error-border-width: 2px;\n  --ir-color-border-error: var(--wa-color-danger-border-loud);\n}\n.wa-dark {\n  --ir-color-loader: rgba(0, 0, 0, 0.2);\n  --ir-color-muted-background: #12141a;\n}\nbody {\n  background-color: var(--ir-color-muted-background) !important;\n  color: var(--wa-color-text-normal);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--wa-color-text-normal) !important;\n}\nhtml {\n  font-size: 14px !important;\n}\n\n/* body {\n  background-color: var(---wa-color-surface-default) !important;\n  color: var(--wa-color-text-normal) !important;\n} */\n.truncate {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n.ir-page__container {\n  display: flex;\n  flex-direction: column;\n  gap: var(--wa-space-l, 1.5rem);\n  padding: var(--wa-space-l);\n  position: relative;\n}\n\n.ir-price {\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: right;\n  white-space: nowrap;\n  color: var(--wa-color-text-normal);\n  margin: 0;\n  padding: 0;\n}\n.page-title {\n  font-family: var(--wa-font-family-heading);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  text-wrap: balance;\n  font-size: var(--wa-font-size-xl);\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --wa-form-control-required-content-color: var(--wa-color-danger-border-loud, #f3676c);\n}\n/* td {\n  padding: 0 !important;\n} */\n.label-on-left {\n  display: grid;\n  gap: var(--wa-space-m);\n}\nwa-card::part(base) {\n  box-sizing: border-box;\n}\n\n/* Shared layout for form controls inside wa-select, wa-input, wa-textarea */\n@media (min-width: 768px) {\n  /* .label-on-left wa-switch::part(label) {\n    margin-inline-start: 0;\n    margin-inline-end: 0.5rem;\n  } */\n  .label-on-left {\n    align-items: center;\n    grid-template-columns: auto 1fr;\n  }\n  .label-on-left wa-switch::part(base),\n  .label-on-left wa-select::part(form-control),\n  .label-on-left wa-select,\n  .label-on-left wa-switch,\n  .label-on-left wa-input,\n  .label-on-left wa-textarea {\n    grid-column: 1 / -1;\n    grid-row-end: span 2;\n    display: grid;\n    grid-template-columns: subgrid;\n    gap: 0 var(--wa-space-l);\n    align-items: center;\n  }\n  .label-on-left wa-switch::part(base) {\n    direction: rtl;\n  }\n  .label-on-left wa-switch::part(base) > * {\n    justify-self: flex-start;\n    justify-content: flex-start;\n    direction: ltr; /* fix text direction */\n  }\n  /* Label alignment */\n  .label-on-left ::part(label) {\n    justify-content: flex-end;\n  }\n\n  /* Hint always in second column */\n  .label-on-left ::part(hint) {\n    grid-column: 2;\n  }\n}\n\n.ir-preview-print-container {\n  position: fixed;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border-width: 0;\n}\n@media print {\n  body.ir-preview-dialog-print-mode {\n    background: #fff !important;\n  }\n  body.ir-preview-dialog-print-mode > *:not(.ir-preview-print-container) {\n    display: none !important;\n  }\n  body.ir-preview-dialog-print-mode .ir-preview-print-container {\n    opacity: 1;\n    pointer-events: auto;\n    position: static;\n    z-index: auto;\n    width: 100%;\n    min-height: auto;\n    margin: 0 auto;\n    padding: 1.5rem;\n    box-sizing: border-box;\n  }\n}\n\n@page {\n  margin: 0.5in;\n}\n";
const IrCommonStyle0 = appCss;

const IrCommon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler", 7);
    }
    get el() { return getElement(this); }
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
            return (h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" })));
        }
        return (h(Host, null, h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = IrCustomButtonStyle0;

const irDateRangeFilterCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n:host {\n  display: block;\n}\n\n/* ── Label ────────────────────────────────────────────── */\n.drf-label {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n  cursor: pointer;\n}\n\n/* ── Outer container ──────────────────────────────────── */\n.drf-container {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: var(--wa-form-control-height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  width: 100%;\n  overflow: visible;\n}\n\n:host([aria-invalid='true']) .drf-container {\n  border-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n  outline-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n\n  border-top-width: var(--error-border-width) !important;\n  border-left-width: var(--error-border-width) !important;\n  border-right-width: var(--error-border-width) !important;\n  border-bottom-width: var(--error-border-width) !important;\n}\n\n.drf-container:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* ── Each date field (from / to) ──────────────────────── */\n.drf-field {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  padding-inline: var(--wa-form-control-padding-inline, 0.75rem);\n  height: 100%;\n  min-width: 0;\n}\n\n/* ── Vertical divider between from and to ─────────────── */\n.drf-divider {\n  display: inline-block;\n  width: 1px;\n  height: 55%;\n  background-color: var(--wa-color-neutral-border-quiet, #e5e7eb);\n  flex-shrink: 0;\n}\n\n/* ── Date text / placeholder button ──────────────────── */\n.drf-text-btn {\n  all: unset;\n  flex: 1;\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  color: var(--wa-form-control-value-color, #111827);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\n.drf-text-btn--placeholder {\n  color: var(--wa-form-control-placeholder-color);\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.drf-text-btn:focus-visible {\n  outline: none;\n}\n\n/* ── Clear (×) button ─────────────────────────────────── */\n.drf-clear-btn {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #9ca3af);\n  border-radius: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 0.75rem;\n  transition: color 0.15s ease;\n}\n\n.drf-clear-btn:hover {\n  color: var(--wa-color-text-normal, #374151);\n}\n\n.drf-clear-btn:focus-visible {\n  outline: var(--wa-focus-ring);\n  border-radius: 50%;\n}\n/* ── Calendar icon trigger button ────────────────────── */\n.drf-cal-trigger {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.375rem;\n  background-color: var(--wa-color-neutral-fill-quiet, #f0f0f0);\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #6b7280);\n  transition: background-color 0.15s ease;\n}\n\n.drf-cal-trigger:hover {\n  background-color: var(--wa-color-neutral-fill-normal, #e0e0e0);\n}\n\n.drf-cal-trigger:focus-visible {\n  outline: var(--wa-focus-ring);\n}\n\n/* ── ir-date-select: hide its own input shell ─────────── */\n.drf-date-select::part(input-base) {\n  display: none !important;\n}\n\n/* ── Popup body: calendar + quick actions side-by-side ── */\n.drf-date-select::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n/* ── Quick-action preset buttons (inside popup) ───────── */\n.drf-quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  width: 200px;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border-width: 0;\n}\n";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

/** Inner parts of ir-date-select that are re-exported by this component. */
const DATE_SELECT_PARTS = ['base', 'anchor', 'combobox', 'body'];
/** Builds an `exportparts` string that re-exposes ir-date-select parts under a from-/to- prefix. */
const buildExportParts = (side) => DATE_SELECT_PARTS.map(part => `${part}:${side}-${part}`).join(', ');
/**
 * `exportparts` strings are constant per side, so build them once at module load.
 * (Module scope, not static class fields: Stencil compiles components to class
 * expressions, where self-referencing static initializers throw at runtime.)
 */
const EXPORT_PARTS = {
    from: buildExportParts('from'),
    to: buildExportParts('to'),
};
const IrDateRangeFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.datesChanged = createEvent(this, "datesChanged", 7);
        this.dateCleared = createEvent(this, "dateCleared", 7);
    }
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => hooks() },
        { label: '30 Days Ago', getDate: () => hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => hooks().subtract(1, 'year') },
    ];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate;
    /** Size variant passed through to inner form controls. Reflected for CSS hooks (`ir-date-range-filter[size='...']`). */
    size = 'small';
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions = true;
    /** Earliest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    minDate;
    /** Latest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    maxDate;
    /**
     * Flow after picking a from-date:
     * - `'auto'`: the to-picker opens automatically so the user completes the range in one pass.
     * - `'manual'` (default): nothing opens; the user clicks the to-field themselves.
     */
    selectionMode = 'manual';
    /** Shows an ✕ button next to each filled side that clears just that side. */
    withClear = true;
    /**
     * Visible label rendered above the control. It names the group for assistive
     * technology (replacing the default visually-hidden "Date range selector") and,
     * like a native form label, clicking it opens the from-date picker.
     */
    label;
    /** The selection rendered by the component (see the class doc for the controlled/uncontrolled rules). */
    dates = { from: null, to: null };
    /** Text for the polite live region, refreshed on every change so screen readers announce the new range. */
    liveMessage = '';
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged;
    /** Fired when the user explicitly clears a date field (after the accompanying `datesChanged`). */
    dateCleared;
    /** Unique id linking the group wrapper to its visually-hidden label. */
    groupId = `date-range-${Math.random().toString(36).substring(2, 9)}`;
    toDateSelectRef;
    fromDateSelectRef;
    /**
     * Latched to `true` the first time the corresponding prop is supplied, so a side
     * that was ever controlled keeps following the prop on subsequent syncs.
     */
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
    /**
     * Updates one side of the date range and emits the change. In `'auto'` selection
     * mode, picking a from-date opens the to-picker on the next frame (the popup needs
     * the click that closed the from-picker to finish propagating first).
     */
    selectDate(date, type) {
        let changes = { ...this.dates, [type]: date };
        if (this.dates.to && type === 'from' && date.isAfter(this.dates.to, 'date')) {
            changes = { ...changes, to: date };
        }
        this.dates = changes;
        this.emitChange();
        if (type === 'from' && date && this.selectionMode === 'auto') {
            requestAnimationFrame(() => {
                this.toDateSelectRef?.show();
            });
        }
    }
    /**
     * Clears one side of the range. State-only on purpose: nulling the date prop
     * cascades down to the calendar as a silent clear, whereas calling the picker's
     * `clear()` method would fire a second `dateChanged` and double-emit `datesChanged`.
     */
    clearDate(type) {
        this.selectDate(null, type);
        this.dateCleared.emit({ field: type });
    }
    /** Seeds internal state from whichever side is controlled (called once before first render). */
    syncInitialDates() {
        this.dates = {
            from: this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    /**
     * Applies a controlled-prop change to internal state: the changed side takes the
     * new value; the other side re-reads its prop only if it is controlled too.
     */
    syncControlledDates(changedField, changedValue) {
        this.dates = {
            from: changedField === 'from' ? this.parseDate(changedValue) : this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: changedField === 'to' ? this.parseDate(changedValue) : this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    /** Strict `YYYY-MM-DD` parser; anything else (including partial ISO strings) yields null. */
    parseDate(value) {
        if (!value) {
            return null;
        }
        const parsed = hooks(value, 'YYYY-MM-DD', true);
        return parsed.isValid() ? parsed : null;
    }
    /** Emits `datesChanged` and refreshes the screen-reader live region. */
    emitChange() {
        const from = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const to = this.dates.to?.format('YYYY-MM-DD') ?? null;
        this.datesChanged.emit({ from, to });
        const fromText = this.dates.from?.format('MMMM D, YYYY') ?? 'not set';
        const toText = this.dates.to?.format('MMMM D, YYYY') ?? 'not set';
        this.liveMessage = `Date range updated. From ${fromText} to ${toText}.`;
    }
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later. String comparison is safe for YYYY-MM-DD.
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
        // const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        return (h(Host, { key: '7acfb985ed78fa2efba4ac1912303ac43c81a2aa' }, this.label && (h("label", { key: 'ec5fd029c9e4ef5c607948f52f70aa96f2045011', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), h("div", { key: '5d2d9229a6e08ff76fcf80dcf1918af7fbe4b9b7', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (h("span", { key: 'ffb5be3f64402e267974d1345491ef965e5df195', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), h("div", { key: '8a0b36f993f85dd4d432065d4f1a6eaa6c0e33e0', part: "field field-from", class: "drf-field" }, h("button", { key: 'b9653c6de41f6c5d2f669ca020921c8a77a18d74', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && this.withClear && (h("button", { key: 'bc6ae6c8f5b4eb2471bd957e8f17792d3a79f663', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '401de7b981a1244c17cc31e84573f1c176d6e6cc', name: "xmark" }))), h("ir-date-select", { key: 'c66a5b51d16a33292db51230bf2f1f524ae741c8', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: 'ef4f685716ba4fdfd79ea9ed78d0eba2eb09f7ab', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: '662aba4e00d3720a57cb31cdb37624fb79e5559e', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '71debc9b0b0e2d5fc716b5e5bee65e3040ab163b', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '23e5631566fe83a9f89471362136f2591900ab4b', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '58adc0b1422d743d9300c554eaac522474b893a1', part: "field field-to", class: "drf-field" }, h("button", { key: '25caac55fb77230a48b692c7b546efb9b656467f', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && this.withClear && (h("button", { key: '301b0bc58e062d7888faad98309f6fffc24de68b', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '659293d7cbeb086b0411825705bc255969d3f2c0', name: "xmark" }))), h("ir-date-select", { key: 'd2e3b662cc4fc4841f0cd204c6e80672641f25b0', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '471efbaea60b2ac8463998d62e77bcfc886e6c8c', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: '8d9891d07809406159ca07f38dbdf74cb73ffd56', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '21afd4f1f8e59970b4a22488bfc6c150572d0fa4', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '083ea3761099ffcc5bf67e48aeacfa391cafe434', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
};
IrDateRangeFilter.style = IrDateRangeFilterStyle0;

const irDateSelectCss = ":host{display:flex;--arrow-size:0.375rem;--max-width:25rem;--show-duration:100ms;--hide-duration:100ms;--arrow-diagonal-size:calc((var(--arrow-size) * sin(45deg)));font-size:var(--wa-font-size-m);line-height:var(--wa-line-height-normal);text-align:start;white-space:normal}.ir-date-select__control{width:100%;display:flex}.ir-date-select__calendar{display:flex;flex-direction:column;width:max-content;max-width:var(--max-width);padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.ir-date-select__popup{--arrow-size:inherit;--show-duration:inherit;--hide-duration:inherit;pointer-events:auto}.ir-date-select__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.ir-date-select__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.ir-date-select__trigger,.ir-date-select__input{width:100%}";
const IrDateSelectStyle0 = irDateSelectCss;

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
const IrDateSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.datePickerFocus = createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = createEvent(this, "datePickerBlur", 7);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    get el() { return getElement(this); }
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
        if (this.date) {
            this.currentDate = hooks(this.date);
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
    handleDatePropChange(newDate) {
        this.currentDate = newDate ? hooks(newDate) : null;
    }
    async clear() {
        this.airDatePickerRef?.clearDatePicker();
    }
    async show() {
        this.isActive = true;
    }
    async hide() {
        this.isActive = false;
    }
    togglePicker() {
        this.isActive ? this.hide() : this.show();
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
                    this.hide();
                }
                break;
        }
    }
    get _label() {
        if (this.range) {
            return this.dates.map(d => hooks(d).format('MMM DD, YYYY')).join(' → ');
        }
        if (!this.currentDate) {
            return null;
        }
        return this.timepicker ? hooks(this.currentDate).format('MMM DD, YYYY, HH:mm') : hooks(this.currentDate).format('MMM DD, YYYY');
    }
    render() {
        return (h(Host, { key: 'de1355b623f9366e22f22a9bc1d8ec57ddeb1263', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, h("wa-popup", { key: 'c6e73d5031e07b818245e144d7a2cfeeed8eddac', arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, h("div", { key: 'da2a541e39979a291077fe6007dc5e40b1e7f3e4', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, h("div", { key: 'e00970ebe9661bd5c8b6bf45fb98105489d8665c', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("slot", { key: 'a7086598a2c7970684e135bbfa8647f5def9e69b', name: "trigger" }, h("ir-input", { key: 'd015f098abcdf09ad30d4cc2f08688d32d8a63f8', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && h("slot", { key: 'b4066e2f3efeedf18599a1a761feb7a5fabb265b', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '9a869ca11f98947586fce22657742d5154b13bfe', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: '9a3995bf378e855f0ef9a9828ce953d5e212d501', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: 'e3436733c461c76bbaa24af6930d45ad78f54dea', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: '5d90dfbd00af8d38dcb70eec33f0a964d42454a4', name: "hint", slot: "hint" }))))), h("div", { key: '1b97c3e10e5be889daf99a61a5a0399a2abdbc21', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date selection dialog" }, h("ir-air-date-picker", { key: '3b978698d1658ee3e89ae85ea89e804694d32e06', ref: el => (this.airDatePickerRef = el), withClear: this.withClear, placeholder: this.placeholder, label: this.label, dates: this.dates, inline: this.inline, date: this.date, multipleDates: this.multipleDates, range: this.range, dateFormat: this.dateFormat, timepicker: this.timepicker, minDate: this.minDate, maxDate: this.maxDate, disabled: this.disabled, autoClose: this.autoClose, showOtherMonths: this.showOtherMonths, selectOtherMonths: this.selectOtherMonths, customPicker: this.customPicker, container: this.container, forceDestroyOnUpdate: this.forceDestroyOnUpdate, emitEmptyDate: this.emitEmptyDate, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentDate = e.detail?.start;
                this.dateChanged.emit(e.detail);
                const shouldClose = this.autoClose && (!this.range || (this.range && e.detail.dates.length > 1));
                if (shouldClose) {
                    this.hide();
                }
            } }), h("slot", { key: '75bd602854288215450a972031a3927ed50743a2' })))));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"],
        "date": ["handleDatePropChange"]
    }; }
};
__decorate([
    ClickOutside()
], IrDateSelect.prototype, "hide", null);
IrDateSelect.style = IrDateSelectStyle0;

const irEmptyStateCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '894020fc794304a576eede3f7e7890af19e3fa5b' }, h("slot", { key: '2df91c8445acf19d8ea504caaa5346a2521d61cf', name: "icon" }, this.showIcon && (h("div", { key: 'd2ff7899e220def27e03e7e0ff84a4541c7ee65d', class: 'icon_container' }, h("wa-icon", { key: 'd3519738f3c44d25e0d537d56be17fe044b8b26e', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'd3a10cad16d28f422d0c4a6fbf01de4916f62455', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '7d643c73bba0c9d5ff84fbf3ee6aac3403015f45' })));
    }
};
IrEmptyState.style = IrEmptyStateStyle0;

const irFilterCardCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;min-width:20vw;height:100%;flex:1}.filters__header{display:flex;align-items:center;justify-content:space-between}.filters__title-group{display:flex;align-items:center;gap:0.5rem}.filters__icon{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body{display:flex;flex-direction:column;gap:0.75rem}.filters__card__collapsed::part(body){display:none}.filters__actions{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}::slotted([slot='footer']){margin-top:1rem;display:flex;align-items:center;gap:1rem}";
const IrFilterCardStyle0 = irFilterCardCss;

const IrFilterCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Viewport at/above which the filter body is always shown and the toggle is hidden. */
    static DESKTOP_QUERY = '(min-width: 1024px)';
    collapsed = true;
    isDesktop = false;
    mediaQuery;
    componentWillLoad() {
        this.mediaQuery = window.matchMedia(IrFilterCard.DESKTOP_QUERY);
        this.isDesktop = this.mediaQuery.matches;
        this.mediaQuery.addEventListener('change', this.handleViewportChange);
    }
    disconnectedCallback() {
        this.mediaQuery?.removeEventListener('change', this.handleViewportChange);
    }
    handleViewportChange = (e) => {
        this.isDesktop = e.matches;
    };
    render() {
        // On desktop the body is always expanded; the collapse state only applies below the breakpoint.
        const expanded = this.isDesktop || !this.collapsed;
        return (h("wa-card", { key: 'c583042eee4540b61b50ab24746c71a4d8eed89a', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '760de1659c3585fcac07af4a875fc2f306e76a13', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '7e8721b3ffd2371689d5c365137195469c27224f', class: "filters__title-group" }, h("wa-icon", { key: '41c99e2e3c388156e4bc31d5029e509f1e00926e', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'bd51016401f98fcf92951e12ca543f09fc3fb9e5', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '182ac40df2a364fa6cdf21533f760815e93778dc', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'ef554b5c9f9bc8c4758dfe26c02de270a61c77ae', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '013ea764d4d78e123ba4faab29b6cd090ab10669', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'f3d644ca3464e3841dba1901376b76cd0f381090' })), h("div", { key: '374838bd11bb768a81f9ce4f38e99bfc4a2eb2fb', part: "footer", class: 'filters__actions' }, h("slot", { key: '96cc84d7f379217b4a199487d4abf2de3353a501', name: "footer" }))));
    }
};
IrFilterCard.style = IrFilterCardStyle0;

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
        registerInstance(this, hostRef);
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
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, h("path", { fill: "currentColor", d: svgPath.d })));
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
                mask: MaskedRange,
                from: 0,
                to: 23,
                placeholderChar: 'H',
            },
            mm: {
                mask: MaskedRange,
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
        min: hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
        max: new Date(),
        format: date => hooks(date).format('DD/MM/YYYY'),
        parse: str => hooks(str, 'DD/MM/YYYY').toDate(),
        autofix: true,
        placeholderChar: '_',
        blocks: {
            YYYY: {
                mask: MaskedRange,
                from: 1900,
                to: hooks().format('YYYY'),
                placeholderChar: 'Y',
            },
            MM: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                placeholderChar: 'M',
            },
            DD: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                placeholderChar: 'D',
            },
        },
    },
};

const irInputCss = "wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}";
const IrInputStyle0 = irInputCss;

const IrInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "text-change", 7);
        this.inputBlur = createEvent(this, "input-blur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
        this.inputCleared = createEvent(this, "inputCleared", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return getElement(this); }
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
    inputCleared;
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
        this._mask = IMask(nativeInput, maskOpts);
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
        this.inputCleared.emit();
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
        return (h(Host, { key: 'a8ebfa3df7b0da737ee362dc90bc3cb3fa199e0c' }, h("wa-input", { key: '08ddde56c009fa9d00397d6ccc904f29a71ac207', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && h("slot", { key: 'fa0c718fc72c0f335e2bd6cfe95c9ea33798932d', name: "label", slot: "label" }), this.slotState.get('start') && h("slot", { key: '026586c02c91521dd82b18bead3b0afc50499b0b', name: "start", slot: "start" }), this.slotState.get('end') && h("slot", { key: '11efb18aff2e335ba76ef4e5c5a01579c5a2bf05', name: "end", slot: "end" }), this.slotState.get('clear-icon') && h("slot", { key: '5b9bfd53bcd2fc0bd9efe68311d286a5f21a4adb', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && h("slot", { key: '873227eb4a5f2c0b18a5f0b6d22f266157916e5d', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && h("slot", { key: '37e158f4143a5ea2ab185abb1d5cc28e8286f6bb', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && h("slot", { key: 'ec197a0be49acce6265a57cd4517b5ce0af08da6', name: "hint", slot: "hint" }))));
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

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:var(--ir-color-loader, rgba(255, 255, 255, 0.2));backdrop-filter:blur(5px);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
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
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
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
        interceptor_requests[extractedUrl] = 'pending';
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
        interceptor_requests[extractedUrl] = 'done';
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
                    const resp = await axios.request(retryConfig);
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
        return (h(Host, { key: 'fcdbaa4f4decc803410b6f34e6346c1e578e40df' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: '9344a3a882501ddd225fab2308dcb49bdb89933f', class: "loadingScreenContainer" }, h("div", { key: 'ade97d1182a8d4bb6592372ff219f36a22ab538c', class: "loaderContainer" }, h("wa-spinner", { key: '31b198173a7daa41ba5d551a08d8f7c38b17b984', style: { fontSize: '2.5rem' } })))), this.showModal && (h("ir-otp-modal", { key: 'a47c6e74e0925dd93eeeb6b923b8268c88bb4ab8', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLoadingScreenCss = ".loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-default, white);margin:0 !important;padding:0 !important;box-sizing:border-box}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--wa-color-surface-default, white);display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (h("div", { key: '0ab0b9e4a3fb1d76661fbf468dc7b49c49277441', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '4e2f43e06fd995b5750d445da4caf4c6afcdf8d1', style: { fontSize: '2.5rem' } })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irMealCountSummaryCss = ".sc-ir-meal-count-summary-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-meal-count-summary{overflow-x:auto}.table--container.sc-ir-meal-count-summary,.data-table.sc-ir-meal-count-summary{height:100%}.ir-table-row.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-meal-count-summary tbody.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:last-child>td.sc-ir-meal-count-summary{border-bottom:0 !important}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sc-ir-meal-count-summary{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sc-ir-meal-count-summary{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-meal-count-summary{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-meal-count-summary,.ir-table-row.sc-ir-meal-count-summary{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-meal-count-summary{text-transform:capitalize;cursor:pointer}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-meal-count-summary:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-meal-count-summary svg.sc-ir-meal-count-summary{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-meal-count-summary:active td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-meal-count-summary:active td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-meal-count-summary .empty-row.sc-ir-meal-count-summary{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-meal-count-summary{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-meal-count-summary{position:sticky !important;right:0;background-color:white}.sc-ir-meal-count-summary-h{--ir-cell-padding:0.3rem 0.45rem;display:flex;flex-direction:column;overflow:hidden;min-height:200px}.meal-count__table.sc-ir-meal-count-summary{width:100%;min-width:560px;table-layout:fixed;font-size:var(--wa-font-size-m)}.meal-count__col--date.sc-ir-meal-count-summary{width:140px}.meal-count__col--num.sc-ir-meal-count-summary{width:70px}.meal-count__col--flex.sc-ir-meal-count-summary{width:100%}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child{text-align:start !important}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:120px;justify-content:center}@media (min-width: 1024px){.meal-count__col--num.sc-ir-meal-count-summary{width:90px}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:180px}}@media (min-width: 1280px){.meal-count__col--num.sc-ir-meal-count-summary{width:120px}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:200px}}.cell--align-center.sc-ir-meal-count-summary{text-align:center !important}.cell--align-start.sc-ir-meal-count-summary{text-align:start !important}.meal-count__group-header.sc-ir-meal-count-summary{text-align:center !important;font-weight:var(--wa-font-weight-bold, 700);letter-spacing:0.02em;color:var(--wa-color-text-normal, #0f172a)}.meal-count__group-title.sc-ir-meal-count-summary{display:inline-flex;align-items:center;gap:0.4rem}.meal-count__sub-header.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-semibold, 600);text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet, #64748b)}.meal-count__subhead--ch.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet)}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ad.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ad.sc-ir-meal-count-summary{text-align:right !important;padding-inline:0.4rem 0.2rem !important;font-weight:600}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ch.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ch.sc-ir-meal-count-summary{text-align:left !important;padding-inline:0.2rem 0.4rem !important}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ad.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ad.sc-ir-meal-count-summary{border-inline-start:1px solid var(--wa-color-neutral-border-quiet, #eef1f5)}.meal-count__date.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-medium, 500);color:var(--wa-color-text-normal, #0f172a);white-space:nowrap}.meal-count__cell.sc-ir-meal-count-summary{font-variant-numeric:tabular-nums}.meal-count__cell--primary.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-count__cell--muted.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet, #64748b)}.meal-count__total-row.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{background:var(--wa-color-neutral-fill-quiet, #f1f5f9) !important;border-top:1px solid var(--wa-color-surface-border, #e2e8f0);border-bottom:0 !important;padding:var(--ir-cell-padding) !important;font-variant-numeric:tabular-nums}.meal-count__total-label.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);text-transform:uppercase;letter-spacing:0.03em;color:var(--wa-color-text-quiet, #64748b)}.meal-count__total-value.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-count__total-muted.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet, #64748b)}.meal-count__empty.sc-ir-meal-count-summary{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;min-height:200px}";
const IrMealCountSummaryStyle0 = irMealCountSummaryCss;

const IrMealCountSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    mealCountSummary = [];
    columnHelper = createColumnHelper();
    mealMeta = {
        breakfast: { label: 'Breakfast', icon: 'mug-saucer', color: 'var(--wa-color-brand-fill-loud)' },
        lunch: { label: 'Lunch', icon: 'utensils', color: 'var(--wa-color-success-fill-loud)' },
        dinner: { label: 'Dinner', icon: 'moon', color: 'var(--wa-color-warning-fill-loud)' },
    };
    renderMealHeader = (key) => {
        const m = this.mealMeta[key];
        return (h("span", { class: "meal-count__group-title" }, h("wa-icon", { name: m.icon, class: "meal-count__group-icon", style: { color: m.color } }), h("span", null, m.label)));
    };
    columns = [
        this.columnHelper.accessor('Date', {
            header: 'Date',
            cell: info => h("span", { class: "meal-count__date" }, hooks(info.getValue()).format('ddd, MMM DD')),
        }),
        this.columnHelper.group({
            id: 'breakfast',
            header: () => this.renderMealHeader('breakfast'),
            columns: [this.columnHelper.accessor('Breakfast_Ad', { header: 'Ad' }), this.columnHelper.accessor('Breakfast_Ch', { header: 'Ch' })],
        }),
        this.columnHelper.group({
            id: 'lunch',
            header: () => this.renderMealHeader('lunch'),
            columns: [this.columnHelper.accessor('Lunch_Ad', { header: 'Ad' }), this.columnHelper.accessor('Lunch_Ch', { header: 'Ch' })],
        }),
        this.columnHelper.group({
            id: 'dinner',
            header: () => this.renderMealHeader('dinner'),
            columns: [this.columnHelper.accessor('Dinner_Ad', { header: 'Ad' }), this.columnHelper.accessor('Dinner_Ch', { header: 'Ch' })],
        }),
    ];
    isAdultCol = (id) => id.endsWith('_Ad');
    isChildCol = (id) => id.endsWith('_Ch');
    render() {
        const list = this.mealCountSummary ?? [];
        if (list.length === 0) {
            return (h(Host, null, h("div", { class: "meal-count__empty" }, h("ir-empty-state", { message: "No summary data available for the current filters." }))));
        }
        const table = useTable({
            data: list,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        const headerGroups = table.getHeaderGroups();
        const depth = headerGroups.length;
        const totals = {
            Breakfast_Ad: list.reduce((s, d) => s + (d.Breakfast_Ad || 0), 0),
            Breakfast_Ch: list.reduce((s, d) => s + (d.Breakfast_Ch || 0), 0),
            Lunch_Ad: list.reduce((s, d) => s + (d.Lunch_Ad || 0), 0),
            Lunch_Ch: list.reduce((s, d) => s + (d.Lunch_Ch || 0), 0),
            Dinner_Ad: list.reduce((s, d) => s + (d.Dinner_Ad || 0), 0),
            Dinner_Ch: list.reduce((s, d) => s + (d.Dinner_Ch || 0), 0),
        };
        const dataCellClass = (id) => ({
            'meal-count__cell': true,
            'meal-count__cell--ad': this.isAdultCol(id),
            'meal-count__cell--ch': this.isChildCol(id),
            'meal-count__cell--primary': this.isAdultCol(id),
            'meal-count__cell--muted': this.isChildCol(id),
        });
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table meal-count__table mb-0" }, h("colgroup", null, h("col", { class: "meal-count__col--date" }), h("col", { class: "meal-count__col--num", span: 5 }), h("col", { class: "meal-count__col--flex" })), h("thead", null, headerGroups.map((headerGroup, groupIndex) => (h("tr", { key: headerGroup.id }, groupIndex === 0 && h("th", null), headerGroup.headers.map(header => {
            if (header.isPlaceholder)
                return null;
            const isLeaf = header.subHeaders.length === 0;
            const rowSpan = isLeaf ? depth - groupIndex : 1;
            const isGroupHeader = !isLeaf;
            const id = header.column.id;
            return (h("th", { key: header.id, colSpan: header.colSpan, rowSpan: rowSpan, class: {
                    'cell--align-start': id === 'Date',
                    'meal-count__group-header': isGroupHeader,
                    'meal-count__sub-header': isLeaf && id !== 'Date',
                    'meal-count__subhead--ad': this.isAdultCol(id),
                    'meal-count__subhead--ch': this.isChildCol(id),
                } }, flexRender(header.column.columnDef.header, header.getContext())));
        }))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: cell.column.id === 'Date' ? { 'cell--align-start': true, 'meal-count__cell': true } : dataCellClass(cell.column.id) }, flexRender(cell.column.columnDef.cell, cell.getContext())))))))), h("tfoot", null, h("tr", { class: "meal-count__total-row" }, h("td", { class: "cell--align-start meal-count__total-label" }, "Total"), h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Breakfast_Ad), h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Breakfast_Ch), h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Lunch_Ad), h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Lunch_Ch), h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Dinner_Ad), h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Dinner_Ch)))))));
    }
};
IrMealCountSummary.style = IrMealCountSummaryStyle0;

const irMealGuestListCss = ".sc-ir-meal-guest-list-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-meal-guest-list{overflow-x:auto}.table--container.sc-ir-meal-guest-list,.data-table.sc-ir-meal-guest-list{height:100%}.ir-table-row.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-meal-guest-list tbody.sc-ir-meal-guest-list tr.sc-ir-meal-guest-list:last-child>td.sc-ir-meal-guest-list{border-bottom:0 !important}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-meal-guest-list{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-meal-guest-list,.ir-table-row.sc-ir-meal-guest-list{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-meal-guest-list{text-transform:capitalize;cursor:pointer}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-meal-guest-list:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-meal-guest-list svg.sc-ir-meal-guest-list{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-meal-guest-list:active td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-meal-guest-list:active td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-meal-guest-list .empty-row.sc-ir-meal-guest-list{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-meal-guest-list{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-meal-guest-list{position:sticky !important;right:0;background-color:white}.sc-ir-meal-guest-list-h{display:flex;flex-direction:column;overflow:hidden;min-height:200px}.data-table.sc-ir-meal-guest-list{font-size:var(--wa-font-size-m)}.data-table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{padding-inline:0.5rem !important}.meal-guest-list__th.sc-ir-meal-guest-list{display:inline-flex;align-items:center;gap:0.35rem;font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:uppercase}.meal-guest-list__th--center.sc-ir-meal-guest-list{justify-content:center;width:100%}.meal-guest-list__sort.sc-ir-meal-guest-list{opacity:0.35;transition:opacity var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}.meal-guest-list__sort--active.sc-ir-meal-guest-list{opacity:1;color:var(--wa-color-brand-fill-loud)}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:hover .meal-guest-list__sort.sc-ir-meal-guest-list{opacity:0.7}.meal-guest-list__unit.sc-ir-meal-guest-list{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-text-normal, #0f172a)}.meal-guest-list__guest.sc-ir-meal-guest-list{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);color:var(--wa-color-text-normal, #0f172a)}.meal-guest-list__muted.sc-ir-meal-guest-list{color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__arr.sc-ir-meal-guest-list{--wa-tag-padding:0 0.3rem}.cell--align-center.sc-ir-meal-guest-list{text-align:center !important;padding-inline:0.45rem !important}.meal-guest-list__total-row.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{background:var(--wa-color-neutral-fill-quiet, #f1f5f9) !important;border-top:1px solid var(--wa-color-surface-border, #e2e8f0);border-bottom:0 !important;padding:var(--ir-cell-padding) !important}.meal-guest-list__total-label.sc-ir-meal-guest-list{text-align:end;font-weight:var(--wa-font-weight-bold, 700);text-transform:uppercase;letter-spacing:0.03em;color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__total-value.sc-ir-meal-guest-list{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-guest-list__total-meta.sc-ir-meal-guest-list{color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__empty.sc-ir-meal-guest-list{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;min-height:200px}@media (min-width: 1280px){.cell__rate-plan.sc-ir-meal-guest-list{width:35% !important}}";
const IrMealGuestListStyle0 = irMealGuestListCss;

const IrMealGuestList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    guestList = [];
    tableState = {};
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.accessor(row => row.unit.name, {
            id: 'unit',
            header: 'Unit',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__unit" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => `${row.guest.first_name} ${row.guest.last_name}`.trim(), {
            id: 'guest',
            header: 'Guest name',
            enableSorting: false,
            cell: info => (h("div", { class: "meal-guest-list__guest" }, h("span", null, info.getValue()), info.row.original.is_arriving_today && (h("wa-tag", { size: "small", variant: "brand", pill: true, class: "meal-guest-list__arr" }, "ARR")))),
        }),
        this.columnHelper.accessor(row => `${row.occupancy.adult_nbr} - ${row.occupancy.children_nbr}`, {
            id: 'occupancy',
            header: 'Ad Ch',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => row.source?.Label ?? '', {
            id: 'source',
            header: 'Source',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => row.rate_plan?.short_name ?? '', {
            id: 'ratePlan',
            header: 'Rate plan',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
    ];
    onTableStateChange = (updater) => {
        const next = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(next))
            return;
        this.tableState = next;
    };
    render() {
        const list = this.guestList ?? [];
        if (list.length === 0) {
            return (h(Host, null, h("div", { class: "meal-guest-list__empty" }, h("ir-empty-state", { message: "No guests found for the current filters." }))));
        }
        const table = useTable({
            data: list,
            columns: this.columns,
            state: this.tableState,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: getCoreRowModel(),
            // getSortedRowModel: getSortedRowModel(),
        });
        const totalAdults = list.reduce((sum, item) => sum + (item.occupancy?.adult_nbr || 0), 0);
        const totalChildren = list.reduce((sum, item) => sum + (item.occupancy?.children_nbr || 0), 0);
        const isCentered = (id) => id === 'occupancy';
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table  mb-0" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            return (h("th", { key: header.id, class: { 'sortable': canSort, 'cell__rate-plan': header.id === 'ratePlan', 'cell--align-center': isCentered(header.column.id) }, onClick: canSort ? header.column.getToggleSortingHandler() : undefined }, h("div", { class: { 'meal-guest-list__th': false, 'meal-guest-list__th--center': isCentered(header.column.id) } }, h("span", null, flexRender(header.column.columnDef.header, header.getContext())))));
        }))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: { 'cell--align-center': isCentered(cell.column.id) } }, flexRender(cell.column.columnDef.cell, cell.getContext())))))))), h("tfoot", null, h("tr", { class: "meal-guest-list__total-row" }, h("td", null), h("td", { class: "meal-guest-list__total-label" }, "Total"), h("td", { class: "meal-guest-list__total-value cell--align-center" }, totalAdults, " - ", totalChildren), h("td", { colSpan: 2, class: "meal-guest-list__total-meta" }, list.length, " Units \u00B7 ", totalAdults + totalChildren, " Guests")))))));
    }
};
IrMealGuestList.style = IrMealGuestListStyle0;

const ParamsGetMealReportSchema = objectType({
    property_id: numberType(),
    report_type: enumType(['GUEST_LIST', 'MEAL_COUNT']),
    from: stringType(),
    to: stringType(),
    meal_type_code: stringType().optional().nullable(),
    is_export_to_excel: booleanType().optional().default(false),
});
const ParamsSetHBPreferenceSchema = objectType({
    property_id: numberType(),
    room_identifier: stringType(),
    code: stringType(),
});

class MealReportService {
    async getMealReport(props) {
        const payload = ParamsGetMealReportSchema.parse(props);
        const { data } = await axios.post(`/Get_Meal_Report`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setHBPreference(props) {
        const payload = ParamsSetHBPreferenceSchema.parse(props);
        const { data } = await axios.post(`/Set_HB_Preference`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irMealReportCss = ".sc-ir-meal-report-h{display:block}.ir-meal-report__export-btn.sc-ir-meal-report{height:100%}.ir-meal-report__metrics.sc-ir-meal-report{display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:var(--wa-space-m);margin-bottom:var(--wa-space-m)}.ir-meal-report__layout.sc-ir-meal-report{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-xs)}.ir-meal-report__results.sc-ir-meal-report{min-width:0}@media (min-width: 1024px){.ir-meal-report__layout.sc-ir-meal-report{flex-direction:row;align-items:flex-start}.ir-meal-report__layout.sc-ir-meal-report>ir-meal-report-filters.sc-ir-meal-report{flex:0 0 320px;min-width:0}.ir-meal-report__layout.sc-ir-meal-report>.ir-meal-report__results.sc-ir-meal-report{flex:1 1 auto}}";
const IrMealReportStyle0 = irMealReportCss;

const IrMealReport = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    baseurl;
    language = 'en';
    isPageLoading = true;
    isExporting = false;
    isDataLoading = false;
    localReportType = 'GUEST_LIST';
    localFrom = hooks().format('YYYY-MM-DD');
    localTo = hooks().format('YYYY-MM-DD');
    localMealType = null;
    guestList = [];
    mealCountSummary = [];
    setupEntries = {
        meal_type: [],
        hb_preference: [],
    };
    mealReportService = new MealReportService();
    tokenService = new Token();
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async handlePropertyChange() {
        await this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            this.isDataLoading = true;
            const setupEntries = await this.mealReportService.getSetupEntriesByTableNameMulti(['_MEAL_TYPE', '_HB_PREFERENCE']);
            const grouped = groupEntryTablesResult(setupEntries);
            const meal_type = grouped.meal_type || [];
            const hb_preference = grouped.hb_preference || [];
            this.setupEntries = {
                meal_type,
                hb_preference,
            };
            if (meal_type.length > 0) {
                if (!this.localMealType) {
                    this.localMealType = meal_type[0].CODE_NAME;
                }
            }
            await this.applyFilters();
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isPageLoading = false;
            this.isDataLoading = false;
        }
    }
    async applyFilters() {
        try {
            this.isDataLoading = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: false,
            });
            this.guestList = response.My_Result.Guest_List || [];
            this.mealCountSummary = response.My_Result.Meal_Count_Summary || [];
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isDataLoading = false;
        }
    }
    resetFilters() {
        this.localReportType = 'GUEST_LIST';
        this.localFrom = hooks().format('YYYY-MM-DD');
        this.localTo = hooks().format('YYYY-MM-DD');
        if (this.setupEntries.meal_type.length > 0) {
            this.localMealType = this.setupEntries.meal_type[0].CODE_NAME;
        }
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? hooks() : hooks().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = hooks().add(14, 'days').format('YYYY-MM-DD');
        }
        else {
            this.localTo = this.localFrom;
        }
    }
    async handleExport() {
        try {
            this.isExporting = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: true,
            });
            const link = response.My_Params_Get_Meal_Report?.Link_excel;
            if (link) {
                // Use clean axios to bypass interceptors (avoiding network errors)
                const cleanAxios = axios.create();
                const responseBlob = await cleanAxios.get(link, { responseType: 'blob' });
                // Force download via local blob URL
                const blob = new Blob([responseBlob.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const filename = link.split('/').pop() || 'meal_report.xlsx';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Cleanup
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }
        }
        catch (error) {
            // Export Error handled silently or via UI
        }
        finally {
            this.isExporting = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        const lcz = locales.entries || {};
        const summary = this.mealCountSummary || [];
        const sum = (key) => summary.reduce((acc, day) => acc + (Number(day[key]) || 0), 0);
        const mealMetrics = [
            { label: 'Breakfast', icon: 'mug-saucer', intent: 'brand', adults: sum('Breakfast_Ad'), children: sum('Breakfast_Ch') },
            { label: 'Lunch', icon: 'utensils', intent: 'success', adults: sum('Lunch_Ad'), children: sum('Lunch_Ch') },
            { label: 'Dinner', icon: 'moon', intent: 'warning', adults: sum('Dinner_Ad'), children: sum('Dinner_Ch') },
        ];
        return (h("ir-page", { label: "Meal Report", class: 'page' }, h("ir-custom-button", { slot: "page-header", type: "button", size: "small", appearance: "outlined", loading: this.isExporting, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleExport();
            }, class: "ir-meal-report__export-btn" }, h("wa-icon", { name: "download", slot: "start", style: { fontSize: '14px' } }), lcz.Lcz_Export || 'Export'), this.localReportType === 'MEAL_COUNT' && (h("div", { class: "ir-meal-report__metrics" }, mealMetrics.map(metric => (h("ir-metric-card", { key: metric.label, label: metric.label, icon: metric.icon, intent: metric.intent, value: metric.adults + metric.children, unit: "guests", caption: `Adults ${metric.adults} · Children ${metric.children}`, loading: this.isDataLoading }))))), h("div", { class: "ir-meal-report__layout" }, h("ir-meal-report-filters", { reportType: this.localReportType, fromDate: this.localFrom, toDate: this.localTo, mealType: this.localMealType, setupEntries: this.setupEntries, isLoading: this.isDataLoading, lcz: lcz, onReportTypeChange: e => {
                this.localReportType = e.detail;
                this.applyFilters();
                if (e.detail === 'GUEST_LIST') {
                    this.localTo = this.localFrom;
                }
            }, onDateChange: e => {
                this.localFrom = e.detail.from;
                this.localTo = e.detail.to;
            }, onMealTypeChange: async (e) => {
                this.localMealType = e.detail;
            }, onFilterApply: () => this.applyFilters(), onFilterReset: () => this.resetFilters(), onPresetDate: e => this.setPresetDate(e.detail) }), h("wa-card", { class: "ir-meal-report__results" }, h("div", null, this.localReportType === 'GUEST_LIST' ? (h("ir-meal-guest-list", { guestList: this.guestList })) : (h("ir-meal-count-summary", { mealCountSummary: this.mealCountSummary })))))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"],
        "propertyid": ["handlePropertyChange"]
    }; }
};
IrMealReport.style = IrMealReportStyle0;

const irMealReportFiltersCss = ".sc-ir-meal-report-filters-h{display:block}.ir-meal-report-filters__warning.sc-ir-meal-report-filters{padding:var(--wa-space-xs);border:1px solid var(--wa-color-warning-200);border-radius:var(--wa-border-radius-m);background:var(--wa-color-warning-50);color:var(--wa-color-warning-700);font-size:var(--wa-font-size-x-small)}";
const IrMealReportFiltersStyle0 = irMealReportFiltersCss;

const IrMealReportFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.reportTypeChange = createEvent(this, "reportTypeChange", 7);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.mealTypeChange = createEvent(this, "mealTypeChange", 7);
        this.filterApply = createEvent(this, "filterApply", 7);
        this.filterReset = createEvent(this, "filterReset", 7);
        this.presetDate = createEvent(this, "presetDate", 7);
    }
    reportType = 'GUEST_LIST';
    fromDate;
    toDate;
    mealType = null;
    setupEntries;
    isLoading = false;
    lcz = {};
    reportTypeChange;
    dateChange;
    mealTypeChange;
    filterApply;
    filterReset;
    presetDate;
    render() {
        const mealTypes = this.setupEntries?.meal_type || [];
        const todayDate = hooks().format('YYYY-MM-DD');
        const tomorrowDate = hooks().add(1, 'day').format('YYYY-MM-DD');
        // Reflect which preset (Today/Tomorrow) is currently active based on the selected fromDate.
        const selectedPreset = this.fromDate === todayDate ? 'today' : this.fromDate === tomorrowDate ? 'tomorrow' : '';
        return (h("ir-filter-card", { key: 'f29dc7c305630ec44caf7a4557917d155923f0d0' }, h("wa-radio-group", { key: 'fc3b1a069e24c5eed92cf8a043ae3afd78144bc3', label: "Report type", size: "small", orientation: "horizontal", value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '5726e20dd2b13a69b403aa2aee08512cdc6d604d', style: { flex: '1' }, appearance: "button", value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: 'f417d9f56a206f284bb08c899fa0bc248b2cdcb7', style: { flex: '1' }, appearance: "button", value: "MEAL_COUNT" }, "Meal count")), this.reportType === 'GUEST_LIST' ? (h("wa-radio-group", { label: "Stay date", size: "small", orientation: "horizontal", value: selectedPreset, onchange: e => {
                this.presetDate.emit(e.target.value);
            } }, h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "today" }, "Today"), h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "tomorrow" }, "Tomorrow"))) : (h("div", null, h("ir-date-range-filter", { label: "Stay date", fromDate: this.fromDate, showQuickActions: false, toDate: this.toDate, minDate: hooks().format('YYYY-MM-DD'), maxDate: hooks().add(14, 'days').format('YYYY-MM-DD'), onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dateChange.emit({
                    from,
                    to,
                });
            }, withClear: false, selectionMode: "auto" }))), this.reportType === 'GUEST_LIST' &&
            (mealTypes.length > 0 ? (h("wa-radio-group", { defaultValue: this.mealType, label: "Meal type", size: "small", orientation: "horizontal", value: this.mealType, style: { width: '100%' }, onchange: e => {
                    this.mealTypeChange.emit(e.target.value);
                } }, mealTypes.map(type => (h("wa-radio", { style: { flex: '1' }, appearance: "button", value: type.CODE_NAME }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found."))), h("div", { key: 'f8b581f162673ac5690a0abf13bfe7a642a891c9', slot: "footer" }, h("ir-custom-button", { key: '68e308cd987bd9d696ca295d492cf15800133d40', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            } }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: 'a0d6a001959b8ee79c026221edbdfe43350b691d', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply'))));
    }
};
IrMealReportFilters.style = IrMealReportFiltersStyle0;

const irMetricCardCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{--ir-metric-card-padding:var(--wa-space-m);--ir-metric-card-gap:var(--wa-space-2xs, 0.25rem);--ir-metric-card-radius:var(--wa-border-radius-l, 0.75rem);--ir-metric-card-bg:var(--wa-color-surface-default, #ffffff);--ir-metric-card-border:var(--wa-color-surface-border, #e2e8f0);--ir-metric-card-value-size:var(--wa-font-size-2xl, 1.5rem);--ir-metric-card-accent:var(--wa-color-neutral-fill-loud, #64748b);--ir-metric-card-accent-quiet:var(--wa-color-neutral-fill-quiet, #f1f5f9);--ir-metric-card-accent-on-quiet:var(--wa-color-neutral-on-quiet, #475569);display:block}:host([intent='brand']){--ir-metric-card-accent:var(--wa-color-brand-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-brand-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-brand-on-quiet)}:host([intent='success']){--ir-metric-card-accent:var(--wa-color-success-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-success-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-success-on-quiet)}:host([intent='warning']){--ir-metric-card-accent:var(--wa-color-warning-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-warning-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-warning-on-quiet)}:host([intent='danger']){--ir-metric-card-accent:var(--wa-color-danger-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-danger-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-danger-on-quiet)}:host([size='medium']){--ir-metric-card-padding:var(--wa-space-l);--ir-metric-card-value-size:var(--wa-font-size-3xl, 1.875rem)}.metric{position:relative;display:flex;flex-direction:column;gap:var(--ir-metric-card-gap);height:100%;padding:var(--ir-metric-card-padding);background-color:var(--ir-metric-card-bg);border:1px solid var(--ir-metric-card-border);border-radius:var(--ir-metric-card-radius);overflow:hidden}.metric::before{content:'';position:absolute;inset-block:0;inset-inline-start:0;width:3px;background-color:var(--ir-metric-card-accent);opacity:0.9}.metric__header{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);min-width:0}.metric__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:1.75rem;height:1.75rem;border-radius:var(--wa-border-radius-m, 0.5rem);color:var(--ir-metric-card-accent);background-color:var(--ir-metric-card-accent-quiet);font-size:var(--wa-font-size-s, 0.875rem)}.metric__icon:empty{display:none}.metric__label{min-width:0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:uppercase;color:var(--wa-color-text-quiet, #64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.metric__main{display:flex;flex-direction:column;gap:0.125rem}.metric__value{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--wa-space-xs, 0.5rem);line-height:var(--wa-line-height-condensed, 1.2)}.metric__value-number{font-family:var(--wa-font-family-heading, inherit);font-size:var(--ir-metric-card-value-size);font-weight:var(--wa-font-weight-bold, 700);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #0f172a)}.metric__unit{font-size:var(--wa-font-size-s, 0.875rem);font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-text-quiet, #64748b)}.metric__caption{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b)}.metric__trend{display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:auto;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);font-variant-numeric:tabular-nums;line-height:1.4;border-radius:var(--wa-border-radius-pill, 9999px);white-space:nowrap}.metric__trend--positive{color:var(--wa-color-success-on-quiet, #166534);background-color:var(--wa-color-success-fill-quiet, #dcfce7)}.metric__trend--negative{color:var(--wa-color-danger-on-quiet, #991b1b);background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.metric__trend--flat{color:var(--wa-color-neutral-on-quiet, #475569);background-color:var(--wa-color-neutral-fill-quiet, #f1f5f9)}.metric__trend-label{font-weight:var(--wa-font-weight-normal, 400);opacity:0.85}.metric__body,.metric__footer{display:contents}.metric__skeleton{display:flex;flex-direction:column;gap:0.4rem}.metric__skeleton-bar{display:block;height:0.75rem;border-radius:var(--wa-border-radius-s, 0.25rem);background:linear-gradient(\n    90deg,\n    var(--wa-color-neutral-fill-quiet, #f1f5f9) 25%,\n    var(--wa-color-neutral-fill-normal, #e2e8f0) 37%,\n    var(--wa-color-neutral-fill-quiet, #f1f5f9) 63%\n  );background-size:400% 100%;animation:ir-metric-shimmer 1.4s ease infinite}.metric__skeleton-bar--value{width:60%;height:1.5rem}.metric__skeleton-bar--caption{width:40%}@keyframes ir-metric-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}:host([clickable]){cursor:pointer}:host([clickable]) .metric{transition:transform var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),\n    box-shadow var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),\n    border-color var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}:host([clickable]:hover) .metric{transform:translateY(-2px);box-shadow:var(--wa-shadow-m, 0 4px 12px rgb(0 0 0 / 0.08));border-color:var(--ir-metric-card-accent)}:host([clickable]:focus){outline:none}:host([clickable]:focus-visible) .metric{outline:var(--wa-focus-ring, 2px solid var(--ir-metric-card-accent));outline-offset:var(--wa-focus-ring-offset, 2px)}@media (prefers-reduced-motion: reduce){:host([clickable]) .metric,.metric__skeleton-bar{transition:none;animation:none}:host([clickable]:hover) .metric{transform:none}}";
const IrMetricCardStyle0 = irMetricCardCss;

const IrMetricCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.metricClick = createEvent(this, "metricClick", 7);
    }
    /** Metric label / title. */
    label;
    /** Primary metric value. Rendered with tabular figures. */
    value;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon;
    /** Accent color used for the icon chip, trend, and accent edge. */
    intent = 'neutral';
    /** Trend delta as a percentage. The sign selects the up/down arrow and color. */
    trend;
    /** Context text shown beside the trend (e.g. `vs last week`). */
    trendLabel;
    /** Flip trend color semantics so a decrease reads as positive (good). */
    invertTrend = false;
    /** Secondary descriptive line shown beneath the value. */
    caption;
    /** Render skeleton placeholders instead of content. */
    loading = false;
    /** Visual density. `small` is compact (default); `medium` enlarges the value and padding. */
    size = 'small';
    /** Make the whole card interactive: adds hover/focus affordance and emits `metricClick`. */
    clickable = false;
    /** Emitted when a clickable card is activated by click or keyboard (Enter / Space). */
    metricClick;
    handleActivate = () => {
        if (this.clickable && !this.loading) {
            this.metricClick.emit();
        }
    };
    handleKeyDown = (event) => {
        if (!this.clickable) {
            return;
        }
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            event.preventDefault();
            this.handleActivate();
        }
    };
    get trendDirection() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend) || this.trend === 0) {
            return 'flat';
        }
        return this.trend > 0 ? 'up' : 'down';
    }
    get trendIsPositive() {
        const rising = this.trendDirection === 'up';
        return this.invertTrend ? !rising : rising;
    }
    renderTrend() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend)) {
            return null;
        }
        const direction = this.trendDirection;
        const tone = direction === 'flat' ? 'flat' : this.trendIsPositive ? 'positive' : 'negative';
        const iconName = direction === 'up' ? 'arrow-trend-up' : direction === 'down' ? 'arrow-trend-down' : 'minus';
        const magnitude = Math.abs(this.trend);
        const ariaLabel = `${direction === 'flat' ? 'no change' : direction} ${magnitude} percent`;
        return (h("span", { part: "trend", class: `metric__trend metric__trend--${tone}`, "aria-label": ariaLabel }, h("wa-icon", { name: iconName, "aria-hidden": "true" }), h("span", null, magnitude, "%"), this.trendLabel && h("span", { class: "metric__trend-label" }, this.trendLabel)));
    }
    renderIcon() {
        return (h("span", { part: "icon", class: "metric__icon" }, h("slot", { name: "icon" }, this.icon && h("wa-icon", { name: this.icon, "aria-hidden": "true" }))));
    }
    render() {
        const hasIcon = !!this.icon;
        const interactive = this.clickable && !this.loading;
        const ariaLabel = [this.label, this.value, this.unit].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: '5e74e3b61c5a7697fedb126a8ac70538b5bac243', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, h("div", { key: 'ed23a3795730b2cdd8b0919f43e4983bb5c9eca0', part: "base", class: "metric" }, (hasIcon || this.label) && (h("div", { key: '4a89b4c3922de9e3c67004efccd781a6bd117f08', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), h("span", { key: 'e3e13c48a1837e409684887ce6134f427abf3e3a', part: "label", class: "metric__label" }, h("slot", { key: 'f844dbf8561129b5e542de4eda0353cbacf48724', name: "label" }, this.label)))), this.loading ? (h("div", { class: "metric__skeleton" }, h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (h("div", { class: "metric__main" }, h("div", { part: "value", class: "metric__value" }, h("slot", { name: "value" }, this.value !== undefined && this.value !== null && h("span", { class: "metric__value-number" }, this.value), this.unit && (h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (h("p", { part: "caption", class: "metric__caption" }, this.caption)))), h("div", { key: '62ed586d5732edb9d916b6dd13c7b40859d116db', part: "body", class: "metric__body" }, h("slot", { key: '101414ca71cb61f5a347a4911e9f77246745d58f' })), h("div", { key: 'f9c46bf8d7944fb969e606ab1e728efc0af0e7d9', part: "footer", class: "metric__footer" }, h("slot", { key: 'c0cbea5158ecd55476332f110e978aabc11f0eb4', name: "footer" })))));
    }
};
IrMetricCard.style = IrMetricCardStyle0;

const irOtpCss = ".otp-input-wrapper.sc-ir-otp{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit.sc-ir-otp{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0;font-size:24px;font-weight:500;text-align:center;background-color:#fff;padding:0 !important}.otp-digit.sc-ir-otp:disabled{background-color:#e9ecef;cursor:not-allowed}input[type='number'].sc-ir-otp::-webkit-inner-spin-button,input[type='number'].sc-ir-otp::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number'].sc-ir-otp{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit.sc-ir-otp{width:35px;height:45px;font-size:20px}.otp-input-wrapper.sc-ir-otp{gap:6px}}@media (max-width: 360px){.otp-digit.sc-ir-otp{width:30px;height:40px;font-size:18px}.otp-input-wrapper.sc-ir-otp{gap:4px}}";
const IrOtpStyle0 = irOtpCss;

const IrOtp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.otpComplete = createEvent(this, "otpComplete", 7);
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
        return (h(Host, { key: 'f7fa9f278f09fd2112dab72cf1717acc5e0c8929', class: "otp-input-container" }, h("div", { key: '83cbc11ac807515ab38885f36848270928713a24', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index) => (h("input", { ref: el => (this.inputRefs[index] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit form-control input-sm", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index], onInput: e => this.handleInput(e, index), onKeyDown: e => this.handleKeyDown(e, index), onPaste: e => this.handlePaste(e, index), onFocus: this.handleFocus, "aria-label": `Digit ${index + 1} of ${this.length}` }))))));
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
        registerInstance(this, hostRef);
        this.otpFinished = createEvent(this, "otpFinished", 7);
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
    systemService = new SystemService();
    roomService = new RoomService();
    tokenService = new Token();
    otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
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
        return (h(Host, { key: 'f5da7bf9b56fbf577e59a701c66d4e635686a079' }, h("dialog", { key: '73ac118c0410323dec97ccd488b51c116d511867', ref: el => (this.dialogRef = el), class: "otp-modal", "aria-modal": "true" }, h("form", { key: '1d3396215fa42215520bcf8cf5d19467cdca0ddb', method: "dialog", class: "otp-modal-content" }, this.isInitializing || !locales.entries ? (h("div", { class: 'd-flex align-items-center justify-content-center modal-loading-container' }, h("ir-spinner", null))) : (h(Fragment, null, h("header", { class: "otp-modal-header" }, h("h5", { class: "otp-modal-title" }, locales.entries.Lcz_VerifyYourIdentity)), h("section", { class: "otp-modal-body d-flex align-items-center flex-column" }, h("p", { class: "verification-message text-truncate" }, locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, null, this.timer > 0 ? (h("p", { class: "small mt-1" }, locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: 'Didn’t receive code? Resend' }))))), h("footer", { class: "otp-modal-footer justify-content-auto" }, h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_Cancel, btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_VerifyNow, isLoading: this.isLoading, btn_disabled: this.otp?.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrOtpModal.style = IrOtpModalStyle0;

const irPageCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}";
const IrPageStyle0 = irPageCss;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '22df40847b12a7a5742a40ca1ddd1c4c0cd1cfd6' }, h("ir-interceptor", { key: '34649d072de53d18a638a06e2b0ad8164f70b249' }), h("ir-toast", { key: '303d022f778223c1ba66e8244f95d6d8d88ba5fe' }), h("main", { key: '6e76fe65f279452c0f2b375172b7ccdf50f4464a', class: "ir-page__container" }, h("header", { key: '7e2d9e59fbd4ade9df4910dc6ddcaea518d0b8c7', class: "tax-page__header" }, h("slot", { key: 'b837d4bd05fe9ccde71b2c606ddbb0fe4055ad7b', name: "heading" }, h("div", { key: '34c84c1ae615af3cd43bb2bf156d2fadf2fead31', class: "tax-page__heading" }, h("h3", { key: '1ffef38aded4b1f0967c5b5559e8c90fe847d894', class: "page-title" }, this.label), this.description && (h("p", { key: '57bf0e2a9e4e9b8f79e0e9aa4d78d223da0a3d66', class: "page__description" }, this.description, h("slot", { key: '545aaeefb0219d0753c2d9bd4e17ce92ddfff783', name: "page-description" }))))), h("slot", { key: '0ed60e4797fcebe70f88152a104334e4c75cd9f3', name: "page-header" })), h("div", { key: '6cd5b1570dcfa80ae0bc8b47ce688e406388b224', part: "body", class: 'page-body' }, h("slot", { key: '97bc6441c9e93941abf33763344a9472f8db2427' })))));
    }
};
IrPage.style = IrPageStyle0;

const irSpinnerCss = "";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '5147aaea61a39745a8b520195c0923dac43552bb' }, h("wa-spinner", { key: '75b04682dbc4d19ae111cd490c5043fd3bb19929', style: { fontSize: '2rem' } })));
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
        registerInstance(this, hostRef);
    }
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'top-right';
    get providerPosition() {
        const map = {
            'top-left': 'top-start',
            'top-right': 'top-end',
            'bottom-left': 'bottom-start',
            'bottom-right': 'bottom-end',
        };
        return map[this.position] ?? 'top-end';
    }
    render() {
        // ir-toast-provider renders the ir-toast-item stack and listens for
        // `toast` events on the body, so this component is a thin shell kept
        // for backwards compatibility with the many pages that embed it.
        return h("ir-toast-provider", { key: 'dcc3e1446f7b852c0b0e04de468a7574f17dcba5', position: this.providerPosition });
    }
};
IrToast.style = IrToastStyle0;

const irToastItemCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden;animation:toast-enter 320ms cubic-bezier(0.16, 1, 0.3, 1) both}:host([data-placement^='bottom']) .toast-item{animation-name:toast-enter-up}:host([data-leaving]) .toast-item{animation:toast-exit 200ms cubic-bezier(0.4, 0, 1, 1) both;pointer-events:none}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}::slotted([data-toast-title]){display:block;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}::slotted([data-toast-description]){display:block;margin-top:2px;color:var(--wa-color-text-quiet)}::slotted([data-toast-action]){display:inline-flex;margin-top:var(--wa-space-s);padding:0.25rem 0.625rem;border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-s);background:transparent;color:var(--accent-color);font:inherit;font-size:var(--wa-font-size-s);font-weight:600;cursor:pointer;transition:background-color var(--wa-transition-fast)}::slotted([data-toast-action]:hover){background:var(--wa-color-neutral-fill-quiet)}::slotted([data-toast-action]:focus-visible){outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px}.close-button wa-progress-ring{--size:30px;--track-width:2px;--indicator-width:2px;--track-color:var(--wa-color-surface-border);--indicator-color:var(--accent-color);font-size:var(--wa-font-size-xs)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}.close-button:hover{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-text-normal)}.close-button:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:-2px}@keyframes toast-enter{from{opacity:0;transform:translateY(-12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-enter-up{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-exit{to{opacity:0;transform:scale(0.95)}}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion: reduce){.toast-item,:host([data-placement^='bottom']) .toast-item{animation:toast-fade-in 120ms linear both}:host([data-leaving]) .toast-item{animation:none}}";
const IrToastItemStyle0 = irToastItemCss;

const IrToastItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irDismiss = createEvent(this, "irDismiss", 7);
    }
    get el() { return getElement(this); }
    variant = 'neutral';
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration = 5000;
    /** Whether the close button is rendered. */
    dismissible = true;
    progress = 100;
    leaving = false;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss;
    timer;
    timerStarted = false;
    hiding = false;
    hovered = false;
    focused = false;
    componentDidLoad() {
        if (!this.timerStarted) {
            this.startTimer();
        }
    }
    connectedCallback() {
        // Re-parenting (e.g. the provider moving the toast layer into a modal
        // dialog) disconnects and reconnects the element; resume the countdown.
        if (this.timerStarted && !this.hovered && !this.focused) {
            this.resumeTimer();
        }
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    async startTimer() {
        this.timerStarted = true;
        if (this.hovered || this.focused) {
            return;
        }
        this.resumeTimer();
    }
    /** Plays the exit animation, then emits `irDismiss`. */
    async hide() {
        if (this.hiding) {
            return;
        }
        this.hiding = true;
        this.clearTimer();
        if (!this.prefersReducedMotion()) {
            this.leaving = true;
            await new Promise(resolve => {
                const done = () => {
                    clearTimeout(fallback);
                    resolve();
                };
                // Safety timeout in case animationend never fires (display:none ancestors, etc.)
                const fallback = window.setTimeout(done, 300);
                this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', done, { once: true });
            });
        }
        this.irDismiss.emit();
    }
    get hasTimer() {
        return Number.isFinite(this.duration) && this.duration > 0;
    }
    prefersReducedMotion() {
        return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    }
    resumeTimer() {
        if (!this.hasTimer || this.hiding || this.timer) {
            return;
        }
        const step = (16 / this.duration) * 100;
        this.timer = window.setInterval(() => {
            this.progress = Math.max(0, this.progress - step);
            if (this.progress <= 0) {
                this.hide();
            }
        }, 16);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    updateInteraction() {
        if (this.hovered || this.focused) {
            // Reset the countdown while the user is interacting; it restarts from
            // the full duration once they move away.
            this.clearTimer();
            this.progress = 100;
        }
        else if (this.timerStarted) {
            this.resumeTimer();
        }
    }
    handleMouseEnter = () => {
        this.hovered = true;
        this.updateInteraction();
    };
    handleMouseLeave = () => {
        this.hovered = false;
        this.updateInteraction();
    };
    handleFocusIn = () => {
        this.focused = true;
        this.updateInteraction();
    };
    handleFocusOut = () => {
        this.focused = false;
        this.updateInteraction();
    };
    handleClose = () => {
        this.hide();
    };
    render() {
        return (h(Host, { key: '2f3a96d2000d90424a2cc0f817b1257f93c77c73', "data-leaving": this.leaving ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'd8ed5e7f25eb01c1a47cf81dbfd107cb0255242b', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, h("div", { key: '38450e86f4df2d34179b43e69171bb45c7686e19', part: "accent", class: "accent" }), h("div", { key: '358d23f93d9bebdc045501b766c21008405b9e1a', part: "icon", class: "icon" }, h("slot", { key: 'e631ade91528ba87a5fcf5f8b9b2ac6941d97a64', name: "icon" })), h("div", { key: '7c39972dfc36fc8dcc4b0b0b671aa1fcff2ae081', part: "content", class: "content" }, h("slot", { key: '1fafdbdb37c264b3a47d05d9e702f4cc950c292f' })), this.dismissible && (h("button", { key: 'b90ed98abff50374dfde6a229efaac9e970747cf', part: "close-button", class: "close-button", type: "button", "aria-label": "Close notification", onClick: this.handleClose }, this.hasTimer ? (h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
    }
};
IrToastItem.style = IrToastItemStyle0;

const irToastProviderCss = ":host{display:contents}";
const IrToastProviderStyle0 = irToastProviderCss;

// In current Chrome, anything outside a modal dialog (`showModal()`) is inert —
// including popovers shown *after* the dialog, even though they paint above it.
// The only place a toast stays clickable while an ir-drawer/wa-dialog is open is
// *inside* the topmost modal dialog's subtree. The provider therefore keeps all
// toasts in a single fixed "layer" element that lives in document.body as a
// popover="manual" (top layer) when no modal is open, and re-parents into the
// topmost modal dialog whenever one opens.
const EDGE_PADDING = 16; // px from screen edges
const ITEM_GAP = 8; // px between toasts
// Pages and feature roots alike embed ir-toast (which renders a provider), so
// several providers can be connected at once — each listening for `toast`
// events on the body. Only the most recently connected provider handles them,
// so one event never produces duplicate toasts.
const connectedProviders = [];
/** `matches()` that tolerates engines without the pseudo-class (e.g. Stencil mock-doc). */
function safeMatches(el, selector) {
    try {
        return el.matches(selector);
    }
    catch (e) {
        return false;
    }
}
/** Finds the native <dialog> rendered by a component (e.g. ir-drawer → wa-drawer → dialog). */
function findDialogIn(el) {
    if (!el) {
        return null;
    }
    if (el instanceof HTMLDialogElement) {
        return el;
    }
    const root = el.shadowRoot;
    if (!root) {
        return null;
    }
    const direct = root.querySelector('dialog');
    if (direct) {
        return direct;
    }
    for (const child of Array.from(root.querySelectorAll('*'))) {
        const nested = findDialogIn(child);
        if (nested) {
            return nested;
        }
    }
    return null;
}
const IrToastProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toastAction = createEvent(this, "toastAction", 7);
    }
    position = 'top-end';
    rtl = false;
    duration = 5000;
    /** Emitted when a toast's action button is clicked. */
    toastAction;
    items = [];
    layer = null;
    liveRegion = null;
    modalStack = [];
    positionCache = new Map();
    connectedCallback() {
        connectedProviders.push(this);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        const index = connectedProviders.indexOf(this);
        if (index > -1) {
            connectedProviders.splice(index, 1);
        }
        document.removeEventListener('keydown', this.handleKeyDown);
        this.layer?.remove();
        this.layer = null;
        this.liveRegion = null;
        this.items = [];
        this.modalStack = [];
    }
    handleToast(event) {
        if (connectedProviders[connectedProviders.length - 1] !== this) {
            return;
        }
        const detail = event?.detail || {};
        // Legacy IToast emitters (ir-interceptor, booking details, …) often send an
        // empty description and put the message in `title`, or vice versa.
        const title = detail.title || detail.description || 'Notification';
        const payload = {
            ...detail,
            title,
            description: detail.title ? detail.description || undefined : undefined,
            type: this.normalizeType(detail.type),
        };
        this.addToast(payload);
    }
    // A modal dialog opening makes everything outside it inert; track it and move
    // the toast layer inside so toasts stay visible and clickable above it.
    handleOverlayShow(event) {
        const dialog = findDialogIn(event.target);
        if (!dialog) {
            return;
        }
        this.modalStack = this.modalStack.filter(d => d !== dialog);
        this.modalStack.push(dialog);
        // Defer so the dialog is actually modal (showModal may run after the event).
        requestAnimationFrame(() => this.relocateLayer());
    }
    handleOverlayHide() {
        if (!this.layer) {
            return;
        }
        requestAnimationFrame(() => this.relocateLayer());
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const type = toast.type ?? 'info';
        const item = document.createElement('ir-toast-item');
        item.variant = this.mapVariant(type);
        item.duration = toast.duration ?? this.duration;
        item.dismissible = toast.dismissible ?? true;
        item.setAttribute('data-placement', this.position);
        Object.assign(item.style, {
            pointerEvents: 'auto',
            minWidth: '20rem',
            maxWidth: `min(28rem, calc(100vw - ${EDGE_PADDING * 2}px))`,
        });
        item.append(this.buildIcon(type), ...this.buildContent(id, toast));
        item.addEventListener('irDismiss', () => this.destroyItem(item));
        const layer = this.ensureLayer();
        this.relocateLayer();
        this.capturePositions();
        layer.prepend(item);
        this.items.unshift({ id, el: item });
        this.showLayerIfNeeded();
        requestAnimationFrame(() => this.animatePositions());
        this.announce(`${type}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`, type === 'error' || type === 'danger');
        return id;
    }
    async removeToast(id) {
        const entry = this.items.find(item => item.id === id);
        if (!entry) {
            return;
        }
        await entry.el.hide();
    }
    async clearAllToasts() {
        await Promise.all(this.items.map(({ el }) => el.hide()));
    }
    handleKeyDown = async (event) => {
        // Let modal drawers/dialogs consume Escape first (they mark it defaultPrevented).
        await new Promise(resolve => setTimeout(resolve));
        if (event.key === 'Escape' && !event.defaultPrevented && this.items.length > 0) {
            event.preventDefault();
            this.removeToast(this.items[0].id);
        }
    };
    destroyItem(el) {
        if (!el.parentElement) {
            return;
        }
        this.capturePositions();
        el.remove();
        this.items = this.items.filter(item => item.el !== el);
        if (this.items.length === 0) {
            this.hideLayer();
        }
        else {
            requestAnimationFrame(() => this.animatePositions());
        }
    }
    ensureLayer() {
        if (this.layer) {
            this.applyLayerPlacement();
            return this.layer;
        }
        const layer = document.createElement('div');
        layer.setAttribute('data-ir-toast-layer', '');
        Object.assign(layer.style, {
            position: 'fixed',
            display: 'flex',
            gap: `${ITEM_GAP}px`,
            padding: `${EDGE_PADDING}px`,
            boxSizing: 'border-box',
            left: '0',
            right: '0',
            width: 'auto',
            height: 'auto',
            maxHeight: '100vh',
            margin: '0',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
            pointerEvents: 'none',
            zIndex: '2147483647',
        });
        // Visually hidden live region travels with the layer so announcements are
        // never inside an inert subtree while a modal drawer is open.
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('data-ir-toast-live-region', '');
        liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip-path:inset(50%);pointer-events:none;';
        layer.append(liveRegion);
        this.layer = layer;
        this.liveRegion = liveRegion;
        this.applyLayerPlacement();
        return layer;
    }
    applyLayerPlacement() {
        if (!this.layer) {
            return;
        }
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const s = this.layer.style;
        s.flexDirection = vertical === 'bottom' ? 'column-reverse' : 'column';
        s.top = vertical === 'bottom' ? 'auto' : '0';
        s.bottom = vertical === 'bottom' ? '0' : 'auto';
        s.alignItems = horizontal === 'center' ? 'center' : horizontal === 'start' ? 'flex-start' : 'flex-end';
        this.layer.setAttribute('dir', this.rtl ? 'rtl' : 'ltr');
    }
    /** Deep-scans the document (piercing shadow roots) for open modal dialogs. */
    findOpenModalDialogs() {
        const found = [];
        const walk = (root) => {
            for (const dialog of Array.from(root.querySelectorAll('dialog'))) {
                if (safeMatches(dialog, ':modal')) {
                    found.push(dialog);
                }
            }
            for (const el of Array.from(root.querySelectorAll('*'))) {
                if (el.shadowRoot) {
                    walk(el.shadowRoot);
                }
            }
        };
        walk(document);
        return found;
    }
    /** Moves the layer into the topmost open modal dialog, or back to document.body. */
    relocateLayer() {
        const layer = this.layer;
        if (!layer) {
            return;
        }
        // Event tracking can miss dialogs opened before this provider connected,
        // so always reconcile against the dialogs that are actually open.
        const open = this.findOpenModalDialogs();
        this.modalStack = this.modalStack.filter(dialog => open.includes(dialog));
        const host = this.modalStack[this.modalStack.length - 1] ?? open[open.length - 1] ?? document.body;
        const inDialog = host !== document.body;
        if (layer.parentNode !== host) {
            if (safeMatches(layer, ':popover-open')) {
                layer.hidePopover?.();
            }
            if (inDialog) {
                layer.removeAttribute('popover');
            }
            else {
                layer.setAttribute('popover', 'manual');
            }
            host.append(layer);
            // Re-parenting disconnects the items, which clears their countdown timers
            // (and Stencil may run the deferred disconnect *after* reconnect). Restart
            // them once the move has fully settled.
            requestAnimationFrame(() => {
                for (const { el } of this.items) {
                    el.startTimer?.();
                }
            });
        }
        else if (!inDialog && !layer.hasAttribute('popover')) {
            layer.setAttribute('popover', 'manual');
        }
        this.showLayerIfNeeded();
    }
    showLayerIfNeeded() {
        const layer = this.layer;
        if (!layer || this.items.length === 0) {
            return;
        }
        if (layer.hasAttribute('popover') && !safeMatches(layer, ':popover-open')) {
            try {
                layer.showPopover?.();
            }
            catch (e) {
                // Popover may be mid-transition
            }
        }
    }
    hideLayer() {
        const layer = this.layer;
        if (layer && safeMatches(layer, ':popover-open')) {
            layer.hidePopover?.();
        }
    }
    announce(text, assertive) {
        const trimmed = text.trim();
        if (!this.liveRegion || !trimmed) {
            return;
        }
        const announcer = document.createElement('div');
        announcer.setAttribute('role', assertive ? 'alert' : 'status');
        announcer.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        this.liveRegion.append(announcer);
        // Double rAF so assistive tech registers the live region before content lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                announcer.textContent = trimmed;
            });
        });
        setTimeout(() => announcer.remove(), 1000);
    }
    buildIcon(type) {
        const names = {
            success: 'circle-check',
            warning: 'triangle-exclamation',
            error: 'circle-xmark',
            danger: 'circle-xmark',
        };
        const icon = document.createElement('wa-icon');
        icon.setAttribute('slot', 'icon');
        icon.setAttribute('name', names[type] ?? 'circle-info');
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }
    buildContent(id, toast) {
        const nodes = [];
        const title = document.createElement('strong');
        title.setAttribute('data-toast-title', '');
        title.textContent = toast.title;
        nodes.push(title);
        if (toast.description) {
            const description = document.createElement('div');
            description.setAttribute('data-toast-description', '');
            description.textContent = toast.description;
            nodes.push(description);
        }
        if (toast.actionLabel) {
            const action = document.createElement('button');
            action.type = 'button';
            action.setAttribute('data-toast-action', '');
            action.textContent = toast.actionLabel;
            action.addEventListener('click', () => {
                this.toastAction.emit({ id });
                this.removeToast(id);
            });
            nodes.push(action);
        }
        return nodes;
    }
    capturePositions() {
        this.positionCache.clear();
        for (const { el } of this.items) {
            this.positionCache.set(el, el.getBoundingClientRect());
        }
    }
    animatePositions() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.positionCache.clear();
            return;
        }
        for (const { el } of this.items) {
            const oldRect = this.positionCache.get(el);
            if (!oldRect) {
                continue;
            }
            const newRect = el.getBoundingClientRect();
            const deltaY = oldRect.top - newRect.top;
            if (Math.abs(deltaY) > 1) {
                // Animate `translate` so it never conflicts with `transform`-based CSS animations.
                el.animate?.([{ translate: `0 ${deltaY}px` }, { translate: '0 0' }], {
                    duration: 200,
                    easing: 'cubic-bezier(0.2, 0, 0, 1)',
                });
            }
        }
        this.positionCache.clear();
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    /** Accepts both the provider's own types and the legacy IToast vocabulary ('error', 'custom'). */
    normalizeType(type) {
        switch (type) {
            case 'success':
            case 'warning':
            case 'error':
            case 'danger':
                return type;
            default:
                return 'info';
        }
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
                return 'brand';
        }
    }
    render() {
        return h(Host, { key: '9f0bb17086817265cd08598bd261e63a055e47c8' });
    }
};
IrToastProvider.style = IrToastProviderStyle0;

export { IrAirDatePicker as ir_air_date_picker, IrButton as ir_button, IrCommon as ir_common, IrCustomButton as ir_custom_button, IrDateRangeFilter as ir_date_range_filter, IrDateSelect as ir_date_select, IrEmptyState as ir_empty_state, IrFilterCard as ir_filter_card, IrIcons as ir_icons, IrInput as ir_input, IrInterceptor as ir_interceptor, IrLoadingScreen as ir_loading_screen, IrMealCountSummary as ir_meal_count_summary, IrMealGuestList as ir_meal_guest_list, IrMealReport as ir_meal_report, IrMealReportFilters as ir_meal_report_filters, IrMetricCard as ir_metric_card, IrOtp as ir_otp, IrOtpModal as ir_otp_modal, IrPage as ir_page, IrSpinner as ir_spinner, IrToast as ir_toast, IrToastItem as ir_toast_item, IrToastProvider as ir_toast_provider };

//# sourceMappingURL=ir-air-date-picker_24.entry.js.map