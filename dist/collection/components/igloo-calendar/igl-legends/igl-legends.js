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
        return (h(Host, { key: 'b221d5aa9bbecd63d7c2aa1dc5781d1baf4fe1c9', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'eecc604755458faefeabb64fbbd10076d87271c8', class: 'w-full' }, h("div", { key: '41ff46162296112e1dcb8a85d49faf5ab2b8775c', class: 'w-full' }, h("div", { key: '10e0815928650aab51bc54b622e085e474716878', class: "stickyHeader pt-1 " }, h("p", { key: 'e0c8155bcc4c3af0226c405dd3f0f60663bcf8d8', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '150d1207d1ee9aac2fde1a440287f8ddfa161cec', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '926d39e6108403eaa17541a70c77c1f28ea63e4a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '06a2a3748eb129e282d8a112c2700746f6945069', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '0aecf1152e12240074b1e7f0d83f84c7b128ac13' })), h("div", { key: '634e597c6392e58ac0668ca28b85584e8dd8dc3c', class: "mt-2 pl-1" }, h("table", { key: 'f8a7adc09d1941403be9edbad2653efd7c5bd17f' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '445503d6a6e783783627e12fc7c3b8123983abdd' }, h("td", { key: '8581aab247cf1b557bd6f6f64dd2959c6e28070f', colSpan: 2 }, h("hr", { key: '64ed1aceb93f55b6a1aede58a372be62dbe46f8e', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'f7a95acb8b0fa1652b22faef719985a93b3bd4d2' }, h("th", { key: '2f160091156725a4e694f49d5bf8a7b25fbcce8a', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'e3faa2156e8eb85f89d0a9043060363a22e46658', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'b99dedbaa029b18aef074cc8a5d295e8057710c5' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '1a3480acee72db066232f2c5ed1134d3efa6c0fc' }, h("td", { key: 'e3bbc0406eb15c1e3db0824ed50bd41c1da0e18f', colSpan: 2 }, h("hr", { key: '499bee4bf9ffd6903181dc660a1946c7e40bd58c', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'b9efe2337ac3abe2dde70d01859fac819be24138' }, h("th", { key: '7a8333573465a55a9a5e959b80092ae32bc8ac44', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '2fde2e47d575e8870e08f4744d823f2fe0efe6e6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'bc12b6ef0c4c9cc4467fc185da67836ec23173cb' }, "Use your own colors"), h("ir-new-badge", { key: '3f58d479e738a7c134338c449d4aab4d166527e5' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '4a4247fd9026b74c5de4237928d5ff7b43c986d0', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '827fa1aa783a17d5dfeeb8127813d91e15760d0d', class: "mt-1" }, h("div", { key: '072a57ef4c255e7c33012024a75f01a01066d363', class: "legendCalendar" }, h("div", { key: '949807328565a44dddd0e9937a89cfcd9bcaeb3d', class: "legendRow align-items-center" }, h("div", { key: '42f5ab519177b26db8011417ac30a82243c05a9c', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'f0a78b764cd30e854a3cb8a639f9d92537899df3' }, "MAR 2022")), h("div", { key: 'c77b445b891724cbfba5cca30d3339d220d3fc9b', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'ab95562f9568c45e9648a74b4be2040b35b017aa', class: "legendRow" }, h("div", { key: 'd436ff979b77981b72a25337cb92280a7739a070', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '669145a3c2adda3941eac6815a844f357ff8de22', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'cc299eeee3bfe822f4b3b89aa064ce9ee93b7d6f', class: "highphenLegend" }, h("div", { key: '987d9aadaaabdee3320b4fce980c1259d332e8e8' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '8dc76345ffd7404877f16984523d1132e1e5a6bb', class: "legendRow" }, h("div", { key: 'ae0a1257ff1e7001bb5b71c3bad13c1e97b8727d', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '77c92e1352ca5b373578e72f652cc62fe3d6f1f3', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '39c78a30d7adf6f5e1b5df98c350074b4e28c216', class: "legendRow" }, h("div", { key: '088fc14652743f0778df9bbddb41bcac7861ccf4', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '2ee67c6572cd1e6e52ad25fd2d6dc2bf5ec75296', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '1d0de49047c4dc507c4d01a60e3b3abfe71e218e', class: "legendRow" }, h("div", { key: '57bebbab9c48f00ce89c0c02c762cc44dba63b79', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'e8198ff4665fa3277cb62c1cf6cd9126ffef5ae9', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
