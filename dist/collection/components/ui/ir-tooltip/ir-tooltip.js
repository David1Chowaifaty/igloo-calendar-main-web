import { Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        this.withHtml = true;
        this.customSlot = false;
    }
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
            }, 300);
        }
        else {
            this.open = false;
        }
    }
    render() {
        return (h(Host, { key: '09d927516575089e5d24bfde2b9d395224a104cd', class: "m-0 p-0" }, h("span", { key: '50c05f752043e0a46b1790b58198cdd3c2a34dfa', style: this.containerStyle, class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: 'b02550330e6b3afadfc8193dd09149be113d5f37', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: 'f48471335abeb405945f09ac1c1ba21539316ad7', class: "tooltip-arrow" }), h("div", { key: '239273f95e1306d18050400ca0b8c4fba9a93601', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: '9ad1e0dcd62aea0a897a26b9abe1cb4f40495a2f', innerHTML: this.message }))))));
    }
    static get is() { return "ir-tooltip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tooltip.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                "attribute": "message",
                "reflect": true
            },
            "withHtml": {
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
                "attribute": "with-html",
                "reflect": false,
                "defaultValue": "true"
            },
            "customSlot": {
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
                "attribute": "custom-slot",
                "reflect": false,
                "defaultValue": "false"
            },
            "containerStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
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
    static get states() {
        return {
            "open": {}
        };
    }
}
//# sourceMappingURL=ir-tooltip.js.map
