import { IToast } from "../../ui/ir-toast/toast";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrChannelEditor {
    channel_status: 'create' | 'edit' | null;
    ticket: string;
    selectedTab: string;
    isLoading: boolean;
    status: boolean;
    headerTitles: {
        id: string;
        name: string;
        disabled: boolean;
    }[];
    selectedRoomType: any[];
    saveChannelFinished: EventEmitter<null>;
    closeSideBar: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    private channelService;
    componentWillLoad(): void;
    handleTabChange(e: CustomEvent): void;
    renderTabScreen(): any;
    enableAllHeaders(): void;
    disableNonFirstTabs(): void;
    saveConnectedChannel(): Promise<void>;
    render(): any;
}
