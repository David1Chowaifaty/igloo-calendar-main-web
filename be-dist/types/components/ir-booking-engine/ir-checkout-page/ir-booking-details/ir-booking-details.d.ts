import { RatePlan } from "../../../../models/property";
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
    private variationService;
    prepaymentChange: EventEmitter<number>;
    total_rooms: number;
    componentWillLoad(): void;
    private calculatePrepaymentAmount;
    private modifyBookings;
    private updateGuestNames;
    private handleGuestNameChange;
    private handleBedConfiguration;
    private handleSmokeConfiguration;
    private fetchCancelationMessage;
    private renderSmokingView;
    private handleInfantNumberChange;
    private calculateTotalPersons;
    render(): any;
}
