import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { i as isAgentMode, b as _getDay } from './functions.js';
import { i as formatName } from './booking.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data, i as isSingleUnit } from './calendar-data.js';
import { f as formatAmount } from './utils.js';
import { B as BookingService } from './booking.store.js';
import { d as defineCustomElement$n } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$m } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$l } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$k } from './ir-booking-company-form2.js';
import { d as defineCustomElement$j } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$i } from './ir-custom-button2.js';
import { d as defineCustomElement$h } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$g } from './ir-date-view2.js';
import { d as defineCustomElement$f } from './ir-dialog2.js';
import { d as defineCustomElement$e } from './ir-drawer2.js';
import { d as defineCustomElement$d } from './ir-empty-state2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-invoice2.js';
import { d as defineCustomElement$a } from './ir-invoice-form2.js';
import { d as defineCustomElement$9 } from './ir-label2.js';
import { d as defineCustomElement$8 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$7 } from './ir-print-room2.js';
import { d as defineCustomElement$6 } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$5 } from './ir-printing-label2.js';
import { d as defineCustomElement$4 } from './ir-printing-pickup2.js';
import { d as defineCustomElement$3 } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}*.sc-ir-room-h{box-sizing:border-box}.booking-room__collapse-btn.sc-ir-room{all:unset;display:inline-flex;align-items:center;align-self:flex-start;height:fit-content;border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));aspect-ratio:1;cursor:pointer;transition:rotate var(--wa-transition-normal) var(--wa-transition-easing)}.booking-room__collapse-btn[data-state='opened'].sc-ir-room{rotate:90deg}.booking-room__collapse-btn[data-state='opened'].sc-ir-room:dir(rtl){rotate:-90deg}.booking-room__collapse-btn.sc-ir-room:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}.booking-room__header-row.sc-ir-room{display:flex;gap:var(--wa-space-sm, 0.5rem);margin:0}.booking-room__price-row.sc-ir-room{display:flex;align-items:center;gap:var(--wa-space-xs)}.booking-room__summary-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--wa-space-xs, 0.25rem)}.booking-room__summary-text.sc-ir-room,.booking-room__text-reset.sc-ir-room{margin:0;padding:0}.booking-room__summary-highlight.sc-ir-room{font-weight:600}.booking-room__dates-row.sc-ir-room{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs, 0.25rem);align-items:center}.booking-room__date-view.sc-ir-room{flex:1 1 150px;min-width:140px;width:fit-content}.booking-room__guest-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__guest-name.sc-ir-room{font-weight:600}.booking-room__bed-info.sc-ir-room{color:var(--wa-color-neutral-700)}.booking-room__departure-row.sc-ir-room{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.booking-room__departure-label.sc-ir-room{font-weight:500}.booking-room_summary.sc-ir-room{display:grid;gap:0.5rem}.booking-room__actions.sc-ir-room{display:flex;align-items:center}.booking-room__breakdown-row.sc-ir-room{display:flex;flex-direction:column;gap:0.5rem;margin:0.5rem 0}@media (min-width: 640px){.booking-room__breakdown-row.sc-ir-room{flex-direction:row;align-items:flex-start}}.booking-room__breakdown-label-wrapper.sc-ir-room{flex:0 0 auto;padding-top:0.25rem}.booking-room__breakdown-label.sc-ir-room{margin:0;padding-right:0.5rem;font-weight:600;white-space:nowrap}.booking-room__breakdown-table.sc-ir-room{flex:1 1 auto;overflow-x:auto}.booking-room__cell.sc-ir-room{padding:0.125rem 0;line-height:1.3;white-space:nowrap}.booking-room__cell--right.sc-ir-room{text-align:right}.booking-room__cell--left.sc-ir-room{text-align:left}.booking-room__cell--pad-right.sc-ir-room{padding-right:0.5rem}.booking-room__cell--pad-left.sc-ir-room{padding-left:0.5rem}.booking-room__details.sc-ir-room,.booking-room__details.sc-ir-room::part(base),.booking-room__details.sc-ir-room::part(header),.booking-room__details.sc-ir-room::part(content){width:100%;box-sizing:border-box;padding:0}.booking-room__details.sc-ir-room::part(header){align-items:flex-start}.booking-room__price.sc-ir-room{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right}";
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
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
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
    isToggling = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    isOpen = false;
    // Event Emitters
    deleteFinished;
    toast;
    pressCheckIn;
    pressCheckOut;
    editInitiated;
    resetBookingEvt;
    openSidebar;
    modal;
    toggleDialogRef;
    bookingService = new BookingService();
    dialogRef;
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
                    this.resetBookingEvt.emit();
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
            agent: this.booking.agent,
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
    async toggleRoomAgent() {
        try {
            this.isToggling = true;
            const updatedRooms = this.booking.rooms.map(r => (r.identifier === this.room.identifier ? { ...r, agent: r.agent ? null : this.booking.agent } : r));
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                agent: this.booking.agent,
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
                    rooms: updatedRooms,
                },
                extras: this.booking.extras,
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(body);
            this.resetBookingEvt.emit(null);
            this.toggleDialogRef.closeModal();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isToggling = false;
        }
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
    render() {
        const bed = this.getBedName();
        return (h(Host, { key: 'b0d136eee7e9121075d8b24a7381855e8436642c' }, h("div", { key: '71b26b7e5e13d4151d04eec1551abeba0e73ea80', class: "booking-room__header-row" }, h("button", { key: '36f48ec2d08f2e53cf4ed51ab85420bca129fce1', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'a43521ba69938d12fd5dc932e98ee84c4ac71478', name: "chevron-right" })), h("div", { key: '475db70fb27983883dd75edd135027e879048b9c', style: { width: '100%', cursor: 'default' } }, h("div", { key: '2d0f5f9ab044e284c3bcc450725d6c73198e569a',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("div", { key: '3c00b267114c9632d5fe8bbd91b91a87fe588d04', class: "booking-room__summary-row" }, h("p", { key: 'bca9816aa87e36b34e25f197af506f9b76ba8a3d', class: "booking-room__summary-text" }, h("span", { key: 'df19f41220505c42266ff34e7c4a558762404f6b', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: 'e65f969271a1dffabf76b3f2365ff78c184c0244', class: "booking-room__price-row" }, h("span", { key: 'bb06e22aefb3675f998a431c43225e2900f7612d', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete) && (h("div", { key: 'd16c5f35e90f55e9db33758a98214f12f5dc05f4', class: "booking-room__actions" }, h("wa-dropdown", { key: '187a7a30ee5d757dad24ab5d64470fa6d06d0ed0', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.handleEditClick();
                        break;
                    case 'delete':
                        this.openModal('delete');
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, h("ir-custom-button", { key: 'ab6b1f6b041ec13664a4d3752165385fec118dda', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '83fc4238629d70d22e46ba34a4d1173aae941343', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '5760679aa6976c9ea85c2f80c6c217c8e6af22c8', value: "edit" }, "Edit"), isAgentMode(this.booking) && h("wa-dropdown-item", { key: 'c933eda9ae8be388babf32dc52a4d6a873e70a47', value: "toggle" }, "Re-assign ", this.room.agent ? 'guest' : 'agent', " folio"), this.hasRoomDelete && (h("wa-dropdown-item", { key: 'bc8a0cac9592b47f453eb5a2ccdd14b27d97e658', value: "delete", variant: "danger" }, "Delete"))))))), h("div", { key: 'c52d5bdbb764ad28a3bd173e9db28b4fc3014be3', class: "booking-room__dates-row" }, h("ir-date-view", { key: 'f5ae5c43b59229681dc33b3677c1a992ab33e466', format: 'ddd, MMM DD, YYYY', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && (
        // <div class={'d-flex justify-content-center align-items-center'}>
        //   <ir-tooltip message={(this.room.unit as IUnit).name} customSlot>
        //     <span slot="tooltip-trigger" class={`light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} `}>
        //       {(this.room.unit as IUnit).name}
        //     </span>
        //   </ir-tooltip>
        // </div>
        h("ir-unit-tag", { key: 'a8489ddfeb3f49d604fca1451d58576058ab1e2c', unit: this.room.unit.name })), this.hasCheckIn && (h("ir-custom-button", { key: 'e2f61ca77c9a1eb65de1595a39c619ce82508fe8', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", appearance: "outlined", variant: "brand" }, locales.entries.Lcz_CheckIn)), this.hasCheckOut && (h("ir-custom-button", { key: 'f8498678ed6df2d1674ed70d909975f901dc1316', appearance: "outlined", variant: "brand", onClickHandler: () => {
                this.modalReason = 'checkout';
            }, id: "checkout" }, locales.entries.Lcz_CheckOut))), h("div", { key: 'd2f0320085ec5b58d9dd83a61420c7f65d352c56', class: "booking-room__guest-row" }, h("p", { key: 'ea32d6f36af1169d363bc78e66f1e7c2fd0decef', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (h(Fragment, null, h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), h("ir-custom-button", { link: true, onClickHandler: () => this.showGuestModal(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && h("p", { key: '7a97a066933679bf07d262ad9ac23c577acca0c7', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), this.includeDepartureTime && (h("div", { key: 'edaca66b9b810c9447c3722574b7152738b6e737', class: "booking-room__departure-row" }, h("p", { key: 'f0d932911c9d82a8e9edacf08d05d1b9fc5ba74f', class: "booking-room__text-reset booking-room__departure-label" }, "Expected departure time:"), h("wa-select", { key: '40dace58d20acf9be42fe0bfad273ef2b0c3496e', onchange: e => {
                this.updateDepartureTime(e.target.value);
            }, style: { width: '140px' }, size: "small", placeholder: "Not provided", value: this.room.departure_time?.code, defaultValue: this.room.departure_time?.code }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`]))))))), !this.collapsed && (h("div", { key: '59de3fb92053c5b68c4904f955a7fc3505ee056f', class: "booking-room__details-container" }, h("div", { key: '14272a9bf9d9c42326d5fd28833886c83ffd92c1', class: "booking-room__breakdown-row" }, h("div", { key: '126b2028f50e40723bdd17683f7117a341190d0a', class: "booking-room__breakdown-label-wrapper" }, h("p", { key: 'cbe812cafaba97091a4bd6c76b4020a6977f9ab7', class: "booking-room__breakdown-label" }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: '0333b195a974198b1f199ac1b2bba2f72ed780cc', class: "booking-room__breakdown-table" }, h("table", { key: 'b8fe700961730bf27f071b75a940eb97efba7df8' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, _getDay(room.date)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, room.cost)))));
            }), h("tr", { key: 'd3dfbe4cd8124d92c4ae507f93b605e0598db926', class: '' }, h("th", { key: '2f2d0f3d43071d7232ada8a26b7dbe24f829fc39', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: 'ba9e419ad4d75b8fb77fe21eb5b9c400ada7839b', class: "booking-room__cell booking-room__cell--right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("th", { key: '9b4e5f8421fb655b8d3d25527581eafd156d547e', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, locales.entries.Lcz_Including, " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)"), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "booking-room__cell booking-room__cell--right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: 'cf062777bfdfb0ecdb14903bb4020c2676b4e9e2', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: 'ee0314eeced10d7682822cfe1fdea40942b0b615' }, this.room.rateplan.cancelation && (h("ir-label", { key: '30de4467dd87eb48db680958edf03aa1da20803d', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '591fcb54ce955bab8a87af1cc6fad31905ac276d', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: '4c39024a6bd75496d6eaf07de333b17b9c0d8a0a' }, h("ir-label", { key: '3bb63b96004968c1d6b8e71c7075752c765b827f', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: 'df6a2a092b3ad4141bb8d24ebea8dcb6cc053952', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))))), h("ir-assignment-toggle-dialog", { key: '0794d4e699c3d8945932783c69b52f1b6208912c', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, h("span", { key: '1955951c8712d64a1cd1ae1223c063cfb20d21fc', slot: "message" }, "Move ", this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.unit?.name, " to", ' ', h("b", { key: 'db4f43d0ee3b012116ce3ae4658648da9d1773e3' }, this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'), " folio"), ".")), h("ir-dialog", { key: '96f9d3e86c489267c806313346a4872b37f44c5c', label: this.modalReason === 'delete' ? 'Alert' : locales.entries.Lcz_Confirmation, ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, h("p", { key: '1848bbbbdcb098c3aaf3c66612082ec412e77fc0' }, this.renderModalMessage()), h("div", { key: 'b3c81509c68973d7de618afb9a66f2bef5bad2b4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1032b54b813e9a144bf3ee57eb5e4447961523d1', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'b20c90ece63fc7c4d65ce69d95dcc365c351f187', size: "medium", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm))), h("ir-checkout-dialog", { key: 'c23c09af3e061c29a3b2a65fe5db9a145db56617', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), h("ir-invoice", { key: '8404fa36acdeedf8f9ecf4a8bfbf4a408850e653', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier })));
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
        "isToggling": [32],
        "modalReason": [32],
        "mainGuest": [32],
        "isModelOpen": [32],
        "isOpen": [32]
    }, [[0, "clickHandler", "handleClick"]], {
        "room": ["handleRoomDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room", "ir-assignment-toggle-dialog", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-checkout-dialog", "ir-custom-button", "ir-custom-date-picker", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-invoice", "ir-invoice-form", "ir-label", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoom);
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
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