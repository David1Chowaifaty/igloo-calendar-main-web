import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import { checkout_store } from "../../../stores/checkout.store";
import { Host, h } from "@stencil/core";
import { ZodError } from "zod";
export class IrCheckoutPage {
    constructor() {
        this.propertyService = new PropertyService();
        this.isLoading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.error = undefined;
        this.isLoading = true;
        try {
            IrUserFormData.parse(checkout_store.userFormData);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error);
                let issues = {};
                error.issues.map(issue => (issues[issue.path[0]] = issue));
                this.error = {
                    cause: 'user',
                    issues,
                };
                this.errorElement = this.userForm;
                this.scrollToError();
            }
            this.isLoading = false;
            return;
        }
        console.log('first');
        try {
            if (checkout_store.pickup.location) {
                PickupFormData.parse(checkout_store.pickup);
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                let issues = {};
                error.issues.map(issue => (issues[issue.path[0]] = issue));
                this.error = {
                    cause: 'pickup',
                    issues,
                };
                this.errorElement = this.pickupForm;
                this.scrollToError();
            }
            this.isLoading = false;
            return;
        }
        try {
            await this.propertyService.bookUser();
        }
        catch (error) {
            console.log(error);
        }
        this.isLoading = false;
    }
    scrollToError() {
        if (this.errorElement) {
            this.errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.setTimeout(() => {
                window.scrollBy(0, -150);
            }, 500);
        }
    }
    render() {
        return (h(Host, { key: '4079198a501f6ca70cbb7f4cc4dfdd384b020367' }, h("ir-seo-injector", { key: '8dbafbe97d62ddfcaee31d2d5e7d9ef820ad1583', pageTitle: 'checkout', pageKeywords: "checkout", pageDescription: "checkout page" }), h("main", { key: '4e0176fb9c27c93b5f387940666964d05c57cd67', class: "flex w-full  flex-col justify-between gap-4 md:items-center lg:flex-row lg:items-start" }, h("section", { key: '301ea6111c0028c1ad95f45dc166c49ae5e8f68b', class: "w-full space-y-12 md:max-w-4xl" }, h("div", { key: '7c65ddcd0e0f0f512c42e7155ea0c20583d5cfc9', class: "flex items-center gap-2.5" }, h("ir-button", { key: 'a34a84933627055eb0f01f2ef1a2a4c0dcb77d38', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { key: '750784eb16595216e22b28bde01f5d3f4030a188', name: "angle_left", slot: "btn-icon" })), h("p", { key: '21d47dd6f7090e0c3067ddff22e3aef1a756031d', class: "text-2xl font-semibold" }, "Complete your booking")), h("ir-user-form", { key: '330cfdf4329f9be0307e7eb3c8483f8d14613284', ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: '0e85011920cd1ae531f315ff1074ddbb194fd50d', ref: el => (this.bookingDetails = el) }), h("ir-pickup", { key: 'd4c8a3fbd11a071f9ca6135538ba0d0b8eaffa2e', ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: '5f73a3c8780ecbe1028f99c1ff6e3a8e6620dd69', class: "w-full md:flex  lg:sticky  lg:top-20 lg:max-w-md lg:justify-end" }, h("ir-booking-summary", { key: 'bda45933e11659b66e2ed49f5568e89ca4849de2', isLoading: this.isLoading })))));
    }
    static get is() { return "ir-checkout-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkout-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkout-page.css"]
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {}
        };
    }
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"checkout\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "bookingClicked",
                "method": "handleBooking",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-checkout-page.js.map
