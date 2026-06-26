import { Fragment, Host, h } from "@stencil/core";
export class IrStatusActivityCell {
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: '6a2c8730f863f85a35fc842907fb27af4a093c8b' }, h("ir-booking-status-tag", { key: 'f667c11d4e914ba185c990766e3d86f5dd373bc9', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: 'f9e141bc8df8477f901b35d3c11d00c1328a6c4a', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '3f4be5dffcd7e002996be9e56c2f481e72ebd4a2' }, h("wa-tooltip", { key: '62bee1250cf8ae116d2774237260fa736f8377d1', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'fb2d4ee7baf4e7eeba217d5b3534365e107eae43', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
    static get is() { return "ir-status-activity-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-status-activity-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-status-activity-cell.css"]
        };
    }
    static get properties() {
        return {
            "isRequestToCancel": {
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
                "attribute": "is-request-to-cancel"
            },
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
            "showModifiedBadge": {
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
                "attribute": "show-modified-badge"
            },
            "showManipulationBadge": {
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
                "attribute": "show-manipulation-badge"
            },
            "lastManipulation": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OTAManipulations",
                    "resolved": "{ user: string; date: string; hour: string; minute: string; }",
                    "references": {
                        "OTAManipulations": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::OTAManipulations",
                            "referenceLocation": "OTAManipulations"
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
            "bookingNumber": {
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
                "attribute": "booking-number"
            }
        };
    }
}
