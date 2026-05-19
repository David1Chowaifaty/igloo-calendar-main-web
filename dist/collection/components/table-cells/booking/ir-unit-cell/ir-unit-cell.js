import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: 'ef7d3874330418188f35a12f4f92983bd3e12514' }, h("p", { key: '696f56f99679c80b50cc03e4f75087faeadbc2a6' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '7c14aadf2c12b33e314c103129baa0f5ed7fbcd5', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '4080a1e731a087dbd9c6b134737a22c766155750' }, this.room?.departure_time?.description)));
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
