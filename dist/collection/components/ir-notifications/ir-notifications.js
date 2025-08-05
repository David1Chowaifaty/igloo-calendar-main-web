import { Host, h } from "@stencil/core";
export class IrNotifications {
    constructor() {
        this.notificationCount = 2;
    }
    handleNotificationCountChange(newValue, oldValue) {
        if (oldValue !== undefined && newValue !== oldValue) {
            this.animateNotificationChange();
        }
    }
    componentDidLoad() {
        this.updateNotificationBadge();
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
    }
    updateNotificationBadge() {
        if (this.buttonRef) {
            this.buttonRef.setAttribute('data-notifications', this.notificationCount.toString());
        }
    }
    animateNotificationChange() {
        if (this.buttonRef) {
            // Add bounce animation class
            this.buttonRef.classList.add('badge-animate');
            // Remove the animation class after animation completes
            setTimeout(() => {
                this.buttonRef.classList.remove('badge-animate');
            }, 600);
        }
    }
    render() {
        return (h(Host, { key: 'b4d8a591e2af41e565cd27b9b5dfb6643c929539' }, h("div", { key: '9402989c5c4965f70a1f370d0b3ef5792d1ce292', class: "dropdown notifications-dropdown" }, h("ir-button", { key: 'f96938d059a845d5b7469a2be736a4f4a967ba7b', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: '6691945415c29c1cb67c7cfc1971952f80d66742', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: '1641a86afe35b7c9c058b601f690d4189dab847d', class: 'dropdown-item' }, h("ir-icons", { key: '94a8ccd2226bc0819c221be822eee406cb7df624', name: "danger" }, " "), h("p", { key: '094f533a294b21cf2145dc522d053ef707c5235b', class: 'p-0 m-0' }, "Something went wrong"))))));
    }
    static get is() { return "ir-notifications"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-notifications.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-notifications.css"]
        };
    }
    static get properties() {
        return {
            "notificationCount": {
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
                "attribute": "notification-count",
                "reflect": false,
                "defaultValue": "2"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "notificationCount",
                "methodName": "handleNotificationCountChange"
            }];
    }
}
//# sourceMappingURL=ir-notifications.js.map
