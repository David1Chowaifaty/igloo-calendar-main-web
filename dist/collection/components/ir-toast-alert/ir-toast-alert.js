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
        return (h("div", { key: 'a192b346990a4079e00448eaa6e2980ead20c6c8', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("wa-callout", { key: 'dd80154a7eb239a892a32b65e71ca5b8cd2a3932', variant: this.calloutVariant }, this.getIcon(), h("div", { key: '23b8514744611b166076003d717ee211b9c98073', class: "toast__body" }, this.label && h("h3", { key: '454360247817969858137d24e4e768be5576ac67', class: "toast__title" }, this.label), this.description && h("p", { key: '82662a640ab448c14fc662745afcb617b05d0a93', class: "toast__description" }, this.description)))));
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
