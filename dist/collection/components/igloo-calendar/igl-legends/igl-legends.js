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
        return (h(Host, { key: '76b6fb40ac969430a892f907ebfb70e044713645', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '18680a5d8970191e286315c9d53f73b3a6ecc3b4', class: 'w-full' }, h("div", { key: '21903beaf5f9709965c073d167972e55fa8a2ef9', class: 'w-full' }, h("div", { key: '7cbbad2b85b2c3763dea523a93ae8bc47f79cd3b', class: "stickyHeader pt-1 " }, h("p", { key: '1625651ba1b1d8fa5311f10b4c45645cb4f910ed', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '1c23b62b6ddc508f26fd41b23efc4f2c640139d0', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '69a976ab3dd5ff3c3be9f9fd818c34f3cdc9f3b3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'babbe88c00e20c9a69755169e6a8d26c821d98b1', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '0b2becd3200243b42a153755fa4a1e6a262ff7fe' })), h("div", { key: 'ce0f948413067ec3edaf1f7b0add579740b8ec95', class: "mt-2 pl-1" }, h("table", { key: 'b3625798f78e2eba1b20b0396437e249b140c39d' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'eba235268cd345404c6151b2adee32f87d7a638c' }, h("td", { key: 'b89d8bf740939151d059fd7678dddd988132d0bb', colSpan: 2 }, h("hr", { key: '0153fa7d140dd7f3c013504caff6142e5fc94740', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '08cb6c9c223a489fb46c758ed8c5cf0f86643b9e' }, h("th", { key: '0de62a974c9f821c6cbf01fcf7b98ea67d9f613d', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '8190e19f4d25f72906e5e08598f394a1da1bdfcd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'd719da7d9d3e09fa2d9a179ac231c2ffea600281' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '838f0464bcc07433dc80e467f80166795c634ef8' }, h("td", { key: '7934c21ce0350885700d030acc2bff06888575b8', colSpan: 2 }, h("hr", { key: '323d7a4a7f6313137cad1d838931d646957c9bcc', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '3c88604fc8eaaeac8aaa38fdc382587983a3ae31' }, h("th", { key: '96eef958160b902010934705e135f05764dd655d', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '53664688107a07adad9616fdfaea7b2f822e2e35', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'f22bf02d108d34517ee0cfa24f0084d1def8666b' }, "Use your own colors"), h("ir-new-badge", { key: '4e41bd2b2e5a0729e3d09c877724b0028f4d3c1f' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: 'ead019db7d0e48fac0d9773eb8c39f73831c2c74', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '31339821a281f44b29ab0a64e395c39ba9fba0ae', class: "mt-1" }, h("div", { key: '25cddc7427e7e718d5f0e8060709dd35d92c9b12', class: "legendCalendar" }, h("div", { key: 'e83a8400f60757c05e3b36162cd539f016770f9b', class: "legendRow align-items-center" }, h("div", { key: '319b8bbe8b3f6ba69225653c91b962752206c5dd', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '9ad1e2eb79507cb51c0708397db289d4eaab04c7' }, "MAR 2022")), h("div", { key: 'f0ec280d293b069e7a26bf6d90ea4555db33bc0f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '702c515ad0cdcd80471ddd50cbed085f9aed3a76', class: "legendRow" }, h("div", { key: 'efdd703bec24afdce744d02972f22c04638ec489', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '13fb083c142511e1ff8a5bd2ef356f3be2a00123', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '9aeb386da5b1acb40526898c973e4a0feb0ab838', class: "highphenLegend" }, h("div", { key: '9af85a256994080619ae3ccc2822e4a7c42ecc99' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '499bf2c3c6f4a29f793da45f55a6d910a89c4003', class: "legendRow" }, h("div", { key: '73055fbabfee12c55377b37e97fc28ce7a2af673', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '561166814e7c09e7d0443b2e0be02c45a95f6df8', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '1789e72dd03fc3c575b4bbffd29372554e8a6f6f', class: "legendRow" }, h("div", { key: 'bcf9ce73183490532bf37ef347380f2c3af583d7', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '3f4d903a6ae755a5df7060b510010e435b48ac41', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ca668b94a94f797d9664885c07c8df5ab7a62eb9', class: "legendRow" }, h("div", { key: 'cff70fcc953766c4beb7192d7858c3c0fafe8f6a', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'e5db9ca4eab87d4ee49f751f54139d6c997943e6', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
