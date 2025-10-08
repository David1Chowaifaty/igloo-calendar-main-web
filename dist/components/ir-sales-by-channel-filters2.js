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
        var _a, _b, _c, _d, _e, _f, _g;
        console.log(this.filters);
        return (h("ir-filters-panel", { key: '58aeea7f41bf6de9653fafc1f0b5de13f98ce0a0', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, h("fieldset", { key: '1bf62d9de00f7dfdcca20533b5f24bcae3d9be37', class: "pt-1 filter-group" }, h("label", { key: '90d9b8d78851cf42c8de70e873838f4f893b6179', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'd8645c65bb193741366960e9db2ad2ab3db13f11', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (h("fieldset", { key: '9a442d0d6cf506577fdcf24b92623f249df28d0a', class: "filter-group" }, h("label", { key: '06691f7b9b14e19b8457927efb21628e3a97e876', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), h("ir-m-combobox", { key: '75d7767aae830ebd3432b66e05e08e0644b51dbc', defaultOption: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.LIST_AC_ID) === null || _c === void 0 ? void 0 : _c.length) === ((_d = this.allowedProperties) === null || _d === void 0 ? void 0 : _d.length) ? 'all' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.LIST_AC_ID[0]) === null || _f === void 0 ? void 0 : _f.toString(), onOptionChange: e => {
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
            ] }))), h("fieldset", { key: 'b81fcfb6d5167d07bff1d209acac249d32280340', class: "filter-group" }, h("label", { key: '05dcce13aec45da3cfb0a8170bbd0dc3a6c84bf4', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '4c960cc66b807ca4ac85ef87258d326234516645', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'e9d6f89c941f4d272fc3fb07be8f178f482beb1e', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '05b80535609df3c060e37880a8d1b35290db3a4a', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '7c86d346b2c0ecd3861619eae079da05ace58dce', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '590a2041fdb834093e6a8b4e61025d86ed8f9d01', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '649e1652f1c431da18a1001a2855264d4a4b5a39', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'bd79c883430c7e6cda81c6962b07baeb97f642b5', checked: (_g = this.filters) === null || _g === void 0 ? void 0 : _g.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
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