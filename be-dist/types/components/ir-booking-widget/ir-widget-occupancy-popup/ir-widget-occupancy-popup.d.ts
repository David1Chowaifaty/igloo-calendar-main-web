import { EventEmitter } from '../../../stencil-public-runtime';
import { IExposedProperty } from "../../../models/property";
export declare class IrWidgetOccupancyPopup {
    guests: {
        adultCount: number;
        childrenCount: number;
        infants: number;
        childrenAges: string[];
    };
    property: IExposedProperty;
    error: boolean;
    disabled: boolean;
    absoluteIcon: boolean;
    isLoading: boolean;
    guestsChange: EventEmitter<{
        adultCount: number;
        childrenCount: number;
        infants: number;
        childrenAges: string[];
    }>;
    private guestsWidgetPopupRef;
    private renderAdultChildTrigger;
    private renderLoadingTrigger;
    render(): any;
}
