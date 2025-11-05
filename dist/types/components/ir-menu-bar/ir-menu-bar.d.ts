export declare class IrMenuBar {
    private hostEl;
    private isSheetOpen;
    private isMobileLayout;
    private mediaQuery?;
    private mediaQueryCleanup?;
    private toggleButtonRef?;
    private closeButtonRef?;
    private sheetPanelRef?;
    private readonly sheetId;
    private readonly sheetTitleId;
    private getMenus;
    private findMenuFromEvent;
    private focusMenu;
    handleKeydown(event: KeyboardEvent): Promise<void>;
    focusFirstMenu(): Promise<void>;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private setupLayoutMode;
    handleSheetOpenChange(open: boolean): void;
    private openSheet;
    private closeSheet;
    handleMenuItemClick(): void;
    handleMenuBarOpenChange(e: CustomEvent<boolean>): void;
    render(): any;
}
