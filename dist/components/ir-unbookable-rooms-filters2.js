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
        return (h(Host, { key: '8727cc283a0304da38551dc9da8ef35254526655' }, h("wa-card", { key: 'ea62126e2312e94053dc721e726cf0b1bfcbe800', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: 'b410ca328fe78a22cf8822a41b5c9fa2f99e6278', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: 'c33e8a643254fc279ff16232d91288c1636e1b93', name: "filter" }), h("h4", { key: 'af364e32807166c568c8598b9383227797b9e395', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: 'd07604659f9cb5e717ecb58061cf54a62da78ec8', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: 'db73d2e68ddc844f3690c21d032f9491fac677ac', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '452a2729ddd6c441ecbf46860a73920513ff1e41', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: '23dfc9a48b460903c786671e00e5fd7b058e017e', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '905f84e5a4344df26fbd7345310c3f45debd5616', class: "filter__actions" }, h("ir-custom-button", { key: '8bfdf32ca5e062cad5bc1045ecdc6de5f04c0f9d', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '2d137bf60b3c6673ab5c03f0183e7af043932f32', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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