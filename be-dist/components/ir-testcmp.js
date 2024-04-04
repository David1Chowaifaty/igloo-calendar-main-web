import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { T as Token, M as MissingTokenError, P as PropertyService, b as booking_store, r as reserveRooms, d as defineCustomElement$l, g as getVisibleInventory } from './ir-availibility-header2.js';
import { a as app_store } from './app.store.js';
import { a as generateColorShades, f as formatAmount, b as getDateDifference } from './utils.js';
import { d as defineCustomElement$n } from './ir-adult-child-counter2.js';
import { d as defineCustomElement$m } from './ir-auth2.js';
import { d as defineCustomElement$k } from './ir-booking-code2.js';
import { d as defineCustomElement$j } from './ir-button2.js';
import { d as defineCustomElement$i } from './ir-carousel2.js';
import { d as defineCustomElement$h } from './ir-date-popup2.js';
import { d as defineCustomElement$g } from './ir-date-range2.js';
import { d as defineCustomElement$f } from './ir-dialog2.js';
import { d as defineCustomElement$e } from './ir-facilities2.js';
import { d as defineCustomElement$d } from './ir-footer2.js';
import { d as defineCustomElement$c } from './ir-gallery2.js';
import { d as defineCustomElement$b } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ir-input2.js';
import { d as defineCustomElement$9 } from './ir-language-picker2.js';
import { d as defineCustomElement$8 } from './ir-nav2.js';
import { d as defineCustomElement$7 } from './ir-popover2.js';
import { d as defineCustomElement$6 } from './ir-property-gallery2.js';
import { d as defineCustomElement$5 } from './ir-select2.js';
import { d as defineCustomElement$4 } from './ir-sheet2.js';
import { d as defineCustomElement$3 } from './ir-signin2.js';
import { d as defineCustomElement$2 } from './ir-signup2.js';

class CommonService extends Token {
    async getCurrencies() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Currencies?Ticket=${token}`);
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        return data['My_Result'];
    }
}

const irTestcmpCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.m-0{margin:0}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.border{border-width:1px}.p-0{padding:0}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.carousel-container{aspect-ratio:4/3}.bounce-twice{animation:bounce .5s ease-in-out 2}.flex-wrap p{overflow-wrap:break-word;word-break:break-word}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}.static{position:static}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.top-0{top:0}.z-40{z-index:40}.z-50{z-index:50}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.hidden{display:none}.size-4{height:1rem;width:1rem}.w-40{width:10rem}.w-full{width:100%}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-md{border-radius:.375rem}.rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.p-2{padding:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:size-7{height:1.75rem;width:1.75rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}";
const IrTestcmpStyle0 = irTestcmpCss;

const IrTestcmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestcmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get watchers() { return {
        "token": ["handleTokenChange"]
    }; }
    static get style() { return IrTestcmpStyle0; }
}, [1, "ir-testcmp", {
        "token": [1],
        "propertyId": [2, "property-id"],
        "baseUrl": [1, "base-url"],
        "selectedLocale": [32],
        "property": [32],
        "currencies": [32],
        "languages": [32]
    }, undefined, {
        "token": ["handleTokenChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-testcmp", "ir-adult-child-counter", "ir-auth", "ir-availibility-header", "ir-booking-code", "ir-button", "ir-carousel", "ir-date-popup", "ir-date-range", "ir-dialog", "ir-facilities", "ir-footer", "ir-gallery", "ir-icons", "ir-input", "ir-language-picker", "ir-nav", "ir-popover", "ir-property-gallery", "ir-select", "ir-sheet", "ir-signin", "ir-signup"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-testcmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestcmp$1);
            }
            break;
        case "ir-adult-child-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-availibility-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-nav":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-property-gallery":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestcmp = IrTestcmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestcmp, defineCustomElement };

//# sourceMappingURL=ir-testcmp.js.map