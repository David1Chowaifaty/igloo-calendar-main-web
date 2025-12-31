import { EventEmitter } from '../../stencil-public-runtime';
import { AllowedProperties } from "../../services/property.service";
type AllowedProperty = NonNullable<AllowedProperties>[number];
/**
 * Internal component responsible for rendering the searchable list of properties inside the switcher dialog.
 * It owns the data fetching, filtering and keyboard navigation logic so the parent dialog stays lean.
 */
export declare class IrPropertySwitcherDialogContent {
    el: HTMLIrPropertySwitcherDialogContentElement;
    /** Whether the surrounding dialog is open. Used to focus and reset the search input as needed. */
    open: boolean;
    /** ID of the property that is currently selected in the parent component. */
    selectedPropertyId?: number;
    /** Emits whenever the user picks a property from the list. */
    propertySelected: EventEmitter<AllowedProperty>;
    private properties;
    private filteredProperties;
    private searchTerm;
    private highlightedIndex;
    private isLoading;
    private error;
    private inputRef?;
    componentWillLoad(): void;
    handleOpenChange(isOpen: boolean): void;
    handleSelectedPropertyIdChange(): void;
    private loadProperties;
    private resetFilters;
    private applyFilters;
    private getSelectedIndex;
    private syncHighlightedIndex;
    private handleSearchChange;
    private handleKeyDown;
    private ensureHighlightedVisible;
    private selectProperty;
    private renderStatus;
    render(): any;
}
export {};
