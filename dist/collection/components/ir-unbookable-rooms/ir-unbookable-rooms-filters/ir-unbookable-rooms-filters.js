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
        return (h(Host, { key: '54588d45a6ac595818a953121c26a06dcedc6a91' }, h("wa-card", { key: '22fbf3fa4968e33ea64416a958a43fdbb5e1f95a', class: "unbookable-rooms__filters-card", appearance: "outlined" }, h("div", { key: '08d6dc0cfa4014725fbc527c15c8357db160dfb2', slot: "header", class: "filters-card__header" }, h("wa-icon", { key: '5539f038067b37acf3cc83bb7f2bcc6697b96378', name: "filter" }), h("h4", { key: 'b3a2bc4b2430ef5f1e9914e1a452ff57573ab099', class: "filters-card__title m-0" }, "Filters")), h("wa-select", { key: 'ba5b0dceec26441f9da1098a8d3fa4efbf7d5911', label: "Look ahead", size: "small", value: this.filters.period_to_check?.toString(), defaultValue: this.filters.period_to_check?.toString(), onchange: e => {
                this.handlePeriodChange(e.target.value);
            } }, Array.from({ length: 5 }, (_, i) => i + 2).map(value => (h("wa-option", { value: value.toString() }, value, " month", value > 1 ? 's' : '')))), h("ir-input", { key: '19b680e4b8366ac6effcd128222f52071ab7f6a8', type: "number", label: "Minimum consecutive nights", min: "7", hint: "Period where room types are closed for booking.", max: "60", value: this.filters.consecutive_period?.toString(), "onText-change": e => {
                this.handleConsecutiveChange(e.detail);
            } }), this.mode === 'mpo' && sortedCountries.length > 1 && (h("wa-select", { key: 'aba42ce08b2ca457b9df06e1066994c299c15488', label: "Country", size: "small", value: this.filters.country?.toString(), defaultValue: "all", onchange: e => {
                this.handleCountryChange(e.target.value);
            } }, h("wa-option", { key: 'a45a1c1fe235afebd5206ab9c0fee86e94df54ec', value: "all" }, "Show all"), sortedCountries.map(([id, name]) => (h("wa-option", { value: id.toString() }, name))))), h("div", { key: 'd83c612af361ddbd2a60d52c359cfe3eb1ec3d04', class: "filter__actions" }, h("ir-custom-button", { key: 'b6f844a44f469588bf096810c86ed7bbb6a0d341', onClickHandler: () => this.filtersReset.emit(), variant: "neutral", appearance: "filled" }, "Reset"), h("ir-custom-button", { key: '0f3daec0b4cf0acf71fb56422952f3434694d7f7', loading: this.isLoading, onClickHandler: () => this.filtersSave.emit(), variant: "brand" }, "Save")))));
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
