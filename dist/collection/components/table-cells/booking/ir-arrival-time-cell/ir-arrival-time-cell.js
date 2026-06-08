import { Host, h } from "@stencil/core";
export class IrArrivalTimeCell {
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: '8deb904099cdd53d34e79bcf27d3743cc685d3e7' }, h("div", { key: '825bf6db3ec49d915537483b4f75e80da7a035fd', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '85ce2b5d312be550d1f83b8acb52cda27f246aa0', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'ec5e0b6ae118205ea1e9afba8e12a06ef11554fe' }, this.arrival?.description))));
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
