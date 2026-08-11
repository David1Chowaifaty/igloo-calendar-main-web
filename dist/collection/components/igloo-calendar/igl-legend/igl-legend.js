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
        return (h(Host, { key: '6d81777ccf840b02f9cf874f5e9be180cc89b0b6', class: "legendContainer text-left" }, h("div", { key: '33d54f200851d7caf9d6c1fed2e2caf1900bf1d3', class: "fd-legend__header" }, h("h2", { key: '2ac50cccf85c3b67a092901ece7460fbe745777e', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '6ebb05fcf296636c07ad0e7d754122b7bde9bd1b', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '5287c0c28f18129841bf23e3d23051f1671b97b5', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '05e1c24175ea18ca71aaaf29af79936ecd4fe988', class: "fd-legend__body" }, h("div", { key: '1fa22cb30983e3bbbf935be6e66b04268280e704' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '97b6ffc5d9af800840423348a82e593035542339', class: "fd-legend__row" }, h("div", { key: '441f1e227a9e04eeae23c739625d5df1b6aa48a9', class: 'fd-legend__shape' }, h("wa-icon", { key: '06de11795e178fc7f5acb31400e6d019b3033174', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: '149c1e19751c11ddc473ee4231dfcf5d15ebc914', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("div", { key: '93e8122e20152e52dd2cac095d9e608c8b861417', class: "fd-legend__row" }, h("div", { key: '26d6451b6b4e62cdd0ee2b594338ebf4c9481522', class: 'fd-legend__shape' }, h("div", { key: '350aa15a7218d639a7c6c6bf9212f43fa677c123', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: '9799d5357e6065e40bf3ef599167504e4ade9c82', class: "fd-legend__row-title --day-use" }, h("span", { key: '109e6054d2fbf48110dc38bae59dbbada86eb07d' }, "Day use"), h("div", { key: '7e11d1eaafcb82822c1b17264517b88b82adbb1f', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '5f684af804b51119893665d2ef45b402361b2968', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'f5a5457c1ed7f6c2ea48d6478383bde611627af9' }), h("h5", { key: '706f829096e4293a070d53d1ff968e5a3139bea4', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "s", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'bdb1fe23817b09fe06cc3681e0c5cf36f5edc132' }), h("div", { key: '76908ec2fb9a81bc3489d452212480f60b3fcc06' }, h("div", { key: 'ede3ebdbe6832fcd1a51ff491d9cb3ed7418dba2', class: "legendCalendar" }, h("div", { key: 'd398ca67909c78ce23cc1d9d68e1d29bd5a7a61c', class: "legendRow align-items-center" }, h("div", { key: '42e192f31c7c3d04f9b88eb3712060d1642417dc', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '08e57e1a34612728d5b1838db9b60ff7ade30639' }, "MAR 2022")), h("div", { key: 'ed61882895e52930c9dc558c08cbca28f6c483c1', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '636881609b21d612b0c4b5f7edb8bf784afe1b9b', class: "legendRow" }, h("div", { key: 'bde815163ad2bce907f676950a6f260a15d21dd9', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '6dbf44bca98f4695f6eafb267828090e17712878', pill: true }, "3")), h("div", { key: 'a33009b78f297648c3d82851df833035b3b452ea', class: "hyphenLegend" }, h("div", { key: '048458247a8c5e9d00935a62c51a02c7ba705bb4' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'db0873adc1a44ff68a5b53ebef7cfc07e04039d5', class: "legendRow" }, h("div", { key: '87b10ec6bbd1e13747356e42a8d181dd2f01ad09', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'e7f7c00c409a704481ff561112e6c93580c8284c', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '89149a57f8fd2895dfef0ece2f5d3a7837ff0e39', class: "legendRow" }, h("div", { key: '65dae8165d9677c7f0aade1678acbd2f48fab573', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'b68a4d4c3dd71eccd7ea2178ec85571073f95008', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '25b540a26d06b4be14555518d1605bc48fd1e5a4', class: "legendRow" }, h("div", { key: '316a86ca2a46d6e39e014c278fe2e591a18233be', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4aba2fbb1661825a3c64ede62a7f5cf17a6b5712', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
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
