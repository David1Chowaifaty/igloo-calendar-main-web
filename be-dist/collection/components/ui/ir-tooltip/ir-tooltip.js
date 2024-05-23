import { createPopper } from "@popperjs/core";
import { Fragment, Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        this.message = undefined;
        this.withHtml = true;
        this.customSlot = false;
        this.open = undefined;
    }
    componentDidLoad() {
        this.createPopperInstance();
    }
    createPopperInstance() {
        if (this.trigger && this.content) {
            this.popperInstance = createPopper(this.trigger, this.content, {
                placement: 'auto',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
            });
        }
    }
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
                if (this.popperInstance) {
                    this.popperInstance.update();
                }
                else {
                    this.createPopperInstance();
                }
            }, 300);
        }
        else {
            this.open = false;
            if (this.popperInstance) {
                this.popperInstance.destroy();
                this.popperInstance = null;
            }
        }
    }
    disconnectedCallback() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
    }
    render() {
        return (h(Host, { key: '15bd74d75c104023db1ff5a80353ea1d8be24830' }, h("button", { key: '168a74a7f016f4376a8f466ef2b799def8cbfbdb', ref: el => (this.trigger = el), onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (h("svg", { "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), h("div", { key: '3e6396f3df96873b54da37ecbf0471be7f044f05', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, null, h("div", { class: "tooltip-content px-3 py-2\r\n              text-xs rounded-lg max-w-xs " }, h("div", { innerHTML: this.message })))))));
    }
    static get is() { return "ir-tooltip"; }
    static get encapsulation() { return "shadow"; }
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
                "attribute": "custom-slot",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-tooltip.js.map
