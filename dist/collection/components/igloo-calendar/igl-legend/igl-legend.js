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
        return (h(Host, { key: '88d685f0b5c88b1f4573febe4bcdf75cc3adf680', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '6527a1ce2b03138933d4d03ded34cafb7839609f', class: "fd-legend__header" }, h("h2", { key: '55308a20ce42d882a2d8d8d350a51c900a99d2b8', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: 'a02540d59e6be208e9ca5482b80e154b45d7c1a7', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '9c11434dfe41dcae70f9644d5eb4927559ed4eec', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '8338ccec4e68e6dba79f5530430261b3da9fd041', class: "fd-legend__body" }, h("div", { key: '6171a8d37b602e3c99d9bcfa90cdd74310230cea' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '4a66ca4b1cc34a93c1bd2a2ebcefc1700f162e28', class: "fd-legend__row" }, h("div", { key: '28ab96af0262f653ffa98793344cd518ddc8b572', class: 'fd-legend__shape' }, h("wa-icon", { key: '8a2ad0a576fa26b805a3b21abf1ad55fb33d710c', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '2596b9202ee9e231e17809c7fe03dab684f7bc8c', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: '84970f4833a59bad3b2b559d35313ef1c1d5f5fb', class: "fd-legend__row" }, h("div", { key: 'b44fc2d457f27ffed4e9a1a08426ae57128fe2ae', class: 'fd-legend__shape' }, h("div", { key: 'b49d39530bcc550f6191a2c0c68fd0b569a30c6b', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'fcefde42ed3140c23ac92768b728c58badd73c62', class: "fd-legend__row-title --day-use" }, h("span", { key: 'd4e5ec08e2864269225e397c8a8e9f8ee9df44c7' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: '1355a2becf20be4cfd68541c0d5383b3bad5dc1f', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: 'c1a3ec1d9450b197513156e191acdab70d693577', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'a2ba1e3c3f59cf23488e01c2b68f05f57a8f9ee7' }), h("h5", { key: '62be1e66494e0462db9284c8f9da92f8dc058689', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '00e5fde4da7a663b233ed1b5f4883e2186af1839' }), h("div", { key: '1f361da08e0a89048e5a3f237a3513ea49e5337f' }, h("div", { key: 'f752ab44f1e70637625183b6f234eb35f87ca531', class: "legendCalendar" }, h("div", { key: 'e58caaa233bcf4b7fdd8f91a7a731b5b7aee1983', class: "legendRow" }, h("div", { key: '0147a57f566965f4a21f6c0123fcecff7e22b235', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '303fa6b8817b9e91b6aa9a2e659ff01f98de2432' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: '3f9f48c92b54ccef1d44a36e028cf0875bc84d6c', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: '399596fe2c3bd9248664f3ce611f27f65bdc3373', class: "legendRow" }, h("div", { key: '68ce33912233d68879febd6df7940dc214bd27c1', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '7298e50488d41a28614b0caf994496923eb21d1e', pill: true }, "3")), h("div", { key: '3adbf2a2da9ad34bc2a6e395be60ab8162c19f88', class: "hyphenLegend" }, h("div", { key: '8b415513b54b5c76342529f2e1182751de6c6f70' }, t('Lcz_UnassignedUnits')))), h("div", { key: '0ef6f3a5ec5db8cfce3a4573040e958be4b5c6b5', class: "legendRow" }, h("div", { key: '8277072e1d5d6ccc7e197ecc7e3ad9c058f4f506', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: 'baa919a0079cd6c33305899b3b62152bb20c62e3', class: "hyphenLegend" }, t('Lcz_DateLabel', { fallback: 'Date' }))), h("div", { key: 'bef2a2392f301cd3e49508b447dc769197a61008', class: "legendRow" }, h("div", { key: '58ef079a1971176dde8391b09b9e47c3b9d60a32', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'e0ff0a99956044dece80aae88897b1fedd72aec5', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: '5740b6a1d01de20cd804df0bd21478f96151f9f1', class: "legendRow" }, h("div", { key: 'b718eece9c04a09dd9aec44fc4dce3198ef452ca', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: '583bc6fd9e1d0b291279d8341a501e6af5d51349', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
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
