import { r as registerInstance, h, F as Fragment, g as getElement } from './index-243eecac.js';
import { b as app_store, f as moment, l as localizedWords } from './utils-6f73deb0.js';
import { T as Token, C as CommonService, P as PropertyService, a as axios } from './Token-3d630cc9.js';
import './moment-ab846cee.js';

const irBookingWidgetCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.uppercase{text-transform:uppercase}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--spread:90deg;--shimmer-color:#fff;--speed:3s;box-sizing:border-box!important;display:flex;font-size:16px!important;padding:0 1rem;pointer-events:none;width:100%}:host([position=fixed]){bottom:1rem;left:50%;position:fixed;transform:translateX(-50%);width:100%;z-index:9999999999}.popup-container{border-radius:var(--radius);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);height:21.25rem}.hovered-container{border-radius:inherit;inset:-.05rem;overflow:hidden;pointer-events:none;position:absolute;z-index:-1}.booking-widget-container{color:#fff;display:flex;flex-direction:column;pointer-events:all;position:relative;transition:all .3s ease-in-out;width:100%;z-index:2}.booking-widget-container,.booking-widget-container:after{background-color:#374151;border-radius:var(--radius,.5rem)}.booking-widget-container:after{content:\"\";inset:0;position:absolute}.date-trigger,.guests-trigger{display:none}.book-now{background:hsla(var(--brand-600,215,87%,51%),1);border-bottom-left-radius:var(--radius,.5rem);border-bottom-right-radius:var(--radius,.5rem);cursor:pointer;font-weight:500;gap:.5rem;text-align:center;transition:all .3s ease-in-out}.book-now:hover{background:hsl(var(--brand-700,218,80%,46%))}.date-trigger ir-icons,.guests-trigger ir-icons{left:14px;position:absolute}.date-trigger{border-top-left-radius:var(--radius,.5rem);border-top-right-radius:var(--radius,.5rem)}.btn-flip{background:hsla(var(--brand-600,215,87%,51%),1);border-radius:var(--radius,.5rem);color:#fff;display:inline-block;height:3rem;letter-spacing:1px;opacity:1;outline:0;overflow:hidden;padding:0 1.875rem;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s;z-index:1}.btn-flip:after{background-color:hsla(var(--brand-600,215,87%,51%),1);padding:0 1.875rem;width:100%;z-index:-2}.btn-flip:after,.btn-flip:before{bottom:0;content:\"\";height:100%;left:0;position:absolute}.btn-flip:before{background-color:hsla(var(--brand-800,215,87%,51%),1);transition:all .3s;width:0;z-index:-1}.btn-flip:before:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.btn-flip:before:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}.btn-flip:hover{color:#fff}.btn-flip:hover:before{width:100%}@media only screen and (min-width:640px){:host{justify-content:center;margin-inline:auto;width:-moz-fit-content;width:fit-content}.hovered-container:before{background:conic-gradient(from calc(270deg - var(--spread)*.5),transparent 0,var(--shimmer-color) var(--spread),transparent var(--spread));border-radius:inherit;content:\"\";display:none;inset:0;overflow:hidden;position:absolute}.booking-widget-container:hover .hovered-container:before{animation:rotate var(--speed) linear infinite;display:block}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.booking-widget-container{align-items:center;flex-direction:row;opacity:0;transition:opacity .3s ease-in-out;width:-moz-fit-content;width:fit-content}.date-trigger,.guests-trigger{align-items:center;border-bottom:0;cursor:pointer;display:flex;font-size:14px;gap:1rem;justify-content:center;min-width:200px;padding:.625rem 14px;padding-inline-end:1rem;position:relative;z-index:1}.guests-trigger{min-width:200px}.date-trigger{border-right:1px solid var(--ir-widget-border-color);border-top-left-radius:0;border-top-right-radius:0}.ir-popover{width:-moz-fit-content;width:fit-content}.date-trigger ir-icons,.guests-trigger ir-icons{left:auto;position:static}.btn-flip:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.btn-flip:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}}@media (min-width:1200px){.popup-container{height:24.5rem}}.static{position:static}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-4{padding:1rem}.lowercase{text-transform:lowercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.items-center{align-items:center}.justify-center{justify-content:center}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.h-5{height:1.25rem}.w-5{width:1.25rem}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
const IrWidgetStyle0 = irBookingWidgetCss;

const IrBookingWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = 'fixed';
        this.propertyId = 42;
        this.perma_link = null;
        this.p = null;
        this.language = 'en';
        this.roomTypeId = null;
        this.aff = null;
        this.delay = 300;
        this.dates = {
            from_date: null,
            to_date: null,
        };
        this.guests = {
            adultCount: 2,
            childrenCount: 0,
            infants: 0,
            childrenAges: [],
        };
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.token = new Token();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
    }
    componentWillLoad() {
        this.initApp();
        app_store.userPreferences = {
            language_id: this.language,
            currency_id: 'usd',
        };
        this.initProperty();
    }
    componentDidLoad() {
        console.log('the widget is loaded');
        if (this.position === 'fixed') {
            console.log('widget appended to body');
            document.body.appendChild(this.el);
        }
    }
    initApp() {
        this.modifyContainerStyle();
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        this.resetPageFontSize();
    }
    resetPageFontSize() {
        const styleEl = document.createElement('style');
        styleEl.innerHTML = 'html { font-size: 16px; }';
        document.head.appendChild(styleEl);
    }
    async initProperty() {
        try {
            this.isLoading = true;
            const token = await this.commonService.getBEToken();
            this.token.setToken(token);
            const [property] = await Promise.all([
                this.propertyService.getExposedProperty({
                    id: this.propertyId,
                    language: this.language,
                    aname: this.p,
                    perma_link: this.perma_link,
                }),
                this.commonService.getExposedLanguage(),
                this.propertyService.getExposedNonBookableNights({
                    porperty_id: this.propertyId,
                    from_date: moment().format('YYYY-MM-DD'),
                    to_date: moment().add(1, 'years').format('YYYY-MM-DD'),
                    perma_link: this.perma_link,
                    aname: this.p,
                }),
            ]);
            this.property = property;
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
        if (!this.validateChildrenAges())
            return;
        let subdomainURL = `bookingmystay.com`;
        const currentDomain = `${this.property.perma_link}.${subdomainURL}`;
        const { from_date, to_date } = this.dates;
        const { adultCount, childrenCount } = this.guests;
        const fromDate = from_date ? `checkin=${moment(from_date).format('YYYY-MM-DD')}` : '';
        const toDate = to_date ? `checkout=${moment(to_date).format('YYYY-MM-DD')}` : '';
        const adults = adultCount > 0 ? `adults=${adultCount}` : '';
        const children = childrenCount > 0 ? `children=${childrenCount}` : '';
        const roomTypeId = this.roomTypeId ? `u=${this.roomTypeId}` : '';
        const affiliate = this.aff ? `aff=${this.aff}` : '';
        const ages = this.guests.childrenCount > 0 && this.guests.childrenAges.length > 0 ? `ages=${this.guests.childrenAges.join('_')}` : '';
        const queryParams = [fromDate, toDate, adults, children, roomTypeId, affiliate, ages];
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
        var _a, _b;
        const from = (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date;
        const to = (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date;
        let fromLabel = '';
        let toLabel = '';
        if (from) {
            fromLabel = moment(from).format('DD MMM YYYY');
        }
        if (to) {
            toLabel = moment(to).format('DD MMM YYYY');
        }
        return (h("div", { class: "date-trigger", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-4" }), fromLabel && toLabel ? (h("div", null, h("p", null, h("span", null, fromLabel), h("span", null, " - "), h("span", null, toLabel)))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderAdultChildTrigger() {
        const { adultCount, childrenCount } = this.guests;
        return (h("div", { class: "guests-trigger", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-4" }), h("p", { class: 'guests' }, adultCount > 0 ? (h(Fragment, null, h("span", { class: "lowercase" }, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), this.property.adult_child_constraints.child_max_age > 0 && (h("span", { class: "lowercase" }, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", null, "Guests")))));
    }
    disconnectedCallback() {
        if (this.elTimout) {
            clearTimeout(this.elTimout);
        }
    }
    handlePopoverToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isGuestPopoverOpen = e.detail;
        console.log('here');
        if (!this.isGuestPopoverOpen) {
            if (this.guests.childrenCount === 0) {
                this.guestPopover.forceClose();
            }
            else {
                this.validateChildrenAges();
            }
        }
    }
    validateChildrenAges() {
        if (this.guests.childrenAges.some(c => c === '')) {
            this.error = true;
            return false;
        }
        this.guestPopover.forceClose();
        return true;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.isLoading) {
            return null;
        }
        return (h(Fragment, null, h("div", { class: "booking-widget-container", ref: el => (this.containerRef = el), style: this.contentContainerStyle }, h("div", { class: 'hovered-container' }), h("ir-popover", { autoAdjust: false, allowFlip: false, class: 'ir-popover', showCloseButton: false, placement: this.position === 'fixed' ? 'top-start' : 'auto', ref: el => (this.popover = el), onOpenChange: e => {
                this.isPopoverOpen = e.detail;
                if (!this.isPopoverOpen) {
                    if (this.dates.from_date && !this.dates.to_date) {
                        this.dates = Object.assign(Object.assign({}, this.dates), { to_date: moment(this.dates.from_date).add(1, 'days').toDate() });
                    }
                }
            } }, this.renderDateTrigger(), h("div", { slot: "popover-content", class: "popup-container w-full border-0 bg-white p-4  shadow-none sm:w-auto sm:border  " }, h("ir-date-range", { dateModifiers: this.dateModifiers, minDate: moment().add(-1, 'days'), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: ((_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date) ? moment(this.dates.from_date) : null, toDate: ((_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date) ? moment(this.dates.to_date) : null, locale: app_store.selectedLocale, maxSpanDays: this.property.max_nights, onDateChange: e => {
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
            } }))), h("ir-popover", { outsideEvents: "none", autoAdjust: false, allowFlip: false, ref: el => (this.guestPopover = el), class: 'ir-popover', showCloseButton: false, placement: this.position === 'fixed' ? 'top-start' : 'auto', onOpenChange: this.handlePopoverToggle.bind(this) }, this.renderAdultChildTrigger(), h("ir-guest-counter", { slot: "popover-content", error: this.error, adults: (_c = this.guests) === null || _c === void 0 ? void 0 : _c.adultCount, child: (_d = this.guests) === null || _d === void 0 ? void 0 : _d.childrenCount, minAdultCount: 0, maxAdultCount: (_e = this.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints.adult_max_nbr, maxChildrenCount: (_f = this.property) === null || _f === void 0 ? void 0 : _f.adult_child_constraints.child_max_nbr, childMaxAge: (_g = this.property) === null || _g === void 0 ? void 0 : _g.adult_child_constraints.child_max_age, onUpdateCounts: e => (this.guests = Object.assign({}, e.detail)), class: 'h-full', onCloseGuestCounter: () => this.guestPopover.forceClose() })), h("button", { class: "btn-flip", onClick: this.handleBooknow.bind(this) }, "Book now"))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "contentContainerStyle": ["handleContentContainerStyle"]
    }; }
};
IrBookingWidget.style = IrWidgetStyle0;

export { IrBookingWidget as ir_widget };

//# sourceMappingURL=ir-widget.entry.js.map