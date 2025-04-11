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
        return (h("div", { key: '2640a6e0dcac858ed2c7f2b9de092cfd6c21f6e0', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '5e3c63d321fe5d57d97c61d984400b1113bef3d3', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '43c779128e9466c07d0087a7b2fd1598f5a22a23', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '39dab46c276605e08244c9d984a4c55e3d1edd28', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '3846124afa3a9b6e198c516e86e8630c94d19bf5', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3c0927710e1084fa0da28c8909612c5c7c56547e', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'e06d994586e77be4d671173b2e026bff7e86bdf3', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c5e750240b73091113796df618780e1813cfd776', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '8ff00ba7b2822955212e204a12d47f1f10ee855b', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '3bde7dac20240e9e32821393dfbb8867994b8447', class: "pt-1 filter-group" }, h("label", { key: 'b8c0f9991174058765e6a5e07dab2c7fe05e4712', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '0a9d639b42046add5b76c974ea683a0f54ef31a8', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'e16fbb2bdad00916186c03f4abc7d58a64b0fd63', class: "pt-1 filter-group" }, h("label", { key: '50aaa44471ce808c8689d0e0570780b786955414', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '1caba607361d52e1fa5582be435a71216ab3b2b4', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'a68281e977a5005615df72696419f130c115688b', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: 'b970935eb3c412a2fe14ccb915af329033fe3c45', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '827d9e9084ab676339083b7cce43390677e25f8f', withOverlay: false }))), h("div", { key: '7a1fe3c67cd6332bd6b55e7502a98e8ee8c88053', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '60c73f61e5c1545415a8106c7d54e87a08327ffd', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'b1565b967d46f0cd710c22df12455771190accac', checkboxId: "compare-prev-year" })), h("div", { key: '3a6d2a361e7c0966fd67654e8bcbd2eab0b8f37e', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'a6a1a5f97c1c23570d47cb95a5e5d85f6466df86', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7dd5a7470dd609c78cb6e95863b2c1572bded6c5', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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