'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const toBeAssigned_service = require('./toBeAssigned.service-b1921e23.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-1ff7957f.js');
const v4 = require('./v4-9b297151.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');
require('./index-fbf1fe1d.js');
require('./calendar-data-0598de26.js');

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;padding:0;margin:0;gap:0.5rem}.booking-guest-title.sc-igl-tba-booking-view{display:flex;align-items:center;gap:0.5rem}.guest-booking-number.sc-igl-tba-booking-view,.guest-name.sc-igl-tba-booking-view,.guest-occupancy.sc-igl-tba-booking-view{margin:0;padding:0;box-sizing:border-box}.guest-name.sc-igl-tba-booking-view{max-width:120px}";
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
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('-');
    }
    render() {
        return (index.h(index.Host, { key: '84cbe95162f64dd74dec3ce6a51f886e6e128485' }, index.h("div", { key: '6bd8adadd97f7e238f2b033885a9fb4443559f21', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: '9f006d95296cdf1c82625b414802267d50b1b74d', class: `guestTitle booking-guest-title tba-guest-title pointer font-small-3 ${this.highlightSection ? 'selectedOrder is-active' : ''}`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, index.h("p", { key: 'ef966e014bf2cd4b6ec01f5f96510b7b2476b3aa', class: "guest-booking-number" }, this.eventData.BOOKING_NUMBER), index.h("span", { key: '6e2056d4a9b204a699cdfe69745b46703b93e2d4', class: "guest-separator" }, "-"), index.h("p", { key: 'b5219e9b89d9a23e0d0b0fb59582f10649e172b0', class: "guest-name truncate" }, this.eventData.NAME), this.eventData.occupancy && (index.h("p", { key: 'f305f28d8eade5e771c5396a553c3dd41a39af6b', class: "guest-occupancy" }, index.h("span", { key: 'e2eccecf2391c260bb064ff26d2d3d3bc5f85de3', class: "guest-occupancy-wrapper" }, "( "), index.h("span", { key: '411ff5b38f5b157f50e3d465eb7c8baddef239ee', class: "guest-occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), index.h("span", { key: '4331a0e14c70daa869e30c413d341556e28f56e7', class: "guest-occupancy-wrapper" }, " )")))), index.h("div", { key: '36235bdb37309354c7a40bcdb7e4abfd79741d4b', class: "row m-0 p-0 actionsContainer" }, index.h("select", { key: 'aa1f7f7e3ac84d9b0b522bf3302ca5dbcf1775ac', class: "form-control input-sm room-select flex-grow-1", id: v4.v4(), onChange: evt => this.onSelectRoom(evt) }, index.h("option", { key: '51858a8e7f9389ea9e42b8418382f010cc982057', value: "", selected: this.selectedRoom == -1 }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (index.h("div", { class: "buttonsContainer bg-red" }, index.h("button", { type: "button", class: "btn btn-secondary btn-sm mx-0", onClick: evt => this.handleCloseAssignment(evt) }, index.h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))) : null), index.h("div", { key: 'c68bef199043e9180f266e46265761849e031f08', class: "d-flex align-items-center ", style: { gap: '0.5rem', paddingInline: '5px' } }, index.h("ir-button", { key: 'c761d876b2aee00574255fe8e3f5910423e422ee', isLoading: this.isLoading === 'default', size: "sm", class: "flex-grow-1", text: locales_store.locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }), this.canCheckIn() && (index.h("ir-button", { key: 'b0859f98ec0f28f4781c060b77152c81fb30a896', isLoading: this.isLoading === 'checkin', size: "sm", class: "flex-grow-1", text: locales_store.locales.entries.Lcz_AssignedAndChecIn, onClickHandler: evt => this.handleAssignUnit(evt, true), btn_disabled: this.selectedRoom === -1 }))), index.h("hr", { key: '0f3ed5fb4900f8d1d76d7be3fcf1e7510eba2fc5' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

exports.igl_tba_booking_view = IglTbaBookingView;

//# sourceMappingURL=igl-tba-booking-view.cjs.entry.js.map