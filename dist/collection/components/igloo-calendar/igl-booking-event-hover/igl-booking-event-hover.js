import { Host, h, Fragment } from "@stencil/core";
import { canCheckIn, findCountry, formatAmount } from "../../../utils/utils";
import { EventsService } from "../../../services/events.service";
import moment from "moment";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
import { compareTime, createDateWithOffsetAndHour } from "../../../utils/booking";
import { PropertyService } from "../../../services/property.service";
//import { transformNewBLockedRooms } from '../../../utils/booking';
export class IglBookingEventHover {
    element;
    bookingEvent;
    bubbleInfoTop = false;
    currency;
    countries;
    is_vacation_rental = false;
    isLoading;
    shouldHideUnassignUnit = false;
    canCheckInOrCheckout;
    bookingColor = null;
    showBookingPopup;
    hideBubbleInfo;
    deleteButton;
    bookingCreated;
    showDialog;
    openCalendarSidebar;
    eventService = new EventsService();
    hideButtons = false;
    propertyService = new PropertyService();
    baseColor;
    componentWillLoad() {
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment())) {
            this.hideButtons = true;
        }
        this.baseColor = this.getEventLegend().color;
        this.bookingColor = this.bookingEvent.ROOM_INFO?.calendar_extra ? this.bookingEvent.ROOM_INFO?.calendar_extra?.booking_color : null;
        this.canCheckInOrCheckout = moment().isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment().isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    handleBookingEventChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.canCheckInOrCheckout =
                moment(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    handleListenKeyDown(e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.hideBubble();
        }
        else
            return;
    }
    getEventLegend() {
        let status = this.bookingEvent?.legendData.statusId[this.bookingEvent.STATUS];
        return {
            ...this.bookingEvent?.legendData[status.id],
            ...status,
        };
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    hideBubble() {
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    getTotalOccupants() {
        const { CHILDREN_COUNT, ADULTS_COUNT } = this.bookingEvent;
        if (CHILDREN_COUNT === 0) {
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales.entries.Lcz_AdultsCaption.toLowerCase() : locales.entries.Lcz_Single_Adult?.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales.entries.Lcz_AdultsCaption.toLowerCase() : locales.entries.Lcz_Single_Adult?.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? locales.entries.Lcz_ChildCaption.toLowerCase() : locales.entries.Lcz_Single_Child?.toLowerCase()}`;
    }
    getPhoneNumber() {
        return this.bookingEvent.PHONE;
    }
    getCountry() {
        return findCountry(this.bookingEvent.COUNTRY, this.countries).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return findCountry(this.bookingEvent.COUNTRY, this.countries).phone_prefix;
    }
    renderPhone() {
        return this.bookingEvent.COUNTRY ? `${this.bookingEvent.is_direct ? this.getPhoneCode() + '-' : ''}${this.getPhoneNumber()} - ${this.getCountry()}` : this.getPhoneNumber();
    }
    getInternalNote() {
        return this.bookingEvent.INTERNAL_NOTE;
    }
    getTotalPrice() {
        return this.bookingEvent.TOTAL_PRICE;
    }
    getArrivalTime() {
        return this.bookingEvent.ARRIVAL_TIME;
    }
    getRatePlan() {
        if (!this.bookingEvent) {
            return;
        }
        const currentRoom = this.bookingEvent?.booking?.rooms?.find(room => room.assigned_units_pool === this.bookingEvent.ID);
        if (!currentRoom) {
            console.warn(`Couldn't find room with pool ${this.bookingEvent.ID}`);
            return null;
        }
        let str = '';
        str += currentRoom.rateplan['short_name'];
        if (currentRoom.rateplan['is_non_refundable']) {
            str += ` - ${locales.entries.Lcz_NonRefundable}`;
        }
        return str;
    }
    getEntryDate() {
        return this.bookingEvent.ENTRY_DATE;
    }
    isNewBooking() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isCheckedIn() {
        return this.bookingEvent.STATUS === 'IN-HOUSE';
    }
    isBlockedDateEvent() {
        return this.bookingEvent.STATUS === 'BLOCKED' || this.bookingEvent.STATUS === 'BLOCKED-WITH-DATES';
    }
    hasSplitBooking() {
        return this.bookingEvent.hasOwnProperty('splitBookingEvents') && this.bookingEvent.splitBookingEvents;
    }
    canCheckIn() {
        return canCheckIn({
            from_date: this.bookingEvent.FROM_DATE,
            to_date: this.bookingEvent.TO_DATE,
            isCheckedIn: this.isCheckedIn(),
        });
    }
    canCheckOut() {
        if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (this.isCheckedIn()) {
            return true;
        }
        const now = moment();
        if (this.bookingEvent.ROOM_INFO?.in_out?.code === '000' &&
            moment().isSameOrAfter(new Date(this.bookingEvent.TO_DATE), 'days') &&
            compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour))) {
            return true;
        }
        return false;
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookingEvent = { ...this.bookingEvent, ...opt.data };
    }
    handleEditBooking() {
        this.bookingEvent.TITLE = locales.entries.Lcz_EditBookingFor;
        this.handleBookingOption('EDIT_BOOKING');
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    handleAddRoom() {
        let fromDate = new Date(this.bookingEvent.FROM_DATE);
        fromDate.setHours(0, 0, 0, 0);
        let from_date_str = this.getStringDateFormat(fromDate);
        let toDate = new Date(this.bookingEvent.TO_DATE);
        //toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        let to_date_str = this.getStringDateFormat(toDate);
        let eventData = {
            ID: '',
            NAME: '',
            BOOKING_NUMBER: this.bookingEvent.BOOKING_NUMBER,
            FROM_DATE: from_date_str, // "2023-07-09",
            TO_DATE: to_date_str, // "2023-07-11",
            roomsInfo: this.bookingEvent.roomsInfo,
            ARRIVAL: this.bookingEvent.ARRIVAL,
            ADD_ROOM_TO_BOOKING: this.bookingEvent.ID,
            TITLE: 'Add Room to #' + this.bookingEvent.BOOKING_NUMBER,
            event_type: 'ADD_ROOM',
            ROOMS: this.bookingEvent.ROOMS,
            GUEST: this.bookingEvent.GUEST,
            message: this.bookingEvent.NOTES,
            SOURCE: this.bookingEvent.SOURCE,
            booking: this.bookingEvent?.base_booking,
            defaultDateRange: {
                fromDate: fromDate,
                fromDateStr: '',
                toDate: toDate,
                toDateStr: '',
                dateDifference: 0,
                editabled: true,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        const room = this.bookingEvent.booking.rooms.find(r => r.identifier === this.bookingEvent.IDENTIFIER);
        const { adult_nbr, children_nbr, infant_nbr } = this.bookingEvent.ROOM_INFO.occupancy;
        const unitName = room ? room.unit.name : this.bookingEvent.ROOM_INFO.unit?.name ?? '';
        this.showDialog.emit({
            reason: 'checkin',
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: unitName,
            roomUnit: '',
            sidebarPayload: {
                identifier: this.bookingEvent.IDENTIFIER,
                bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                checkin: false,
                roomName: unitName,
                sharing_persons: this.bookingEvent.ROOM_INFO.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    handleCustomerCheckOut() {
        this.showDialog.emit({
            reason: 'checkout',
            booking: this.bookingEvent.booking,
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: '',
            roomUnit: '',
        });
    }
    handleDeleteEvent() {
        this.hideBubble();
        this.deleteButton.emit(this.bookingEvent.POOL);
        console.log('Delete Event');
    }
    async handleUpdateBlockedDates() {
        try {
            this.isLoading = 'update';
            setTimeout(() => {
                this.hideBubble();
            }, 50);
            await this.eventService.updateBlockedEvent(this.bookingEvent);
            this.isLoading = '';
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    handleConvertBlockedDateToBooking() {
        this.handleBookingOption('BAR_BOOKING');
    }
    getRoomInfo() {
        const roomIdToFind = +this.bookingEvent.PR_ID;
        let selectedRoom = {};
        for (const room of this.bookingEvent.roomsInfo) {
            for (const physicalRoom of room.physicalrooms) {
                if (roomIdToFind === physicalRoom.id) {
                    selectedRoom.CATEGORY = room.name;
                    selectedRoom.ROOM_NAME = physicalRoom.name;
                    selectedRoom.ROOMS_INFO = room;
                    return selectedRoom;
                }
            }
        }
        return selectedRoom;
    }
    renderTitle(eventType, roomInfo) {
        switch (eventType) {
            case 'EDIT_BOOKING':
                return `${locales.entries.Lcz_EditBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;
            case 'SPLIT_BOOKING':
                return locales.entries.Lcz_Adding + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${locales.entries.Lcz_NewBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
        }
    }
    handleBookingOption(eventType, roomData = null) {
        const roomInfo = this.getRoomInfo();
        let data = roomData ? roomData : this.bookingEvent;
        data.event_type = eventType;
        data.TITLE = this.renderTitle(eventType, roomInfo);
        if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
            data.roomsInfo = [roomInfo.ROOMS_INFO];
        }
        if (eventType === 'BAR_BOOKING' && this.bookingEvent.STATUS !== 'TEMP-EVENT') {
            const { FROM_DATE, TO_DATE, PR_ID, RELEASE_AFTER_HOURS, ENTRY_DATE, OPTIONAL_REASON, ENTRY_MINUTE, ENTRY_HOUR, STATUS_CODE } = this.bookingEvent;
            data.block_exposed_unit_props = {
                from_date: FROM_DATE,
                to_date: TO_DATE,
                NOTES: OPTIONAL_REASON,
                pr_id: PR_ID,
                STAY_STATUS_CODE: STATUS_CODE,
                DESCRIPTION: RELEASE_AFTER_HOURS,
                BLOCKED_TILL_DATE: ENTRY_DATE,
                BLOCKED_TILL_HOUR: ENTRY_HOUR,
                BLOCKED_TILL_MINUTE: ENTRY_MINUTE,
            };
            this.handleDeleteEvent();
        }
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                ...data,
                //roomsInfo: [roomInfo.ROOMS_INFO],
            },
        });
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    getOTANotes(maxVisible = 3) {
        if (!this.bookingEvent.ota_notes || this.bookingEvent.ota_notes?.length === 0) {
            return null;
        }
        const channel_notes = [...this.bookingEvent.ota_notes];
        const separator = '<br>- ';
        if (channel_notes.length > maxVisible) {
            channel_notes[maxVisible - 1] = { statement: `${channel_notes[maxVisible - 1].statement} <span>more...</span>` };
        }
        return channel_notes
            .slice(0, maxVisible)
            .map(o => `${separator}${o.statement}`)
            .join('');
    }
    /**
     * Determines whether the current booking is eligible to be split.
     *
     * Rules enforced:
     *  1) Minimum stay — there must be at least 2 nights between `from_date` (check-in) and `to_date` (check-out).
     *     (Checkout is treated as exclusive; nights = `to_date - from_date` in whole days.)
     *  2) Proximity to checkout — disallow splitting when checkout is tomorrow or earlier
     *     (i.e., `to_date - today < 1 day` when all are normalized to start of day).
     *
     * @returns {boolean} `true` if the booking can be split under the rules above; otherwise `false`.
     *
     * @example
     * // Given defaultDates: { from_date: '2025-10-10', to_date: '2025-10-13' }
     * // nights = 3, and if checkout is more than a day away, returns true.
     * const canSplit = this.canSplitBooking(); // -> true
     */
    canSplitBooking() {
        const fromStr = this.bookingEvent?.defaultDates?.from_date;
        const toStr = this.bookingEvent?.defaultDates?.to_date;
        const MFromDate = moment(fromStr, 'YYYY-MM-DD', true).startOf('day');
        const MToDate = moment(toStr, 'YYYY-MM-DD', true).startOf('day');
        if (!MFromDate.isValid() || !MToDate.isValid())
            return false;
        // Nights between (checkout is exclusive)
        const nights = MToDate.diff(MFromDate, 'days');
        // Must be at least 2 nights to make a meaningful split
        if (nights < 2)
            return false;
        // Don’t allow split if checkout is  tomorrow (< 1 day away)
        const today = moment().startOf('day');
        if (MToDate.diff(today, 'days') < 1)
            return false;
        return true;
    }
    getInfoElement() {
        return (h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, this.renderPointer(), h("div", { class: `d-flex p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, h("div", { class: "px-0  font-weight-bold font-medium-1 d-flex align-items-center", style: { flex: '1 1 0%' } }, h("img", { src: this.bookingEvent?.origin?.Icon, alt: this.bookingEvent?.origin?.Label, class: 'icon-image' }), h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), h("div", { class: "pr-0  text-right d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-dropdown", { caret: false, onOptionChange: async (e) => {
                const newBookingColor = e.detail === 'none' ? null : calendar_data.property.calendar_extra?.booking_colors.find(c => c.color === e.detail);
                await this.propertyService.setRoomCalendarExtra({
                    property_id: calendar_data.property.id,
                    room_identifier: this.bookingEvent.IDENTIFIER,
                    value: JSON.stringify({
                        booking_color: newBookingColor,
                    }),
                });
                this.bookingColor = newBookingColor;
            }, style: { '--ir-dropdown-menu-min-width': 'fit-content', 'width': '1.5rem' } }, h("button", { class: "booking-event-hover__color-picker-trigger", slot: "trigger" }, this.bookingColor ? (h("div", { style: { height: '1rem', width: '1rem', background: this.bookingColor?.color, borderRadius: '0.21rem' } })) : (h("ir-icons", { class: "p-0 m-0 d-flex align-items-center", style: {
                '--icon-size': '1rem',
                'height': '1rem',
                'width': '1rem',
                'background': this.baseColor,
                'color': 'white',
                'borderRadius': '0.21rem',
                'padding': '0.25rem',
            }, name: "ban" }))), h("ir-dropdown-item", { value: "none" }, h("ir-icons", { class: "p-0 m-0 d-flex align-items-center", style: { '--icon-size': '1rem', 'height': '1rem', 'width': '1rem' }, name: "ban" })), calendar_data.property.calendar_extra?.booking_colors.map(s => (h("ir-dropdown-item", { value: s.color }, h("div", { style: { height: '1rem', width: '1rem', borderRadius: '0.21rem', background: s.color } }))))), formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales.entries.Lcz_Balance, ": ", formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0 pr-0 col-12" }, h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.bookingEvent.NAME && h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Guest name:`, content: this.bookingEvent.NAME }), this.getArrivalTime() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.DEPARTURE_TIME?.code !== '000' && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Departure time:`, content: this.bookingEvent.DEPARTURE_TIME?.description })), this.bookingEvent.PRIVATE_NOTE && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })), h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_ChannelNotes}:`, display: "inline", content: this.getOTANotes(), renderContentAsHtml: true }), this.getInternalNote() && h("ir-label", { labelText: `${locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, h("ir-custom-button", { style: { width: '100%' }, variant: "brand", onClickHandler: () => this.handleEditBooking() }, locales.entries.Lcz_Edit), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleAddRoom() }, locales.entries.Lcz_AddRoom)), this.canSplitBooking() && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleSplitBooking() }, "Split")), this.canCheckIn() && (h("ir-custom-button", { style: { width: '100%' }, onClickHandler: () => this.handleCustomerCheckIn(), variant: "brand", appearance: "outlined" }, locales.entries.Lcz_CheckIn)), this.canCheckOut() && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleCustomerCheckOut() }, locales.entries.Lcz_CheckOut)), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (h("ir-custom-button", { variant: "danger", style: { width: '100%' }, appearance: "outlined", onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }, locales.entries.Lcz_Unassign))))));
    }
    handleSplitBooking() {
        this.hideBubble();
        this.openCalendarSidebar.emit({ type: 'split', payload: { booking: this.bookingEvent.base_booking, identifier: this.bookingEvent.IDENTIFIER } });
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (h("div", { class: `iglPopOver d-flex flex-column newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left`, style: { gap: '0.5rem' } }, this.renderPointer(), shouldDisplayButtons ? (h(Fragment, null, h("ir-custom-button", { variant: "brand", appearance: "accent", "data-testid": "bar_booking_btn", onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }, locales.entries.Lcz_CreateNewBooking), this.hasSplitBooking() && (
        // <div class="mb-1">
        h("ir-custom-button", { variant: "neutral", appearance: "accent", onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } }, locales.entries.Lcz_AssignUnitToExistingBooking)
        // </div>
        ))) : (h("p", { class: 'text-danger' }, locales.entries.Lcz_NoRatePlanDefined)), h("ir-custom-button", { appearance: "accent", variant: "danger", onClickHandler: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } }, locales.entries.Lcz_Blockdates)));
    }
    getBlockedView() {
        console.log('booking event', this.bookingEvent);
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, this.renderPointer(), h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: this.bookingEvent.defaultDates.from_date, toDate: this.bookingEvent.defaultDates.to_date, entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, h("ir-custom-button", { disabled: this.isLoading === 'update', onClickHandler: _ => {
                this.handleUpdateBlockedDates();
            }, variant: "brand", loading: this.isLoading === 'update', style: { width: '100%' } }, locales.entries.Lcz_Update), h("ir-custom-button", { variant: "brand", appearance: "outlined", style: { width: '100%' }, onClickHandler: () => {
                this.handleConvertBlockedDateToBooking();
            } }, locales.entries.Lcz_ConvertSplitBooking), h("ir-custom-button", { variant: "danger", style: { width: '100%' }, appearance: "outlined", onClickHandler: _ => {
                this.handleDeleteEvent();
            } }, locales.entries.Lcz_Delete)))));
    }
    renderPointer() {
        return h("div", { class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` });
    }
    render() {
        return (h(Host, { key: 'f36e9a7f7a69be49e65fa6957569581adcba7fcd' }, this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    static get is() { return "igl-booking-event-hover"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-booking-event-hover.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-booking-event-hover.css"]
        };
    }
    static get properties() {
        return {
            "bookingEvent": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
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
            "bubbleInfoTop": {
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
                "attribute": "bubble-info-top",
                "reflect": false,
                "defaultValue": "false"
            },
            "currency": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "currency",
                "reflect": false
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
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
            "is_vacation_rental": {
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
                "attribute": "is_vacation_rental",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "shouldHideUnassignUnit": {},
            "canCheckInOrCheckout": {},
            "bookingColor": {}
        };
    }
    static get events() {
        return [{
                "method": "showBookingPopup",
                "name": "showBookingPopup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "hideBubbleInfo",
                "name": "hideBubbleInfo",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "deleteButton",
                "name": "deleteButton",
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
            }, {
                "method": "bookingCreated",
                "name": "bookingCreated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ pool?: string; data: any[] }",
                    "resolved": "{ pool?: string; data: any[]; }",
                    "references": {}
                }
            }, {
                "method": "showDialog",
                "name": "showDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarModalEvent",
                    "resolved": "{ reason: \"checkin\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; sidebarPayload: RoomGuestsPayload & { bookingNumber: string; }; } | { reason: \"checkout\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; booking: Booking; } | { reason: \"reallocate\"; } & IReallocationPayload | { reason: \"stretch\"; } & IRoomNightsData",
                    "references": {
                        "CalendarModalEvent": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::CalendarModalEvent"
                        }
                    }
                }
            }, {
                "method": "openCalendarSidebar",
                "name": "openCalendarSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarSidebarState",
                    "resolved": "{ type: \"split\" | \"room-guests\" | \"booking-details\" | \"add-days\" | \"bulk-blocks\"; payload: any; }",
                    "references": {
                        "CalendarSidebarState": {
                            "location": "import",
                            "path": "../igloo-calendar",
                            "id": "src/components/igloo-calendar/igloo-calendar.tsx::CalendarSidebarState"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "bookingEvent",
                "methodName": "handleBookingEventChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleListenKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-booking-event-hover.js.map
