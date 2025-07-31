import { h, Fragment } from "@stencil/core";
import localization_store from "../../stores/app.store";
import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import axios from "axios";
import app_store from "../../stores/app.store";
import moment from "moment/min/moment-with-locales";
import localizedWords from "../../stores/localization.store";
import Token from "../../models/Token";
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
            } }, this.renderDateTrigger(), h("div", { slot: "popover-content", class: "popup-container w-full border-0 bg-white p-4  shadow-none sm:w-auto sm:border  " }, h("ir-date-range", { dateModifiers: this.dateModifiers, minDate: moment().add(-1, 'days'), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: ((_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date) ? moment(this.dates.from_date) : null, toDate: ((_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date) ? moment(this.dates.to_date) : null, locale: localization_store.selectedLocale, maxSpanDays: this.property.max_nights, onDateChange: e => {
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
            "contentContainerStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TContainerStyle",
                    "resolved": "{ color?: string; height?: string; width?: string; borderColor?: string; background?: string; }",
                    "references": {
                        "TContainerStyle": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-booking-widget/types.ts::TContainerStyle"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
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
            "guests": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "contentContainerStyle",
                "methodName": "handleContentContainerStyle"
            }];
    }
}
//# sourceMappingURL=ir-booking-widget.js.map
