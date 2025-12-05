import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-b3dce66a.js';
import { v as v4 } from './v4-964634d6.js';

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;min-width:2rem;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.5rem !important;border-radius:4px}.mobile-nav-item{margin:0;list-style:none !important}.navigation-item .dropdown-toggle::after{content:none !important}.menu-icon-container{display:flex !important;align-items:center !important;gap:0.25rem}.mobile-nav-link{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;color:#374151 !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}.ac-menu-dropdown .dropdown-menu{min-width:14rem}@media (min-width: 992px){.ac-menu-dropdown .dropdown-menu{left:0 !important;right:auto !important}}@media (max-width: 991.98px){.ac-menu-dropdown .dropdown-menu{right:0 !important;left:auto !important}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkClicked = createEvent(this, "link-clicked", 7);
    }
    pages = [];
    location = 'nav';
    linkClicked;
    Icon({ name }) {
        return [h("i", { class: name })];
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (h("ul", { class: "mobile-nav-items accordion", id: "mainMenuNavigation" }, this.pages.map(page => {
                const id = page.id ?? v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, h("button", { class: "btn mobile-nav-link menu-icon-container justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, h("div", { class: 'menu-icon-container' }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { class: "new-badge", id: page.badgeId }, "new"))), h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("ir-icons", { name: "angle-down" }))), h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        const menuId = submenu.id ?? v4();
                        return (h("li", { key: menuId, id: menuId, class: `mobile-nav-item menu-icon-container ${submenu.className ?? ''}`, style: { width: '100%' } }, h("a", { onClick: e => {
                                e.preventDefault();
                                this.linkClicked.emit(e);
                            }, class: "mobile-nav-link w-100", href: submenu.href }, h("div", { class: "menu-icon-container" }, submenu.icon && this.Icon({ name: submenu.icon }), h("span", null, submenu.label), submenu.isNew && (h("span", { id: submenu.badgeId, class: "new-badge" }, "new"))))));
                    }))));
                }
                return (h("li", { key: id, id: id, class: `${page.className ?? ''}  mobile-nav-item` }, h("a", { href: page.href, onClick: e => {
                        e.preventDefault();
                        this.linkClicked.emit(e);
                    }, class: "mobile-nav-link" }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
            })));
        }
        return (h("ul", { class: "navigation-items" }, this.pages.map(page => {
            const id = page.id ?? v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, onMouseEnter: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.add('show');
                    }, onMouseLeave: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.remove('show');
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("button", { class: "btn dropdown-toggle menu-icon-container navigation-link ", "data-toggle": "dropdown" }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label)), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))), h("ul", { class: "dropdown-menu dropdown-menu-right dropdown-menu-lg-left" }, page.subMenus.map(submenu => {
                    const menuId = submenu.id ?? v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${submenu.className ?? ''}` }, h("a", { onClick: e => {
                            this.linkClicked.emit(e);
                        }, class: "dropdown-item menu-icon-container", href: submenu.href }, h("div", { class: "menu-icon-container mr-auto" }, submenu.icon && this.Icon({ name: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && (h("span", { id: submenu.badgeId, class: "new-badge" }, "new")))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${page.className ?? ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
        })));
    }
};
AcPagesMenu.style = AcPagesMenuStyle0;

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-2px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}.notification-item.sc-ir-notifications{display:flex;justify-content:space-between;align-items:center;gap:0.5rem}.notification-item.sc-ir-notifications p.sc-ir-notifications{padding:0;margin:0}.notification-item.sc-ir-notifications:active{background-color:#f4f5fa !important}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notificationCleared = createEvent(this, "notificationCleared", 7);
    }
    get el() { return getElement(this); }
    // Make notifications reactive;
    notifications = [];
    isOpen = false;
    notificationCleared;
    buttonRef;
    componentDidLoad() {
        this.updateNotificationBadge();
        document.addEventListener('click', this.onDocumentClick, true);
        document.addEventListener('keydown', this.onDocumentKeydown, true);
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.onDocumentClick, true);
        document.removeEventListener('keydown', this.onDocumentKeydown, true);
    }
    handleNotificationCountChange(newValue, oldValue) {
        if (oldValue && newValue.length !== oldValue.length) {
            this.animateNotificationChange();
        }
    }
    updateNotificationBadge() {
        if (this.buttonRef) {
            this.buttonRef.setAttribute('data-notifications', this.notifications.length.toString());
        }
    }
    animateNotificationChange() {
        if (this.buttonRef) {
            this.buttonRef.classList.add('badge-animate');
            setTimeout(() => {
                this.buttonRef.classList.remove('badge-animate');
            }, 600);
        }
    }
    dismissNotification(notification) {
        this.notificationCleared.emit(notification);
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
    }
    onDocumentClick = (ev) => {
        if (!this.isOpen)
            return;
        const target = ev.target;
        if (target && !this.el.contains(target)) {
            this.isOpen = false;
        }
    };
    onDocumentKeydown = (ev) => {
        if (!this.isOpen)
            return;
        if (ev.key === 'Escape' || ev.key === 'Esc') {
            this.isOpen = false;
            this.buttonRef?.focus?.();
        }
    };
    render() {
        return (h(Host, { key: '8d0f8b73f3324cbb7119e3f10b33cd2f574f9b0e' }, h("div", { key: '7b5e5b0fc70d0efe911e91ff3fca9fa2a725ae32', class: `dropdown notifications-dropdown ${this.isOpen ? 'show' : ''}` }, h("ir-button", { key: 'fb396f831ada186a8328ef7aa46fb8005b828708', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notifications.length.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "aria-expanded": String(this.isOpen), onClickHandler: () => (this.isOpen = !this.isOpen) }), h("div", { key: '90ff6282d6382df878bbfe457e7966fe7c7d32a6', class: `dropdown-menu dropdown-menu-right ` }, this.notifications.length === 0 ? (h("p", { class: "m-0 dropdown-header" }, "All caught up.")) : (this.notifications.map(notification => (h("div", { class: `notification-item dropdown-item ${notification.type}`, key: notification.id }, h("div", { class: "notification-content" }, h("strong", null, notification.title), h("p", null, notification.message), notification.link && (h("a", { href: notification.link.href, target: notification.link.target || '_self' }, notification.link.text || 'View more'))), notification.dismissible && (h("ir-button", { onClickHandler: () => this.dismissNotification(notification), variant: "icon", btn_color: "light", icon_name: "xmark" }))))))))));
    }
    static get watchers() { return {
        "notifications": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

export { AcPagesMenu as ac_pages_menu, IrNotifications as ir_notifications };

//# sourceMappingURL=ac-pages-menu_2.entry.js.map