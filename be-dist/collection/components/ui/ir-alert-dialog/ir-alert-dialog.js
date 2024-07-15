import { addOverlay, removeOverlay } from "../../../stores/overlay.store";
import { Host, h } from "@stencil/core";
export class IrAlertDialog {
    constructor() {
        this.isOpen = false;
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        addOverlay();
        this.prepareFocusTrap();
    }
    async closeModal() {
        removeOverlay();
        this.isOpen = false;
    }
    prepareFocusTrap() {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.querySelectorAll(focusableElements);
        if (focusableContent.length === 0)
            return;
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];
        this.firstFocusableElement.focus();
    }
    handleKeyDown(ev) {
        let isTabPressed = ev.key === 'Tab' || ev.keyCode === 9;
        if (!isTabPressed)
            return;
        if (ev.shiftKey) {
            // Shift + Tab
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus();
                ev.preventDefault();
            }
        }
        else {
            // Tab
            if (document.activeElement === this.lastFocusableElement) {
                this.firstFocusableElement.focus();
                ev.preventDefault();
            }
        }
    }
    disconnectedCallback() {
        removeOverlay();
    }
    render() {
        return (h(Host, { key: '88ca794bb9704bd01c092ea79290c3f19b3e363b' }, h("div", { key: '8a5a8c0662eb7fd7d13ea9435810d5ce7811e808', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed' }), this.isOpen && (h("div", { key: '40bf172b62693d48a64ed8fbc3f6fa1497dbd5a3', class: "modal-container", tabIndex: -1, role: "alertdialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { key: 'e1d8c8b91f6c6292b4d7209392a02f7ca3d67f66', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: 'fb4016540a48ed0435b8a0f61f7f152e381a96b6', name: "modal-title" })), h("div", { key: '09c2896bf26a388f70238710a60434b921260fa1', class: "modal-body", id: "dialog1Desc" }, h("slot", { key: '56854f6b44673ba020e414f14058f28cf8901f16', name: "modal-body" })), h("div", { key: 'ed7b757b2616b57186aba4b2e74d971d545560a2', class: "modal-footer" }, h("slot", { key: '1cb054c3b4f725469529ceac79d15f50c38e4e62', name: "modal-footer" }))))));
    }
    static get is() { return "ir-alert-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-alert-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-alert-dialog.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get methods() {
        return {
            "openModal": {
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
            },
            "closeModal": {
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
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-alert-dialog.js.map
