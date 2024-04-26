'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64143048.js');

const irCreditCardInputCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.static{position:static}.flex{display:flex}.w-full{width:100%}.max-w-xs{max-width:20rem}.appearance-none{appearance:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.overflow-hidden{overflow:hidden}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.p-2{padding:.5rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\\:p-4{padding:1rem}}";
const IrCreditCardInputStyle0 = irCreditCardInputCss;

const IrCreditCardInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.creditCardChange = index.createEvent(this, "creditCardChange", 7);
        this.value = [];
        this.handleInput = (event, index, inputs) => {
            const input = event.target;
            let value = input.value;
            value = value.replace(/\D/g, '');
            input.value = value;
            if (index === 0) {
                this.detectCardType(value);
            }
            if (event.key !== 'Backspace') {
                if (value.length >= input.maxLength && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
            else {
                if (value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        };
        this.cardType = '';
    }
    detectCardType(value) {
        if (value.startsWith('4')) {
            this.cardType = 'VISA';
        }
        else if (value.startsWith('5') || value.startsWith('2')) {
            this.cardType = 'Mastercard';
        }
        else if (value.startsWith('34') || value.startsWith('37')) {
            this.cardType = 'AMEX';
        }
        else {
            this.cardType = '';
        }
    }
    getMaxLength(index) {
        return this.cardType === 'AMEX' && index === 3 ? 3 : 4;
    }
    render() {
        return (index.h(index.Host, { key: 'e86727fd1b35e9adb4a497f7f78e2f40b2accf1d' }, index.h("div", { key: '1c4ea96e097802b0a19bf64538ebbc8c990be8c0', class: "flex flex-col p-2 md:p-4 rounded-md border max-w-xs overflow-hidden" }, index.h("label", { key: '5cb70d42f87e68d5c6a1d6ac58028375259146ed', htmlFor: "first_input" }, "Card number"), index.h("div", { key: 'e3ee12c22ee446f0ace2456216378d064edcf96e', class: "flex items-center gap-4 justify-between" }, [...Array(this.cardType === 'AMEX' ? 4 : 4)].map((_, index$1) => (index.h("input", { id: index$1 === 0 ? 'first_input' : 'credit_card' + index$1, type: "text", class: "appearance-none border-b w-full outline-none", maxLength: this.getMaxLength(index$1), onKeyDown: event => this.handleInput(event, index$1, event.currentTarget.parentElement.querySelectorAll('input')), onInput: event => {
                const input = event.target;
                input.value = input.value.replace(/\D/g, '');
                this.value[index$1] = input.value;
                this.creditCardChange.emit(this.value.join(''));
                if (input.value.length >= input.maxLength && index$1 < 3) {
                    event.currentTarget.parentElement.querySelectorAll('input')[index$1 + 1].focus();
                }
            } })))))));
    }
};
IrCreditCardInput.style = IrCreditCardInputStyle0;

exports.ir_credit_card_input = IrCreditCardInput;

//# sourceMappingURL=ir-credit-card-input.cjs.entry.js.map