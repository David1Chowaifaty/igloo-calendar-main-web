import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService } from './property.service.js';
import { T as Token } from './Token.js';

const irPmsPaymentDueAlertCss = ".sc-ir-pms-payment-due-alert-h{display:block}.pms-payment-due-alert__callout-message.sc-ir-pms-payment-due-alert{width:100%;display:flex;text-align:center;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem}";
const IrPmsPaymentDueAlertStyle0 = irPmsPaymentDueAlertCss;

const IrPmsPaymentDueAlert = /*@__PURE__*/ proxyCustomElement(class IrPmsPaymentDueAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    propertyid;
    ticket;
    baseUrl;
    notifications = [];
    tokenService = new Token();
    propertyService = new PropertyService();
    componentWillLoad() {
        if (this.baseUrl) {
            this.tokenService.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.fetchNotifications();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue || !newValue) {
            return;
        }
        this.tokenService.setToken(newValue);
        this.fetchNotifications();
    }
    async fetchNotifications() {
        if (!this.propertyid) {
            this.notifications = [];
            return;
        }
        try {
            this.notifications = await this.propertyService.fetchNotifications(this.propertyid);
        }
        catch (error) {
            console.log(error);
            this.notifications = [];
        }
    }
    render() {
        const combinedMessage = this.notifications
            ?.filter(n => n.type === 'financial')
            ?.map(notification => notification.message)
            ?.filter(Boolean)
            ?.join(' ');
        if (!combinedMessage) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-callout", { class: "pms-payment-due-alert__callout", size: "small", appearance: "filled", variant: "danger" }, h("div", { class: "pms-payment-due-alert__callout-message" }, h("wa-icon", { style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' }, slot: "icon", name: "triangle-exclamation" }), h("span", null, combinedMessage)))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrPmsPaymentDueAlertStyle0; }
}, [2, "ir-pms-payment-due-alert", {
        "propertyid": [2],
        "ticket": [1],
        "baseUrl": [1, "base-url"],
        "notifications": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pms-payment-due-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-payment-due-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsPaymentDueAlert);
            }
            break;
    } });
}

export { IrPmsPaymentDueAlert as I, defineCustomElement as d };

//# sourceMappingURL=ir-pms-payment-due-alert2.js.map