import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment, g as getElement } from './index-c553b3dc.js';
import { g as getCurrencySymbol, d as dateToFormattedString, a as getReleaseHoursString, c as checkUserAuthState, m as manageAnchorSession, r as renderTime } from './utils-e9e1d915.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { c as calendar_data } from './calendar-data-666acc1f.js';
import { v as v4 } from './v4-964634d6.js';
import { B as BookingService } from './booking.service-2214ca96.js';
import { t as transformNewBLockedRooms, c as calculateDaysBetweenDates, g as getPrivateNote, f as formatName } from './booking-9084d9e3.js';
import { E as EventsService } from './events.service-ebabeef8.js';
import { i as isRequestPending, a as interceptor_requests } from './ir-interceptor.store-651abd9c.js';
import { h as hooks } from './moment-ab846cee.js';
import { a as axios } from './axios-ab377903.js';
import { _ as _formatDate, a as _formatTime, b as _formatAmount, c as _getDay } from './functions-80bad450.js';
import { R as RoomService } from './room.service-10dcbd4a.js';
import { c as colorVariants, i as icons } from './icons-d27dc780.js';
import { P as PaymentService } from './payment.service-8bc80868.js';
import './index-1d7b1ff2.js';
import './Token-692eae02.js';

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:80%}.guest-info-container.sc-igl-application-info{max-width:300px}.preference-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.userRate = 0;
        this.guestInfo = undefined;
        this.currency = undefined;
        this.roomsList = [];
        this.guestRefKey = undefined;
        this.bedPreferenceType = [];
        this.selectedUnits = [];
        this.bookingType = 'PLUS_BOOKING';
        this.defaultGuestPreference = undefined;
        this.index = undefined;
        this.defaultGuestRoomId = undefined;
        this.dateDifference = undefined;
        this.filterdRoomList = [];
        this.isButtonPressed = false;
        this.guestData = undefined;
    }
    componentWillLoad() {
        if (this.guestInfo.isRateModified && this.guestInfo.rateType === 2) {
            this.userRate = this.guestInfo.rate * this.dateDifference;
        }
        else {
            this.userRate = this.guestInfo.rate;
        }
        this.guestData = this.guestInfo ? Object.assign({}, this.guestInfo) : {};
        this.guestData.roomId = '';
        if (this.defaultGuestRoomId && this.roomsList.filter(e => e.id.toString() === this.defaultGuestRoomId.toString()).length > 0) {
            this.guestData.roomId = this.defaultGuestRoomId;
        }
        this.guestData.preference = +this.defaultGuestPreference || '';
        this.updateRoomList();
    }
    componentDidLoad() {
        this.timeout = setTimeout(() => {
            this.updateData();
        }, 200);
    }
    disconnectedCallback() {
        clearTimeout(this.timeout);
    }
    async handleSelctedUnits() {
        this.updateRoomList();
    }
    updateRoomList() {
        const units = [...this.selectedUnits];
        units[this.index] = -1;
        this.filterdRoomList = this.roomsList.filter(e => !units.includes(e.id) || e.name === '');
    }
    updateData() {
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            guestRefKey: this.guestRefKey,
            data: Object.assign({}, this.guestData),
        });
    }
    handleDataChange(key, value) {
        this.guestData[key] = +value;
        if (value === '') {
            this.guestData['roomName'] = value;
        }
        if (key === 'roomId' && value !== '') {
            this.guestData['roomName'] = this.filterdRoomList.find(room => room.id === +value).name || '';
        }
        this.updateData();
    }
    handleGuestNameChange(event) {
        // console.log("On Guest name Change::", event.target.value);
        this.guestData.guestName = event.target.value;
        this.updateData();
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
            case 'save':
                this.isButtonPressed = true;
                break;
        }
    }
    render() {
        //console.log(this.guestInfo, this.roomsList);
        return (h(Host, { key: '9e7ddbd6e6b4d5acfd6994d06edf4eb49f1fa2bc' }, h("div", { key: '10f0b714856c481ba4acdf79cfb3ca643d227b7f', class: "text-left mt-1 " }, h("div", { key: 'b01b9ffb12ea8ccf0d6387812cf99ff17f943201', class: " mb-1 " }, this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING' ? (h("span", { class: "h5 mr-1" }, this.guestInfo.roomCategoryName)) : null, h("span", { key: '50eb5cfb3a818ff9a8a9c91dedaa7b31a2e77ddf', class: " font-weight-bold" }, this.guestInfo.ratePlanName.replace(this.guestInfo.roomCategoryName + '/', ''), h("ir-tooltip", { key: 'a6cd36bc8f112d3ff7cb6ea65768339dd789813c', class: " mr-1", message: this.guestInfo.cancelation + this.guestInfo.guarantee })), h("span", { key: '80baf8fc1ce54f5a3949d03fd85387516be05e65' }, this.guestInfo.adult_child_offering)), h("div", { key: '43806d8201c85d1b773e5035e0c5deb9a1db284c', class: "d-flex flex-column flex-md-row m-0 p-0 align-items-md-center aplicationInfoContainer " }, h("div", { key: 'f1870ba87b12889393233730febd4fbe22268416', class: "mr-1 flex-fill guest-info-container" }, h("input", { key: '6b0d16203bf4e43b76a7b212cbdc1eaee5e866a4', id: v4(), type: "email", class: `form-control ${this.isButtonPressed && this.guestData.guestName === '' && 'border-danger'}`, placeholder: locales.entries.Lcz_GuestFirstnameAndLastname, name: "guestName", onInput: event => this.handleGuestNameChange(event), required: true, value: this.guestData.guestName })), h("div", { key: '36707c425d9a1e6f4144ece5b871ffc38ea97007', class: 'mt-1 mt-md-0 d-flex align-items-center flex-fill' }, calendar_data.is_frontdesk_enabled && (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') ? (h("div", { class: "mr-1 p-0 flex-fill  preference-select-container" }, h("select", { class: `form-control  input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('roomId', event.target.value) }, h("option", { value: "", selected: this.guestData.roomId === '' }, locales.entries.Lcz_Assignunits), this.filterdRoomList.map(room => (h("option", { value: room.id, selected: +this.guestData.roomId === room.id }, room.name)))))) : null, this.guestData.is_bed_configuration_enabled && (h("div", { key: 'e1fae3f7dd6294c9cb5038dde8fdb40b74f1a03d', class: "mr-1 flex-fill" }, h("select", { key: 'cd2c69c47a2997b155e07e0c5fe0a116c4ed51ff', class: `form-control input-sm ${this.isButtonPressed && (this.guestData.preference === '' || this.guestData.preference === 0) && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('preference', event.target.value) }, h("option", { key: '6134882af24a338a7682137cbfc931e8b4b444fb', value: "", selected: this.guestData.preference === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => (h("option", { value: +data.CODE_NAME, selected: this.guestData.preference === +data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("div", { key: '37469c0019cfdff7bde640d47172dea53dae0bb1', class: "" }, getCurrencySymbol(this.currency.code) + Number(this.userRate).toFixed(2), "/", locales.entries.Lcz_Stay))))));
    }
    static get watchers() { return {
        "selectedUnits": ["handleSelctedUnits"]
    }; }
};
IglApplicationInfo.style = IglApplicationInfoStyle0;

const iglBlockDatesViewCss = ".sc-igl-block-dates-view-h{display:block}.sc-igl-block-dates-view-h .controlContainer.sc-igl-block-dates-view{width:24px}.sc-igl-block-dates-view-h .checkBoxContainer.sc-igl-block-dates-view input.sc-igl-block-dates-view{height:1.2rem !important;width:30px}.releaseTime.sc-igl-block-dates-view{padding-left:5px}.out-of-service-label.sc-igl-block-dates-view{margin-left:5px !important}";
const IglBlockDatesViewStyle0 = iglBlockDatesViewCss;

const IglBlockDatesView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.blockDatesData = {
            RELEASE_AFTER_HOURS: 0,
            OPTIONAL_REASON: '',
            OUT_OF_SERVICE: false,
        }; // Change of property name might require updates in booking-event-hover
        this.releaseList = [];
        this.bookingService = new BookingService();
        this.defaultData = undefined;
        this.fromDate = undefined;
        this.toDate = undefined;
        this.entryDate = undefined;
        this.entryHour = undefined;
        this.isEventHover = false;
        this.entryMinute = undefined;
        this.renderAgain = false;
    }
    async componentWillLoad() {
        try {
            this.bookingService.setToken(calendar_data.token);
            this.releaseList = await this.bookingService.getBlockedInfo();
            if (this.defaultData) {
                this.blockDatesData = Object.assign({}, this.defaultData);
            }
            else {
                this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(this.releaseList[0].CODE_NAME);
                this.emitData();
            }
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    handleOptionalReason(event) {
        this.blockDatesData.OPTIONAL_REASON = event.target.value;
        this.emitData();
    }
    handleReleaseAfterChange(evt) {
        if (this.entryDate)
            this.entryDate = undefined;
        this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(evt.target.value);
        this.renderPage();
        this.emitData();
    }
    emitData() {
        this.dataUpdateEvent.emit({
            key: 'blockDatesData',
            data: Object.assign({}, this.blockDatesData),
        });
    }
    getReleaseHoursString() {
        // console.log("entry date", this.entryDate);
        // console.log("blocked date data", this.blockDatesData);
        let dt = this.entryDate ? new Date(this.entryDate) : new Date();
        if (this.entryDate && this.entryHour && this.entryMinute) {
            dt.setHours(this.entryHour, this.entryMinute, 0, 0);
        }
        else {
            dt.setHours(dt.getHours() + this.blockDatesData.RELEASE_AFTER_HOURS, dt.getMinutes(), 0, 0);
        }
        return dt.toLocaleString('default', { month: 'short' }) + ' ' + dt.getDate() + ', ' + this.formatNumber(dt.getHours()) + ':' + this.formatNumber(dt.getMinutes());
    }
    formatNumber(value) {
        return value < 10 ? `0${value}` : value;
    }
    handleOutOfService(evt) {
        this.blockDatesData.OUT_OF_SERVICE = evt.target.checked;
        if (this.blockDatesData.OUT_OF_SERVICE) {
            this.blockDatesData.OPTIONAL_REASON = '';
            this.blockDatesData.RELEASE_AFTER_HOURS = 0;
        }
        this.renderPage();
        this.emitData();
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (h(Host, { key: '33d870a6e3906b77eece0aadf7927a6d2f39cd30' }, h("div", { key: 'e70de36c7e354b63cede6ef7d8e9a54c972c45c2', class: `m-0 p-0 mb-1` }, h("div", { key: 'a117f81a211f41c95456b1b2d97aa240656544ae', class: "text-left p-0" }, h("ir-date-view", { key: '2b4dd29f9263c6ab2c781073d0e0ab9be088b491', from_date: this.fromDate, dateOption: "DD MMM YYYY", showDateDifference: false, to_date: this.toDate }))), h("div", { key: 'd4de0d5e59f192a82730582266fd6bd5ece09cd0', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, h("div", { key: 'fbae2c940d686793fb40eaf423f358bafb4c2383', class: "mb-1 " }, h("label", { key: '4f41cb24c0d6676fdb5236a0b811573ebd2762e9', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales.entries.Lcz_Reason, ":"), h("div", { key: '415b0caac88aa8108703f772d01ff7bfee6fce54', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, h("input", { key: 'c6980fb960700df3494dc85bc153690e9113bede', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), h("span", { key: 'bd64adfa657761075cf56ab36d3f0f3427ecb2de', class: "align-middle out-of-service-label" }, locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (h("div", null, h("div", { class: "mb-1 d-flex  align-items-center" }, h("span", { class: "align-middle" }, locales.entries.Lcz_Or, " "), h("div", { class: "d-inline-flex col pr-0 align-middle" }, h("input", { class: "form-control", type: "text", placeholder: locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), h("div", { class: "mb-1 w-100 pr-0 " }, h("span", { class: "text-bold-700 font-medium-1" }, locales.entries.Lcz_AutomaticReleaseIn, ": "), h("div", { class: "d-inline-block" }, h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (h("option", { value: +releaseItem.CODE_NAME, selected: this.blockDatesData.RELEASE_AFTER_HOURS == +releaseItem.CODE_NAME }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (h("div", { class: "d-inline-block releaseTime" }, h("em", null, locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
    }
};
IglBlockDatesView.style = IglBlockDatesViewStyle0;

//import { BookingService } from '../../../services/booking.service';
class IglBookPropertyService {
    setBookingInfoFromAutoComplete(context, res) {
        context.bookedByInfoData = {
            id: res.guest.id,
            email: res.guest.email,
            firstName: res.guest.first_name,
            lastName: res.guest.last_name,
            countryId: res.guest.country_id,
            isdCode: res.guest.country_id.toString(),
            contactNumber: res.guest.mobile,
            selectedArrivalTime: res.arrival,
            emailGuest: res.guest.subscribe_to_news_letter,
            message: res.remark,
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
            bookingNumber: res.booking_nbr,
            rooms: res.rooms,
            from_date: res.from_date,
            to_date: res.to_date,
        };
    }
    resetRoomsInfoAndMessage(context) {
        context.defaultData.roomsInfo = [];
        context.message = '';
    }
    onDataRoomUpdate(event, selectedUnits, isEdit, isEditBooking, name) {
        let units = selectedUnits;
        const { data, key, changedKey } = event.detail;
        const roomCategoryKey = `c_${data.roomCategoryId}`;
        const ratePlanKey = `p_${data.ratePlanId}`;
        if (this.shouldClearData(key)) {
            units = new Map();
        }
        this.initializeRoomCategoryIfNeeded(roomCategoryKey, units);
        if (isEditBooking) {
            if (changedKey === 'rate') {
                if (units.has(roomCategoryKey) && units.get(roomCategoryKey).has(ratePlanKey)) {
                    this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                }
            }
            else {
                if (changedKey !== 'rateType') {
                    if (changedKey === 'adult_child_offering') {
                        if (units.has(roomCategoryKey) && selectedUnits.get(roomCategoryKey).has(ratePlanKey)) {
                            this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                        }
                    }
                    else {
                        this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                    }
                }
            }
        }
        else {
            this.setSelectedRoomData(roomCategoryKey, ratePlanKey, data, units);
        }
        this.cleanupEmptyData(roomCategoryKey, units);
        return units;
    }
    shouldClearData(key) {
        return key === 'clearData' || key === 'EDIT_BOOKING';
    }
    initializeRoomCategoryIfNeeded(roomCategoryKey, selectedUnits) {
        if (!selectedUnits.has(roomCategoryKey)) {
            selectedUnits.set(roomCategoryKey, new Map());
        }
    }
    setSelectedRoomData(roomCategoryKey, ratePlanKey, data, selectedUnits) {
        let selectedRatePlans = selectedUnits.get(roomCategoryKey);
        if (data.totalRooms === 0 || data.inventory === 0) {
            selectedRatePlans.delete(ratePlanKey);
        }
        else {
            selectedUnits.set(roomCategoryKey, selectedRatePlans.set(ratePlanKey, Object.assign(Object.assign({}, data), { selectedUnits: Array(data.totalRooms).fill(-1) })));
        }
    }
    cleanupEmptyData(roomCategoryKey, selectedUnits) {
        if (selectedUnits.has(roomCategoryKey)) {
            let selectedRatePlans = selectedUnits.get(roomCategoryKey);
            if (selectedRatePlans.size === 0) {
                selectedUnits.delete(roomCategoryKey);
            }
        }
    }
    applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, selectedUnits, name, isEdit) {
        selectedUnits.clear();
        let res = {};
        if (isEdit) {
            res = Object.assign(Object.assign({}, data), { guestName: name || '', roomId: '' });
        }
        else {
            res = Object.assign({}, data);
        }
        selectedUnits.set(roomCategoryKey, new Map().set(ratePlanKey, res));
    }
    async prepareBookUserServiceParams(context, check_in, sourceOption) {
        try {
            const arrivalTime = context.isEventType('EDIT_BOOKING')
                ? context.getArrivalTimeForBooking()
                : context.isEventType('ADD_ROOM')
                    ? context.bookingData.ARRIVAL.code
                    : context.isEventType('SPLIT_BOOKING')
                        ? context.bookedByInfoData.selectedArrivalTime.code
                        : '';
            const pr_id = context.isEventType('BAR_BOOKING') ? context.bookingData.PR_ID : undefined;
            const bookingNumber = context.isEventType('EDIT_BOOKING') || context.isEventType('ADD_ROOM')
                ? context.bookingData.BOOKING_NUMBER
                : context.isEventType('SPLIT_BOOKING')
                    ? context.bookedByInfoData.bookingNumber
                    : undefined;
            let rooms = [];
            if (context.isEventType('ADD_ROOM')) {
                // const result = await (context.bookingService as BookingService).getExoposedBooking(bookingNumber, context.language);
                //rooms = result.rooms;
                rooms = context.bookingData.ROOMS;
            }
            else if (context.isEventType('SPLIT_BOOKING')) {
                rooms = context.bookedByInfoData.rooms;
            }
            else if (context.isEventType('EDIT_BOOKING')) {
                rooms = context.defaultData.ROOMS.filter(room => room.identifier !== context.bookingData.IDENTIFIER);
            }
            return {
                bookedByInfoData: context.bookedByInfoData,
                check_in,
                fromDate: new Date(context.dateRangeData.fromDate),
                toDate: new Date(context.dateRangeData.toDate),
                guestData: context.guestData,
                totalNights: context.dateRangeData.dateDifference,
                source: sourceOption,
                propertyid: context.propertyid,
                rooms,
                pickup_info: context.bookingData.PICKUP_INFO || null,
                currency: context.currency,
                bookingNumber,
                defaultGuest: context.bookingData.GUEST,
                arrivalTime,
                pr_id,
                identifier: context.bookingData.IDENTIFIER,
                extras: null,
            };
        }
        catch (error) {
            console.error(error);
        }
    }
    // private getBookingPreferenceRoomId(bookingData) {
    //   return (bookingData.hasOwnProperty('PR_ID') && bookingData.PR_ID) || null;
    // }
    getRoomCategoryByRoomId(bookingData) {
        var _a;
        return (_a = bookingData.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(roomCategory => {
            return roomCategory.id === bookingData.RATE_TYPE;
        });
    }
    setEditingRoomInfo(bookingData, selectedUnits) {
        const category = this.getRoomCategoryByRoomId(bookingData);
        const room_id = !category ? '' : `c_${category === null || category === void 0 ? void 0 : category.id}`;
        const ratePlanId = `p_${bookingData.RATE_PLAN_ID}`;
        const data = {
            adultCount: bookingData.ADULTS_COUNT,
            rate: bookingData.RATE,
            rateType: bookingData.RATE_TYPE,
            ratePlanId: bookingData.RATE_PLAN_ID,
            roomCategoryId: category ? category.id : '',
            roomCategoryName: category ? category.name : '',
            totalRooms: 1,
            ratePlanName: bookingData.RATE_PLAN,
            roomId: bookingData.PR_ID,
            guestName: bookingData.NAME,
            cancelation: bookingData.cancelation,
            guarantee: bookingData.guarantee,
            adult_child_offering: bookingData.adult_child_offering,
        };
        selectedUnits.set(room_id, new Map().set(ratePlanId, data));
    }
}

const iglBookPropertyCss = ".sc-igl-book-property-h{position:fixed;top:0;right:0;width:100vw;height:100vh;z-index:99}.card-title.sc-igl-book-property{border-bottom:1px solid #e4e5ec;width:100%}.scrollContent.sc-igl-book-property{height:calc(100% - 79px);overflow:auto;position:relative}.background-overlay.sc-igl-book-property{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-book-property{height:calc(100% - 79px);overflow:auto}.gap-30.sc-igl-book-property{gap:30px}.block-date.sc-igl-book-property{width:100%}.sideWindow.sc-igl-book-property{position:absolute;top:0;right:0;height:100%;background-color:#ffffff;width:100vw;overflow-y:auto;padding-bottom:85px !important}.card.sc-igl-book-property{top:0;z-index:1000}.close.sc-igl-book-property{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-book-property{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-book-property:not(:disabled),[type='button'].sc-igl-book-property:not(:disabled){cursor:pointer}.row.sc-igl-book-property{padding:0 0 0 15px;margin:0}@media only screen and (min-width: 1200px){.sideWindow.sc-igl-book-property{max-width:70%}}@media only screen and (min-width: 2000px){.sideWindow.sc-igl-book-property{max-width:40%}}@media only screen and (min-width: 768px) and (max-width: 1200px){.sideWindow.sc-igl-book-property{max-width:90%}}@media only screen and (min-width: 600px) and (max-width: 768px){.sideWindow.sc-igl-book-property{max-width:75%}}@media only screen and (min-width: 641px){.block-date.sc-igl-book-property{max-width:450px;padding-bottom:0 !important}}";
const IglBookPropertyStyle0 = iglBookPropertyCss;

const IglBookProperty = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeBookingWindow = createEvent(this, "closeBookingWindow", 7);
        this.bookingCreated = createEvent(this, "bookingCreated", 7);
        this.blockedCreated = createEvent(this, "blockedCreated", 7);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.animateIrButton = createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = createEvent(this, "animateIrSelect", 7);
        this.toast = createEvent(this, "toast", 7);
        this.initialRoomIds = null;
        this.showSplitBookingOption = false;
        this.sourceOptions = [];
        this.guestData = [];
        this.bookedByInfoData = {};
        this.blockDatesData = {};
        this.ratePricingMode = [];
        this.selectedUnits = new Map();
        this.bedPreferenceType = [];
        this.bookingService = new BookingService();
        this.bookPropertyService = new IglBookPropertyService();
        this.eventsService = new EventsService();
        this.propertyid = undefined;
        this.allowedBookingSources = undefined;
        this.language = undefined;
        this.countryNodeList = undefined;
        this.showPaymentDetails = false;
        this.currency = undefined;
        this.bookingData = undefined;
        this.adultChildConstraints = undefined;
        this.adultChildCount = {
            adult: 0,
            child: 0,
        };
        this.renderAgain = false;
        this.dateRangeData = undefined;
        this.defaultData = undefined;
        this.isLoading = undefined;
        this.buttonName = '';
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            this.closeWindow();
        }
        else
            return;
    }
    componentDidLoad() {
        console.log('booking_data', this.bookingData);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    clearBooking(e) {
        if (this.isEventType('SPLIT_BOOKING')) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.bookedByInfoData = {};
            this.bookPropertyService.resetRoomsInfoAndMessage(this);
            this.renderPage();
        }
    }
    async handleSpiltBookingSelected(e) {
        e.stopImmediatePropagation();
        const { key, data } = e.detail;
        if (key === 'select') {
            const res = await this.bookingService.getExposedBooking(data.booking_nbr, this.language);
            this.bookPropertyService.setBookingInfoFromAutoComplete(this, res);
            this.sourceOption = res.source;
            this.renderPage();
        }
        else if (key === 'blur' && data !== '') {
            const res = await this.bookingService.getExposedBooking(data, this.language);
            this.bookPropertyService.setBookingInfoFromAutoComplete(this, res);
            this.sourceOption = res.source;
            this.renderPage();
        }
    }
    async componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
        this.eventsService.setToken(calendar_data.token);
        this.defaultDateRange = { from_date: this.bookingData.FROM_DATE, to_date: this.bookingData.TO_DATE };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        if (!this.bookingData.defaultDateRange) {
            return;
        }
        this.defaultData = this.bookingData;
        this.dateRangeData = Object.assign({}, this.defaultData.defaultDateRange);
        try {
            const setupEntries = await this.fetchSetupEntries();
            this.setSourceOptions(this.allowedBookingSources);
            this.setOtherProperties(setupEntries);
            if (this.isEventType('EDIT_BOOKING')) {
                this.adultChildCount = {
                    adult: this.defaultData.ADULTS_COUNT,
                    child: this.defaultData.CHILDREN_COUNT,
                };
                this.initialRoomIds = {
                    roomName: this.defaultData.roomName,
                    ratePlanId: this.defaultData.RATE_PLAN_ID,
                    roomId: this.defaultData.PR_ID,
                    roomTypeId: this.defaultData.RATE_TYPE,
                };
                this.bookPropertyService.setEditingRoomInfo(this.defaultData, this.selectedUnits);
            }
            if (!this.isEventType('BAR_BOOKING')) {
                this.bookPropertyService.resetRoomsInfoAndMessage(this);
            }
            if (this.defaultData.event_type === 'SPLIT_BOOKING') {
                this.showSplitBookingOption = true;
                this.page = 'page_one';
            }
            else if (this.defaultData.event_type === 'BLOCK_DATES') {
                this.page = 'page_block_date';
            }
            else {
                this.page = 'page_one';
            }
        }
        catch (error) {
            console.error('Error fetching setup entries:', error);
        }
    }
    async fetchSetupEntries() {
        return await this.bookingService.fetchSetupEntries();
    }
    isGuestDataIncomplete() {
        //|| data.roomId === '' || data.roomId === 0 if the roomId is required
        if (this.guestData.length === 0) {
            return true;
        }
        for (const data of this.guestData) {
            if (data.guestName === '' || ((data.preference === '' || data.preference === 0) && data.is_bed_configuration_enabled)) {
                return true;
            }
        }
        return false;
    }
    isButtonDisabled() {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.guestData) {
                return this.isGuestDataIncomplete();
            }
            // const isCardDetails = ['cardNumber', 'cardHolderName', 'expiryMonth', 'expiryYear'].includes(key);
            // if (!this.showPaymentDetails && isCardDetails) {
            //   return false;
            // }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (isValidProperty(this.guestData, 'guestName', '') ||
            // isValidProperty(this.bookedByInfoData, 'isdCode', '') ||
            // isValidProperty(this.bookedByInfoData, 'contactNumber', '') ||
            isValidProperty(this.bookedByInfoData, 'firstName', '') ||
            isValidProperty(this.bookedByInfoData, 'lastName', '') ||
            // isValidProperty(this.bookedByInfoData, 'countryId', -1) ||
            isValidProperty(this.bookedByInfoData, 'selectedArrivalTime', '')
        // || isValidProperty(this.bookedByInfoData, 'email', '')
        );
    }
    setSourceOptions(bookingSource) {
        this.sourceOptions = bookingSource.map(source => ({
            id: source.id,
            value: source.description,
            tag: source.tag,
            type: source.type,
        }));
        if (this.isEventType('EDIT_BOOKING')) {
            this.sourceOption = Object.assign({}, this.defaultData.SOURCE);
        }
        else {
            this.sourceOption = {
                code: bookingSource[0].code,
                description: bookingSource[0].description,
                tag: bookingSource[0].tag,
                type: bookingSource[0].type,
                id: bookingSource[0].id,
            };
        }
    }
    setOtherProperties(res) {
        this.ratePricingMode = res === null || res === void 0 ? void 0 : res.ratePricingMode;
        this.bookedByInfoData.arrivalTime = res.arrivalTime;
        this.bedPreferenceType = res.bedPreferenceType;
    }
    handleAdultChildChange(event) {
        if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            this.bookPropertyService.resetRoomsInfoAndMessage(this);
        }
        this.adultChildCount = Object.assign({}, event.detail);
    }
    async initializeBookingAvailability(from_date, to_date) {
        const is_in_agent_mode = this.sourceOption['type'] === 'TRAVEL_AGENCY';
        try {
            const room_type_ids = this.defaultData.roomsInfo.map(room => room.id);
            const data = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyid,
                adultChildCount: this.adultChildCount,
                language: this.language,
                room_type_ids,
                currency: this.currency,
                agent_id: is_in_agent_mode ? this.sourceOption['tag'] : null,
                is_in_agent_mode,
            });
            if (!this.isEventType('EDIT_BOOKING')) {
                this.defaultData.defaultDateRange.fromDate = new Date(this.dateRangeData.fromDate);
                this.defaultData.defaultDateRange.toDate = new Date(this.dateRangeData.toDate);
            }
            this.defaultData = Object.assign(Object.assign({}, this.defaultData), { roomsInfo: data.roomtypes });
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    getRoomCategoryByRoomId(roomId) {
        var _a;
        return (_a = this.defaultData.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(roomCategory => {
            return roomCategory.physicalrooms.find(room => room.id === +roomId);
        });
    }
    getSplitBookings() {
        return (this.defaultData.hasOwnProperty('splitBookingEvents') && this.defaultData.splitBookingEvents) || [];
    }
    closeWindow() {
        this.dateRangeData = {};
        this.closeBookingWindow.emit();
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    isEventType(key) {
        return this.defaultData.event_type === key;
    }
    onDateRangeSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        if (opt.key === 'selectedDateRange') {
            this.dateRangeData = opt.data;
            if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
                this.defaultData.roomsInfo = [];
            }
            else if (this.adultChildCount.adult !== 0) {
                this.initializeBookingAvailability(dateToFormattedString(new Date(this.dateRangeData.fromDate)), dateToFormattedString(new Date(this.dateRangeData.toDate)));
            }
        }
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.blockDatesData = opt.data;
    }
    handleGuestInfoUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        if (opt.guestRefKey) {
            if (this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING')) {
                this.guestData[opt.guestRefKey] = Object.assign(Object.assign({}, opt.data), { roomId: this.defaultData.PR_ID });
            }
            else
                this.guestData[opt.guestRefKey] = opt.data;
        }
    }
    handleBookedByInfoUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookedByInfoData = opt.value.data;
    }
    handleSourceDropDown(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        const selectedSource = this.sourceOptions.find(opt => opt.id === value.toString());
        this.sourceOption = {
            code: value,
            description: selectedSource.value || '',
            tag: selectedSource.tag,
            id: selectedSource.id,
            type: selectedSource.type,
        };
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    gotoSplitPageTwo() {
        this.gotoPage('page_two');
    }
    gotoPage(gotoPage) {
        this.page = gotoPage;
        this.renderPage();
    }
    showSplitBooking() {
        this.showSplitBookingOption = true;
        this.gotoPage('page_one');
    }
    getPageBlockDatesView() {
        return (h(Fragment, null, h("igl-block-dates-view", { fromDate: this.dateRangeData.fromDateStr, toDate: this.dateRangeData.toDateStr, entryDate: this.defaultData.ENTRY_DATE, onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), h("div", { class: "p-0 mb-1 mt-2 gap-30 d-flex align-items-center justify-content-between" }, h("button", { class: "btn btn-secondary flex-fill", onClick: () => this.closeWindow() }, locales.entries.Lcz_Cancel), h("button", { class: "btn btn-primary flex-fill", onClick: () => this.handleBlockDate() }, locales.entries.Lcz_Blockdates))));
    }
    handleButtonClicked(event) {
        var _a, _b;
        switch (event.detail.key) {
            case 'save':
                this.bookUser(false);
                break;
            case 'cancel':
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.closeWindow();
                break;
            case 'back':
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.gotoPage('page_one');
                break;
            case 'book':
                this.bookUser(false);
                this.buttonName = 'book';
                break;
            case 'bookAndCheckIn':
                this.bookUser(true);
                this.buttonName = 'bookAndCheckIn';
                break;
            case 'next':
                event.stopImmediatePropagation();
                event.stopPropagation();
                if (!((_a = this.adultChildCount) === null || _a === void 0 ? void 0 : _a.adult)) {
                    this.animateIrSelect.emit('adult_child_select');
                    break;
                }
                if (this.selectedUnits.size > 0) {
                    this.gotoPage('page_two');
                    break;
                }
                else {
                    if (((_b = this.defaultData) === null || _b === void 0 ? void 0 : _b.roomsInfo.length) === 0) {
                        this.animateIrButton.emit('check_availability');
                        break;
                    }
                }
                this.toast.emit({
                    type: 'error',
                    description: locales.entries.Lcz_SelectRatePlan,
                    title: locales.entries.Lcz_SelectRatePlan,
                });
                break;
            case 'check':
                this.initializeBookingAvailability(dateToFormattedString(new Date(this.dateRangeData.fromDate)), dateToFormattedString(new Date(this.dateRangeData.toDate)));
                break;
        }
    }
    handlePageTwoDataUpdateEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.key === 'propertyBookedBy') {
            this.handleBookedByInfoUpdate(event);
        }
        else {
            this.handleGuestInfoUpdate(event);
        }
    }
    async handleBlockDate() {
        const releaseData = getReleaseHoursString(+this.blockDatesData.RELEASE_AFTER_HOURS);
        const result = await this.bookingService.blockUnit(Object.assign({ from_date: dateToFormattedString(this.defaultData.defaultDateRange.fromDate), to_date: dateToFormattedString(this.defaultData.defaultDateRange.toDate), NOTES: this.blockDatesData.OPTIONAL_REASON || '', pr_id: this.defaultData.PR_ID.toString(), STAY_STATUS_CODE: this.blockDatesData.OUT_OF_SERVICE ? '004' : this.blockDatesData.RELEASE_AFTER_HOURS === 0 ? '002' : '003', DESCRIPTION: this.blockDatesData.RELEASE_AFTER_HOURS || '' }, releaseData));
        const blockedUnit = await transformNewBLockedRooms(result);
        this.blockedCreated.emit(blockedUnit);
        this.closeWindow();
    }
    async bookUser(check_in) {
        this.setLoadingState(check_in);
        if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
            if (this.isGuestDataIncomplete()) {
                this.isLoading = '';
                return;
            }
        }
        else {
            if (this.isButtonDisabled()) {
                this.isLoading = '';
                return;
            }
        }
        try {
            if (['003', '002', '004'].includes(this.defaultData.STATUS_CODE)) {
                this.eventsService.deleteEvent(this.defaultData.POOL);
            }
            if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
                this.bookedByInfoData.message = this.defaultData.NOTES;
            }
            const serviceParams = await this.bookPropertyService.prepareBookUserServiceParams(this, check_in, this.sourceOption);
            await this.bookingService.bookUser(serviceParams);
            this.resetBookingData.emit(null);
        }
        catch (error) {
            // Handle error
        }
        finally {
            this.resetLoadingState();
        }
    }
    setLoadingState(assign_units) {
        if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
            this.isLoading = 'save';
        }
        else {
            this.isLoading = assign_units ? 'bookAndCheckIn' : 'book';
        }
    }
    getArrivalTimeForBooking() {
        return this.bookedByInfoData.arrivalTime.find(e => e.CODE_VALUE_EN === this.defaultData.ARRIVAL_TIME).CODE_NAME;
    }
    resetLoadingState() {
        this.isLoading = '';
        setTimeout(() => {
            this.closeWindow();
        }, 100);
    }
    onRoomDataUpdate(event) {
        const units = this.bookPropertyService.onDataRoomUpdate(event, this.selectedUnits, this.isEventType('EDIT_BOOKING'), this.isEventType('EDIT_BOOKING') || this.isEventType('SPLIT_BOOKING') || this.isEventType('BAR_BOOKING'), this.defaultData.NAME);
        this.selectedUnits = new Map(units);
        this.renderPage();
    }
    getCurrentPage(name) {
        return this.page === name;
    }
    render() {
        //console.log('render');
        return (h(Host, { key: '60717c325aa2820652f3e747b1ba0fcb737917e8' }, h("div", { key: '3091e1e3fdebb4fd2fd32c715f808b239caa009c', class: "background-overlay", onClick: () => this.closeWindow() }), h("div", { key: '4da635db9eb8774a74f3fd0326d4994002771e1a', class: 'sideWindow pb-5 pb-md-0 ' + (this.getCurrentPage('page_block_date') ? 'block-date' : '') }, h("div", { key: 'fe85e06262208263aa3f321f868e6e1e68062a3f', class: "card position-sticky mb-0 shadow-none p-0 " }, h("div", { key: 'ad49940d4e1a1c8e0b0a788e776b370ab587bf06', class: "d-flex mt-2 align-items-center justify-content-between  " }, h("h3", { key: '7489e9a86a128d744179fb0a854d8814fef2aae5', class: "card-title text-left pb-1 font-medium-2 px-2 px-md-3" }, this.getCurrentPage('page_block_date') ? this.defaultData.BLOCK_DATES_TITLE : this.defaultData.TITLE), h("ir-icon", { key: 'ee1d599c099759d9697ded82789e3c77007487a9', class: "close close-icon", onIconClickHandler: () => {
                this.closeWindow();
            } }, h("svg", { key: 'ed207a0a3aeda8bddb3058cd59e05e12e968ac65', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'f60c15453e5cc49fa4ef449e8b10d9b0d7806f44', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("div", { key: 'fb48929a59be80e8b335295630e9f0b748df0640', class: "px-2 px-md-3" }, this.getCurrentPage('page_one') && (h("igl-booking-overview-page", { key: '30f283de116d184761c53e7a2dc9e7dd27d11547', initialRoomIds: this.initialRoomIds, defaultDaterange: this.defaultDateRange, class: 'p-0 mb-1', eventType: this.defaultData.event_type, selectedRooms: this.selectedUnits, currency: this.currency, showSplitBookingOption: this.showSplitBookingOption, ratePricingMode: this.ratePricingMode, dateRangeData: this.dateRangeData, bookingData: this.defaultData, adultChildCount: this.adultChildCount, bookedByInfoData: this.bookedByInfoData,
            // bookingDataDefaultDateRange={this.dateRangeData}
            adultChildConstraints: this.adultChildConstraints, onRoomsDataUpdate: evt => {
                this.onRoomDataUpdate(evt);
            }, sourceOptions: this.sourceOptions, propertyId: this.propertyid })), this.getCurrentPage('page_two') && (h("igl-pagetwo", { key: '5b031195408a63b0edf501bb67d2f50d15bd7e2d', currency: this.currency, propertyId: this.propertyid, showPaymentDetails: this.showPaymentDetails, selectedGuestData: this.guestData, countryNodeList: this.countryNodeList, isLoading: this.isLoading, selectedRooms: this.selectedUnits, bedPreferenceType: this.bedPreferenceType, dateRangeData: this.dateRangeData, bookingData: this.defaultData, showSplitBookingOption: this.showSplitBookingOption, language: this.language, bookedByInfoData: this.bookedByInfoData, defaultGuestData: this.defaultData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), onDataUpdateEvent: event => this.handlePageTwoDataUpdateEvent(event) })), this.getCurrentPage('page_block_date') ? this.getPageBlockDatesView() : null))));
    }
};
IglBookProperty.style = IglBookPropertyStyle0;

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{display:block;margin:0;padding:0}.sc-igl-book-property-footer-h>*.sc-igl-book-property-footer{margin:auto;padding:auto}.gap-30.sc-igl-book-property-footer{gap:30px}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.eventType = undefined;
        this.disabled = true;
    }
    isEventType(event) {
        return event === this.eventType;
    }
    editNext(label) {
        if (this.isEventType('EDIT_BOOKING')) {
            if (label === 'Cancel') {
                return 'flex-fill';
            }
            else {
                return 'd-none d-md-block  flex-fill';
            }
        }
        return 'flex-fill';
    }
    renderButton(type, label, disabled = false, icon_name) {
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-button", { btn_color: type === 'cancel' ? 'secondary' : 'primary', text: label, btn_disabled: disabled, onClickHanlder: () => {
                this.buttonClicked.emit({ key: type });
            }, icon_name: icon_name, iconPostion: "right", style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        return (h(Host, { key: '1c1b3b203de19a641835d7d63369aa2771277672' }, h("div", { key: 'c6f63cef6e45e2cedeb7a8768fa7b16156fa8ae8', class: "d-flex justify-content-between gap-30 align-items-center" }, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, isRequestPending('/Get_Exposed_Booking_Availability'), 'angles_right'))) : (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, false, 'angles_right'))))));
    }
};
IglBookPropertyFooter.style = IglBookPropertyFooterStyle0;

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:block}.row.sc-igl-book-property-header{padding:0 0 0 15px;margin:0}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}";
const IglBookPropertyHeaderStyle0 = iglBookPropertyHeaderCss;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.splitBookingDropDownChange = createEvent(this, "splitBookingDropDownChange", 7);
        this.sourceDropDownChange = createEvent(this, "sourceDropDownChange", 7);
        this.adultChild = createEvent(this, "adultChild", 7);
        this.checkClicked = createEvent(this, "checkClicked", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.toast = createEvent(this, "toast", 7);
        this.spiltBookingSelected = createEvent(this, "spiltBookingSelected", 7);
        this.animateIrButton = createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = createEvent(this, "animateIrSelect", 7);
        this.sourceOption = {
            code: '',
            description: '',
            tag: '',
            id: '',
            type: '',
        };
        this.splitBookingId = '';
        this.bookingData = '';
        this.minDate = undefined;
        this.sourceOptions = [];
        this.message = undefined;
        this.bookingDataDefaultDateRange = undefined;
        this.showSplitBookingOption = false;
        this.adultChildConstraints = undefined;
        this.splitBookings = undefined;
        this.adultChildCount = undefined;
        this.dateRangeData = undefined;
        this.bookedByInfoData = undefined;
        this.defaultDaterange = undefined;
        this.propertyId = undefined;
    }
    getSplitBookingList() {
        return (h("fieldset", { class: "d-flex flex-column text-left mb-1  flex-lg-row align-items-lg-center" }, h("label", { class: "mr-lg-1" }, locales.entries.Lcz_Tobooking, "# "), h("div", { class: "btn-group mt-1 mt-lg-0 sourceContainer" }, h("ir-autocomplete", { value: Object.keys(this.bookedByInfoData).length > 1 ? `${this.bookedByInfoData.bookingNumber} ${this.bookedByInfoData.firstName} ${this.bookedByInfoData.lastName}` : '', from_date: hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), to_date: hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'), propertyId: this.propertyId, placeholder: locales.entries.Lcz_BookingNumber, onComboboxValue: e => {
                e.stopImmediatePropagation();
                this.spiltBookingSelected.emit(e.detail);
            }, isSplitBooking: true }))));
    }
    getSourceNode() {
        return (h("fieldset", { class: "d-flex text-left  align-items-center" }, h("label", { class: "mr-1" }, locales.entries.Lcz_Source, " "), h("div", { class: "btn-group mt-0 flex-fill sourceContainer" }, h("select", { class: "form-control input-sm", id: "xSmallSelect", onChange: evt => this.sourceDropDownChange.emit(evt.target.value) }, this.sourceOptions.map(option => {
            if (option.type === 'LABEL') {
                return h("optgroup", { label: option.value });
            }
            return (h("option", { value: option.id, selected: this.sourceOption.code === option.id }, option.value));
        })))));
    }
    handleAdultChildChange(key, value) {
        //const value = (event.target as HTMLSelectElement).value;
        let obj = {};
        if (value === '') {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: 0 });
        }
        else {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: value });
        }
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        return (h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, h("div", { class: "form-group my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, h("fieldset", null, h("div", { class: "btn-group " }, h("ir-select", { onSelectChange: e => this.handleAdultChildChange('adult', e.detail), select_id: "adult_child_select", firstOption: locales.entries.Lcz_AdultsCaption, LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (h("fieldset", null, h("div", { class: "btn-group ml-1" }, h("ir-select", { onSelectChange: e => this.handleAdultChildChange('child', e.detail), select_id: "child_select", firstOption: this.renderChildCaption(), LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) })))), h("ir-button", { btn_id: "check_availability", isLoading: isRequestPending('/Get_Exposed_Booking_Availability'), icon: "", size: "sm", class: "ml-2", text: locales.entries.Lcz_Check, onClickHanlder: () => this.handleButtonClicked() }))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = locales.entries.Lcz_Years;
        if (maxAge === 1) {
            years = locales.entries.Lcz_Year;
        }
        return `${locales.entries.Lcz_ChildCaption} < ${this.adultChildConstraints.child_max_age} ${years}`;
    }
    handleButtonClicked() {
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            this.toast.emit({
                type: 'error',
                title: locales.entries.Lcz_ChooseBookingNumber,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = hooks(new Date(this.dateRangeData.fromDate));
            const selectedToDate = hooks(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                this.toast.emit({
                    type: 'error',
                    title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                    description: '',
                    position: 'top-right',
                });
                return;
            }
            else if (this.adultChildCount.adult === 0) {
                this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
                this.animateIrSelect.emit('adult_child_select');
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
            this.toast.emit({
                type: 'error',
                title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.adultChildCount.adult === 0) {
            this.animateIrSelect.emit('adult_child_select');
            this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
        }
        else {
            this.buttonClicked.emit({ key: 'check' });
        }
    }
    isEventType(key) {
        return this.bookingData.event_type === key;
    }
    render() {
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (h(Host, { key: '55b62ea25933b51ecf1a7052d24a843643a2e8f2' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), h("div", { key: 'f14db7d62fa5aefeb952a523380dc24673302092', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, h("fieldset", { key: 'ffb400ea8577bd6142702c5b65f120cabb34598f', class: "mt-lg-0  " }, h("igl-date-range", { key: '85df3428f3d308a04ec291741744fdd78e6a669f', dateLabel: locales.entries.Lcz_Dates, minDate: this.isEventType('PLUS_BOOKING') ? hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD') : this.minDate, disabled: this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), h("p", { key: 'ff20b95b2fc9723cd256c2b8ffaf798fb18f7940', class: "text-right mt-1 message-label" }, calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = IglBookPropertyHeaderStyle0;

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}";
const IglBookingOverviewPageStyle0 = iglBookingOverviewPageCss;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.roomsDataUpdate = createEvent(this, "roomsDataUpdate", 7);
        this.bookingData = undefined;
        this.propertyId = undefined;
        this.message = undefined;
        this.showSplitBookingOption = undefined;
        this.eventType = undefined;
        this.currency = undefined;
        this.adultChildConstraints = undefined;
        this.ratePricingMode = undefined;
        this.dateRangeData = undefined;
        this.defaultDaterange = undefined;
        this.selectedRooms = undefined;
        this.adultChildCount = undefined;
        this.sourceOptions = undefined;
        this.bookedByInfoData = undefined;
        this.initialRoomIds = undefined;
    }
    getSplitBookings() {
        return (this.bookingData.hasOwnProperty('splitBookingEvents') && this.bookingData.splitBookingEvents) || [];
    }
    isEventType(event) {
        return event === this.eventType;
    }
    setMinDate() {
        if (!this.isEventType('EDIT_BOOKING')) {
            return;
        }
        const from_date = hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        var _a, _b;
        //console.log(this.bookingData);
        return (h(Host, { key: '10bb0647f1dda45256d5ebf4958db6e7617ea096' }, h("igl-book-property-header", { key: '63fd9d685f7ae67eca115abcfdd593d6e6916d2b', bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), h("div", { key: '3c37f4c8c090eb15fd4e31db20c06bfab2308562', class: " text-left" }, isRequestPending('/Get_Exposed_Booking_Availability') && this.isEventType('EDIT_BOOKING') ? (h("div", { class: "loading-container" }, h("div", { class: "loader" }))) : (h(Fragment, null, (_b = (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.roomsInfo) === null || _b === void 0 ? void 0 : _b.map(roomInfo => {
            //console.log(this.selectedRooms);
            return (h("igl-booking-rooms", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-info-${roomInfo.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomTypeData: roomInfo, class: "mt-2 mb-1 p-0", roomInfoId: this.selectedRooms.has(`c_${roomInfo.id}`) ? roomInfo.id : null, defaultData: this.selectedRooms.get(`c_${roomInfo.id}`), onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) }));
        })))), h("igl-book-property-footer", { key: 'c934d624a9e3fe51a25070a00631539b0b76a80a', class: 'p-0 mb-1 mt-3', eventType: this.bookingData.event_type, disabled: this.selectedRooms.size === 0 })));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

const iglBookingRoomRatePlanCss = ".sc-igl-booking-room-rate-plan-h{display:block;margin-bottom:0.5rem}.currency.sc-igl-booking-room-rate-plan{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-igl-booking-room-rate-plan{font-size:14px;line-height:0;padding:0;height:0;border-left:0}.rate-input-container.sc-igl-booking-room-rate-plan{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-igl-booking-room-rate-plan{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-igl-booking-room-rate-plan span[data-state='focus'].sc-igl-booking-room-rate-plan{border-color:var(--blue)}.input-group-prepend.sc-igl-booking-room-rate-plan span[data-disabled].sc-igl-booking-room-rate-plan{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}@media only screen and (min-width: 1200px){.rateplan-name-container.sc-igl-booking-room-rate-plan{width:40%}.rateplan-container.sc-igl-booking-room-rate-plan{width:40%}}@media only screen and (min-width: 991px){.max-w-300.sc-igl-booking-room-rate-plan{max-width:200px}.rate-input-container.sc-igl-booking-room-rate-plan{max-width:100px}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-booking-room-rate-plan{width:35%}}@media only screen and (max-width: 768px){.booking-btn.sc-igl-booking-room-rate-plan{width:100%}}.total-nights-container.sc-igl-booking-room-rate-plan{width:max-content}.nightBorder.sc-igl-booking-room-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}";
const IglBookingRoomRatePlanStyle0 = iglBookingRoomRatePlanCss;

const IglBookingRoomRatePlan = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.gotoSplitPageTwoEvent = createEvent(this, "gotoSplitPageTwoEvent", 7);
        this.defaultData = undefined;
        this.ratePlanData = undefined;
        this.totalAvailableRooms = undefined;
        this.index = undefined;
        this.ratePricingMode = [];
        this.currency = undefined;
        this.physicalrooms = undefined;
        this.shouldBeDisabled = undefined;
        this.dateDifference = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.fullyBlocked = undefined;
        this.isBookDisabled = false;
        this.defaultRoomId = undefined;
        this.selectedRoom = undefined;
        this.is_bed_configuration_enabled = undefined;
        this.isInputFocused = false;
        this.selectedData = undefined;
        this.ratePlanChangedState = false;
    }
    getAvailableRooms(assignable_units) {
        let result = [];
        assignable_units.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        return result;
    }
    componentWillLoad() {
        // console.log('default data', this.defaultData);
        this.updateSelectedRatePlan(this.ratePlanData);
    }
    disableForm() {
        if (this.bookingType === 'EDIT_BOOKING' && this.shouldBeDisabled) {
            return false;
        }
        else {
            return this.selectedData.is_closed || this.totalAvailableRooms === 0 || (calendar_data.is_frontdesk_enabled && this.selectedData.physicalRooms.length === 0);
        }
    }
    setAvailableRooms(data) {
        let availableRooms = this.getAvailableRooms(data);
        if (this.bookingType === 'EDIT_BOOKING' && this.shouldBeDisabled) {
            if (this.selectedRoom) {
                availableRooms.push({
                    id: this.selectedRoom.roomId,
                    name: this.selectedRoom.roomName,
                });
                availableRooms.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return availableRooms;
    }
    getSelectedOffering(value) {
        return this.ratePlanData.variations.find(variation => variation.adult_child_offering === value);
    }
    updateSelectedRatePlan(data) {
        var _a;
        this.selectedData = {
            is_bed_configuration_enabled: this.is_bed_configuration_enabled,
            ratePlanId: data.id,
            adult_child_offering: data.variations[0].adult_child_offering,
            rateType: 1,
            totalRooms: 0,
            rate: (_a = data.variations[0].amount) !== null && _a !== void 0 ? _a : 0,
            ratePlanName: data.name,
            adultCount: data.variations[0].adult_nbr,
            childrenCount: data.variations[0].child_nbr,
            cancelation: data.cancelation,
            guarantee: data.guarantee,
            isRateModified: false,
            defaultSelectedRate: 0,
            index: this.index,
            is_closed: data.is_closed,
            physicalRooms: this.setAvailableRooms(this.ratePlanData.assignable_units),
            dateDifference: this.dateDifference,
        };
        if (this.defaultData) {
            for (const [key, value] of Object.entries(this.defaultData)) {
                this.selectedData[key] = value;
            }
            this.selectedData['rateType'] = 1;
        }
    }
    componentDidLoad() {
        if (this.defaultData) {
            this.dataUpdateEvent.emit({
                key: 'roomRatePlanUpdate',
                changedKey: 'physicalRooms',
                data: this.selectedData,
            });
        }
    }
    async ratePlanDataChanged(newData) {
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { adult_child_offering: newData.variations[0].adult_child_offering, adultCount: newData.variations[0].adult_nbr, childrenCount: newData.variations[0].child_nbr, rate: this.handleRateDaysUpdate(), physicalRooms: this.setAvailableRooms(newData.assignable_units) });
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            changedKey: 'rate',
            data: this.selectedData,
        });
    }
    handleRateDaysUpdate() {
        if (this.selectedData.isRateModified) {
            return this.selectedData.defaultSelectedRate;
        }
        const selectedOffering = this.getSelectedOffering(this.selectedData.adult_child_offering);
        return selectedOffering ? selectedOffering.amount : 0;
    }
    handleInput(event) {
        const inputElement = event.target;
        let inputValue = inputElement.value.replace(/[^0-9.]/g, '');
        const validDecimalNumber = /^\d*\.?\d*$/;
        if (!validDecimalNumber.test(inputValue)) {
            inputValue = inputValue.substring(0, inputValue.length - 1);
        }
        inputElement.value = inputValue;
        if (inputValue) {
            this.selectedData.isRateModified = true;
            this.handleDataChange('rate', event);
        }
        else {
            this.selectedData = Object.assign(Object.assign({}, this.selectedData), { rate: -1, totalRooms: 0 });
            this.dataUpdateEvent.emit({
                key: 'roomRatePlanUpdate',
                changedKey: 'rate',
                data: this.selectedData,
            });
        }
    }
    handleDataChange(key, evt) {
        const value = evt.target.value;
        switch (key) {
            case 'adult_child_offering':
                this.updateOffering(value);
                break;
            case 'rate':
                this.updateRate(value);
                break;
            default:
                this.updateGenericData(key, value);
                break;
        }
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            changedKey: key,
            data: this.selectedData,
        });
    }
    updateOffering(value) {
        const offering = this.getSelectedOffering(value);
        if (offering) {
            this.selectedData = Object.assign(Object.assign({}, this.selectedData), { adult_child_offering: value, adultCount: offering.adult_nbr, childrenCount: offering.child_nbr, rate: offering.amount, isRateModified: false });
        }
    }
    updateRate(value) {
        const numericValue = value === '' ? 0 : Number(value);
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { rate: numericValue, totalRooms: value === '' ? 0 : this.selectedData.totalRooms, defaultSelectedRate: this.selectedData.rateType === 2 ? numericValue / this.dateDifference : numericValue });
    }
    updateGenericData(key, value) {
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { [key]: value === '' ? 0 : parseInt(value) });
    }
    bookProperty() {
        this.dataUpdateEvent.emit({ key: 'clearData', data: this.selectedData });
        this.handleDataChange('totalRooms', { target: { value: '1' } });
        this.gotoSplitPageTwoEvent.emit({ key: 'gotoSplitPage', data: '' });
    }
    renderRate() {
        if (this.selectedData.isRateModified) {
            console.log('selectedData.rate', this.selectedData.rate);
            return this.selectedData.rate === -1 ? '' : this.selectedData.rate;
        }
        return this.selectedData.rateType === 1 ? Number(this.selectedData.rate).toFixed(2) : Number(this.selectedData.rate / this.dateDifference).toFixed(2);
    }
    render() {
        return (h(Host, { key: 'a034867af1eb7a8c4a17c619de19ec0cac96ffd1' }, h("div", { key: 'e5ed1c1cbca838ec8d2dcaacf4f736a333bd84b6', class: "d-flex flex-column m-0 p-0 flex-lg-row align-items-lg-center justify-content-lg-between " }, h("div", { key: '584d2771ba66e6ba521c6048f8b0aa50b6fda427', class: "rateplan-name-container" }, this.bookingType === 'BAR_BOOKING' ? (h(Fragment, null, h("span", { class: "font-weight-bold\t" }, this.ratePlanData.name.split('/')[0]), h("span", null, "/", this.ratePlanData.name.split('/')[1]))) : (h("span", null, this.ratePlanData.short_name)), h("ir-tooltip", { key: '544bcec810e0eb07521ee8c371a4b58216d79967', message: this.ratePlanData.cancelation + this.ratePlanData.guarantee })), h("div", { key: '4f23e501566f807262dbbae160c667fc2273372a', class: 'd-md-flex justify-content-md-end  align-items-md-center flex-fill rateplan-container' }, h("div", { key: 'c33b9536cb8c33e9f9da5ae50cae6d34ab23324c', class: "mt-1 mt-md-0 flex-fill max-w-300" }, h("fieldset", { key: '0587315c40815c22d3fe274d45006d2ad533f0ee', class: "position-relative" }, h("select", { key: '13a47a893c93874240644c985a8e307b6e42639f', disabled: this.disableForm(), class: "form-control  input-sm", id: v4(), onChange: evt => this.handleDataChange('adult_child_offering', evt) }, this.ratePlanData.variations.map(variation => (h("option", { value: variation.adult_child_offering, selected: this.selectedData.adult_child_offering === variation.adult_child_offering }, variation.adult_child_offering)))))), h("div", { key: '37da66fd94a035c3acae6e7ea1c87e700f2398a5', class: 'm-0 p-0 mt-1 mt-md-0 d-flex justify-content-between align-items-md-center ml-md-1 ' }, h("div", { key: '150e6a6f6f03ab08361a929c89e209e0851c4019', class: " d-flex  m-0 p-0 rate-total-night-view  mt-0" }, h("fieldset", { key: 'a8d83407a5f0766c446115d4ff290e1d56548e36', class: "position-relative has-icon-left m-0 p-0 rate-input-container  " }, h("div", { key: 'ebfda851cb40c59270c08ec4fbb7fd39a060105a', class: "input-group-prepend" }, h("span", { key: 'f3441d4cfad04f81bfc616970dcdaee13aec9a8c', "data-disabled": this.disableForm(), "data-state": this.isInputFocused ? 'focus' : '', class: "input-group-text new-currency", id: "basic-addon1" }, getCurrencySymbol(this.currency.code))), h("input", { key: 'a1d40a0d7e67a833c60e93ba2426337cf63f73b2', onFocus: () => (this.isInputFocused = true), onBlur: () => (this.isInputFocused = false), disabled: this.disableForm(), type: "text", class: "form-control pl-0 input-sm rate-input py-0 m-0 rounded-0 rateInputBorder", value: this.renderRate(), id: v4(), placeholder: locales.entries.Lcz_Rate || 'Rate', onInput: (event) => this.handleInput(event) })), h("fieldset", { key: 'cf2c15d69f7cf5a4e2c10fe8323744991963c3ac', class: "position-relative m-0 total-nights-container p-0 " }, h("select", { key: '98f8c3c2b16201ed9115e179d9511e5c4eb57fdd', disabled: this.disableForm(), class: "form-control input-sm m-0 nightBorder rounded-0 m-0  py-0", id: v4(), onChange: evt => this.handleDataChange('rateType', evt) }, this.ratePricingMode.map(data => (h("option", { value: data.CODE_NAME, selected: this.selectedData.rateType === +data.CODE_NAME }, data.CODE_VALUE_EN)))))), this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' ? (h("div", { class: "flex-fill  mt-lg-0 ml-1 m-0 mt-md-0 p-0" }, h("fieldset", { class: "position-relative" }, h("select", { disabled: this.selectedData.rate === 0 || this.disableForm(), class: "form-control input-sm", id: v4(), onChange: evt => this.handleDataChange('totalRooms', evt) }, Array.from({ length: this.totalAvailableRooms + 1 }, (_, i) => i).map(i => (h("option", { value: i, selected: this.selectedData.totalRooms === i }, i))))))) : null), this.bookingType === 'EDIT_BOOKING' ? (h(Fragment, null, h("div", { class: " m-0 p-0  mt-lg-0  ml-md-1 mt-md-1 d-none d-md-block" }, h("fieldset", { class: "position-relative" }, h("input", { disabled: this.disableForm(), type: "radio", name: "ratePlanGroup", value: "1", onChange: evt => this.handleDataChange('totalRooms', evt), checked: this.selectedData.totalRooms === 1 }))), h("button", { disabled: this.selectedData.rate === -1 || this.disableForm(), type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1  mt-1 d-md-none ", onClick: () => this.bookProperty() }, this.selectedData.totalRooms === 1 ? locales.entries.Lcz_Current : locales.entries.Lcz_Select))) : null, this.bookingType === 'BAR_BOOKING' || this.bookingType === 'SPLIT_BOOKING' ? (h("button", { disabled: this.selectedData.rate === -1 || this.disableForm() || (this.bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1  mt-1 ", onClick: () => this.bookProperty() }, locales.entries.Lcz_Book)) : null))));
    }
    static get watchers() { return {
        "ratePlanData": ["ratePlanDataChanged"]
    }; }
};
IglBookingRoomRatePlan.style = IglBookingRoomRatePlanStyle0;

const iglBookingRoomsCss = ".sc-igl-booking-rooms-h{display:block}.margin-bottom-8.sc-igl-booking-rooms{margin-bottom:8px !important}";
const IglBookingRoomsStyle0 = iglBookingRoomsCss;

const IglBookingRooms = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
        this.roomTypeData = undefined;
        this.defaultData = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.dateDifference = undefined;
        this.ratePricingMode = [];
        this.roomInfoId = null;
        this.currency = undefined;
        this.selectedRooms = [];
        this.totalRooms = undefined;
        this.isBookDisabled = undefined;
        this.initialRoomIds = undefined;
        this.roomsDistributions = [];
    }
    componentWillLoad() {
        this.initializeRoomData();
    }
    initializeRoomData() {
        const { inventory, rateplans } = this.roomTypeData;
        this.totalRooms = inventory || 0;
        this.selectedRooms = new Array(rateplans.length).fill(0);
        this.roomsDistributions = this.calculateInitialDistributions(rateplans, inventory);
    }
    handleRoomTypeData() {
        this.initializeRoomData();
    }
    calculateInitialDistributions(rateplans, inventory) {
        let distributions = new Array(rateplans.length).fill(inventory);
        if (this.defaultData && this.bookingType !== 'EDIT_BOOKING' && inventory > 0) {
            let selectedIndexes = [];
            let sum = 0;
            this.defaultData.forEach(category => {
                this.selectedRooms[category.index] = category.totalRooms;
                distributions[category.index] = category.totalRooms;
                sum += category.totalRooms;
                selectedIndexes.push(category.index);
            });
            if (selectedIndexes.length < distributions.length) {
                distributions.forEach((_, index) => {
                    if (!selectedIndexes.includes(index)) {
                        if (sum === this.totalRooms) {
                            distributions[index] = 0;
                        }
                        else {
                            distributions[index] = distributions[index] - sum;
                        }
                    }
                    else {
                        if (sum < this.totalRooms) {
                            distributions[index] = this.totalRooms - sum + distributions[index];
                        }
                    }
                });
            }
        }
        else {
            distributions.fill(inventory);
        }
        return distributions;
    }
    onRoomDataUpdate(event, index) {
        event.stopImmediatePropagation();
        const { detail: { data, changedKey }, } = event;
        let updatedData = Object.assign({}, data);
        if (changedKey === 'totalRooms') {
            this.handleTotalRoomsUpdate(index, updatedData.totalRooms);
        }
        updatedData = Object.assign(Object.assign({}, updatedData), { roomCategoryId: this.roomTypeData.id, roomCategoryName: this.roomTypeData.name, inventory: this.roomTypeData.inventory });
        this.dataUpdateEvent.emit({ key: data.key, data: updatedData, changedKey });
    }
    handleTotalRoomsUpdate(index, newValue) {
        if (this.selectedRooms[index] !== newValue) {
            this.selectedRooms[index] = newValue;
            this.updateRatePlanTotalRooms(index);
        }
    }
    updateRatePlanTotalRooms(ratePlanIndex) {
        const calculateTotalSelectedRoomsExcludingIndex = excludedIndex => {
            return this.selectedRooms.reduce((acc, rooms, idx) => (idx !== excludedIndex ? acc + rooms : acc), 0);
        };
        const newRoomsDistributions = this.selectedRooms.map((_, index) => {
            if (index === ratePlanIndex) {
                return this.roomsDistributions[index];
            }
            const totalSelectedRoomsExcludingCurrent = calculateTotalSelectedRoomsExcludingIndex(index);
            const availableRooms = this.totalRooms - totalSelectedRoomsExcludingCurrent;
            return availableRooms > 0 ? availableRooms : 0;
        });
        if (JSON.stringify(this.roomsDistributions) !== JSON.stringify(newRoomsDistributions)) {
            this.roomsDistributions = [...newRoomsDistributions];
        }
    }
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: '5b769fac02363d59dc7ed4e0400b97badb0f25f0' }, isValidBookingType && this.roomTypeData.rateplans.length > 0 && h("div", { key: '3d05bb856afb15ce606d093428f24aa24d066505', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomTypeData.name), this.roomTypeData.rateplans.map((ratePlan, index) => {
            if (ratePlan.variations !== null) {
                let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomTypeData.id;
                let roomId = -1;
                if (shouldBeDisabled && this.initialRoomIds) {
                    roomId = this.initialRoomIds.roomId;
                }
                return (h("igl-booking-room-rate-plan", { is_bed_configuration_enabled: this.roomTypeData.is_bed_configuration_enabled, index: index, isBookDisabled: this.isBookDisabled, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency, dateDifference: this.dateDifference, ratePlanData: ratePlan, totalAvailableRooms: this.roomsDistributions[index], bookingType: this.bookingType, defaultData: (this.defaultData && this.defaultData.get(`p_${ratePlan.id}`)) || null, shouldBeDisabled: shouldBeDisabled, onDataUpdateEvent: evt => this.onRoomDataUpdate(evt, index), physicalrooms: this.roomTypeData.physicalrooms, defaultRoomId: roomId, selectedRoom: this.initialRoomIds }));
            }
            else {
                return null;
            }
        })));
    }
    static get watchers() { return {
        "roomTypeData": ["handleRoomTypeData"]
    }; }
};
IglBookingRooms.style = IglBookingRoomsStyle0;

const iglDateRangeCss = ".sc-igl-date-range-h{display:flex;align-items:center !important;font-size:14px !important}.date-range-input.sc-igl-date-range{margin:0;padding:0;display:flex;flex:1;cursor:pointer;width:220px !important;opacity:0;user-select:none;font-size:14px !important}.iglRangeNights.sc-igl-date-range{margin:0;padding:0}.date-view.sc-igl-date-range{position:absolute;background:white;pointer-events:none;cursor:pointer;display:block;margin-left:14px;margin-right:14px;font-size:13.65px !important;display:flex;align-items:center;inset:0}.date-view.sc-igl-date-range svg.sc-igl-date-range{padding:0 !important;margin:0;margin-right:10px}.calendarPickerContainer.sc-igl-date-range{display:flex !important;position:relative !important;text-align:left;align-items:center !important;padding:0 !important;margin:0;border:1px solid var(--ir-date-range-border, #379ff2);width:var(--ir-date-range-width, 245px);transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.calendarPickerContainer.sc-igl-date-range:focus-within{border-color:#379ff2}.calendarPickerContainer[data-state='disabled'].sc-igl-date-range{border:0px;width:280px}.date-view[data-state='disabled'].sc-igl-date-range,.date-range-input[data-state='disabled'].sc-igl-date-range{margin:0;cursor:default}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.toast = createEvent(this, "toast", 7);
        this.totalNights = 0;
        this.fromDateStr = 'from';
        this.toDateStr = 'to';
        this.defaultData = undefined;
        this.disabled = false;
        this.minDate = undefined;
        this.dateLabel = undefined;
        this.maxDate = undefined;
        this.withDateDifference = true;
        this.renderAgain = false;
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    initializeDates() {
        let dt = new Date();
        dt.setHours(0, 0, 0, 0);
        dt.setDate(dt.getDate() + 1);
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
                this.fromDateStr = this.getFormattedDateString(this.fromDate);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
                this.toDateStr = this.getFormattedDateString(this.toDate);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
            this.handleDateSelectEvent('selectedDateRange', {
                fromDate: this.fromDate.getTime(),
                toDate: this.toDate.getTime(),
                fromDateStr: this.fromDateStr,
                toDateStr: this.toDateStr,
                dateDifference: this.totalNights,
            });
        }
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(hooks(this.fromDate).format('YYYY-MM-DD'), hooks(this.toDate).format('YYYY-MM-DD'));
    }
    getFormattedDateString(dt) {
        return dt.getDate() + ' ' + dt.toLocaleString('default', { month: 'short' }).toLowerCase() + ' ' + dt.getFullYear();
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (h(Host, { key: '0112708f033e5ed0bf807367b9955bc9e794e302' }, h("div", { key: 'e9e97488a86ec193f25b7f7243eca8da66037051', class: "calendarPickerContainer form-control input-sm", "data-state": this.disabled ? 'disabled' : 'active' }, h("ir-date-picker", { key: '9c001e9d82f8254d3e63a5861f0b1dfc1fcc1d03', maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                this.handleDateChange(evt);
            } }), h("div", { key: 'b8bab51d30a8ebf429570761a24831d7f6d930ca', "data-state": this.disabled ? 'disabled' : 'active', class: "date-view" }, h("svg", { key: '0dbdff27237f573f5378df04e8d7fc329c916d0f', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "10.5", viewBox: "0 0 448 512" }, h("path", { key: 'cdf53aaebf6e8c2451e618c573115bf5252a65f2', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("ir-date-view", { key: '8ce8db7888c6034d976f269b047f6d0ac1e37178', showDateDifference: this.disabled, from_date: this.fromDate, to_date: this.toDate }))), this.withDateDifference && (h("span", { key: '0c2090c8e1edb53b24222d42e8e8546cc6ef0caa' }, this.totalNights && !this.disabled ? (h("span", { class: "iglRangeNights mx-1" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`))) : ('')))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"]
    }; }
};
IglDateRange.style = IglDateRangeStyle0;

const iglPagetwoCss = ".sc-igl-pagetwo-h{display:block}.card-title.sc-igl-pagetwo{border-bottom:1px solid #e4e5ec}.scrollContent.sc-igl-pagetwo{height:calc(100% - 79px);overflow:auto;position:relative}.background-overlay.sc-igl-pagetwo{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-pagetwo{height:calc(100% - 79px);overflow:auto}.sideWindow.sc-igl-pagetwo{position:absolute;top:0;right:0;height:100%;background-color:#ffffff}.close.sc-igl-pagetwo{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-pagetwo{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-pagetwo:not(:disabled),[type='button'].sc-igl-pagetwo:not(:disabled){cursor:pointer}.row.sc-igl-pagetwo{padding:0 0 0 15px;margin:0}";
const IglPagetwoStyle0 = iglPagetwoCss;

const IglPagetwo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.showPaymentDetails = undefined;
        this.currency = undefined;
        this.isEditOrAddRoomEvent = undefined;
        this.dateRangeData = undefined;
        this.bookingData = undefined;
        this.showSplitBookingOption = undefined;
        this.language = undefined;
        this.bookedByInfoData = undefined;
        this.propertyId = undefined;
        this.bedPreferenceType = undefined;
        this.selectedRooms = undefined;
        this.isLoading = undefined;
        this.countryNodeList = undefined;
        this.selectedGuestData = undefined;
        this.defaultGuestData = undefined;
        this.selectedBookedByData = undefined;
        this.guestData = undefined;
        this.selectedUnits = {};
    }
    componentWillLoad() {
        this.initializeGuestData();
        this.selectedBookedByData = this.bookedByInfoData;
    }
    initializeGuestData() {
        let total = 0;
        const newSelectedUnits = Object.assign({}, this.selectedUnits);
        const getRate = (rate, totalNights, isRateModified, preference) => {
            if (isRateModified && preference === 2) {
                return rate * totalNights;
            }
            return rate;
        };
        this.selectedUnits = newSelectedUnits;
        this.guestData = [];
        this.selectedRooms.forEach((room, key) => {
            room.forEach(rate_plan => {
                newSelectedUnits[key] = rate_plan.selectedUnits;
                total += rate_plan.totalRooms * getRate(rate_plan.rate, this.dateRangeData.dateDifference, rate_plan.isRateModified, rate_plan.rateType);
                for (let i = 1; i <= rate_plan.totalRooms; i++) {
                    this.guestData.push(Object.assign({ guestName: '', roomId: '', preference: '' }, rate_plan));
                }
            });
        });
        this.bookingData.TOTAL_PRICE = total;
    }
    handleOnApplicationInfoDataUpdateEvent(event, index) {
        const opt = event.detail;
        const categoryIdKey = `c_${opt.data.roomCategoryId}`;
        const updatedUnits = [...(this.selectedUnits[categoryIdKey] || [])];
        updatedUnits[index] = opt.data.roomId;
        this.selectedUnits = Object.assign(Object.assign({}, this.selectedUnits), { [categoryIdKey]: updatedUnits });
        this.dataUpdateEvent.emit({
            key: 'applicationInfoUpdateEvent',
            value: event.detail,
        });
    }
    handleEventData(event, key, index) {
        if (key === 'application-info') {
            this.handleOnApplicationInfoDataUpdateEvent(event, index);
        }
        else {
            this.selectedBookedByData = event.detail.data;
            this.dataUpdateEvent.emit({
                key: 'propertyBookedBy',
                value: event.detail,
            });
        }
    }
    isGuestDataIncomplete() {
        if (this.selectedGuestData.length !== this.guestData.length) {
            return true;
        }
        for (const data of this.selectedGuestData) {
            if (data.guestName === '' || data.preference === '' || data.roomId === '') {
                return true;
            }
        }
        return false;
    }
    isButtonDisabled(key) {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.selectedGuestData) {
                return this.isGuestDataIncomplete();
            }
            // const isCardDetails = ['cardNumber', 'cardHolderName', 'expiryMonth', 'expiryYear'].includes(key);
            // if (!this.showPaymentDetails && isCardDetails) {
            //   return false;
            // }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (this.isLoading === key ||
            isValidProperty(this.selectedGuestData, 'guestName', '') ||
            isValidProperty(this.selectedBookedByData, 'isdCode', '') ||
            isValidProperty(this.selectedBookedByData, 'contactNumber', '') ||
            isValidProperty(this.selectedBookedByData, 'firstName', '') ||
            isValidProperty(this.selectedBookedByData, 'lastName', '') ||
            isValidProperty(this.selectedBookedByData, 'countryId', -1) ||
            isValidProperty(this.selectedBookedByData, 'selectedArrivalTime', '') ||
            isValidProperty(this.selectedBookedByData, 'email', ''));
    }
    render() {
        return (h(Host, { key: '7a87f4429f3f4ba2a8b8098e89d507cf2114e34f' }, h("div", { key: '0c59d4c8f63e77ddcb39ab54620c8d481baf4756', class: "d-flex flex-wrap" }, h("ir-date-view", { key: '6c413bb99b3124d3ed9f6c3754995d6e18b40fc4', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: this.dateRangeData.fromDateStr, to_date: this.dateRangeData.toDateStr, dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (h("div", { key: 'fabf9057d48425efce9dff7d70a639c744a7df58', class: "mt-1 mt-md-0 text-right" }, locales.entries.Lcz_TotalPrice, " ", h("span", { key: 'aa00c23cc991017912ce9555059b72f652ddfd8a', class: "font-weight-bold font-medium-1" }, getCurrencySymbol(this.currency.code) + this.bookingData.TOTAL_PRICE || '$0.00')))), this.guestData.map((roomInfo, index) => {
            return (h("igl-application-info", { dateDifference: this.dateRangeData.dateDifference, defaultGuestPreference: this.defaultGuestData.bed_preference, defaultGuestRoomId: this.defaultGuestData.PR_ID, currency: this.currency, bedPreferenceType: this.bedPreferenceType, index: index, selectedUnits: this.selectedUnits[`c_${roomInfo.roomCategoryId}`], guestInfo: roomInfo, guestRefKey: index, bookingType: this.bookingData.event_type, roomsList: roomInfo.physicalRooms, onDataUpdateEvent: event => this.handleEventData(event, 'application-info', index) }));
        }), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (h("igl-property-booked-by", { propertyId: this.propertyId, countryNodeList: this.countryNodeList, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => 
            // this.dataUpdateEvent.emit({
            //   key: "propertyBookedBy",
            //   value: event.detail,
            // })
            this.handleEventData(event, 'propertyBookedBy', 0) })), this.isEditOrAddRoomEvent ? (h("div", { class: "d-flex p-0 mb-1 mt-2" }, h("div", { class: "flex-fill mr-2" }, h("ir-button", { icon: "", text: locales.entries.Lcz_Back, class: "full-width", btn_color: "secondary", btn_styles: "justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'back' }) })), h("div", { class: "flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'save', onClickHanlder: () => this.buttonClicked.emit({ key: 'save' }), btn_styles: "full-width align-items-center justify-content-center", text: locales.entries.Lcz_Save })))) : (h("div", { class: "d-flex flex-column flex-md-row p-0 mb-1 mt-2 justify-content-md-between align-items-md-center" }, h("div", { class: "flex-fill mr-md-1" }, h("ir-button", { icon_name: "angles_left", btn_color: "secondary", btn_styles: "full-width align-items-center justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'back' }), text: locales.entries.Lcz_Back, style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })), h("div", { class: "mt-1 mt-md-0 flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'book', btn_styles: "full-width align-items-center justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'book' }), text: locales.entries.Lcz_Book }))))));
    }
};
IglPagetwo.style = IglPagetwoStyle0;

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.row.sc-igl-property-booked-by{padding:0 0 0 15px;margin:0}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.bookingService = new BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.language = undefined;
        this.showPaymentDetails = false;
        this.defaultData = undefined;
        this.countryNodeList = [];
        this.propertyId = undefined;
        this.isButtonPressed = false;
        this.bookedByData = {
            id: undefined,
            email: '',
            firstName: '',
            lastName: '',
            countryId: '',
            isdCode: '',
            contactNumber: '',
            selectedArrivalTime: '',
            emailGuest: false,
            message: '',
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
        };
    }
    async componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
        this.assignCountryCode();
        this.initializeExpiryYears();
        this.initializeDateData();
        this.populateBookedByData();
    }
    initializeExpiryYears() {
        const currentYear = new Date().getFullYear();
        this.expiryYears = Array.from({ length: 4 }, (_, index) => (currentYear + index).toString());
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: countryId.toString(), countryId });
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        var _a;
        this.bookedByData = this.defaultData ? Object.assign(Object.assign({}, this.bookedByData), this.defaultData) : {};
        this.arrivalTimeList = ((_a = this.defaultData) === null || _a === void 0 ? void 0 : _a.arrivalTime) || [];
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME });
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
        console.log('initial bookedby data', this.bookedByData);
    }
    handleDataChange(key, event) {
        this.bookedByData[key] = key === 'emailGuest' ? event.target.checked : event.target.value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
        if (key === 'countryId') {
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: event.target.value });
        }
        console.log(this.bookedByData);
    }
    handleNumberInput(key, event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        // Regular expression to match only numeric characters (0-9)
        const numericRegex = /^[0-9]+$/;
        if (!numericRegex.test(inputValue)) {
            // If the input is not numeric, prevent it from being entered
            inputElement.value = inputValue.replace(/[^0-9]/g, '');
        }
        if (inputValue === inputElement.value) {
            this.handleDataChange(key, event);
        }
    }
    async handleEmailInput(key, event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        if (this.isValidEmail(inputValue)) {
            this.handleDataChange(key, event);
        }
    }
    async checkUser() {
        try {
            const email = this.bookedByData.email;
            if (this.isValidEmail(email)) {
                const res = await this.bookingService.getUserInfo(email);
                if (res !== null) {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: res.id, firstName: res.first_name, lastName: res.last_name, contactNumber: res.mobile, countryId: res.country_id, isdCode: res.country_id.toString() });
                }
                else {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: undefined, firstName: '', lastName: '', contactNumber: '', countryId: '', isdCode: '' });
                }
                this.dataUpdateEvent.emit({
                    key: 'bookedByInfoUpdated',
                    data: Object.assign({}, this.bookedByData),
                });
            }
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    isValidEmail(emailId) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(emailId);
    }
    handleComboboxChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        switch (key) {
            case 'blur':
                if (data !== '') {
                    this.bookedByData.email = data;
                    this.checkUser();
                }
                break;
            case 'select':
                this.bookedByData.email = data.email;
                this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: data.id, firstName: data.first_name, lastName: data.last_name, contactNumber: data.mobile, countryId: data.country_id, isdCode: data.country_id.toString() });
                this.dataUpdateEvent.emit({
                    key: 'bookedByInfoUpdated',
                    data: this.bookedByData,
                });
                break;
        }
    }
    clearEvent() {
        this.bookedByData.email = '';
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: '', firstName: '', lastName: '', contactNumber: '', isdCode: this.country.toString(), countryId: this.country });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    render() {
        return (h(Host, { key: 'c6fe8d8ee3483e34b19f226d8d6bef2210c178d5' }, h("div", { key: 'd314fb1d87d9c01ea11a7f370e321633cd060f43', class: "text-left mt-3" }, h("div", { key: '4c0b26638992181276865a0f28894e1eaaf18e28', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'ae1e09dd3ecf3b7e5596e5bd5df1b9cbaa9b8f41', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '6bd219809bfb316ba74acb2b2c2c714553593d74', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'aca6096b8fb5175eb3199ff40510f98ddd055574', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent() }), h("ir-tooltip", { key: 'e2a5f161c122fb7a407c24a06f7fc6584040881e', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '2b83fdfe3b273b99bc2d0428893f1d23d3a8d0d3', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'b2f84a1c7522575a33a6892ed2291dc71a509958', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '7816391c85bda17b80aa3e00852b39fff958ff70', class: "p-0 flex-fill " }, h("div", { key: '32168d85fcb430226e1160b087b6fb4654079669', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '51f35c554e470e54b6f8a7a68dbad1aba7097340', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '442fa42beb54464c474ebea8ea4cbf394b890c39', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'b7435b224582c419263f6219f2ddaa070e1ee18a', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: 'c819367bd08452615f72750a7e4392d0186fb01d', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '22ded57ea17b54cea77cf1bca77a9fdd1ce60d36', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '0cf5b8dbbb27af47442a9221bdb3c7e980c32444', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '3c021d3316c74249b4f2370c442dbf450a77095d', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '0c02d2e51cbed6d105ae7afbf3786d5bdd74a7a9', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5cbdf2ea859a0ac237a6bd5bea0cb4fde761c5ae', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: 'acd0d054cd2db0872036f11f22a90f35d46e5159', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'da803cba43e9c4062ec55cbd6c3696519e3a43a6', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: 'b508d52f67c4262cf3c4e9ccd9a9bf52afe42d99', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: '0a26974c2e01afbd3a9afe3e40f83e1cb6176f6a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'fe9871a9e20393c1646e74f24e2f57241ec133fa', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '4dd12c61763e75eb1f3116ac30332f8e5b585743', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: 'e53c7873755226c67fc160152cc8b7d12b02b151', class: " p-0 m-0" }, h("select", { key: 'ec832d8a0b5321c70f9adc1114b0905a734def20', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: 'f35d76efbc7fbe8b51b32085a0285bd70c60c0ce', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: 'cdd9126a95d74868e6a5f41c74dcadee57b17bcb', class: "flex-fill p-0 m-0" }, h("input", { key: '5a8cc3e3624f724e9c529b45872e2993d47ba30c', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: 'fea32615cb634a0ed2168653ad47f369fff90d86', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c46e046bb02d52938defe38151f8a906b0b18023', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'd8dc9a890400268154abd03ddc9684439910e777', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'c3bb9a0e6403b94735ac4d798cd62ad11990778a', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'e127518843ee87df2e2adb9376fa229e58983cef', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'ab6a0c2d7baad70350974e761a9b71a2c8a5f79b', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '08be648d1e43d3a35df8e54fef710d07d62cd777', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'f018a9c14e7508dfd0f1cfeff76a43f06aa8390e', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '0866b1096201c01cdec6ef92b3f90db3a4d09c6d', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '0488b9b1cfcda466770b5b60f30638f7449510de' }, h("div", { key: 'cc898ea7cb03c890ef8c90af3b741dc04526354a', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '4db78ff0085ad59be662a3b7c017bc853dd2b45c', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'e02483f8e5dd3b81297b669ad6b2e9f2ebe068ff', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'cfa71772b8e67a3fd0f2530fc695ef116100c532', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '8469963e3907b1f64b83fc273bd7288731692e7b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '9ecef93da9c66d747918b3825416e3beb055594b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'ad48211c7b59c3afc9f7f655eab51ede3af5bd7d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '981ce8d16831e4c5432e54247c4c64b829be8785', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '7cf1cecbc796b54cfa5dd323933b911a7776fc6f', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd4d317f476ba01c7b048f40302b55f9e3f26d59a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'd74523ab77e748f65bdd655f2ee809ac44d17bea', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'bb4782ca5a4cdd957d40739c2c74a1e8c1ffc0a2', class: "p-0 m-0" }, h("select", { key: '013929df8862fe4aaf9e262632bcad5b45b05bde', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '1d90aa867b442395db20e6ed62df3f1664d1bc45', class: "p-0 m-0 ml-1" }, h("select", { key: '7360165fc1b231ab1907f0074e39d24702e33ec1', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '765954485b755437d4876da874867f499f94e647', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '750ebfe0f0294687f763fc7d1526b3df64ac61e3', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '5fde2849b195bcacd285acc8b21af3cd1934799a', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'af4856366408c083696d43b845303e25f4bbcd52', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

const irAutocompleteCss = ".sc-ir-autocomplete-h{display:block;position:relative}.selected.sc-ir-autocomplete{color:#fff;text-decoration:none;background-color:#666ee8}input.sc-ir-autocomplete{width:100%;position:relative;border-top-left-radius:0px !important;border-left:0 !important;border-bottom-left-radius:0px !important}label.sc-ir-autocomplete{margin:0;border-top-right-radius:0px !important;border-right:0 !important;border-bottom-right-radius:0px !important;width:fit-content;display:flex;align-items:center;padding-right:3px !important;justify-content:center;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}label[data-state='focused'].sc-ir-autocomplete{border-color:var(--blue)}.combobox.sc-ir-autocomplete{margin:0;top:30px;min-width:100%;width:max-content;display:block;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto}.dropdown-item.sc-ir-autocomplete{cursor:pointer}button.sc-ir-autocomplete{all:unset;right:4px}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete,span.sc-ir-autocomplete,loader-container.sc-ir-autocomplete{padding:5px 16px;margin:0px;margin-top:2px;width:100%}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete{cursor:pointer}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete:hover{background:#f4f5fa}.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete,.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete:hover{color:#fff;text-decoration:none;background-color:#666ee8}.loader.sc-ir-autocomplete{width:14px;height:14px;border:2px solid #0f0f0f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrAutocompleteStyle0 = irAutocompleteCss;

const IrAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxValue = createEvent(this, "comboboxValue", 7);
        this.inputCleared = createEvent(this, "inputCleared", 7);
        this.toast = createEvent(this, "toast", 7);
        this.bookingService = new BookingService();
        this.no_result_found = '';
        this.duration = 300;
        this.placeholder = '';
        this.propertyId = undefined;
        this.isSplitBooking = false;
        this.type = 'text';
        this.name = '';
        this.inputId = v4();
        this.required = false;
        this.disabled = false;
        this.value = undefined;
        this.from_date = '';
        this.to_date = '';
        this.danger_border = undefined;
        this.inputValue = '';
        this.data = [];
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
        this.isLoading = true;
        this.isItemSelected = undefined;
        this.inputFocused = false;
    }
    componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
        this.no_result_found = locales.entries.Lcz_NoResultsFound;
    }
    handleKeyDown(event) {
        var _a;
        const dataSize = this.data.length;
        const itemHeight = this.getHeightOfPElement();
        if (dataSize > 0) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex - 1 + dataSize) % dataSize;
                    this.adjustScrollPosition(itemHeight);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex + 1) % dataSize;
                    this.adjustScrollPosition(itemHeight);
                    break;
                case 'Enter':
                case ' ':
                case 'ArrowRight':
                    event.preventDefault();
                    this.selectItem(this.selectedIndex);
                    break;
                case 'Escape':
                    (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
                    this.isComboBoxVisible = false;
                    break;
            }
        }
    }
    getHeightOfPElement() {
        const combobox = this.el.querySelector('.combobox');
        if (combobox) {
            const pItem = combobox.querySelector('p');
            return pItem ? pItem.offsetHeight : 0;
        }
        return 0;
    }
    adjustScrollPosition(itemHeight, visibleHeight = 250) {
        const combobox = this.el.querySelector('.combobox');
        if (combobox) {
            const margin = 2;
            const itemTotalHeight = itemHeight + margin;
            const selectedPosition = itemTotalHeight * this.selectedIndex;
            let newScrollTop = selectedPosition - visibleHeight / 2 + itemHeight / 2;
            newScrollTop = Math.max(0, Math.min(newScrollTop, combobox.scrollHeight - visibleHeight));
            combobox.scrollTo({
                top: newScrollTop,
                behavior: 'auto',
            });
        }
    }
    selectItem(index) {
        if (this.data[index]) {
            this.isItemSelected = true;
            this.comboboxValue.emit({ key: 'select', data: this.data[index] });
            this.inputValue = '';
            this.resetCombobox();
        }
    }
    debounceFetchData() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchData();
        }, this.duration);
    }
    async fetchData() {
        try {
            this.isLoading = true;
            let data = [];
            if (!this.isSplitBooking) {
                data = await this.bookingService.fetchExposedGuest(this.inputValue, this.propertyId);
            }
            else {
                if (this.inputValue.split(' ').length === 1) {
                    data = await this.bookingService.fetchExposedBookings(this.inputValue, this.propertyId, this.from_date, this.to_date);
                }
            }
            this.data = data;
            if (!this.isComboBoxVisible) {
                this.isComboBoxVisible = true;
            }
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
        if (this.inputValue) {
            this.debounceFetchData();
        }
        else {
            clearTimeout(this.debounceTimer);
            this.resetCombobox(false);
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isComboBoxVisible = false;
        }
    }
    handleBlur() {
        this.inputFocused = false;
        setTimeout(() => {
            if (this.isDropdownItem(document.activeElement)) {
                return;
            }
            if (this.isSplitBooking) {
                if (!this.isItemSelected) {
                    if (this.data.length > 0) {
                        this.comboboxValue.emit({ key: 'blur', data: this.inputValue });
                    }
                    else {
                        if (this.inputValue !== '') {
                            this.toast.emit({
                                type: 'error',
                                description: '',
                                title: `The Booking #${this.inputValue} is not Available`,
                                position: 'top-right',
                            });
                            this.inputCleared.emit();
                        }
                    }
                    this.inputValue = '';
                    this.resetCombobox();
                }
                else {
                    this.isItemSelected = false;
                }
            }
            else {
                if (!this.isItemSelected) {
                    this.comboboxValue.emit({ key: 'blur', data: this.inputValue });
                    this.inputValue = '';
                    this.resetCombobox();
                }
                else {
                    this.isItemSelected = false;
                }
            }
        }, 200);
    }
    isDropdownItem(element) {
        return element && element.closest('.combobox');
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        clearTimeout(this.debounceTimer);
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.handleBlur);
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.selectItem);
        (_c = this.inputRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', this.handleKeyDown);
        (_d = this.inputRef) === null || _d === void 0 ? void 0 : _d.removeEventListener('focus', this.handleFocus);
    }
    handleItemKeyDown(event, index) {
        var _a;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
            event.preventDefault();
        }
        else {
            return;
        }
    }
    renderDropdown() {
        var _a;
        if (this.inputValue !== '') {
            return (h("div", { class: `position-absolute border rounded combobox` }, (_a = this.data) === null || _a === void 0 ? void 0 :
                _a.map((d, index) => (h("p", { role: "button", onKeyDown: e => this.handleItemKeyDown(e, index), "data-selected": this.selectedIndex === index, tabIndex: 0, onClick: () => this.selectItem(index) }, this.isSplitBooking ? (h(Fragment, null, `${d.booking_nbr} ${d.guest.first_name} ${d.guest.last_name}`)) : (h("div", { class: 'd-flex align-items-center flex-fill' }, h("p", { class: 'p-0 m-0' }, `${d.email}`, " ", h("span", { class: 'p-0 m-0' }, ` - ${d.first_name} ${d.last_name}`))))))), this.isLoading && (h("div", { class: "loader-container d-flex align-items-center justify-content-center" }, h("div", { class: "loader" }))), this.data.length === 0 && !this.isLoading && h("span", { class: 'text-center' }, this.no_result_found)));
        }
    }
    handleFocus() {
        this.isComboBoxVisible = true;
        this.inputFocused = true;
    }
    clearInput() {
        this.inputValue = '';
        this.resetCombobox();
        this.inputCleared.emit(null);
    }
    resetCombobox(withblur = true) {
        var _a;
        if (withblur) {
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
        }
        this.data = [];
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
    }
    render() {
        return (h(Host, { key: 'b084901b89a526cac132d217a31799224cdc1157' }, h("div", { key: '90c66c8e4401297bcd81fc109bcba98174d73313', class: 'd-flex align-items-center ' }, h("label", { key: '14fd2c75fdb57109d253f5ce20409c4b04400e99', "data-state": this.inputFocused ? 'focused' : 'blured', htmlFor: this.inputId, class: `form-control input-sm ${this.danger_border && 'border-danger'}` }, h("svg", { key: '67ed21e9cebeafbe55417882cc7270d3a92050c7', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 512 512" }, h("path", { key: 'e92f04c0e502377c9edd56bf368af47779b9524e', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("input", { key: '6447aede09043b8d50f925b24f0984538201b5a3', required: this.required, disabled: this.disabled, id: this.inputId, onKeyDown: this.handleKeyDown.bind(this), class: `form-control input-sm flex-full ${this.danger_border && 'border-danger'}`, type: this.type, name: this.name, value: this.value || this.inputValue, placeholder: this.placeholder, onBlur: this.handleBlur.bind(this), onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), ref: el => (this.inputRef = el) }), this.inputValue && (h("button", { key: 'a3d642c7c72297042f2fb368c13cca91ad9b32ca', type: "button", class: 'position-absolute d-flex align-items-center justify-content-center ', onClick: this.clearInput.bind(this) }, h("p", { key: 'd607ec727393af020fbe57e73a6cfbe7554c0a49', class: 'sr-only' }, "clear input"), h("svg", { key: '339fb89f01319fbc74e65a548cbbd27dff189edc', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '6366fa3d50f282807854f2c65d0389b66e293fab', d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), this.isComboBoxVisible && this.renderDropdown()));
    }
    get el() { return getElement(this); }
};
IrAutocomplete.style = IrAutocompleteStyle0;

const irBookingCss = ".sc-ir-booking-h{display:block}";
const IrBookingStyle0 = irBookingCss;

const IrBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.baseurl = '';
        this.propertyid = undefined;
        this.bookingNumber = undefined;
        this.token = undefined;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
        }
    }
    handleAuthFinish(e) {
        this.token = e.detail.token;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token: this.token } });
    }
    render() {
        if (!this.token)
            return (h(Host, null, h("ir-login", { baseurl: this.baseurl, onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("ir-booking-details", { hasPrint: true, hasReceipt: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, language: "en", bookingNumber: this.bookingNumber, baseurl: this.baseurl, ticket: this.token })));
    }
};
IrBooking.style = IrBookingStyle0;

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem}.confirmed.sc-ir-booking-details{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-details{background:#629a4c;padding:0.2rem 0.3rem}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.bg-ir-red.sc-ir-booking-details{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-details{background:#ff9149;padding:0.2rem 0.3rem}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.btn-outline.sc-ir-booking-details{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-booking-details:hover,.btn-outline.sc-ir-booking-details:active{background:#104064;color:white}.dialog-title.sc-ir-booking-details{width:fit-content}.list-title.sc-ir-booking-details{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-booking-details{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-booking-details{color:#629a4c;font-weight:600}.list-item.red.sc-ir-booking-details{color:#ff4961;font-weight:600}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.bookingChanged = createEvent(this, "bookingChanged", 7);
        this.closeSidebar = createEvent(this, "closeSidebar", 7);
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.language = '';
        this.ticket = '';
        this.bookingNumber = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.is_from_front_desk = false;
        this.hasPrint = false;
        this.hasReceipt = false;
        this.hasDelete = false;
        this.hasMenu = false;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.hasCloseButton = false;
        this.bookingItem = null;
        this.statusData = [];
        this.tempStatus = null;
        this.showPaymentDetails = undefined;
        this.bookingData = undefined;
        this.countryNodeList = undefined;
        this.calendarData = {};
        this.guestData = null;
        this.defaultTexts = undefined;
        this.rerenderFlag = false;
        this.sidebarState = null;
        this.isUpdateClicked = false;
        this.pms_status = undefined;
        this.isPMSLogLoading = false;
        this.userCountry = null;
    }
    componentDidLoad() {
        if (this.baseurl) {
            axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            calendar_data.token = this.ticket;
            this.bookingService.setToken(this.ticket);
            this.roomService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async ticketChanged() {
        calendar_data.token = this.ticket;
        this.bookingService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
        this.initializeApp();
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        this.calendarData.roomsInfo = roomsData;
    }
    async initializeApp() {
        var _a;
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails] = await Promise.all([
                this.roomService.fetchData(this.propertyid, this.language),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
            ]);
            this.property = roomResponse.My_Result;
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.defaultTexts = languageTexts;
            this.countryNodeList = countriesList;
            if ((_a = bookingDetails.guest) === null || _a === void 0 ? void 0 : _a.country_id) {
                this.userCountry = this.countryNodeList.find(country => country.id === bookingDetails.guest.country_id) || null;
            }
            const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends } = roomResponse['My_Result'];
            this.calendarData = { currency, allowed_booking_sources, adult_child_constraints, legendData: calendar_legends };
            this.setRoomsData(roomResponse);
            const paymentCodesToShow = ['001', '004'];
            this.showPaymentDetails = paymentMethods.some(method => paymentCodesToShow.includes(method.code));
            this.guestData = bookingDetails.guest;
            this.bookingData = bookingDetails;
            this.rerenderFlag = !this.rerenderFlag;
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    handleIconClick(e) {
        const target = e.target;
        switch (target.id) {
            case 'pickup':
                this.sidebarState = 'pickup';
                return;
            case 'close':
                this.closeSidebar.emit(null);
                return;
            case 'print':
                // this.printBooking();
                window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=B&TK=${this.ticket}`);
                return;
            case 'receipt':
                // this.printBooking('invoice');
                window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=I&TK=${this.ticket}`);
                return;
            case 'book-delete':
                return;
            case 'menu':
                window.location.href = 'https://x.igloorooms.com/manage/acbookinglist.aspx';
                return;
            case 'room-add':
                this.bookingItem = {
                    ID: '',
                    NAME: this.bookingData.guest.last_name,
                    EMAIL: this.bookingData.guest.email,
                    PHONE: this.bookingData.guest.mobile,
                    REFERENCE_TYPE: '',
                    FROM_DATE: this.bookingData.from_date,
                    ARRIVAL: this.bookingData.arrival,
                    TO_DATE: this.bookingData.to_date,
                    TITLE: `${locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingData.booking_nbr}`,
                    defaultDateRange: {
                        fromDate: new Date(this.bookingData.from_date),
                        fromDateStr: '',
                        toDate: new Date(this.bookingData.to_date),
                        toDateStr: '',
                        dateDifference: 0,
                        message: '',
                    },
                    event_type: 'ADD_ROOM',
                    BOOKING_NUMBER: this.bookingData.booking_nbr,
                    ADD_ROOM_TO_BOOKING: this.bookingData.booking_nbr,
                    GUEST: this.bookingData.guest,
                    message: this.bookingData.remark,
                    SOURCE: this.bookingData.source,
                    ROOMS: this.bookingData.rooms,
                };
                return;
            case 'add-payment':
                return;
        }
    }
    handleEditSidebar() {
        this.sidebarState = 'guest';
    }
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.tempStatus = target.selectedValue;
    }
    openEditSidebar() {
        const sidebar = document.querySelector('ir-sidebar#editGuestInfo');
        sidebar.open = true;
    }
    printBooking(mode = 'default') {
        const bookingJson = JSON.stringify(this.bookingData);
        const propertyJson = JSON.stringify(this.property);
        const countriesJson = JSON.stringify(this.countryNodeList);
        const pageTitle = `Booking#${this.bookingNumber} | igloorooms`;
        const src = 'https://david1chowaifaty.github.io/igloo-calendar-main-web/dist/ir-webcmp/ir-webcmp.esm.js';
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${pageTitle}</title>
                <link rel="shortcut icon" type="image/x-icon" href="https://x.igloorooms.com/app-assets/images/ico/favicon.ico">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                <script type="module" src='${src}'></script>
                <style>
                   body{
                      font-family: "Roboto", sans-serif;
                      }
                </style>
            </head>
            <body>
                <ir-booking-printing></ir-booking-printing>
                <script>
                   const bookingDetail = document.querySelector("ir-booking-printing");
                   bookingDetail.booking=${bookingJson};
                   bookingDetail.property=${propertyJson};
                   bookingDetail.countries=${countriesJson};
                   bookingDetail.mode='${mode}'
                </script>
            </body>
            </html>
            `;
        try {
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url);
        }
        catch (error) {
            console.error('Error creating or opening the generated HTML page:', error);
            alert('Failed to generate and open the HTML page. Check the console for details.');
        }
    }
    async updateStatus() {
        if (this.tempStatus !== '' && this.tempStatus !== null) {
            try {
                this.isUpdateClicked = true;
                await axios.post(`/Change_Exposed_Booking_Status?Ticket=${this.ticket}`, {
                    book_nbr: this.bookingNumber,
                    status: this.tempStatus,
                });
                this.toast.emit({
                    type: 'success',
                    description: '',
                    title: locales.entries.Lcz_StatusUpdatedSuccessfully,
                    position: 'top-right',
                });
                await this.resetBookingData();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.isUpdateClicked = false;
            }
        }
        else {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
        }
    }
    async openPMSLogsDialog() {
        var _a;
        try {
            (_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.openModal();
            if (!this.pms_status) {
                this.isPMSLogLoading = true;
                this.pms_status = await this.bookingService.fetchPMSLogs(this.bookingData.booking_nbr);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            if (this.isPMSLogLoading) {
                this.isPMSLogLoading = false;
            }
        }
    }
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish(e) {
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), { rooms: this.bookingData.rooms.filter(room => room.identifier !== e.detail) });
    }
    async resetBookingData() {
        try {
            const booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.bookingData = Object.assign({}, booking);
            this.bookingChanged.emit(this.bookingData);
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleResetBookingData(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.detail) {
            return (this.bookingData = e.detail);
        }
        await this.resetBookingData();
    }
    renderPhoneNumber() {
        const { mobile, country_phone_prefix, country_id } = this.bookingData.guest;
        if (!mobile) {
            return null;
        }
        if (this.bookingData.is_direct) {
            if (country_phone_prefix) {
                return country_phone_prefix + ' ' + mobile;
            }
            if (country_id) {
                const selectedCountry = this.countryNodeList.find(c => c.id === country_id);
                if (!selectedCountry) {
                    throw new Error('Invalid country id');
                }
                return selectedCountry.phone_prefix + ' ' + mobile;
            }
        }
        return mobile;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.bookingData) {
            return null;
        }
        let confirmationBG = '';
        switch (this.bookingData.status.code) {
            case '001':
                confirmationBG = 'bg-ir-orange';
                break;
            case '002':
                confirmationBG = 'bg-ir-green';
                break;
            case '003':
                confirmationBG = 'bg-ir-red';
                break;
            case '004':
                confirmationBG = 'bg-ir-red';
                break;
        }
        return [
            h(Fragment, null, !this.is_from_front_desk && (h(Fragment, null, h("ir-toast", null), h("ir-interceptor", null)))),
            h("div", { class: "fluid-container p-1" }, h("div", { class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, h("div", { class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0  d-flex justify-content-start align-items-center" }, h("p", { class: "font-size-large m-0 p-0" }, `${this.defaultTexts.entries.Lcz_Booking}#${this.bookingNumber}`), h("p", { class: "m-0 p-0 ml-1" }, !this.bookingData.is_direct && (h("span", { class: "mr-1 m-0" }, this.bookingData.channel_booking_nbr, " ")), h("span", { class: "date-margin" }, _formatDate(this.bookingData.booked_on.date)), _formatTime(this.bookingData.booked_on.hour.toString(), this.bookingData.booked_on.minute.toString()))), h("div", { class: "d-flex justify-content-end align-items-center" }, h("span", { class: `confirmed btn-sm m-0 mr-2 ${confirmationBG}` }, this.bookingData.status.description), this.bookingData.allowed_actions.length > 0 && this.bookingData.is_editable && (h(Fragment, null, h("ir-select", { selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.bookingData.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 " }), h("ir-button", { onClickHanlder: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: this.isUpdateClicked, btn_disabled: this.isUpdateClicked, id: "update-status-btn", size: "sm", text: "Update" }))), calendar_data.is_pms_enabled && (h("button", { type: "button", class: "btn btn-outline btn-sm ml-1", onClick: this.openPMSLogsDialog.bind(this) }, locales.entries.Lcz_pms)), this.hasReceipt && h("ir-button", { variant: "icon", id: "receipt", icon_name: "reciept", class: "mx-1", style: { '--icon-size': '1.65rem' } }), this.hasPrint && h("ir-button", { variant: "icon", id: "print", icon_name: "print", class: "mr-1", style: { '--icon-size': '1.65rem' } }), this.hasDelete && h("ir-button", { variant: "icon", id: "book-delete", icon_name: "trash", class: "mr-1", style: Object.assign(Object.assign({}, colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && h("ir-button", { variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (h("ir-button", { id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHanlder: e => {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    this.closeSidebar.emit(null);
                } }))))),
            h("div", { class: "fluid-container p-1 text-left mx-0" }, h("div", { class: "row m-0" }, h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, h("div", { class: "card" }, h("div", { class: "p-1" }, h("p", null, this.bookingData.property.name || ''), h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Source}:`, value: this.bookingData.origin.Label, image: { src: this.bookingData.origin.Icon, alt: this.bookingData.origin.Label } }), h("ir-label", { label: `${this.defaultTexts.entries.Lcz_BookedBy}:`, value: `${this.bookingData.guest.first_name} ${this.bookingData.guest.last_name}`, iconShown: true }), this.bookingData.guest.mobile && h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Phone}:`, value: this.renderPhoneNumber() }), h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Email}:`, value: this.bookingData.guest.email }), this.bookingData.guest.alternative_email && (h("ir-label", { label: `${this.defaultTexts.entries.Lcz_AlternativeEmail}:`, value: this.bookingData.guest.alternative_email })), ((_b = (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.address) && h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Address}:`, value: this.bookingData.guest.address }), this.userCountry && (h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Country}:`, value: this.userCountry.name, country: true, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.bookingData.is_direct && h("ir-label", { label: `${this.defaultTexts.entries.Lcz_ArrivalTime}:`, value: this.bookingData.arrival.description }), this.bookingData.promo_key && h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Coupon}:`, value: this.bookingData.promo_key }), this.bookingData.agent && h("ir-label", { label: `${(_c = this.defaultTexts.entries.Lcz_AgentCode) === null || _c === void 0 ? void 0 : _c.split(':')[0]}:`, value: this.bookingData.agent.name }), this.bookingData.is_in_loyalty_mode && !this.bookingData.promo_key && (h("div", { class: "d-flex align-items-center" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { class: "m-0 p-0 ml-1" }, this.defaultTexts.entries.Lcz_LoyaltyDiscountApplied))), this.bookingData.is_direct ? (h("ir-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, value: this.bookingData.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, remarks: this.bookingData.ota_notes, maxVisibleItems: (_d = this.bookingData.ota_notes) === null || _d === void 0 ? void 0 : _d.length })), h("div", { class: "d-flex align-items-center justify-content-between" }, h("ir-label", { label: `${locales.entries.Lcz_PrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, value: getPrivateNote(this.bookingData.extras), ignore_value: true }), h("ir-button", { variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHanlder: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = 'extra_note';
                } })))), h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("ir-date-view", { from_date: this.bookingData.from_date, to_date: this.bookingData.to_date }), this.hasRoomAdd && this.bookingData.is_direct && this.bookingData.is_editable && (h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })
            // <ir-icon id="room-add">
            //   <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512" slot="icon">
            //     <path
            //       fill="#6b6f82"
            //       d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            //     />
            //   </svg>
            // </ir-icon>
            )), h("div", { class: "card p-0 mx-0" }, this.bookingData.rooms.map((room, index) => {
                const mealCodeName = room.rateplan.name;
                const myRoomTypeFoodCat = room.roomtype.name;
                return [
                    h("ir-room", { isEditable: this.bookingData.is_editable, defaultTexts: this.defaultTexts, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: myRoomTypeFoodCat, mealCodeName: mealCodeName, currency: this.bookingData.currency.code, hasRoomEdit: this.hasRoomEdit && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasRoomDelete: this.hasRoomDelete && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, bookingEvent: this.bookingData, bookingIndex: index, ticket: this.ticket, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    // add separator if not last item with marginHorizontal and alignCenter
                    index !== this.bookingData.rooms.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), calendar_data.pickup_service.is_enabled && this.bookingData.is_direct && this.bookingData.is_editable && (h("div", { class: "mb-1" }, h("div", { class: 'd-flex w-100 mb-1 align-items-center justify-content-between' }, h("p", { class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_Pickup), h("ir-button", { id: "pickup", variant: "icon", icon_name: "edit", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }) })), this.bookingData.pickup_info && (h("div", { class: 'card' }, h("div", { class: 'p-1' }, h("div", { class: 'd-flex align-items-center py-0 my-0 pickup-margin' }, h("p", { class: 'font-weight-bold mr-1 py-0 my-0' }, locales.entries.Lcz_Date, ": ", h("span", { class: 'font-weight-normal' }, hooks(this.bookingData.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), this.bookingData.pickup_info.hour && this.bookingData.pickup_info.minute && (h("p", { class: 'font-weight-bold flex-fill py-0 my-0' }, locales.entries.Lcz_Time, ":", h("span", { class: 'font-weight-normal' }, " ", _formatTime(this.bookingData.pickup_info.hour.toString(), this.bookingData.pickup_info.minute.toString())))), h("p", { class: 'font-weight-bold py-0 my-0' }, locales.entries.Lcz_DueUponBooking, ":", ' ', h("span", { class: 'font-weight-normal' }, this.bookingData.pickup_info.currency.symbol, this.bookingData.pickup_info.total))), h("p", { class: 'font-weight-bold py-0 my-0' }, locales.entries.Lcz_FlightDetails, ":", h("span", { class: 'font-weight-normal' }, " ", `${this.bookingData.pickup_info.details}`)), h("p", { class: 'py-0 my-0 pickup-margin' }, `${this.bookingData.pickup_info.selected_option.vehicle.description}`), h("p", { class: 'font-weight-bold py-0 my-0 pickup-margin' }, locales.entries.Lcz_NbrOfVehicles, ":", h("span", { class: 'font-weight-normal' }, " ", `${this.bookingData.pickup_info.nbr_of_units}`)), h("p", { class: 'small py-0 my-0 pickup-margin' }, calendar_data.pickup_service.pickup_instruction.description, calendar_data.pickup_service.pickup_cancelation_prepayment.description))))))), h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, h("ir-payment-details", { defaultTexts: this.defaultTexts, bookingDetails: this.bookingData })))),
            h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidbarContent()),
            h(Fragment, null, this.bookingItem && (h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
            h(Fragment, null, h("ir-dialog", { ref: el => (this.dialogRef = el) }, h("div", { slot: "modal-body", class: "p-1" }, h("h3", { class: " text-left mb-1 dialog-title " }, locales.entries.Lcz_PMS_Logs), !this.isPMSLogLoading && (h(Fragment, null, h("div", { class: "d-flex align-items-center" }, h("p", { class: "list-title" }, locales.entries.Lcz_SentAt), ((_e = this.pms_status) === null || _e === void 0 ? void 0 : _e.sent_date) ? (h("p", { class: "list-item" }, (_f = this.pms_status) === null || _f === void 0 ? void 0 :
                _f.sent_date, " ", _formatTime((_g = this.pms_status) === null || _g === void 0 ? void 0 : _g.sent_hour.toString(), (_h = this.pms_status) === null || _h === void 0 ? void 0 : _h.sent_minute.toString()))) : (h("p", { class: `list-item ${((_j = this.pms_status) === null || _j === void 0 ? void 0 : _j.sent_date) ? 'green' : 'red'}` }, ((_k = this.pms_status) === null || _k === void 0 ? void 0 : _k.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center" }, h("h4", { class: "list-title" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item ${((_l = this.pms_status) === null || _l === void 0 ? void 0 : _l.is_acknowledged) ? 'green' : 'red'}` }, ((_m = this.pms_status) === null || _m === void 0 ? void 0 : _m.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))))),
        ];
    }
    renderSidbarContent() {
        var _a;
        switch (this.sidebarState) {
            case 'guest':
                return (h("ir-guest-info", { slot: "sidebar-body", booking_nbr: this.bookingNumber, defaultTexts: this.defaultTexts, email: (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.guest.email, language: this.language, onCloseSideBar: () => (this.sidebarState = null) }));
            case 'pickup':
                return (h("ir-pickup", { slot: "sidebar-body", defaultPickupData: this.bookingData.pickup_info, bookingNumber: this.bookingData.booking_nbr, numberOfPersons: this.bookingData.occupancy.adult_nbr + this.bookingData.occupancy.children_nbr, onCloseModal: () => (this.sidebarState = null) }));
            case 'extra_note':
                return h("ir-booking-extra-note", { slot: "sidebar-body", booking: this.bookingData, onCloseModal: () => (this.sidebarState = null) });
            default:
                return null;
        }
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.bookingService = new BookingService();
        this.booking = undefined;
        this.isLoading = false;
        this.note = '';
    }
    componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
        if (this.booking.extras) {
            this.setNote(getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingData.emit(res);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '8a99f30caa83cc305f12313414525a79ce00a9a9', class: 'px-0' }, h("ir-title", { key: '8610153955b8b6c028d3ea1e356c9b4759722404', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), h("form", { key: 'cc38235b6551d47ac46f1d0a6c557e56b099116d', class: 'px-1', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, h("ir-textarea", { key: 'e11897b1b0e74b1942b6774c7d2f351f0a130707', placeholder: locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) }), h("div", { key: '608827c29b8c89bb71877bf6a57c95c1dc959ed7', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '7a1fd52b3d09de83e94c816310f76f82c59922b3', onClickHanlder: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '84c8e36f5e3dd035dfff316e5a64564a18e12a45', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', icon: "", isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0;

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickHanlder = createEvent(this, "clickHanlder", 7);
        this.name = undefined;
        this.text = undefined;
        this.icon = 'ft-save';
        this.btn_color = 'primary';
        this.size = 'md';
        this.textSize = 'md';
        this.btn_block = true;
        this.btn_disabled = false;
        this.btn_type = 'button';
        this.isLoading = false;
        this.btn_styles = undefined;
        this.btn_id = v4();
        this.variant = 'default';
        this.icon_name = undefined;
        this.visibleBackgroundOnHover = false;
        this.iconPostion = 'left';
        this.icon_style = undefined;
    }
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        if (this.variant === 'icon') {
            return (h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHanlder.emit(), type: this.btn_type, disabled: this.btn_disabled }, this.isLoading ? h("span", { class: "icon-loader" }) : h("ir-icons", { name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHanlder.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, disabled: this.btn_disabled || this.isLoading }, this.icon_name && this.iconPostion === 'left' && h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text && h("span", { class: "button-text m-0" }, this.text), this.isLoading ? h("div", { class: "btn_loader m-0 p-0" }) : this.iconPostion === 'right' && h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (h(Host, { key: '4b05bf8442c9ef64e03cbac43233d7a1c56bd21d' }, h("slot", { key: 'b10cbefb529076f1e5187618f77d41cd88780ad2' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irDatePickerCss = "input.sc-ir-date-picker{all:unset;box-sizing:border-box !important;padding:0;margin:0;width:100%;text-align:center}input.sc-ir-date-picker:disabled{text-align:start;font-size:14px;width:100%}.sc-ir-date-picker-h{position:relative;box-sizing:border-box}.icon.sc-ir-date-picker{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}";
const IrDatePickerStyle0 = irDatePickerCss;

const IrDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
        this.fromDate = undefined;
        this.toDate = undefined;
        this.opens = undefined;
        this.autoApply = undefined;
        this.firstDay = 1;
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.format = 'MMM DD, YYYY';
        this.separator = ' - ';
        this.applyLabel = 'Apply';
        this.cancelLabel = 'Cancel';
        this.fromLabel = 'Form';
        this.toLabel = 'To';
        this.customRangeLabel = 'Custom';
        this.weekLabel = 'W';
        this.disabled = false;
        this.singleDatePicker = false;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.maxSpan = {
            days: 240,
        };
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
        $(this.dateRangeInput).daterangepicker({
            singleDatePicker: this.singleDatePicker,
            opens: this.opens,
            startDate: hooks(this.fromDate),
            endDate: hooks(this.toDate),
            minDate: hooks(this.minDate || hooks(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? hooks(this.maxDate) : undefined,
            maxSpan: this.maxSpan,
            autoApply: this.autoApply,
            locale: {
                format: this.format,
                separator: this.separator,
                applyLabel: this.applyLabel,
                cancelLabel: this.cancelLabel,
                fromLabel: this.fromLabel,
                toLabel: this.toLabel,
                customRangeLabel: this.customRangeLabel,
                weekLabel: this.weekLabel,
                daysOfWeek: this.daysOfWeek,
                monthNames: this.monthNames,
                firstDay: this.firstDay,
            },
        }, (start, end) => {
            this.dateChanged.emit({ start, end });
        });
    }
    render() {
        return (h(Host, { key: '9e69f2a8d60bbf3142c67e5b19bb4c9a0139b6a4' }, h("input", { key: 'b3771235eebfb9f491fa2a1f85ba4b0041a68f91', class: "date-range-input", type: "text", disabled: this.disabled })));
    }
    get element() { return getElement(this); }
};
IrDatePicker.style = IrDatePickerStyle0;

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrDateViewStyle0 = irDateViewCss;

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.from_date = undefined;
        this.to_date = undefined;
        this.showDateDifference = true;
        this.dateOption = 'YYYY-MM-DD';
        this.dates = undefined;
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleFromDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    handleToDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    initializeDates() {
        this.convertDate('from_date', this.from_date);
        this.convertDate('to_date', this.to_date);
        const fromDate = hooks(this.dates.from_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        const toDate = hooks(this.dates.to_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        this.dates.date_diffrence = calculateDaysBetweenDates(fromDate, toDate);
    }
    convertDate(key, date) {
        this.dates = this.dates || {
            from_date: '',
            to_date: '',
            date_diffrence: 0,
        };
        if (typeof date === 'string') {
            this.dates[key] = hooks(date, this.dateOption).format('MMM DD, YYYY');
        }
        else if (date instanceof Date) {
            this.dates[key] = hooks(date).format('MMM DD, YYYY');
        }
        else if (hooks.isMoment(date)) {
            this.dates[key] = date.format('MMM DD, YYYY');
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (h(Host, { key: '7b771cf1cca6916d29b004555a5090a49015944b', class: "d-flex align-items-center" }, h("span", { key: '6913fe7ede3fef6bb07083198f630c5f54d71ffd' }, this.dates.from_date), ' ', h("svg", { key: '842d53bd382c667d528b0cbebec599ea3e89d2c6', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'f7034e0d9b19b7845b105a59f5defd9a48bc583e', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: 'aa07152b851329bbb40c474ba1ac5fec111b9bd8' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: '0807dc5050b75d0177e1c51d6e32ace1638c8119', class: "mx-01" }, this.dates.date_diffrence, '   ', this.dates.date_diffrence > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openChange = createEvent(this, "openChange", 7);
        this.open = false;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.open) {
            this.openModal();
        }
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        console.log('close');
        if (!this.isOpen) {
            return;
        }
        document.body.style.overflow = 'visible';
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
    }
    handleOpenChange() {
        if (this.open) {
            this.openModal();
        }
        else {
            this.closeModal();
        }
    }
    prepareFocusTrap() {
        const focusableElements = 'button,ir-dropdown ,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.shadowRoot.querySelectorAll(focusableElements);
        // console.log(focusableContent);
        if (focusableContent.length === 0)
            return;
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];
        this.firstFocusableElement.focus();
    }
    handleKeyDown(ev) {
        if (!this.isOpen) {
            return;
        }
        let isTabPressed = ev.key === 'Tab';
        if (ev.key === 'Escape' && this.isOpen) {
            this.closeModal();
        }
        if (!isTabPressed) {
            return;
        }
        // If focus is about to leave the last focusable element, redirect it to the first.
        if (!ev.shiftKey && document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            ev.preventDefault();
        }
        // If focus is about to leave the first focusable element, redirect it to the last.
        if (ev.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            ev.preventDefault();
        }
    }
    disconnectedCallback() {
        document.body.style.overflow = 'visible';
    }
    render() {
        return (h(Host, { key: '3511667200957171c3fe0be5a4c03e717e707771' }, h("div", { key: '526ca2ac7eac5c488b8275b6c00c2b055b082aa6', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (h("div", { key: '1e3305889396d693c78e676beb53fe75fbe0e867', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, h("ir-icon", { key: 'ac08b963210487a63cc243f2bf06f2751b159265', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, h("svg", { key: '3f3989deedb2ca7cf97fd2fe66680df743a59a09', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, h("path", { key: '4285baf1096b63b8e20e0d902c9bfc20592a12e0', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), h("div", { key: '214c3578d4a0de2db2a8405bb9789cd2a2177df6', class: 'modal-title', id: "dialog1Title" }, h("slot", { key: 'a701ed05eb4c0a6a30f84b7ae51bbb328342d6ca', name: "modal-title" })), h("div", { key: '5ed13b9dbcd26d74d5651f1141d2f25932d1fece', class: "modal-body", id: "dialog1Desc" }, h("slot", { key: 'fb455a4e40d5842e7bacd0e9d0bbaafb0a3bac2b', name: "modal-body" })), h("div", { key: '24e5a0809e2e6526eddf2bfe79c7e1338e7ebd00', class: "modal-footer" }, h("slot", { key: 'facb31cb09ec697f1952946ab90e2ce72353194d', name: "modal-footer" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrDialog.style = IrDialogStyle0;

const irGuestInfoCss = ".input-group-text.sc-ir-guest-info{min-width:10rem;text-align:left}.mobilePrefixSelect.sc-ir-guest-info{border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-top-left-radius:0;border-bottom-left-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-left:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}";
const IrGuestInfoStyle0 = irGuestInfoCss;

const GuestInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.bookingService = new BookingService();
        this.setupDataCountries = null;
        this.setupDataCountriesCode = null;
        this.defaultTexts = undefined;
        this.language = undefined;
        this.email = undefined;
        this.booking_nbr = undefined;
        this.countries = undefined;
        this.submit = false;
        this.guest = null;
        this.isLoading = false;
    }
    async componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
        await this.init();
    }
    async init() {
        try {
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(this.language)]);
            this.countries = countries;
            this.guest = guest;
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInputChange(key, value) {
        this.guest = Object.assign(Object.assign({}, this.guest), { [key]: value });
    }
    async editGuest() {
        try {
            this.isLoading = true;
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr);
            this.closeSideBar.emit(null);
            this.resetBookingData.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            console.log('done');
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.guest) {
            return null;
        }
        return [
            h("div", { class: "p-0" }, h("div", { class: "position-sticky mb-1 shadow-none p-0" }, h("div", { class: "d-flex align-items-center justify-content-between ir-card-header py-1 p-0" }, h("h3", { class: "card-title text-left font-medium-2 px-1 my-0" }, this.defaultTexts.entries.Lcz_GuestDetails), h("ir-icon", { class: "close close-icon px-1", onIconClickHandler: () => {
                    this.closeSideBar.emit(null);
                } }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("div", { class: "card-content collapse show" }, h("div", { class: "card-body pt-0 px-1" }, h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_FirstName, name: "firstName", submited: this.submit, value: (_a = this.guest) === null || _a === void 0 ? void 0 : _a.first_name, required: true, onTextChange: e => this.handleInputChange('first_name', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_LastName, name: "lastName", submited: this.submit, value: (_b = this.guest) === null || _b === void 0 ? void 0 : _b.last_name, required: true, onTextChange: e => this.handleInputChange('last_name', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_Email, name: "email", submited: this.submit, value: (_c = this.guest) === null || _c === void 0 ? void 0 : _c.email, required: true, onTextChange: e => this.handleInputChange('email', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_AlternativeEmail, name: "altEmail", value: (_d = this.guest) === null || _d === void 0 ? void 0 : _d.alternative_email, onTextChange: e => this.handleInputChange('alternative_email', e.detail) }), h("ir-select", { selectContainerStyle: "mb-1", required: true, name: "country", submited: this.submit, label: this.defaultTexts.entries.Lcz_Country, selectedValue: (_f = (_e = this.guest.country_id) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '', data: this.countries.map(item => {
                    return {
                        value: item.id.toString(),
                        text: item.name,
                    };
                }), firstOption: '...', onSelectChange: e => this.handleInputChange('country_id', e.detail) }), h("div", { class: "form-group mr-0" }, h("div", { class: "input-group row m-0 p-0" }, h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.defaultTexts.entries.Lcz_MobilePhone, '*')), h("select", { class: ` form-control text-md  col-2 py-0 mobilePrefixSelect`, onInput: e => this.handleInputChange('country_phone_prefix', e.target.value), required: true }, h("option", { value: null }, "..."), this.countries.map(item => {
                var _a;
                return (h("option", { selected: ((_a = this.guest.country_phone_prefix) === null || _a === void 0 ? void 0 : _a.toString()) === item.phone_prefix.toString(), value: item.phone_prefix }, item.phone_prefix));
            })), h("input", { type: "text", required: true, value: this.guest.mobile, class: 'form-control flex-fill mobilePrefixInput', onInput: e => this.handleInputChange('mobile', e.target.value) }))), h("div", { class: 'p-0 m-0' }, h("label", { class: `check-container m-0 p-0` }, h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange('subscribe_to_news_letter', e.target.checked) }), h("span", { class: "checkmark m-0 p-0" }), h("span", { class: 'm-0 p-0  check-label' }, this.defaultTexts.entries.Lcz_Newsletter))), h("hr", null), h("ir-button", { isLoading: this.isLoading, btn_disabled: this.isLoading, btn_styles: "d-flex align-items-center justify-content-center", text: this.defaultTexts.entries.Lcz_Save, onClickHanlder: this.editGuest.bind(this), color: "btn-primary" })))),
        ];
    }
};
GuestInfo.style = IrGuestInfoStyle0;

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#104064}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#1a6aa7}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (h("button", { key: 'd85e9d902a83ae53bbd4c5884f9dd7e7c71304cf', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '8166b35b8b245a962995d48dfd6f9e56426ffc43', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irIconsCss = ".sc-ir-icons-h{display:block}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = undefined;
        this.svgClassName = undefined;
    }
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: svgPath.viewBox, class: 'icon ${this.svgClassName}' }, h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.name = undefined;
        this.value = undefined;
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.inputStyles = '';
        this.required = undefined;
        this.LabelAvailable = true;
        this.readonly = false;
        this.type = 'text';
        this.submited = false;
        this.inputStyle = true;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.variant = 'default';
        this.disabled = false;
        this.error = false;
        this.valid = undefined;
        this.initial = true;
        this.inputFocused = false;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    watchHandler(newValue) {
        if (newValue !== '' && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleInputChange(event) {
        this.initial = false;
        if (this.required) {
            this.valid = event.target.checkValidity();
            const value = event.target.value;
            this.textChange.emit(value);
        }
        else {
            this.textChange.emit(event.target.value);
        }
    }
    render() {
        const id = v4();
        if (this.variant === 'icon') {
            return (h("fieldset", { class: "position-relative has-icon-left input-container" }, h("label", { htmlFor: id, class: "input-group-prepend bg-white m-0" }, h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error && 'danger-border'}`, id: "basic-addon1" }, h("slot", { name: "icon" }))), h("input", { type: this.type, onFocus: () => (this.inputFocused = true), required: this.required, onBlur: e => {
                    this.inputFocused = false;
                    this.inputBlur.emit(e);
                }, disabled: this.disabled, class: `form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error && 'danger-border'}`, id: id, value: this.value, placeholder: this.placeholder, onInput: this.handleInputChange.bind(this) })));
        }
        let className = 'form-control';
        let label = (h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (!this.LabelAvailable) {
            label = '';
        }
        if (this.inputStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        return (h("div", { class: "form-group" }, h("div", { class: "input-group row m-0" }, label, h("input", { readOnly: this.readonly, type: this.type, class: `${className} ${this.error ? 'border-danger' : ''} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12} ${this.readonly && 'bg-white'} ${this.inputStyles}`, onBlur: e => this.inputBlur.emit(e), placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled }))));
    }
    static get watchers() { return {
        "value": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStoped = null;
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings'];
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStoped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        interceptor_requests[extractedUrl] = 'pending';
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStoped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStoped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.toast.emit({
            type: 'error',
            title: error,
            description: '',
            position: 'top-right',
        });
        return Promise.reject(error);
    }
    render() {
        return (h(Host, { key: 'bd77863fb2417b421303fd3328da5cfd962a647e' }, this.isLoading && !this.isPageLoadingStoped && (h("div", { key: 'ef121919a3a9775c6591a0efa2a70c9d404248df', class: "loadingScreenContainer" }, h("div", { key: '3797ab7cfc106f2479dd40542f4b8f9923b3a8e5', class: "loaderContainer" }, h("span", { key: 'f6eccea51dc2ddd0431b016e0e12c409838c5abc', class: "page-loader" }))))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;margin-bottom:5px;gap:5px;align-items:center}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content}.label_placeholder.sc-ir-label{color:#cacfe7;padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editSidebar = createEvent(this, "editSidebar", 7);
        this.label = undefined;
        this.value = undefined;
        this.iconShown = false;
        this.image = undefined;
        this.country = false;
        this.imageStyle = '';
        this.icon_name = 'edit';
        this.icon_style = undefined;
        this.ignore_value = false;
        this.placeholder = undefined;
    }
    openEditSidebar() {
        this.editSidebar.emit();
    }
    render() {
        if (!this.placeholder && !this.value && !this.ignore_value) {
            return null;
        }
        return (h(Host, { class: this.image ? 'align-items-center' : '' }, h("strong", { class: "label_title" }, this.label), this.image && h("img", { src: this.image.src, class: `p-0 m-0 ${this.country ? 'country' : 'logo'} ${this.image.style}`, alt: this.image.src }), this.value ? h("p", { class: 'label_message' }, this.value) : h("p", { class: 'label_placeholder' }, this.placeholder), this.iconShown && (h("div", { class: "icon-container" }, h("ir-button", { variant: "icon", icon_name: this.icon_name, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHanlder: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openEditSidebar();
            } })))));
    }
};
IrLabel.style = IrLabelStyle0;

class AuthService {
    async authenticate(params) {
        const { data } = await axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.baseurl = undefined;
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
    }
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const token = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: 'd2ec00e5d8a72e92244fb9f72b96901f48263746' }, h("ir-interceptor", { key: '9d934dd0bbe1c09e5a672e4c5f60eacdc71ccc4f' }), h("ir-toast", { key: 'ed4584db2de01c154730d3a321fcf604b1b7bbe3' }), h("form", { key: 'fefc5eef8b7a1d75ca5bdf66393d54beacb347b5', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'ec31f1e33b893080ffad91516dbd1966e1701342', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd5f8841ad1baaa12bb6f8e8849ab860ce5da313f', class: "separator-container" }, h("div", { key: 'bf945fa96aa91be529acf84623d1bdd01d590cdf', class: "separator" }), h("p", { key: 'afc98522b1471d93cb6f42b9fc648db15e79027e' }, "Sign in to manage your property"), h("div", { key: '5686ce4a97a74f9159dff7e2c78eeacf6743cc72', class: "separator" })), h("ir-input-text", { key: '6c43f60f2b12c682cc769dd9995511734653b48e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '10161fd0477386750a7d95020c2a29272f008214', name: "user", slot: "icon" })), h("div", { key: '08e9a732b0653e98a1717b7af94fdf294d56239a', class: 'position-relative' }, h("ir-input-text", { key: '1f9673789843214f436638609a711a08389da524', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '539cd76e6d404bb6e4602504fd82b95adeecdd77', name: "key", slot: "icon" })), h("button", { key: '9268b00189f34788d284ba228f9cd5e6e8e9b970', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '89ad8fad7c621b888ecb551e704f3d60db0c2860', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7a93f14c42217b6e10e46c8cde3b79b4a5c93d8b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '275f45c5abee65267801212a84575cfa4e0a8c8a', class: "card-body text-center p-0 app_links" }, h("a", { key: '5f6fca1e059f924413814ead404d6c8a3b5c4a5e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '34581d5b733e42bd8ea74b8aa7e906445f048352', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c69da33aaf35e9ca2fb55c7628c1fa8c353ac24b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'f37788dc36bccd24e0b08132dffc7247905be162', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '24e94ff764d6325904a4b8301f09cdd36bab67bf', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b3e9dd8bf790fdd9cc8424194a6b725e76dbd428', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '04bad5b617fd6dbb70e9f44276210aabda85c8dc' }, h("a", { key: '60017a7a4014da9936c5aa708f99ae3044d06701', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmModal = createEvent(this, "confirmModal", 7);
        this.cancelModal = createEvent(this, "cancelModal", 7);
        this.modalTitle = 'Modal Title';
        this.modalBody = 'Modal Body';
        this.rightBtnActive = true;
        this.leftBtnActive = true;
        this.rightBtnText = 'Confirm';
        this.leftBtnText = 'Close';
        this.isLoading = false;
        this.autoClose = true;
        this.rightBtnColor = 'primary';
        this.leftBtnColor = 'secondary';
        this.btnPosition = 'right';
        this.iconAvailable = false;
        this.icon = '';
        this.isOpen = false;
        this.item = {};
    }
    async closeModal() {
        this.isOpen = false;
    }
    async openModal() {
        this.isOpen = true;
    }
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: '130124304297bc09b796db247e20ffefcfd2c3f7', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'bb6f41f6bed14750a0504cfc36f21c57af59f539', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: 'ff6a36544c3761f9a764ce768df75a390a9e5fcf', class: `ir-alert-content p-2` }, h("div", { key: 'f2a7812a000e8de0e22d2565dd5f54c0ce15c48b', class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }), h("div", { key: 'c22522fdcc0467e0b21e861761d986420f551b67', class: "modal-body text-left p-0 mb-2" }, h("div", { key: '91db085ec405f09be503d505cbe4f2a27a31a3a7' }, this.modalBody)), h("div", { key: 'c70f96fad1062114739b080c93b31df5e7648e1e', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (h("ir-button", { key: '72d59527320ca4a5cdfdcd1ce0b9a664f00b1a12', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (h("ir-button", { key: 'c3469c111c94b44ef3cef440cb7ac8624c7bd03a', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irPaymentDetailsCss = ".sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}.payment-actions.sc-ir-payment-details{display:flex;align-items:center;justify-content:center;height:100%;gap:0.5rem}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.toast = createEvent(this, "toast", 7);
        this.paymentService = new PaymentService();
        this.bookingService = new BookingService();
        this.bookingDetails = undefined;
        this.defaultTexts = undefined;
        this.newTableRow = false;
        this.collapsedPayment = false;
        this.collapsedGuarantee = false;
        this.flag = false;
        this.confirmModal = false;
        this.toBeDeletedItem = undefined;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
        this.modal_mode = null;
    }
    async componentWillLoad() {
        try {
            this.paymentService.setToken(calendar_data.token);
            this.bookingService.setToken(calendar_data.token);
            this.initializeItemToBeAdded();
        }
        catch (error) {
            if (this.bookingDetails.guest.cci) {
                return;
            }
            if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr) {
                this.paymentExceptionMessage = error;
            }
        }
    }
    initializeItemToBeAdded() {
        this.itemToBeAdded = {
            id: -1,
            date: hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: this.bookingDetails.currency,
            designation: '',
            reference: '',
        };
    }
    async _processPaymentSave() {
        if (this.itemToBeAdded.amount === null) {
            this.toast.emit({
                type: 'error',
                title: this.defaultTexts.entries.Lcz_EnterAmount,
                description: '',
                position: 'top-right',
            });
            return;
        }
        if (Number(this.itemToBeAdded.amount) > Number(this.bookingDetails.financial.due_amount)) {
            this.modal_mode = 'save';
            this.openModal();
            return;
        }
        this._handleSave();
    }
    async _handleSave() {
        try {
            await this.paymentService.AddPayment(this.itemToBeAdded, this.bookingDetails.booking_nbr);
            this.initializeItemToBeAdded();
            this.resetBookingData.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    handlePaymentInputChange(key, value, event) {
        if (key === 'amount') {
            if (!isNaN(value) || value === '') {
                if (value === '') {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: null });
                }
                else {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: parseFloat(value) });
                }
            }
            else if (event && event.target) {
                let inputElement = event.target;
                let inputValue = inputElement.value;
                inputValue = inputValue.replace(/[^\d-]|(?<!^)-/g, '');
                inputElement.value = inputValue;
            }
        }
        else {
            this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: value });
        }
    }
    async cancelPayment() {
        try {
            await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
            const newPaymentArray = this.bookingDetails.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.bookingDetails = Object.assign(Object.assign({}, this.bookingDetails), { financial: Object.assign(Object.assign({}, this.bookingDetails.financial), { payments: newPaymentArray }) });
            this.confirmModal = !this.confirmModal;
            this.resetBookingData.emit(null);
            this.toBeDeletedItem = null;
            this.modal_mode = null;
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleConfirmModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.modal_mode === 'delete') {
            await this.cancelPayment();
        }
        else {
            await this._handleSave();
        }
    }
    openModal() {
        const modal = document.querySelector('.delete-record-modal');
        modal.openModal();
    }
    async handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            if (this.modal_mode === 'save') {
                this.initializeItemToBeAdded();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handleBookingDetails() {
        if (this.newTableRow) {
            this.newTableRow = false;
        }
    }
    handleDateChange(e) {
        this.handlePaymentInputChange('date', e.detail.end.format('YYYY-MM-DD'));
    }
    _renderTableRow(item, rowMode = 'normal') {
        var _a;
        return (h(Fragment, null, h("tr", null, h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left" }, _formatDate(item.date))) : (h("ir-date-picker", { minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), singleDatePicker: true, autoApply: true, onDateChanged: this.handleDateChange.bind(this) }))), h("td", { class: 'border payments-height border-light border-bottom-0 text-center ' }, rowMode === 'normal' ? (h("span", { class: "sm-padding-right" }, _formatAmount(item.amount, this.bookingDetails.currency.code))) : (h("input", { type: "text", class: "border-0  form-control py-0 m-0 w-100", value: this.itemToBeAdded.amount === null ? '' : Number(this.itemToBeAdded.amount).toFixed(2), onInput: event => this.handlePaymentInputChange('amount', +event.target.value, event) }))), h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left" }, item.designation)) : (h("input", { class: "border-0 w-100 form-control py-0 m-0", onInput: event => this.handlePaymentInputChange('designation', event.target.value), type: "text" }))), h("td", { rowSpan: 2, class: 'border payments-height border-light border-bottom-0 text-center' }, h("div", { class: 'payment-actions' }, rowMode === 'add' && (h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary, isLoading: rowMode === 'add' && isRequestPending('/Do_Payment'), class: 'm-0', onClickHanlder: () => {
                this._processPaymentSave();
            } })), h("ir-button", { variant: "icon", icon_name: "trash", style: colorVariants.danger, isLoading: ((_a = this.toBeDeletedItem) === null || _a === void 0 ? void 0 : _a.id) === (item === null || item === void 0 ? void 0 : item.id) && isRequestPending('/Cancel_Payment'), onClickHanlder: rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this.initializeItemToBeAdded();
                }
                : () => {
                    this.modal_mode = 'delete';
                    this.toBeDeletedItem = item;
                    this.openModal();
                } })))), h("tr", null, h("td", { colSpan: 3, class: 'border border-light payments-height border-bottom-0 text-center' }, rowMode === 'normal' ? (h("span", { class: "sm-padding-left " }, item.reference)) : (h("input", { class: "border-0 w-100  form-control py-0 m-0", onKeyPress: event => {
                if (event.key === 'Enter') {
                    this.newTableRow = false;
                    this._handleSave();
                }
            }, onInput: event => this.handlePaymentInputChange('reference', event.target.value), type: "text" }))))));
    }
    bookingGuarantee() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        if (this.bookingDetails.is_direct && !this.bookingDetails.guest.cci) {
            return null;
        }
        return (h("div", null, h("div", { class: "d-flex align-items-center" }, h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_BookingGuarantee), h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.guarrantee`, "aria-expanded": this.collapsedGuarantee ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHanlder: async () => {
                if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr && !this.bookingDetails.guest.cci) {
                    this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.bookingDetails.booking_nbr);
                }
                this.collapsedGuarantee = !this.collapsedGuarantee;
            } })), h("div", { class: "collapse guarrantee " }, this.bookingDetails.guest.cci ? ([
            h("div", null, ((_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.cci) && 'Card:', " ", h("span", null, ((_e = (_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.cci) === null || _e === void 0 ? void 0 : _e.nbr) || ''), " ", ((_h = (_g = (_f = this.bookingDetails) === null || _f === void 0 ? void 0 : _f.guest) === null || _g === void 0 ? void 0 : _g.cci) === null || _h === void 0 ? void 0 : _h.expiry_month) && 'Expiry: ', h("span", null, ' ', ((_l = (_k = (_j = this.bookingDetails) === null || _j === void 0 ? void 0 : _j.guest) === null || _k === void 0 ? void 0 : _k.cci) === null || _l === void 0 ? void 0 : _l.expiry_month) || '', " ", ((_p = (_o = (_m = this.bookingDetails) === null || _m === void 0 ? void 0 : _m.guest) === null || _o === void 0 ? void 0 : _o.cci) === null || _p === void 0 ? void 0 : _p.expiry_year) && '/' + ((_s = (_r = (_q = this.bookingDetails) === null || _q === void 0 ? void 0 : _q.guest) === null || _r === void 0 ? void 0 : _r.cci) === null || _s === void 0 ? void 0 : _s.expiry_year))),
            h("div", null, ((_u = (_t = this.bookingDetails) === null || _t === void 0 ? void 0 : _t.guest) === null || _u === void 0 ? void 0 : _u.cci.holder_name) && 'Name:', " ", h("span", null, ((_x = (_w = (_v = this.bookingDetails) === null || _v === void 0 ? void 0 : _v.guest) === null || _w === void 0 ? void 0 : _w.cci) === null || _x === void 0 ? void 0 : _x.holder_name) || ''), ' ', ((_0 = (_z = (_y = this.bookingDetails) === null || _y === void 0 ? void 0 : _y.guest) === null || _z === void 0 ? void 0 : _z.cci) === null || _0 === void 0 ? void 0 : _0.cvc) && '- CVC:', " ", h("span", null, " ", ((_3 = (_2 = (_1 = this.bookingDetails) === null || _1 === void 0 ? void 0 : _1.guest) === null || _2 === void 0 ? void 0 : _2.cci) === null || _3 === void 0 ? void 0 : _3.cvc) || '')),
        ]) : this.paymentDetailsUrl ? (h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" })) : (h("div", { class: "text-center" }, this.paymentExceptionMessage)))));
    }
    _renderDueDate(item) {
        return (h("tr", null, h("td", { class: 'pr-1' }, _formatDate(item.date)), h("td", { class: 'pr-1' }, _formatAmount(item.amount, this.bookingDetails.currency.code)), h("td", { class: 'pr-1' }, item.description), h("td", { class: "collapse font-size-small roomName" }, item.room)));
    }
    render() {
        var _a, _b, _c, _d;
        if (!this.bookingDetails.financial) {
            return null;
        }
        return [
            h("div", { class: "card m-0" }, h("div", { class: "p-1" }, this.bookingDetails.financial.gross_cost > 0 && this.bookingDetails.financial.gross_cost !== null && (h("div", { class: "mb-2 h4 total-cost-container" }, this.defaultTexts.entries.Lcz_TotalCost, ": ", h("span", null, _formatAmount(this.bookingDetails.financial.gross_cost, this.bookingDetails.currency.code)))), h("div", { class: "mb-2 h4" }, this.defaultTexts.entries.Lcz_DueBalance, ":", ' ', h("span", { class: "danger font-weight-bold" }, _formatAmount(this.bookingDetails.financial.due_amount, this.bookingDetails.currency.code))), this.bookingGuarantee(), h("div", { class: "mt-2" }, h("div", null, ((_b = (_a = this.bookingDetails.financial) === null || _a === void 0 ? void 0 : _a.due_dates) === null || _b === void 0 ? void 0 : _b.length) > 0 && (h(Fragment, null, h("div", { class: "d-flex align-items-center" }, h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_PaymentDueDates), h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.roomName`, "aria-expanded": this.collapsedPayment ? 'true' : 'false', "aria-controls": "myCollapse", variant: "icon", icon_name: this.collapsedPayment ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                    this.collapsedPayment = !this.collapsedPayment;
                }, style: { '--icon-size': '1.5rem' } })), h("table", null, (_c = this.bookingDetails.financial.due_dates) === null || _c === void 0 ? void 0 : _c.map(item => this._renderDueDate(item))))))), h("div", { class: "mt-2 d-flex  flex-column rounded payment-container" }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("strong", null, this.defaultTexts.entries.Lcz_Payments), h("ir-button", { id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHanlder: () => {
                    this.newTableRow = true;
                } })), h("table", { class: "mt-1" }, h("thead", null, h("tr", null, h("th", { class: 'border border-light border-bottom-0 text-center payment_date' }, this.defaultTexts.entries.Lcz_Dates), h("th", { class: 'border border-light border-bottom-0 text-center w-60' }, this.defaultTexts.entries.Lcz_Amount), h("th", { class: 'border border-light border-bottom-0 text-center designation' }, this.defaultTexts.entries.Lcz_Designation), h("th", { class: 'border border-light border-bottom-0 text-center action_icons' }, h("span", { class: 'sr-only' }, "payment actions")))), h("tbody", null, (_d = this.bookingDetails.financial.payments) === null || _d === void 0 ? void 0 :
                _d.map((item) => this._renderTableRow(item)), this.newTableRow ? this._renderTableRow(null, 'add') : null))))),
            h("ir-modal", { item: this.toBeDeletedItem, class: 'delete-record-modal', modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: this.modal_mode === 'delete' ? this.defaultTexts.entries.Lcz_IfDeletedPermantlyLost : this.defaultTexts.entries.Lcz_EnteringAmountGreaterThanDue, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.modal_mode === 'delete' ? this.defaultTexts.entries.Lcz_Delete : this.defaultTexts.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modal_mode === 'delete' ? 'danger' : 'primary', onConfirmModal: this.handleConfirmModal.bind(this), onCancelModal: this.handleCancelModal.bind(this) }),
        ];
    }
    static get watchers() { return {
        "bookingDetails": ["handleBookingDetails"]
    }; }
};
IrPaymentDetails.style = IrPaymentDetailsStyle0;

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            const splitTime = params.arrival_time.split(':');
            await axios.post(`/Do_Pickup?Ticket=${calendar_data.token}`, {
                booking_nbr,
                is_remove,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = data.hour && data.minute ? renderTime(data.hour) + ':' + renderTime(data.minute) : '';
        return {
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locations = [];
        calendar_data.pickup_service.allowed_options.forEach(option => {
            if (locations.filter(location => location.value === option.location.id).length === 0) {
                locations.push({
                    text: message + ' ' + option.location.description,
                    value: option.location.id,
                });
            }
        });
        return locations;
    }
    validateForm(params) {
        if (params.arrival_time.split(':').length !== 2) {
            return {
                error: true,
                cause: 'arrival_time',
            };
        }
        if (params.flight_details === '') {
            return {
                error: true,
                cause: 'flight_details',
            };
        }
        if (params.vehicle_type_code === '') {
            return {
                error: true,
                cause: 'vehicle_type_code',
            };
        }
        if (params.number_of_vehicles === 0) {
            return {
                error: true,
                cause: 'number_of_vehicles',
            };
        }
        return { error: false };
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupCss = ".sc-ir-pickup-h{display:block}.custom-card-container.sc-ir-pickup{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup{flex:1}.border-theme.sc-ir-pickup{border:1px solid #cacfe7}";
const IrPickupStyle0 = irPickupCss;

const IrPickup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.pickupService = new PickupService();
        this.defaultPickupData = undefined;
        this.numberOfPersons = 0;
        this.bookingNumber = undefined;
        this.isLoading = false;
        this.allowedOptionsByLocation = [];
        this.pickupData = {
            location: -1,
            flight_details: '',
            due_upon_booking: '',
            number_of_vehicles: 1,
            vehicle_type_code: '',
            currency: undefined,
            arrival_time: '',
            arrival_date: hooks().format('YYYY-MM-DD'),
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '') {
            this.updatePickupData('location', -1);
        }
        if (value !== '') {
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { location: value, selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: this.numberOfPersons,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2), vehicle_type_code: locationChoice.vehicle.code, currency: locationChoice.currency });
            const input = this.el.querySelector('#pickup-time');
            if (!input) {
                setTimeout(() => {
                    this.initializeInputMask();
                }, 100);
            }
        }
    }
    initializeInputMask() {
        const input = this.el.querySelector('#pickup-time');
        // if (this.pickupData) {
        //   (input as HTMLInputElement).value = this.pickupData.arrival_time;
        // }
        if (input) {
            Inputmask('Hh:Mm', {
                placeholder: 'HH:mm',
                definitions: {
                    H: {
                        validator: '[0-2]',
                    },
                    h: {
                        validator: function (ch, maskset, pos) {
                            var firstDigit = maskset.buffer[pos - 1];
                            if (firstDigit === '2') {
                                return /[0-3]/.test(ch);
                            }
                            else {
                                return /[0-9]/.test(ch);
                            }
                        },
                    },
                    M: {
                        validator: '[0-5]',
                    },
                    m: {
                        validator: '[0-9]',
                    },
                },
                insertMode: true,
                showMaskOnHover: false,
                inputmode: 'numeric',
                alias: 'datetime',
                oncomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
                oncleared: () => {
                    this.updatePickupData('arrival_time', '');
                },
                onincomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
            }).mask(input);
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { number_of_vehicles: value, due_upon_booking: this.pickupService
                .updateDue({
                amount: this.pickupData.selected_option.amount,
                code: this.pickupData.selected_option.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: value,
            })
                .toFixed(2) });
    }
    componentDidLoad() {
        if (this.defaultPickupData) {
            this.initializeInputMask();
        }
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = calendar_data.pickup_service.allowed_options.find(option => option.location.id === +this.pickupData.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons)];
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2), vehicle_type_code: locationChoice.vehicle.code });
    }
    updatePickupData(key, value) {
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { [key]: value });
    }
    async savePickup() {
        try {
            this.isLoading = true;
            const isValid = this.pickupService.validateForm(this.pickupData);
            if (isValid.error) {
                this.cause = isValid.cause;
                return;
            }
            if (this.cause) {
                this.cause = null;
            }
            await this.pickupService.savePickup(this.pickupData, this.bookingNumber, this.defaultPickupData !== null && this.pickupData.location === -1);
            this.resetBookingData.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '1a16cd01e1a53928198351fb8df42ab7eb48e151', class: 'p-0' }, h("ir-title", { key: 'bc65f0f9840cc48ffd60bcf5fb97f8c88ec5aa0b', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_Pickup, displayContext: "sidebar" }), h("section", { key: '0bd9a297725d16f2efd268e03cfdf28b1a464d4f', class: 'px-1' }, h("ir-select", { key: '6d12bee7ab4e6d1817d2dd4dc6eb72c59b069c47', selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (h(Fragment, { key: '66fd053fc91e9b1063525f4b4c3910caf5a9a047' }, h("div", { key: '5b8bb91de330c28e1c37360fbb2de36c387238c1', class: 'd-flex' }, h("div", { key: '4d2463c71612ea0eaede7850123c0f85b0e106db', class: "form-group  mr-1" }, h("div", { key: 'e77482b75b762e9510a9dcdfe1e9a8907247e35b', class: "input-group row m-0" }, h("div", { key: '360036ba36ddcd15367654168bfe1cd92ebf999d', class: `input-group-prepend col-5 p-0 text-dark border-0` }, h("label", { key: '72a346a5955e35e0e2b4281c2721c3828dd714fe', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales.entries.Lcz_ArrivalDate)), h("div", { key: 'ad3178048605b7cae379071cc12b71aef7dc5597', class: "form-control form-control-md col-7 d-flex align-items-center pl-0" }, h("ir-date-picker", { key: 'f96c523a4463f3494d0808eb673f7d25c89ace56', minDate: hooks().format('YYYY-MM-DD'), autoApply: true,
            // format="ddd, DD M YYYY"
            singleDatePicker: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start.format('YYYY-MM-DD'));
            } })))), h("div", { key: 'f1894927286f17060785c2ece3e8b2bc95373c91', class: "form-group" }, h("div", { key: '2f5d4720db00d222495fecb53c8aea0fbd36c8e0', class: "input-group  row m-0" }, h("div", { key: 'd242b0363e7adcf67bdbc984a5fe88ee4e797c97', class: `input-group-prepend col-4 col-sm-3 p-0 text-dark border-0` }, h("label", { key: '67ce35b9c0555e1d60fa6b757686bafdbcb74812', htmlFor: "pickup", class: `input-group-text flex-grow-1 text-dark border-theme` }, locales.entries.Lcz_Time)), h("input", { key: '93cd1de67b1deeda6383e9f54a6c6f822537dd2b', type: "text", value: this.pickupData.arrival_time, id: "pickup-time", class: `form-control col-8 col-sm-4 ${this.cause === 'arrival_time' && 'border-danger'}` })))), h("ir-input-text", { key: '9990c6481707e709605dfc5e477f1ab516fbed94', value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", inputStyles: this.cause === 'flight_details' ? 'border-danger' : '' }), h("ir-select", { key: '0469049ab068038b196c1564f60c18f528eeedcd', selectContainerStyle: "mb-1", selectStyles: this.cause === 'vehicle_type_code' ? 'border-danger' : '', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), h("div", { key: '64cd045786dc033c8e54c58d89591fe5d7c4f6ac', class: 'd-flex flex-column flex-md-row' }, h("ir-select", { key: 'b904dc1984a1d5ae540d7d399866cd7d3f2c9b29', labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectStyles: this.cause === 'number_of_vehicles' ? 'border-danger' : '', selectedValue: this.pickupData.number_of_vehicles, labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), h("ir-input-text", { key: '873f2625b3c9a88e2ef5cd09772d08a3ecba7342', labelBorder: "theme", readonly: true, value: this.pickupData.due_upon_booking, labelWidth: 7, label: `${locales.entries.Lcz_DueUponBooking}  ${this.pickupData.currency.symbol}`, placeholder: "", class: "" })))), h("div", { key: '4442b23bec54beda7adce3e0480835a497c7cfa6', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'e3bb21067b6ba2f4e39c446d6371d45b04ced325', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  ${this.defaultPickupData || this.pickupData.location !== -1 ? 'mr-sm-1' : ''}`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (h("ir-button", { key: '705f0329720a22275bbe9ffaed023e5e650fc23c', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.savePickup.bind(this) }))))));
    }
    get el() { return getElement(this); }
};
IrPickup.style = IrPickupStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.3rem 0.5rem;border-radius:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.deleteFinished = createEvent(this, "deleteFinished", 7);
        this.pressCheckIn = createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = createEvent(this, "pressCheckOut", 7);
        this.editInitiated = createEvent(this, "editInitiated", 7);
        this.bookingEvent = undefined;
        this.bookingIndex = undefined;
        this.isEditable = undefined;
        this.mealCodeName = undefined;
        this.myRoomTypeFoodCat = undefined;
        this.currency = 'USD';
        this.legendData = undefined;
        this.roomsInfo = undefined;
        this.collapsed = false;
        this.defaultTexts = undefined;
        this.ticket = undefined;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.item = undefined;
        this.isLoading = false;
        this.isModelOpen = false;
    }
    componentWillLoad() {
        if (this.bookingEvent) {
            this.item = this.bookingEvent.rooms[this.bookingIndex];
        }
    }
    handleBookingEventChange() {
        this.item = this.bookingEvent.rooms[this.bookingIndex];
    }
    componentDidLoad() {
        this.modal = this.element.querySelector('ir-modal');
    }
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.item);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.item);
        }
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    handleEditClick() {
        var _a, _b, _c, _d, _e, _f;
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.item['assigned_units_pool'],
            NAME: formatName(this.item.guest.first_name, this.item.guest.last_name),
            EMAIL: this.bookingEvent.guest.email,
            PHONE: this.bookingEvent.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.bookingEvent.from_date,
            TO_DATE: this.bookingEvent.to_date,
            TITLE: `${this.defaultTexts.entries.Lcz_EditBookingFor} ${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name) || ''}`,
            defaultDateRange: {
                dateDifference: this.item.days.length,
                fromDate: new Date(this.item.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.item.from_date + 'T00:00:00')),
                toDate: new Date(this.item.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.item.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.item.bed_preference,
            adult_child_offering: this.item.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.item.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.bookingEvent.arrival,
            ARRIVAL_TIME: this.bookingEvent.arrival.description,
            BOOKING_NUMBER: this.bookingEvent.booking_nbr,
            cancelation: this.item.rateplan.cancelation,
            channel_booking_nbr: this.bookingEvent.channel_booking_nbr,
            CHILDREN_COUNT: this.item.rateplan.selected_variation.child_nbr,
            COUNTRY: this.bookingEvent.guest.country_id,
            ENTRY_DATE: this.bookingEvent.from_date,
            FROM_DATE_STR: this.bookingEvent.format.from_date,
            guarantee: this.item.rateplan.guarantee,
            GUEST: this.bookingEvent.guest,
            IDENTIFIER: this.item.identifier,
            is_direct: this.bookingEvent.is_direct,
            IS_EDITABLE: this.bookingEvent.is_editable,
            NO_OF_DAYS: this.item.days.length,
            NOTES: this.bookingEvent.remark,
            origin: this.bookingEvent.origin,
            POOL: this.item['assigned_units_pool'],
            PR_ID: (_e = this.item.unit) === null || _e === void 0 ? void 0 : _e.id,
            RATE: this.item.total,
            RATE_PLAN: this.item.rateplan.name,
            RATE_PLAN_ID: this.item.rateplan.id,
            RATE_TYPE: this.item.roomtype.id,
            ROOMS: this.bookingEvent.rooms,
            SOURCE: this.bookingEvent.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.bookingEvent.format.to_date,
            TOTAL_PRICE: this.bookingEvent.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: ((_f = this.item.unit) === null || _f === void 0 ? void 0 : _f.name) || '',
            PICKUP_INFO: this.bookingEvent.pickup_info,
        });
    }
    handleDeleteClick() {
        this.modal.openModal();
    }
    async deleteRoom() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            oldRooms = oldRooms.filter(room => room.identifier !== this.item.identifier);
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                booking: {
                    booking_nbr: this.bookingEvent.booking_nbr,
                    from_date: this.bookingEvent.from_date,
                    to_date: this.bookingEvent.to_date,
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
                    rooms: oldRooms,
                },
            };
            console.log('body:', body);
            const { data } = await axios.post(`/DoReservation?Ticket=${this.ticket}`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            this.irModalRef.closeModal();
            this.deleteFinished.emit(this.item.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b;
        console.log(this.item);
        return (h(Host, { key: 'f1062c9872b2f20522303f10a2510df635b558c0', class: "p-1 d-flex m-0" }, h("ir-button", { key: 'f0ce9c0316a6bcc6c1ad774e3373f5d868eea8fd', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: '80df37fa7c1d315282a3a839cd73704f8e874f18', class: "flex-fill m-0 " }, h("div", { key: 'fad417c28fbc4ed98549da5caa2d90e7da09291a', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: '881c14e92c074f4f2a8e046eed2da2e70b5778ab', class: "m-0 p-0" }, h("strong", { key: '4182df778d4938a1d01199f3862a5c44e17340f2', class: "m-0 p-0" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.item.rateplan.is_non_refundable && ` - ${this.defaultTexts.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '1e4bb5cf06b337ae089c561326ce29965981639c', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: '389a7b6cdc506bd447dd1c96ca68fd37b5fd8c95', class: "p-0 m-0 font-weight-bold" }, _formatAmount(this.item['gross_total'], this.currency)), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: 'f3fc6700b142bb5e147cb73c66c9c1385bd1c8f6', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHanlder: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: 'c6d8a9235661d36405cfc2eae5b37da8c0a0f427', variant: "icon", onClickHanlder: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: '99bdb3791ff3dbe4abf6047f3eac2a4c35108abe', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: '4be6a9121b4c3ce37c7a554d0d671dbd7c749c32', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && h("ir-button", { key: '15ee9952ee297584538a428dea304185c35ee816', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && h("ir-button", { key: '26c03f1f7d2dad4a544900bfda53873301b67d54', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), h("div", { key: '0c1966653b546f6708ac6108f38308d69d304382', class: 'd-flex justify-content-end' }, calendar_data.is_frontdesk_enabled && this.item.unit && (h("span", { key: 'cd8182d04116a678b239d78747d9cda2c0cac7be', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), h("div", { key: '912f05f92507ddbec7bb9a95de919836a6cd4426' }, h("span", { key: '00ad3dc3f886598dd535c1937a00c8fa91d3ee8e', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && h("span", { key: '2693faaef3b167a39083ebd737183da0d2367259' }, " ", this.item.rateplan.selected_variation.adult_child_offering)), h("div", { key: '2b1f9b4c037ea55dd3c93f583672ba2892af56a7', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, h("div", { key: 'fc4499c75a3bbf788ac71dda24527a38135dcb61', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '33878c8362f90c02a75620314a393ff82aaea5e4', class: " sm-padding-top" }, h("strong", { key: '5fd2e21d23fd3edc00a170a66afffe6ecc4b0131', class: "sm-padding-right" }, `${this.defaultTexts.entries.Lcz_Breakdown}:`)), h("div", { key: '83da363fa2e5cb6c1cd477f7db070b6813ab1ea2', class: 'flex-fill' }, h("table", { key: 'e74636c4e7b6c7d8b21c11b248deabe4df0e02bb' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, _formatAmount(item.amount, this.currency)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, _formatAmount(item.cost, this.currency))));
            }), h("tr", { key: '6170e172ed54264812a9f46a238b6a0031bed7fe', class: '' }, h("th", { key: '6ee7bba9e39dd75505faa8fe9d79ec2277e10225', class: "text-right pr-2 subtotal_row" }, this.defaultTexts.entries.Lcz_SubTotal), h("th", { key: '27c80a927a38ae38a76a4fd11e2d5163f549a769', class: "text-right subtotal_row" }, _formatAmount(this.item.total, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: '4283b378b8da104846c52fa81c620f8ecead041a', class: "pl-2 text-right night-cost" }, _formatAmount(this.item.cost, this.currency))), this.bookingEvent.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, _formatAmount((this.item.total * d.pct) / 100, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, _formatAmount((this.item.cost * d.pct) / 100, this.currency)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("div", { key: '4c1d5d6523ef3311c1d9a5c8d49e7635ca080a8c', class: "sm-mb-1", innerHTML: this.item.rateplan.cancelation || '' }), h("div", { key: '092b4aee812422f4ecc174874447c40e952b5e93', class: "sm-mb-1", innerHTML: this.item.rateplan.guarantee || '' }), this.bookingEvent.is_direct && h("ir-label", { key: '060dbc7440792085299ada31adeded24ca16d256', label: `${this.defaultTexts.entries.Lcz_MealPlan}:`, value: this.mealCodeName }))), h("ir-modal", { key: '36a40c97e5d083fcad064d786731c8b4fd24971d', autoClose: false, ref: el => (this.irModalRef = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.defaultTexts.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: `${this.defaultTexts.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${this.defaultTexts.entries.Lcz_FromThisBooking}` })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
};
IrRoom.style = IrRoomStyle0;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectChange = createEvent(this, "selectChange", 7);
        this.count = 0;
        this.name = undefined;
        this.data = undefined;
        this.label = '<label>';
        this.selectStyles = undefined;
        this.selectContainerStyle = undefined;
        this.selectedValue = null;
        this.required = undefined;
        this.LabelAvailable = true;
        this.firstOption = 'Select';
        this.selectStyle = true;
        this.showFirstOption = true;
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.select_id = v4();
        this.initial = true;
        this.valid = false;
    }
    watchHandler(newValue) {
        if (newValue !== null && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleButtonAnimation(e) {
        console.log(e.detail, this.select_id, e.detail === this.select_id);
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        console.log('first1');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    componentwillload() { }
    disconnectedCallback() { }
    handleSelectChange(event) {
        this.selectEl.classList.remove('border-danger');
        if (this.required) {
            this.initial = false;
            this.valid = event.target.checkValidity();
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
        else {
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
    }
    render() {
        let className = 'form-control';
        let label = (h("div", { key: 'f060f17dcb9d4b08a8f29c152115e0d839d4dd96', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: 'ae65a34259a5568c2a0df7f8c71b9e5d8c215c2d', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '99e62c5a74a5a123690eac8ab430cc821ef252b2', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: 'ec601e6982234469952e90ed2e67316afdafabd9', class: "input-group row m-0" }, label, h("select", { key: 'b7935127a847903e4ba79b79da3df36b9ecac2f5', ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: 'a1a0d0f5a6f48af219ea49ca7f55852df951a2a4', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return h("option", { value: item.value }, item.text);
            }
        })))));
    }
    static get watchers() { return {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrSelect.style = IrSelectStyle0;

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irSidebarToggle = createEvent(this, "irSidebarToggle", 7);
        this.name = undefined;
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
        this.sidebarStyles = undefined;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        document.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    // Unsubscribe to the event when the component is removed from the DOM
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            h("div", { key: 'fa8a4c9f99e40a939142c815e063eea19e200171', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '115b811da8dca5aea27119f784ea964114395d3d', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("ir-icon", { key: '82ceade4e60db964dbdc59072d24e2c8a2c9e8ce', class: "close", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '9fb53f3221044fb864de003cb88745c9f66d9f60', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '0909d5e2de56a15863402ccecd9222f4f01c813d', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("slot", { key: '3f3834da43abaa28aa548e577067c4d4acd30041', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

const IrTextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.value = '';
        this.maxLength = undefined;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: '9bf97e6d66e2b6bfd6d4b866935267bec1e902ee', class: "form-group" }, h("label", { key: '50517ff6d6c019d4d31cd3dc2101e447319da2c0' }, this.label), h("textarea", { key: '005ca08ae58f4e28987eb3b225841fd979824690', maxLength: this.maxLength, rows: this.rows, value: this.value, class: "form-control", placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
};

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.label = undefined;
        this.displayContext = 'default';
        this.justifyContent = 'start';
    }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '58ac8b2e9eb753168f51033d940136319d390e27' }, h("h4", { key: '779a9a97f9e9f3d8e32167c94c54afc0de09cd7c', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '3e45692c3fc8970cff112a450b8d3119f60347d3', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: 'f3fb4c73ba14b912b9b23954b1285f3bbabdca73', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'ce114a4cd8e41961f4b09571fef9979d7cbcc266', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'bb23b047a50e556e50cf37bea07ac5f85d74fdae', class: 'title-body' }, h("slot", { key: '3cce8b95a57ff983d99048582effa21b75965c8a', name: "title-body" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = 'bottom-left';
        this.toasts = [];
    }
    onToast(event) {
        const toast = event.detail;
        this.showToast(toast);
    }
    showToast(toast) {
        const toastrOptions = {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: toast.duration || 5000,
        };
        switch (toast.type) {
            case 'success':
                toastr.success(toast.title, '', toastrOptions);
                break;
            case 'error':
                toastr.error(toast.title, '', toastrOptions);
                break;
        }
    }
    render() {
        return h(Host, { key: 'b7b0ac3a31230a900c6072b51036a6bc2b2619dd' });
    }
    get element() { return getElement(this); }
};
IrToast.style = IrToastStyle0;

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.message = undefined;
        this.withHtml = true;
        this.customSlot = false;
        this.open = undefined;
    }
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
            }, 300);
        }
        else {
            this.open = false;
        }
    }
    render() {
        return (h(Host, { key: '3fac468b5fcad2bf5257f507e4390e02bad3dbfc', class: "m-0 p-0" }, h("span", { key: 'bfb8137cdf4def4025d9f2a18f57545d2c691d96', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (h("svg", { "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: 'a2576b77e5e192bb6a1c55eb6de617c3184dcb72', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: '3ea3f4a06c3dbd74fabbf538b9eb4aab288f10ca', class: "tooltip-arrow" }), h("div", { key: '7da5e4cd692b6ea5e722d71e208e07d179aa26e2', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: '44e2b56857d368ebdd83e0e13d44c5c6f6c094e1', innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

const otaLabelCss = "*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px;width:100%}strong.sc-ota-label{margin:0;padding:0}ul.sc-ota-label{margin:0 3px;padding:0;list-style:none;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}li.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}button.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}button.sc-ota-label:hover{color:#355270}";
const OtaLabelStyle0 = otaLabelCss;

const OtaLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleShowAll = () => {
            this.showAll = !this.showAll;
        };
        this.label = undefined;
        this.remarks = undefined;
        this.maxVisibleItems = 3;
        this.showAll = false;
    }
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (h(Host, null, h("strong", null, this.label), h("ul", null, displayedRemarks.map((remark, index) => (h("li", { key: v4() }, "- ", remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index === displayedRemarks.length - 1 && (h("button", { onClick: this.toggleShowAll }, this.showAll ? locales.entries.Lcz_ShowLess : locales.entries.Lcz_ShowMore))))))));
    }
};
OtaLabel.style = OtaLabelStyle0;

export { IglApplicationInfo as igl_application_info, IglBlockDatesView as igl_block_dates_view, IglBookProperty as igl_book_property, IglBookPropertyFooter as igl_book_property_footer, IglBookPropertyHeader as igl_book_property_header, IglBookingOverviewPage as igl_booking_overview_page, IglBookingRoomRatePlan as igl_booking_room_rate_plan, IglBookingRooms as igl_booking_rooms, IglDateRange as igl_date_range, IglPagetwo as igl_pagetwo, IglPropertyBookedBy as igl_property_booked_by, IrAutocomplete as ir_autocomplete, IrBooking as ir_booking, IrBookingDetails as ir_booking_details, IrBookingExtraNote as ir_booking_extra_note, IrButton as ir_button, IrCommon as ir_common, IrDatePicker as ir_date_picker, IrDateView as ir_date_view, IrDialog as ir_dialog, GuestInfo as ir_guest_info, IrIcon as ir_icon, IrIcons as ir_icons, IrInputText as ir_input_text, IrInterceptor as ir_interceptor, IrLabel as ir_label, IrLogin as ir_login, IrModal as ir_modal, IrPaymentDetails as ir_payment_details, IrPickup as ir_pickup, IrRoom as ir_room, IrSelect as ir_select, IrSidebar as ir_sidebar, IrTextArea as ir_textarea, IrTitle as ir_title, IrToast as ir_toast, IrTooltip as ir_tooltip, OtaLabel as ota_label };

//# sourceMappingURL=igl-application-info_38.entry.js.map