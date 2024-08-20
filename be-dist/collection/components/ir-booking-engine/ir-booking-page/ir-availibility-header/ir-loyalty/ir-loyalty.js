import app_store from "../../../../../stores/app.store";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking";
import localizedWords from "../../../../../stores/localization.store";
import { cn } from "../../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrLoyalty {
    toggleLoyalty(value) {
        modifyBookingStore('bookingAvailabilityParams', Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { coupon: null, loyalty: value }));
        this.resetBooking.emit('partialReset');
    }
    render() {
        var _a, _b;
        const show_loyalty = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.is_loyalty);
        if (!show_loyalty || booking_store.bookingAvailabilityParams.coupon) {
            return null;
        }
        return (h(Host, null, h("div", { class: "flex w-full items-center justify-center gap-4" }, h("ir-button", { class: cn('w-full', {
                'w-fit': booking_store.bookingAvailabilityParams.loyalty,
            }), onButtonClick: () => this.toggleLoyalty(true), variants: "outline", label: localizedWords.entries.Lcz_GetLoyaltyDiscount, haveLeftIcon: true }, h("ir-icons", { slot: "left-icon", name: "heart" })), booking_store.bookingAvailabilityParams.loyalty && (h("div", { class: "flex items-center  text-sm text-[hsl(var(--brand-600))]" }, h("p", { onClick: () => this.toggleLoyalty(false) }, localizedWords.entries.Lcz_LoyaltyApplied), h("ir-button", { "aria-label": 'remove loyalty', variants: "icon", iconName: "xmark", svgClassName: "text-[hsl(var(--brand-600))]", onButtonClick: () => this.toggleLoyalty(false) }))))));
    }
    static get is() { return "ir-loyalty"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-loyalty.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-loyalty.css"]
        };
    }
    static get events() {
        return [{
                "method": "resetBooking",
                "name": "resetBooking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-loyalty.js.map
