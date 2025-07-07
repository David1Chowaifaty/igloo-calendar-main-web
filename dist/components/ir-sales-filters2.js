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
        return (h("div", { key: '448eba54eababb530c9ad565e9e50136385ba4c8', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'cee83c232f397f7e9bcc186af89376aadb5110f1', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '7a84cce106101da65e11a3fad181eae3c9932368', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6584b5609bf7b816e47f7621a801369e0ddc641a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0c6ba1fc927e817d39c251c01fc9175edec393be', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3171c169f300ac8e2f17b226c8548b840bc96c3f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '90af633464c9d8ab8ac77d9c4736e0e959d49f5e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'b811c5adf48190ef41b35cf657384215bb4c83ed', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '157d20a9ef233a388d8e2e1906a573e6ad8a0698', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '81f544006136b841d5c8de220934f1a32bf9712b', class: "pt-1 filter-group" }, h("label", { key: '9dc254b3e90e2f304e17f9c2407135809a66cf3c', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: 'f7d543766b6eaf615037bbe70a2933ede3a20f7a', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '19a91b5f0360d472bce2610502d51995b050a8dd', class: "pt-1 filter-group" }, h("label", { key: '916c4b74d4e13096565cb73640b0ff1c618a214b', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '31256baefbdb712cfb15bde612cefe4f567ac679', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '550b4a537505eb3d714f72c87e0450f14dc87bbc', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '27a4eaf7eb60b267f2181b437a1f1b1f76938eed', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'd4d422bcefecebeabeca6e0bd2104aff31902abd', maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '64d5ba764e9ebc02852ea7405885a469014ae810', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'c9a5e87d8d3d8ed68766c19e0f6acf675b525f14', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'e51de613a85183601a841b0623b894f3f574acf8', checkboxId: "compare-prev-year" })), h("div", { key: '56e5128f50e3dd52597be6aada801d96f7e087f3', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'eaf5d44bd9103ab66b766b50b492405eeeecd875', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '623d7b7d5315fc0b3d2710a941b58e07cce2c735', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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