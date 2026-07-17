export declare class IrAutocompleteOption {
    value: string;
    label: string;
    disabled: boolean;
    current: boolean;
    selected: boolean;
    private waOptionRef?;
    connectedCallback(): void;
    componentDidRender(): void;
    /**
     * The host carries role="option" (referenced by the combobox via aria-activedescendant);
     * the inner wa-option must not expose a second, nested option to assistive tech.
     */
    private demoteInnerOptionRole;
    render(): any;
}
