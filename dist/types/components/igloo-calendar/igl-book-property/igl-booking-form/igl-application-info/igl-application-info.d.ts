import { TPropertyButtonsTypes } from "../../../../../components";
import { ICurrency } from "../../../../../models/calendarData";
import { IRatePlanSelection, RatePlanGuest } from "../../../../../stores/booking.store";
export declare class IglApplicationInfo {
    rateplanSelection: IRatePlanSelection;
    guestInfo: RatePlanGuest | null;
    currency: ICurrency;
    bedPreferenceType: any[];
    bookingType: string;
    roomIndex: number;
    totalNights: number;
    baseData: {
        unit: {
            id: string;
            name: string;
        };
        roomtypeId: number;
    };
    isButtonPressed: boolean;
    private variationService;
    componentWillLoad(): void;
    private updateGuest;
    handleButtonClicked(event: CustomEvent<{
        key: TPropertyButtonsTypes;
        data?: CustomEvent;
    }>): void;
    private getTooltipMessages;
    private getAmount;
    private filterRooms;
    render(): any;
}
