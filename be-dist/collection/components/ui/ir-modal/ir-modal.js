// import { addOverlay, removeOverlay } from '@/stores/overlay.store';
import { h } from "@stencil/core";
export class IrModal {
    constructor() {
        this.element = undefined;
        this.isOpen = false;
    }
    componentWillLoad() {
        this.createPortal();
    }
    disconnectedCallback() {
        this.cleanup();
    }
    handleAuthFinish(e) {
        this.authStatus.emit(e.detail);
    }
    async openModal() {
        this.isOpen = true;
        this.openChange.emit(this.isOpen);
        // addOverlay();
        // this.createOverlay();
        // this.insertModalContent();
        // this.prepareFocusTrap();
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
        // removeOverlay();
        // this.removeModalContent();
        // this.removeOverlay();
        this.dialogRef.closeModal();
    }
    createPortal() {
        if (!this.portal) {
            this.portal = document.createElement('div');
            this.portal.className = 'ir-portal';
            this.portal.style.position = 'relative';
            document.body.appendChild(this.portal);
        }
    }
    createOverlay() {
        if (!this.overlay) {
            this.overlay = document.createElement('div');
            this.overlay.className = 'overlay';
            this.overlay.addEventListener('click', () => this.closeModal());
            this.portal.appendChild(this.overlay);
        }
    }
    removeOverlay() {
        if (this.overlay) {
            this.overlay.removeEventListener('click', () => this.closeModal());
            if (this.overlay.parentNode === this.portal) {
                this.portal.removeChild(this.overlay);
            }
            this.overlay = null;
        }
    }
    insertModalContent() {
        if (!this.modalContainer) {
            this.modalContainer = document.createElement('div');
            this.modalContainer.className = 'modal-container';
            this.auth = document.createElement('ir-auth');
            this.auth.addEventListener('closeDialog', () => this.closeModal());
            this.auth.addEventListener('authFinish', (e) => {
                console.log('auth finish');
                this.authStatus.emit(e.detail);
            });
            this.modalContainer.appendChild(this.auth);
            this.portal.appendChild(this.modalContainer);
        }
    }
    removeModalContent() {
        if (this.modalContainer) {
            if (this.auth) {
                this.auth.removeEventListener('closeDialog', () => this.closeModal());
            }
            if (this.modalContainer.parentNode === this.portal) {
                this.portal.removeChild(this.modalContainer);
            }
            this.modalContainer = null;
            this.auth = null;
        }
    }
    prepareFocusTrap() {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.portal.querySelectorAll(focusableElements);
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
        if (ev.key === 'Escape') {
            ev.preventDefault();
            this.closeModal();
        }
        if (!isTabPressed)
            return;
        if (ev.shiftKey) {
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus();
                ev.preventDefault();
            }
        }
        else {
            if (document.activeElement === this.lastFocusableElement) {
                this.firstFocusableElement.focus();
                ev.preventDefault();
            }
        }
    }
    cleanup() {
        this.removeOverlay();
        this.removeModalContent();
        if (this.portal && this.portal.parentNode) {
            document.body.removeChild(this.portal);
            this.portal = null;
        }
    }
    render() {
        return (h("ir-dialog", { key: '72ec40fdc26b9076c1546d7b4cb8e4f22c64ebe3', ref: el => (this.dialogRef = el) }, h("ir-auth", { key: '288c9d2fce274ed0e071d870a50736ae3f2ac963', slot: "modal-body", onCloseDialog: () => this.closeModal() })));
    }
    static get is() { return "ir-modal"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-modal.css"]
        };
    }
    static get properties() {
        return {
            "element": {
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
                }
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
            }, {
                "method": "authStatus",
                "name": "authStatus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\r\n    state: 'success' | 'failed';\r\n    token: string;\r\n    payload: {\r\n      method: 'direct' | 'google';\r\n      email?: string;\r\n      booking_nbr?: string;\r\n    };\r\n  }",
                    "resolved": "{ state: \"success\" | \"failed\"; token: string; payload: { method: \"google\" | \"direct\"; email?: string; booking_nbr?: string; }; }",
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
                "name": "authFinish",
                "method": "handleAuthFinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-modal.js.map
