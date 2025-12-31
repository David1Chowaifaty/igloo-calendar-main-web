export interface Toast {
    id?: string;
    title: string;
    description?: string;
    type?: 'info' | 'success' | 'warning' | 'error' | 'danger';
    duration?: number;
    dismissible?: boolean;
    actionLabel?: string;
}
type ManagedToast = Toast & {
    id: string;
    leaving?: boolean;
};
export declare class IrToastProvider {
    el: HTMLElement;
    position: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
    rtl: boolean;
    duration: number;
    toasts: ManagedToast[];
    private popoverRef;
    private toastTimers;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleToast(event: CustomEvent<Partial<Toast>>): void;
    addToast(toast: Toast): Promise<string>;
    removeToast(id: string): Promise<void>;
    clearAllToasts(): Promise<void>;
    private showPopover;
    private hidePopover;
    private generateToastId;
    private startTimer;
    private pauseTimer;
    private resumeTimer;
    private clearTimer;
    private announceToast;
    private getPositionClass;
    private getAlertPosition;
    private mapVariant;
    private handleToastDismiss;
    private handleInteractionChange;
    private handlePopoverToggle;
    render(): any;
}
export {};
