import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { isRtlDirection } from "../../../utils/calendar-grid";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IglLegend {
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
        return (h(Host, { key: 'dbed47eea0d9af479aa22a8cca26499811125b16', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '2e500b4c135f59aacd0b890b8f3677d8fa6ae554', class: "fd-legend__header" }, h("h2", { key: '63859c410ed1015fc749f86fd2c4e63679ee5448', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: '5897c793cb0994aebbe8a5d8100e6ff129b46c8e', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '13e937c4bac0bd72b3661657e3159cb4270c6409', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '5135eb59eece70f8c7fe9c2749a55a32597a9d3a', class: "fd-legend__body" }, h("div", { key: 'f9788ea4115136250c8dcdce2af9231255e08152' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'b0c7eb4c58f7b3b837378ae6b393d99f7ff7a903', class: "fd-legend__row" }, h("div", { key: '181c2276865d7464011e4e0f6748e2e262fc5856', class: 'fd-legend__shape' }, h("wa-icon", { key: '65de46c85e64085daf556b8607eacdba2c1ba68a', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '89aede0e7e1bf8a554f5195d3249907e94390468', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("div", { key: 'ce3c3239ff7e97ce3ae1f3105653296911f2c745', class: "fd-legend__row" }, h("div", { key: '3be252cc5c22b9dc5337bea2c69a30ffb7379277', class: 'fd-legend__shape' }, h("div", { key: 'e440538822b6f3813fde11ecdc5fa3b01a2ca8a5', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: '85943e6e1631b53e631372ac925bb9c6022e0ff6', class: "fd-legend__row-title --day-use" }, h("span", { key: '35731f4e82ad6b3360daeb67535fa0bd3b8052e8' }, "Day use"), h("div", { key: '608ddf904f2e017ce529b4a064eaff79bd4acd08', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '2280489c1e9a0fa9c4460602655255dc35b36d03', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: '6534f7027cdf7ca2ccd887e861a248613240ff9c' }), h("h5", { key: 'fe43f0910c972fa777906ac599301edcfe6a2c3d', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'a5f96f98199bfe673c50a29a76572ed4e688e0d0' }), h("div", { key: 'd4fb20d748aebfd9b40dbc1083a40e006e341616' }, h("div", { key: '7884bb6b0d56bd37b15223afa511ce723ea1abcb', class: "legendCalendar" }, h("div", { key: 'dd5bc8dc2e21436aac4001d76ed93da4d7019ae0', class: "legendRow" }, h("div", { key: '2865f0827626261f89725aa9135395d90c2972d5', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '0ddb3dc570221e1432b1400490c7c9581d7e7ae5' }, "MAR 2022")), h("div", { key: '7a5a7037fe8ae53d4e99c6af97185968bd1fd18a', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: 'c364be62f8353fee44e03cbc536f78c847ce2f3a', class: "legendRow" }, h("div", { key: '9c8b9e5b5e2869cb8408a5fb4bd8b1d5b27790c6', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '1b00c2fc2543f06b804bfcb30c31faff2b986da4', pill: true }, "3")), h("div", { key: '2348dee35aefa6e99bf5400840a8db9ff53b6b9b', class: "hyphenLegend" }, h("div", { key: '1d76603e835815454c7ce254002b2d5587d907c5' }, t('Lcz_UnassignedUnits')))), h("div", { key: '80709bf3a23c50b2a7bc0e0682fedc2246f95b17', class: "legendRow" }, h("div", { key: '1b8504b9e33e405f40caebbfce9234571fdd22ff', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'bdb6d9c4889031d16ffe86fe4c82aa6750905182', class: "hyphenLegend" }, t('Lcz_Date'))), h("div", { key: '4603151ee7cafab4822cdc1bee1ed7bb4fd4dcfc', class: "legendRow" }, h("div", { key: '7b9b1c8f1aa5c34947bc494623a7920f47a9bd07', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '36a332da19cee7574342cf96a5468c5125b7f699', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: 'efb5ed412d4a114948757fe2e46c3a4a82c05139', class: "legendRow" }, h("div", { key: '8b66d947b38cd34d8e0074e80fd6e491e3546c34', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: '64faa2b2d871ed413e32a61c39efeb6549cc8cb7', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
    }
    static get is() { return "igl-legend"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legend.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legend.css"]
        };
    }
    static get properties() {
        return {
            "legendData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "bookingColors": {},
            "saveState": {},
            "saveError": {},
            "loadingIndex": {}
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "saveState",
                "methodName": "handleSaveStateChange"
            }];
    }
}
