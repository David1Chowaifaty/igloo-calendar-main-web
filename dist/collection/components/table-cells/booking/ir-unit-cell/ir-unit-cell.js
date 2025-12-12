import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    render() {
        return (h(Host, { key: '147f42f7261b56795a6c45c5208ae6d1236a2450' }, h("p", { key: 'a0bd3b8e40207e17b1e16735f23c930b033911ba' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'a5aacec4ed2880dd47fb6570450a1d1790f2069b', unit: this.room.unit.name })));
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
            }
        };
    }
}
//# sourceMappingURL=ir-unit-cell.js.map
