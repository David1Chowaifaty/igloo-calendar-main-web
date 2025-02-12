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
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private pickupService;
    componentWillLoad(): void;
    handleLocationChange(event: CustomEvent): void;
    initializeInputMask(): void;
    handleVehicleQuantityChange(e: CustomEvent): void;
    componentDidLoad(): void;
    handleVehicleTypeChange(e: CustomEvent): void;
    updatePickupData(key: keyof TPickupData, value: any): void;
    savePickup(): Promise<void>;
    render(): any;
}
