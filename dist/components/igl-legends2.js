import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-new-badge2.js';
import { d as defineCustomElement$1 } from './ir-success-loader2.js';

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legend_skew.pending.sc-igl-legends{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud)}.legend_skew.in-house.sc-igl-legends{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);vertical-align:middle;font-size:12px;text-align:center}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legends{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legends{--stripe-period:6px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-skew-background) 0,\n    var(--ir-skew-background) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  )}.legend_skew.split.sc-igl-legends{border-right:4px solid black}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_dirty-unit.sc-igl-legends{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;margin-right:1rem;position:relative}.legend_dirty-unit.sc-igl-legends::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:var(--wa-color-surface-border)}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legends{border-left:1px solid var(--wa-color-surface-border);border-right:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legends{border-bottom:1px solid var(--wa-color-surface-border)}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendRow-editor.sc-igl-legends{vertical-align:top}.legendColorCell.sc-igl-legends{display:flex;align-items:center;gap:0.5rem;padding-right:0.5rem}.legendColorPicker.sc-igl-legends{appearance:none;border:none;background:none;cursor:pointer;width:30px;height:30px;padding:0}.legendColorPicker.sc-igl-legends::-webkit-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendColorPicker.sc-igl-legends::-moz-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendDetailsCell.sc-igl-legends{min-width:220px}.legendInput.sc-igl-legends,.legendTextarea.sc-igl-legends{width:100%;border:1px solid #d8d8d8;border-radius:4px;padding:0.4rem 0.6rem;font-size:0.85rem;display:block}.legendInput.sc-igl-legends{margin-bottom:0.4rem}.legendTextarea.sc-igl-legends{resize:vertical}.legendActionsCell.sc-igl-legends{width:32px;text-align:right}.legendRemoveBtn.sc-igl-legends{border:none;background:none;cursor:pointer;font-size:1.2rem;line-height:1;color:var(--wa-color-surface-border);padding:0}.legendRemoveBtn.sc-igl-legends:hover,.legendRemoveBtn.sc-igl-legends:focus{color:#5c5c5c}.legendEditorFooter.sc-igl-legends{margin-top:0.75rem;display:flex;align-items:center;gap:1rem}.legendAddBtn.sc-igl-legends{border:1px solid #d8d8d8;border-radius:4px;background-color:#ffffff;padding:0.35rem 0.75rem;font-size:0.85rem;cursor:pointer}.legendAddBtn.sc-igl-legends:hover,.legendAddBtn.sc-igl-legends:focus{border-color:#b3b3b3}.legendStatus.sc-igl-legends{font-size:0.75rem}.legendStatus.saving.sc-igl-legends{color:#6b6f82}.legendStatus.success.sc-igl-legends{color:#2e7d32}.legendStatus.error.sc-igl-legends{color:#d32f2f}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legends{height:12px;width:20px;margin-right:1rem}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = /*@__PURE__*/ proxyCustomElement(class IglLegends extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    optionEvent;
    legendData;
    propertyService = new PropertyService();
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
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
        return (h(Host, { key: '52aaf154fac060695cd49e48c6f6a34c62453f89', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'dbf3ce3d83be1755152aa98c5f0e70775893b545', class: 'w-full' }, h("div", { key: '1e28750bde359d5bbf25902685b91421d81fa4e4', class: 'w-full' }, h("div", { key: 'c3e9d73b1defdcefc7e0767f44e340bda7b3931a', class: "stickyHeader pt-1 " }, h("p", { key: 'afb5e72e6b0f95ae4cfedde50148963517e343d0', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'a8fd37dfa4222ea91c9d6f74aa8454262105c8f1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '1cab9dd42dfa5328980f91de793c2aed0b3779d6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'bf035aa5e288bbf0c00ea554b182d41f4007feb0', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '952588255a384c01275debf2f521c919ec89900f' })), h("div", { key: '64520d3af751818a9db086c08a5b9250ab5ce34e', class: "mt-2 pl-1" }, h("table", { key: 'c558b7b76880353ac808166888c824071dc4e3c6' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'c3bf7b3f1fc9f0d4ebcd4e2864f30c5e90fe2063' }, h("td", { key: '4d0c5473be8b86e6baa1a6bdcdb8baa0a2e1b237', colSpan: 2 }, h("hr", { key: 'ff8c4de7cb7057076d631643c93b955853fee594', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '298453f660a4c403842c7e9683cc7f831ab6577d' }, h("th", { key: '3c758e6cd295deb73183ab39f358a9c02626567d', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '4071be39a9a3349b0f039caa61d08ed76012e92c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '2fbe2df1de6bb869bb66e45538b416c35d1d1acf' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, "data-id": legendInfo.id, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && 'Unit'))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'e65d39528d2362c2d559f91be7158679d8628870' }, h("td", { key: '64cf2583b9ad7090c06e555d517b3b67c908d89d', colSpan: 2 }, h("hr", { key: 'f1982794ea97f1bd85f003ab8b85dc80795b9326', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '00ff99fe9798d70d2fd51fb70c2a795c9080a9d6' }, h("th", { key: '0fc4fbfcc12385909e24151fe409ce7ecb14f137', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: 'b74af680dc0e4e6b5684a6c6c582a4d61ab432a6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '09eade47cfc08eb617228e90c53c9739a0297cd7' }, "Use your own colors"), h("ir-new-badge", { key: '6fc20266be3faa96c9407b26e7ac04951d30fdba' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '9d75de15256add98ccbbfe7be9b6585dd70a8298', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '9000395220a19caff0dc23ecaf1b720f94413071', class: "mt-1" }, h("div", { key: '9188daff3aa91f3b28ff5725b500125a04732c40', class: "legendCalendar" }, h("div", { key: '223f3eae209b1a30cb2123d7ccf2e20e3823f1af', class: "legendRow align-items-center" }, h("div", { key: '6cab430757b725aeae95e7131d8a5d5b20b7930b', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '01b9f0d865c5a0d7460175cccf5d366fda99bfc3' }, "MAR 2022")), h("div", { key: 'be7760f860f8dcb0da7b1d7806ceb426d345f81e', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '661be2233d918e7d16b2f03c726e4ff446f0fac1', class: "legendRow" }, h("div", { key: '1ce81024e8494f89e08b26d7a83dc4a06aec50f1', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '2927da8884c31398d1e6784e2bc239d3f58f62d9', pill: true }, "3")), h("div", { key: 'c2e0d6dbd10d39f1e663b4b060f0f877f7759abb', class: "highphenLegend" }, h("div", { key: '0a1d46b87c330ae1d7168f0db895392311943613' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '00cfdf45b053da8bf298fcaf84fc6e581714c6c4', class: "legendRow" }, h("div", { key: '56f4efee245eef10102721aec34b42b036841c1c', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ef907af576c2ba4ca2873a4af6c13a1e3c52f98b', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '2cddfa7d024694e53270aabfe484797eab1a0103', class: "legendRow" }, h("div", { key: '8bba8103e2fe1fbc2cc4066d7f8fde4d9477496d', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '7e14c08d74893c27c008c712eb20b3b881258af2', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '6ebec210cb6ca65e4829a401ca0e5941c3714361', class: "legendRow" }, h("div", { key: '0cb1d22a12a3a5dd136fa9b2a738930f94af4a7e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f57097caa81abb57fe7a980c73e8abe8172cf1d7', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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