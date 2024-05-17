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
        return (h(Host, { key: '38e4eea367a4bc84d66909736127870e2089e24c' }, h("ir-seo-injector", { key: '7e0281312fd85a98cd55feda4515ff3c6f76de95', pageTitle: 'checkout', pageKeywords: "checkout", pageDescription: "checkout page" }), h("main", { key: '9f4bc314c2f50df014bc0149b782910edfb66148', class: "flex w-full  flex-col justify-between gap-4 md:items-center lg:flex-row lg:items-start" }, h("section", { key: 'e68b068e8ad38d64c65321ff675b4ca84898ad41', class: "w-full space-y-12 md:max-w-4xl" }, h("div", { key: '12ce10afcb38a6dc70d81a7b3b5a30d72a66c41b', class: "flex items-center gap-2.5" }, h("ir-button", { key: 'fce507dfb86888df94d0a7f7488766ab4c224878', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { key: 'acc6fb145793e101523eb39a2dbeb4d673c22a85', name: "angle_left", slot: "btn-icon" })), h("p", { key: '094ce31ddec92c29f1c4a9237e156d64eb7bd7f1', class: "text-2xl font-semibold" }, "Complete your booking")), h("ir-user-form", { key: '274a632236ce00ac61561194c7cb7a7c2704f0d4', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: '6b9d8b04fa9355846c906f1d6ce607e9c140ff61' }), h("ir-pickup", { key: '100b9863300bb9a785b936ed52915fe06d1f87aa', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: 'e75471933ede19bee7b1ac6a5d048fdfb8e7c38f', class: "w-full md:flex  lg:sticky  lg:top-20 lg:max-w-md lg:justify-end" }, h("ir-booking-summary", { key: 'f28dc4ce2a0142e2009bd11e3e5e277c43391bf4', isLoading: this.isLoading })))));
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
