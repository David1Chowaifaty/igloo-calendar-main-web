import { h } from "@stencil/core";
export class IrBookingStatusTag {
    status;
    isRequestToCancel;
    badgeVariant = {
        '001': 'warning',
        '002': 'success',
        '003': 'danger',
        '004': 'danger',
    };
    render() {
        return (h("wa-badge", { key: '959b9431f45767b0709ed73b364981cd597eda71', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
    static get is() { return "ir-booking-status-tag"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-status-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-status-tag.css"]
        };
    }
    static get properties() {
        return {
            "status": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['status']",
                    "resolved": "Status",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
            "isRequestToCancel": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "Booking['is_requested_to_cancel']",
                    "resolved": "boolean",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
                "attribute": "is-request-to-cancel",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-booking-status-tag.js.map
