'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-049041c2.js');
const utils = require('./utils-9553ae1d.js');
require('./axios-6e678d52.js');
require('./index-db8b30d9.js');
require('./calendar-data-719ef4f7.js');
require('./index-467172e1.js');
require('./locales.store-0cac7e5d.js');

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block;height:100%}.nav.sc-ir-secure-tasks{border-bottom:1px solid rgba(0, 0, 0, 0.06);background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token.Token();
        this.dates = {};
    }
    componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
        this.generateDates();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
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
        return (index.h(index.Host, null, index.h("div", { class: "px-1 nav  d-flex align-items-center justify-content-between" }, this.p && index.h("h4", null, "AName: ", this.p), index.h("ul", { class: "nav nav-tabs" }, index.h("li", { class: " nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), index.h("li", { class: "nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks")), index.h("li", { class: "nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'front' }, href: "#", onClick: () => {
                this.currentPage = 'front';
            } }, "Front"))), index.h("button", { class: "btn btn-sm btn-primary", onClick: () => {
                sessionStorage.removeItem('backend_anchor');
                window.location.reload();
            } }, "Logout")), this.renderPage()));
    }
    renderPage() {
        switch (this.currentPage) {
            case 'tasks':
                return index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'front':
                return (index.h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" }));
            case 'hk':
                return index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            default:
                return null;
        }
    }
};
IrSecureTasks.style = IrSecureTasksStyle0;

exports.ir_secure_tasks = IrSecureTasks;

//# sourceMappingURL=ir-secure-tasks.cjs.entry.js.map