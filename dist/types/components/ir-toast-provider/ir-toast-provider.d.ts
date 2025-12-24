export interface Toast {
    id: string;
    message: string;
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    duration?: number;
    closable?: boolean;
    icon?: string;
}
export declare class IrToastProvider {
    private static toastStack;
    private static stylesInjected;
    private static readonly supportsPopover;
    private toastTimers;
    el: HTMLElement;
    toasts: Toast[];
    private static getToastStack;
    componentDidLoad(): void;
    private static openStackPopover;
    private static closeStackPopover;
    private static ensureGlobalStyles;
    show(message: string, options?: {
        variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
        duration?: number;
        closable?: boolean;
        icon?: string;
    }): Promise<string>;
    hide(id: string): Promise<void>;
    private renderToastToStack;
    private escapeHtml;
    private getIconPath;
    render(): any;
}
