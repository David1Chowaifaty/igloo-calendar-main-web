import { PickupFormData } from "../../models/pickup";
import { IrUserFormData } from "../../models/user_form";
import { PropertyService } from "../../services/api/property.service";
import app_store from "../../stores/app.store";
import { checkout_store } from "../../stores/checkout.store";
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
    render() {
        return (h(Host, { key: '05788cc571160af604fe86aa608584c1722f4440' }, h("main", { key: '3ce746918738e06dd83168a9ef17d2d3b4275b55', class: "flex flex-col-reverse md:items-center lg:items-start lg:flex-row gap-4 justify-between" }, h("section", { key: '6afc85dd54ba0f053eebdd654440b77400d7c29e', class: "w-full md:max-w-4xl space-y-12" }, h("ir-user-form", { key: '9a3a724a304d7501567acc43c3731c5ae1940759', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: '1c938cea0176f1dc87877973499ef5afaa3e4f45' }), h("ir-pickup", { key: 'c6e5a50f7c33d537ecc5d465e8db0c20f86f3e88', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: '2ded2b601a54213a279682b7c179f2080918364e', class: "w-full flex  justify-end md:max-w-2xl lg:max-w-md lg:sticky lg:top-0" }, h("ir-booking-summary", { key: 'fa26de331ac80abe037b7210dfbf9bc5ffc0d035', isLoading: this.isLoading })))));
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
