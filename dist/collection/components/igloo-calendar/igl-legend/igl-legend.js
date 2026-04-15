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
        return (h(Host, { key: '559bf0f660826f4a0e8f0de24130d888907f55b5', class: "legendContainer text-left" }, h("div", { key: 'f96ee0285716a11e611a825283ff8df53a465690', class: "fd-legend__header" }, h("h2", { key: 'af41378e6e21c86428f776359d4900f88133691a', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: 'ae0ba4584cb710b5a8249c938441bf13edac6d32', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'eb9b5eea8867444c599ec78395d2f7a5d062b264', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '0fe212a5ff09ed63f3b54ffacc7f37ce71c158bc', class: "fd-legend__body" }, h("div", { key: 'a1eccc87732d7befc9b21fef6a463404190fbf89' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'c8fd37ab16f93b0e67533627bdf5b5610e6efcaf', class: "fd-legend__row" }, h("div", { key: 'ec918eccf1441fc5728ba48d0b179e592fc46c5b', class: 'fd-legend__shape' }, h("wa-icon", { key: '70ec4f55a9dbe81b2313ecb8f0dba74db54e3908', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '47c48d542d245c1c7939562f5f126305ed074b10', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '41576e0f9669eb23c4f53ca6e6ed805c97d47051' }), h("h5", { key: 'ab25b02bdd717f4cf7b88b6b17aaaeb805a70493', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'be9b406fa6c860dde9a1a3d2a26815c99210b191' }), h("div", { key: 'ebf85c27f9b278c262cde5af5cd98f94b5e9be44' }, h("div", { key: 'd7057c43d50d97bc0406070e040a358aba04cae7', class: "legendCalendar" }, h("div", { key: '294d17c7ed57f3d6b553a32a5a703e1bb8a83d0d', class: "legendRow align-items-center" }, h("div", { key: 'b4a548a41faa53f122a927f3f3be7fa14e7f78f9', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'e6de352b00c389ba4b2a26449e42cee10de300b1' }, "MAR 2022")), h("div", { key: 'f71989e9a4d70c217fa9cf1948784157897cde05', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'b07a4a8503266bb24aee108c0e0b36900224f67f', class: "legendRow" }, h("div", { key: 'a11dcc963a4edab710fbd8e2600dd0397f56bf01', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '3bd751697c19ddcf9810df104f7954a73a542529', pill: true }, "3")), h("div", { key: '2ae1b13594a7df71316a80b84230550395b0e04e', class: "hyphenLegend" }, h("div", { key: 'fdce441f5ebba97d2f74d9fd5b18cfb4d85fb00a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'de6f7d1fb0d52aab9406875e7023accac64348ef', class: "legendRow" }, h("div", { key: '6afee815257bb293680c96f7f77d32ef47349950', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '9b2163ffc6a0c4d6ef6962f779de4feb66f77b46', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c26ec3eae8aa4a638259c8bd4059c1a550ebbc0f', class: "legendRow" }, h("div", { key: '964661c2a27cbb86890ea857cf912f5fa32b5753', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'e33410e398f6c1b78789032b9a7fad77d6d795d0', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '56186f387cdcf6f17b1c511b5d299efc74146fe8', class: "legendRow" }, h("div", { key: 'b0d862d9c217084692ef83c6cdbdc4eef9b51b82', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '1efcd07656a02b72d29eb7303da438b098a9e007', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
//# sourceMappingURL=igl-legend.js.map
