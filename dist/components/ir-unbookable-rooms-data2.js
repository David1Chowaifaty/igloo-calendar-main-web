import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { D as Debounce } from './debounce.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

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
const IrUnbookableRoomsData = /*@__PURE__*/ proxyCustomElement(class IrUnbookableRoomsData extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    mode = 'default';
    isLoading = false;
    errorMessage = '';
    unbookableRooms = [];
    allowedProperties = null;
    filters = { period_to_check: 2, consecutive_period: 14, country: 'all' };
    progressFilters = { period_to_check: 2, consecutive_period: 14 };
    propertyNameFilter = '';
    todayFormatted = hooks().format('MMM DD');
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
        const today = hooks().startOf('day');
        const firstUnbookable = hooks(firstNight, 'YYYY-MM-DD');
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
        return hooks().add(this.progressFilters.period_to_check, 'months').format('MMM DD');
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
        return (h(Host, null, !this.isLoading && !this.errorMessage && totalIssues === 0 && (h("wa-card", { class: "unbookable-rooms__empty-state" }, h("wa-icon", { name: "check-circle", class: "unbookable-rooms__empty-state--icon" }), h("p", null, "Hooray! Nothing to report."))), totalIssues > 0 && (h("wa-card", { class: "unbookable-rooms__card-container" }, this.mode === 'mpo' && (h("ir-input", { withClear: true, class: "mb-2", "onText-change": e => this.filterProperties(e.detail), style: { maxWidth: '400px' }, placeholder: "Search properties", appearance: "filled" }, h("wa-icon", { slot: "start", name: "magnifying-glass" }))), filteredEntries.map(({ propertyId, entries }, i) => [
            h("article", { class: "property-card" }, h("wa-details", { name: "issue-card", "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (this.mode === 'default') {
                        e.preventDefault();
                    }
                }, open: this.mode === 'default', appearance: "plain", class: "issue__detail" }, this.mode === 'mpo' && (h("header", { slot: "summary", class: "property-card__header" }, h("span", null, this.getPropertyName(propertyId)), h("b", null, "(", entries.length, ") "))), h("div", { class: "property-card__body" }, entries.map(entry => [
                h("div", { class: "issue" }, h("div", { class: "issue__info" }, h("span", { class: "issue__room" }, entry.room_type_name)), h("div", { class: "period-chart" }, h("span", { class: "period-chart__start" }, this.todayFormatted), h("div", { class: "period-chart__track" }, h("div", { title: "available", class: "period-chart__fill", style: {
                        width: `${this.getPeriodOffset(entry.first_night_not_bookable)}%`,
                    } }), h("div", { class: "period-chart__marker", style: {
                        left: `${this.getPeriodOffset(entry.first_night_not_bookable)}%`,
                    } }, h("span", { class: "period-chart__label" }, hooks(entry.first_night_not_bookable, 'YYYY-MM-DD').format('MMM DD')))), h("span", { class: "period-chart__end" }, this.getEndDateFormatted()))),
            ])), h("section", { class: "period-chart__legend" }, h("div", { class: "period-chart__legend-item" }, h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--bookable" }), h("span", null, "Bookable period")), h("div", { class: "period-chart__legend-item" }, h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--blocked" }), h("span", null, "Not bookable period"))))),
            i !== filteredEntries.length - 1 && h("wa-divider", null),
        ])))));
    }
    static get style() { return IrUnbookableRoomsDataStyle0; }
}, [2, "ir-unbookable-rooms-data", {
        "mode": [513],
        "isLoading": [4, "is-loading"],
        "errorMessage": [1, "error-message"],
        "unbookableRooms": [16],
        "allowedProperties": [16],
        "filters": [16],
        "progressFilters": [16],
        "propertyNameFilter": [32]
    }]);
__decorate([
    Debounce(300)
], IrUnbookableRoomsData.prototype, "filterProperties", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unbookable-rooms-data", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unbookable-rooms-data":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnbookableRoomsData);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrUnbookableRoomsData as I, defineCustomElement as d };

//# sourceMappingURL=ir-unbookable-rooms-data2.js.map