'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const toBeAssigned_service = require('./toBeAssigned.service-40fc68e0.js');
const locales_store = require('./locales.store-4301bbe8.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const v4 = require('./v4-9b297151.js');
require('./axios-b86c5465.js');
require('./utils-0869c24f.js');
require('./moment-1780b03a.js');
require('./index-5e99a1fe.js');

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box}.btn-secondary.sc-igl-tba-booking-view{margin-right:8px !important}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = index.createEvent(this, "assignRoomEvent", 7);
        this.highlightSection = false;
        this.allRoomsList = [];
        this.toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
        this.calendarData = undefined;
        this.selectedDate = undefined;
        this.eventData = {};
        this.categoriesData = {};
        this.categoryId = undefined;
        this.categoryIndex = undefined;
        this.eventIndex = undefined;
        this.renderAgain = false;
        this.selectedRoom = -1;
    }
    onSelectRoom(evt) {
        if (evt.stopImmediatePropagation) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
        }
        this.selectedRoom = parseInt(evt.target.value);
    }
    // componentDidLoad(){
    //   this.initializeToolTips();
    // }
    componentShouldUpdate(newValue, oldValue, propName) {
        if (propName === 'selectedDate' && newValue !== oldValue) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            return true; // Prevent update for a specific prop value
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
    async handleAssignUnit(event) {
        try {
            event.stopImmediatePropagation();
            event.stopPropagation();
            if (this.selectedRoom) {
                await this.toBeAssignedService.assignUnit(this.eventData.BOOKING_NUMBER, this.eventData.ID, this.selectedRoom);
                // //let assignEvent = transformNewBooking(result);
                // const newEvent = { ...this.eventData, ID: this.eventData.ID };
                // //this.calendarData.bookingEvents.push(newEvent);
                // //console.log(newEvent);
                // this.addToBeAssignedEvent.emit({
                //   key: 'tobeAssignedEvents',
                //   //data: [assignEvent[0]],
                // });
                //this.assignRoomEvent.emit({ key: 'assignRoom', data: newEvent });
                let assignEvent = Object.assign(Object.assign({}, this.eventData), { PR_ID: this.selectedRoom });
                this.addToBeAssignedEvent.emit({
                    key: 'tobeAssignedEvents',
                    data: [assignEvent],
                });
                this.assignRoomEvent.emit({ key: 'assignRoom', data: assignEvent });
            }
        }
        catch (error) {
            //   toastr.error(error);
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
        // ID: "NEW_TEMP_EVENT",
        // STATUS: "PENDING_CONFIRMATION"
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
    renderView() {
        this.renderAgain = !this.renderAgain;
        // this.initializeToolTips();
    }
    render() {
        return (index.h(index.Host, { key: '7a1116e919d514d370d136662b96c3e8b523ec3b' }, index.h("div", { key: '1401953c331541b2d00f66d3c8d79ec35a940bc1', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: '514d3baa9dcbbf0d69ab87d8d9e594559200f817', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), index.h("div", { key: '68824a86364170567615a7ddfe87c353e70f0d33', class: "row m-0 p-0 actionsContainer" }, index.h("select", { key: '06119bd90afc3e411ec689fac725d66bc87eaac1', class: "form-control input-sm room-select", id: v4.v4(), onChange: evt => this.onSelectRoom(evt) }, index.h("option", { key: 'c3b2135429f65ae15c6e6adf9c03c84ffcc29c16', value: "", selected: this.selectedRoom == -1 }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (index.h("div", { class: "d-flex buttonsContainer" }, index.h("button", { type: "button", class: "btn btn-secondary btn-sm", onClick: evt => this.handleCloseAssignment(evt) }, index.h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("ir-button", { isLoading: irInterceptor_store.isRequestPending('/Assign_Exposed_Room'), size: "sm", text: locales_store.locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }))) : null), index.h("hr", { key: '8694270935d27233334992664320d502fdd89137' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignUnitEvent = index.createEvent(this, "assignUnitEvent", 7);
        this.calendarData = undefined;
        this.selectedDate = undefined;
        this.categoriesData = {};
        this.categoryId = undefined;
        this.eventDatas = undefined;
        this.categoryIndex = undefined;
        this.renderAgain = false;
    }
    // private localEventDatas;
    componentWillLoad() {
        // this.localEventDatas = this.eventDatas;
    }
    handleAssignRoomEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.eventDatas = this.eventDatas.filter((eventData) => eventData.ID != opt.data.ID);
        this.calendarData.bookingEvents.push(opt.data);
        this.assignUnitEvent.emit({
            key: "assignUnit",
            data: {
                RT_ID: this.categoryId,
                selectedDate: this.selectedDate,
                assignEvent: opt.data,
                calendarData: this.calendarData,
            },
        });
        // if(this.localEventDatas.length){
        this.renderView();
        // }
    }
    getEventView(categoryId, eventDatas) {
        return eventDatas.map((eventData, ind) => (index.h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: (evt) => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (index.h(index.Host, { key: 'c19d805a7b472f5d1ed42cfd5a19f48a154e5033' }, index.h("div", { key: '664a036293b0d4dc7bc523fbb97a0b152b5af7b4', class: "sectionContainer" }, index.h("div", { key: '44d3ed1e0a770c532ab5e3827e92d1d8500e071b', class: "font-weight-bold mt-1 font-small-3" }, this.categoriesData[this.categoryId].name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

exports.igl_tba_booking_view = IglTbaBookingView;
exports.igl_tba_category_view = IglTbaCategoryView;

//# sourceMappingURL=igl-tba-booking-view_2.cjs.entry.js.map