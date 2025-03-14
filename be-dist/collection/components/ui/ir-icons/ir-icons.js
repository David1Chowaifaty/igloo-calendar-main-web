import { h } from "@stencil/core";
import icons from "./icons";
import { cn } from "../../../utils/utils";
export class IrIcons {
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { height: this.height, width: this.width, xmlns: "http://www.w3.org/2000/svg", viewBox: svgPath.viewBox, class: this.removeClassName ? '' : cn('h-5 w-5', this.svgClassName) }, h("path", { fill: "currentColor", d: svgPath.d })));
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
                    "resolved": "\"image\" | \"search\" | \"user\" | \"calendar\" | \"clock\" | \"wifi\" | \"car\" | \"pets\" | \"bed\" | \"hotel\" | \"utencils\" | \"credit_card\" | \"check\" | \"danger\" | \"bell\" | \"football\" | \"burger_menu\" | \"home\" | \"xmark\" | \"snowflake\" | \"sun\" | \"minus\" | \"heart\" | \"dimensions\" | \"user_group\" | \"smoking\" | \"ban_smoking\" | \"double_bed\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"child\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"angle_right\" | \"coupon\" | \"location_dot\" | \"plus\" | \"elipse_vertical\" | \"taxi\" | \"angle_down\" | \"angle_up\" | \"ellipsis\" | \"arrow-up-right-from-square\" | \"circle-user\" | \"baby\"",
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "svg-class-name",
                "reflect": false
            },
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "height",
                "reflect": false
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "width",
                "reflect": false
            },
            "removeClassName": {
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
                "attribute": "remove-class-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-icons.js.map
