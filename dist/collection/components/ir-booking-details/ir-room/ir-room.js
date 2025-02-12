import { h, Host, Fragment } from "@stencil/core";
import { _getDay } from "../functions";
import { formatName } from "../../../utils/booking";
import axios from "axios";
import locales from "../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../stores/calendar-data";
import { colorVariants } from "../../ui/ir-icons/icons";
import { formatAmount } from "../../../utils/utils";
export class IrRoom {
    constructor() {
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
    render() {
        var _a, _b;
        return (h(Host, { key: '56591ff6f36ba202075d5343d3f9cd6372a4cc70', class: "p-1 d-flex m-0" }, h("ir-button", { key: '82020f350b874a892482d4775acae626b43ce552', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), h("div", { key: '9d1548fa3b0486d284679e993aa345a01b19f19b', class: "flex-fill m-0 " }, h("div", { key: '04fb6a9c406798c15e6d607282f0dd7326c72901', class: "d-flex align-items-start justify-content-between sm-mb-1" }, h("p", { key: '4035110dee2e463aea290b544058db9085d510c9', class: "m-0 p-0" }, h("span", { key: '3a91cc977803a1411befe0cb1a8f702226cb4e9a', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.item.rateplan.is_non_refundable && ` - ${locales.entries.Lcz_NonRefundable}`, ' '), h("div", { key: '3d65013d072635d0af768253f86f4292957e936c', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, h("span", { key: '2ad7afb34798a1a962b33cc6aa4ac3a559f082d1', class: "p-0 m-0 font-weight-bold" }, formatAmount(this.currency, this.item['gross_total'])), this.hasRoomEdit && this.isEditable && (h("ir-button", { key: 'fdbb24cdf7597aaef834f02cc135acec77373bbb', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (h("ir-button", { key: '3b77d9014d2849522e9e14dc3ae15f5141d5659d', variant: "icon", onClickHandler: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), h("div", { key: '3ae6ee74d89d173ec3b81989a5f29dfa2b04d9b6', class: "d-flex align-items-center sm-mb-1" }, h("ir-date-view", { key: '1fd6195ec42b396ab0c6cf34bd4a254a867e9471', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && h("ir-button", { key: '6c3294b0361dd76b4c185ea2f9aa598862c81f84', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && h("ir-button", { key: '4f1d2c968447a2edc8e81bdcbb92683a959acb06', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), !isSingleUnit(this.item.roomtype.id) && calendar_data.is_frontdesk_enabled && this.item.unit && (h("div", { key: 'a39dbc185edfb04869d346cb1b0007ee072b1789', class: 'd-flex justify-content-end' }, h("span", { key: '2446198e516479025565f843ef09bf3f827a482d', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), h("div", { key: '1f964d2eaf9028ed515cb1c45b9d570df79abb9c' }, h("span", { key: 'ce271384d18d5de5a830401bdd62e257fbb9f3fc', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && (h("span", { key: '018270f5f4d2c9e77b6135a982c2f7fe1d507e97', class: "mr-1", innerHTML: this.formatVariation(this.item.rateplan.selected_variation, this.item.occupancy) }, ' ')), this.item.bed_preference && h("span", { key: '76ed989f2134aaf8428e5ccb96ab4b99832bf35f' }, "(", this.getBedName(), ")")), h("div", { key: '9588c53851eba78ccf38d836c7bb26eb51930620', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, h("div", { key: 'e77305e0278891bbdaabf0679b3d3dc225cc299e', class: "d-flex sm-mb-1 sm-mt-1" }, h("div", { key: '5d97bb9aa2bae2f1a214f3ed09e0e9a8c3737819', class: " sm-padding-top" }, h("p", { key: '60ef1894837f22bb3ae1790cbf447342c65d1263', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales.entries.Lcz_Breakdown}:`)), h("div", { key: '501ced9cea6aad5097e5dc9c4cb5bd23f4b56b67', class: 'flex-fill' }, h("table", { key: '78319a34e48782546c7ed4108a9f813f5ec32266' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (h("tr", null, h("td", { class: 'pr-2 text-right' }, _getDay(item.date)), h("td", { class: "text-right" }, formatAmount(this.currency, item.amount)), item.cost > 0 && item.cost !== null && h("td", { class: "pl-2 text-left night-cost" }, formatAmount(this.currency, item.cost))));
            }), h("tr", { key: 'e8df4d101a9b111ba38d962e2bc62199f393f6ce', class: '' }, h("th", { key: 'a0882d7e88e046ecbbcadf5359702e123e5c63d3', class: "text-right pr-2 subtotal_row" }, locales.entries.Lcz_SubTotal), h("th", { key: '0beafb0cc7f8ec44611229d18106eeac341d82b7', class: "text-right subtotal_row" }, formatAmount(this.currency, this.item.total)), this.item.gross_cost > 0 && this.item.gross_cost !== null && h("th", { key: 'd263b69d2323c76567a5c168a8d322d36cb8aafb', class: "pl-2 text-right night-cost" }, formatAmount(this.currency, this.item.cost))), this.bookingEvent.is_direct ? (h(Fragment, null, (() => {
            const filtered_data = calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), h("td", { class: "text-right" }, formatAmount(this.currency, (this.item.total * d.pct) / 100)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (h("td", { class: "pl-2 text-right night-cost" }, formatAmount(this.currency, (this.item.cost * d.pct) / 100)))));
            });
        })())) : (h(Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (h("tr", null, h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales.entries.Lcz_Excluding : locales.entries.Lcz_Including, " ", d.name), h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), this.bookingEvent.is_direct && (h(Fragment, { key: '85186d3f79a284f997c8bc02eeb1692521d9a418' }, this.item.rateplan.cancelation && (h("ir-label", { key: 'ac79ed109ad3f0f4818147d085d640f2a470be42', labelText: `${locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.item.rateplan.cancelation || '', renderContentAsHtml: true })), this.item.rateplan.guarantee && (h("ir-label", { key: '60a03f05eefec3dc971e3ac9ef8d8d96a1f037e3', labelText: `${locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.item.rateplan.guarantee || '', renderContentAsHtml: true })))))), h("ir-modal", { key: '1fd22f10f66f5eaa3293ab59c6f2c96a4c4514af', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales.entries.Lcz_Confirmation, modalBody: `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales.entries.Lcz_FromThisBooking}` })));
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
            "bookingEvent": {
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
                }
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
                "attribute": "is-editable",
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
                }
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
                "propName": "bookingEvent",
                "methodName": "handleBookingEventChange"
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
