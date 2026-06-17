import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegend {
    legendData;
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    optionEvent;
    propertyService = new PropertyService();
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
    updateLegend() {
        let newLegendArray = [...calendar_data.property.calendar_legends];
        //step 1: replace scheduled cleaning index 12 with dirty now index 11;
        let dirtyNow = newLegendArray[11];
        newLegendArray[11] = newLegendArray[12];
        newLegendArray[12] = dirtyNow;
        //step 2: move index 13 to index 7 and push the other 1 index lower;
        const splitBooking = newLegendArray[13];
        newLegendArray = newLegendArray.filter((_, i) => i !== 13);
        newLegendArray.splice(7, 0, splitBooking);
        return newLegendArray;
    }
    render() {
        const legend = this.updateLegend();
        return (h(Host, { key: '8e0e2489d74f4975206a9e8959bd6a5bf92f5c1e', class: "legendContainer text-left" }, h("div", { key: 'b1766410c8fc68353a1c5e7644936d83295678e6', class: "fd-legend__header" }, h("h2", { key: '1780dc452e9b89aed2d9604df0f9566147dac829', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '50afc9594ce06e56cbfb5458e8924ba8f0f0eb04', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'cb0c7a8f14a28bc4ace435b1241dad86b0485a42', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'fc6677148c6275e0e7a6d5d09970a9a1341c8992', class: "fd-legend__body" }, h("div", { key: 'af095071fe2df579503ab7670c9dc956dc2d7154' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '8e533ab22a071b93fc90d99d6ffce65a123d4801', class: "fd-legend__row" }, h("div", { key: '84f954893364ef921ae37a1065f4d11fdc52eac7', class: 'fd-legend__shape' }, h("wa-icon", { key: '0b0c4a6f419ebf6e9fb739867f16353b772a11f0', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '5316c7f9c89a9c453bc159f862f0deaaabff40bf', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '01c5bb9f82fe2908adddb75c502e2052b6c9ca54' }), h("h5", { key: '518e11637e6e75e4242b3780aed24f3bf7304a70', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '0bc9155f3baddf33ffe9ca8fb465bd28da9a1f11' }), h("div", { key: '2612e3f0cf76098b04bbc9e2e19e29796039f4b9' }, h("div", { key: 'ada1728dc475d6bdc190d6a6b55190bfd3449a79', class: "legendCalendar" }, h("div", { key: '9a9d040e6b7c94b2b25241cafae95e95d247491e', class: "legendRow align-items-center" }, h("div", { key: '65247ac48342cf03e0328f402817b8ac5d5685c5', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '572d67057529108efd52170df8072c2f5e420855' }, "MAR 2022")), h("div", { key: 'c99650c58d2a28b3061c496e785d208c81d4248e', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '81bf3cae31393dc2469d30189275981b8d0860ee', class: "legendRow" }, h("div", { key: '6fe11090e835bed97fd2e3a4041504ea4eb935eb', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '1ac441888310df56f8a68e882ecda1255fb09262', pill: true }, "3")), h("div", { key: '1d097d2b5b42ca1839e6e7904f6cc5145cfbb7b9', class: "hyphenLegend" }, h("div", { key: 'f5f03805a016eb36ce72cd53a82863b45c463f0b' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '8382328a32c16cd56a1cd9dd31b39d8be89d3baa', class: "legendRow" }, h("div", { key: 'd68d36b98320c737b9f78c24cdf57ad042509e79', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '05ee2faf2746c8b77f246b7b10618e89e4b7fffe', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '3b8dda4cf432e037010b1fbfdd970c8e0a341a74', class: "legendRow" }, h("div", { key: '82ce58fc936d019f96283769264ebf4d16419e21', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '7061b5cccecdecf03918922c7d90e485734c847a', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'a7877d9c302747deda1e5236586fd7b7630a018d', class: "legendRow" }, h("div", { key: '0f1d4a09d4d8d01c59bfc4ac6680234d34016bb3', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '6979fbadfd6c200143581a928bde7f8dfc6bf679', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
    }
    static get is() { return "igl-legend"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legend.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legend.css"]
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
