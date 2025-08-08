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
        return (h(Host, { key: '1851878dc5d3e7b1e4c8dcdd9b328a05cd0aa3a4' }, h("div", { key: '0af044571210171588fa69b4df21868720dd4bb2', class: "dropdown notifications-dropdown" }, h("ir-button", { key: '975b3943ba6a45ad9f4c1d9a5fe8f6c94ccdcb37', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: '58924e41bbcda3615f288db2353341ffe7d95da3', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: '1381951c05d113bf3806bfdfcfcc4dd327035a51', class: 'dropdown-item' }, h("ir-icons", { key: '83d158e253158cacbbf77b25ce10279577130914', name: "danger" }, " "), h("p", { key: '6104a2abe93d1b94cbf410d1bca858e751c669d7', class: 'p-0 m-0' }, "Something went wrong"))))));
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
