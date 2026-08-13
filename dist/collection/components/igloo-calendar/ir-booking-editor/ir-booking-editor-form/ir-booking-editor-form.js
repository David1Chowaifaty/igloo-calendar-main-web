import booking_store, { bookedByGuestBaseData, calculateTotalRooms, getBookingTotalPrice, setBookingDraft, syncFirstRoomGuestName, updateBookedByGuest, } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import { DayUseHoursSchema } from "../types";
import { calculateDaysBetweenDates } from "../../../../utils/booking";
import { AgentsService } from "../../../../services/agents/agents.service";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { isAgentMode } from "../../../ir-booking-details/functions";
import { IRBookingEditorService } from "../ir-booking-editor.service";
import { createTimeToMask } from "../../../ui/ir-input/masks";
import moment from "moment";
export class IrBookingEditorForm {
    mode = 'PLUS_BOOKING';
    room;
    booking;
    agent;
    guests;
    totalCost = 0;
    assignee = 'guest';
    resolvedAgent;
    doReservation;
    bookingService = new BookingService();
    agentsService = new AgentsService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && isAgentMode(this.resolvedAgent)) {
            this.assignee = 'agent';
            setBookingDraft({ roomAssignee: 'agent' });
        }
    }
    async handleRecalculation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
    }
    async fetchGuests(email) {
        try {
            if (!email) {
                return;
            }
            this.guests = await this.bookingService.fetchExposedGuest(email, calendar_data.property.id);
        }
        catch (error) {
            console.log(error);
        }
    }
    handleComboboxSelect(e) {
        const guest = this.guests?.find(guest => guest.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        updateBookedByGuest({
            id: guest.id,
            email: guest.email,
            firstName: guest.first_name,
            lastName: guest.last_name,
            mobile: guest.mobile_without_prefix,
            countryId: guest.country_id?.toString(),
            phone_prefix: guest['country_phone_prefix'],
        });
        syncFirstRoomGuestName('first_name', guest.first_name);
        syncFirstRoomGuestName('last_name', guest.last_name);
    }
    isValidDayUseTime(value) {
        return DayUseHoursSchema.shape.from.safeParse(value).success;
    }
    getDayUseHour(value) {
        return this.isValidDayUseTime(value) ? Number(value.slice(0, 2)) : 0;
    }
    handleDayUseFromChange(from, dayUseHours) {
        const fromIsBeforeTo = this.isValidDayUseTime(from) && this.isValidDayUseTime(dayUseHours.to) && this.getDayUseHour(dayUseHours.to) < this.getDayUseHour(from);
        setBookingDraft({ dayUseHours: { from, to: fromIsBeforeTo ? '' : dayUseHours.to } });
    }
    getDayUseDuration(dayUseHours) {
        if (!this.isValidDayUseTime(dayUseHours.from) || !this.isValidDayUseTime(dayUseHours.to)) {
            return '';
        }
        const minutes = moment(dayUseHours.to, 'HH:mm').diff(moment(dayUseHours.from, 'HH:mm'), 'minutes');
        if (minutes <= 0) {
            return '';
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return [hours && `${hours}h`, remainingMinutes && `${remainingMinutes}m`].filter(Boolean).join(' ');
    }
    render() {
        const { dates, dayUse, dayUseHours } = booking_store.bookingDraft;
        const { dayUseSelection } = booking_store;
        let hasBookedByGuestController = false;
        return (h("form", { key: '8208d796fb29df3c79c45b2fd3d4c0b44efc07d2', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, h("div", { key: '41d965ce056dc631e899c9009d834378ea46854f', class: "booking-editor__header" }, dayUse ? (h("span", { class: "booking-editor__dates" }, dates.checkIn.format('DD MMM YYYY'))) : (h("ir-date-view", { class: "booking-editor__dates", from_date: dates.checkIn, to_date: dayUse ? dates.checkIn : dates.checkOut, dateOption: "DD MMM YYYY" })), dayUse ? (h("div", { class: "booking-editor__total" }, h("span", { class: "booking-editor__total-label" }, dayUseSelection?.roomType?.name, " ", h("ir-unit-tag", { unit: dayUseSelection?.unit?.name })), ' ', h("span", { class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, dayUseSelection?.price ?? 0)), h("span", { style: { marginInlineStart: '0.5rem', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))) : (this.totalRooms > 1 && (h("div", { class: "booking-editor__total" }, h("span", { class: "booking-editor__total-label" }, locales.entries.Lcz_TotalPrice), ' ', h("span", { class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost)))))), !dayUse &&
            Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
                const rp = ratePlan;
                if (rp.reserved === 0) {
                    return null;
                }
                return [...new Array(rp.reserved)].map((_, i) => {
                    const shouldAutoFillGuest = ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) &&
                        booking_store.bookedByGuest.id === -1 &&
                        !hasBookedByGuestController &&
                        !booking_store.bookedByGuestManuallyEdited;
                    if (shouldAutoFillGuest) {
                        hasBookedByGuestController = true;
                    }
                    return (h("igl-application-info", { autoFillGuest: shouldAutoFillGuest, totalNights: calculateDaysBetweenDates(dates.checkIn.format('YYYY-MM-DD'), dates.checkOut.format('YYYY-MM-DD')), bedPreferenceType: booking_store.selects.bedPreferences, currency: calendar_data.property.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.mode, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.mode === 'EDIT_BOOKING'
                            ? {
                                roomtypeId: this.room.roomtype.id,
                                unit: this.room.unit,
                            }
                            : undefined }));
                });
            })), dayUse && (h("section", { key: 'a4f4fcdb29aa40e3764c247b2d5e54a700528c88', class: "booking-editor__day-use-hours" }, h("div", { key: 'fd3fbf29fe83dd07d25582d8a417b07c99086a1f', class: "booking-editor__day-use-hours-row" }, h("ir-validator", { key: '719d459629bc12ad87988361a8fa61c60aaacbbf', value: dayUseHours.from, schema: DayUseHoursSchema.shape.from }, h("ir-input", { key: '3fa5f1b8ea94d0d20bfb287c65ed1356c50592e5', label: "Time period", mask: "time", placeholder: "11:30", value: dayUseHours.from, "onText-change": e => this.handleDayUseFromChange(e.detail, dayUseHours) })), h("wa-icon", { key: 'b6f4e9af91ebc4445ef5ffedd4e990bb1615cb40', class: "booking-editor__day-use-hours-connector", name: "arrow-right" }), h("ir-validator", { key: 'fe6560ec0341835751718bd061a8e84242900c96', value: dayUseHours.to, schema: DayUseHoursSchema.shape.to }, h("ir-input", { key: '56e05e2772e8319d5b0f9e9517c669e907ef359a', disabled: !this.isValidDayUseTime(dayUseHours.from), mask: createTimeToMask(this.getDayUseHour(dayUseHours.from)), placeholder: "16:00", value: dayUseHours.to, "onText-change": e => setBookingDraft({ dayUseHours: { ...dayUseHours, to: e.detail } }) })), this.getDayUseDuration(dayUseHours) && (h("span", { key: 'd18fbdf34e94bf74f26afeb754c8342d10f4219f', class: "booking-editor__day-use-duration booking-editor__day-use-hours-connector" }, "Duration: ", this.getDayUseDuration(dayUseHours)))))), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: '08eedc66e9ce7a57171cdf60e75ae4b994fd54b0', class: "booking-editor__booked-by-section" }, h("div", { key: 'de61f8918eb6ffc1d709c618ded378bafa0f5cfe', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: 'bacd1e5af082da367e015bcc4f831956d6def47b', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), h("ir-booking-editor-guest-form", { key: 'cd0d5d852915498594672e78afc808137b43ba1f' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.resolvedAgent) && (h("ir-service-assignee-select", { key: '7a6fd2e674ec3fe471cf3c4b2b986ee86f47f5b1', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
                setBookingDraft({ roomAssignee: e.detail });
            } }))));
    }
    static get is() { return "ir-booking-editor-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-form.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'PLUS_BOOKING'"
            },
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "guests": {},
            "totalCost": {},
            "assignee": {},
            "resolvedAgent": {}
        };
    }
    static get events() {
        return [{
                "method": "doReservation",
                "name": "doReservation",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "recalculateTotalCost",
                "method": "handleRecalculation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
