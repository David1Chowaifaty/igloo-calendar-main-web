import { EventEmitter } from '../../../../stencil-public-runtime';
import { RatePlan } from "../../../../models/property";
import { IRatePlanSelection } from "../../../../stores/booking";
export declare class IrRateplan {
    ratePlan: RatePlan;
    visibleInventory?: IRatePlanSelection | {
        reserved: number;
        visibleInventory?: number;
        selected_variation: any;
    };
    roomTypeInventory: number;
    roomTypeId: number;
    isLoading: boolean;
    cancelationMessage: string;
    isRatePlanAvailable: boolean;
    animateBookingButton: EventEmitter<null>;
    private propertyService;
    private availabilityService;
    private paymentService;
    componentWillLoad(): void;
    handleRTICHange(newValue: number, oldValue: number): any;
    private checkAvailability;
    private handleVariationChange;
    private updateVariation;
    private fetchCancelationMessage;
    render(): any;
}
