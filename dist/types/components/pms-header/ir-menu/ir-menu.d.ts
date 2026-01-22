export declare class IrMenu {
    el: HTMLElement;
    private menuGroups;
    private menuItems;
    selectedHref?: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleLocationChange(): void;
    setSelectedHref(href?: string): Promise<void>;
    handleSelectedHrefChange(newValue?: string): void;
    private handleSlotChange;
    private updateSelectedHref;
    private getCurrentLocation;
    private normalizeHref;
    private applySelection;
    private openGroupForSelectedHref;
    handleItemClick(event: Event): void;
    handleGroupOpen(e: CustomEvent<boolean>): void;
    handleOpenChange(e: CustomEvent<boolean>): void;
    render(): any;
}
