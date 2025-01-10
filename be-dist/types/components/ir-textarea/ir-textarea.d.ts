import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrTextArea {
    rows: number;
    cols: number;
    text: string;
    label: string;
    placeholder: string;
    value: string;
    maxLength: number;
    textareaClassname: string;
    variant: 'default' | 'prepend';
    labelWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    error: boolean;
    textChange: EventEmitter<string>;
    handleAriaInvalidChange(newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
