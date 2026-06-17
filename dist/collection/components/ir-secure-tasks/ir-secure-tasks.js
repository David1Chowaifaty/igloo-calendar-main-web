import Token from "../../models/Token";
import { PropertyService } from "../../services/property.service";
import calendar_data from "../../stores/calendar-data";
import { checkUserAuthState, manageAnchorSession } from "../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrSecureTasks {
    el;
    propertyid;
    p;
    bookingNumber;
    ticket;
    isAuthenticated = false;
    currentPage = 'front';
    inputValue;
    canScrollLeft = false;
    canScrollRight = true;
    isLoading = true;
    token = new Token();
    dates = {};
    tabsTrackRef;
    resizeObserver;
    async componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
        this.generateDates();
        if (this.ticket) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
        }
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
        this.inputValue = this.p;
        const pageParam = new URLSearchParams(window.location.search).get('page');
        if (pageParam && this.isValidPage(pageParam)) {
            this.currentPage = pageParam;
        }
        if (this.isAuthenticated) {
            await this.resolvePropertyId();
        }
    }
    componentDidLoad() {
        if (this.tabsTrackRef) {
            this.tabsTrackRef.addEventListener('scroll', () => this.updateScrollState(), { passive: true });
            this.resizeObserver = new ResizeObserver(() => this.updateScrollState());
            this.resizeObserver.observe(this.tabsTrackRef);
            this.updateScrollState();
        }
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
    }
    handlePChange() {
        this.inputValue = this.p;
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
        }
    }
    generateDates() {
        const today = new Date();
        today.setDate(today.getDate() - 1);
        const _FROM_DATE = today.toISOString().substring(0, 10);
        today.setDate(today.getDate() + 60);
        const _TO_DATE = today.toISOString().substring(0, 10);
        this.dates = { from_date: _FROM_DATE, to_date: _TO_DATE };
    }
    updateScrollState() {
        if (!this.tabsTrackRef)
            return;
        const { scrollLeft, scrollWidth, clientWidth } = this.tabsTrackRef;
        this.canScrollLeft = scrollLeft > 2;
        this.canScrollRight = scrollLeft + clientWidth < scrollWidth - 2;
    }
    scrollTabs(dir) {
        this.tabsTrackRef?.scrollBy({ left: dir === 'left' ? -240 : 240, behavior: 'smooth' });
    }
    validPages = new Set([
        'hk',
        'tasks',
        'daily-revenue',
        'arrivals',
        'departures',
        'front',
        'users',
        'email-logs',
        'country-sales',
        'daily-occupancy',
        'booking-listing',
        'channel-sales',
        'city-ledger',
        'agents',
        'channels',
        'tax-services',
        'payment-options',
        'meal-report',
        'ghs',
    ]);
    isValidPage(value) {
        return this.validPages.has(value);
    }
    navigateTo(page) {
        this.currentPage = page;
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url);
    }
    routeGroups = [
        {
            routes: [
                { name: 'GHS', value: 'ghs' },
                { name: 'Meal report', value: 'meal-report' },
            ],
        },
        {
            routes: [
                { name: 'Front Desk', value: 'front' },
                { name: 'Arrivals', value: 'arrivals' },
                { name: 'Departures', value: 'departures' },
                { name: 'Tasks', value: 'tasks' },
                { name: 'Housekeeping', value: 'hk' },
            ],
        },
        {
            routes: [
                { name: 'Daily Revenue', value: 'daily-revenue' },
                { name: 'Occupancy', value: 'daily-occupancy' },
                { name: 'Country Sales', value: 'country-sales' },
                { name: 'Channel Sales', value: 'channel-sales' },
                { name: 'Booking Listing', value: 'booking-listing' },
                { name: 'Email Logs', value: 'email-logs' },
            ],
        },
        {
            routes: [
                { name: 'Users', value: 'users' },
                { name: 'Agents', value: 'agents' },
                { name: 'City Ledger', value: 'city-ledger' },
                { name: 'Channels', value: 'channels' },
                { name: 'Tax & Services', value: 'tax-services' },
                { name: 'Payment Options', value: 'payment-options' },
            ],
        },
    ];
    async resolvePropertyId() {
        if (this.propertyid) {
            this.isLoading = false;
        }
        else if (this.p) {
            const propertyService = new PropertyService();
            await propertyService.getExposedProperty({ aname: this.p, id: 42, language: 'en' });
            this.propertyid = calendar_data?.property?.id;
            this.isLoading = false;
        }
    }
    async handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
        await this.resolvePropertyId();
    }
    logout() {
        sessionStorage.removeItem('backend_anchor');
        window.location.reload();
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("div", { class: "main__container" }, h("header", { class: "secure-header" }, h("div", { class: "secure-header__topbar" }, h("div", { class: "secure-header__brand" }, h("div", { class: "secure-header__brand-icon" }, h("img", { src: "https://x.igloorooms.com/app-assets/images/portrait/small/avatar-s-19.png", alt: "" })), h("span", { class: "secure-header__brand-name" }, "IglooRooms")), h("div", { class: "secure-header__controls" }, h("form", { class: "secure-header__aname-form", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, h("ir-input", { class: "secure-header__aname-input", size: "s", pill: true, value: this.inputValue, placeholder: "Property", "aria-label": "Property AName", "onText-change": e => (this.inputValue = e.detail) }, h("wa-icon", { slot: "start", name: "building", "aria-hidden": "true" }), h("button", { slot: "end", class: "secure-header__aname-save", type: "submit", "aria-label": "Save property" }, h("wa-icon", { name: "arrow-right" })))), h("div", { class: "secure-header__sep", role: "separator" }), h("wa-tooltip", { for: "secure-logout-btn", placement: "bottom" }, "Sign out"), h("wa-button", { id: "secure-logout-btn", size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Sign out", onClick: () => this.logout() }, h("wa-icon", { name: "arrow-right-from-bracket" })))), h("nav", { class: "secure-header__tabbar", "aria-label": "Secure screens navigation" }, h("wa-button", { class: `secure-header__scroll-btn${this.canScrollLeft ? '' : ' secure-header__scroll-btn--hidden'}`, size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs left", tabIndex: -1, onClick: () => this.scrollTabs('left') }, h("wa-icon", { name: "chevron-left" })), h("div", { class: "secure-tabs-track", ref: el => {
                this.tabsTrackRef = el;
            } }, h("ul", { class: "secure-tabs", role: "tablist" }, this.routeGroups.map((group, gi) => [
            gi > 0 && h("li", { class: "secure-tabs__sep", role: "none", "aria-hidden": "true" }),
            ...group.routes.map(route => (h("li", { key: route.value, class: "secure-tabs__item", role: "none" }, h("button", { type: "button", role: "tab", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-selected": this.currentPage === route.value ? 'true' : 'false', onClick: () => this.navigateTo(route.value) }, route.name)))),
        ]))), h("wa-button", { class: `secure-header__scroll-btn${this.canScrollRight ? '' : ' secure-header__scroll-btn--hidden'}`, size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs right", tabIndex: -1, onClick: () => this.scrollTabs('right') }, h("wa-icon", { name: "chevron-right" })))), h("div", { class: "ir-page__container", style: { padding: '0' } }, this.renderPage())));
    }
    renderPage() {
        switch (this.currentPage) {
            case 'front':
                return (h("div", { style: { flex: '1 1 0%', display: 'block' } }, h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" })));
            case 'arrivals':
                return h("ir-arrivals", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'departures':
                return h("ir-departures", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'tasks':
                return h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'hk':
                return h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'channel-sales':
                return h("ir-sales-by-channel", { language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
            case 'booking-listing':
                return h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'email-logs':
                return h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'users':
                return h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'agents':
                return h("ir-agents", { style: { gap: '1.5rem' }, p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'city-ledger':
                return h("ir-city-ledger", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channels':
                return h("ir-channel", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'tax-services':
                return h("ir-tax-service-categories", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'payment-options':
                return h("ir-payment-option", { p: this.p, propertyid: this.propertyid.toString(), language: "en", ticket: this.token.getToken() });
            case 'ghs':
                return h("ir-ghs-onboarding", { ticket: this.token.getToken() });
            case 'meal-report':
                return h("ir-meal-report", { propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            default:
                return null;
        }
    }
    static get is() { return "ir-secure-tasks"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-secure-tasks.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-secure-tasks.css"]
        };
    }
    static get properties() {
        return {
            "propertyid": {
                "type": "number",
                "mutable": true,
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
                "reflect": false,
                "attribute": "propertyid"
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
                "reflect": false,
                "attribute": "p"
            },
            "bookingNumber": {
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
                "reflect": false,
                "attribute": "booking-number"
            },
            "ticket": {
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
                "reflect": false,
                "attribute": "ticket"
            }
        };
    }
    static get states() {
        return {
            "isAuthenticated": {},
            "currentPage": {},
            "inputValue": {},
            "canScrollLeft": {},
            "canScrollRight": {},
            "isLoading": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
