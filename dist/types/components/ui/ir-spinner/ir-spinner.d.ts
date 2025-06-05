export declare class IrSpinner {
    el: HTMLIrSpinnerElement;
    /**
     * Size of the spinner (diameter).
     * Example: `size={2}` with `unit="rem"` sets spinner to `2rem`.
     */
    size: number;
    /**
     * Thickness of the spinner's border.
     * Example: `borderWidth={4}` renders a `4px` or `4rem` thick border.
     */
    borderWidth: number;
    /**
     * CSS unit used for `size` and `borderWidth`.
     * Can be `'px'` or `'rem'`.
     */
    unit: 'px' | 'rem';
    /**
     * Color of the spinner.
     * Accepts any valid CSS color string.
     */
    color: string;
    componentWillLoad(): void;
    handleSpinnerSizeChange(): void;
    handleSpinnerBorderWidthChange(): void;
    handleSpinnerUnitChange(): void;
    handleSpinnerColorChange(): void;
    /**
     * Applies CSS custom properties based on current prop values.
     */
    private initStyles;
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    private applyCssElement;
    render(): any;
}
