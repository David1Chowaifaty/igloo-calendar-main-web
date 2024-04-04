import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrSelect {
    label: string;
    value: string | number;
    data: {
        id: string | number;
        value: string;
    }[];
    select_id: string;
    variant: 'double-line' | 'default';
    valueChange: EventEmitter<string | number>;
    render(): any;
}
