import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
export class IrBookingAssignItems {
    items = [];
    checkedItems = new Set();
    bookingSelectionChange;
    toggleItem(key) {
        const updated = new Set(this.checkedItems);
        if (updated.has(key)) {
            updated.delete(key);
        }
        else {
            updated.add(key);
        }
        this.checkedItems = updated;
        this.bookingSelectionChange.emit(this.checkedItems);
    }
    renderRoomItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && h("span", { class: "assign-item__badge assign-item__badge--nr" }, "Non-refundable")), item.fromDate && item.toDate && (h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    renderCheckItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("span", { class: "assign-item__label" }, item.label))));
    }
    renderExtraItem(item) {
        const checked = this.checkedItems.has(item.key);
        return (h("div", { key: item.key, class: { 'assign-item': true, 'assign-item--checked': checked }, onClick: e => {
                if (!e.target.closest('wa-checkbox')) {
                    this.toggleItem(item.key);
                }
            } }, h("wa-checkbox", { defaultChecked: checked, checked: checked, onchange: () => {
                this.toggleItem(item.key);
            } }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && h("span", { class: "assign-item__rateplan" }, formatAmount(item.currencySymbol, item.price))), item.fromDate && (h("ir-date-view", { class: "assign-item__date", format: "ddd, MMM DD, YYYY", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (h(Host, { key: '42eb644e576bf1ad36ae2a6fec39d73b5bced866', size: "small" }, h("div", { key: '95e88930407d932156ed55304b88a317eddf2fb2', class: "assign-container" }, h("p", { key: '1ddf3c312ac7f43827604ebe16760999bd4909e5', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (h("div", { key: 'deed464dfa5778a8cfc3ac6125badeed56876628', class: "assign-section" }, h("p", { key: 'de46a8872699d8f35e05957b835a80af62abc15c', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: 'd1e5dec09a0673f0c68785363f34e3b5ce6860dd', class: "assign-section" }, h("p", { key: '7e4f800debdd55d19fd1a5080218e8aa978a49a9', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: '9ef751477d4582e0ed25ff0d078ad1190b1b0a46', class: "assign-section" }, h("p", { key: '9116c30c2a64ad1419d11142f84a329904db58b2', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
    }
    static get is() { return "ir-booking-assign-items"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-assign-items.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-assign-items.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AssignableItem[]",
                    "resolved": "AssignableItem[]",
                    "references": {
                        "AssignableItem": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/ir-booking-source-editor-dialog/types.ts::AssignableItem"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "checkedItems": {}
        };
    }
    static get events() {
        return [{
                "method": "bookingSelectionChange",
                "name": "bookingSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Set<string>",
                    "resolved": "Set<string>",
                    "references": {
                        "Set": {
                            "location": "global",
                            "id": "global::Set"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-assign-items.js.map
