import { EventEmitter } from '../../../stencil-public-runtime';
import { type Placement, type Strategy } from '@floating-ui/dom';
export declare class IrPopup {
    private static zIndexSeed;
    private static idSeed;
    host: HTMLElement;
    /** Distance between the anchor and popup in pixels (used when offsetDistance is not provided). */
    distance: number;
    /** Popper placement, e.g. "bottom-start". */
    placement: Placement;
    /** Positioning strategy ("absolute" or "fixed"). */
    strategy: Strategy;
    /** Offset skid in pixels along the reference element. */
    offsetSkid: number;
    /** Offset distance in pixels away from the reference element. */
    offsetDistance?: number;
    /** Enable or disable flip behavior. */
    allowFlip: boolean;
    /** Comma-separated list of fallback placements used when flipping. */
    fallbackPlacements: string;
    /** Padding for the preventOverflow modifier. */
    overflowPadding: number;
    /** Enable or disable the arrow element. */
    withArrow: boolean;
    /** Syncs the popup's width or height to that of the anchor element. */
    sync: 'width' | 'height' | 'both';
    /** Whether this dialog is modal. */
    modal: boolean;
    isOpen: boolean;
    opened: EventEmitter<void>;
    closed: EventEmitter<void>;
    private dialogRef;
    private anchorElement;
    private contentElement;
    private cleanupAutoUpdate?;
    private zIndex;
    private arrow;
    private dialogId;
    popperInstance: any;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleKeyDown(event: KeyboardEvent): void;
    private getDirectAnchorElement;
    private syncAnchorFromSlot;
    private handleAnchorSlotChange;
    private addAnchorListener;
    private removeAnchorListener;
    private handleAnchorClick;
    private toggleDialog;
    open(): Promise<void>;
    close(): Promise<void>;
    handlePopperPropsChange(): void;
    private getFloatingOptions;
    private updatePosition;
    private createPopperInstance;
    private destroyPopperInstance;
    render(): any;
}
