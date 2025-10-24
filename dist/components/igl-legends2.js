import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-new-badge2.js';
import { d as defineCustomElement$1 } from './ir-success-loader2.js';

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legends{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legends{--stripe-period:6px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-skew-background) 0,\n    var(--ir-skew-background) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  )}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_dirty-unit.sc-igl-legends{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;margin-right:1rem;position:relative}.legend_dirty-unit.sc-igl-legends::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:#a0a0a0}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:#ececec}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid #a0a0a0}.br-s.sc-igl-legends{border-left:1px solid #a0a0a0;border-right:1px solid #a0a0a0}.br-bt.sc-igl-legends{border-bottom:1px solid #a0a0a0}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendRow-editor.sc-igl-legends{vertical-align:top}.legendColorCell.sc-igl-legends{display:flex;align-items:center;gap:0.5rem;padding-right:0.5rem}.legendColorPicker.sc-igl-legends{appearance:none;border:none;background:none;cursor:pointer;width:30px;height:30px;padding:0}.legendColorPicker.sc-igl-legends::-webkit-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendColorPicker.sc-igl-legends::-moz-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendDetailsCell.sc-igl-legends{min-width:220px}.legendInput.sc-igl-legends,.legendTextarea.sc-igl-legends{width:100%;border:1px solid #d8d8d8;border-radius:4px;padding:0.4rem 0.6rem;font-size:0.85rem;display:block}.legendInput.sc-igl-legends{margin-bottom:0.4rem}.legendTextarea.sc-igl-legends{resize:vertical}.legendActionsCell.sc-igl-legends{width:32px;text-align:right}.legendRemoveBtn.sc-igl-legends{border:none;background:none;cursor:pointer;font-size:1.2rem;line-height:1;color:#a0a0a0;padding:0}.legendRemoveBtn.sc-igl-legends:hover,.legendRemoveBtn.sc-igl-legends:focus{color:#5c5c5c}.legendEditorFooter.sc-igl-legends{margin-top:0.75rem;display:flex;align-items:center;gap:1rem}.legendAddBtn.sc-igl-legends{border:1px solid #d8d8d8;border-radius:4px;background-color:#ffffff;padding:0.35rem 0.75rem;font-size:0.85rem;cursor:pointer}.legendAddBtn.sc-igl-legends:hover,.legendAddBtn.sc-igl-legends:focus{border-color:#b3b3b3}.legendStatus.sc-igl-legends{font-size:0.75rem}.legendStatus.saving.sc-igl-legends{color:#6b6f82}.legendStatus.success.sc-igl-legends{color:#2e7d32}.legendStatus.error.sc-igl-legends{color:#d32f2f}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legends{height:12px;width:20px;margin-right:1rem}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = /*@__PURE__*/ proxyCustomElement(class IglLegends extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.propertyService = new PropertyService();
        this.bookingColors = [];
        this.saveState = 'idle';
        this.loadingIndex = [];
    }
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
        var _a;
        const calendarExtra = (_a = calendar_data.property.calendar_extra) !== null && _a !== void 0 ? _a : {};
        calendar_data.property.calendar_extra = Object.assign(Object.assign({}, calendarExtra), { booking_colors: colors.map(color => (Object.assign({}, color))) });
    }
    get propertyId() {
        var _a, _b, _c;
        return (_c = (_b = (_a = calendar_data.property) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : calendar_data.property.id) !== null && _c !== void 0 ? _c : null;
    }
    updateBookingColor(index, patch) {
        var _a;
        const bookingColors = (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 : _a.booking_colors.map((color, idx) => (idx === index ? Object.assign(Object.assign({}, color), patch) : color));
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
        var _a;
        return (h(Host, { key: '7359439f8286f45ff12849d5965e26afa21a9ece', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'b0278610395176eb6c301c5e380b1cc463637fa7', class: 'w-full' }, h("div", { key: 'cc42ac67a764283096486f96985d7cce0b69261d', class: 'w-full' }, h("div", { key: '911dabc1ef593d9a466c8a657275ad7fa2bf75ee', class: "stickyHeader pt-1 " }, h("p", { key: '4e603a040e9a8d14d7eda431438c647716b6165a', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'dd60fb4b61ac8586965645ef0856790bb21c8f0f', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '108f057376e0fdd2f794430d1f02ba417089a5a8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'eafad8b8857ad33e1ab62e7cfd955de6882653b0', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '9de40bc5b04f940e629e2ffa80807ac5379ba1c0' })), h("div", { key: 'd32eb28dea80821e453f2288125f1cf5c3e946c8', class: "mt-2 pl-1" }, h("table", { key: 'b2c1581aa5ed9d292591b7e91524260852c8b339' }, this.legendData.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }), h("tr", { key: '3540d6ab6444b0e235185a668ba32c1f2a8165c5' }, h("td", { key: '6a947ef8658ec890ce57b072c690057557deed3d', colSpan: 2 }, h("hr", { key: '55a07273e8337a70ca7518b036ac959ed0146490' }))), h("tr", { key: 'adc0ad0c01c18f2a1b212b89f44cb0f7516c0d06' }, h("th", { key: '8706e798476ffca48f4eac6bdcacd749cd96842f', colSpan: 2, class: "pb-1" }, h("div", { key: 'f2141ee385671171e92148ab3fe8529a0fa4dd0e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'b5842d093dff472b425312886045a8ea3902ba89' }, "Use your own colors"), h("ir-new-badge", { key: '560ae105d179d6ded97b6966ad9dc86534200688' })))), (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 :
            _a.booking_colors.map((legendInfo, index) => {
                const previewClass = `legend_${legendInfo.design}`;
                return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
            }))), h("hr", { key: 'f29a6d26c8b814e98f038cc4dfe54b3546a1cf59' }), h("div", { key: '66dddac118f3b31e8826a1fd73b57dfcb92abd56', class: "mt-2" }, h("div", { key: '8fa5b10789b6068158bd1a28e3c568df85205324', class: "legendCalendar" }, h("div", { key: '976b510b63505ba54b02cb5df094d0feb2361b4c', class: "legendRow align-items-center" }, h("div", { key: '0c7436aef2e7fddbd0039f4617998a2517aaba06', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '39b0e27eb81084ae714e9a89c497f30e2d133061' }, "MAR 2022")), h("div", { key: '885a158642905c8fdcdf375970edf84bf579c2ef', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '9c67f92786eb52a033b3731f44a40c23ef6ba484', class: "legendRow" }, h("div", { key: '8c2cc456fbc0ddeba4802083ae779e9f58e97386', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'b1a0925ee82a24f2d562d688fc4ffc9258bd0e3a', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '99b9ebef614c08ec9f878ec082efa0ea9c1e5ab2', class: "highphenLegend" }, h("div", { key: '20af48d6dd1a9c4cdd0d3a2d3fce1ec8863a95d8' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '7fd9bfc7a55e223748e1f5bc907327ba50215c09', class: "legendRow" }, h("div", { key: '5fd1e71c72ff1c21d9f41ff7480d6485e01c839c', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '265fb87a13f4811c880c4bbfc781a68151c06357', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '2954daebfc7862c1ff337c67af8fb545a940a368', class: "legendRow" }, h("div", { key: 'e7d50394927d1ce0cff48183ddcf9d81270f5f8d', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '6b7c263ae5f780627d26409c2c2e7319842e5244', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '9ec7af91d7329b1563bab658fcdcc40a377a8efb', class: "legendRow" }, h("div", { key: 'bc09309a27abd29291767f93994795b207516b30', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'b7d6662746900d987ba184382646dd3ce35f4756', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
    static get watchers() { return {
        "saveState": ["handleSaveStateChange"]
    }; }
    static get style() { return IglLegendsStyle0; }
}, [2, "igl-legends", {
        "legendData": [16],
        "bookingColors": [32],
        "saveState": [32],
        "saveError": [32],
        "loadingIndex": [32]
    }, undefined, {
        "saveState": ["handleSaveStateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-legends", "ir-icons", "ir-input-text", "ir-new-badge", "ir-success-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-legends":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglLegends);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglLegends as I, defineCustomElement as d };

//# sourceMappingURL=igl-legends2.js.map