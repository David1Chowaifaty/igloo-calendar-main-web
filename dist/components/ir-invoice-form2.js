import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { j as buildSplitIndex, f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$9 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$8 } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$7 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-empty-state2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irInvoiceFormCss = "@layer wa-utilities {\n  .sc-ir-invoice-form-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-invoice-form-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-invoice-form-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-invoice-form-h {\n  display: block;\n  height: 100%;\n}\n.ir-invoice__container.sc-ir-invoice-form {\n  display: grid;\n  gap: var(--wa-space-l);\n  box-sizing: border-box;\n}\n.ir-invoice__service.sc-ir-invoice-form:last-child {\n  border-bottom-left-radius: var(--wa-border-radius-m);\n  border-bottom-right-radius: var(--wa-border-radius-m);\n}\n.ir-invoice__service.sc-ir-invoice-form:first-child {\n  border-top-left-radius: var(--wa-border-radius-m);\n  border-top-right-radius: var(--wa-border-radius-m);\n  border-top: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n}\n.ir-invoice__service.sc-ir-invoice-form {\n  border-bottom: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  border-left: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  border-right: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  background-color: var(--wa-color-surface-default);\n  \n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n}\n.ir-invoice__service.sc-ir-invoice-form:not(:disabled):hover {\n  background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));\n}\n.ir-invoice__checkbox.sc-ir-invoice-form, .ir-invoice__checkbox.sc-ir-invoice-form::part(base) {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n}\n.ir-invoice__room-info.sc-ir-invoice-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n}\n.ir-invoice__checkbox.sc-ir-invoice-form::part(base) {\n  min-height: var(--wa-form-control-height);\n  padding: 0 var(--wa-form-control-padding-inline);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n}\n.ir-invoice__checkbox.group.sc-ir-invoice-form::part(base) {\n  padding-block: var(--wa-form-control-padding-inline);\n  align-items: flex-start;\n}\n.ir-invoice__checkbox.sc-ir-invoice-form::part(label) {\n  display: flex;\n  width: 100%;\n}\n.ir-invoice__room-checkbox-container.sc-ir-invoice-form {\n  display: flex;\n  gap: 0.5rem;\n  width: 100%;\n  justify-content: space-between;\n  text-align: start;\n  align-items: center;\n}\n.ir-invoice__room-checkbox-container.group.sc-ir-invoice-form {\n  flex-direction: column;\n}\n.ir-invoice__checkbox-price.sc-ir-invoice-form {\n  font-weight: 700;\n  color: var(--wa-color-neutral-900);\n  white-space: nowrap;\n  text-align: right;\n  flex: 1 1 0%;\n}\n.ir-invoice__price-column.sc-ir-invoice-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n  min-width: fit-content;\n}\n.ir-invoice__reason.sc-ir-invoice-form {\n  color: var(--wa-color-gray-60);\n  font-size: 0.75rem;\n  line-height: 1.2;\n  text-align: right;\n}\n.ir-invoice__form-control-label.sc-ir-invoice-form {\n  display: inline-flex;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n}\n.ir-invoice__reason.sc-ir-invoice-form {\n  color: var(--wa-color-danger-fill-loud);\n}";
const IrInvoiceFormStyle0 = irInvoiceFormCss;

const IrInvoiceForm = /*@__PURE__*/ proxyCustomElement(class IrInvoiceForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceOpen = createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = createEvent(this, "invoiceClose", 7);
        this.invoiceCreated = createEvent(this, "invoiceCreated", 7);
        this.previewProformaInvoice = createEvent(this, "previewProformaInvoice", 7);
        this.loadingChange = createEvent(this, "loadingChange", 7);
    }
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
    invoiceDate = hooks();
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
    confirmButtonRef;
    bookingService = new BookingService();
    invoiceTarget;
    apiDisabledItemKeys = new Set();
    alreadyInvoicedItemKeys = new Set();
    componentWillLoad() {
        this.init();
    }
    componentDidLoad() {
        this.confirmButtonRef = document.querySelector(`#confirm-btn_${this.formId}`);
    }
    handleViewModeChange() {
        if (this.invoicableKey?.size) {
            this.applyDefaultSelections(Array.from(this.invoicableKey.values()));
        }
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
    /**
     * Builds the list of invoice items that cannot yet be invoiced based on dates, splits and API-provided flags.
     */
    setUpDisabledItems() {
        if (!this.booking || !this.invoicableKey?.size) {
            this.notInvoiceableItemKeys = new Set();
            return;
        }
        const invoiceDate = (this.invoiceDate ?? hooks()).clone().startOf('day');
        const disabledKeys = new Set();
        const markIfBefore = (key, dateStr, options) => {
            if (options?.checkedOut) {
                return;
            }
            if (typeof key !== 'number' || !this.invoicableKey.has(key) || !dateStr) {
                return;
            }
            const parsed = hooks(dateStr, 'YYYY-MM-DD', true);
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
                });
            });
        }
        this.notInvoiceableItemKeys = disabledKeys;
        this.enforceNonInvoiceableSelections(this.getCombinedDisabledKeys(disabledKeys));
    }
    /**
     * Removes selections that correspond to disabled invoice items unless in proforma mode.
     */
    enforceNonInvoiceableSelections(disabledKeys) {
        if (this.viewMode === 'proforma') {
            return;
        }
        const enforcedDisabledKeys = disabledKeys ?? this.getCombinedDisabledKeys();
        if (!enforcedDisabledKeys.size) {
            return;
        }
        const nextKeys = new Set(this.selectedItemKeys);
        let changed = false;
        enforcedDisabledKeys.forEach(key => {
            if (nextKeys.delete(key)) {
                changed = true;
            }
        });
        if (changed) {
            this.syncSelectedItems(nextKeys);
        }
    }
    /**
     * Returns the union of API-disabled keys and client-calculated non-invoiceable keys.
     */
    getCombinedDisabledKeys(baseKeys) {
        const base = baseKeys ?? this.notInvoiceableItemKeys ?? new Set();
        const merged = new Set(base);
        this.apiDisabledItemKeys.forEach(key => merged.add(key));
        if (this.viewMode === 'invoice') {
            this.alreadyInvoicedItemKeys.forEach(key => merged.add(key));
        }
        return merged;
    }
    /**
     * Indicates whether an item was already invoiced, used to disable it in invoice mode.
     */
    isAlreadyInvoiced(systemId) {
        if (this.viewMode !== 'invoice' || typeof systemId !== 'number') {
            return false;
        }
        return this.alreadyInvoicedItemKeys.has(systemId);
    }
    /**
     * Synchronizes the selected keys set with derived arrays and button states.
     */
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
    /**
     * Indicates whether a room has an invoiceable entry.
     */
    canInvoiceRoom(room) {
        return Boolean(room && this.invoicableKey?.has(room.system_id));
    }
    /**
     * Checks if any rooms in a collection are invoiceable.
     */
    hasInvoiceableRooms(rooms) {
        return rooms.some(room => this.canInvoiceRoom(room));
    }
    /**
     * Returns the system IDs for rooms that can be invoiced.
     */
    getInvoiceableRoomIds(rooms) {
        const ids = [];
        rooms.forEach(room => {
            if (this.canInvoiceRoom(room)) {
                ids.push(room.system_id);
            }
        });
        return ids;
    }
    /**
     * Loads booking/invoice data and ancillary metadata required to render the form.
     */
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
    /**
     * Converts API invoiceable items into lookup maps/sets and applies default selections.
     */
    setupInvoicables(invoiceInfo) {
        const invoiceableItems = invoiceInfo?.invoiceable_items ?? [];
        const mapEntries = [];
        invoiceableItems.forEach(item => {
            mapEntries.push([item.key, item]);
            if (typeof item.system_id === 'number' && item.system_id !== item.key) {
                mapEntries.push([item.system_id, item]);
            }
        });
        this.invoicableKey = new Map(mapEntries);
        this.apiDisabledItemKeys = new Set(invoiceableItems.filter(item => !item.is_invoiceable).map(item => this.getSelectableKey(item)));
        const alreadyInvoicedKeys = [];
        invoiceableItems.forEach(item => {
            if (item.reason?.code !== '001') {
                return;
            }
            alreadyInvoicedKeys.push(item.key);
            if (typeof item.system_id === 'number' && item.system_id !== item.key) {
                alreadyInvoicedKeys.push(item.system_id);
            }
        });
        this.alreadyInvoicedItemKeys = new Set(alreadyInvoicedKeys);
        this.applyDefaultSelections(invoiceableItems);
        this.setUpDisabledItems();
    }
    /**
     * Selects invoiceable items by default, or all items in proforma mode.
     */
    applyDefaultSelections(items) {
        const keysToSelect = this.viewMode === 'proforma'
            ? items.map(item => this.getSelectableKey(item))
            : items
                .filter(item => item.is_invoiceable && item.reason?.code !== '001')
                .map(item => this.getSelectableKey(item));
        this.syncSelectedItems(new Set(keysToSelect));
    }
    /**
     * Resolves the correct checkbox key to use for a given invoiceable item.
     */
    getSelectableKey(item) {
        return typeof item.system_id === 'number' ? item.system_id : item.key;
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
    /**
     * Opens the most recently created invoice in a new window using the booking service.
     */
    async openLastInvoice(invoiceInfo) {
        const lastInvoice = invoiceInfo.invoices[invoiceInfo.invoices.length - 1];
        const { My_Result } = await this.bookingService.printInvoice({
            property_id: calendar_data.property.id,
            mode: lastInvoice?.credit_note ? 'creditnote' : 'invoice',
            invoice_nbr: lastInvoice.nbr,
        });
        window.open(My_Result);
    }
    /**
     * Provides the minimum selectable invoice date depending on booking vs. room mode.
     */
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
    /**
     * Returns today's date as the maximum invoice date.
     */
    getMaxDate() {
        return hooks().format('YYYY-MM-DD');
    }
    /**
     * Groups rooms so that linked/split rooms can be invoiced together and ordered consistently.
     */
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
    /**
     * Renders the visual date range for a given service entry.
     */
    getDateView(fromDate, toDate) {
        if (!fromDate) {
            return;
        }
        const from_date = hooks(fromDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        if (!toDate) {
            return h("span", null, from_date);
        }
        const to_date = hooks(toDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
        return (h("span", null, from_date, " ", h("wa-icon", { name: "arrow-right" }), " ", to_date));
    }
    /**
     * Outputs the non-invoiceable reason text for a given system ID when in invoice mode.
     */
    renderReasonDescription(systemId) {
        if (this.viewMode !== 'invoice' || typeof systemId !== 'number' || !this.invoicableKey?.size) {
            return null;
        }
        const item = this.invoicableKey.get(systemId);
        if (!item || item.is_invoiceable || !item.reason?.description) {
            return null;
        }
        return h("span", { class: "ir-invoice__reason" }, item.reason.description);
    }
    /**
     * Renders a price/value column along with any reason description for the given system ID.
     */
    renderPriceColumn(amount, systemId) {
        const hasAmount = typeof amount === 'number';
        const reason = this.renderReasonDescription(systemId);
        if (!hasAmount && !reason) {
            return null;
        }
        const currencySymbol = this.booking?.currency?.symbol ?? '';
        return (h("div", { class: "ir-invoice__price-column" }, hasAmount && h("span", { class: "ir-invoice__checkbox-price" }, formatAmount(currencySymbol, amount)), reason));
    }
    /**
     * Handles toggling checkbox selections for invoiceable items.
     */
    handleCheckChange({ checked, system_id, system_ids }) {
        if (!this.invoicableKey) {
            return;
        }
        const ids = [...(Array.isArray(system_ids) ? system_ids : []), ...(typeof system_id === 'number' ? [system_id] : [])].filter((id) => typeof id === 'number');
        if (!ids.length) {
            return;
        }
        if (this.isDisabled(ids)) {
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
    /**
     * Determines if any ID in a collection is currently selected.
     */
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
    /**
     * Determines if any member of a checkbox group should be disabled.
     */
    isDisabled(systemIds = []) {
        if (this.viewMode === 'proforma' || !systemIds?.length) {
            return false;
        }
        const disabledKeys = this.getCombinedDisabledKeys();
        if (!disabledKeys.size) {
            return false;
        }
        return systemIds.some(id => {
            if (typeof id !== 'number') {
                return false;
            }
            if (this.isAlreadyInvoiced(id)) {
                return true;
            }
            return disabledKeys.has(id);
        });
    }
    /**
     * Renders the room checkboxes, grouping split rooms when necessary.
     */
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
                    }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: 'ir-invoice__room-checkbox-container align-items-center' }, h("div", { class: "ir-invoice__room-info" }, h("span", null, h("b", null, room.roomtype.name), h("span", { style: { paddingLeft: '0.5rem' } }, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), this.renderPriceColumn(room.gross_total, room.system_id))))
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
                return (h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { class: "ir-invoice__room-info" }, h("p", null, h("b", null, room.roomtype.name), h("span", null, room.rateplan.short_name)), this.getDateView(room.from_date, room.to_date)), this.renderPriceColumn(room.gross_total, room.system_id)));
            })))));
        });
    }
    /**
     * Renders the pickup service row when invoiceable.
     */
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
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, "Pickup"), this.getDateView(this.booking.pickup_info.date, null)), this.renderPriceColumn(this.booking.pickup_info.selected_option.amount, sysId)))));
    }
    /**
     * Renders the cancellation penalty checkbox when the booking contains one.
     */
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
            }, defaultChecked: isSelected, checked: isSelected, class: "ir-invoice__checkbox" }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, "Cancellation penalty"), this.getDateView(cancellationPenalty.date, null)), this.renderPriceColumn(item.amount, sysId)))));
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
            }, label: "Date", date: this.invoiceDate.format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), h("ir-booking-billing-recipient", { onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), this.viewMode === 'invoice' && hooks().isBefore(hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') ? (h("ir-empty-state", { message: "Invoices cannot be issued before guest arrival" })) : (h("div", { class: 'ir-invoice__services' }, h("p", { class: "ir-invoice__form-control-label" }, "Choose what to invoice ", h("span", { style: { color: 'var(--wa-color-gray-60)', paddingLeft: '0.5rem' } }, " (Disabled services are not eligible to be invoiced yet)")), h("div", { class: "ir-invoice__services-container" }, this.invoicableKey.size === 0 && h("ir-empty-state", { style: { marginTop: '3rem' } }), this.renderRooms(), this.booking.pickup_info && this.renderPickup(), this.booking.extra_services?.map(extra_service => {
            const sysId = extra_service.system_id;
            if (!this.invoicableKey?.has(sysId)) {
                return null;
            }
            const isSelected = this.isSelected([sysId]);
            const isDisabled = this.isDisabled([sysId]);
            return (h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, h("wa-checkbox", { disabled: isDisabled, size: "small", onchange: e => {
                    const value = e.target.checked;
                    this.handleCheckChange({ checked: value, system_id: sysId });
                }, defaultChecked: isSelected, class: "ir-invoice__checkbox", checked: isSelected }, h("div", { class: "ir-invoice__room-checkbox-container" }, h("div", { class: 'ir-invoice__room-info' }, h("span", null, extra_service.description), this.getDateView(extra_service.start_date, extra_service.end_date)), this.renderPriceColumn(extra_service.price, sysId)))));
        }), this.renderCancellationPenalty()))))));
    }
    static get watchers() { return {
        "viewMode": ["handleViewModeChange"],
        "booking": ["handleBookingChange"],
        "invoiceInfo": ["handleInvoiceInfoChange"]
    }; }
    static get style() { return IrInvoiceFormStyle0; }
}, [2, "ir-invoice-form", {
        "viewMode": [1, "view-mode"],
        "formId": [1, "form-id"],
        "open": [1540],
        "booking": [1040],
        "for": [1],
        "roomIdentifier": [1, "room-identifier"],
        "autoPrint": [4, "auto-print"],
        "invoiceInfo": [16],
        "selectedRecipient": [32],
        "isLoading": [32],
        "selectedItemKeys": [32],
        "invoicableKey": [32],
        "toBeInvoicedItems": [32],
        "invoiceDate": [32],
        "notInvoiceableItemKeys": [32]
    }, undefined, {
        "viewMode": ["handleViewModeChange"],
        "booking": ["handleBookingChange"],
        "invoiceInfo": ["handleInvoiceInfoChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice-form", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-dialog", "ir-empty-state", "ir-input", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoiceForm);
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
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