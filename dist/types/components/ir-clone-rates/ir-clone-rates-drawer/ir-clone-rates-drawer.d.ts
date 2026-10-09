import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrCloneRatesDrawer {
    open: boolean;
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    /** Fired when the drawer closes: Cancel, the close button, Escape, light dismiss, or a successful copy. The parent should set `open` to false. */
    cloneRatesDrawerClosed: EventEmitter<void>;
    private handleDrawerHide;
    render(): any;
}
