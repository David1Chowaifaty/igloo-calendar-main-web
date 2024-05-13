import { addOverlay, removeOverlay } from "../../../stores/overlay.store";
import { h } from "@stencil/core";
export class IrModal {
    constructor() {
        this.isOpen = false;
    }
    componentWillLoad() {
        this.protal = document.createElement('div');
        this.protal.className = 'ir-portal';
        this.protal.style.position = 'relative';
        document.body.appendChild(this.protal);
        this.openModal();
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        this.overlay = document.createElement('div');
        this.overlay.className = 'overlay';
        this.overlay.addEventListener('click', () => this.closeModal());
        this.protal.appendChild(this.overlay);
        this.prepareFocusTrap();
    }
    async closeModal() {
        removeOverlay();
        this.isOpen = false;
        this.overlay.removeEventListener('click', () => { });
        this.protal.removeChild(this.overlay);
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
        if (ev.key === 'Escape') {
            ev.preventDefault();
            this.closeModal();
        }
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
        return (h("div", { key: 'a41cbbf0cefcccbf981d1fdd4b06a1f673b7bdd6' })
        // <Host>
        //   <div class="backdrop" data-state={this.isOpen ? 'opened' : 'closed'} onClick={() => this.closeModal()}></div>
        //   {this.isOpen && (
        //     <div class="modal-container" tabIndex={-1} role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
        //       {/* <ir-button variants="icon" onButtonClick={() => this.closeModal()} class="absolute right-4 top-4">
        //         <p slot="btn-icon" class="sr-only">
        //           close modal
        //         </p>
        //         <svg slot="btn-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        //           <path
        //             fill="currentColor"
        //             d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        //           />
        //         </svg>
        //       </ir-button> */}
        //       <div class={'modal-title'} id="dialog1Title">
        //         <slot name="modal-title"></slot>
        //       </div>
        //       <div class="modal-body" id="dialog1Desc">
        //         <slot name="modal-body"></slot>
        //       </div>
        //       <div class="modal-footer">
        //         <slot name="modal-footer"></slot>
        //       </div>
        //     </div>
        //   )}
        // </Host>
        );
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
//# sourceMappingURL=ir-modal.js.map
