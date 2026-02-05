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
        return (h(Host, { key: 'd19914869e915599c829eff7f549cad4c73e61a0' }, h("wa-card", { key: '43fbb27cbe60877f9f6d7aa47056b36c724cb5ba', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '9c1213d7e80a05b697a321627ebbf65ced46277a', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: 'cb71456c4b8eca0a765043b429aa75dfd4bb6ea0', name: "filter" }), h("h4", { key: 'f5f86fed5ff33561476afe97fd481368b0e675a2', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: 'bcdc1545dfd0fad508e6d40f1f1df22155c95d09', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: '694ec7ec75e34dfbf460bdecaf747f10eff6a076', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '2c10428d3d7dd34278d724dd097ae2fd5a0d8405', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: 'fbcbd22bdf027b8ab214c3d3f3e78fb67a27039f', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '78af2cb4ac59cc404c50a573ab1918765ea81937', class: "filter__actions" }, h("ir-custom-button", { key: '4c09445a80c5644b5afbc98e8a26468944b626a3', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '160bded0692202766b2a2201a3a7fe7f46ef4c53', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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