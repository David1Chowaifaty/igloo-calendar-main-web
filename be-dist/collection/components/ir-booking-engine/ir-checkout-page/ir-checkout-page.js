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
        return (h(Host, { key: 'd323be5e3339a6b13f8a3bb184f7a9b3f1e14995' }, h("ir-seo-injector", { key: '2dba38add7a693e063a84a4cdbdd8431cd59c977', pageTitle: 'checkout', pageKeywords: "checkout", pageDescription: "checkout page" }), h("main", { key: '03d131db01c66403a482f577cdc208b1535f80ce', class: "flex w-full  flex-col justify-between gap-4 md:items-center lg:flex-row lg:items-start" }, h("section", { key: 'b449d175193fdd9fff1b8ca2ad60516e60956748', class: "w-full space-y-12 md:max-w-4xl" }, h("div", { key: 'fe9235f92bf74363ed2cf803c5642a2950102fc6', class: "flex items-center gap-2.5" }, h("ir-button", { key: 'f4168f6f835d52ba69cb307b042fc9925560b812', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { key: 'b21a2940682aad1b7edf3e76d4cab22fd4ae35f2', name: "angle_left", slot: "btn-icon" })), h("p", { key: 'eed3919b0da0895e0f2b490d014268c91ae8f9a2', class: "text-2xl font-semibold" }, "Complete your booking")), h("ir-user-form", { key: '8858a669e329099af578a4053fa833251b2b227d', class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined }), h("ir-booking-details", { key: 'c9cd821c8790280e710a2462159241860ab161ee' }), h("ir-pickup", { key: '9062d2a46d8719c8ff761ed683ceb709404baf8e', errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })), h("section", { key: '79a9282d8e43d64c246b7f1ed72e35ef321514e6', class: "w-full md:flex  lg:sticky  lg:top-20 lg:max-w-md lg:justify-end" }, h("ir-booking-summary", { key: '9add17cbfde4482ed93409613a9b9fb8b33a55f1', isLoading: this.isLoading })))));
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
