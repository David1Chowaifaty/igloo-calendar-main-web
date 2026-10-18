'use strict';

var index = require('./index-IDeZZwEK.js');
var utils = require('./utils-ZKsQb8eV.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');
require('./t-CqJPQrfm.js');

const irSidebarCss = () => `.backdrop{position:fixed;top:0;inset-inline-start:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;inset-inline-end:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-inline-start:var(--ir-sidebar-padding-inline-start, var(--ir-sidebar-padding-left, unset));padding-inline-end:var(--ir-sidebar-padding-inline-end, var(--ir-sidebar-padding-right, unset))}.sidebar-right.active{inset-inline-end:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;inset-inline-start:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-inline-start:var(--ir-sidebar-padding-inline-start, var(--ir-sidebar-padding-left, unset));padding-inline-end:var(--ir-sidebar-padding-inline-end, var(--ir-sidebar-padding-right, unset))}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{inset-inline-start:0;overflow-y:auto}.close{position:absolute;top:0.5rem;inset-inline-end:1rem;width:1rem;height:1rem;cursor:pointer}`;

const IrSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle");
        this.beforeSidebarClose = index.createEvent(this, "beforeSidebarClose");
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
            index.h("div", { key: 'ed30114785f4301c091abaf2e8f194058a972d21', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: '7cfe968618dc03c55a0f5ac7036a2199fb5e3013', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: '1894c0d9e59f0edcc22beab0b74e53251a356a44', class: 'sidebar-title' }, index.h("p", { key: 'd0ae542e3bbf344d5ca4725f816798e20313ddca', class: 'p-0 m-0' }, this.label), index.h("div", { key: '5dc9c91fbc9a317dc72d51378d31a7aac1bef5bb', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: '7676e0fa2303f7c0da392f983d44a4c7401ba2de', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: '675bf83dd066d868e768055e40abe90d42cfafae', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'f6efef5b4bfd859a17680d1da0bb3e1ebe07f12d', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: '7f702f2cfa88a95dba8de8309b01946c9c558389', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": [{
                "handleSidebarStylesChange": 0
            }],
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrSidebar.style = irSidebarCss();

exports.ir_sidebar = IrSidebar;
