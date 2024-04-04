import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import { Host, h } from "@stencil/core";
import axios from "axios";
import booking_store, { getVisibleInventory, reserveRooms } from "../../stores/booking";
import app_store from "../../stores/app.store";
import { formatAmount, generateColorShades, getDateDifference } from "../../utils/utils";
// import { roomtypes } from '@/data';
export class IrTestcmp {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.token = undefined;
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (this.token) {
            this.initializeApp();
        }
    }
    handleTokenChange() {
        this.initializeApp();
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
        const [property, currencies, languages] = await Promise.all([
            this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
        ]);
        this.property = property;
        this.currencies = currencies;
        this.languages = languages;
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
    renderInternetMessage(isFree) {
        return isFree ? 'Free Internet' : 'Paid Internet';
    }
    renderRoomTypeAmenities() {
        const checkAminity = (code) => {
            var _a;
            return (_a = this.property) === null || _a === void 0 ? void 0 : _a.amenities.find(a => a.code === code);
        };
        const wifi = checkAminity('freewifi');
        const climatecontrol = checkAminity('climatecontrol');
        const balcony = checkAminity('balcony');
        return (h("ul", { class: "flex items-center text-xs text-green-500 gap-2 flex-wrap" }, wifi && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "wifi", svgClassName: "size-4" }), " ", h("span", null, wifi.description))), climatecontrol && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "snowflake", svgClassName: "size-4" }), " ", h("span", null, climatecontrol.description))), balcony && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "sun", svgClassName: "size-4" }), " ", h("span", null, balcony.description)))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.property) {
            return null;
        }
        return (h(Host, null, h("div", { class: "relative space-y-5 px-4 w-full" }, h("section", { class: "w-full z-50 sticky top-0" }, h("ir-nav", { exposed_property: this.property, website: (_a = this.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = this.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("div", null, h("ir-property-gallery", { exposed_property: this.property })), h("div", null, h("ir-availibility-header", null)), h("section", { class: "relative rounded-md gap-4 justify-between " }, h("div", { class: "divide-y flex-1 py-2" }, (_d = booking_store.roomTypes) === null || _d === void 0 ? void 0 : _d.map(roomType => {
            if (!roomType.is_active || roomType.images.length <= 0 || (roomType.inventory <= 0 && booking_store.enableBooking)) {
                return null;
            }
            return (h("div", { class: "flex flex-col  justify-start gap-4 mb-4   md:flex-row" }, h("div", { class: "hidden md:block" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), h("div", { class: "space-y-1 w-full flex-1 py-2" }, h("h3", { class: "text-slate-900  font-medium mb-2 text-lg " }, roomType.name), h("div", { class: "md:hidden" }, h("ir-property-gallery", { property_state: "carousel", roomType: roomType, exposed_property: this.property })), booking_store.enableBooking ? (roomType.rateplans.map(ratePlan => {
                var _a;
                if (!ratePlan.is_active) {
                    return null;
                }
                if (!ratePlan.variations) {
                    return null;
                }
                const visibleInventory = getVisibleInventory(roomType.id, ratePlan.id);
                console.log(ratePlan.variations);
                return (h("div", { key: ratePlan.id, class: "bg-gray-50 w-full p-2 gap-2 flex flex-col lg:flex-row space-y-1 text-sm rounded-[var(--radius,8px)]" }, h("div", { class: "flex  justify-between md:justify-start w-full md:w-fit " }, h("div", { class: "flex items-center gap-2 flex-wrap flex-1 overflow-hidden" }, h("p", null, ratePlan.short_name), h("p", { class: "hidden md:block line-clamp-3 text-slate-700 text-xs" }, ratePlan.custom_text)), visibleInventory.reserved > 0 && (h("div", { class: "flex items-start gap-1 md:hidden" }, h("p", { class: "font-medium" }, formatAmount(visibleInventory.reserved * (ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0].amount), app_store.userPreferences.currency_id)), h("p", { class: "font-medium line-through text-red-500" }, formatAmount(visibleInventory.reserved * (ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0].total_before_discount), app_store.userPreferences.currency_id))))), h("p", { class: "md:hidden line-clamp-3 text-slate-700 text-xs" }, ratePlan.custom_text, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at necessitatibus facere voluptas architecto dolorem optio tempore. Itaque delectus quasi dolores doloremque illo provident odio exercitationem quisquam excepturi! Magnam, nemo."), h("div", { class: "w-full space-y-2  flex flex-col md:space-y-0  md:space-x-2 md:flex-row md:items-center lg:justify-end lg:max-w-md" }, h("ir-select", { class: "w-full md:w-fit", label: "Travelers", data: ratePlan.variations.map(v => ({
                        id: v.amount,
                        value: `${v.adult_nbr} adults - ${v.child_nbr} children`,
                    })) }), visibleInventory.reserved > 0 && (h("div", { class: "hidden md:flex items-center gap-1 flex-col" }, h("p", { class: "font-medium" }, formatAmount(visibleInventory.reserved * (ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0].amount), app_store.userPreferences.currency_id)), h("p", { class: "font-medium line-through text-red-500" }, formatAmount(visibleInventory.reserved * (ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0].total_before_discount), app_store.userPreferences.currency_id)))), h("ir-select", { onValueChange: e => reserveRooms(roomType.id, ratePlan.id, Number(e.detail)), label: "Rooms", class: "w-full md:w-fit", data: (_a = [...new Array(visibleInventory.visibleInventory)]) === null || _a === void 0 ? void 0 : _a.map((_, i) => ({
                        id: i,
                        value: `${i} ${i === 0 ? '' : formatAmount((ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0].amount) * i * 10, app_store.userPreferences.currency_id)}`,
                    })) }))));
            })) : (h("div", { class: "bg-gray-50 w-full p-2 flex-1  flex flex-col md:flex-row justify-between space-y-1 text-sm rounded-[var(--radius,8px)]" }, h("p", null, roomType.description))))));
        }))), h("section", { class: 'text-sm' }, h("h2", { class: "text-lg font-medium mb-5" }, "Facilities and services"), h("ir-facilities", { properties: this.property }), h("p", { innerHTML: (_e = this.property) === null || _e === void 0 ? void 0 : _e.description.location_and_intro, class: "py-2" }))), h("ir-footer", { exposedProperty: this.property }), booking_store.enableBooking && (h("div", { class: "z-40 rounded-md rounded-b-none sticky bottom-0 font-medium text-gray-200 gap-10  flex w-full items-center justify-end  bg-gray-700/80" }, h("div", { class: "" }, h("p", null, getDateDifference((_f = booking_store.bookingAvailabilityParams.from_date) !== null && _f !== void 0 ? _f : new Date(), (_g = booking_store.bookingAvailabilityParams.to_date) !== null && _g !== void 0 ? _g : new Date()), " nights")), h("ir-button", { label: "Book", class: "w-40", buttonStyles: { height: '40px', borderRadius: '0', borderTopRightRadius: '6px' } })))));
    }
    static get is() { return "ir-testcmp"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-testcmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-testcmp.css"]
        };
    }
    static get properties() {
        return {
            "token": {
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
                "attribute": "token",
                "reflect": false
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
            "languages": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "token",
                "methodName": "handleTokenChange"
            }];
    }
}
//# sourceMappingURL=ir-testcmp.js.map
