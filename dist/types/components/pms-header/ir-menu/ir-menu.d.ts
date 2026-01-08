export declare class IrMenu {
    el: HTMLElement;
    private menuGroups;
    private menuItems;
    selectedHref?: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setSelectedHref(href?: string): Promise<void>;
    handleSelectedHrefChange(newValue?: string): void;
    private handleSlotChange;
    private handleLocationChange;
    private updateSelectedHref;
    private getCurrentLocation;
    private normalizeHref;
    private applySelection;
    handleItemClick(event: Event): void;
    handleGroupOpen(e: CustomEvent<boolean>): void;
    render(): any;
}
