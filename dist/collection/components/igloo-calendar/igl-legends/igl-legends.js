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
        return (h(Host, { key: 'e959f19c741d44726843d557aac348263a543e49', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '9f860d89fc3d0e1aee9d680f82812debf4e66f91', class: 'w-full' }, h("div", { key: '99170b7c935295cda2028765cc408ddd4e914dc8', class: 'w-full' }, h("div", { key: '272c129b799e8c74a0a5ec686d94ac839285b15f', class: "stickyHeader pt-1 " }, h("p", { key: 'b9b3aae2b0775231d46f5876de5552124ac6001f', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'd0d3f2ef2bec4a3ba60784dfc7c959cae56f5c99', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '0dfcdd9962a40c07b3644147978311595bd30bc6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1cc9ec1b3f6f6753927e543df7bc6ff59e1db1d1', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '77ee8f155d9006fbba3b15ae56b294fdc66a1ad7' })), h("div", { key: '571931ccbcb759da292cf2beda3b76d8aeabef04', class: "mt-2 pl-1" }, h("table", { key: '6317d1ce466bad541ff53e16d383479b0caaabf2' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '94b0c700c8ab49bda7c210637c183f3c69042d3c' }, h("td", { key: 'd5e2d5a04a9eb209f68e04d5dd66968fe97c7697', colSpan: 2 }, h("hr", { key: '56f3ff5c740fe38e4b288dc3c017ee707e5f1776', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '27d11700291668d95a331fde6b15887ffad096d2' }, h("th", { key: 'd537b071ba9f54d268a3a8b01d2496dc487e6d48', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '4023bbed4485d891fd0274ca5e8060bed4ecaf90', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '040e664721ada43c58aac0980f298c88d4eda292' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'bf1fd76c7169a0b89b2734507efe158f109fe9b4' }, h("td", { key: 'f98cb8308d032dac92ecb885261fd6b4450f8357', colSpan: 2 }, h("hr", { key: '96033c4758944162d8c9f67142e8c6d6eea93195', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '49e25a93402716ad9ec7e3b19c103d0e8f4f40b7' }, h("th", { key: '73f74c9d12c98f724e9d3be91c5ec8773a69af54', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: 'b0a747c2740121f0529f0352c2725e4bd9578423', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '37dd23bef531eb44109ff91628ce6c09e99f241a' }, "Use your own colors"), h("ir-new-badge", { key: '0359d83c9cfb4be372f6b69079ded345b20f497e' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '2659fdb5015d21cdea18216feab3861ed1317811', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'e169ad73353ef82ee427ac241fadceb1fa2db1b5', class: "mt-1" }, h("div", { key: '0eeb013e94499ca6e117d5cb45d6dc34dfdfe36f', class: "legendCalendar" }, h("div", { key: '309f884b63d00fe834644dea969c8f264cfa0733', class: "legendRow align-items-center" }, h("div", { key: 'a5e730680fb00c767a758d921e82b754f31bd290', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'a807ef41c379c4763d970a5fc759e9f873e91de0' }, "MAR 2022")), h("div", { key: 'acbdeb8a248efa074135af72d84eaed14497c5a9', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '04a083f6f2452de2176bf4dfa700655d8139dae6', class: "legendRow" }, h("div", { key: '4782f8bf9bb5066bcf4453ca248d71ec9a5aef44', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'd758dbdfdce31f58534b42312a9eca4d455e4ae8', pill: true }, "3")), h("div", { key: '7f819328af5c257949e9e6ced28dbdf71b52a4a7', class: "highphenLegend" }, h("div", { key: 'ff75871b4b6a75d37219bea36bc9e4115f947ae4' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '1b82fba723f381139d3e3e90001c645b57dd478f', class: "legendRow" }, h("div", { key: 'f66682401c2005f193b56a25b04368e41b0e829f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '7a6c92019afaa7288c75904ae1c4899caaeab24a', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'a563bcd43e82a93850a7197625988a17df5e3b6f', class: "legendRow" }, h("div", { key: 'f4ee71564d522ed696d89df7859c854f8afb2059', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'eea52a075c543721608c16ff63c214ef3c2c17c5', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '8d3a56c10a84419db210495d22bb1ec5f2f90536', class: "legendRow" }, h("div", { key: '588e46c5589db31e3038694aaf58bf1f07c5302d', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8000857f524bfe33106fca91a23583aa62bef6bd', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
