'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-009c7daa.js');

const irLabelCss = "*.sc-ir-label{margin:0;padding:0}.sc-ir-label-h{display:flex;margin-bottom:5px;gap:5px}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}p.sc-ir-label{margin:0 3px;padding:0}.icon-container.sc-ir-label{margin:0;padding:0}svg.sc-ir-label{margin:0;padding:0}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editSidebar = index.createEvent(this, "editSidebar", 7);
        this.label = undefined;
        this.value = undefined;
        this.iconShown = false;
        this.imageSrc = undefined;
    }
    openEditSidebar() {
        this.editSidebar.emit();
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (index.h(index.Host, { class: this.imageSrc ? 'align-items-center' : '' }, index.h("strong", null, this.label), this.imageSrc && index.h("img", { src: this.imageSrc, class: "p-0 m-0" }), index.h("p", null, this.value), this.iconShown && (index.h("div", { class: "icon-container" }, index.h("ir-icon", { class: "pointer icon", id: "pickup", onIconClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openEditSidebar();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "15", width: "15", viewBox: "0 0 512 550" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))))));
    }
};
IrLabel.style = IrLabelStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal", 7);
        this.cancelModal = index.createEvent(this, "cancelModal", 7);
        this.modalTitle = 'Modal Title';
        this.modalBody = 'Modal Body';
        this.rightBtnActive = true;
        this.leftBtnActive = true;
        this.rightBtnText = 'Confirm';
        this.leftBtnText = 'Close';
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
            this.closeModal();
        }
    }
    render() {
        return [
            index.h("div", { key: '2e914d35698b1bc29b831551b26ff94141e8e5bb', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.closeModal();
                } }),
            index.h("div", { key: 'ae9565c91be924b67ba8743eb2eee9d7870b3d08', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: 'aec49c2f3d97214087a1c7a7ab742e93cf0f9310', class: `ir-alert-content p-2` }, index.h("div", { key: 'ec2db674f55fbbfa753a458c5027e0076bf42751', class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }), index.h("div", { key: 'beeb9750f5939876ae1d69bd09db23f39e2d02fe', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: 'bcdcf658567e4d013067de61d2123f2a1425e2eb' }, this.modalBody)), index.h("div", { key: 'f4a63bc98ba97f85b2c5d02b1fc0e9547f8e03cf', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && index.h("ir-button", { icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.rightBtnActive && index.h("ir-button", { icon: '', btn_color: this.rightBtnColor, btn_block: true, text: this.rightBtnText, name: this.rightBtnText })))),
        ];
    }
};
IrModal.style = IrModalStyle0;

exports.ir_label = IrLabel;
exports.ir_modal = IrModal;

//# sourceMappingURL=ir-label_2.cjs.entry.js.map