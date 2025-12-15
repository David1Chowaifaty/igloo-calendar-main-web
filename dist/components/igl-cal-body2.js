import { proxyCustomElement, HTMLElement, createEvent, h, Fragment, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { k as calendar_dates, q as compareTime, r as createDateWithOffsetAndHour } from './utils.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$b } from './igl-block-dates-view2.js';
import { d as defineCustomElement$a } from './igl-booking-event2.js';
import { d as defineCustomElement$9 } from './igl-booking-event-hover2.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-date-view2.js';
import { d as defineCustomElement$6 } from './ir-dropdown2.js';
import { d as defineCustomElement$5 } from './ir-dropdown-item2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-interactive-title2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block;color:var(--wa-color-text-normal)}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.cellData.sc-igl-cal-body{background-color:var(--wa-color-surface-default)}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:var(--wa-color-neutral-fill-quiet);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:var(--wa-color-neutral-fill-quiet)}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:var(--wa-color-surface-default);cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid var(--wa-color-surface-border);border-left:1px solid var(--wa-color-surface-border);vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;right:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--wa-color-surface-border);transform:rotate(45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid var(--wa-color-surface-border)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:var(--wa-color-surface-default);border-right:1px solid var(--wa-color-surface-border);width:170px;z-index:1}.currentDay.sc-igl-cal-body{background-color:var(--wa-color-brand-fill-quiet)}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = /*@__PURE__*/ proxyCustomElement(class IglCalBody extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.addBookingDatasEvent = createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
    }
    isScrollViewDragging;
    propertyId;
    calendarData;
    today;
    currency;
    language;
    countries;
    highlightedDate;
    dragOverElement = '';
    renderAgain = false;
    selectedRoom;
    isLoading = null;
    addBookingDatasEvent;
    showBookingPopup;
    scrollPageToRoom;
    selectedRooms = {};
    fromRoomId = -1;
    newEvent;
    currentDate = new Date();
    hkModal;
    housekeepingService = new HouseKeepingService();
    bookingMap = new Map();
    interactiveTitle = [];
    dayRateMap = new Map();
    // private disabledCellsCache = new Map<string, boolean>();
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
        this.updateDisabledCellsCache();
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateDisabledCellsCache();
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
            return this.getCategoryRooms(roomCategory).find(room => this.getRoomId(room) === roomId);
        });
    }
    getCategoryName(roomCategory) {
        return roomCategory.name;
    }
    getCategoryId(roomCategory) {
        return roomCategory.id;
    }
    getTotalPhysicalRooms(roomCategory) {
        return this.getCategoryRooms(roomCategory).length;
    }
    getCategoryRooms(roomCategory) {
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
        return this.calendarData.bookingEvents;
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
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getCategoryRooms(roomCategory), this.selectedRooms[keys[0]].roomId));
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
    // private clickCell(roomId, selectedDay, roomCategory) {
    //   if (!this.isScrollViewDragging && selectedDay.currentDate >= this.currentDate.getTime()) {
    //     let refKey = this.getSelectedCellRefName(roomId, selectedDay);
    //     if (this.selectedRooms.hasOwnProperty(refKey)) {
    //       this.removeNewEvent();
    //       delete this.selectedRooms[refKey];
    //       this.renderElement();
    //       return;
    //     } else if (Object.keys(this.selectedRooms).length != 1 || this.fromRoomId != roomId) {
    //       this.removeNewEvent();
    //       this.selectedRooms = {};
    //       this.selectedRooms[refKey] = { ...selectedDay, roomId };
    //       this.fromRoomId = roomId;
    //       this.renderElement();
    //     } else {
    //       // create bar;
    //       this.selectedRooms[refKey] = { ...selectedDay, roomId };
    //       this.addNewEvent(roomCategory);
    //       this.selectedRooms = {};
    //       this.renderElement();
    //       this.showNewBookingPopup(this.newEvent);
    //     }
    //   }
    // }
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
                const keys = Object.keys(this.selectedRooms);
                const startDate = hooks(this.selectedRooms[keys[0]].value, 'YYYY-MM-DD');
                const endDate = hooks(selectedDay.value, 'YYYY-MM-DD');
                let cursor = startDate.clone().add(1, 'days');
                let disabledCount = 0;
                while (cursor.isBefore(endDate, 'day')) {
                    const dateKey = cursor.format('YYYY-MM-DD');
                    if (this.isCellDisabled(roomId, dateKey)) {
                        disabledCount++;
                    }
                    cursor.add(1, 'days');
                }
                if (disabledCount >= 1) {
                    this.selectedRooms = {};
                    this.fromRoomId = roomId;
                    this.renderElement();
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
        const today = hooks().startOf('day');
        for (const booking of bookings) {
            const fromDate = hooks(booking.FROM_DATE, 'YYYY-MM-DD').startOf('day');
            const toDate = hooks(booking.TO_DATE, 'YYYY-MM-DD').startOf('day');
            // Check if today is between fromDate and toDate, inclusive.
            if (today.isSameOrAfter(fromDate) && today.isSameOrBefore(toDate)) {
                if (!bookingMap.has(booking.PR_ID)) {
                    bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                }
                else {
                    if (compareTime(hooks().toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour))) {
                        bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    getGeneralCategoryDayColumns(addClass, isCategory = false, index) {
        return calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h(Fragment, null, h("span", { class: 'categoryName' }, dayInfo.rate[index].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralRoomDayColumns(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            const cleaningDates = calendar_dates.cleaningTasks.has(+roomId) ? calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes(calendar_data.cleaning_frequency?.code) ? false : cleaningDates?.has(dayInfo.value);
            return (h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''}`, style: !isDisabled && { '--cell-cursor': 'default' }, onClick: () => {
                    if (isDisabled) {
                        return;
                    }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }));
        });
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomCategoryRow(roomCategory, index) {
        if (this.getTotalPhysicalRooms(roomCategory) <= 1 || !roomCategory.is_active) {
            return null;
        }
        return (h("div", { class: "roomRow" }, h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomCategory)}`, onClick: () => this.toggleCategory(roomCategory) }, h("div", { class: 'categoryName' }, h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomCategory) })), roomCategory.expanded ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), this.getGeneralCategoryDayColumns('category_' + this.getCategoryId(roomCategory), true, index)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     */
    getRoomsByCategory(roomCategory) {
        // Check accordion is expanded.
        if (!roomCategory.expanded) {
            return null;
        }
        return this.getCategoryRooms(roomCategory)?.map(room => {
            if (!room.is_active) {
                return null;
            }
            const haveSingleRooms = this.getTotalPhysicalRooms(roomCategory) <= 1;
            const name = haveSingleRooms ? this.getCategoryName(roomCategory) : this.getRoomName(room);
            return (h("div", { class: "roomRow" }, h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomCategory) <= 1 ? 'pl10' : ''} ${'room_' + this.getRoomId(room)}`, "data-room-name": name, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": this.getRoomId(room), onClick: () => {
                    if (!calendar_data.housekeeping_enabled) {
                        return;
                    }
                    this.selectedRoom = room;
                    this.hkModal.openModal();
                }, onMouseEnter: () => {
                    this.interactiveTitle[room.id]?.style?.setProperty('--ir-interactive-hk-bg', 'var(--wa-color-neutral-fill-quiet)');
                }, onMouseLeave: () => {
                    this.interactiveTitle[room.id]?.style?.removeProperty('--ir-interactive-hk-bg');
                } }, h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': 'var(--wa-color-neutral-fill-quiet)' }, hkStatus: calendar_data.housekeeping_enabled && room.hk_status !== '001', popoverTitle: name }, room.hk_status !== '001' && (h("div", { slot: "end", class: "d-flex align-items-center", style: { gap: '0.5rem' } }, room.hk_status === '004' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("title", null, "Inspected"), h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, room.hk_status === '002' && h("title", null, "This unit is dirty"), h("path", { fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))))))), this.getGeneralRoomDayColumns(this.getRoomId(room), roomCategory, name)));
        });
    }
    getRoomRows() {
        return this.calendarData.roomsInfo?.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return (h(Fragment, null, this.getRoomCategoryRow(roomCategory, index), roomCategory.expanded && this.getRoomsByCategory(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    async confirmHousekeepingUpdate(e, status) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.isLoading = status === '004' ? 'right' : 'middle';
            await this.housekeepingService.setExposedUnitHKStatus({
                property_id: this.propertyId,
                // housekeeper: this.selectedRoom?.housekeeper ? { id: this.selectedRoom?.housekeeper?.id } : null,
                status: {
                    code: status,
                },
                unit: {
                    id: this.selectedRoom?.id,
                },
            });
            if (['001', '004'].includes(status)) {
                await this.housekeepingService.executeHKAction({
                    actions: [
                        {
                            description: 'Cleaned',
                            hkm_id: this.selectedRoom?.housekeeper?.id || null,
                            unit_id: this.selectedRoom?.id,
                            booking_nbr: this.bookingMap.get(this.selectedRoom?.id) ?? null,
                            status: status,
                        },
                    ],
                });
            }
        }
        finally {
            this.isLoading = null;
            this.selectedRoom = null;
            this.hkModal.closeModal();
        }
    }
    render() {
        return (h(Host, { key: '3edaaacd33492cd989c144c039d7afc54a4a928a' }, h("div", { key: 'fb27870b459bef8bcbfb1dcdff1cba4b699dde70', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: '82d00c4a52830af695cf0268d964ccb4a1a85b5d', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), h("ir-modal", { key: '1a71ec86a1a232aebdf0f7bc42eff4b78048dbd0', ref: el => (this.hkModal = el), leftBtnText: locales?.entries?.Lcz_Cancel, middleBtnText: this.renderModalMiddleButtonText(), middleBtnActive: true, rightBtnText: this.renderModalRightButtonText(), modalBody: this.renderModalBody(), onConfirmModal: e => this.confirmHousekeepingUpdate(e, '004'), onMiddleModal: e => this.confirmHousekeepingUpdate(e, this.selectedRoom?.hk_status === '002' ? '001' : '002'), autoClose: false, isMiddleButtonLoading: this.isLoading === 'middle', isLoading: this.isLoading === 'right', onCancelModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
                this.hkModal.closeModal();
            } })));
    }
    renderModalBody() {
        if (!this.selectedRoom) {
            return null;
        }
        return (h("p", null, "Update unit ", this.selectedRoom?.name, " to ...")
        // <ir-select
        //   showFirstOption={false}
        //   selectedValue={this.selectedRoom?.hk_status === '001' ? '001' : '002'}
        //   data={[
        //     { text: 'Clean', value: '001' },
        //     { text: 'Dirty', value: '002' },
        //   ]}
        //   onSelectChange={e => (this.selectedHKStatus = e.detail)}
        // ></ir-select>
        );
    }
    renderModalMiddleButtonText() {
        if (!this.selectedRoom) {
            return null;
        }
        return this.selectedRoom.hk_status === '002' ? 'Clean' : 'Dirty';
    }
    renderModalRightButtonText() {
        if (!this.selectedRoom) {
            return null;
        }
        return this.selectedRoom.hk_status !== '004' ? 'Clean & Inspected' : 'Clean';
    }
    updateDisabledCellsCache() {
        calendar_dates.disabled_cells.clear();
        this.calendarData.roomsInfo?.forEach((roomCategory, categoryIndex) => {
            if (roomCategory.is_active) {
                this.getCategoryRooms(roomCategory)?.forEach(room => {
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
    static get watchers() { return {
        "calendarData": ["handleCalendarDataChange"]
    }; }
    static get style() { return IglCalBodyStyle0; }
}, [2, "igl-cal-body", {
        "isScrollViewDragging": [4, "is-scroll-view-dragging"],
        "propertyId": [2, "property-id"],
        "calendarData": [16],
        "today": [16],
        "currency": [8],
        "language": [1],
        "countries": [16],
        "highlightedDate": [1, "highlighted-date"],
        "dragOverElement": [32],
        "renderAgain": [32],
        "selectedRoom": [32],
        "isLoading": [32],
        "selectedRooms": [32]
    }, [[8, "dragOverHighlightElement", "dragOverHighlightElementHandler"], [8, "gotoRoomEvent", "gotoRoom"], [8, "addToBeAssignedEvent", "addToBeAssignedEvents"], [8, "closeBookingWindow", "closeWindow"]], {
        "calendarData": ["handleCalendarDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-cal-body", "igl-block-dates-view", "igl-booking-event", "igl-booking-event-hover", "ir-button", "ir-date-view", "ir-dropdown", "ir-dropdown-item", "ir-icons", "ir-interactive-title", "ir-label", "ir-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalBody);
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglCalBody as I, defineCustomElement as d };

//# sourceMappingURL=igl-cal-body2.js.map