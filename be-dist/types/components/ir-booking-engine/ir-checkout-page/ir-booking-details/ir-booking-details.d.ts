import { ISmokingOption, RatePlan, RoomType, Variation } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingDetails {
    errors: string;
    currentRatePlan: RatePlan | null;
    isLoading: number;
    cancelationMessage: string;
    prepaymentAmount: number;
    private dialogRef;
    private firstRoom;
    private paymentService;
    prepaymentChange: EventEmitter<number>;
    componentWillLoad(): void;
    private calculatePrepaymentAmount;
    private modifyBookings;
    updateGuestNames(isBookingForSomeoneElse: boolean, firstName: string, lastName: string): void;
    handleGuestNameChange(index: number, e: InputEvent, rateplanId: number, roomTypeId: number): void;
    handleVariationChange(index: number, e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): Promise<void>;
    getNewSelectedVariation(roomtypes: RoomType[], oldVariation: Variation, roomTypeId: number, rateplanId: number): Variation;
    updateVariation(params: {
        adult_nbr: number;
        child_nbr: number;
        rt_id: number;
        rp_id: number;
        adultChildConstraint: string;
    }): Promise<void>;
    handleBedConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    private formatVariation;
    handleSmokeConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    fetchCancelationMessage(applicable_policies: any): Promise<void>;
    renderSmokingView(smoking_option: ISmokingOption, index: number, ratePlanId: string, roomTypeId: string, checkoutSmokingSelection: string[]): any;
    render(): any;
    calculateTotalPersons(): number;
}
