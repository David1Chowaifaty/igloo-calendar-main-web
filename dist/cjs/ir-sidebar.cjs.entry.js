'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-9892967b.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');
require('./axios-6e678d52.js');

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:auto}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle", 7);
        this.beforeSidebarClose = index.createEvent(this, "beforeSidebarClose", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Identifier for the sidebar instance.
     */
    name;
    /**
     * Which side of the screen the sidebar appears on.
     * Options: `'left'` or `'right'`.
     */
    side = 'right';
    /**
     * Whether to show the close (X) button in the sidebar header.
     */
    showCloseButton = true;
    /**
     * Whether the sidebar is open.
     * Can be used with two-way binding.
     */
    open = false;
    /**
     * Inline styles applied to the sidebar container.
     */
    sidebarStyles;
    /**
     * Label text displayed in the sidebar header.
     */
    label;
    /**
     * Prevents the sidebar from closing when `toggleSidebar()` is called.
     * When true, emits `beforeSidebarClose` instead of toggling.
     */
    preventClose;
    /**
     * Event emitted when the sidebar is toggled open/closed.
     * Emits the current `open` state.
     */
    irSidebarToggle;
    /**
     * Event emitted *before* the sidebar attempts to close,
     * but only if `preventClose` is set to true.
     */
    beforeSidebarClose;
    sidebarRef;
    componentDidLoad() {
        this.applyStyles();
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            utils.handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.open) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    /**
     * Toggles the sidebar's visibility.
     *
     * - If `preventClose` is true, emits `beforeSidebarClose` and does nothing else.
     * - Otherwise, emits `irSidebarToggle` with the current `open` state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-sidebar');
     * await el.toggleSidebar();
     * ```
     */
    async toggleSidebar() {
        if (this.preventClose) {
            this.beforeSidebarClose.emit();
            return;
        }
        this.irSidebarToggle.emit(this.open);
    }
    /**
     * Applies inline styles defined in `sidebarStyles` to the sidebar container.
     */
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            index.h("div", { key: '4f9d562d7c53082a216c3428e669a8b82f3b98dc', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: '3214e55d96815bd88dbe5e4cb29d8ed257ab30ce', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: '37de5e7cff09356c7c31af51053a3276dd46b5d5', class: 'sidebar-title' }, index.h("p", { key: '7a83c2a0e87858ef605968f6fd8c1e64ec4e94ed', class: 'p-0 m-0' }, this.label), index.h("div", { key: 'c061cc8433ef1413f0a34baeec140e982a7e95fb', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: 'e33485e21be2bbc718a081a1950fd79f0b3a2734', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: 'c59e9b87bc2ab6daa8cf724fd50f0731c250d057', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'a6e9b61ca7461c36ebbd1d1987f64474be642df8', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: '82ff0d8683bd615cc5c59f09f11cd5f12e706d81', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"],
        "open": ["handleOpenChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

exports.ir_sidebar = IrSidebar;

//# sourceMappingURL=ir-sidebar.cjs.entry.js.map