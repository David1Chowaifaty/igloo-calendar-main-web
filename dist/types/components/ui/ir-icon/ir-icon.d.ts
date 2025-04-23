import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrIcon {
    icon: string;
    type: 'button' | 'submit' | 'reset';
    iconClickHandler: EventEmitter;
    render(): any;
}
