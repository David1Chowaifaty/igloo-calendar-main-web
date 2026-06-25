import { Host, h } from "@stencil/core";
export class IrUnitCell {
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: 'd7e8225280d62575ac6679d9f9c456838eabaec7' }, h("p", { key: '0ee7c5626dab6a9cae4c94e847b84f2bdde53c1b' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'fb4f2e4826d49c36389565b435baec5ae48e4e8d', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '6fb5d0456c361e36a88e58a5ca8eda92ea8c3908' }, this.room?.departure_time?.description)));
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
