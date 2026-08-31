import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { isRtlDirection } from "../../../utils/calendar-grid";
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
        return (h(Host, { key: '29caa42a58676669f81f23384dcc7c8432b2be51', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '2c49f63ee9795c8b29977e8d718173d1f0ff01e8', class: "fd-legend__header" }, h("h2", { key: '9792cc4f02456df0205436b444b91d8fee22715c', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: 'be45ae005fa2bcdcea8c8e0dbaa9bfc63a6b5c73', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'b41ed477b1847896f3922c6bf63ffa0a1f2a3a4b', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '67847f32aff6f655e34a97a08baba4f7fd61fa93', class: "fd-legend__body" }, h("div", { key: 'd8ccd2c6392c3c7e71c86001c6840198c3ae4426' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '994e2728744ae7e2d314e7d9e56137d3080d3f9b', class: "fd-legend__row" }, h("div", { key: 'e596cd2ea6ae96d5d6f4d351b2c5b6999ac6e14e', class: 'fd-legend__shape' }, h("wa-icon", { key: '4c0d0c1f509468eb8ca642c0b720128ee654a146', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '199e711a67b98ddb7d616efa5e7c85fa2849e680', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("div", { key: 'ab5be6d2c2d618f129699d797535a98ba61f9c39', class: "fd-legend__row" }, h("div", { key: '3966b3e48b7fdc5ea94d1910a4fb512fa24db7b7', class: 'fd-legend__shape' }, h("div", { key: '605f3af5632d61c5060fa31cb50a7b7ca0937789', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'a85492bd6f3c16babf2fc1cc42b3be4a37c23739', class: "fd-legend__row-title --day-use" }, h("span", { key: '5acc11d533a7623f451f3583be19110d70e63e10' }, "Day use"), h("div", { key: 'd194961319b23094d3ac4f3d440b1bda5c04424d', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: 'e676046208bdac2af454989656b07013cda948b8', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: '50a2abd0e52e1edf52f514abbaba9c72ae93b5b4' }), h("h5", { key: '9a6ef63c7089f61e743163bb4c760babfdb02be7', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'b168a480293db2559e1f9e03bf5c20e167b6225f' }), h("div", { key: 'b1b7e916a003159adf4fb742e938774e80f0dc41' }, h("div", { key: '15160899cf1378741f439dca06ec31d7e731e987', class: "legendCalendar" }, h("div", { key: 'ead2ddf27b7cbd83765d8b9748fb65f54e79d561', class: "legendRow" }, h("div", { key: '4e2292322c41d42d04695f7adcc2ec7ae5396c73', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'bf34b0de65949d60740a264faa23e88b95d51337' }, "MAR 2022")), h("div", { key: '5b971706ddd9b62f2f601c58a808a9224a813be1', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '3b17b661795104f5c45f34b960bdba08dd80bf0c', class: "legendRow" }, h("div", { key: '560cbf536e71b5058f80e8f11dfb2b422231770b', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '0279c91233d8df938af88e2bdbf93fcb8c1ace92', pill: true }, "3")), h("div", { key: '1ed96bff9efc7e404d33b3d42a62f310db37c937', class: "hyphenLegend" }, h("div", { key: '929d42d15ad78def52af8be1ea199f80e433595e' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '61acf3b5b0dfb7889abfbc9607e2e1cb9908f1d6', class: "legendRow" }, h("div", { key: 'fe9726e1f49e31438db8c74af6f731591fbde707', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '2dafb7007560ca359df462920f087a866e186836', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '66439d1064ea2b64d67520e953a6b298b875d685', class: "legendRow" }, h("div", { key: 'a1137b49ef1f14fc1da9d9d9f206adaafe95f99f', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'b9766608ad64f5c4ee6249c0e8c42aefbe0c145b', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '3c57747c47ea4813e10644d4423c87694c933dcd', class: "legendRow" }, h("div", { key: '31bd5e597ecdef367478ab54e049f4c1c5ab3bc4', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: 'fcf552191d0b2e4191610eda035f272018b6a75b', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
