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
    /** Emits whenever the user selects a new property */
    propertyChange: EventEmitter<FetchedProperty>;
    private storagePoller?;
    private lastSelectedAcRaw;
    private lastUserInfoRaw;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): Promise<void>;
    private startStoragePolling;
    private stopStoragePolling;
    private handleStorageEvent;
    private pollLocalStorage;
    private updateSelectedProperty;
    private fetchLinkedProperties;
    private resolveDisplayMode;
    private handlePropertySelected;
    private handleDropdownSelect;
    private applySelectedProperty;
    private renderReadOnly;
    private trigger;
    render(): any;
}
export {};
