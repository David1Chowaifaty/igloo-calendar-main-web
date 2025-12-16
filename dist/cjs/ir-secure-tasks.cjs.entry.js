'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const utils = require('./utils-b245f715.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');

const irSecureTasksCss = ".nav{background:white;padding:0.25rem 0}.nav-tabs{border-bottom:0}.nav-link{color:inherit}.active{color:var(--blue)}.ir-page__container{background:#f4f5fa;height:100%;gap:0 !important}.secure-header{background:#fff;border-bottom:1px solid rgba(0, 0, 0, 0.08);padding:0.75rem 1rem;position:sticky;top:0;z-index:10}.secure-header__top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}.secure-header__aname{display:flex;flex-direction:column;gap:0.25rem;margin:0}.secure-header__label{font-size:0.85rem;font-weight:600;color:#5a5a5a;margin:0}.secure-header__aname-input{display:flex;align-items:center;gap:0.5rem}.secure-header__aname-input .form-control{max-width:7rem;padding:0.25rem 0.5rem}.secure-header__tabs{margin-top:0.75rem;padding-top:0.5rem;border-top:1px solid rgba(0, 0, 0, 0.05);overflow-x:auto}.secure-tabs{display:flex;flex-wrap:wrap;gap:0.5rem;list-style:none;padding:0;margin:0}.secure-tabs__item{flex:0 1 auto}.secure-tabs__btn{border:1px solid transparent;border-radius:999px;padding:0.35rem 0.85rem;background:transparent;color:inherit;font-size:0.9rem;transition:all 0.2s ease}.secure-tabs__btn:hover{border-color:rgba(0, 0, 0, 0.1)}.secure-tabs__btn.active{border-color:rgba(0, 0, 0, 0.15);color:var(--blue)}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyid;
    p;
    bookingNumber;
    ticket;
    isAuthenticated = false;
    currentPage = 'front';
    inputValue;
    token = new Token.Token();
    dates = {};
    componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
        this.generateDates();
        if (this.ticket) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
            this.propertyid = this.propertyid;
        }
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
        this.inputValue = this.p;
    }
    handlePChange() {
        this.inputValue = this.p;
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
            this.propertyid = this.propertyid;
        }
    }
    generateDates() {
        var today = new Date();
        today.setDate(today.getDate() - 1);
        var _FROM_DATE = today.toISOString().substring(0, 10);
        today.setDate(today.getDate() + 60);
        var _TO_DATE = today.toISOString().substring(0, 10);
        this.dates = {
            from_date: _FROM_DATE,
            to_date: _TO_DATE,
        };
    }
    routes = [
        { name: 'Housekeepers', value: 'hk' },
        { name: 'Tasks', value: 'tasks' },
        { name: 'Front', value: 'front' },
        { name: 'Users', value: 'users' },
        { name: 'Sales By Country', value: 'country-sales' },
        { name: 'Daily Occupancy', value: 'daily-occupancy' },
        { name: 'Daily Revenue', value: 'daily-revenue' },
        { name: 'Email logs', value: 'email-logs' },
        { name: 'Booking Listing', value: 'booking-listing' },
        { name: 'Sales by Channel', value: 'channel-sales' },
        { name: 'Arrivals', value: 'arrivals' },
        { name: 'Departures', value: 'departures' },
    ];
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h("div", { class: 'ir-page__container p-0' }, index.h("section", { class: "secure-header" }, index.h("div", { class: "secure-header__top" }, index.h("form", { class: "secure-header__aname", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, index.h("label", { class: "secure-header__label", htmlFor: "aname-input" }, "AName"), index.h("div", { class: "secure-header__aname-input" }, index.h("ir-input", { id: "aname-input", type: "text", value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), placeholder: "AName", "aria-label": "AName" }), index.h("ir-custom-button", { variant: "brand", type: "submit", id: "button-save" }, "Save"))), index.h("ir-custom-button", { variant: "danger", onClick: () => {
                this.logout();
            } }, "Logout")), index.h("nav", { class: "secure-header__tabs", "aria-label": "Secure screens navigation" }, index.h("ul", { class: "secure-tabs" }, this.routes.map(route => (index.h("li", { key: route.name, class: "secure-tabs__item" }, index.h("button", { type: "button", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-current": this.currentPage === route.value ? 'page' : undefined, onClick: () => {
                this.currentPage = route.value;
            } }, route.name))))))), this.renderPage()));
    }
    logout() {
        sessionStorage.removeItem('backend_anchor');
        window.location.reload();
    }
    renderPage() {
        switch (this.currentPage) {
            case 'tasks':
                return index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'front':
                return (index.h("div", { style: { flex: '1 1 0%', display: 'block', background: 'red' } }, index.h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" })));
            case 'hk':
                return index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'users':
                return index.h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return index.h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return index.h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return index.h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'email-logs':
                return index.h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'booking-listing':
                return index.h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channel-sales':
                return index.h("ir-sales-by-channel", { language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
            case 'arrivals':
                return index.h("ir-arrivals", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'departures':
                return index.h("ir-departures", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
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

exports.ir_secure_tasks = IrSecureTasks;

//# sourceMappingURL=ir-secure-tasks.cjs.entry.js.map