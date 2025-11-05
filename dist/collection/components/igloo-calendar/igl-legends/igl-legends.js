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
        return (h(Host, { key: '7993e5d784c6664e89051f3181acd63b5493df21', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'dc9348002b82a690f0a968eac5b1f15ae652a825', class: 'w-full' }, h("div", { key: '7cb6efdaaab206c60dd3c1a01b3f2243b2e0743b', class: 'w-full' }, h("div", { key: 'bdee4778906c952dbd88c140ca37f6e7dfacc7d1', class: "stickyHeader pt-1 " }, h("p", { key: '62f80f4bb330c4ab715b531209b05c5bd96e887b', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'c68b410aa1870d91638e2e24f436453273349f48', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '10a2e7ae45f96e165ea6053fdf6d515a11f1813a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cb79d15821c2bc329553fe47dc1754986e9e6d6e', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '6ca44508c19b4bb2b26313c049046121ac8aea41' })), h("div", { key: '43898db92b59861fa1d357a23610ec4c71988425', class: "mt-2 pl-1" }, h("table", { key: '0838e04ea6b02945b3724d5ee6e9bd44892f3acb' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '8f2ba39b9f23ab730af89b73011200793c39fd77' }, h("td", { key: '068fed0ecb17ac6af8e34e64a00887e8e5496fa6', colSpan: 2 }, h("hr", { key: 'bd096b403817d5059fc26f074996281e9af3d02b', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '7905f0955b8aef8f70e3616b57ab4f27bfb4bd71' }, h("th", { key: '764693a7a034025ae0a3898fb6390180cec16b1e', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'be846fdde2a31f10f8f1c7081ffd79cb5d3135f0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '112714c9937ff62b8f8b648af49bae2e05599211' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'ac875c89b8d3ca23df67a6b6edd72ce18bba6ce8' }, h("td", { key: 'c4acef1c7990913425cfe38e756a2a23388633bc', colSpan: 2 }, h("hr", { key: '5b97a34c2e5e9bb51d2fde292a33fc5fb09032c5', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '9d9f5a840fa44bbc1aec28cff346ca7454af7fd0' }, h("th", { key: 'ed037c0970708d11c0e4501e8b501ac5c8618288', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '2b6323ef8bc5660255d51d8af69558157090acaa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '3496f90058d9dfd51d201e9e1db576b482a568a6' }, "Use your own colors"), h("ir-new-badge", { key: 'af54cee714c2f6ca30096585046f4d8b055712c5' })))), (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 :
            _a.booking_colors.map((legendInfo, index) => {
                const previewClass = `legend_${legendInfo.design}`;
                return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
            }))), h("hr", { key: '1d2bb4f591b164daf6623ff45973cfd146dd0937', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '73d07c5abc36ec73968ca8de14c30d80b14cb94f', class: "mt-1" }, h("div", { key: '7dad72b79320775db336612220ce39749017943d', class: "legendCalendar" }, h("div", { key: 'ca25780b726e77a63f3f8c1f61331b93e11da964', class: "legendRow align-items-center" }, h("div", { key: 'a1615e4c0b5d9d05aeaf60aafb393cb1ec7804eb', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '86b8a299745312c5e77f6ea8756714698cf3a863' }, "MAR 2022")), h("div", { key: '59ad10383106694737de87508b1153918ec56275', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'dc6a5f25377e6ecb30619ccee8d813f378582b11', class: "legendRow" }, h("div", { key: '9e8623cc9e360d0af8ca90b2e56163bfe7aa6fa8', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '9a58b7616445d5de111f5c058056139142e26b02', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '87e89a6b32f47d4300d15daa01a03ad56ee7f236', class: "highphenLegend" }, h("div", { key: '5f1073d707f27fedd3f9a0d06c7af23764982301' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '78d1ddb8f5ea545cccabca305dbf5cb03bb911af', class: "legendRow" }, h("div", { key: '0ffbdbd0da798912046d619328596a3eec746f53', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a10d43f8505764e5feb8ba50e69ea19d177fba37', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c9a943ddda3880c161447ad84bc79bd4bf5ccea2', class: "legendRow" }, h("div", { key: 'f95a02c1e34fb9ad98bf0ddd576922b8c9aaea9e', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '3b183c69dbbc5e800d3f0b804bd8c92d8f9d8793', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '5644122ab47fc06165cf3b025c85e2367867f14c', class: "legendRow" }, h("div", { key: '7af8ed1981f451885c4471f2cf902367f396566e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '90ef267c25f9db50c347b71404a1f0a614d0122c', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
