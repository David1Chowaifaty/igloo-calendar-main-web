export declare class IrSpinner {
    el: HTMLIrSpinnerElement;
    size: number;
    borderWidth: number;
    unit: 'px' | 'rem';
    color: string;
    componentWillLoad(): void;
    handleSpinnerSizeChange(): void;
    handleSpinnerBorderWidthChange(): void;
    handleSpinnerUnitChange(): void;
    handleSpinnerColorChange(): void;
    private initStyles;
    private applyCssElement;
    render(): any;
}
