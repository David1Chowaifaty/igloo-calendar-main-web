'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-3d0cc874.js');
const utils = require('./utils-12ac7153.js');
require('./axios-6e678d52.js');
require('./index-db8b30d9.js');
require('./calendar-data-b2787812.js');
require('./index-467172e1.js');
require('./locales.store-0cac7e5d.js');

const irSecureTasksCss = ":host{display:block;height:100%}.nav{background:white;padding:0.25rem 0}.nav-tabs{border-bottom:0}.nav-link{color:inherit}.active{color:var(--blue)}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token.Token();
        this.dates = {};
        this.routes = [
            { name: 'Housekeepers', value: 'hk' },
            { name: 'Tasks', value: 'tasks' },
            { name: 'Front', value: 'front' },
            { name: 'Users', value: 'users' },
            { name: 'Sales By Country', value: 'country-sales' },
        ];
    }
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
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        utils.manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (index.h(index.Host, null, index.h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (index.h(index.Host, null, index.h("div", { class: "px-1 nav flex-column flex-sm-row d-flex align-items-center justify-content-between" }, index.h("div", { class: "d-flex  align-items-center" }, index.h("div", { class: "d-flex align-items-center p-0 m-0", style: { gap: '0.5rem' } }, index.h("h4", { class: "m-0 p-0" }, "AName: "), index.h("form", { class: "input-group", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, index.h("input", { type: "text", value: this.inputValue, onInput: e => (this.inputValue = e.target.value), style: { maxWidth: '60px' }, class: "form-control", placeholder: "AName", "aria-label": "AName", "aria-describedby": "button-save" }), index.h("div", { class: "input-group-append" }, index.h("button", { class: "btn btn-sm btn-outline-secondary", type: "submit", id: "button-save" }, "save")))), index.h("ul", { class: "nav  m-0 p-0" }, this.routes.map(route => (index.h("li", { key: route.name, class: " nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === route.value }, href: "#", onClick: () => {
                this.currentPage = route.value;
            } }, route.name)))))), index.h("button", { class: "btn btn-sm btn-primary", onClick: () => {
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
                return index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'front':
                return (index.h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" }));
            case 'hk':
                return index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'users':
                return index.h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return index.h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
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