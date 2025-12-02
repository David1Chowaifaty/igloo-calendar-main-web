import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { b as _getDay } from './functions.js';
import { z as formatName, f as formatAmount } from './utils.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data, i as isSingleUnit } from './calendar-data.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-label2.js';
import { d as defineCustomElement$2 } from './ir-modal2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__price-row.sc-ir-room{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__actions.sc-ir-room{display:flex;align-items:center}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room::part(content){width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header){align-items:flex-start}.booking-room__price.sc-ir-room{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = /*@__PURE__*/ proxyCustomElement(class IrRoom extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.deleteFinished = createEvent(this, "deleteFinished", 7);
        this.toast = createEvent(this, "toast", 7);
        this.pressCheckIn = createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = createEvent(this, "pressCheckOut", 7);
        this.editInitiated = createEvent(this, "editInitiated", 7);
        this.resetbooking = createEvent(this, "resetbooking", 7);
        this.openSidebar = createEvent(this, "openSidebar", 7);
    }
    get element() { return this; }
    // Room Data
    booking;
    bookingIndex;
    isEditable;
    room;
    property_id;
    includeDepartureTime;
    // Meal Code names
    mealCodeName;
    myRoomTypeFoodCat;
    // Currency
    currency = 'USD';
    language = 'en';
    legendData;
    roomsInfo;
    bedPreferences;
    departureTime;
    // Booleans Conditions
    hasRoomEdit = false;
    hasRoomDelete = false;
    hasRoomAdd = false;
    hasCheckIn = false;
    hasCheckOut = false;
    collapsed = true;
    isLoading = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    // Event Emitters
    deleteFinished;
    toast;
    pressCheckIn;
    pressCheckOut;
    editInitiated;
    resetbooking;
    openSidebar;
    modal;
    bookingService = new BookingService();
    componentWillLoad() {
        this.mainGuest = this.getMainGuest();
    }
    // In your class
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.room);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.room);
        }
    }
    handleRoomDataChange() {
        this.mainGuest = this.getMainGuest();
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    handleEditClick() {
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.room['assigned_units_pool'],
            NAME: formatName(this.mainGuest?.first_name, this.mainGuest?.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${locales.entries.Lcz_EditBookingFor} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
            defaultDateRange: {
                dateDifference: this.room.days.length,
                fromDate: new Date(this.room.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.room.from_date + 'T00:00:00')),
                toDate: new Date(this.room.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.room.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.room.bed_preference,
            adult_child_offering: this.room.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.room.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.booking.arrival,
            ARRIVAL_TIME: this.booking.arrival.description,
            BOOKING_NUMBER: this.booking.booking_nbr,
            cancelation: this.room.rateplan.cancelation,
            channel_booking_nbr: this.booking.channel_booking_nbr,
            CHILDREN_COUNT: this.room.rateplan.selected_variation.child_nbr,
            COUNTRY: this.booking.guest.country_id,
            ENTRY_DATE: this.booking.from_date,
            FROM_DATE_STR: this.booking.format.from_date,
            guarantee: this.room.rateplan.guarantee,
            GUEST: this.mainGuest,
            IDENTIFIER: this.room.identifier,
            is_direct: this.booking.is_direct,
            IS_EDITABLE: this.booking.is_editable,
            NO_OF_DAYS: this.room.days.length,
            NOTES: this.booking.remark,
            origin: this.booking.origin,
            POOL: this.room['assigned_units_pool'],
            PR_ID: this.room.unit?.id,
            RATE: this.room.total,
            RATE_PLAN: this.room.rateplan.name,
            RATE_PLAN_ID: this.room.rateplan.id,
            RATE_TYPE: this.room.roomtype.id,
            ROOMS: this.booking.rooms,
            SOURCE: this.booking.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.booking.format.to_date,
            TOTAL_PRICE: this.booking.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: this.room.unit?.name || '',
            PICKUP_INFO: this.booking.pickup_info,
            booking: this.booking,
            currentRoomType: this.room,
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
                        booking_nbr: this.booking.booking_nbr,
                        room_identifier: this.room.identifier,
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
        let oldRooms = [...this.booking.rooms];
        oldRooms = oldRooms.filter(room => room.identifier !== this.room.identifier);
        const body = {
            assign_units: true,
            check_in: true,
            is_pms: true,
            is_direct: true,
            booking: {
                booking_nbr: this.booking.booking_nbr,
                from_date: this.booking.from_date,
                to_date: this.booking.to_date,
                remark: this.booking.remark,
                property: this.booking.property,
                source: this.booking.source,
                currency: this.booking.currency,
                arrival: this.booking.arrival,
                guest: this.booking.guest,
                rooms: oldRooms,
            },
            extras: this.booking.extras,
            pickup_info: this.booking.pickup_info,
        };
        await this.bookingService.doReservation(body);
        this.deleteFinished.emit(this.room.identifier);
    }
    async updateDepartureTime(code) {
        try {
            await this.bookingService.setDepartureTime({
                property_id: this.property_id,
                code,
                room_identifier: this.room.identifier,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = childCount > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantCount > 1 ? locales.entries.Lcz_Infants.toLowerCase() : locales.entries.Lcz_Infant.toLowerCase();
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
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    getSmokingLabel() {
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
            if (currRT) {
                const smoking_option = currRT['smoking_option']?.allowed_smoking_options;
                if (smoking_option) {
                    return smoking_option.find(s => s.code === this.room.smoking_option)?.description;
                }
                return null;
            }
            return null;
        }
        return this.room.ota_meta?.smoking_preferences;
    }
    getBedName() {
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => p.CODE_NAME === this.room?.bed_preference?.toString());
            if (!bed) {
                return;
            }
            return bed[`CODE_VALUE_${this.language}`] ?? bed.CODE_VALUE_EN;
        }
        return this.room.ota_meta?.bed_preferences;
    }
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}`;
            case 'checkin':
                return `Are you sure you want to Check In this unit?
`;
            case 'checkout':
                return `Are you sure you want to Check Out this unit?`;
            default:
                return '';
        }
    }
    handleCheckIn() {
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        if (this.room.sharing_persons.length < adult_nbr + children_nbr + infant_nbr) {
            return this.showGuestModal();
        }
        return this.renderModalMessage();
    }
    getMainGuest() {
        return this.room.sharing_persons?.find(p => p.is_main);
    }
    render() {
        const bed = this.getBedName();
        return (h(Host, { key: 'ca2b90b7fd26abf2f78f1f9165aa5609dde37122' }, h("div", { key: '4c3ec7a4f33a35cba1c4471122888bca87acffb9', class: "d-flex m-0", style: { gap: 'var(--spacing)' } }, h("button", { key: 'cb592d2de6ee02d11b5a83cd919e5589f93ebe58', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '8d41a439524c165f0cd99208f38af54f1d02b88b', name: "chevron-right" })), h("div", { key: '93b9772f222ec93bd010169fd1743c620b7fb419', style: { width: '100%', cursor: 'default' } }, h("div", { key: '4718161bf9664765d72dbcbf67e238496a281859',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("div", { key: '5610d8f2db092a9cb21d89ac03bf73a0fda180b2', class: "d-flex align-items-center justify-content-between" }, h("p", { key: '6ef956774634fc5d8c8ce6a39005bb5de1e0d86b', class: "m-0 p-0" }, h("span", { key: '52c47abc1628c177a926205d03fecdabe2831b33', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.room.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: 'd010ca5ae7d754db2d274e6da48696866cfa4478', class: "booking-room__price-row" }, h("span", { key: '5915561a9c338752126efcd18f911f760025dd7e', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), h("div", { key: '9e0b92e61adec1d79cf19d19a8b66295ab89094f', class: "booking-room__actions" }, this.hasRoomEdit && this.isEditable && (h(Fragment, { key: 'dc37995cb2bc1d95386adec8a9e58dc56d4f71a9' }, h("wa-tooltip", { key: '057308fd15c889d9b4da4c45e1c9b4d30d9358d8', for: `edit-room-${this.room.identifier}` }, "Edit ", this.room.roomtype.name), h("ir-custom-button", { key: '8dc87487148480ddcd80415366057af5f96edb85', iconBtn: true, id: `edit-room-${this.room.identifier}`, class: "booking-room__edit-button", onClickHandler: this.handleEditClick.bind(this), variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '70f3494ca38bb300463a435a3443298bf1f5927e', label: "Edit room", class: "booking-room__edit-icon", name: "edit", style: { fontSize: '1rem' } })))), this.hasRoomDelete && this.isEditable && (h(Fragment, { key: '1add3d3a72aa37a4f174f9e1a9ff435b0ab83ed4' }, h("wa-tooltip", { key: '9b73ebc08dfa2b7f8e309e834773bd220c36aaaa', for: `delete-room-${this.room.identifier}` }, "Delete ", this.room.roomtype.name), h("ir-custom-button", { key: 'ccd2fd3ae2b7e7ae8502e3b52b6c1b2d77741a2b', iconBtn: true, id: `delete-room-${this.room.identifier}`, class: "booking-room__delete-button", onClickHandler: this.openModal.bind(this, 'delete'), variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '68e5513b8383c4daa8297242b540cce4517f9a8d', label: "Delete room", class: "booking-room__delete-icon", name: "trash-can", style: { fontSize: '1rem' } }))))))), h("div", { key: '63c6f5e95a2db082e966510b19a97b9014a54e34', class: "d-flex align-items-center" }, h("ir-date-view", { key: '2fd1d64e379cbfbb37060698a714a7f490b19cd6', class: "mr-1  flex-grow-1", style: { width: 'fit-content' }, from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && (
        // <div class={'d-flex justify-content-center align-items-center'}>
        //   <ir-tooltip message={(this.room.unit as IUnit).name} customSlot>
        //     <span slot="tooltip-trigger" class={`light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} `}>
        //       {(this.room.unit as IUnit).name}
        //     </span>
        //   </ir-tooltip>
        // </div>
        h("ir-unit-tag", { key: 'a311456f50f2f9a4b5a3b0b07168932ba41c1c70', unit: this.room.unit.name })), this.hasCheckIn && (h("ir-custom-button", { key: 'cf69cae65eb249dcf5a4a1bc4bc221b0a770635a', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", appearance: "outlined", variant: "brand" }, locales.entries.Lcz_CheckIn)), this.hasCheckOut && (h("ir-custom-button", { key: '8385e1fbb2e7b655a31712b0566f4702ef37ee12', appearance: "outlined", variant: "brand", onClickHandler: this.openModal.bind(this, 'checkout'), id: "checkout" }, locales.entries.Lcz_CheckOut))), h("div", { key: 'cefe290871be8223e7713db05371e4ed10f92946', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '2c95d3085038708500d60a3f740aa52548caa2fe', class: "m-0 p-0" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (
            // <ir-tooltip message={'View guests'} class="m-0 p-0" customSlot>
            //   <ir-button
            //     class="m-0 p-0"
            //     slot="tooltip-trigger"
            //     btn_color="link"
            //     renderContentAsHtml
            //     onClickHandler={() => this.showGuestModal()}
            //     size="sm"
            //     btnStyle={{ width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' }}
            //     text={this.formatVariation(this.room.occupancy)}
            //   ></ir-button>
            // </ir-tooltip>
            h(Fragment, null, h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), h("ir-custom-button", { link: true, onClickHandler: () => this.showGuestModal(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && h("p", { key: 'fda20d2422a496e8136cc392ef32c8a4502dba74', class: "m-0 p-0" }, "(", bed, ")")), this.includeDepartureTime && (h("div", { key: '49878e05f3813eab8806f7d24cdcae1cec14f02f', class: "d-flex align-items-center", style: { marginTop: '0.5rem', marginBottom: '0.875rem', gap: '0.5rem' } }, h("p", { key: 'eeff9abc51a4fcb9549aaf5942f1d3b7a8e57ad6', class: "m-0 p-0" }, "Expected departure time:"), h("wa-select", { key: '773cf8c7bbaf9c6b71eb863af8ce2bce0655a629', onchange: e => {
                this.updateDepartureTime(e.target.value);
            }, style: { width: '140px' }, size: "small", placeholder: "Not provided", value: this.room.departure_time?.code, defaultValue: this.room.departure_time?.code }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`]))))))), !this.collapsed && (h("div", { key: 'f56ad6106f6ef856b78063b2db22a6a0a1cc1b1e', class: "booking-room__details-container" }, h("div", { key: '45dc847c1e69dedc87104ddc622b8ca58c5a38ce', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '6283f8f8705a5116980ede808fd286abdc451075', class: " sm-padding-top" }, h("p", { key: '8bb7b673b2a6b13ca0ef2a0ac6290260633f6863', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: 'f3217cfcc25eec1579a4f62e02b44490d9bbbe17', class: 'flex-fill' }, h("table", { key: '7152c2471e9350f05cc83846c05a3bf799064e32' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(room.date)), h("td", { class: "text-right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, room.cost))));
            }), h("tr", { key: '32e6131dae0b8928feefe7e010e6b51da9842e52', class: '' }, h("th", { key: '3b4b7f6272dc000c3ec134a212c293493dbcd2fe', class: "text-right pr-2 subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: 'f02290a29075bf2f650b25349dffa50b2e07c387', class: "text-right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && h("th", { key: 'df4b4c38f40ee7007806d30de787d40b3f0c210c', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.room.cost))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.room.total * d.pct) / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: 'd167acfe59bec2abc9a8a83d034bd0fa69e6d16c', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: '1fe652afe5398573c6b15842e0b8f2564e57232d' }, this.room.rateplan.cancelation && (h("ir-label", { key: 'a68f823acc35e2048a1bc59571a0b31a1a9b450c', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '8306d15ce0042efd8a60e2b4bd31b9bb14289317', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: '3c28fee5c58d8b6a261e254c474032e0bdc54af7' }, h("ir-label", { key: 'fd2372ea87f10e90038d78642cbb149e7857021d', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: 'ceb6673688edf63482276064156211369ec53133', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))))), h("ir-modal", { key: 'cb8197bc593f9e408edd5e5f87d1c71df22a8fe8', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalReason === 'delete' ? 'danger' : 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.renderModalMessage() })));
    }
    showGuestModal() {
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: this.room.unit?.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                checkin: this.hasCheckIn,
                identifier: this.room.identifier,
            },
        });
    }
    static get watchers() { return {
        "room": ["handleRoomDataChange"]
    }; }
    static get style() { return IrRoomStyle0; }
}, [2, "ir-room", {
        "booking": [16],
        "bookingIndex": [2, "booking-index"],
        "isEditable": [4, "is-editable"],
        "room": [16],
        "property_id": [2],
        "includeDepartureTime": [4, "include-departure-time"],
        "mealCodeName": [1, "meal-code-name"],
        "myRoomTypeFoodCat": [1, "my-room-type-food-cat"],
        "currency": [1],
        "language": [1],
        "legendData": [8, "legend-data"],
        "roomsInfo": [8, "rooms-info"],
        "bedPreferences": [16],
        "departureTime": [16],
        "hasRoomEdit": [4, "has-room-edit"],
        "hasRoomDelete": [4, "has-room-delete"],
        "hasRoomAdd": [4, "has-room-add"],
        "hasCheckIn": [4, "has-check-in"],
        "hasCheckOut": [4, "has-check-out"],
        "collapsed": [32],
        "isLoading": [32],
        "modalReason": [32],
        "mainGuest": [32],
        "isModelOpen": [32]
    }, [[0, "clickHandler", "handleClick"]], {
        "room": ["handleRoomDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room", "ir-button", "ir-custom-button", "ir-date-view", "ir-icons", "ir-label", "ir-modal", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoom);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRoom as I, defineCustomElement as d };

//# sourceMappingURL=ir-room2.js.map