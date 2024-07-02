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
        return (h(Host, { key: 'dc9918fcf28f79ae3adaf0e7410926174a0038c6' }, h("button", { key: 'e110386fe27944fb8e0eff2467b6cd8d3c482bd4', ref: el => (this.trigger = el), onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, h("slot", { key: '84b5d054d8a673900752ee58f268fd0b1296c9e8', name: "tooltip-trigger" }, h("div", { key: 'f69caa8106bf291240467d1bea53cd860db009bd', class: "tooltip-container" }, h("p", { key: '0f389f290d54c27aad24de4b1e6d41398eafcba4', class: "tooltip-label" }, this.label), h("svg", { key: 'fca8584db9d5bf8530eccebdf4f538f6930686fc', "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { key: '5c20a8027e2339513fef954ff350cb8bb9c0b5a0', fill: 'currentColor', d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))))), h("div", { key: '39b4e6a850e47c81bdaec95013d9e4ddcb4a62ac', ref: el => (this.content = el), class: "z-50", role: "tooltip" }, this.open && (h(Fragment, { key: '02bf55e51d702b1993822d487f1a20b7e6d0af82' }, h("div", { key: '2d284c0f16c6eb6dfd2891f41e4e526324969766', class: "tooltip-content max-w-xs rounded-lg\r\n              px-3 py-2 text-xs " }, h("div", { key: 'c1cfd4ec887bba8d0afeade279207fab806c02a7', innerHTML: this.message })))))));
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
