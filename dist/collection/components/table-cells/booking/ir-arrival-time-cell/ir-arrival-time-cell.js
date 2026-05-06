import { Host, h } from "@stencil/core";
export class IrArrivalTimeCell {
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'b519ef41ec6b7a91ee70a0341fc3658e6836d2ec' }, h("div", { key: 'da7ef928db8edf4b2f28b8c32a88f2408a4c125a', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'e71d04caf2e9cb4bdcf3327efe236c5eb79e8d58', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'd7e070011d6214dcb5a5ccbcc622284233a1fb4b' }, this.arrival?.description))));
    }
    static get is() { return "ir-arrival-time-cell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrival-time-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrival-time-cell.css"]
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
            "arrival": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['arrival']",
                    "resolved": "Arrival",
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
            "arrivalTimeLabel": {
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
                "attribute": "arrival-time-label",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-arrival-time-cell.js.map
