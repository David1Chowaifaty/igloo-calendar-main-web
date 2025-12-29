import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    render() {
        return (h(Host, { key: '26eaf531b10ac1478ab6edfd76f9a16eeb4702be' }, h("p", { key: '9e09d538b3bf36118a5e65e48d755923d0b3fdc7' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'c1c8a4daea62dd2327e78f5cf9e7eb6d57e8bcbe', unit: this.room.unit.name })));
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
