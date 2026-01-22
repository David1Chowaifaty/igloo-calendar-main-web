'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const debounce = require('./debounce-1b63fe86.js');
const moment = require('./moment-1780b03a.js');

const irUnbookableRoomsDataCss = ".sc-ir-unbookable-rooms-data-h{display:block;flex:1 1 0%}.unbookable-rooms__empty-state.sc-ir-unbookable-rooms-data{flex:1 1 0%}.unbookable-rooms__empty-state.sc-ir-unbookable-rooms-data::part(body){display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;text-align:center;height:100%}.unbookable-rooms__empty-state--icon.sc-ir-unbookable-rooms-data{font-size:1.5rem;color:var(--wa-color-success-fill-loud)}.unbookable-rooms__card-container.sc-ir-unbookable-rooms-data{flex:1 1 0%}.property-card__header.sc-ir-unbookable-rooms-data{display:flex;align-items:center;gap:1rem}.property-card__header.sc-ir-unbookable-rooms-data h3.sc-ir-unbookable-rooms-data{margin:0;font-size:1.05rem}.property-card__body.sc-ir-unbookable-rooms-data{display:grid}.issue.sc-ir-unbookable-rooms-data{display:grid;gap:1rem;padding:0.875rem 0}.issue__info.sc-ir-unbookable-rooms-data{display:grid;gap:4px;width:fit-content}.issue__progress-container.sc-ir-unbookable-rooms-data{display:flex;align-items:center;gap:0.5rem;flex:1 1 0%;width:100%;max-width:600px}.issue__progress-bar.sc-ir-unbookable-rooms-data{flex:1 1 0%}.issue__detail.sc-ir-unbookable-rooms-data::part(header),.issue__detail.sc-ir-unbookable-rooms-data::part(content){padding-left:0 !important;padding-right:0 !important}.issue__detail.sc-ir-unbookable-rooms-data::part(content){padding-bottom:0}[mode='default'].sc-ir-unbookable-rooms-data-h .issue__detail.sc-ir-unbookable-rooms-data::part(icon){display:none}.issue__detail.sc-ir-unbookable-rooms-data::part(header){padding:0}[mode='default'].sc-ir-unbookable-rooms-data-h .issue__detail.sc-ir-unbookable-rooms-data::part(header){cursor:default}[mode='default'].sc-ir-unbookable-rooms-data-h .issue__detail.sc-ir-unbookable-rooms-data::part(header):focus-visible{outline:none !important}[mode='mpo'].sc-ir-unbookable-rooms-data-h .issue__detail.sc-ir-unbookable-rooms-data::part(content){padding-inline-start:0.5rem !important}@media (min-width: 768px){.issue.sc-ir-unbookable-rooms-data{grid-template-columns:minmax(max-content, 300px) 1fr}}.period-chart.sc-ir-unbookable-rooms-data{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:1rem;font-size:0.875rem}.period-chart__track.sc-ir-unbookable-rooms-data{position:relative;height:4px;background:var(--wa-color-danger-fill-loud);border-radius:2px}.period-chart__marker.sc-ir-unbookable-rooms-data{position:absolute;top:50%;transform:translate(-50%, -50%)}.period-chart__marker.sc-ir-unbookable-rooms-data::before{content:'';width:8px;height:8px;background:var(--wa-color-brand-fill-loud);border-radius:50%;display:block}.period-chart__label.sc-ir-unbookable-rooms-data{position:absolute;top:-1.5rem;left:50%;transform:translateX(-50%);white-space:nowrap;font-weight:600;color:var(--wa-color-danger-fill-loud)}.period-chart__start.sc-ir-unbookable-rooms-data,.period-chart__end.sc-ir-unbookable-rooms-data{color:var(--wa-color-text-quiet)}.period-chart__fill.sc-ir-unbookable-rooms-data{position:absolute;height:100%;left:0;top:0;background:var(--wa-color-brand-fill-loud);border-radius:2px}.period-chart__fill.sc-ir-unbookable-rooms-data{border-radius:2px 0 0 2px}.period-chart__fill.sc-ir-unbookable-rooms-data,.period-chart__marker.sc-ir-unbookable-rooms-data{transition:width 0.3s ease, left 0.3s ease}.period-chart__legend.sc-ir-unbookable-rooms-data{display:flex;justify-content:flex-end;gap:1rem;margin-top:0.5rem;font-size:0.75rem}.period-chart__legend-item.sc-ir-unbookable-rooms-data{display:flex;align-items:center;gap:0.5rem;white-space:nowrap}.period-chart__legend-swatch.sc-ir-unbookable-rooms-data{width:10px;height:10px;border-radius:2px;flex-shrink:0}.period-chart__legend-swatch--bookable.sc-ir-unbookable-rooms-data{background:var(--wa-color-brand-fill-loud)}.period-chart__legend-swatch--blocked.sc-ir-unbookable-rooms-data{background:var(--wa-color-danger-fill-loud)}";
const IrUnbookableRoomsDataStyle0 = irUnbookableRoomsDataCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrUnbookableRoomsData = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    mode = 'default';
    isLoading = false;
    errorMessage = '';
    unbookableRooms = [];
    allowedProperties = null;
    filters = { period_to_check: 2, consecutive_period: 14, country: 'all' };
    progressFilters = { period_to_check: 2, consecutive_period: 14 };
    propertyNameFilter = '';
    todayFormatted = moment.hooks().format('MMM DD');
    getPropertyName(propertyId) {
        if (!this.allowedProperties?.length) {
            return `Property ${propertyId}`;
        }
        const match = this.allowedProperties.find(property => property.id === propertyId);
        return match?.name ?? `Property ${propertyId}`;
    }
    getPeriodOffset(firstNight) {
        if (!firstNight)
            return 0;
        const today = moment.hooks().startOf('day');
        const firstUnbookable = moment.hooks(firstNight, 'YYYY-MM-DD');
        if (!firstUnbookable.isValid()) {
            return 0;
        }
        const daysUntil = firstUnbookable.diff(today, 'days');
        // Account for consecutive nights
        const effectiveStart = daysUntil - (this.progressFilters.consecutive_period - 1);
        const offset = (effectiveStart / (this.progressFilters.period_to_check * 30)) * 100;
        return Math.max(0, Math.min(100, offset));
    }
    getEndDateFormatted() {
        return moment.hooks().add(this.progressFilters.period_to_check, 'months').format('MMM DD');
    }
    filterProperties(value) {
        this.propertyNameFilter = value?.trim().toLowerCase() ?? '';
    }
    render() {
        const totalIssues = this.unbookableRooms?.length ?? 0;
        const selectedCountryId = this.filters.country !== 'all' ? Number(this.filters.country) : null;
        const hasCountryFilter = this.mode === 'mpo' && Number.isFinite(selectedCountryId);
        const filteredRooms = hasCountryFilter ? this.unbookableRooms.filter(entry => entry.country?.id === selectedCountryId) : this.unbookableRooms;
        const groupedByProperty = filteredRooms.reduce((acc, entry) => {
            const list = acc.get(entry.property_id) ?? [];
            acc.set(entry.property_id, [...list, entry]);
            return acc;
        }, new Map());
        const groupedEntries = [...groupedByProperty.entries()].map(([propertyId, entries]) => ({
            propertyId,
            entries,
            name: this.getPropertyName(propertyId),
        }));
        const sortedEntries = groupedEntries.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }) || a.propertyId - b.propertyId);
        const filteredEntries = this.mode === 'mpo' && this.propertyNameFilter ? sortedEntries.filter(item => item.name.toLowerCase().includes(this.propertyNameFilter)) : sortedEntries;
        return (index.h(index.Host, null, !this.isLoading && !this.errorMessage && totalIssues === 0 && (index.h("wa-card", { class: "unbookable-rooms__empty-state" }, index.h("wa-icon", { name: "check-circle", class: "unbookable-rooms__empty-state--icon" }), index.h("p", null, "Hooray! Nothing to report."))), totalIssues > 0 && (index.h("wa-card", { class: "unbookable-rooms__card-container" }, this.mode === 'mpo' && (index.h("ir-input", { withClear: true, class: "mb-2", "onText-change": e => this.filterProperties(e.detail), style: { maxWidth: '400px' }, placeholder: "Search properties", appearance: "filled" }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }))), filteredEntries.map(({ propertyId, entries }, i) => [
            index.h("article", { class: "property-card" }, index.h("wa-details", { name: "issue-card", "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (this.mode === 'default') {
                        e.preventDefault();
                    }
                }, open: this.mode === 'default', appearance: "plain", class: "issue__detail" }, this.mode === 'mpo' && (index.h("header", { slot: "summary", class: "property-card__header" }, index.h("span", null, this.getPropertyName(propertyId)), index.h("b", null, "(", entries.length, ") "))), index.h("div", { class: "property-card__body" }, entries.map(entry => [
                index.h("div", { class: "issue" }, index.h("div", { class: "issue__info" }, index.h("span", { class: "issue__room" }, entry.room_type_name)), index.h("div", { class: "period-chart" }, index.h("span", { class: "period-chart__start" }, this.todayFormatted), index.h("div", { class: "period-chart__track" }, index.h("div", { title: "available", class: "period-chart__fill", style: {
                        width: `${this.getPeriodOffset(entry.first_night_not_bookable)}%`,
                    } }), index.h("div", { class: "period-chart__marker", style: {
                        left: `${this.getPeriodOffset(entry.first_night_not_bookable)}%`,
                    } }, index.h("span", { class: "period-chart__label" }, moment.hooks(entry.first_night_not_bookable, 'YYYY-MM-DD').format('MMM DD')))), index.h("span", { class: "period-chart__end" }, this.getEndDateFormatted()))),
            ])), index.h("section", { class: "period-chart__legend" }, index.h("div", { class: "period-chart__legend-item" }, index.h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--bookable" }), index.h("span", null, "Bookable period")), index.h("div", { class: "period-chart__legend-item" }, index.h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--blocked" }), index.h("span", null, "Not bookable period"))))),
            i !== filteredEntries.length - 1 && index.h("wa-divider", null),
        ])))));
    }
};
__decorate([
    debounce.Debounce(300)
], IrUnbookableRoomsData.prototype, "filterProperties", null);
IrUnbookableRoomsData.style = IrUnbookableRoomsDataStyle0;

const irUnbookableRoomsFiltersCss = ".sc-ir-unbookable-rooms-filters-h{display:block}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters{min-width:300px}.unbookable-rooms__filters-card.sc-ir-unbookable-rooms-filters::part(body){display:flex;flex-direction:column;gap:1rem}.filters-card__header.sc-ir-unbookable-rooms-filters{display:flex;align-items:center;gap:0.5rem}.filters-card__title.sc-ir-unbookable-rooms-filters{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-l)}.filter__actions.sc-ir-unbookable-rooms-filters{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrUnbookableRoomsFiltersStyle0 = irUnbookableRoomsFiltersCss;

const IrUnbookableRoomsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange", 7);
        this.filtersReset = index.createEvent(this, "filtersReset", 7);
        this.filtersSave = index.createEvent(this, "filtersSave", 7);
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
        return (index.h(index.Host, { key: '70b55eaa7f18dbab875f6c0852bfca3268c19a52' }, index.h("wa-card", { key: 'f10b107f1759636bf4f16625475c05f126d47ac9', class: "unbookable-rooms__filters-card", appearance: "outlined" }, index.h("div", { key: '1a761e288a69fc6899794da8d2b64a7fc0aac4ad', slot: "header", class: "filters-card__header" }, index.h("wa-icon", { key: '3c773d2277d9c52a653059396575d858f7528313', name: "filter" }), index.h("h4", { key: '97c6d09744b71fcf052b4568eca8acbd96a4c51c', class: "filters-card__title m-0" }, "Filters")), index.h("wa-select", { key: '71e12540babd062897f721160147d6150c8db2d3', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (index.h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), index.h("ir-input", { key: 'e3ed05aa3a6448642d03f6ba6de57afda0e77b36', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (index.h("wa-select", { key: '77d9f702c6ecb2273255902ca9949a05e6441ecb', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, index.h("wa-option", { key: '72e39c94cd8f14eb9522b84aa1c4973d0718257c', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (index.h("wa-option", { value: id.toString() }, name))))), index.h("div", { key: '93b354df686ab4033e68dee22f440a1f0de04db8', class: "filter__actions" }, index.h("ir-custom-button", { key: 'e2b7042edfce1f28deaadda1d8c0bd63ff191e1a', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), index.h("ir-custom-button", { key: '01e539cb5225fb3d155c31a8842f38006c899d54', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
    }
};
IrUnbookableRoomsFilters.style = IrUnbookableRoomsFiltersStyle0;

exports.ir_unbookable_rooms_data = IrUnbookableRoomsData;
exports.ir_unbookable_rooms_filters = IrUnbookableRoomsFilters;

//# sourceMappingURL=ir-unbookable-rooms-data_2.cjs.entry.js.map