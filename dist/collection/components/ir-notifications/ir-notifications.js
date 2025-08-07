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
        return (h(Host, { key: '9794cc0a02d5b72470fa5af8170fbff233c33bae' }, h("div", { key: 'ab25d8313ad06ef23b05b9cf97a073c55b448449', class: "dropdown notifications-dropdown" }, h("ir-button", { key: '2bea0b4f52a2009c645eabcb2e4569279f865abd', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: '93df5bc176bbf2beda6a45b086ca27c8c397add7', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: '72fbbb7c24f54ecd840cb531892463ef03026327', class: 'dropdown-item' }, h("ir-icons", { key: '3fb3c451f30566f4947bb0237e5697865c527389', name: "danger" }, " "), h("p", { key: 'a0e27a201f5fe2dbef614d8746df208d0085f8d4', class: 'p-0 m-0' }, "Something went wrong"))))));
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
