import { TAllowedOptions } from "../../../../models/pickup";
import { ZodIssue } from 'zod';
export declare class IrPickup {
    errors: Record<string, ZodIssue>;
    vehicleCapacity: number[];
    allowedOptionsByLocation: TAllowedOptions[];
    el: HTMLIrPickupElement;
    private popover;
    private pickupService;
    private time_mask;
    private oldCurrencyValue;
    componentWillLoad(): void;
    updateCurrency(): void;
    dateTrigger(): any;
    handleChangeDate(e: CustomEvent): void;
    handleVehicleTypeChange(e: CustomEvent): void;
    handleLocationChange(event: CustomEvent): void;
    handleVehicleQuantityChange(e: CustomEvent): void;
    render(): any;
}
