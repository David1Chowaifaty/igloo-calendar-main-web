import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrDatesCell {
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    formatDate(date) {
        return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (h(Host, { key: '5ff8c600fe7e05b685f76398b93ad516c4421061' }, h("div", { key: 'd8c2a754c15da89015c5b8d0930da5f4f68ee337', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '7dd097ed8e89eaea9201583f8262482b8003d9c9', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '3cd782aad0fe9b8b3346830f951fc4d103cc838d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'f7731e723a0701cffd79e36d41d989f438f683c2', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '9f8956c301a09e5ce1a7d9a9941801c2148a7716', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '0fbb6857454ee9d85015fe8b8b5fa01bf365728b', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
    static get is() { return "ir-dates-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dates-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dates-cell.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'block' | 'inline'",
                    "resolved": "\"block\" | \"inline\"",
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
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'block'"
            },
            "checkIn": {
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
                "attribute": "check-in",
                "reflect": false
            },
            "checkOut": {
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
                "attribute": "check-out",
                "reflect": false
            },
            "checkInLabel": {
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
                "attribute": "check-in-label",
                "reflect": false
            },
            "checkoutLabel": {
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
                "attribute": "checkout-label",
                "reflect": false
            },
            "overdueCheckin": {
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
                "attribute": "overdue-checkin",
                "reflect": false
            },
            "overdueCheckout": {
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
                "attribute": "overdue-checkout",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-dates-cell.js.map
