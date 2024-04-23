import app_store from "../../stores/app.store";
import booking_store, { modifyBookingStore } from "../../stores/booking";
import { cn } from "../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrLoyalty {
    toggleLoyalty(value) {
        modifyBookingStore('bookingAvailabilityParams', {
            coupon: null,
            loyalty: value,
        });
    }
    render() {
        var _a, _b;
        const show_loyalty = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.is_loyalty);
        if (!show_loyalty || booking_store.bookingAvailabilityParams.coupon) {
            return null;
        }
        return (h(Host, null, h("div", { class: "flex items-center w-full gap-4 justify-center" }, h("ir-button", { class: cn('w-full', {
                'w-fit': booking_store.bookingAvailabilityParams.loyalty,
            }), onButtonClick: () => this.toggleLoyalty(true), variants: "outline", label: "Get loyalty discount", haveLeftIcon: true }, h("ir-icons", { slot: "left-icon", name: "heart" })), booking_store.bookingAvailabilityParams.loyalty && (h("div", { class: "flex items-center gap-2.5 text-sm text-[hsl(var(--brand-600))]" }, h("p", { onClick: () => this.toggleLoyalty(false) }, "Loyalty applied"), h("ir-button", { variants: "icon", onButtonClick: () => this.toggleLoyalty(false) }, h("ir-icons", { slot: "btn-icon", name: "xmark", svgClassName: "text-[hsl(var(--brand-600))]" })))))));
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
}
//# sourceMappingURL=ir-loyalty.js.map
