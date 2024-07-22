import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { _ as _formatAmount, c as _getDay } from './functions.js';
import { f as formatName } from './booking.js';
import { a as axios } from './axios.js';
import { c as calendar_data } from './calendar-data.js';
import { c as colorVariants, d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.2rem 0.3rem;border-radius:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = /*@__PURE__*/ proxyCustomElement(class IrRoom extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
            this.deleteFinished.emit(this.item.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        console.log(this.item);
        return (h(Host, { key: '1293934a8148cca0c6319cb6cb684f9af8107cd1', class: "p-1 d-flex m-0" }, h("ir-button", { key: '30d5378adac31e02ed5120e5e73500263bf56ee8', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${this.item.identifier.split(' ').join('')}`, "aria-expanded": "false", "aria-controls": "collapseExample", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: '8b45130f148ce9710eb6b32e3a58286c1317d7b6', class: "flex-fill m-0 " }, h("div", { key: '1d9ad1cc79baaba2053a6e9100637f89a6b2b8e7', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: 'e2e25533fa3abf403a2168f35bc2f8665336c3b5', class: "m-0 p-0" }, h("strong", { key: 'e3d12cf0a549393e6f4101456c8eafd8a2ebb227', class: "m-0 p-0" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.item.rateplan.is_non_refundable && ` - ${this.defaultTexts.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '0c75d5daf96fb20761443809f4bca94006027a69', class: "d-flex m-0 p-0 align-items-center" }, h("span", { key: 'a1200589982cac692f03ac66840faafd7efa6928', class: "p-0 m-0 ml-1 font-weight-bold" }, _formatAmount(this.item['gross_total'], this.currency)), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: '629ff36f83ffb6b77f49ce15f2fd519ce197342e', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit", class: "mx-1", style: colorVariants.secondary, onClickHanlder: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: '0efdc2307e19b3e6eb0e0ed5dc68b63827684f1c', variant: "icon", onClickHanlder: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: '36c683b5db1e1b0f514146ffc9c32e242389fe0a', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: '8a115e81d5265c3a8bf05517082c076d1d57de45', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), calendar_data.is_frontdesk_enabled && this.item.unit && h("span", { key: '20a3638092524aa9acc5fcfc168db0524e824a63', class: "light-blue-bg mr-2 " }, this.item.unit.name), this.hasCheckIn && h("ir-button", { key: '0b99d0ee7d0befa4f379b6df080dcb12886619b6', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && h("ir-button", { key: 'bfadfc8c0d1024ec70f34b2d4711f6237ae5d87b', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), h("div", { key: '58b0d12e7c2f69df8d59f5f3785a7d81aa1e94fb' }, h("span", { key: '46b4ae1225fc9e4cc39a84e2dc228342a6c0aa15', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && h("span", { key: '73ce24bef66255d8d3f9002debbbf61c67b6974b' }, " ", this.item.rateplan.selected_variation.adult_child_offering)), h("div", { key: '7bc9e5b1593d18b74d3da26f9ae126f501d4e417', class: "collapse", id: `roomCollapse-${this.item.identifier.split(' ').join('')}` }, h("div", { key: 'd9468fe45ac5bbfe73a906280be1b3758a07faa4', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '1a662e4a633970e5fe3556521cece42f677d0f09', class: " sm-padding-top" }, h("strong", { key: '61b24bed501da0e0fee2a49df2e1a5b10ff12a9e', class: "sm-padding-right" }, `${this.defaultTexts.entries.Lcz_Breakdown}:`)), h("div", { key: '2955d80af1a2b3be9fe9abc27f859f29a8879150', class: 'flex-fill' }, h("table", { key: 'e47725df8691ac4d2e8557235e361528681905c5' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, _formatAmount(item.amount, this.currency)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, _formatAmount(item.cost, this.currency))));
            }), h("tr", { key: '0fd5b6dbf491730359f1cefc12b43698b6e941d3' }, h("th", { key: '71733277d96ac49fb0a0a36594d5e0e87b8b144c', class: "text-right pr-2" }, this.defaultTexts.entries.Lcz_SubTotal), h("th", { key: 'a26fd2f347c776a1197a807aba0189429f25a891', class: "text-right" }, _formatAmount(this.item.total, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: '61a0d746482d4ac15f052a55632d08010a7d3642', class: "pl-2 text-right night-cost" }, _formatAmount(this.item.cost, this.currency))), this.bookingEvent.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, _formatAmount((this.item.total * d.pct) / 100, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, _formatAmount((this.item.cost * d.pct) / 100, this.currency)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("div", { key: '0dac6fa7bf11cd8a0b1427db9e9e0c768ef98586', class: "sm-mb-1", innerHTML: this.item.rateplan.cancelation || '' }), h("div", { key: '65c4a0fda392c5388a88466d22d16e0178c37aa7', class: "sm-mb-1", innerHTML: this.item.rateplan.guarantee || '' }), h("ir-label", { key: '2010e9add855401d5503de9bca6026077f93fbae', label: `${this.defaultTexts.entries.Lcz_MealPlan}:`, value: this.mealCodeName }))), h("ir-modal", { key: '192bed2a7780afb58a063c2dbc77119ee789b528', onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.defaultTexts.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: `${this.defaultTexts.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${this.defaultTexts.entries.Lcz_FromThisBooking}` })));
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
        "legendData": [8, "legend-data"],
        "roomsInfo": [8, "rooms-info"],
        "defaultTexts": [16],
        "ticket": [8],
        "hasRoomEdit": [4, "has-room-edit"],
        "hasRoomDelete": [4, "has-room-delete"],
        "hasRoomAdd": [4, "has-room-add"],
        "hasCheckIn": [4, "has-check-in"],
        "hasCheckOut": [4, "has-check-out"],
        "collapsed": [32],
        "item": [32],
        "isLoading": [32],
        "isModelOpen": [32]
    }, [[0, "clickHanlder", "handleClick"]], {
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