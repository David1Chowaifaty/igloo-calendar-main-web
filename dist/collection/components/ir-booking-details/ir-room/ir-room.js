import { h, Host } from "@stencil/core";
import { formatName } from "../../../utils/booking";
import { BookingService } from "../../../services/booking-service/booking.service";
import { t } from "../../../services/locale/t";
import { formatDate } from "../../../utils/date/index";
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
    arrivalTime;
    // Booleans Conditions
    hasRoomEdit = false;
    hasRoomDelete = false;
    hasRoomAdd = false;
    hasCheckIn = false;
    hasCheckOut = false;
    /**
     * When true, this room opens its check-out dialog automatically once mounted. Set by the
     * booking-details screen when an early check-out was initiated from another screen
     * (departures list, calendar) and redirected here.
     */
    autoOpenCheckout = false;
    agent;
    clTransactions = [];
    /** `_SVC_CATEGORY` setup entries, used to label extra services in the room's extra-services section. */
    svcCategories = [];
    collapsed = true;
    isLoading = false;
    isToggling = false;
    modalReason = null;
    mainGuest;
    isModelOpen = false;
    isOpen = false;
    isPricingDrawerOpen = false;
    isHbDialogOpen = false;
    isDepartureDialogOpen = false;
    isArrivalDialogOpen = false;
    // Event Emitters
    deleteFinished;
    toast;
    pressCheckIn;
    pressCheckOut;
    editInitiated;
    resetBookingEvt;
    openSidebar;
    addExtraServiceToUnit;
    modal;
    toggleDialogRef;
    bookingService = new BookingService();
    dialogRef;
    componentWillLoad() {
        this.mainGuest = this.getMainGuest();
    }
    componentDidLoad() {
        if (this.autoOpenCheckout) {
            this.scheduleAutoCheckout();
        }
    }
    handleAutoOpenCheckoutChange(newValue) {
        if (newValue) {
            this.scheduleAutoCheckout();
        }
    }
    /**
     * Open the check-out dialog for an early check-out redirected here from another screen.
     * Deferred to the next frame on purpose: the dialog must first render with `open=false`
     * so `ir-checkout-dialog`'s `@Watch('open')` (which runs its data `init()`) fires on the
     * false → true change, and it also lets the booking-details drawer finish opening first.
     */
    scheduleAutoCheckout() {
        requestAnimationFrame(() => {
            if (this.autoOpenCheckout && this.modalReason !== 'checkout') {
                this.modalReason = 'checkout';
            }
        });
    }
    /**
     * Refresh the booking after an early check-out without letting the booking-details screen drop
     * into its full-page loading state. `resetBookingEvt.emit()` (no detail) takes the `resetBooking()`
     * path which toggles `isLoading` and unmounts the room list — that would tear down the invoice
     * drawer we just opened. Emitting the freshly fetched booking as the event detail takes the
     * no-spinner branch of `handleResetBooking`, so the screen updates and the invoice stays open.
     */
    async refreshBookingSilently() {
        try {
            const booking = await this.bookingService.getExposedBooking({
                booking_nbr: this.booking.booking_nbr,
                language: this.language,
                is_calculate_totals: true,
                include_dp_pricing: true,
            });
            if (booking) {
                this.resetBookingEvt.emit(booking);
            }
        }
        catch (error) {
            console.error(error);
        }
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
    /**
     * Early-check-in / late-checkout are managed exclusively through the arrival/departure time
     * dialogs (price + time are set together there) — intercept edits on those categories and open
     * the matching dialog instead of letting the generic extra-service edit panel handle them.
     */
    handleEditExtraService(e) {
        const code = e.detail?.category?.code;
        if (code === 'ECI') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isArrivalDialogOpen = true;
        }
        else if (code === 'LCO') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isDepartureDialogOpen = true;
        }
    }
    handleRoomDataChange() {
        this.mainGuest = this.getMainGuest();
    }
    getDateStr(date) {
        return formatDate(date, 'DD MMM YYYY');
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
            TITLE: `${t('Lcz_EditBookingFor')} ${this.room?.roomtype?.name} ${this.room?.unit?.name || ''}`,
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
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${t('Lcz_AreYouSureDoYouWantToRemove')} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${t('Lcz_FromThisBooking')}`;
            case 'checkin':
                return t('Lcz_ConfirmCheckIn', { fallback: 'Are you sure you want to Check In this unit?' });
            case 'checkout':
                return t('Lcz_ConfirmCheckOut', { fallback: 'Are you sure you want to Check Out this unit?' });
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
        const hasUnit = !!this.room.unit;
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: this.room.unit?.name,
                roomType: this.room.roomtype?.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                // Check-in requires an assigned unit.
                checkin: this.hasCheckIn && hasUnit,
                identifier: this.room.identifier,
            },
        });
    }
    handleAddExtraServiceToUnit() {
        this.addExtraServiceToUnit.emit({ identifier: this.room.identifier });
    }
    handleHeaderAction(action) {
        switch (action) {
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
            case 'add-extra-service':
                this.handleAddExtraServiceToUnit();
                break;
        }
    }
    render() {
        return (h(Host, { key: '20d1cf35a2a0c44a80c0b6c30200043d7325cf4d' }, h("div", { key: '3e29f2a42d606ae23716a59e7d970d173f40a77c', class: "booking-room__header-row" }, h("button", { key: '210e24f13a3daac3410c023c7860aa9e3c0691bc', "data-state": this.collapsed ? 'closed' : 'opened', class: "booking-room__collapse-btn", onClick: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '6385761fff6b40e4e2c6c3ed34adb094f6e446fc', class: "ir-flip-rtl", name: "chevron-right" })), h("div", { key: '754c7d3e707c6528f18577f9ec12307bdcaf3533', style: { width: '100%', cursor: 'default' } }, h("div", { key: '94ba15490bfe09a88b9019daf4e11500468b86dd',
            // slot="summary"
            class: "booking-room_summary", style: { width: '100%', cursor: 'default' } }, h("ir-room-header", { key: '4fb653df43ff4b44af2b7ea79a81b2b7fc65f436', room: this.room, myRoomTypeFoodCat: this.myRoomTypeFoodCat, mealCodeName: this.mealCodeName, currency: this.currency, isEditable: this.isEditable, hasRoomEdit: this.hasRoomEdit, hasRoomDelete: this.hasRoomDelete, agent: this.agent, onAction: e => this.handleHeaderAction(e.detail), onOpenHbDialog: () => (this.isHbDialogOpen = true) }), h("ir-room-details", { key: 'f0fb04e784ac20c0bb3468288e473456a85e721d', room: this.room, booking: this.booking, mainGuest: this.mainGuest, bedPreferences: this.bedPreferences, language: this.language, includeDepartureTime: this.includeDepartureTime, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, onCheckIn: () => this.handleCheckIn(), onCheckOut: () => (this.modalReason = 'checkout'), onViewGuests: () => this.showGuestModal(), onOpenArrivalDialog: () => (this.isArrivalDialogOpen = true), onOpenDepartureDialog: () => (this.isDepartureDialogOpen = true) })), !this.collapsed && h("ir-room-breakdown", { key: '0587e5d5adc83addd9ca70469a92f77376979d4f', room: this.room, booking: this.booking, currency: this.currency, clTransactions: this.clTransactions }))), h("ir-room-extra-services", { key: '1d63c20e3933f5bae1535bcfb6a3dd95d9e5bf83', room: this.room, booking: this.booking, isEditable: this.isEditable, agent: this.agent, currency: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions, onRequestAddExtraService: () => this.handleAddExtraServiceToUnit() }), h("ir-assignment-toggle-dialog", { key: '9c3a44f176d30897ffad8c52cad226f8afd8c295', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, onConfirmToggle: () => this.toggleRoomAgent() }, h("span", { key: '792af9e6716c981c0e4a12b6e1c5b42d77c6cf38', slot: "message" }, t('Lcz_MoveToFolio', {
            fallback: 'Move %1 %2 %3 to %4 folio.',
            params: [
                this.room.roomtype.name,
                this.room.rateplan.short_name,
                this.room.unit?.name ?? '',
                this.room.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent'),
            ],
        }))), h("ir-dialog", { key: 'cc8f91dbf56732872750149eb89cb414dbfea523', label: this.modalReason === 'delete' ? t('Lcz_Alert', { fallback: 'Alert' }) : t('Lcz_Confirmation', { fallback: 'Confirmation' }), ref: el => (this.modal = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
            }, lightDismiss: this.modalReason === 'checkin' }, h("p", { key: '7ca47cfcd97789cfc68462dd69b88d7d651894f8' }, this.renderModalMessage()), h("div", { key: 'f662450d2bc5a23d5ca354345bef698483b724a9', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '238ca817a6c10389c51ac12cf5002f7f5cd1de7d', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1dd473acca4ef5853f011cc7d096fe8212e13d0c', size: "m", loading: this.isLoading, onClickHandler: e => this.handleModalConfirmation(e), variant: this.modalReason === 'delete' ? 'danger' : 'brand' }, this.modalReason === 'delete' ? t('Lcz_Delete', { fallback: 'Delete' }) : t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-checkout-dialog", { key: 'a2dd4068d03e2a7511d105422a1748573c2df8eb', onCheckoutDialogClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.modalReason = null;
                if (e.detail.reason === 'openInvoice') {
                    this.isOpen = true;
                    // An early check-out mutates the booking (penalty, truncated nights) — refresh the
                    // screen, but silently so the invoice drawer we just opened isn't torn down.
                    if (e.detail.isEarlyCheckout) {
                        this.refreshBookingSilently();
                    }
                }
                else if (e.detail.reason === 'checkout') {
                    this.resetBookingEvt.emit();
                }
            }, identifier: this.room.identifier, open: this.modalReason === 'checkout', booking: this.booking }), h("ir-invoice", { key: 'a4c4bcdadbe14e1c4bb56f1817f55d11fa6a70c5', onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, open: this.isOpen, booking: this.booking, roomIdentifier: this.room.identifier }), h("ir-booking-pricing-drawer", { key: '5439a7f8846335e6b8e421ce516173568bf02d44', open: this.isPricingDrawerOpen, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.clTransactions, currencySymbol: this.booking?.currency?.symbol ?? '', onCloseDrawer: () => (this.isPricingDrawerOpen = false), onPricingSaved: () => {
                this.isPricingDrawerOpen = false;
                this.resetBookingEvt.emit(null);
            } }), h("ir-hb-preference-dialog", { key: 'd09c93d276a04381fae72058f93e94b182bf1dc2', room: this.room, open: this.isHbDialogOpen, onHbPreferenceClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isHbDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-departure-time-dialog", { key: '88eb22e709e1fb69cdd6fb721cf6554cccb5342f', room: this.room, booking: this.booking, open: this.isDepartureDialogOpen, property_id: this.property_id, departureTime: this.departureTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onDepartureTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDepartureDialogOpen = false;
                if (e.detail.saved) {
                    this.resetBookingEvt.emit(null);
                }
            } }), h("ir-arrival-time-dialog", { key: '7c842f639b8cf53328b1d5c390ecf049153311fd', room: this.room, booking: this.booking, open: this.isArrivalDialogOpen, property_id: this.property_id, arrivalTime: this.arrivalTime, language: this.language, booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id, currencySymbol: this.currency, onArrivalTimeClose: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isArrivalDialogOpen = false;
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
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
            "arrivalTime": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
            "autoOpenCheckout": {
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
                    "text": "When true, this room opens its check-out dialog automatically once mounted. Set by the\nbooking-details screen when an early check-out was initiated from another screen\n(departures list, calendar) and redirected here."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-open-checkout",
                "defaultValue": "false"
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DESCRIPTION?: string; PR_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\" | \"TBL_BSE\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
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
            },
            "svcCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "`_SVC_CATEGORY` setup entries, used to label extra services in the room's extra-services section."
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
            "isHbDialogOpen": {},
            "isDepartureDialogOpen": {},
            "isArrivalDialogOpen": {}
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
                    "original": "Booking | null",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
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
                    "resolved": "{ roomName: string; roomType?: string; sharing_persons: SharedPerson[]; totalGuests: number; checkin: boolean; identifier: string; booking_nbr?: string | number; }",
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
            }, {
                "method": "addExtraServiceToUnit",
                "name": "addExtraServiceToUnit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ identifier: string }",
                    "resolved": "{ identifier: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "autoOpenCheckout",
                "methodName": "handleAutoOpenCheckoutChange"
            }, {
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
            }, {
                "name": "editExtraService",
                "method": "handleEditExtraService",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
