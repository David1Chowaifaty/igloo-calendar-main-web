'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-5nWv-UNg.js');
var utils = require('./utils-CwFSCjU1.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var utils$1 = require('./utils-DaFypNtu.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./types-BVJQZ50e.js');
require('./calendar-dates-BxDGM1ix.js');
require('./moment-CdViwxPQ.js');
require('./booking-tmINmshP.js');
require('./calendar-data-ShS6b-Ns.js');
require('./functions-CaNAUyCw.js');
require('./ir-date-CbkOKs2C.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');

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
        return (index.h(index.Host, { key: '5f8b9b3e42848c187a8bc15b86c81ffc8de3add7' }, index.h("wa-card", { key: 'c18908307850ebe7ebf4d650eaf5e5255a3fddca', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, index.h("div", { key: '8b9f62c3b843ecb88a00689bfdbd0f1c6625ec52', slot: "header", class: "tba__header", title: t.t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, index.h("p", { key: 'da7e9f9b0a58444ef5c01419504699123af19acb', class: "tba__booking-number" }, number.formatBookingNumber(booking_nbr)), index.h("span", { key: '38e6d90c2bda32a81763ea8b5bfca34c93f80db8', class: "tba__separator" }, "-"), index.h("p", { key: 'f229395639f3d8594856367b2d50874ea4c29be5', class: "tba__guest-name" }, utils.guestName(this.room)), occupancyLabel && (index.h("p", { key: '6dd6e99665128c76dff4716b769d95cfedeb0165', class: "tba__occupancy" }, index.h("span", { key: '4d9c4a4b8fe33e1d02a34de48b8cd561ffd3a4cf', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: 'eef2ec457cc4f3a58447b1190a76ad3c0a16c536', class: "tba__occupancy-values" }, occupancyLabel), index.h("span", { key: '0fb30c2c7d2d91b1b63f34af796dffa90ed10fd0', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: '26d2efc1c1b78f2d0183aad6584e07197f16e9c3', class: "tba__actions" }, index.h("wa-select", { key: '643985cc0a190f9c9546b193255d55a1d14faaf5', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, index.h("wa-option", { key: 'fc723d84bbaeb8dec397c79f91eb5d9c208dd3d1', value: "" }, t.t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (index.h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (index.h("div", { key: '12f8453bbc4366be1fdaeb20176c9c357a06915e', class: "tba__close" }, index.h("wa-button", { key: 'f897419786fa29147c56db617c2f8c8551f35f80', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, index.h("wa-icon", { key: 'dec6f68b0b34b60d50cc16b685af8c60336cec87', name: "xmark" }))))), index.h("div", { key: '120b48d19b7cc46e72a936aea287e308cf7a95ae', class: "tba__assign" }, index.h("wa-button", { key: '4f1a9a7b7663cbf827f563b56330aa95f245efaf', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t.t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (index.h("wa-button", { key: '1f8de89cd88972df80d1e7d5e4523cd3567d7300', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t.t('Lcz_AssignedAndChecIn')))))));
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
