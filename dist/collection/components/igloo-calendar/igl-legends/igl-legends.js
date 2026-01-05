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
            if (['2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name, " ", legendInfo.id === '1' && '(unit cell in blue)')))));
        }), h("tr", { key: '0582083c21d484938c4880a9e66fe404cf10f53c' }, h("td", { key: '17174ed91ff84dd20d3577fc75fb1f9d167ac513', colSpan: 2 }, h("hr", { key: '294bfd89a2301497969d130a3f07df0d23792675', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '3c4b86f2eb77287a8e01801bb8eb64ec70441389' }, h("th", { key: 'd7237a7b5ce229f98f38a565635d61cc58e1535b', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'c4299c39c08ccd2980c917853499038fc98904d5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '76fd8eb89206153e5859900951f3184922754fb3' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, "data-id": legendInfo.id, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '3' ? 'pending' : ''}  ${['7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '68df53d3a7cd6f2b485397b2e311eee0890e8323' }, h("td", { key: 'd52e23f94e240dad5046ad0a913651dac7a558e7', colSpan: 2 }, h("hr", { key: 'f6a44eb7b40bd536287cf269712398a37748a443', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '040f79a98574409669c4ecca1b18093016902da8' }, h("th", { key: '54e413ed3e9a74bf4967c23c67cc3f6b361b0644', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '706c14a9cd493410f6ae9fb4e89960a29cda89f4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '77c32c5f48746a5fbd1045065d3935aa3ebe0c22' }, "Use your own colors"), h("ir-new-badge", { key: '91042bf3ecf72a9819e4b9b700ee997fab43561d' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '68f2ae227865467a7417c1fba3cd28ab822a2887', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '5984ef0632acd4dc59f56fd858d63876cfb88ed8', class: "mt-1" }, h("div", { key: '51d91cec9c88a9d847a7e9e94cea6e1e13d90eae', class: "legendCalendar" }, h("div", { key: '01a6a898af1db5c0e7b27c4bbc2fb09428efd146', class: "legendRow align-items-center" }, h("div", { key: 'c0b7aa63f9f3deb6a9d7d200388a3f592e574470', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'b9e13be2772d9a2790b1c8d8a5da22582ce0d610' }, "MAR 2022")), h("div", { key: 'bb1edf3df0bfc0ef433f6023f511269ecca62557', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '524a3f0c068ec8c99d49621b370758f903c85038', class: "legendRow" }, h("div", { key: 'dfea0780632133d96c02e0459a995b0521d80668', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'd4743b3d1e639222586f4af5d1469420c5e1ff97', pill: true }, "3")), h("div", { key: 'b6a8b2354011a494279a72b786d6c8dc40008c9e', class: "highphenLegend" }, h("div", { key: '4f47544ba07fddc7db374892053d73167aef9770' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '6a19ef29199f8d66300af0bcb5b384ab943d85a1', class: "legendRow" }, h("div", { key: '27fc94eb063432527d06b7863f91d41a11f633f3', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'e94d1b53babe1b93f5eb295a3779d8a556f70fde', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '99a985c237c4f42f86b059255721093a4a2ea868', class: "legendRow" }, h("div", { key: 'bb19605abccd4bfa3bc789c8a45092de77d4cae2', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'e51cbcd2374e996216261531622771aef97c769a', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '07a9b32559f9489864ed0bde9919f36a043293af', class: "legendRow" }, h("div", { key: 'ac4f7edd2e8d50e559d753805ce81fca3306d056', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '2d1bae22b6adb8f6fa02668102184cbcb898f322', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
