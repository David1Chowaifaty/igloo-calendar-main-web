import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    constructor() {
        this.propertyService = new PropertyService();
        this.bookingColors = [];
        this.saveState = 'idle';
        this.loadingIndex = [];
    }
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
        var _a;
        const calendarExtra = (_a = calendar_data.property.calendar_extra) !== null && _a !== void 0 ? _a : {};
        calendar_data.property.calendar_extra = Object.assign(Object.assign({}, calendarExtra), { booking_colors: colors.map(color => (Object.assign({}, color))) });
    }
    get propertyId() {
        var _a, _b, _c;
        return (_c = (_b = (_a = calendar_data.property) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : calendar_data.property.id) !== null && _c !== void 0 ? _c : null;
    }
    updateBookingColor(index, patch) {
        var _a;
        const bookingColors = (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 : _a.booking_colors.map((color, idx) => (idx === index ? Object.assign(Object.assign({}, color), patch) : color));
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
    render() {
        var _a;
        return (h(Host, { key: '9b996e8ff9ba05ed97615d5cc2602ca96b4fe761', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'c87d55a6ae831358e524a4e4f15e4cdf819d50d4', class: 'w-full' }, h("div", { key: '570ba0b48f6c92acb8199c10d0b08f801eb0a4c0', class: 'w-full' }, h("div", { key: 'ff4cfd84bb2dc142753783a263f16c9649d02d53', class: "stickyHeader pt-1 " }, h("p", { key: '8a85aa5cb81d6a4634760a0620927ae9ff9624b7', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'aea53f302387293f0d2c68d950a7732ac5f9a087', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '7b08bf8d45698890db3f5db7ac3ce0a65f210ddf', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd4879a416ddc3747b02bfa4e3d47a927821f4ab8', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'f066e048dfa3bc36bc8adf2de4880d8c7b868e6e' })), h("div", { key: 'a65e736a2101c1575871b9ba01afea639d17449c', class: "mt-2 pl-1" }, h("table", { key: '844b2a67924a91d84c528c9cd950ca5a6e6ed603' }, this.legendData.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }), h("tr", { key: 'b9d73e9bb6c006d7fca2d7c79856aaabf90076d8' }, h("td", { key: 'c54e2ba2cefed933edf3ff11f0631ec0db42b911', colSpan: 2 }, h("hr", { key: '499c2e53fb5d2ffb9622269c72115924c72d6a3e' }))), h("tr", { key: '9f1f5254e021aa7f8d94cdf697eb9b88c6ab34d3' }, h("th", { key: '19ee7da5ded6280f096de2b0c85d5bb795f1b3da', colSpan: 2, class: "pb-1" }, "Use your own colors")), (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 :
            _a.booking_colors.map((legendInfo, index) => {
                const previewClass = `legend_${legendInfo.design}`;
                return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
            }))), h("hr", { key: '8b5f949988fcb42700b7e3f80eef07571a376ba7' }), h("div", { key: 'fc6821792e6b790bdac5a97699e15267fccd6b3a', class: "mt-2" }, h("div", { key: '1c9f1bae29accaf60593a6ce7a4ae73886308ac9', class: "legendCalendar" }, h("div", { key: '9362c6d2157dbb21273a74200b79f56a65f2e075', class: "legendRow align-items-center" }, h("div", { key: '22c02acd3ff5641d4e58d911ac383c5346ad9065', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '7415efd6fa3492381abe7e6741ea8c02f8d0059f' }, "MAR 2022")), h("div", { key: '3540ddf1426fc650efa70b68a3ce06f4f164d3c6', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '3ec2b4d71a80b4c3a47a8ef8ccca4ee5b75ea007', class: "legendRow" }, h("div", { key: '9cf78c4aa24b1e5c8d55acbce13ff7f4245e4a9c', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '2072218221207463c2a6724722ca8f4132a0a557', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '38286a05f19e1facd3cfa3efeeaffc512b881b2e', class: "highphenLegend" }, h("div", { key: '53cdee9a638e601a5f906a6c7a65c4d521fdc90f' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '01ae7a7790dcba1e371482287c7d43ed82e4d9ee', class: "legendRow" }, h("div", { key: 'b00086f1cbc5a504ca4049edb8a70173648ba43f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ac1b016fc4529c883cba00b11874230894f69bd0', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '883622aed03a25f4eec070e3c72983ed288c503f', class: "legendRow" }, h("div", { key: '6c1e28d6fc6f5a310237642a6f562b77dc7b6f0f', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'bd8bcb6cdeacdb4184d658fce20d581e3721bc85', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '6f3448f38267d1de1f1e24d3610540c915c73cbe', class: "legendRow" }, h("div", { key: '68a1d9354574f132f4835e60a714ce47850ea6a3', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '985af6a7532ab101cc3760b510ce85773c5c1884', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
    static get is() { return "igl-legends"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legends.css"]
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
//# sourceMappingURL=igl-legends.js.map
