import { EventEmitter } from '../../../stencil-public-runtime';
import { TPropertyButtonsTypes } from "../../../components";
import { ICurrency } from "../../../models/calendarData";
export declare class IglApplicationInfo {
    guestInfo: {
        [key: string]: any;
    };
    currency: ICurrency;
    roomsList: {
        [key: string]: any;
    }[];
    guestRefKey: string;
    bedPreferenceType: any[];
    selectedUnits: number[];
    bookingType: string;
    defaultGuestPreference: number | null;
    index: number;
    defaultGuestRoomId: number;
    dateDifference: number;
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    filterdRoomList: any[];
    isButtonPressed: boolean;
    guestData: {
        [key: string]: any;
    };
    private userRate;
    private timeout;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleSelctedUnits(): Promise<void>;
    updateRoomList(): void;
    updateData(): void;
    handleDataChange(key: any, value: any): void;
    handleGuestNameChange(event: any): void;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    render(): any;
}
