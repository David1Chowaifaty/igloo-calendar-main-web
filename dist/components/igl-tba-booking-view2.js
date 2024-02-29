import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { v as v4 } from './v4.js';

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{padding:5px !important;padding-right:0px !important}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{width:100px}.btn-secondary.sc-igl-tba-booking-view{margin-right:8px !important}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = /*@__PURE__*/ proxyCustomElement(class IglTbaBookingView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        this.toBeAssignedService.setToken(calendar_data.token);
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
            data: { bookingId: this.eventData.ID },
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
        return (h(Host, { key: '7a934098e3221e87a7a3e0824daa359bd1858df1' }, h("div", { key: '9b4483a7943e51eaba64de49abed93a97ea144bf', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, h("div", { key: '9cbe08be8f86b110d9e9ce7343d3af107f281fac', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), h("div", { key: '6c2c1733dbb035341a4ce50de1dc5e3d60bb56c4', class: "row m-0 p-0 actionsContainer" }, h("div", { key: '1e1ac9d3d4760aaf2e88849830b03e66541883fa', class: "d-inline-block p-0 selectContainer" }, h("select", { key: '2b4e0a20871dc8a22b7e57c108d0126c15dadc47', class: "form-control input-sm", id: v4(), onChange: evt => this.onSelectRoom(evt) }, h("option", { key: '6b2f6435e7e5fd4a6985ff8194c714e2aa018340', value: "", selected: this.selectedRoom == -1 }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name))))), this.highlightSection ? (h("div", { class: "d-inline-block text-right buttonsContainer" }, h("button", { type: "button", class: "btn btn-secondary btn-sm", onClick: evt => this.handleCloseAssignment(evt) }, "X"), h("button", { type: "button", class: "btn btn-primary btn-sm", onClick: evt => this.handleAssignUnit(evt), disabled: this.selectedRoom === -1 }, locales.entries.Lcz_Assign))) : null), h("hr", { key: '7410c020011806d0b5b363b41b9c02b81d3092c3' }))));
    }
    static get style() { return IglTbaBookingViewStyle0; }
}, [2, "igl-tba-booking-view", {
        "calendarData": [16],
        "selectedDate": [8, "selected-date"],
        "eventData": [16],
        "categoriesData": [16],
        "categoryId": [8, "category-id"],
        "categoryIndex": [8, "category-index"],
        "eventIndex": [8, "event-index"],
        "renderAgain": [32],
        "selectedRoom": [32]
    }, [[8, "highlightToBeAssignedBookingEvent", "highlightBookingEvent"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-tba-booking-view"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglTbaBookingView);
            }
            break;
    } });
}

export { IglTbaBookingView as I, defineCustomElement as d };

//# sourceMappingURL=igl-tba-booking-view2.js.map