import booking_store, { bookedByGuestBaseData, calculateTotalRooms, getBookingTotalPrice, setBookingDraft, syncFirstRoomGuestName, updateBookedByGuest, } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import { calculateDaysBetweenDates } from "../../../../utils/booking";
import { AgentsService } from "../../../../services/agents/agents.service";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { isAgentMode } from "../../../ir-booking-details/functions";
import { IRBookingEditorService } from "../ir-booking-editor.service";
import { t } from "../../../../services/locale/t";
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
    render() {
        const { dates, dayUse } = booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (h("form", { key: 'b0677085375270b61a664aeeac3e2e7d1f04ecfd', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, !dayUse && (h("div", { key: 'f364995aa15646a965bb9b82ac39e97ceaa36b4a', class: "booking-editor__header" }, h("ir-date-view", { key: '7a3c84342c3e6c6f8f39fb770bdd487f860cc963', class: "booking-editor__dates", from_date: dates.checkIn, to_date: dates.checkOut }), this.totalRooms > 1 && (h("div", { key: 'c2b0aaca7020c518f822d51f48b0fb2f06edff21', class: "booking-editor__total" }, h("span", { key: '1ea7520bfbca907e6f5931a40b16c4a83ab6c90d', class: "booking-editor__total-label" }, t('Lcz_TotalPrice', { fallback: 'Total price' })), ' ', h("span", { key: '3cc76f85ce73b26ef66eb85cb44f2be870fa42fc', class: "booking-editor__total-amount" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost)))))), dayUse && h("ir-booking-editor-day-use", { key: '98736fbb33c0e46acbc60fb617c36e97ed21675b' }), !dayUse &&
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
            })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: '6a1d1f5ccf14c4d76ed57e18e9dea222c7f47cbf', class: "booking-editor__booked-by-section" }, h("div", { key: '85e9eed447c323ab9c24d666d81d7932a11d375c', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: '4ab38c4203e2cca9f844d6b92bc204c5f7cff290', class: "booking-editor__heading booking-editor__booked-by-title" }, t('Lcz_BookedBy', { fallback: 'Booked by' })), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder={t('Lcz_SearchCustomerPlaceholder', { fallback: 'Search customer by email, name or company name' })}
            placeholder: t('Lcz_SearchCustomerByEmailOrName', { fallback: 'Search customer by email or name' }), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, t('Lcz_ClearUser', { fallback: 'Clear user' })))))), h("ir-booking-editor-guest-form", { key: 'e21ca10b7c55c689c7700e83f4744521de42235f' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.resolvedAgent) && (h("ir-service-assignee-select", { key: '4729f75fb19ccef78aa415173fde06c75c48cac7', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
