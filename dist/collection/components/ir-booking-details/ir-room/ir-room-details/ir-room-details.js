import { h, Fragment } from "@stencil/core";
import calendar_data, { isSingleUnit } from "../../../../stores/calendar-data";
import { t } from "../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../services/setup/index";
import { formatCount } from "../../../../utils/number";
export class IrRoomDetails {
    room;
    booking;
    mainGuest;
    bedPreferences;
    language = 'en';
    includeDepartureTime;
    hasCheckIn = false;
    hasCheckOut = false;
    checkIn;
    checkOut;
    viewGuests;
    openArrivalDialog;
    openDepartureDialog;
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? t('Lcz_Adults', { fallback: 'adults' }).toLowerCase() : t('Lcz_Adult', { fallback: 'adult' }).toLowerCase();
        const childLabel = childCount > 1 ? t('Lcz_Children', { fallback: 'Children' }).toLowerCase() : t('Lcz_Child', { fallback: 'Child' }).toLowerCase();
        const infantLabel = infantCount > 1 ? t('Lcz_Infants').toLowerCase() : t('Lcz_Infant').toLowerCase();
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${formatCount(adultCount)} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${formatCount(childCount)} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${formatCount(infantCount)} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    getBedName() {
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => p.CODE_NAME === this.room?.bed_preference?.toString());
            if (!bed) {
                return;
            }
            return getSetupEntryLabel(bed, this.language);
        }
        return this.room.ota_meta?.bed_preferences;
    }
    render() {
        const bed = this.getBedName();
        return (h(Fragment, { key: '217179f2ff3c78ce1d0391a99396dbb078819c56' }, h("div", { key: '17fe9f1fa0d37b66f1a5f60484504c36bd8202e9', class: "booking-room__dates-row" }, h("ir-date-view", { key: 'ebc171102addae8645843553e27e2c29afd353c6', format: 'weekday-medium', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && h("ir-unit-tag", { key: 'd8506d231e75a7ec276af958d57941c7f6885e61', unit: this.room.unit.name }), this.hasCheckIn && (h("ir-custom-button", { key: '9545ac17e65e3f7f130aac8a192f7455524964f4', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, t('Lcz_CheckIn', { fallback: 'Check in' }))), this.hasCheckOut && (h("ir-custom-button", { key: '61259ccc3f334b731581b23d46be5e8866307470', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, t('Lcz_CheckOut', { fallback: 'Check out' })))), h("div", { key: '5fd7c2807634de9f6c2de3a8fd9ec222ded274f6', class: "booking-room__guest-row" }, h("p", { key: 'f1489aa930f4a46048eb795ce7b2dc554b78421a', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 && (h(Fragment, { key: 'dc016ffbee95987b83096eb8c41520dfa22b15c7' }, h("wa-tooltip", { key: '35c770622cb3ad1267c0756edc56c7d193cf196e', for: `view-guest-btn-${this.room.identifier}` }, t('Lcz_ViewGuests', { fallback: 'View guests' })), h("ir-custom-button", { key: '11c7954259da36e76cbaa8a7f971ee5641eba197', link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { key: 'f3474e2ebf19b212c9c15898aac58e09bb1755b0', innerHTML: this.formatVariation(this.room.occupancy) })))), bed && h("p", { key: '0c7a39a01911f3d71482772fa32ba27f4e53367c', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (h("div", { key: 'ed124877a668434a899ba6bf8584570e6194d034', class: "booking-room__departure-row" }, h("div", { key: 'cb7e0374275bd2293bc143b622ca73ec0405b519', class: "booking-room__time-item" }, h("span", { key: 'be702bbe8e8ec6f3813f4980d81686e48b7d8664', class: "booking-room__departure-label" }, t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ":"), h("ir-custom-button", { key: 'd907cb68e1b0e7fa38d408df9d45d2147e2ea4cb', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))), this.includeDepartureTime && (h("div", { key: 'e236aca9fb7fd617499b618c28996e61a01914d8', class: "booking-room__time-item" }, h("span", { key: '45ef21ec2fdd7185c94613b89e91a23867a6aaea', class: "booking-room__departure-label" }, t('Lcz_DepartureTime', { fallback: 'Departure time:' })), h("ir-custom-button", { key: 'e74448acae28dbdfa5b9418b8a4e2304b45c8e90', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))))))));
    }
    static get is() { return "ir-room-details"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-details.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
            "mainGuest": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SharedPerson",
                    "resolved": "SharedPerson",
                    "references": {
                        "SharedPerson": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::SharedPerson",
                            "referenceLocation": "SharedPerson"
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
            "bedPreferences": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
            "language": {
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
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "includeDepartureTime": {
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
                "attribute": "include-departure-time"
            },
            "hasCheckIn": {
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
                "attribute": "has-check-in",
                "defaultValue": "false"
            },
            "hasCheckOut": {
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
                "attribute": "has-check-out",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkIn",
                "name": "checkIn",
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
                "method": "checkOut",
                "name": "checkOut",
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
                "method": "viewGuests",
                "name": "viewGuests",
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
                "method": "openArrivalDialog",
                "name": "openArrivalDialog",
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
                "method": "openDepartureDialog",
                "name": "openDepartureDialog",
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
