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
        return (h(Host, { key: '26b7a6e21ef0c2cb4b2284351aaa5d12ecca8d8b', class: "legendContainer text-left" }, h("div", { key: '8d2bad14518716943139d40223217fd20ec05e9e', class: "fd-legend__header" }, h("h2", { key: '2a6d8334d8f3205873fe0ce68d4ed6daab50d02a', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '008012aca7f494d2fd732d8b0160cff3720e8659', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '6ca884f1016079b0ba90aed4eeda072e0d6edccb', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'f7458b9ecbdccdf49e7528749bcaf86c2edd032b', class: "fd-legend__body" }, h("div", { key: '4c2bfea1f4b29feb2c7e948fdd88d2eab49ddbeb' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '01e9ccf4a2bc5496f6593eb417778f8b0f89cebd', class: "fd-legend__row" }, h("div", { key: 'cf3fc42659f4c813e3baf8141e62076b2e8fe1a9', class: 'fd-legend__shape' }, h("wa-icon", { key: '5c4c29f3bb05dd8b1159efc846ff106fddd14282', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '8026a9d9fdf366d477af999eae6c7e9df91af9bb', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: 'f7e15e66eea53c306ed2025952aa9b84600ba06e' }), h("h5", { key: '4de5dd20254e6c6187118738800172bfe71b7a1e', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '59e191534359e52ea3057d8209a7f4196945eec0' }), h("div", { key: '723aa0f1c46a399193cc0c0d0d38808a1ebd8465' }, h("div", { key: '4725d09988bebbc2961f2ae951b77e0ec7f85771', class: "legendCalendar" }, h("div", { key: '19ebaa89c2fbfe755c1d7477d4ab0848ace92e5c', class: "legendRow align-items-center" }, h("div", { key: '203d06de617e972dd945b268106f15027dde4e42', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '1f7992768811696f5d2aecc6638339f1d4781d32' }, "MAR 2022")), h("div", { key: 'bc719ed30d34298e25ec64e0d869205d30af4284', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'af1cf88ef11836d856bce80d00b9f73ab07c2cad', class: "legendRow" }, h("div", { key: '6559b4ab3c1bca2811664de0a2ed7835dd68161c', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'd254ddd8b0c5c33bcccca0119731e790b8bcb66a', pill: true }, "3")), h("div", { key: 'ee8918ebc7de1a73728b34cd029b002ae23ff85f', class: "hyphenLegend" }, h("div", { key: '85482c5fda231e65f3a908b3518042159745da00' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '9c4df4e341e23f17745dd3f0634bd18ac1a0a8b8', class: "legendRow" }, h("div", { key: 'ab05b817c4c5dd06a63728fe1f4e8dfee29965f7', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '049c39776848e3c21c2fddb3d2a4e98fd8eefdf6', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'b272256ce846784d129baee972543a9c89106538', class: "legendRow" }, h("div", { key: '0bd4a3e4cf9dd8dabd85817899605dee7d1f7be3', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '85c414698446d0b676793367f4cc993250f3cdeb', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'a65d26b67f7ff6e98442f662085244dc46e540f2', class: "legendRow" }, h("div", { key: '0a9bc2e3f6f6517cbd1e60588c878f2bf2c609b6', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '3c9750ee93385adc8c62d01c50b7e06c570a8de0', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
