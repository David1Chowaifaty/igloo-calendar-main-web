import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrCreditCardInput {
    value: string;
    cardType: '' | 'AMEX' | 'VISA' | 'Mastercard';
    error: boolean;
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
