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
        this.modalTitle = 'Modal Title';
        this.modalBody = 'Modal Body';
        this.rightBtnActive = true;
        this.leftBtnActive = true;
        this.rightBtnText = 'Confirm';
        this.leftBtnText = 'Close';
        this.isLoading = false;
        this.autoClose = true;
        this.rightBtnColor = 'primary';
        this.leftBtnColor = 'secondary';
        this.btnPosition = 'right';
        this.iconAvailable = false;
        this.icon = '';
        this.isOpen = false;
        this.item = {};
    }
    async closeModal() {
        this.isOpen = false;
    }
    async openModal() {
        this.isOpen = true;
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
            h("div", { key: '6c8938ec307ad62cde6d41211f3fc71aa11dfc6f', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: '7af1212057fcc52716dffbe1185e410f6cd8280d', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: 'f1076d5a06147e9eaf49e1ecd1106c6bb43823f2', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: 'c420a6863edcded929ca1f1af2b9a9be9afa5fbb', class: `ir-alert-header` }, h("p", { key: '470138f1a69f904d77bb60f27ffcf88de593c4cc' }, this.modalTitle))), h("div", { key: '879b263a7c44f17cf72574babb65cf8183f0380e', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'dd2069d80c73d7fff4adbde157ec62a4ef0eddcb' }, this.modalBody)), h("div", { key: 'd0981ce658bb41bb7bc3f0c56639b28aa2b831d5', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: '66b5550ff622d1fd62ca87934f4f453802c73884', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.rightBtnActive && (h("ir-button", { key: '87e5d807b497c314f335633dadb0ccd4fe6d24d7', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
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
        "closeModal": [64],
        "openModal": [64]
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