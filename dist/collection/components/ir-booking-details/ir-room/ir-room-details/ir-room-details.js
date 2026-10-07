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
        return (h(Fragment, { key: '0d28f7a3a1052fa181f5a0c470ed97d1148edd1f' }, h("div", { key: '90e57f9d87f019174af0cb1f24750e4839cc0071', class: "booking-room__dates-row" }, h("ir-date-view", { key: '6c9b71cbbe93c99fa18ce59012445f0196c1000f', format: 'weekday-medium', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && h("ir-unit-tag", { key: '5b919794dd8c0a137965bd1490f075dc63363a10', unit: this.room.unit.name }), this.hasCheckIn && (h("ir-custom-button", { key: '760d1054f58ef5ddb496f4802be427fada2210d7', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, t('Lcz_CheckIn', { fallback: 'Check in' }))), this.hasCheckOut && (h("ir-custom-button", { key: '7888df25d317d542c37ca62f58336fdc11f86b47', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, t('Lcz_CheckOut', { fallback: 'Check out' })))), h("div", { key: '67a4a22bc7b1bdd1a9a67666f756ad8ec154be9c', class: "booking-room__guest-row" }, h("p", { key: '9e88f792afaefeb004c3cde406cf739879a46ea9', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 && (h(Fragment, { key: 'ea67e390381a715880ddd348c703164bf340b2cf' }, h("wa-tooltip", { key: '306a6978bc58252a46520ff028d33bc7b3e29cda', for: `view-guest-btn-${this.room.identifier}` }, t('Lcz_ViewGuests', { fallback: 'View guests' })), h("ir-custom-button", { key: '3f94a0bcba5d733418259ca29268214e91b6a51a', link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { key: 'a935c51ff664723598b65a3d5573bfd016760df5', innerHTML: this.formatVariation(this.room.occupancy) })))), bed && h("p", { key: '419d8486f2ca28fef03a277eb7d195a23f8fe7c3', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (h("div", { key: '5e15a1a74058a82ba2e9ebb07acb2b7ccd67a6fe', class: "booking-room__departure-row" }, h("div", { key: 'e846063ee872c7f012f98ac8e7f32e557d048976', class: "booking-room__time-item" }, h("span", { key: 'e98ed2932364e6165b887b7aa65515e57afbde78', class: "booking-room__departure-label" }, t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ":"), h("ir-custom-button", { key: 'a01211c60d6995c735e623f71f63e042e161ac9b', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))), this.includeDepartureTime && (h("div", { key: '8907240c12b3ce5fb11952438cfddf7f4b8da02c', class: "booking-room__time-item" }, h("span", { key: '3f15923046b5340f6e456b600be1543b8700259d', class: "booking-room__departure-label" }, t('Lcz_DepartureTime', { fallback: 'Departure time:' })), h("ir-custom-button", { key: 'b0c9e06d94726e060e5f691ce9bda3ed6770b794', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))))))));
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
