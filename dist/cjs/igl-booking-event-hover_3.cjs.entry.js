'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-9892967b.js');
const events_service = require('./events.service-62433a31.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
const property_service = require('./property.service-469c5c9c.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./index-6299b0f7.js');
require('./booking.service-53a86e90.js');

const iglBookingEventHoverCss = ".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.balance_amount.sc-igl-booking-event-hover{color:#ff4961;font-size:0.75rem}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5;overflow:hidden;max-width:100%;height:auto}.booking-event-hover__color-picker-trigger.sc-igl-booking-event-hover{all:unset;border:1px solid #e0e0e0;padding:0.25rem 0.25rem;border-radius:0.21rem;cursor:pointer}.events_btns.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem}.mx-01.sc-igl-booking-event-hover{--m:5px;margin-left:var(--m) !important;margin-right:var(--m) !important}.pointerContainerTop.sc-igl-booking-event-hover{top:-26px}.pointerContainer.sc-igl-booking-event-hover{position:absolute;height:10px;width:350px;left:var(--el-left, 50%);transform:translateX(-50%)}.ota-notes.sc-igl-booking-event-hover{width:450px}.iglPopOver.sc-igl-booking-event-hover{position:absolute;background-color:var(--wa-color-surface-default);padding:10px;border:1px solid var(--wa-color-surface-border);border-radius:6px;left:var(--el-left, 50%);transform:translateX(-50%) translateY(10px);box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2);padding:var(--wa-space-l);background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.iglPopOver.infoBubble.sc-igl-booking-event-hover{min-width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:0;height:0;left:50%;border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-50%, 0px);box-shadow:var(--wa-shadow-l)}.bubblePointTop.sc-igl-booking-event-hover{border-top:10px solid var(--wa-color-surface-default)}.bubblePointBottom.sc-igl-booking-event-hover{border-bottom:10px solid var(--wa-color-surface-default)}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{height:1.5rem;width:1.5rem;margin-right:5px}";
const IglBookingEventHoverStyle0 = iglBookingEventHoverCss;

const IglBookingEventHover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.deleteButton = index.createEvent(this, "deleteButton", 7);
        this.bookingCreated = index.createEvent(this, "bookingCreated", 7);
        this.showDialog = index.createEvent(this, "showDialog", 7);
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar", 7);
    }
    get element() { return index.getElement(this); }
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
    eventService = new events_service.EventsService();
    hideButtons = false;
    propertyService = new property_service.PropertyService();
    baseColor;
    componentWillLoad() {
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment.hooks())) {
            this.hideButtons = true;
        }
        this.baseColor = this.getEventLegend().color;
        this.bookingColor = this.bookingEvent.ROOM_INFO?.calendar_extra ? this.bookingEvent.ROOM_INFO?.calendar_extra?.booking_color : null;
        this.canCheckInOrCheckout = moment.hooks().isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment.hooks().isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    handleBookingEventChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.canCheckInOrCheckout =
                moment.hooks(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment.hooks(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
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
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : locales_store.locales.entries.Lcz_Single_Adult?.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : locales_store.locales.entries.Lcz_Single_Adult?.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? locales_store.locales.entries.Lcz_ChildCaption.toLowerCase() : locales_store.locales.entries.Lcz_Single_Child?.toLowerCase()}`;
    }
    getPhoneNumber() {
        return this.bookingEvent.PHONE;
    }
    getCountry() {
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countries).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countries).phone_prefix;
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
            str += ` - ${locales_store.locales.entries.Lcz_NonRefundable}`;
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
        return utils.canCheckIn({
            from_date: this.bookingEvent.FROM_DATE,
            to_date: this.bookingEvent.TO_DATE,
            isCheckedIn: this.isCheckedIn(),
        });
    }
    canCheckOut() {
        if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (this.isCheckedIn()) {
            return true;
        }
        const now = moment.hooks();
        if (this.bookingEvent.ROOM_INFO?.in_out?.code === '000' &&
            moment.hooks().isSameOrAfter(new Date(this.bookingEvent.TO_DATE), 'days') &&
            utils.compareTime(now.toDate(), utils.createDateWithOffsetAndHour(calendarData.calendar_data.checkin_checkout_hours?.offset, calendarData.calendar_data.checkin_checkout_hours?.hour))) {
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
        this.bookingEvent.TITLE = locales_store.locales.entries.Lcz_EditBookingFor;
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
        const { adult_nbr, children_nbr, infant_nbr } = this.bookingEvent.ROOM_INFO.occupancy;
        this.showDialog.emit({
            reason: 'checkin',
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: '',
            roomUnit: '',
            sidebarPayload: {
                identifier: this.bookingEvent.IDENTIFIER,
                bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                checkin: false,
                roomName: this.bookingEvent.ROOM_INFO.unit?.name ?? '',
                sharing_persons: this.bookingEvent.ROOM_INFO.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    handleCustomerCheckOut() {
        this.showDialog.emit({ reason: 'checkout', bookingNumber: this.bookingEvent.BOOKING_NUMBER, roomIdentifier: this.bookingEvent.IDENTIFIER, roomName: '', roomUnit: '' });
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
                return `${locales_store.locales.entries.Lcz_EditBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;
            case 'SPLIT_BOOKING':
                return locales_store.locales.entries.Lcz_Adding + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${locales_store.locales.entries.Lcz_NewBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
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
        const MFromDate = moment.hooks(fromStr, 'YYYY-MM-DD', true).startOf('day');
        const MToDate = moment.hooks(toStr, 'YYYY-MM-DD', true).startOf('day');
        if (!MFromDate.isValid() || !MToDate.isValid())
            return false;
        // Nights between (checkout is exclusive)
        const nights = MToDate.diff(MFromDate, 'days');
        // Must be at least 2 nights to make a meaningful split
        if (nights < 2)
            return false;
        // Don’t allow split if checkout is  tomorrow (< 1 day away)
        const today = moment.hooks().startOf('day');
        if (MToDate.diff(today, 'days') < 1)
            return false;
        return true;
    }
    getInfoElement() {
        return (index.h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("div", { class: `d-flex p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, index.h("div", { class: "px-0  font-weight-bold font-medium-1 d-flex align-items-center", style: { flex: '1 1 0%' } }, index.h("img", { src: this.bookingEvent?.origin?.Icon, alt: this.bookingEvent?.origin?.Label, class: 'icon-image' }), index.h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), index.h("div", { class: "pr-0  text-right d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("ir-dropdown", { caret: false, onOptionChange: async (e) => {
                const newBookingColor = e.detail === 'none' ? null : calendarData.calendar_data.property.calendar_extra?.booking_colors.find(c => c.color === e.detail);
                await this.propertyService.setRoomCalendarExtra({
                    property_id: calendarData.calendar_data.property.id,
                    room_identifier: this.bookingEvent.IDENTIFIER,
                    value: JSON.stringify({
                        booking_color: newBookingColor,
                    }),
                });
                this.bookingColor = newBookingColor;
            }, style: { '--ir-dropdown-menu-min-width': 'fit-content', 'width': '1.5rem' } }, index.h("button", { class: "booking-event-hover__color-picker-trigger", slot: "trigger" }, this.bookingColor ? (index.h("div", { style: { height: '1rem', width: '1rem', background: this.bookingColor?.color, borderRadius: '0.21rem' } })) : (index.h("ir-icons", { class: "p-0 m-0 d-flex align-items-center", style: {
                '--icon-size': '1rem',
                'height': '1rem',
                'width': '1rem',
                'background': this.baseColor,
                'color': 'white',
                'borderRadius': '0.21rem',
                'padding': '0.25rem',
            }, name: "ban" }))), index.h("ir-dropdown-item", { value: "none" }, index.h("ir-icons", { class: "p-0 m-0 d-flex align-items-center", style: { '--icon-size': '1rem', 'height': '1rem', 'width': '1rem' }, name: "ban" })), calendarData.calendar_data.property.calendar_extra?.booking_colors.map(s => (index.h("ir-dropdown-item", { value: s.color }, index.h("div", { style: { height: '1rem', width: '1rem', borderRadius: '0.21rem', background: s.color } }))))), utils.formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (index.h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales_store.locales.entries.Lcz_Balance, ": ", utils.formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), index.h("div", { class: "row p-0 m-0" }, index.h("div", { class: "px-0 pr-0 col-12" }, index.h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.bookingEvent.NAME && index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Guest name:`, content: this.bookingEvent.NAME }), this.getArrivalTime() && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (index.h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.DEPARTURE_TIME?.code !== '000' && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Departure time:`, content: this.bookingEvent.DEPARTURE_TIME?.description })), this.bookingEvent.PRIVATE_NOTE && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct && (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })), index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_ChannelNotes}:`, display: "inline", content: this.getOTANotes(), renderContentAsHtml: true }), this.getInternalNote() && index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, index.h("ir-button", { style: { '--icon-size': '0.875rem' }, onClickHandler: () => this.handleEditBooking(), class: 'w-100', btn_block: true, text: locales_store.locales.entries.Lcz_Edit,
            // icon_name="edit"
            btn_styles: "h-100", size: "sm" }), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (index.h("ir-button", { style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_AddRoom,
            // icon_name="square_plus"
            size: "sm", class: 'w-100', btn_styles: "h-100", onClickHandler: () => this.handleAddRoom() })), this.canSplitBooking() && (index.h("ir-button", { class: 'w-100', style: { '--icon-size': '0.875rem' }, text: 'Split', onClickHandler: () => this.handleSplitBooking(), btn_styles: "h-100", size: "sm" })), this.canCheckIn() && (index.h("ir-button", { class: 'w-100', style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_CheckIn, onClickHandler: () => this.handleCustomerCheckIn(),
            // icon_name="edit"
            btn_styles: "h-100", size: "sm" })), this.canCheckOut() && (index.h("ir-button", { class: 'w-100', btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_CheckOut,
            // icon_name="edit"
            onClickHandler: () => this.handleCustomerCheckOut(), size: "sm" })), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (index.h("ir-button", { class: 'w-100', btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, size: "sm", text: locales_store.locales.entries.Lcz_Unassign, onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }))))));
    }
    handleSplitBooking() {
        this.hideBubble();
        this.openCalendarSidebar.emit({ type: 'split', payload: { booking: this.bookingEvent.base_booking, identifier: this.bookingEvent.IDENTIFIER } });
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (index.h("div", { class: `iglPopOver d-flex flex-column newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left`, style: { gap: '0.5rem' } }, shouldDisplayButtons ? (index.h(index.Fragment, null, index.h("ir-button", { size: "sm", btn_block: true, "data-testid": "bar_booking_btn", text: locales_store.locales.entries.Lcz_CreateNewBooking, onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }), this.hasSplitBooking() && (
        // <div class="mb-1">
        index.h("ir-button", { size: "sm", btn_block: true, text: locales_store.locales.entries.Lcz_AssignUnitToExistingBooking, onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } })
        // </div>
        ))) : (index.h("p", { class: 'text-danger' }, locales_store.locales.entries.Lcz_NoRatePlanDefined)), index.h("ir-button", { size: "sm", text: locales_store.locales.entries.Lcz_Blockdates, btn_block: true, onClickHandler: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } })));
    }
    getBlockedView() {
        console.log('booking event', this.bookingEvent);
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (index.h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: this.bookingEvent.defaultDates.from_date, toDate: this.bookingEvent.defaultDates.to_date, entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, index.h("ir-button", { btn_disabled: this.isLoading === 'update', text: locales_store.locales.entries.Lcz_Update, onClickHandler: _ => {
                this.handleUpdateBlockedDates();
            }, icon_name: "edit", size: "sm", btn_styles: "h-100", isLoading: this.isLoading === 'update', style: { '--icon-size': '0.875rem' }, btn_block: true, class: 'w-100' }), index.h("ir-button", { class: 'w-100 h-100 my-0', btn_block: true, btn_styles: "h-100", size: "sm", text: locales_store.locales.entries.Lcz_ConvertSplitBooking, onClickHandler: () => {
                this.handleConvertBlockedDateToBooking();
            } }), index.h("ir-button", { class: 'w-100', btn_styles: "h-100", btn_block: true, size: "sm", style: { '--icon-size': '0.875rem' }, icon_name: "trash", btn_color: "danger", onClickHandler: _ => {
                this.handleDeleteEvent();
            }, text: locales_store.locales.entries.Lcz_Delete })))));
    }
    render() {
        return (index.h(index.Host, { key: '3d8d9b6abe6ef3dd380c1cc861ddd822b4f4ae6c' }, index.h("div", { key: '35f8ffc1b04cdd9b052f22d2343a819acd5617d1', class: `pointerContainer ${this.bubbleInfoTop ? 'pointerContainerTop' : ''}` }, index.h("div", { key: '7ab328a9b191c2b71c0ee30f61d92606a49d2c71', class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` })), this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
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
        index.registerInstance(this, hostRef);
        this.optionChange = index.createEvent(this, "optionChange", 7);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '459b3ecb8b84d3bf03d8a7c863a37d71be6c5919', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '57ec4bf651b236e25700baaa6c77ce4e5f8d78f5', onClick: () => {
                if (this.disabled)
                    return;
                if (this.isOpen) {
                    this.closeDropdown();
                }
                else {
                    this.openDropdown();
                }
            }, "aria-disabled": String(this.disabled), class: `dropdown-trigger ${this.disabled ? 'disabled' : ''}`, onKeyDown: this.handleKeyDown, tabindex: "0" }, index.h("slot", { key: '5e4c93fa7f437b4157ccd193653a5bfe2f454f0d', name: "trigger" }), this.caret && (index.h("div", { key: '6621bbb4d93c302688c8cd1a8e99d2022786a1e5', class: `caret-icon ${this.disabled ? 'disabled' : ''}` }, index.h("ir-icons", { key: 'a03f3ce566c7f7893c637c57df0d6807091e9d84', name: !this.isOpen ? 'angle-down' : 'angle-up' })))), index.h("div", { key: 'c4800255e91d1f1e905ce8ff235fa107ea999fff', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, index.h("slot", { key: 'f5998ab55c080021d49fe0d125abdb9f9556b4d5' }))));
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
        index.registerInstance(this, hostRef);
        this.dropdownItemSelect = index.createEvent(this, "dropdownItemSelect", 7);
        this.dropdownItemRegister = index.createEvent(this, "dropdownItemRegister", 7);
        this.dropdownItemUnregister = index.createEvent(this, "dropdownItemUnregister", 7);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '2d8870d449dbd510b935d95239d97f48aae873ec', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true, 'hidden': this.hidden }, onClick: this.handleClick, "data-value": this.value }, this.html_content ? index.h("span", { innerHTML: this.html_content }) : index.h("slot", null)));
    }
};
IrDropdownItem.style = IrDropdownItemStyle0;

exports.igl_booking_event_hover = IglBookingEventHover;
exports.ir_dropdown = IrDropdown;
exports.ir_dropdown_item = IrDropdownItem;

//# sourceMappingURL=igl-booking-event-hover_3.cjs.entry.js.map