import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/IBooking";
import { SplitIndex } from "../../../utils/booking";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBookingRooms {
    /**
     * The booking object containing reservation details,
     * including rooms, status, currency, and edit permissions.
     */
    booking: Booking;
    /**
     * Available bed preference options for the booking rooms.
     * Used to populate bed selection inside each room component.
     */
    bedPreference: IEntries[];
    /**
     * Available departure time options for the booking.
     * Passed down to each room when applicable.
     */
    departureTime: IEntries[];
    /**
     * Enables the ability to add a new room/unit to the booking.
     */
    hasRoomAdd: boolean;
    /**
     * Enables deleting a room from the booking.
     */
    hasRoomDelete: boolean;
    /**
     * Enables editing room details within the booking.
     */
    hasRoomEdit: boolean;
    /**
     * Active language code used for translations and formatting.
     */
    language: string;
    /**
     * Legend metadata used for displaying room status indicators.
     */
    legendData: unknown;
    /**
     * The property identifier associated with the booking.
     * Used when interacting with room-level operations.
     */
    propertyId: number;
    /**
     * Additional room metadata and configuration details.
     */
    roomsInfo: unknown;
    /**
     * Precomputed split index used to group split rooms together.
     * If not provided, it will be generated internally.
     */
    splitIndex: SplitIndex;
    roomDeleteFinished: EventEmitter<string>;
    private computeRoomGroups;
    private handleRoomCheckout;
    private handleRoomCheckin;
    private renderRoomItem;
    private renderRoomPool;
    private renderRooms;
    render(): any;
}
