import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { l as getVisibleInventory } from './booking.service-cc6e87c3.js';
import './index-40c31d5b.js';
import './index-5ba472df.js';
import './IBooking-9fbd40d1.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';
import './booking-2b94eb2b.js';

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}";

const IglRoomType = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IglRoomType.style = iglRoomTypeCss;

export { IglRoomType as igl_room_type };

//# sourceMappingURL=igl-room-type.entry.js.map