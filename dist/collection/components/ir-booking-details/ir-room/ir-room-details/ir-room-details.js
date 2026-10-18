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
        return (h(Fragment, { key: '27b409eeafe1115d1b19728327f44ec0f6bc4751' }, h("div", { key: '82d3212338d4d1a58bf0783e689894316a98b026', class: "booking-room__dates-row" }, h("ir-date-view", { key: '735bb3a19f50ce0665c1b588d27cf73f27b87063', format: 'weekday-medium', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && h("ir-unit-tag", { key: 'd83275db5e27c6f1ed2b476c72c6fd9df9cef0f2', unit: this.room.unit.name }), this.hasCheckIn && (h("ir-custom-button", { key: 'aeaf5a5aa7c6f474f2ca0786ab4598d0d5e8c327', onClickHandler: () => this.checkIn.emit(), id: "checkin", appearance: "outlined", variant: "brand" }, t('Lcz_CheckIn', { fallback: 'Check in' }))), this.hasCheckOut && (h("ir-custom-button", { key: 'a8ff732a2a2e95f9b5e4f8a7cf053c8ff9dd4954', appearance: "outlined", variant: "brand", onClickHandler: () => this.checkOut.emit(), id: "checkout" }, t('Lcz_CheckOut', { fallback: 'Check out' })))), h("div", { key: '559a3b5f6b74b1af313cbcc9ba264378f78adee8', class: "booking-room__guest-row" }, h("p", { key: '5a1f534f0e393a06949c897038adc65169625e92', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 && (h(Fragment, { key: 'd3716731ceb19c4840fc0e73bfd87805eaa87253' }, h("wa-tooltip", { key: '0784f9a638a5cb6f19cb48a996a13cc92c26d609', for: `view-guest-btn-${this.room.identifier}` }, t('Lcz_ViewGuests', { fallback: 'View guests' })), h("ir-custom-button", { key: '99860bad44a94f074fc50941133b2761c2e37dbc', link: true, onClickHandler: () => this.viewGuests.emit(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { key: 'bab2f21ac70a3014a49c495bcd7f1843faa595b1', innerHTML: this.formatVariation(this.room.occupancy) })))), bed && h("p", { key: '8d34bcbc401635fb3d629b820a5fd40c8fd6a0c3', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), (this.includeDepartureTime || this.booking.is_direct) && (h("div", { key: 'aea71f08113dd8bc39c6756acf5ad49cb660c904', class: "booking-room__departure-row" }, h("div", { key: '012fc475b102d8d635e21f5663fab5aac3d1dbbd', class: "booking-room__time-item" }, h("span", { key: '273342d202f22222a0d339b0784e4628e14a7c7f', class: "booking-room__departure-label" }, t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ":"), h("ir-custom-button", { key: 'f8d51fb89508ae8d270371dd80ac847a0accfe16', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openArrivalDialog.emit() }, this.room.arrival_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))), this.includeDepartureTime && (h("div", { key: 'b755c051022f32c88bfcba31ce97ed2ca3e82cd0', class: "booking-room__time-item" }, h("span", { key: 'ec855f78e9e5baa5484885b539ffd48432bdfb8d', class: "booking-room__departure-label" }, t('Lcz_DepartureTime', { fallback: 'Departure time:' })), h("ir-custom-button", { key: 'e11c6f5228a44a81dd66a37d8d4ced5b292b6e00', link: true, appearance: "plain", variant: "brand", onClickHandler: () => this.openDepartureDialog.emit() }, this.room.departure_time?.description || t('Lcz_NotProvided', { fallback: 'Not provided' }))))))));
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
