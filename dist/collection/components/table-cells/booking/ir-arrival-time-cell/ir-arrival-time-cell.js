import { Host, h } from "@stencil/core";
export class IrArrivalTimeCell {
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: '85f4c28ae26b8443cc28c0c767867999623e5744' }, h("div", { key: '0ae3a3856ab848337bea9f0749e60196c1c8b6b3', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'eafc3207a1a19448aad0fa1b619cfddec876344e', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '8507a28adf52c0c52b230f29064a53b778d8b1ca' }, this.arrival?.description))));
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
