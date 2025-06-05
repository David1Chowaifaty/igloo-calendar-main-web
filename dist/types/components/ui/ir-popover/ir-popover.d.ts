export declare class IrPopover {
    el: HTMLElement;
    /**
     * Content to display inside the popover.
     * Can be plain text or HTML depending on `renderContentAsHtml`.
     */
    content: string;
    /**
     * Horizontal offset (left) of the popover from its trigger.
     * Used in inline style as `--ir-popover-left`.
     */
    irPopoverLeft: string;
    /**
     * Position of the popover relative to the trigger.
     * Options: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`.
     */
    placement: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    /**
     * Event that triggers the popover.
     * Options: `'focus'`, `'click'`, `'hover'`.
     */
    trigger: 'focus' | 'click' | 'hover';
    /**
     * Whether to treat `content` as raw HTML.
     * When true, `content` will be injected with `html: true` in jQuery popover.
     */
    renderContentAsHtml: boolean;
    /**
     * Internal flag to ensure popover is only initialized once.
     */
    private initialized;
    /**
     * Reference to the HTML element that triggers the popover.
     */
    private popoverTrigger;
    componentDidLoad(): void;
    /**
     * Initializes the jQuery popover on the trigger element using configured props.
     */
    private initializePopover;
    disconnectedCallback(): void;
    render(): any;
}
