import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrCreditCardInput {
    cardType: '' | 'AMEX' | 'VISA' | 'Mastercard';
    creditCardChange: EventEmitter<string>;
    el: HTMLElement;
    private mask;
    private input;
    private detectCardType;
    private applyMask;
    componentDidLoad(): void;
    handleInput(e: Event): void;
    render(): any;
    private renderIcon;
}
