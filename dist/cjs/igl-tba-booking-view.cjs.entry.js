'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-Drnh4uEP.js');
var utils = require('./utils-BP6vnMnh.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-C1isaNqY.js');
var utils$1 = require('./utils-C5KQRlHq.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./types-BVJQZ50e.js');
require('./calendar-dates-BxDGM1ix.js');
require('./moment-CdViwxPQ.js');
require('./booking-CdR-E1kw.js');
require('./locale-scope-C7rmpwuA.js');
require('./calendar-data-Br2L_0sg.js');
require('./functions-BH56K279.js');
require('./ir-date-CUtS9vzZ.js');
require('./language-observer-DKp37LIu.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');

const iglTbaBookingViewCss = () => `.sc-igl-tba-booking-view-h{display:block;margin-top:1rem}.tba.sc-igl-tba-booking-view{--spacing:0.5rem}.tba.sc-igl-tba-booking-view::part(body),.tba.sc-igl-tba-booking-view [part~="body"]{display:flex;flex-direction:column;gap:0.5rem}.tba__header.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;white-space:nowrap;cursor:pointer;--space-y:0.1rem;padding-top:var(--space-y);padding-bottom:var(--space-y)}.tba.--active.sc-igl-tba-booking-view::part(header),.tba.--active.sc-igl-tba-booking-view [part~="header"]{background-color:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.tba__header--active.sc-igl-tba-booking-view{background-color:#f9f9c9}.tba__booking-number.sc-igl-tba-booking-view,.tba__guest-name.sc-igl-tba-booking-view,.tba__occupancy.sc-igl-tba-booking-view{margin:0;padding:0}.tba__separator.sc-igl-tba-booking-view{flex-shrink:0}.tba__guest-name.sc-igl-tba-booking-view{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tba__actions.sc-igl-tba-booking-view{display:flex;align-items:center;gap:16px;width:100%}.tba__select.sc-igl-tba-booking-view{flex:1;min-width:0}.tba__close.sc-igl-tba-booking-view{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.tba__assign.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.tba__assign-btn.sc-igl-tba-booking-view{flex:1}@media (min-width: 768px){.tba__guest-name.sc-igl-tba-booking-view{max-width:180px}}`;

function formatOccupancy({ adult_nbr, children_nbr, infant_nbr }) {
    const parts = [
        [adult_nbr, t.t('Lcz_AdultAbbreviation', { fallback: 'A' })],
        [children_nbr, t.t('Lcz_ChildAbbreviation', { fallback: 'C' })],
        [infant_nbr, t.t('Lcz_InfantAbbreviation', { fallback: 'I' })],
    ];
    return parts
        .filter(([count]) => count > 0)
        .map(([count, label]) => `${count}${label}`)
        .join('-');
}
const IglTbaBookingView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent");
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar");
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent");
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom");
        this.assignRoomEvent = index.createEvent(this, "assignRoomEvent");
    }
    calendarData;
    room;
    roomTypeId;
    roomTypeName;
    selectedDate;
    categoryIndex;
    eventIndex;
    isHighlighted = false;
    selectedUnitId = null;
    pendingAction = null;
    highlightToBeAssignedBookingEvent;
    openCalendarSidebar;
    addToBeAssignedEvent;
    scrollPageToRoom;
    assignRoomEvent;
    unassignedUnitsService = new index$1.UnassignedUnitsService();
    componentDidLoad() {
        // The first card opens highlighted so its unit previews are on the calendar as soon as the panel appears.
        if (this.categoryIndex === 0 && this.eventIndex === 0) {
            setTimeout(() => this.highlight(), 100);
        }
    }
    handleSelectedDateChange() {
        this.isHighlighted = false;
        this.selectedUnitId = null;
    }
    /** Keep the picked unit only while this card still shows the same room, and while that room still offers the unit. */
    handleRoomChange(next, prev) {
        if (next.room_identifier !== prev?.room_identifier) {
            this.selectedUnitId = null;
            return;
        }
        if (this.selectedUnitId !== null && !(next.assignable_units ?? []).some(unit => unit.pr_id === this.selectedUnitId)) {
            this.selectedUnitId = null;
        }
    }
    handleHighlightChange(event) {
        const isThisCard = event.detail.data.bookingId === this.room.room_identifier;
        if (!isThisCard) {
            this.selectedUnitId = null;
        }
        this.isHighlighted = isThisCard;
    }
    get eventContext() {
        return {
            roomsInfo: this.calendarData.roomsInfo,
            legendData: this.calendarData.formattedLegendData,
            roomTypeId: this.roomTypeId,
            roomTypeName: this.roomTypeName,
        };
    }
    highlight = () => {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            // Scroll to the first drawn night, which may be later than the stay's start if that is before the loaded range.
            data: { bookingId: this.room.room_identifier, fromDate: utils.clampToLoadedRange(this.room.from_date, this.room.to_date).from },
        });
        if (!this.selectedDate) {
            return;
        }
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: utils.toCalendarPreviewEvents(this.room, this.eventContext) });
        this.scrollPageToRoom.emit({ key: 'scrollPageToRoom', id: this.roomTypeId, refClass: `category_${this.roomTypeId}` });
    };
    handleClose = (event) => {
        event.stopPropagation();
        this.selectedUnitId = null;
        this.highlightToBeAssignedBookingEvent.emit({ key: 'highlightBookingId', data: { bookingId: '----' } });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
    };
    handleUnitChange = (event) => {
        event.stopPropagation();
        const value = event.target.value;
        this.selectedUnitId = value ? Number(value) : null;
    };
    handleAssign = (event) => this.assign(event, false);
    handleAssignAndCheckIn = (event) => this.assign(event, true);
    async assign(event, checkIn) {
        event.stopPropagation();
        if (this.selectedUnitId === null || this.pendingAction) {
            return;
        }
        this.pendingAction = checkIn ? 'checkin' : 'assign';
        try {
            const booking = await this.unassignedUnitsService.assignUnit({
                booking_nbr: this.room.booking_nbr,
                identifier: this.room.room_identifier,
                pr_id: this.selectedUnitId,
                check_in: checkIn,
            });
            if (checkIn) {
                this.openRoomGuests(booking);
            }
            const assigned = utils.toCalendarAssignedEvent(this.room, this.selectedUnitId, this.eventContext);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [assigned] });
            this.assignRoomEvent.emit(assigned);
        }
        catch (error) {
            console.error('Assigning unit failed:', error);
        }
        finally {
            this.pendingAction = null;
        }
    }
    openRoomGuests(booking) {
        const bookedRoom = booking.rooms.find(r => r.identifier === this.room.room_identifier);
        if (!bookedRoom) {
            return;
        }
        const { adult_nbr, children_nbr, infant_nbr } = bookedRoom.occupancy;
        this.openCalendarSidebar.emit({
            type: 'room-guests',
            payload: {
                identifier: this.room.room_identifier,
                bookingNumber: this.room.booking_nbr,
                checkin: false,
                roomName: typeof bookedRoom.unit === 'object' && bookedRoom.unit ? bookedRoom.unit.name : '',
                sharing_persons: bookedRoom.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    render() {
        const { booking_nbr, occupancy, from_date, to_date } = this.room;
        const occupancyLabel = occupancy ? formatOccupancy(occupancy) : '';
        const canCheckInNow = utils$1.canCheckIn({ from_date: from_date, to_date: to_date });
        const selectedValue = this.selectedUnitId === null ? '' : String(this.selectedUnitId);
        const actionsDisabled = this.selectedUnitId === null || this.pendingAction !== null;
        return (index.h(index.Host, { key: 'ecf3bbfb37ae825742b0ca4a1a916dbe18a392af' }, index.h("wa-card", { key: 'dcc29ffb4fbe6906a191669ded65fe224d5d4003', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, index.h("div", { key: '4a12515ba7ee766af2ec81f970dea98e5c626637', slot: "header", class: "tba__header", title: t.t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, index.h("p", { key: 'cd8c7fbaa96b769edba9dbdf14569f6c13567c3a', class: "tba__booking-number" }, number.formatBookingNumber(booking_nbr)), index.h("span", { key: '2c384b18b3dc4653c481826069934580863cb25d', class: "tba__separator" }, "-"), index.h("p", { key: '0e5229457f83887814e493709398fa3c14afd62b', class: "tba__guest-name" }, utils.guestName(this.room)), occupancyLabel && (index.h("p", { key: '7facf81e82562e24ab4607af975d08f0bece1af2', class: "tba__occupancy" }, index.h("span", { key: 'cf2dff6c90b31a16176956dc7e03245cebe4d958', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: '9dcf0b070795d180e7d04a3163a0c75ec7a36624', class: "tba__occupancy-values" }, occupancyLabel), index.h("span", { key: 'bbd069ed31a79cf76964d655a3223723a2d88690', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: 'aabdd3c7c9ae5f009fe408902d477760fe9de83d', class: "tba__actions" }, index.h("wa-select", { key: '4a6659253215c7542d840a38b44174c7b82a2be1', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, index.h("wa-option", { key: '7bc27a3cd9138d1a99488020c6433c728cd7a5c7', value: "" }, t.t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (index.h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (index.h("div", { key: 'b0bfcb07f1435373b291dd96551295269f1f91ab', class: "tba__close" }, index.h("wa-button", { key: 'd9b02779a630d568f94ce78116f0f380ec7e261b', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, index.h("wa-icon", { key: 'fa02ea739734fe899e01eb55500c4e75e752812a', name: "xmark" }))))), index.h("div", { key: '3f067414ea46ce95c05446a06e9dc92fd16e0b2d', class: "tba__assign" }, index.h("wa-button", { key: '8b401cb133776fc4c68341838bd0847afc3fee7a', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t.t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (index.h("wa-button", { key: '7b49a2c33c7ebe233a4e492908f35180cf1427fb', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t.t('Lcz_AssignedAndChecIn')))))));
    }
    static get watchers() { return {
        "selectedDate": [{
                "handleSelectedDateChange": 0
            }],
        "room": [{
                "handleRoomChange": 0
            }]
    }; }
};
IglTbaBookingView.style = iglTbaBookingViewCss();

exports.igl_tba_booking_view = IglTbaBookingView;
