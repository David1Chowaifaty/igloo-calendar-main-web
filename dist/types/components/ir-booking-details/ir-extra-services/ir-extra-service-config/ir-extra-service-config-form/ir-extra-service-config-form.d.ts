import { Booking, ExtraService } from "../../../../../models/booking.dto";
import { Agent } from "../../../../../services/agents/type";
import { IEntries } from "../../../../../models/property";
import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrExtraServiceConfigForm {
    booking: Booking;
    agent: Agent;
    service: ExtraService;
    svcCategories: IEntries[];
    language: string;
    /** Pre-selected unit (physical room) id to link a new service to, e.g. when added from ir-room's quick-add action. */
    defaultPrId: number | null;
    s_service: ExtraService;
    error: boolean;
    fromDateClicked: boolean;
    toDateClicked: boolean;
    autoValidate: boolean;
    assignee: 'agent' | 'guest';
    /** Group (e.g. Accommodation) the currently selected top-level category belongs to, when it has sub-categories to pick from. */
    selectedGroupCode: string | null;
    /** True once the price field has been set by user input (typed, or loaded from an existing saved service) — freezes it against further auto-recalculation. */
    priceManuallyEdited: boolean;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    handleServiceChange(): void;
    private assignService;
    /** Which group (e.g. `Accommodation`) a leaf category code belongs to, if any — used to re-derive the group selection when editing an existing service. */
    private groupCodeForCategoryCode;
    private get taxCategoryLookup();
    private toCategoryOption;
    private sortByLabel;
    private get categories();
    private get svcGroups();
    /** Sub-categories of the currently selected top-level group (e.g. Breakfast/Minibar under Accommodation), when there are any. */
    private get subCategories();
    /** The unit-link select becomes mandatory once the chosen extra service is an accommodation sub-category (Breakfast, Minibar, ...). */
    private get isUnitRequired();
    private get unitOptions();
    private get showUnitLink();
    /** The room identifier to link a new service to: an explicit default (e.g. from ir-room's quick-add, given as a unit id), or the booking's single unit when there's no choice to make. */
    private get effectiveRoomIdentifier();
    private saveAmenity;
    private closeDialog;
    /**
     * Sets the chosen leaf category and, when the property has a configured default price for it,
     * overwrites the price field to match. Re-arms auto-recalculation (see `priceManuallyEdited`) —
     * a fresh category selection always gets its default, even over a previously typed price.
     */
    private selectCategory;
    /**
     * Resolves the property's configured default price for `code`. For every category except Baby
     * Cot this is just the flat `SVC_DEFAULT_PRICE_<code>` rate. Baby Cot's rate is charged once per
     * stay or once per night depending on `BABY_COT_PRICING_MODEL` (set on the Extra Services
     * settings page) — when it's per night, the rate is multiplied by the number of nights in the
     * currently selected date range (falling back to the full booking stay when no range is picked
     * yet), so the field always reflects "rate × nights" until the user overrides it by typing.
     */
    private resolveDefaultPrice;
    /** Keeps Baby Cot's per-night price in sync with the selected date range, unless the user has already typed a price of their own. */
    private syncBabyCotPriceWithDateRange;
    private updateService;
    private assignmentChanged;
    render(): any;
}
