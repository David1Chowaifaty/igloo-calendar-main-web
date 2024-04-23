import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrCreditCardInput {
    cardType: '' | 'AMEX' | 'VISA' | 'Mastercard';
    creditCardChange: EventEmitter<string>;
    private value;
    private handleInput;
    private detectCardType;
    getMaxLength(index: number): 3 | 4;
    render(): any;
}
