import { r as registerInstance, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-acf5fbad.js';
import { m as checkUserAuthState, n as manageAnchorSession } from './utils-42064951.js';
import './axios-aa1335b8.js';
import './index-502f9842.js';
import './calendar-data-5d531f99.js';
import './index-c1c77241.js';
import './locales.store-53ec3957.js';

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block;height:100%}.nav.sc-ir-secure-tasks{border-bottom:1px solid rgba(0, 0, 0, 0.06);background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token();
        this.dates = {};
    }
    componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
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
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h(Host, null, h("div", { class: "px-1 nav  d-flex align-items-center justify-content-between" }, this.p && h("h4", null, "AName: ", this.p), h("ul", { class: "nav nav-tabs" }, h("li", { class: " nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'front' }, href: "#", onClick: () => {
                this.currentPage = 'front';
            } }, "Front"))), h("button", { class: "btn btn-sm btn-primary", onClick: () => {
                sessionStorage.removeItem('backend_anchor');
                window.location.reload();
            } }, "Logout")), this.renderPage()));
    }
    renderPage() {
        switch (this.currentPage) {
            case 'tasks':
                return h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'front':
                return (h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" }));
            case 'hk':
                return h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            default:
                return null;
        }
    }
};
IrSecureTasks.style = IrSecureTasksStyle0;

export { IrSecureTasks as ir_secure_tasks };

//# sourceMappingURL=ir-secure-tasks.entry.js.map