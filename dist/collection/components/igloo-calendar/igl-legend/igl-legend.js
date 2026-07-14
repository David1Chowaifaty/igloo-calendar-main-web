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
        return (h(Host, { key: '9b6a65a1a7ee95d7e1d773f2297a064632bd1094', class: "legendContainer text-left" }, h("div", { key: 'ee690bcaaba80d56273db471aec37ef6f26af2e7', class: "fd-legend__header" }, h("h2", { key: '3fd81e195b57048a4ac39fd5bf939b518c431f99', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '9500d1dc17d6470f226a42adc4e6129c5247ad64', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '6c2fb36c26d7a014b231f2cdbeb169d9c05c2311', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'df5e58befa54db0ce551e772f8341b119484ab53', class: "fd-legend__body" }, h("div", { key: 'c6e935b499c9d4ecf17fa24b4809ebc9b971e7b3' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '4e97888bf8ef00d23328bc2a37d519615808b334', class: "fd-legend__row" }, h("div", { key: '4aa676f0dcfff0b319996098ea918f7616ba5c0c', class: 'fd-legend__shape' }, h("wa-icon", { key: '8cca0bcdf230450628005f0654da7855fa21d9e9', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '5012038db99b13f9d9cd256c2646ef8214784747', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: 'a78e86e5468fc3dea0fbd3b9dc2750121f6950b2' }), h("h5", { key: 'e8f2d9e0a05890d904080e17ad4f5dbf89de79be', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '6f6981f200be7419550d2368bd733eb3ba0bf1de' }), h("div", { key: 'bfdeead4a7e0d993fcbdc131e6fcd86adbaa0d50' }, h("div", { key: '72162e32233241ba9dca939b6bf9384936ea2ee5', class: "legendCalendar" }, h("div", { key: 'd194e5b72cb114275f617e6fa8592820ae8671c6', class: "legendRow align-items-center" }, h("div", { key: 'f8df4bcc093ff73a04ba658e9de654ad4b81ce85', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'e9e9abac7c48ccd063f06b26938f3cf6c2c057e6' }, "MAR 2022")), h("div", { key: '16ca04e0320a637507bce60a90d2f545f7c1a35e', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'ca29c15e8e22117d9a86cc5287f032088358ea5c', class: "legendRow" }, h("div", { key: 'eb662e60bfd975e86379507452c4f2c6226fafa3', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'ecf888db4687fa1a8da54c5c58b2084f86131e19', pill: true }, "3")), h("div", { key: 'f603257838e035f4754b70d6380299855e836004', class: "hyphenLegend" }, h("div", { key: 'c086b856acf7fc1b601a7f14203d5f960ddbbfed' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd81b8cab338e5a8dba569bae17cccb1c8688d518', class: "legendRow" }, h("div", { key: '71fa549acb8c43276b9f3defc20b1a00c06a7b9f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '92151253677735683132859562ba78a197326fd6', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '38cdb81206acac36de14a30bd379b3def76bce21', class: "legendRow" }, h("div", { key: '5d8b02ec42f6ec183261fb127b47136acbdd0e78', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'b447f52bd965361d549bf2e0c9e709e71acc4a27', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '4020c476da159ac35fff77b8b469dd45a9c67de5', class: "legendRow" }, h("div", { key: '276e7a96e9109ecf5839b1479751f0aa7dee7d75', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '5b7aaabdb39eff9243216fb712cfd318b31fce95', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
