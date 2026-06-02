import { Host, h } from "@stencil/core";
export class IrProgressIndicator {
    /**
     * The percentage value to display and fill the progress bar.
     * Example: "75%"
     */
    percentage;
    /**
     * The color variant of the progress bar.
     * Options:
     * - 'primary' (default)
     * - 'secondary'
     */
    color = 'primary';
    render() {
        return (h(Host, { key: '73b73933f4be68869db89b9ac614c60feef8745e', class: "progress-main" }, h("span", { key: '7dfcc3102157db4dd3343acc9d793bcc14d28e77', class: "progress-totle" }, this.percentage), h("div", { key: 'b57f05c741f56158822450eebfb39c60f27bab43', class: "progress-line" }, h("div", { key: '9218917fc2d6880cf7b666beb34c2570906b6cec', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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
