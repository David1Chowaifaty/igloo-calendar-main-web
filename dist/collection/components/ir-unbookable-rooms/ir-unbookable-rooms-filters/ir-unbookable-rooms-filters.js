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
        return (h(Host, { key: '876cfa80c9718602a4e1b78bfe59f0f108ac2dac' }, h("wa-card", { key: '005525f2a5abdf3c19359855e0cd31aabd5c0c34', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: 'b33f7f32a03bc8418e4fbdf2e7186dde58fda9a6', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: '7e73d633c7a3afb2717df1e2b16a2f43bde4bddd', name: "filter" }), h("h4", { key: 'a7a64b2d78e86f08e3e1a1bdcdab9e8c6fd5f6cb', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: '2f8aac13403ec2b4cf4fd6867a7d71888219b81d', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: '8785fff083eeaffdd3e6bfb8c533e62c4b024c63', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: '3467bdcc7fefd6b54e6f035e3899af988e1064ae', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: 'e040b340e742462883049ae05508b1d1b36320d4', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: '0c35b0c3df80d3534ae32708d9456e1c69d08685', class: "filter__actions" }, h("ir-custom-button", { key: 'bf1347f19ea867cbee285b70368726b8fe2cd3d9', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '6c5e9ba34bb489134f200b84b18b5b7a7bcf7b44', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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
