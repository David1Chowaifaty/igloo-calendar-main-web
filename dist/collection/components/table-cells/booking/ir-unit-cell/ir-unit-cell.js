import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: '64ecb2f5c34c1634641a8355387049b1c2c575af' }, h("p", { key: '2511d413d8efb7b5eda99d9c3b3ed4870b473501' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'a7f50925aa34538ead69c9481f4f9228621fed6c', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '3841e357b1c76b5191dabab77eb9d7ff45652e84' }, this.room?.departure_time?.description)));
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
