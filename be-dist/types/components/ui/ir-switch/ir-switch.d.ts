import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSwitch {
    checked: boolean;
    switchId: string;
    disabled: boolean;
    checkChange: EventEmitter<boolean>;
    private switchRoot;
    private _id;
    componentDidLoad(): void;
    handleCheckChange(): void;
    render(): any;
}
