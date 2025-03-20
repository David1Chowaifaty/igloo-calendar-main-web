import { r as registerInstance, h, H as Host } from './index-jhiFt_tX.js';
import { T as Token } from './Token-BTEbRZ0j.js';
import { c as checkUserAuthState, m as manageAnchorSession } from './utils-s2ti0vPD.js';
import './axios-8ipPhlJK.js';
import './_commonjsHelpers-E-ZsRS8r.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-D2MMPhx6.js';
import './index-C7eXIDl2.js';
import './locales.store-BsXBgatZ.js';

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block}.nav.sc-ir-secure-tasks{border-bottom:1px solid rgba(0, 0, 0, 0.06);background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}";

const IrSecureTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token();
    }
    componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
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
        return (h(Host, null, h("div", { class: "px-1 nav  d-flex align-items-center justify-content-between" }, h("ul", { class: "nav nav-tabs" }, h("li", { class: " nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks"))), h("button", { class: "btn btn-sm btn-primary", onClick: () => {
                sessionStorage.removeItem('backend_anchor');
                window.location.reload();
            } }, "Logout")), this.currentPage === 'tasks' ? (h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() })) : (h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() }))));
    }
};
IrSecureTasks.style = irSecureTasksCss;

export { IrSecureTasks as ir_secure_tasks };
//# sourceMappingURL=ir-secure-tasks.entry.js.map

//# sourceMappingURL=ir-secure-tasks.entry.js.map