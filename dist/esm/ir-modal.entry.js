import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmModal = createEvent(this, "confirmModal", 7);
        this.cancelModal = createEvent(this, "cancelModal", 7);
        this.middleModal = createEvent(this, "middleModal", 7);
    }
    /**
     * The title text displayed in the modal header.
     */
    modalTitle = 'Modal Title';
    /**
     * The main content text shown in the modal body.
     */
    modalBody = 'Modal Body';
    /**
     * Controls whether the modal title is rendered.
     */
    showTitle;
    /**
     * Whether the right (confirm) button is visible.
     */
    rightBtnActive = true;
    /**
     * Whether the left (cancel/close) button is visible.
     */
    leftBtnActive = true;
    /** Whether the middle (tertiary) button is visible. */
    middleBtnActive = false;
    /**
     * Text displayed on the right (confirm) button.
     */
    rightBtnText = 'Confirm';
    /**
     * Text displayed on the left (cancel/close) button.
     */
    leftBtnText = 'Close';
    /**Text displayed on the middle (tertiary) button. */
    middleBtnText = 'More';
    /**
     * Whether the modal is in a loading state, disabling interaction.
     */
    isLoading = false;
    /**
     * Whether the modal middle button is in a loading state, disabling interaction.
     * @requires middleBtnActive to be true
     */
    isMiddleButtonLoading = false;
    /**
     * If true, the modal automatically closes after confirm/cancel actions.
     */
    autoClose = true;
    /**
     * Color theme of the right button.
     */
    rightBtnColor = 'primary';
    /**
     * Color theme of the left button.
     */
    leftBtnColor = 'secondary';
    /** Color theme of the middle (tertiary) button. */
    middleBtnColor = 'info';
    /**
     * Horizontal alignment of the footer buttons.
     */
    btnPosition = 'right';
    /**
     * Whether an icon should be displayed next to the title.
     */
    iconAvailable = false;
    /**
     * Icon name to render next to the title (if `iconAvailable` is true).
     */
    icon = '';
    /**
     * Controls visibility of the modal.
     */
    isOpen = false;
    /**
     * Payload object to pass along with confirm/cancel events.
     */
    item = {};
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
    /**
     * Fired when the confirm (right) button is clicked.
     * Emits the current `item` value.
     */
    confirmModal;
    /**
     * Fired when the cancel (left) button or backdrop is clicked.
     */
    cancelModal;
    /** Fired when the middle (tertiary) button is clicked. Emits the current `item` value. */
    middleModal;
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
            h("div", { key: '5dd8f2597e3c92795c6b0556698c239dadd2d515', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: '3c3db99572be9505036fe9cc2286664c149d1cab', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: 'daa6c744ec6231d6ebc495c987fca914c7cf326d', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: 'ee0b62b4ce22fd6c17f2d974eddac8f63539f60d', class: `ir-alert-header` }, h("p", { key: 'dbab465f2666ea3e435a90341fe63106b16afd3d' }, this.modalTitle))), h("div", { key: '29139a2871a79ea4b18356747d33058d0cd37157', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'f6b232111effc92f566e0d9d8ab22c2189013e3a' }, this.modalBody)), h("div", { key: '68018f483b5df364a22a96d7aa6d6e27ea34fb08', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: '7a346797b7aed443fc2c942d79a3c317f6e52971', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (h("ir-button", { key: '76fdaaa41fea150e283cfa980107a9ff262ca1db', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (h("ir-button", { key: '8a722647047f3ed0560b9bc939a93b3925b40747', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

export { IrModal as ir_modal };

//# sourceMappingURL=ir-modal.entry.js.map