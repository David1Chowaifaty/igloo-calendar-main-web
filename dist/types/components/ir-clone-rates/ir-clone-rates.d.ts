import { EventEmitter } from '../../stencil-public-runtime';
import { Adjustment, CloneRatesErrors, RoomTypeOption, SourceOption } from './clone-rates.utils';
export declare class IrCloneRates {
    el: HTMLIrCloneRatesElement;
    ticket: string;
    p: string;
    language: string;
    propertyid: number;
    /** `drawer` drops the page shell and the inline Review button; the host drawer submits `#clone-rates-form` from its footer. */
    mode: 'page' | 'drawer';
    /** Fired after the rates were copied successfully. */
    ratesCloned: EventEmitter<void>;
    isLoading: boolean;
    isSaving: boolean;
    isReviewOpen: boolean;
    roomTypes: RoomTypeOption[];
    currencySymbol: string;
    source: SourceOption;
    fromDate: string | null;
    toDate: string | null;
    weekdays: Set<number>;
    selectedRatePlans: Set<number>;
    adjustment: Adjustment;
    amount: string;
    copyMinStay: boolean;
    errors: CloneRatesErrors;
    private propertyId;
    /** Set by a failed review; the next render scrolls the first error into view once it is in the DOM. */
    private scrollToErrorPending;
    /** Set when an adjustment is picked; the next render focuses the amount field once it is mounted. */
    private focusAmountPending;
    private amountInputRef;
    private currentYear;
    private years;
    private apiClientService;
    private roomService;
    private propertyService;
    /** Re-runs init when the language changes so server-localized room type and rate plan names follow. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    /** `autofocus` only fires on page load, not when the field mounts later; wait for the inner input to render, then focus it. */
    private focusAmountInput;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePChange(newValue: string, oldValue: string): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private init;
    private resetForm;
    private get formState();
    private clearError;
    private handleSourceChange;
    private get allRatePlanIds();
    private toggleRatePlan;
    private toggleAllRatePlans;
    private review;
    private confirm;
    private renderError;
    private renderInfo;
    private renderDatesSection;
    private renderWeekdaysSection;
    private renderRoomTypesSection;
    private renderAmountInput;
    private renderAdjustmentSection;
    private renderRestrictionsSection;
    private renderForm;
    private renderReview;
    render(): any;
}
