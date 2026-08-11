import { PhysicalRoom, RoomType } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglDayUseUnitList {
    /** Room types returned by the day-use availability check. */
    roomTypes: RoomType[];
    /** Fallback day-use price used only if the property has no `SVC_DEFAULT_PRICE_DUZ` configured, editable per unit. */
    price: number;
    /** Net (tax-exclusive) version of the resolved gross default price, pre-computed by the parent (`calculateNetAmount`) — shown as the input's default value so an untouched default reads the same way a typed custom (net) amount does. */
    netPrice: number | null;
    currency: any;
    /** Unit ids already booked for day use on the target date (from `getDayUseBookingsForCalendar`) — excluded from the list. */
    bookedUnitIds: Set<number>;
    /** When a specific unit was preselected (e.g. double-click on a room title in the calendar), only that unit is shown. */
    unitId?: string | number;
    /** Unit id currently being resolved (gross-price lookup) after "Book" was clicked — disables the other buttons. */
    resolvingUnitId: number | null;
    /** Whether an availability check has completed at least once — distinguishes "no search yet" (render nothing) from "searched, zero units" (show empty state). */
    hasSearched: boolean;
    priceOverrides: Record<number, number>;
    unitSelected: EventEmitter<{
        unit: PhysicalRoom;
        roomType: RoomType;
        price: number;
        isCustomPrice: boolean;
    }>;
    private getAvailableUnits;
    private get defaultPrice();
    /** What's actually shown as the default input value — the net-converted price when it's ready, otherwise the gross default as a fallback while it resolves. */
    private get displayDefaultPrice();
    private getPrice;
    private isCustomPrice;
    render(): any;
}
