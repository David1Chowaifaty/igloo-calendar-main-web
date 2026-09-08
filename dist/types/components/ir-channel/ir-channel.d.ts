import { IModalCause } from './types';
import { IChannel } from "../../models/calendarData";
export declare class IrChannel {
    el: HTMLElement;
    ticket: string;
    propertyid: number;
    language: string;
    baseurl: string;
    p: string;
    channel_status: 'create' | 'edit' | null;
    modal_cause: IModalCause | null;
    isLoading: boolean;
    private roomService;
    private channelService;
    private ApiClient;
    private irModalRef;
    propertyId: number;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleConfirmClicked(e: CustomEvent): Promise<void>;
    openModal(): void;
    refreshChannels(): Promise<void>;
    initializeApp(): Promise<void>;
    ticketChanged(newValue: string, oldValue: string): void;
    handleCancelModal(e: CustomEvent): void;
    handleSidebarClose(e: CustomEvent): void;
    resetSideBar(): void;
    handleSaveChange(e: CustomEvent): Promise<void>;
    handleCheckChange(check: boolean, params: IChannel): Promise<void>;
    render(): any;
}
