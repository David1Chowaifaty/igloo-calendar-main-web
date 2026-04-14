import booking_store, { bookedByGuestBaseData, calculateTotalRooms, getBookingTotalPrice, setBookingDraft, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import { calculateDaysBetweenDates } from "../../../../utils/booking";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { isAgentMode } from "../../../ir-booking-details/functions";
import { IRBookingEditorService } from "../ir-booking-editor.service";
export class IrBookingEditorForm {
    mode = 'PLUS_BOOKING';
    room;
    booking;
    guests;
    totalCost = 0;
    assignee = 'guest';
    doReservation;
    bookingService = new BookingService();
    bookingEditorService;
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
        this.bookingEditorService = new IRBookingEditorService(this.mode);
        if (this.bookingEditorService.isEventType(['ADD_ROOM', 'SPLIT_BOOKING']) && isAgentMode(this.booking)) {
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
    }
    render() {
        const { dates } = booking_store.bookingDraft;
        let hasBookedByGuestController = false;
        return (h("form", { key: 'ea0f53319575e20fa6d54d3179e9278fc66c5ce6', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, h("div", { key: 'c536b9e6adc7c48eb446fe2fc619e5f187a8c3ea', class: "booking-editor__header" }, h("ir-date-view", { key: '6d03dcbfaecafc8d64c3efab722ff81b407f21f5', class: "booking-editor__dates mr-1 flex-fill font-weight-bold font-medium-1", from_date: dates.checkIn, to_date: dates.checkOut, dateOption: "DD MMM YYYY" }), this.totalRooms > 1 && (h("div", { key: 'd48072350aa429382ce729d38d098f5acca4a89a', class: "booking-editor__total mt-1 mt-md-0 text-right" }, h("span", { key: 'cc71a86af459e824796f2397c1e4c6dfeffa124d', class: "booking-editor__total-label" }, locales.entries.Lcz_TotalPrice), ' ', h("span", { key: '4dda6baffd571f9c7a7ffb902215d1c8f3e54358', class: "booking-editor__total-amount font-weight-bold font-medium-1" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        })), this.bookingEditorService.isEventType(['BAR_BOOKING', 'PLUS_BOOKING']) && (h("section", { key: 'dd203c94d22b0e48665eb55d56760a460a5bef04', class: 'mt-2' }, h("div", { key: 'aa021792868f13ddb11e2be8806f7f9c46cdf22e', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: 'bd90466a15ab702160a365baffc9645ca4e8bf74', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), booking_store.bookingDraft?.agent ? (h("span", null, booking_store.bookingDraft?.agent.name)) : (h(Fragment, null, h("ir-picker", { class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))))), h("ir-booking-editor-guest-form", { key: '626c88a57f811d16a719621848ad2b7eb7aee2ea' }))), this.bookingEditorService.isEventType(['SPLIT_BOOKING', 'ADD_ROOM']) && isAgentMode(this.booking) && (h("ir-service-assignee-select", { key: '7824dbc5e881837acdc56f573f5be785d92d38b1', style: { maxWidth: '500px' }, agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: e => {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": false,
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
                            "id": "src/models/booking.dto.ts::Room"
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
                            "id": "src/models/booking.dto.ts::Booking"
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
            "assignee": {}
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
//# sourceMappingURL=ir-booking-editor-form.js.map
