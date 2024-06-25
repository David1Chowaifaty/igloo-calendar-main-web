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
    isLoading: boolean;
    animateBookingButton: EventEmitter<null>;
    private propertyService;
    private availabilityService;
    componentWillLoad(): void;
    handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): Promise<void>;
    updateVariation(params: {
        adult_nbr: number;
        child_nbr: number;
        rt_id: number;
        rp_id: number;
        adultChildConstraint: string;
    }): Promise<void>;
    render(): any;
}
