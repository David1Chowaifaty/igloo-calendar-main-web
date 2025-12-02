import { buildSplitIndex } from "../../utils/booking";
import { formatAmount } from "../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrInvoice {
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
        if (this.autoPrint) {
            try {
                // window.print();
            }
            catch (error) {
                // Fail silently but log for debugging
                console.error('Auto print failed:', error);
            }
        }
    }
    getMinDate() {
        if (this.for === 'room') {
            return this.room.to_date;
        }
        const getMinCheckoutDate = () => {
            let minDate = moment();
            for (const room of this.booking.rooms) {
                const d = moment(room.to_date, 'YYYY-MM-DD');
                if (d.isBefore(minDate)) {
                    minDate = d.clone();
                }
            }
            return minDate;
        };
        return getMinCheckoutDate().format('YYYY-MM-DD');
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
        return (h(Host, { key: '7e28c8405619d5926cf69ab168d3fb8209e589b0' }, h("ir-drawer", { key: '55dd226fe63b1c44cb5cf0a4b260825f9644bb98', label: "Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("form", { key: 'd7d791aaf2566aeffc59687cb0e5beaae3e3524c', ref: el => (this.invoiceFormRef = el), class: "ir-invoice__container" }, h("ir-custom-date-picker", { key: '727418bf8b2c2a4355ba242a6752fcf90ca979fc', label: "Date", date: moment().format('YYYY-MM-DD'), minDate: this.getMinDate(), maxDate: this.getMaxDate() }), h("ir-booking-billing-recipient", { key: 'a86b8cdadff518ac29ac4d0d0ac0086e7e1dad78', onRecipientChange: e => (this.selectedRecipient = e.detail), booking: this.booking }), h("div", { key: '3dddff991abc98e224e86781bfa9026e768c4edf', class: 'ir-invoice__services' }, h("p", { key: '6acca9317516232afab80ad6f099dda67bb154e6', class: "ir-invoice__form-control-label" }, "Choose what to invoice"), h("div", { key: 'ea792653e5d31d7380de4a15e6ccf672cb716e04', class: "ir-invoice__services-container" }, this.renderRooms(), this.booking.pickup_info && (h("div", { key: '3343604b08eb15350f699ccfb5af613fda1008e1', class: "ir-invoice__service" }, h("wa-checkbox", { key: '0603069870a5fa0e08b2fc075b9b823645458fad', class: "ir-invoice__checkbox" }, h("div", { key: 'a5e06013facbae3b50847efdfff35bec2c7aa84a' }, "Pickup")))), this.booking.extra_services?.map(extra_service => (h("div", { key: extra_service.system_id, class: "ir-invoice__service" }, h("wa-checkbox", { class: "ir-invoice__checkbox" }, h("div", null)))))))), h("div", { key: '9f32603b7a0c2247a534f7e2c07988c532c4f30a', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '574cc62b04c2d627755aa830994de5896702b778', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '9c3053363399bbfaa637c9e8b3dddb00b93a0083', onClickHandler: () => {
                this.handleConfirmInvoice(true);
            }, size: "medium", class: "w-100 flex-fill", appearance: "outlined", variant: "brand" }, "Pro-forma invoice"), h("ir-custom-button", { key: 'c156875e86fa35a0c51f2ba2272db1098cc0cb53', onClickHandler: () => {
                this.handleConfirmInvoice();
            }, class: "w-100 flex-fill", size: "medium", variant: "brand" }, "Confirm invoice")))));
    }
    static get is() { return "ir-invoice"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-invoice.css", "../../global/app.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-invoice.css", "../../global/app.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The booking object for which the invoice is being generated.\nShould contain room, guest, and pricing information."
                },
                "getter": false,
                "setter": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'create' | 'check_in-create'",
                    "resolved": "\"check_in-create\" | \"create\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines what should happen after creating the invoice.\n- `\"create\"`: create an invoice normally\n- `\"check_in-create\"`: create an invoice as part of the check-in flow"
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'create'"
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
            }
        };
    }
    static get states() {
        return {
            "selectedRecipient": {}
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
                    "original": "{\n    booking: Booking;\n    recipientId: string;\n    for: 'room' | 'booking';\n    roomIdentifier?: string;\n    mode: 'create' | 'check_in-create';\n  }",
                    "resolved": "{ booking: Booking; recipientId: string; for: \"room\" | \"booking\"; roomIdentifier?: string; mode: \"create\" | \"check_in-create\"; }",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "openDrawer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the invoice drawer.\n\nThis method sets the `open` property to `true`, making the drawer visible.\nIt can be called programmatically by parent components.\n\nAlso emits the `invoiceOpen` event.",
                    "tags": [{
                            "name": "returns",
                            "text": "Resolves once the drawer state is updated."
                        }]
                }
            },
            "closeDrawer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the invoice drawer.\n\nThis method sets the `open` property to `false`, hiding the drawer.\nParent components can call this to close the drawer programmatically,\nand it is also used internally when the drawer emits `onDrawerHide`.\n\nAlso emits the `invoiceClose` event.",
                    "tags": [{
                            "name": "returns",
                            "text": "Resolves once the drawer state is updated."
                        }]
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-invoice.js.map
