'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const toBeAssigned_service = require('./toBeAssigned.service-b71a057e.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-92c1b8ab.js');
const v4 = require('./v4-9b297151.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');
require('./index-467172e1.js');
require('./index-63734c32.js');
require('./calendar-data-b2787812.js');

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;padding:0;margin:0;gap:0.5rem}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = index.createEvent(this, "assignRoomEvent", 7);
        this.eventData = {};
        this.categoriesData = {};
        this.renderAgain = false;
        this.selectedRoom = -1;
        this.isLoading = null;
        this.highlightSection = false;
        this.allRoomsList = [];
        this.toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    }
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
        var _a, _b;
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
                if (room) {
                    // TODO:enable this when applying the check in module
                    const { adult_nbr, children_nbr, infant_nbr } = room.occupancy;
                    window.dispatchEvent(new CustomEvent('openCalendarSidebar', {
                        detail: {
                            type: 'room-guests',
                            payload: {
                                identifier: this.eventData.ID,
                                bookingNumber: this.eventData.BOOKING_NUMBER,
                                checkin: false,
                                roomName: (_b = (_a = room.unit) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '',
                                sharing_persons: room.sharing_persons,
                                totalGuests: adult_nbr + children_nbr + infant_nbr,
                            },
                        },
                        bubbles: true,
                        composed: true,
                    }));
                    console.log('event emitted directly to window 🔥');
                }
                let assignEvent = Object.assign(Object.assign({}, this.eventData), { PR_ID: this.selectedRoom });
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
            return Object.assign(Object.assign({}, room), { defaultDateRange: this.eventData.defaultDateRange, identifier: this.eventData.identifier });
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
    render() {
        return (index.h(index.Host, { key: '90f8441ec096705f445b062255583909737c6c4e' }, index.h("div", { key: '8906f700d3b23dd7719223f39deab981415ddb76', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: '82f4ddba9a669f23a37c4ffaafafe7a9bdeea234', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), index.h("div", { key: '5473e7678bcd6c73acbcc183ca738f84dec9ea9c', class: "row m-0 p-0 actionsContainer" }, index.h("select", { key: '82c2adaa2f769ed2deaee0c4d1002c31bfa3f1fa', class: "form-control input-sm room-select flex-grow-1", id: v4.v4(), onChange: evt => this.onSelectRoom(evt) }, index.h("option", { key: '56b62349cdb3375b52e525fed38582a8e63ece64', value: "", selected: this.selectedRoom == -1 }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (index.h("div", { class: "buttonsContainer bg-red" }, index.h("button", { type: "button", class: "btn btn-secondary btn-sm mx-0", onClick: evt => this.handleCloseAssignment(evt) }, index.h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))) : null), index.h("div", { key: 'af0b6d9bb5bf14d77949cf5f35e8ed655f54cc2f', class: "d-flex align-items-center ", style: { gap: '0.5rem', paddingInline: '5px' } }, index.h("ir-button", { key: '2bce044aeda7860ab8861cad3b98c5881ab28d77', isLoading: this.isLoading === 'default', size: "sm", class: "flex-grow-1", text: locales_store.locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }), this.canCheckIn() && (index.h("ir-button", { key: '5378c8fb8dfc627470dfd5bdaacfbd2f53253189', isLoading: this.isLoading === 'checkin', size: "sm", class: "flex-grow-1", text: locales_store.locales.entries.Lcz_AssignedAndChecIn, onClickHandler: evt => this.handleAssignUnit(evt, true), btn_disabled: this.selectedRoom === -1 }))), index.h("hr", { key: 'f7f3451f863ebac959e83baad26ad47050de3986' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

exports.igl_tba_booking_view = IglTbaBookingView;

//# sourceMappingURL=igl-tba-booking-view.cjs.entry.js.map