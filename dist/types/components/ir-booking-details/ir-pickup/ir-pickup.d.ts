import { EventEmitter } from '../../../stencil-public-runtime';
import { TPickupData } from './types';
import { IAllowedOptions } from "../../../models/calendarData";
import { IBookingPickupInfo } from "../../../models/booking.dto";
export declare class IrPickup {
    el: HTMLElement;
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
    cause: keyof TPickupData | null;
    autoValidate: boolean;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private pickupService;
    private pickupSchema;
    private arrival_time_mask;
    componentWillLoad(): void;
    private handleLocationChange;
    private handleVehicleQuantityChange;
    private handleVehicleTypeChange;
    private updatePickupData;
    private savePickup;
    render(): any;
}
