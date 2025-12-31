import { TPositions, IToast } from './toast';
export declare class IrToast {
    element: HTMLElement;
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position: TPositions;
    /**
     * Array of active toast messages.
     */
    toasts: IToast[];
    render(): any;
}
