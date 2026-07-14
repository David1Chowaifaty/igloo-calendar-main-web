'use strict';

var index = require('./index-Du1V06mp.js');
var Token = require('./Token-mN7PQKGF.js');
var index$1 = require('./index-BRDqlm7_.js');
var calendarData = require('./calendar-data-CeBvVadE.js');
var utils = require('./utils-EjuW-lx0.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./moment-CdViwxPQ.js');
require('./index-BTAleJGz.js');
require('./locales.store-CYcHBWUG.js');
require('./type-Dy9pVS4V.js');

const irSecureTasksCss = () => `ir-agents .ir-page__container{gap:var(--wa-space-l, 1.5rem) !important}.ir-page__container,.main__container{height:100%}.secure-header{position:sticky;top:0;z-index:100;display:flex;flex-direction:column}.secure-header__topbar{display:flex;align-items:center;justify-content:space-between;padding:0 var(--wa-space-m, 1rem);height:52px;background:#111827;gap:var(--wa-space-m, 1rem);flex-shrink:0}.secure-header__brand{display:flex;align-items:center;gap:var(--wa-space-xs, 0.375rem);color:#fff;font-weight:700;font-size:var(--wa-font-size-m, 0.9rem);letter-spacing:-0.01em;flex-shrink:0;user-select:none}.secure-header__brand-icon{width:28px;height:28px;border-radius:7px;overflow:hidden;flex-shrink:0;background:white;border-radius:100%;display:flex;align-items:center;justify-content:center}.secure-header__brand-icon img{width:100%;height:100%;object-fit:cover;display:block}.secure-header__brand-name{color:#fff}.secure-header__brand-pill{font-size:0.6rem;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;background:rgba(255, 255, 255, 0.12);border:1px solid rgba(255, 255, 255, 0.18);border-radius:999px;padding:1px 6px;color:rgba(255, 255, 255, 0.6);align-self:center}.secure-header__controls{display:flex;align-items:center;gap:var(--wa-space-s, 0.5rem)}.secure-header__aname-form{margin:0}.secure-header__aname-input{width:200px}.secure-header__aname-save{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:999px;background:transparent;cursor:pointer;flex-shrink:0;transition:background 0.15s,     color 0.15s;padding:0;font-size:0.8rem}.secure-header__aname-save:hover{background:rgba(255, 255, 255, 0.12)}.secure-header__sep{width:1px;height:22px;background:rgba(255, 255, 255, 0.15);flex-shrink:0}#secure-logout-btn{--wa-button-padding-start:0;--wa-button-padding-end:0;width:30px;height:30px;color:rgba(255, 255, 255, 0.65)}#secure-logout-btn:hover{color:#fff}.secure-header__tabbar{display:flex;align-items:center;background:var(--wa-color-surface-default, #fff);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding:0 var(--wa-space-2xs, 0.25rem);height:44px;flex-shrink:0;gap:2px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.06)}.secure-header__scroll-btn{flex-shrink:0;transition:opacity 0.2s,     visibility 0.2s}.secure-header__scroll-btn--hidden{opacity:0;pointer-events:none}.secure-tabs-track{flex:1;overflow-x:auto;scrollbar-width:none}.secure-tabs-track::-webkit-scrollbar{display:none}.secure-tabs{display:flex;align-items:center;list-style:none;padding:0;margin:0;height:100%;gap:1px;white-space:nowrap}.secure-tabs__sep{display:flex;align-items:center;padding:0 var(--wa-space-xs, 0.375rem);flex-shrink:0}.secure-tabs__sep::after{content:'';display:block;width:1px;height:16px;background:var(--wa-color-neutral-border-quiet, #e5e7eb)}.secure-tabs__group-label{font-size:0.62rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--wa-color-text-quiet, #9ca3af);padding:0 var(--wa-space-xs, 0.375rem) 0 var(--wa-space-2xs, 0.25rem);white-space:nowrap;flex-shrink:0;user-select:none}.secure-tabs__item{display:flex;align-items:center;height:100%;flex-shrink:0}.secure-tabs__btn{position:relative;display:inline-flex;align-items:center;height:100%;padding:0 var(--wa-space-s, 0.625rem);border:none;background:transparent;color:var(--wa-color-text-quiet, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem);font-weight:500;font-family:inherit;border-bottom:2px solid transparent;cursor:pointer;white-space:nowrap;transition:color 0.15s,     border-color 0.15s,     background 0.15s;border-radius:var(--wa-border-radius-s, 4px) var(--wa-border-radius-s, 4px) 0 0;margin-bottom:-1px;}.secure-tabs__btn:hover{color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.secure-tabs__btn:focus-visible{outline:2px solid var(--wa-color-brand-border-normal, #3b82f6);outline-offset:-2px}.secure-tabs__btn.active{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}`;

const IrSecureTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
    token = new Token.Token();
    dates = {};
    tabsTrackRef;
    resizeObserver;
    async componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
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
        'fiscal-documents',
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
                { name: 'Meal Report', value: 'meal-report' },
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
                { name: 'Fiscal Documents', value: 'fiscal-documents' },
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
            const propertyService = new index$1.PropertyService();
            await propertyService.getExposedProperty({ aname: this.p, id: 42, language: 'en' });
            this.propertyid = calendarData.calendar_data?.property?.id;
            this.isLoading = false;
        }
    }
    async handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
        await this.resolvePropertyId();
    }
    logout() {
        sessionStorage.removeItem('backend_anchor');
        window.location.reload();
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("div", { class: "main__container" }, index.h("header", { class: "secure-header" }, index.h("div", { class: "secure-header__topbar" }, index.h("div", { class: "secure-header__brand" }, index.h("div", { class: "secure-header__brand-icon" }, index.h("img", { src: "https://x.igloorooms.com/app-assets/images/portrait/small/avatar-s-19.png", alt: "" })), index.h("span", { class: "secure-header__brand-name" }, "IglooRooms")), index.h("div", { class: "secure-header__controls" }, calendarData.calendar_data?.property && (index.h(index.Fragment, null, index.h("ir-booking-new-form", { ticket: this.ticket, propertyid: calendarData.calendar_data?.property?.id?.toString(), language: "en" }, index.h("ir-custom-button", { slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } }))), index.h("div", { class: "secure-header__sep", role: "separator" }))), index.h("form", { class: "secure-header__aname-form", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, index.h("ir-input", { class: "secure-header__aname-input", size: "s", pill: true, value: this.inputValue, placeholder: "Property", "aria-label": "Property AName", "onText-change": e => (this.inputValue = e.detail) }, index.h("wa-icon", { slot: "start", name: "building", "aria-hidden": "true" }), index.h("button", { slot: "end", class: "secure-header__aname-save", type: "submit", "aria-label": "Save property" }, index.h("wa-icon", { name: "arrow-right" })))), index.h("div", { class: "secure-header__sep", role: "separator" }), index.h("wa-tooltip", { for: "secure-logout-btn", placement: "bottom" }, "Sign out"), index.h("wa-button", { id: "secure-logout-btn", size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Sign out", onClick: () => this.logout() }, index.h("wa-icon", { name: "arrow-right-from-bracket" })))), index.h("nav", { class: "secure-header__tabbar", "aria-label": "Secure screens navigation" }, index.h("wa-button", { class: `secure-header__scroll-btn${this.canScrollLeft ? '' : ' secure-header__scroll-btn--hidden'}`, size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs left", tabIndex: -1, onClick: () => this.scrollTabs('left') }, index.h("wa-icon", { name: "chevron-left" })), index.h("div", { class: "secure-tabs-track", ref: el => {
                this.tabsTrackRef = el;
            } }, index.h("ul", { class: "secure-tabs", role: "tablist" }, this.routeGroups.map((group, gi) => [
            gi > 0 && index.h("li", { class: "secure-tabs__sep", role: "none", "aria-hidden": "true" }),
            ...group.routes.map(route => (index.h("li", { key: route.value, class: "secure-tabs__item", role: "none" }, index.h("button", { type: "button", role: "tab", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-selected": this.currentPage === route.value ? 'true' : 'false', onClick: () => this.navigateTo(route.value) }, route.name)))),
        ]))), index.h("wa-button", { class: `secure-header__scroll-btn${this.canScrollRight ? '' : ' secure-header__scroll-btn--hidden'}`, size: "s", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs right", tabIndex: -1, onClick: () => this.scrollTabs('right') }, index.h("wa-icon", { name: "chevron-right" })))), index.h("div", { class: "ir-page__container", style: { padding: '0' } }, this.renderPage())));
    }
    renderPage() {
        switch (this.currentPage) {
            case 'front':
                return (index.h("div", { style: { flex: '1 1 0%', display: 'block' } }, index.h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" })));
            case 'arrivals':
                return index.h("ir-arrivals", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'departures':
                return index.h("ir-departures", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'tasks':
                return index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'hk':
                return index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return index.h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return index.h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return index.h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'channel-sales':
                return index.h("ir-sales-by-channel", { mode: "property", language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
            case 'booking-listing':
                return index.h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'email-logs':
                return index.h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'users':
                return index.h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'agents':
                return index.h("ir-agents", { style: { gap: '1.5rem' }, p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'city-ledger':
                return index.h("ir-city-ledger", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channels':
                return index.h("ir-channel", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'tax-services':
                return index.h("ir-tax-service-categories", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'payment-options':
                return index.h("ir-payment-option", { p: this.p, propertyid: this.propertyid.toString(), language: "en", ticket: this.token.getToken() });
            case 'ghs':
                return index.h("ir-ghs-onboarding", { ticket: this.token.getToken() });
            case 'meal-report':
                return index.h("ir-meal-report", { propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'fiscal-documents':
                return index.h("ir-fiscal-documents", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            default:
                return null;
        }
    }
    static get watchers() { return {
        "p": [{
                "handlePChange": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrSecureTasks.style = irSecureTasksCss();

exports.ir_secure_tasks = IrSecureTasks;
