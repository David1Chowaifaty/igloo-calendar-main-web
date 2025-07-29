import { Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        /**
         * Whether the tooltip content should be rendered using `innerHTML`.
         * If false, treats message as plain text.
         */
        this.withHtml = true;
        /**
         * When true, allows a custom element to trigger the tooltip using a named slot.
         * If false, a default info icon is used.
         */
        this.customSlot = false;
        /**
         * Defines the horizontal alignment of the tooltip trigger content.
         *
         * - `'start'`: Aligns the trigger to the left within its container.
         * - `'center'`: Centers the trigger horizontally (default).
         * - `'end'`: Aligns the trigger to the right within its container.
         *
         * This alignment affects how the trigger (e.g., icon or slotted element)
         * is positioned inside the outer tooltip container.
         */
        this.alignment = 'center';
    }
    /**
     * Handles showing or hiding the tooltip.
     *
     * - If `shouldOpen` is `true`, the tooltip is shown after a 300ms delay.
     * - If `false`, the tooltip is hidden immediately.
     *
     * @param shouldOpen - whether the tooltip should be shown or hidden.
     *
     * Example:
     * ```ts
     * this.toggleOpen(true);  // show tooltip
     * this.toggleOpen(false); // hide tooltip
     * ```
     */
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
        const alignment = (() => {
            switch (this.alignment) {
                case 'start':
                    return 'justify-content-start';
                case 'end':
                    return 'justify-content-end';
                case 'center':
                    return 'justify-content-center';
                default:
                    return 'justify-content-center';
            }
        })();
        return (h(Host, { class: "m-0 p-0" }, h("span", { style: this.containerStyle, class: `m-0 p-0 d-flex align-items-center ${alignment} ${this.containerClass}`, onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { class: "tooltip-arrow" }), h("div", { class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { innerHTML: this.message }))))));
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
                    "text": "Text or HTML content to be displayed in the tooltip."
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
                    "text": "Whether the tooltip content should be rendered using `innerHTML`.\nIf false, treats message as plain text."
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
                    "text": "When true, allows a custom element to trigger the tooltip using a named slot.\nIf false, a default info icon is used."
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
                    "text": "Inline styles applied to the outer tooltip container."
                },
                "getter": false,
                "setter": false
            },
            "containerClass": {
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
                    "text": "CSS classes applied to the outer tooltip container."
                },
                "getter": false,
                "setter": false,
                "attribute": "container-class",
                "reflect": false
            },
            "alignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'end' | 'center'",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the horizontal alignment of the tooltip trigger content.\n\n- `'start'`: Aligns the trigger to the left within its container.\n- `'center'`: Centers the trigger horizontally (default).\n- `'end'`: Aligns the trigger to the right within its container.\n\nThis alignment affects how the trigger (e.g., icon or slotted element)\nis positioned inside the outer tooltip container."
                },
                "getter": false,
                "setter": false,
                "attribute": "alignment",
                "reflect": false,
                "defaultValue": "'center'"
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
