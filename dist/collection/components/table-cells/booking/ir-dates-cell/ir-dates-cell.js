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
        return (h(Host, { key: '883dc385b8b40593ca9babab6ad08742eef61f24' }, h("div", { key: '6b156e65d801977e5fb9a36eabcb8b514765e6ca', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '3dc5bb3909ed48751edce0cdd533721c99e01111', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '4da759e018f4493871e89be0206c0083047488eb', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'd6f5a47baf80c202531cdf03d197b87326a67637', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: 'c322954cc3e99675a066d30502724d0056bfbdde', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'ee418d49ed62707ade5e6e9cd2fa879a8255109a', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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
