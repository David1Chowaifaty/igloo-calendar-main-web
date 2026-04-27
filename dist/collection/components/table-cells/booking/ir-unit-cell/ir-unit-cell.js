import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: 'bda726c0266a6d0967a5e3aa7e598154e8e0acab' }, h("p", { key: '9fceb912189e88f52bae7832f3140770c10f6010' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '5596402135d48032b91684ddb3c8ac994c00f47b', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '50f35c1a694dda1b14f50d9d0b7aecc1bb5bc1c5' }, this.room?.departure_time?.description)));
    }
    static get is() { return "ir-unit-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unit-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unit-cell.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room"
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
            "showDeparture": {
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
                "attribute": "show-departure",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=ir-unit-cell.js.map
