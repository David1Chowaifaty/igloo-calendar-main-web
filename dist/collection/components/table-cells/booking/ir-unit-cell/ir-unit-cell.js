import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    render() {
        return (h(Host, { key: '9b63dfba11934608ae10fd0ae922bd869fe2ea36' }, h("p", { key: 'c10da448b217dc954978629c56ed2320898d112c' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '95fe9292b6ea0eb1c605dcf51d73e26645cd0373', unit: this.room.unit.name })));
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
