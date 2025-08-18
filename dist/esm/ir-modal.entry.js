import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("div", { key: 'de3c489757aaf6f18960223a5eafddaa3a95990e', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'ddfc7d26f1a69faf235688800cac132620f5f620', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '09649f58428598f9c711c370133a3bb66874316b', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '6374ba67089c6f5373e1254625f1235cf30271e5', class: `ir-alert-header` }, h("p", { key: 'a01876046df6e58487732d2e34ff0e67a649fdf1' }, this.modalTitle))), h("div", { key: 'ee8c8e2ed16cc54d84fffed025fe867321d4a7fe', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'af9295ed348fcae6bbbb86239edf1607e18321f6' }, this.modalBody)), h("div", { key: 'd7f97167b3618f36c48be7e5b5c23e091913cf48', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: '5a6525ac7136e185b1c8976692392040d9e4cb70', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.rightBtnActive && (h("ir-button", { key: 'aae1c730a36254004f8830a1f849f9e46cc7572d', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

export { IrModal as ir_modal };

//# sourceMappingURL=ir-modal.entry.js.map