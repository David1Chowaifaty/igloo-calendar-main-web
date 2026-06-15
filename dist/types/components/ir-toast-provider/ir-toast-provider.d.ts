import { EventEmitter } from '../../stencil-public-runtime';
export interface Toast {
    id?: string;
    title: string;
    description?: string;
    type?: 'info' | 'success' | 'warning' | 'error' | 'danger';
    duration?: number;
    dismissible?: boolean;
    actionLabel?: string;
}
export declare class IrToastProvider {
    position: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
    rtl: boolean;
    duration: number;
    /** Emitted when a toast's action button is clicked. */
    toastAction: EventEmitter<{
        id: string;
    }>;
    private items;
    private layer;
    private liveRegion;
    private modalStack;
    private positionCache;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleToast(event: CustomEvent<Partial<Toast> & {
        type?: string;
    }>): void;
    handleOverlayShow(event: Event): void;
    handleOverlayHide(): void;
    addToast(toast: Toast): Promise<string>;
    removeToast(id: string): Promise<void>;
    clearAllToasts(): Promise<void>;
    private handleKeyDown;
    private destroyItem;
    private ensureLayer;
    private applyLayerPlacement;
    /** Deep-scans the document (piercing shadow roots) for open modal dialogs. */
    private findOpenModalDialogs;
    /** Moves the layer into the topmost open modal dialog, or back to document.body. */
    private relocateLayer;
    private showLayerIfNeeded;
    private hideLayer;
    private announce;
    private buildIcon;
    private buildContent;
    private capturePositions;
    private animatePositions;
    private generateToastId;
    /** Accepts both the provider's own types and the legacy IToast vocabulary ('error', 'custom'). */
    private normalizeType;
    private mapVariant;
    render(): any;
}
