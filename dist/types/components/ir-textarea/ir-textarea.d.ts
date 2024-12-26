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
    error: boolean;
    textChange: EventEmitter<string>;
    handleAriaInvalidChange(newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
