export interface Toast {
    id: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    duration?: number;
    dismissible?: boolean;
}
export declare class IrToastProvider {
    el: HTMLElement;
    position: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
    rtl: boolean;
    toasts: Toast[];
    private dialogRef;
    private toastTimers;
    disconnectedCallback(): void;
    handleToast(): void;
    addToast(toast: Omit<Toast, 'id'>): Promise<string>;
    removeToast(id: string): Promise<void>;
    clearAllToasts(): Promise<void>;
    private announceToast;
    private handleDismiss;
    private handleKeyDown;
    private getToastIcon;
    private getPositionClass;
    render(): any;
}
