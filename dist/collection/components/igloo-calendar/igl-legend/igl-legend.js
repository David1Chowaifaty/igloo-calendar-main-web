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
        return (h(Host, { key: '194d511668f490b8e2653a1ad770aa637652ac97', class: "legendContainer text-left" }, h("div", { key: 'fcfe62572691f3d1b65fc505aec387595113ba73', class: "fd-legend__header" }, h("h2", { key: '8d46752d9221521f1db4167a2f0c83bd8ba54f58', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '98655cfafba3315c6f3d580a5a031ee61af9d71c', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '4da3e9b8b50e5bc110fa1555d3c61e0dac16c357', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '15852546125ee40a3a53142995ee4d16ae9f3859', class: "fd-legend__body" }, h("div", { key: 'e2c50e782d0cd316e259ff9bdbdc352f72fbe551' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '858d33a133d44d4be833be8c6c22b62c74f0392b', class: "fd-legend__row" }, h("div", { key: '9d71d35adbba501b32a513ce87aadbb9e156b7a0', class: 'fd-legend__shape' }, h("wa-icon", { key: '8559201f9d1a0ecebcb245ceb032bbccb2d682a0', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '4db86d21e9fc91e8ab770df854f840df58e9090b', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '67596504d19308039c5bf9fc6db21ae8d879c746' }), h("h5", { key: 'baef1fce4b4d1534a7d1595e637718e131e87565', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'ab48b36feb6d6def35640a423a2dd2c86243ae34' }), h("div", { key: '1abd576ae18371554c3263986ea5506c95af5c22' }, h("div", { key: 'ada7b5d21c20a3badc063001d4bdf150a21dba40', class: "legendCalendar" }, h("div", { key: '650b15507589e433600271de1447ce7e8a92982f', class: "legendRow align-items-center" }, h("div", { key: '86f0dc9dde209c0297ad4a9a1342aa054b727b1b', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'd3d64b4ad89a01fb0c84e2b8e0f28d08f6d4dec3' }, "MAR 2022")), h("div", { key: '1f9866abd0ebeb3536b5ea5ad56d5821e641f015', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'd937a44c9979d05310a9d78b6734efd9440f868a', class: "legendRow" }, h("div", { key: 'f473f732695b3b5a1c5a946272fb1a3aa9e01f4a', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'cac4a73caab7b4692f580e4ec59721c3b6fe95db', pill: true }, "3")), h("div", { key: 'c0c2db03298f80b34336fbd6b2d20d4eec0ab539', class: "hyphenLegend" }, h("div", { key: '3a67220c311fd2b7cc789473f7a79960e76a3207' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd29fb57340d5cf08d29d56ef0df04d06503607c7', class: "legendRow" }, h("div", { key: '2bd4798010f4fe7316c0feb621e45b92b49906d4', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '8e3ac0025b45b864702471e9d16315352ed2b272', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c00b00fd292174743940c1abdc95cc2a2c33faba', class: "legendRow" }, h("div", { key: 'fee01f96cf638af006dbcb7fee900b1ecb5cd3d8', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '252dcf802a4eb31e8c128b3a5ab6730d36b217e3', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '0026ee6a4a316debd592a7013273e043a5d9953a', class: "legendRow" }, h("div", { key: '1405276c8091a4fc5aafbe3a7ee37774265d0cd5', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'aea7501e38399c63a02274e3b6236a3dda22b894', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
