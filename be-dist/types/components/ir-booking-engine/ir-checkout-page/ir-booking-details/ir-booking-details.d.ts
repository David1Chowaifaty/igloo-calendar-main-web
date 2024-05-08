import { ISmokingOption, RatePlan, Variation } from "../../../../models/property";
export declare class IrBookingDetails {
    currentRatePlan: RatePlan | null;
    private dialogRef;
    private firstRoom;
    componentWillLoad(): void;
    calculateTotalRooms(): any;
    handleGuestNameChange(index: number, e: InputEvent, rateplanId: number, roomTypeId: number): void;
    handleVariationChange(index: number, e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): void;
    handleBedConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    handleSmokeConfiguration(roomTypeId: string, rateplanId: string, detail: string | number, index: number): void;
    renderSmokingView(smoking_option: ISmokingOption, index: number, ratePlanId: string, roomTypeId: string, checkoutSmokingSelection: string[]): any;
    render(): any;
}
