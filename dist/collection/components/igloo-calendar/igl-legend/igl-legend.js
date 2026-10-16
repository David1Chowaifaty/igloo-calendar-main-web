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
        return (h(Host, { key: '47da11f53490136f569e9a97d1e16e3c2b0d5606', class: "legendContainer text-left" }, h("div", { key: 'afdf1f093858ce48061f5d10ce31d13a07cee804', class: "fd-legend__header" }, h("h2", { key: 'c5d2819fbc379171c20a2e4f3c3736e279868514', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '6e12952b74cc976ce8dfc5f7e17cbf7c23438cdd', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'f03032895397217225c3450df10eba9ed9430147', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '0e59c0c546528c5a84685035e5bbddf91053745c', class: "fd-legend__body" }, h("div", { key: '90946911fe85fe5817ae778a6b24370da1f52e23' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '44c9c764aba4d80918837165fd659d0e4b42812c', class: "fd-legend__row" }, h("div", { key: '19c1095c8beb57c698f88d823204ea255ec3083a', class: 'fd-legend__shape' }, h("wa-icon", { key: '7150d76ece86e46992e359f9e7c73d3be48a04cf', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '258140d777dd87b4559f2d6c9d4561a40d82c792', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("div", { key: 'a64967a9224fc01614f7a1091e04beda4530b438', class: "fd-legend__row" }, h("div", { key: '2e835a5a90193591baf9b685a3224191f9dab13d', class: 'fd-legend__shape' }, h("div", { key: 'd87efeb1a99cca35a76bdde8871a67df01df48f3', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: '3d8b5f2dd461311765ee8415ef7da681514cb5fb', class: "fd-legend__row-title --day-use" }, h("span", { key: '1a4f2a4a282a036a2e2958a388a5c588613a7eb8' }, "Day use"), h("div", { key: '4e743568088ea1781a55228a267a19a66122bc48', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '04eb7cf93ef826168fdadca4cfdfdf75aacec627', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'f0dcdb9708aab4cfdc831afa334fa093f0d9add1' }), h("h5", { key: '37a3db39f2eeeaa6d4f8fcd5d233d2ae66de4348', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '768273b2d279f3c5d0eca92da317ff1ef7236667' }), h("div", { key: '15da626314e96082da4708ad9ef7155686e26392' }, h("div", { key: '4338138dbc97d456595c85353d244f930201bd3c', class: "legendCalendar" }, h("div", { key: 'cd2a08936cca56311ea0cd6093921f58bffe3128', class: "legendRow align-items-center" }, h("div", { key: '183b8823a083c1f3f43158541a564810bffe046e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '45646c7c68f2f0fbbe9e42f303672a43214e8c78' }, "MAR 2022")), h("div", { key: '741863b370e9df3d04f56f1bc4421bca3769daa2', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '0b18c683b5b4fb89e30e2a3494a1529dac018c7b', class: "legendRow" }, h("div", { key: '64950f258135d8229456f045504448267550b256', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '4e5a409ae9bc305813a9d8a8c9b83aaecb5e474e', pill: true }, "3")), h("div", { key: '7daa447bf3428d225bb61a0768f6f96006ab0859', class: "hyphenLegend" }, h("div", { key: 'fb33b26a66e805b9952251fe19d4dfec3dab0368' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd248900057c7fad760aace12e3cee8196c91ec30', class: "legendRow" }, h("div", { key: '4d0262273944578a4d602b09c144c7c7d68b7f11', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '1e7d84a9c0ff7284e5218a724c2070e6f286c8c6', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'adae6e4b9f65ad99fc3589f9217b4bff0998cbb3', class: "legendRow" }, h("div", { key: 'bf72daadac1a4e7ff38093d8ac3b315187deca3f', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '392e181465656da12fdd774dca57847c20860049', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '0a2012e34726856b6a8dbd5ef2dc62a82e3adc60', class: "legendRow" }, h("div", { key: '15bba586e43ad3f1287028214eea34fd9cda1c57', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '85881b9faa338b6b2e86b5df88b651328244fa0b', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
