import { Fragment, Host, h } from "@stencil/core";
export class IrStatusActivityCell {
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: '669c2fb285ad993fe339f1eb65e341570cea7a0b' }, h("ir-booking-status-tag", { key: 'ca7e722aa115d457c80b1598a8210f49680b2bf5', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '1353519078753ec4c906735b27767d29bf8bb3b0', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '8b99b07f0d1eda4a52b460b42debdcc3f216ec47' }, h("wa-tooltip", { key: '06a6404d70a68d3f14e5b1ff3961d6039d8ae5db', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'b5022beff519b71f6c72caf33348334a973d053a', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
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
