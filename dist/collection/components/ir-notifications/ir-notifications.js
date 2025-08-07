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
        return (h(Host, { key: '98519cd1cf3bc98f3de459f407acfcb656615d87' }, h("div", { key: 'f3ac147bb78b1c4eef6a79a5e4bef227250020b2', class: "dropdown notifications-dropdown" }, h("ir-button", { key: '96388c10b16e74d3113481a28ab72c3565ad9f16', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: 'b403e0e7c596c5faeb5c0cee8df96e32a5ba28c4', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: 'fdec7826de41909a6593f5d8578673a97c3e0d6f', class: 'dropdown-item' }, h("ir-icons", { key: 'bbff683a947923f4c5b3da6f21ff9e15d9b7e28f', name: "danger" }, " "), h("p", { key: '71c4f31d7d83366bc63c1683abfe6a94f1b4bf90', class: 'p-0 m-0' }, "Something went wrong"))))));
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
