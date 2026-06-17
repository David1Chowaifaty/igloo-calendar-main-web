import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: 'ba89962f80d8d43bddbc8b0d542c48d3136563c4', class: "legendContainer text-left" }, h("div", { key: '937ba438c278902898026064581037d8d243d5cf', class: "fd-legend__header" }, h("h2", { key: 'c01e413fbddb598e1f15b4cf6100b004dc62719f', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '2135edfd7f1d8beebf2e7d68ccfcae6fbb3551ad', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'da3db54bce79910ce3d514875bc6469843b7ab05', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '43c91379b7ec837e024167f98bd4c86f26c87c5f', class: "fd-legend__body" }, h("div", { key: '869a55508ba23d8ab7883821cb2bdb334328d8ee' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'bf29534e985d2680bcafffb44c23cf6ea5516c51', class: "fd-legend__row" }, h("div", { key: '0df43c4fa3d33e635c66521f87f3a1e0915d66d5', class: 'fd-legend__shape' }, h("wa-icon", { key: 'ff82e1016f2e65f9e896c1ff3174e931e077a035', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '1dc35d3eac18e97390a8dd23e590f455a0ec85a7', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '76eb483ea96f9b5a3971fbd36f56745985c1684b' }), h("h5", { key: '238a1ac4dc91cb414c4951fe13c260fc81f4efef', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '968474e1eced9e48dcca629b9f131558085a5a0e' }), h("div", { key: '5a15f2c39f5f57f58175e1d7a865c96a370dea43' }, h("div", { key: '1763a00aa9f14e67d9c96a0d2baef235d6e1e712', class: "legendCalendar" }, h("div", { key: 'ab0b118aabe966f2db72b694b6bb9c396dc18e91', class: "legendRow align-items-center" }, h("div", { key: 'e55b05241edc5fb3581d49e1e54a13ff2f03d385', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'f8fd963b82b7fcca66c30f25e0755cee1aaeab1d' }, "MAR 2022")), h("div", { key: '97d961ebe257338eabc3d31e44322750b1a24e7e', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '144dff2961b3f28718236795cc0cd62f06ff647b', class: "legendRow" }, h("div", { key: 'e0a727a9cac973b4fa427913d8e3a33e5616b4b5', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'fb15b7f9e90e168e3625735bb3c9b2c4d19d198d', pill: true }, "3")), h("div", { key: '834e76751b2c3a33811eec3c84c6335bbede8497', class: "hyphenLegend" }, h("div", { key: '100d7348be39bc71a213f48e2e2a2f8613d885dd' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '73e1a4831de5ffe41ff9b429032c99853c17b8c4', class: "legendRow" }, h("div", { key: 'd6fe8ffbefdad1ddbb0bffb5b1543f7b7322b945', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ba8d8fc96e90bd028caa65f40def85c18d83f165', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '061f55bb1eaa9292c5d0ff2351a51fe2c44dc277', class: "legendRow" }, h("div", { key: 'c0615fa779a0d64954fc6cd50f85e363bd125c44', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'b243362581f42c1d217e58be2f9ddd57e100a3dd', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '49e68548403e3154300b6a5dc982ee3e6a73f446', class: "legendRow" }, h("div", { key: '65358c52ad77336d0b35ae26edf95f874bfceb04', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '85d6f9103de50917ecb7219547ce628123f4c177', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
