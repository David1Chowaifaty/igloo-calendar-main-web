import { h, Fragment, Host } from "@stencil/core";
import localization_store from "../../stores/app.store";
import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import axios from "axios";
import app_store from "../../stores/app.store";
import moment from "moment/min/moment-with-locales";
import Token from "../../models/Token";
import localizedWords from "../../stores/localization.store";
export class IrBookingWidget {
    constructor() {
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
        return (h("ir-multi-property-widget", { isFetchingProperty: this.isFetchingProperty, selectedCity: this.selectedCity, level2Properties: this.level2Properties, linkedProperties: this.linkedProperties, selectedPropertyId: (_a = this.selectedProperty) === null || _a === void 0 ? void 0 : _a.id, dateModifiers: this.dateModifiers, property: this.selectedProperty, locale: localization_store.selectedLocale, dates: this.dates, guests: this.guests, error: this.error, position: this.position, exportparts: "container, property-select, cta", onCityChange: e => {
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
            } }, this.linkedProperties.map(property => (h("option", { selected: this.selectedProperty.id.toString() === property.id.toString(), value: property.id }, property.name))))), h(Fragment, null, h("ir-widget-date-popup", { class: "ir-widget__date-popup", dateModifiers: this.dateModifiers, exportparts: "date-trigger", dates: this.dates, locale: localization_store.selectedLocale, maxSpanDays: (_a = this.property) === null || _a === void 0 ? void 0 : _a.max_nights, onDateChange: e => {
                this.dates = e.detail;
            } }), h("ir-widget-occupancy-popup", { exportparts: "guests-trigger", class: "ir-widget__guests-popup", error: this.error, guests: this.guests, property: this.property, onGuestsChange: e => (this.guests = Object.assign({}, e.detail)) })), h("button", { part: "cta", class: "ir-widget__cta", onClick: this.handleBooknow.bind(this) }, this.isMultiProperties ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 640 640" }, h("path", { fill: "currentColor", d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))) : (localizedWords.entries.Lcz_BookNow)))));
    }
    static get is() { return "ir-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-widget.css"]
        };
    }
    static get properties() {
        return {
            "pool": {
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
                "getter": false,
                "setter": false,
                "attribute": "pool",
                "reflect": false
            },
            "l": {
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
                "getter": false,
                "setter": false,
                "attribute": "l",
                "reflect": false
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'fixed' | 'block'",
                    "resolved": "\"block\" | \"fixed\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": true,
                "defaultValue": "'fixed'"
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
                "getter": false,
                "setter": false,
                "attribute": "property-id",
                "reflect": false,
                "defaultValue": "42"
            },
            "perma_link": {
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
                "getter": false,
                "setter": false,
                "attribute": "perma_link",
                "reflect": false,
                "defaultValue": "null"
            },
            "p": {
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
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false,
                "defaultValue": "null"
            },
            "language": {
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
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "roomTypeId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "room-type-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "aff": {
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
                "getter": false,
                "setter": false,
                "attribute": "aff",
                "reflect": false,
                "defaultValue": "null"
            },
            "delay": {
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
                "getter": false,
                "setter": false,
                "attribute": "delay",
                "reflect": false,
                "defaultValue": "300"
            }
        };
    }
    static get states() {
        return {
            "isPopoverOpen": {},
            "property": {},
            "dateModifiers": {},
            "isLoading": {},
            "isGuestPopoverOpen": {},
            "dates": {},
            "level2Properties": {},
            "selectedCity": {},
            "guests": {},
            "linkedProperties": {},
            "selectedProperty": {},
            "isFetchingProperty": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "selectedCity",
                "methodName": "handleCityChange"
            }, {
                "propName": "selectedProperty",
                "methodName": "handlePropertyChange"
            }];
    }
}
//# sourceMappingURL=ir-booking-widget.js.map
