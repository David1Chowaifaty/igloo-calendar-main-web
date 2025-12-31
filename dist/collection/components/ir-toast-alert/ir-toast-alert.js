import { h } from "@stencil/core";
export class IrToastAlert {
    /** Unique identifier passed back to the provider when interacting with the toast */
    toastId;
    /** Heading displayed at the top of the toast */
    label;
    /** Plain text description for the toast body */
    description;
    /** Maps to visual style tokens */
    variant = 'info';
    /** Whether the close button should be rendered */
    dismissible = true;
    /** Optional primary action label */
    actionLabel;
    /** Indicates when the provider is playing the exit animation */
    leaving = false;
    /** Toast position drives enter/exit direction */
    position = 'top-right';
    irToastDismiss;
    irToastAction;
    irToastInteractionChange;
    interacting = false;
    setInteracting = (interacting) => {
        if (this.interacting === interacting) {
            return;
        }
        this.interacting = interacting;
        this.irToastInteractionChange.emit({ id: this.toastId, interacting });
    };
    getIcon() {
        switch (this.variant) {
            case 'success':
                return h("wa-icon", { slot: "icon", name: "circle-check" });
            case 'warning':
                return h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            case 'danger':
                return h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            default:
                return h("wa-icon", { slot: "icon", name: "circle-info" });
        }
    }
    get calloutVariant() {
        switch (this.variant) {
            case 'info':
                return 'neutral';
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'danger':
                return 'danger';
        }
    }
    render() {
        return (h("div", { key: '3bae2d7ecf4b8848fdbfb8768d859fdd80eec9a4', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("wa-callout", { key: '0da3721bf1e96dd8f95a36a2e95010cc82502639', variant: this.calloutVariant }, this.getIcon(), h("div", { key: 'b1b8dcc897d61e3e513166409328d2418c79e2aa', class: "toast__body" }, this.label && h("h3", { key: '54452811e2c82b8f9ba559cb224c12219c6bd5c8', class: "toast__title" }, this.label), this.description && h("p", { key: 'c77cdfad225e8e1aa18c2ac64b900e6066fe1213', class: "toast__description" }, this.description)))));
    }
    static get is() { return "ir-toast-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-toast-alert.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-toast-alert.css"]
        };
    }
    static get properties() {
        return {
            "toastId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unique identifier passed back to the provider when interacting with the toast"
                },
                "getter": false,
                "setter": false,
                "attribute": "toast-id",
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Heading displayed at the top of the toast"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Plain text description for the toast body"
                },
                "getter": false,
                "setter": false,
                "attribute": "description",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastVariant",
                    "resolved": "\"danger\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "ToastVariant": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-toast-alert/ir-toast-alert.tsx",
                            "id": "src/components/ir-toast-alert/ir-toast-alert.tsx::ToastVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maps to visual style tokens"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'info'"
            },
            "dismissible": {
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
                    "text": "Whether the close button should be rendered"
                },
                "getter": false,
                "setter": false,
                "attribute": "dismissible",
                "reflect": false,
                "defaultValue": "true"
            },
            "actionLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional primary action label"
                },
                "getter": false,
                "setter": false,
                "attribute": "action-label",
                "reflect": false
            },
            "leaving": {
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
                    "text": "Indicates when the provider is playing the exit animation"
                },
                "getter": false,
                "setter": false,
                "attribute": "leaving",
                "reflect": false,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TPositions",
                    "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "TPositions": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::TPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Toast position drives enter/exit direction"
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'top-right'"
            }
        };
    }
    static get events() {
        return [{
                "method": "irToastDismiss",
                "name": "irToastDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ id: string; reason: 'manual' }",
                    "resolved": "{ id: string; reason: \"manual\"; }",
                    "references": {}
                }
            }, {
                "method": "irToastAction",
                "name": "irToastAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ id: string }",
                    "resolved": "{ id: string; }",
                    "references": {}
                }
            }, {
                "method": "irToastInteractionChange",
                "name": "irToastInteractionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ id: string; interacting: boolean }",
                    "resolved": "{ id: string; interacting: boolean; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-toast-alert.js.map
