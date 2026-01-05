import { Fragment, Host, h } from "@stencil/core";
import { BookedByGuestSchema } from "../types";
import moment from "moment";
import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import booking_store, { resetAvailability, setBookingDraft } from "../../../../stores/booking.store";
import { z } from "zod";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { IRBookingEditorService } from "../ir-booking-editor.service";
export class IrBookingEditorHeader {
    /** Booking context used for edit, add-room, and split flows */
    booking;
    isBlockConversion;
    /** Controls header behavior and date constraints */
    mode = 'PLUS_BOOKING';
    /** Fixed check-in date (YYYY-MM-DD), if applicable */
    checkIn;
    /** Fixed check-out date (YYYY-MM-DD), if applicable */
    checkOut;
    isLoading;
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
                message: locales.entries.Lcz_ChooseBookingNumber,
            });
        }
        // if (!data.lastName) {
        //   ctx.addIssue({
        //     path: ['lastName'],
        //     code: z.ZodIssueCode.custom,
        //     message: locales.entries.Lcz_ChooseBookingNumber,
        //   });
        // }
    });
    pickerRef;
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
                    message: 'Check-in date is required',
                });
            }
            if (moment.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: z.ZodIssueCode.custom,
                    message: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')).replace('%2', moment(this.booking.to_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!moment.isMoment(data.checkOut)) {
                ctx.addIssue({
                    path: ['checkOut'],
                    code: z.ZodIssueCode.custom,
                    message: 'Check-out date is required',
                });
            }
        });
    }
    async handleBookingSearch(value) {
        try {
            this.isLoading = true;
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
            this.isLoading = false;
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
    handleSourceChange(event) {
        this.stopEvent(event);
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
                return today.add(-2, 'weeks').format('YYYY-MM-DD');
            case 'ADD_ROOM':
                return this.booking?.from_date;
            case 'SPLIT_BOOKING':
            default:
                if (this.checkIn && this.isBlockConversion)
                    return this.checkIn;
                return today.format('YYYY-MM-DD');
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
        const years = child_max_age === 1 ? locales.entries.Lcz_Year : locales.entries.Lcz_Years;
        return `${locales.entries.Lcz_ChildCaption} 0 - ${child_max_age} ${years}`;
    }
    async selectGuest(e) {
        this.stopEvent(e);
        const booking_nbr = e.detail?.item?.value;
        const booking = await this.bookingService.getExposedBooking(booking_nbr, 'en', true);
        this.guestSelected.emit(booking);
    }
    render() {
        const { sources } = booking_store.selects;
        const { adults, children } = booking_store.bookingDraft.occupancy;
        const { checkIn, checkOut } = booking_store.bookingDraft.dates;
        return (h(Host, { key: '84f436129585b3d180bf46bbbde37edc24d95559' }, h("form", { key: '793fa677fb2b88166225982f71eb497b0df6c4a5', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (h("ir-validator", { key: '58a84860993880b6307c9ea66fd038de1327b622', value: booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, h("ir-picker", { key: '007bef45a82ba8b71cd24bf13df445a9e807d4a2', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${locales.entries.Lcz_Tobooking}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: locales.entries.Lcz_BookingNumber, loading: this.isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })))), h("div", { key: '9a756b31e8c11f64a6138e8a8ad7eb9c1fe4eaed', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && (h("wa-select", { key: '7b82825120f67fa5687209b7270100285c27da93', size: "small", placeholder: locales.entries.Lcz_Source, value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? h("small", null, option.description) : h("wa-option", { value: option.id?.toString() }, option.description))))), h("ir-validator", { key: '8d525d15686bb900e358b99f1f78cf5b32c33bdd', class: "booking-editor__date-validator", showErrorMessage: true, value: booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, h("igl-date-range", { key: 'adcc10a8654f1d13d736f12721e4a6e3a83b86a4', defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) })), !this.bookingEditorService.isEventType('EDIT_BOOKING') && (h(Fragment, { key: '6ee2bb836d47370fb2902cf4336b9343c7c2c359' }, h("ir-validator", { key: 'b7d0fc8c43be05be8f5f9c8ec639c417cec0e536', value: adults, schema: this.adultsSchema }, h("wa-select", { key: 'd5ba33b539833d372864a42940db933c1da90991', class: "booking-editor-header__adults-select", size: "small", placeholder: locales.entries.Lcz_AdultsCaption, value: adults?.toString(), defaultValue: adults?.toString(), "onwa-hide": this.stopEvent.bind(this), onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))), calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (h("wa-select", { key: '65ba5d44f37bb24f8eadae1d45650a5e919609bf', class: "booking-editor-header__children-select", size: "small", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(), "onwa-hide": this.stopEvent.bind(this), onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))))), h("ir-custom-button", { key: 'd6c63e74246722828068dd85e0ed7e9dedbd34db', loading: isRequestPending('/Check_Availability'), type: "submit", variant: "brand" }, "Check")), booking_store.roomTypes?.length > 0 && (h("wa-callout", { key: '57f0e4994aea384f30df9aaff4fae90843a87e07', size: "small", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, "Including taxes and fees.")))));
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
                            "id": "src/models/booking.dto.ts::Booking"
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
                "attribute": "is-block-conversion",
                "reflect": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BookingEditorMode",
                    "resolved": "\"ADD_ROOM\" | \"BAR_BOOKING\" | \"EDIT_BOOKING\" | \"PLUS_BOOKING\" | \"SPLIT_BOOKING\"",
                    "references": {
                        "BookingEditorMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BookingEditorMode"
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
                "attribute": "mode",
                "reflect": false,
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
                "attribute": "check-in",
                "reflect": false
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
                "attribute": "check-out",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
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
                            "id": "src/models/booking.dto.ts::Booking"
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
//# sourceMappingURL=ir-booking-editor-header.js.map
