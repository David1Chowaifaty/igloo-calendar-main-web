import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { t } from "../../../../services/locale/t";
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
            } }, h("wa-checkbox", { checked: checked, onchange: () => this.toggleItem(item.key) }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.ratePlanShortName && h("span", { class: "assign-item__rateplan" }, item.ratePlanShortName), item.unitName && h("ir-unit-tag", { unit: item.unitName }), item.isNonRefundable && h("span", { class: "assign-item__badge assign-item__badge--nr" }, t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))), item.fromDate && item.toDate && (h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
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
            } }), h("div", { class: "assign-item__text" }, h("div", { class: "assign-item__room-header" }, h("span", { class: "assign-item__label" }, item.label), item.price != null && item.price > 0 && h("span", { class: "assign-item__rateplan" }, formatAmount(item.currencySymbol, item.price))), item.fromDate && (h("ir-date-view", { class: "assign-item__date", format: "weekday-medium", from_date: item.fromDate, to_date: item.toDate, showDateDifference: false })))));
    }
    render() {
        const rooms = this.items.filter(i => i.type === 'room');
        const pickups = this.items.filter(i => i.type === 'pickup');
        const extras = this.items.filter(i => i.type === 'extra');
        return (h(Host, { key: 'bbd7f4ae00f69d2f8a9cd57fae7856b1ac45e93b', size: "s" }, h("div", { key: '3a26a8619bce7f1b91023f2b311cbba6ad92b6d3', class: "assign-container" }, h("p", { key: 'a9f9478a7ee1f1102215b8e38480e938d2e0b5a1', class: "assign-intro" }, t('Lcz_AssignItemsIntro', { fallback: 'Select services for the Agent folio; others remain on the Guest folio.' })), rooms.length > 0 && (h("div", { key: '33d1021c99636186a7bfdddb841311ffd72f44b0', class: "assign-section" }, h("p", { key: 'cb9f6670454c483aebfde05fdf80bd5cb4ed0547', class: "assign-section__label" }, t('Lcz_Accommodation', { fallback: 'Accommodation' })), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: '9d2670e5339bc8d6229d54dd89b45ee5eb7781d2', class: "assign-section" }, h("p", { key: '6cc5ca2a4ab19291b50d061804fec68c54d66970', class: "assign-section__label" }, t('Lcz_Pickup', { fallback: 'Pickup' })), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: '7f7b3e9d773b1dba0be20cdfab2f0cc529d5c103', class: "assign-section" }, h("p", { key: 'd678ed269ee1da2f6b0cda83f4cac0e122f806a0', class: "assign-section__label" }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), extras.map(item => this.renderExtraItem(item)))))));
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
                            "id": "src/components/ir-booking-details/ir-booking-source-editor-dialog/types.ts::AssignableItem",
                            "referenceLocation": "AssignableItem"
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
