import { r as registerInstance, h, H as Host } from './index-2ef79026.js';
import { T as Token } from './Token-1cce2f6d.js';
import { F as checkUserAuthState, G as manageAnchorSession } from './utils-41400f8e.js';
import './axios-2aba0cfc.js';
import './moment-ab846cee.js';
import './index-b6ec889a.js';
import './calendar-data-707a10db.js';
import './index-5395b195.js';
import './locales.store-b3d58c68.js';

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block}.nav.sc-ir-secure-tasks{border-bottom:1px solid rgba(0, 0, 0, 0.06);background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.token = new Token();
        this.propertyid = undefined;
        this.p = undefined;
        this.bookingNumber = undefined;
        this.isAuthenticated = false;
        this.currentPage = undefined;
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
IrSecureTasks.style = IrSecureTasksStyle0;

export { IrSecureTasks as ir_secure_tasks };

//# sourceMappingURL=ir-secure-tasks.entry.js.map