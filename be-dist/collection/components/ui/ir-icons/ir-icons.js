import { h } from "@stencil/core";
import icons from "./icons";
import { cn } from "../../../utils/utils";
export class IrIcons {
    constructor() {
        this.name = undefined;
        this.svgClassName = undefined;
    }
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: svgPath.viewBox, class: cn('h-5 w-5', this.svgClassName) }, h("path", { fill: "currentColor", d: svgPath.d })));
    }
    static get is() { return "ir-icons"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-icons.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-icons.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIcons",
                    "resolved": "\"bed\" | \"bell\" | \"burger_menu\" | \"car\" | \"check\" | \"clock\" | \"credit_card\" | \"danger\" | \"football\" | \"home\" | \"hotel\" | \"minus\" | \"pets\" | \"snowflake\" | \"sun\" | \"utencils\" | \"wifi\" | \"xmark\"",
                    "references": {
                        "TIcons": {
                            "location": "import",
                            "path": "./icons",
                            "id": "src/components/ui/ir-icons/icons.ts::TIcons"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "name",
                "reflect": false
            },
            "svgClassName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "svg-class-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-icons.js.map