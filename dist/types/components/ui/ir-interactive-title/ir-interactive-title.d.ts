export declare class IrInteractiveTitle {
    el: HTMLElement;
    /**
     * The full title string that may be cropped in the UI.
     */
    popoverTitle: string;
    /**
     * CSS offset for the left position of the popover.
     * Used as a CSS variable `--ir-popover-left`.
     */
    irPopoverLeft: string;
    /**
     * Whether to show the housekeeping (HK) status dot.
     */
    hkStatus: boolean;
    /**
     * The number of characters to display before cropping the title with ellipsis.
     */
    cropSize: number;
    /**
     * The message shown when hovering over the broom svg if provided.
     * @requires hkStatus to be true
     */
    broomTooltip: string;
    /**
     * Reference to track if we've initialized popover for current render
     */
    private lastRenderedTitle;
    private titleContainerRef;
    private popoverInstance;
    /**
     * Initialize popover with overflow detection
     */
    private initializePopoverIfNeeded;
    private disposePopover;
    disconnectedCallback(): void;
    render(): any;
}
