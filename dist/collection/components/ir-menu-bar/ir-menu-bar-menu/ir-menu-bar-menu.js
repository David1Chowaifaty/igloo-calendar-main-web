import { Host, h } from "@stencil/core";
import { arrow, autoUpdate, computePosition, shift } from "@floating-ui/dom";
import { v4 } from "uuid";
export class IrMenuBarMenu {
    constructor() {
        /**
         * Displays an `ir-new-badge` next to the trigger when set.
         */
        this.newBadge = false;
        /**
         * Controls the open state of the dropdown menu.
         * Can be toggled programmatically or via user interaction.
         */
        this.open = false;
        this.hasDropdown = false;
        this.isAccordionLayout = false;
        this.handleItemsSlotChange = () => {
            this.updateDropdownState();
            if (this.isAccordionLayout && this.open) {
                // refresh measured height when slot content changes
                requestAnimationFrame(() => this.updateAccordionHeight(true));
            }
        };
        this.handleAccordionTransitionEnd = (event) => {
            if (!this.isAccordionLayout)
                return;
            if (event.target !== this.dropdownContainerRef || event.propertyName !== 'height')
                return;
            if (this.open) {
                this.dropdownContainerRef.style.height = 'auto';
            }
        };
    }
    get items() {
        return Array.from(this.hostEl.querySelectorAll('ir-menu-bar-item')).filter(item => item.parentElement === this.hostEl && !item.slot);
    }
    updateDropdownState() {
        const hasDropdown = this.items.length > 1;
        if (hasDropdown !== this.hasDropdown) {
            this.hasDropdown = hasDropdown;
        }
        if (!hasDropdown && this.open) {
            this.open = false;
        }
        this.hostEl.toggleAttribute('has-submenu', hasDropdown);
    }
    componentWillLoad() {
        if (!this.hostEl.id) {
            this.hostEl.id = `menu-bar-${v4()}`;
        }
        this.updateDropdownState();
        this.setupLayoutMode();
    }
    handleMenuBarOpenChange(open) {
        var _a, _b;
        if (!this.hasDropdown)
            return;
        if (this.isAccordionLayout) {
            (_a = this.cleanupAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
            this.cleanupAutoUpdate = undefined;
            this.updateAccordionHeight(open);
            this.menuBarOpenChange.emit(open);
            return;
        }
        if (open) {
            const arrowElement = this.hostEl.shadowRoot.querySelector('#arrow');
            requestAnimationFrame(() => {
                this.cleanupAutoUpdate = autoUpdate(this.menuTriggerRef, this.dropdownContainerRef, () => {
                    computePosition(this.menuTriggerRef, this.dropdownContainerRef, {
                        strategy: 'fixed',
                        placement: 'bottom-start',
                        middleware: [shift(), arrow({ element: arrowElement })],
                    }).then(({ x, y, placement, middlewareData }) => {
                        Object.assign(this.dropdownContainerRef.style, {
                            left: `${x}px`,
                            top: `${y}px`,
                        });
                        const { x: arrowX, y: arrowY } = middlewareData.arrow;
                        const staticSide = {
                            top: 'bottom',
                            right: 'left',
                            bottom: 'top',
                            left: 'right',
                        }[placement.split('-')[0]];
                        Object.assign(arrowElement.style, {
                            left: arrowX != null ? `${arrowX}px` : '',
                            top: arrowY != null ? `${arrowY}px` : '',
                            right: '',
                            bottom: '',
                            [staticSide]: '-4px',
                        });
                    });
                });
            });
        }
        else {
            (_b = this.cleanupAutoUpdate) === null || _b === void 0 ? void 0 : _b.call(this);
            this.cleanupAutoUpdate = undefined;
            this.cancelDropdownClose();
        }
    }
    componentDidLoad() {
        this.updateDropdownState();
        if (this.isAccordionLayout) {
            this.updateAccordionHeight(this.open);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.cleanupAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
        this.cleanupAutoUpdate = undefined;
        (_b = this.mediaQueryCleanup) === null || _b === void 0 ? void 0 : _b.call(this);
        this.mediaQueryCleanup = undefined;
        this.cancelDropdownClose();
    }
    setupLayoutMode() {
        if (typeof window === 'undefined' || typeof matchMedia === 'undefined') {
            this.isAccordionLayout = false;
            return;
        }
        const query = '(min-width: 768px)';
        this.mediaQuery = window.matchMedia(query);
        const evaluateLayout = (mq) => {
            var _a, _b, _c;
            const isDropdownLayout = mq.matches;
            this.isAccordionLayout = !isDropdownLayout;
            if (isDropdownLayout) {
                this.cancelDropdownClose();
                (_a = this.dropdownContainerRef) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
                (_b = this.dropdownContainerRef) === null || _b === void 0 ? void 0 : _b.style.removeProperty('display');
                if (this.open) {
                    this.open = false;
                }
            }
            else if (this.dropdownContainerRef) {
                this.cancelDropdownClose();
                if (this.open) {
                    requestAnimationFrame(() => this.updateAccordionHeight(true));
                }
                else {
                    this.dropdownContainerRef.style.height = '0px';
                }
            }
            if (isDropdownLayout) {
                // ensure open state recalculates floating UI positioning
                if (this.open) {
                    this.handleMenuBarOpenChange(true);
                }
            }
            else {
                (_c = this.cleanupAutoUpdate) === null || _c === void 0 ? void 0 : _c.call(this);
                this.cleanupAutoUpdate = undefined;
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
    updateAccordionHeight(open) {
        if (!this.dropdownContainerRef)
            return;
        const dropdownEl = this.dropdownContainerRef;
        if (open) {
            const contentHeight = dropdownEl.scrollHeight;
            dropdownEl.style.height = `${contentHeight}px`;
        }
        else {
            if (dropdownEl.style.height === 'auto') {
                dropdownEl.style.height = `${dropdownEl.scrollHeight}px`;
            }
            requestAnimationFrame(() => {
                dropdownEl.style.height = '0px';
            });
        }
    }
    scheduleDropdownClose() {
        if (!this.hasDropdown || this.isAccordionLayout)
            return;
        this.cancelDropdownClose();
        this.closeTimeout = window.setTimeout(() => {
            this.closeTimeout = undefined;
            this.open = false;
        }, 150);
    }
    cancelDropdownClose() {
        if (this.closeTimeout !== undefined) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = undefined;
        }
    }
    render() {
        const hostClass = {
            'has-dropdown': this.hasDropdown,
            'is-open': this.hasDropdown && this.open,
            'is-accordion': this.isAccordionLayout,
            'is-dropdown': this.hasDropdown && !this.isAccordionLayout,
        };
        const supportsDropdownHover = this.hasDropdown && !this.isAccordionLayout;
        return (h(Host, { key: '605e1c36d72a9ecac637dbb0d7d71dc7bfe7fb39', class: hostClass, role: "none", onPointerEnter: supportsDropdownHover
                ? () => {
                    this.cancelDropdownClose();
                    this.open = true;
                }
                : undefined, onPointerLeave: supportsDropdownHover ? () => this.scheduleDropdownClose() : undefined }, h("div", { key: 'd7cc8005d17b9900ad81382e52f245abbac204d9', class: "menu-trigger-wrapper", part: "trigger", role: "menuitem", onClick: () => {
                if (this.hasDropdown) {
                    this.open = !this.open;
                }
                else {
                    const item = this.items[0];
                    if (item.href) {
                        window.open(item.href, item.target);
                    }
                }
            }, ref: el => (this.menuTriggerRef = el), tabindex: this.hasDropdown ? '0' : undefined, "aria-haspopup": this.hasDropdown ? 'menu' : undefined, "aria-expanded": this.hasDropdown ? String(this.open) : undefined }, h("slot", { key: 'a7c81ace22eba3fc63286fbddf3688fd9a13a6a2', name: "trigger" }), this.hasDropdown &&
            (!this.open ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "menu-bar-menu__accordion_indicator" }, h("path", { d: "m6 9 6 6 6-6" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "menu-bar-menu__accordion_indicator" }, h("path", { d: "m18 15-6-6-6 6" })))), this.newBadge && h("ir-new-badge", { key: '32bc70467aecb38953acce9ed8af86b10165e053', class: "menu-new-badge", part: "new-indicator" })), h("div", { key: 'e0b73fc017ad5373aced0a1af7e39b06a36eba53', class: "dropdown-menu", ref: el => (this.dropdownContainerRef = el), part: "dropdown", role: this.hasDropdown ? 'menu' : undefined, "data-state": !this.hasDropdown || !this.open ? 'open' : 'closed', onTransitionEnd: this.handleAccordionTransitionEnd }, h("div", { key: '2c1d117f4d208ab58c9ba3c533f98c7ec2668bde', id: "arrow" }), h("slot", { key: '0b8795c854d1bee6535d2020e08bfe6799bd02bf', onSlotchange: this.handleItemsSlotChange }))));
    }
    static get is() { return "ir-menu-bar-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-bar-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-bar-menu.css"]
        };
    }
    static get properties() {
        return {
            "newBadge": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Displays an `ir-new-badge` next to the trigger when set."
                },
                "getter": false,
                "setter": false,
                "attribute": "new",
                "reflect": true,
                "defaultValue": "false"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls the open state of the dropdown menu.\nCan be toggled programmatically or via user interaction."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasDropdown": {},
            "isAccordionLayout": {}
        };
    }
    static get events() {
        return [{
                "method": "menuBarOpenChange",
                "name": "menuBarOpenChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires whenever the menu's `open` state changes."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleMenuBarOpenChange"
            }];
    }
}
//# sourceMappingURL=ir-menu-bar-menu.js.map
