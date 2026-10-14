import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { U as UnassignedUnitsService } from './index-BJQYv26i.js';
import { c as clampToLoadedRange, t as toCalendarPreviewEvents, a as toCalendarAssignedEvent, g as guestName } from './utils-DC-D1qlc.js';
import { t } from './t-DTGA0v_q.js';
import { a as formatBookingNumber } from './number-COOjxK58.js';
import { c as canCheckIn } from './utils-C5rtMj-W.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-My88Vijq.js';
import './types-CrHq6jOb.js';
import './calendar-dates-D3hVfsrC.js';
import './moment-Mki5YqAR.js';
import './booking-CwvNpV9l.js';
import './locales.store-DsOXxI8k.js';
import './calendar-data-D8EnecFU.js';
import './functions-je-FdPG-.js';
import './ir-date-CdNwD9PM.js';
import './language-observer-CHgzsZkY.js';
import './booking.dto-DVIFh8qe.js';
import './type-W0yWfEBm.js';

const iglTbaBookingViewCss = () => `.sc-igl-tba-booking-view-h{display:block;margin-top:1rem}.tba.sc-igl-tba-booking-view{--spacing:0.5rem}.tba.sc-igl-tba-booking-view::part(body),.tba.sc-igl-tba-booking-view [part~="body"]{display:flex;flex-direction:column;gap:0.5rem}.tba__header.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;white-space:nowrap;cursor:pointer;--space-y:0.1rem;padding-top:var(--space-y);padding-bottom:var(--space-y)}.tba.--active.sc-igl-tba-booking-view::part(header),.tba.--active.sc-igl-tba-booking-view [part~="header"]{background-color:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.tba__header--active.sc-igl-tba-booking-view{background-color:#f9f9c9}.tba__booking-number.sc-igl-tba-booking-view,.tba__guest-name.sc-igl-tba-booking-view,.tba__occupancy.sc-igl-tba-booking-view{margin:0;padding:0}.tba__separator.sc-igl-tba-booking-view{flex-shrink:0}.tba__guest-name.sc-igl-tba-booking-view{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tba__actions.sc-igl-tba-booking-view{display:flex;align-items:center;gap:16px;width:100%}.tba__select.sc-igl-tba-booking-view{flex:1;min-width:0}.tba__close.sc-igl-tba-booking-view{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.tba__assign.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.tba__assign-btn.sc-igl-tba-booking-view{flex:1}@media (min-width: 768px){.tba__guest-name.sc-igl-tba-booking-view{max-width:180px}}`;

function formatOccupancy({ adult_nbr, children_nbr, infant_nbr }) {
    const parts = [
        [adult_nbr, t('Lcz_AdultAbbreviation', { fallback: 'A' })],
        [children_nbr, t('Lcz_ChildAbbreviation', { fallback: 'C' })],
        [infant_nbr, t('Lcz_InfantAbbreviation', { fallback: 'I' })],
    ];
    return parts
        .filter(([count]) => count > 0)
        .map(([count, label]) => `${count}${label}`)
        .join('-');
}
const IglTbaBookingView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent");
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar");
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent");
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom");
        this.assignRoomEvent = createEvent(this, "assignRoomEvent");
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
    unassignedUnitsService = new UnassignedUnitsService();
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
            data: { bookingId: this.room.room_identifier, fromDate: clampToLoadedRange(this.room.from_date, this.room.to_date).from },
        });
        if (!this.selectedDate) {
            return;
        }
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: toCalendarPreviewEvents(this.room, this.eventContext) });
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
            const assigned = toCalendarAssignedEvent(this.room, this.selectedUnitId, this.eventContext);
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
        const canCheckInNow = canCheckIn({ from_date: from_date, to_date: to_date });
        const selectedValue = this.selectedUnitId === null ? '' : String(this.selectedUnitId);
        const actionsDisabled = this.selectedUnitId === null || this.pendingAction !== null;
        return (h(Host, { key: '1306c9a4098e98ad82e2f3313f47426ec2623482' }, h("wa-card", { key: 'f6a6c8263a4fc0b279658b6bc9b0e6c7297c06fb', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, h("div", { key: '908012bc40ba7fe02ef2b87f6a9b822298c7c171', slot: "header", class: "tba__header", title: t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, h("p", { key: '49895dcff08cd823b074b6dd25dc94ea7c6f063f', class: "tba__booking-number" }, formatBookingNumber(booking_nbr)), h("span", { key: 'e1a2c83886e47d27116846e7f7cb3cf90bf2e244', class: "tba__separator" }, "-"), h("p", { key: '4ba96a93ce9da7bb0df3555fb6bcc6b3aec39161', class: "tba__guest-name" }, guestName(this.room)), occupancyLabel && (h("p", { key: 'c4ee561a95c1466601df1700694ef52609993747', class: "tba__occupancy" }, h("span", { key: 'dd91d6dc9f4194c350a3ee73fb2e3122cb15f7d6', class: "tba__occupancy-paren" }, "( "), h("span", { key: 'ec227248dc2c9c71a460ef66e021354a23ad6122', class: "tba__occupancy-values" }, occupancyLabel), h("span", { key: 'c119e509956c1323a86b2acee4d97111a09ac3be', class: "tba__occupancy-paren" }, " )")))), h("div", { key: '848152da9cefea674b3959f29f977d620d07f3ba', class: "tba__actions" }, h("wa-select", { key: '7cc0349c1878985d95e090e333e74ec76ef0fd15', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, h("wa-option", { key: 'ea3a03417037ea5345e64a4be375615b4debe599', value: "" }, t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (h("div", { key: 'd4acdbae275d182ad78d85b2fcabba512ffc98e0', class: "tba__close" }, h("wa-button", { key: 'e6896c7503655035073277d24b17ef0a1e7775c5', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, h("wa-icon", { key: 'e9e87f55809deb6d6a58935cb899d1d52d77eaa9', name: "xmark" }))))), h("div", { key: '0188c6b874d6e77eb225d76dc878e025f8e983e9', class: "tba__assign" }, h("wa-button", { key: '7438885b25b9106bf2f66988a24404dbef7f8d10', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (h("wa-button", { key: 'f9165e67e01845ee5d9eb9eaad77baec5765d749', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t('Lcz_AssignedAndChecIn')))))));
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

export { IglTbaBookingView as igl_tba_booking_view };
