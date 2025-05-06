import { r as registerInstance, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-acf5fbad.js';
import { b as checkUserAuthState, m as manageAnchorSession } from './utils-f1b7543f.js';
import './axios-aa1335b8.js';
import './moment-ab846cee.js';
import './calendar-data-26906e0c.js';
import './index-c1c77241.js';
import './locales.store-53ec3957.js';

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block;height:100%}.nav.sc-ir-secure-tasks{background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}.nav-link.sc-ir-secure-tasks{color:inherit}.active.sc-ir-secure-tasks{color:var(--blue)}";
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
        this.inputValue = this.p;
    }
    handlePChange() {
        this.inputValue = this.p;
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
            } }, h("input", { type: "text", value: this.inputValue, onInput: e => (this.inputValue = e.target.value), style: { maxWidth: '60px' }, class: "form-control", placeholder: "AName", "aria-label": "AName", "aria-describedby": "button-save" }), h("div", { class: "input-group-append" }, h("button", { class: "btn btn-sm btn-outline-secondary", type: "submit", id: "button-save" }, "save")))), h("ul", { class: "nav  m-0 p-0" }, h("li", { class: " nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'front' }, href: "#", onClick: () => {
                this.currentPage = 'front';
            } }, "Front")))), h("button", { class: "btn btn-sm btn-primary", onClick: () => {
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
            default:
                return null;
        }
    }
    static get watchers() { return {
        "p": ["handlePChange"]
    }; }
};
IrSecureTasks.style = IrSecureTasksStyle0;

export { IrSecureTasks as ir_secure_tasks };

//# sourceMappingURL=ir-secure-tasks.entry.js.map