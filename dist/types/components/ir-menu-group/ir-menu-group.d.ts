import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrMenuGroup {
    open: boolean;
    groupName: string;
    openChanged: EventEmitter<boolean>;
    private handleHide;
    private handleShow;
    render(): any;
}
