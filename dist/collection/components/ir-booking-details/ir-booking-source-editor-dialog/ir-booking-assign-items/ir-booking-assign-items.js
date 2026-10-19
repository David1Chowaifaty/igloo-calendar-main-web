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
        return (h(Host, { key: 'd361ea4d47de912f71283fe66f945bb0b914ef29', size: "s" }, h("div", { key: '96a2d46e2e2b383a65b6a76b817263952d827a42', class: "assign-container" }, h("p", { key: '02ca813473ec56cd2bd28ceb7b445a163b37fde0', class: "assign-intro" }, t('Lcz_AssignItemsIntro', { fallback: 'Select services for the Agent folio; others remain on the Guest folio.' })), rooms.length > 0 && (h("div", { key: 'c185f503eca53abe3991e60da7aedabf8717aa3c', class: "assign-section" }, h("p", { key: '030f67c942a6b8b6b52ab0f22cd2fa3f8d9f3d10', class: "assign-section__label" }, t('Lcz_Accommodation', { fallback: 'Accommodation' })), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: '4a90b6dd837a80f2d82dc10c166c9133a0d3f7e1', class: "assign-section" }, h("p", { key: '866368e8f6d86819568b89a240ffb3a75b94ac4b', class: "assign-section__label" }, t('Lcz_Pickup', { fallback: 'Pickup' })), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: 'f063c1e93608c85c617fdb9f7e13b2d000dd7cb7', class: "assign-section" }, h("p", { key: 'e407b10a6877784ca8fa11008866dcd3ed528e35', class: "assign-section__label" }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), extras.map(item => this.renderExtraItem(item)))))));
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
