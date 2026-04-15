import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$2 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irBookingAssignItemsCss = "@layer wa-utilities {\n  .sc-ir-booking-assign-items-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-booking-assign-items-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-booking-assign-items-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-booking-assign-items-h {\n  display: block;\n}\n\n.assign-container.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-top: 1rem;\n}\n\n.assign-intro.sc-ir-booking-assign-items {\n  font-size: 0.875rem;\n  color: var(--wa-color-neutral-600, #6b7280);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.assign-intro.sc-ir-booking-assign-items strong.sc-ir-booking-assign-items {\n  color: var(--wa-color-neutral-900, #111827);\n  font-weight: 600;\n}\n\n.assign-section.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.assign-section__label.sc-ir-booking-assign-items {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-start: 0.5em;\n}\n\n.assign-item.sc-ir-booking-assign-items {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.875rem;\n  border-radius: var(--wa-border-radius-m);\n  border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);\n  cursor: pointer;\n  user-select: none;\n  transition:\n    background-color 0.12s ease,\n    border-color 0.12s ease,\n    box-shadow 0.12s ease;\n  background-color: var(--wa-color-surface-default);\n}\n\n.assign-item.sc-ir-booking-assign-items:hover {\n  background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));\n}\n\n.assign-item.sc-ir-booking-assign-items:focus-visible {\n  outline: 2px solid var(--wa-color-brand-border-loud, #60a5fa);\n  outline-offset: 1px;\n}\n\n.assign-item--checked.sc-ir-booking-assign-items {\n  border-color: var(--wa-color-brand-border-loud, #60a5fa);\n  background-color: var(--wa-color-brand-fill-quiet, #eff6ff);\n}\n\n.assign-item--checked.sc-ir-booking-assign-items:hover {\n  background-color: var(--wa-color-brand-fill-quiet, #eff6ff);\n}\n\n.assign-item__text.sc-ir-booking-assign-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.assign-item__label.sc-ir-booking-assign-items {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--wa-color-neutral-900, #111827);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.assign-item__sublabel.sc-ir-booking-assign-items {\n  font-size: 0.75rem;\n  color: var(--wa-color-neutral-500, #6b7280);\n}\n\n\n.assign-item__room-header.sc-ir-booking-assign-items {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n\n.assign-item__rateplan.sc-ir-booking-assign-items {\n  font-size: 0.8125rem;\n  color: var(--wa-color-neutral-600, #6b7280);\n}\n\n.assign-item__badge.sc-ir-booking-assign-items {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.125rem 0.4375rem;\n  border-radius: var(--wa-border-radius-pill, 9999px);\n}\n\n.assign-item__badge--nr.sc-ir-booking-assign-items {\n  background-color: var(--wa-color-danger-fill-quiet, #fef2f2);\n  color: var(--wa-color-danger-on-quiet, #b91c1c);\n  border: 1px solid var(--wa-color-danger-border-quiet, #fecaca);\n}\n\n.assign-item__date.sc-ir-booking-assign-items {\n  font-size: 0.75rem;\n  color: var(--wa-color-neutral-500, #6b7280);\n  margin-top: 0.125rem;\n}";
const IrBookingAssignItemsStyle0 = irBookingAssignItemsCss;

const IrBookingAssignItems = /*@__PURE__*/ proxyCustomElement(class IrBookingAssignItems extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bookingSelectionChange = createEvent(this, "bookingSelectionChange", 7);
    }
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
        return (h(Host, { key: 'b6a816b83e0a0b4f386ce72aad0763dce65b7178', size: "small" }, h("div", { key: 'e0ee1f7f9eca1900c9f8fa7aaf01a6abc33f9bd6', class: "assign-container" }, h("p", { key: '36c6e575968912358d6a549da30e8867796f4255', class: "assign-intro" }, "Select services for the Agent folio; others remain on the Guest folio."), rooms.length > 0 && (h("div", { key: '3bf2a33fdde969fc8e3d9a494f9d37fd8cf3686e', class: "assign-section" }, h("p", { key: 'fe0a6689ed71fc52dc389ff6d9f485fcd3fc1fcb', class: "assign-section__label" }, "Accommodation"), rooms.map(item => this.renderRoomItem(item)))), pickups.length > 0 && (h("div", { key: 'e14b5e7a78eb6cbd93ba8461cb15a80c81c3b527', class: "assign-section" }, h("p", { key: 'bd1ddafaf81a5da106731e084d16daf25407729e', class: "assign-section__label" }, "Pickup"), pickups.map(item => this.renderCheckItem(item)))), extras.length > 0 && (h("div", { key: '7a25fddd6e2a8085e6dc45937c8521820ec08a56', class: "assign-section" }, h("p", { key: 'c79cf6aa19923989610534180275772485f26afb', class: "assign-section__label" }, "Extra Services"), extras.map(item => this.renderExtraItem(item)))))));
    }
    static get style() { return IrBookingAssignItemsStyle0; }
}, [2, "ir-booking-assign-items", {
        "items": [16],
        "checkedItems": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-assign-items", "ir-date-view", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingAssignItems);
            }
            break;
        case "ir-date-view":
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

export { IrBookingAssignItems as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-assign-items2.js.map