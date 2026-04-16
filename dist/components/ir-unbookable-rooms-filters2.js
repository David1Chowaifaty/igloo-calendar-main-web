import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irUnbookableRoomsFiltersCss = ".sc-ir-unbookable-rooms-filters-h{display:block}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters{min-width:300px}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters::part(body){display:flex;flex-direction:column;gap:1rem}.filters-card__header.sc-ir-unbookable-rooms-filters{display:flex;align-items:center;gap:0.5rem}.filters-card__title.sc-ir-unbookable-rooms-filters{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-l)}.filter__actions.sc-ir-unbookable-rooms-filters{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrUnbookableRoomsFiltersStyle0 = irUnbookableRoomsFiltersCss;

const IrUnbookableRoomsFilters = /*@__PURE__*/ proxyCustomElement(class IrUnbookableRoomsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.filtersReset = createEvent(this, "filtersReset", 7);
        this.filtersSave = createEvent(this, "filtersSave", 7);
    }
    mode = 'default';
    filters = { period_to_check: 2, consecutive_period: 14, country: 'all' };
    unbookableRooms = [];
    isLoading = false;
    filtersChange;
    filtersReset;
    filtersSave;
    normalizePositiveNumber(value, fallback) {
        const parsed = Number(value);
        if (Number.isFinite(parsed) && parsed > 0) {
            return Math.floor(parsed);
        }
        return fallback;
    }
    handlePeriodChange = (value) => {
        this.filtersChange.emit({
            period_to_check: this.normalizePositiveNumber(Number(value), this.filters.period_to_check),
        });
    };
    handleConsecutiveChange = (value) => {
        this.filtersChange.emit({
            consecutive_period: this.normalizePositiveNumber(Number(value), this.filters.consecutive_period),
        });
    };
    handleCountryChange = (value) => {
        this.filtersChange.emit({ country: value });
    };
    render() {
        const countries = new Map();
        this.unbookableRooms.forEach(entry => {
            if (entry.country?.id != null) {
                countries.set(entry.country.id, entry.country.name);
            }
        });
        const sortedCountries = [...countries.entries()].sort((a, b) => a[1].localeCompare(b[1], undefined, { sensitivity: 'base' }) || a[0] - b[0]);
        return (h(Host, { key: 'b662e6da1ab0abf7a94403a439a755043ce3597d' }, h("wa-card", { key: '741f093b89e3857403b59f045f9e06f56c25b20a', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '2adaae5376bd07743a3b528b2671edd159c0145e', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: '2771e487f4d9584dae44c179d1a2e6d85a221c0c', name: "filter" }), h("h4", { key: '4e045635d51bdc9ea3d6e0bcc32388905b6073ae', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: 'a524b1624ec7a7000a9907d0cda14174bf395b10', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: 'e217d2cd1a9e3e34b9e4123195716390d377fc80', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '9b25e7706e70cdff7cab23959524a7aaed7ac536', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: '82412ebbb59ba8e8f47bf17a1357ef41d1e2695c', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '865d9e0af33264fcb66657e3b1d500cefb4cbea0', class: "filter__actions" }, h("ir-custom-button", { key: '72e282c11256d8c734e323ac91b88b9fcdacb92f', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '6ca158eda4f9d55b75fa6d12165b3472055e1cc4', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
    }
    static get style() { return IrUnbookableRoomsFiltersStyle0; }
}, [2, "ir-unbookable-rooms-filters", {
        "mode": [1],
        "filters": [16],
        "unbookableRooms": [16],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unbookable-rooms-filters", "ir-custom-button", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unbookable-rooms-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnbookableRoomsFilters);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrUnbookableRoomsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-unbookable-rooms-filters2.js.map