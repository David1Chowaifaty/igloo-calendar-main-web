import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { s as checkUserAuthState, t as manageAnchorSession } from './utils.js';
import { d as defineCustomElement$x } from './igl-date-range2.js';
import { d as defineCustomElement$w } from './ir-button2.js';
import { d as defineCustomElement$v } from './ir-checkbox2.js';
import { d as defineCustomElement$u } from './ir-combobox2.js';
import { d as defineCustomElement$t } from './ir-date-range2.js';
import { d as defineCustomElement$s } from './ir-delete-modal2.js';
import { d as defineCustomElement$r } from './ir-hk-archive2.js';
import { d as defineCustomElement$q } from './ir-hk-tasks2.js';
import { d as defineCustomElement$p } from './ir-hk-team2.js';
import { d as defineCustomElement$o } from './ir-hk-unassigned-units2.js';
import { d as defineCustomElement$n } from './ir-hk-user2.js';
import { d as defineCustomElement$m } from './ir-housekeeping2.js';
import { d as defineCustomElement$l } from './ir-icon2.js';
import { d as defineCustomElement$k } from './ir-icons2.js';
import { d as defineCustomElement$j } from './ir-input-text2.js';
import { d as defineCustomElement$i } from './ir-interceptor2.js';
import { d as defineCustomElement$h } from './ir-loading-screen2.js';
import { d as defineCustomElement$g } from './ir-login2.js';
import { d as defineCustomElement$f } from './ir-modal2.js';
import { d as defineCustomElement$e } from './ir-password-validator2.js';
import { d as defineCustomElement$d } from './ir-phone-input2.js';
import { d as defineCustomElement$c } from './ir-popover2.js';
import { d as defineCustomElement$b } from './ir-select2.js';
import { d as defineCustomElement$a } from './ir-sidebar2.js';
import { d as defineCustomElement$9 } from './ir-switch2.js';
import { d as defineCustomElement$8 } from './ir-tasks-filters2.js';
import { d as defineCustomElement$7 } from './ir-tasks-header2.js';
import { d as defineCustomElement$6 } from './ir-tasks-table2.js';
import { d as defineCustomElement$5 } from './ir-textarea2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irSecureTasksCss = ".sc-ir-secure-tasks-h{display:block}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrSecureTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, null, h("ul", { class: "nav nav-tabs" }, h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'hk' }, href: "#", onClick: () => {
                this.currentPage = 'hk';
            } }, "Housekeepers")), h("li", { class: "nav-item" }, h("a", { class: { 'nav-link': true, 'active': this.currentPage === 'tasks' }, href: "#", onClick: () => {
                this.currentPage = 'tasks';
            } }, "Tasks"))), this.currentPage === 'tasks' ? (h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() })) : (h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() }))));
    }
    static get style() { return IrSecureTasksStyle0; }
}, [2, "ir-secure-tasks", {
        "propertyid": [2],
        "p": [1],
        "bookingNumber": [1, "booking-number"],
        "isAuthenticated": [32],
        "currentPage": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-secure-tasks", "igl-date-range", "ir-button", "ir-checkbox", "ir-combobox", "ir-date-range", "ir-delete-modal", "ir-hk-archive", "ir-hk-tasks", "ir-hk-team", "ir-hk-unassigned-units", "ir-hk-user", "ir-housekeeping", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-login", "ir-modal", "ir-password-validator", "ir-phone-input", "ir-popover", "ir-select", "ir-sidebar", "ir-switch", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-textarea", "ir-title", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-secure-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSecureTasks$1);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-delete-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-hk-team":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-housekeeping":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrSecureTasks = IrSecureTasks$1;
const defineCustomElement = defineCustomElement$1;

export { IrSecureTasks, defineCustomElement };

//# sourceMappingURL=ir-secure-tasks.js.map