import { proxyCustomElement, HTMLElement, createEvent } from '@stencil/core/internal/client';
import { A as AirDatepicker, d as default_1 } from './en.js';
import { h as hooks } from './moment.js';

const irAirDatePickerCss = ".air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover,.air-datepicker-cell.-in-range-.-focus-{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:\"\";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}.air-datepicker{--adp-font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:\"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration:.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92, 196, 239, .1);--adp-background-color-in-range-focused:rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover:rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0, 0, 0, .3);--adp-overlay-transition-duration:.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:\"\";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}:host{display:block}.custom-date-picker__calendar{--adp-padding:1rem;}.air-datepicker-cell{color:var(--wa-color-text-normal);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.air-datepicker-cell.-current-.-focus-{color:var(--wa-color-brand-fill-loud)}.air-datepicker-cell.-focus-{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.air-datepicker-cell.-disabled-{cursor:not-allowed !important;text-decoration:line-through;opacity:0.5}.air-datepicker-cell.-disabled-.-focus-{background:var(--wa-color-surface-default)}";
const IrAirDatePickerStyle0 = irAirDatePickerCss;

const IrAirDatePicker = /*@__PURE__*/ proxyCustomElement(class IrAirDatePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateChanged = createEvent(this, "dateChanged", 7);
        this.datePickerFocus = createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = createEvent(this, "datePickerBlur", 7);
    }
    get el() { return this; }
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
    static get style() { return IrAirDatePickerStyle0; }
}, [0, "ir-air-date-picker", {
        "withClear": [4, "with-clear"],
        "placeholder": [1],
        "label": [1],
        "dates": [16],
        "inline": [4],
        "date": [1537],
        "multipleDates": [8, "multiple-dates"],
        "range": [4],
        "dateFormat": [1, "date-format"],
        "timepicker": [4],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "disabled": [4],
        "autoClose": [4, "auto-close"],
        "showOtherMonths": [4, "show-other-months"],
        "selectOtherMonths": [4, "select-other-months"],
        "customPicker": [4, "custom-picker"],
        "container": [16],
        "forceDestroyOnUpdate": [4, "force-destroy-on-update"],
        "emitEmptyDate": [4, "emit-empty-date"],
        "triggerContainerStyle": [1, "trigger-container-style"],
        "clearDatePicker": [64],
        "syncSelection": [64]
    }, undefined, {
        "date": ["datePropChanged"],
        "minDate": ["minDatePropChanged"],
        "maxDate": ["maxDatePropChanged"],
        "dates": ["datesPropChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-air-date-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAirDatePicker);
            }
            break;
    } });
}

export { IrAirDatePicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-air-date-picker2.js.map