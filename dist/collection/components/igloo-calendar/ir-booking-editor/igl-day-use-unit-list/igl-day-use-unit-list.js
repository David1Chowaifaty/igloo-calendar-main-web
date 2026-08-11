import { Fragment, Host, h } from "@stencil/core";
import { getExtraServiceDefaultPrice } from "../../../../stores/calendar-data";
/** `_SVC_CATEGORY` short code for Day Use — used to look up the property's configured default price. */
const DAY_USE_CATEGORY_CODE = 'DUZ';
export class IglDayUseUnitList {
    /** Room types returned by the day-use availability check. */
    roomTypes = [];
    /** Fallback day-use price used only if the property has no `SVC_DEFAULT_PRICE_DUZ` configured, editable per unit. */
    price;
    /** Net (tax-exclusive) version of the resolved gross default price, pre-computed by the parent (`calculateNetAmount`) — shown as the input's default value so an untouched default reads the same way a typed custom (net) amount does. */
    netPrice = null;
    currency;
    /** Unit ids already booked for day use on the target date (from `getDayUseBookingsForCalendar`) — excluded from the list. */
    bookedUnitIds = new Set();
    /** When a specific unit was preselected (e.g. double-click on a room title in the calendar), only that unit is shown. */
    unitId;
    /** Unit id currently being resolved (gross-price lookup) after "Book" was clicked — disables the other buttons. */
    resolvingUnitId = null;
    /** Whether an availability check has completed at least once — distinguishes "no search yet" (render nothing) from "searched, zero units" (show empty state). */
    hasSearched = false;
    priceOverrides = {};
    unitSelected;
    getAvailableUnits(roomType) {
        const assignableUnits = roomType.rateplans?.flatMap(rp => rp.assignable_units ?? []) ?? [];
        const units = assignableUnits.length === 0
            ? (roomType.physicalrooms ?? [])
            : (() => {
                const unavailablePrIds = new Set(assignableUnits.filter(u => u.Is_Not_Available).map(u => u.pr_id));
                return (roomType.physicalrooms ?? []).filter(unit => !unavailablePrIds.has(unit.id));
            })();
        const bookableUnits = units.filter(unit => !this.bookedUnitIds?.has(unit.id));
        if (this.unitId === undefined || this.unitId === null || this.unitId === '') {
            return bookableUnits;
        }
        return bookableUnits.filter(unit => unit.id.toString() === this.unitId.toString());
    }
    get defaultPrice() {
        const svcDefaultPrice = getExtraServiceDefaultPrice(DAY_USE_CATEGORY_CODE);
        return svcDefaultPrice !== undefined ? Number(svcDefaultPrice) : (this.price ?? 0);
    }
    /** What's actually shown as the default input value — the net-converted price when it's ready, otherwise the gross default as a fallback while it resolves. */
    get displayDefaultPrice() {
        return this.netPrice ?? this.defaultPrice;
    }
    getPrice(unitId) {
        return this.priceOverrides[unitId] ?? this.displayDefaultPrice;
    }
    isCustomPrice(unitId) {
        return this.priceOverrides[unitId] !== undefined;
    }
    render() {
        const availableRoomTypes = (this.roomTypes ?? []).filter(roomType => roomType.is_available_to_book);
        const hasBookableUnit = availableRoomTypes.some(roomType => this.getAvailableUnits(roomType).length > 0);
        if (this.hasSearched && !hasBookableUnit) {
            return (h("div", { class: "day-use-unit-list__empty-container" }, h("ir-empty-state", { message: "No units available for the selected date." })));
        }
        return (h(Host, null, h("div", { class: "day-use-unit-list__grid" }, availableRoomTypes.map(roomType => {
            const units = this.getAvailableUnits(roomType);
            if (units.length === 0) {
                return null;
            }
            return (h(Fragment, null, h("h5", { class: "day-use-unit-list__roomtype-name" }, roomType.name), units.map(unit => [
                h("span", { class: "day-use-unit-list__unit-name", key: `day-use-unit-name-${unit.id}` }, unit.name),
                h("ir-input", { key: `day-use-unit-price-${unit.id}`, class: "day-use-unit-list__price-input", size: "s", mask: "price", value: this.getPrice(unit.id).toString(), "onText-change": e => (this.priceOverrides = { ...this.priceOverrides, [unit.id]: Number(e.detail) }) }, h("span", { slot: "start" }, this.currency?.symbol)),
                h("ir-custom-button", { key: `day-use-unit-book-${unit.id}`, "data-testid": "book", type: "button", size: "s", variant: "brand", loading: this.resolvingUnitId === unit.id, disabled: this.resolvingUnitId !== null && this.resolvingUnitId !== unit.id, onClickHandler: () => this.unitSelected.emit({ unit, roomType, price: this.getPrice(unit.id), isCustomPrice: this.isCustomPrice(unit.id) }) }, "Book"),
            ])));
        }))));
    }
    static get is() { return "igl-day-use-unit-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-day-use-unit-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-day-use-unit-list.css"]
        };
    }
    static get properties() {
        return {
            "roomTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType[]",
                    "resolved": "RoomType[]",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType",
                            "referenceLocation": "RoomType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Room types returned by the day-use availability check."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "price": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Fallback day-use price used only if the property has no `SVC_DEFAULT_PRICE_DUZ` configured, editable per unit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "price"
            },
            "netPrice": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Net (tax-exclusive) version of the resolved gross default price, pre-computed by the parent (`calculateNetAmount`) \u2014 shown as the input's default value so an untouched default reads the same way a typed custom (net) amount does."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "net-price",
                "defaultValue": "null"
            },
            "currency": {
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
                "reflect": false,
                "attribute": "currency"
            },
            "bookedUnitIds": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Set<number>",
                    "resolved": "Set<number>",
                    "references": {
                        "Set": {
                            "location": "global",
                            "id": "global::Set"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unit ids already booked for day use on the target date (from `getDayUseBookingsForCalendar`) \u2014 excluded from the list."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Set()"
            },
            "unitId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "When a specific unit was preselected (e.g. double-click on a room title in the calendar), only that unit is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "unit-id"
            },
            "resolvingUnitId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unit id currently being resolved (gross-price lookup) after \"Book\" was clicked \u2014 disables the other buttons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resolving-unit-id",
                "defaultValue": "null"
            },
            "hasSearched": {
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
                    "text": "Whether an availability check has completed at least once \u2014 distinguishes \"no search yet\" (render nothing) from \"searched, zero units\" (show empty state)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has-searched",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "priceOverrides": {}
        };
    }
    static get events() {
        return [{
                "method": "unitSelected",
                "name": "unitSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ unit: PhysicalRoom; roomType: RoomType; price: number; isCustomPrice: boolean }",
                    "resolved": "{ unit: PhysicalRoom; roomType: RoomType; price: number; isCustomPrice: boolean; }",
                    "references": {
                        "PhysicalRoom": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::PhysicalRoom",
                            "referenceLocation": "PhysicalRoom"
                        },
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType",
                            "referenceLocation": "RoomType"
                        }
                    }
                }
            }];
    }
}
