var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from "@stencil/core";
import { Debounce } from "../../../decorators/debounce";
import moment from "moment";
export class IrUnbookableRoomsData {
    mode = 'default';
    isLoading = false;
    errorMessage = '';
    unbookableRooms = [];
    allowedProperties = null;
    filters = { period_to_check: 2, consecutive_period: 14, country: 'all' };
    progressFilters = { period_to_check: 2, consecutive_period: 14 };
    propertyNameFilter = '';
    todayFormatted = moment().format('MMM DD');
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
        const today = moment().startOf('day');
        const firstUnbookable = moment(firstNight, 'YYYY-MM-DD');
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
        return moment().add(this.progressFilters.period_to_check, 'months').format('MMM DD');
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
                    } }, h("span", { class: "period-chart__label" }, moment(entry.first_night_not_bookable, 'YYYY-MM-DD').format('MMM DD')))), h("span", { class: "period-chart__end" }, this.getEndDateFormatted()))),
            ])), h("section", { class: "period-chart__legend" }, h("div", { class: "period-chart__legend-item" }, h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--bookable" }), h("span", null, "Bookable period")), h("div", { class: "period-chart__legend-item" }, h("span", { class: "period-chart__legend-swatch period-chart__legend-swatch--blocked" }), h("span", null, "Not bookable period"))))),
            i !== filteredEntries.length - 1 && h("wa-divider", null),
        ])))));
    }
    static get is() { return "ir-unbookable-rooms-data"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unbookable-rooms-data.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unbookable-rooms-data.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UnbookableRoomsMode",
                    "resolved": "\"default\" | \"mpo\"",
                    "references": {
                        "UnbookableRoomsMode": {
                            "location": "global",
                            "id": "global::UnbookableRoomsMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "errorMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "error-message",
                "reflect": false,
                "defaultValue": "''"
            },
            "unbookableRooms": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FetchUnBookableRoomsResult",
                    "resolved": "{ first_night_not_bookable: string; property_id: number; room_type_id: number; room_type_name: string; country: { cities: null; code: null; currency: null; flag: null; gmt_offset: number; id: number; market_places: null; name: string; phone_prefix: null; }; }[]",
                    "references": {
                        "FetchUnBookableRoomsResult": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::FetchUnBookableRoomsResult"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "allowedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedProperties",
                    "resolved": "{ name?: string; id?: number; }[]",
                    "references": {
                        "AllowedProperties": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::AllowedProperties"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "UnbookableRoomsFilters",
                    "resolved": "{ period_to_check: number; consecutive_period: number; country: string; }",
                    "references": {
                        "UnbookableRoomsFilters": {
                            "location": "global",
                            "id": "global::UnbookableRoomsFilters"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ period_to_check: 2, consecutive_period: 14, country: 'all' }"
            },
            "progressFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ period_to_check: number; consecutive_period: number; }",
                    "resolved": "{ period_to_check: number; consecutive_period: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ period_to_check: 2, consecutive_period: 14 }"
            }
        };
    }
    static get states() {
        return {
            "propertyNameFilter": {}
        };
    }
}
__decorate([
    Debounce(300)
], IrUnbookableRoomsData.prototype, "filterProperties", null);
//# sourceMappingURL=ir-unbookable-rooms-data.js.map
