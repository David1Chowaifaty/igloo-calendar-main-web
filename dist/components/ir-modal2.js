import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = /*@__PURE__*/ proxyCustomElement(class IrModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.confirmModal = createEvent(this, "confirmModal", 7);
        this.cancelModal = createEvent(this, "cancelModal", 7);
        /**
         * The title text displayed in the modal header.
         */
        this.modalTitle = 'Modal Title';
        /**
         * The main content text shown in the modal body.
         */
        this.modalBody = 'Modal Body';
        /**
         * Whether the right (confirm) button is visible.
         */
        this.rightBtnActive = true;
        /**
         * Whether the left (cancel/close) button is visible.
         */
        this.leftBtnActive = true;
        /**
         * Text displayed on the right (confirm) button.
         */
        this.rightBtnText = 'Confirm';
        /**
         * Text displayed on the left (cancel/close) button.
         */
        this.leftBtnText = 'Close';
        /**
         * Whether the modal is in a loading state, disabling interaction.
         */
        this.isLoading = false;
        /**
         * If true, the modal automatically closes after confirm/cancel actions.
         */
        this.autoClose = true;
        /**
         * Color theme of the right button.
         */
        this.rightBtnColor = 'primary';
        /**
         * Color theme of the left button.
         */
        this.leftBtnColor = 'secondary';
        /**
         * Horizontal alignment of the footer buttons.
         */
        this.btnPosition = 'right';
        /**
         * Whether an icon should be displayed next to the title.
         */
        this.iconAvailable = false;
        /**
         * Icon name to render next to the title (if `iconAvailable` is true).
         */
        this.icon = '';
        /**
         * Controls visibility of the modal.
         */
        this.isOpen = false;
        /**
         * Payload object to pass along with confirm/cancel events.
         */
        this.item = {};
    }
    /**
     * Opens the modal.
     *
     * Example:
     * ```ts
     * const modal = document.querySelector('ir-modal');
     * modal.openModal();
     * ```
     */
    async openModal() {
        this.isOpen = true;
    }
    /**
     * Closes the modal.
     */
    async closeModal() {
        this.isOpen = false;
    }
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: '6cabf3ce93f27d9aa2ef73dd7b39534d0cb6461d', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'dadf072bede82859605e8064bca006777efc6418', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '46afb6fd505fd5c99a88cee1fb17d5956fe32afa', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: 'fef0215f31b9a4cb3d0d7c701f4470f21cdfe8d2', class: `ir-alert-header` }, h("p", { key: '5f5564e32b6de51adee452cf59411ae57879d241' }, this.modalTitle))), h("div", { key: 'fc2aa4e7b85109399e36661328ee93f863f0f2e9', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'b2d95051ea11d07b44b03e79548def4059093043' }, this.modalBody)), h("div", { key: 'c5054e4705e9fbdfc498251d8a95cbaf68ef1017', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: '2b9492c887969a6b3e8bb856e5830350d241502a', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.rightBtnActive && (h("ir-button", { key: '96d55590026231c895bc919553427a1341ca41ba', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
    static get style() { return IrModalStyle0; }
}, [2, "ir-modal", {
        "modalTitle": [1, "modal-title"],
        "modalBody": [1, "modal-body"],
        "showTitle": [4, "show-title"],
        "rightBtnActive": [4, "right-btn-active"],
        "leftBtnActive": [4, "left-btn-active"],
        "rightBtnText": [1, "right-btn-text"],
        "leftBtnText": [1, "left-btn-text"],
        "isLoading": [4, "is-loading"],
        "autoClose": [4, "auto-close"],
        "rightBtnColor": [1, "right-btn-color"],
        "leftBtnColor": [1, "left-btn-color"],
        "btnPosition": [1, "btn-position"],
        "iconAvailable": [4, "icon-available"],
        "icon": [1],
        "item": [1032],
        "isOpen": [32],
        "openModal": [64],
        "closeModal": [64]
    }, [[0, "clickHandler", "btnClickHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-modal", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrModal);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrModal as I, defineCustomElement as d };

//# sourceMappingURL=ir-modal2.js.map