import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as getVisibleInventory } from './booking.store.js';
import { d as defineCustomElement$3 } from './igl-rate-plan2.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = /*@__PURE__*/ proxyCustomElement(class IglRoomType extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    roomType;
    bookingType = 'PLUS_BOOKING';
    ratePricingMode = [];
    roomTypeId = null;
    currency;
    isBookDisabled;
    unavailableRatePlanIds = new Set();
    validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: 'c83383a92a7b5086e61a0c727b2872a3158db4d6' }, isValidBookingType && this.roomType.rateplans?.length > 0 && h("h5", { key: '177b3e410cc452622f9ccfa94a0724bf58dc81fc', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomTypeId === this.roomType.id;
                const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                return (h("igl-rate-plan", { unavailableRatePlanIds: this.unavailableRatePlanIds, isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency, ratePlan: ratePlan, roomTypeId: this.roomType.id, bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled }));
            }
            return null;
        })));
    }
    static get style() { return IglRoomTypeStyle0; }
}, [2, "igl-room-type", {
        "roomType": [16],
        "bookingType": [1, "booking-type"],
        "ratePricingMode": [16],
        "roomTypeId": [2, "room-type-id"],
        "currency": [8],
        "isBookDisabled": [4, "is-book-disabled"],
        "unavailableRatePlanIds": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-room-type", "igl-rate-plan", "ir-custom-button", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglRoomType);
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglRoomType as I, defineCustomElement as d };

//# sourceMappingURL=igl-room-type2.js.map