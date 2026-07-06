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
        return (h(Host, { key: '780135f1459a6eb2dee696049d6eed74ba47dceb', class: "legendContainer text-left" }, h("div", { key: '5ba92a2d3088637e581d75bbd4da8350b061b1fa', class: "fd-legend__header" }, h("h2", { key: '215fd13978489da8f38e522e1709dc6f94b50dd6', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '2ec1a6ddde76e6e02d6f21da3cd639e34e499b05', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'b6c8267257d069dc1076060594f40560ef7203a2', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'ffbd1cccfa105f166fddea58842c2f43b5605706', class: "fd-legend__body" }, h("div", { key: '514bf48b67b6518fc2ee50a18f8ad3b97ac2593b' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'b2e29b347e93611e88d3dd0e805d18a4be11ba06', class: "fd-legend__row" }, h("div", { key: '1ff9220bcfa6e6ee14affb49282d3fcdf00fb17e', class: 'fd-legend__shape' }, h("wa-icon", { key: 'd7439d4b7095f215f268a4b332388edc2bfcb7c9', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '678382a7045e4956f3132f13df43f80bc36e2dda', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '96187788e98386873ebb1dcb66a3788794bc9164' }), h("h5", { key: 'd5f5824b3b23c272d4e265726fcf4db26fdb7a9e', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '8636a04dd666f03321b2625b8b50c22cfab24865' }), h("div", { key: '2d24f61b64e7dfd17a90313c546784150b82e949' }, h("div", { key: 'a7e97ac7efafeb83f5da2c4fea2dd2db33f1e3bb', class: "legendCalendar" }, h("div", { key: '39f0713d3697a0a46ca4eac7cbc202286a0f88e1', class: "legendRow align-items-center" }, h("div", { key: '0946c6b4beee8c53dd9255f9f3cf0e8442f42c08', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'ab915bd54ed5fd8fb8cdf6c11f967ae1253ef783' }, "MAR 2022")), h("div", { key: '6cc813d1316bfac16b587a288fde7361c504db24', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '3f4929d9939b7f5b66bae9c5e133dbef7af4564c', class: "legendRow" }, h("div", { key: '0b9ae6cfb2973672ae3400cdc1211ee55492c40c', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '8fe12f55cc54d7c785d2d81874527ff29f354ca8', pill: true }, "3")), h("div", { key: '41d4f518266554ef66d2e856246708c6b5ab92df', class: "hyphenLegend" }, h("div", { key: 'a68d3650d9bf23b1f3334b085f2f41ec05efb959' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '8871c3e6da133e5e4e2a4fc117345c20a6efde21', class: "legendRow" }, h("div", { key: '5aa84f04b8cfb65afa4acda655e1aad1ba6091d0', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '2116c573b9838d7616236d5a0ec56970ac6b99a2', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '411c776f00161ea6ed21d0b43ed58d3deed3915c', class: "legendRow" }, h("div", { key: '2a04cf36a87a7974260500eb30ff3c69ebf12a65', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '6ea8dfbc1151d04375ef38ffd1eb0570aac40333', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ce6a5f848ec5086576db9ca7bc4cb62a2f1f2fe5', class: "legendRow" }, h("div", { key: '7d253b64e66e3b9ac7cff77b30979d75f81da6a0', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '5a52a7865fb2abe30484f5f307032bf329f63229', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
