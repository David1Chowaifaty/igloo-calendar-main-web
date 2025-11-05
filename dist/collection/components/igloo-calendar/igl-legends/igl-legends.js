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
        return (h(Host, { key: '2ca8415b9bff3ab7e10c62109fb9c7c064661db2', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '3299075b0d732599bda1c9ca8433eb1988fb9ef8', class: 'w-full' }, h("div", { key: 'f70df70bd6a1f71f9781860f57c40bb4c182af8e', class: 'w-full' }, h("div", { key: '6ca2a87bb8e3c0ed16edf8610779af27b5e80fff', class: "stickyHeader pt-1 " }, h("p", { key: 'ef6d461d03d3c427f987bdb3e82c3741260c04d9', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '87554b0eb4378c8684a660a69bea32b1f96b9ab1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '899a8e9ad2a32dab4906a423c5b057d4df8a7ce2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '41aa2942fe32c3a6de8aa6248867c5bf0db712a9', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '6e43083c90277f97b03bf772de13995ce3344ae6' })), h("div", { key: '07463ad10a4b9dd7f3717438c6042886f4daa996', class: "mt-2 pl-1" }, h("table", { key: '605a86001eeb5b67d2f351efe542d82841628397' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '1948b8f9d29f9f19acbaabd6f56ff56a50c501c2' }, h("td", { key: '0d5239f63da130f975b97b6850a20822e3070444', colSpan: 2 }, h("hr", { key: 'eab7c91040f1e393a61448a95f6817ef43ca0aaa', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '7b3a74d402768dc8f622c8456d819b2a3f29fed4' }, h("th", { key: '614aab0dabf683e43eb9d2fbf3e9447bd72928cd', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '83d11d321fdc7b61a655381d7101d509c6dcafc7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'd30f4c58a1d2fab783411d7665843d7b127ee378' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'c2d9f78803b568f231192495378e30afbd779653' }, h("td", { key: 'ff60bf9435dce4d8469090599eeabd2727d5dc68', colSpan: 2 }, h("hr", { key: 'a54366bb32bcee331fdbae49cce2d19da0474cca', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'e42878bcec44f8236034bf56e72d5edca8639a17' }, h("th", { key: '8637ebceba0e9c79167658463c8c44ca038c9e4b', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '39aade534832264d48de775c22b7d86102cdc024', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '6f26de437a0a0f98772894fc05a1da5743170511' }, "Use your own colors"), h("ir-new-badge", { key: '48d626f7e40a9089637e9ca2f0e8ffb26bd32c88' })))), (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 :
            _a.booking_colors.map((legendInfo, index) => {
                const previewClass = `legend_${legendInfo.design}`;
                return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
            }))), h("hr", { key: 'd84ee16ae8ce7d7a1f4fbbd776f709ab63ee6005', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'a8f8f606e7e0841544291234c798976b374ebe36', class: "mt-1" }, h("div", { key: '25c9f843de07344186145cdb468427af2a89f006', class: "legendCalendar" }, h("div", { key: 'b7aaf6c0429c9a1a573ca06d6d5add1d5b80b07f', class: "legendRow align-items-center" }, h("div", { key: '51a94b5593d399f199f7ee7bad35b97809cc56a9', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'b25728844bb0475e086aa1d145bab0e81338b2c4' }, "MAR 2022")), h("div", { key: 'fd7ad538c95398512c73711abe8d1c7545a4358e', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '42f6d0ada279f38de892648a22692171a5c3b38f', class: "legendRow" }, h("div", { key: 'aad90903c2bad9747c83c89744d1e591037341cf', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '34aa63d2063cc41226b53d9b9bac878a41f159db', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'c6bb347c0db17deecabb466c9ed324a0ffcd41f2', class: "highphenLegend" }, h("div", { key: '7cbaa182b6b6d19099019d73717a85dd41b9cb73' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '22913ecf25d347f3eed87a2447c399e09be775ca', class: "legendRow" }, h("div", { key: 'e08e8205c2dd29b956aa06db1b819a33c2941c98', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '92cd8076f273ab70240c65c40fd578575ff74a95', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c31df089649a9dcdb4a3b1aabd8edcb9c584c392', class: "legendRow" }, h("div", { key: '6385c38d7ffbe9a554f3374eac33083601bbe94e', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'bb33400e289c14087cba90a09e7b068d5f9294b6', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'f90e3e504ff3caf2255c4bf7f36f98959ae2777b', class: "legendRow" }, h("div", { key: 'ed1a01b31cd0b750ef067635294ae269f5c44605', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '35a0148b36b63175971a255317a6b351157759bd', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
