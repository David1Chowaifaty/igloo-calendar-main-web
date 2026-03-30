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
        return (h(Host, { key: '18777855b0dee29757f43563445ade84f80154aa', class: "legendContainer text-left" }, h("div", { key: 'f63778555cc79a984a1f3f74a959ca7157b8fe9a', class: "fd-legend__header" }, h("h2", { key: '2dc342928cfcab069165b12a056d8d3b5b39e55e', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '5eece4676ec64da659cb1e404c840b13093b7aa1', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '1e81cd86ebe5e079458348fb473d0c3636cab110', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '667b3e89d58f2677fc6d8943e7ab026c863ad220', class: "fd-legend__body" }, h("div", { key: '3ef7c6fe69ed1e96d869cf6313c7472e8071523d' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '66d51a180b77056a4b6709482d4270511d8ad460', class: "fd-legend__row" }, h("div", { key: '3d092a70af2fdeffad76c885f7c2a837d754cfb5', class: 'fd-legend__shape' }, h("wa-icon", { key: 'd068ccfdc9b7b3a9e6c12d584e95ba9adac65089', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'a963b08f0dc32f5c47e38a3cbf38d5900106adf2', class: "fd-legend__row-title" }, "Issue with unit")), h("wa-divider", { key: 'fc9f97fff4d5cba9121ae34190e1c4daf7b207b5' }), h("h5", { key: '3dbce22d43edb88ad3cf5ba27fee151ff94cfc5f', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '1052c29f0f22763833faba17bdeb29324a501975' }), h("div", { key: '8a910fa5e7694e288f0c9febe561e8fcfdb37b46' }, h("div", { key: '9664f0379a6f3854194bb9949e562f800be11632', class: "legendCalendar" }, h("div", { key: '1c5fddc72a469ae10b48e099fa1e6a88a0e71867', class: "legendRow align-items-center" }, h("div", { key: '823793e8e2368280cdf163494bd363244ddb9451', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'cf38bde9cb2bc9e63289e68224a212d7f6dc1828' }, "MAR 2022")), h("div", { key: 'e71afa812b2be301dbb3a3a6b32856d2a0490dce', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'e94de8fab430dfeb20b09fb8ecf72a6476d2a0d8', class: "legendRow" }, h("div", { key: 'bfa3ff2495c28558dc9753b687496a128d3b498c', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '8c51014086111de09b3b5ca46b23cebbf1a68135', pill: true }, "3")), h("div", { key: '35475ccfde17fb6aff1760f54faf067bdffcb712', class: "hyphenLegend" }, h("div", { key: '21c24fdc371a361335809330afcce7b47677f4e0' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'daa8b70832e0388940224bf298516cc70a2e89c1', class: "legendRow" }, h("div", { key: 'd52034c1b66579daf5ffea2e9ed1ea1e77a8443c', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'd6b9e7ae6837505e79ff2ee67dc7c52b865a3c84', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c3f0523f819154d26d9f1bc92b127a1019f42cb1', class: "legendRow" }, h("div", { key: '3db5801a53b40316876da2fa182031c0f32ce243', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '3406884d3f7896adc582b80c99019370b7d533e8', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '9b7ed4d8834ed60d4abc6bdd059241eb9a980c39', class: "legendRow" }, h("div", { key: '63ebed30e28007f7055503a0eb754acc995728a9', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f4eef0468d6920ae411446494e25b41aa72634df', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
