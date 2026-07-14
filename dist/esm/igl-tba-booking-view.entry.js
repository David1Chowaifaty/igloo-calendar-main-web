import { r as registerInstance, c as createEvent, h, H as Host } from './index-Nexq2OjX.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-CkGLtlaA.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { c as canCheckIn } from './utils-CRe_zSvY.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './index-BX-r5OtJ.js';
import './index-DeW5X45W.js';
import './calendar-data-CPCc-_Kx.js';
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
        return (h(Host, { key: 'e0a41ad17b1456f83c768fd524342b0606a6f3c9' }, h("wa-card", { key: 'f3a7ff0d904fde1acde1ff6a3f2e36591c69671f', appearance: "filled", class: `tba ${this.highlightSection ? '--active' : ''}`, onClick: () => this.handleHighlightAvailability() }, h("div", { key: '7cbe75b6b7d6f97b0ab780b3e13fff738cc6961e', slot: "header", class: `tba__header`, title: "Click to assign unit" }, h("p", { key: 'db30f0e6f11bd669310df826837e111efe59b80c', class: "tba__booking-number" }, this.eventData.BOOKING_NUMBER), h("span", { key: '0d158087a971f5cd60b8b0497ae7eb51b153743f', class: "tba__separator" }, "-"), h("p", { key: '6b9b1dd1f74d81262ba7507dc3cd5b83943fc868', class: "tba__guest-name" }, this.eventData.NAME), this.eventData.occupancy && (h("p", { key: '156aab5523431c21f17bcc7a55519b9b81ee291d', class: "tba__occupancy" }, h("span", { key: '7057be11435b4b472cc7121c7d16e5c2dd5ce7cf', class: "tba__occupancy-paren" }, "( "), h("span", { key: '50dc8acd343c56e344de3e72c9cb3ac640819f1c', class: "tba__occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), h("span", { key: '5222d34f8d1ea9c35d1ec457d5ca5a752a46ce57', class: "tba__occupancy-paren" }, " )")))), h("div", { key: 'bead4696ae060d2345cff25267049c0de9c6e778', class: "tba__actions" }, h("wa-select", { key: '1c80cd71995894930d2d03103d82001a2c173c19', defaultValue: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), class: "tba__select", id: v4(), size: "s", value: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), onchange: evt => this.onSelectRoom(evt) }, h("wa-option", { key: 'a772f17fb1f8fb3c9f7a599545daa0c7197865f0', value: "" }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("wa-option", { value: room.id.toString() }, room.name)))), this.highlightSection ? (h("div", { class: "tba__close" }, h("wa-button", { type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: evt => this.handleCloseAssignment(evt) }, h("wa-icon", { name: "xmark" })))) : null), h("div", { key: 'e2b218eb61df75617ed4b78f3e41d87fd0f9ad73', class: "tba__assign" }, h("wa-button", { key: '9a780ff138cdf3d0ceb7e06ed8f1a64dedda6e8e', class: "tba__assign-btn", size: "s", variant: "brand", appearance: this.canCheckIn() ? 'outlined' : 'accent', loading: this.isLoading === 'default', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt) }, locales.entries.Lcz_Assign), this.canCheckIn() && (h("wa-button", { key: 'deb181f3caba5bb156be6b3215e07c1201284930', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.isLoading === 'checkin', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt, true) }, locales.entries.Lcz_AssignedAndChecIn))))));
    }
};
IglTbaBookingView.style = iglTbaBookingViewCss();

export { IglTbaBookingView as igl_tba_booking_view };
