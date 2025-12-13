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
        return (h(Host, { key: 'a1738055a62aad4d774a8bba8aead690997574fb', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'c8799863440f6bcc577c36e9f7aa25331699243e', class: 'w-full' }, h("div", { key: '110dab4acbe3aac110a15855e1cf8054e4a51f06', class: 'w-full' }, h("div", { key: '34644c1db7ceda47f7accd30b83833bec1a1c6d7', class: "stickyHeader pt-1 " }, h("p", { key: '36858acf2d4f0e80c285353397e064898a0ee846', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'b64681317f9698d6adbec0d30b78d202a9d522e1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '708e8f22462a6fef7d8515ac324eaf88e15f2d4a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7f329396f2c7e9241af6d7404248aba8c114b3f7', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '570e8271e88be597912296c9b77f9fac3e18ff7b' })), h("div", { key: '0ab8968cc43604d8a8c468627fbd2bf9371478b0', class: "mt-2 pl-1" }, h("table", { key: 'a1fe78b0a42ada031db23bebd2c8eb0f8d72a4e9' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '600802bf96d660b1311c325c5ececfcd44812b8f' }, h("td", { key: '5aa0c4c5786ab9ee1a9b2980f61c732f0ec9c5d1', colSpan: 2 }, h("hr", { key: 'a3db6e4af9708786c2636be5104290812b0437d6', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'c25e9f22913c55abdd5efb888a6c0b478f17c531' }, h("th", { key: 'ef97fc2fffa2b952f9438dc455472c440051135e', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '517e28c9aecb1d3714ce2b178768f35c600c6faa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '95d5cf6f5184388f805433855e95912fedeaa3d4' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'd44fefd508197d791b18f75235f7a8d317bdbcb2' }, h("td", { key: 'a3b5af837d57044da057ddf40e7d96edf4470ff9', colSpan: 2 }, h("hr", { key: 'b915b6f747b78d2ad7139135bbb3f6881354be0d', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '6b6d1ff7907d0cd5a0b897750607002fa7f19931' }, h("th", { key: '0a939078f2710348ee7e8ed51a7aa9a975998568', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: 'c501108c63089a918d44a273ced3840c0d0867e5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '7cd4a524c1c6d008521643a15a482209205f3471' }, "Use your own colors"), h("ir-new-badge", { key: '3ebb141e7b310a3d7ce7b4bc57174f82f90191e7' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '4d6b74577d8b07aa4e23b1bf035a88789e645273', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'c08b5e7cf3a760913b3d9adbe95179551ff28fb4', class: "mt-1" }, h("div", { key: 'b231f51ad63d57db0adde44345f593f4b55f50d4', class: "legendCalendar" }, h("div", { key: '0200c988fc4913e89dabfa10924781eb24635569', class: "legendRow align-items-center" }, h("div", { key: '3870c466b9e227674a4406ff8874c8cbd024f16a', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'decde60570e85ab5212bb752b9d00d0fce622c5e' }, "MAR 2022")), h("div", { key: '7cbdf59a37413821654dae9b8b1e39274b728bfb', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '6a59e617e6add6521f5ce308d1d07f758a7a7bed', class: "legendRow" }, h("div", { key: '4899007968c60672b606cb90f76c79f0ff9ae1e3', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '906888dd0b18608cb6113f122ab36e3719801a2e', pill: true }, "3")), h("div", { key: '804878562a5a2008c6f0fa7ef968de41ae50dfde', class: "highphenLegend" }, h("div", { key: 'cd1a988bf3deefa4feb0eb56ddc3ba84ceb009c6' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '7f9540678f51ffb0dc23ff8e603cda7983c723c6', class: "legendRow" }, h("div", { key: '6f7457a995d98990ae5446094eeb1165b7c237f2', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '3886312ef50215369e706d8507956e67212fc6f0', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'fefe51cdecd24bfd820c31eec51547c8e043949a', class: "legendRow" }, h("div", { key: '01ebd7d03f60404d513ba4edb854432e006e2759', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '08ce0f92dc6a4d0fea6f1e809195ce5efc9915d5', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'abf15f3f107616e1f77f994c1d66ae76b94e6f1b', class: "legendRow" }, h("div", { key: '60d099bdfda2921c70b3ddda46c8a680771a3366', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '9ee011963b9d6c7caefaef4fe7e3a8fc8d542aa9', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
