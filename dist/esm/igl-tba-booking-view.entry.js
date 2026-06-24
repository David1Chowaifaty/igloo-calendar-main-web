import { r as registerInstance, c as createEvent, h, H as Host } from './index-D7D7fhZS.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-BKjBibRv.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { c as canCheckIn } from './utils-DvzWTdKJ.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './index-TzZ5wfUy.js';
import './index-DeW5X45W.js';
import './calendar-data-15-64PrB.js';
import './type-D7rOPtKA.js';

const iglTbaBookingViewCss = () => `.sc-igl-tba-booking-view-h{display:block;margin-top:1rem}.tba.sc-igl-tba-booking-view{--spacing:0.5rem}.tba.sc-igl-tba-booking-view::part(body),.tba.sc-igl-tba-booking-view [part~="body"]{display:flex;flex-direction:column;gap:0.5rem}.tba__header.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;white-space:nowrap;cursor:pointer;--space-y:0.1rem;padding-top:var(--space-y);padding-bottom:var(--space-y)}.tba.--active.sc-igl-tba-booking-view::part(header),.tba.--active.sc-igl-tba-booking-view [part~="header"]{background-color:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.tba__header--active.sc-igl-tba-booking-view{background-color:#f9f9c9}.tba__booking-number.sc-igl-tba-booking-view,.tba__guest-name.sc-igl-tba-booking-view,.tba__occupancy.sc-igl-tba-booking-view{margin:0;padding:0}.tba__separator.sc-igl-tba-booking-view{flex-shrink:0}.tba__guest-name.sc-igl-tba-booking-view{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tba__actions.sc-igl-tba-booking-view{display:flex;align-items:center;gap:16px;width:100%}.tba__select.sc-igl-tba-booking-view{flex:1;min-width:0}.tba__close.sc-igl-tba-booking-view{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.tba__assign.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.tba__assign-btn.sc-igl-tba-booking-view{flex:1}@media (min-width: 768px){.tba__guest-name.sc-igl-tba-booking-view{max-width:180px}}`;

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
    selectedDate;
    eventData = {};
    categoriesData = {};
    categoryId;
    categoryIndex;
    eventIndex;
    renderAgain = false;
    selectedRoom = -1;
    isLoading = null;
    highlightSection = false;
    allRoomsList = [];
    toBeAssignedService = new ToBeAssignedService();
    highlightToBeAssignedBookingEvent;
    openCalendarSidebar;
    addToBeAssignedEvent;
    scrollPageToRoom;
    assignRoomEvent;
    componentShouldUpdate(newValue, oldValue, propName) {
        if (propName === 'selectedDate' && newValue !== oldValue) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            return true;
        }
        else if (propName === 'eventData' && newValue !== oldValue) {
            this.selectedRoom = -1;
            return true;
        }
        return true;
    }
    componentWillLoad() {
        if (this.categoryIndex === 0 && this.eventIndex === 0) {
            setTimeout(() => {
                this.handleHighlightAvailability();
            }, 100);
        }
    }
    highlightBookingEvent(event) {
        let data = event.detail.data;
        if (data.bookingId != this.eventData.ID) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            this.renderView();
        }
        else {
            this.highlightSection = true;
            this.renderView();
        }
    }
    onSelectRoom(evt) {
        if (evt.stopImmediatePropagation) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
        }
        this.selectedRoom = parseInt(evt.target.value);
    }
    async handleAssignUnit(event, check_in = false) {
        try {
            event.stopImmediatePropagation();
            event.stopPropagation();
            if (this.selectedRoom) {
                this.isLoading = check_in ? 'checkin' : 'default';
                const booking = await this.toBeAssignedService.assignUnit({
                    booking_nbr: this.eventData.BOOKING_NUMBER,
                    identifier: this.eventData.ID,
                    pr_id: this.selectedRoom,
                    check_in,
                });
                const room = booking.rooms.find(r => r.identifier === this.eventData.identifier);
                console.log('room=>', room);
                if (room && check_in) {
                    // TODO:enable this when applying the check in module
                    const { adult_nbr, children_nbr, infant_nbr } = room.occupancy;
                    window.dispatchEvent(new CustomEvent('openCalendarSidebar', {
                        detail: {
                            type: 'room-guests',
                            payload: {
                                identifier: this.eventData.ID,
                                bookingNumber: this.eventData.BOOKING_NUMBER,
                                checkin: false,
                                roomName: room.unit?.name ?? '',
                                sharing_persons: room.sharing_persons,
                                totalGuests: adult_nbr + children_nbr + infant_nbr,
                            },
                        },
                        bubbles: true,
                        composed: true,
                    }));
                    console.log('event emitted directly to window 🔥');
                }
                let assignEvent = { ...this.eventData, PR_ID: this.selectedRoom };
                this.addToBeAssignedEvent.emit({
                    key: 'tobeAssignedEvents',
                    data: [assignEvent],
                });
                this.assignRoomEvent.emit({ key: 'assignRoom', data: assignEvent });
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    handleHighlightAvailability() {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: this.eventData.ID, fromDate: this.eventData.FROM_DATE },
        });
        if (!this.selectedDate) {
            return;
        }
        let filteredEvents = [];
        let allRoomsList = [];
        filteredEvents = this.eventData.availableRooms.map(room => {
            allRoomsList.push({
                calendar_cell: null,
                id: room.PR_ID,
                name: room.roomName,
            });
            return {
                ...room,
                defaultDateRange: this.eventData.defaultDateRange,
                identifier: this.eventData.identifier,
            };
        });
        this.allRoomsList = allRoomsList;
        this.addToBeAssignedEvent.emit({
            key: 'tobeAssignedEvents',
            data: filteredEvents,
        });
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: this.categoryId,
            refClass: 'category_' + this.categoryId,
        });
        this.renderView();
    }
    handleCloseAssignment(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.highlightSection = false;
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.onSelectRoom({ target: { value: '' } });
        this.selectedRoom = -1;
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.renderView();
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    canCheckIn() {
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // const now = moment();
        // if (
        //   (moment().isSameOrAfter(new Date(this.eventData.FROM_DATE), 'days') && moment().isBefore(new Date(this.eventData.TO_DATE), 'days')) ||
        //   (moment().isSame(new Date(this.eventData.TO_DATE), 'days') &&
        //     !compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour)))
        // ) {
        //   return true;
        // }
        // return false;
        return canCheckIn({
            from_date: this.eventData.FROM_DATE,
            to_date: this.eventData.TO_DATE,
        });
    }
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = 'A';
        const childLabel = 'C';
        const infantLabel = 'I';
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount}${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount}${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount}${infantLabel}`);
        }
        return parts.join('-');
    }
    render() {
        return (h(Host, { key: '88e416b86f7c093afaff0b28e48e11d645e70c41' }, h("wa-card", { key: '7e8e08dae97c4eec70b1cf6fc83735488a18899e', appearance: "filled", class: `tba ${this.highlightSection ? '--active' : ''}`, onClick: () => this.handleHighlightAvailability() }, h("div", { key: '4c4a0e976e43a90098e4694ef4b4946af1e56db8', slot: "header", class: `tba__header`, title: "Click to assign unit" }, h("p", { key: '2ce41ce13435fc0e70e056e5e8952912f9863db5', class: "tba__booking-number" }, this.eventData.BOOKING_NUMBER), h("span", { key: 'e27864c17d002c210cbfb10ba66d3c8d7d5f8cd9', class: "tba__separator" }, "-"), h("p", { key: '2065de238a6dcda6f9b46a541c6986903acb209a', class: "tba__guest-name" }, this.eventData.NAME), this.eventData.occupancy && (h("p", { key: '094e924aa71ebd40d90e7e0b80d33853949ba526', class: "tba__occupancy" }, h("span", { key: 'de4ece8cb7fd33a799073e61f9c028f7f83c1963', class: "tba__occupancy-paren" }, "( "), h("span", { key: '35a074dc81d37caaaf0b5cf4b7ea7b3a63d30bb3', class: "tba__occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), h("span", { key: 'a8fd929f9c9eaa2c65b04c316c83a5052259c784', class: "tba__occupancy-paren" }, " )")))), h("div", { key: 'e2e3f8e04fb2a2bbd221bc815e82ec3aa53812ae', class: "tba__actions" }, h("wa-select", { key: 'eb46b7f1eb81e007ed9e78ea3e3fff654b7305f1', defaultValue: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), class: "tba__select", id: v4(), size: "s", value: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), onchange: evt => this.onSelectRoom(evt) }, h("wa-option", { key: '7d8cf3b440968bca722217d7c527b9d46e8caf11', value: "" }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("wa-option", { value: room.id.toString() }, room.name)))), this.highlightSection ? (h("div", { class: "tba__close" }, h("wa-button", { type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: evt => this.handleCloseAssignment(evt) }, h("wa-icon", { name: "xmark" })))) : null), h("div", { key: '1d163817257616c6cef96bca92c1420cdc7dab0c', class: "tba__assign" }, h("wa-button", { key: '56359719203ee16e57a2f38c74fa8bfa82317669', class: "tba__assign-btn", size: "s", variant: "brand", appearance: this.canCheckIn() ? 'outlined' : 'accent', loading: this.isLoading === 'default', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt) }, locales.entries.Lcz_Assign), this.canCheckIn() && (h("wa-button", { key: 'ec1e66f3233c1a7f9bc5ececec5ab8a0cbb8667d', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.isLoading === 'checkin', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt, true) }, locales.entries.Lcz_AssignedAndChecIn))))));
    }
};
IglTbaBookingView.style = iglTbaBookingViewCss();

export { IglTbaBookingView as igl_tba_booking_view };
