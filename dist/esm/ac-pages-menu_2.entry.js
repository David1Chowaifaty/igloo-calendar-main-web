import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-60982d00.js';
import { v as v4 } from './v4-964634d6.js';

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none;margin:0;padding:1rem 0}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkClicked = createEvent(this, "linkClicked", 7);
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        return (h("ul", { key: '12757f36510ab3ca42c9ed717f799379bcf783f2', class: "navigation-items", id: "main-menu-navigation", "data-menu": "menu-navigation" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, "data-menu": "dropdown", class: `dropdown navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("a", { class: "dropdown-toggle navigation-link", href: "#", "data-toggle": "dropdown" }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("ul", { class: "dropdown-menu" }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href, "data-toggle": "dropdown" }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, page.icon && h("i", { class: page.icon }), h("span", null, page.label))));
        })));
    }
};
AcPagesMenu.style = AcPagesMenuStyle0;

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "notificationCount": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

export { AcPagesMenu as ac_pages_menu, IrNotifications as ir_notifications };

//# sourceMappingURL=ac-pages-menu_2.entry.js.map