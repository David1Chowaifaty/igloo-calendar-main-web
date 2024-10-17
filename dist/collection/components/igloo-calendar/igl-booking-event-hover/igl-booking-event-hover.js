import { Host, h, Fragment } from "@stencil/core";
import { findCountry, formatAmount } from "../../../utils/utils";
import { EventsService } from "../../../services/events.service";
import moment from "moment";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
//import { transformNewBLockedRooms } from '../../../utils/booking';
export class IglBookingEventHover {
    constructor() {
        this.todayTimeStamp = new Date().setHours(0, 0, 0, 0);
        this.eventService = new EventsService();
        this.hideButtons = false;
        this.bookingEvent = undefined;
        this.bubbleInfoTop = false;
        this.currency = undefined;
        this.countryNodeList = undefined;
        this.is_vacation_rental = false;
        this.isLoading = undefined;
        this.shouldHideUnassignUnit = false;
    }
    componentWillLoad() {
        // console.log('this.bookingEvent', this.bookingEvent);
        this.eventService.setToken(calendar_data.token);
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            console.log(selectedRt.physicalrooms.length === 1);
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment())) {
            this.hideButtons = true;
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.hideBubble();
        }
        else
            return;
    }
    hideBubble() {
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    componentDidLoad() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getTotalOccupants() {
        var _a, _b, _c;
        const { CHILDREN_COUNT, ADULTS_COUNT } = this.bookingEvent;
        if (CHILDREN_COUNT === 0) {
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales.entries.Lcz_AdultsCaption.toLowerCase() : (_a = locales.entries.Lcz_Single_Adult) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales.entries.Lcz_AdultsCaption.toLowerCase() : (_b = locales.entries.Lcz_Single_Adult) === null || _b === void 0 ? void 0 : _b.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? locales.entries.Lcz_ChildCaption.toLowerCase() : (_c = locales.entries.Lcz_Single_Child) === null || _c === void 0 ? void 0 : _c.toLowerCase()}`;
    }
    getPhoneNumber() {
        return this.bookingEvent.PHONE;
    }
    getCountry() {
        return findCountry(this.bookingEvent.COUNTRY, this.countryNodeList).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return findCountry(this.bookingEvent.COUNTRY, this.countryNodeList).phone_prefix;
    }
    renderPhone() {
        return this.bookingEvent.COUNTRY ? `${this.bookingEvent.is_direct ? this.getPhoneCode() + '-' : ''}${this.getPhoneNumber()} - ${this.getCountry()}` : this.getPhoneNumber();
    }
    getGuestNote() {
        return this.bookingEvent.NOTES && h("p", { class: 'user-notes p-0 my-0' }, this.bookingEvent.NOTES);
    }
    getInternalNote() {
        return this.bookingEvent.INTERNAL_NOTE;
    }
    getTotalPrice() {
        return this.bookingEvent.TOTAL_PRICE;
    }
    getCheckInDate() {
        return this.bookingEvent.FROM_DATE_STR;
    }
    getCheckOutDate() {
        return this.bookingEvent.TO_DATE_STR;
    }
    getArrivalTime() {
        return this.bookingEvent.ARRIVAL_TIME;
    }
    getRatePlan() {
        return this.bookingEvent.RATE_PLAN;
    }
    getEntryDate() {
        return this.bookingEvent.ENTRY_DATE;
    }
    getReleaseAfterHours() {
        return this.bookingEvent.RELEASE_AFTER_HOURS;
    }
    isNewBooking() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isCheckedIn() {
        return this.bookingEvent.STATUS === 'CHECKED-IN';
    }
    isCheckedOut() {
        return this.bookingEvent.STATUS === 'CHECKED-OUT';
    }
    isBlockedDateEvent() {
        return this.bookingEvent.STATUS === 'BLOCKED' || this.bookingEvent.STATUS === 'BLOCKED-WITH-DATES';
    }
    getRoomId() {
        return this.bookingEvent.PR_ID;
    }
    getCategoryByRoomId(roomId) {
        // console.log("room id ",roomId)
        // console.log("booking event",this.bookingEvent)
        return this.bookingEvent.roomsInfo.find(roomCategory => roomCategory.physicalrooms.find(room => room.id === roomId));
    }
    hasSplitBooking() {
        return this.bookingEvent.hasOwnProperty('splitBookingEvents') && this.bookingEvent.splitBookingEvents;
    }
    canCheckIn() {
        if (!this.fromTimeStamp) {
            let dt = new Date(this.getCheckInDate());
            dt.setHours(0, 0, 0, 0);
            this.fromTimeStamp = dt.getTime();
        }
        if (!this.toTimeStamp) {
            let dt = new Date(this.getCheckOutDate());
            dt.setHours(0, 0, 0, 0);
            this.toTimeStamp = dt.getTime();
        }
        if (this.isCheckedIn() || this.isCheckedOut()) {
            return false;
        }
        if (this.fromTimeStamp <= this.todayTimeStamp && this.todayTimeStamp <= this.toTimeStamp) {
            return true;
        }
        else {
            return false;
        }
    }
    canCheckOut() {
        if (this.isCheckedIn() && this.todayTimeStamp <= this.toTimeStamp) {
            return true;
        }
        else {
            return false;
        }
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookingEvent = Object.assign(Object.assign({}, this.bookingEvent), opt.data);
        //console.log("blocked date booking event", this.bookingEvent);
    }
    handleEditBooking() {
        // console.log("Edit booking");
        this.bookingEvent.TITLE = locales.entries.Lcz_EditBookingFor;
        this.handleBookingOption('EDIT_BOOKING');
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    handleAddRoom() {
        let fromDate = new Date(this.bookingEvent.FROM_DATE);
        fromDate.setHours(0, 0, 0, 0);
        let from_date_str = this.getStringDateFormat(fromDate);
        let toDate = new Date(this.bookingEvent.TO_DATE);
        //toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        let to_date_str = this.getStringDateFormat(toDate);
        //console.log(this.bookingEvent);
        let eventData = {
            ID: '',
            NAME: '',
            BOOKING_NUMBER: this.bookingEvent.BOOKING_NUMBER,
            FROM_DATE: from_date_str, // "2023-07-09",
            TO_DATE: to_date_str, // "2023-07-11",
            roomsInfo: this.bookingEvent.roomsInfo,
            ARRIVAL: this.bookingEvent.ARRIVAL,
            ADD_ROOM_TO_BOOKING: this.bookingEvent.ID,
            TITLE: 'Add Room to #' + this.bookingEvent.BOOKING_NUMBER,
            event_type: 'ADD_ROOM',
            ROOMS: this.bookingEvent.ROOMS,
            GUEST: this.bookingEvent.GUEST,
            message: this.bookingEvent.NOTES,
            SOURCE: this.bookingEvent.SOURCE,
            defaultDateRange: {
                fromDate: fromDate, //new Date("2023-09-10"),
                fromDateStr: '', //"10 Sep 2023",
                toDate: toDate, //new Date("2023-09-15"),
                toDateStr: '', // "15 Sep 2023",
                dateDifference: 0,
                editabled: true,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        console.log('Handle Customer Check In');
    }
    handleCustomerCheckOut() {
        console.log('Handle Customer Check Out');
    }
    handleDeleteEvent() {
        this.hideBubble();
        this.deleteButton.emit(this.bookingEvent.POOL);
        console.log('Delete Event');
    }
    async handleUpdateBlockedDates() {
        try {
            this.isLoading = 'update';
            setTimeout(() => {
                this.hideBubble();
            }, 50);
            await this.eventService.updateBlockedEvent(this.bookingEvent);
            this.isLoading = '';
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    handleConvertBlockedDateToBooking() {
        this.handleBookingOption('BAR_BOOKING');
    }
    getRoomInfo() {
        const roomIdToFind = +this.bookingEvent.PR_ID;
        let selectedRoom = {};
        for (const room of this.bookingEvent.roomsInfo) {
            for (const physicalRoom of room.physicalrooms) {
                if (roomIdToFind === physicalRoom.id) {
                    selectedRoom.CATEGORY = room.name;
                    selectedRoom.ROOM_NAME = physicalRoom.name;
                    selectedRoom.ROOMS_INFO = room;
                    return selectedRoom;
                }
            }
        }
        return selectedRoom;
    }
    renderTitle(eventType, roomInfo) {
        switch (eventType) {
            case 'EDIT_BOOKING':
                return `${locales.entries.Lcz_EditBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;
            case 'SPLIT_BOOKING':
                return locales.entries.Lcz_Adding + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${locales.entries.Lcz_NewBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
        }
    }
    handleBookingOption(eventType, roomData = null) {
        const roomInfo = this.getRoomInfo();
        let data = roomData ? roomData : this.bookingEvent;
        data.event_type = eventType;
        data.TITLE = this.renderTitle(eventType, roomInfo);
        if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
            data.roomsInfo = [roomInfo.ROOMS_INFO];
        }
        if (eventType === 'BAR_BOOKING') {
            this.handleDeleteEvent();
        }
        this.showBookingPopup.emit({
            key: 'add',
            data: Object.assign({}, data),
        });
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    renderNote() {
        const { is_direct, ota_notes } = this.bookingEvent;
        const guestNote = this.getGuestNote();
        const noteLabel = locales.entries.Lcz_Note + ':';
        if (!is_direct && ota_notes) {
            return (h("div", { class: "row p-0 m-0" }, h("div", { class: "col-12 px-0 text-wrap d-flex" }, h("ota-label", { label: noteLabel, remarks: ota_notes }))));
        }
        else if (is_direct && guestNote) {
            return (h("div", { class: "row p-0 m-0" }, h("div", { class: "col-12 px-0 text-wrap d-flex" }, h(Fragment, null, h("span", { class: "font-weight-bold" }, noteLabel, " "), guestNote))));
        }
        return null;
    }
    getInfoElement() {
        var _a, _b, _c, _d;
        return (h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, h("div", { class: `row p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, h("div", { class: "px-0  col-8 font-weight-bold font-medium-1 d-flex align-items-center" }, h("img", { src: (_b = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.origin) === null || _b === void 0 ? void 0 : _b.Icon, alt: (_d = (_c = this.bookingEvent) === null || _c === void 0 ? void 0 : _c.origin) === null || _d === void 0 ? void 0 : _d.Label, class: 'icon-image' }), h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), h("div", { class: "pr-0 col-4 text-right" }, formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales.entries.Lcz_Balance, ": ", formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0 pr-0 col-12" }, h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.getArrivalTime() && (h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0 col-12" }, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_ArrivalTime, ": "), this.getArrivalTime()))), this.getTotalOccupants() && (h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0  col-12" }, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_Occupancy, ": "), this.getTotalOccupants()))), this.getPhoneNumber() && (h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0  col-12 text-wrap" }, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_Phone, ": "), this.renderPhone()))), this.getRatePlan() && (h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0  col-12" }, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_RatePlan, ": "), this.getRatePlan()))), this.bookingEvent.PRIVATE_NOTE && (h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0  col-12 text-wrap" }, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_PrivateNote, ": "), this.bookingEvent.PRIVATE_NOTE))), this.renderNote(), this.getInternalNote() ? (h("div", { class: "row p-0 m-0" }, h("div", { class: "col-12 px-0 text-wrap" }, this.bookingEvent.is_direct ? (h(Fragment, null, h("span", { class: "font-weight-bold" }, locales.entries.Lcz_InternalRemark, ": "), this.getInternalNote())) : (h("ota-label", { label: `${locales.entries.Lcz_InternalRemark}:`, remarks: this.bookingEvent.ota_notes }))))) : null, h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width btn-group  btn-group-sm font-small-3", role: "group" }, h("button", { type: "button", class: `btn btn-primary events_btns ${this.hideButtons ? 'mr-0' : 'mr-1'} ${this.shouldHideUnassignUnit ? 'w-50' : ''}`, onClick: _ => {
                this.handleEditBooking();
            } }, h("ir-icons", { name: "edit", style: { '--icon-size': '0.875rem' } }), h("span", null, locales.entries.Lcz_Edit)), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (h("button", { type: "button", class: `btn btn-primary events_btns ${!this.shouldHideUnassignUnit ? 'mr-1' : 'w-50'}`, onClick: _ => {
                this.handleAddRoom();
            } }, h("ir-icons", { name: "square_plus", style: { '--icon-size': '0.875rem' } }), h("span", null, locales.entries.Lcz_AddRoom))), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (h("button", { type: "button", class: "btn btn-primary events_btns", onClick: _ => {
                    this.handleDeleteEvent();
                } }, h("ir-icons", { name: "xmark", style: { '--icon-size': '0.875rem' } }), h("span", { class: "m-0 p-0" }, locales.entries.Lcz_Unassign)))))));
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (h("div", { class: `iglPopOver newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, shouldDisplayButtons ? (h(Fragment, null, h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square", onClick: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }, locales.entries.Lcz_CreateNewBooking), this.hasSplitBooking() ? (h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square", onClick: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } }, locales.entries.Lcz_AssignUnitToExistingBooking)) : null)) : (h("p", { class: 'text-danger' }, locales.entries.Lcz_NoRatePlanDefined)), h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary font-small-3 square", onClick: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } }, locales.entries.Lcz_Blockdates)));
    }
    getBlockedView() {
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: moment(this.bookingEvent.defaultDates.from_date, 'YYYY-MM-DD').format('DD MM YYYY'), toDate: moment(this.bookingEvent.defaultDates.to_date, 'YYYY-MM-DD').format('DD MM YYYY'), entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width btn-group btn-group-sm font-small-3", role: "group" }, h("button", { disabled: this.isLoading === 'update', type: "button", class: "btn btn-primary mr-1 events_btns", onClick: _ => {
                this.handleUpdateBlockedDates();
            } }, this.isLoading === 'update' ? h("i", { class: "la la-circle-o-notch spinner mx-1" }) : h("ir-icons", { name: "edit", style: { '--icon-size': '0.875rem' } }), h("span", null, locales.entries.Lcz_Update)), h("button", { type: "button", class: "btn btn-primary events_btns", onClick: _ => {
                this.handleConvertBlockedDateToBooking();
            } }, locales.entries.Lcz_ConvertToBooking), h("button", { type: "button", class: "btn btn-danger ml-1 events_btns", onClick: _ => {
                this.handleDeleteEvent();
            } }, h("ir-icons", { name: "trash", style: { '--icon-size': '0.875rem' } }), h("span", null, locales.entries.Lcz_Delete))))));
    }
    render() {
        return (h(Host, { key: 'eb8bbbe62b2308978ae11c1ef644b86ba3492021' }, h("div", { key: '7da2ed7ece80bfc0be91ccee98fe195c45839a0b', class: `pointerContainer ${this.bubbleInfoTop ? 'pointerContainerTop' : ''}` }, h("div", { key: '0b8eb0c79f88dffaf7c3f44875a66aa60f76e847', class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` })), this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    static get is() { return "igl-booking-event-hover"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-booking-event-hover.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-booking-event-hover.css"]
        };
    }
    static get properties() {
        return {
            "bookingEvent": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "bubbleInfoTop": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "bubble-info-top",
                "reflect": false,
                "defaultValue": "false"
            },
            "currency": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "currency",
                "reflect": false
            },
            "countryNodeList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "is_vacation_rental": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is_vacation_rental",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "shouldHideUnassignUnit": {}
        };
    }
    static get events() {
        return [{
                "method": "showBookingPopup",
                "name": "showBookingPopup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "hideBubbleInfo",
                "name": "hideBubbleInfo",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "deleteButton",
                "name": "deleteButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "bookingCreated",
                "name": "bookingCreated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ pool?: string; data: any[] }",
                    "resolved": "{ pool?: string; data: any[]; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=igl-booking-event-hover.js.map
