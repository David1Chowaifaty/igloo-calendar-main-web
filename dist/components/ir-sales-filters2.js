import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-checkbox2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-range-picker2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = /*@__PURE__*/ proxyCustomElement(class IrSalesFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.filters = {
            from_date: hooks().add(-7, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
            rooms_status: { code: '' },
            show_previous_year: false,
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        console.log(this.baseFilters);
    }
    // private updateFilter(params: Partial<ModifiedSalesFilters>) {
    //   this.filters = { ...this.filters, ...params };
    // }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (h("div", { key: 'd3921d76027b686dcb16456667e359d4c7d94dee', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '8d22eeddcf058a23752e6eb69480cd90dff18e54', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '260230d28afdbd9fbc0ad0be6fadc64869b62af5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'c986ab571a4dd786e6ba66710aa2c818e649170c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '8ddcc077959bf2175459f3b4032180b37e581d5f', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'ed2b869601f8ba651198ccc615f5e920c6d71486', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '8826d0aa579a923ce95578d9d598d75c64d1f22e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'cbddfd67a90fc675a6dba38f9b88ecf75768c3b4', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '9d8269058d0f0dad46a0089882f1c5e0accb219f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'e1436c6c2858d2496aab5b27f94f8f7e21900492', class: "pt-1 filter-group" }, h("label", { key: 'fee66a3a19012d0e6808b1dd4a2d9d2e1712b4bf', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '49594faec1d8debb0191dcbdae8d5654965b7d20', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '396817e863a2246023f9bb408de5ac85817cdb7e', class: "pt-1 filter-group" }, h("label", { key: 'a0212b28b371afed199a547b4bd282a3d9e1212f', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '82389274388e3848d053491603666237be0dad78', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'e006d6995334eceac8adad388a85485ed2f6e9c3', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '68eddb181108895d1d2bcd458992deafcec49b1d', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '7cad578aa9e32446d088a95d0105f361cef5c068', maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'e2ef0953f79b301ba39bed0c09ce1fbf7388eddd', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '321055016b3a7edb19c06833569b4e907b863c09', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'cec232b8aa72b36973ad3110d12657134f575836', checkboxId: "compare-prev-year" })), h("div", { key: '59f98cb937f8e3e3ba0394db65d29886905d3013', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'd84cdbc9d1a80fed5376301f42c1461468ecbac6', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '74e9cf1b5ad4fec27e9d2c5c4b21b286d4dc4c53', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return IrSalesFiltersStyle0; }
}, [2, "ir-sales-filters", {
        "isLoading": [4, "is-loading"],
        "filters": [32],
        "collapsed": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-filters", "ir-button", "ir-checkbox", "ir-date-picker", "ir-icons", "ir-range-picker", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSalesFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-filters2.js.map