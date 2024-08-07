import { ISmokingOption, RatePlan, RoomType, Variation } from "../../../../models/property";
export declare class IrBookingDetails {
    errors: string;
    currentRatePlan: RatePlan | null;
    isLoading: number;
    cancelationMessage: string;
    private dialogRef;
    private firstRoom;
    private propertyService;
    private paymentService;
    componentWillLoad(): void;
    modifyBookings(): void;
    updateGuestNames(isBookingForSomeoneElse: boolean, firstName: string, lastName: string): void;
    calculateTotalRooms(): any;
    handleGuestNameChange(index: number, e: InputEvent, rateplanId: number, roomTypeId: number): void;
    handleVariationChange(index: number, e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): Promise<void>;
    getNewSelectedVariation(roomtypes: RoomType[], oldVariation: Variation, roomTypeId: number, rateplanId: number): Variation;
    updateVariation(params: {
        adult_nbr: number;
        child_nbr: number;
        rt_id: number;
        rp_id: number;
        adultChildConstraint: string;
    }): Promise<any>;
    handleBedConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    handleSmokeConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    fetchCancelationMessage(id: number, roomTypeId: number): Promise<void>;
    renderSmokingView(smoking_option: ISmokingOption, index: number, ratePlanId: string, roomTypeId: string, checkoutSmokingSelection: string[]): any;
    render(): any;
}
