'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-DTJfDEOf.js');
var utils = require('./utils-oW1g5Bef.js');
var t = require('./t-CyRK1btk.js');
var number = require('./number-D7i5wAQq.js');
var utils$1 = require('./utils-C5I0LkiV.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-BFzTbV-r.js');
require('./types-BlCoz3jZ.js');
require('./booking-CQEjAIov.js');
require('./moment-CdViwxPQ.js');
require('./locales.store-BMTss6fG.js');
require('./calendar-data-HgC39-BR.js');
require('./functions-CsGCS8vQ.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');

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
        return (index.h(index.Host, { key: 'e4c4d52a110e84ccb9c8331bfbbdc21227f00244' }, index.h("wa-card", { key: 'e9990d81ad083a14a7a5cec384f9d98099630be2', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, index.h("div", { key: '5d2ce5daa4d7dcaa9567997e3691b3f9c781fba0', slot: "header", class: "tba__header", title: t.t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, index.h("p", { key: 'f6bd22a39c266d518de14b464c66fc64824064a7', class: "tba__booking-number" }, number.formatBookingNumber(booking_nbr)), index.h("span", { key: 'bacdb6d713ee7b9ccfb8194c7797cc1873103618', class: "tba__separator" }, "-"), index.h("p", { key: 'cf683127de7322b2850c0c76ac3c9bc7e511a5da', class: "tba__guest-name" }, utils.guestName(this.room)), occupancyLabel && (index.h("p", { key: '2cdafc653e3f5bf9083a9945fa37584dfb89920b', class: "tba__occupancy" }, index.h("span", { key: '7a6e72736d4de7b9975be73a32a73a061ea95d19', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: 'b4de3bb96132fb92897bd8d3691f15ce32a5d1ef', class: "tba__occupancy-values" }, occupancyLabel), index.h("span", { key: '54077eecc39b869fea2a10a7a80c8713f58d1433', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: '81e67c685288063db07a579efcd9a50d67343225', class: "tba__actions" }, index.h("wa-select", { key: '36a885234387a73cbfd8797d91a7070d2ffbbfc2', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, index.h("wa-option", { key: '795ea5d90b375594090b92791dcd1fda6d2a833f', value: "" }, t.t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (index.h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (index.h("div", { key: '3ed612a86667d8b8aa60816b2d37eaf1ad518296', class: "tba__close" }, index.h("wa-button", { key: '70b642ec0841c9bed728ffbfb92660a9bd8f3091', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, index.h("wa-icon", { key: '9da944beb64b24764f5c5425f3e1c781fd27c289', name: "xmark" }))))), index.h("div", { key: '499d7d42999bfdde85de88420af173642fe64a87', class: "tba__assign" }, index.h("wa-button", { key: 'de34404ff9887b5aaaab7c355f5da9e03affeee4', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t.t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (index.h("wa-button", { key: '6d10b28adbc56d0d422f9e16e6eeb13356b6aead', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t.t('Lcz_AssignedAndChecIn')))))));
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
