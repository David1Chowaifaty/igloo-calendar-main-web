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
     * The visible title (possibly cropped).
     * Computed during lifecycle based on content overflow.
     */
    private croppedTitle;
    /**
     * Reference to the span DOM element that holds the cropped title text.
     */
    private croppedTitleEl;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleTitleChange(newValue: string, oldValue: string): void;
    /**
     * Measures the width of the title and icon to determine if the text overflows.
     * If it does, crops the title and attaches a popover to the title element.
     * Otherwise, removes any existing popover.
     */
    private initializePopover;
    /**
     * Disposes of the Bootstrap popover associated with the `.popover-title` element.
     */
    private disposePopover;
    render(): any;
}
