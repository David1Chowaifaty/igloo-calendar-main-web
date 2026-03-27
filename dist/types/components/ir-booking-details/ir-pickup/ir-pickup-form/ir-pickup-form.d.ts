import { EventEmitter } from '../../../../stencil-public-runtime';
import { IAllowedOptions } from "../../../../models/calendarData";
import { IBookingPickupInfo } from "../../../../models/booking.dto";
import { TPickupData } from '../types';
export declare class IrPickupForm {
    el: HTMLElement;
    formId: string;
    defaultPickupData: IBookingPickupInfo | null;
    numberOfPersons: number;
    bookingNumber: string;
    bookingDates: {
        from: string;
        to: string;
    };
    isLoading: boolean;
    allowedOptionsByLocation: IAllowedOptions[];
    pickupData: TPickupData;
    vehicleCapacity: number[];
    autoValidate: boolean;
    closeModal: EventEmitter<null>;
    canSubmitPickupChange: EventEmitter<boolean>;
    loadingChange: EventEmitter<boolean>;
    resetBookingEvt: EventEmitter<null>;
    private pickupService;
    private pickupSchema;
    private get shouldRenderDetails();
    private get isRemovalRequest();
    private get canSubmitPickup();
    private lastCanSubmit;
    handleSubmitPickupChange(): void;
    componentWillLoad(): void;
    private handleLocationChange;
    private handleVehicleQuantityChange;
    private handleVehicleTypeChange;
    private computeDueAmount;
    private updatePickupData;
    private savePickup;
    render(): any;
}
