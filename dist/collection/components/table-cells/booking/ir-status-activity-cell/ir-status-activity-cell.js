import { Fragment, Host, h } from "@stencil/core";
export class IrStatusActivityCell {
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: '99a8c900dc65bfe3ab8c221f0e47cdbdb8508096' }, h("ir-booking-status-tag", { key: '3c4c6e3c56bf7227119d590dc23d9e1cfe35596f', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '9d82290ebae300f9e760817a7bed579c369a6c61', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: 'c87cff7c8407763d1658766153f55b660ed5c5ff' }, h("wa-tooltip", { key: '4eda8e06b6b41298ee9520333df5de7bea224917', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '244d1737315bc3a72da3fa4a8283842f3bbfa2e2', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
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
                "attribute": "is-request-to-cancel",
                "reflect": false
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
                "attribute": "show-modified-badge",
                "reflect": false
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
                "attribute": "show-manipulation-badge",
                "reflect": false
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
                            "id": "src/models/booking.dto.ts::OTAManipulations"
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
                "attribute": "booking-number",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-status-activity-cell.js.map
