'use strict';

var index = require('./index-Dt9a74kn.js');
var Token = require('./Token-BY5U68ai.js');
var utils = require('./utils-F4FSH4yM.js');
require('./axios-DG0YPAll.js');
require('./_commonjsHelpers-B83fTs8d.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CC4kt7DA.js');
require('./index-PIkoJJtF.js');
require('./locales.store-CJveOVzn.js');

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block}.nav.sc-ir-secure-tasks{border-bottom:1px solid rgba(0, 0, 0, 0.06);background:white;padding:0.25rem 0}.nav-tabs.sc-ir-secure-tasks{border-bottom:0}";

const IrSecureTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isAuthenticated = false;
        this.token = new Token.Token();
    }
    componentWillLoad() {
        const isAuthenticated = utils.checkUserAuthState();
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
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
        return (index.h(index.Host, null, index.h("div", { class: "px-1 nav  d-flex align-items-center justify-content-between" }, index.h("ul", { class: "nav nav-tabs" }, index.h("li", { class: " nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), index.h("li", { class: "nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks"))), index.h("button", { class: "btn btn-sm btn-primary", onClick: () => {
                sessionStorage.removeItem('backend_anchor');
                window.location.reload();
            } }, "Logout")), this.currentPage === 'tasks' ? (index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() })) : (index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() }))));
    }
};
IrSecureTasks.style = irSecureTasksCss;

exports.ir_secure_tasks = IrSecureTasks;
//# sourceMappingURL=ir-secure-tasks.entry.cjs.js.map

//# sourceMappingURL=ir-secure-tasks.cjs.entry.js.map