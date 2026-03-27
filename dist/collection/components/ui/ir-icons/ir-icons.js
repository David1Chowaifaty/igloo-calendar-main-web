import { h } from "@stencil/core";
import icons from "./icons";
export class IrIcons {
    /**
     * The name of the icon to render.
     * Must match a key from the imported `icons` map.
     *
     * Example:
     * ```tsx
     * <ir-icons name="check" />
     * ```
     */
    name;
    /**
     * Additional CSS class applied to the `<svg>` element.
     * Can be used for sizing, positioning, etc.
     */
    svgClassName;
    /**
     * Sets the `color` attribute on the `<svg>` element.
     * Accepts any valid CSS color string.
     */
    color;
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, h("path", { fill: "currentColor", d: svgPath.d })));
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
                    "resolved": "\"angle-down\" | \"clock\" | \"check\" | \"heart-fill\" | \"envelope-circle-check\" | \"danger\" | \"bell\" | \"burger_menu\" | \"home\" | \"xmark\" | \"minus\" | \"user\" | \"heart\" | \"user_group\" | \"search\" | \"arrow_right\" | \"arrow_left\" | \"circle_info\" | \"calendar\" | \"xmark-fill\" | \"globe\" | \"facebook\" | \"twitter\" | \"whatsapp\" | \"instagram\" | \"youtube\" | \"angle_left\" | \"circle_check\" | \"eraser\" | \"file\" | \"edit\" | \"trash\" | \"plus\" | \"reciept\" | \"print\" | \"menu_list\" | \"save\" | \"credit_card\" | \"closed_eye\" | \"open_eye\" | \"server\" | \"double_caret_left\" | \"square_plus\" | \"angles_left\" | \"angle_right\" | \"angles_right\" | \"outline_user\" | \"key\" | \"unlock\" | \"circle_plus\" | \"arrow-right-from-bracket\" | \"note\" | \"email\" | \"calendar-xmark\" | \"arrow-trend-up\" | \"hotel\" | \"arrow-trend-down\" | \"angle-up\" | \"ban\"",
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
                    "text": "The name of the icon to render.\nMust match a key from the imported `icons` map.\n\nExample:\n```tsx\n<ir-icons name=\"check\" />\n```"
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
                    "text": "Additional CSS class applied to the `<svg>` element.\nCan be used for sizing, positioning, etc."
                },
                "getter": false,
                "setter": false,
                "attribute": "svg-class-name",
                "reflect": false
            },
            "color": {
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
                    "text": "Sets the `color` attribute on the `<svg>` element.\nAccepts any valid CSS color string."
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-icons.js.map
