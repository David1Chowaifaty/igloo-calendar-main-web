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
        return (h(Host, { key: '4ddccb0f70315d6e908cf1a7558f6d782a0b2534', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: 'fce13c16af81e810edd6f7dea68e760f584d626d', class: "fd-legend__header" }, h("h2", { key: '6865f1f15786c629a96fc23a9dd08796068809f1', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: 'f158497d1adf803fcc732b24170c6f128e65a2e8', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '7319a48d42626862acdf7f1df4f3533356510050', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '223561d69cf5a5ef807339e8e75f87af926aa240', class: "fd-legend__body" }, h("div", { key: '8fe19a646256a45f952361fb089c26f11c52d66a' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '3c52e0720ec4602aed8b43f975a715b3601897d0', class: "fd-legend__row" }, h("div", { key: '53114d2f28e36fa74800e1d57a923b27ba35e142', class: 'fd-legend__shape' }, h("wa-icon", { key: 'f454b4723a6f6cee94d310e0bc748e73e8e0f6a6', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'c96d39cca1a033da62e4f5cc88a869649be0e2b7', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: 'e1e0948de3044cd09089f88f4df39fa8a1249933', class: "fd-legend__row" }, h("div", { key: '9a57420f701c3fd62effe93a79d1e35bb00af063', class: 'fd-legend__shape' }, h("div", { key: '0853dae78fe2b69e96a4d96baaeb1f2740a26cbe', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'd3c28de260ec320527cffbf952adfb17c877b26b', class: "fd-legend__row-title --day-use" }, h("span", { key: '0d5e7cf37832ba4892a1eef87492ec09944a3c3f' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: '274b4d231efe63a9fca3435e083ea8a01b0dd381', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '98a7395174d702b6fe7dc358f2a158d7fbce839d', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'ca6bc5e2c60df6612453c2f54d38c1fc9e853346' }), h("h5", { key: '8e934d004aa2de67056af65f2ab52b194ceb2255', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '6cdad5631e21b55a8f70725c3f6546607350dae7' }), h("div", { key: '10d8ac9a1998d0787a503a5ed9c807c9de663a47' }, h("div", { key: '5a0412065b09250bd4cf1efce9e81573b035a73b', class: "legendCalendar" }, h("div", { key: 'c255896ff9bcc3e11e5b6d6a8d7e5435f6efbd4c', class: "legendRow" }, h("div", { key: 'fdde4fd5660832d88ef12a5d04a0d8260580868d', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '064364908989e70852b06c406a365efd625f91ab' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: '7b2daaa441509982bf16023acd65cf2c446e9b6e', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: 'd6d4c8f8022da4568c3e6ea150467d89fdc2aa6e', class: "legendRow" }, h("div", { key: 'b59a9847d7027c40ed2158819238f704deb77cf5', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '0aec802fcfbb0a053bde25263b105216725881b4', pill: true }, "3")), h("div", { key: 'b3d356db737fa9a2ff3ddb810f2ce59d6935db50', class: "hyphenLegend" }, h("div", { key: '0b4a883d70efb309da4cf98aa426606eff51c258' }, t('Lcz_UnassignedUnits')))), h("div", { key: 'd3606c8af1efcc5159b6a76bfd0b0fff760129da', class: "legendRow" }, h("div", { key: 'd24ac13d7e81fdea69bfc4b9066ddd4fa5df9255', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: 'ab1464c10c60bb97e934014f49f3454526fe4d98', class: "hyphenLegend" }, t('Lcz_DateLabel', { fallback: 'Date' }))), h("div", { key: '530ac5bd3f85da4e22866a8db4dd4cda27c38587', class: "legendRow" }, h("div", { key: '4443515d6f30640f04d3b2175b4d0164e220bfc5', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '081f1d7c2dddfa6b4ccd7cdd64122234936bbec6', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: '49dd98b11398d5b6322292d61692fd07d0ef4f1c', class: "legendRow" }, h("div", { key: '600636c7c982f91af18f7e16d1646c65af28959e', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: 'd19181b85d1af937f359fa7d9d088910706c6594', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
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
