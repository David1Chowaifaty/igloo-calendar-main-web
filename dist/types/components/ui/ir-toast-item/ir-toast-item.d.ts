import { EventEmitter } from '../../../stencil-public-runtime';
export type ToastVariants = 'neutral' | 'brand' | 'success' | 'danger' | 'warning';
export declare class IrToastItem {
    el: HTMLElement;
    variant: ToastVariants;
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration: number;
    /** Whether the close button is rendered. */
    dismissible: boolean;
    progress: number;
    leaving: boolean;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss: EventEmitter<void>;
    private timer;
    private timerStarted;
    private hiding;
    private hovered;
    private focused;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    startTimer(): Promise<void>;
    /** Plays the exit animation, then emits `irDismiss`. */
    hide(): Promise<void>;
    private get hasTimer();
    private prefersReducedMotion;
    private resumeTimer;
    private clearTimer;
    private updateInteraction;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocusIn;
    private handleFocusOut;
    private handleClose;
    render(): any;
}
