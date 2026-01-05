import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, b as booking_listing } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { o as getPrivateNote } from './booking.js';
import { B as isPrivilegedUser } from './utils.js';
import { d as defineCustomElement$f } from './ir-actions-cell2.js';
import { d as defineCustomElement$e } from './ir-balance-cell2.js';
import { d as defineCustomElement$d } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$c } from './ir-booked-on-cell2.js';
import { d as defineCustomElement$b } from './ir-booking-listing-mobile-card2.js';
import { d as defineCustomElement$a } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$9 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-dates-cell2.js';
import { d as defineCustomElement$6 } from './ir-dialog2.js';
import { d as defineCustomElement$5 } from './ir-pagination2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-status-activity-cell2.js';
import { d as defineCustomElement$2 } from './ir-unit-cell2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irBookingListingTableCss = ".sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}";
const IrBookingListingTableStyle0 = irBookingListingTableCss;

const tableCss = ".ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:#e3f3fa !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize}.sortable.sc-ir-booking-listing-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--blue)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}";
const IrBookingListingTableStyle1 = tableCss;

const IrBookingListingTable = /*@__PURE__*/ proxyCustomElement(class IrBookingListingTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openBookingDetails = createEvent(this, "openBookingDetails", 7);
        this.requestPageChange = createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange", 7);
    }
    booking_nbr;
    isLoading;
    isLoadMoreLoading = false;
    openBookingDetails;
    requestPageChange;
    requestPageSizeChange;
    bookingListingsService = new BookingListingService();
    async deleteBooking() {
        if (!this.booking_nbr) {
            return;
        }
        try {
            this.isLoading = true;
            await this.bookingListingsService.removeExposedBooking(this.booking_nbr, true);
            booking_listing.bookings = [...booking_listing.bookings.filter(b => b.booking_nbr?.toString() !== this.booking_nbr)];
            this.booking_nbr = null;
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    calculateTotalPersons(booking) {
        const sumOfOccupancy = ({ adult_nbr, children_nbr, infant_nbr }) => {
            return (adult_nbr ?? 0) + (children_nbr ?? 0) + (infant_nbr ?? 0);
        };
        return booking.rooms.reduce((prev, cur) => {
            return sumOfOccupancy(cur.occupancy) + prev;
        }, 0);
    }
    handleIrActions({ action, booking }) {
        switch (action) {
            case 'edit':
                this.openBookingDetails.emit(booking.booking_nbr);
                break;
            case 'delete':
                this.booking_nbr = booking.booking_nbr;
                break;
            default:
                console.warn(`${action} not handled`);
        }
    }
    handlePageChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageChange.emit(event.detail);
    }
    handlePageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageSizeChange.emit(event.detail);
    }
    async loadMoreBookings() {
        if (this.isLoadMoreLoading) {
            return;
        }
        const totalRecords = booking_listing.pagination.totalRecords;
        const currentCount = booking_listing.bookings.length;
        if (!totalRecords || currentCount >= totalRecords) {
            return;
        }
        const pageSize = booking_listing.pagination.pageSize || booking_listing.rowCount || 20;
        const nextStartRow = Math.ceil(currentCount / pageSize) * pageSize;
        const nextEndRow = Math.min(nextStartRow + pageSize, totalRecords);
        this.isLoadMoreLoading = true;
        try {
            await this.bookingListingsService.getExposedBookings({
                ...booking_listing.userSelection,
                start_row: nextStartRow,
                end_row: nextEndRow,
                is_to_export: false,
            }, { append: true });
        }
        catch (error) {
            console.error('Failed to load more bookings', error);
        }
        finally {
            this.isLoadMoreLoading = false;
        }
    }
    renderRow(booking) {
        const rowKey = `${booking.booking_nbr}`;
        const totalPersons = this.calculateTotalPersons(booking);
        const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
        return (h("tr", { class: "ir-table-row", key: rowKey }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("td", null, booking.property.name), h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, locales.entries.Lcz_ExtraServices))), h("td", { class: "text-center" }, h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        const canLoadMore = booking_listing.bookings.length > 0 && booking_listing.bookings.length < pagination.totalRecords;
        return (h(Host, { key: '5824a775169ac1a974610728b2481ec1742f8132' }, h("div", { key: '33f7466558487812f5a0f5987192796f36ad46ea', class: "table--container" }, h("table", { key: '419e638964bfa1f3304a74a006c4b3f8f8af3e2b', class: "table data-table" }, h("thead", { key: '2f0814423a9b367323dd781f413c587ec5d83786' }, h("tr", { key: 'c68ed6f11c085d67ce09d796ae080f5da17961ed' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: 'd1576aa939d3e93ca320589e54d6781a5ad282c7', class: "text-left" }, "Property"), h("th", { key: '8dcdba219953be2174ef576b4b3703aa3597864f' }, h("span", { key: 'b5751bb862c4a1122233db87de0aaf1eaca5d924', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '58be4c261b4824ce8301cbf46ce510191db42e66' }, "Booked on"), h("th", { key: 'dc87c4efc96daac5b7c4fa1ed0348d46c19367c7' }, h("div", { key: '41a257a2ea62b3ea9c5684e6d94bc1503331fdd0' }, h("p", { key: '131dffb2a2fd6b21bb1ed8f927cc4d6545fa613d' }, "Booked by"))), h("th", { key: '930c9afb04a51984cc98f611ee9230854bcd1a26' }, "Dates"), h("th", { key: 'dde14f5f3c306fefef47f59df12064a92a08bb8a' }, "Services"), h("th", { key: '957d0c7e71a11d43ca0ef6f680842cd16d9794de', class: "text-center" }, h("p", { key: '1a23a61cd74a4e061fb4f6692fa388248b42d099' }, "Amount "), h("wa-tooltip", { key: '7c4c26b2010afcdd07cac22f7d82a2577c21e7ac', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: '44bcb988e8823e30aae25fa536c3e48a45b26b54', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: 'cb365144daec9156b1e8d5a0de3209f113da6d28', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '3ea6c318f6fe1f264a6005242f373357a1f9e981', class: "text-center" }, "Status"), h("th", { key: '6e8d10bb4c0d839a11fea0ecc82ad134d4372e45' }))), h("tbody", { key: 'c7ad8d76b855da4b5bfe246d344ba5e68dbd17f6' }, booking_listing.bookings.length === 0 && (h("tr", { key: '8f1440e045f60f3285e6d8cd4734a9c505ea115a' }, h("td", { key: '6c8e7e014067b0cb228e1137731a601df3c3bed6', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: 'e5a22507ff096cdc51a09bcac5b46daf3d42618c', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: '6b6a4d98a9c6e5d990ffa8468c8978117ed0e5e9', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: '17e2fe446fdc037df02728a0c30e85c977258f6d', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, "Load more")), h("ir-dialog", { key: '2f2f41bf6e97b48394f8d3f2717aad47ff4043c8', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: 'ad3bd070cf8fba4847ffabd95768b28d9f40b7fe' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: 'ad31ffb653fa670438224c4c9f245d7252d290d6', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '84d9aa37972f71725f715840e0a07a367b3e4f95', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'eb5ee10581e3c9713074b63edce2d828347c2055', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "medium", variant: "danger" }, "Confirm")))));
    }
    static get style() { return IrBookingListingTableStyle0 + IrBookingListingTableStyle1; }
}, [2, "ir-booking-listing-table", {
        "booking_nbr": [32],
        "isLoading": [32],
        "isLoadMoreLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-listing-table", "ir-actions-cell", "ir-balance-cell", "ir-booked-by-cell", "ir-booked-on-cell", "ir-booking-listing-mobile-card", "ir-booking-number-cell", "ir-booking-status-tag", "ir-custom-button", "ir-dates-cell", "ir-dialog", "ir-pagination", "ir-select", "ir-status-activity-cell", "ir-unit-cell", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-listing-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingListingTable);
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-booked-on-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-booking-listing-mobile-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-status-activity-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-unit-cell":
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

export { IrBookingListingTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-listing-table2.js.map