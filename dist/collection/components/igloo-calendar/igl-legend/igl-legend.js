import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { isRtlDirection } from "../../../utils/calendar-grid";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
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
        return (h(Host, { key: 'af4c3da874168e1558da460b85618d04c6833714', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '7980f839722669389aab0a9ad9ba781d9f3773da', class: "fd-legend__header" }, h("h2", { key: '8ad27367919928dd1aa95e3dcd474121050b3a76', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: '8cb2222ea0850d1b5fbe8080382a104286d7127c', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '1f73920115d1d711774890f0d706e76ad5572d32', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '8f00c09e5fa506162432a2227ad359dea04dfd8d', class: "fd-legend__body" }, h("div", { key: '8af45dc92838bd38f719bf9a8639dfdbb63898d1' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'd2f5d556776914d40f22601e9cb2ff78ccc5b877', class: "fd-legend__row" }, h("div", { key: 'a45f33fdbc973751aa1f256aef487704206f771f', class: 'fd-legend__shape' }, h("wa-icon", { key: 'd44bc482359ec7ecc630a3ede431664e22115790', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'bf578fe3e1e2137d71a0723261789378090f23dc', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: 'b04fb13ad42caf0426d7bc2122241d052f6d37e4', class: "fd-legend__row" }, h("div", { key: '662feefcc61aa1166d30553a6fc23c1372e40770', class: 'fd-legend__shape' }, h("div", { key: 'df9725ad0cece4ce693f96ed637675b2f4c2c4ec', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'f9377969bb7de8d1a38addf22a7bf357159bf092', class: "fd-legend__row-title --day-use" }, h("span", { key: '2ca4d4ed8258fb37f41375282669091bb90616db' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: '5179a36a46e5e30e9c4613d5fe6270c457c214a5', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '59d4e8b37151c241444b2f9205950d0b7573e081', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'a4bbece263166348f4a03852dd6419c1a9563698' }), h("h5", { key: 'a51cde8f6064adf1cee898e94dd0c3f134fd2f89', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'a73120aea8c32485884d3459436205210526130f' }), h("div", { key: 'f11ca962e5ed4b42035dd799a104b705946a6f41' }, h("div", { key: '24b10b683410ffc78ad0fdef886c4b97056f5486', class: "legendCalendar" }, h("div", { key: '85b5fca0028c268e3e493dbe016a18675bbad138', class: "legendRow" }, h("div", { key: '8567ab5a83fbcd390cc4ef90d85bd2e06f40295e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'daed43564694c48fb529b0aad3c24028ddc1de34' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: '2e56ad9a6d8150c08a0d6fead20f84d94674800a', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: '4a63bd14e8157af9f93f5d41c146c0b329c4cb52', class: "legendRow" }, h("div", { key: 'd1c5f96e92129dafbd26d23f6093e2c24864d064', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '046fd0248a88eca80cd40783e2d6ce8ee653e185', pill: true }, "3")), h("div", { key: '148b664ed4592f49a5f31472b63f3ae0716c65c4', class: "hyphenLegend" }, h("div", { key: 'e86df4e77414de52b195585d3f8fc90959aaa128' }, t('Lcz_UnassignedUnits')))), h("div", { key: 'bf8908b43f55b80764fb12354ea858510912f9b9', class: "legendRow" }, h("div", { key: 'facea1bbff9280138d4f422437f13eb9012655db', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: 'e123aa8f5ad7767a3b79dc26f70a7b2e73ac8bc7', class: "hyphenLegend" }, t('Lcz_DateLabel', { fallback: 'Date' }))), h("div", { key: '3c3899d5c792eb602ea2eb047c1a8c7f67dd4210', class: "legendRow" }, h("div", { key: 'ae718e3da58ddba969b5f4f3e48a87f7e4d51de6', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '8b1b4738d9182a60e69b082eb322a4f9bea6d3df', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: 'f46eb5c9f89656d29aa74903079d8a616df56e3c', class: "legendRow" }, h("div", { key: '8ad963e3d2aeb73d5e3f70c11bd7513bf1bab410', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: '7050a93f8510f904fdb270e9fd9effb84602647a', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
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
