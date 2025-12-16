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
        return (h(Host, { key: '56bcb4ca03285ba0df8e45095887d610ff32deb1', class: "progress-main" }, h("span", { key: 'ba311293e60001fb8713619c4fd5c2043b3e9a60', class: "progress-totle" }, this.percentage), h("div", { key: '1946d919dc7dfb8b9028396d8c67c48202bfc75a', class: "progress-line" }, h("div", { key: '5fd14b49671af969ccce4ffe760a1bba7dff6ef4', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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
