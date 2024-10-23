import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { C as CommonService } from './common.service.js';
import { P as PropertyService } from './property.service.js';
import { a as axios } from './axios.js';
import { l as localizedWords } from './localization.store.js';
import { T as Token } from './payment.service.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$6 } from './ir-date-range2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-guest-counter2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-popover2.js';
import { d as dateFns } from './utils.js';

const irBookingWidgetCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.uppercase{text-transform:uppercase}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--spread:90deg;--shimmer-color:#fff;--speed:3s;box-sizing:border-box!important;display:flex;padding:0 1rem;pointer-events:none;width:100%}:host([position=fixed]){bottom:1rem;left:50%;position:fixed;transform:translateX(-50%);width:100%;z-index:9999999999}.popup-container{border-radius:var(--radius);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)}.hovered-container{border-radius:inherit;inset:-.05rem;overflow:hidden;pointer-events:none;position:absolute;z-index:-1}.booking-widget-container{color:#fff;display:flex;flex-direction:column;pointer-events:all;position:relative;transition:all .3s ease-in-out;width:100%;z-index:2}.booking-widget-container,.booking-widget-container:after{background-color:#374151;border-radius:var(--radius,.5rem)}.booking-widget-container:after{content:\"\";inset:0;position:absolute}.date-trigger,.guests-trigger{display:none}.book-now{background:hsla(var(--brand-600,215,87%,51%),1);border-bottom-left-radius:var(--radius,.5rem);border-bottom-right-radius:var(--radius,.5rem);cursor:pointer;font-weight:500;gap:.5rem;text-align:center;transition:all .3s ease-in-out}.book-now:hover{background:hsl(var(--brand-700,218,80%,46%))}.date-trigger ir-icons,.guests-trigger ir-icons{left:14px;position:absolute}.date-trigger{border-top-left-radius:var(--radius,.5rem);border-top-right-radius:var(--radius,.5rem)}.btn-flip{background:hsla(var(--brand-600,215,87%,51%),1);border-radius:var(--radius,.5rem);color:#fff;display:inline-block;height:3rem;letter-spacing:1px;opacity:1;outline:0;overflow:hidden;padding:0 1.875rem;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s;z-index:1}.btn-flip:after{background-color:hsla(var(--brand-600,215,87%,51%),1);padding:0 1.875rem;width:100%;z-index:-2}.btn-flip:after,.btn-flip:before{bottom:0;content:\"\";height:100%;left:0;position:absolute}.btn-flip:before{background-color:hsla(var(--brand-800,215,87%,51%),1);transition:all .3s;width:0;z-index:-1}.btn-flip:before:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.btn-flip:before:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}.btn-flip:hover{color:#fff}.btn-flip:hover:before{width:100%}@media only screen and (min-width:640px){:host{justify-content:center;margin-inline:auto;width:-moz-fit-content;width:fit-content}.hovered-container:before{background:conic-gradient(from calc(270deg - var(--spread)*.5),transparent 0,var(--shimmer-color) var(--spread),transparent var(--spread));border-radius:inherit;content:\"\";display:none;inset:0;overflow:hidden;position:absolute}.booking-widget-container:hover .hovered-container:before{animation:rotate var(--speed) linear infinite;display:block}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.booking-widget-container{align-items:center;flex-direction:row;opacity:0;transition:opacity .3s ease-in-out;width:-moz-fit-content;width:fit-content}.date-trigger,.guests-trigger{align-items:center;border-bottom:0;cursor:pointer;display:flex;font-size:14px;gap:1rem;justify-content:center;min-width:200px;padding:.625rem 14px;padding-inline-end:1rem;position:relative;z-index:1}.guests-trigger{min-width:200px}.date-trigger{border-right:1px solid var(--ir-widget-border-color);border-top-left-radius:0;border-top-right-radius:0}.ir-popover{width:-moz-fit-content;width:fit-content}.date-trigger ir-icons,.guests-trigger ir-icons{left:auto;position:static}.btn-flip:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.btn-flip:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}}.static{position:static}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.pb-6{padding-bottom:1.5rem}.lowercase{text-transform:lowercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.items-center{align-items:center}.justify-center{justify-content:center}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.h-5{height:1.25rem}.w-5{width:1.25rem}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}";
const IrWidgetStyle0 = irBookingWidgetCss;

const IrBookingWidget = /*@__PURE__*/ proxyCustomElement(class IrBookingWidget extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.token = new Token();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.position = 'fixed';
        this.contentContainerStyle = undefined;
        this.propertyId = 42;
        this.perma_link = null;
        this.p = null;
        this.language = 'en';
        this.roomTypeId = null;
        this.aff = null;
        this.delay = 200;
        this.isPopoverOpen = undefined;
        this.dateModifiers = undefined;
        this.isLoading = undefined;
        this.dates = {
            from_date: null,
            to_date: null,
        };
        this.guests = {
            adultCount: 2,
            childrenCount: 0,
        };
    }
    initApp() {
        this.modifyContainerStyle();
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
    }
    async componentWillLoad() {
        this.initApp();
        const token = await this.commonService.getBEToken();
        app_store.userPreferences = {
            language_id: this.language,
            currency_id: 'usd',
        };
        this.token.setToken(token);
        this.initProperty();
    }
    componentDidLoad() {
        console.log('the widget is loaded');
        if (this.position === 'fixed') {
            console.log('widget appended to body');
            document.body.appendChild(this.el);
        }
    }
    async initProperty() {
        try {
            this.isLoading = true;
            await Promise.all([
                this.propertyService.getExposedProperty({
                    id: this.propertyId,
                    language: this.language,
                    aname: this.p,
                    perma_link: this.perma_link,
                }),
                this.commonService.getExposedLanguage(),
                this.propertyService.getExposedNonBookableNights({
                    porperty_id: this.propertyId,
                    from_date: dateFns.format(new Date(), 'yyyy-MM-dd'),
                    to_date: dateFns.format(dateFns.addYears(new Date(), 1), 'yyyy-MM-dd'),
                    perma_link: this.perma_link,
                    aname: this.p,
                }),
            ]);
            this.dateModifiers = this.getDateModifiers();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            this.elTimout = setTimeout(() => {
                this.containerRef.style.opacity = '1';
            }, this.delay);
        }
    }
    handleContentContainerStyle() {
        this.modifyContainerStyle();
    }
    modifyContainerStyle() {
        if (this.contentContainerStyle && this.contentContainerStyle.borderColor) {
            this.el.style.setProperty('--ir-widget-border-color', this.contentContainerStyle.borderColor);
        }
    }
    handleBooknow() {
        let subdomainURL = `bookingmystay.com`;
        const currentDomain = `${app_store.property.perma_link}.${subdomainURL}`;
        const { from_date, to_date } = this.dates;
        const { adultCount, childrenCount } = this.guests;
        const fromDate = from_date ? `checkin=${dateFns.format(from_date, 'yyyy-MM-dd')}` : '';
        const toDate = to_date ? `checkout=${dateFns.format(to_date, 'yyyy-MM-dd')}` : '';
        const adults = adultCount > 0 ? `adults=${adultCount}` : '';
        const children = childrenCount > 0 ? `children=${childrenCount}` : '';
        const roomTypeId = this.roomTypeId ? `rtid=${this.roomTypeId}` : '';
        const affiliate = this.aff ? `aff=${this.aff}` : '';
        const queryParams = [fromDate, toDate, adults, children, roomTypeId, affiliate];
        const queryString = queryParams.filter(param => param !== '').join('&');
        window.open(`https://${currentDomain}?${queryString}`, '_blank');
    }
    getDateModifiers() {
        var _a;
        if (!Object.keys(app_store.nonBookableNights).length) {
            return undefined;
        }
        const nights = {};
        (_a = Object.keys(app_store === null || app_store === void 0 ? void 0 : app_store.nonBookableNights)) === null || _a === void 0 ? void 0 : _a.forEach(nbn => {
            nights[nbn] = {
                disabled: true,
            };
        });
        return nights;
    }
    renderDateTrigger() {
        return (h("div", { class: "date-trigger", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-4" }), this.dates && this.dates.from_date && this.dates.to_date ? (h("div", null, h("p", null, h("span", null, dateFns.format(this.dates.from_date, 'MMM dd')), h("span", null, " - "), h("span", null, dateFns.format(this.dates.to_date, 'MMM dd'))))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderAdultChildTrigger() {
        const { adultCount, childrenCount } = this.guests;
        return (h("div", { class: "guests-trigger", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-4" }), h("p", { class: 'guests' }, adultCount > 0 ? (h(Fragment, null, h("span", { class: "lowercase" }, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), app_store.property.adult_child_constraints.child_max_age > 0 && (h("span", { class: "lowercase" }, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", null, "Guests")))));
    }
    disconnectedCallback() {
        if (this.elTimout) {
            clearTimeout(this.elTimout);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.isLoading) {
            return null;
        }
        return (h(Fragment, null, h("div", { class: "booking-widget-container", ref: el => (this.containerRef = el), style: this.contentContainerStyle }, h("div", { class: 'hovered-container' }), h("ir-popover", { autoAdjust: false, allowFlip: false, class: 'ir-popover', showCloseButton: false, placement: this.position === 'fixed' ? 'top-start' : 'auto', ref: el => (this.popover = el), onOpenChange: e => {
                this.isPopoverOpen = e.detail;
                if (!this.isPopoverOpen) {
                    if (!this.dates.to_date && this.dates.from_date) {
                        this.dates = Object.assign(Object.assign({}, this.dates), { to_date: dateFns.addDays(this.dates.from_date, 1) });
                    }
                }
            } }, this.renderDateTrigger(), h("div", { slot: "popover-content", class: "popup-container w-full border-0 bg-white p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4  md:p-6 " }, h("ir-date-range", { dateModifiers: this.dateModifiers, minDate: dateFns.addDays(new Date(), -1), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date, locale: app_store.selectedLocale, maxSpanDays: app_store.property.max_nights, onDateChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { end, start } = e.detail;
                if (end && this.isPopoverOpen) {
                    this.popover.toggleVisibility();
                }
                this.dates = {
                    from_date: start,
                    to_date: end,
                };
            } }))), h("ir-popover", { autoAdjust: false, allowFlip: false, ref: el => (this.guestPopover = el), class: 'ir-popover', showCloseButton: false, placement: this.position === 'fixed' ? 'top-start' : 'auto' }, this.renderAdultChildTrigger(), h("ir-guest-counter", { slot: "popover-content", adults: (_c = this.guests) === null || _c === void 0 ? void 0 : _c.adultCount, child: (_d = this.guests) === null || _d === void 0 ? void 0 : _d.childrenCount, minAdultCount: 0, maxAdultCount: (_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints.adult_max_nbr, maxChildrenCount: (_f = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _f === void 0 ? void 0 : _f.adult_child_constraints.child_max_nbr, childMaxAge: (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.adult_child_constraints.child_max_age, onUpdateCounts: e => (this.guests = e.detail), class: 'h-full', onCloseGuestCounter: () => this.guestPopover.toggleVisibility() })), h("button", { class: "btn-flip", onClick: this.handleBooknow.bind(this) }, "Book now"))));
    }
    get el() { return this; }
    static get watchers() { return {
        "contentContainerStyle": ["handleContentContainerStyle"]
    }; }
    static get style() { return IrWidgetStyle0; }
}, [1, "ir-widget", {
        "position": [513],
        "contentContainerStyle": [16],
        "propertyId": [2, "property-id"],
        "perma_link": [1],
        "p": [1],
        "language": [1],
        "roomTypeId": [1, "room-type-id"],
        "aff": [1],
        "delay": [2],
        "isPopoverOpen": [32],
        "dateModifiers": [32],
        "isLoading": [32],
        "dates": [32],
        "guests": [32]
    }, undefined, {
        "contentContainerStyle": ["handleContentContainerStyle"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-widget", "ir-button", "ir-date-range", "ir-dialog", "ir-guest-counter", "ir-icons", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingWidget);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-guest-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrWidget = IrBookingWidget;
const defineCustomElement = defineCustomElement$1;

export { IrWidget, defineCustomElement };

//# sourceMappingURL=ir-widget.js.map