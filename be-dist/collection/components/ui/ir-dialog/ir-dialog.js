import localizedWords from "../../../stores/localization.store";
import { addOverlay, removeOverlay } from "../../../stores/overlay.store";
import { Host, h } from "@stencil/core";
export class IrDialog {
    constructor() {
        this.closeButton = true;
        this.isOpen = false;
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        addOverlay();
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        if (!this.isOpen) {
            return;
        }
        removeOverlay();
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
    }
    prepareFocusTrap() {
        const focusableElements = 'button,ir-dropdown ,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.shadowRoot.querySelectorAll(focusableElements);
        // console.log(focusableContent);
        if (focusableContent.length === 0)
            return;
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];
        this.firstFocusableElement.focus();
    }
    handleKeyDown(ev) {
        if (!this.isOpen) {
            return;
        }
        let isTabPressed = ev.key === 'Tab';
        if (ev.key === 'Escape' && this.isOpen) {
            this.closeModal();
        }
        if (!isTabPressed) {
            return;
        }
        // If focus is about to leave the last focusable element, redirect it to the first.
        if (!ev.shiftKey && document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            ev.preventDefault();
        }
        // If focus is about to leave the first focusable element, redirect it to the last.
        if (ev.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            ev.preventDefault();
        }
    }
    disconnectedCallback() {
        removeOverlay();
    }
    render() {
        return (h(Host, { key: 'b7c0b99d55756b9164e22dfd419542776a04b9a6' }, h("div", { key: 'd0a1ded80a627622adb663230f23b0acc4e2ba3e', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (h("div", { key: '0554ce99660cb90689b403976008e575522072be', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { key: 'ca0b394e7d5d28914629ef584e2215e297a6ffe2', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: '0c437a30182b77293a41848c41ed995b13dcf1f4', name: "modal-title" })), h("div", { key: '16382e4e5cf8d3de74bf42a3e06a831f95ade32f', class: "modal-body", id: "dialog1Desc" }, this.closeButton && (h("ir-button", { key: '0daa1b38eb0f2d2bc789c1dc1a88b2dc5fdba8cc', onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal();
            }, variants: "icon", title: localizedWords.entries.Lcz_Close, class: "absolute right-3 top-3", iconName: "xmark" })), h("slot", { key: 'e95c7c85a7408442135b2d4155f195f6ba250af3', name: "modal-body" })), h("div", { key: '1580fba34f227c2ea6e561d6394c4bfc9c54877b', class: "modal-footer" }, h("slot", { key: '99ce6587f6980acfcf3e7c75ef8c8eab86538d98', name: "modal-footer" }))))));
    }
    static get is() { return "ir-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dialog.css"]
        };
    }
    static get properties() {
        return {
            "closeButton": {
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
                "attribute": "close-button",
                "reflect": false,
                "defaultValue": "true"
            }
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
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-dialog.js.map
