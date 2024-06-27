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
        return (h(Host, { key: '17ee249cae9ccb6beb627b3d45ff2e15c14e2e28' }, h("button", { key: '5a5c42cbae55877b8a6928a21e288335cb5b0539', ref: el => (this.trigger = el), onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, h("slot", { key: '5c09ddb51ff493514767def7f9cf53baab119f0e', name: "tooltip-trigger" }, h("div", { key: '1ed6bff4024b57b8111e419c86c34f6426c7e9a5', class: "tooltip-container" }, h("p", { key: 'dd1e6a2b08374b265364ed4ef8bfa58b67322fb0', class: "tooltip-label" }, this.label), h("svg", { key: 'cf2e063a65accc274db315b6d507c9ebc65b4c1f', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '76a00d9fbb60bfcd7ecc4aee3a6d53bc1183d355', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '9bfdf131c1b5828bac22cb83536ac494af7f0180', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: '395a4bb4f040dec060e902bb6f037bae53501064' }, h("div", { key: 'd416c3b553e30e996c8947d7077519d76e0eb1d4', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: '61c659600118f390b057ff1900ddd4b34f1837bf', innerHTML: this.message })))))));
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
