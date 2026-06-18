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
        return (h(Host, { key: '43e8d6d2c6fb001a9abb03707db4b78f9844d1b1' }, h("wa-card", { key: '51e08f9948d82e537bbc35c8fe1947fe2b4a65b2', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: 'cfd134e36b532105e52d4c3c5c356e1a9bd390ef', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: 'a26e3ed23e59cc9a19f3dd6d24c23b8e277be9c2', name: "filter" }), h("h4", { key: '9d659038a2bbf0c5ce315331c8240d82ddcddd2c', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: '973fe24dd8074583b0c94c2a818b18a3e87cbfd5', label: "Look ahead", size: "s", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: '60b227204c1ab501890b4a8ca37b97595b60c067', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: 'b0b464ea4429b6047ab20888a7f5ec11ed9a08e6', label: "Country", size: "s", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: 'fa2d12840f78a2239193fb8209aed191a81a1fcd', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '699da7e91d23a852af58f48e3558d43a24fb6190', class: "filter__actions" }, h("ir-custom-button", { key: '6693acf408366e2ad2f06b98d360ea3bfa7fa5f1', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '574c1b51cef65688e031ea0df6e6b38d99ed4803', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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
                "reflect": false,
                "attribute": "mode",
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
                            "id": "src/services/property.service.ts::FetchUnBookableRoomsResult",
                            "referenceLocation": "FetchUnBookableRoomsResult"
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
                "reflect": false,
                "attribute": "is-loading",
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
                    "resolved": "{ period_to_check: number; consecutive_period: number; country: string; }",
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
