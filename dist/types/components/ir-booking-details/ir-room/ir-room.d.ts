import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking, ExtraService, Room, SharedPerson } from "../../../models/booking.dto";
import { Agent } from "../../../services/agents/type";
import { TIglBookPropertyPayload } from "../../../models/igl-book-property";
import { IEntries } from "../../../models/IBooking";
import { OpenSidebarEvent, RoomGuestsPayload } from '../types';
import { IToast } from "../../ui/ir-toast/toast";
import { ClTx } from "../../../services/city-ledger/types";
export type RoomModalReason = 'delete' | 'checkin' | 'checkout' | null;
export declare class IrRoom {
    element: HTMLIrRoomElement;
    booking: Booking;
    bookingIndex: number;
    isEditable: boolean;
    room: Room;
    property_id: number;
    includeDepartureTime: boolean;
    mealCodeName: string;
    myRoomTypeFoodCat: string;
    currency: string;
    language: string;
    legendData: any;
    roomsInfo: any;
    bedPreferences: IEntries[];
    departureTime: IEntries[];
    arrivalTime: IEntries[];
    hasRoomEdit: boolean;
    hasRoomDelete: boolean;
    hasRoomAdd: boolean;
    hasCheckIn: boolean;
    hasCheckOut: boolean;
    agent: Agent;
    clTransactions: ClTx[];
    /** `_SVC_CATEGORY` setup entries, used to label extra services in the room's extra-services section. */
    svcCategories: IEntries[];
    collapsed: boolean;
    isLoading: boolean;
    isToggling: boolean;
    modalReason: RoomModalReason;
    mainGuest: SharedPerson;
    isModelOpen: boolean;
    isOpen: boolean;
    isPricingDrawerOpen: boolean;
    isHbDialogOpen: boolean;
    isDepartureDialogOpen: boolean;
    isArrivalDialogOpen: boolean;
    deleteFinished: EventEmitter<string>;
    toast: EventEmitter<IToast>;
    pressCheckIn: EventEmitter;
    pressCheckOut: EventEmitter;
    editInitiated: EventEmitter<TIglBookPropertyPayload>;
    resetBookingEvt: EventEmitter<null>;
    openSidebar: EventEmitter<OpenSidebarEvent<RoomGuestsPayload>>;
    addExtraServiceToUnit: EventEmitter<{
        pr_id: number;
    }>;
    private modal;
    private toggleDialogRef;
    private bookingService;
    dialogRef: HTMLIrDialogElement;
    componentWillLoad(): void;
    handleClick(e: any): void;
    /**
     * Early-check-in / late-checkout are managed exclusively through the arrival/departure time
     * dialogs (price + time are set together there) — intercept edits on those categories and open
     * the matching dialog instead of letting the generic extra-service edit panel handle them.
     */
    handleEditExtraService(e: CustomEvent<ExtraService>): void;
    handleRoomDataChange(): void;
    private getDateStr;
    private handleEditClick;
    private openModal;
    private handleModalConfirmation;
    private deleteRoom;
    private toggleRoomAgent;
    private renderModalMessage;
    private handleCheckIn;
    private getMainGuest;
    private showGuestModal;
    private get unitId();
    private handleAddExtraServiceToUnit;
    private handleHeaderAction;
    render(): any;
}
