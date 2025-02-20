'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const Token = require('./Token-049041c2.js');
const utils = require('./utils-e0a83322.js');
require('./axios-6e678d52.js');

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block}";
const IrSecureTasksStyle0 = irSecureTasksCss;

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
        return (index.h(index.Host, null, index.h("ul", { class: "nav nav-tabs" }, index.h("li", { class: "nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), index.h("li", { class: "nav-item" }, index.h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks"))), this.currentPage === 'tasks' ? (index.h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() })) : (index.h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() }))));
    }
};
IrSecureTasks.style = IrSecureTasksStyle0;

exports.ir_secure_tasks = IrSecureTasks;

//# sourceMappingURL=ir-secure-tasks.cjs.entry.js.map