import { Host, h } from "@stencil/core";
export class IrGuestNameCell {
    name;
    render() {
        return (h(Host, { key: '96a7a53d128e93baff364ba6f72f970ff44f3b40' }, this.name.first_name, " ", this.name.last_name));
    }
    static get is() { return "ir-guest-name-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-name-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-name-cell.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Guest",
                    "resolved": "Guest",
                    "references": {
                        "Guest": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Guest"
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
//# sourceMappingURL=ir-guest-name-cell.js.map
