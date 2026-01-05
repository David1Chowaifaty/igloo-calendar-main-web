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
        return (h(Host, { key: '52aaf154fac060695cd49e48c6f6a34c62453f89', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'dbf3ce3d83be1755152aa98c5f0e70775893b545', class: 'w-full' }, h("div", { key: '1e28750bde359d5bbf25902685b91421d81fa4e4', class: 'w-full' }, h("div", { key: 'c3e9d73b1defdcefc7e0767f44e340bda7b3931a', class: "stickyHeader pt-1 " }, h("p", { key: 'afb5e72e6b0f95ae4cfedde50148963517e343d0', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'a8fd37dfa4222ea91c9d6f74aa8454262105c8f1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '1cab9dd42dfa5328980f91de793c2aed0b3779d6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'bf035aa5e288bbf0c00ea554b182d41f4007feb0', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '952588255a384c01275debf2f521c919ec89900f' })), h("div", { key: '64520d3af751818a9db086c08a5b9250ab5ce34e', class: "mt-2 pl-1" }, h("table", { key: 'c558b7b76880353ac808166888c824071dc4e3c6' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'c3bf7b3f1fc9f0d4ebcd4e2864f30c5e90fe2063' }, h("td", { key: '4d0c5473be8b86e6baa1a6bdcdb8baa0a2e1b237', colSpan: 2 }, h("hr", { key: 'ff8c4de7cb7057076d631643c93b955853fee594', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '298453f660a4c403842c7e9683cc7f831ab6577d' }, h("th", { key: '3c758e6cd295deb73183ab39f358a9c02626567d', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '4071be39a9a3349b0f039caa61d08ed76012e92c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '2fbe2df1de6bb869bb66e45538b416c35d1d1acf' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, "data-id": legendInfo.id, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && 'Unit'))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'e65d39528d2362c2d559f91be7158679d8628870' }, h("td", { key: '64cf2583b9ad7090c06e555d517b3b67c908d89d', colSpan: 2 }, h("hr", { key: 'f1982794ea97f1bd85f003ab8b85dc80795b9326', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '00ff99fe9798d70d2fd51fb70c2a795c9080a9d6' }, h("th", { key: '0fc4fbfcc12385909e24151fe409ce7ecb14f137', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: 'b74af680dc0e4e6b5684a6c6c582a4d61ab432a6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '09eade47cfc08eb617228e90c53c9739a0297cd7' }, "Use your own colors"), h("ir-new-badge", { key: '6fc20266be3faa96c9407b26e7ac04951d30fdba' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '9d75de15256add98ccbbfe7be9b6585dd70a8298', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '9000395220a19caff0dc23ecaf1b720f94413071', class: "mt-1" }, h("div", { key: '9188daff3aa91f3b28ff5725b500125a04732c40', class: "legendCalendar" }, h("div", { key: '223f3eae209b1a30cb2123d7ccf2e20e3823f1af', class: "legendRow align-items-center" }, h("div", { key: '6cab430757b725aeae95e7131d8a5d5b20b7930b', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '01b9f0d865c5a0d7460175cccf5d366fda99bfc3' }, "MAR 2022")), h("div", { key: 'be7760f860f8dcb0da7b1d7806ceb426d345f81e', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '661be2233d918e7d16b2f03c726e4ff446f0fac1', class: "legendRow" }, h("div", { key: '1ce81024e8494f89e08b26d7a83dc4a06aec50f1', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '2927da8884c31398d1e6784e2bc239d3f58f62d9', pill: true }, "3")), h("div", { key: 'c2e0d6dbd10d39f1e663b4b060f0f877f7759abb', class: "highphenLegend" }, h("div", { key: '0a1d46b87c330ae1d7168f0db895392311943613' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '00cfdf45b053da8bf298fcaf84fc6e581714c6c4', class: "legendRow" }, h("div", { key: '56f4efee245eef10102721aec34b42b036841c1c', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ef907af576c2ba4ca2873a4af6c13a1e3c52f98b', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '2cddfa7d024694e53270aabfe484797eab1a0103', class: "legendRow" }, h("div", { key: '8bba8103e2fe1fbc2cc4066d7f8fde4d9477496d', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '7e14c08d74893c27c008c712eb20b3b881258af2', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '6ebec210cb6ca65e4829a401ca0e5941c3714361', class: "legendRow" }, h("div", { key: '0cb1d22a12a3a5dd136fa9b2a738930f94af4a7e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f57097caa81abb57fe7a980c73e8abe8172cf1d7', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
