import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { H as checkUserAuthState, I as manageAnchorSession } from './utils.js';
import { d as defineCustomElement$1A } from './igl-application-info2.js';
import { d as defineCustomElement$1z } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1y } from './igl-book-property2.js';
import { d as defineCustomElement$1x } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1w } from './igl-book-property-header2.js';
import { d as defineCustomElement$1v } from './igl-booking-event2.js';
import { d as defineCustomElement$1u } from './igl-booking-event-hover2.js';
import { d as defineCustomElement$1t } from './igl-booking-form2.js';
import { d as defineCustomElement$1s } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1r } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$1q } from './igl-cal-body2.js';
import { d as defineCustomElement$1p } from './igl-cal-footer2.js';
import { d as defineCustomElement$1o } from './igl-cal-header2.js';
import { d as defineCustomElement$1n } from './igl-date-range2.js';
import { d as defineCustomElement$1m } from './igl-legends2.js';
import { d as defineCustomElement$1l } from './igl-property-booked-by2.js';
import { d as defineCustomElement$1k } from './igl-rate-plan2.js';
import { d as defineCustomElement$1j } from './igl-room-type2.js';
import { d as defineCustomElement$1i } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$1h } from './igl-tba-category-view2.js';
import { d as defineCustomElement$1g } from './igl-to-be-assigned2.js';
import { d as defineCustomElement$1f } from './igloo-calendar2.js';
import { d as defineCustomElement$1e } from './ir-autocomplete2.js';
import { d as defineCustomElement$1d } from './ir-booking-details2.js';
import { d as defineCustomElement$1c } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1b } from './ir-booking-header2.js';
import { d as defineCustomElement$1a } from './ir-button2.js';
import { d as defineCustomElement$19 } from './ir-checkbox2.js';
import { d as defineCustomElement$18 } from './ir-combobox2.js';
import { d as defineCustomElement$17 } from './ir-country-picker2.js';
import { d as defineCustomElement$16 } from './ir-date-picker2.js';
import { d as defineCustomElement$15 } from './ir-date-range2.js';
import { d as defineCustomElement$14 } from './ir-date-view2.js';
import { d as defineCustomElement$13 } from './ir-delete-modal2.js';
import { d as defineCustomElement$12 } from './ir-dialog2.js';
import { d as defineCustomElement$11 } from './ir-events-log2.js';
import { d as defineCustomElement$10 } from './ir-extra-service2.js';
import { d as defineCustomElement$$ } from './ir-extra-service-config2.js';
import { d as defineCustomElement$_ } from './ir-extra-services2.js';
import { d as defineCustomElement$Z } from './ir-guest-info2.js';
import { d as defineCustomElement$Y } from './ir-hk-archive2.js';
import { d as defineCustomElement$X } from './ir-hk-tasks2.js';
import { d as defineCustomElement$W } from './ir-hk-team2.js';
import { d as defineCustomElement$V } from './ir-hk-unassigned-units2.js';
import { d as defineCustomElement$U } from './ir-hk-user2.js';
import { d as defineCustomElement$T } from './ir-housekeeping2.js';
import { d as defineCustomElement$S } from './ir-icon2.js';
import { d as defineCustomElement$R } from './ir-icons2.js';
import { d as defineCustomElement$Q } from './ir-input-text2.js';
import { d as defineCustomElement$P } from './ir-interactive-title2.js';
import { d as defineCustomElement$O } from './ir-interceptor2.js';
import { d as defineCustomElement$N } from './ir-label2.js';
import { d as defineCustomElement$M } from './ir-loading-screen2.js';
import { d as defineCustomElement$L } from './ir-login2.js';
import { d as defineCustomElement$K } from './ir-modal2.js';
import { d as defineCustomElement$J } from './ir-monthly-bookings-report2.js';
import { d as defineCustomElement$I } from './ir-monthly-bookings-report-filter2.js';
import { d as defineCustomElement$H } from './ir-monthly-bookings-report-table2.js';
import { d as defineCustomElement$G } from './ir-otp2.js';
import { d as defineCustomElement$F } from './ir-otp-modal2.js';
import { d as defineCustomElement$E } from './ir-pagination2.js';
import { d as defineCustomElement$D } from './ir-password-validator2.js';
import { d as defineCustomElement$C } from './ir-payment-actions2.js';
import { d as defineCustomElement$B } from './ir-payment-details2.js';
import { d as defineCustomElement$A } from './ir-phone-input2.js';
import { d as defineCustomElement$z } from './ir-pickup2.js';
import { d as defineCustomElement$y } from './ir-pickup-view2.js';
import { d as defineCustomElement$x } from './ir-pms-logs2.js';
import { d as defineCustomElement$w } from './ir-popover2.js';
import { d as defineCustomElement$v } from './ir-price-input2.js';
import { d as defineCustomElement$u } from './ir-progress-indicator2.js';
import { d as defineCustomElement$t } from './ir-range-picker2.js';
import { d as defineCustomElement$s } from './ir-reservation-information2.js';
import { d as defineCustomElement$r } from './ir-reset-password2.js';
import { d as defineCustomElement$q } from './ir-room2.js';
import { d as defineCustomElement$p } from './ir-room-guests2.js';
import { d as defineCustomElement$o } from './ir-room-nights2.js';
import { d as defineCustomElement$n } from './ir-sales-by-country2.js';
import { d as defineCustomElement$m } from './ir-sales-filters2.js';
import { d as defineCustomElement$l } from './ir-sales-table2.js';
import { d as defineCustomElement$k } from './ir-select2.js';
import { d as defineCustomElement$j } from './ir-sidebar2.js';
import { d as defineCustomElement$i } from './ir-spinner2.js';
import { d as defineCustomElement$h } from './ir-switch2.js';
import { d as defineCustomElement$g } from './ir-tasks-card2.js';
import { d as defineCustomElement$f } from './ir-tasks-filters2.js';
import { d as defineCustomElement$e } from './ir-tasks-header2.js';
import { d as defineCustomElement$d } from './ir-tasks-table2.js';
import { d as defineCustomElement$c } from './ir-tasks-table-pagination2.js';
import { d as defineCustomElement$b } from './ir-textarea2.js';
import { d as defineCustomElement$a } from './ir-title2.js';
import { d as defineCustomElement$9 } from './ir-toast2.js';
import { d as defineCustomElement$8 } from './ir-tooltip2.js';
import { d as defineCustomElement$7 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$6 } from './ir-user-management2.js';
import { d as defineCustomElement$5 } from './ir-user-management-table2.js';
import { d as defineCustomElement$4 } from './ir-weekday-selector2.js';
import { d as defineCustomElement$3 } from './ota-label2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irSecureTasksCss = ":host{display:block;height:100%}.nav{background:white;padding:0.25rem 0}.nav-tabs{border-bottom:0}.nav-link{color:inherit}.active{color:var(--blue)}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrSecureTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
            default:
                return null;
        }
    }
    static get watchers() { return {
        "p": ["handlePChange"],
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrSecureTasksStyle0; }
}, [0, "ir-secure-tasks", {
        "propertyid": [2],
        "p": [1],
        "bookingNumber": [1, "booking-number"],
        "ticket": [1],
        "isAuthenticated": [32],
        "currentPage": [32],
        "inputValue": [32]
    }, undefined, {
        "p": ["handlePChange"],
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-secure-tasks", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-event", "igl-booking-event-hover", "igl-booking-form", "igl-booking-overview-page", "igl-bulk-stop-sale", "igl-cal-body", "igl-cal-footer", "igl-cal-header", "igl-date-range", "igl-legends", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "igl-tba-booking-view", "igl-tba-category-view", "igl-to-be-assigned", "igloo-calendar", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-booking-header", "ir-button", "ir-checkbox", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-delete-modal", "ir-dialog", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-hk-archive", "ir-hk-tasks", "ir-hk-team", "ir-hk-unassigned-units", "ir-hk-user", "ir-housekeeping", "ir-icon", "ir-icons", "ir-input-text", "ir-interactive-title", "ir-interceptor", "ir-label", "ir-loading-screen", "ir-login", "ir-modal", "ir-monthly-bookings-report", "ir-monthly-bookings-report-filter", "ir-monthly-bookings-report-table", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-password-validator", "ir-payment-actions", "ir-payment-details", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-progress-indicator", "ir-range-picker", "ir-reservation-information", "ir-reset-password", "ir-room", "ir-room-guests", "ir-room-nights", "ir-sales-by-country", "ir-sales-filters", "ir-sales-table", "ir-select", "ir-sidebar", "ir-spinner", "ir-switch", "ir-tasks-card", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-tasks-table-pagination", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ir-user-form-panel", "ir-user-management", "ir-user-management-table", "ir-weekday-selector", "ota-label", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-secure-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSecureTasks$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "igl-legends":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "igloo-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-delete-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-hk-team":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-housekeeping":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-monthly-bookings-report":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-monthly-bookings-report-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-room-nights":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-sales-by-country":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-user-form-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-user-management":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ota-label":
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