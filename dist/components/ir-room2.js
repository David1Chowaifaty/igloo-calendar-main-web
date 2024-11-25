import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { b as _getDay } from './functions.js';
import { f as formatName } from './booking.js';
import { a as axios } from './axios.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { c as colorVariants, d as defineCustomElement$3 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.3rem 0.5rem;border-radius:5px}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
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
            PICKUP_INFO: this.bookingEvent.pickup_info,
            booking: this.bookingEvent,
            currentRoomType: this.item,
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
            const { data } = await axios.post(`/DoReservation`, body);
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
    // private formatVariation({ adult_nbr, child_nbr, infant_nbr }: IVariations) {
    //   const adultLabel = adult_nbr > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
    //   const childLabel = child_nbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
    //   const infantLabel = infant_nbr > 1 ? 'infants' : 'infant';
    //   const parts = [`${adult_nbr} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infant_nbr ? `${infant_nbr} ${infantLabel}` : ''];
    //   return parts.filter(Boolean).join(' ');
    // }
    formatVariation({ adult_nbr, child_nbr }, { infant_nbr }) {
        // Adjust child number based on infants
        const adjustedChildNbr = child_nbr ? Math.max(child_nbr - infant_nbr, 0) : 0;
        // Define labels based on singular/plural rules
        const adultLabel = adult_nbr > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = adjustedChildNbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infant_nbr > 1 ? locales.entries.Lcz_Infants.toLowerCase() : locales.entries.Lcz_Infant.toLowerCase();
        // Construct parts with the updated child number
        const parts = [`${adult_nbr} ${adultLabel}`, adjustedChildNbr ? `${adjustedChildNbr} ${childLabel}` : '', infant_nbr ? `${infant_nbr} ${infantLabel}` : ''];
        // Join non-empty parts with spaces
        return parts.filter(Boolean).join(' ');
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '6daef87dc48702802569b1256c49afcf86b56bfa', class: "p-1 d-flex m-0" }, h("ir-button", { key: '628f2695e46242cb369b71bb8a9fcecf91d807f4', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: 'bb8403753141802a853ef361f05c5ff180231dc7', class: "flex-fill m-0 " }, h("div", { key: '5e01c8e73f27dc55ab1f0b498cedcc023cc2ac6b', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: '1c9a4b88ad2cea7193979c87590b1ceebff57aaa', class: "m-0 p-0" }, h("strong", { key: 'f674672b0b05a3489e61c8ecfa6f4d565491d7e3', class: "m-0 p-0" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.item.rateplan.is_non_refundable && ` - ${this.defaultTexts.entries.Lcz_NonRefundable}`, ' '), h("div", { key: 'fa0fd083b587ed0f569e382fa25bc8da773ae277', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: '8feb23076a4347be75e0f4bb75455ef27f3c2874', class: "p-0 m-0 font-weight-bold" }, formatAmount(this.currency, this.item['gross_total'])), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: '8f873407ea5bb72b691bd1bc542d065572708bb7', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHanlder: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: '976d4287a4df8b7703999d57095cab985b138c67', variant: "icon", onClickHanlder: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: '8d3435fb0aae86665eb8699e7c2e6fa93d8f8844', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: '565e2912048c77fefcef9f9a7c93d78811f959ee', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && h("ir-button", { key: '5ae9e30193e18fe0e7b6ec5d95d0565b4a099f54', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && h("ir-button", { key: 'f20f6902451959ce40d3cfcc6b93189cf9f3a95b', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), h("div", { key: '06ed6f836085ecbf7537de416d9822201582a41d', class: 'd-flex justify-content-end' }, calendar_data.is_frontdesk_enabled && this.item.unit && (h("span", { key: '916ab75a9f29e7603f2b9f983c07b02287a67a9a', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), h("div", { key: 'a5bfe1c1ee01f7198017e436765dc687d535ea07' }, h("span", { key: '03accd07b440eaf666104fd2b2cadabb255632e5', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && h("span", { key: '17269d3a5d775af68423c36fec467350fb6a2b86' }, " ", this.formatVariation(this.item.rateplan.selected_variation, this.item.occupancy))), h("div", { key: '97fbeec16555e1148431d7416df4a396c6ce6174', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, h("div", { key: '11bd0031f44c55e2c1ed831e7aa8216ac4ae009e', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '1095ec4d230f6f597d2bcac921f9c7d043a45ea4', class: " sm-padding-top" }, h("strong", { key: '4c1e417fde2f0fa449f3bb70a9f7a9ee057cd161', class: "sm-padding-right" }, `${this.defaultTexts.entries.Lcz_Breakdown}:`)), h("div", { key: '71bd5f1cacd70d0998aad5b14f6502cebfba3759', class: 'flex-fill' }, h("table", { key: 'f5e80d44b11ca19cf8e28510cb5501c752840fac' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, formatAmount(this.currency, item.amount)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, item.cost))));
            }), h("tr", { key: '9657605da691491bd95f8fad4e9edf937b1bb746', class: '' }, h("th", { key: 'b31f26fe1dfaa71d1012d8fdb8bbded355b22abc', class: "text-right pr-2 subtotal_row" }, this.defaultTexts.entries.Lcz_SubTotal), h("th", { key: '47ab258a9f0937e2155b645bac2e156258c36d12', class: "text-right subtotal_row" }, formatAmount(this.currency, this.item.total)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: 'db7c642c3b4bdffbb9ef1fb39f09e93bbb1a0137', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.item.cost))), this.bookingEvent.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.item.total * d.pct) / 100)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.item.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), this.item.rateplan.cancelation && (
        // <div class="sm-mb-1 room_statements">
        //   <span>
        //     <b>
        //       <u>{this.defaultTexts.entries.Lcz_Cancellation}: </u>
        //     </b>
        //   </span>
        //   <span>
        //     njfsdnfjsfsdfdsfnijsnfijnfjsnfjsdnfjsnfkjsdnfjksdnfkjsdnfjksnfjksfnkjsdnfjksfnjksdnfjksdnfjsdnfjksnfjksdnfkjsdnfjksnfjksddnfjksnfjksddnfjsdnfjksf js
        //     jnjnsjnfjksfnjsdfnjdskfnsddjfnsifnj
        //   </span>
        // </div>
        h("div", { key: '4b2f44079a93c0d02aed29b2636cec0deaad5813', class: "room_statements" }, h("span", { key: '0cf0645db7ad8289b32c04d25d6bd96b6e43fb9a' }, h("b", { key: 'b42ea6f1e32f04d16b9305866ade673adc4f4c56' }, this.defaultTexts.entries.Lcz_Cancellation, ":"), h("span", { key: 'ccb3ef64d3ca5bf00570ef2ca8324c1e0f71e776', innerHTML: this.item.rateplan.cancelation || '' })))), this.item.rateplan.guarantee && (h("div", { key: '68d160ff5b9705d3d81e0b7af25e60fddfa7eb00', class: "sm-mb-1" }, h("span", { key: 'b24f6e4a4ea56c278f524ecff75705d6ea588867' }, h("b", { key: '75676201321ceb534663696eb18e43249604c0ad' }, this.defaultTexts.entries.Lcz_Guarantee, ": "), h("span", { key: '5a9a99262a3904bbfd2a5a87345ddf0ccf907324', innerHTML: this.item.rateplan.guarantee || '' })))), this.bookingEvent.is_direct && h("ir-label", { key: 'f58d43ba734fe17db43e4c22e843dd06724efbfe', label: `${this.defaultTexts.entries.Lcz_MealPlan}:`, value: this.mealCodeName }))), h("ir-modal", { key: '371a340688b5146932f8828f4f59a59fab1a07fe', autoClose: false, ref: el => (this.irModalRef = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.defaultTexts.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: `${this.defaultTexts.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${this.defaultTexts.entries.Lcz_FromThisBooking}` })));
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