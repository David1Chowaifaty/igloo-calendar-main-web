import { h, Host, Fragment } from "@stencil/core";
import { _getDay } from "../functions";
import { formatName } from "../../../utils/booking";
import locales from "../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../stores/calendar-data";
import { colorVariants } from "../../ui/ir-icons/icons";
import { formatAmount } from "../../../utils/utils";
import { BookingService } from "../../../services/booking.service";
export class IrRoom {
    constructor() {
        // Currency
        this.currency = 'USD';
        this.language = 'en';
        // Booleans Conditions
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.collapsed = false;
        this.isLoading = false;
        this.modalReason = null;
        this.isModelOpen = false;
        this.bookingService = new BookingService();
    }
    componentWillLoad() {
        this.mainGuest = this.getMainGuest();
    }
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.room['assigned_units_pool'],
            NAME: formatName((_a = this.mainGuest) === null || _a === void 0 ? void 0 : _a.first_name, (_b = this.mainGuest) === null || _b === void 0 ? void 0 : _b.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${locales.entries.Lcz_EditBookingFor} ${(_d = (_c = this.room) === null || _c === void 0 ? void 0 : _c.roomtype) === null || _d === void 0 ? void 0 : _d.name} ${((_f = (_e = this.room) === null || _e === void 0 ? void 0 : _e.unit) === null || _f === void 0 ? void 0 : _f.name) || ''}`,
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
            PR_ID: (_g = this.room.unit) === null || _g === void 0 ? void 0 : _g.id,
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
            roomName: ((_h = this.room.unit) === null || _h === void 0 ? void 0 : _h.name) || '',
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
        var _a, _b, _c;
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
            if (currRT) {
                const smoking_option = (_a = currRT['smoking_option']) === null || _a === void 0 ? void 0 : _a.allowed_smoking_options;
                if (smoking_option) {
                    return (_b = smoking_option.find(s => s.code === this.room.smoking_option)) === null || _b === void 0 ? void 0 : _b.description;
                }
                return null;
            }
            return null;
        }
        return (_c = this.room.ota_meta) === null || _c === void 0 ? void 0 : _c.smoking_preferences;
    }
    getBedName() {
        var _a, _b;
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => { var _a, _b; return p.CODE_NAME === ((_b = (_a = this.room) === null || _a === void 0 ? void 0 : _a.bed_preference) === null || _b === void 0 ? void 0 : _b.toString()); });
            if (!bed) {
                return;
            }
            return (_a = bed[`CODE_VALUE_${this.language}`]) !== null && _a !== void 0 ? _a : bed.CODE_VALUE_EN;
        }
        return (_b = this.room.ota_meta) === null || _b === void 0 ? void 0 : _b.bed_preferences;
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
        var _a;
        return (_a = this.room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
    }
    render() {
        var _a, _b, _c, _d;
        const bed = this.getBedName();
        return (h(Host, { key: '065e549196c3a5e8320fd62486b530671714a0d6', class: "p-1 d-flex m-0" }, h("ir-button", { key: 'f0b323dfd2ef0ffeea7f515d1aaaf5f215930aa7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.room.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: '9b928dca76365a73da153cadf87fc77344b7d9a1', class: "flex-fill m-0 " }, h("div", { key: '11407a2311ff1c14c4994a9a22bc403a5d30bee8', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: '8223cbecf4e47169d712063a8963cb0031af341e', class: "m-0 p-0" }, h("span", { key: '762ed0e297c697b1d5f070db300bf46ceced5351', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.room.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '6b9dc584c410b419f59a0b0dea096f7c55c8b048', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: '78ce581217988d4a55e77b2f3601ecb058724c13', class: "p-0 m-0 font-weight-bold" }, formatAmount(this.currency, this.room['gross_total'])), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: '3e4c2a21660a284876e2b0e449954bef92ca8917', id: `roomEdit-${this.room.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: '90a34eba42b9be39251bc67faeba88364e8341bb', variant: "icon", onClickHandler: this.openModal.bind(this, 'delete'), id: `roomDelete-${this.room.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: 'bac15122faca40a0ad751f67f5051f23505eafde', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: 'b24007cd138b417ed7ab90827ebcc89a24fb5765', class: "mr-1  flex-grow-1", style: { width: 'fit-content' }, from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !isSingleUnit(this.room.roomtype.id) && calendar_data.is_frontdesk_enabled && this.room.unit && (h("div", { key: '2a494d716e6757f222ee3aa758fab5927124a3c5', class: 'd-flex justify-content-center align-items-center' }, h("ir-tooltip", { key: '884639023f9224be982484f3f1437481f737bdda', message: this.room.unit.name, customSlot: true }, h("span", { key: '4c224320a83af2d37cad3649166df2c0a4776c16', slot: "tooltip-trigger", class: `light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.room.unit.name)))), this.hasCheckIn && (h("ir-button", { key: '97f2d92eb5dd84692bcd3f367998f349da6d4ded', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", btn_color: "outline", size: "sm", text: locales.entries.Lcz_CheckIn })), this.hasCheckOut && (h("ir-button", { key: 'ded5976dabd8753d54311839b9ac4d7cfb1cc664', onClickHandler: this.openModal.bind(this, 'checkout'), id: "checkout", btn_color: "outline", size: "sm", text: locales.entries.Lcz_CheckOut }))), h("div", { key: '4f237c84cfdaf2c951a54ab3513ebe7547a251f5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: 'e00acacca14d4af4c97f5d099a57151bcdd83c85', class: "m-0 p-0" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (h("ir-tooltip", { message: 'View guests', class: "m-0 p-0", customSlot: true }, h("ir-button", { class: "m-0 p-0", slot: "tooltip-trigger", btn_color: "link", renderContentAsHtml: true, onClickHandler: () => this.showGuestModal(), size: "sm", btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' }, text: this.formatVariation(this.room.occupancy) }))) : (h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && h("p", { key: 'ad6c73889250cb503b0985732eebddb362722b33', class: "m-0 p-0" }, "(", bed, ")")), h("div", { key: 'bd8052fb8a09f90460225455b0af639d843aa686', class: "d-flex align-items-center", style: { marginTop: '0.5rem', marginBottom: '0.875rem', gap: '0.5rem' } }, h("p", { key: '49f6aeaec65f1a08627ae242502d82663ac36caa', class: "m-0 p-0" }, "Expected departure time:"), h("ir-select", { key: '4b87e266f05b27b8b132d3712c1271490ea39ce9', selectedValue: (_b = this.room.departure_time) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateDepartureTime(e.detail);
            }, data: (_c = this.departureTime) === null || _c === void 0 ? void 0 : _c.map(d => {
                var _a, _b;
                return ({
                    text: (_b = d[`CODE_VALUE_${(_a = this.language) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`]) !== null && _b !== void 0 ? _b : d[`CODE_VALUE_EN`],
                    value: d.CODE_NAME,
                });
            }) })), h("div", { key: '3955713ddddda69b273aa5405263c12b406f7823', class: "collapse", id: `roomCollapse-${(_d = this.room.identifier) === null || _d === void 0 ? void 0 : _d.split(' ').join('')}` }, h("div", { key: '7d84fd893c9a56dc4113aa6edb6d87b0c6d1d986', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: 'fcb451bae4a480353b59086a15238b05ea0c09d2', class: " sm-padding-top" }, h("p", { key: 'c0c500252e97d467abfb970824b2bb6c8c0eefcf', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: '0e04dccdc6e00c4aeb884d26564ce9ef167ffaaa', class: 'flex-fill' }, h("table", { key: 'a4b323fa9df9df3fe3f332d0ea4dfc391e5bb82d' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(room.date)), h("td", { class: "text-right" }, formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, room.cost))));
            }), h("tr", { key: '3904551da67c78bc9b5e45f7b2d4926d255345a0', class: '' }, h("th", { key: '16263c4f23853025f896383ae3981d03d7bd00d2', class: "text-right pr-2 subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: '5cac9caedd9549f43080d04917f510b7d1b545dd', class: "text-right subtotal_row" }, formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && h("th", { key: '8b5d3d666cebbaaa00e64daeecc7216397e20ede', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.room.cost))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.room.total * d.pct) / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: '273d4b678c6a274e6219a3597610a52c99ae0d27', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: '5d0fb91fe44ea019b06d6958d8f6218c66a750d8' }, this.room.rateplan.cancelation && (h("ir-label", { key: 'b10a363045a26fcb70591a6daba34fffc2205863', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (h("ir-label", { key: '0b3635d1a9034e555d92947a3faa694fa978f002', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (h("div", { key: '6274861e18a41f7917a28d32c788f343ca48441a' }, h("ir-label", { key: 'ce45a789f20b7e07a8bf28d7f32d29e8b176c7d0', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), h("ir-label", { key: '7c834a9b6ef1e1943632999f72a91ecf0c35d6c6', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))), h("ir-modal", { key: 'fd3f737f81770f56492f2f6571430653e148a304', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: this.modalReason === 'delete' ? locales.entries.Lcz_Delete : locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalReason === 'delete' ? 'danger' : 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.renderModalMessage() })));
    }
    showGuestModal() {
        var _a;
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: (_a = this.room.unit) === null || _a === void 0 ? void 0 : _a.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                checkin: this.hasCheckIn,
                identifier: this.room.identifier,
            },
        });
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
                            "id": "src/models/booking.dto.ts::Booking"
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
                "attribute": "booking-index",
                "reflect": false
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
                "attribute": "is-editable",
                "reflect": false
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
                            "id": "src/models/booking.dto.ts::Room"
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
                "attribute": "property_id",
                "reflect": false
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
                "attribute": "meal-code-name",
                "reflect": false
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
                "attribute": "my-room-type-food-cat",
                "reflect": false
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
                "attribute": "currency",
                "reflect": false,
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
                "attribute": "language",
                "reflect": false,
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
                "attribute": "legend-data",
                "reflect": false
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
                "attribute": "rooms-info",
                "reflect": false
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
                            "id": "src/models/IBooking.ts::IEntries"
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
                            "id": "src/models/IBooking.ts::IEntries"
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
                "attribute": "has-room-edit",
                "reflect": false,
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
                "attribute": "has-room-delete",
                "reflect": false,
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
                "attribute": "has-room-add",
                "reflect": false,
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
                "attribute": "has-check-in",
                "reflect": false,
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
                "attribute": "has-check-out",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "collapsed": {},
            "isLoading": {},
            "modalReason": {},
            "mainGuest": {},
            "isModelOpen": {}
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
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
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
                            "id": "src/models/igl-book-property.d.ts::TIglBookPropertyPayload"
                        }
                    }
                }
            }, {
                "method": "resetbooking",
                "name": "resetbooking",
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
                    "resolved": "{ type: BookingDetailsSidebarEvents; payload?: RoomGuestsPayload; }",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent"
                        },
                        "RoomGuestsPayload": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::RoomGuestsPayload"
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
//# sourceMappingURL=ir-room.js.map
