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
        this.middleModal = createEvent(this, "middleModal", 7);
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
            h("div", { key: 'e718349fe3d7b4ca8839f70bf144c71eea410e5a', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'e5fd1cb6bb6c9b7710c0c24f7ec0197a586e2d8e', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '2e96cf18ea306959545df8c0765aa97969f69d10', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '559bd319faea08f3c52be8dcb73a41915831ad53', class: `ir-alert-header` }, h("p", { key: '34a7477c950e133ffa3e6e627c5aeb2a41e83e98' }, this.modalTitle))), h("div", { key: '5e10c870828fe5f88f49afcfb0652b0701c2f52a', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'a64d2a233cbb7efcf5de25c67e23767150983a90' }, this.modalBody)), h("div", { key: 'a74badb29458dfed4ac736c2405116cd7ac2aaa3', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: 'a6b9fe044d04e4564672dadccb8950952030f09e', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (h("ir-button", { key: '2c515e6206b4e8366390daf1223a501139aa65e1', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (h("ir-button", { key: 'c60b05162f5915cc38ce8f001e983d605fa48c2e', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
    static get style() { return IrModalStyle0; }
}, [2, "ir-modal", {
        "modalTitle": [1, "modal-title"],
        "modalBody": [1, "modal-body"],
        "showTitle": [4, "show-title"],
        "rightBtnActive": [4, "right-btn-active"],
        "leftBtnActive": [4, "left-btn-active"],
        "middleBtnActive": [4, "middle-btn-active"],
        "rightBtnText": [1, "right-btn-text"],
        "leftBtnText": [1, "left-btn-text"],
        "middleBtnText": [1, "middle-btn-text"],
        "isLoading": [4, "is-loading"],
        "isMiddleButtonLoading": [4, "is-middle-button-loading"],
        "autoClose": [4, "auto-close"],
        "rightBtnColor": [1, "right-btn-color"],
        "leftBtnColor": [1, "left-btn-color"],
        "middleBtnColor": [1, "middle-btn-color"],
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