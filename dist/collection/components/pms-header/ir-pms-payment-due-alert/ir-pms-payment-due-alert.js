import { PropertyService } from "../../../services/property.service";
import Token from "../../../models/Token";
import { Host, h } from "@stencil/core";
export class IrPmsPaymentDueAlert {
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
    static get is() { return "ir-pms-payment-due-alert"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pms-payment-due-alert.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pms-payment-due-alert.css"]
        };
    }
    static get properties() {
        return {
            "propertyid": {
                "type": "number",
                "mutable": false,
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
            },
            "baseUrl": {
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
                "attribute": "base-url",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "notifications": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-pms-payment-due-alert.js.map
