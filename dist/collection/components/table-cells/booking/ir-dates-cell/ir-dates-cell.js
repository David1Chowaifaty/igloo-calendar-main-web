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
        return (h(Host, { key: '6affcfc92244c5f98a15f683647ba403521a3ca6' }, h("div", { key: 'a2b176c382e4cce2097e13e032bf4dd39519e00a', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '1c174c911ed1ef470897440eef9865c9f3eda0b0', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '3151d20da4e8e4768c82e9e5b56791e20ff9e095', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: '1e09e494d9606120255100baa5e528610c4c1039', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '8c0cdc99ef463ce7c255e0e300fe0b054c2192e6', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'fe018a1a6f2c2ee44130454b437d43d26f9f3da1', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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
