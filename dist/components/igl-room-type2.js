import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getVisibleInventory } from './booking.store.js';
import { d as defineCustomElement$3 } from './igl-rate-plan2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = /*@__PURE__*/ proxyCustomElement(class IglRoomType extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
        this.roomType = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.dateDifference = undefined;
        this.ratePricingMode = [];
        this.roomInfoId = null;
        this.currency = undefined;
        this.initialRoomIds = undefined;
        this.isBookDisabled = undefined;
        this.selectedRooms = [];
        this.totalRooms = undefined;
        this.roomsDistributions = [];
    }
    render() {
        var _a, _b;
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: '076b7ecc75d7b11e6cc815cd4217c467cd0de515' }, isValidBookingType && ((_a = this.roomType.rateplans) === null || _a === void 0 ? void 0 : _a.length) > 0 && h("div", { key: 'e4014b5a0f9cd81539f4927d78c2cc203608da8b', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomType.name), (_b = this.roomType.rateplans) === null || _b === void 0 ? void 0 :
            _b.map(ratePlan => {
                if (!!ratePlan.variations) {
                    let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                    // let roomId = -1;
                    // if (shouldBeDisabled && this.initialRoomIds) {
                    //   roomId = this.initialRoomIds.roomId;
                    // }
                    const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                    console.log(visibleInventory);
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
    const components = ["igl-room-type", "igl-rate-plan", "ir-price-input", "ir-tooltip"];
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
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglRoomType as I, defineCustomElement as d };

//# sourceMappingURL=igl-room-type2.js.map