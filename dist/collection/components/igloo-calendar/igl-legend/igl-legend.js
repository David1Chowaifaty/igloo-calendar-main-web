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
        return (h(Host, { key: 'fd51cc0a4bae6cec42e8a39d59ccd9e761226b65', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '711a036f0e1140b2a37c57ae9a040ade1a2ac78f', class: "fd-legend__header" }, h("h2", { key: '8658d3a5a4ced5b35f2bbb2e3ef19d578e2ed7e7', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: '3b175159391b66c7c669b7b552da9fbdce2f962c', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'af4f7a0c45d2cf6f067000ac645919acdcd0ce46', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '6fdce2e1be07971f1e0b6a5e9a7aad8893fbb9a7', class: "fd-legend__body" }, h("div", { key: 'bc67ec267b353710390890c4fb28f8f2e7f31647' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '698626fb9dfe1d56772613106f4d9fbd0a5e1eee', class: "fd-legend__row" }, h("div", { key: 'b1646b67f420d24d9f22418c28da8f4b3b5307f1', class: 'fd-legend__shape' }, h("wa-icon", { key: 'bace913ef10451e23c568505ef2bfd45004dd011', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'd6ae230a670d0645b7539ed5093770f9ffa402e4', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: '6cda1d9ee0215df270d5c0ee69ed63314866b7d5', class: "fd-legend__row" }, h("div", { key: '4abc5b7f9997c6138afbefa4ba76330d3f55ffdb', class: 'fd-legend__shape' }, h("div", { key: '7d393e6966656789d5fe6e438a2f8b428d4d9439', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: '8f7332b10f9594b2e5a31ec558a9def882a75ab5', class: "fd-legend__row-title --day-use" }, h("span", { key: '2f8a7e7d49479c0fdc4aff02a8e9f617a101c5c2' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: 'fcb252a503255c4cd104289ef5633e0ef7c42bf4', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '500a4f238fd8e9193ea0c4be49a4cce6d6c5da8d', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: '0aad08f17b120a0cefcf42de429fddb623f86cd2' }), h("h5", { key: '6e45dfdf617d2b19b81bb28e87d970137dd7ae09', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'dc0d16eec99603121e5e1107715e0e3b4a37eafc' }), h("div", { key: '352ffe061339525b010e489affd69b64dd5c7503' }, h("div", { key: '9a2ee068f72a7d7c1fe06b2772663dadf33aae75', class: "legendCalendar" }, h("div", { key: '9458ab3dc016df322b954f1d0c9c52f26e511329', class: "legendRow" }, h("div", { key: '00d0f7725649e6c9252ef76e187ed5e6c1fcfe7e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '75a369f635e5c2c8584ec94e68e7d9eeb17f4b0b' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: 'a2d11336f78b0c9ecfdfe549858938422d3379f9', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: '4ec7e72e23fddc4f5069b4d69a156dc1ab874501', class: "legendRow" }, h("div", { key: '67c196fbed3180f0e20877200e1544b60ad09347', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '28fbe5fa39ad5bd4bfad87e07791f66a0c813a96', pill: true }, "3")), h("div", { key: '3384945a25d8a34b4aec14b74b08e07de862cf12', class: "hyphenLegend" }, h("div", { key: '8bce39887cd5bec6ddb102ed4500d734a4d7ece1' }, t('Lcz_UnassignedUnits')))), h("div", { key: '09e278b822231d1ca3845e4b1273b4a54a784c96', class: "legendRow" }, h("div", { key: '754dafc263dd6372adbbe755a0c2797e75d0f07e', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: '3a1b04493d7be41d1a9c8b06428bbce34e1e00b5', class: "hyphenLegend" }, t('Lcz_DateLabel', { fallback: 'Date' }))), h("div", { key: 'f623b474bfa13b78c978235ea2ed3052a8faf79e', class: "legendRow" }, h("div", { key: 'e53081c3d3dba818c131b6812e8ce9c6c1c58ede', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'befdd9eddcdf36835c6e1713700debc49f52cc64', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: '825e856bf6c0e674dce396c9dcc5ded4114c1106', class: "legendRow" }, h("div", { key: 'dadabba8e80faedbedec9385c141d7198710fd7b', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: 'f7e59982177733530fc7091793f5c9f5f9a5901e', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
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
