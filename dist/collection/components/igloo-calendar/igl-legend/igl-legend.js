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
        return (h(Host, { key: '97b45794095fc098e27c8eff86250d7b84057413', class: "legendContainer text-left" }, h("div", { key: '16ac9826ee2c850619a39e5b64e0d4ff8bf8bd72', class: "fd-legend__header" }, h("h2", { key: 'bbb8523252ce92e43342c6b0a767140c2c234ec4', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '695d91406ca1345efcdae09dbee677043cea0344', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '5c079ef1285bff78e3f850f5802606f31ae0cbbe', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'a4940e2229481e951905c2328c01ac7b739b73a1', class: "fd-legend__body" }, h("div", { key: '8676113b2892d16e33ec8336acdd8aac4ffa658e' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'c58de69b3a5b1ac56744c358a78cb8add56f2dec', class: "fd-legend__row" }, h("div", { key: '6d35d3b52533597bbff4371f3f866945f2e1692a', class: 'fd-legend__shape' }, h("wa-icon", { key: '5aae4d38c84139ac348dcb5aa54e4b5aa5454617', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '3f71926be81cd060e86661e51c918ff389cf24c3', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '141478c4faf12ad97a1cdf1f1342504abbf86d22' }), h("h5", { key: '8dd06f777249b528f06c7cb987df0c019cf2ae2f', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '905d0bbb4b5e91de519c8487804fe228a4c14e1c' }), h("div", { key: '6e20714ce41e03c58abd72dfe54f4d31489caf64' }, h("div", { key: '56a85a5c68f33753881a1d6fdeeaf7e7503d4aff', class: "legendCalendar" }, h("div", { key: '7764166fa76b39f5d89a699eb2b5f9d2f65b8093', class: "legendRow align-items-center" }, h("div", { key: '786db2293b4e111f7837aa6ed121e96a25ab1ba7', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'c3f388a2c522e4d0b425c6b1f2870d47825178d5' }, "MAR 2022")), h("div", { key: '0c7cce338a38140eda19f711df9d4967773ddcf5', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'aabcea4c9c34843a9f4490069b6e47ce91687e9e', class: "legendRow" }, h("div", { key: '6ca3f672f8870a26600ea94bcd1d187b90798b1d', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'ca41b1dd20f76b667ff94aa0cbbebe7ede25e948', pill: true }, "3")), h("div", { key: '8dd12f39ff42b869f9ee8cd97c014230336e68f8', class: "hyphenLegend" }, h("div", { key: 'd8216e0bc6f70801e0c5352c1e60ff5dfbf725c1' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'b0734f90a79e415acd8a180aacc68e60dd66dea6', class: "legendRow" }, h("div", { key: 'a395b427a7612e776c1225e62988242f8b491d23', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ef2b48be6c6a33412d65d2c7700522fec552279e', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'acef25da2a30b0eb7100c9a590cc853128ffe89f', class: "legendRow" }, h("div", { key: '13ff997599dd20a49b728b65236349a494e51f2a', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '8d314a2f5bb9bd8c9b85748e0349354b2fe46fe6', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '1e44ce44519b40115683a0b414eed772be851705', class: "legendRow" }, h("div", { key: 'c6706b8d69897e8339993bdade5b17569a797bde', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '9b7ae709742d4de1fb9f8698073f108570efbca5', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
