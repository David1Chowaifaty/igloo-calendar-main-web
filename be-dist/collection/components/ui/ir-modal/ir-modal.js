import { addOverlay, removeOverlay } from "../../../stores/overlay.store";
export class IrModal {
    constructor() {
        this.element = undefined;
        this.isOpen = false;
    }
    componentWillLoad() {
        this.portal = document.createElement('div');
        this.portal.className = 'ir-portal';
        this.portal.style.position = 'relative';
        document.body.appendChild(this.portal);
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        this.openChange.emit(this.isOpen);
        addOverlay();
        this.createOverlay();
        this.insertModalContent();
        this.prepareFocusTrap();
    }
    async closeModal() {
        removeOverlay();
        this.removeOverlay();
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
        this.removeModalContent();
    }
    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'overlay';
        this.overlay.addEventListener('click', this.closeModal.bind(this));
        this.portal.appendChild(this.overlay);
    }
    removeOverlay() {
        if (this.isOpen) {
            this.overlay.removeEventListener('click', this.closeModal.bind(this));
            this.portal.removeChild(this.overlay);
        }
    }
    insertModalContent() {
        this.modalContainer = document.createElement('div');
        this.auth = document.createElement('ir-auth');
        this.auth.addEventListener('closeDialog', () => this.closeModal());
        this.modalContainer.appendChild(this.auth);
        this.modalContainer.className = 'modal-container';
        if (this.modalContainer) {
            this.portal.appendChild(this.modalContainer);
        }
    }
    removeModalContent() {
        if (this.modalContainer) {
            this.portal.removeChild(this.modalContainer);
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
    disconnectedCallback() {
        this.removeOverlay();
        this.removeModalContent();
        this.auth.removeEventListener('closeDialog', () => this.closeModal());
    }
    render() {
        return null;
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
//# sourceMappingURL=ir-modal.js.map
