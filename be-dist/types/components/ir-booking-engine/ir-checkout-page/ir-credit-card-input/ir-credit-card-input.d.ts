import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrCreditCardInput {
    value: string;
    cardType: '' | 'AMEX' | 'VISA' | 'Mastercard';
    error: boolean;
    creditCardChange: EventEmitter<{
        value: string;
        cardType: '' | 'AMEX' | 'VISA' | 'Mastercard';
    }>;
    el: HTMLElement;
    private mask;
    private input;
    private applyMask;
    componentDidLoad(): void;
    handleInput(e: Event): void;
    render(): any;
    private renderIcon;
}
