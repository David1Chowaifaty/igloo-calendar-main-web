import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSelect {
    label: string;
    icon: boolean;
    addDummyOption: boolean;
    value: string | number;
    data: {
        id: string | number;
        value: string;
        disabled?: boolean;
        html?: boolean;
    }[];
    select_id: string;
    variant: 'double-line' | 'default';
    customStyles: string;
    containerStyle: string;
    valueChange: EventEmitter<string | number>;
    render(): any;
}
