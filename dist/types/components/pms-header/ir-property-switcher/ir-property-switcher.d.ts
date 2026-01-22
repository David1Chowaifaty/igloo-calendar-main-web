import { EventEmitter } from '../../../stencil-public-runtime';
import { FetchedProperty, LinkedProperty } from "../../../services/property.service";
import { GetACByACID } from './legacy.types';
type SwitcherMode = 'dropdown' | 'dialog' | 'read-only';
interface PropertyState {
    selected: FetchedProperty | null;
    linked: LinkedProperty[];
    source: 'storage' | 'external' | 'user-selection';
}
export declare class IrPropertySwitcher {
    el: HTMLIrPropertySwitcherElement;
    mode: 'dropdown' | 'dialog';
    ticket: string;
    baseUrl: string;
    propertyId?: number;
    selectedLinkedPropertyId?: number;
    open: boolean;
    isLinkedLoading: boolean;
    linkedLoaded: boolean;
    hasPool: boolean;
    propertyState: PropertyState;
    displayMode: SwitcherMode;
    private token;
    /** Single unified event - emitted when dialog confirms selection OR dropdown selects linked property */
    propertyChange: EventEmitter<{
        property: GetACByACID;
        linkedProperty: LinkedProperty | null;
        allLinkedProperties: LinkedProperty[];
    }>;
    private storagePoller?;
    private userInfoPoller?;
    private lastSelectedAcRaw;
    private lastUserInfoRaw;
    private isUpdating;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): Promise<void>;
    handlePropertyIdChange(newId: number | undefined): Promise<void>;
    handleLinkedPropertyIdChange(newId: number | undefined): void;
    private init;
    private startPolling;
    private stopPolling;
    private handleStorageEvent;
    private pollSelectedAcStorage;
    private pollUserInfoStorage;
    private updatePropertyState;
    private ensureLinkedPropertiesLoaded;
    private fetchLinkedProperties;
    private resolveDisplayMode;
    private handlePropertySelected;
    private handleDropdownSelect;
    private loadPropertyById;
    private renderReadOnly;
    private trigger;
    render(): any;
}
export {};
