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
        // document.body.appendChild(this.el);
    }
    async closeModal() {
        if (!this.isOpen) {
            return;
        }
        removeOverlay();
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
        // document.body.removeChild(this.el);
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
        return (h(Host, { key: '729245af3ecccbfe30cb74672ab7608b9dee7a29' }, h("div", { key: 'f91e785998afbb113d77378584df8ae5667f41d8', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (h("div", { key: '33d37d4c6957202a927fa328d3d38a4c0585cfcb', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { key: 'c308d6f587a1f2516b72153178a64fbd1b2a0a97', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: '0c8e211bdd0c9aedebd83d716171c118e9857cdf', name: "modal-title" })), h("div", { key: '03ddb0943c0cd8273479e9abf98a64953016571d', class: "modal-body", id: "dialog1Desc" }, this.closeButton && (h("ir-button", { key: '7ac09e367654346c1fb1ed84cd127c76246b4ab8', onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal();
            }, variants: "icon", title: localizedWords.entries.Lcz_Close, class: "dialog-close-btn", iconName: "xmark" })), h("slot", { key: '6e1d7564cad777aa1e77ba83eb968f54aebf9c89', name: "modal-body" })), h("div", { key: 'bacb5e5bc5556d84845ad9ec44ac639010c6d7e2', class: "modal-footer" }, h("slot", { key: '951ab46347ee17b1488b400c5312e8338b488e7a', name: "modal-footer" }))))));
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
                "getter": false,
                "setter": false,
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
