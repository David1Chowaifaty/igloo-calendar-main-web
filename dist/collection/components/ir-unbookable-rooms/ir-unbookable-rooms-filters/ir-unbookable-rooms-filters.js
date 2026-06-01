import { Host, h } from "@stencil/core";
export class IrUnbookableRoomsFilters {
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
        return (h(Host, { key: '5ce41a2b6d42b17b16a441ae85763231964584c5' }, h("wa-card", { key: 'd6944f0b25fa8efa874983b01c89461b9d7bbbff', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '44527bce76395ec4ff7453ef08a788e46eab47e8', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: '0c174fa4d3ee65b986d830e3ed0ddd96e8ce7a65', name: "filter" }), h("h4", { key: 'fbc3d02fefd5b59f8f9ac82acf14500545022c7e', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: '3e9cb338e9fcb236318b3b512d5414e1c950ca60', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: 'e3f2561589a81a96d7dc0ddef6934349e12789dd', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '31677e12fd9cf0514d6baab2bcc9e3dfbebaf1e3', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: '66679c3cd4f9ddf1129e078c4d4be50b3cafc1d6', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: 'dbfbbcc27c8309b79e19e2ae68bbfa007e00c074', class: "filter__actions" }, h("ir-custom-button", { key: 'fb2d1b4379d988df4a8e754e6a0bc1ecb5d34afa', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '8b720c8f1f19ebe4ee03c83f0ce2bc1b1ad52bee', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
    }
    static get is() { return "ir-unbookable-rooms-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unbookable-rooms-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unbookable-rooms-filters.css"]
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
                "reflect": false,
                "defaultValue": "'default'"
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
            "unbookableRooms": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FetchUnBookableRoomsResult",
                    "resolved": "{ first_night_not_bookable: string; property_id: number; room_type_id: number; room_type_name: string; total_room_types_nbr: number; aname: string; country: { cities: null; code: null; currency: null; flag: null; gmt_offset: number; id: number; market_places: null; name: string; phone_prefix: null; }; }[]",
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
            }
        };
    }
    static get events() {
        return [{
                "method": "filtersChange",
                "name": "filtersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Partial<UnbookableRoomsFilters>",
                    "resolved": "{ period_to_check?: number; consecutive_period?: number; country?: string; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "UnbookableRoomsFilters": {
                            "location": "global",
                            "id": "global::UnbookableRoomsFilters"
                        }
                    }
                }
            }, {
                "method": "filtersReset",
                "name": "filtersReset",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "filtersSave",
                "name": "filtersSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-unbookable-rooms-filters.js.map
