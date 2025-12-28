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
        return (h(Host, { key: '19c1054c5e9f46b0037cb41c40f03331daf122c7', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'ca72b957335e1285ac9f79600cf65fbf48f0d0e3', class: 'w-full' }, h("div", { key: '240bf4eb56cadcc004311723ecddce9d77960a0d', class: 'w-full' }, h("div", { key: '349fa5c6bb5e6ef11a54bba569c34f033c0aa336', class: "stickyHeader pt-1 " }, h("p", { key: '4225bc078ae8fe8fdaefac957f29f8edd934f253', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '79e9c47804676177ad0e96c2e812e3100720de9a', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'd92cf76ebd4321824300ad20fb8e0d101e6128a0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a894084113937333b66c43c6687cfac14968b143', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '29964e969e0cac5f752a2bec484786abbfbec8e7' })), h("div", { key: 'fb15077d5fe242ec3d41a84a51994c5dc71d326b', class: "mt-2 pl-1" }, h("table", { key: '0eebba84f6b756455dc293ab6d4c189d5e884e3c' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '8a57705c980b2ebd5b98799b41c5b5ae7806d9b5' }, h("td", { key: '2bdd48b667e801bdc1699452c870daafb4aa21cd', colSpan: 2 }, h("hr", { key: '5361ddd2b4515b6fe24658d697865d0e384f3f30', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'cfb92afbf4a7dd25d34ee43fbe93845580250cb3' }, h("th", { key: '6c8610704f84ed74a470394eb79965d2422ce488', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'a2bd0bab666697cb18b3ce2bb1a7b9f67bde1c48', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '8370c3677706b0a4767fcf96ecb5b5179dd5e3a0' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '7a42309ace395cc8a1e5e419e519cfb3c6d6ccd1' }, h("td", { key: 'c70755b6afb72a9b0ca9a997fb022d069a42aa9a', colSpan: 2 }, h("hr", { key: '55d440ea407427e16407d48fc59a6a144ccbff1e', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '511555b30432b4a97cd5cf5fabd5ec45b00eaae8' }, h("th", { key: 'f4c90b837631264e0255bfc67ce4690764abab46', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '644d004942a76afc5b697edac0013d86731944c2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '1c74963c061b36b6a07ace85b0bad872e3e06088' }, "Use your own colors"), h("ir-new-badge", { key: '287c01908de9a320ea1a7ecb45cf0db70a8d6447' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '8dbbef9fb5927cee0ac96cfdedbcfc8791f6e7c7', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '1658e927c712f1e7921d88310625319374a9c396', class: "mt-1" }, h("div", { key: '30443344e63a8848bf64f56bdf23200d5d00bfe4', class: "legendCalendar" }, h("div", { key: 'aecf0f9cb0164bc0cf1ad27fac19d6861796d0f0', class: "legendRow align-items-center" }, h("div", { key: 'f929a56eccda141a0390d47b8874af06fa2223d2', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'f88acc91433e9e48d234f62bce989de75e66a22e' }, "MAR 2022")), h("div", { key: 'f5df832ce089d9d34141a7d3c778bc341cc95864', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'd0c684f26bbd9887301dec78e0c1e48fd5b87bb0', class: "legendRow" }, h("div", { key: '88bdcdf1c7a4279f0048b08a8044773b19d480ad', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '67617ac7b9719b107c12d4eb29a7ed35c9921a7c', pill: true }, "3")), h("div", { key: '39b89f7a37228b3f98ba50cabdb811dd17327853', class: "highphenLegend" }, h("div", { key: 'b7119ea954338646d5ac7fa2d4f8b3d642082e3d' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '774246d6a436320cce7234b7a5a0c1db6597bf7b', class: "legendRow" }, h("div", { key: '85f5652b0d8c6d29b8b62fb6ab50ddfdbc0a4994', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '6fa1e828c4c61e11b10d62fde0f63bce77f2f4b3', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '3152043cd54db61a47d9a8f2589e31d09a21cb7e', class: "legendRow" }, h("div", { key: '6ecb1fcabffa7d91f4b92bc709c0c1cbff0a33b1', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '1faa46979989fdcb95360761b5573894cbc80027', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '4d7cfc6efeba3f254e6d2a105484a491b2f056c5', class: "legendRow" }, h("div", { key: 'be8aa7761463ed9054a0cc62417d8de4ace8f4c8', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '1ef3435607f36a29b1c6763dbc537345bc70bc8f', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
