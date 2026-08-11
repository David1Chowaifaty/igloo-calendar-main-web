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
        return (h("div", { key: '843193a1f1814610dac4117bee5f87bc854a2576', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("wa-callout", { key: '4af3302205f9ce8ecb08e694dc979d7d772a8976', variant: this.calloutVariant }, this.getIcon(), h("div", { key: 'd4483292316ad073d8eaa7f0c5a506643cffe8f5', class: "toast__body" }, this.label && h("h3", { key: '81fbef56f3c0a45ec9fffef2c771558ff71dd2ff', class: "toast__title" }, this.label), this.description && h("p", { key: 'd931898c0af278f9da9626e4d647f1606ee918c7', class: "toast__description" }, this.description)))));
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
                "reflect": false,
                "attribute": "toast-id"
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": false,
                "attribute": "description"
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
                "reflect": true,
                "attribute": "variant",
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
                "reflect": false,
                "attribute": "dismissible",
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
                "reflect": false,
                "attribute": "action-label"
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
                "reflect": false,
                "attribute": "leaving",
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
                            "id": "src/components/ui/ir-toast/toast.ts::TPositions",
                            "referenceLocation": "TPositions"
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
                "reflect": false,
                "attribute": "position",
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
