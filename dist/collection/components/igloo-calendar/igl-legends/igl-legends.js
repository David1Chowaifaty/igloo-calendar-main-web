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
        return (h(Host, { key: '0daa70df64ff5c8b155cd0951c35479c8ef2da74', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'e929b40c51a50b7dafe4c9cc110a14311f3d91e9', class: 'w-full' }, h("div", { key: 'bcbb20c29de2d5f725ff2297c7ca5e767af24941', class: 'w-full' }, h("div", { key: '9cd6fcd52e5e8d327f1c5707fd22eecbf5f02f9d', class: "stickyHeader pt-1 " }, h("p", { key: '837def5e0c6235933d6fd2cdc8afd4782e7b962a', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '2f16f33143030e034932faa8ba969fcf31ff436a', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '03c4b8d31718b1a25e3660b56d6c3eae016c61b7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b0fa6da38368bee3a89fefa596dd3ae52373910f', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'ad344199fc04d4c80ea9ffd5523b1672e8522448' })), h("div", { key: 'be90b151b3c6be5d52d61ba82f8de7b17be3e22a', class: "mt-2 pl-1" }, h("table", { key: '0484c278e0f169d252d687ffb5e3b170d782c1e4' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '1a7b75a186810186c8ae21a07075e249c77ad8da' }, h("td", { key: 'e2f5a94c1384be84eab6b8d7cfd7c728b6fa5189', colSpan: 2 }, h("hr", { key: '56e65df72003837895e4c2dbafa47edbcc96ed6c', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '362092fc494b1b72287604b48cd1892f85397d5a' }, h("th", { key: 'bcece465af8ce0faa825bb1bdf1ad3701cf2b6a0', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'a37c58a23eca4983212745ad0e6dc343806a4a9a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'af7f97301a30c2ba228ada8a88a54e16ae387bb1' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'e5da15c17a54067e08ed586ebec1cd9bd205d819' }, h("td", { key: 'b0f05da083249756dc760955dc3ddcd10b36f3a1', colSpan: 2 }, h("hr", { key: 'd2a4a73a8cf31d1b37a1deaec45c8559f394eb3a', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '2bcba0df50b7e83578b77933bbe675e3a0020de5' }, h("th", { key: 'cfa6e4e5de5013f14631df874e3f3bdb78d30d90', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: 'b008c96ab2351e461548819d1aa500b468319006', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'e9489ae47db0353f920d37ab8ec15a3d8c1ac623' }, "Use your own colors"), h("ir-new-badge", { key: 'fa0cbc2d101949f944734ae0da827abe2c2c6cfc' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '27cfc9f57bd658cc73e47008d82cfc3b389c6121', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '069e2a9e874746ff75299b5ef31678560e06767e', class: "mt-1" }, h("div", { key: '11f80ac1b13b9bfc5ae2575bc68dcc8c710a98f7', class: "legendCalendar" }, h("div", { key: 'c670cb47cddff5b682d633e1735753c946dca842', class: "legendRow align-items-center" }, h("div", { key: '2938154d4363fc6a673fa615004ad40adfdb2ddd', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '0b6ae93b4bcde5c8580c7c6f306e2b3849fca124' }, "MAR 2022")), h("div", { key: '24ecbd919e6cc8c582dce42028fbb3f506dbe666', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '90cc7eb1d44477e68b23f762e4792979c227ce6b', class: "legendRow" }, h("div", { key: '72b13c653e5c9cd6cb94e5a0d79613ddbbe495ad', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'd55da412492e5b7c294282faeabc8c1ef47b021d', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'b461007555debc9b117dedc9b907518073f11858', class: "highphenLegend" }, h("div", { key: 'd625de0d1f247188358a82bc883471d9148de1ce' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '89c527d09901ea6a48354d21b6a0dabb21df34b6', class: "legendRow" }, h("div", { key: '77d7d4f1511c61d7200c97bf5e1ac0db295842a4', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ae639081fbf13dc8a9a6f9e2df121f77533e2ea9', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c5841cb581a7b7ee34c80757002c2311ec8cce7a', class: "legendRow" }, h("div", { key: 'd637496982b713a225889cbb8e915f5745fce789', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'ff60d42d3e4d6d9b22243c48d3bb59d937e5e249', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '71ff4ab0762d02f15e29e1c958aaf2406a1cb820', class: "legendRow" }, h("div", { key: '1b16c3138e7148b737df52d632ac7c8342c93091', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f0ba94cf39c2451cafb3e28abd6d0b71b7c7f057', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
