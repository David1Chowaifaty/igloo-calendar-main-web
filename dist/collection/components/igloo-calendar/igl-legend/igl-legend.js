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
        return (h(Host, { key: '2a2bdf8f3b81a199c8b98a42ac67c1b37a32280b', class: "legendContainer text-left" }, h("div", { key: 'ecdd90400b98bae21e7b67f2674682721923177f', class: "fd-legend__header" }, h("h2", { key: '4dbf9f672160e61204f9fdc6fe80704b963b879c', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '101ff19724aad511b5d82626bf6832292bbbbe14', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'ac38c35d21d2c98b885cb38fc274111bc82fb0dd', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '33f656440e0d7ae95077c1e47e5bd9da92c79be1', class: "fd-legend__body" }, h("div", { key: '2f49e4643f14887bfe186288c1fc759c05d52ea7' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'c55973625d03683bc3061c23836059875f0feaa0', class: "fd-legend__row" }, h("div", { key: 'd08c81dce0567f0aebad1d5b2a527873a6074a7f', class: 'fd-legend__shape' }, h("wa-icon", { key: '1544a974dd0a7ff8e649c6eb65acd5f41b5e7dfd', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '4ea9beecce271900aa402a0400658565b224eb03', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: 'fe5e3dc87af7539e5f2afbf8060022aec3629d67' }), h("h5", { key: 'c32d5fb4367f4ca7c288eaeff5c01e3828ffe6ad', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'a69da6d4ef6f8bf65b6a21b8a5342bf7abf561eb' }), h("div", { key: '198e17980e69b0352f20f5687ef8f06d43394dae' }, h("div", { key: '0e3f6587488cabb890885e53f606dd3464397d88', class: "legendCalendar" }, h("div", { key: '08459f0682e3ac8b4e0fa379a247dc092aca0d0c', class: "legendRow align-items-center" }, h("div", { key: 'a72cccf6372dbb9d5f7debf7510ef6256992407f', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '5c758bd70e5ee081a341a5f878fe572bb7de0ea0' }, "MAR 2022")), h("div", { key: '4fa3f0dd59ba923bc6f05294a693c3af5406f51e', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '02f178933dac6853aef1ccdebc99a8ac0ae51047', class: "legendRow" }, h("div", { key: '9b7cceef6d1229f1c806f543a4508b2d1771ee22', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'e6d673fbb4fbc25d57428b6f9c89abb86debd1e7', pill: true }, "3")), h("div", { key: 'df329ede7bb0020f0d61466a7914aaa1d13eb776', class: "hyphenLegend" }, h("div", { key: '0b919ed14a6019a1c0446c98ed70fc046e6c95dc' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '803d9bce8b79bf0304810f09edce77078ba12be9', class: "legendRow" }, h("div", { key: '4b9a987e650d79a4a7f1081cddeed009203cfa86', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '9fd4cf36895e8f31a1091163d3851908ad7ba288', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '6b35c6b168a3d5129806d7cca17245f1ff9ee549', class: "legendRow" }, h("div", { key: '481eb503091cda7b0cdc96127cf63501172a8a22', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '70073af18ad48c540b236abda7827541b2d7d759', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '94ef4b438dbee730fc627c66f2e33e0026124161', class: "legendRow" }, h("div", { key: 'fbf1bde2d0cac71801188bcddbfb351d4c39d7ad', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '5fe2a122678a47fd02742e99d6a7a1f746b1c9e8', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
