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
        return (h(Host, { key: 'd3d6701dce7865b7d2e06749855d054d52eb4931', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'f50f8e8c5948ac85b40b9edda9f84701d22c1896', class: 'w-full' }, h("div", { key: 'b03413193d2d4fb43c59550bfcad6ed1e7e858b2', class: 'w-full' }, h("div", { key: '9badc04946ae6dd6dca29a17ab24c3459209982b', class: "stickyHeader pt-1 " }, h("p", { key: '090988cc87d44cdad015a04cc91cbea5da852bdd', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '273dbd8c179363506548f33f840fbca5e6204b79', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'bc45f7e309930d87fada6e2ed2965806198280d3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'c69b96b04ec66944a82d7a1a3b0f0b4319529157', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'd12150b5c5c56bf6e5e77f11d64524e3b7d5744d' })), h("div", { key: '812cbbc12d02707750e73c363251a2bdb7ee4f91', class: "mt-2 pl-1" }, h("table", { key: '9aed1736dbeb3515a34e4fd488fde92ee8fe88bb' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '0729e37621fb132d5283bcd77591bf357d9852b0' }, h("td", { key: '4640e93f58da0a4a8c31b6c8d47dafcc965823fe', colSpan: 2 }, h("hr", { key: 'e2decd6bc9848233b2b8091a791e88de1785e129', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '1e91134f235aff2279cf1d7b763468c43d0380af' }, h("th", { key: '1f8dcf31a5c9362bd3d83c4b0849806ed2e61b78', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'f03adc6812282f17fba749102ee8b5056470294a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '0edf71e569af6459d1ca92e959fd78bd5bfc34f6' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'aec4155b4099609e5a9af52cf96486a49fbb84ea' }, h("td", { key: 'daec0fed089fff28ad70a9b274b86fc5dc383fe1', colSpan: 2 }, h("hr", { key: '20a2abdd9e0a8cd15818c8e60f3575f3bb0ff541', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '17dffacf2144632458761bca0f309b816f9c82f5' }, h("th", { key: '76e4ee02d82715c335940b66f8ddf62f81132bba', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '83f865abdae764f08da0cc7f3bafe56c6e2a27be', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'bb9534bfc3a0a519fa91c852a98ad4ca750c1c32' }, "Use your own colors"), h("ir-new-badge", { key: '16b658db6f1fbca2d1bdcbfad94d46d201b38049' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '8ed8ccba3f72410104b4c31b7f37a4c487ad190d', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'a35061c506e195eadfa32b86fee3efc90e20759d', class: "mt-1" }, h("div", { key: '9cc588e36c65517a9ba2afbce0557c4d268ea7d0', class: "legendCalendar" }, h("div", { key: 'e73be192f0c052a8c136b5cb08fd9a92a7860507', class: "legendRow align-items-center" }, h("div", { key: 'af1b2a3f538282dd0ec165e8f8be3a6c1729863a', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '68eeaa26122c2ab6c441f949e86435325ad36a57' }, "MAR 2022")), h("div", { key: '1661ae4546bf191178ef7568db18b6e867087a76', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '4f505299472a9a1ab24f4a26a8c479b5ae027dbe', class: "legendRow" }, h("div", { key: '6ff12bca859e04e30728e7833068c95b38d30b2a', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '6b0b299f18263d3ac77190d53c5bb85fdd7d0429', pill: true }, "3")), h("div", { key: 'bfa7d38d9216b8206ee508ece75ddc022c08acf0', class: "highphenLegend" }, h("div", { key: '9b2ab7fe325b1e37f70aa2b59ad0574b287ad006' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '9d8b93e152e29a386aba46ee5af89cc5dd4da5dd', class: "legendRow" }, h("div", { key: '0dea60f1c33c5a4c24fe38402f614630d1ea6bbe', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '7f248459a52a01d55cabfffd87a20536698d893c', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '73b445809d0787ce74f435c54429d479c9e016dc', class: "legendRow" }, h("div", { key: '9c1a9b53a4d48eb1a95033bb2cccfbf810a7a8d5', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'df28d6dc02d52fad779e9b5a72f6722ce0ae5254', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '728c41a4bdb9d0441eca9b98959949bcdf64115e', class: "legendRow" }, h("div", { key: 'f56ae9d4d85b321cbe3c01088070a527f86afe5a', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'e81c80f94f132dcac730914c330c65c824db8956', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
