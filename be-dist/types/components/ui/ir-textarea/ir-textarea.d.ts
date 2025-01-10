import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrTextarea {
    inputId: string;
    leftIcon: boolean;
    value: string;
    name: string;
    placeholder: string;
    inputid: string;
    class: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxlength: number;
    min: string | number;
    max: string | number;
    step: string | number;
    pattern: string;
    autocomplete: string;
    autofocus: boolean;
    size: number;
    multiple: boolean;
    error: boolean;
    label: string;
    textChanged: EventEmitter<string>;
    inputFocus: EventEmitter<FocusEvent>;
    inputBlur: EventEmitter<FocusEvent>;
    render(): any;
}
