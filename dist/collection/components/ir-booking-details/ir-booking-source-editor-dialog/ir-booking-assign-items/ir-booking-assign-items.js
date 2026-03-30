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
        return (h(Host, { key: '4a4f530aa83683c54b2fe4987952be6b9320a697', size: "small" }, h("div", { key: '59577d4b92caf22d895c7a10ddbba81bc94bc2d0', class: "assign-container" }, h("p", { key: 'dd7a9b12ab40438708e7d049018ab51ccfbb54ba', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (h("div", { key: 'ea8948a743e11f79960b11e6d1f0d4cfab5c3c83', class: "assign-section" }, h("p", { key: '48d81dffda4f27e27bf2d0d9b614a729d20e5bea', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: '8283e32e4b535db47e830b58e6a851e9619e8102', class: "assign-section" }, h("p", { key: 'f1a0751fb7ec660e29ac1bc375d87611db4a6fae', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: 'b1f4363c4ecfdf2cf373979fe78872670c5954c6', class: "assign-section" }, h("p", { key: 'a3695bdaf64fc430fd7cb611d65cead55e58d646', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
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
