import { r as registerInstance, g as getElement, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-bcdb7c50.js';
import { P as PropertyService } from './property.service-95372f13.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { m as checkUserAuthState, n as manageAnchorSession } from './utils-471ae115.js';
import './axios-aa1335b8.js';
import './index-87419685.js';
import './moment-ab846cee.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-501de9b6.js';

const irSecureTasksCss = "ir-agents .ir-page__container{gap:var(--wa-space-l, 1.5rem) !important}.ir-page__container,.main__container{height:100%}.secure-header{position:sticky;top:0;z-index:100;display:flex;flex-direction:column}.secure-header__topbar{display:flex;align-items:center;justify-content:space-between;padding:0 var(--wa-space-m, 1rem);height:52px;background:#111827;gap:var(--wa-space-m, 1rem);flex-shrink:0}.secure-header__brand{display:flex;align-items:center;gap:var(--wa-space-xs, 0.375rem);color:#fff;font-weight:700;font-size:var(--wa-font-size-m, 0.9rem);letter-spacing:-0.01em;flex-shrink:0;user-select:none}.secure-header__brand-icon{width:28px;height:28px;border-radius:7px;overflow:hidden;flex-shrink:0;background:white;border-radius:100%;display:flex;align-items:center;justify-content:center}.secure-header__brand-icon img{width:100%;height:100%;object-fit:cover;display:block}.secure-header__brand-name{color:#fff}.secure-header__brand-pill{font-size:0.6rem;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;background:rgba(255, 255, 255, 0.12);border:1px solid rgba(255, 255, 255, 0.18);border-radius:999px;padding:1px 6px;color:rgba(255, 255, 255, 0.6);align-self:center}.secure-header__controls{display:flex;align-items:center;gap:var(--wa-space-s, 0.5rem)}.secure-header__aname-form{margin:0}.secure-header__aname-input{width:200px}.secure-header__aname-save{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:999px;background:transparent;cursor:pointer;flex-shrink:0;transition:background 0.15s,\n    color 0.15s;padding:0;font-size:0.8rem}.secure-header__aname-save:hover{background:rgba(255, 255, 255, 0.12)}.secure-header__sep{width:1px;height:22px;background:rgba(255, 255, 255, 0.15);flex-shrink:0}#secure-logout-btn{--wa-button-padding-start:0;--wa-button-padding-end:0;width:30px;height:30px;color:rgba(255, 255, 255, 0.65)}#secure-logout-btn:hover{color:#fff}.secure-header__tabbar{display:flex;align-items:center;background:var(--wa-color-surface-default, #fff);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding:0 var(--wa-space-2xs, 0.25rem);height:44px;flex-shrink:0;gap:2px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.06)}.secure-header__scroll-btn{flex-shrink:0;transition:opacity 0.2s,\n    visibility 0.2s}.secure-header__scroll-btn--hidden{opacity:0;pointer-events:none}.secure-tabs-track{flex:1;overflow-x:auto;scrollbar-width:none}.secure-tabs-track::-webkit-scrollbar{display:none}.secure-tabs{display:flex;align-items:center;list-style:none;padding:0;margin:0;height:100%;gap:1px;white-space:nowrap}.secure-tabs__sep{display:flex;align-items:center;padding:0 var(--wa-space-xs, 0.375rem);flex-shrink:0}.secure-tabs__sep::after{content:'';display:block;width:1px;height:16px;background:var(--wa-color-neutral-border-quiet, #e5e7eb)}.secure-tabs__group-label{font-size:0.62rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--wa-color-text-quiet, #9ca3af);padding:0 var(--wa-space-xs, 0.375rem) 0 var(--wa-space-2xs, 0.25rem);white-space:nowrap;flex-shrink:0;user-select:none}.secure-tabs__item{display:flex;align-items:center;height:100%;flex-shrink:0}.secure-tabs__btn{position:relative;display:inline-flex;align-items:center;height:100%;padding:0 var(--wa-space-s, 0.625rem);border:none;background:transparent;color:var(--wa-color-text-quiet, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem);font-weight:500;font-family:inherit;border-bottom:2px solid transparent;cursor:pointer;white-space:nowrap;transition:color 0.15s,\n    border-color 0.15s,\n    background 0.15s;border-radius:var(--wa-border-radius-s, 4px) var(--wa-border-radius-s, 4px) 0 0;margin-bottom:-1px;}.secure-tabs__btn:hover{color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.secure-tabs__btn:focus-visible{outline:2px solid var(--wa-color-brand-border-normal, #3b82f6);outline-offset:-2px}.secure-tabs__btn.active{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
            } }, h("ir-input", { class: "secure-header__aname-input", size: "small", pill: true, value: this.inputValue, placeholder: "Property", "aria-label": "Property AName", "onText-change": e => (this.inputValue = e.detail) }, h("wa-icon", { slot: "start", name: "building", "aria-hidden": "true" }), h("button", { slot: "end", class: "secure-header__aname-save", type: "submit", "aria-label": "Save property" }, h("wa-icon", { name: "arrow-right" })))), h("div", { class: "secure-header__sep", role: "separator" }), h("wa-tooltip", { for: "secure-logout-btn", placement: "bottom" }, "Sign out"), h("wa-button", { id: "secure-logout-btn", size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Sign out", onClick: () => this.logout() }, h("wa-icon", { name: "arrow-right-from-bracket" })))), h("nav", { class: "secure-header__tabbar", "aria-label": "Secure screens navigation" }, h("wa-button", { class: `secure-header__scroll-btn${this.canScrollLeft ? '' : ' secure-header__scroll-btn--hidden'}`, size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs left", tabIndex: -1, onClick: () => this.scrollTabs('left') }, h("wa-icon", { name: "chevron-left" })), h("div", { class: "secure-tabs-track", ref: el => {
                this.tabsTrackRef = el;
            } }, h("ul", { class: "secure-tabs", role: "tablist" }, this.routeGroups.map((group, gi) => [
            gi > 0 && h("li", { class: "secure-tabs__sep", role: "none", "aria-hidden": "true" }),
            ...group.routes.map(route => (h("li", { key: route.value, class: "secure-tabs__item", role: "none" }, h("button", { type: "button", role: "tab", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-selected": this.currentPage === route.value ? 'true' : 'false', onClick: () => this.navigateTo(route.value) }, route.name)))),
        ]))), h("wa-button", { class: `secure-header__scroll-btn${this.canScrollRight ? '' : ' secure-header__scroll-btn--hidden'}`, size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs right", tabIndex: -1, onClick: () => this.scrollTabs('right') }, h("wa-icon", { name: "chevron-right" })))), h("div", { class: "ir-page__container", style: { padding: '0' } }, this.renderPage())));
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
    static get watchers() { return {
        "p": ["handlePChange"],
        "ticket": ["handleTicketChange"]
    }; }
};
IrSecureTasks.style = IrSecureTasksStyle0;

export { IrSecureTasks as ir_secure_tasks };

//# sourceMappingURL=ir-secure-tasks.entry.js.map