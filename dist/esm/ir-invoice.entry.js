import { r as registerInstance, c as createEvent, h, H as Host } from './index-b3dce66a.js';
import { b as buildSplitIndex, f as formatAmount } from './utils-bb2f2deb.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

const irInvoiceCss = ".sc-ir-invoice-h{display:block}.ir-invoice__container.sc-ir-invoice{display:grid;gap:var(--wa-space-l);box-sizing:border-box}.ir-invoice__service.sc-ir-invoice:last-child{border-bottom-left-radius:var(--wa-border-radius-m);border-bottom-right-radius:var(--wa-border-radius-m)}.ir-invoice__service.sc-ir-invoice:first-child{border-top-left-radius:var(--wa-border-radius-m);border-top-right-radius:var(--wa-border-radius-m);border-top:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color)}.ir-invoice__service.sc-ir-invoice{border-bottom:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-left:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-right:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);background-color:var(--wa-color-surface-default);display:flex;align-items:center;box-sizing:border-box;width:100%}.ir-invoice__service.sc-ir-invoice:hover{background-color:color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover))}.ir-invoice__checkbox.sc-ir-invoice,.ir-invoice__checkbox.sc-ir-invoice::part(base){height:100%;width:100%;display:flex;box-sizing:border-box}.ir-invoice__checkbox.sc-ir-invoice::part(base){min-height:var(--wa-form-control-height);padding:0 var(--wa-form-control-padding-inline);display:flex;align-items:center;box-sizing:border-box;width:100%}.ir-invoice__checkbox.group.sc-ir-invoice::part(base){padding-block:1rem;align-items:flex-start}.ir-invoice__room-checkbox-container.sc-ir-invoice{display:flex;align-items:center;gap:0.5rem}.ir-invoice__room-checkbox-container.group.sc-ir-invoice{flex-direction:column}.ir-invoice__checkbox-price.sc-ir-invoice{font-weight:700;color:var(--wa-color-neutral-900);white-space:nowrap;text-align:right;flex:1 1 0%}.ir-invoice__form-control-label.sc-ir-invoice{display:inline-flex;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em}";
const IrInvoiceStyle0 = irInvoiceCss;

const IrInvoice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.invoiceOpen = createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = createEvent(this, "invoiceClose", 7);
        this.invoiceCreated = createEvent(this, "invoiceCreated", 7);
    }
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
    invoiceFormRef;
    room;
    componentWillLoad() {
        if (this.booking) {
            this.selectedRecipient = this.booking.guest.id.toString();
            if (this.for === 'room' && this.roomIdentifier) {
                this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
            }
        }
    }
    handleBookingChange() {
        if (this.booking) {
            this.selectedRecipient = this.booking.guest.id.toString();
            if (this.for === 'room' && this.roomIdentifier) {
                this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
            }
        }
    }
    /**
     * Opens the invoice drawer.
     *
     * This method sets the `open` property to `true`, making the drawer visible.
     * It can be called programmatically by parent components.
     *
     * Also emits the `invoiceOpen` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async openDrawer() {
        this.open = true;
        this.invoiceOpen.emit();
    }
    /**
     * Closes the invoice drawer.
     *
     * This method sets the `open` property to `false`, hiding the drawer.
     * Parent components can call this to close the drawer programmatically,
     * and it is also used internally when the drawer emits `onDrawerHide`.
     *
     * Also emits the `invoiceClose` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async closeDrawer() {
        this.open = false;
        this.invoiceFormRef.reset();
        this.selectedRecipient = this.booking?.guest?.id?.toString();
        this.invoiceClose.emit();
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
        return (h(Host, { key: '678e009501fec6747c01ee0a4a7f6d6c9d7ceed7' }, h("ir-drawer", { key: '45c42ff8a45326486783321b53bb848ac5d43026', label: "Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("form", { key: '5c9b94860c8121a23db8aaadadaa098f454331b2', ref: el => (this.invoiceFormRef = el), class: "ir-invoice__container" }, h("ir-custom-date-picker", { key: '2ed42905cf4d0cccf82d34d888420921c216cd78', label: "Date", date: hooks().format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), h("ir-booking-billing-recipient", { key: '65ae41ec0d5d0298cf254eff0f6b3361cff270a3', onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), h("div", { key: '21d3928333189bb78b5d56e56e20e9ba6f2da35e', class: 'ir-invoice__services' }, h("p", { key: '9f68ebd963e49723ee462c6468a3d0aa477a90a0', class: "ir-invoice__form-control-label" }, "Choose what to invoice"), h("div", { key: '0d397f83776854c40bef9ce22fd8f2e51a260c1d', class: "ir-invoice__services-container" }, this.renderRooms(), this.booking.pickup_info && (h("div", { key: '006b4077bd25aa5fd1a5f58513bb1a1fdf589a9d', class: "ir-invoice__service" }, h("wa-checkbox", { key: '26faf09ac4dcf3109763d8ca4246fb47deab709c', class: "ir-invoice__checkbox" }, h("div", { key: '214ef837404fbe85fbd61c2e5c875f5f82bdbf0d' }, "Pickup")))), this.booking.extra_services?.map(extra_service => (h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, h("wa-checkbox", { class: "ir-invoice__checkbox" }, h("div", null)))))))), h("div", { key: '9e2cb975151aa015d069cc712873bfa475761133', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '538ffa5bed5a4de71488df3ea8f85effa9d0c2e8', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: 'ba769d5e22f91cacf6633fd63cc9317c572561fa', onClickHandler: () => {
                this.handleConfirmInvoice(true);
            }, size: "medium", class: "w-100 flex-fill", appearance: "outlined", variant: "brand" }, "Pro-forma invoice"), h("ir-custom-button", { key: 'c512c70b0d2e638093fd0285f0aade54191381f0', onClickHandler: () => {
                this.handleConfirmInvoice();
            }, class: "w-100 flex-fill", size: "medium", variant: "brand" }, "Confirm invoice")))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrInvoice.style = IrInvoiceStyle0;

export { IrInvoice as ir_invoice };

//# sourceMappingURL=ir-invoice.entry.js.map