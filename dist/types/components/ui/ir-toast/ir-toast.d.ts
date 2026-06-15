import { TPositions } from './toast';
export declare class IrToast {
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position: TPositions;
    private get providerPosition();
    render(): any;
}
