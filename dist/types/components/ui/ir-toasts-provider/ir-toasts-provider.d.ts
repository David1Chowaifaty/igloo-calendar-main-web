import { ToastVariants } from '../ir-toast-item/ir-toast-item';
interface ToastIcon {
    name: string;
    library?: string;
    variant?: string;
}
export interface ToastOptions {
    variant: ToastVariants;
    duration: number;
    allowHtml: boolean;
    icon?: string | ToastIcon;
}
export declare class IrToastsProvider {
    el: HTMLElement;
    private items;
    private positionCache;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Creates a toast and adds it to the stack. Returns the toast id. */
    create(message: string, options?: Partial<ToastOptions>): Promise<string>;
    private handleKeyDown;
    private removeItem;
    private repositionItems;
    private capturePositions;
    private animatePositions;
    render(): any;
}
export {};
