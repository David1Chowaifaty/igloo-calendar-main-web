import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { P as checkUserAuthState, Q as manageAnchorSession } from './booking.js';
import { d as defineCustomElement$2T } from './igl-application-info2.js';
import { d as defineCustomElement$2S } from './igl-block-dates-view2.js';
import { d as defineCustomElement$2R } from './igl-blocked-date-drawer2.js';
import { d as defineCustomElement$2Q } from './igl-book-property2.js';
import { d as defineCustomElement$2P } from './igl-book-property-container2.js';
import { d as defineCustomElement$2O } from './igl-book-property-footer2.js';
import { d as defineCustomElement$2N } from './igl-book-property-header2.js';
import { d as defineCustomElement$2M } from './igl-booking-event2.js';
import { d as defineCustomElement$2L } from './igl-booking-event-hover2.js';
import { d as defineCustomElement$2K } from './igl-booking-form2.js';
import { d as defineCustomElement$2J } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$2I } from './igl-bulk-block2.js';
import { d as defineCustomElement$2H } from './igl-bulk-operations2.js';
import { d as defineCustomElement$2G } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$2F } from './igl-cal-body2.js';
import { d as defineCustomElement$2E } from './igl-cal-footer2.js';
import { d as defineCustomElement$2D } from './igl-cal-header2.js';
import { d as defineCustomElement$2C } from './igl-date-range2.js';
import { d as defineCustomElement$2B } from './igl-legends2.js';
import { d as defineCustomElement$2A } from './igl-property-booked-by2.js';
import { d as defineCustomElement$2z } from './igl-rate-plan2.js';
import { d as defineCustomElement$2y } from './igl-reallocation-dialog2.js';
import { d as defineCustomElement$2x } from './igl-room-type2.js';
import { d as defineCustomElement$2w } from './igl-split-booking2.js';
import { d as defineCustomElement$2v } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$2u } from './igl-tba-category-view2.js';
import { d as defineCustomElement$2t } from './igl-to-be-assigned2.js';
import { d as defineCustomElement$2s } from './igloo-calendar2.js';
import { d as defineCustomElement$2r } from './ir-accordion2.js';
import { d as defineCustomElement$2q } from './ir-actions-cell2.js';
import { d as defineCustomElement$2p } from './ir-applicable-policies2.js';
import { d as defineCustomElement$2o } from './ir-arrivals2.js';
import { d as defineCustomElement$2n } from './ir-arrivals-table2.js';
import { d as defineCustomElement$2m } from './ir-balance-cell2.js';
import { d as defineCustomElement$2l } from './ir-billing2.js';
import { d as defineCustomElement$2k } from './ir-billing-drawer2.js';
import { d as defineCustomElement$2j } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$2i } from './ir-booked-on-cell2.js';
import { d as defineCustomElement$2h } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$2g } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$2f } from './ir-booking-company-form2.js';
import { d as defineCustomElement$2e } from './ir-booking-details2.js';
import { d as defineCustomElement$2d } from './ir-booking-details-drawer2.js';
import { d as defineCustomElement$2c } from './ir-booking-editor2.js';
import { d as defineCustomElement$2b } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$2a } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$29 } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$28 } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$27 } from './ir-booking-email-logs2.js';
import { d as defineCustomElement$26 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$25 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$24 } from './ir-booking-header2.js';
import { d as defineCustomElement$23 } from './ir-booking-listing2.js';
import { d as defineCustomElement$22 } from './ir-booking-listing-mobile-card2.js';
import { d as defineCustomElement$21 } from './ir-booking-listing-table2.js';
import { d as defineCustomElement$20 } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$1$ } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$1_ } from './ir-button2.js';
import { d as defineCustomElement$1Z } from './ir-checkbox2.js';
import { d as defineCustomElement$1Y } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$1X } from './ir-combobox2.js';
import { d as defineCustomElement$1W } from './ir-country-picker2.js';
import { d as defineCustomElement$1V } from './ir-custom-button2.js';
import { d as defineCustomElement$1U } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$1T } from './ir-daily-revenue2.js';
import { d as defineCustomElement$1S } from './ir-daily-revenue-filters2.js';
import { d as defineCustomElement$1R } from './ir-date-picker2.js';
import { d as defineCustomElement$1Q } from './ir-date-view2.js';
import { d as defineCustomElement$1P } from './ir-dates-cell2.js';
import { d as defineCustomElement$1O } from './ir-delete-modal2.js';
import { d as defineCustomElement$1N } from './ir-departures2.js';
import { d as defineCustomElement$1M } from './ir-departures-table2.js';
import { d as defineCustomElement$1L } from './ir-dialog2.js';
import { d as defineCustomElement$1K } from './ir-drawer2.js';
import { d as defineCustomElement$1J } from './ir-dropdown2.js';
import { d as defineCustomElement$1I } from './ir-dropdown-item2.js';
import { d as defineCustomElement$1H } from './ir-empty-state2.js';
import { d as defineCustomElement$1G } from './ir-events-log2.js';
import { d as defineCustomElement$1F } from './ir-extra-service2.js';
import { d as defineCustomElement$1E } from './ir-extra-service-config2.js';
import { d as defineCustomElement$1D } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$1C } from './ir-extra-services2.js';
import { d as defineCustomElement$1B } from './ir-filters-panel2.js';
import { d as defineCustomElement$1A } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$1z } from './ir-guest-info-form2.js';
import { d as defineCustomElement$1y } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$1x } from './ir-hk-archive2.js';
import { d as defineCustomElement$1w } from './ir-hk-tasks2.js';
import { d as defineCustomElement$1v } from './ir-hk-team2.js';
import { d as defineCustomElement$1u } from './ir-hk-unassigned-units2.js';
import { d as defineCustomElement$1t } from './ir-hk-user2.js';
import { d as defineCustomElement$1s } from './ir-housekeeping2.js';
import { d as defineCustomElement$1r } from './ir-icon2.js';
import { d as defineCustomElement$1q } from './ir-icons2.js';
import { d as defineCustomElement$1p } from './ir-input2.js';
import { d as defineCustomElement$1o } from './ir-input-text2.js';
import { d as defineCustomElement$1n } from './ir-interactive-title2.js';
import { d as defineCustomElement$1m } from './ir-interceptor2.js';
import { d as defineCustomElement$1l } from './ir-invoice2.js';
import { d as defineCustomElement$1k } from './ir-invoice-form2.js';
import { d as defineCustomElement$1j } from './ir-label2.js';
import { d as defineCustomElement$1i } from './ir-listing-header2.js';
import { d as defineCustomElement$1h } from './ir-loading-screen2.js';
import { d as defineCustomElement$1g } from './ir-login2.js';
import { d as defineCustomElement$1f } from './ir-m-combobox2.js';
import { d as defineCustomElement$1e } from './ir-mobile-input2.js';
import { d as defineCustomElement$1d } from './ir-modal2.js';
import { d as defineCustomElement$1c } from './ir-monthly-bookings-report2.js';
import { d as defineCustomElement$1b } from './ir-monthly-bookings-report-filter2.js';
import { d as defineCustomElement$1a } from './ir-monthly-bookings-report-table2.js';
import { d as defineCustomElement$19 } from './ir-new-badge2.js';
import { d as defineCustomElement$18 } from './ir-otp2.js';
import { d as defineCustomElement$17 } from './ir-otp-modal2.js';
import { d as defineCustomElement$16 } from './ir-pagination2.js';
import { d as defineCustomElement$15 } from './ir-password-validator2.js';
import { d as defineCustomElement$14 } from './ir-payment-details2.js';
import { d as defineCustomElement$13 } from './ir-payment-folio2.js';
import { d as defineCustomElement$12 } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$11 } from './ir-payment-item2.js';
import { d as defineCustomElement$10 } from './ir-payment-summary2.js';
import { d as defineCustomElement$$ } from './ir-payments-folio2.js';
import { d as defineCustomElement$_ } from './ir-phone-input2.js';
import { d as defineCustomElement$Z } from './ir-picker2.js';
import { d as defineCustomElement$Y } from './ir-picker-item2.js';
import { d as defineCustomElement$X } from './ir-pickup2.js';
import { d as defineCustomElement$W } from './ir-pickup-form2.js';
import { d as defineCustomElement$V } from './ir-pickup-view2.js';
import { d as defineCustomElement$U } from './ir-pms-logs2.js';
import { d as defineCustomElement$T } from './ir-popover2.js';
import { d as defineCustomElement$S } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$R } from './ir-price-input2.js';
import { d as defineCustomElement$Q } from './ir-print-room2.js';
import { d as defineCustomElement$P } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$O } from './ir-printing-label2.js';
import { d as defineCustomElement$N } from './ir-printing-pickup2.js';
import { d as defineCustomElement$M } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$L } from './ir-progress-indicator2.js';
import { d as defineCustomElement$K } from './ir-radio2.js';
import { d as defineCustomElement$J } from './ir-range-picker2.js';
import { d as defineCustomElement$I } from './ir-reservation-information2.js';
import { d as defineCustomElement$H } from './ir-reset-password2.js';
import { d as defineCustomElement$G } from './ir-revenue-row2.js';
import { d as defineCustomElement$F } from './ir-revenue-row-details2.js';
import { d as defineCustomElement$E } from './ir-revenue-summary2.js';
import { d as defineCustomElement$D } from './ir-revenue-table2.js';
import { d as defineCustomElement$C } from './ir-room2.js';
import { d as defineCustomElement$B } from './ir-room-guests2.js';
import { d as defineCustomElement$A } from './ir-room-guests-form2.js';
import { d as defineCustomElement$z } from './ir-room-nights2.js';
import { d as defineCustomElement$y } from './ir-sales-by-channel2.js';
import { d as defineCustomElement$x } from './ir-sales-by-channel-filters2.js';
import { d as defineCustomElement$w } from './ir-sales-by-channel-table2.js';
import { d as defineCustomElement$v } from './ir-sales-by-country2.js';
import { d as defineCustomElement$u } from './ir-sales-by-country-summary2.js';
import { d as defineCustomElement$t } from './ir-sales-filters2.js';
import { d as defineCustomElement$s } from './ir-sales-table2.js';
import { d as defineCustomElement$r } from './ir-select2.js';
import { d as defineCustomElement$q } from './ir-sidebar2.js';
import { d as defineCustomElement$p } from './ir-spinner2.js';
import { d as defineCustomElement$o } from './ir-stats-card2.js';
import { d as defineCustomElement$n } from './ir-status-activity-cell2.js';
import { d as defineCustomElement$m } from './ir-success-loader2.js';
import { d as defineCustomElement$l } from './ir-switch2.js';
import { d as defineCustomElement$k } from './ir-tabs2.js';
import { d as defineCustomElement$j } from './ir-tasks-card2.js';
import { d as defineCustomElement$i } from './ir-tasks-filters2.js';
import { d as defineCustomElement$h } from './ir-tasks-header2.js';
import { d as defineCustomElement$g } from './ir-tasks-table2.js';
import { d as defineCustomElement$f } from './ir-tasks-table-pagination2.js';
import { d as defineCustomElement$e } from './ir-textarea2.js';
import { d as defineCustomElement$d } from './ir-title2.js';
import { d as defineCustomElement$c } from './ir-toast2.js';
import { d as defineCustomElement$b } from './ir-tooltip2.js';
import { d as defineCustomElement$a } from './ir-unit-cell2.js';
import { d as defineCustomElement$9 } from './ir-unit-tag2.js';
import { d as defineCustomElement$8 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$7 } from './ir-user-management2.js';
import { d as defineCustomElement$6 } from './ir-user-management-table2.js';
import { d as defineCustomElement$5 } from './ir-validator2.js';
import { d as defineCustomElement$4 } from './ir-weekday-selector2.js';
import { d as defineCustomElement$3 } from './ota-label2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irSecureTasksCss = ".nav{background:white;padding:0.25rem 0}.nav-tabs{border-bottom:0}.nav-link{color:inherit}.active{color:var(--blue)}.ir-page__container{background:#f4f5fa;height:100%;gap:0 !important}.secure-header{background:#fff;border-bottom:1px solid rgba(0, 0, 0, 0.08);padding:0.75rem 1rem;position:sticky;top:0;z-index:10}.secure-header__top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}.secure-header__aname{display:flex;flex-direction:column;gap:0.25rem;margin:0}.secure-header__label{font-size:0.85rem;font-weight:600;color:#5a5a5a;margin:0}.secure-header__aname-input{display:flex;align-items:center;gap:0.5rem}.secure-header__aname-input .form-control{max-width:7rem;padding:0.25rem 0.5rem}.secure-header__tabs{margin-top:0.75rem;padding-top:0.5rem;border-top:1px solid rgba(0, 0, 0, 0.05);overflow-x:auto}.secure-tabs{display:flex;flex-wrap:wrap;gap:0.5rem;list-style:none;padding:0;margin:0}.secure-tabs__item{flex:0 1 auto}.secure-tabs__btn{border:1px solid transparent;border-radius:999px;padding:0.35rem 0.85rem;background:transparent;color:inherit;font-size:0.9rem;transition:all 0.2s ease}.secure-tabs__btn:hover{border-color:rgba(0, 0, 0, 0.1)}.secure-tabs__btn.active{border-color:rgba(0, 0, 0, 0.15);color:var(--blue)}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrSecureTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    propertyid;
    p;
    bookingNumber;
    ticket;
    isAuthenticated = false;
    currentPage = 'front';
    inputValue;
    token = new Token();
    dates = {};
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
    routes = [
        { name: 'Housekeepers', value: 'hk' },
        { name: 'Tasks', value: 'tasks' },
        { name: 'Front', value: 'front' },
        { name: 'Users', value: 'users' },
        { name: 'Sales By Country', value: 'country-sales' },
        { name: 'Daily Occupancy', value: 'daily-occupancy' },
        { name: 'Daily Revenue', value: 'daily-revenue' },
        { name: 'Email logs', value: 'email-logs' },
        { name: 'Booking Listing', value: 'booking-listing' },
        { name: 'Sales by Channel', value: 'channel-sales' },
        { name: 'Arrivals', value: 'arrivals' },
        { name: 'Departures', value: 'departures' },
    ];
    handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        return (h("div", { class: 'ir-page__container p-0' }, h("section", { class: "secure-header" }, h("div", { class: "secure-header__top" }, h("form", { class: "secure-header__aname", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, h("label", { class: "secure-header__label", htmlFor: "aname-input" }, "AName"), h("div", { class: "secure-header__aname-input" }, h("ir-input", { id: "aname-input", type: "text", value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), placeholder: "AName", "aria-label": "AName" }), h("ir-custom-button", { variant: "brand", type: "submit", id: "button-save" }, "Save"))), h("ir-custom-button", { variant: "danger", onClick: () => {
                this.logout();
            } }, "Logout")), h("nav", { class: "secure-header__tabs", "aria-label": "Secure screens navigation" }, h("ul", { class: "secure-tabs" }, this.routes.map(route => (h("li", { key: route.name, class: "secure-tabs__item" }, h("button", { type: "button", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-current": this.currentPage === route.value ? 'page' : undefined, onClick: () => {
                this.currentPage = route.value;
            } }, route.name))))))), this.renderPage()));
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
                return (h("div", { style: { flex: '1 1 0%', display: 'block', background: 'red' } }, h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" })));
            case 'hk':
                return h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'users':
                return h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'email-logs':
                return h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'booking-listing':
                return h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channel-sales':
                return h("ir-sales-by-channel", { language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
            case 'arrivals':
                return h("ir-arrivals", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'departures':
                return h("ir-departures", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
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
        "propertyid": [1026],
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
    const components = ["ir-secure-tasks", "igl-application-info", "igl-block-dates-view", "igl-blocked-date-drawer", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-event", "igl-booking-event-hover", "igl-booking-form", "igl-booking-overview-page", "igl-bulk-block", "igl-bulk-operations", "igl-bulk-stop-sale", "igl-cal-body", "igl-cal-footer", "igl-cal-header", "igl-date-range", "igl-legends", "igl-property-booked-by", "igl-rate-plan", "igl-reallocation-dialog", "igl-room-type", "igl-split-booking", "igl-tba-booking-view", "igl-tba-category-view", "igl-to-be-assigned", "igloo-calendar", "ir-accordion", "ir-actions-cell", "ir-applicable-policies", "ir-arrivals", "ir-arrivals-table", "ir-balance-cell", "ir-billing", "ir-billing-drawer", "ir-booked-by-cell", "ir-booked-on-cell", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-details-drawer", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-email-logs", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-listing", "ir-booking-listing-mobile-card", "ir-booking-listing-table", "ir-booking-number-cell", "ir-booking-status-tag", "ir-button", "ir-checkbox", "ir-checkout-dialog", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-daily-revenue", "ir-daily-revenue-filters", "ir-date-picker", "ir-date-view", "ir-dates-cell", "ir-delete-modal", "ir-departures", "ir-departures-table", "ir-dialog", "ir-drawer", "ir-dropdown", "ir-dropdown-item", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-filters-panel", "ir-guest-info-drawer", "ir-guest-info-form", "ir-guest-name-cell", "ir-hk-archive", "ir-hk-tasks", "ir-hk-team", "ir-hk-unassigned-units", "ir-hk-user", "ir-housekeeping", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interactive-title", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-listing-header", "ir-loading-screen", "ir-login", "ir-m-combobox", "ir-mobile-input", "ir-modal", "ir-monthly-bookings-report", "ir-monthly-bookings-report-filter", "ir-monthly-bookings-report-table", "ir-new-badge", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-password-validator", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-price-input", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-progress-indicator", "ir-radio", "ir-range-picker", "ir-reservation-information", "ir-reset-password", "ir-revenue-row", "ir-revenue-row-details", "ir-revenue-summary", "ir-revenue-table", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-room-nights", "ir-sales-by-channel", "ir-sales-by-channel-filters", "ir-sales-by-channel-table", "ir-sales-by-country", "ir-sales-by-country-summary", "ir-sales-filters", "ir-sales-table", "ir-select", "ir-sidebar", "ir-spinner", "ir-stats-card", "ir-status-activity-cell", "ir-success-loader", "ir-switch", "ir-tabs", "ir-tasks-card", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-tasks-table-pagination", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ir-unit-cell", "ir-unit-tag", "ir-user-form-panel", "ir-user-management", "ir-user-management-table", "ir-validator", "ir-weekday-selector", "ota-label", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-secure-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSecureTasks$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$2T();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2S();
            }
            break;
        case "igl-blocked-date-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2R();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$2Q();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$2P();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2O();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2N();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$2M();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2L();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2K();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$2J();
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$2I();
            }
            break;
        case "igl-bulk-operations":
            if (!customElements.get(tagName)) {
                defineCustomElement$2H();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$2G();
            }
            break;
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$2F();
            }
            break;
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2E();
            }
            break;
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2D();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$2C();
            }
            break;
        case "igl-legends":
            if (!customElements.get(tagName)) {
                defineCustomElement$2B();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$2A();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$2z();
            }
            break;
        case "igl-reallocation-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2y();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$2x();
            }
            break;
        case "igl-split-booking":
            if (!customElements.get(tagName)) {
                defineCustomElement$2w();
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2v();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2u();
            }
            break;
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                defineCustomElement$2t();
            }
            break;
        case "igloo-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$2s();
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$2r();
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2q();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$2p();
            }
            break;
        case "ir-arrivals":
            if (!customElements.get(tagName)) {
                defineCustomElement$2o();
            }
            break;
        case "ir-arrivals-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2n();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2m();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$2l();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2k();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2j();
            }
            break;
        case "ir-booked-on-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2i();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$2h();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2g();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2f();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$2e();
            }
            break;
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2d();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$2c();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2b();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2a();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$29();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$28();
            }
            break;
        case "ir-booking-email-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$27();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$26();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$25();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$24();
            }
            break;
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                defineCustomElement$23();
            }
            break;
        case "ir-booking-listing-mobile-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$22();
            }
            break;
        case "ir-booking-listing-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$21();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$20();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1$();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1_();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Z();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Y();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1X();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1W();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1V();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1U();
            }
            break;
        case "ir-daily-revenue":
            if (!customElements.get(tagName)) {
                defineCustomElement$1T();
            }
            break;
        case "ir-daily-revenue-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$1S();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1R();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Q();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1P();
            }
            break;
        case "ir-delete-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1O();
            }
            break;
        case "ir-departures":
            if (!customElements.get(tagName)) {
                defineCustomElement$1N();
            }
            break;
        case "ir-departures-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1M();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1L();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1K();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$1J();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "ir-filters-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "ir-hk-team":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "ir-housekeeping":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-monthly-bookings-report":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-monthly-bookings-report-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-revenue-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-room-nights":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-sales-by-channel":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-sales-by-channel-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-sales-by-channel-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-sales-by-country":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-sales-by-country-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-stats-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-status-activity-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-tabs":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-unit-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-user-form-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-user-management":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-validator":
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