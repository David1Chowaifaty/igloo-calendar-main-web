import { r as registerInstance, h, F as Fragment, g as getElement } from './index-21632897.js';
import { a as app_store, d as dateFns } from './utils-9a5c698f.js';
import { C as CommonService, P as PropertyService, a as axios, l as localizedWords } from './common.service-9e05e91e.js';

const irBookingWidgetCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.block{display:block}.flex{display:flex}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.uppercase{text-transform:uppercase}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{box-sizing:border-box;display:flex;padding:0 1rem;width:100%}:host([position=sticky]){bottom:2rem;position:sticky}.booking-widget-container{background-color:#374151;border-radius:var(--ir-widget-radius,.5rem);color:#fff;display:flex;flex-direction:column;position:relative;transition:all .3s ease-in-out;width:100%;z-index:0}.popup-container{border-radius:var(--ir-widget-radius)}.date-trigger,.guests-trigger{display:none}.book-now{background:hsla(var(--brand-600,215,87%,51%),1);border-bottom-left-radius:var(--ir-widget-radius,.5rem);border-bottom-right-radius:var(--ir-widget-radius,.5rem);cursor:pointer;font-weight:500;gap:.5rem;text-align:center;transition:all .3s ease-in-out}.book-now:hover{background:hsl(var(--brand-700,218,80%,46%))}.date-trigger ir-icons,.guests-trigger ir-icons{left:14px;position:absolute}.date-trigger{border-top-left-radius:var(--ir-widget-radius,.5rem);border-top-right-radius:var(--ir-widget-radius,.5rem)}@media only screen and (min-width:640px){:host{justify-content:center;margin-inline:auto;width:-moz-fit-content;width:fit-content}.booking-widget-container{align-items:center;flex-direction:row;width:-moz-fit-content;width:fit-content}.date-trigger,.guests-trigger{align-items:center;border-bottom:0;cursor:pointer;display:flex;font-size:14px;gap:1rem;justify-content:center;min-width:200px;padding:.625rem 14px;padding-inline-end:1rem;position:relative;z-index:1}.guests-trigger{min-width:200px}.date-trigger{border-right:1px solid var(--ir-widget-border-color);border-top-left-radius:0;border-top-right-radius:0}.ir-popover{width:-moz-fit-content;width:fit-content}.date-trigger ir-icons,.guests-trigger ir-icons{left:auto;position:static}.btn-flip:dir(ltr):before{border-bottom-left-radius:0;border-top-left-radius:0}.btn-flip:dir(rtl):before{border-bottom-right-radius:0;border-top-right-radius:0}}@keyframes rotate{0%{transform:translate(-50%,-50%) scale(1.4) rotate(0turn)}to{transform:translate(-50%,-50%) scale(1.4) rotate(1turn)}}.btn-flip{background:hsla(var(--brand-600,215,87%,51%),1);border-radius:var(--ir-widget-radius,.5rem);color:#fff;display:inline-block;letter-spacing:1px;line-height:40px;opacity:1;outline:0;position:relative;text-align:center;text-decoration:none;text-transform:uppercase}.btn-flip:hover:before{background:hsl(var(--brand-700,218,80%,46%))}.btn-flip:before{background:hsla(var(--brand-600,215,87%,51%),1);border-radius:var(--ir-widget-radius,.5rem);color:#fff;content:attr(data-front);display:block;left:0;line-height:40px;opacity:1;padding:0 30px;position:relative;top:0;transform:translateY(0) rotateX(0);transition:.5s}.static{position:static}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.pb-6{padding-bottom:1.5rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}.items-center{align-items:center}.justify-center{justify-content:center}.right-3{right:.75rem}.top-3{top:.75rem}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}";
const IrBookingWidgetStyle0 = irBookingWidgetCss;

const IrBookingWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.position = 'sticky';
        this.contentContainerStyle = undefined;
        this.propertyId = 42;
        this.perma_link = null;
        this.aName = null;
        this.baseUrl = undefined;
        this.language = 'en';
        this.roomTypeId = '110';
        this.isPopoverOpen = undefined;
        this.isLoading = undefined;
        this.dates = {
            from_date: null,
            to_date: null,
        };
        this.guests = {
            adultCount: 0,
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
        this.token = await this.commonService.getBEToken();
        app_store.userPreferences = {
            language_id: this.language,
            currency_id: 'usd',
        };
        this.commonService.setToken(this.token);
        this.propertyService.setToken(this.token);
        this.initProperty();
    }
    async initProperty() {
        try {
            this.isLoading = true;
            await Promise.all([
                this.propertyService.getExposedProperty({
                    id: this.propertyId,
                    language: this.language,
                    aname: this.aName,
                    perma_link: this.perma_link,
                }),
                this.commonService.getExposedLanguage(),
            ]);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
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
        if (this.guests.adultCount === 0) {
            return;
        }
        let currentDomain = window.location.hostname;
        let subdomainURL = `bookingdirect.com`;
        if (currentDomain === 'localhost') {
            currentDomain = `localhost:7742`;
        }
        else {
            currentDomain = `${subdomainURL}`;
        }
        const { from_date, to_date } = this.dates;
        const { adultCount, childrenCount } = this.guests;
        const fromDate = from_date ? `checkin=${dateFns.format(from_date, 'yyyy-MM-dd')}` : '';
        const toDate = from_date ? `checkout=${dateFns.format(to_date, 'yyyy-MM-dd')}` : '';
        const adults = adultCount > 0 ? `adults=${adultCount}` : '';
        const children = childrenCount > 0 ? `children=${childrenCount}` : '';
        const roomTypeId = this.roomTypeId ? `rtid=${this.roomTypeId}` : '';
        const queryParams = [fromDate, toDate, adults, children, roomTypeId];
        const queryString = queryParams.filter(param => param !== '').join('&');
        window.open(`http://${currentDomain}?${queryString}`, '_blank');
    }
    renderDateTrigger() {
        return (h("div", { class: "date-trigger", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-4" }), this.dates && this.dates.from_date && this.dates.to_date ? (h("div", null, h("p", null, h("span", null, dateFns.format(this.dates.from_date, 'MMM dd')), h("span", null, " - "), h("span", null, dateFns.format(this.dates.to_date, 'MMM dd'))))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderAdultChildTrigger() {
        const { adultCount, childrenCount } = this.guests;
        return (h("div", { class: "guests-trigger", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-4" }), h("p", { class: 'guests' }, adultCount > 0 && (h("span", null, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults)), childrenCount > 0 && (h("span", null, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)), adultCount === 0 && h("span", null, "Guests"))));
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (this.isLoading) {
            return null;
        }
        return (h(Fragment, null, h("div", { class: "booking-widget-container", style: this.contentContainerStyle }, h("ir-popover", { class: 'ir-popover', showCloseButton: false, placement: "auto", ref: el => (this.popover = el), onOpenChange: e => {
                this.isPopoverOpen = e.detail;
                if (!this.isPopoverOpen) {
                    if (!this.dates.to_date && this.dates.from_date) {
                        this.dates = Object.assign(Object.assign({}, this.dates), { to_date: dateFns.addDays(this.dates.from_date, 1) });
                    }
                }
            } }, this.renderDateTrigger(), h("div", { slot: "popover-content", class: "popup-container w-full border-0 bg-white p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4 sm:shadow-sm md:p-6 " }, h("ir-date-range", { minDate: dateFns.addDays(new Date(), -1), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date, locale: app_store.selectedLocale, maxSpanDays: 5, onDateChange: e => {
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
            } }))), h("ir-popover", { ref: el => (this.guestPopover = el), class: 'ir-popover', showCloseButton: false, placement: "auto" }, this.renderAdultChildTrigger(), h("ir-guest-counter", { slot: "popover-content", minAdultCount: 0, maxAdultCount: (_c = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _c === void 0 ? void 0 : _c.adult_child_constraints.adult_max_nbr, maxChildrenCount: (_d = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _d === void 0 ? void 0 : _d.adult_child_constraints.child_max_nbr, childMaxAge: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints.child_max_age, onUpdateCounts: e => (this.guests = e.detail), class: 'h-full', onCloseGuestCounter: () => this.guestPopover.toggleVisibility() })), h("button", { class: "btn-flip", onClick: this.handleBooknow.bind(this), "data-back": "Book now", "data-front": "Book now" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "contentContainerStyle": ["handleContentContainerStyle"]
    }; }
};
IrBookingWidget.style = IrBookingWidgetStyle0;

export { IrBookingWidget as ir_booking_widget };

//# sourceMappingURL=ir-booking-widget.entry.js.map