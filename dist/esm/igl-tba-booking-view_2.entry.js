import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-fa5df96f.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { i as isRequestPending } from './ir-interceptor.store-651abd9c.js';
import { v as v4 } from './v4-964634d6.js';
import './axios-ab377903.js';
import './utils-60c47df2.js';
import './moment-ab846cee.js';
import './index-1d7b1ff2.js';

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box}.btn-secondary.sc-igl-tba-booking-view{margin-right:8px !important}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = createEvent(this, "assignRoomEvent", 7);
        this.highlightSection = false;
        this.allRoomsList = [];
        this.toBeAssignedService = new ToBeAssignedService();
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
        return (h(Host, { key: 'd8309b70dacd96b81f356b5352d93769165769da' }, h("div", { key: 'fc5b233aedb231e62d16bb0425edc675705221dc', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, h("div", { key: '0619f8407ab3f56842471c814401a8c288bc3189', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), h("div", { key: 'be026aff50299dda9a80bc74188ef91453ad13df', class: "row m-0 p-0 actionsContainer" }, h("select", { key: '7a01a944533267e6086e70a1140cf8b5a3807b36', class: "form-control input-sm room-select", id: v4(), onChange: evt => this.onSelectRoom(evt) }, h("option", { key: '3a503700b860696e6a82e86bcb269d92e406ea68', value: "", selected: this.selectedRoom == -1 }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (h("div", { class: "d-flex buttonsContainer" }, h("button", { type: "button", class: "btn btn-secondary btn-sm", onClick: evt => this.handleCloseAssignment(evt) }, h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), h("ir-button", { isLoading: isRequestPending('/Assign_Exposed_Room'), size: "sm", text: locales.entries.Lcz_Assign, onClickHanlder: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }))) : null), h("hr", { key: '40fccea3966e523db430311bfe1db335c48d284d' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
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
        return eventDatas.map((eventData, ind) => (h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: (evt) => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (h(Host, { key: 'ff80106377a1f80ea01d7bd66792e866ac785721' }, h("div", { key: '00e7669610888ace10b0193b283d3ae3b0311905', class: "sectionContainer" }, h("div", { key: 'bca7e2b5a84ce2df5aa6118ea40c566db0795211', class: "font-weight-bold mt-1 font-small-3" }, this.categoriesData[this.categoryId].name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

export { IglTbaBookingView as igl_tba_booking_view, IglTbaCategoryView as igl_tba_category_view };

//# sourceMappingURL=igl-tba-booking-view_2.entry.js.map