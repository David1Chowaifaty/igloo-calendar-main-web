import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrMenuBarMenu {
    private hostEl;
    /**
     * Displays an `ir-new-badge` next to the trigger when set.
     */
    newBadge: boolean;
    /**
     * Controls the open state of the dropdown menu.
     * Can be toggled programmatically or via user interaction.
     */
    open: boolean;
    private hasDropdown;
    private isAccordionLayout;
    /**
     * Fires whenever the menu's `open` state changes.
     */
    menuBarOpenChange: EventEmitter<boolean>;
    private dropdownContainerRef;
    private menuTriggerRef;
    private cleanupAutoUpdate?;
    private mediaQuery?;
    private mediaQueryCleanup?;
    private closeTimeout?;
    private get items();
    private updateDropdownState;
    componentWillLoad(): void;
    handleMenuBarOpenChange(open: boolean): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private handleItemsSlotChange;
    private setupLayoutMode;
    private updateAccordionHeight;
    private handleAccordionTransitionEnd;
    private scheduleDropdownClose;
    private cancelDropdownClose;
    render(): any;
}
