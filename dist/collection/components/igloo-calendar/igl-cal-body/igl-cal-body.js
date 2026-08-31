import { Host, h, Fragment, forceUpdate } from "@stencil/core";
import moment from "moment";
import { compareTime, createDateWithOffsetAndHour } from "../../../utils/booking";
import calendar_dates from "../../../stores/calendar-dates.store";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
import { isRtlDirection } from "../../../utils/calendar-grid";
import { _formatTime } from "../../ir-booking-details/functions";
import { isBlockUnit, showToast } from "../../../utils/utils";
export class IglCalBody {
    isScrollViewDragging;
    propertyId;
    calendarData;
    today;
    currency;
    language;
    countries;
    highlightedDate;
    /** Day-use bookings for the currently loaded date window (from `getDayUseBookingsForCalendar`) — booked units get a red 2px cell border. */
    dayUseBookings = [];
    dragOverElement = '';
    renderAgain = false;
    selectedRoom = null;
    selectedRooms = {};
    issues = null;
    addBookingDatasEvent;
    showBookingPopup;
    scrollPageToRoom;
    fromRoomId = -1;
    newEvent;
    currentDate = new Date();
    bookingMap = new Map();
    roomEventsIndex = new Map();
    interactiveTitle = [];
    dayRateMap = new Map();
    roomsWithTodayCheckinStatus = new Set();
    categoriesWithTodayCheckinStatus = new Set();
    lastRenderedRoomTops = new Map();
    roomTitleClickTimer = null;
    dayUseBookingsByKey = new Map();
    // private disabledCellsCache = new Map<string, boolean>();
    componentDidRender() {
        // Room row offsets are read from the previously-committed DOM at the top of render(), so
        // they're always one commit stale: on first mount that DOM doesn't exist yet, and after any
        // row-structure change (category expand/collapse, calendarData updates adding/removing
        // rooms) the offsets used for this pass were measured *before* the change took effect. Once
        // the DOM actually commits here, re-measure and force one corrective re-render whenever the
        // fresh offsets disagree with what was used, so booking bars settle on the real (current) row
        // positions instead of stale ones — this is a vertical measurement (offsetTop), so it applies
        // identically regardless of RTL/LTR.
        const currentRoomTops = this.getRoomTopOffsets();
        if (!this.roomTopsEqual(this.lastRenderedRoomTops, currentRoomTops)) {
            forceUpdate(this);
        }
    }
    roomTopsEqual(a, b) {
        if (a.size !== b.size) {
            return false;
        }
        for (const [roomId, top] of a) {
            if (b.get(roomId) !== top) {
                return false;
            }
        }
        return true;
    }
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateRoomEventsIndex();
        this.updateTodayCheckinStatus();
        calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
        this.updateDisabledCellsCache();
        this.updateDayUseBookingKeys();
    }
    disconnectedCallback() {
        if (this.roomTitleClickTimer) {
            clearTimeout(this.roomTitleClickTimer);
            this.roomTitleClickTimer = null;
        }
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateRoomEventsIndex();
        this.updateTodayCheckinStatus();
        this.updateDisabledCellsCache();
    }
    handleTodayChange() {
        this.updateTodayCheckinStatus();
    }
    handleDayUseBookingsChange() {
        this.updateDayUseBookingKeys();
    }
    dragOverHighlightElementHandler(event) {
        this.dragOverElement = event.detail.dragOverElement;
    }
    gotoRoom(event) {
        let roomId = event.detail.roomId;
        let category = this.getRoomCategoryByRoomId(roomId);
        if (!category.expanded) {
            this.toggleCategory(category);
            setTimeout(() => {
                this.scrollToRoom(roomId);
            }, 10);
        }
        else {
            this.scrollToRoom(roomId);
        }
    }
    addToBeAssignedEvents(event) {
        // let roomId = event.detail.roomId;
        this.addBookingDatas(event.detail.data);
        this.renderElement();
    }
    closeWindow() {
        let ind = this.getBookingData().findIndex(ev => ev.ID === 'NEW_TEMP_EVENT');
        if (ind !== -1) {
            this.getBookingData().splice(ind, 1);
            console.log('removed item..');
            this.renderElement();
        }
    }
    scrollToRoom(roomId) {
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: roomId,
            refClass: 'room_' + roomId,
        });
    }
    getRoomCategoryByRoomId(roomId) {
        return this.calendarData.roomsInfo.find(roomCategory => {
            return this.getRoomtypeUnits(roomCategory).find(room => this.getRoomId(room) === roomId);
        });
    }
    getCategoryName(roomCategory) {
        return roomCategory.name;
    }
    getCategoryId(roomCategory) {
        return roomCategory.id;
    }
    getTotalPhysicalRooms(roomCategory) {
        return this.getRoomtypeUnits(roomCategory).length;
    }
    getRoomtypeUnits(roomCategory) {
        return (roomCategory && roomCategory.physicalrooms) || [];
    }
    getRoomName(roomInfo) {
        return roomInfo.name;
    }
    getRoomId(roomInfo) {
        return roomInfo.id;
    }
    getRoomById(physicalRooms, roomId) {
        return physicalRooms.find(physical_room => this.getRoomId(physical_room) === roomId);
    }
    getBookingData() {
        return this.calendarData.bookingEvents ?? [];
    }
    /**
     * Single batched DOM read (one querySelectorAll) shared by every booking bar, instead of
     * each igl-booking-event independently measuring its own room row. Room row top offsets
     * can't be derived from a fixed formula alone since rows are conditionally rendered based
     * on category expand/collapse state owned by this component.
     */
    getRoomTopOffsets() {
        const offsets = new Map();
        document.querySelectorAll('.bodyContainer .roomRow .roomTitle[data-room]').forEach(element => {
            const roomId = Number(element.getAttribute('data-room'));
            offsets.set(roomId, element.offsetTop);
        });
        return offsets;
    }
    addBookingDatas(aData) {
        this.addBookingDatasEvent.emit(aData);
    }
    getSelectedCellRefName(roomId, selectedDay) {
        return 'room_' + roomId + '_' + selectedDay.currentDate;
    }
    // getSplitBookingEvents(newEvent) {
    //   return this.getBookingData().some(bookingEvent => !['003', '002', '004'].includes(bookingEvent.STATUS_CODE) && newEvent.FROM_DATE === bookingEvent.FROM_DATE);
    // }
    getSplitBookingEvents(newEvent) {
        console.log(newEvent.FROM_DATE);
        return this.getBookingData().some(bookingEvent => {
            if (!['003', '002', '004'].includes(bookingEvent.STATUS_CODE)) {
                if (new Date(newEvent.FROM_DATE).getTime() >= new Date(bookingEvent.FROM_DATE).getTime() &&
                    new Date(newEvent.FROM_DATE).getTime() <= new Date(bookingEvent.TO_DATE).getTime()) {
                    return bookingEvent;
                }
            }
        });
    }
    addNewEvent(roomCategory) {
        let keys = Object.keys(this.selectedRooms);
        let startDate, endDate;
        if (this.selectedRooms[keys[0]].currentDate < this.selectedRooms[keys[1]].currentDate) {
            startDate = new Date(this.selectedRooms[keys[0]].currentDate);
            endDate = new Date(this.selectedRooms[keys[1]].currentDate);
        }
        else {
            startDate = new Date(this.selectedRooms[keys[1]].currentDate);
            endDate = new Date(this.selectedRooms[keys[0]].currentDate);
        }
        const dateDifference = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / 86_400_000));
        this.newEvent = {
            ID: 'NEW_TEMP_EVENT',
            NAME: h("span", null, "\u00A0"),
            EMAIL: '',
            PHONE: '',
            convertBooking: false,
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: startDate.getFullYear() + '-' + this.getTwoDigitNumStr(startDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(startDate.getDate()),
            TO_DATE: endDate.getFullYear() + '-' + this.getTwoDigitNumStr(endDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(endDate.getDate()),
            BALANCE: '',
            NOTES: '',
            RELEASE_AFTER_HOURS: 0,
            PR_ID: this.selectedRooms[keys[0]].roomId,
            ENTRY_DATE: '',
            NO_OF_DAYS: dateDifference,
            ADULTS_COUNT: 1,
            COUNTRY: '',
            INTERNAL_NOTE: '',
            RATE: '',
            TOTAL_PRICE: '',
            RATE_PLAN: '',
            ARRIVAL_TIME: '',
            TITLE: locales.entries.Lcz_NewBookingFor,
            roomsInfo: [roomCategory],
            CATEGORY: roomCategory.name,
            event_type: 'BAR_BOOKING',
            STATUS: 'TEMP-EVENT',
            defaultDateRange: {
                fromDate: null,
                fromDateStr: '',
                toDate: null,
                toDateStr: '',
                dateDifference,
                editable: false,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getRoomtypeUnits(roomCategory), this.selectedRooms[keys[0]].roomId));
        this.newEvent.BLOCK_DATES_TITLE = `${locales.entries.Lcz_BlockDatesFor} ${popupTitle}`;
        this.newEvent.TITLE += popupTitle;
        this.newEvent.defaultDateRange.toDate = new Date(this.newEvent.TO_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDate = new Date(this.newEvent.FROM_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDateStr = this.getDateStr(this.newEvent.defaultDateRange.fromDate);
        this.newEvent.defaultDateRange.toDateStr = this.getDateStr(this.newEvent.defaultDateRange.toDate);
        this.newEvent.ENTRY_DATE = new Date().toISOString();
        this.newEvent.legendData = this.calendarData.formattedLegendData;
        let splitBookingEvents = this.getSplitBookingEvents(this.newEvent);
        if (splitBookingEvents) {
            this.newEvent.splitBookingEvents = splitBookingEvents;
        }
        this.getBookingData().push(this.newEvent);
        return this.newEvent;
    }
    getTwoDigitNumStr(num) {
        return num <= 9 ? '0' + num : num;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    removeNewEvent() {
        this.calendarData.bookingEvents = this.calendarData.bookingEvents.filter(events => events.ID !== 'NEW_TEMP_EVENT');
        this.newEvent = null;
    }
    /** Cancels the in-progress range selection and surfaces why, shared by every conflict check in `clickCell`. */
    cancelSelectionWithConflictToast(title) {
        this.removeNewEvent();
        this.selectedRooms = {};
        this.renderElement();
        showToast({ type: 'error', title });
    }
    clickCell(roomId, selectedDay, roomCategory) {
        if (!this.isScrollViewDragging && selectedDay.currentDate >= this.currentDate.getTime()) {
            let refKey = this.getSelectedCellRefName(roomId, selectedDay);
            if (this.selectedRooms.hasOwnProperty(refKey)) {
                this.removeNewEvent();
                delete this.selectedRooms[refKey];
                this.renderElement();
                return;
            }
            else if (Object.keys(this.selectedRooms).length != 1 || this.fromRoomId != roomId) {
                this.removeNewEvent();
                this.selectedRooms = {};
                this.selectedRooms[refKey] = { ...selectedDay, roomId };
                this.fromRoomId = roomId;
                this.renderElement();
            }
            else {
                const startValue = this.selectedRooms[Object.keys(this.selectedRooms)[0]].value;
                const endValue = selectedDay.value;
                // Cheapest checks first (indexed O(bookings-in-room)), day-loop checks last — each short-circuits the selection.
                if (this.hasBookingConflictBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(locales.entries.Lcz_BookingBetweenSelectedDates ?? 'Selection cancelled. A booking already exists within the selected dates.');
                    return;
                }
                if (this.hasBlockedConflictBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(locales.entries.Lcz_BlockedDatesBetweenSelectedDates ?? 'Selection cancelled. These dates are blocked.');
                    return;
                }
                if (this.hasUnavailableCellBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(locales.entries.Lcz_UnavailableDatesBetweenSelectedDates ?? 'Selection cancelled. These dates are not available.');
                    return;
                }
                if (this.hasDayUseBookingBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(locales.entries.Lcz_DayUseBookingBetweenSelectedDates ?? 'Selection cancelled. A day-use booking already exists within the selected dates.');
                    return;
                }
                this.selectedRooms[refKey] = { ...selectedDay, roomId };
                this.addNewEvent(roomCategory);
                this.selectedRooms = {};
                this.renderElement();
                this.showNewBookingPopup(this.newEvent);
            }
        }
    }
    showNewBookingPopup(data) {
        console.log(data);
        // this.showBookingPopup.emit({key: "add", data});
    }
    renderElement() {
        this.renderAgain = !this.renderAgain;
    }
    getBookingMap(bookings) {
        const bookingMap = new Map();
        const today = moment().startOf('day');
        for (const booking of bookings) {
            const fromDate = moment(booking.FROM_DATE, 'YYYY-MM-DD').startOf('day');
            const toDate = moment(booking.TO_DATE, 'YYYY-MM-DD').startOf('day');
            // Check if today is between fromDate and toDate, inclusive.
            if (today.isSameOrAfter(fromDate) && today.isSameOrBefore(toDate)) {
                if (!bookingMap.has(booking.PR_ID)) {
                    bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                }
                else {
                    if (compareTime(moment().toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour))) {
                        bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    /**
     * Indexes every booking/block event in `calendarData.bookingEvents` by physical room id, with
     * FROM_DATE/TO_DATE pre-parsed to day-level timestamps and block-vs-booking pre-classified via
     * `isBlockUnit`. Rebuilt whenever `calendarData` changes so the range-conflict checks used during
     * cell selection (`hasBookingConflictBetween`/`hasBlockedConflictBetween`) are O(events-in-that-room)
     * numeric comparisons instead of scanning/parsing the full bookings array on every click.
     */
    updateRoomEventsIndex() {
        const index = new Map();
        for (const event of this.getBookingData()) {
            const roomId = Number(event.PR_ID);
            if (Number.isNaN(roomId) || !event.FROM_DATE || !event.TO_DATE) {
                continue;
            }
            const entry = {
                start: moment(event.FROM_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                end: moment(event.TO_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                isBlock: isBlockUnit(event.STATUS_CODE),
            };
            const bucket = index.get(roomId);
            if (bucket) {
                bucket.push(entry);
            }
            else {
                index.set(roomId, [entry]);
            }
        }
        this.roomEventsIndex = index;
    }
    getRoomtypeDayInventoryCells(addClass, isCategory = false, index) {
        return calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h(Fragment, null, h("span", { class: 'categoryName' }, dayInfo.rate[index].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralUnitsDayCells(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = moment(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            const cleaningDates = calendar_dates.cleaningTasks.has(+roomId) ? calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes(calendar_data.cleaning_frequency?.code) ? false : cleaningDates?.has(dayInfo.value);
            const dayUseBooking = this.getDayUseBooking(Number(roomId), dayInfo.value);
            const dayUseStatus = dayUseBooking ? this.getDayUseStatus(dayUseBooking) : null;
            const dayUseCellClass = dayUseBooking ? `dayUseBooked dayUseBooked--${dayUseStatus}` : '';
            return (h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''} ${dayUseCellClass}`,
                // style={!isDisabled && { '--cell-cursor': 'default' }}
                style: { '--cell-cursor': 'default' }, onClick: () => {
                    // if (isDisabled) {
                    //   return;
                    // }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "data-day-use-booked": String(!!dayUseBooking), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }, dayUseBooking && (h(Fragment, null, h("wa-tooltip", { style: { '--max-width': 'auto' }, for: `day-use-badge_${roomId}_${dayInfo.value}`, trigger: "hover" }, h("div", { class: "dayUseTooltip__main" }, h("span", { class: "dayUseTooltip__time" }, "Day use ", this.formatDayUseTime(dayUseBooking.from_time), " \u2013 ", this.formatDayUseTime(dayUseBooking.to_time)), h("span", { class: "dayUseTooltip__price" }, this.getDayUsePrice(dayUseBooking.gross_amount))), h("div", { class: "dayUseTooltip__meta" }, h("span", { class: "dayUseTooltip__number" }, "#", dayUseBooking.book_nbr), this.getDayUseGuestName(dayUseBooking) && h("span", { class: "dayUseTooltip__guest" }, this.getDayUseGuestName(dayUseBooking)))), h("button", { id: `day-use-badge_${roomId}_${dayInfo.value}`, type: "button", class: "dayUseBadge", "aria-label": "Open day-use booking details", onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.openDayUseBookingDetails(dayUseBooking);
                } }, h("span", { class: "dayUseBadge__dot" }))))));
        });
    }
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    formatDayUseTime(time) {
        const [hour, minute] = time.split(':');
        return _formatTime(hour, minute);
    }
    getDayUseGuestName(booking) {
        return [booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(' ').trim();
    }
    getDayUsePrice(amount) {
        const symbol = this.currency?.symbol ?? '';
        return `${symbol}${Number(amount ?? 0).toFixed(2)}`;
    }
    getDayUseStatus(booking) {
        const now = moment();
        const from = moment(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        const to = moment(`${booking.target_date} ${booking.to_time}`, 'YYYY-MM-DD HH:mm');
        if (now.isBefore(from)) {
            return 'future';
        }
        if (now.isAfter(to)) {
            return 'past';
        }
        return 'staying';
    }
    openDayUseBookingDetails(dayUseBooking) {
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                BOOKING_NUMBER: dayUseBooking.book_nbr,
                event_type: 'EDIT_BOOKING',
                TITLE: `${locales.entries.Lcz_EditBookingFor ?? 'Edit Booking For'} ${''}`,
            },
        });
    }
    /**
     * Opens the booking editor drawer in day-use mode with the double-clicked unit preselected
     * (room type scoped via `roomsInfo`, today as the default day-use date).
     */
    openDayUseBooking(room, roomCategory) {
        const today = moment().format('YYYY-MM-DD');
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                event_type: 'BAR_BOOKING',
                PR_ID: room.id.toString(),
                FROM_DATE: today,
                TO_DATE: moment().add(1, 'day').format('YYYY-MM-DD'),
                TITLE: `Day-Use Booking For ${roomCategory.name} ${room.name}`,
                roomsInfo: [{ id: roomCategory.id }],
                dayUse: true,
            },
        });
    }
    /**
     * Disambiguates a single click (toggle housekeeping) from a double click (open day-use booking)
     * on the room name cell. A native `dblclick` listener doesn't work here: the single-click handler
     * opens a modal housekeeping dialog, which captures the second click before the browser can pair
     * it with the first to synthesize `dblclick`. Instead we delay the single-click action briefly so a
     * fast second click can cancel it and fire the double-click action instead.
     */
    handleRoomTitleClick(room, roomCategory) {
        if (this.roomTitleClickTimer) {
            clearTimeout(this.roomTitleClickTimer);
            this.roomTitleClickTimer = null;
            this.openDayUseBooking(room, roomCategory);
            return;
        }
        this.roomTitleClickTimer = setTimeout(() => {
            this.roomTitleClickTimer = null;
            if (calendar_data.housekeeping_enabled) {
                this.selectedRoom = room;
            }
        }, 250);
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomtypeRow(roomType, index) {
        if (this.getTotalPhysicalRooms(roomType) <= 1 || !roomType.is_active) {
            return null;
        }
        const hasRoomWithTodayCheckin = this.categoryHasRoomWithTodayCheckin(roomType);
        return (h("div", { class: "roomRow", "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomType)}`, onClick: () => this.toggleCategory(roomType), "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: 'categoryName' }, h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomType) })), roomType.expanded ? h("wa-icon", { name: "angle-down" }) : h("wa-icon", { name: "angle-right" })), this.getRoomtypeDayInventoryCells('category_' + this.getCategoryId(roomType), true, index)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomType - The category containing room details.
     */
    getUnitsByRoomtype(roomType) {
        const hasRoomWithTodayCheckin = this.categoryHasRoomWithTodayCheckin(roomType);
        // Check accordion is expanded.
        if (!roomType.expanded) {
            return null;
        }
        return this.getRoomtypeUnits(roomType)?.map(room => {
            if (!room.is_active) {
                return null;
            }
            const haveSingleRooms = this.getTotalPhysicalRooms(roomType) <= 1;
            const name = haveSingleRooms ? this.getCategoryName(roomType) : this.getRoomName(room);
            const roomId = this.getRoomId(room);
            const roomHasTodayCheckin = this.roomHasTodayCheckin(roomId);
            // const hasHousekeepingOrIssue = room.hk_status !== '001' || calendar_data.unitIssues.has(Number(room.id));
            return (h("div", { class: "roomRow", "data-room-has-today-checkin": String(roomHasTodayCheckin) }, h("div", { class: `cellData room  align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomType) <= 1 ? 'pl10' : ''} ${'room_' + roomId}`, "data-room-name": name, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": roomId, "data-room-has-today-checkin": String(roomHasTodayCheckin), "data-category-has-today-checkin": String(hasRoomWithTodayCheckin), onClick: () => {
                    this.handleRoomTitleClick(room, roomType);
                }, onMouseEnter: () => {
                    this.interactiveTitle[room.id]?.style?.setProperty('--ir-interactive-hk-bg', roomHasTodayCheckin ? 'var(--wa-color-brand-fill-quiet)' : 'var(--wa-color-neutral-fill-quiet)');
                }, onMouseLeave: () => {
                    this.interactiveTitle[room.id]?.style?.removeProperty('--ir-interactive-hk-bg');
                } }, h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': 'var(--wa-color-neutral-fill-quiet)' }, hkStatus: calendar_data.housekeeping_enabled && (room.hk_status !== '001' || calendar_data.unitIssues?.has(room.id)), popoverTitle: name }, (room.hk_status !== '001' || calendar_data.unitIssues.has(Number(room.id))) && (h("div", { slot: "end", class: "d-flex align-items-center", style: { gap: '0.5rem' } }, calendar_data.unitIssues.has(room.id) && (h("wa-button", { appearance: "plain", variant: "danger", class: "hk_issue_btn", onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.issues = calendar_data.unitIssues.get(Number(room.id));
                } }, h("wa-animation", { name: "heartBeat", easing: "ease-in-out", duration: 1400, play: true }, h("wa-icon", { name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1.1rem' } })))), h("div", { style: { visibility: room.hk_status !== '001' ? 'visible' : 'hidden' } }, room.hk_status !== '003' && h("wa-tooltip", { for: `${room.id}_hk_status_icon` }, room.hk_status === '002' ? 'This unit is dirty' : 'Inspected'), h("wa-icon", { id: `${room.id}_hk_status_icon`, name: room.hk_status === '004' ? 'check' : 'broom', style: room.hk_status === '004' && { color: 'var(--wa-color-success-fill-loud)' } })))))), this.getGeneralUnitsDayCells(this.getRoomId(room), roomType, name)));
        });
    }
    getRoomRows() {
        return this.calendarData.roomsInfo?.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return (h(Fragment, null, this.getRoomtypeRow(roomCategory, index), roomCategory.expanded && this.getUnitsByRoomtype(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    getTodayCheckinRoomsAndCategories() {
        // const todayISO = this.getTodayISODate();
        const today = moment();
        const rooms = new Set();
        const categories = new Set();
        this.getBookingData().forEach(booking => {
            const roomInfo = booking?.ROOM_INFO;
            // Must be a check-in
            if (roomInfo?.in_out?.code !== '001') {
                return;
            }
            // Must match today (from OR to)
            if (moment(booking.FROM_DATE, 'YYYY-MM-DD').isAfter(today, 'dates') && moment(booking.TO_DATE, 'YYYY-MM-DD').isBefore(today, 'dates')) {
                return;
            }
            const roomId = Number(booking.PR_ID);
            if (!Number.isNaN(roomId)) {
                rooms.add(roomId);
            }
            const categoryId = Number(booking.RATE_TYPE);
            if (!Number.isNaN(categoryId)) {
                categories.add(categoryId);
            }
        });
        return { rooms, categories };
    }
    updateTodayCheckinStatus() {
        const { categories, rooms } = this.getTodayCheckinRoomsAndCategories();
        this.roomsWithTodayCheckinStatus = rooms;
        this.categoriesWithTodayCheckinStatus = categories;
    }
    roomHasTodayCheckin(roomId) {
        // console.log(this.roomsWithTodayCheckinStatus);
        return this.roomsWithTodayCheckinStatus?.has(roomId);
    }
    categoryHasRoomWithTodayCheckin(roomCategory) {
        return this.categoriesWithTodayCheckinStatus.has(this.getCategoryId(roomCategory));
    }
    updateDisabledCellsCache() {
        calendar_dates.disabled_cells.clear();
        this.calendarData.roomsInfo?.forEach((roomCategory, categoryIndex) => {
            if (roomCategory.is_active) {
                this.getRoomtypeUnits(roomCategory)?.forEach(room => {
                    if (room.is_active) {
                        this.calendarData.days.forEach(dayInfo => {
                            const cellKey = this.getCellKey(room.id, dayInfo.value);
                            calendar_dates.disabled_cells.set(cellKey, {
                                disabled: !dayInfo.rate[categoryIndex].is_available_to_book,
                                reason: 'stop_sale',
                            });
                        });
                    }
                });
            }
        });
    }
    getCellKey(roomId, day) {
        return `${roomId}_${day}`;
    }
    isCellDisabled(roomId, day) {
        const key = this.getCellKey(roomId, day);
        if (!calendar_dates.disabled_cells.has(key)) {
            return false;
        }
        const { disabled } = calendar_dates.disabled_cells.get(key);
        return disabled;
    }
    updateDayUseBookingKeys() {
        this.dayUseBookingsByKey = new Map((this.dayUseBookings ?? []).map(booking => [this.getCellKey(booking.unit_id, booking.target_date), booking]));
    }
    getDayUseBooking(roomId, day) {
        return this.dayUseBookingsByKey.get(this.getCellKey(roomId, day));
    }
    /**
     * True if a day-use booking for `roomId` falls strictly between `startValue` and `endValue`
     * (both `'YYYY-MM-DD'`, either order). Endpoint-exclusive — a day-use booking on either clicked
     * date itself doesn't block the selection.
     */
    hasDayUseBookingBetween(roomId, startValue, endValue) {
        const start = moment(startValue, 'YYYY-MM-DD');
        const end = moment(endValue, 'YYYY-MM-DD');
        const [rangeStart, rangeEnd] = start.isBefore(end) ? [start, end] : [end, start];
        const cursor = rangeStart.clone().add(1, 'days');
        while (cursor.isBefore(rangeEnd, 'day')) {
            if (this.getDayUseBooking(roomId, cursor.format('YYYY-MM-DD'))) {
                return true;
            }
            cursor.add(1, 'days');
        }
        return false;
    }
    /**
     * Shared O(events-in-room) endpoint-exclusive range-overlap test behind `hasBookingConflictBetween`
     * and `hasBlockedConflictBetween`. Two ranges overlap (endpoints excluded) when
     * `eventStart < rangeEnd && eventEnd > rangeStart` — a single numeric comparison per event, no
     * per-day iteration, using the pre-parsed timestamps cached in `roomEventsIndex`.
     */
    hasRoomEventConflictBetween(roomId, startValue, endValue, isBlock) {
        const events = this.roomEventsIndex.get(roomId);
        if (!events || events.length === 0) {
            return false;
        }
        const a = moment(startValue, 'YYYY-MM-DD').startOf('day').valueOf();
        const b = moment(endValue, 'YYYY-MM-DD').startOf('day').valueOf();
        const rangeStart = Math.min(a, b);
        const rangeEnd = Math.max(a, b);
        for (const event of events) {
            if (event.isBlock === isBlock && event.start < rangeEnd && event.end > rangeStart) {
                return true;
            }
        }
        return false;
    }
    /**
     * True if an existing (non-block) booking for `roomId` overlaps the open interval between
     * `startValue` and `endValue` — i.e. a real booking's stay exists strictly between the two
     * clicked dates. Endpoint-exclusive: a booking checking out or in exactly on a clicked date
     * does not count (standard checkout-day/checkin-day overlap semantics).
     */
    hasBookingConflictBetween(roomId, startValue, endValue) {
        return this.hasRoomEventConflictBetween(roomId, startValue, endValue, false);
    }
    /**
     * True if a blocked-dates entry for `roomId` overlaps the open interval between `startValue`
     * and `endValue`. Same endpoint-exclusive semantics and cached-index lookup as
     * `hasBookingConflictBetween`, filtered to block entries instead of real bookings.
     */
    hasBlockedConflictBetween(roomId, startValue, endValue) {
        return this.hasRoomEventConflictBetween(roomId, startValue, endValue, true);
    }
    /**
     * True if any date strictly between `startValue` and `endValue` is disabled for `roomId` in
     * `calendar_dates.disabled_cells` (stop-sale / zero availability). Endpoint-exclusive, same loop
     * shape as `hasDayUseBookingBetween`; reuses the existing `isCellDisabled` cache so no new
     * per-day data structure is needed.
     */
    hasUnavailableCellBetween(roomId, startValue, endValue) {
        const start = moment(startValue, 'YYYY-MM-DD');
        const end = moment(endValue, 'YYYY-MM-DD');
        const [rangeStart, rangeEnd] = start.isBefore(end) ? [start, end] : [end, start];
        const cursor = rangeStart.clone().add(1, 'days');
        while (cursor.isBefore(rangeEnd, 'day')) {
            if (this.isCellDisabled(roomId, cursor.format('YYYY-MM-DD'))) {
                return true;
            }
            cursor.add(1, 'days');
        }
        return false;
    }
    render() {
        const roomTopOffsets = this.getRoomTopOffsets();
        this.lastRenderedRoomTops = roomTopOffsets;
        return (h(Host, { key: 'bea24520bd80e01f01673ed73cf82d8f446e4f1d', dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: 'faa84e77a50c618c364b4cb593463d2c95b22cad', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: '1d59d199f9b7b55db0d59249214da95baf0cdd0d', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData(), roomTop: roomTopOffsets.get(Number(bookingEvent.PR_ID)) }));
        }))), h("igl-housekeeping-dialog", { key: 'ec8743be382361ab9540abab38d30d2999173de0', onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
            }, bookingNumber: this.selectedRoom ? this.bookingMap.get(this.selectedRoom?.id) : undefined, selectedRoom: this.selectedRoom, open: this.selectedRoom !== null }), h("igl-hk-issues-dialog", { key: '01113469acc4ad612fa95864227eae0894a0c3af', open: this.issues !== null, issues: this.issues, unitName: this.issues?.length > 0 ? this.issues[0]?.unit?.name : '', propertyId: this.propertyId, onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.issues = null;
            } })));
    }
    static get is() { return "igl-cal-body"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-body.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-body.css"]
        };
    }
    static get properties() {
        return {
            "isScrollViewDragging": {
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
                "reflect": false,
                "attribute": "is-scroll-view-dragging"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false,
                "attribute": "property-id"
            },
            "calendarData": {
                "type": "unknown",
                "mutable": false,
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
            "today": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "String",
                    "resolved": "String",
                    "references": {
                        "String": {
                            "location": "global",
                            "id": "global::String"
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
                "reflect": false,
                "attribute": "currency"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "language"
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
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
            "highlightedDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "highlighted-date"
            },
            "dayUseBookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DayUseBookings[]",
                    "resolved": "DayUseBookings[]",
                    "references": {
                        "DayUseBookings": {
                            "location": "import",
                            "path": "@/services/property/types",
                            "id": "src/services/property/types.ts::DayUseBookings",
                            "referenceLocation": "DayUseBookings"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Day-use bookings for the currently loaded date window (from `getDayUseBookingsForCalendar`) \u2014 booked units get a red 2px cell border."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "dragOverElement": {},
            "renderAgain": {},
            "selectedRoom": {},
            "selectedRooms": {},
            "issues": {}
        };
    }
    static get events() {
        return [{
                "method": "addBookingDatasEvent",
                "name": "addBookingDatasEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                }
            }, {
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
                "method": "scrollPageToRoom",
                "name": "scrollPageToRoom",
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
            }];
    }
    static get watchers() {
        return [{
                "propName": "calendarData",
                "methodName": "handleCalendarDataChange"
            }, {
                "propName": "today",
                "methodName": "handleTodayChange"
            }, {
                "propName": "dayUseBookings",
                "methodName": "handleDayUseBookingsChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "dragOverHighlightElement",
                "method": "dragOverHighlightElementHandler",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "gotoRoomEvent",
                "method": "gotoRoom",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "addToBeAssignedEvent",
                "method": "addToBeAssignedEvents",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "closeBookingWindow",
                "method": "closeWindow",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
