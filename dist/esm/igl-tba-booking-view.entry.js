import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-d703e22a.js';
import { l as locales } from './locales.store-629477c2.js';
import { G as canCheckIn } from './utils-81ee5d46.js';
import { v as v4 } from './v4-964634d6.js';
import './axios-aa1335b8.js';
import './moment-ab846cee.js';
import './index-c4cf83be.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;padding:0;margin:0;gap:0.5rem}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar", 7);
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = createEvent(this, "assignRoomEvent", 7);
        this.eventData = {};
        this.categoriesData = {};
        this.renderAgain = false;
        this.selectedRoom = -1;
        this.isLoading = null;
        this.highlightSection = false;
        this.allRoomsList = [];
        this.toBeAssignedService = new ToBeAssignedService();
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
        return canCheckIn({
            from_date: this.eventData.FROM_DATE,
            to_date: this.eventData.TO_DATE,
        });
    }
    render() {
        return (h(Host, { key: '7441c4d317c4cfd9431da7bc69c9391df29972fe' }, h("div", { key: 'f26013abc3c7cf1f7cf803c26305774e8f8da381', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, h("div", { key: '806b7b4319f573700adef4b01b0038cf72aae22a', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), h("div", { key: '5a0419b44f337c69066934b73ca143da920c7e6d', class: "row m-0 p-0 actionsContainer" }, h("select", { key: 'b24c0395a2166337272413e389c3b5cc3ca01022', class: "form-control input-sm room-select flex-grow-1", id: v4(), onChange: evt => this.onSelectRoom(evt) }, h("option", { key: '1c855ef70e14832c0ca6f37c7ea77dc4849515eb', value: "", selected: this.selectedRoom == -1 }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (h("div", { class: "buttonsContainer bg-red" }, h("button", { type: "button", class: "btn btn-secondary btn-sm mx-0", onClick: evt => this.handleCloseAssignment(evt) }, h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))) : null), h("div", { key: 'd4dae4c9d62e9b9266d2ef6c5c3c7f5a3fc29840', class: "d-flex align-items-center ", style: { gap: '0.5rem', paddingInline: '5px' } }, h("ir-button", { key: '30b86f282ed3f2fc5ca19dfd5cedf1fda46025fe', isLoading: this.isLoading === 'default', size: "sm", class: "flex-grow-1", text: locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }), this.canCheckIn() && (h("ir-button", { key: '33b4f4837c58d19085799683aafc1b307f5a6975', isLoading: this.isLoading === 'checkin', size: "sm", class: "flex-grow-1", text: locales.entries.Lcz_AssignedAndChecIn, onClickHandler: evt => this.handleAssignUnit(evt, true), btn_disabled: this.selectedRoom === -1 }))), h("hr", { key: '96fad41dd48c05e317b101c723d7798bffad6b08' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

export { IglTbaBookingView as igl_tba_booking_view };

//# sourceMappingURL=igl-tba-booking-view.entry.js.map