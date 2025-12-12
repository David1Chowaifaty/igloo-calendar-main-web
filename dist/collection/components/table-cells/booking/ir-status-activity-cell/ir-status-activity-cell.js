import { Fragment, Host, h } from "@stencil/core";
export class IrStatusActivityCell {
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: '975cdffa1c75a2429de85d16c6662ca2633c237c' }, h("ir-booking-status-tag", { key: 'a0095041b47b5efcdd465fd761afbeb8969f53eb', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '9e3dd67d0a0b988be8707f6176ea407b16b9f4bf', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '877c02631a561059d381d43561c5884ed33bfd10' }, h("wa-tooltip", { key: 'ad52fdeb7746611363403acfb4ee02bff448011c', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'cc9e3457227360b9916e005b914fa36ec5f323ff', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
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
