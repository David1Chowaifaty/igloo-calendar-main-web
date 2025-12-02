import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    render() {
        return (h(Host, { key: '32156263b86ecd8bc950a9b6c5dc3914dcd3dbf1' }, h("p", { key: '920dbe4b1e311e30dfb8ca15ff7a9267ec957621' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '813438f8f26169e6c220cac128786e3f308eb5ae', unit: this.room.unit.name })));
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
