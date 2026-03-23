import { EventEmitter } from '../../../stencil-public-runtime';
export interface ColumnAutocompleteSelectionChange {
    query: string;
    selected: string[];
}
export declare class IrColumnAutocomplete {
    options: string[];
    selectedValues: string[];
    placeholder: string;
    selectAllLabel: string;
    emptyLabel: string;
    showSelectAll: boolean;
    triggerId?: string;
    query: string;
    normalizedOptions: string[];
    selected: string[];
    queryChange: EventEmitter<string>;
    autocompleteSelectionChange: EventEmitter<ColumnAutocompleteSelectionChange>;
    private static instanceCount;
    private generatedTriggerId;
    componentWillLoad(): void;
    handleOptionsChange(newOptions: string[]): void;
    handleSelectedValuesChange(newSelectedValues: string[]): void;
    private normalizeOptions;
    private normalizeSelection;
    private get filteredOptions();
    private get areAllFilteredSelected();
    private get areSomeFilteredSelected();
    private emitSelectionChange;
    private onQueryInput;
    private onToggleAll;
    private onToggleOption;
    render(): any;
}
