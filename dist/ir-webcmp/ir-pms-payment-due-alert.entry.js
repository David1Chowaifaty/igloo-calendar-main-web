import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { P as PropertyService } from './property.service-60a05284.js';
import { T as Token } from './Token-add81d36.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './locales.store-daef23cc.js';
import './index-5ba472df.js';

const irPmsPaymentDueAlertCss = ".sc-ir-pms-payment-due-alert-h{display:block}.pms-payment-due-alert__callout.sc-ir-pms-payment-due-alert{border-radius:0}.pms-payment-due-alert__callout-message.sc-ir-pms-payment-due-alert{width:100%;display:flex;text-align:center;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem}";

const IrPmsPaymentDueAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrPmsPaymentDueAlert.style = irPmsPaymentDueAlertCss;

export { IrPmsPaymentDueAlert as ir_pms_payment_due_alert };

//# sourceMappingURL=ir-pms-payment-due-alert.entry.js.map