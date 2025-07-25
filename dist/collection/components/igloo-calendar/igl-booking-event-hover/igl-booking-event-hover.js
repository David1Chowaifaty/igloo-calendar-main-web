import { Host, h, Fragment } from "@stencil/core";
import { canCheckIn, findCountry, formatAmount } from "../../../utils/utils";
import { EventsService } from "../../../services/events.service";
import moment from "moment";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
import { compareTime, createDateWithOffsetAndHour } from "../../../utils/booking";
//import { transformNewBLockedRooms } from '../../../utils/booking';
export class IglBookingEventHover {
    constructor() {
        this.bubbleInfoTop = false;
        this.is_vacation_rental = false;
        this.shouldHideUnassignUnit = false;
        this.eventService = new EventsService();
        this.hideButtons = false;
    }
    componentWillLoad() {
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment())) {
            this.hideButtons = true;
        }
        this.canCheckInOrCheckout = moment().isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment().isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    handleBookingEventChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.canCheckInOrCheckout =
                moment(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    hideBubble() {
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    handleListenKeyDown(e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.hideBubble();
        }
        else
            return;
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
        return findCountry(this.bookingEvent.COUNTRY, this.countries).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return findCountry(this.bookingEvent.COUNTRY, this.countries).phone_prefix;
    }
    renderPhone() {
        return this.bookingEvent.COUNTRY ? `${this.bookingEvent.is_direct ? this.getPhoneCode() + '-' : ''}${this.getPhoneNumber()} - ${this.getCountry()}` : this.getPhoneNumber();
    }
    // private getGuestNote() {
    //   return this.bookingEvent.NOTES && <p class={'user-notes p-0 my-0'}>{this.bookingEvent.NOTES}</p>;
    // }
    getInternalNote() {
        return this.bookingEvent.INTERNAL_NOTE;
    }
    getTotalPrice() {
        return this.bookingEvent.TOTAL_PRICE;
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
    isNewBooking() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isCheckedIn() {
        return this.bookingEvent.STATUS === 'IN-HOUSE';
    }
    isBlockedDateEvent() {
        return this.bookingEvent.STATUS === 'BLOCKED' || this.bookingEvent.STATUS === 'BLOCKED-WITH-DATES';
    }
    hasSplitBooking() {
        return this.bookingEvent.hasOwnProperty('splitBookingEvents') && this.bookingEvent.splitBookingEvents;
    }
    canCheckIn() {
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // if (this.isCheckedIn()) {
        //   return false;
        // }
        // const now = moment();
        // if (
        //   this.canCheckInOrCheckout ||
        //   (moment().isSame(new Date(this.bookingEvent.TO_DATE), 'days') &&
        //     !compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour)))
        // ) {
        //   return true;
        // }
        // return false;
        return canCheckIn({
            from_date: this.bookingEvent.FROM_DATE,
            to_date: this.bookingEvent.TO_DATE,
            isCheckedIn: this.isCheckedIn(),
        });
    }
    canCheckOut() {
        var _a, _b, _c, _d;
        if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (this.isCheckedIn()) {
            return true;
        }
        const now = moment();
        if (((_b = (_a = this.bookingEvent.ROOM_INFO) === null || _a === void 0 ? void 0 : _a.in_out) === null || _b === void 0 ? void 0 : _b.code) === '000' &&
            moment().isSameOrAfter(new Date(this.bookingEvent.TO_DATE), 'days') &&
            compareTime(now.toDate(), createDateWithOffsetAndHour((_c = calendar_data.checkin_checkout_hours) === null || _c === void 0 ? void 0 : _c.offset, (_d = calendar_data.checkin_checkout_hours) === null || _d === void 0 ? void 0 : _d.hour))) {
            return true;
        }
        return false;
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
        var _a;
        let fromDate = new Date(this.bookingEvent.FROM_DATE);
        fromDate.setHours(0, 0, 0, 0);
        let from_date_str = this.getStringDateFormat(fromDate);
        let toDate = new Date(this.bookingEvent.TO_DATE);
        //toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        let to_date_str = this.getStringDateFormat(toDate);
        // console.log(this.bookingEvent);
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
            booking: (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.booking,
            defaultDateRange: {
                fromDate: fromDate,
                fromDateStr: '',
                toDate: toDate,
                toDateStr: '',
                dateDifference: 0,
                editabled: true,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        var _a, _b;
        const { adult_nbr, children_nbr, infant_nbr } = this.bookingEvent.ROOM_INFO.occupancy;
        this.showDialog.emit({
            reason: 'checkin',
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: '',
            roomUnit: '',
            sidebarPayload: {
                identifier: this.bookingEvent.IDENTIFIER,
                bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                checkin: false,
                roomName: (_b = (_a = this.bookingEvent.ROOM_INFO.unit) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '',
                sharing_persons: this.bookingEvent.ROOM_INFO.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    handleCustomerCheckOut() {
        this.showDialog.emit({ reason: 'checkout', bookingNumber: this.bookingEvent.BOOKING_NUMBER, roomIdentifier: this.bookingEvent.IDENTIFIER, roomName: '', roomUnit: '' });
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
        if (eventType === 'BAR_BOOKING' && this.bookingEvent.STATUS !== 'TEMP-EVENT') {
            const { FROM_DATE, TO_DATE, PR_ID, RELEASE_AFTER_HOURS, ENTRY_DATE, OPTIONAL_REASON, ENTRY_MINUTE, ENTRY_HOUR, STATUS_CODE } = this.bookingEvent;
            data.block_exposed_unit_props = {
                from_date: FROM_DATE,
                to_date: TO_DATE,
                NOTES: OPTIONAL_REASON,
                pr_id: PR_ID,
                STAY_STATUS_CODE: STATUS_CODE,
                DESCRIPTION: RELEASE_AFTER_HOURS,
                BLOCKED_TILL_DATE: ENTRY_DATE,
                BLOCKED_TILL_HOUR: ENTRY_HOUR,
                BLOCKED_TILL_MINUTE: ENTRY_MINUTE,
            };
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
    // private renderNote() {
    //   const { is_direct, ota_notes } = this.bookingEvent;
    //   const guestNote = this.getGuestNote();
    //   const noteLabel = locales.entries.Lcz_Note + ':';
    //   if (!is_direct && ota_notes) {
    //     return (
    //       <div class="row p-0 m-0">
    //         <div class="col-12 px-0 text-wrap d-flex">
    //           <ota-label label={noteLabel} remarks={ota_notes}></ota-label>
    //         </div>
    //       </div>
    //     );
    //   } else if (is_direct && guestNote) {
    //     return (
    //       <div class="row p-0 m-0">
    //         <div class="col-12 px-0 text-wrap d-flex">
    //           <Fragment>
    //             <span class="font-weight-bold">{noteLabel} </span>
    //             {guestNote}
    //           </Fragment>
    //         </div>
    //       </div>
    //     );
    //   }
    //   return null;
    // }
    getOTANotes(maxVisible = 3) {
        var _a;
        if (!this.bookingEvent.ota_notes || ((_a = this.bookingEvent.ota_notes) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        const channel_notes = [...this.bookingEvent.ota_notes];
        const separator = '<br>- ';
        if (channel_notes.length > maxVisible) {
            channel_notes[maxVisible - 1] = { statement: `${channel_notes[maxVisible - 1].statement} <span style="color: #1e9ff2;">more...</span>` };
        }
        return channel_notes
            .slice(0, maxVisible)
            .map(o => `${separator}${o.statement}`)
            .join('');
    }
    getInfoElement() {
        var _a, _b, _c, _d;
        return (h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, h("div", { class: `row p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, h("div", { class: "px-0  col-8 font-weight-bold font-medium-1 d-flex align-items-center" }, h("img", { src: (_b = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.origin) === null || _b === void 0 ? void 0 : _b.Icon, alt: (_d = (_c = this.bookingEvent) === null || _c === void 0 ? void 0 : _c.origin) === null || _d === void 0 ? void 0 : _d.Label, class: 'icon-image' }), h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), h("div", { class: "pr-0 col-4 text-right" }, formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales.entries.Lcz_Balance, ": ", formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), h("div", { class: "row p-0 m-0" }, h("div", { class: "px-0 pr-0 col-12" }, h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.getArrivalTime() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0 col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_ArrivalTime}: </span>
        //     {this.getArrivalTime()}
        //   </div>
        // </div>
        h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Occupancy}: </span>
        //     {this.getTotalOccupants()}
        //   </div>
        // </div>
        h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Phone}: </span>
        //     {this.renderPhone()}
        //   </div>
        // </div>
        h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_RatePlan}: </span>
        //     {this.getRatePlan()}
        //   </div>
        // </div>
        h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.PRIVATE_NOTE && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_PrivateNote}: </span>
        //     {this.bookingEvent.PRIVATE_NOTE}
        //   </div>
        // </div>
        h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct && (h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })), h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales.entries.Lcz_ChannelNotes}:`, display: "inline", content: this.getOTANotes(), renderContentAsHtml: true }), this.getInternalNote() && h("ir-label", { labelText: `${locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, h("ir-button", { style: { '--icon-size': '0.875rem' }, onClickHandler: () => this.handleEditBooking(), class: 'w-100', btn_block: true, text: locales.entries.Lcz_Edit, icon_name: "edit", btn_styles: "h-100", size: "sm" }), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (h("ir-button", { style: { '--icon-size': '0.875rem' }, text: locales.entries.Lcz_AddRoom, icon_name: "square_plus", size: "sm", class: 'w-100', btn_styles: "h-100", onClickHandler: () => this.handleAddRoom() })), this.canCheckIn() && (h("ir-button", { class: 'w-100', style: { '--icon-size': '0.875rem' }, text: locales.entries.Lcz_CheckIn, onClickHandler: () => this.handleCustomerCheckIn(), icon_name: "edit", btn_styles: "h-100", size: "sm" })), this.canCheckOut() && (h("ir-button", { class: 'w-100', btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, text: locales.entries.Lcz_CheckOut, icon_name: "edit", onClickHandler: () => this.handleCustomerCheckOut(), size: "sm" })), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (h("ir-button", { class: 'w-100', btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, size: "sm", text: locales.entries.Lcz_Unassign, icon_name: "xmark", onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }))))));
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (h("div", { class: `iglPopOver d-flex flex-column newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left`, style: { gap: '0.5rem' } }, shouldDisplayButtons ? (h(Fragment, null, h("ir-button", { size: "sm", btn_block: true, "data-testid": "bar_booking_btn", text: locales.entries.Lcz_CreateNewBooking, onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }), this.hasSplitBooking() && (
        // <div class="mb-1">
        h("ir-button", { size: "sm", btn_block: true, text: locales.entries.Lcz_AssignUnitToExistingBooking, onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } })
        // </div>
        ))) : (h("p", { class: 'text-danger' }, locales.entries.Lcz_NoRatePlanDefined)), h("ir-button", { size: "sm", text: locales.entries.Lcz_Blockdates, btn_block: true, onClickHandler: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } })));
    }
    getBlockedView() {
        console.log('booking event', this.bookingEvent);
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: this.bookingEvent.defaultDates.from_date, toDate: this.bookingEvent.defaultDates.to_date, entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), h("div", { class: "row p-0 m-0 mt-2" }, h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, h("ir-button", { btn_disabled: this.isLoading === 'update', text: locales.entries.Lcz_Update, onClickHandler: _ => {
                this.handleUpdateBlockedDates();
            }, icon_name: "edit", size: "sm", btn_styles: "h-100", isLoading: this.isLoading === 'update', style: { '--icon-size': '0.875rem' }, btn_block: true, class: 'w-100' }), h("ir-button", { class: 'w-100 h-100 my-0', btn_block: true, btn_styles: "h-100", size: "sm", text: locales.entries.Lcz_ConvertSplitBooking, onClickHandler: () => {
                this.handleConvertBlockedDateToBooking();
            } }), h("ir-button", { class: 'w-100', btn_styles: "h-100", btn_block: true, size: "sm", style: { '--icon-size': '0.875rem' }, icon_name: "trash", btn_color: "danger", onClickHandler: _ => {
                this.handleDeleteEvent();
            }, text: locales.entries.Lcz_Delete })))));
    }
    render() {
        return (h(Host, { key: 'f2fe632dec311b3b9712688496c50b810d6f89d6' }, h("div", { key: '2b6e177699464b1f55f5f9803fe588ead187a719', class: `pointerContainer ${this.bubbleInfoTop ? 'pointerContainerTop' : ''}` }, h("div", { key: 'f99027827ce3175d5a2fe91a90a5e5aea46521e8', class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` })), this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
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
                },
                "getter": false,
                "setter": false
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "currency",
                "reflect": false
            },
            "countries": {
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
                },
                "getter": false,
                "setter": false
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
                "getter": false,
                "setter": false,
                "attribute": "is_vacation_rental",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "shouldHideUnassignUnit": {},
            "canCheckInOrCheckout": {}
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
            }, {
                "method": "showDialog",
                "name": "showDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarModalEvent",
                    "resolved": "{ reason: \"checkin\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; sidebarPayload: RoomGuestsPayload & { bookingNumber: string; }; } | { reason: \"checkout\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; } | { reason: \"reallocate\"; } & IReallocationPayload | { reason: \"stretch\"; } & IRoomNightsData",
                    "references": {
                        "CalendarModalEvent": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::CalendarModalEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "bookingEvent",
                "methodName": "handleBookingEventChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleListenKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-booking-event-hover.js.map
