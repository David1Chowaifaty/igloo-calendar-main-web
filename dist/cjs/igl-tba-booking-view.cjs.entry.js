'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-D33yRZ5Q.js');
var utils = require('./utils-BD2lwmPo.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var utils$1 = require('./utils-BEjK-V-3.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./types-BVJQZ50e.js');
require('./calendar-dates-BxDGM1ix.js');
require('./moment-CdViwxPQ.js');
require('./booking-Cntup1BP.js');
require('./locale-scope-Cch-vf1R.js');
require('./calendar-data-ShS6b-Ns.js');
require('./functions-CaNAUyCw.js');
require('./ir-date-CbkOKs2C.js');
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
        return (index.h(index.Host, { key: 'bd51acaddcdf09fa7ee60585f545a3759822f475' }, index.h("wa-card", { key: '63de5d47a59c232632083504e9e87edfd135e1fc', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, index.h("div", { key: '3ea822ad31ee6fa713afb955f64d0954534c811f', slot: "header", class: "tba__header", title: t.t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, index.h("p", { key: 'e96002fa48aa5ca9e6ee7a2ea19f01ad75e3fc79', class: "tba__booking-number" }, number.formatBookingNumber(booking_nbr)), index.h("span", { key: 'c8ac6e474b2877838f69c5c18e6791b1d4ded2fc', class: "tba__separator" }, "-"), index.h("p", { key: 'f100ede2c85718946a896a842fa3ae9cd304c3fd', class: "tba__guest-name" }, utils.guestName(this.room)), occupancyLabel && (index.h("p", { key: '10ef03d927cda9e4b9d92e1eef14c80fa0e9f427', class: "tba__occupancy" }, index.h("span", { key: '22c07ee8480201f1ec23830132e3397a7fbb2df4', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: '4f315a83d305a6573dfb1e278ae38c4f52a34883', class: "tba__occupancy-values" }, occupancyLabel), index.h("span", { key: 'c5ef9d01ea4d48f4e9cd69637c316515701e1d79', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: 'c08064c19832ed2d7ae23b8a5975075158107b52', class: "tba__actions" }, index.h("wa-select", { key: 'ae98db651cfb30aca3ebbdce924a52d44f2c8c67', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, index.h("wa-option", { key: '4c2ab48c523f481207a073c342868e4821ace324', value: "" }, t.t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (index.h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (index.h("div", { key: 'a0ec85ba8919baf3ecda065d5a27ee3762581a8a', class: "tba__close" }, index.h("wa-button", { key: '8ea409467cfb508d83c09713a0095c628bbde1c8', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, index.h("wa-icon", { key: '6ab116cdbd1921789e204084764a56fd3a9c552e', name: "xmark" }))))), index.h("div", { key: 'eee3386dfa00e3a27d903b8852d4d953cd0a908e', class: "tba__assign" }, index.h("wa-button", { key: '0e0b080c3f29a9db4d01118f876d485ab26bb902', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t.t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (index.h("wa-button", { key: 'f6a14ea9a0ad4f9bc538ac66feb26711365643ab', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t.t('Lcz_AssignedAndChecIn')))))));
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
