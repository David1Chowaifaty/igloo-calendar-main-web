import { Host, h } from "@stencil/core";
/**
 * Arrivals panel of the dashboard: the existing arrivals table plus its check-in dialog.
 * Data lives in the arrivals store, loaded by the dashboard root as a single page, so there's no pagination.
 */
export class IrDashboardArrivals {
    language = 'en';
    countries;
    roomGuestState = null;
    handleCheckInRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    render() {
        return (h(Host, { key: 'ebe9b5dc1057b8abbd71ba790897714fee9188e1' }, h("ir-arrivals-table", { key: '7aa3dea595a31c3c7d64a7a3bfc4e25564526555', hidePagination: true, onCheckInRoom: event => this.handleCheckInRoom(event) }), h("ir-room-guests", { key: 'a035652d4287154cada608820cfe228fbcb51278', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
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
            }
        };
    }
    static get states() {
        return {
            "roomGuestState": {}
        };
    }
}
