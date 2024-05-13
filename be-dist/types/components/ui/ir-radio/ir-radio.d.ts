import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrRadio {
    checked: boolean;
    radioId: string;
    checkChange: EventEmitter<boolean>;
    render(): any;
}
