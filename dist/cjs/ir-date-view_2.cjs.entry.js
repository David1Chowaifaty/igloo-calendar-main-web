'use strict';

var index = require('./index-DgHWBwDV.js');
var locales_store = require('./locales.store-CqlNSy6z.js');
var booking = require('./booking-BNALZMTg.js');
var moment = require('./moment-CdViwxPQ.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./index-daCuTVuG.js');
require('./utils-BHTfkyQu.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CgquPLci.js');
require('./type-Dy9pVS4V.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irDateViewCss = () => `:host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}`;

const IrDateView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date;
    /** Show the night-count badge after the to-date */
    showDateDifference = true;
    /** Input format used when `from_date` / `to_date` are plain strings */
    dateOption = 'YYYY-MM-DD';
    /** Display format for both dates */
    format = 'MMM DD, YYYY';
    formatDate(date) {
        if (!date)
            return '';
        if (typeof date === 'string')
            return moment.hooks(date, this.dateOption).format(this.format);
        if (date instanceof Date)
            return moment.hooks(date).format(this.format);
        if (moment.hooks.isMoment(date))
            return date.format(this.format);
        return '';
    }
    render() {
        const fromStr = this.formatDate(this.from_date);
        const toStr = this.formatDate(this.to_date);
        const diff = booking.calculateDaysBetweenDates(moment.hooks(fromStr, this.format).format('YYYY-MM-DD'), moment.hooks(toStr, this.format).format('YYYY-MM-DD'));
        const nightLabel = diff === 1 ? locales_store.locales.entries.Lcz_Night : locales_store.locales.entries.Lcz_Nights;
        return (index.h(index.Host, { key: '2bc519e9938fae95f438fa10b657a2efdd41d8c1' }, index.h("span", { key: 'f7a26eed98cd6625ae6b4cd34e2022378582bafc', part: "base" }, index.h("span", { key: '0a9191dd3a47630187e0c60899583dc6bdbbfee0', part: "from-date" }, fromStr), index.h("span", { key: 'c50b79078c149a0f5c13cf2a0772aacafdc328aa', part: "separator", "aria-hidden": "true" }, index.h("svg", { key: '4d843925aa095f93b25332c590723d673d543f6d', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, index.h("path", { key: 'f28a1419b386e872b46cadb811a2d6189672fddd', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("span", { key: '442eab0b3761a8ecc2026abd029948f5ee995a67', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '9a2534e78391166d55291064f118482138ffb1d7', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

const irUnitTagCss = () => `.sc-ir-unit-tag-h{display:inline-flex;box-sizing:border-box;height:fit-content;width:fit-content;padding:0;margin:0}.unit-tag__content.sc-ir-unit-tag{max-width:50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box}.unit-tag__el.sc-ir-unit-tag{height:1.4rem;overflow:hidden}.unit-tag__el.sc-ir-unit-tag::part(base),.unit-tag__el.sc-ir-unit-tag [part~="base"]{padding-top:0;padding-bottom:0;height:fit-content;box-sizing:border-box;height:fit-content}`;

const IrUnitTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    unit;
    showTooltip = false;
    _id = v4.v4();
    resizeObserver;
    contentElement;
    measurementFrame;
    setContentRef = (el) => {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.contentElement = el || undefined;
        if (!this.contentElement) {
            return;
        }
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    };
    componentDidLoad() {
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
            this.measurementFrame = undefined;
        }
    }
    onUnitChange() {
        this.scheduleTooltipUpdate();
    }
    attachResizeObserver() {
        if (typeof window === 'undefined' || !this.contentElement || typeof ResizeObserver === 'undefined') {
            return;
        }
        if (!this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(() => this.scheduleTooltipUpdate());
        }
        this.resizeObserver.observe(this.contentElement);
    }
    scheduleTooltipUpdate() {
        if (typeof window === 'undefined') {
            return;
        }
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
        }
        this.measurementFrame = requestAnimationFrame(() => {
            this.measurementFrame = undefined;
            this.updateTooltipState();
        });
    }
    updateTooltipState() {
        if (typeof window === 'undefined') {
            return;
        }
        const content = this.contentElement;
        if (!content || !this.unit) {
            if (this.showTooltip) {
                this.showTooltip = false;
            }
            return;
        }
        const shouldShow = content.scrollWidth > content.clientWidth;
        if (shouldShow !== this.showTooltip) {
            this.showTooltip = shouldShow;
        }
    }
    render() {
        return (index.h(index.Fragment, { key: '55ec62fdc021ce2596a65177f84e79cf89fe29ac' }, this.showTooltip && index.h("wa-tooltip", { key: 'df780d72f9735fac37c55d570f14f14c5c38cb25', for: this._id }, this.unit), index.h("wa-tag", { key: '04fe65791e05b4a03d3b200f592a710eb467ab64', id: this._id, class: "unit-tag__el", size: "s", appearance: "filled", variant: "brand" }, index.h("span", { key: '2f244eecc0251169929c5cebfb40e23ceac56b28', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get watchers() { return {
        "unit": [{
                "onUnitChange": 0
            }]
    }; }
};
IrUnitTag.style = irUnitTagCss();

exports.ir_date_view = IrDateView;
exports.ir_unit_tag = IrUnitTag;
