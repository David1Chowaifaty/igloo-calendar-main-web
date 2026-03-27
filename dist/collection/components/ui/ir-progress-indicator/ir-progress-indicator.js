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
        return (h(Host, { key: '91f1fdeb703824d0b766dcf53d506d7f6202c828', class: "progress-main" }, h("span", { key: '791999c1c1149c8405038b896c4328cd58b1547d', class: "progress-totle" }, this.percentage), h("div", { key: '9ecc067c2b8024ae57ede1c868e58214d6db3fe9', class: "progress-line" }, h("div", { key: '2f273afa8a33a56b186a78a26a4c9a28c1cd6cd6', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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
