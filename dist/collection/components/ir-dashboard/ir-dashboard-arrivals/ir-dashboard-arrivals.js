import { Host, h } from "@stencil/core";
/**
 * Arrivals panel of the dashboard: the existing arrivals table plus its check-in dialog.
 * Data lives in the arrivals store, loaded by the dashboard root as a single page, so there's no pagination.
 */
export class IrDashboardArrivals {
    language = 'en';
    countries;
    /** Property without front desk: every arriving room in one list, no check-in actions. */
    pmsDisabled = false;
    roomGuestState = null;
    handleCheckInRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    render() {
        return (h(Host, { key: '2cbf59326ce32e0d4311aff9ce09de9b594813e2' }, h("ir-arrivals-table", { key: '4d11c8f650af646803ffdc46d89f77f95183dac5', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckInRoom: event => this.handleCheckInRoom(event) }), h("ir-room-guests", { key: '0466c47dac97964736a5f681f0a9a0c8c0ac0d80', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
    }
    static get is() { return "ir-dashboard-arrivals"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dashboard-arrivals.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dashboard-arrivals.css"]
        };
    }
    static get properties() {
        return {
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
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
            "pmsDisabled": {
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
                    "text": "Property without front desk: every arriving room in one list, no check-in actions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pms-disabled",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "roomGuestState": {}
        };
    }
}
