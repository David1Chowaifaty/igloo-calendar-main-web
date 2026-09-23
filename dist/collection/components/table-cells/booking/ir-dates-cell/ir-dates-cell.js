import { Host, h } from "@stencil/core";
import { formatDate } from "../../../../utils/date/index";
export class IrDatesCell {
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    /**
     * Shows a small arrow between check-in and check-out. Intended for `display="inline"`.
     */
    showArrow = false;
    formatDate(date) {
        return formatDate(date, { style: 'medium' });
    }
    render() {
        return (h(Host, { key: 'ff071426c90c7375c384423115a76bf3d407cd18' }, h("div", { key: '0a38826f330632db0d5b7b035c463224debf15bb', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && h("span", { key: 'f4c741d3231ca9e90d2549bb3af4d63c55a22783', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '576f1e616d8da42a8cd3f657aa186d9c90a5d0cc', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && h("wa-icon", { key: 'cf778b4a332400a82da3a3252f0c4149a61694a4', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), h("div", { key: '8c3ece82db3b02b7b05452c0fe82d3f54e04bba6', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '2e263ffc3aa3da264c95b5554d0765805fa2538f', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'fb5af5c6e576481206d48524efc048a6c24b7c1e', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
    static get is() { return "ir-dates-cell"; }
    static get encapsulation() { return "shadow"; }
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
                "reflect": true,
                "attribute": "display",
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
                "reflect": false,
                "attribute": "check-in"
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
                "reflect": false,
                "attribute": "check-out"
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
                "reflect": false,
                "attribute": "check-in-label"
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
                "reflect": false,
                "attribute": "checkout-label"
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
                "reflect": false,
                "attribute": "overdue-checkin"
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
                "reflect": false,
                "attribute": "overdue-checkout"
            },
            "showArrow": {
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
                    "text": "Shows a small arrow between check-in and check-out. Intended for `display=\"inline\"`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-arrow",
                "defaultValue": "false"
            }
        };
    }
}
