import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    optionEvent;
    legendData;
    propertyService = new PropertyService();
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
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
    render() {
        return (h(Host, { key: '376686df1590c2bc6cee71fbccb951e81c7d4d02', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '544b2ebdf226b8eae9117167084ad8fd354a86bc', class: 'w-full' }, h("div", { key: '03155075937096b6dffad2c0f557b78d9476ae90', class: 'w-full' }, h("div", { key: '17b7cebad1b34d5a05de2a8e1970869982f571cc', class: "stickyHeader pt-1 " }, h("p", { key: 'c9e75170184c475e1e0eced1e69d69ed2d7ff4c9', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'f79d71818bb2b51c559b54b473ee4052487cc59a', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '3815edd8c20af316eb34e7e59cbc4577678ba5b2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b7d7c0ad1209e72ecb65df2e5e383c5f89d4d4e6', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'a449d6f817ebe030aebfa11401de789d5bccb141' })), h("div", { key: 'cd9724d736786e06b35ce129858ffe717fe26732', class: "mt-2 pl-1" }, h("table", { key: 'd4d44853f92718947a43829303d78eaf6c333f86' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '0d3981bfd9cdc2c520fedacb5c71b56242fd5bec' }, h("td", { key: '08762afebf76d85e8123c6e758c4c2e6d8a2f86d', colSpan: 2 }, h("hr", { key: 'dfe7efc159e9011cc56b60eec9c913bd6d87d625', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '6eda2a9333e307d5fcb165ab92da551dc1317199' }, h("th", { key: '53d9981929908d5fc94717157814b1d5fc38fbd2', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '7ab670de37d2cd08bccfc9a574054e46bcb645d5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '09361edde4fd059abf8807ad3d18d088b9ffdcb0' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '4943068397f449db2b58092c9e4784880bda5097' }, h("td", { key: '94e95390fc12236d4452dddee4b25a5e4d25591f', colSpan: 2 }, h("hr", { key: '5e22d9ff010fdbe50698bb234640abc00ab93d6a', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '4a819ab6d8c938b1be8f75b2351ed94d7e4c6526' }, h("th", { key: 'f09699afc6fdb75bbbb56d29709864dbcc6667c1', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '6b521fb5faecfb2b4155e7239e1d06067239eae6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'de5a126bb71ca7ca8096313a8d45e746b7bf2e35' }, "Use your own colors"), h("ir-new-badge", { key: '2e5004d8c72800ec0a9792e2c3455c9f182e39bf' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: 'c90d0d77f5759414f5fc2af0a74a15bed5ba8178', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '03b9e2fac9fe09ac6a3537e398f6acbc5e4cbd29', class: "mt-1" }, h("div", { key: '49191fe8180080f37abc81e1ee9583f740c5ec0c', class: "legendCalendar" }, h("div", { key: '91fbf1af4a1c4d16247aedd2b82cdbf39931b554', class: "legendRow align-items-center" }, h("div", { key: '81a675ba3f7e1e372059f46f3953e6c027400727', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'ecd7676778e35780e45eb4feaa18dca4f1259b18' }, "MAR 2022")), h("div", { key: '9d03028e4d87361ffa624113880ed8468eabbb5d', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'fcc1db522c110d28a14eaa66d8acc8a4c54a3ce9', class: "legendRow" }, h("div", { key: '0f2c32be3529ebecb24e7865d2e897cd2034852a', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '8fdeb1c2d16eb930959c32be6fbb619d6af5de91', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '181863812f85d5f813f2c9b6bcaebd0f6342a2b8', class: "highphenLegend" }, h("div", { key: '015342ad8d95464accabc979da008bc6b80e641a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '91584f31a5816f44f5c7998ebe8692a6e963d577', class: "legendRow" }, h("div", { key: 'c1d80aab7144d119014db3c842595a13fb0a29b1', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'e9a497de76cc6bbaebadd3cc48e99a12cf67873c', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '1f10e2a271cd76d4ff8446b7a9998400d437ed11', class: "legendRow" }, h("div", { key: 'fdf90668b4613318addb0365e20951e97154c311', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'a13221012c54e9e13149a8772fdb4140c3875d7e', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '3f02899d18abff73e25f723a8d4d185d4cf7850b', class: "legendRow" }, h("div", { key: '526e05c9c782e9c244f476731bc2693bfb6c624c', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '0adb1a9d8034ad9b5371a953fed15c28c0cd78ae', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
