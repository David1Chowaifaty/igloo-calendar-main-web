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
        return (h(Host, { key: '71913146b8895b3375105eab5e7063dd8f01de06' }, h("main", { key: 'f5164502297aced0e76688b6ea59306342aeae7e', class: "flex flex-col-reverse md:items-center lg:items-start lg:flex-row gap-4 justify-between" }, h("section", { key: '500976b97718a64f2038c3eba9467c966934dcf2', class: "w-full md:max-w-4xl space-y-12" }, h("ir-user-form", { key: 'e65e323f7d9bb23957ae414bd36b7549a0ec3d31', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: '10dbdf03ff9eb5bacc7c45ec7c1405874700b3bd' }), h("ir-pickup", { key: 'efec5059f8ea7508a2c4ddcc975c97f848cf289b', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: 'c01e38e62272a8880d5df4187d23483012020591', class: "w-full flex  justify-end md:max-w-2xl lg:max-w-md lg:sticky lg:top-0" }, h("ir-booking-summary", { key: '26bbf2b58a4cc39ec59a9a0c3d784c37f712df05', isLoading: this.isLoading })))));
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
