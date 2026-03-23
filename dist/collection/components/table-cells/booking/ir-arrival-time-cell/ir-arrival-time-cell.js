import { Host, h } from "@stencil/core";
export class IrArrivalTimeCell {
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: '4bb8443e6259fe295b02754c10e5ac8b9f64e13f' }, h("div", { key: 'b5b801457caee520738f9152e5ccc93d4bcdee75', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '35bb7ea857f3382b391fba4c92bfc18fd00a817c', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '81afec7b4a62713e71f1402fc2c8690c2d59886d' }, this.arrival?.description))));
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
