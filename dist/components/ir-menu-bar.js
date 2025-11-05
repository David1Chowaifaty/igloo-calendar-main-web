import { getElement, proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 */
function OverflowAdd(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
        descriptor.value = function (...args) {
            const host = getOverflowHost(this);
            if (host) {
                addOverflowForHost(host, tag);
            }
            return original === null || original === void 0 ? void 0 : original.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 */
function OverflowRelease(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
        descriptor.value = function (...args) {
            const host = getOverflowHost(this);
            if (host) {
                removeOverflowForHost(host, tag);
            }
            return original === null || original === void 0 ? void 0 : original.apply(this, args);
        };
        return descriptor;
    };
}
/* ---------------------- Core registry & body lock logic --------------------- */
const TAG_REGISTRY = new Map();
// Attribute on <body> that holds a space-separated list of active tags
const BODY_ATTR = 'data-overflow-locks';
// Style element id prefix for per-tag CSS
const STYLE_ID_PREFIX = 'overflow-style-';
/** Ensure a <style> for this tag exists (once) and targets the body attr token. */
function ensureStyleForTag(tag) {
    if (!isDomAvailable())
        return;
    const styleId = STYLE_ID_PREFIX + tag;
    if (document.getElementById(styleId))
        return;
    const css = `
    /* Auto-inserted overflow lock for "${tag}" */
    body[${BODY_ATTR}~="${tag}"] { overflow: hidden !important; }
  `.trim();
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
}
/** Add the tag token to body’s data-overflow-locks (space-separated tokens). */
function addBodyTag(tag) {
    if (!isDomAvailable())
        return;
    ensureStyleForTag(tag);
    const body = document.body;
    const current = (body.getAttribute(BODY_ATTR) || '').trim();
    const tokens = new Set(current ? current.split(/\s+/) : []);
    if (!tokens.has(tag)) {
        tokens.add(tag);
        body.setAttribute(BODY_ATTR, Array.from(tokens).join(' '));
    }
}
/** Remove the tag token from body’s data-overflow-locks. */
function removeBodyTag(tag) {
    if (!isDomAvailable())
        return;
    const body = document.body;
    const current = (body.getAttribute(BODY_ATTR) || '').trim();
    if (!current)
        return;
    const tokens = new Set(current.split(/\s+/));
    if (tokens.delete(tag)) {
        const next = Array.from(tokens).join(' ');
        if (next)
            body.setAttribute(BODY_ATTR, next);
        else
            body.removeAttribute(BODY_ATTR);
    }
}
/** Register a host under a tag, and lock the body for that tag if it’s the first. */
function addOverflowForHost(host, tag) {
    var _a;
    if (!host || !isDomAvailable())
        return;
    // Track on host
    host.__overflowTags__ || (host.__overflowTags__ = new Map());
    const counts = host.__overflowTags__;
    const previous = (_a = counts.get(tag)) !== null && _a !== void 0 ? _a : 0;
    counts.set(tag, previous + 1);
    // Track globally
    let entry = TAG_REGISTRY.get(tag);
    if (!entry) {
        entry = { hosts: new Set(), count: 0 };
        TAG_REGISTRY.set(tag, entry);
    }
    if (previous === 0) {
        entry.hosts.add(host);
    }
    entry.count += 1;
    // If this is the first active lock for this tag, lock the body for this tag
    if (entry.count === 1) {
        addBodyTag(tag);
    }
    // Safety: auto-clean on detach
    attachDisconnectCleanup(host);
}
/** Unregister a host from a tag, and possibly unlock the body for that tag. */
function removeOverflowForHost(host, tag) {
    if (!host || !isDomAvailable())
        return;
    // Update host
    const counts = host.__overflowTags__;
    if (!counts)
        return;
    const current = counts.get(tag);
    if (!current)
        return;
    if (current > 1) {
        counts.set(tag, current - 1);
    }
    else {
        counts.delete(tag);
        if (counts.size === 0) {
            delete host.__overflowTags__;
        }
    }
    // Update global registry
    const entry = TAG_REGISTRY.get(tag);
    if (!entry)
        return;
    entry.count = Math.max(0, entry.count - 1);
    if (current === 1) {
        entry.hosts.delete(host);
    }
    if (entry.count === 0) {
        TAG_REGISTRY.delete(tag);
        removeBodyTag(tag);
        // Optional: also remove the injected style node if you prefer cleanup:
        // const style = document.getElementById(STYLE_ID_PREFIX + tag);
        // style?.remove();
    }
}
/** If a host is removed from the DOM without calling release, auto-clean its tags. */
function attachDisconnectCleanup(host) {
    if (!host || !isDomAvailable() || typeof MutationObserver === 'undefined')
        return;
    // Don’t attach multiple observers to the same host
    if (host.__overflowObserver__)
        return;
    const obs = new MutationObserver(() => {
        // If host is no longer connected, clear all tags it owned
        if (!host.isConnected) {
            const tagEntries = host.__overflowTags__
                ? Array.from(host.__overflowTags__.entries())
                : [];
            tagEntries.forEach(([tag, count]) => {
                for (let i = 0; i < count; i += 1) {
                    removeOverflowForHost(host, tag);
                }
            });
            obs.disconnect();
            delete host.__overflowObserver__;
        }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    host.__overflowObserver__ = obs;
}
function getOverflowHost(instance) {
    if (!isDomAvailable())
        return null;
    try {
        return getElement(instance);
    }
    catch (_a) {
        return null;
    }
}
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

const irMenuBarCss = ":host{display:block}.menu-bar{display:flex;align-items:center;gap:0.75rem;width:100%;box-sizing:border-box;padding:0.5rem 0.75rem;color:black}.menu-toggle{display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:0;border-radius:0.375rem;background:transparent;color:inherit;cursor:pointer;transition:background-color 0.2s ease-in-out}.menu-toggle:hover,.menu-toggle:focus-visible{outline:none;background-color:rgba(255, 255, 255, 0.1)}.menu-items{display:flex;align-items:center;gap:0.5rem;flex:1;flex-wrap:wrap}.menu-sheet{position:fixed;inset:0;z-index:1200;display:flex;align-items:stretch;pointer-events:none;visibility:hidden}.menu-sheet--open,.menu-sheet--closing{visibility:visible}.menu-sheet--open{pointer-events:auto}.menu-sheet__overlay{flex:1;opacity:0;background-color:rgba(0, 0, 0, 0.45);transition:opacity 240ms ease;cursor:pointer;position:fixed;inset:0;z-index:99999}.menu-sheet--open .menu-sheet__overlay{opacity:1}.menu-sheet--closing .menu-sheet__overlay{opacity:0}.menu-sheet__panel{display:flex;flex-direction:column;box-sizing:border-box;position:fixed;left:0;z-index:999999;width:min(100%, 60vw);max-width:60vw;height:100%;background:white;box-shadow:4px 0 20px rgba(0, 0, 0, 0.3);transform:translateX(-100%);opacity:1;transition:transform 300ms ease;will-change:transform;backface-visibility:hidden}.menu-sheet--open .menu-sheet__panel{transform:translateX(0)}.menu-sheet--closing .menu-sheet__panel{transform:translateX(-100%)}.menu-sheet__header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;box-sizing:border-box;padding:1rem 1.25rem 0.5rem}.menu-sheet__title{font-size:1.05rem;font-weight:600;color:inherit}.menu-sheet__close{display:inline-flex;align-items:center;justify-content:center;padding:0.35rem;border:0;border-radius:0.375rem;background:transparent;color:inherit;cursor:pointer;box-sizing:border-box;transition:background-color 0.2s ease-in-out}.menu-sheet__close:hover,.menu-sheet__close:focus-visible{outline:none;background-color:rgba(255, 255, 255, 0.12)}.menu-sheet__body{display:flex;flex-direction:column;gap:0.5rem;width:100%;max-width:100%;height:auto;box-sizing:border-box;padding:0.5rem 1.25rem 1rem;overflow-y:auto}@media (prefers-reduced-motion: reduce){.menu-sheet__overlay,.menu-sheet__panel{transition:none}}::slotted(ir-menu-bar-menu:focus-visible){outline:none}@media (min-width: 768px){.menu-toggle{display:none}.menu-items{gap:0}.menu-bar{justify-content:center;box-sizing:border-box;padding:0 1.125rem;color:white;gap:0;background:#104064}}";
const IrMenuBarStyle0 = irMenuBarCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let menuBarInstanceCounter = 0;
const IrMenuBar$1 = /*@__PURE__*/ proxyCustomElement(class IrMenuBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.isSheetOpen = false;
        this.isMobileLayout = false;
        this.sheetId = `ir-menu-bar-sheet-${++menuBarInstanceCounter}`;
        this.sheetTitleId = `${this.sheetId}-title`;
    }
    getMenus() {
        return Array.from(this.hostEl.querySelectorAll('ir-menu-bar-menu'));
    }
    findMenuFromEvent(event) {
        const path = event.composedPath();
        return this.getMenus().find(menu => path.includes(menu));
    }
    async focusMenu(menu) {
        if (!menu || typeof menu.focusTrigger !== 'function') {
            return;
        }
        await menu.focusTrigger();
    }
    async handleKeydown(event) {
        const { key } = event;
        if (this.isMobileLayout) {
            if (this.isSheetOpen && key === 'Escape') {
                event.preventDefault();
                this.closeSheet();
            }
            return;
        }
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
            return;
        }
        const menus = this.getMenus();
        if (menus.length === 0) {
            return;
        }
        const currentMenu = this.findMenuFromEvent(event);
        if (!currentMenu) {
            return;
        }
        const currentIndex = menus.indexOf(currentMenu);
        if (currentIndex === -1) {
            return;
        }
        event.preventDefault();
        let targetIndex = currentIndex;
        switch (key) {
            case 'ArrowLeft':
                targetIndex = (currentIndex - 1 + menus.length) % menus.length;
                break;
            case 'ArrowRight':
                targetIndex = (currentIndex + 1) % menus.length;
                break;
            case 'Home':
                targetIndex = 0;
                break;
            case 'End':
                targetIndex = menus.length - 1;
                break;
        }
        if (targetIndex === currentIndex) {
            return;
        }
        const targetMenu = menus[targetIndex];
        if (typeof currentMenu.closeMenuExternally === 'function') {
            await currentMenu.closeMenuExternally({ focusTrigger: false });
        }
        await this.focusMenu(targetMenu);
    }
    async focusFirstMenu() {
        const [firstMenu] = this.getMenus();
        await this.focusMenu(firstMenu);
    }
    componentWillLoad() {
        this.setupLayoutMode();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mediaQueryCleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        this.mediaQueryCleanup = undefined;
    }
    setupLayoutMode() {
        if (typeof window === 'undefined' || typeof matchMedia === 'undefined') {
            this.isMobileLayout = false;
            return;
        }
        const query = '(min-width: 768px)';
        this.mediaQuery = window.matchMedia(query);
        const evaluateLayout = (mq) => {
            const isTabletOrAbove = mq.matches;
            this.isMobileLayout = !isTabletOrAbove;
            if (isTabletOrAbove && this.isSheetOpen) {
                this.isSheetOpen = false;
            }
        };
        evaluateLayout(this.mediaQuery);
        const listener = (event) => evaluateLayout(event);
        if (typeof this.mediaQuery.addEventListener === 'function') {
            this.mediaQuery.addEventListener('change', listener);
            this.mediaQueryCleanup = () => this.mediaQuery.removeEventListener('change', listener);
        }
        else {
            this.mediaQuery.addListener(listener);
            this.mediaQueryCleanup = () => this.mediaQuery.removeListener(listener);
        }
    }
    handleSheetOpenChange(open) {
        var _a;
        (_a = this.sheetPanelRef) === null || _a === void 0 ? void 0 : _a.toggleAttribute('inert', !open);
        const scheduleFocus = (callback) => {
            if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(callback);
            }
            else {
                callback();
            }
        };
        if (open) {
            scheduleFocus(() => { var _a; return (_a = this.closeButtonRef) === null || _a === void 0 ? void 0 : _a.focus(); });
        }
        else {
            scheduleFocus(() => { var _a; return (_a = this.toggleButtonRef) === null || _a === void 0 ? void 0 : _a.focus(); });
        }
    }
    openSheet() {
        this.isSheetOpen = true;
    }
    closeSheet() {
        this.isSheetOpen = false;
    }
    handleMenuItemClick() {
        if (this.isSheetOpen) {
            this.closeSheet();
        }
    }
    handleMenuBarOpenChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.detail)
            this.getMenus().forEach(m => {
                if (m.id !== e.target.id) {
                    m.open = false;
                }
            });
    }
    render() {
        const hostClass = {
            'is-mobile': this.isMobileLayout,
            'sheet-open': this.isSheetOpen,
        };
        return (h(Host, { key: '71c95aa06a7e93547928befc1e2019bdc8a4e344', role: "menubar", class: hostClass }, h("nav", { key: '21e31cf9fd190639b4a7fc9f8fa7fdd22a384acf', class: "menu-bar", part: "container" }, this.isMobileLayout && (h("button", { key: 'b3f0df7e2e80589e47c5f4b3b833272a461b1cef', class: "menu-toggle", part: "toggle", type: "button", "aria-label": this.isSheetOpen ? 'Close menu' : 'Open menu', "aria-expanded": String(this.isSheetOpen), "aria-controls": this.sheetId, tabIndex: this.isSheetOpen ? -1 : 0, onClick: () => (this.isSheetOpen ? this.closeSheet() : this.openSheet()), ref: el => (this.toggleButtonRef = el) }, h("svg", { key: '7547d33ef0faddd02c665e97b18269834424da40', xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-menu-icon lucide-menu" }, h("path", { key: '34d0687b84998a66fea64028b01342862bba55f8', d: "M4 5h16" }), h("path", { key: '1b7f1ec28e438a1a0f3b821b843c3706d088ebe6', d: "M4 12h16" }), h("path", { key: '125dd0eb222fc29a3af02323a3e4ac759d03e474', d: "M4 19h16" })))), this.isMobileLayout ? (h("div", { id: this.sheetId, class: { 'menu-sheet': true, 'menu-sheet--open': this.isSheetOpen }, "aria-hidden": this.isSheetOpen ? 'false' : 'true' }, h("div", { class: "menu-sheet__panel", role: "dialog", "aria-modal": "true", "aria-labelledby": this.sheetTitleId, tabIndex: -1, ref: el => {
                this.sheetPanelRef = el;
                if (el) {
                    el.toggleAttribute('inert', !this.isSheetOpen);
                }
            } }, h("div", { class: "menu-sheet__header" }, h("slot", { name: "sheet-header" }, h("span", { id: this.sheetTitleId, class: "menu-sheet__title" }, "Menu")), h("button", { type: "button", class: "menu-sheet__close", "aria-label": "Close menu", onClick: this.closeSheet, tabIndex: this.isSheetOpen ? 0 : -1, ref: el => (this.closeButtonRef = el) }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-x" }, h("path", { d: "M18 6 6 18" }), h("path", { d: "m6 6 12 12" })))), h("div", { class: "menu-sheet__body" }, h("slot", null))), h("div", { class: "menu-sheet__overlay", role: "presentation", onClick: this.closeSheet.bind(this) }))) : (h("div", { class: "menu-items", part: "items" }, h("slot", null))))));
    }
    get hostEl() { return this; }
    static get watchers() { return {
        "isSheetOpen": ["handleSheetOpenChange"]
    }; }
    static get style() { return IrMenuBarStyle0; }
}, [1, "ir-menu-bar", {
        "isSheetOpen": [32],
        "isMobileLayout": [32],
        "focusFirstMenu": [64]
    }, [[0, "keydown", "handleKeydown"], [0, "menu-bar-item-click", "handleMenuItemClick"], [0, "menuBarOpenChange", "handleMenuBarOpenChange"]], {
        "isSheetOpen": ["handleSheetOpenChange"]
    }]);
__decorate([
    OverflowAdd('menuSheet')
], IrMenuBar$1.prototype, "openSheet", null);
__decorate([
    OverflowRelease('menuSheet')
], IrMenuBar$1.prototype, "closeSheet", null);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenuBar$1);
            }
            break;
    } });
}

const IrMenuBar = IrMenuBar$1;
const defineCustomElement = defineCustomElement$1;

export { IrMenuBar, defineCustomElement };

//# sourceMappingURL=ir-menu-bar.js.map