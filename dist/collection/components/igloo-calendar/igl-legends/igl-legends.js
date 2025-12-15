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
        return (h(Host, { key: '9cf08accc83bff908b4965ebaf6a8713800f760d', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '3c0877be0bd118c5413fb15d95ffd28e7a30ac18', class: 'w-full' }, h("div", { key: '31f6f822b409526aff1388caead4f8596a4f4cf7', class: 'w-full' }, h("div", { key: '0996a11de0189708549806c8c00c7580b794b1c5', class: "stickyHeader pt-1 " }, h("p", { key: 'a5a0cccb80da9fe85391497d4dffeeddeba30f0f', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '5cc19e818f498860926d5b8c3c364af23d2f36c9', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '44779f43e97abd3265a9abc8fc6131164b256759', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0d3c18628a0267725a8c4971b6b1e3362fa9205b', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '16ba305c25196e5a484c4548d51c3a11a18217d8' })), h("div", { key: '8f77f7e4998157709c82c46e6d8f35d46c080de2', class: "mt-2 pl-1" }, h("table", { key: '041c11323668fbbb8b1b6cf792e9101e7c094342' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'ddc8775802ee204a9d26c87a6687d9c3f17885c3' }, h("td", { key: 'c017a25222ee48657ffa3e5276bdead447a5ab72', colSpan: 2 }, h("hr", { key: '676e35ce01473f328410ce2ffcd73afd66c61f29', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '003d91b975aa6b097b2a9081ac459d84d7c9cee4' }, h("th", { key: '95e5117c1cc6d9c46600a01b92806b596de71ef6', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '5193e7ca7230f6d5469eb03fd0d9f8129910a2e5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '61b42c74ad05afa3e9d5c5c04f5049da2b19eee7' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '130acc14eaf130ad16ba593f833af841bbdfb7f8' }, h("td", { key: 'ba8dafb6538578e8ae8c01c024dc1dbb405dde00', colSpan: 2 }, h("hr", { key: 'c9d2970d7457ed6f4a98876a6c24b97e71065930', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'f906b92a0169669218ee67106aea0b86e9d4442a' }, h("th", { key: '87ebf75fe8290b27a6bcece1f9fcbe9da4c2c207', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '2b0987545f6dce5c579d375f973dfeb699e45965', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'a8659bfce77634eafc5607f80e6998b7d1dac5b5' }, "Use your own colors"), h("ir-new-badge", { key: 'd27221083a9e9d016a2c82a3b036ac19eca3c1f1' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: 'ce7ac60937fd7cc86ea305ef26455bdb231bb43f', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'f007fc872ca7eb7b53918065c82e0be44762d0f8', class: "mt-1" }, h("div", { key: '78dabcaebdb08fa85e9bb95349d144598a50233d', class: "legendCalendar" }, h("div", { key: 'bb0ec9cb60d59b755d031a2c268394b81f7398fd', class: "legendRow align-items-center" }, h("div", { key: 'bd73b4245f4f1cf79c395a0eb0cddf14a7255d0c', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'f446d438f3f9c17953e29443ab661681765936b9' }, "MAR 2022")), h("div", { key: '2e25b38f957cc2fcce9b23c087feb865a6d15b39', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'd422177de9e2d6b3f726e2d5d2d07f8c0c846e43', class: "legendRow" }, h("div", { key: 'f0dc81103b8c3dd95a0ecd8d642d50e79f5c1a54', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '2b50e79dcd6968abb2ee20eb84da41b1796bc143', pill: true }, "3")), h("div", { key: 'd3ed0d07c647f544f81ebc7281c916522ea407b2', class: "highphenLegend" }, h("div", { key: '58f71fa0af5c9f447c717fed96114eaf84b66d80' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '9d8968917cf7fd9773a4b3e8922d47c9e5440358', class: "legendRow" }, h("div", { key: '31b0ab8249589980832af5063bb5b560a3975d3f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '2d5c565d105e140d13abcf9e11338cb7957df0ef', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '60e5e71fc422743e5b4468c520d1037389462610', class: "legendRow" }, h("div", { key: 'ba0e1653a9c95d118684df0b85ef90f60b15773a', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '0284622daff2523abad120c0198a16cf94e1844a', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'b2a59344348b013e9855e53c0925a12d6bff7125', class: "legendRow" }, h("div", { key: 'ab9bb845f4fe6131463e0587c4e1dc09300b0f87', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8eb4c89b4931188b594df3a2563372453c998687', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
