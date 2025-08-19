import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-2px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = /*@__PURE__*/ proxyCustomElement(class IrNotifications extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.notificationCount = 0;
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
        return (h(Host, { key: 'ebebcac62b6f2abac9b0932e77494c2ecffd35e4' }, h("div", { key: 'd57ac0a3d8012262bdfcbbe5fc59b26e192c8764', class: "dropdown notifications-dropdown" }, h("ir-button", { key: '1fe9216bebbd5f9afc7d655915ae089230069275', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: '75f4df6ec5cca7a0fe233757f9d9ddcd3534f677', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: '455e648a54c291826ff7ba27b23f6e1c15a2927e', class: 'dropdown-header m-0' }, h("p", { key: '45bae8b2120ee31470a057f5436ab53844cea331', class: 'p-0 m-0' }, "All caught up."))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "notificationCount": ["handleNotificationCountChange"]
    }; }
    static get style() { return IrNotificationsStyle0; }
}, [2, "ir-notifications", {
        "notificationCount": [1026, "notification-count"]
    }, undefined, {
        "notificationCount": ["handleNotificationCountChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-notifications", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrNotifications);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrNotifications as I, defineCustomElement as d };

//# sourceMappingURL=ir-notifications2.js.map