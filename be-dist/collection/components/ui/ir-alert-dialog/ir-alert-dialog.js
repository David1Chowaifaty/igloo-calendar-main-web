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
        this.prepareFocusTrap();
    }
    async closeModal() {
        removeOverlay();
        this.isOpen = false;
    }
    prepareFocusTrap() {
        addOverlay();
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.querySelectorAll(focusableElements);
        console.log(focusableContent);
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
        return (h(Host, { key: '4406baa69051a40636561e1bcc819183cf9ebf50' }, h("div", { key: '2cc4ca89ef7c136a8b6d26122bd16fe83436503f', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed' }), this.isOpen && (h("div", { class: "modal-container", tabIndex: -1, role: "alertdialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { class: 'modal-title', id: "dialog1Title" }, h("slot", { name: "modal-title" })), h("div", { class: "modal-body", id: "dialog1Desc" }, h("slot", { name: "modal-body" })), h("div", { class: "modal-footer" }, h("slot", { name: "modal-footer" }))))));
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