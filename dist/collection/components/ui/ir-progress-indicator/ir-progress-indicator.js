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
        return (h(Host, { key: '9ed3418e7637d5737bf877b13f7970c24a105824', class: "progress-main" }, h("span", { key: 'aeada65e9ea85f219d2b63a0ca81fc771a1abb9e', class: "progress-totle" }, this.percentage), h("div", { key: 'c31211afa7615bb4dd1eda57f6f19d3ffea5fd0f', class: "progress-line" }, h("div", { key: '79aff8719ef537abfaea2f280d7e5d13d006ff5c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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
