'use strict';

var index = require('./index-CJ0kc5p1.js');
var toBeAssigned_service = require('./toBeAssigned.service-CIrIh89u.js');
var locales_store = require('./locales.store-BfrChT1G.js');
var utils = require('./utils-CHYeTDt_.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./index-dbmC5P-h.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CTxCbso4.js');
require('./type-Dy9pVS4V.js');

const iglTbaBookingViewCss = () => `.sc-igl-tba-booking-view-h{display:block;margin-top:1rem}.tba.sc-igl-tba-booking-view{--spacing:0.5rem}.tba.sc-igl-tba-booking-view::part(body),.tba.sc-igl-tba-booking-view [part~="body"]{display:flex;flex-direction:column;gap:0.5rem}.tba__header.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;white-space:nowrap;cursor:pointer;--space-y:0.1rem;padding-top:var(--space-y);padding-bottom:var(--space-y)}.tba.--active.sc-igl-tba-booking-view::part(header),.tba.--active.sc-igl-tba-booking-view [part~="header"]{background-color:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.tba__header--active.sc-igl-tba-booking-view{background-color:#f9f9c9}.tba__booking-number.sc-igl-tba-booking-view,.tba__guest-name.sc-igl-tba-booking-view,.tba__occupancy.sc-igl-tba-booking-view{margin:0;padding:0}.tba__separator.sc-igl-tba-booking-view{flex-shrink:0}.tba__guest-name.sc-igl-tba-booking-view{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tba__actions.sc-igl-tba-booking-view{display:flex;align-items:center;gap:16px;width:100%}.tba__select.sc-igl-tba-booking-view{flex:1;min-width:0}.tba__close.sc-igl-tba-booking-view{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.tba__assign.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.tba__assign-btn.sc-igl-tba-booking-view{flex:1}@media (min-width: 768px){.tba__guest-name.sc-igl-tba-booking-view{max-width:180px}}`;

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
        return (index.h(index.Host, { key: 'e48d2926f28ed5bb21272681701cfbc00b87dab5' }, index.h("wa-card", { key: '14c6a7fb703565258ff0322ee0cb925e0e76083d', appearance: "filled", class: `tba ${this.highlightSection ? '--active' : ''}`, onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: 'cd596b1f4b299e4140a775e6ad67b6ac4cd6bb4a', slot: "header", class: `tba__header`, title: "Click to assign unit" }, index.h("p", { key: 'c0f16d86e1e10136899870a0b1a1899e065dcc4c', class: "tba__booking-number" }, this.eventData.BOOKING_NUMBER), index.h("span", { key: '9a5dd5fc029240891af8d3e5c22427e7216a703c', class: "tba__separator" }, "-"), index.h("p", { key: 'c08178a34dec5956ff7961d9d58c49eede6da16e', class: "tba__guest-name" }, this.eventData.NAME), this.eventData.occupancy && (index.h("p", { key: '0c900eacd933439710dfbe21f23d1a63add707f3', class: "tba__occupancy" }, index.h("span", { key: 'bb49f0900b18078f6a9b68f042bbefc1535331e6', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: 'ed3179803497c0a0276d2dc2de40d9318c1b0e3d', class: "tba__occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), index.h("span", { key: 'dcaf5a7c9033487a2ebf9b1ee661b9e593817a6d', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: '9e673536ca52e3de5649ed563ff20f7af8f9046e', class: "tba__actions" }, index.h("wa-select", { key: '9d087ea1d4c27dc1ea645ba55160d754bed33d3f', defaultValue: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), class: "tba__select", id: v4.v4(), size: "s", value: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), onchange: evt => this.onSelectRoom(evt) }, index.h("wa-option", { key: '149429875c2dc0e0192c43960ff9398673feb2a1', value: "" }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("wa-option", { value: room.id.toString() }, room.name)))), this.highlightSection ? (index.h("div", { class: "tba__close" }, index.h("wa-button", { type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: evt => this.handleCloseAssignment(evt) }, index.h("wa-icon", { name: "xmark" })))) : null), index.h("div", { key: 'fbd272f51dc6162c4f327351e192072563322797', class: "tba__assign" }, index.h("wa-button", { key: 'b98707990fff9bb3b8186f6776036492641449ea', class: "tba__assign-btn", size: "s", variant: "brand", appearance: this.canCheckIn() ? 'outlined' : 'accent', loading: this.isLoading === 'default', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt) }, locales_store.locales.entries.Lcz_Assign), this.canCheckIn() && (index.h("wa-button", { key: '3cc3608e08e13dc3121b01b6182c807ff3d1098e', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.isLoading === 'checkin', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt, true) }, locales_store.locales.entries.Lcz_AssignedAndChecIn))))));
    }
};
IglTbaBookingView.style = iglTbaBookingViewCss();

exports.igl_tba_booking_view = IglTbaBookingView;
