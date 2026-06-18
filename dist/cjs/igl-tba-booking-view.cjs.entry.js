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
        return (index.h(index.Host, { key: '5c4f86a972ca89512506e32a342f74da27968650' }, index.h("wa-card", { key: '211fe4b5025187a011e5a3a926690b974fa28ed2', appearance: "filled", class: `tba ${this.highlightSection ? '--active' : ''}`, onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: 'f518f10a3b9a0900ce0055ba3733bb8cd8d22bdf', slot: "header", class: `tba__header`, title: "Click to assign unit" }, index.h("p", { key: '18dc1af4369cf22169922f9fd75a7ab285bcf229', class: "tba__booking-number" }, this.eventData.BOOKING_NUMBER), index.h("span", { key: '68c867e1a99fc1a4360495dce014965d4bfa9c81', class: "tba__separator" }, "-"), index.h("p", { key: 'd4d126a05946e65f5c7f87290576b6c2b4ea8623', class: "tba__guest-name" }, this.eventData.NAME), this.eventData.occupancy && (index.h("p", { key: '2760da38aad6f4c01c08785a335ea547a0348848', class: "tba__occupancy" }, index.h("span", { key: '0d933a70f2011d4f7c082bcc0c826c73b040e4ce', class: "tba__occupancy-paren" }, "( "), index.h("span", { key: '7e964f2b3bd0b6b778f7a79e6fd52eba428019a1', class: "tba__occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), index.h("span", { key: 'f344f8a394fd783a792530ed8897b47be50be16b', class: "tba__occupancy-paren" }, " )")))), index.h("div", { key: '42ae87d38ecb5920cb4abfa4d6d3cbafae5006a2', class: "tba__actions" }, index.h("wa-select", { key: 'a44d891fc1d0761f0d210eaded7b7906e1859309', defaultValue: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), class: "tba__select", id: v4.v4(), size: "s", value: this.selectedRoom === -1 ? '' : this.selectedRoom.toString(), onchange: evt => this.onSelectRoom(evt) }, index.h("wa-option", { key: '499570f04cb84184fa25d2bf9b35f5af28fa6244', value: "" }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("wa-option", { value: room.id.toString() }, room.name)))), this.highlightSection ? (index.h("div", { class: "tba__close" }, index.h("wa-button", { type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: evt => this.handleCloseAssignment(evt) }, index.h("wa-icon", { name: "xmark" })))) : null), index.h("div", { key: '4f3f793c04e5e4235e27c01ed6bddd50f9cbb015', class: "tba__assign" }, index.h("wa-button", { key: 'cd55b1ccc57af57089098524c7d1d346a0e41658', class: "tba__assign-btn", size: "s", variant: "brand", appearance: this.canCheckIn() ? 'outlined' : 'accent', loading: this.isLoading === 'default', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt) }, locales_store.locales.entries.Lcz_Assign), this.canCheckIn() && (index.h("wa-button", { key: '7b1a9b1143cc231e99b622795280c3d8135e371b', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.isLoading === 'checkin', disabled: this.selectedRoom === -1, onClick: evt => this.handleAssignUnit(evt, true) }, locales_store.locales.entries.Lcz_AssignedAndChecIn))))));
    }
};
IglTbaBookingView.style = iglTbaBookingViewCss();

exports.igl_tba_booking_view = IglTbaBookingView;
