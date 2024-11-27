import { createPopper } from "@popperjs/core";
import { Fragment, Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.open) {
                this.open = false;
            }
        };
        this.message = undefined;
        this.withHtml = true;
        this.label = undefined;
        this.labelColors = 'default';
        this.open_behavior = 'hover';
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
        if (shouldOpen) {
            document.addEventListener('click', this.handleOutsideClick, true);
        }
        else {
            document.removeEventListener('click', this.handleOutsideClick, true);
        }
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
        this.tooltipOpenChange.emit(shouldOpen);
    }
    disconnectedCallback() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        document.removeEventListener('click', this.handleOutsideClick, true);
    }
    render() {
        return (h(Host, { key: '430db7f9cfa283c71005f7064f6a7c365f79502f' }, h("button", { key: '6cc42d2ac3b1054c5e4ebdbb44bd0c880d75211c', ref: el => (this.trigger = el), onMouseEnter: () => {
                if (this.open_behavior === 'hover') {
                    this.toggleOpen(true);
                }
            }, onMouseLeave: () => {
                if (this.open_behavior === 'hover')
                    this.toggleOpen(false);
            }, onClick: () => {
                if (this.open_behavior === 'click') {
                    this.toggleOpen(!this.open);
                }
            } }, h("slot", { key: '700eca4e7da4f6920d9f3865709243e6a3f6396a', name: "tooltip-trigger" }, h("div", { key: '0d577c344b2b4bd9bab3ab4f7b3fdca6e8712e13', class: "tooltip-container" }, h("p", { key: 'b1ede5e1bdebe8f9a3c642aa64b4934d7d6a22ea', class: `tooltip-label label-${this.labelColors}` }, this.label), h("svg", { key: '1753a728e63d9693894324715665fdafc1e9f7ca', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '8bd41612b1320803733187a7a9c9eba97e3f89bc', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '918aac367c2f018bcc64a86e85d7a62169f9890d', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: 'ad983679e04ea359223c299feeff54785c42fc71' }, h("div", { key: '92d0ae2a85b46071bfa7a4b007415e4caf489a91', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: 'f46438e6d5daafff196a2c2fe58351884224a5ca', innerHTML: this.message })))))));
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
            },
            "labelColors": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'green' | 'red'",
                    "resolved": "\"default\" | \"green\" | \"red\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label-colors",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "open_behavior": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'hover' | 'click'",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "open_behavior",
                "reflect": false,
                "defaultValue": "'hover'"
            }
        };
    }
    static get states() {
        return {
            "open": {}
        };
    }
    static get events() {
        return [{
                "method": "tooltipOpenChange",
                "name": "tooltipOpenChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-tooltip.js.map
