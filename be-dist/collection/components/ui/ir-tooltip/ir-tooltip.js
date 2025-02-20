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
        return (h(Host, { key: '1ebd9e0263e9052d887b49cfae9348134d0010e8' }, h("button", { key: 'e58bc0d6f663d27ac13f98175f96e8ef4071cace', ref: el => (this.trigger = el), onMouseEnter: () => {
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
            } }, h("slot", { key: '1f7f8d7a8988e28d7c4e3973b781f9d2e7882009', name: "tooltip-trigger" }, h("div", { key: 'c016935f15e3e92bd7e914352b96a2402b1252b2', class: "tooltip-container" }, h("p", { key: 'c86b02c54fc18b7eacd6c3f994a8ff67f2b87c4a', class: `tooltip-label label-${this.labelColors}` }, this.label), h("svg", { key: '92f30fe3e256eb5ba1c90a0f96cabc6a8b2228bc', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '7bfc36d24f10433a0d8747c30149eedd3d030bad', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '72583f87542d3099f15f15f08cc2e319660ea7f4', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: 'd7f386fff9db7a7d8b9852993ad1b212c199ccb3' }, h("div", { key: '06edae0ccd67712e8d6d73c86093e4325983f01b', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: 'bf9dc70f9285f74de26169287ffe9274f8b036cb', innerHTML: this.message })))))));
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
