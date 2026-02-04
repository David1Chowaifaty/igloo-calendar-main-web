import booking_store, { bookedByGuestBaseData, calculateTotalRooms, getBookingTotalPrice, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { calculateDaysBetweenDates } from "../../../../utils/booking";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
export class IrBookingEditorForm {
    mode = 'PLUS_BOOKING';
    room;
    guests;
    totalCost = 0;
    doReservation;
    bookingService = new BookingService();
    totalRooms = 0;
    pickerEl;
    async componentWillLoad() {
        this.totalRooms = calculateTotalRooms();
        this.totalCost = this.totalRooms > 1 ? await getBookingTotalPrice() : 0;
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
        return (h("form", { key: '67b160c81ac7ff2bf6bfc65645f13f315b652d68', class: "booking-editor__guest-form", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.doReservation.emit(submitter?.value);
            } }, h("div", { key: '7206cb3acb1a27059bdaf8dd265ff493705dfe47', class: "booking-editor__header" }, h("ir-date-view", { key: '4be59493bd9c7e5e6b17fbc589e9451074f446df', class: "booking-editor__dates mr-1 flex-fill font-weight-bold font-medium-1", from_date: dates.checkIn, to_date: dates.checkOut, dateOption: "DD MMM YYYY" }), this.totalRooms > 1 && (h("div", { key: '3a868523e8ad5db82ca949870f0795f2ec31bd1c', class: "booking-editor__total mt-1 mt-md-0 text-right" }, h("span", { key: '1a5151f3104c6feb117575c639065302accf3a39', class: "booking-editor__total-label" }, locales.entries.Lcz_TotalPrice), ' ', h("span", { key: 'c01fd6125eef1f8ee85e1d5a7bb16e196bda314a', class: "booking-editor__total-amount font-weight-bold font-medium-1" }, formatAmount(calendar_data.property.currency.symbol, this.totalCost))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        })), ['BAR_BOOKING', 'PLUS_BOOKING'].includes(this.mode) && (h("section", { key: '7fd26ec3c31b1a87303f8ddc9303ec5cacfaa81d', class: 'mt-2' }, h("div", { key: '0b3160bddf9895c4145623cead3dc9cb6e50a064', class: "booking-editor__booked-by booking-editor__booked-by-header" }, h("h4", { key: '6835cdf1c47c6039f747829fdda072ef94d39c8b', class: "booking-editor__heading booking-editor__booked-by-title" }, "Booked by"), h("ir-picker", { key: 'b8c1ed679bf312ae8c57e714ccecdbb5441f32f2', class: "booking-editor__booked-by-picker", appearance: "filled",
            // placeholder="Search customer by email, name or company name"
            placeholder: "Search customer by email or name", withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), mode: "select-async", ref: el => (this.pickerEl = el), "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), booking_store.bookedByGuest.id !== -1 && (h("ir-custom-button", { key: 'c910e8cd9c4307d30abdf1f18881ea4afa97ab8c', onClickHandler: () => {
                updateBookedByGuest(bookedByGuestBaseData);
                this.pickerEl.clearInput();
            }, variant: "brand" }, "Clear user"))), h("ir-booking-editor-guest-form", { key: 'eb382a04449b11d9baf745c9b1c6f05939d10195' })))));
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
            }
        };
    }
    static get states() {
        return {
            "guests": {},
            "totalCost": {}
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
