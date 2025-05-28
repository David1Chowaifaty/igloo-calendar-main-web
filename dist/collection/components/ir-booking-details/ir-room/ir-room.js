import { h, Host, Fragment } from "@stencil/core";
import { _getDay } from "../functions";
import { formatName } from "../../../utils/booking";
import axios from "axios";
import locales from "../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../stores/calendar-data";
import { colorVariants } from "../../ui/ir-icons/icons";
import { formatAmount } from "../../../utils/utils";
//TODO revert back to the room cmp with adults
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
        this.isModelOpen = false;
    }
    componentWillLoad() {
        if (this.booking) {
            this.item = this.booking.rooms[this.bookingIndex];
        }
    }
    handlebookingChange() {
        this.item = this.booking.rooms[this.bookingIndex];
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
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
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
            ARRIVAL: this.booking.arrival,
            ARRIVAL_TIME: this.booking.arrival.description,
            BOOKING_NUMBER: this.booking.booking_nbr,
            cancelation: this.item.rateplan.cancelation,
            channel_booking_nbr: this.booking.channel_booking_nbr,
            CHILDREN_COUNT: this.item.rateplan.selected_variation.child_nbr,
            COUNTRY: this.booking.guest.country_id,
            ENTRY_DATE: this.booking.from_date,
            FROM_DATE_STR: this.booking.format.from_date,
            guarantee: this.item.rateplan.guarantee,
            GUEST: this.booking.guest,
            IDENTIFIER: this.item.identifier,
            is_direct: this.booking.is_direct,
            IS_EDITABLE: this.booking.is_editable,
            NO_OF_DAYS: this.item.days.length,
            NOTES: this.booking.remark,
            origin: this.booking.origin,
            POOL: this.item['assigned_units_pool'],
            PR_ID: (_e = this.item.unit) === null || _e === void 0 ? void 0 : _e.id,
            RATE: this.item.total,
            RATE_PLAN: this.item.rateplan.name,
            RATE_PLAN_ID: this.item.rateplan.id,
            RATE_TYPE: this.item.roomtype.id,
            ROOMS: this.booking.rooms,
            SOURCE: this.booking.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.booking.format.to_date,
            TOTAL_PRICE: this.booking.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: ((_f = this.item.unit) === null || _f === void 0 ? void 0 : _f.name) || '',
            PICKUP_INFO: this.booking.pickup_info,
            booking: this.booking,
            currentRoomType: this.item,
        });
    }
    handleDeleteClick() {
        this.modal.openModal();
    }
    async deleteRoom() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.booking.rooms];
            oldRooms = oldRooms.filter(room => room.identifier !== this.item.identifier);
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
            };
            console.log('body:', body);
            const { data } = await axios.post(`/DoReservation`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            this.modal.closeModal();
            this.deleteFinished.emit(this.item.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    formatVariation({ adult_nbr, child_nbr }, { infant_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = child_nbr > 0 ? child_nbr : 0;
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
            if (!this.item.smoking_option) {
                return null;
            }
            const currRT = calendar_data.roomsInfo.find(rt => rt.id === this.item.roomtype.id);
            if (currRT) {
                const smoking_option = (_a = currRT['smoking_option']) === null || _a === void 0 ? void 0 : _a.allowed_smoking_options;
                if (smoking_option) {
                    return (_b = smoking_option.find(s => s.code === this.item.smoking_option)) === null || _b === void 0 ? void 0 : _b.description;
                }
                return null;
            }
            return null;
        }
        return (_c = this.item.ota_meta) === null || _c === void 0 ? void 0 : _c.smoking_preferences;
    }
    getBedName() {
        var _a, _b;
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => { var _a, _b; return p.CODE_NAME === ((_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.bed_preference) === null || _b === void 0 ? void 0 : _b.toString()); });
            if (!bed) {
                return;
            }
            return (_a = bed[`CODE_VALUE_${this.language}`]) !== null && _a !== void 0 ? _a : bed.CODE_VALUE_EN;
        }
        return (_b = this.item.ota_meta) === null || _b === void 0 ? void 0 : _b.bed_preferences;
    }
    render() {
        var _a, _b;
        const bed = this.getBedName();
        return (h(Host, { key: 'dc2374775d795eac63bafa131e426763bccea92e', class: "p-1 d-flex m-0" }, h("ir-button", { key: '76f8b982918cc888172837e867033194d133ae2d', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: '8fc2fb976e8238e0fef2ee8d49f8e19a806653ab', class: "flex-fill m-0 " }, h("div", { key: 'b40be9639992ae2967aeb09a710306166ffcdb7c', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: '4af68809badaafc961d9e52289b600607ed2e226', class: "m-0 p-0" }, h("span", { key: '27f8e92f64d2bb96c2411a2392c9865b3fbf1961', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.item.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '98e9d77cb95e829228fbb0ecabfe5fdab40ddfbd', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: 'b05a95dd6a237298be7cfcbf0d7b568e48df9f99', class: "p-0 m-0 font-weight-bold" }, formatAmount(this.currency, this.item['gross_total'])), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: 'fa50e0ef5ac0d6df2dc90aeed5264ab3ee1f2a5c', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: 'c2ecc7c267350e59715aae6a818f113a629369d7', variant: "icon", onClickHandler: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: 'e1d7311d4484189fa8b16abeaa9b9644658b9b56', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: 'e0a9bcbeae611215996c494697d0c3c4db1206b1', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && h("ir-button", { key: '3449b5e7ab126d5a79a4bf1a658d9636215909f8', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && h("ir-button", { key: 'd08f7e6d4fa9af1b4a42a749518428377455ae21', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), !isSingleUnit(this.item.roomtype.id) && calendar_data.is_frontdesk_enabled && this.item.unit && (h("div", { key: '5739b190ac21531b385f3c5bb8a7d6f3da2774f8', class: 'd-flex justify-content-end' }, h("span", { key: '1aa649e9a7a8bd33d0dbd621cbbf87d27a1f65ae', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), h("div", { key: '203c2dd2bdd04af806acdf64aadde180f2dd8acb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '4a8c89f7f96b1e8ff312a398784510087e9ec37d' }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && h("span", { key: '25317c62091e478e0145f6fc5b72bb6e88104205', innerHTML: this.formatVariation(this.item.rateplan.selected_variation, this.item.occupancy) }, " "), bed && h("span", { key: '1da5a525980ed6cd34b58fef1ae40f0208a17d20' }, "(", bed, ")")), h("div", { key: 'a549a731e621d60955b04a3b957ef110ce741cb7', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, h("div", { key: 'b7a617592414fff6db7706d7e5eabc73385e0299', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '641414b10dc338d870ed7aff528710ad642a3d9b', class: " sm-padding-top" }, h("p", { key: '990108d7e825b02b016e85338c6796d56ed54e12', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: 'ad84aea3e7438d15de8fd8c26f006d24e49f3f02', class: 'flex-fill' }, h("table", { key: '9408a7f9933bbf1e5f7fdb3e8daafaef3e77448e' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, formatAmount(this.currency, item.amount)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, item.cost))));
            }), h("tr", { key: '13591aa75835f6296559db50ecba9a232e2a814a', class: '' }, h("th", { key: '856c996748925d9afa1be769374097dc50f99e5d', class: "text-right pr-2 subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: 'df7d01634143f59cbde73cadecc049b4cd06a914', class: "text-right subtotal_row" }, formatAmount(this.currency, this.item.total)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: 'b184d8d8458f833465e429e62e02e30be21edc3b', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.item.cost))), this.booking.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.item.total * d.pct) / 100)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.item.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), h("ir-label", { key: '7354bd06d1d26235edfc35afa0e68679d012c3d9', labelText: `${locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (h(Fragment, { key: 'e434e6af96b37fc4f85c7ab953ab73574d574b45' }, this.item.rateplan.cancelation && (h("ir-label", { key: 'a1578aed4bb5c273a956ea5a63b14bd8d683d761', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.item.rateplan.cancelation || '', renderContentAsHtml: true })), this.item.rateplan.guarantee && (h("ir-label", { key: '9aed754bdf8cbbf86d8c485435c9a2ac7ddf9f28', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.item.rateplan.guarantee || '', renderContentAsHtml: true })))), this.item.ota_meta && (h("div", { key: '9d0490c8d91eb78a6db32296862fa1ed211343bd' }, h("ir-label", { key: 'e5f9915e4ccffa846dc53339b006e5b90c46df8f', labelText: `${locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.item.ota_meta.meal_plan }), h("ir-label", { key: 'e7f3e0a2b0c216782e936910c03578936537e209', labelText: `${locales.entries.Lcz_Policies}:`, display: "inline", content: this.item.ota_meta.policies }))))), h("ir-modal", { key: '026b84c5277650b6954bdf038bbf435eb60a3b4c', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales.entries.Lcz_Confirmation, modalBody: `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}` })));
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
            "item": {},
            "isLoading": {},
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
            }];
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handlebookingChange"
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
