import { EventEmitter } from '../../../stencil-public-runtime';
import { FetchedProperty, LinkedProperty } from "../../../services/property.service";
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
    /** Linked properties provided by the parent switcher. */
    properties: LinkedProperty[];
    /** Emits whenever the user picks a property from the list. */
    propertySelected: EventEmitter<FetchedProperty['PROPERTY_ID']>;
    private filteredProperties;
    private searchTerm;
    private highlightedIndex;
    private inputRef?;
    handleOpenChange(isOpen: boolean): void;
    componentDidLoad(): void;
    handleSelectedPropertyIdChange(): void;
    private resetSearch;
    private fetchProperties;
    private getSelectedIndex;
    private syncHighlightedIndex;
    private handleSearchChange;
    private handleKeyDown;
    private ensureHighlightedVisible;
    private selectProperty;
    private getPropertyId;
    private renderStatus;
    render(): any;
}
