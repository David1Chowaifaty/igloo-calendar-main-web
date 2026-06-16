import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-success-loader2.js';

const iglLegendCss = ".sc-igl-legend-h{--spacing:var(--wa-space-l);display:block;width:max-content;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.legend_skew.pending.sc-igl-legend{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default) !important}.legend_skew.in-house.sc-igl-legend{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);border-radius:0;vertical-align:middle;font-size:12px;text-align:center}.legendRow.sc-igl-legend{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legend,.legend_skew-bordered.sc-igl-legend,.legend_skewsplit.sc-igl-legend{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legend{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legend{--stripe-period:6px}.legend_skew.split.sc-igl-legend{border-right:4px solid var(--wa-color-text-normal, black)}.legend_skew-bordered.sc-igl-legend{border:1px solid var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;position:relative}.fd-legend__section-title.sc-igl-legend{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin:0;padding:0;margin-bottom:1rem;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legend{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legend{border-right:2px solid var(--wa-color-text-normal, black)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend{margin-bottom:0}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend:first-child .legendCal.sc-igl-legend{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legend{font-size:1em !important}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend .badge.sc-igl-legend{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.legendCal-h2.sc-igl-legend{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legend{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legend{border-left:1px solid var(--wa-color-surface-border);border-right:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legend{border-bottom:1px solid var(--wa-color-surface-border)}.hyphenLegend.sc-igl-legend{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hyphenLegend.sc-igl-legend::before{width:12px;height:0.5px;content:' ';background-color:var(--wa-color-text-normal, black);vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-legend__title.sc-igl-legend{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-legend__header.sc-igl-legend{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-legend__shape.sc-igl-legend{display:flex;align-items:center;justify-content:center}.fd-legend__row.sc-igl-legend{display:grid;grid-template-columns:40px 1fr;gap:1rem;margin-bottom:0.5rem}.fd-legend__row-title.sc-igl-legend{padding:0;margin:0;width:fit-content}.legendContainer.sc-igl-legend{padding:0 !important}.fd-legend__body.sc-igl-legend{padding:var(--spacing)}.headerCell.sc-igl-legend{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legend{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legend{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legend{height:12px;width:20px}";
const IglLegendStyle0 = iglLegendCss;

const IglLegend = /*@__PURE__*/ proxyCustomElement(class IglLegend extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    legendData;
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    optionEvent;
    propertyService = new PropertyService();
    saveTimeout;
    disconnectedCallback() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
    }
    handleSaveStateChange(newValue) {
        if (newValue === 'error' || newValue === 'idle') {
            this.loadingIndex = [];
        }
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    syncCalendarExtra(colors) {
        const calendarExtra = calendar_data.property.calendar_extra ?? {};
        calendar_data.property.calendar_extra = {
            ...calendarExtra,
            booking_colors: colors.map(color => ({ ...color })),
        };
    }
    get propertyId() {
        return calendar_data.property?.id ?? calendar_data.property.id ?? null;
    }
    updateBookingColor(index, patch) {
        const bookingColors = calendar_data.property.calendar_extra?.booking_colors.map((color, idx) => (idx === index ? { ...color, ...patch } : color));
        this.syncCalendarExtra(bookingColors);
        if (this.saveState === 'saved') {
            this.saveState = 'idle';
        }
    }
    async persistBookingColors() {
        const propertyId = this.propertyId;
        if (!propertyId) {
            return;
        }
        if (this.saveState === 'saving') {
            return;
        }
        this.saveState = 'saving';
        this.saveError = undefined;
        try {
            await this.propertyService.setPropertyCalendarExtra({
                property_id: propertyId,
                value: JSON.stringify(calendar_data.property.calendar_extra),
            });
            this.saveState = 'saved';
            if (this.saveTimeout) {
                clearTimeout(this.saveTimeout);
            }
            this.saveTimeout = window.setTimeout(() => {
                this.saveState = 'idle';
                this.saveTimeout = undefined;
            }, 2000);
        }
        catch (error) {
            this.saveState = 'error';
            this.saveError = error instanceof Error ? error.message : String(error);
        }
    }
    handleNameInput(index, value) {
        this.updateBookingColor(index, { name: value });
    }
    handleBlur(index) {
        this.persistBookingColors();
        if (!this.loadingIndex.includes(index)) {
            this.loadingIndex = [...this.loadingIndex, index];
        }
    }
    handleLoaderComplete(index) {
        this.loadingIndex = this.loadingIndex.filter(currentIndex => currentIndex !== index);
    }
    updateLegend() {
        let newLegendArray = [...calendar_data.property.calendar_legends];
        //step 1: replace scheduled cleaning index 12 with dirty now index 11;
        let dirtyNow = newLegendArray[11];
        newLegendArray[11] = newLegendArray[12];
        newLegendArray[12] = dirtyNow;
        //step 2: move index 13 to index 7 and push the other 1 index lower;
        const splitBooking = newLegendArray[13];
        newLegendArray = newLegendArray.filter((_, i) => i !== 13);
        newLegendArray.splice(7, 0, splitBooking);
        return newLegendArray;
    }
    render() {
        const legend = this.updateLegend();
        return (h(Host, { key: '26b7a6e21ef0c2cb4b2284351aaa5d12ecca8d8b', class: "legendContainer text-left" }, h("div", { key: '8d2bad14518716943139d40223217fd20ec05e9e', class: "fd-legend__header" }, h("h2", { key: '2a6d8334d8f3205873fe0ce68d4ed6daab50d02a', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: 'ae0539730aaf223c12833639003b933e3bbc7364', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'f528d3cbc6a793a7982165eb0ba3f1776350158a', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '8a2a60a472cbc13e686f95951e7414bb3398b04e', class: "fd-legend__body" }, h("div", { key: '39e7673244f7d5ffdaf9e3d0ab43c9ce236bf6c4' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '88638eb29d1322ab46caaf6abdb6a896ebcda649', class: "fd-legend__row" }, h("div", { key: '7c36c2c63f4824753bb14253f5ca5eb65a465871', class: 'fd-legend__shape' }, h("wa-icon", { key: '6399b74c39ac4cef6312bd9f742878da1190328e', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '01c453b259b8e8494bd8c8d3d63e05bd2f9af14f', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '97e15350b8ff9942ba0e297b069ff0497965c07c' }), h("h5", { key: 'c5d605542be725d8ed8f70335e7ae47f0fc61b27', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'ea1a2d721d8b6b99c45ae21abd9d4c45f5f83aba' }), h("div", { key: '2305e51069740e1dc5b9354331887f9ba12c8cfc' }, h("div", { key: '01a39353f28c774e9d2c8c309b3c91d8e0fe7900', class: "legendCalendar" }, h("div", { key: '6cb07a26c73edceba30bd92a5f793bfc43aa6c44', class: "legendRow align-items-center" }, h("div", { key: 'd0be5811abc15bceca6665424661f4d5a331b1cf', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'eecbd30c8285476bfe98cbf8f8c02e3d0b5b1455' }, "MAR 2022")), h("div", { key: '3de838ec03ad1e6e27726dadccfc20362eccc88a', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '5fc5575514043079694ff73c0964990eed932a02', class: "legendRow" }, h("div", { key: '2d6ee08bc4c479f5be21dd5d1a8b5b080a6e9b95', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '6000cf600c8a383a18a5c76682db81ec7f802098', pill: true }, "3")), h("div", { key: '51c1867c2a7625df9778eff1dce46b4d3256ccca', class: "hyphenLegend" }, h("div", { key: '26fa2de180e41f3b6a53b1c9385e5ae9df77eb2b' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '2c32e2c702b9eac774f8a0ed9f5705b4ce8ff793', class: "legendRow" }, h("div", { key: '894ef63c6c4e8d71d6f2ea965532398a4dc96f42', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a1c32dfe44aa9d98f9ae54f85682b9e5783072f8', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '7775fa77eed74d48c2a0a31e8ce3ef37d3792cb0', class: "legendRow" }, h("div", { key: 'f97d752de19e89c70942f2dca37081cf78268a55', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '6ee57dd049e86be6bbbef520ca573e4385a5f253', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'cdac885efe00e0b85b127e07a7cfe69cfc1131fc', class: "legendRow" }, h("div", { key: '505220450da5d1be9d24a55e74ff26b9f2927216', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'b76b0e20fd082c8e75d6cf1ad9b54d6282050bfe', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
    }
    static get watchers() { return {
        "saveState": ["handleSaveStateChange"]
    }; }
    static get style() { return IglLegendStyle0; }
}, [2, "igl-legend", {
        "legendData": [16],
        "bookingColors": [32],
        "saveState": [32],
        "saveError": [32],
        "loadingIndex": [32]
    }, undefined, {
        "saveState": ["handleSaveStateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-legend", "ir-custom-button", "ir-success-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-legend":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglLegend);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglLegend as I, defineCustomElement as d };

//# sourceMappingURL=igl-legend2.js.map