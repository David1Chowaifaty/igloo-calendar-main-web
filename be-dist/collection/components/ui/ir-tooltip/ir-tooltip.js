import { createPopper } from "@popperjs/core";
import { Fragment, Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        this.message = undefined;
        this.withHtml = true;
        this.label = undefined;
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
        return (h(Host, { key: 'cb5bc3e47c62c6a42bd22786ecdccccdbd684f05' }, h("button", { key: '6ee73a04d74e45e571c161eadcceee49c9ba6033', ref: el => (this.trigger = el), onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, h("slot", { key: 'd0498813a457f773685ed66951c123faf9bec31f', name: "tooltip-trigger" }, h("div", { key: 'f605edf6b2338244b1b1dc2acb9a318a57fc72c3', class: "tooltip-container" }, h("p", { key: '6614cf34bb5523402ce5c23c99ccda05d1999f11', class: "tooltip-label" }, this.label), h("svg", { key: '134cfe4ebda41bf67551a84ecd1b4d1d27e04156', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: 'af7e5c452ddb4e62640e22f9c473af27017cf4e4', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '4c209cf09466496c452eb554b8884e564545982d', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: '029108e78e1d9f67a004d46c813efb7e6704248d' }, h("div", { key: '2596dc7f1df2cad9758ac2d15c4a5bb6a04c6804', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: 'cff2aae1b99b42460d75d1fbe0bd130287a184e9', innerHTML: this.message })))))));
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
            "label": {
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
                "attribute": "label",
                "reflect": false
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
