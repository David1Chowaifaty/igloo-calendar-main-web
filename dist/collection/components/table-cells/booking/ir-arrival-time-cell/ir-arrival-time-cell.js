import { Host, h } from "@stencil/core";
export class IrArrivalTimeCell {
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'b5344a194ed30bec3a8eea03c246c741b7e3f27b' }, h("div", { key: 'f79e991e1d338a0f6fbb5b496842d02ce751a3cd', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'a304081c293694e6da869b50d2318c25a5cbdcbb', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '3991e3d141809ddc5742c56d38bcc3ec833984be' }, this.arrival?.description))));
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
                "reflect": true,
                "attribute": "display",
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
                "reflect": false,
                "attribute": "arrival-time-label"
            }
        };
    }
}
