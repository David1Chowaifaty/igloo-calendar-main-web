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
        return (h(Host, { key: '1ed68ca5f0d820770afa5263cc8cf49aaca8e743' }, h("div", { key: 'b6e90cc2c20630c0dcc6e3dfbd604c9d196a23d3', class: "card-container" }, h("label", { key: '6602dedd3970b7746e979ecc6f316eaf860beb73', htmlFor: "first_input", class: "card-number" }, "Card number"), h("div", { key: '25c9ba4fbf1f7dcf2217a7f49e1033a458d3ba13', class: "input-container flex w-full items-center justify-between gap-4" }, [...Array(this.cardType === 'AMEX' ? 4 : 4)].map((_, index) => (h("input", { id: index === 0 ? 'first_input' : 'credit_card' + index, type: "text", class: "card-input", maxLength: this.getMaxLength(index), onKeyDown: event => this.handleInput(event, index, event.currentTarget.parentElement.querySelectorAll('input')), onInput: event => {
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
