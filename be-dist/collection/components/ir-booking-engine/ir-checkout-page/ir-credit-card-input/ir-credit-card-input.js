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
        return (h(Host, { key: '52670b522ace1907fc04e3309d8e1c2824b6a3e3' }, h("div", { key: 'cbd9e8431c0307297c23382e87183f9017045ecc', class: "card-container" }, h("label", { key: '4c8d1b20a21e40f2a5fe852cdeb16425462a4b5f', htmlFor: "first_input", class: "card-number" }, "Card number"), h("div", { key: '22d1991b792c10a844e622080f8f38eee6497399', class: "input-container flex w-full items-center justify-between gap-4" }, [...Array(this.cardType === 'AMEX' ? 4 : 4)].map((_, index) => (h("input", { id: index === 0 ? 'first_input' : 'credit_card' + index, type: "text", class: "card-input", maxLength: this.getMaxLength(index), onKeyDown: event => this.handleInput(event, index, event.currentTarget.parentElement.querySelectorAll('input')), onInput: event => {
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
