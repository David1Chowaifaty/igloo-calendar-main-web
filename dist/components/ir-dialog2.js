import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = /*@__PURE__*/ proxyCustomElement(class IrDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.openChange = createEvent(this, "openChange", 7);
        this.open = false;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.open) {
            this.openModal();
        }
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        console.log('close');
        if (!this.isOpen) {
            return;
        }
        document.body.style.overflow = 'visible';
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
    }
    handleOpenChange() {
        if (this.open) {
            this.openModal();
        }
        else {
            this.closeModal();
        }
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
        document.body.style.overflow = 'visible';
    }
    render() {
        return (h(Host, { key: '580bf2510dde231da1e890d1bb2b27771da25e61' }, h("div", { key: 'ccac75132013630df95c623fe1c2bf92552e9894', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (h("div", { key: '327a499d592d31f7d7d5310168ece997ada5afc4', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("ir-icon", { key: 'bc5e4990f760ff27d44860ab1b8684d0e9b3486f', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, h("svg", { key: '5f55da7da256db725a2a684ffbdf5670035faf45', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, h("path", { key: 'fcb896e2950663a458a50901f94425f05383257d', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), h("div", { key: '7645849f4628870fb76c0de75f0466eba1a2768b', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: 'e5a7c01b8b97e379170ce692e3599f7eb4caf4b0', name: "modal-title" })), h("div", { key: '49be0b814c8dcbf9a937004322748f0b98883915', class: "modal-body", id: "dialog1Desc" }, h("slot", { key: 'd92490a08847e9259645ea816aa35f29b2894fe9', name: "modal-body" })), h("div", { key: '0c18934639452cf64a4462088a777a14de817359', class: "modal-footer" }, h("slot", { key: '05d8614a52424539385d99d46e97124af43dab4d', name: "modal-footer" }))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IrDialogStyle0; }
}, [1, "ir-dialog", {
        "open": [4],
        "isOpen": [32],
        "openModal": [64],
        "closeModal": [64]
    }, [[8, "keydown", "handleKeyDown"]], {
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dialog", "ir-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDialog);
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-dialog2.js.map