import { Host, h } from "@stencil/core";
export class IrProgressIndicator {
    constructor() {
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: 'd9c4dd83236cba25772702ef8de3fb4fdf168dd1', class: "progress-main" }, h("span", { key: 'b9440d37b1aad56e3370ee814c7915ce03c69d39', class: "progress-totle" }, this.percentage), h("div", { key: 'db51a8c97579778a46f6fe20e4cb93dcb0388743', class: "progress-line" }, h("div", { key: '1a856381429bcdc5a3265cd7588762e5d18fd0a0', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
    static get is() { return "ir-progress-indicator"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-progress-indicator.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-progress-indicator.css"]
        };
    }
    static get properties() {
        return {
            "percentage": {
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
                    "text": "The percentage value to display and fill the progress bar.\nExample: \"75%\""
                },
                "getter": false,
                "setter": false,
                "attribute": "percentage",
                "reflect": false
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary'",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color variant of the progress bar.\nOptions:\n- 'primary' (default)\n- 'secondary'"
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'primary'"
            }
        };
    }
}
//# sourceMappingURL=ir-progress-indicator.js.map
