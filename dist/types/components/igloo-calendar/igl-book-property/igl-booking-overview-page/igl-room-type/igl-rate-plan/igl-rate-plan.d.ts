import { EventEmitter } from '../../../../../../stencil-public-runtime';
import { RatePlan } from "../../../../../../models/property";
import { IRatePlanSelection } from "../../../../../../stores/booking.store";
export declare class IglRatePlan {
    ratePlan: RatePlan;
    roomTypeId: number;
    ratePricingMode: Array<{
        CODE_NAME: string;
        CODE_VALUE_EN: string;
    }>;
    currency: {
        symbol: string;
    };
    shouldBeDisabled: boolean;
    bookingType: string;
    isBookDisabled: boolean;
    visibleInventory: IRatePlanSelection;
    buttonClicked: EventEmitter<{
        [key: string]: any;
    }>;
    private disableForm;
    private updateRateplanSelection;
    private handleDataChange;
    private bookProperty;
    private reserveRoom;
    private renderRate;
    private formatVariation;
    private getTooltipMessages;
    private handleVariationChange;
    render(): any;
}
