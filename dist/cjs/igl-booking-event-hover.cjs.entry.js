'use strict';

var index = require('./index-CQkpA5n3.js');
var utils = require('./utils-C5I0LkiV.js');
var events_service = require('./events.service-CgV1wLcC.js');
var moment = require('./moment-CdViwxPQ.js');
var locales_store = require('./locales.store-BMTss6fG.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
var booking = require('./booking-CQEjAIov.js');
var index$1 = require('./index-CQ0teTmL.js');
var enums = require('./enums-BSCnMYlE.js');
var direction = require('./direction-Cb_BHcnU.js');
var number = require('./number-D7i5wAQq.js');
var t = require('./t-CyRK1btk.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./types-BlCoz3jZ.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./axios-EresIryl.js');
require('./booking.store-DDthytEL.js');
require('./IBooking-C1lok6Tq.js');
require('./commonSchemas-BFzTbV-r.js');
require('./functions-CsGCS8vQ.js');

const iglBookingEventHoverCss = () => `.sc-igl-booking-event-hover-h{--eh-gap:var(--wa-space-2xs, 0.25rem);--eh-row-gap:var(--wa-space-3xs, 0.125rem);--eh-pad:var(--wa-space-s, 0.5rem);--eh-font:var(--wa-font-size-s, 0.8125rem);--eh-label-color:var(--wa-color-text-quiet, #64748b);--ir-booking-event-arrow:8px;--ir-booking-event-arrow-before:calc(var(--ir-booking-event-arrow) + 1px);--ir-booking-popover-border-color:var(--wa-color-neutral-border-normal, #cbd5e1);display:block;position:relative;z-index:100}.iglPopOver.sc-igl-booking-event-hover{position:absolute;left:50%;transform:translateX(-50%) translateY(10px);transform-origin:center top;box-sizing:border-box;padding:var(--eh-pad);text-align:start;white-space:normal;user-select:none;-webkit-user-select:none;font-size:var(--eh-font);line-height:var(--wa-line-height-normal, 1.5);color:var(--wa-color-text-normal, #1e293b);background-color:var(--wa-color-surface-default, #fff);border:var(--wa-panel-border-width, 1px) var(--wa-panel-border-style, solid) var(--ir-booking-popover-border-color);border-radius:var(--wa-panel-border-radius, 0.5rem);box-shadow:var(--wa-shadow-l, 0 10px 38px -10px rgba(15, 23, 42, 0.35));animation:eh-in 160ms cubic-bezier(0.23, 1, 0.32, 1)}.iglPopOver.infoBubble.sc-igl-booking-event-hover{min-width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{width:380px;max-width:380px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{min-width:240px;width:fit-content;overflow-wrap:break-word}.iglPopOver.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px;transform-origin:center bottom}@keyframes eh-in{from{opacity:0;scale:0.97}}@media (prefers-reduced-motion: reduce){.iglPopOver.sc-igl-booking-event-hover{animation:eh-fade 120ms ease}@keyframes eh-fade{from{opacity:0}}}.event-hover__header.sc-igl-booking-event-hover{display:flex;align-items:center;justify-content:space-between;gap:var(--eh-gap);margin-block-end:var(--eh-gap)}.event-hover__identity.sc-igl-booking-event-hover{display:flex;align-items:center;gap:var(--eh-gap);min-width:0;font-weight:var(--wa-font-weight-bold, 700)}.event-hover__channel-icon.sc-igl-booking-event-hover{block-size:auto;inline-size:22px;flex-shrink:0}.event-hover__booking-no.sc-igl-booking-event-hover{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.event-hover__price.sc-igl-booking-event-hover{display:flex;align-items:center;gap:var(--eh-gap);flex-shrink:0;font-weight:var(--wa-font-weight-semibold, 600)}.event-hover__color-dropdown.sc-igl-booking-event-hover::part(menu),.event-hover__color-dropdown.sc-igl-booking-event-hover [part~="menu"]{min-width:max-content}.event-hover__color-trigger.sc-igl-booking-event-hover{all:unset;display:inline-flex;cursor:pointer;padding:var(--wa-space-3xs, 2px);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s, 0.1875rem);transition:transform 120ms ease-out}.event-hover__color-trigger.sc-igl-booking-event-hover:active{transform:scale(0.97)}.event-hover__color-trigger.sc-igl-booking-event-hover:focus-visible{outline:var(--wa-focus-ring, 2px solid);outline-offset:var(--wa-focus-ring-offset, 1px)}.event-hover__swatch.sc-igl-booking-event-hover{display:block;inline-size:1rem;block-size:1rem;border-radius:var(--wa-border-radius-s, 0.1875rem)}.event-hover__swatch.--none.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;color:#fff}.event-hover__origin-row.sc-igl-booking-event-hover{display:flex;align-items:center;justify-content:space-between;gap:var(--eh-gap)}.event-hover__origin-label.sc-igl-booking-event-hover{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);color:var(--eh-label-color);letter-spacing:0.04em}.event-hover__agent.sc-igl-booking-event-hover{display:inline-block;max-inline-size:16ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:bottom}.event-hover__balance.sc-igl-booking-event-hover{flex-shrink:0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-fill-loud, #dc2626)}.event-hover__dates.sc-igl-booking-event-hover{display:block;margin-block:var(--eh-gap);--ir-date-view-font-size:var(--eh-font)}.event-hover__details.sc-igl-booking-event-hover{display:flex;flex-direction:column;gap:var(--eh-row-gap)}.event-hover__actions.sc-igl-booking-event-hover{display:flex;flex-wrap:wrap;gap:var(--eh-gap);margin-block-start:var(--wa-space-s, 0.5rem)}.newBookingOptions.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover,.blockedView.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover{margin-block-start:0}.infoBubble.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover,.blockedView.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover{flex-wrap:nowrap}.infoBubble.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover>ir-custom-button.sc-igl-booking-event-hover,.blockedView.sc-igl-booking-event-hover .event-hover__actions.sc-igl-booking-event-hover>ir-custom-button.sc-igl-booking-event-hover{flex:1 1 auto;min-width:0}.event-hover__actions.sc-igl-booking-event-hover ir-custom-button.sc-igl-booking-event-hover::part(label),.event-hover__actions.sc-igl-booking-event-hover ir-custom-button.sc-igl-booking-event-hover [part~="label"]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.event-hover__actions.sc-igl-booking-event-hover .--full.sc-igl-booking-event-hover,.event-hover__error.sc-igl-booking-event-hover{flex-basis:100%}.event-hover__error.sc-igl-booking-event-hover{margin:0;color:var(--wa-color-danger-fill-loud, #dc2626);font-size:var(--wa-font-size-xs, 0.75rem)}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:22px;height:12px;left:50%;transform:translateX(-50%);pointer-events:none}.bubblePointer.sc-igl-booking-event-hover::before,.bubblePointer.sc-igl-booking-event-hover::after{z-index:100;content:'';position:absolute;left:50%;transform:translateX(-50%);border-left:var(--ir-booking-event-arrow) solid transparent;border-right:var(--ir-booking-event-arrow) solid transparent}.bubblePointer.sc-igl-booking-event-hover::before{border-left:var(--ir-booking-event-arrow-before) solid transparent;border-right:var(--ir-booking-event-arrow-before) solid transparent}.bubblePointTop.sc-igl-booking-event-hover{bottom:-12px}.bubblePointTop.sc-igl-booking-event-hover::before{border-top:var(--ir-booking-event-arrow-before) solid var(--ir-booking-popover-border-color);top:0}.bubblePointTop.sc-igl-booking-event-hover::after{border-top:var(--ir-booking-event-arrow) solid var(--wa-color-surface-default, #fff);top:-1px}.bubblePointBottom.sc-igl-booking-event-hover{top:-12px}.bubblePointBottom.sc-igl-booking-event-hover::before{border-bottom:var(--ir-booking-event-arrow-before) solid var(--ir-booking-popover-border-color);bottom:0}.bubblePointBottom.sc-igl-booking-event-hover::after{border-bottom:var(--ir-booking-event-arrow) solid var(--wa-color-surface-default, #fff);bottom:-1px}`;

const IglBookingEventHover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup");
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo");
        this.deleteButton = index.createEvent(this, "deleteButton");
        this.bookingCreated = index.createEvent(this, "bookingCreated");
        this.showDialog = index.createEvent(this, "showDialog");
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar");
    }
    get element() { return index.getElement(this); }
    bookingEvent;
    bubbleInfoTop = false;
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
    propertyService = new index$1.PropertyService();
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
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? t.t('Lcz_Adults', { fallback: 'adults' }) : t.t('Lcz_Single_Adult')?.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? t.t('Lcz_Adults', { fallback: 'adults' }) : t.t('Lcz_Single_Adult')?.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? t.t('Lcz_ChildCaption', { fallback: 'Child.' }).toLowerCase() : t.t('Lcz_Single_Child')?.toLowerCase()}`;
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
    get room() {
        const currentRoom = this.bookingEvent?.booking?.rooms?.find(room => room.assigned_units_pool === this.bookingEvent.ID);
        if (!currentRoom) {
            console.warn(`Couldn't find room with pool ${this.bookingEvent.ID}`);
            return null;
        }
        return currentRoom;
    }
    getRatePlan() {
        if (!this.bookingEvent) {
            return;
        }
        const currentRoom = this.room;
        let str = '';
        str += currentRoom.rateplan['short_name'];
        if (currentRoom.rateplan['is_non_refundable']) {
            str += ` - ${t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`;
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
            booking.compareTime(now.toDate(), booking.createDateWithOffsetAndHour(calendarData.calendar_data.checkin_checkout_hours?.offset, calendarData.calendar_data.checkin_checkout_hours?.hour))) {
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
        this.bookingEvent.TITLE = t.t('Lcz_EditBookingFor');
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
            TITLE: t.t('Lcz_AddRoomToBookingHash', { fallback: 'Add Room to #' }) + this.bookingEvent.BOOKING_NUMBER,
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
                message: t.t('Lcz_IncludingCityTaxExcludingVatMock', { fallback: 'Including 5.00% City Tax - Excluding 11.00% VAT' }),
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        const room = this.bookingEvent.booking.rooms.find(r => r.identifier === this.bookingEvent.IDENTIFIER);
        const { adult_nbr, children_nbr, infant_nbr } = this.bookingEvent.ROOM_INFO.occupancy;
        const unitName = room ? room.unit.name : (this.bookingEvent.ROOM_INFO.unit?.name ?? '');
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
            booking: this.bookingEvent.base_booking,
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: '',
            roomUnit: '',
        });
    }
    handleDeleteEvent() {
        this.hideBubble();
        this.deleteButton.emit(this.bookingEvent.POOL);
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
                return `${t.t('Lcz_EditBookingFor')} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${t.t('Lcz_AddingUnitToBooking')}# ${number.formatBookingNumber(this.bookingEvent.BOOKING_NUMBER)}`;
            case 'SPLIT_BOOKING':
                return t.t('Lcz_Adding') + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${t.t('Lcz_NewBookingFor')} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
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
            channel_notes[maxVisible - 1] = { statement: `${channel_notes[maxVisible - 1].statement} <span>${t.t('Lcz_More', { fallback: 'more...' })}</span>` };
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
    get isHalfBoard() {
        return this.room?.rateplan?.meal_plan?.code === '003' && calendarData.calendar_data.property.is_frontdesk_enabled;
    }
    renderColorPicker() {
        if (this.bookingEvent?.STATUS === 'PENDING-CONFIRMATION') {
            return null;
        }
        return (index.h("wa-dropdown", { class: "event-hover__color-dropdown", "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                const value = e.detail.item.value;
                const newBookingColor = value === 'none' ? null : calendarData.calendar_data.property.calendar_extra?.booking_colors.find(c => c.color === value);
                await this.propertyService.setRoomCalendarExtra({
                    property_id: calendarData.calendar_data.property.id,
                    room_identifier: this.bookingEvent.IDENTIFIER,
                    value: JSON.stringify({
                        booking_color: newBookingColor,
                    }),
                });
                this.bookingColor = newBookingColor;
            } }, index.h("button", { type: "button", class: "event-hover__color-trigger", slot: "trigger", "aria-label": t.t('Lcz_BookingColor', { fallback: 'Booking color' }) }, this.bookingColor ? (index.h("span", { class: "event-hover__swatch", style: { background: this.bookingColor?.color } })) : (index.h("wa-icon", { class: "event-hover__swatch --none", style: { fontSize: '0.75rem', background: this.baseColor }, name: "ban" }))), index.h("wa-dropdown-item", { value: "none" }, index.h("wa-icon", { style: { fontSize: '0.875rem' }, name: "ban" })), calendarData.calendar_data.property.calendar_extra?.booking_colors.map(s => (index.h("wa-dropdown-item", { value: s.color }, index.h("span", { class: "event-hover__swatch", style: { background: s.color } }))))));
    }
    getInfoElement() {
        return (index.h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''}` }, this.renderPointer(), index.h("div", { class: "event-hover__header" }, index.h("div", { class: "event-hover__identity" }, index.h("img", { src: this.bookingEvent?.origin?.Icon, alt: this.bookingEvent?.origin?.Label, class: "event-hover__channel-icon" }), index.h("span", { class: "event-hover__booking-no" }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : number.formatBookingNumber(this.bookingEvent.BOOKING_NUMBER))), index.h("div", { class: "event-hover__price" }, this.renderColorPicker(), index.h("span", null, number.formatAmount(calendarData.calendar_data.currency.symbol, this.getTotalPrice())))), index.h("div", { class: "event-hover__origin-row" }, index.h("span", { class: "event-hover__origin-label" }, this.bookingEvent.booking?.agent ? (index.h("span", null, t.t('Lcz_Agent', { fallback: 'Agent' }), ': ', index.h("span", { class: "event-hover__agent" }, this.bookingEvent?.booking?.agent?.name, " ", this.bookingEvent?.booking?.agent?.reference))) : (this.bookingEvent.origin.Label)), this.bookingEvent.BALANCE > 1 && (index.h("span", { class: "event-hover__balance" }, t.t('Lcz_Balance'), ": ", number.formatAmount(calendarData.calendar_data.currency.symbol, this.bookingEvent.BALANCE)))), index.h("ir-date-view", { class: "event-hover__dates", format: 'weekday-medium', from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }), index.h("div", { class: "event-hover__details" }, this.bookingEvent.NAME && index.h("ir-label", { class: "label--capitalize", labelText: `${t.t('Lcz_GuestName', { fallback: 'Guest name' })}:`, content: this.bookingEvent.NAME }), this.getArrivalTime() && index.h("ir-label", { labelText: `${t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' })}:`, content: this.getArrivalTime() }), this.getTotalOccupants() && index.h("ir-label", { labelText: `${t.t('Lcz_Occupancy')}:`, content: this.getTotalOccupants() }), this.getPhoneNumber() && index.h("ir-label", { labelText: `${t.t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhone() }), this.getRatePlan() && (index.h("ir-label", { labelText: `${t.t('Lcz_RatePlan', { fallback: 'Rate plan' })}:`, content: this.getRatePlan() }, this.isHalfBoard && (index.h("wa-badge", { appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning' }, this.room?.hb_preference === enums.HbPreference.Lunch
            ? t.t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === enums.HbPreference.Dinner
                ? t.t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t.t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' }))))), this.bookingEvent.DEPARTURE_TIME?.code !== '000' && (index.h("ir-label", { labelText: `${t.t('Lcz_DepartureTime', { fallback: 'Departure time:' })}`, content: this.bookingEvent.DEPARTURE_TIME?.description })), this.bookingEvent.PRIVATE_NOTE && index.h("ir-label", { labelText: `${t.t('Lcz_BookingPrivateNote')}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE }), this.bookingEvent.is_direct && index.h("ir-label", { labelText: `${t.t('Lcz_GuestRemark')}:`, display: "inline", content: this.bookingEvent.NOTES }), index.h("ir-label", { labelText: `${t.t('Lcz_ChannelNotes')}:`, display: "inline", content: this.getOTANotes(), renderContentAsHtml: true }), this.getInternalNote() && index.h("ir-label", { labelText: `${t.t('Lcz_InternalRemark')}:`, content: this.getInternalNote() })), index.h("div", { class: "event-hover__actions", style: { paddingTop: '1.5rem' }, role: "group" }, index.h("ir-custom-button", { size: "xs", variant: "brand", onClickHandler: () => this.handleEditBooking() }, t.t('Lcz_Edit', { fallback: 'Edit' })), index.h("ir-custom-button", { size: "xs", variant: "brand", appearance: "outlined", onClickHandler: () => this.handleReallocationBooking() }, t.t('Lcz_Reassign', { fallback: 'Reassign' })), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (index.h("ir-custom-button", { size: "xs", variant: "brand", appearance: "outlined", onClickHandler: () => this.handleAddRoom() }, t.t('Lcz_AddRoom'))), this.canSplitBooking() && (index.h("ir-custom-button", { size: "xs", variant: "brand", appearance: "outlined", onClickHandler: () => this.handleSplitBooking() }, t.t('Lcz_Split', { fallback: 'Split' }))), this.canCheckIn() && (index.h("ir-custom-button", { size: "xs", onClickHandler: () => this.handleCustomerCheckIn(), variant: "brand", appearance: "outlined" }, t.t('Lcz_CheckIn', { fallback: 'Check in' }))), this.canCheckOut() && (index.h("ir-custom-button", { size: "xs", variant: "brand", appearance: "outlined", onClickHandler: () => this.handleCustomerCheckOut() }, t.t('Lcz_CheckOut', { fallback: 'Check out' }))), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (index.h("ir-custom-button", { size: "xs", variant: "danger", appearance: "outlined", onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }, t.t('Lcz_Unassign'))))));
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
        return (index.h("div", { class: `iglPopOver newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''}` }, this.renderPointer(), index.h("div", { class: "event-hover__actions", role: "group" }, shouldDisplayButtons ? (index.h(index.Fragment, null, index.h("ir-custom-button", { size: "xs", class: "--full", variant: "brand", appearance: "accent", "data-testid": "bar_booking_btn", onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }, index.h("wa-icon", { slot: "start", name: "calendar-plus" }), t.t('Lcz_CreateNewBooking')), this.hasSplitBooking() && (index.h("ir-custom-button", { size: "xs", class: "--full", variant: "neutral", appearance: "accent", onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } }, index.h("wa-icon", { slot: "start", name: "link" }), t.t('Lcz_AssignUnitToExistingBooking'))))) : (index.h("p", { class: "event-hover__error" }, t.t('Lcz_NoRatePlanDefined'))), index.h("ir-custom-button", { size: "xs", class: "--full", appearance: "accent", variant: "danger", onClickHandler: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } }, index.h("wa-icon", { slot: "start", name: "ban" }), t.t('Lcz_Blockdates', { fallback: 'Block dates' })))));
    }
    getBlockedView() {
        return (index.h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''}` }, this.renderPointer(), index.h("igl-block-dates-view", { style: { marginBottom: '1.5rem' }, isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: this.bookingEvent.defaultDates.from_date, toDate: this.bookingEvent.defaultDates.to_date, entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), index.h("div", { class: "event-hover__actions", role: "group" }, index.h("ir-custom-button", { size: "xs", disabled: this.isLoading === 'update', onClickHandler: _ => {
                this.handleUpdateBlockedDates();
            }, variant: "brand", loading: this.isLoading === 'update' }, t.t('Lcz_Update')), index.h("ir-custom-button", { size: "xs", variant: "brand", appearance: "outlined", onClickHandler: () => {
                this.handleConvertBlockedDateToBooking();
            } }, t.t('Lcz_ConvertSplitBooking')), index.h("ir-custom-button", { variant: "danger", size: "xs", appearance: "outlined", onClickHandler: _ => {
                this.handleDeleteEvent();
            } }, t.t('Lcz_Delete', { fallback: 'Delete' })))));
    }
    renderPointer() {
        return index.h("div", { class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` });
    }
    render() {
        return (index.h(index.Host, { key: 'c4bcb0beec6d42effe21c716f9087a0087d3cec6', dir: direction.isRtlDirection(locales_store.locales.direction) ? 'rtl' : 'ltr' }, this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    static get watchers() { return {
        "bookingEvent": [{
                "handleBookingEventChange": 0
            }]
    }; }
};
IglBookingEventHover.style = iglBookingEventHoverCss();

exports.igl_booking_event_hover = IglBookingEventHover;
