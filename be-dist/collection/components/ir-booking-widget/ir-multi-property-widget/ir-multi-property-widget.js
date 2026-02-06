import { Host, h } from "@stencil/core";
import localizedWords from "../../../stores/localization.store";
export class IrMultiPropertyWidget {
    constructor() {
        this.linkedProperties = [];
    }
    capitalize(word) {
        if (!word)
            return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    render() {
        var _a, _b, _c, _d;
        const noPropertiesFound = this.level2Properties.properties.get(this.selectedCity).length === 0;
        return (h(Host, { key: 'cb24abfb31b558d28cb7206305b63af5576d5412' }, h("div", { key: '1f925ab5b8178e7564982229d016db49361c98a1', class: "ir-multi-property-widget__body", part: "container" }, h("ir-select", { key: 'b5f7da5fc75f9af287af760b15f65f63d4731f8b', class: "ir-multi-property-widget__select", part: "property-select", value: this.selectedCity, onValueChange: e => this.cityChange.emit(e.detail.toString()), data: (_b = (_a = this.level2Properties) === null || _a === void 0 ? void 0 : _a.cities) === null || _b === void 0 ? void 0 : _b.map(city => ({
                id: city,
                value: this.capitalize(city),
            })), icon: true }, h("ir-icons", { key: 'ca55e385a2eb52284b5b973c20bde8ec2a2ec162', name: 'location-dot', slot: "icon", removeClassName: true, height: 16, width: 16 })), noPropertiesFound ? (h("p", { class: "ir-multi-property-widget__not-found" }, "No property found")) : (h("ir-select", { icon: true, class: "ir-multi-property-widget__select", part: "property-select", value: this.selectedPropertyId, onValueChange: e => this.propertyChange.emit(e.detail), data: (_c = this.level2Properties.properties.get(this.selectedCity)) === null || _c === void 0 ? void 0 : _c.map(property => ({
                id: property.property_id,
                value: property.property_name,
            })) }, h("ir-icons", { name: 'hotel', slot: "icon", removeClassName: true, height: 16, width: 16 }))), h("ir-widget-date-popup", { key: '5d5013010249a7c41868265653aa32d87ba18cce', class: "ir-widget__date-popup", dateModifiers: this.dateModifiers, "absolute-icon": true, dates: this.dates, locale: this.locale, disabled: noPropertiesFound, maxSpanDays: (_d = this.property) === null || _d === void 0 ? void 0 : _d.max_nights, isLoading: this.isFetchingProperty, onDateChange: e => {
                this.dateChange.emit(e.detail);
            } }), h("ir-widget-occupancy-popup", { key: 'c17c94e55bf0714ad904712b5027a7cee6595d5e', isLoading: this.isFetchingProperty, disabled: noPropertiesFound, "absolute-icon": true, class: "ir-widget__guests-popup", error: this.error, guests: this.guests, property: this.property, onGuestsChange: e => this.guestsChange.emit(e.detail) }), h("ir-button", { key: '5eda39cb991c1dbf4c8462fcc37b789fc7825fb9', part: "cta", disabled: this.isFetchingProperty || noPropertiesFound, size: "md", label: localizedWords.entries.Lcz_BookNow, onButtonClick: () => this.bookNow.emit() }))));
    }
    static get is() { return "ir-multi-property-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-multi-property-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-multi-property-widget.css"]
        };
    }
    static get properties() {
        return {
            "position": {
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
                "attribute": "position",
                "reflect": true
            },
            "linkedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty[]",
                    "resolved": "IExposedProperty[]",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
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
            "selectedPropertyId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
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
                "attribute": "selected-property-id",
                "reflect": false
            },
            "dateModifiers": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "date-modifiers",
                "reflect": false
            },
            "property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
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
                "setter": false
            },
            "isFetchingProperty": {
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
                "attribute": "is-fetching-property",
                "reflect": false
            },
            "locale": {
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
                "attribute": "locale",
                "reflect": false
            },
            "dates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from_date: Date | null; to_date: Date | null }",
                    "resolved": "{ from_date: Date; to_date: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "setter": false
            },
            "guests": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ adultCount: number; childrenCount: number; infants: number; childrenAges: string[] }",
                    "resolved": "{ adultCount: number; childrenCount: number; infants: number; childrenAges: string[]; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "error": {
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
                "attribute": "error",
                "reflect": false
            },
            "locations": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "level2Properties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CombinedLevel2Properties",
                    "resolved": "{ cities: string[]; properties: Map<string, PropertiesByLevel2Response[]>; }",
                    "references": {
                        "CombinedLevel2Properties": {
                            "location": "import",
                            "path": "../ir-booking-widget",
                            "id": "src/components/ir-booking-widget/ir-booking-widget.tsx::CombinedLevel2Properties"
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
                "setter": false
            },
            "selectedCity": {
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
                "attribute": "selected-city",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "propertyChange",
                "name": "propertyChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                }
            }, {
                "method": "cityChange",
                "name": "cityChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ from_date: Date | null; to_date: Date | null }",
                    "resolved": "{ from_date: Date; to_date: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }, {
                "method": "guestsChange",
                "name": "guestsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ adultCount: number; childrenCount: number; infants: number; childrenAges: string[] }",
                    "resolved": "{ adultCount: number; childrenCount: number; infants: number; childrenAges: string[]; }",
                    "references": {}
                }
            }, {
                "method": "bookNow",
                "name": "bookNow",
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
//# sourceMappingURL=ir-multi-property-widget.js.map
