import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-checkbox2.js';
import { d as defineCustomElement$6 } from './ir-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-filters-panel2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-m-combobox2.js';
import { d as defineCustomElement$2 } from './ir-range-picker2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irSalesByChannelFiltersCss = ".sc-ir-sales-by-channel-filters-h{display:block}";
const IrSalesByChannelFiltersStyle0 = irSalesByChannelFiltersCss;

const IrSalesByChannelFilters = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyFilters = createEvent(this, "applyFilters", 7);
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
        this.window = this.baseFilters.WINDOW;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log(this.filters);
        return (h("ir-filters-panel", { key: 'f15cfbb3a168f99feea3d19d663a617ef49684a4', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, h("fieldset", { key: '918d24da56f85a5717a2e13cfae942fdc28f35dc', class: "pt-1 filter-group" }, h("label", { key: 'ea6643cb84bd7083e7db38c63e90bca6503704f1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '7a59a515689105fb6aa4f842e8fb04970b4ce9c9', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (h("fieldset", { key: '9e234ce7fa3489e4e30ab55c15143bf41956187c', class: "filter-group" }, h("label", { key: '5762aed56bfdedd98a58a0e70c2c67f700388fbc', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), h("ir-m-combobox", { key: '8e6f62003cb8c18efe6e4b921f13edf00490ab52', defaultOption: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.LIST_AC_ID) === null || _c === void 0 ? void 0 : _c.length) === ((_d = this.allowedProperties) === null || _d === void 0 ? void 0 : _d.length) ? 'all' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.LIST_AC_ID[0]) === null || _f === void 0 ? void 0 : _f.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.map(p => p.id),
                    });
                }
                else
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.filter(e => e.id === Number(value)).map(p => p.id),
                    });
            }, options: [
                { label: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] }))), h("fieldset", { key: 'c1007ee3be3196e2ee64e1a8e8f9cff9c6f2cce2', class: "filter-group" }, h("label", { key: '40399ac3b13b71bdb42dda54a568c7b4de4d24cd', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '8e4ded724edde7648abfae68a095eb38e6ba9302', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '0d40ba6f1944c358b3f2f83e07365759a890ddb5', selectedValue: (_g = this.window) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: 'e50279e1ed8914ef38a27205e4249c8da6f5d795', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'e56896787df701c55d3cff085cda867a79e3fa62', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = null;
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '27b5d90b75eb9ed6c67c5289395531baf1078852', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '075f671287172d8dea725b5eefd9a203d078c8d4', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '8b8dd3cffad8956f6dee4422414d7ae29bbf9ffc', checked: (_h = this.filters) === null || _h === void 0 ? void 0 : _h.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
    static get style() { return IrSalesByChannelFiltersStyle0; }
}, [2, "ir-sales-by-channel-filters", {
        "isLoading": [4, "is-loading"],
        "baseFilters": [16],
        "allowedProperties": [16],
        "filters": [32],
        "window": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-by-channel-filters", "ir-button", "ir-checkbox", "ir-date-picker", "ir-filters-panel", "ir-icons", "ir-m-combobox", "ir-range-picker", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-by-channel-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesByChannelFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-filters-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-m-combobox":
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

export { IrSalesByChannelFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-by-channel-filters2.js.map