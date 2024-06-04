import { r as registerInstance, h, H as Host, g as getElement } from './index-21632897.js';
import { r as removeOverlay, a as addOverlay } from './overlay.store-b8664d3a.js';
import './index-a8bcd484.js';

const irAlertDialogCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:host{box-sizing:border-box;display:block;margin:0;padding:0}.backdrop{background:rgba(0,0,0,.2);inset:0;opacity:0;position:fixed;z-index:999999}.backdrop[data-state=opened]{animation:overlayShow .15s cubic-bezier(.16,1,.3,1) forwards}.backdrop[data-state=closed]{opacity:0;pointer-events:none}.modal-container{animation:contentShow .3s cubic-bezier(.16,1,.3,1);background-color:#fff;border-radius:8px;box-shadow:0 10px 38px -10px rgba(14,18,22,.35),0 10px 20px -15px rgba(14,18,22,.2);box-sizing:border-box;left:50%;margin:0;max-height:85vh;max-width:500px;padding:25px;position:fixed;top:90%;transform:translate(-50%,-90%);width:90vw;z-index:9999999}.modal-footer ::slotted(*){display:flex;flex-direction:column-reverse;gap:8px;margin-top:16px}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){color:#101828;font-size:18px;font-weight:600;margin-bottom:8px}.modal-body ::slotted(*){color:#475467;font-size:14px;font-weight:400}@keyframes overlayShow{0%{opacity:0}to{opacity:1}}@keyframes contentShow{0%{opacity:0;transform:translate(-50%,-100%) scale(.96)}to{opacity:1;transform:translate(-50%,-90%) scale(1)}}@keyframes contentShowMd{0%{opacity:0;transform:translate(-50%,-48%) scale(.96)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}@media only screen and (min-width:768px){.modal-container{animation:contentShowMd .3s cubic-bezier(.16,1,.3,1);max-height:85vh;max-width:500px;padding:25px;top:50%;transform:translate(-50%,-50%);width:90vw;z-index:9999999}.modal-footer ::slotted(*){--ir-btn-width:inherit;align-items:center;flex-direction:row;gap:8px;justify-content:end}}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}";
const IrAlertDialogStyle0 = irAlertDialogCss;

const IrAlertDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'b84e34f90ca32f79af7e3ace9eb6aa09205562e2' }, h("div", { key: 'ae46c68c2479b440682de20bad51d69eeedb4696', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed' }), this.isOpen && (h("div", { class: "modal-container", tabIndex: -1, role: "alertdialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("div", { class: 'modal-title', id: "dialog1Title" }, h("slot", { name: "modal-title" })), h("div", { class: "modal-body", id: "dialog1Desc" }, h("slot", { name: "modal-body" })), h("div", { class: "modal-footer" }, h("slot", { name: "modal-footer" }))))));
    }
    get el() { return getElement(this); }
};
IrAlertDialog.style = IrAlertDialogStyle0;

export { IrAlertDialog as ir_alert_dialog };

//# sourceMappingURL=ir-alert-dialog.entry.js.map