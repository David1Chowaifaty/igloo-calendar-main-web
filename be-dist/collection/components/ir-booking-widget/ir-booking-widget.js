import { h, Fragment } from "@stencil/core";
import localization_store from "../../stores/app.store";
import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import axios from "axios";
import app_store from "../../stores/app.store";
import { format } from "date-fns";
import localizedWords from "../../stores/localization.store";
export class IrBookingWidget {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.position = 'sticky';
        this.contentContainerStyle = undefined;
        this.propertyId = 42;
        this.baseUrl = undefined;
        this.language = 'en';
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
                    aname: '',
                    perma_link: '',
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
        const fromDate = from_date ? `checkin=${format(from_date, 'yyyy-MM-dd')}` : '';
        const toDate = from_date ? `checkout=${format(to_date, 'yyyy-MM-dd')}` : '';
        const adults = adultCount > 0 ? `adults=${adultCount}` : '';
        const children = childrenCount > 0 ? `children=${childrenCount}` : '';
        const queryParams = [fromDate, toDate, adults, children];
        const queryString = queryParams.filter(param => param !== '').join('&');
        window.open(`http://${currentDomain}?${queryString}`, '_blank');
    }
    renderDateTrigger() {
        return (h("div", { class: "date-trigger", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-4" }), this.dates && this.dates.from_date && this.dates.to_date ? (h("div", null, h("p", null, h("span", null, format(this.dates.from_date, 'dd LLL yyyy')), h("span", null, "-"), h("span", null, format(this.dates.to_date, 'dd LLL yyyy'))))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderAdultChildTrigger() {
        const { adultCount, childrenCount } = this.guests;
        return (h("div", { class: "guests-trigger", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-4" }), h("p", { class: 'guests' }, adultCount > 0 && (h("span", null, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults)), childrenCount > 0 && (h("span", null, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)), adultCount === 0 && h("span", null, "number of guests"))));
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (this.isLoading) {
            return null;
        }
        return (h(Fragment, null, h("div", { class: "booking-widget-container", style: this.contentContainerStyle }, h("ir-popover", { class: 'ir-popover', showCloseButton: false, placement: "auto", ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.renderDateTrigger(), h("div", { slot: "popover-content", class: "popup-container w-full border-0 bg-white p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4 sm:shadow-sm md:p-6 " }, h("ir-date-range", { style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date, locale: localization_store.selectedLocale, maxSpanDays: 5, onDateChange: e => {
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
            } }))), h("ir-popover", { class: 'ir-popover', showCloseButton: false, placement: "auto", onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.renderAdultChildTrigger(), h("ir-guest-counter", { slot: "popover-content", minAdultCount: 0, maxAdultCount: (_c = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _c === void 0 ? void 0 : _c.adult_child_constraints.adult_max_nbr, maxChildrenCount: (_d = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _d === void 0 ? void 0 : _d.adult_child_constraints.child_max_nbr, childMaxAge: (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints.child_max_age, onUpdateCounts: e => (this.guests = e.detail), class: 'h-full' })), h("button", { class: "btn-flip", onClick: this.handleBooknow.bind(this), "data-back": "Book now", "data-front": "Book now" }))));
    }
    static get is() { return "ir-booking-widget"; }
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
                    "original": "'sticky' | 'block'",
                    "resolved": "\"block\" | \"sticky\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "position",
                "reflect": true,
                "defaultValue": "'sticky'"
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
                }
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
                "reflect": false,
                "defaultValue": "42"
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
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "isPopoverOpen": {},
            "isLoading": {},
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