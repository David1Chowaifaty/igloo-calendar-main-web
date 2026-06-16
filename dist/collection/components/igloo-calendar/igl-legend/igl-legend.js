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
        return (h(Host, { key: '8e0e2489d74f4975206a9e8959bd6a5bf92f5c1e', class: "legendContainer text-left" }, h("div", { key: 'b1766410c8fc68353a1c5e7644936d83295678e6', class: "fd-legend__header" }, h("h2", { key: '1780dc452e9b89aed2d9604df0f9566147dac829', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '1b94648d44cff1d50e4f8e514f4f7204b6e9fa7f', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '41df838d4205e8aa93074df4b59bd35813692423', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'fa2a49e43bfc7595101c4508d54d5f8441dbb360', class: "fd-legend__body" }, h("div", { key: '8dc14707a6a51cd49c8517470e730e512cfc363b' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '8a9728297c97c7e4db1d060dc3688b0cb92a9590', class: "fd-legend__row" }, h("div", { key: '8469b31f60af15f60791eb0baa40e506b7c7c11c', class: 'fd-legend__shape' }, h("wa-icon", { key: 'd70d0317b353f9727177f1abb12374d21a966e87', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'd44f49d31defd71aaf57a6f628f74242e59f1af6', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '6ffbceb9a5dfa2a73dc2a27399fbe013384968f0' }), h("h5", { key: 'aa2fc480203d01422db2fc4ed43f50cdc2b6a443', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'bc892c639f80463b1bbb0f1b78b5af5afb38adec' }), h("div", { key: '2ac95e9337cf25f1ec4165262b81a2da995c25e1' }, h("div", { key: '3595b248500e6de49a387d646b9d9568c6af4d13', class: "legendCalendar" }, h("div", { key: '62b26a2f48504d3e547488d430b2b30ac1fce0a9', class: "legendRow align-items-center" }, h("div", { key: 'c83c7ae5024b0e2562d83bf1e5c5bec619081819', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '5186c9d974c3a378dc39fb35ec6c2260ddf8e3fc' }, "MAR 2022")), h("div", { key: '1819abd9953d3e3c8b312cd28c2eb6356749a0a6', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'dafda2d8675bb42d3f40682b16126faebe25ca05', class: "legendRow" }, h("div", { key: '042cea1a3fcfcc2f192589ae9985c97400d0141b', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '52eecb2049fb470e0392381da260c86fb9364631', pill: true }, "3")), h("div", { key: '764c249cf974cd8d3596953238405002fdffb39a', class: "hyphenLegend" }, h("div", { key: '239606ead7721e2611da8dfedcbf9401cfa6ecbb' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd2fa11f2229c09983f8dc58b7d1e78151d505a6b', class: "legendRow" }, h("div", { key: '4683ff38d9b906d8deda0a03ae9d5ff128ba5080', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '6ea40ad3b0a72142465badad1921dbe4ec295b21', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '0985262287341b04691f50acd9a5e2ce6ff3a11a', class: "legendRow" }, h("div", { key: '030b72c9a081414cb919b959efe94fe53e1bb627', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'bcb6066a65ba98ff147b7b7f028c190c316527bc', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'b6348cd125cc241e9196ae764075ab1fd2d6c379', class: "legendRow" }, h("div", { key: 'cd891521a9d57e1de64bf2f8a0f83f2d35256d85', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'b98acf4eebfaa082c7250d9b01c1633e36416e68', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
