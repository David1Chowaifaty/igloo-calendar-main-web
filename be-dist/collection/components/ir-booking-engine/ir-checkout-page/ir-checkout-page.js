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
        return (h(Host, { key: '1efa0702e4d7102078e49221e653798d5de37400' }, h("main", { key: '1d94c355515594f5f3187c5ce216b5406ab0b00c', class: "flex w-full  flex-col justify-between gap-4 md:items-center lg:flex-row lg:items-start" }, h("section", { key: '50a57453983c1a576ea9bca5c7f52625cbfe8b80', class: "w-full space-y-12 md:max-w-4xl" }, h("div", { key: '252b0e0c996c655c1428dc5b107d68ad510a9c51', class: "flex items-center gap-2.5" }, h("ir-button", { key: 'ea9bb7abbd0c15601575fc9adecfbb5111c31e7a', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { key: '32cdedd587b2082f404c2fa2828eeaef3d5d2120', name: "angle_left", slot: "btn-icon" })), h("p", { key: '76ef141d229eccb6f9a79fc93aa5b5907a8813c0', class: "text-2xl font-semibold" }, "Complete your booking")), h("ir-user-form", { key: '7c553a6d694f16f7251d0d3bbb0ded506f6f5c4f', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: 'a4999418d88585e9b7bdce62a5badbc93373f6bf' }), h("ir-pickup", { key: '7e7be0562a4c57290dc318171e8708ef3fcd6d1b', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: 'd6b20b09f780ab7f2892de5af88d7c21083f6895', class: "w-full md:flex  lg:sticky  lg:top-20 lg:max-w-md lg:justify-end" }, h("ir-booking-summary", { key: '801c27e27e1f095dcbee318e8ef157189a7d187a', isLoading: this.isLoading })))));
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
