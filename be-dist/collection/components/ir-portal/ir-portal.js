import { Host, h } from "@stencil/core";
import { createPopper } from "@popperjs/core";
const DEFAULT_OFFSET = 20;
const Z_INDEX = '9005';
const ID_PORTAL = 'ir-portal';
export class IrPortal {
    constructor() {
        this.offset = DEFAULT_OFFSET;
    }
    componentDidLoad() {
        this.createPortal();
        this.moveElementToPortal();
        this.initializePopper();
    }
    disconnectedCallback() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        if (this.portal) {
            this.portal.remove();
        }
    }
    createPortal() {
        this.portal = document.createElement('div');
        this.portal.setAttribute('id', ID_PORTAL);
        this.portal.style.zIndex = Z_INDEX;
        this.portal.style.position = 'fixed';
        document.body.append(this.portal);
    }
    moveElementToPortal() {
        while (this.hostElement.childNodes.length > 0) {
            this.portal.appendChild(this.hostElement.firstChild);
        }
    }
    async updatePosition() {
        if (this.popperInstance) {
            this.popperInstance.update();
        }
    }
    initializePopper() {
        this.popperInstance = createPopper(this.reference, this.portal, {
            placement: 'auto-start',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this.offset],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                    },
                },
            ],
        });
    }
    render() {
        return (h(Host, { key: '45094922877c90affa89da24d7477c85e05d28e4' }, h("slot", { key: '315fc443709ec63f7a9736a57bbe8b16951210f4', name: "portal-body" })));
    }
    static get is() { return "ir-portal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-portal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-portal.css"]
        };
    }
    static get properties() {
        return {
            "reference": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "offset": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "offset",
                "reflect": false,
                "defaultValue": "DEFAULT_OFFSET"
            }
        };
    }
    static get methods() {
        return {
            "updatePosition": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=ir-portal.js.map
