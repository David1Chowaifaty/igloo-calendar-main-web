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
        return (h(Host, { key: '5478dfbabcd5c5d4e8e09ba353725a7eab28ddf2' }, h("div", { key: '91c5dfd3dcb9eb325b0dc867698e14bd029c0f1e', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed' }), this.isOpen && (h("div", { key: '2f5013a5bdcc3a456d408b9a735a1d652fd69f90', class: "modal-container", tabIndex: -1, role: "alertdialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { key: '2b7cd284a4ed13f300e548a1621acb5d540ef348', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: '63f07221c04794ccb632065724493895a29b5b43', name: "modal-title" })), h("div", { key: 'fff2d5ad31c77e277afddf3adae4858844580f83', class: "modal-body", id: "dialog1Desc" }, h("slot", { key: '73b7f04244ee6265767698dd98ffbb39c52171b2', name: "modal-body" })), h("div", { key: '08ae6674d36a6f546a204db5a7b845ec2663d667', class: "modal-footer" }, h("slot", { key: 'b657a989cae8cc8877c4613336187e41c3e890ea', name: "modal-footer" }))))));
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
