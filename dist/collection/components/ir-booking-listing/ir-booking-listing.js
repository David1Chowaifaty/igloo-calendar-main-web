import { BookingListingService } from "../../services/booking_listing.service";
import { RoomService } from "../../services/room.service";
import booking_listing, { updateUserSelection, onBookingListingChange } from "../../stores/booking_listing.store";
import locales from "../../stores/locales.store";
import { formatAmount } from "../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { _formatTime } from "../ir-booking-details/functions";
import { getPrivateNote } from "../../utils/booking";
import Token from "../../models/Token";
import { isSingleUnit } from "../../stores/calendar-data";
export class IrBookingListing {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.roomService = new RoomService();
        this.token = new Token();
        this.statusColors = {
            '001': 'badge-warning',
            '002': 'badge-success',
            '003': 'badge-danger',
            '004': 'badge-danger',
        };
        this.language = '';
        this.ticket = '';
        this.propertyid = undefined;
        this.rowCount = 10;
        this.p = undefined;
        this.isLoading = false;
        this.currentPage = 1;
        this.totalPages = 1;
        this.oldStartValue = 0;
        this.editBookingItem = null;
        this.showCost = false;
    }
    componentWillLoad() {
        updateUserSelection('end_row', this.rowCount);
        booking_listing.rowCount = this.rowCount;
        if (this.ticket !== '') {
            booking_listing.token = this.ticket;
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        onBookingListingChange('userSelection', async (newValue) => {
            const newTotal = newValue.total_count;
            this.totalPages = Math.ceil(newTotal / this.rowCount);
        });
        onBookingListingChange('bookings', async (newValue) => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        booking_listing.token = this.ticket;
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [this.bookingListingService.getExposedBookingsCriteria(propertyId), this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT'])];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            await Promise.all(requests);
            updateUserSelection('property_id', propertyId);
            await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false }));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            this.editBookingItem = null;
        }
    }
    getPaginationBounds() {
        const totalCount = booking_listing.userSelection.total_count;
        const startItem = (this.currentPage - 1) * this.rowCount;
        let endItem = this.currentPage * this.rowCount;
        endItem = endItem > totalCount ? totalCount : endItem;
        return { startItem, endItem, totalCount };
    }
    openModal() {
        this.listingModalTimeout = setTimeout(() => {
            this.listingModal = this.el.querySelector('ir-listing-modal');
            this.listingModal.editBooking = this.editBookingItem;
            this.listingModal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.listingModalTimeout);
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false }));
    }
    async handleResetStoreData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false }));
    }
    handleBookingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        booking_listing.bookings = [
            ...booking_listing.bookings.map(b => {
                if (b.booking_nbr === e.detail.booking_nbr) {
                    return e.detail;
                }
                return b;
            }),
        ];
    }
    renderItemRange() {
        const { endItem, startItem, totalCount } = this.getPaginationBounds();
        return `${locales.entries.Lcz_View} ${startItem + 1} - ${endItem} ${locales.entries.Lcz_Of} ${totalCount}`;
    }
    async updateData() {
        const { endItem, startItem } = this.getPaginationBounds();
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false, start_row: startItem, end_row: endItem }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (this.isLoading || this.ticket === '') {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("div", { class: "p-1 main-container" }, h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), h("section", null, h("div", { class: "card p-1 flex-fill m-0 mt-2" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, (_a = locales.entries) === null || _a === void 0 ? void 0 :
            _a.Lcz_Booking, "#"), h("th", { scope: "col" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_BookedOn), h("th", { scope: "col" }, (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_GuestSource), h("th", { scope: "col", class: "text-left services-cell" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Services), h("th", { scope: "col", class: "in-out" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Dates), h("th", { scope: "col" }, h("span", { class: "price-span" }, (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_Amount), h("ir-tooltip", { customSlot: true, message: `<span style="width:100%;display:block;">${(_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_BookingBalance}</span><span>${(_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ClickToSettle}</span>` }, h("span", { slot: "tooltip-trigger", class: 'm-0 btn due-btn' }, (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Balance))), this.showCost && (h("th", { scope: "col", class: "services-cell" }, (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_Cost)), h("th", { scope: "col" }, (_l = locales.entries) === null || _l === void 0 ? void 0 : _l.Lcz_Status), h("th", { scope: "col" }, h("p", { class: "sr-only" }, "actions")))), h("tbody", { class: "" }, booking_listing.bookings.length === 0 && (h("tr", null, h("td", { colSpan: 8 }, (_m = locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_NoDataAvailable))), (_o = booking_listing.bookings) === null || _o === void 0 ? void 0 :
            _o.map(booking => {
                var _a, _b, _c;
                let confirmationBG = this.statusColors[booking.status.code];
                return (h("tr", { key: booking.booking_nbr }, h("td", { class: "text-left" }, h("button", { onClick: () => (this.editBookingItem = { booking, cause: 'edit' }), class: "booking_number" }, booking.booking_nbr)), h("td", null, h("p", { class: "p-0 m-0 date-p" }, moment(booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { class: "p-0 m-0 secondary-p" }, _formatTime(booking.booked_on.hour.toString(), booking.booked_on.minute.toString()))), h("td", null, h("div", { class: "h-100 d-flex align-items-center ", style: { width: 'max-content' } }, h("img", { class: "mr-2 logo", src: booking.origin.Icon, alt: booking.origin.Label }), h("div", { class: "text-left" }, h("div", { class: "d-flex align-items-center" }, booking.guest.nbr_confirmed_bookings > 1 && !booking.agent && (h("div", { class: "m-0 p-0" }, h("ir-tooltip", { message: `${locales.entries.Lcz_BookingsNbr}`.replace('%1', booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, h("div", { class: "d-flex align-items-center my-0 p-0", slot: "tooltip-trigger", style: { marginRight: '0.5rem' } }, h("ir-icons", { style: { '--icon-size': '0.875rem' }, color: "#FB0AAD", name: "heart-fill" }))))), h("div", { class: "booking_name m-0 p-0" }, h("button", { class: "booking_number p-0 m-0 ", onClick: () => {
                        this.editBookingItem = { booking, cause: 'guest' };
                    } }, booking.guest.first_name, " ", (_a = booking.guest.last_name) !== null && _a !== void 0 ? _a : ''), h("span", { class: 'p-0 m-0' }, booking.occupancy.adult_nbr, locales.entries.Lcz_P), getPrivateNote(booking.extras) && h("span", { class: "yellow_dot" }))), h("div", { class: 'd-flex align-items-center booking-label-gap' }, h("p", { class: "p-0 m-0 secondary-p" }, booking.origin.Label), booking.is_in_loyalty_mode && !booking.promo_key && (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("title", null, locales.entries.Lcz_LoyaltyDiscountApplied), h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" }))), booking.promo_key && (h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", height: 18, width: 18 }, h("title", null, locales.entries.Lcz_Coupon + ':' + booking.promo_key), h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" }))))))), h("td", null, h("ul", null, booking.rooms.map(room => {
                    var _a, _b, _c, _d, _e, _f, _g;
                    return (h("li", null, h("div", { class: 'room-service' }, h("p", { class: 'm-0 p-0' }, room.roomtype.name), room.unit &&
                        !isSingleUnit(room.roomtype.id) &&
                        (((_b = (_a = room.unit) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 4 ? (h("ir-tooltip", { customSlot: true, message: (_c = room.unit) === null || _c === void 0 ? void 0 : _c.name }, h("p", { class: 'room-name-container cursor-pointer m-0', slot: "tooltip-trigger" }, (_e = (_d = room.unit) === null || _d === void 0 ? void 0 : _d.name) === null || _e === void 0 ? void 0 : _e.substring(0, 4)))) : (h("p", { class: 'room-name-container  m-0' }, (_g = (_f = room.unit) === null || _f === void 0 ? void 0 : _f.name) === null || _g === void 0 ? void 0 : _g.substring(0, 4)))))));
                }), booking.extra_services && h("li", null, locales.entries.Lcz_ExtraServices))), h("td", null, h("p", { class: "p-0 m-0 date-p" }, moment(booking.from_date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { class: "p-0 m-0 date-p" }, moment(booking.to_date, 'YYYY-MM-DD').format('DD-MMM-YYYY'))), h("td", null, h("p", { class: "p-0 m-0" }, formatAmount(booking.currency.symbol, (_c = (_b = booking.financial) === null || _b === void 0 ? void 0 : _b.gross_total) !== null && _c !== void 0 ? _c : 0)), booking.financial.due_amount > 0 && (h("buuton", { onClick: () => {
                        this.editBookingItem = { booking, cause: 'payment' };
                        this.openModal();
                    }, class: "btn p-0 m-0 due-btn" }, formatAmount(booking.currency.symbol, booking.financial.due_amount)))), this.showCost && (h("td", null, booking.financial.gross_cost !== null && booking.financial.gross_cost === 0
                    ? '_'
                    : formatAmount(booking.currency.symbol, booking.financial.gross_cost))), h("td", null, h("p", { class: `m-0 badge ${confirmationBG} ct_ir_badge` }, booking.status.description)), h("td", null, h("div", { class: "d-flex justify-content-center align-items-center", style: { gap: '8px' } }, h("ir-button", { title: "Edit booking", variant: "icon", icon_name: "edit", onClickHandler: () => (this.editBookingItem = { booking, cause: 'edit' }) }), h("ir-button", { title: "Delete booking", style: { '--icon-button-color': '#ff4961', '--icon-button-hover-color': '#FF1635' }, variant: "icon", icon_name: "trash", onClickHandler: () => {
                        this.editBookingItem = { booking, cause: 'delete' };
                        this.openModal();
                    } })))));
            }))), this.totalPages > 1 && (h("section", { class: 'd-flex flex-column flex-md-row align-items-center justify-content-between pagination-container' }, h("p", { class: "m-0 mb-1 mb-md-0" }, this.renderItemRange()), h("div", { class: 'd-flex align-items-center buttons-container' }, h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHandler: async () => {
                this.currentPage = 1;
                await this.updateData();
            }, icon_name: "angles_left", style: { '--icon-size': '0.875rem' } }), h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHandler: async () => {
                this.currentPage = this.currentPage - 1;
                await this.updateData();
            }, icon_name: "angle_left", style: { '--icon-size': '0.875rem' } }), h("ir-select", { selectedValue: this.currentPage.toString(), LabelAvailable: false, showFirstOption: false, onSelectChange: async (e) => {
                this.currentPage = +e.detail;
                await this.updateData();
            }, data: Array.from(Array(this.totalPages), (_, i) => i + 1).map(i => ({
                text: i.toString(),
                value: i.toString(),
            })) }), h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHandler: async () => {
                this.currentPage = this.currentPage + 1;
                await this.updateData();
            }, icon_name: "angle_right", style: { '--icon-size': '0.875rem' } }), h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHandler: async () => {
                this.currentPage = this.totalPages;
                console.log(this.currentPage);
                await this.updateData();
            }, icon_name: "angles_right", style: { '--icon-size': '0.875rem' } }))))))), this.editBookingItem && h("ir-listing-modal", { onModalClosed: () => (this.editBookingItem = null) }), h("ir-sidebar", { onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.editBookingItem !== null && ['edit', 'guest'].includes(this.editBookingItem.cause), showCloseButton: false, sidebarStyles: ((_p = this.editBookingItem) === null || _p === void 0 ? void 0 : _p.cause) === 'guest' ? { background: 'white' } : { width: this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)', background: '#F2F3F8' } }, ((_q = this.editBookingItem) === null || _q === void 0 ? void 0 : _q.cause) === 'edit' && (h("ir-booking-details", { slot: "sidebar-body", p: this.p, hasPrint: true, hasReceipt: true, is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), bookingNumber: this.editBookingItem.booking.booking_nbr, ticket: this.ticket, language: this.language, hasRoomAdd: true })), ((_r = this.editBookingItem) === null || _r === void 0 ? void 0 : _r.cause) === 'guest' && (h("ir-guest-info", { slot: "sidebar-body", headerShown: true, booking_nbr: (_t = (_s = this.editBookingItem) === null || _s === void 0 ? void 0 : _s.booking) === null || _t === void 0 ? void 0 : _t.booking_nbr, email: (_v = (_u = this.editBookingItem) === null || _u === void 0 ? void 0 : _u.booking) === null || _v === void 0 ? void 0 : _v.guest.email, language: this.language, onCloseSideBar: () => (this.editBookingItem = null) })))));
    }
    static get is() { return "ir-booking-listing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "''"
            },
            "ticket": {
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
                "attribute": "ticket",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
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
                "attribute": "propertyid",
                "reflect": false
            },
            "rowCount": {
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
                "attribute": "row-count",
                "reflect": false,
                "defaultValue": "10"
            },
            "p": {
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
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "currentPage": {},
            "totalPages": {},
            "oldStartValue": {},
            "editBookingItem": {},
            "showCost": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "resetData",
                "method": "handleResetData",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resetBookingData",
                "method": "handleResetStoreData",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bookingChanged",
                "method": "handleBookingChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
