'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const toBeAssigned_service = require('./toBeAssigned.service-05da179e.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-32be062a.js');
const v4 = require('./v4-9b297151.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');
require('./index-fbf1fe1d.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
require('./type-53035218.js');

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block;margin-top:1rem}.tba.sc-igl-tba-booking-view{--spacing:0.5rem}.tba.sc-igl-tba-booking-view::part(body){display:flex;flex-direction:column;gap:0.5rem}.tba__header.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;white-space:nowrap;cursor:pointer;--space-y:0.1rem;padding-top:var(--space-y);padding-bottom:var(--space-y)}.tba.--active.sc-igl-tba-booking-view::part(header){background-color:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.tba__header--active.sc-igl-tba-booking-view{background-color:#f9f9c9}.tba__booking-number.sc-igl-tba-booking-view,.tba__guest-name.sc-igl-tba-booking-view,.tba__occupancy.sc-igl-tba-booking-view{margin:0;padding:0}.tba__separator.sc-igl-tba-booking-view{flex-shrink:0}.tba__guest-name.sc-igl-tba-booking-view{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tba__actions.sc-igl-tba-booking-view{display:flex;align-items:center;gap:16px;width:100%}.tba__select.sc-igl-tba-booking-view{flex:1;min-width:0}.tba__close.sc-igl-tba-booking-view{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.tba__assign.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.tba__assign-btn.sc-igl-tba-booking-view{flex:1}@media (min-width: 768px){.tba__guest-name.sc-igl-tba-booking-view{max-width:180px}}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = index.createEvent(this, "assignRoomEvent", 7);
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
    toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
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
        return utils.canCheckIn({
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
        return (index.h(index.Host, { key: '2649a2eec6efcfa0fa193e46bd4bc8d27325d7c3' }, index.h("wa-card", { key: '9b8ebe585e12fe131741700da2a47061e6c169a5', appearance: "filled", class: `tba ${this.highlightSection ? '--active' : ''}`, onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: 'cf24f4a544946aedca17c61751738aaff8ece813', slot: "header", class: `tba__header`, title: "Click to assign unit" }, index.h("p", { key: '9340e52aa0188b9f792bdae6215a121e78d697f1', class: "tba__booking-number" }, this.eventData.BOOKING_NUMBER), index.h("span", { key: '161b38be4460322693778298f1f87f4c9c0798d3', class: "tba__separator" }, "-"), index.h("p", { key: 'aea66599ee9e469ec89ef8ecd5b86caf935fc6c3', class: "tba__guest-name" }, this.eventData.NAME), this.eventData.occupancy && (index.h("p", { key: 'f8a41273cf6558c06857b9b7a8bd2fd50f1f6a2e', class: "tba__occupancy" }, index.h("span", { key: '5f4ce94c56183b636e2ba6e65d0034e349149a2d', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: 'ff7736065c1853ae7000d4265f373ed4c12502d3', class: "tba__occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), index.h("span", { key: 'a744d00cb1ee18e936fcfa3fb01a682d0e67bbf4', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: 'b4b2f1a08ed8d8b348c3876e16dedd4f7acda88c', class: "tba__actions" }, index.h("wa-select", { key: '2c4074e87fdc307d6ea6eb812ca9a4fc03078b96', defaultValue: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), class: "tba__select", id: v4.v4(), size: "small", value: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), onchange: evt => this.onSelectRoom(evt) }, index.h("wa-option", { key: '25a60de1d33457e4e2357643c58b8c738def2b76', value: "" }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("wa-option", { value: room.id.toString() }, room.name)))), this.highlightSection ? (index.h("div", { class: "tba__close" }, index.h("wa-button", { type: "button", appearance: "plain", size: "small", class: "tba__close-btn", onClick: evt => this.handleCloseAssignment(evt) }, index.h("wa-icon", { name: "xmark" })))) : null), index.h("div", { key: 'd7e2e05d9d4a08b981830d03c64ebf1394efdb65', class: "tba__assign" }, index.h("wa-button", { key: '152868061378cab028d4325bf46f8a0388cc0f4f', class: "tba__assign-btn", size: "small", variant: "brand", appearance: this.canCheckIn() ? 'outlined' : 'accent', loading: this.isLoading === 'default', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt) }, locales_store.locales.entries.Lcz_Assign), this.canCheckIn() && (index.h("wa-button", { key: 'e433b398d8155acc3e8fd642f97a97ab73fece34', class: "tba__assign-btn", size: "small", variant: "brand", loading: this.isLoading === 'checkin', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt, true) }, locales_store.locales.entries.Lcz_AssignedAndChecIn))))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

exports.igl_tba_booking_view = IglTbaBookingView;

//# sourceMappingURL=igl-tba-booking-view.cjs.entry.js.map