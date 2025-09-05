'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal", 7);
        this.cancelModal = index.createEvent(this, "cancelModal", 7);
        this.middleModal = index.createEvent(this, "middleModal", 7);
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
        /** Whether the middle (tertiary) button is visible. */
        this.middleBtnActive = false;
        /**
         * Text displayed on the right (confirm) button.
         */
        this.rightBtnText = 'Confirm';
        /**
         * Text displayed on the left (cancel/close) button.
         */
        this.leftBtnText = 'Close';
        /**Text displayed on the middle (tertiary) button. */
        this.middleBtnText = 'More';
        /**
         * Whether the modal is in a loading state, disabling interaction.
         */
        this.isLoading = false;
        /**
         * Whether the modal middle button is in a loading state, disabling interaction.
         * @requires middleBtnActive to be true
         */
        this.isMiddleButtonLoading = false;
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
        /** Color theme of the middle (tertiary) button. */
        this.middleBtnColor = 'info';
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
        else if (name === this.middleBtnText) {
            this.middleModal.emit(this.item);
            this.item = {};
            if (this.autoClose)
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
            index.h("div", { key: 'b764bd48738bc0970fa112890c6936790ae17611', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: '6bee32384276bc8d9ef1660d264f30709574ec5f', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: '3ce284e5165c1edbe0414513eca90a01c1cca045', class: `ir-alert-content p-2` }, this.showTitle && (index.h("div", { key: 'fa8e95c9dc44e1f96e9efdee7f4ba33cf5f07f19', class: `ir-alert-header` }, index.h("p", { key: '2404c00e99197056e8cfc40d9a142bd749021810' }, this.modalTitle))), index.h("div", { key: 'd524b026a0427cf6b7184a9d4befc3789b73a89c', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: '891d58a96fb895c5d73e0c0a22809f8ec6923957' }, this.modalBody)), index.h("div", { key: '3e092228d710ad804ed5512171ab299b4e24d2af', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && index.h("ir-button", { key: '2b991341199a88b60effa4b25becd5f8e3b96d18', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (index.h("ir-button", { key: '80f209fbc695c66e60456c272bd60522c261f719', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (index.h("ir-button", { key: 'ce4a59759bfef906dd5cfa5d0fc7a74779485db5', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

exports.ir_modal = IrModal;

//# sourceMappingURL=ir-modal.cjs.entry.js.map