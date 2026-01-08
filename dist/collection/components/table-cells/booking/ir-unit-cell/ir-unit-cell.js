import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    render() {
        return (h(Host, { key: '7f8679bd4210b9bb749bed6536ed7dbe918f0541' }, h("p", { key: '8a1c6a80d327ec76fb6be8dcad824231c59e6685' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '6831feec372779970ddd390b01a73166acbe600b', unit: this.room.unit.name })));
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
