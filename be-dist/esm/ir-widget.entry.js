import { r as registerInstance, h, F as Fragment, H as Host, g as getElement } from './index-243eecac.js';
import { a as app_store, e as moment } from './utils-41d5079a.js';
import { T as Token, C as CommonService, P as PropertyService, a as axios } from './Token-b1c059dd.js';
import { l as localizedWords } from './localization.store-375cacee.js';
import './moment-ab846cee.js';

const irBookingWidgetCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--spread:90deg;--shimmer-color:#fff;--speed:3s;box-sizing:border-box!important;display:flex;font-size:16px!important;padding:0 1rem;pointer-events:none;width:100%;width:-moz-fit-content;width:fit-content}:host([position=fixed]){bottom:1rem;left:50%;position:fixed;transform:translateX(-50%);width:100%;z-index:9999999999}:host([data-multi=true]){margin-inline:auto}.ir-widget__hover{border-radius:inherit;inset:-.05rem;overflow:hidden;pointer-events:none;position:absolute;z-index:-1}.ir-widget{color:var(--ir-widget-foreground-color,#fff);display:flex;flex-direction:column;pointer-events:all;position:relative;transition:all .3s ease-in-out;width:100%;z-index:2}.ir-widget,.ir-widget:after{background-color:var(--ir-widget-background-color,#374151);border-radius:var(--radius,.5rem)}.ir-widget:after{content:\"\";inset:0;position:absolute}.ir-widget__popover-panel{background-color:#fff;border:0;border-radius:var(--radius);box-shadow:none;height:21.25rem;padding:1rem;width:100%}.ir-widget__cta{background:hsla(var(--brand-600,215,87%,51%),1);border-radius:var(--radius,.5rem);color:#fff;display:inline-block;height:3rem;letter-spacing:1px;opacity:1;outline:0;overflow:hidden;padding:0 1.875rem;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s;z-index:1}.ir-widget__cta:after{background-color:hsla(var(--brand-600,215,87%,51%),1);padding:0 1.875rem;width:100%;z-index:-2}.ir-widget__cta:after,.ir-widget__cta:before{bottom:0;content:\"\";height:100%;left:0;position:absolute}.ir-widget__cta:before{background-color:hsla(var(--brand-800,215,87%,51%),1);transition:all .3s;width:0;z-index:-1}.ir-widget__cta:before:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.ir-widget__cta:before:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}.ir-widget__cta:hover{color:#fff}.ir-widget__cta:hover:before{width:100%}.ir-widget__property-select{background-color:transparent;border:0;flex:1 1 0%;margin-right:1rem;max-width:auto;outline:none;width:100%}.ir-widget__date-trigger,.ir-widget__guests-trigger,.ir-widget__property-select{align-items:center;cursor:pointer;display:flex;font-size:14px;gap:1rem;justify-content:center;min-width:200px;padding:.625rem 14px;padding-inline-end:1rem;position:relative;z-index:1}.ir-widget__date-trigger,.ir-widget__guests-trigger{display:none!important}.ir-widget__date-trigger{border-top-left-radius:var(--radius,.5rem);border-top-right-radius:var(--radius,.5rem)}.ir-widget__date-trigger ir-icons,.ir-widget__guests-trigger ir-icons{left:14px;position:absolute}.ir-widget__guests{margin:0}.ir-widget__text-lower{text-transform:lowercase}.ir-widget__icon{height:1rem;width:1rem}.ir-widget__guest-counter{height:100%}.ir-widget__date-popup,.ir-widget__guests-popup{border-inline-end:1px solid var(--ir-widget-separator-color,transparent);display:none;z-index:9999}@media only screen and (min-width:640px){:host{justify-content:center;margin-inline:auto;width:-moz-fit-content;width:fit-content}.ir-widget__date-popup,.ir-widget__guests-popup{display:flex}.ir-widget__date-trigger,.ir-widget__guests-trigger{border-bottom:0;display:flex!important}.ir-widget[data-multi=true] .ir-widget__guests-trigger{display:none!important}.ir-widget[data-multi=true] .ir-widget__date-trigger{border:0;border-left:1px solid var(--ir-widget-separator-color,transparent)}.ir-widget[data-multi=true]{width:-moz-fit-content;width:fit-content}.ir-widget[data-multi=true] .ir-widget__popover:first-of-type{display:flex}.ir-widget__hover:before{background:conic-gradient(from calc(270deg - var(--spread)*.5),transparent 0,var(--shimmer-color) var(--spread),transparent var(--spread));border-radius:inherit;content:\"\";display:none;inset:0;overflow:hidden;position:absolute}.ir-widget:hover .ir-widget__hover:before{animation:rotate var(--speed) linear infinite;display:block}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.ir-widget{align-items:center;flex-direction:row;opacity:0;transition:opacity .3s ease-in-out;width:-moz-fit-content;width:fit-content}.ir-widget__guests-trigger{min-width:200px}.ir-widget__date-trigger{border-right:1px solid var(--ir-widget-separator-color,transparent);border-top-left-radius:0;border-top-right-radius:0}.ir-widget__popover{width:-moz-fit-content;width:fit-content}.ir-widget__date-trigger ir-icons,.ir-widget__guests-trigger ir-icons{left:auto;position:static}.ir-widget__cta:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.ir-widget__cta:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}.ir-widget__popover-panel{border:1px solid #e5e7eb;width:auto}}@media (min-width:1024px){.ir-widget[data-multi=true] .ir-widget__popover{display:flex}.ir-widget[data-multi=true] .ir-widget__guests-trigger{border-left:1px solid var(--ir-widget-separator-color,transparent);display:flex!important}}@media (min-width:1200px){.ir-widget__popover-panel{height:24.5rem}}.ir-widget__date-popup::part(date-trigger),.ir-widget__guests-popup::part(guests-trigger){all:unset;align-items:center;cursor:pointer;display:flex;font-size:14px;gap:.875rem;height:100%;padding:0 1rem;width:100%}.ir-widget__guests-popup{border-inline-end:0}.ir-multi-property-widget__anchor{width:100%}.ir-multi-property-widget__popup::part(body){gap:0;padding:0;width:100%}@media only screen and (min-width:640px){.ir-multi-property-widget__anchor{margin-inline:auto;max-width:22.5rem}}.ir-multi-property-widget__header{align-items:center;border-bottom:1px solid var(--gray-200,#eaecf0);display:flex;gap:1rem;justify-content:space-between;padding:.5rem 1rem}.ir-multi-property-widget__header h5{font-size:1.25rem;line-height:1.4;margin:0}.ir-widget[data-multi=true]{align-items:center;flex-direction:row;opacity:0;transition:opacity .3s ease-in-out;width:100%}.ir-widget[data-multi=true] .ir-widget__popover{display:none}.ir-widget[data-multi=true] .ir-widget__cta:dir(ltr){border-bottom-left-radius:0;border-top-left-radius:0}.ir-widget[data-multi=true] .ir-widget__cta:dir(rtl){border-bottom-right-radius:0;border-top-right-radius:0}.ir-widget[data-multi=true] .ir-widget__cta,.ir-widget[data-multi=true] .ir-widget__cta:after{padding-inline:1rem}@media (min-width:640px){.ir-widget[data-multi=true]{width:-moz-fit-content;width:fit-content}.ir-widget[data-multi=true] .ir-widget__guests-popup{display:none}}@media (min-width:768px){.ir-widget[data-multi=true] .ir-widget__guests-popup{display:flex}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
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
        this.linkedProperties = [];
        this.isFetchingProperty = true;
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.token = new Token();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.baseGuests = {
            adultCount: 2,
            childrenCount: 0,
            infants: 0,
            childrenAges: [],
        };
    }
    componentWillLoad() {
        this.initApp();
        this.guests = this.baseGuests;
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
    handleCityChange(newValue) {
        var _a;
        const firstCityPropertyRow = (_a = this.level2Properties.properties) === null || _a === void 0 ? void 0 : _a.get(newValue)[0];
        if (firstCityPropertyRow) {
            this.selectedProperty = {
                id: firstCityPropertyRow.property_id,
            };
        }
        else {
            this.selectedProperty = null;
        }
    }
    async handlePropertyChange(newValue, oldValue) {
        var _a, _b, _c, _d;
        if (!this.isMultiPropertyMode()) {
            return;
        }
        if ((newValue === null || newValue === void 0 ? void 0 : newValue.id) === (oldValue === null || oldValue === void 0 ? void 0 : oldValue.id) || !newValue) {
            return;
        }
        this.isFetchingProperty = true;
        const [property] = await Promise.all([
            this.propertyService.getExposedProperty({
                id: newValue.id,
                language: this.language,
                aname: null,
                perma_link: null,
            }),
            this.propertyService.getExposedNonBookableNights({
                porperty_id: newValue.id,
                from_date: moment().format('YYYY-MM-DD'),
                to_date: moment().add(1, 'years').format('YYYY-MM-DD'),
                perma_link: null,
                aname: null,
            }),
        ]);
        this.property = property;
        this.selectedProperty = property;
        this.dateModifiers = Object.assign({}, this.getDateModifiers());
        if (((_b = (_a = this.property) === null || _a === void 0 ? void 0 : _a.adult_child_constraints) === null || _b === void 0 ? void 0 : _b.child_max_age) === 0 && this.guests.childrenCount > 0) {
            this.guests = Object.assign(Object.assign({}, this.baseGuests), { adultCount: this.guests.adultCount });
        }
        if (this.hasDisabledDateInRange((_c = this.dates) === null || _c === void 0 ? void 0 : _c.from_date, (_d = this.dates) === null || _d === void 0 ? void 0 : _d.to_date, this.dateModifiers)) {
            this.dates = {
                from_date: null,
                to_date: null,
            };
        }
        this.isFetchingProperty = false;
        if (this.isLoading) {
            this.showWidget();
        }
    }
    hasDisabledDateInRange(from, to, dateModifiers) {
        var _a;
        if (!from || !to || !dateModifiers)
            return false;
        const cursor = moment(from);
        const end = moment(to);
        while (cursor.isSameOrBefore(end, 'day')) {
            const key = cursor.format('YYYY-MM-DD');
            if ((_a = dateModifiers[key]) === null || _a === void 0 ? void 0 : _a.disabled) {
                return true;
            }
            cursor.add(1, 'day');
        }
        return false;
    }
    get isMultiProperties() {
        var _a;
        return ((_a = this.linkedProperties) === null || _a === void 0 ? void 0 : _a.length) > 1;
    }
    get isLevel2Mode() {
        const city_perma_links = this.parseCommaSeparated(this.l);
        return (city_perma_links === null || city_perma_links === void 0 ? void 0 : city_perma_links.length) > 0 && !!this.pool && !this.isMultiProperties;
    }
    get isSingleProperty() {
        const properties = this.parseCommaSeparated(this.p);
        return properties.length === 1 && (this.p || this.propertyId);
    }
    initApp() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        this.resetPageFontSize();
    }
    resetPageFontSize() {
        const styleEl = document.createElement('style');
        styleEl.innerHTML = 'html { font-size: 16px; }';
        document.head.appendChild(styleEl);
    }
    parseCommaSeparated(value) {
        var _a;
        return ((_a = value === null || value === void 0 ? void 0 : value.split(',').map(v => v.trim().toLowerCase()).filter(Boolean)) !== null && _a !== void 0 ? _a : []);
    }
    async initProperty() {
        try {
            this.isLoading = true;
            const token = await this.commonService.getBEToken();
            this.token.setToken(token);
            const properties = this.parseCommaSeparated(this.p);
            const city_perma_links = this.parseCommaSeparated(this.l);
            const isSingleProperty = this.isSingleProperty;
            const isMultiProperty = properties.length > 1;
            const [property, linkedProperties, level2SeparationsProperties] = await Promise.all([
                // Single property only (NOT level-2)
                isSingleProperty
                    ? this.propertyService.getExposedProperty({
                        id: this.propertyId,
                        language: this.language,
                        aname: properties[0],
                        perma_link: this.perma_link,
                    })
                    : Promise.resolve(null),
                // Multi-property ONLY
                isMultiProperty
                    ? this.propertyService.getExposedProperties({
                        anames: properties,
                        language: this.language,
                    })
                    : Promise.resolve(null),
                // Level-2 ONLY when single property
                (city_perma_links === null || city_perma_links === void 0 ? void 0 : city_perma_links.length) > 0 && !!this.pool && !isMultiProperty
                    ? this.propertyService.fetchPropertiesByLevel2({
                        pool: this.pool,
                        city_perma_links,
                    })
                    : Promise.resolve(null),
                this.commonService.getExposedLanguage(),
                // Non-bookable nights ONLY when not level-2
                isSingleProperty
                    ? this.propertyService.getExposedNonBookableNights({
                        porperty_id: this.propertyId,
                        from_date: moment().format('YYYY-MM-DD'),
                        to_date: moment().add(1, 'years').format('YYYY-MM-DD'),
                        perma_link: this.perma_link,
                        aname: properties[0],
                    })
                    : Promise.resolve(null),
            ]);
            if ((city_perma_links === null || city_perma_links === void 0 ? void 0 : city_perma_links.length) > 0 && !!this.pool && !isMultiProperty) {
                this.setLevel2Properties(level2SeparationsProperties);
            }
            else {
                this.linkedProperties = linkedProperties !== null && linkedProperties !== void 0 ? linkedProperties : [];
                this.selectedProperty = this.linkedProperties.length > 0 ? this.linkedProperties[0] : property;
            }
            if (property) {
                this.property = property;
            }
            // this.property = property;
            this.dateModifiers = this.getDateModifiers();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            if (this.isSingleProperty) {
                this.showWidget();
            }
        }
    }
    showWidget() {
        this.isLoading = false;
        this.elTimout = setTimeout(() => {
            if (!this.containerRef) {
                return;
            }
            this.containerRef.style.opacity = '1';
        }, this.delay);
    }
    setLevel2Properties(level2SeparationsProperties) {
        if (!level2SeparationsProperties || level2SeparationsProperties.length === 0) {
            this.level2Properties = { cities: [], properties: new Map() };
            return;
        }
        const citiesMap = new Map();
        const propertiesMap = new Map();
        for (const row of level2SeparationsProperties) {
            if (!citiesMap.has(row.city_perma_link)) {
                // citiesMap.set(row.city_id, {
                //   id: row.city_id,
                //   name: row.city_perma_link,
                // });
                citiesMap.set(row.city_perma_link, row.city_perma_link);
            }
            const existing = propertiesMap.get(row.city_perma_link);
            if (existing) {
                existing.push(row);
            }
            else {
                propertiesMap.set(row.city_perma_link, [row]);
            }
        }
        const cities = this.parseCommaSeparated(this.l);
        for (const city of cities) {
            if (!propertiesMap.has(city)) {
                propertiesMap.set(city, []);
            }
        }
        this.level2Properties = {
            cities,
            properties: propertiesMap,
        };
        const firstCity = cities.find(city => { var _a; return ((_a = propertiesMap.get(city)) === null || _a === void 0 ? void 0 : _a.length) > 0; });
        if (firstCity) {
            this.selectedCity = firstCity;
        }
    }
    isMultiPropertyMode() {
        return this.isLevel2Mode || this.isMultiProperties;
    }
    handleBooknow() {
        if (!this.validateChildrenAges())
            return;
        let subdomainURL = `bookingmystay.com`;
        const currentDomain = `${this.selectedProperty.perma_link}.${subdomainURL}`;
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
        var _a, _b, _c;
        if (!((_b = Object.keys((_a = app_store === null || app_store === void 0 ? void 0 : app_store.nonBookableNights) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.length)) {
            return undefined;
        }
        const nights = {};
        (_c = Object.keys(app_store === null || app_store === void 0 ? void 0 : app_store.nonBookableNights)) === null || _c === void 0 ? void 0 : _c.forEach(nbn => {
            nights[nbn] = {
                disabled: true,
            };
        });
        return nights;
    }
    validateChildrenAges() {
        var _a;
        if (this.guests.childrenAges.some(c => c === '')) {
            this.error = true;
            return false;
        }
        (_a = this.guestPopover) === null || _a === void 0 ? void 0 : _a.forceClose();
        return true;
    }
    renderMultiWidget() {
        var _a;
        return (h("ir-multi-property-widget", { isFetchingProperty: this.isFetchingProperty, selectedCity: this.selectedCity, level2Properties: this.level2Properties, linkedProperties: this.linkedProperties, selectedPropertyId: (_a = this.selectedProperty) === null || _a === void 0 ? void 0 : _a.id, dateModifiers: this.dateModifiers, property: this.selectedProperty, locale: app_store.selectedLocale, dates: this.dates, guests: this.guests, error: this.error, position: this.position, exportparts: "container, property-select, cta", onCityChange: e => {
                this.selectedCity = e.detail;
            }, onPropertyChange: e => {
                const propertyId = Number(e.detail);
                this.selectedProperty = { id: propertyId };
            }, onDateChange: e => {
                this.dates = e.detail;
            }, onGuestsChange: e => (this.guests = Object.assign({}, e.detail)), onBookNow: () => this.handleBooknow() }));
    }
    disconnectedCallback() {
        if (this.elTimout) {
            clearTimeout(this.elTimout);
        }
    }
    render() {
        var _a;
        if (this.isLoading) {
            return null;
        }
        if (this.isLevel2Mode) {
            if (this.position === 'block') {
                return this.renderMultiWidget();
            }
            return (h("ir-popup", { sync: "width", ref: el => (this.mainWidgetPopupRef = el), distance: -45, class: "ir-multi-property-widget__popup" }, h("ir-button", { slot: "anchor", part: "anchor", size: "md", class: "ir-multi-property-widget__anchor", label: localizedWords.entries.Lcz_BookNow }), h("header", { class: "ir-multi-property-widget__header", part: "header" }, h("h5", null, localizedWords.entries.Lcz_BookNow), h("ir-button", { onButtonClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.mainWidgetPopupRef.close();
                }, iconName: "xmark", variants: "icon" })), this.renderMultiWidget()));
        }
        return (h(Host, { "data-multi": this.isMultiProperties ? 'true' : 'false' }, h("div", { part: "container", class: "ir-widget", "data-multi": this.isMultiProperties ? 'true' : 'false', ref: el => (this.containerRef = el) }, h("div", { part: "hover", class: 'ir-widget__hover' }), this.isMultiProperties && (h("select", { part: "property-select", class: "ir-widget__property-select", onChange: e => {
                const propertyId = e.target.value;
                this.selectedProperty = this.linkedProperties.find(p => p.id.toString() === propertyId);
            } }, this.linkedProperties.map(property => (h("option", { selected: this.selectedProperty.id.toString() === property.id.toString(), value: property.id }, property.name))))), h(Fragment, null, h("ir-widget-date-popup", { class: "ir-widget__date-popup", dateModifiers: this.dateModifiers, exportparts: "date-trigger", dates: this.dates, locale: app_store.selectedLocale, maxSpanDays: (_a = this.property) === null || _a === void 0 ? void 0 : _a.max_nights, onDateChange: e => {
                this.dates = e.detail;
            } }), h("ir-widget-occupancy-popup", { exportparts: "guests-trigger", class: "ir-widget__guests-popup", error: this.error, guests: this.guests, property: this.property, onGuestsChange: e => (this.guests = Object.assign({}, e.detail)) })), h("button", { part: "cta", class: "ir-widget__cta", onClick: this.handleBooknow.bind(this) }, this.isMultiProperties ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 640 640" }, h("path", { fill: "currentColor", d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))) : (localizedWords.entries.Lcz_BookNow)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selectedCity": ["handleCityChange"],
        "selectedProperty": ["handlePropertyChange"]
    }; }
};
IrBookingWidget.style = IrWidgetStyle0;

export { IrBookingWidget as ir_widget };

//# sourceMappingURL=ir-widget.entry.js.map