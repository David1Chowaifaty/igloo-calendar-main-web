import { EventEmitter } from '../../../../stencil-public-runtime';
import { RatePlan, Variation } from "../../../../models/property";
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
    animateBookingButton: EventEmitter<null>;
    handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): void;
    render(): any;
}
