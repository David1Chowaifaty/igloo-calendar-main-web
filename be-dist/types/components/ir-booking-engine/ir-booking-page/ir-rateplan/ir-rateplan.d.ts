import { EventEmitter } from '../../../../stencil-public-runtime';
import { RatePlan, Variation } from "../../../../models/property";
import { IRatePlanSelection } from "../../../../stores/booking";
export declare class IrRateplan {
    display: 'grid' | 'default';
    ratePlan: RatePlan;
    visibleInventory?: IRatePlanSelection | {
        reserved: number;
        visibleInventory?: number;
        selected_variation: Variation;
    };
    roomTypeInventory: number;
    roomTypeId: number;
    isLoading: boolean;
    cancelationMessage: string;
    isRatePlanAvailable: boolean;
    animateBookingButton: EventEmitter<null>;
    private paymentService;
    componentWillLoad(): void;
    handleRTICHange(newValue: number, oldValue: number): any;
    private checkAvailability;
    private handleVariationChange;
    private fetchCancelationMessage;
    render(): any;
    formatVariation(v: Variation): any;
}
