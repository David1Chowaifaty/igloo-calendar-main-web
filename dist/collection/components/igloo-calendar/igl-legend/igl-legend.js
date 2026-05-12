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
        return (h(Host, { key: '92ff8dfc5baffe6163ca0776f3ab0809565b35a0', class: "legendContainer text-left" }, h("div", { key: '4dbdddf63c31aaf9f00aa4ccdb8ddbf5eef2e6d2', class: "fd-legend__header" }, h("h2", { key: '1bf5ff096d5bd431dae5d3dcf410f628b6201a5f', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '9c1e7b186d44d8164e7b5c7edd7ead6882df407f', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '225836bb53526f8d3a451573b06d5333729c07e9', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '3757b6c1bc5319610d24e659bfee10ec4bd42e09', class: "fd-legend__body" }, h("div", { key: '85071776c718cee00ec6d264b68cc017dacceceb' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '08f16c6898c48c1be49122faa20c98c4a8dc3be1', class: "fd-legend__row" }, h("div", { key: 'eb9c2f95bfd95f3edd107d4a74f808e1eeba1d83', class: 'fd-legend__shape' }, h("wa-icon", { key: '4afaa8e17fa8aa4197df31428501098eae7dc7ef', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'c2d7ca8e94490bdc440cd7c907ef4cc6438a7943', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: 'a757231b91f7dd574449a369018d1b1084b29290' }), h("h5", { key: 'e60b643de0a278209b5c1b7efd613958f96b71d4', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'b2fcd5f8e4907217484a70dba559d68da2994d52' }), h("div", { key: '55e8787f4714e192dc554119027fd1e71e23848f' }, h("div", { key: 'b29ad0811d1a5d8d807b1a576cc95fc92c5d854f', class: "legendCalendar" }, h("div", { key: 'ae754e3b504c5513976af984b2645d1384e79ea4', class: "legendRow align-items-center" }, h("div", { key: 'c6bede690069fdc2ba0645f026ee30d47cd38283', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '71c5e556813bfaf812759e6b1e89c5d00c4a12f7' }, "MAR 2022")), h("div", { key: '798f8b55ef1da50f2d089aac2fe6ee40ab363e4b', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '5646e665c92a9a19c079f09c0329797e62c7129e', class: "legendRow" }, h("div", { key: '08edff0becc25fe6d10b9cb2c1f45e7e9b1bb549', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'd32d3087ebb11fb7dcb809a4b0586558e5df06b6', pill: true }, "3")), h("div", { key: 'd97e5daaad2da624e93964351868ec06644fa72d', class: "hyphenLegend" }, h("div", { key: '5a8a44941eddbfe16b0861ef14e74669ef321e9a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '6773c8b8f5b0870d8aa8d9d81aeac49c3459c56b', class: "legendRow" }, h("div", { key: 'b56b1dddcf7d653896e703597c4373ac3704ae63', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'f7809695f763791141696541ee35809def83d992', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'a9b0335a2d17fe19f1e34ae166f12e0c6c055a36', class: "legendRow" }, h("div", { key: '6d828b7e4e4bd72314429476efc84490c0edf5d5', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '853ee6d61ab47cd8c1207913d1c9d141c922e58a', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ea4a8b2ee035972c86cf3201366cfc8dc8edbd14', class: "legendRow" }, h("div", { key: '16348d00b8fb958fe666a38ce630a561bad2c679', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4a830328389c5eccb5b9b5e77ab9cdf77dd6f20d', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
