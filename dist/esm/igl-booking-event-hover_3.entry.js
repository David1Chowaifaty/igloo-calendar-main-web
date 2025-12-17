import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from './index-b3dce66a.js';
import { T as findCountry, o as canCheckIn, N as compareTime, O as createDateWithOffsetAndHour, f as formatAmount } from './utils-66c94f69.js';
import { E as EventsService } from './events.service-dfbc25aa.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-f4150353.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import { P as PropertyService } from './property.service-63dc6e59.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './index-a124d225.js';
import './booking.service-60d0a2c1.js';

const iglBookingEventHoverCss = ".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.balance_amount.sc-igl-booking-event-hover{color:var(--wa-color-danger-fill-loud);font-size:0.75rem}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5;overflow:hidden;max-width:100%;height:auto}.booking-event-hover__color-picker-trigger.sc-igl-booking-event-hover{all:unset;border:1px solid #e0e0e0;padding:0.25rem 0.25rem;border-radius:0.21rem;cursor:pointer}.events_btns.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem}.mx-01.sc-igl-booking-event-hover{--m:5px;margin-left:var(--m) !important;margin-right:var(--m) !important}.ota-notes.sc-igl-booking-event-hover{width:450px}.iglPopOver.sc-igl-booking-event-hover{position:absolute;background-color:var(--wa-color-surface-default);padding:10px;border:1px solid var(--wa-color-surface-border);border-radius:6px;left:var(--el-left, 50%);transform:translateX(-50%) translateY(10px);box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2);padding:var(--wa-space-l);background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.iglPopOver.infoBubble.sc-igl-booking-event-hover{min-width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:22px;height:12px;left:50%;transform:translateX(-50%);pointer-events:none;z-index:2}.bubblePointer.sc-igl-booking-event-hover::before,.bubblePointer.sc-igl-booking-event-hover::after{content:'';position:absolute;left:50%;transform:translateX(-50%);border-left:11px solid transparent;border-right:11px solid transparent}.bubblePointTop.sc-igl-booking-event-hover{bottom:-12px}.bubblePointTop.sc-igl-booking-event-hover::before{border-top:11px solid var(--wa-color-surface-border);top:0}.bubblePointTop.sc-igl-booking-event-hover::after{border-top:10px solid var(--wa-color-surface-default);top:1px}.bubblePointBottom.sc-igl-booking-event-hover{top:-12px}.bubblePointBottom.sc-igl-booking-event-hover::before{border-bottom:11px solid var(--wa-color-surface-border);bottom:0}.bubblePointBottom.sc-igl-booking-event-hover::after{border-bottom:10px solid var(--wa-color-surface-default);bottom:1px}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{height:1.5rem;width:1.5rem;margin-right:5px}";
const IglBookingEventHoverStyle0 = iglBookingEventHoverCss;

const IglBookingEventHover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.hideBubbleInfo = createEvent(this, "hideBubbleInfo", 7);
        this.deleteButton = createEvent(this, "deleteButton", 7);
        this.bookingCreated = createEvent(this, "bookingCreated", 7);
        this.showDialog = createEvent(this, "showDialog", 7);
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar", 7);
    }
    get element() { return getElement(this); }
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
        if (hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(hooks())) {
            this.hideButtons = true;
        }
        this.baseColor = this.getEventLegend().color;
        this.bookingColor = this.bookingEvent.ROOM_INFO?.calendar_extra ? this.bookingEvent.ROOM_INFO?.calendar_extra?.booking_color : null;
        this.canCheckInOrCheckout = hooks().isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && hooks().isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    handleBookingEventChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.canCheckInOrCheckout =
                hooks(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && hooks(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
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
        const now = hooks();
        if (this.bookingEvent.ROOM_INFO?.in_out?.code === '000' &&
            hooks().isSameOrAfter(new Date(this.bookingEvent.TO_DATE), 'days') &&
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
            channel_notes[maxVisible - 1] = { statement: `${channel_notes[maxVisible - 1].statement} <span style="color: #1e9ff2;">more...</span>` };
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
        const MFromDate = hooks(fromStr, 'YYYY-MM-DD', true).startOf('day');
        const MToDate = hooks(toStr, 'YYYY-MM-DD', true).startOf('day');
        if (!MFromDate.isValid() || !MToDate.isValid())
            return false;
        // Nights between (checkout is exclusive)
        const nights = MToDate.diff(MFromDate, 'days');
        // Must be at least 2 nights to make a meaningful split
        if (nights < 2)
            return false;
        // Don’t allow split if checkout is  tomorrow (< 1 day away)
        const today = hooks().startOf('day');
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
        return (h("div", { class: `iglPopOver d-flex flex-column newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left`, style: { gap: '0.5rem' } }, this.renderPointer(), shouldDisplayButtons ? (h(Fragment, null, h("ir-custom-button", { variant: "brand", appearance: "outlined", "data-testid": "bar_booking_btn", onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }, locales.entries.Lcz_CreateNewBooking), this.hasSplitBooking() && (
        // <div class="mb-1">
        h("ir-custom-button", { variant: "brand", appearance: "outlined", onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } }, locales.entries.Lcz_AssignUnitToExistingBooking)
        // </div>
        ))) : (h("p", { class: 'text-danger' }, locales.entries.Lcz_NoRatePlanDefined)), h("ir-custom-button", { appearance: "outlined", variant: "danger", onClickHandler: _ => {
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
        return (h(Host, { key: 'dc4999f0da822147da5b354badea26e0e93671ff' }, this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
};
IglBookingEventHover.style = IglBookingEventHoverStyle0;

const irDropdownCss = ".dropdown-menu.sc-ir-dropdown{z-index:1000;width:100%;max-height:300px;min-width:var(--ir-dropdown-menu-min-width, 11rem) !important;overflow-y:auto}.dropdown.nav-item.show.sc-ir-dropdown .dropdown-menu.sc-ir-dropdown{display:block}.caret-icon.sc-ir-dropdown{position:absolute;top:50%;transform:translateY(-55%);right:0.25rem;z-index:99999}.dropdown-trigger.sc-ir-dropdown{position:relative}.caret-icon.disabled.sc-ir-dropdown{opacity:0.5 !important;pointer-events:none !important;cursor:not-allowed !important}";
const IrDropdownStyle0 = irDropdownCss;

const IrDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionChange = createEvent(this, "optionChange", 7);
    }
    get el() { return getElement(this); }
    value;
    disabled = false;
    caret = true;
    isOpen = false;
    selectedOption;
    focusedIndex = -1;
    itemChildren = [];
    mo = null;
    documentClickHandler;
    isComponentConnected = true;
    updateQueued = false;
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `DropdownItem` object.
     */
    optionChange;
    componentWillLoad() {
        this.selectedOption = this.value;
        this.documentClickHandler = this.handleDocumentClick.bind(this);
        this.collectItemChildren();
        // Optimized mutation observer with debouncing
        this.mo = new MutationObserver(() => {
            if (!this.updateQueued) {
                this.updateQueued = true;
                requestAnimationFrame(() => {
                    if (this.isComponentConnected) {
                        this.collectItemChildren();
                        this.updateQueued = false;
                    }
                });
            }
        });
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        document.addEventListener('click', this.documentClickHandler, { passive: true });
        // Single RAF call instead of multiple setTimeouts
        requestAnimationFrame(() => {
            if (this.isComponentConnected) {
                this.updateItemElements();
                if (this.value) {
                    this.updateDropdownItemValue(this.value);
                }
            }
        });
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        document.removeEventListener('click', this.documentClickHandler);
        this.mo?.disconnect();
        this.mo = null;
    }
    handleDocumentKeyDown(event) {
        if (!this.isOpen || !this.isComponentConnected)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
        }
    }
    handleDropdownItemSelect(ev) {
        if (!this.isComponentConnected)
            return;
        ev.stopPropagation();
        this.selectOption(ev.detail);
        ev.target.setAttribute('aria-selected', 'true');
    }
    handleDropdownItemRegister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleDropdownItemUnregister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue && this.isComponentConnected) {
            this.updateDropdownItemValue(newValue);
        }
    }
    updateDropdownItemValue(value) {
        // Clear previous selections immediately
        this.itemChildren.forEach(el => el.removeAttribute('aria-selected'));
        // Set new selection
        const el = this.itemChildren.find(el => el.value === value);
        if (el) {
            el.setAttribute('aria-selected', 'true');
        }
    }
    getSelectedItemIndex() {
        if (!this.value)
            return -1;
        return this.itemChildren.findIndex(item => item.value === this.value);
    }
    openDropdown() {
        try {
            this.isOpen = true;
            // Initialize focus to the currently selected item
            this.focusedIndex = this.getSelectedItemIndex();
            // Immediate update instead of setTimeout
            this.updateItemElements();
            // Auto-scroll to selected item if it exists
            if (this.focusedIndex >= 0) {
                requestAnimationFrame(() => {
                    this.scrollToSelectedItem();
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeItemFocus();
    }
    handleDocumentClick = (event) => {
        if (!this.isComponentConnected || !this.el.contains(event.target)) {
            this.closeDropdown();
        }
    };
    collectItemChildren() {
        if (!this.isComponentConnected)
            return;
        const items = Array.from(this.el.querySelectorAll('ir-dropdown-item'));
        this.itemChildren = items;
        // Immediate update instead of setTimeout
        this.updateItemElements();
    }
    updateItemElements() {
        if (!this.isComponentConnected)
            return;
        // Use the collected item children directly
        this.itemChildren.forEach((el, index) => {
            el.setAttribute('data-slot-index', String(index));
            el.setAttribute('role', 'option');
            el.setAttribute('tabindex', '-1');
        });
    }
    removeItemFocus() {
        this.itemChildren.forEach(element => {
            element.classList.remove('focused', 'active');
            // Don't remove aria-selected as it indicates selection, not focus
        });
    }
    focusItemElement(index) {
        this.removeItemFocus();
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.classList.add('focused');
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    selectItemElement(index) {
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.click();
        }
    }
    scrollToSelectedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.itemChildren.length) {
            const selectedElement = this.itemChildren[this.focusedIndex];
            if (selectedElement) {
                selectedElement.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'nearest',
                });
            }
        }
    }
    handleKeyDown = (event) => {
        if (!this.isComponentConnected || this.disabled)
            return;
        const maxIndex = this.itemChildren.length - 1;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.openDropdown();
                    // After opening, if we have a selection, start from next item
                    if (this.focusedIndex >= 0 && this.focusedIndex < maxIndex) {
                        this.focusedIndex++;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === -1) {
                        // No selection, start from first item
                        this.focusedIndex = 0;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === maxIndex) {
                        // At last item, wrap to first
                        this.focusedIndex = 0;
                        this.focusItemElement(this.focusedIndex);
                    }
                }
                else if (maxIndex >= 0) {
                    this.focusedIndex = this.focusedIndex < maxIndex ? this.focusedIndex + 1 : 0;
                    this.focusItemElement(this.focusedIndex);
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (!this.isOpen) {
                    this.openDropdown();
                    // After opening, if we have a selection, start from previous item
                    if (this.focusedIndex > 0) {
                        this.focusedIndex--;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === -1) {
                        // No selection, start from last item
                        this.focusedIndex = maxIndex;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === 0) {
                        // At first item, wrap to last
                        this.focusedIndex = maxIndex;
                        this.focusItemElement(this.focusedIndex);
                    }
                }
                else if (maxIndex >= 0) {
                    this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : maxIndex;
                    this.focusItemElement(this.focusedIndex);
                }
                break;
            case 'Enter':
                event.preventDefault();
                if (this.isOpen && this.focusedIndex >= 0) {
                    this.selectItemElement(this.focusedIndex);
                }
                else if (!this.isOpen) {
                    this.openDropdown();
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.closeDropdown();
                break;
            case 'Tab':
                if (this.isOpen) {
                    this.closeDropdown();
                }
                break;
        }
    };
    selectOption(option) {
        this.selectedOption = option;
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
    }
    render() {
        return (h(Host, { key: 'd04498037b7bf82debaaefd6b918a0e2a12351d0', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '0532556a95b9da6557ba50586764bac7f9cb916d', onClick: () => {
                if (this.disabled)
                    return;
                if (this.isOpen) {
                    this.closeDropdown();
                }
                else {
                    this.openDropdown();
                }
            }, "aria-disabled": String(this.disabled), class: `dropdown-trigger ${this.disabled ? 'disabled' : ''}`, onKeyDown: this.handleKeyDown, tabindex: "0" }, h("slot", { key: '7733a1e729b2a2a88111ceb3f5f2491d10099492', name: "trigger" }), this.caret && (h("div", { key: '9477a045f962e5fc1594d97d6fe4ee31ed2c81c0', class: `caret-icon ${this.disabled ? 'disabled' : ''}` }, h("ir-icons", { key: 'a0d7a5480c0f88c87b2de35b42a7dd0a24162155', name: !this.isOpen ? 'angle-down' : 'angle-up' })))), h("div", { key: '614ccc076253b6161a338a94c4078679a218c166', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, h("slot", { key: '6b938d53948724f61b470a2d2ef45da13d128fe0' }))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
IrDropdown.style = IrDropdownStyle0;

const irDropdownItemCss = ".sc-ir-dropdown-item-h{display:block;cursor:pointer}[hidden].sc-ir-dropdown-item-h{display:none !important}.focused.sc-ir-dropdown-item-h{background:#f4f5fa !important}.active.sc-ir-dropdown-item-h,[aria-selected='true'].sc-ir-dropdown-item-h,.sc-ir-dropdown-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-dropdown-item-h{padding:0.25rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrDropdownItemStyle0 = irDropdownItemCss;

const IrDropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dropdownItemSelect = createEvent(this, "dropdownItemSelect", 7);
        this.dropdownItemRegister = createEvent(this, "dropdownItemRegister", 7);
        this.dropdownItemUnregister = createEvent(this, "dropdownItemUnregister", 7);
    }
    get el() { return getElement(this); }
    isComponentConnected = true;
    hasRegistered = false;
    /**
     * Required value for the option
     */
    value;
    /**
     * Optional label (falls back to textContent)
     */
    label;
    /**
     * Optional html_content (when you want rich content);
     * If omitted, the component will render its own slot content.
     */
    html_content;
    /**
     * When true, visually hide the item (used for filtering).
     */
    hidden = false;
    /**
     * Emit when this item is chosen. Parent listens and closes dropdown.
     */
    dropdownItemSelect;
    /**
     * Inform the parent this item exists (parent will index and manage focus)
     */
    dropdownItemRegister;
    /**
     * Inform the parent this item is gone
     */
    dropdownItemUnregister;
    componentDidLoad() {
        if (this.isComponentConnected && !this.hasRegistered) {
            this.hasRegistered = true;
            // Use RAF to ensure parent is ready
            requestAnimationFrame(() => {
                if (this.isComponentConnected) {
                    this.dropdownItemRegister.emit();
                }
            });
        }
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        // Only emit unregister if we previously registered and parent might still be connected
        if (this.hasRegistered && this.el.parentElement) {
            // Check if parent dropdown still exists in DOM
            const parentDropdown = this.el.closest('ir-dropdown');
            if (parentDropdown && document.contains(parentDropdown)) {
                this.dropdownItemUnregister.emit();
            }
        }
        this.hasRegistered = false;
    }
    async matchesQuery(query) {
        if (!this.isComponentConnected)
            return false;
        const q = query.toLowerCase();
        const hay = (this.label ?? this.el.textContent ?? '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        if (this.isComponentConnected) {
            this.hidden = next;
        }
    }
    handleClick = (event) => {
        event.stopPropagation();
        if (!this.isComponentConnected)
            return;
        this.dropdownItemSelect.emit(this.value);
    };
    render() {
        return (h(Host, { key: '0cf95a32aeab7c46bc07db7d411a5e7eee67833d', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true, 'hidden': this.hidden }, onClick: this.handleClick, "data-value": this.value }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
};
IrDropdownItem.style = IrDropdownItemStyle0;

export { IglBookingEventHover as igl_booking_event_hover, IrDropdown as ir_dropdown, IrDropdownItem as ir_dropdown_item };

//# sourceMappingURL=igl-booking-event-hover_3.entry.js.map