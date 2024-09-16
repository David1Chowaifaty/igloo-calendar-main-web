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
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        removeOverlay();
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
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
        return (h(Host, { key: '7842eba90cd9092d051d6f438fefc3e1535b91a3' }, h("div", { key: '02db51f6a2f28f06d0b9b2f02333999acb48b898', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed' }), this.isOpen && (h("div", { key: '51300be935303f35a5eca9a303a49a050dd2df27', class: "modal-container", tabIndex: -1, role: "alertdialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { key: 'db8b6b695321217e4df5bf182f97ff6a43b2db54', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: 'fefb215354e678000925b43f2f27a6f9c90a4417', name: "modal-title" })), h("div", { key: '4e474b82de2caa3d7633507dc599efc09add14ed', class: "modal-body", id: "dialog1Desc" }, h("slot", { key: '178a3751d9ed942274e7a92269aeae6fd502930d', name: "modal-body" })), h("div", { key: 'be9e9cbb0bd4361d46a78f0055da95595b49228b', class: "modal-footer" }, h("slot", { key: '811a8de694c5fc91e9bae2e999c8579eec3dd3fe', name: "modal-footer" }))))));
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
    static get events() {
        return [{
                "method": "openChange",
                "name": "openChange",
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
