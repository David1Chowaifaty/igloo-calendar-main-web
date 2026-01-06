import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
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
    render() {
        return (h(Host, { key: '023aa3aa115a957b2233029d872f5f6a85a48cbd', class: "legendContainer text-left" }, h("div", { key: 'e9b2e873fb9ed01fabbd669aa7cace973a55cbfa', class: "fd-legend__header" }, h("h2", { key: '0a544c5c26c80bd77ce244275423a6e32422909e', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: 'fd2d2a38331b1950f582710c40a87e1c61334c4d', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'ac78282ed90c163be38980d8170d1191a2cce1f4', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '6dd731014e2380ff31b68f4cebab38c91a8ba6d2', class: "fd-legend__body" }, h("div", { key: 'b79867165b9db56e58fd7836b68248120071ce5d' }, this.legendData.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("wa-divider", { key: '46de0d24d80558e9518f0e84bc571b95c3b77f1b' }), h("h5", { key: '94cdcd338a1f22d712af288e977158f3b2165937', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'be474a2ae914d452a00e4b0cab521d757ac520fe' }), h("div", { key: '61d2f308aeae641e757f0c7a544df78264128378' }, h("div", { key: 'c90bade8625b48da4a612036be1be578ba1a8dbb', class: "legendCalendar" }, h("div", { key: 'd7e8cbdc7e27c9e1a800df3c5ce1ae1e65a1f48a', class: "legendRow align-items-center" }, h("div", { key: 'e76eddbacf4aae9687b1fb163d736884ba51e645', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'c1f6191a8a3678b1546fce213c1a58ceff49af6a' }, "MAR 2022")), h("div", { key: 'be69baf6d69f67266b9ffd48cc517833e51c972c', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'b95a1038288f2e7c24691d297e9a4ca8bd421cb9', class: "legendRow" }, h("div", { key: 'd6752c3b9e27347aaa74626c9421bbab311c908b', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '10dab28118ac0ab02a3a607d2387fbf472154e3e', pill: true }, "3")), h("div", { key: '62cbac351d38ab825fbf89febb8b5f71d72890f7', class: "hyphenLegend" }, h("div", { key: 'aff8b041966ef406c8274794ac8d3adb68efc46c' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd6291b07f32585d233216bc56e1b1f95e8ec40ef', class: "legendRow" }, h("div", { key: '5ac4a4fbeba0d90bbfea5a3f7aade47002dc7aab', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'eb97b5420e91ba5488e2242a2cd309983bf1f52c', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'd2809365646eea61d6178fff270d960caf6f3b5c', class: "legendRow" }, h("div", { key: 'ff000d97fceb11f648f49bea1b69f651f3b243d3', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'cf8f7b5d4b12f3443fd7589929de5d71c2b8ac21', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'b8b05a8ea279f7f9d4a18c17b02a4dfd2acbb105', class: "legendRow" }, h("div", { key: 'b7dd41d000d6e6295b7b1a2688e45e9e0f872a00', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '7d78d8df77c2d7a3f5a4922dc8ff0fa1dac97cec', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
    }
    static get is() { return "igl-legends"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legends.css"]
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
//# sourceMappingURL=igl-legends.js.map
