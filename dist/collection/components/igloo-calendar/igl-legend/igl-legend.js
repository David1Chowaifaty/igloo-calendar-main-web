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
        return (h(Host, { key: '11f05753a881228a06808b01e6b53feb7d2a4037', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '8eaf1f46f085ad0c4f863a1ac97fa4d5d569aeaa', class: "fd-legend__header" }, h("h2", { key: 'e51571a7a935d332b255a6c31400336dcca78b50', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: 'f9a2442c887bcb998a89583aca2471d15f991022', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'b3609760276c01beaa1f1542530316aec88ac16a', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '6a44a06594140cac26441425d090dfb4abd544cc', class: "fd-legend__body" }, h("div", { key: 'fea41dd9055902e1080b750006178ee77880f168' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '2d77aec017a4712f1a28162e195d4f3ff837face', class: "fd-legend__row" }, h("div", { key: '64cd3219e042490e567aac1d7ac0ba0f55c2990c', class: 'fd-legend__shape' }, h("wa-icon", { key: 'a320241f569f5d4d0bdfdbb34c6052a72360b0f2', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '96b3a5ceeb4aad2e7eee829d16c272078a6151c4', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: '36d4ff7298533cb8048a32c6f1904195d0ea0722', class: "fd-legend__row" }, h("div", { key: '0b3f1e7e57d272633a566222776ad35ab828ea09', class: 'fd-legend__shape' }, h("div", { key: 'ca2512410536c8b08c637c4c3cae9732bb40098a', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: '1226f8534bd8c1eee5b7d0c7cac263e428d57f0e', class: "fd-legend__row-title --day-use" }, h("span", { key: '6914e68135c267321a8fd8ebb61f699761bf08bc' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: 'c369504c49a4fc58b52c73374b65fc2d94e9e5ee', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '6d4377e628a43e17ca78d73bf8816415e26a60e0', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: '7b0e55ec484c4611aacf0bf3a49ab4df5d205eeb' }), h("h5", { key: '3ca4bac35db9b00727bfadddf851d23ef9c5a4ff', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'ea61443de737177af9710ea5e2f35a7840d4f1fb' }), h("div", { key: '6954a67dcec6cbc2368e3aa33ed41ff2b0a362a0' }, h("div", { key: 'abcda7770fb409be1dff586b99fe9779ae5a32aa', class: "legendCalendar" }, h("div", { key: '062572fedb9d720c0d8e3ab218e887759bbfe658', class: "legendRow" }, h("div", { key: '26988c538c576fed5cd5a7aa75fbd849692483c6', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '350253b8eb2e94a298fbf50d31984ef59f4ac144' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: '476f17a131811af617cc644b6cc3af2b8b654c3d', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: '84a767c2df2c019504bcd85e3ac7e6fb6d490df0', class: "legendRow" }, h("div", { key: '1834d95a8a0930bd81144583cfefe3f808070ce0', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '6bd9c696c920ab9b80af7fb50770f693c7559a71', pill: true }, "3")), h("div", { key: '7ca6e9d10175e48737d11196cdcacd10b08fd4ac', class: "hyphenLegend" }, h("div", { key: 'f0929b919522469797ec32d63a22185b979f5545' }, t('Lcz_UnassignedUnits')))), h("div", { key: 'bb5e27f5852527c2cf3fbf3fb4ae7c8d90d9ae46', class: "legendRow" }, h("div", { key: 'd667065cef1fe955ed9d2e1aeecc7d998d9ae8b5', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: '23d906fc67791ee91517172e800593e1ce4ed237', class: "hyphenLegend" }, t('Lcz_DateLabel', { fallback: 'Date' }))), h("div", { key: 'a79686ae559e8b55349cd8272962ae5487cdcc9e', class: "legendRow" }, h("div", { key: 'b8de275a6bc0162b3bf5637cbc9f248d3662e016', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '9d3fc2b021cb4c1a4e8997cde54c5f976e560c19', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: '89d6ea1ef39d541873a85c268a137b756632bfc5', class: "legendRow" }, h("div", { key: '5d801112bdf69d4972aa263e28ee804b2755be1c', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: '27df23c17dd24fde404b9070c9f1157a102ca10f', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
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
