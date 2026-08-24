/**
 * Owns the day-use-only parts of the booking editor form: the selected unit's summary
 * (date, room type, unit, price, same-day movement status) and the hours picker. Rendered
 * by `ir-booking-editor-form` only when `booking_store.bookingDraft.dayUse` is true.
 */
export declare class IrBookingEditorDayUse {
    private isValidDayUseTime;
    private getDayUseHour;
    private handleDayUseFromChange;
    private getDayUseDuration;
    render(): any;
}
