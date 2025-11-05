var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OverflowAdd, OverflowRelease } from "../../utils/OverflowLock";
import { Host, h } from "@stencil/core";
let menuBarInstanceCounter = 0;
export class IrMenuBar {
    constructor() {
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
    static get is() { return "ir-menu-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-bar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-bar.css"]
        };
    }
    static get states() {
        return {
            "isSheetOpen": {},
            "isMobileLayout": {}
        };
    }
    static get methods() {
        return {
            "focusFirstMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "isSheetOpen",
                "methodName": "handleSheetOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "menu-bar-item-click",
                "method": "handleMenuItemClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "menuBarOpenChange",
                "method": "handleMenuBarOpenChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OverflowAdd('menuSheet')
], IrMenuBar.prototype, "openSheet", null);
__decorate([
    OverflowRelease('menuSheet')
], IrMenuBar.prototype, "closeSheet", null);
//# sourceMappingURL=ir-menu-bar.js.map
