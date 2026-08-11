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
    /** Group (e.g. Accommodation/ACM) the currently selected top-level category belongs to, when it has sub-categories to pick from. */
    selectedGroupCode: string | null;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    handleServiceChange(): void;
    private assignService;
    /** Which group (e.g. `ACM`) a leaf category code belongs to, if any — used to re-derive the group selection when editing an existing service. */
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
    /** Sets the chosen leaf category and, when the property has a configured default price for it, overwrites the price field to match. */
    private selectCategory;
    private updateService;
    private assignmentChanged;
    render(): any;
}
