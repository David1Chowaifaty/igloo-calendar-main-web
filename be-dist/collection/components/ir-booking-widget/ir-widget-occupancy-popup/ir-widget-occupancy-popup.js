import { Host, h } from "@stencil/core";
import localizedWords from "../../../stores/localization.store";
export class IrWidgetOccupancyPopup {
    constructor() {
        this.absoluteIcon = false;
    }
    renderAdultChildTrigger(slot = 'trigger') {
        var _a, _b, _c;
        const { adultCount, childrenCount } = this.guests || { adultCount: 0, childrenCount: 0 };
        const childMaxAge = (_c = (_b = (_a = this.property) === null || _a === void 0 ? void 0 : _a.adult_child_constraints) === null || _b === void 0 ? void 0 : _b.child_max_age) !== null && _c !== void 0 ? _c : 0;
        return (h("button", { disabled: this.disabled, class: `ir-widget__guests-trigger relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "guests-trigger", slot: slot }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("ir-icons", { name: "user", class: `${slot}-icon`, removeClassName: true, height: 16, width: 16, svgClassName: "ir-widget__icon" })), h("p", { class: 'ir-widget__guests' }, adultCount > 0 ? (h("span", null, h("span", { class: "ir-widget__text-lower" }, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), childMaxAge > 0 && (h("span", { class: "ir-widget__text-lower" }, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", null, "Guests")))));
    }
    renderLoadingTrigger(slot = 'trigger') {
        return (h("div", { class: `ir-widget__guests-trigger ir-widget__trigger--loading relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "guests-trigger", slot: slot, "aria-busy": "true" }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex items-center' : '' }, h("span", { class: "ir-widget__loading-icon ir-widget__shimmer" })), h("div", { class: "ir-widget__loading-text" }, h("span", { class: "ir-widget__loading-line --primary ir-widget__shimmer" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h(Host, { key: 'b2e71727e479fbe8e21c03d8a5e5d52df843e69f' }, h("ir-popup", { key: '7b571c2bda963fd07cc54856170f3afeaac01436', class: "ir-multi-property-occupancy-popup__popup", ref: el => (this.guestsWidgetPopupRef = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderAdultChildTrigger('anchor'), !this.isLoading && (h("ir-guest-counter", { key: 'de52b37ff24768990add1f57c64d89307e640129', error: this.error, adults: (_a = this.guests) === null || _a === void 0 ? void 0 : _a.adultCount, child: (_b = this.guests) === null || _b === void 0 ? void 0 : _b.childrenCount, minAdultCount: 0, maxAdultCount: (_d = (_c = this.property) === null || _c === void 0 ? void 0 : _c.adult_child_constraints) === null || _d === void 0 ? void 0 : _d.adult_max_nbr, maxChildrenCount: (_f = (_e = this.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints) === null || _f === void 0 ? void 0 : _f.child_max_nbr, childMaxAge: (_h = (_g = this.property) === null || _g === void 0 ? void 0 : _g.adult_child_constraints) === null || _h === void 0 ? void 0 : _h.child_max_age, onUpdateCounts: e => this.guestsChange.emit(Object.assign({}, e.detail)), part: "guest-counter", onCloseGuestCounter: () => this.guestsWidgetPopupRef.close() })))));
    }
    static get is() { return "ir-widget-occupancy-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-widget-occupancy-popup.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-widget-occupancy-popup.css"]
        };
    }
    static get properties() {
        return {
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
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false
            },
            "absoluteIcon": {
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
                "attribute": "absolute-icon",
                "reflect": false,
                "defaultValue": "false"
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
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
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
            }];
    }
}
//# sourceMappingURL=ir-widget-occupancy-popup.js.map
