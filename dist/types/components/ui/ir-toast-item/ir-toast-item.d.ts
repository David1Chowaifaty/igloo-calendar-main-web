import { EventEmitter } from '../../../stencil-public-runtime';
export type ToastVariants = 'neutral' | 'brand' | 'success' | 'danger' | 'warning';
export declare class IrToastItem {
    variant: ToastVariants;
    duration: number;
    progress: number;
    irDismiss: EventEmitter<void>;
    private timer;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private startTimer;
    private clearTimer;
    private dismiss;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleClose;
    render(): any;
}
