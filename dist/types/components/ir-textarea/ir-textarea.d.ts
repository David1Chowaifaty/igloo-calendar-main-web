import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrTextArea {
    rows: number;
    cols: number;
    text: string;
    label: string;
    placeholder: string;
    value: string;
    maxLength: number;
    textChange: EventEmitter<string>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
