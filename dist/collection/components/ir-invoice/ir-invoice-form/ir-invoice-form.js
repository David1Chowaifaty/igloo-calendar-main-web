import { BookingService } from "../../../services/booking-service/booking.service";
import { buildSplitIndex } from "../../../utils/booking";
import { formatAmount } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrInvoiceForm {
    /**
     * Controls how the invoice form behaves (e.g., "invoice", "proforma", "preview").
     */
    viewMode = 'invoice';
    /**
     * Unique ID applied to the underlying <form> element.
     */
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
    invoiceInfo;
    selectedRecipient;
    isLoading;
    selectedItemKeys = new Set();
    invoicableKey;
    toBeInvoicedItems;
    invoiceDate = moment();
    notInvoiceableItemKeys = new Set();
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
    previewProformaInvoice;
    loadingChange;
    room;
    splitDisabledKeys = new Set();
    confirmButtonRef;
    bookingService = new BookingService();
    invoiceTarget;
    componentWillLoad() {
        this.init();
    }
    componentDidLoad() {
        this.confirmButtonRef = document.querySelector(`#confirm-btn_${this.formId}`);
    }
    handleViewModeChange() {
        this.enforceNonInvoiceableSelections();
    }
    handleBookingChange() {
        if (this.booking) {
            this.selectedRecipient = this.booking.guest.id.toString();
            if (this.for === 'room' && this.roomIdentifier) {
                this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
            }
        }
        this.setUpDisabledItems();
    }
    handleInvoiceInfoChange() {
        this.setupInvoicables(this.invoiceInfo);
    }
    setUpDisabledItems() {
        if (!this.booking || !this.invoicableKey?.size) {
            this.notInvoiceableItemKeys = new Set();
            this.splitDisabledKeys = new Set();
            return;
        }
        const invoiceDate = (this.invoiceDate ?? moment()).clone().startOf('day');
        const disabledKeys = new Set();
        this.splitDisabledKeys = new Set();
        const markIfBefore = (key, dateStr, options) => {
            if (options?.checkedOut) {
                return;
            }
            if (typeof key !== 'number' || !this.invoicableKey.has(key) || !dateStr) {
                return;
            }
            const parsed = moment(dateStr, 'YYYY-MM-DD', true);
            if (parsed.isValid() && invoiceDate.isBefore(parsed.clone().startOf('day'))) {
                disabledKeys.add(key);
            }
        };
        const rooms = this.booking.rooms ?? [];
        rooms.forEach(room => {
            markIfBefore(room.system_id, room.to_date, { checkedOut: room?.in_out?.code === '002' });
        });
        const pickupInfo = this.booking.pickup_info;
        if (pickupInfo) {
            markIfBefore(pickupInfo?.system_id, pickupInfo?.from_date ?? pickupInfo?.date);
        }
        (this.booking.extra_services ?? []).forEach(extra => {
            markIfBefore(extra.system_id, extra?.from_date ?? extra.start_date ?? extra.end_date ?? this.booking.from_date);
        });
        const splitIndex = buildSplitIndex(rooms);
        if (splitIndex) {
            const roomsByIdentifier = new Map(rooms.map(room => [room.identifier, room]));
            splitIndex.heads.forEach(head => {
                const chain = splitIndex.chainOf.get(head) ?? [];
                if (chain.length <= 1) {
                    return;
                }
                const tailIdentifier = chain[chain.length - 1];
                const tailRoom = roomsByIdentifier.get(tailIdentifier);
                if (!tailRoom) {
                    return;
                }
                const tailCheckedOut = tailRoom.in_out?.code === '002';
                chain.forEach(identifier => {
                    const room = roomsByIdentifier.get(identifier);
                    if (!room || typeof room.system_id !== 'number' || !this.invoicableKey.has(room.system_id)) {
                        return;
                    }
                    if (tailCheckedOut) {
                        disabledKeys.delete(room.system_id);
                        return;
                    }
                    disabledKeys.add(room.system_id);
                    this.splitDisabledKeys.add(room.system_id);
                });
            });
        }
        this.notInvoiceableItemKeys = disabledKeys;
        this.enforceNonInvoiceableSelections(disabledKeys);
    }
    enforceNonInvoiceableSelections(disabledKeys = this.notInvoiceableItemKeys ?? new Set()) {
        if (!disabledKeys.size) {
            return;
        }
        const nextKeys = new Set(this.selectedItemKeys);
        let changed = false;
        disabledKeys.forEach(key => {
            const isSplitDisabled = this.splitDisabledKeys.has(key);
            if (this.viewMode === 'proforma' && !isSplitDisabled) {
                if (!nextKeys.has(key)) {
                    nextKeys.add(key);
                    changed = true;
                }
                return;
            }
            if (nextKeys.delete(key)) {
                changed = true;
            }
        });
        if (changed) {
            this.syncSelectedItems(nextKeys);
        }
    }
    syncSelectedItems(selectedKeys) {
        this.selectedItemKeys = selectedKeys;
        const selectedItems = [];
        selectedKeys.forEach(key => {
            const item = this.invoicableKey?.get(key);
            if (item) {
                selectedItems.push(item);
            }
        });
        this.toBeInvoicedItems = selectedItems;
        if (!this.confirmButtonRef) {
            return;
        }
        if (this.toBeInvoicedItems.length === 0) {
            this.confirmButtonRef.disabled = true;
        }
        else {
            if (this.confirmButtonRef.disabled) {
                this.confirmButtonRef.disabled = false;
            }
        }
    }
    canInvoiceRoom(room) {
        return Boolean(room && this.invoicableKey?.has(room.system_id));
    }
    hasInvoiceableRooms(rooms) {
        return rooms.some(room => this.canInvoiceRoom(room));
    }
    getInvoiceableRoomIds(rooms) {
        const ids = [];
        rooms.forEach(room => {
            if (this.canInvoiceRoom(room)) {
                ids.push(room.system_id);
            }
        });
        return ids;
    }
    async init() {
        try {
            this.isLoading = true;
            // let invoiceInfo = this.invoiceInfo;
            // if (!this.invoiceInfo) {
            const [booking, invoiceInfo] = await Promise.all([
                this.bookingService.getExposedBooking(this.booking.booking_nbr, 'en', true),
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
            ]);
            this.booking = { ...booking };
            // }
            this.setupInvoicables(invoiceInfo);
            if (this.booking) {
                this.selectedRecipient = this.booking.guest.id.toString();
                if (this.for === 'room' && this.roomIdentifier) {
                    this.room = this.booking.rooms.find(r => r.identifier === this.roomIdentifier);
                }
            }
            this.invoiceTarget = await this.bookingService.getSetupEntriesByTableName('_INVOICE_TARGET');
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    setupInvoicables(invoiceInfo) {
        const invoiceableItems = (invoiceInfo.invoiceable_items ?? []).filter(item => item.is_invoiceable);
        this.invoicableKey = new Map(invoiceableItems.map(item => [item.key, item]));
        this.syncSelectedItems(new Set(invoiceableItems.map(item => item.key)));
        this.setUpDisabledItems();
    }
    /**
     * Handles confirming/creating the invoice.
     *
     * Emits the `invoiceCreated` event with invoice context, and if
     * `autoPrint` is `true`, triggers `window.print()` afterwards.
     */
    async handleConfirmInvoice(isProforma = false) {
        try {
            this.loadingChange.emit(true);
            const billed_to_name = this.selectedRecipient?.startsWith('room__') ? this.selectedRecipient.replace('room__', '').trim() : '';
            let target;
            const setTarget = (code) => {
                let f = this.invoiceTarget.find(t => t.CODE_NAME === code);
                if (!f) {
                    throw new Error(`Invalid code ${code}`);
                }
                return {
                    code: f.CODE_NAME,
                    description: f.CODE_VALUE_EN,
                };
            };
            if (this.selectedRecipient === 'company') {
                target = setTarget('002');
            }
            else {
                target = setTarget('001');
            }
            const invoice = {
                booking_nbr: this.booking.booking_nbr,
                currency: { id: this.booking.currency.id },
                Date: this.invoiceDate.format('YYYY-MM-DD'),
                items: this.toBeInvoicedItems,
                target,
                billed_to_name,
            };
            if (isProforma) {
                this.previewProformaInvoice.emit({ invoice });
                return;
            }
            await this.bookingService.issueInvoice({
                is_proforma: isProforma,
                property_id: calendar_data.property.id,
                invoice,
            });
            const invoiceInfo = await this.bookingService.getBookingInvoiceInfo({
                booking_nbr: this.booking.booking_nbr,
            });
            if (this.autoPrint) {
                try {
                    // window.print();
                }
                catch (error) {
                    // Fail silently but log for debugging
                    console.error('Auto print failed:', error);
                }
            }
            await this.openLastInvoice(invoiceInfo);
            this.invoiceCreated.emit(invoiceInfo);
            this.invoiceClose.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChange.emit(false);
        }
    }
    async openLastInvoice(invoiceInfo) {
        const lastInvoice = invoiceInfo.invoices[invoiceInfo.invoices.length - 1];
        const { My_Result } = await this.bookingService.printInvoice({
            property_id: calendar_data.property.id,
            mode: lastInvoice?.credit_note ? 'creditnote' : 'invoice',
            invoice_nbr: lastInvoice.nbr,
        });
        window.open(My_Result);
    }
    getMinDate() {
        if (this.for === 'room') {
            return this.room.to_date;
        }
        // const getMinCheckoutDate = () => {
        //   let minDate = moment();
        //   for (const room of this.booking.rooms) {
        //     const d = moment(room.to_date, 'YYYY-MM-DD');
        //     if (d.isBefore(minDate)) {
        //       minDate = d.clone();
        //     }
        //   }
        //   return minDate;
        // };
        // return getMinCheckoutDate().format('YYYY-MM-DD');
        return this.booking.from_date;
    }
    getMaxDate() {
        return moment().format('YYYY-MM-DD');
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
    getDateView(fromDate, toDate) {
        if (!fromDate) {
            return;
        }
        const from_date = moment(fromDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        if (!toDate) {
            return h("span", null, from_date);
        }
        const to_date = moment(toDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        return (h("span", null, from_date, " ", h("wa-icon", { name: "arrow-right" }), " ", to_date));
    }
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length || !this.invoicableKey?.size) {
            return null;
        }
        const { groups, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            const invoiceableRooms = groupRooms.filter(room => this.canInvoiceRoom(room));
            if (!invoiceableRooms.length) {
                return null;
            }
            return invoiceableRooms.map(room => {
                const isSelected = this.isSelected([room.system_id]);
                const isDisabled = this.isDisabled([room.system_id]);
                return (h("div", { class: "ir-invoice__service", key: room.identifier }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                        const value = e.target.checked;
                        this.handleCheckChange({ checked: value, system_id: room.system_id });
                    }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: 'ir-invoice__room-checkbox-container align-items-center' }, h("div", { class: "ir-invoice__room-info" }, h("span", null, h("b", null, room.roomtype.name), h("span", { style: { paddingLeft: '0.5rem' } }, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, room.gross_total)))))
                // {this.renderRoomItem(room, indexById.get(room.identifier) ?? idx)}
                // {idx < groupRooms.length - 1 ? <wa-divider></wa-divider> : null}
                );
            });
        }
        return groups.map(group => {
            if (!this.hasInvoiceableRooms(group.rooms)) {
                return null;
            }
            const roomIds = this.getInvoiceableRoomIds(group.rooms);
            const isDisabled = this.isDisabled(roomIds);
            const isSelected = this.isSelected(roomIds);
            return (h("div", { class: "ir-invoice__service", key: group.order }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                    const value = e.target.checked;
                    this.handleCheckChange({ checked: value, system_ids: roomIds });
                }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox group" }, h("div", { class: 'ir-invoice__room-checkbox-container group' }, group.rooms.map(room => {
                if (!this.canInvoiceRoom(room)) {
                    return null;
                }
                return (h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { class: "ir-invoice__room-info" }, h("p", null, h("b", null, room.roomtype.name), h("span", null, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, room.gross_total))));
            })))));
        });
    }
    handleCheckChange({ checked, system_id, system_ids }) {
        if (!this.invoicableKey) {
            return;
        }
        const ids = [...(Array.isArray(system_ids) ? system_ids : []), ...(typeof system_id === 'number' ? [system_id] : [])].filter((id) => typeof id === 'number');
        if (!ids.length) {
            return;
        }
        if (this.viewMode === 'invoice' && ids.some(id => this.notInvoiceableItemKeys.has(id))) {
            return;
        }
        const nextKeys = new Set(this.selectedItemKeys);
        let changed = false;
        ids.forEach(id => {
            if (!this.invoicableKey.has(id)) {
                return;
            }
            if (checked) {
                if (!nextKeys.has(id)) {
                    nextKeys.add(id);
                    changed = true;
                }
            }
            else if (nextKeys.delete(id)) {
                changed = true;
            }
        });
        if (changed) {
            this.syncSelectedItems(nextKeys);
        }
    }
    isSelected(system_ids = []) {
        if (!system_ids?.length) {
            return false;
        }
        for (const id of system_ids) {
            if (typeof id === 'number' && this.selectedItemKeys.has(id)) {
                return true;
            }
        }
        return false;
    }
    isDisabled(systemIds = []) {
        if (this.viewMode === 'proforma' || !systemIds?.length) {
            return false;
        }
        return systemIds.some(id => typeof id === 'number' && this.notInvoiceableItemKeys.has(id));
    }
    renderPickup() {
        const sysId = this.booking.pickup_info?.['system_id'];
        if (!this.invoicableKey?.has(sysId)) {
            return null;
        }
        const isSelected = this.isSelected([sysId]);
        const isDisabled = this.isDisabled([sysId]);
        return (h("div", { class: "ir-invoice__service" }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                const value = e.target.checked;
                this.handleCheckChange({ checked: value, system_id: sysId });
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, "Pickup"), this.getDateView(this.booking.pickup_info.date, null)), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, this.booking.pickup_info.selected_option.amount))))));
    }
    renderCancellationPenalty() {
        const cancellationPenalty = this.booking.financial.payments?.find(p => p.payment_type?.code === '013');
        if (!cancellationPenalty) {
            return null;
        }
        const sysId = cancellationPenalty?.system_id;
        if (!this.invoicableKey.has(sysId)) {
            return null;
        }
        const item = this.invoicableKey.get(sysId);
        const isSelected = this.isSelected([sysId]);
        const isDisabled = this.isDisabled([sysId]);
        return (h("div", { class: "ir-invoice__service" }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                const value = e.target.checked;
                this.handleCheckChange({ checked: value, system_id: sysId });
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, "Cancellation penalty"), this.getDateView(cancellationPenalty.date, null)), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, item.amount))))));
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        return (h(Host, { size: "small" }, h("form", { id: this.formId, onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                const shouldCreateProforma = this.viewMode === 'proforma' || submitter?.value === 'pro-forma';
                this.handleConfirmInvoice(shouldCreateProforma);
            }, class: "ir-invoice__container" }, h("ir-custom-date-picker", { onDateChanged: e => {
                this.invoiceDate = e.detail.start;
                this.setUpDisabledItems();
            }, label: "Date", date: this.invoiceDate.format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), h("ir-booking-billing-recipient", { onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), h("div", { class: 'ir-invoice__services' }, h("p", { class: "ir-invoice__form-control-label" }, "Choose what to invoice ", h("span", { style: { color: 'var(--wa-color-gray-60)', paddingLeft: '0.5rem' } }, " (Disabled services are not eligible to be invoiced yet)")), h("div", { class: "ir-invoice__services-container" }, this.invoicableKey.size === 0 && h("ir-empty-state", { style: { marginTop: '3rem' } }), this.renderRooms(), this.booking.pickup_info && this.renderPickup(), this.booking.extra_services?.map(extra_service => {
            const sysId = extra_service.system_id;
            if (!this.invoicableKey?.has(sysId)) {
                return null;
            }
            const isSelected = this.isSelected([sysId]);
            const isDisabled = this.isDisabled([sysId]);
            return (h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                    const value = e.target.checked;
                    this.handleCheckChange({ checked: value, system_id: sysId });
                }, defaultChecked: isSelected, class: "ir-invoice__checkbox", checked: isSelected }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, extra_service.description), this.getDateView(extra_service.start_date, extra_service.end_date)), h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, extra_service.price))))));
        }), this.renderCancellationPenalty())))));
    }
    static get is() { return "ir-invoice-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-invoice-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-invoice-form.css"]
        };
    }
    static get properties() {
        return {
            "viewMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ViewMode",
                    "resolved": "\"invoice\" | \"proforma\"",
                    "references": {
                        "ViewMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-invoice/types.ts::ViewMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls how the invoice form behaves (e.g., \"invoice\", \"proforma\", \"preview\")."
                },
                "getter": false,
                "setter": false,
                "attribute": "view-mode",
                "reflect": false,
                "defaultValue": "'invoice'"
            },
            "formId": {
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
                    "text": "Unique ID applied to the underlying <form> element."
                },
                "getter": false,
                "setter": false,
                "attribute": "form-id",
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the invoice drawer is open.\n\nThis prop is mutable and reflected to the host element,\nallowing parent components to control visibility via markup\nor via the public `openDrawer()` / `closeDrawer()` methods."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "booking": {
                "type": "unknown",
                "mutable": true,
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
                    "text": "The booking object for which the invoice is being generated.\nShould contain room, guest, and pricing information."
                },
                "getter": false,
                "setter": false
            },
            "for": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'room' | 'booking'",
                    "resolved": "\"booking\" | \"room\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies what the invoice is for.\n- `\"room\"`: invoice for a specific room\n- `\"booking\"`: invoice for the entire booking"
                },
                "getter": false,
                "setter": false,
                "attribute": "for",
                "reflect": false,
                "defaultValue": "'booking'"
            },
            "roomIdentifier": {
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
                    "text": "The identifier of the room for which the invoice is being generated.\nUsed when invoicing at room level instead of booking level."
                },
                "getter": false,
                "setter": false,
                "attribute": "room-identifier",
                "reflect": false
            },
            "autoPrint": {
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
                    "text": "When `true`, automatically triggers `window.print()` after an invoice is created.\nUseful for setups where the invoice should immediately be sent to a printer."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-print",
                "reflect": false,
                "defaultValue": "false"
            },
            "invoiceInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BookingInvoiceInfo",
                    "resolved": "{ invoiceable_items?: { key?: number; system_id?: any; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: InvoiceableItemType; status?: any; booking_nbr?: string; invoice_nbr?: string; reason?: { code?: InvoiceableItemReasonCode; description?: string; }; is_invoiceable?: boolean; }[]; invoices?: { user?: string; system_id?: number; date?: string; currency?: { symbol?: string; id?: number; code?: string; }; status?: { code?: string; description?: any; }; booking_nbr?: string; target?: any; nbr?: string; remark?: string; billed_to_name?: any; billed_to_tax?: any; items?: { key?: number; system_id?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: string; status?: { code?: string; description?: any; }; description?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; credit_note?: { user?: string; system_id?: string; date?: string; reason?: string; nbr?: string; }; pdf_url?: any; total_amount?: any; }[]; }",
                    "references": {
                        "BookingInvoiceInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-invoice/types.ts::BookingInvoiceInfo"
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
            }
        };
    }
    static get states() {
        return {
            "selectedRecipient": {},
            "isLoading": {},
            "selectedItemKeys": {},
            "invoicableKey": {},
            "toBeInvoicedItems": {},
            "invoiceDate": {},
            "notInvoiceableItemKeys": {}
        };
    }
    static get events() {
        return [{
                "method": "invoiceOpen",
                "name": "invoiceOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the invoice drawer is opened.\n\nFired when `openDrawer()` is called and the component\ntransitions into the open state."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "invoiceClose",
                "name": "invoiceClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the invoice drawer is closed.\n\nFired when `closeDrawer()` is called, including when the\nunderlying drawer emits `onDrawerHide`."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "invoiceCreated",
                "name": "invoiceCreated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when an invoice is created/confirmed.\n\nThe event `detail` contains:\n- `booking`: the booking associated with the invoice\n- `recipientId`: the selected billing recipient\n- `for`: whether the invoice is for `\"room\"` or `\"booking\"`\n- `roomIdentifier`: the room identifier when invoicing a specific room\n- `mode`: the current invoice mode"
                },
                "complexType": {
                    "original": "BookingInvoiceInfo",
                    "resolved": "{ invoiceable_items?: { key?: number; system_id?: any; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: InvoiceableItemType; status?: any; booking_nbr?: string; invoice_nbr?: string; reason?: { code?: InvoiceableItemReasonCode; description?: string; }; is_invoiceable?: boolean; }[]; invoices?: { user?: string; system_id?: number; date?: string; currency?: { symbol?: string; id?: number; code?: string; }; status?: { code?: string; description?: any; }; booking_nbr?: string; target?: any; nbr?: string; remark?: string; billed_to_name?: any; billed_to_tax?: any; items?: { key?: number; system_id?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: string; status?: { code?: string; description?: any; }; description?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; credit_note?: { user?: string; system_id?: string; date?: string; reason?: string; nbr?: string; }; pdf_url?: any; total_amount?: any; }[]; }",
                    "references": {
                        "BookingInvoiceInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-invoice/types.ts::BookingInvoiceInfo"
                        }
                    }
                }
            }, {
                "method": "previewProformaInvoice",
                "name": "previewProformaInvoice",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IssueInvoiceProps",
                    "resolved": "{ invoice?: { currency?: { id?: number; }; booking_nbr?: string; target?: { code?: string; description?: string; }; Date?: string; nbr?: string; remark?: string; billed_to_name?: string; billed_to_tax?: string; items?: { key?: string | number; amount?: number; type?: string; description?: string; }[]; }; property_id?: number; is_proforma?: boolean; }",
                    "references": {
                        "IssueInvoiceProps": {
                            "location": "import",
                            "path": "@/services/booking-service/types",
                            "id": "src/services/booking-service/types.ts::IssueInvoiceProps"
                        }
                    }
                }
            }, {
                "method": "loadingChange",
                "name": "loadingChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "viewMode",
                "methodName": "handleViewModeChange"
            }, {
                "propName": "booking",
                "methodName": "handleBookingChange"
            }, {
                "propName": "invoiceInfo",
                "methodName": "handleInvoiceInfoChange"
            }];
    }
}
//# sourceMappingURL=ir-invoice-form.js.map
