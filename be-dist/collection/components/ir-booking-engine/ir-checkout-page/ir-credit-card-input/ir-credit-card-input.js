import { Host, h } from "@stencil/core";
export class IrCreditCardInput {
    constructor() {
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
        return (h(Host, { key: 'e86727fd1b35e9adb4a497f7f78e2f40b2accf1d' }, h("div", { key: '1c4ea96e097802b0a19bf64538ebbc8c990be8c0', class: "flex flex-col p-2 md:p-4 rounded-md border max-w-xs overflow-hidden" }, h("label", { key: '5cb70d42f87e68d5c6a1d6ac58028375259146ed', htmlFor: "first_input" }, "Card number"), h("div", { key: 'e3ee12c22ee446f0ace2456216378d064edcf96e', class: "flex items-center gap-4 justify-between" }, [...Array(this.cardType === 'AMEX' ? 4 : 4)].map((_, index) => (h("input", { id: index === 0 ? 'first_input' : 'credit_card' + index, type: "text", class: "appearance-none border-b w-full outline-none", maxLength: this.getMaxLength(index), onKeyDown: event => this.handleInput(event, index, event.currentTarget.parentElement.querySelectorAll('input')), onInput: event => {
                const input = event.target;
                input.value = input.value.replace(/\D/g, '');
                this.value[index] = input.value;
                this.creditCardChange.emit(this.value.join(''));
                if (input.value.length >= input.maxLength && index < 3) {
                    event.currentTarget.parentElement.querySelectorAll('input')[index + 1].focus();
                }
            } })))))));
    }
    static get is() { return "ir-credit-card-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-credit-card-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-credit-card-input.css"]
        };
    }
    static get states() {
        return {
            "cardType": {}
        };
    }
    static get events() {
        return [{
                "method": "creditCardChange",
                "name": "creditCardChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-credit-card-input.js.map
