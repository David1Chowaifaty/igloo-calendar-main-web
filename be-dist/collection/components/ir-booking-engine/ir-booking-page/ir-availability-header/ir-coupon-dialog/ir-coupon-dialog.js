import app_store from "../../../../../stores/app.store";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking";
import localizedWords from "../../../../../stores/localization.store";
import { cn, validateCoupon } from "../../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
export class IrCouponDialog {
    constructor() {
        this.isValid = false;
    }
    activateCoupon() {
        this.validationMessage = null;
        if (!validateCoupon(this.coupon)) {
            return (this.validationMessage = { error: true, message: localizedWords.entries.Lcz_InvalidAgentCode });
        }
        this.isValid = true;
        this.validationMessage = { error: false, message: this.coupon };
        this.resetBooking.emit('partialReset');
        this.coupon = null;
        this.dialogRef.closeModal();
    }
    removeCoupon() {
        this.isValid = false;
        this.validationMessage = null;
        modifyBookingStore('bookingAvailabilityParams', Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { coupon: null, loyalty: false }));
        this.resetBooking.emit('partialReset');
    }
    render() {
        var _a, _b, _c, _d;
        const showCoupon = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.key !== '');
        if (!showCoupon || booking_store.bookingAvailabilityParams.loyalty) {
            return null;
        }
        if (!!booking_store.bookingAvailabilityParams.coupon) {
            return (h("div", { class: "coupon-applied" }, h("p", { onClick: this.removeCoupon.bind(this) }, localizedWords.entries.Lcz_DiscountApplied), h("ir-button", { "aria-label": "remove coupon", iconName: "xmark", variants: "icon", class: "icon-remove", svgClassName: "text-[hsl(var(--brand-600))]", onButtonClick: this.removeCoupon.bind(this) })));
        }
        return (h(Fragment, null, h("ir-button", { class: cn('coupon-button', {
                'coupon-button-wide': !!booking_store.bookingAvailabilityParams.coupon,
            }), onButtonClick: () => this.dialogRef.openModal(), variants: "outline", label: localizedWords.entries.Lcz_HaveCoupon, haveLeftIcon: true }, h("ir-icons", { slot: "left-icon", name: "coupon" })), h("ir-dialog", { ref: el => (this.dialogRef = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    this.coupon = '';
                    this.validationMessage = null;
                }
            } }, h("form", { onSubmit: e => {
                e.preventDefault();
                this.activateCoupon();
            }, class: "coupon-form", slot: "modal-body" }, h("h1", { class: "title" }, localizedWords.entries.Lcz_HaveCoupon), h("ir-input", { error: (_c = this.validationMessage) === null || _c === void 0 ? void 0 : _c.error, onTextChanged: e => (this.coupon = e.detail), autofocus: true, inputId: "booking_code", placeholder: localizedWords.entries.Lcz_EnterYourCouponCode, value: this.coupon, mode: "default" }), ((_d = this.validationMessage) === null || _d === void 0 ? void 0 : _d.error) && h("p", { class: "error-message" }, this.validationMessage.message), h("div", { class: "footer-buttons" }, h("ir-button", { size: "md", onButtonClick: () => {
                this.dialogRef.closeModal();
                this.coupon = '';
            }, variants: "outline", label: localizedWords.entries.Lcz_Cancel, class: "button-cancel", type: "button" }), h("ir-button", { type: "submit", size: "md", label: localizedWords.entries.Lcz_Apply, class: "button-apply" }))))));
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
            "validationMessage": {},
            "isValid": {}
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
//# sourceMappingURL=ir-coupon-dialog.js.map
