import { EventEmitter } from '../../../stencil-public-runtime';
import { FetchedProperty } from "../../../services/property.service";
type SwitcherMode = 'dropdown' | 'dialog' | 'read-only';
export declare class IrPropertySwitcher {
    el: HTMLIrPropertySwitcherElement;
    mode: 'dropdown' | 'dialog';
    ticket: string;
    baseUrl: string;
    open: boolean;
    selectedProperty?: FetchedProperty;
    linkedProperties: FetchedProperty[];
    displayMode: SwitcherMode;
    private token;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange: EventEmitter<FetchedProperty>;
    componentWillLoad(): Promise<void>;
    handleTicketChange(newValue: any, oldValue: any): void;
    private getStoredSelectedAc;
    private updateSelectedProperty;
    private initializeLinkedProperties;
    private fetchLinkedProperties;
    private resolveDisplayMode;
    private trigger;
    private handlePropertySelected;
    private handleDropdownSelect;
    private applySelectedProperty;
    private renderReadOnly;
    render(): any;
}
export {};
