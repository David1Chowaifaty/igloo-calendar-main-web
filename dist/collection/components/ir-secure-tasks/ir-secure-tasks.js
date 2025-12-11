import Token from "../../models/Token";
import { checkUserAuthState, manageAnchorSession } from "../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrSecureTasks {
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
    static get is() { return "ir-secure-tasks"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-secure-tasks.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-secure-tasks.css"]
        };
    }
    static get properties() {
        return {
            "propertyid": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            },
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isAuthenticated": {},
            "currentPage": {},
            "inputValue": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-secure-tasks.js.map
