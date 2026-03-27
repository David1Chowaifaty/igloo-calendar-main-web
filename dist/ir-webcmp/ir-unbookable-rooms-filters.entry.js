import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';

const irUnbookableRoomsFiltersCss = ".sc-ir-unbookable-rooms-filters-h{display:block}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters{min-width:300px}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters::part(body){display:flex;flex-direction:column;gap:1rem}.filters-card__header.sc-ir-unbookable-rooms-filters{display:flex;align-items:center;gap:0.5rem}.filters-card__title.sc-ir-unbookable-rooms-filters{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-l)}.filter__actions.sc-ir-unbookable-rooms-filters{display:flex;justify-content:flex-end;gap:0.5rem}";

const IrUnbookableRoomsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'bb5e0704cc376912a9cd99ba76899d626411fcac' }, h("wa-card", { key: '378c3fcf1f8f8acc2f9d4187f8ee2088ccc2011f', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '834ab4a5639c2e609cc8b14fe4a4148d978e010f', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: 'ef9484e7e9ac41124c451138fde64b2ab1181c94', name: "filter" }), h("h4", { key: 'c8133a226800264e179a8caab174b95dace2eeb8', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: '4c517d2b17b5bb95183c1369f18afc657280b278', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: 'eff9718dfdf12f1053aac95eb51a4987236deea0', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: 'cce5ad3e409e408930a809b8e293380994979429', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: '5704a5934ce8d2422fdcd5511219158c498cb7f0', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '1a73b6cb2cfb0db28b368c59496a4c448e5a7656', class: "filter__actions" }, h("ir-custom-button", { key: '5e0e9db09791de5076be41f6e7d706d1504e95f3', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: 'aafff6a7b8bb6e81d18eaf5c29632485599fc6a7', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
    }
};
IrUnbookableRoomsFilters.style = irUnbookableRoomsFiltersCss;

export { IrUnbookableRoomsFilters as ir_unbookable_rooms_filters };

//# sourceMappingURL=ir-unbookable-rooms-filters.entry.js.map