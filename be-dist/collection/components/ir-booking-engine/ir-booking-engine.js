import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import { h } from "@stencil/core";
import axios from "axios";
import { updateRoomParams } from "../../stores/booking";
import app_store from "../../stores/app.store";
import { generateColorShades, getUserPrefernce, setDefaultLocale } from "../../utils/utils";
import Stack from "../../models/stack";
// import { roomtypes } from '@/data';
export class IrBookingEngine {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc';
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
        this.currentPage = 'booking';
        this.router = new Stack();
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        getUserPrefernce();
        this.token = await this.commonService.getBEToken();
        // if (this.token !== '') {
        //   this.initializeApp();
        // }
        // this.router.push(<ir-booking-page></ir-booking-page>);
    }
    handleTokenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.initializeApp();
        }
    }
    initializeApp() {
        this.commonService.setToken(this.token);
        this.propertyService.setToken(this.token);
        app_store.app_data = {
            token: this.token,
            property_id: this.propertyId,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a;
        const [property, currencies, languages] = await Promise.all([
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en' }),
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
        ]);
        this.property = property;
        this.currencies = currencies;
        this.languages = languages;
        const p = JSON.parse(localStorage.getItem('user_prefernce'));
        if (!p) {
            setDefaultLocale({ currency: this.property.currency });
        }
        // booking_store.roomTypes = [...roomtypes];
        if (this.property.space_theme) {
            const root = document.documentElement;
            const shades = generateColorShades(this.property.space_theme.button_bg_color);
            let shade_number = 900;
            shades.forEach((shade, index) => {
                root.style.setProperty(`--brand-${shade_number}`, `${shade.h}, ${shade.s}%, ${shade.l}%`);
                if (index === 9) {
                    shade_number = 25;
                }
                else if (index === 8) {
                    shade_number = 50;
                }
                else {
                    shade_number = shade_number - 100;
                }
            });
        }
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        console.log(selectedVariation);
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log(e.detail);
        this.currentPage = e.detail;
    }
    render() {
        var _a, _b, _c;
        if (!this.property) {
            return null;
        }
        // const currentPage = this.router.peek();
        return (h("main", { class: "relative  space-y-5 flex flex-col w-full" }, h("section", { class: "w-full z-50 sticky top-0 " }, h("ir-nav", { exposed_property: this.property, website: (_a = this.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = this.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("section", { class: "flex-1 px-4 lg:px-6" }, this.currentPage === 'booking' ? h("ir-booking-page", null) : h("ir-checkout-page", null)), h("ir-footer", { exposedProperty: this.property })));
    }
    static get is() { return "ir-booking-engine"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-engine.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-engine.css"]
        };
    }
    static get properties() {
        return {
            "token": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "token",
                "reflect": false,
                "defaultValue": "'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc'"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property-id",
                "reflect": false
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "base-url",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedLocale": {},
            "property": {},
            "currencies": {},
            "languages": {},
            "currentPage": {},
            "router": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "token",
                "methodName": "handleTokenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "routing",
                "method": "handleNavigation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-engine.js.map
