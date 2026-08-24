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
        return (h(Host, { key: '17422b81fc3bb20466b156e37aae26d67ba8e9fe', class: "legendContainer text-left" }, h("div", { key: '9826d0e9d98210941db04324bc721d4b0617bb74', class: "fd-legend__header" }, h("h2", { key: '4492f8b5fdcf053f13f874932b0d50288221cb3c', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '6e65c84c5dfe3b67f65a9c20670c2dffc7770d26', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'f974675e1d2efff82188bf6d140e444fe6ca946f', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '8c6a47da6671e972a31b1b4472630b28070aa89d', class: "fd-legend__body" }, h("div", { key: '249d4e36535b0d57089337a0bc21884e71e9f52c' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '8f096a2969b93a6266b29ee88e924456e6e55582', class: "fd-legend__row" }, h("div", { key: 'f75bd80939b5881abbfa9c57ec56a1d447c9786e', class: 'fd-legend__shape' }, h("wa-icon", { key: '7ea1f8a62bf44fd9094024dea6cd7546377d5dde', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'b659c51448e747994d711cd02b78fc127897bdc9', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("div", { key: '07a23d89207813bdd4eb8d5cc005d0d08fdc2922', class: "fd-legend__row" }, h("div", { key: '41b40c9a717cd9e9c7c6f3b7546bdee2bb4232a7', class: 'fd-legend__shape' }, h("div", { key: 'b73a34e7fcfa7a26d4c456088eb3ab12530c45e6', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'b174a4fb077cac5c660eb3c5ec4ab6ca4748c671', class: "fd-legend__row-title --day-use" }, h("span", { key: '82418d7ac2b8d1a30f4f9d08fc3ac0f5cce9b296' }, "Day use"), h("div", { key: 'a493207360099491b8dc0cd79e0699eb28b40ae1', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '6f8bcb7aac47dbd9101dd3f894b00a02c3ee2547', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: '043f539d5eccde3a7774f6e8f283fd030eb3ca4d' }), h("h5", { key: 'f95d82a949f8d953d1f62b47c57c4f2cfdd5afe3', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'e6a7fba27ec5f0718bf44157117ec693a858f384' }), h("div", { key: 'cc48f69571a3450b27cf70081d6c0361ed27b7a4' }, h("div", { key: '41356e10c4348a877c51a7a06dc4cf1aa6052ef2', class: "legendCalendar" }, h("div", { key: 'dbfe40cba14572aab7b20a98e3a393a9c72cc072', class: "legendRow align-items-center" }, h("div", { key: 'a4529c23a82ce29c98505627c9bbe999bcfa3f6b', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '5f4047b26c7f8e7cbd24c22c776728df6699afc8' }, "MAR 2022")), h("div", { key: 'fddfe680833bccc4cb1d10e93e7a772d27a3b3d0', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'a29dc7aec9a85889d131dac5ef8ac27de22f07a0', class: "legendRow" }, h("div", { key: 'b9f3f09d2f25d2aaff8e01645b4a6d999ed965f5', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '347b0c3ddbb70d1b3012dab00e6ff81638aa8981', pill: true }, "3")), h("div", { key: 'a85a4f5542dbcde515021348effd410a4f314f25', class: "hyphenLegend" }, h("div", { key: '6c1cf57857991b744b452e60860e5a1ea4c592e3' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '2865128df934037962640ef9a39dc1a4a1a777e9', class: "legendRow" }, h("div", { key: '992526b974be1d7e12cac248b528ac896c8eb3bf', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '74f9b604f301fc6b17cbcbb6fb8aa23b2c5b517e', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '32dcf29800665ebbd71e90629ff6176126dc239f', class: "legendRow" }, h("div", { key: '1213968b5270992cff4612eddedd92f6aa19b245', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '5a313aea6e6b9c9163dbc3d465c4424df27c6574', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '12ac7f6524ddc740151b1f077b7c545f4993224a', class: "legendRow" }, h("div", { key: '4bc9dc0501abf118c0f058d0e24cc651cd0ce3fd', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '3c5046e4e9eef7080700655f481d1efc02fde3ac', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
