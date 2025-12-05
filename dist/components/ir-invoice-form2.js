import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { m as buildSplitIndex, f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$7 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$6 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-custom-input2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irInvoiceFormCss = ".sc-ir-invoice-form-h{display:block;height:100%}.ir-invoice__container.sc-ir-invoice-form{display:grid;gap:var(--wa-space-l);box-sizing:border-box}.ir-invoice__service.sc-ir-invoice-form:last-child{border-bottom-left-radius:var(--wa-border-radius-m);border-bottom-right-radius:var(--wa-border-radius-m)}.ir-invoice__service.sc-ir-invoice-form:first-child{border-top-left-radius:var(--wa-border-radius-m);border-top-right-radius:var(--wa-border-radius-m);border-top:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color)}.ir-invoice__service.sc-ir-invoice-form{border-bottom:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-left:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-right:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);background-color:var(--wa-color-surface-default);display:flex;align-items:center;box-sizing:border-box;width:100%}.ir-invoice__service.sc-ir-invoice-form:hover{background-color:color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover))}.ir-invoice__checkbox.sc-ir-invoice-form,.ir-invoice__checkbox.sc-ir-invoice-form::part(base){height:100%;width:100%;display:flex;box-sizing:border-box}.ir-invoice__checkbox.sc-ir-invoice-form::part(base){min-height:var(--wa-form-control-height);padding:0 var(--wa-form-control-padding-inline);display:flex;align-items:center;box-sizing:border-box;width:100%}.ir-invoice__checkbox.group.sc-ir-invoice-form::part(base){padding-block:1rem;align-items:flex-start}.ir-invoice__room-checkbox-container.sc-ir-invoice-form{display:flex;align-items:center;gap:0.5rem}.ir-invoice__room-checkbox-container.group.sc-ir-invoice-form{flex-direction:column}.ir-invoice__checkbox-price.sc-ir-invoice-form{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right;flex:1 1 0%}.ir-invoice__form-control-label.sc-ir-invoice-form{display:inline-flex;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em}";
const IrInvoiceFormStyle0 = irInvoiceFormCss;

const IrInvoiceForm = /*@__PURE__*/ proxyCustomElement(class IrInvoiceForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceOpen = createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = createEvent(this, "invoiceClose", 7);
        this.invoiceCreated = createEvent(this, "invoiceCreated", 7);
    }
    formId;
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking;
    /**
     * Determines what should happen after creating the invoice.
     * - `"create"`: create an invoice normally
     * - `"check_in-create"`: create an invoice as part of the check-in flow
     */
    mode = 'create';
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for = 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint = false;
    selectedRecipient;
    isLoading;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose;
    /**
     * Emitted when an invoice is created/confirmed.
     *
     * The event `detail` contains:
     * - `booking`: the booking associated with the invoice
     * - `recipientId`: the selected billing recipient
     * - `for`: whether the invoice is for `"room"` or `"booking"`
     * - `roomIdentifier`: the room identifier when invoicing a specific room
     * - `mode`: the current invoice mode
     */
    invoiceCreated;
    room;
    bookingService = new BookingService();
    invoiceInfo;
    componentWillLoad() {
        this.init();
    }
    handleBookingChange() {
        if (this.booking) {
            this.selectedRecipient = this.booking.guest.id.toString();
            if (this.for === 'room' && this.roomIdentifier) {
                this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
            }
        }
    }
    async init() {
        try {
            this.isLoading = true;
            this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            if (this.booking) {
                this.selectedRecipient = this.booking.guest.id.toString();
                if (this.for === 'room' && this.roomIdentifier) {
                    this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
                }
            }
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Handles confirming/creating the invoice.
     *
     * Emits the `invoiceCreated` event with invoice context, and if
     * `autoPrint` is `true`, triggers `window.print()` afterwards.
     */
    handleConfirmInvoice(isProforma = false) {
        if (!isProforma)
            this.invoiceCreated.emit({
                booking: this.booking,
                recipientId: this.selectedRecipient,
                for: this.for,
                roomIdentifier: this.roomIdentifier,
                mode: this.mode,
            });
    }
    getMinDate() {
        if (this.for === 'room') {
            return this.room.to_date;
        }
        const getMinCheckoutDate = () => {
            let minDate = hooks();
            for (const room of this.booking.rooms) {
                const d = hooks(room.to_date, 'YYYY-MM-DD');
                if (d.isBefore(minDate)) {
                    minDate = d.clone();
                }
            }
            return minDate;
        };
        return getMinCheckoutDate().format('YYYY-MM-DD');
    }
    getMaxDate() {
        return hooks().format('YYYY-MM-DD');
    }
    computeRoomGroups(rooms) {
        const indexById = new Map();
        rooms.forEach((room, idx) => indexById.set(room.identifier, idx));
        if (!rooms.length) {
            return { groups: [], indexById, hasSplitGroups: false };
        }
        const groupSortKey = (groupRooms) => {
            let min = Number.MAX_SAFE_INTEGER;
            for (const r of groupRooms) {
                const ts = Date.parse(r?.from_date ?? '');
                if (!Number.isNaN(ts)) {
                    min = Math.min(min, ts);
                }
            }
            return min;
        };
        const splitIndex = buildSplitIndex(rooms);
        if (!splitIndex) {
            const sortedRooms = [...rooms].sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: sortedRooms, order: 0, isSplit: false, sortKey: groupSortKey(sortedRooms) }], indexById, hasSplitGroups: false };
        }
        const roomsById = new Map(rooms.map(room => [room.identifier, room]));
        const grouped = [];
        const visited = new Set();
        for (const head of splitIndex.heads) {
            const chain = splitIndex.chainOf.get(head) ?? [head];
            const chainRooms = chain.map(id => roomsById.get(id)).filter((room) => Boolean(room));
            if (!chainRooms.length)
                continue;
            const chainHasSplitLink = chain.some(id => {
                const parent = splitIndex.parentOf.get(id);
                const children = splitIndex.childrenOf.get(id) ?? [];
                return Boolean(parent) || children.length > 0;
            }) || chainRooms.some(room => Boolean(room?.is_split));
            if (chainHasSplitLink) {
                chainRooms.forEach(room => visited.add(room.identifier));
                const order = Math.min(...chainRooms.map(room => indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER));
                grouped.push({ rooms: chainRooms, order, sortKey: groupSortKey(chainRooms), isSplit: true });
            }
        }
        for (const room of rooms) {
            if (!visited.has(room.identifier)) {
                const order = indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER;
                const singleGroup = [room];
                grouped.push({ rooms: singleGroup, order, sortKey: groupSortKey(singleGroup), isSplit: false });
            }
        }
        grouped.sort((a, b) => {
            if (a.sortKey !== b.sortKey) {
                return a.sortKey - b.sortKey;
            }
            return a.order - b.order;
        });
        const hasSplitGroups = grouped.some(group => group.isSplit);
        if (!hasSplitGroups) {
            const merged = grouped
                .map(group => group.rooms)
                .reduce((acc, curr) => acc.concat(curr), [])
                .sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: merged, order: 0, sortKey: groupSortKey(merged), isSplit: false }], indexById, hasSplitGroups: false };
        }
        return { groups: grouped, indexById, hasSplitGroups: true };
    }
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length) {
            return null;
        }
        const { groups, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            return groupRooms.map(room => (h("div", { class: "ir-invoice__service", key: room.identifier }, h("wa-checkbox", { class: "ir-invoice__checkbox", checked: true }, h("div", { class: 'ir-invoice__room-checkbox-container' }, h("b", null, room.roomtype.name), h("span", null, room.rateplan.short_name), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount('$US', room.gross_total)))))
            // {this.renderRoomItem(room, indexById.get(room.identifier) ?? idx)}
            // {idx < groupRooms.length - 1 ? <wa-divider></wa-divider> : null}
            ));
        }
        return groups.map(group => (h("div", { class: "ir-invoice__service", key: group.order }, h("wa-checkbox", { class: "ir-invoice__checkbox group", checked: true }, h("div", { class: 'ir-invoice__room-checkbox-container group' }, group.rooms.map(room => {
            return (h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", null, room.roomtype.name), h("span", null, room.rateplan.short_name), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount('$US', room.gross_total))));
        }))))));
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        return (h("form", { id: this.formId, onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'pro-forma') {
                    this.handleConfirmInvoice(true);
                }
                else if (submitter?.value === 'invoice') {
                    this.handleConfirmInvoice();
                }
            }, class: "ir-invoice__container" }, h("ir-custom-date-picker", { label: "Date", date: hooks().format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), h("ir-booking-billing-recipient", { onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), h("div", { class: 'ir-invoice__services' }, h("p", { class: "ir-invoice__form-control-label" }, "Choose what to invoice"), h("div", { class: "ir-invoice__services-container" }, this.renderRooms(), this.booking.pickup_info && (h("div", { class: "ir-invoice__service" }, h("wa-checkbox", { class: "ir-invoice__checkbox" }, h("div", null, "Pickup")))), this.booking.extra_services?.map(extra_service => (h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, h("wa-checkbox", { class: "ir-invoice__checkbox" }, h("div", null)))))))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrInvoiceFormStyle0; }
}, [2, "ir-invoice-form", {
        "formId": [1, "form-id"],
        "open": [1540],
        "booking": [16],
        "mode": [1],
        "for": [1],
        "roomIdentifier": [1, "room-identifier"],
        "autoPrint": [4, "auto-print"],
        "selectedRecipient": [32],
        "isLoading": [32],
        "invoiceInfo": [32]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice-form", "ir-booking-billing-recipient", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoiceForm);
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrInvoiceForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-invoice-form2.js.map