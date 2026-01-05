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
        return (h(Host, { key: 'd8160cee4663c926b325c037f7df057ecefefe63', class: "legendContainer text-left" }, h("div", { key: '3e500d30a4524bf06dca552c08a56646b63ca955', class: "fd-legend__header" }, h("h2", { key: 'ded844035dc43ca6e24465b267921b0fc13bf805', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '83f0b1e02785cdb05b76c5a762c7011cd08de4a5', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '7b9911b6b0beb213957d4122201e5149423216ec', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '3477cc8fd0522f67fc6c45236cbe4a0d49a42f1e', class: "fd-legend__body" }, h("div", { key: '7f5368291fc3c073d64efb1f0eb5209195ccd935' }, h("table", { key: '0d17491cd4e17a81d57dd795dbae7d72380094b5', style: { width: '100%' } }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name, " ", legendInfo.id === '1' && '(unit cell in blue)')))));
        }), h("tr", { key: 'bf4117e612a745409b0b4c58c6f264e6688d4dbb' }, h("td", { key: '8b36f71dd4ae4ffed80776f81cbc72320c7d6beb', colSpan: 2 }, h("wa-divider", { key: '020d107809bf3f8b528522edf2ed63a4e93361bb' }))), h("tr", { key: '912d687101d112adf7903641d3c670229067da53' }, h("th", { key: 'b45b77a5bbf91c180184b27f38a91d760ada9b5f', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '39957a0bdcc412efd572db5101d7e865dca951cc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'e17d1355612c080746beccda9a65d365eb4c27a4' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, "data-id": legendInfo.id, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '3' ? 'pending' : ''}  ${['7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '83fcb5d9598178d439d06d24a96350bf18ddc8a5' }, h("td", { key: '02c13927c32f25aee4ce9b9773cc6c90735245c7', colSpan: 2 }, h("wa-divider", { key: 'e0e11508d1b47696c83f85acc6e120e955eac701' }))), h("tr", { key: '8dead626bd8407286872844007dd693090aa081a' }, h("th", { key: '07581ef2fc834810f7cf29dd33d1848ad00f7dbd', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '04d1cb9fdf49f325553e13f9e383f724e05aa91a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'b68f1ef89798dd7b33ab741e55f12e8bae476210' }, "Use your own colors"), h("ir-new-badge", { key: '181db87c422b2d8bb7ecb82e472c31cf1b34076c' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("wa-divider", { key: 'b59af8a7096ca857a93d20dfd52f59ff7b294f46' }), h("div", { key: '1ac6605bb89438566506ef592fe488dc5760e73d' }, h("div", { key: '510eaad47ebcce06f276f337366a41b1e9870efd', class: "legendCalendar" }, h("div", { key: '7fe4ec7ba206343f0de19246a229c128866ceee1', class: "legendRow align-items-center" }, h("div", { key: 'a9cb4d12324d5579c3f6e9fb9788865d66bf5b08', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'b32f5ae3459211235ad561e9a0fb4055c4a1f83a' }, "MAR 2022")), h("div", { key: 'd4cb00fe4bf1f70cfd9dc5d1a09846c9d9c2703f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '88593fca8f92e6cd133a6034eefba96a06821c5d', class: "legendRow" }, h("div", { key: '012668f34cb698d74ad6265669215d7c19d0866b', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '6c4ffca75266680ce8fdb5302922c045fa7fbbbc', pill: true }, "3")), h("div", { key: 'df00f1727722c0d542c5067c54f091ce03818b10', class: "highphenLegend" }, h("div", { key: '33fb5982ec6e0d09d062a2ef40f5e2fdf631a513' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '4053efda1c8715ea2c30396b73a1044d6a7de82e', class: "legendRow" }, h("div", { key: '35350918326ef0006eb18916f2231a7d35b78cad', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ef4fed0875f6153c012ff07c4b0fca6f66f37cb8', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'ac8f64248f61980c525dd810d47ae72a64341a99', class: "legendRow" }, h("div", { key: '43a44ff6dc67809dd502789906c06c3616def871', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '972dfac6847fc104e5318442c2091707d71d1342', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'e43c3b12089302e407929e7125af97b30421353f', class: "legendRow" }, h("div", { key: '7e62dc1ef8abff6da802d82dbb5dea6a70a62f06', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '6b35f3bc53952ce67796c51c6b252463eed75541', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
