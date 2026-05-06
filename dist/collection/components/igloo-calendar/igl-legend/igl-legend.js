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
        return (h(Host, { key: 'dd1f9cc819b79c245fa077182d917b9e3283ed51', class: "legendContainer text-left" }, h("div", { key: '3aceec04487d75cb7d48df71c0857208009358e8', class: "fd-legend__header" }, h("h2", { key: 'ad51361d5076c6329b75b3dc78e4b473dfaa7892', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '8e113f3cd5c8c97110c86d4b6e5ea8164dece37a', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'c8de9c241e921ba25f0a7d4dfc3ab2e012e27e23', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '852221d005ccee4e695e6e04b7c7fceb2c552bf7', class: "fd-legend__body" }, h("div", { key: 'ab90245338e5babd226d17c3c3c56373cf903573' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '487df3f922286c69538e8c53a632fc6e5b31da38', class: "fd-legend__row" }, h("div", { key: 'd7f826fe2140af93b90f80b461d130b740a06ed0', class: 'fd-legend__shape' }, h("wa-icon", { key: '404bc51c390249d65f8caed8d5fec7386b6a6e66', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '83c1763c3db208100d047c93bd9f19c6e75dab09', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: '27c515007b5d4cdd944723eb870c604f7faffe81' }), h("h5", { key: '5abe938ae2da8be16666524b07d37077d96e2222', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '88e80e2a5dc05c62e4dc6be9d6826edc0d405662' }), h("div", { key: '37e5fb52ac063ce6ddec969343753f8ab28c13f6' }, h("div", { key: 'd558d358173d5c8cf33aa7faf76d3aabee172f96', class: "legendCalendar" }, h("div", { key: '2d37ffe93792d5c7678ea007a11322cd70048c78', class: "legendRow align-items-center" }, h("div", { key: '35ebe9e4a45d587d3d372e541f9f76fce78354d7', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '9ddec4ed847cfd81b2aa961aa2e45061cc9fa5ba' }, "MAR 2022")), h("div", { key: '59c03d7e3ef7d6597b5903b23fae9ae1ff7ed273', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '2e92141a42489b23185ee238d544eeb1f67ac3b1', class: "legendRow" }, h("div", { key: '3aaface69715825b03801e031349939ae1eb3560', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'f3d6c7e4e22d918a28286b6329c8e116dce164eb', pill: true }, "3")), h("div", { key: 'b2559fbb653407b5a6136c46c27593a21bbcba3e', class: "hyphenLegend" }, h("div", { key: '5c6be64c259bfc9cd142edae17d7031c8472a201' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '374a2dd136eb0e00deb625d84cb8871db1a723ba', class: "legendRow" }, h("div", { key: 'dc5c28c0156497874846da13c4453be6df5fc975', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ac91344e1bd93a0e96a206ce9c31fd12d8c727cc', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '2d77e55c260a0b5166a6b061802ec5f4c87e49e7', class: "legendRow" }, h("div", { key: '6e9e50a8961d76b69c8bd522008ef6e1d500d3aa', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'f40868d744d7cbc47603894487de6e17edc30aff', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '31aad3b375fcd4bd369cb6816272806a8b467f63', class: "legendRow" }, h("div", { key: '906e39acce49bbde2d17fd1e1a7b756be5948b42', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '87b710826f52626cece5969034897eef0fd8b7d8', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
