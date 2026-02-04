import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrMenuGroup {
    el: HTMLIrMenuGroupElement;
    open: boolean;
    groupName: string;
    openChanged: EventEmitter<boolean>;
    private handleHide;
    private handleShow;
    render(): any;
}
