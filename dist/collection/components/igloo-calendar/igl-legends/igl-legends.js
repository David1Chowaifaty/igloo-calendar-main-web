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
        return (h(Host, { key: '1b6865a0ae76d3a4b8a73af527ba9e2696f31799', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'ed07b12a3e38690111945bca5393f8c2674e5645', class: 'w-full' }, h("div", { key: '7a50f1d05bfc616128b4c5cb0e58bd4fe2541a31', class: 'w-full' }, h("div", { key: 'dec63fb17502571bffe62b07a5eb12464217413d', class: "stickyHeader pt-1 " }, h("p", { key: '121f0afa52a5ae5cf5d7d0ae2ca015d8d8358bcc', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'cdde01f5477bb1f2dc177698068de47b6f6b61e9', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '5420154ea0ac19dfeeb530580340624623469b9a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '4694793ada5cc855f2f8be0410690dcb2c5a7116', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '81e499f9c68031db48c25a46695ec29b4d84d676' })), h("div", { key: 'fd5e82decc9df81aa6445572779a99048140eebb', class: "mt-2 pl-1" }, h("table", { key: '1f95a7667bd9033c129283204c904273b122b6a5' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'e84d584c2f4aa219204c77a94d6a71f3a9c07891' }, h("td", { key: 'a2fb1c0acb6b93773d89314390b8336843e73ac1', colSpan: 2 }, h("hr", { key: 'd183a5c8c40c98bbb08064089b91c0c51bc82f5d', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'a23493de7c60e7e68182f5ce93d99f9954992dc1' }, h("th", { key: 'df872625c7d7c3a3bdbd25ca8d3e76668df771e2', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '91c1284778c3c2b043dc17cbf447fcd56e4565fa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'f7dfab226647c5499c997d45654734324958f7d2' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '29e2428b7538b8f3e5fb75e86cb55801eee40c38' }, h("td", { key: '9e0ff1f00010fc7d454a9fc7a8fe29afb00ab04b', colSpan: 2 }, h("hr", { key: '7825f1bac264c6ca5d94a0dce10960372a63fa5f', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '4beb10189dfc446deafec506e94fb82acfa20ffc' }, h("th", { key: '4b09ea583d0234af73c95754f93be583a482bc85', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '9e826a1d95ed98b9aacf2ed5e90f69f77e46e5d6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '44de6b306bba4c28a0b010e6c0d228f729919ffc' }, "Use your own colors"), h("ir-new-badge", { key: '4082f957957070e2e04d5725ab8ba9183d0ef631' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: 'f2a8d9bec43337b87fcd02ba2dc35550f8531c6e', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'aff630e7067cd3deb4e8bee80eab9ce4f3320a12', class: "mt-1" }, h("div", { key: 'f92154e4839dc55086efb1f0cdc0985d222b7a14', class: "legendCalendar" }, h("div", { key: '94e7d102bdfdc90d70e612e6dca66411f8b53fa2', class: "legendRow align-items-center" }, h("div", { key: 'e1c9da585acc405964f2128d653fef82ed5ae05e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'e30a43fbb7ce1d126359d515d5e5f3698b906bd0' }, "MAR 2022")), h("div", { key: '4fe02b0bc0253bee87a37cf84b6476be85c01d69', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '25f3361f8e3da722f25edc7eff996de140157e9d', class: "legendRow" }, h("div", { key: '7c4a126ea8a2030d8f02751c686987fa459800ad', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '192b19bc3c43ff7a176d5235965c93b430bf711e', pill: true }, "3")), h("div", { key: 'bc4509535bd3e909763dc5062ba650e16529645e', class: "highphenLegend" }, h("div", { key: '3aef294881d725be40b244dd9decdb6c5237de19' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'b805196f3777ca58e15a2ea6f28e79475330fc64', class: "legendRow" }, h("div", { key: '8b8073aa08175545fcdd7f3f9085a483d95a3eab', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'f78ec6dac8f6305fef99450c54302c86fc7399a1', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '1122d2174bdcb2b15254ef53ff056623b3b189d3', class: "legendRow" }, h("div", { key: 'c1f895197cf3edb74c9422a862f32a67088247cf', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '65419d1b9dc24cb146a0c7db792f9dbb64da7fff', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '16fdfe1c7d9767bbf0083990fe1e46f94de99985', class: "legendRow" }, h("div", { key: 'a12323fe2a46eff1cc1d8a91247df30ec80775da', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'a42cb2b14012a730aa1ae77baa4fa62f576e8fb6', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
