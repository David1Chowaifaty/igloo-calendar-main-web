import app_store from "../../stores/app.store";
import booking_store, { modifyBookingStore } from "../../stores/booking";
import { cn } from "../../utils/utils";
import { Fragment, h } from "@stencil/core";
import { isBefore } from "date-fns";
export class IrCouponDialog {
    constructor() {
        this.coupon = undefined;
        this.validationMessage = undefined;
    }
    activateCoupon() {
        this.validationMessage = null;
        const c = app_store.property.promotions.find(p => p.key === this.coupon.trim());
        if (!c) {
            return (this.validationMessage = { error: true, message: 'Invalid coupon' });
        }
        if (isBefore(new Date(c.to), new Date())) {
            return (this.validationMessage = { error: true, message: 'Invalid coupon' });
        }
        modifyBookingStore('bookingAvailabilityParams', {
            coupon: this.coupon,
            loyalty: false,
        });
        this.validationMessage = { error: false, message: this.coupon };
        this.dialogRef.closeModal();
    }
    removeCoupon() {
        this.validationMessage = null;
        this.coupon = '';
        modifyBookingStore('bookingAvailabilityParams', {
            coupon: null,
            loyalty: false,
        });
    }
    render() {
        var _a, _b, _c, _d;
        const showCoupon = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.key !== '');
        if (!showCoupon || booking_store.bookingAvailabilityParams.loyalty) {
            return null;
        }
        return (h(Fragment, null, h("div", { class: "flex items-center w-full gap-4 justify-center" }, h("ir-button", { class: cn('w-full', {
                'w-fit': this.validationMessage && !this.validationMessage.error,
            }), onButtonClick: () => this.dialogRef.openModal(), variants: "outline", label: "Have a coupon?", haveLeftIcon: true }, h("ir-icons", { slot: "left-icon", name: "heart" })), this.validationMessage && !this.validationMessage.error && (h("div", { class: "flex items-center gap-2.5 text-sm text-[hsl(var(--brand-600))]" }, h("p", { onClick: this.removeCoupon.bind(this) }, "Discount applied"), h("ir-button", { variants: "icon", onButtonClick: this.removeCoupon.bind(this) }, h("ir-icons", { slot: "btn-icon", name: "xmark", svgClassName: "text-[hsl(var(--brand-600))]" }))))), h("ir-dialog", { ref: el => (this.dialogRef = el) }, h("form", { onSubmit: e => {
                e.preventDefault();
                this.activateCoupon();
            }, class: "p-4 sm:p-6", slot: "modal-body" }, h("h1", { class: "title" }, "Enter code"), h("p", { class: "Supporting-text mb-8" }, "If you have a coupon available, you can enter it below to unlock special discounts:"), h("ir-input", { error: (_c = this.validationMessage) === null || _c === void 0 ? void 0 : _c.error, onTextChanged: e => (this.coupon = e.detail), autofocus: true, inputId: "booking_code", label: "Enter your coupon" }), ((_d = this.validationMessage) === null || _d === void 0 ? void 0 : _d.error) && h("p", { class: "text-red-500" }, this.validationMessage.message), h("div", { class: "flex flex-col-reverse items-center justify-end mt-8 gap-4 sm:flex-row" }, h("ir-button", { size: "md", onButtonClick: () => {
                this.dialogRef.closeModal();
            }, variants: "outline", label: "Cancel", class: 'w-full sm:w-fit' }), h("ir-button", { type: "submit", size: "md", label: "Activate", class: "w-full sm:w-fit" }))))));
    }
    static get is() { return "ir-coupon-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-coupon-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-coupon-dialog.css"]
        };
    }
    static get states() {
        return {
            "coupon": {},
            "validationMessage": {}
        };
    }
}
//# sourceMappingURL=ir-coupon-dialog.js.map
