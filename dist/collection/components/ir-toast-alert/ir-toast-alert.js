import { Host, h } from "@stencil/core";
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
    handleAction = () => {
        this.irToastAction.emit({ id: this.toastId });
    };
    handleDismiss = () => {
        if (!this.dismissible) {
            return;
        }
        this.irToastDismiss.emit({ id: this.toastId, reason: 'manual' });
    };
    setInteracting = (interacting) => {
        this.irToastInteractionChange.emit({ id: this.toastId, interacting });
    };
    getIcon() {
        switch (this.variant) {
            case 'success':
                return (h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, h("path", { d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm-1.2-5.2l6.3-6.3-1.4-1.4-4.9 4.9-2.1-2.1-1.4 1.4 3.5 3.5z" })));
            case 'warning':
                return (h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, h("path", { d: "M12 2 1 21h22L12 2zm0 5 6.46 12H5.54L12 7zm-1 4v4h2v-4h-2zm0 6v2h2v-2h-2z" })));
            case 'danger':
                return (h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, h("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })));
            default:
                return (h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, h("path", { d: "M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })));
        }
    }
    render() {
        return (h(Host, { key: 'e1451bfa6be93ca63e13addcc404e0071cfb48d2', role: "status", "aria-live": "polite", "aria-atomic": "true", "data-variant": this.variant, "data-leaving": this.leaving ? 'true' : 'false', "data-position": this.position, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("article", { key: 'ee2de68da239a427b6eb48917a0ebff77127ee92', class: "toast", part: "base" }, h("div", { key: '258cdd3587d92ab48aa35ff9b9e98a24fc48c69c', class: "toast__leading", part: "icon" }, this.getIcon()), h("div", { key: 'e34c8cff75eaeb09a92a1533cda04044e23df5f7', class: "toast__body", part: "content" }, this.label && (h("p", { key: '392081c2c2a8f4c0f633f815840c9b2790ceb03e', class: "toast__title", part: "title" }, this.label)), this.description && (h("p", { key: '61fde0ebc88f9a2f3a750b953066ef2513b534b4', class: "toast__description", part: "description" }, this.description))), (this.actionLabel || this.dismissible) && (h("div", { key: '64ce947a241527d63a42e3481ca09fd376768fb2', class: "toast__actions", part: "actions" }, this.actionLabel && (h("button", { key: '78b837e3e30e26537c80384caa37ccb1073a3880', type: "button", class: "toast__action", onClick: this.handleAction }, this.actionLabel)), this.dismissible && (h("button", { key: '9ad0a9afcd99d55c4d4925530937ae13b806d662', type: "button", class: "toast__dismiss", "aria-label": "Dismiss notification", onClick: this.handleDismiss }, h("svg", { key: '33c80e65458eb37afa3b4fbb65e56704465185d1', viewBox: "0 0 16 16", "aria-hidden": "true" }, h("path", { key: '80bc03321c7d9b0751c9aa6527ae2dd6b4d782de', d: "M4.646 4.646 8 8l3.354-3.354 1.292 1.292L9.292 9.293l3.354 3.354-1.292 1.292L8 10.707l-3.354 3.354-1.292-1.292L6.708 9.293 3.354 5.939z" })))))))));
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
                "reflect": false,
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
