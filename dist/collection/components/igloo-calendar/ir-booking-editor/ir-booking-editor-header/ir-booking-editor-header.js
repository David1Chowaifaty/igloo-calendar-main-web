import { Fragment, Host, h } from "@stencil/core";
import { BookedByGuestSchema } from "../types";
import moment from "moment";
import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data from "../../../../stores/calendar-data";
import booking_store, { resetAvailability, setBookingDraft } from "../../../../stores/booking.store";
import { z } from "zod";
import { IRBookingEditorService } from "../ir-booking-editor.service";
import { formatDate } from "../../../../utils/date/index";
import { formatBookingNumber, formatCount } from "../../../../utils/number";
import { LocaleController } from "../../../../services/locale/locale.controller";
import { t } from "../../../../services/locale/t";
export class IrBookingEditorHeader {
    el;
    /** Booking context used for edit, add-room, and split flows */
    booking;
    isLoading;
    isBlockConversion;
    /** Controls header behavior and date constraints */
    mode = 'PLUS_BOOKING';
    /** Fixed check-in date (YYYY-MM-DD), if applicable */
    checkIn;
    /** Fixed check-out date (YYYY-MM-DD), if applicable */
    checkOut;
    _isLoading;
    bookings = [];
    datesSchema;
    guestSelected;
    checkAvailability;
    bookingService = new BookingService();
    adultsSchema = z.coerce.number().min(1);
    bookingEditorService = new IRBookingEditorService();
    BookedByGuestPickerSchema = z
        .object({
        firstName: z.string(),
        // lastName: z.string(),
    })
        .superRefine((data, ctx) => {
        if (!data.firstName) {
            ctx.addIssue({
                path: ['firstName'],
                code: z.ZodIssueCode.custom,
                message: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number', language: this.lang }),
            });
        }
        // if (!data.lastName) {
        //   ctx.addIssue({
        //     path: ['lastName'],
        //     code: z.ZodIssueCode.custom,
        //     message: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
        //   });
        // }
    });
    pickerRef;
    /** Validators run outside `render()`, so they can't pick up a `lang` subtree on their own. */
    get lang() {
        return LocaleController.languageFor(this.el);
    }
    // =====================
    // Handlers
    // =====================
    componentWillLoad() {
        this.createDatesSchema();
        this.bookingEditorService.setMode(this.mode);
    }
    handleBookingChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.createDatesSchema();
        }
    }
    handleModeChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.createDatesSchema();
            this.bookingEditorService.setMode(this.mode);
        }
    }
    // private createDatesSchema() {
    //   this.datesSchema = z.object({
    //     checkIn: z.custom(date => {
    //       if (!moment.isMoment(date)) {
    //         return false;
    //       }
    //       if (['SPLIT_BOOKING', 'ADD_ROOM'].includes(this.mode) && !date.isSameOrBefore(this.booking.to_date)) {
    //         return false;
    //       }
    //       return true;
    //     }),
    //     checkOut: z.custom(data => moment.isMoment(data)),
    //   });
    // }
    createDatesSchema() {
        this.datesSchema = z
            .object({
            checkIn: z.any(),
            checkOut: z.any(),
        })
            .superRefine((data, ctx) => {
            // ─────────────────────────────
            // checkIn validations
            // ─────────────────────────────
            if (!moment.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: z.ZodIssueCode.custom,
                    message: t('Lcz_CheckInDateRequired', { fallback: 'Check-in date is required', language: this.lang }),
                });
            }
            if (moment.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date, 'date')) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: z.ZodIssueCode.custom,
                    message: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [formatDate(this.booking.from_date, 'ddd, DD MMM YYYY', { locale: this.lang }), formatDate(this.booking.to_date, 'ddd, DD MMM YYYY', { locale: this.lang })], language: this.lang })}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!moment.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: z.ZodIssueCode.custom,
                    message: t('Lcz_CheckOutDateRequired', { fallback: 'Check-out date is required', language: this.lang }),
                });
            }
        });
    }
    async handleBookingSearch(value) {
        try {
            this._isLoading = true;
            if (!value) {
                this.pickerRef.clearInput();
                return;
            }
            this.bookings = await this.bookingService.fetchExposedBookings(value, calendar_data.property.id, this.checkIn, this.checkOut);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this._isLoading = false;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.stopEvent(event);
        try {
            if (this.mode === 'SPLIT_BOOKING' && !booking_store.bookedByGuest.firstName) {
                BookedByGuestSchema.parse(booking_store.bookedByGuest);
            }
            this.datesSchema.parse(booking_store.bookingDraft.dates);
            this.adultsSchema.parse(booking_store.bookingDraft?.occupancy?.adults);
            this.checkAvailability.emit();
        }
        catch (error) {
            console.error(error);
        }
    }
    handleDateRangeChange(event) {
        this.stopEvent(event);
        resetAvailability();
        setBookingDraft({ dates: event.detail });
    }
    handleDayUseDateChange(date) {
        if (!date) {
            return;
        }
        resetAvailability();
        setBookingDraft({
            dates: {
                checkIn: moment(date),
                checkOut: moment(date).add(1, 'day'),
            },
        });
    }
    handleSourceChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const value = event.target.value;
        const source = booking_store.selects.sources.find(s => s.id === value);
        setBookingDraft({ source });
    }
    handleAdultsChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const adults = Number(event.target.value);
        const { children } = booking_store.bookingDraft.occupancy;
        setBookingDraft({
            occupancy: { adults, children },
        });
    }
    handleChildrenChange(event) {
        this.stopEvent(event);
        resetAvailability();
        const children = Number(event.target.value);
        const { adults } = booking_store.bookingDraft.occupancy;
        setBookingDraft({
            occupancy: { adults, children },
        });
    }
    stopEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    // =====================
    // Computed values
    // =====================
    get minDate() {
        const today = moment();
        switch (this.mode) {
            case 'EDIT_BOOKING':
                return moment(this.booking.from_date, 'YYYY-MM-DD').add(-2, 'weeks').format('YYYY-MM-DD');
            case 'ADD_ROOM':
                return this.booking?.from_date;
            case 'SPLIT_BOOKING':
            default:
                if (this.checkIn && this.isBlockConversion)
                    return this.checkIn;
                return today.add(-1, 'days').format('YYYY-MM-DD');
        }
    }
    get maxDate() {
        // const today = moment();
        // const next60Days = today.add(60, 'days').format('YYYY-MM-DD');
        switch (this.mode) {
            case 'PLUS_BOOKING':
                if (this.checkOut && this.isBlockConversion)
                    return this.checkOut;
                return undefined;
            case 'ADD_ROOM':
            // return this.booking.to_date;
            case 'SPLIT_BOOKING':
            default:
                return undefined;
        }
    }
    get childrenSelectPlaceholder() {
        const { child_max_age } = calendar_data.property.adult_child_constraints;
        const years = child_max_age === 1 ? t('Lcz_Year', { fallback: 'year' }) : t('Lcz_Years', { fallback: 'years' });
        return `${t('Lcz_ChildCaption', { fallback: 'Child.' })} ${formatCount(0)} - ${formatCount(child_max_age)} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking({ booking_nbr, language: LocaleController.languageFor(this.el), withExtras: true });
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_store.selects;
        const { adults, children } = booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_store.bookingDraft.dates;
        const { dayUse } = booking_store.bookingDraft;
        return (h(Host, { key: 'cf58d79a848354176525c93569bb0ee1d1560ded' }, h("form", { key: '42a1150469103622371f764d5de0a56735d88c4e', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (h("ir-validator", { key: 'f55699046a6915143e7641b1904ce04355b8ac73', value: booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, h("ir-picker", { key: '91d00736085836399a0691a808713681b7122c96', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${t('Lcz_Tobooking', { fallback: 'To booking' })}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })))), h("div", { key: '55ec6410fea3d73481cb993ef5d88635705ecc24', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && !dayUse && (h("wa-select", { key: '5811b3efbb9a62613b58758967a8dc638630085e', size: "s", placeholder: t('Lcz_Source', { fallback: 'Source' }), value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? h("small", null, option.description) : h("wa-option", { value: option.id?.toString() }, option.description))))), dayUse ? (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: checkIn?.format('YYYY-MM-DD'), schema: z.string().min(1, t('Lcz_DateIsRequired', { fallback: 'Date is required' })) }, h("ir-date-select", { date: checkIn?.format('YYYY-MM-DD'), minDate: moment().format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: e => this.handleDayUseDateChange(e.detail.start) }, h("wa-icon", { part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" })))) : (h("ir-validator", { class: "booking-editor__date-validator", showErrorMessage: true, value: booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, h("ir-date-range", { class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) }))), !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'EDIT_DAY_USE']) && (h(Fragment, { key: '3c9de530ac9c8b13583a9ac46645df7f62080c24' }, h("ir-validator", { key: 'b8033d7d8dfd59405466466dc698f156d9ac8626', value: adults, schema: this.adultsSchema }, h("wa-select", { key: 'b424e7d9844f0a3836e1960f292d7ca9eaccf0e1', class: "booking-editor-header__adults-select", size: "s", placeholder: t('Lcz_Adults', { fallback: 'adults' }), value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, formatCount(option)))))), calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (h("wa-select", { key: '86c58de48fad4a017a99822118ba635166fc2ad7', class: "booking-editor-header__children-select", size: "s", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, formatCount(option)))))))), h("ir-custom-button", { key: '36805fa9577e3cd93226fbb552e7d6f2387a4dc3', loading: this.isLoading, type: "submit", variant: "brand" }, t('Lcz_Check', { fallback: 'Check' }))), booking_store.roomTypes?.length > 0 && !this.isLoading && calendar_data.tax_statement && (h("wa-callout", { key: '59e9887890a04fc993309773798366fe56e4114a', size: "s", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement)))));
    }
    static get is() { return "ir-booking-editor-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-header.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Booking context used for edit, add-room, and split flows"
                },
                "getter": false,
                "setter": false
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-loading"
            },
            "isBlockConversion": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-block-conversion"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BookingEditorMode",
                    "resolved": "\"ADD_ROOM\" | \"BAR_BOOKING\" | \"EDIT_BOOKING\" | \"EDIT_DAY_USE\" | \"PLUS_BOOKING\" | \"SPLIT_BOOKING\"",
                    "references": {
                        "BookingEditorMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BookingEditorMode",
                            "referenceLocation": "BookingEditorMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls header behavior and date constraints"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'PLUS_BOOKING'"
            },
            "checkIn": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Fixed check-in date (YYYY-MM-DD), if applicable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "check-in"
            },
            "checkOut": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Fixed check-out date (YYYY-MM-DD), if applicable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "check-out"
            }
        };
    }
    static get states() {
        return {
            "_isLoading": {},
            "bookings": {},
            "datesSchema": {}
        };
    }
    static get events() {
        return [{
                "method": "guestSelected",
                "name": "guestSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                }
            }, {
                "method": "checkAvailability",
                "name": "checkAvailability",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }, {
                "propName": "mode",
                "methodName": "handleModeChange"
            }];
    }
}
