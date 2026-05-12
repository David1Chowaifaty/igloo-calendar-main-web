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
        return (h(Host, { key: 'a2108720eb11e5e073b9cd661035b85543591c35' }, h("wa-card", { key: '0df5f7588ba8cdeb44d78bfb41c8287a11cd8af2', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '3e99391fc9944ff42b064c9c3dcb7837ea3a520e', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: '1dcee9f8e3d07b7aad47ba5a920442540ff2f190', name: "filter" }), h("h4", { key: 'cf25d28cff156777e5cf45b829c77c01cf8b09f5', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: 'cc774931f78b398ddd1f10a51bec0676f58a0ff6', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: '3f8b38ac2fca2f8fcaff5a1d254a8232d8aed0dc', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '09ead05050bb6ccefe9b37f4b69ade8d73d33f15', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: '557128f59cf21bb843745be3a54bdf30e7213dd8', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '2ed585a7fadb32c43a269d48453ab33725d8d3b2', class: "filter__actions" }, h("ir-custom-button", { key: 'ed9a03935c030f108d0e704ffa710c50e0ad1da0', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '7660257976a3c7b72be41b7e0e0afe07165cba3d', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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