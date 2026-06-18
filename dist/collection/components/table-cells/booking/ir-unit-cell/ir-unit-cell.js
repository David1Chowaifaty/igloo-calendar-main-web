import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: '0195caee75d67b92313fa48ee180914d53b30cb1' }, h("p", { key: '2eb6b4767c85bd08f1b430acc02877ffd42edabf' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'a3be7f7a7e13c16e7a489a8a2b5906213e23df4a', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '536290f8ea8dba64cb757a4e319d01b756dc673f' }, this.room?.departure_time?.description)));
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
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
                "reflect": false,
                "attribute": "show-departure",
                "defaultValue": "false"
            }
        };
    }
}
