import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = /*@__PURE__*/ proxyCustomElement(class IrFinancialFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.baseFilters = {
            date: hooks().format('YYYY-MM-DD'),
            sourceCode: '001',
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '75330a2a47ffdd7d371c89f93b53de6a52a39465', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ce87e19eaea9ff2050f49345fc866422c3b28f94', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '94ea7feac794100f0b8e95c346381e7136d22116', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0b8d0f346e59df85885ff95e7d29dd048e605718', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '5e80384aa467595320f1e10e2f6585d0a921eec6', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '4dc49d65b787715dd6637d9f4d972045856d3062', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '66656b0cfa79631c99f9ed65a5a434fd36a0f379', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '2579ad44c2eeca38bc4a0be892cf1de5e7fd9e98', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '680dd2e9011062ae9d91088625af17a29ca0554e', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '75e173b51c5e2e784aad62faac9cd55f1b6391ea', class: "pt-1 filter-group" }, h("label", { key: 'bd4716688fc7e659d2bdef48271a5f79d687fe00', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '0195f0d81cafb122eedeadf206982904b5414f6b', class: "w-100 d-flex" }, h("style", { key: '5e27ed718a8ce5862fa9de71cc126e5c3404cedd' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '020dcd563cedf189919739f6576185ffdb891f93', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '27cb74643cdac5ce601f714810da54a5ba4ade96', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'cddc87e70482a8b09ed8de8cdcb7915c19295e76', class: " filter-group" }, h("label", { key: '0a25d129e0138a1ef551d0eddfefd414e38aff91', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'b772d65c9194766e45494e67f1b44a9e114873bd', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '90703a86bc1c9f4ad7184b8d3d56c6e7008001bf', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '460fe500b29e78d57417d7205d9893b19f31aad7', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c45deb98cf69f5e1f0039b6386b2a8c6a608a067', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return IrFinancialFiltersStyle0; }
}, [2, "ir-financial-filters", {
        "isLoading": [4, "is-loading"],
        "collapsed": [32],
        "filters": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-financial-filters", "ir-button", "ir-date-picker", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-financial-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFinancialFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
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

export { IrFinancialFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-financial-filters2.js.map