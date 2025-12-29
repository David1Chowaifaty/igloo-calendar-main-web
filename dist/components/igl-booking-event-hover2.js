import { proxyCustomElement, HTMLElement, createEvent, h, Fragment, Host } from '@stencil/core/internal/client';
import { k as findCountry, l as canCheckIn, f as formatAmount } from './utils.js';
import { E as EventsService } from './events.service.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { e as compareTime, f as createDateWithOffsetAndHour } from './booking.js';
import { P as PropertyService } from './property.service.js';
import { d as defineCustomElement$7 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-dropdown2.js';
import { d as defineCustomElement$3 } from './ir-dropdown-item2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-label2.js';

const iglBookingEventHoverCss = ".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100;--ir-booking-event-arrow:8px;--ir-booking-event-arrow-before:calc(var(--ir-booking-event-arrow) + 1px);--ir-booking-popover-border-color:var(--wa-color-neutral-border-normal)}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.balance_amount.sc-igl-booking-event-hover{color:var(--wa-color-danger-fill-loud);font-size:0.75rem}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5;overflow:hidden;max-width:100%;height:auto}.booking-event-hover__color-picker-trigger.sc-igl-booking-event-hover{all:unset;border:1px solid #e0e0e0;padding:0.25rem 0.25rem;border-radius:0.21rem;cursor:pointer}.events_btns.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem}.mx-01.sc-igl-booking-event-hover{--m:5px;margin-left:var(--m) !important;margin-right:var(--m) !important}.ota-notes.sc-igl-booking-event-hover{width:450px}.iglPopOver.sc-igl-booking-event-hover{position:absolute;background-color:var(--wa-color-surface-default);padding:10px;border:1px solid var(--ir-booking-popover-border-color);left:var(--el-left, 50%);transform:translateX(-50%) translateY(10px);box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2);font-size:13.5px;line-height:var(--wa-line-height-normal);padding:var(--wa-space-m);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.iglPopOver.infoBubble.sc-igl-booking-event-hover{min-width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:22px;height:12px;left:50%;transform:translateX(-50%);pointer-events:none}.bubblePointer.sc-igl-booking-event-hover::before,.bubblePointer.sc-igl-booking-event-hover::after{z-index:100;content:'';position:absolute;left:50%;transform:translateX(-50%);border-left:var(--ir-booking-event-arrow) solid transparent;border-right:var(--ir-booking-event-arrow) solid transparent}.bubblePointer.sc-igl-booking-event-hover::before{border-left:var(--ir-booking-event-arrow-before) solid transparent;border-right:var(--ir-booking-event-arrow-before) solid transparent}.bubblePointTop.sc-igl-booking-event-hover{bottom:-12px}.bubblePointTop.sc-igl-booking-event-hover::before{border-top:var(--ir-booking-event-arrow-before) solid var(--ir-booking-popover-border-color);top:0}.bubblePointTop.sc-igl-booking-event-hover::after{border-top:var(--ir-booking-event-arrow) solid var(--wa-color-surface-default);top:-1px}.bubblePointBottom.sc-igl-booking-event-hover{top:-12px}.bubblePointBottom.sc-igl-booking-event-hover::before{border-bottom:var(--ir-booking-event-arrow-before) solid var(--ir-booking-popover-border-color);bottom:0}.bubblePointBottom.sc-igl-booking-event-hover::after{border-bottom:var(--ir-booking-event-arrow) solid var(--wa-color-surface-default);bottom:-1px}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{height:auto;width:25px;margin-right:5px}";
const IglBookingEventHoverStyle0 = iglBookingEventHoverCss;

const IglBookingEventHover = /*@__PURE__*/ proxyCustomElement(class IglBookingEventHover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.hideBubbleInfo = createEvent(this, "hideBubbleInfo", 7);
        this.deleteButton = createEvent(this, "deleteButton", 7);
        this.bookingCreated = createEvent(this, "bookingCreated", 7);
        this.showDialog = createEvent(this, "showDialog", 7);
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar", 7);
    }
    get element() { return this; }
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
        data.IDENTIFIER = this.bookingEvent.IDENTIFIER;
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
            }, name: "ban" }))), h("ir-dropdown-item", { value: "none" }, h("ir-icons", { class: "p-0 m-0 d-flex align-items-center", style: { '--icon-size': '1rem', 'height': '1rem', 'width': '1rem' }, name: "ban" })), calendar_data.property.calendar_extra?.booking_colors.map(s => (h("ir-dropdown-item", { value: s.color }, h("div", { style: { height: '1rem', width: '1rem', borderRadius: '0.21rem', background: s.color } }))))), formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales.entries.Lcz_Balance, ": ", formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0 pr-0 col-12" }, h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.bookingEvent.NAME && h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Guest name:`, content: this.bookingEvent.NAME }), this.getArrivalTime() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.DEPARTURE_TIME?.code !== '000' && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `Departure time:`, content: this.bookingEvent.DEPARTURE_TIME?.description })), this.bookingEvent.PRIVATE_NOTE && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })), h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_ChannelNotes}:`, display: "inline", content: this.getOTANotes(), renderContentAsHtml: true }), this.getInternalNote() && h("ir-label", { labelText: `${locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, h("ir-custom-button", { style: { width: '100%' }, variant: "brand", onClickHandler: () => this.handleEditBooking() }, "Edit"), h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleReallocationBooking() }, "Reassign"), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleAddRoom() }, locales.entries.Lcz_AddRoom)), this.canSplitBooking() && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleSplitBooking() }, "Split")), this.canCheckIn() && (h("ir-custom-button", { style: { width: '100%' }, onClickHandler: () => this.handleCustomerCheckIn(), variant: "brand", appearance: "outlined" }, locales.entries.Lcz_CheckIn)), this.canCheckOut() && (h("ir-custom-button", { style: { width: '100%' }, variant: "brand", appearance: "outlined", onClickHandler: () => this.handleCustomerCheckOut() }, locales.entries.Lcz_CheckOut)), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (h("ir-custom-button", { variant: "danger", style: { width: '100%' }, appearance: "outlined", onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }, locales.entries.Lcz_Unassign))))));
    }
    handleReallocationBooking() {
        this.hideBubble();
        this.openCalendarSidebar.emit({
            type: 'reallocate-drawer',
            payload: { booking: this.bookingEvent.base_booking, pool: this.bookingEvent.POOL, identifier: this.bookingEvent.IDENTIFIER },
        });
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
        return (h(Host, { key: '6990f241e066891ab481e383dfd051188b31a13c' }, this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
    static get style() { return IglBookingEventHoverStyle0; }
}, [2, "igl-booking-event-hover", {
        "bookingEvent": [1040],
        "bubbleInfoTop": [4, "bubble-info-top"],
        "currency": [8],
        "countries": [16],
        "is_vacation_rental": [4],
        "isLoading": [32],
        "shouldHideUnassignUnit": [32],
        "canCheckInOrCheckout": [32],
        "bookingColor": [32]
    }, [[16, "keydown", "handleListenKeyDown"]], {
        "bookingEvent": ["handleBookingEventChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-booking-event-hover", "igl-block-dates-view", "ir-custom-button", "ir-date-view", "ir-dropdown", "ir-dropdown-item", "ir-icons", "ir-label"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookingEventHover);
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookingEventHover as I, defineCustomElement as d };

//# sourceMappingURL=igl-booking-event-hover2.js.map