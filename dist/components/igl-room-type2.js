import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getVisibleInventory } from './booking.store.js';
import { d as defineCustomElement$3 } from './igl-rate-plan2.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = /*@__PURE__*/ proxyCustomElement(class IglRoomType extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
    }
    roomType;
    bookingType = 'PLUS_BOOKING';
    dateDifference;
    ratePricingMode = [];
    roomInfoId = null;
    currency;
    initialRoomIds;
    isBookDisabled;
    selectedRooms = [];
    totalRooms;
    roomsDistributions = [];
    dataUpdateEvent;
    validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: '4842f11a06d58024bed9edf9761a08991c0f3001' }, isValidBookingType && this.roomType.rateplans?.length > 0 && h("h5", { key: 'c62f466326a4a8a0174a4f1651af689ec8a154e2', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                // let roomId = -1;
                // if (shouldBeDisabled && this.initialRoomIds) {
                //   roomId = this.initialRoomIds.roomId;
                // }
                const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                return (h("igl-rate-plan", {
                    // is_bed_configuration_enabled={this.roomType.is_bed_configuration_enabled}
                    // index={index}
                    isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency,
                    // dateDifference={this.dateDifference}
                    ratePlan: ratePlan, roomTypeId: this.roomType.id,
                    // totalAvailableRooms={this.roomsDistributions[index]}
                    bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled
                }));
            }
            return null;
        })));
    }
    static get style() { return IglRoomTypeStyle0; }
}, [2, "igl-room-type", {
        "roomType": [16],
        "bookingType": [1, "booking-type"],
        "dateDifference": [2, "date-difference"],
        "ratePricingMode": [16],
        "roomInfoId": [2, "room-info-id"],
        "currency": [8],
        "initialRoomIds": [8, "initial-room-ids"],
        "isBookDisabled": [4, "is-book-disabled"],
        "selectedRooms": [32],
        "totalRooms": [32],
        "roomsDistributions": [32]
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