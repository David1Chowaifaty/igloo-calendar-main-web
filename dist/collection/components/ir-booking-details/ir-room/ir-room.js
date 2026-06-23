import { h, Host, Fragment } from "@stencil/core";
import { _getDay, isAgentMode } from "../functions";
import { formatName } from "../../../utils/booking";
import locales from "../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../stores/calendar-data";
import { formatAmount } from "../../../utils/utils";
import { BookingService } from "../../../services/booking-service/booking.service";
import { mapClTxToFolioRow } from "../../ir-city-ledger/ir-city-ledger-folio/types";
import { HbPreference } from "../../../types/enums";
export class IrRoom {
    element;
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
    agent;
    clTransactions = [];
    collapsed = true;
    isLoading = false;
    isToggling = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    isOpen = false;
    isPricingDrawerOpen = false;
    isHbDialogOpen = false;
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
                default:
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
    get isHalfBoard() {
        return this.room?.rateplan?.meal_plan?.code === '003' && calendar_data.property.is_frontdesk_enabled;
    }
    get acmTxByDate() {
        return new Map(this.clTransactions.filter(tx => tx.CATEGORY === 'ACM' && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    render() {
        const bed = this.getBedName();
        return (h(Host, { key: '4b75bdd42bcb27199f902a80b394ea6ecdffc7ab' }, h("div", { key: '55796e259867d24455b6de5ecb6981f38a6cea34', class: "booking-room__header-row" }, h("button", { key: '1214c33cb2a79989b33eea6aa3d22924a10a5630', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'cae5d2d86050275fbc866db3583f5d44afe83ad6', name: "chevron-right" })), h("div", { key: 'ed2ad9e3291435dbb4dec1f863d2c29d34ee546e', style: { width: '100%', cursor: 'default' } }, h("div", { key: '39695a4f1a8cb384126531a0ba5de0dab17eafd6',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("div", { key: 'fdc0e7cd403c9e4cf2b8eaaa69159fb43d625216', class: "booking-room__summary-row" }, h("p", { key: '843d17de3554a8f5953703b220422439b2dd6c4c', class: "booking-room__summary-text" }, h("span", { key: '675839ce5a3ba571b2287e92181c5b45f2c3f92e', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' ', this.isHalfBoard && (h("wa-button", { key: '3f8623bbb7eef6f786452f92d260a39e18662b2a', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => (this.isHbDialogOpen = true) }, this.room?.hb_preference === HbPreference.Lunch ? 'With lunch' : this.room?.hb_preference === HbPreference.Dinner ? 'With dinner' : 'Choose lunch or dinner'))), h("div", { key: 'c1c6d7679bdc6750cf69482b9aef23d8a2f1e7f9', class: "booking-room__price-row" }, h("span", { key: 'f6970e5fe3ec5562c8ce3b6145a9df6ddcbacdc1', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete) && (h("div", { key: 'c78c35801ecfb1065442b8696f29b4e5a55fa774', class: "booking-room__actions" }, h("wa-dropdown", { key: '301f0a98c6600add373d23129f97ca418f36aac4', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.handleEditClick();
                        break;
                    case 'edit-rates':
                        this.isPricingDrawerOpen = true;
                        break;
                    case 'delete':
                        this.openModal('delete');
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, h("ir-custom-button", { key: '6f7affaf64ad997fd12595823289e0a2b3e3a924', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '95b106609219bb54c55db51749dbd56288ad58da', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: 'e8e7f5dc1818208f1ed8a95d2ce8e686d80f2128', value: "edit" }, "Edit unit"), this.hasRoomEdit && h("wa-dropdown-item", { key: '721b65fe05ca5364f4e6fbd6a3db500409e35b49', value: "edit-rates" }, "Edit nightly rates"), isAgentMode(this.agent) && this.hasRoomEdit && h("wa-dropdown-item", { key: '912096e3158a93035aeb263953b63c7b21c74a7a', value: "toggle" }, "Re-assign ", this.room.agent ? 'guest' : 'agent', " folio"), this.hasRoomDelete && (h("wa-dropdown-item", { key: '57d7b237ec2169eb5e5515aff464986d5dc7461c', value: "delete", variant: "danger" }, "Delete"))))))), h("div", { key: 'c9e877c86a903588a3a5383343dcddb0e9fb1f1e', class: "booking-room__dates-row" }, h("ir-date-view", { key: 'f5f262fe7befd2ebffe80cb01ee9de896b24b8c9', format: 'ddd, MMM DD, YYYY', class: "booking-room__date-view", from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && (
        // <div class={'d-flex justify-content-center align-items-center'}>
        //   <ir-tooltip message={(this.room.unit as IUnit).name} customSlot>
        //     <span slot="tooltip-trigger" class={`light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} `}>
        //       {(this.room.unit as IUnit).name}
        //     </span>
        //   </ir-tooltip>
        // </div>
        h("ir-unit-tag", { key: '295d16c394bcad770e7c5f6de80477c76b59a9eb', unit: this.room.unit.name })), this.hasCheckIn && (h("ir-custom-button", { key: '4d18c4722f6821df35b846bba064fc2f7fb562b0', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", appearance: "outlined", variant: "brand" }, locales.entries.Lcz_CheckIn)), this.hasCheckOut && (h("ir-custom-button", { key: '09f42582c4c81a838ecda3baa4154fc820808688', appearance: "outlined", variant: "brand", onClickHandler: () => {
                this.modalReason = 'checkout';
            }, id: "checkout" }, locales.entries.Lcz_CheckOut))), h("div", { key: 'b713cd7cf6ad597eed48f820086214a4898c1d1f', class: "booking-room__guest-row" }, h("p", { key: '34ea83ee13f2d3dfb185703ae41750ddfd970695', class: "booking-room__text-reset booking-room__guest-name" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (h(Fragment, null, h("wa-tooltip", { for: `view-guest-btn-${this.room.identifier}` }, "View guests"), h("ir-custom-button", { link: true, onClickHandler: () => this.showGuestModal(), id: `view-guest-btn-${this.room.identifier}`, variant: "brand", appearance: "plain" }, h("span", { innerHTML: this.formatVariation(this.room.occupancy) })))) : (h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && h("p", { key: '4bd40f3ab23ef3b028ec0e09ce729e5b1c2488a9', class: "booking-room__text-reset booking-room__bed-info" }, "(", bed, ")")), this.includeDepartureTime && (h("div", { key: '19c61c283d4d8d2ff83cebdbf25e32d59518c633', class: "booking-room__departure-row" }, h("p", { key: '325e5c57e94491e91aa9b812355bc48e5534c8d9', class: "booking-room__text-reset booking-room__departure-label" }, "Expected departure time:"), h("wa-select", { key: '4a07df7e8fd12cb634cb132baace2b7a5d86be64', onchange: e => {
                this.updateDepartureTime(e.target.value);
            }, style: { width: '140px' }, size: "s", placeholder: "Not provided", value: this.room.departure_time?.code, defaultValue: this.room.departure_time?.code }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, dt[`CODE_VALUE_${this.language?.toUpperCase()}`] ?? dt[`CODE_VALUE_EN`]))))))), !this.collapsed && (h("div", { key: 'd08b137c38bdbee947fbf451675101de86f05281', class: "booking-room__details-container" }, h("div", { key: '27834f99ae89433e42911266d31069b23b70d415', class: "booking-room__breakdown-row" }, h("div", { key: '2a9d88c906466f2e055b91d218bcdb4d7225b1eb', class: "booking-room__breakdown-table" }, h("table", { key: 'fe556773fde1c8641c14bce95a706b37ba8a8a4c' }, this.room.days.length > 0 &&
            (() => {
                const acmTxByDate = this.acmTxByDate;
                return this.room.days.map(room => {
                    const tx = acmTxByDate.get(room.date);
                    return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, _getDay(room.date)), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--left booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, room.cost))), h("td", { class: "booking-room__cell booking-room__cell--pad-left" }, tx && h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }))));
                });
            })(), h("tr", { key: '61d32b132016aa1ed0496377be86adb4caacbe71', class: '' }, h("th", { key: 'd9413002f90b434809352eff8526511d15699fe6', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: 'c96e036b3a20edaa341eaadac84e3f04822614b2', class: "booking-room__cell booking-room__cell--right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("th", { key: 'c04fb697c82ec4ceae89685b1dc5ef7a8bdaabd4', class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, this.room.cost)))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0 && tx.is_exlusive);
            return filtered_data.map(d => {
                const amount = d.is_exlusive
                    ? // Tax is added on top
                        this.room.total * d.pct
                    : // Tax is included in total → extract it
                        this.room.total - this.room.total / (1 + d.pct);
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, amount / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-left night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })(), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map(d => (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, locales.entries.Lcz_Including, " ", d.TAX_NAME, " (", d.TAX_PCT * 100, "%)")), h("td", { class: "booking-room__cell booking-room__cell--right" }, formatAmount(this.currency, d.CALCULATED_VALUE))))))) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "booking-room__cell booking-room__cell--right booking-room__cell--pad-right" }, h("span", { class: 'booking-room__cell-tax-name' }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name)), h("td", { class: "booking-room__cell booking-room__cell--right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: '73174901e3488a1972062d6f87b2d9526d5c5efe', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: '7137cc7c1c0288cc4479979be6b85d429725be18' }, this.room.rateplan.cancelation && (h("ir-label", { key: 'e76e408141e4c35986e90f82a6cb4f90c07d380e', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '3113324e87ca9c7f0db5dad736af9f00d01803dc', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: '3d2210b5aa26105103cb02b0ebe5b0f5f26770e2' }, h("ir-label", { key: 'be34ca507d6859d22de418626692b66ea7b77f32', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: 'dd774180fedd13e340bb6e137481df20c42d3510', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))))), h("ir-assignment-toggle-dialog", { key: '49ca0ee7dd2f30310c2d61b56b203a176c346afb', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, h("span", { key: 'b4f5ed847a6953959fabf93faca94f1250df257e', slot: "message" }, "Move ", this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.unit?.name, " to", ' ', h("b", { key: '1c9de89d4a3c9edf00faac05ab7c058c46b87e61' }, this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'), " folio"), ".")), h("ir-dialog", { key: 'd07a7d05e00bf699e0b77e8af5f40d2116983fdd', label: this.modalReason === 'delete' ? 'Alert' : locales.entries.Lcz_Confirmation, ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, h("p", { key: 'a64e421ad90c7f47847c11113899ce89e0aa07cc' }, this.renderModalMessage()), h("div", { key: '25f23d51ff6bab44b6778979614eecc0e38ae6c2', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '8358a94807fe44fc0ed77e498ec0499aa1467bd5', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '4bb886210fe5ea193db4e13b50dd0d209d542802', size: "m", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm))), h("ir-checkout-dialog", { key: 'cb7dbde71b06b925931bf8f0de26c84004ae4b9f', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), h("ir-invoice", { key: 'b006828a47cbf3843ba306d9a1375ef96916d2db', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier }), h("ir-booking-pricing-drawer", { key: '419db8ae1245acc71bd77b6dea943bf036dbabe9', open: this.isPricingDrawerOpen, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.clTransactions, currencySymbol: this.booking?.currency?.symbol ?? '', onCloseDrawer: () => (this.isPricingDrawerOpen = false), onPricingSaved: () => {
                this.isPricingDrawerOpen = false;
                this.resetBookingEvt.emit(null);
            } }), h("ir-hb-preference-dialog", { key: '0cd9a654e3d761d97643c228df256668f6c302f6', room: this.room, open: this.isHbDialogOpen, onHbPreferenceClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isHbDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } })));
    }
    static get is() { return "ir-room"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
            "bookingIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false,
                "attribute": "booking-index"
            },
            "isEditable": {
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
                "reflect": false,
                "attribute": "is-editable"
            },
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
            "property_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false,
                "attribute": "property_id"
            },
            "includeDepartureTime": {
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
                "reflect": false,
                "attribute": "include-departure-time"
            },
            "mealCodeName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "meal-code-name"
            },
            "myRoomTypeFoodCat": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "my-room-type-food-cat"
            },
            "currency": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "currency",
                "defaultValue": "'USD'"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "legendData": {
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
                "reflect": false,
                "attribute": "legend-data"
            },
            "roomsInfo": {
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
                "reflect": false,
                "attribute": "rooms-info"
            },
            "bedPreferences": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
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
            "departureTime": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
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
            "hasRoomEdit": {
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
                "reflect": false,
                "attribute": "has-room-edit",
                "defaultValue": "false"
            },
            "hasRoomDelete": {
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
                "reflect": false,
                "attribute": "has-room-delete",
                "defaultValue": "false"
            },
            "hasRoomAdd": {
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
                "reflect": false,
                "attribute": "has-room-add",
                "defaultValue": "false"
            },
            "hasCheckIn": {
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
                "reflect": false,
                "attribute": "has-check-in",
                "defaultValue": "false"
            },
            "hasCheckOut": {
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
                "reflect": false,
                "attribute": "has-check-out",
                "defaultValue": "false"
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
            "clTransactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::ClTx",
                            "referenceLocation": "ClTx"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "collapsed": {},
            "isLoading": {},
            "isToggling": {},
            "modalReason": {},
            "mainGuest": {},
            "isModelOpen": {},
            "isOpen": {},
            "isPricingDrawerOpen": {},
            "isHbDialogOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "deleteFinished",
                "name": "deleteFinished",
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
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast",
                            "referenceLocation": "IToast"
                        }
                    }
                }
            }, {
                "method": "pressCheckIn",
                "name": "pressCheckIn",
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
                "method": "pressCheckOut",
                "name": "pressCheckOut",
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
                "method": "editInitiated",
                "name": "editInitiated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TIglBookPropertyPayload",
                    "resolved": "IglBookPropertyPayloadAddRoom | IglBookPropertyPayloadBarBooking | IglBookPropertyPayloadBlockDates | IglBookPropertyPayloadEditBooking | IglBookPropertyPayloadPlusBooking | IglBookPropertyPayloadSplitBooking",
                    "references": {
                        "TIglBookPropertyPayload": {
                            "location": "import",
                            "path": "@/models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::TIglBookPropertyPayload",
                            "referenceLocation": "TIglBookPropertyPayload"
                        }
                    }
                }
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "openSidebar",
                "name": "openSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "OpenSidebarEvent<RoomGuestsPayload>",
                    "resolved": "{ roomName: string; sharing_persons: SharedPerson[]; totalGuests: number; checkin: boolean; identifier: string; booking_nbr?: string | number; }",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent",
                            "referenceLocation": "OpenSidebarEvent"
                        },
                        "RoomGuestsPayload": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::RoomGuestsPayload",
                            "referenceLocation": "RoomGuestsPayload"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "room",
                "methodName": "handleRoomDataChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "clickHandler",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
