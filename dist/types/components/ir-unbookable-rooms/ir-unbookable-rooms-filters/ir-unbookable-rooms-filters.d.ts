import { EventEmitter } from '../../../stencil-public-runtime';
import { FetchUnBookableRoomsResult } from "../../../services/property.service";
type UnbookableRoomsMode = 'default' | 'mpo';
type UnbookableRoomsFilters = {
    period_to_check: number;
    consecutive_period: number;
    country: string;
};
export declare class IrUnbookableRoomsFilters {
    mode: UnbookableRoomsMode;
    filters: UnbookableRoomsFilters;
    unbookableRooms: FetchUnBookableRoomsResult;
    isLoading: boolean;
    filtersChange: EventEmitter<Partial<UnbookableRoomsFilters>>;
    filtersReset: EventEmitter<void>;
    filtersSave: EventEmitter<void>;
    private normalizePositiveNumber;
    private handlePeriodChange;
    private handleConsecutiveChange;
    private handleCountryChange;
    render(): any;
}
export {};
