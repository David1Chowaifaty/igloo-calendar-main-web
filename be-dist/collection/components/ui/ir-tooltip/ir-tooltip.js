import { createPopper } from "@popperjs/core";
import { Fragment, Host, h } from "@stencil/core";
export class IrTooltip {
    constructor() {
        this.withHtml = true;
        this.labelColors = 'default';
        this.open_behavior = 'hover';
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.open) {
                this.open = false;
            }
        };
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
        return (h(Host, { key: 'f5b4e337e55f3714393e44aad4e9d909ade6dc45' }, h("button", { key: 'ae34814e0282bf02352bc8ceeef67a7c5387a814', ref: el => (this.trigger = el), onMouseEnter: () => {
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
            } }, h("slot", { key: '002a3fab299dd9f1db4a36c4d2a91ded038c0510', name: "tooltip-trigger" }, h("div", { key: 'd90ad69533d0cefb105e66324726c582357138dc', class: "tooltip-container" }, h("p", { key: 'eb75e5e208d15e1ee2c4e381a50dee74144f9340', class: `tooltip-label label-${this.labelColors}` }, this.label), h("svg", { key: '89254f1c563ac03b8858addbb69ce3ab0071b760', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '4bc28151b90a25d04dfa6c1675cc5e3db766cc6f', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '0c9a6375f0344736deabb7756f7dbb19f8aea699', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: '822475fbecb73f82a75c4de26ac8d3e29d97bd36' }, h("div", { key: '36e28b49a078f793100c993c71cf5c903550a6fc', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: '111a9572194daf243c68c12ced0a5c39dbc53790', innerHTML: this.message })))))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
