import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrRectifierDrawer {
    open: boolean;
    closeDrawer: EventEmitter<void>;
    isLoading: boolean;
    private formId;
    private handleDrawerClose;
    private handleLoadingChange;
    render(): any;
}
