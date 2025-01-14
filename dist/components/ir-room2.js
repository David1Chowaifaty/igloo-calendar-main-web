import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { b as _getDay } from './functions.js';
import { f as formatName } from './booking.js';
import { l as locales } from './locales.store.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data.js';
import { c as colorVariants, d as defineCustomElement$3 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = /*@__PURE__*/ proxyCustomElement(class IrRoom extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.deleteFinished = createEvent(this, "deleteFinished", 7);
        this.pressCheckIn = createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = createEvent(this, "pressCheckOut", 7);
        this.editInitiated = createEvent(this, "editInitiated", 7);
        this.resetbooking = createEvent(this, "resetbooking", 7);
        this.bookingService = new BookingService();
        this.bookingEvent = undefined;
        this.bookingIndex = undefined;
        this.isEditable = undefined;
        this.mealCodeName = undefined;
        this.myRoomTypeFoodCat = undefined;
        this.currency = 'USD';
        this.language = 'en';
        this.legendData = undefined;
        this.roomsInfo = undefined;
        this.bedPreferences = undefined;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.collapsed = false;
        this.item = undefined;
        this.isLoading = false;
        this.modalReason = null;
    }
    componentWillLoad() {
        if (this.bookingEvent) {
            this.item = this.bookingEvent.rooms[this.bookingIndex];
        }
    }
    handleBookingEventChange() {
        this.item = this.bookingEvent.rooms[this.bookingIndex];
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
            TITLE: `${locales.entries.Lcz_EditBookingFor} ${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name) || ''}`,
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
            booking: this.bookingEvent,
            currentRoomType: this.item,
        });
    }
    openModal(reason) {
        if (!reason) {
            return;
        }
        this.modalReason = reason;
        this.modal.openModal();
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (!this.modalReason) {
                return;
            }
            this.isLoading = true;
            switch (this.modalReason) {
                case 'delete':
                    await this.deleteRoom();
                    break;
                case 'checkin':
                case 'checkout':
                    await this.bookingService.handleExposedRoomInOut({
                        booking_nbr: this.bookingEvent.booking_nbr,
                        room_identifier: this.item.identifier,
                        status: this.modalReason === 'checkin' ? '001' : '002',
                    });
                    this.resetbooking.emit(null);
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            this.modalReason = null;
            this.modal.closeModal();
        }
    }
    async deleteRoom() {
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
            extras: this.bookingEvent.extras,
            pickup_info: this.bookingEvent.pickup_info,
        };
        await this.bookingService.doReservation(body);
        this.deleteFinished.emit(this.item.identifier);
    }
    formatVariation({ adult_nbr, child_nbr }, { infant_nbr }) {
        // Adjust child number based on infants
        const adjustedChildNbr = child_nbr;
        // Define labels based on singular/plural rules
        const adultLabel = adult_nbr > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = adjustedChildNbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infant_nbr > 1 ? locales.entries.Lcz_Infants.toLowerCase() : locales.entries.Lcz_Infant.toLowerCase();
        // Construct parts with the updated child number
        const parts = [`${adult_nbr} ${adultLabel}`, adjustedChildNbr ? `${adjustedChildNbr} ${childLabel}` : '', infant_nbr ? `${infant_nbr} ${infantLabel}` : ''];
        // Join non-empty parts with spaces
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
    getBedName() {
        var _a;
        const bed = this.bedPreferences.find(p => p.CODE_NAME === this.item.bed_preference.toString());
        if (!bed) {
            throw new Error(`bed with code ${this.item.bed_preference} not found`);
        }
        return (_a = bed[`CODE_VALUE_${this.language}`]) !== null && _a !== void 0 ? _a : bed.CODE_VALUE_EN;
    }
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}`;
            case 'checkin':
                return `Check in ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}`;
            case 'checkout':
                return `Checkout ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}`;
            default:
                return '';
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '7a2b9857e7c46de350b8fae3ebb280ea3ddb2bc2', class: "p-1 d-flex m-0" }, h("ir-button", { key: '28f1aab0236b3bb5bbc5993385092f874e7df14a', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: 'ba8a1e4152235604af01a0206ad2368d4c591c91', class: "flex-fill m-0 " }, h("div", { key: '040fa8746e459ab2927ffbc1b3f3e34b0694eb4e', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: 'ee39502bfe9e30a8306fa737342c301a05b4f4e6', class: "m-0 p-0" }, h("span", { key: 'ca20e0b193ed359dbfcd7059a801860512cda337', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.item.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '403245d579f9ae8f397b70cca8ed118ba9b480f5', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: 'fa9c15ac35425c5a232eb7f7dcf443d75b05e85f', class: "p-0 m-0 font-weight-bold" }, formatAmount(this.currency, this.item['gross_total'])), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: '149c34d6296ed9a99de23ea8419b508e5daf414d', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: 'ccdc3fd2afc0498d7367c07f16de5045f9de83d2', variant: "icon", onClickHandler: this.openModal.bind(this, 'delete'), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: 'c2dbf829f73a7933c4643c1ca5cd26aa202c076e', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: '6b339b70bddd1a3e09b2d77fc7e48b8851414d68', class: "mr-1  flex-grow-1", style: { width: 'fit-content' }, from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && (h("ir-button", { key: '5c4b9f1262cfa54125885c5b4182ad6e847b9e93', onClickHandler: this.openModal.bind(this, 'checkin'), id: "checkin", btn_color: "outline", size: "sm", text: locales.entries.Lcz_CheckIn })), this.hasCheckOut && (h("ir-button", { key: 'cfdf618e1656a6dddd9aa3bf45217c1bf7ba16af', onClickHandler: this.openModal.bind(this, 'checkout'), id: "checkout", btn_color: "outline", size: "sm", text: locales.entries.Lcz_CheckOut }))), !isSingleUnit(this.item.roomtype.id) && calendar_data.is_frontdesk_enabled && this.item.unit && (h("div", { key: 'fe06612f0c22caf040e0ee2f1767364242fd505f', class: 'd-flex justify-content-end' }, h("span", { key: 'a8c01765498e71655ceb7f3b7102c5894f5b4371', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), h("div", { key: '48ad1929a2aa8a8a6a0c5cd3b03eb8898bcc1a6d' }, h("span", { key: '56c62e65c4296a9622097b8067a28201d01eff51', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && (h("span", { key: '566cfd91493cb5542983ddb762ef5c8a66809423', class: "mr-1", innerHTML: this.formatVariation(this.item.rateplan.selected_variation, this.item.occupancy) }, ' ')), this.item.bed_preference && h("span", { key: 'fee18673b9fa9564fedf4ea8bb83b3128255aa80' }, "(", this.getBedName(), ")")), h("div", { key: 'db2e26546a24aa0aed8f6deeb3237a299707a0ba', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, h("div", { key: '42e58fab9f59c9ffd0b12ad9f064eeca4486c6f6', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '05f9ee00f26ac522e435c19431817f004e428ada', class: " sm-padding-top" }, h("p", { key: '8931cd52d780ab0c67170a747a13bf7529e21060', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: 'de43383bba92aa78362eee93cfa8bc7a3de92203', class: 'flex-fill' }, h("table", { key: 'e8cd442ca59929042187feb8d0370caa814d3222' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, formatAmount(this.currency, item.amount)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, item.cost))));
            }), h("tr", { key: '2c5be7451e7e0b5ea62c1d18f34232dfdc45857c', class: '' }, h("th", { key: 'ff2331ef4843cf139966ecd05718ac41af04beba', class: "text-right pr-2 subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: 'bc2ed0e049120df7e8610285585a6250f4782c29', class: "text-right subtotal_row" }, formatAmount(this.currency, this.item.total)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: '1bfb747594ad9487d685f26db572bc67662aa069', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.item.cost))), this.bookingEvent.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.item.total * d.pct) / 100)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.item.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), this.bookingEvent.is_direct && (h(Fragment, { key: '56b666d3e37876edf98dc24d379a8d9a50512c96' }, this.item.rateplan.cancelation && (h("ir-label", { key: '93c6b714ecfb493edcfe42f37bc6163ffbdfbd3d', labelText: `${locales.entries.Lcz_Cancellation}:`, content: this.item.rateplan.cancelation || '', renderContentAsHtml: true })), this.item.rateplan.guarantee && (h("ir-label", { key: '4faa0dfb205e0f4431e7f55c4623260874ce7e58', labelText: `${locales.entries.Lcz_Guarantee}:`, content: this.item.rateplan.guarantee || '', renderContentAsHtml: true })))))), h("ir-modal", { key: '299b6fad2bc06460921065ddf79249d0b131a3f0', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalReason === 'delete' ? 'danger' : 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.renderModalMessage() })));
    }
    get element() { return this; }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
    static get style() { return IrRoomStyle0; }
}, [2, "ir-room", {
        "bookingEvent": [16],
        "bookingIndex": [2, "booking-index"],
        "isEditable": [4, "is-editable"],
        "mealCodeName": [1, "meal-code-name"],
        "myRoomTypeFoodCat": [1, "my-room-type-food-cat"],
        "currency": [1],
        "language": [1],
        "legendData": [8, "legend-data"],
        "roomsInfo": [8, "rooms-info"],
        "bedPreferences": [16],
        "hasRoomEdit": [4, "has-room-edit"],
        "hasRoomDelete": [4, "has-room-delete"],
        "hasRoomAdd": [4, "has-room-add"],
        "hasCheckIn": [4, "has-check-in"],
        "hasCheckOut": [4, "has-check-out"],
        "collapsed": [32],
        "item": [32],
        "isLoading": [32],
        "modalReason": [32]
    }, [[0, "clickHandler", "handleClick"]], {
        "bookingEvent": ["handleBookingEventChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room", "ir-button", "ir-date-view", "ir-icons", "ir-label", "ir-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoom);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRoom as I, defineCustomElement as d };

//# sourceMappingURL=ir-room2.js.map