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
        return (h(Host, { key: '6226fd521925e701be553f21920e2b2390d790ba', class: "legendContainer text-left" }, h("div", { key: '6936f21d08bb1435e4d8219d27216427040dd029', class: "fd-legend__header" }, h("h2", { key: 'd6683d69897cf3f0aec8de5433d851df4a2938b0', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: 'c9ca2e0e01e2b28fff92353a5c9110cd703e4e18', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '1568f9dc3ab6d20a421e34a33c681d3038430d7c', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: 'a848c29e516a855d611a3783adc89e06348b2d1a', class: "fd-legend__body" }, h("div", { key: '922022d304176ce98ecf55fccde2f2ae0028dcda' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '6d270614d2dd67844f895c4d8d50d63da8d1004d', class: "fd-legend__row" }, h("div", { key: 'deb160cf5b72a6ee24d9fdf6301ad13fa0fe6091', class: 'fd-legend__shape' }, h("wa-icon", { key: 'ff97bae62f40027dbf82abfd0ccaa8c34a1a4d9c', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '844c2b0992ed32fb270f2cb7dc68134102de7c40', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '2b415b1603db4a75b4398a19f10172d1f2ce0fc5' }), h("h5", { key: 'bb9b15b383e57900ecc5137e483b6c38080fe57e', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '1d06e259408d371425d036cab75efbc080ffce8a' }), h("div", { key: 'e2c3670762d6f7b9b013cf5bf49fbc8555aa4f17' }, h("div", { key: '2cc7f88d4ddfec79a79c3c9a252d98dc05d339d0', class: "legendCalendar" }, h("div", { key: 'ab0e25005a953b91c7268f813afb789567d8edbc', class: "legendRow align-items-center" }, h("div", { key: 'ed70a27862ed9282c44542ebd5d9ad44632122e8', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'b38df8102adfa2876997e38ff03f7ce973390a2a' }, "MAR 2022")), h("div", { key: '6018035dc85aa67447f94a2aae155cd3ef88c358', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '5b26e18890f141df76dddc04bb40d9842ee8d779', class: "legendRow" }, h("div", { key: '04780f74db799da3417da12c529f617c5b426b80', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '3152699804ba8855369eb73c34219b98c1e693bf', pill: true }, "3")), h("div", { key: 'ab0116e0d585769d16b6730ef761295df2cbf5b6', class: "hyphenLegend" }, h("div", { key: '5e575407f5b12afe62259e6607d306c66233d02f' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '78d862c838d2c1e355eae7cc83a2441bf6a99d99', class: "legendRow" }, h("div", { key: 'c855c8d3aa0cee62b901e9e3e1c8cf2742cada83', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ce4e2daf2b3e83ffa7e111e3ea157b0b96d262dd', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'cbf5b4bb3f88ce4bb35ea297fc37e2d24ce1ef50', class: "legendRow" }, h("div", { key: '62879edff8e72daf1d7d7e9cdb6a86cae4be5a1f', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '51161ab00a9543105934281a0c045075f6167921', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ba2a5f1210ffa985b1f13379d97d9fd68879b5f6', class: "legendRow" }, h("div", { key: 'd34493286810e246f20a769c63f35b099ad28e73', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4438f533a2e2108fb306010e523c874c7f7b9f72', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
//# sourceMappingURL=igl-legend.js.map
