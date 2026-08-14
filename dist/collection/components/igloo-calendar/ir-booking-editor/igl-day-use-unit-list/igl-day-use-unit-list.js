import { Fragment, Host, h } from "@stencil/core";
import calendar_data, { getExtraServiceDefaultPrice } from "../../../../stores/calendar-data";
import booking_store from "../../../../stores/booking.store";
import { DAY_USE_CATEGORY_CODE, getDayUseUnitAvailability } from "../../../../utils/booking";
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
    /**
     * The day-use extra service currently being edited (`ir-booking-editor` `mode="EDIT_DAY_USE"`).
     * Its unit is exempt from `bookedUnitIds` (it's its own existing booking, not a conflict), never
     * shows the upcoming-check-in warning (same reason), gets its price prefilled, and is highlighted.
     */
    currentExtraService;
    priceOverrides = {};
    unitSelected;
    componentWillLoad() {
        const { dayUseSelection } = booking_store;
        if (dayUseSelection && dayUseSelection.isCustomPrice) {
            this.priceOverrides = { ...this.priceOverrides, [dayUseSelection.unit.id]: dayUseSelection.netAmount };
        }
        else if (this.currentExtraService?.pr_id != null && this.currentExtraService.charges?.net_amount != null) {
            this.priceOverrides = { ...this.priceOverrides, [this.currentExtraService.pr_id]: this.currentExtraService.charges.net_amount };
        }
    }
    isCurrentUnit(unitId) {
        return this.currentExtraService?.pr_id === unitId;
    }
    /** Icon + tooltip shown next to a unit's name for each same-day movement (`getDayUseUnitDayStatus`). */
    static DAY_STATUS_DISPLAY = {
        checkin: { icon: 'plane-arrival', tooltip: 'Check-in happening today' },
        checkout: { icon: 'plane-departure', tooltip: 'Check-out happening today' },
        turnover: { icon: 'rotate', tooltip: 'Turnover happening today' },
    };
    getAvailableUnits(roomType) {
        const evaluated = (roomType.physicalrooms ?? []).map(unit => {
            const { available, dayStatus } = getDayUseUnitAvailability(unit.calendar_cell);
            return { unit, available, dayStatus: this.isCurrentUnit(unit.id) ? null : dayStatus };
        });
        const bookable = evaluated.filter(({ unit, available }) => available && (this.isCurrentUnit(unit.id) || !this.bookedUnitIds?.has(unit.id)));
        if (this.unitId === undefined || this.unitId === null || this.unitId === '') {
            return bookable;
        }
        return bookable.filter(({ unit }) => unit.id.toString() === this.unitId.toString());
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
        return (h(Host, null, availableRoomTypes.length > 0 && (h("div", { class: "day-use-unit-list__infos" }, h("p", { class: 'm-0 p-0' }, this.currentExtraService ? 'Edit the existing unit or switch the booking to another one.' : 'Pick a unit for day-use.'), h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement))), h("div", { class: "day-use-unit-list__grid" }, availableRoomTypes.map(roomType => {
            const units = this.getAvailableUnits(roomType);
            if (units.length === 0) {
                return null;
            }
            return (h(Fragment, null, h("h5", { class: "day-use-unit-list__roomtype-name" }, roomType.name), units.map(({ unit, dayStatus }) => {
                const isCurrent = this.isCurrentUnit(unit.id);
                const dayStatusDisplay = dayStatus ? IglDayUseUnitList.DAY_STATUS_DISPLAY[dayStatus] : null;
                return (h("div", { class: `day-use-unit-list__row${isCurrent ? ' day-use-unit-list__row--current' : ''}`, key: `day-use-unit-row-${unit.id}` }, h("span", { class: "day-use-unit-list__unit-name" }, unit.name, dayStatusDisplay && (h(Fragment, null, h("wa-tooltip", { for: `day-use-day-status-${unit.id}` }, dayStatusDisplay.tooltip), h("wa-icon", { name: dayStatusDisplay.icon, id: `day-use-day-status-${unit.id}`, class: `day-use-unit-list__day-status-icon day-use-unit-list__day-status-icon--${dayStatus}` })))), h("ir-input", { class: "day-use-unit-list__price-input", size: "s", mask: "price", value: this.getPrice(unit.id).toString(), "onText-change": e => (this.priceOverrides = { ...this.priceOverrides, [unit.id]: Number(e.detail) }) }, h("span", { slot: "start" }, this.currency?.symbol)), h("ir-custom-button", { "data-testid": "book", type: "button", size: "s", variant: "brand", appearance: this.currentExtraService && !isCurrent ? 'outlined' : undefined, class: "day-use-unit-list__book-button", loading: this.resolvingUnitId === unit.id, disabled: this.resolvingUnitId !== null && this.resolvingUnitId !== unit.id, onClickHandler: () => this.unitSelected.emit({ unit, roomType, price: this.getPrice(unit.id), isCustomPrice: this.isCustomPrice(unit.id) }) }, "Book")));
            })));
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
            },
            "currentExtraService": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; pr_id?: number; }; system_id?: number; room_identifier?: string; booking_system_id?: number; cost?: number; end_date?: string; start_date?: string; price?: number; category?: { code?: string; }; pr_id?: number; from_time?: string; to_time?: string; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService",
                            "referenceLocation": "ExtraService"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The day-use extra service currently being edited (`ir-booking-editor` `mode=\"EDIT_DAY_USE\"`).\nIts unit is exempt from `bookedUnitIds` (it's its own existing booking, not a conflict), never\nshows the upcoming-check-in warning (same reason), gets its price prefilled, and is highlighted."
                },
                "getter": false,
                "setter": false
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
