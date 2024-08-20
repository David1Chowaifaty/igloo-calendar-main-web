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
        return (h(Host, { key: 'cccf2ec7692d41437744cbcb05667e8f00b402db' }, h("button", { key: '53b338c10b7c1761d4ee5311cd96e5830ce2c9b5', ref: el => (this.trigger = el), onMouseEnter: () => {
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
            } }, h("slot", { key: '8c1a82226089b90727430992371bf530e7e79bba', name: "tooltip-trigger" }, h("div", { key: '5ba7026c37cd27ab63bfec6f6d0730ffaa45579f', class: "tooltip-container" }, h("p", { key: '587ed3d62895281730114215925838ec7ce00347', class: `tooltip-label label-${this.labelColors}` }, this.label), h("svg", { key: '8defe8c8b693517066c147a4cc32d9ea79ce6be7', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '783848aaa4ebe0ffa72f6db316e1dc245c400460', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: 'c72f2592ecc2425446b5255eb41b964bceeb7418', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: '0e44d82aee914122aebb9154e4d84874e2cc6948' }, h("div", { key: '9010df3a52f346b720efaf1ad2723e15602880af', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: '28f7309ebc96fa60788efed480c870038c74ae13', innerHTML: this.message })))))));
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
