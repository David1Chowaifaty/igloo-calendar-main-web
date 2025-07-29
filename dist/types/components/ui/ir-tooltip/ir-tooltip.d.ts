export declare class IrTooltip {
    /**
     * Text or HTML content to be displayed in the tooltip.
     */
    message: string;
    /**
     * Whether the tooltip content should be rendered using `innerHTML`.
     * If false, treats message as plain text.
     */
    withHtml: boolean;
    /**
     * When true, allows a custom element to trigger the tooltip using a named slot.
     * If false, a default info icon is used.
     */
    customSlot: boolean;
    /**
     * Inline styles applied to the outer tooltip container.
     */
    containerStyle: {
        [key: string]: string;
    };
    /**
     * CSS classes applied to the outer tooltip container.
     */
    containerClass: string;
    /**
     * Defines the horizontal alignment of the tooltip trigger content.
     *
     * - `'start'`: Aligns the trigger to the left within its container.
     * - `'center'`: Centers the trigger horizontally (default).
     * - `'end'`: Aligns the trigger to the right within its container.
     *
     * This alignment affects how the trigger (e.g., icon or slotted element)
     * is positioned inside the outer tooltip container.
     */
    alignment: 'start' | 'end' | 'center';
    /**
     * Internal state tracking whether the tooltip is currently visible.
     */
    open: boolean;
    private tooltipTimeout;
    /**
     * Handles showing or hiding the tooltip.
     *
     * - If `shouldOpen` is `true`, the tooltip is shown after a 300ms delay.
     * - If `false`, the tooltip is hidden immediately.
     *
     * @param shouldOpen - whether the tooltip should be shown or hidden.
     *
     * Example:
     * ```ts
     * this.toggleOpen(true);  // show tooltip
     * this.toggleOpen(false); // hide tooltip
     * ```
     */
    private toggleOpen;
    render(): any;
}
