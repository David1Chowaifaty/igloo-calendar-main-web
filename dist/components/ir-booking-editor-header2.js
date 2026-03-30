import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookedByGuestSchema } from './types4.js';
import { h as hooks } from './moment.js';
import { B as BookingService, b as booking_store, o as resetAvailability, s as setBookingDraft } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { z } from './index2.js';
import { I as IRBookingEditorService } from './ir-booking-editor.service.js';
import { d as defineCustomElement$7 } from './igl-date-range2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingEditorHeaderCss = ".sc-ir-booking-editor-header-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__container.sc-ir-booking-editor-header{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.booking-editor-header__booking-picker.sc-ir-booking-editor-header{max-width:350px}.booking-editor-header__booking-picker-validator.sc-ir-booking-editor-header{margin-bottom:1rem}.booking-editor-header__tax_statement.sc-ir-booking-editor-header{margin-top:1.5rem}@media (min-width: 768px){.booking-editor__date-range.sc-ir-booking-editor-header{min-width:auto;width:max-content}.booking-editor__date-range>.end.sc-ir-booking-editor-header-s>*{margin:0}.booking-editor__date-range.sc-ir-booking-editor-header::part(input-input){box-sizing:border-box;padding:0;width:170px;min-width:auto}.booking-editor__date-range.sc-ir-booking-editor-header::part(input-end){margin:0}.booking-editor-header__container.sc-ir-booking-editor-header{flex-direction:row;align-items:flex-start;flex-wrap:wrap}.booking-editor-header__adults-select.sc-ir-booking-editor-header{width:100px}.booking-editor-header__children-select.sc-ir-booking-editor-header{width:170px}}@media (min-width: 1024px){.booking-editor__date-validator.sc-ir-booking-editor-header::part(error-message){position:absolute}}";
const IrBookingEditorHeaderStyle0 = irBookingEditorHeaderCss;

const IrBookingEditorHeader = /*@__PURE__*/ proxyCustomElement(class IrBookingEditorHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.guestSelected = createEvent(this, "guestSelected", 7);
        this.checkAvailability = createEvent(this, "checkAvailability", 7);
    }
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
            if (!hooks.isMoment(data.checkIn)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: z.ZodIssueCode.custom,
                    message: 'Check-in date is required',
                });
            }
            if (hooks.isMoment(data.checkIn) && this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && !data.checkIn.isSameOrBefore(this.booking.to_date)) {
                ctx.addIssue({
                    path: ['checkIn'],
                    code: z.ZodIssueCode.custom,
                    message: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY')).replace('%2', hooks(this.booking.to_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))}  `,
                });
            }
            // ─────────────────────────────
            // checkOut validations
            // ─────────────────────────────
            if (!hooks.isMoment(data.checkOut)) {
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
        const today = hooks();
        switch (this.mode) {
            case 'EDIT_BOOKING':
                return hooks(this.booking.from_date, 'YYYY-MM-DD').add(-2, 'weeks').format('YYYY-MM-DD');
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
        return (h(Host, { key: 'eeb6f6d802903e3be6526bfe1909e62fafd32830' }, h("form", { key: '488cf295f2e26d83d32c3f014815c01bd69649c2', onSubmit: this.handleSubmit.bind(this) }, this.bookingEditorService.isEventType('SPLIT_BOOKING') && (h("ir-validator", { key: '7c0be1eb54b2ef3b7529560f07eb17c1dd147667', value: booking_store.bookedByGuest, class: "booking-editor-header__booking-picker-validator", showErrorMessage: true, schema: this.BookedByGuestPickerSchema }, h("ir-picker", { key: '8f3b28b32b6cd96e7d8d064ebec574a6bda82ff8', withClear: true, mode: "select-async", class: "booking-editor-header__booking-picker", debounce: 300, ref: el => (this.pickerRef = el), label: `${locales.entries.Lcz_Tobooking}#`,
            // defaultValue={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            // value={Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : ''}
            placeholder: locales.entries.Lcz_BookingNumber, loading: this._isLoading, "onText-change": e => this.handleBookingSearch(e.detail), "onCombobox-select": this.selectGuest.bind(this) }, this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })))), h("div", { key: '741899995194035d430acc8145d89d13156b3fef', class: "booking-editor-header__container" }, !this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM', 'SPLIT_BOOKING']) && (h("wa-select", { key: 'ab3f89e7cdaa5ee94a91101aeebe228aec09ef27', size: "small", placeholder: locales.entries.Lcz_Source, value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, "onwa-hide": this.stopEvent.bind(this), onchange: this.handleSourceChange.bind(this) }, sources.map(option => (option.type === 'LABEL' ? h("small", null, option.description) : h("wa-option", { value: option.id?.toString() }, option.description))))), h("ir-validator", { key: '56a93a5184273098f141beb0ba28eea39c87118a', class: "booking-editor__date-validator", showErrorMessage: true, value: booking_store.bookingDraft.dates, schema: this.datesSchema, style: { position: 'relative' } }, h("igl-date-range", { key: 'ac23f9082f6626a387489f379309b1c02111a296', class: "booking-editor__date-range", defaultData: {
                fromDate: checkIn?.format('YYYY-MM-DD') ?? '',
                toDate: checkOut?.format('YYYY-MM-DD') ?? '',
            }, variant: "booking", withDateDifference: true, minDate: this.minDate, maxDate: this.maxDate, onDateRangeChange: this.handleDateRangeChange.bind(this) })), !this.bookingEditorService.isEventType('EDIT_BOOKING') && (h(Fragment, { key: 'ee6545f759c5eb0374f1e2fa80a3ab78801f8b99' }, h("ir-validator", { key: '8bac048b1714a2e1a043dd70b8d18d8a64477081', value: adults, schema: this.adultsSchema }, h("wa-select", { key: '77063b7da731c15bcc3aad64fbc8a7bd55dc4b77', class: "booking-editor-header__adults-select", size: "small", placeholder: locales.entries.Lcz_AdultsCaption, value: adults?.toString(), defaultValue: adults?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleAdultsChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.adult_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))), calendar_data.property.adult_child_constraints.child_max_nbr > 0 && (h("wa-select", { key: '4e7c733ef1c7551ccf95e40e782f1b2c8d104737', class: "booking-editor-header__children-select", size: "small", placeholder: this.childrenSelectPlaceholder, value: children?.toString(), defaultValue: children?.toString(),
            // onwa-hide={this.stopEvent.bind(this)}
            onchange: this.handleChildrenChange.bind(this) }, Array.from({ length: calendar_data.property.adult_child_constraints.child_max_nbr }, (_, i) => i + 1).map(option => (h("wa-option", { value: option.toString() }, option))))))), h("ir-custom-button", { key: '30082b3440164d7c07a6b8cff36008be21d94edd', loading: this.isLoading, type: "submit", variant: "brand" }, "Check")), booking_store.roomTypes?.length > 0 && !this.isLoading && (h("wa-callout", { key: '619bf8548c672bfc3bb9788f57168567d0aa1e71', size: "small", variant: "neutral", appearance: "filled", class: "booking-editor-header__tax_statement" }, calendar_data.tax_statement)))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"],
        "mode": ["handleModeChange"]
    }; }
    static get style() { return IrBookingEditorHeaderStyle0; }
}, [2, "ir-booking-editor-header", {
        "booking": [16],
        "isLoading": [4, "is-loading"],
        "isBlockConversion": [4, "is-block-conversion"],
        "mode": [1],
        "checkIn": [1, "check-in"],
        "checkOut": [1, "check-out"],
        "_isLoading": [32],
        "bookings": [32],
        "datesSchema": [32]
    }, undefined, {
        "booking": ["handleBookingChange"],
        "mode": ["handleModeChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-editor-header", "igl-date-range", "ir-custom-button", "ir-custom-date-range", "ir-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEditorHeader);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingEditorHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-editor-header2.js.map