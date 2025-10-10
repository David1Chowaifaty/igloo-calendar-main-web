import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { T as Token } from './Token-6c389e24.js';
import { c as checkUserAuthState, m as manageAnchorSession } from './utils-26ca6eca.js';
import './axios-aa1335b8.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './locales.store-629477c2.js';

const irSecureTasksCss = ":host{display:block;height:100%}.nav{background:white;padding:0.25rem 0}.nav-tabs{border-bottom:0}.nav-link{color:inherit}.active{color:var(--blue)}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token();
        this.dates = {};
        this.routes = [
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
        ];
    }
    componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
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
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("div", { class: "px-1 nav flex-column flex-sm-row d-flex align-items-center justify-content-between" }, h("div", { class: "d-flex  align-items-center" }, h("div", { class: "d-flex align-items-center p-0 m-0", style: { gap: '0.5rem' } }, h("h4", { class: "m-0 p-0" }, "AName: "), h("form", { class: "input-group", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, h("input", { type: "text", value: this.inputValue, onInput: e => (this.inputValue = e.target.value), style: { maxWidth: '60px' }, class: "form-control", placeholder: "AName", "aria-label": "AName", "aria-describedby": "button-save" }), h("div", { class: "input-group-append" }, h("button", { class: "btn btn-sm btn-outline-secondary", type: "submit", id: "button-save" }, "save")))), h("ul", { class: "nav  m-0 p-0" }, this.routes.map(route => (h("li", { key: route.name, class: " nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === route.value }, href: "#", onClick: () => {
                this.currentPage = route.value;
            } }, route.name)))))), h("button", { class: "btn btn-sm btn-primary", onClick: () => {
                this.logout();
            } }, "Logout")), this.renderPage()));
    }
    logout() {
        sessionStorage.removeItem('backend_anchor');
        window.location.reload();
    }
    renderPage() {
        switch (this.currentPage) {
            case 'tasks':
                return h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'front':
                return (h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" }));
            case 'hk':
                return h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'users':
                return h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'email-logs':
                return h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'booking-listing':
                return h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channel-sales':
                return h("ir-sales-by-channel", { language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
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