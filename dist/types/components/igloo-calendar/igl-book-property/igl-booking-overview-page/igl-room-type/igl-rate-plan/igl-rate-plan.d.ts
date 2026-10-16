import { EventEmitter } from '../../../../../../stencil-public-runtime';
import { SetupEntries } from "../../../../../../models/IBooking";
import { RatePlan } from "../../../../../../models/property";
import { IRatePlanSelection } from "../../../../../../stores/booking.store";
export declare class IglRatePlan {
    ratePlan: RatePlan;
    roomTypeId: number;
    ratePricingMode: SetupEntries[];
    currency: {
        symbol: string;
    };
    shouldBeDisabled: boolean;
    bookingType: string;
    isBookDisabled: boolean;
    visibleInventory: IRatePlanSelection;
    unavailableRatePlanIds: Set<number>;
    buttonClicked: EventEmitter<{
        [key: string]: any;
    }>;
    bookingStepChange: EventEmitter<{
        direction: 'next' | 'prev';
    }>;
    private disableForm;
    private updateRateplanSelection;
    private handleDataChange;
    private bookProperty;
    private reserveRoom;
    private get rate();
    private formatVariation;
    private getTooltipMessages;
    private handleVariationChange;
    render(): any;
}
