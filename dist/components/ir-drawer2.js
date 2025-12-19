import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as OverflowAdd, O as OverflowRelease } from './OverflowLock.js';

/**
 * SlotManager - A reusable service for managing slot state in Stencil components
 *
 * Usage:
 * 1. Create an instance in your component
 * 2. Initialize in componentWillLoad()
 * 3. Setup observers in componentDidLoad()
 * 4. Cleanup in disconnectedCallback()
 * 5. Check slot state using hasSlot()
 */
class SlotManager {
    hostElement;
    slotNames;
    onStateChange;
    slotState = new Map();
    slotObserver = null;
    isInitialized = false;
    constructor(hostElement, slotNames, onStateChange) {
        this.hostElement = hostElement;
        this.slotNames = slotNames;
        this.onStateChange = onStateChange;
    }
    /**
     * Initialize the slot state. Call this in componentWillLoad()
     */
    initialize() {
        this.updateSlotState();
        this.isInitialized = true;
    }
    /**
     * Setup slot listeners and observers. Call this in componentDidLoad()
     */
    setupListeners() {
        if (!this.isInitialized) {
            console.warn('SlotManager: initialize() must be called before setupListeners()');
            return;
        }
        // Listen to slotchange events
        this.hostElement.addEventListener('slotchange', this.handleSlotChange);
        // Use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    /**
     * Remove all listeners and cleanup. Call this in disconnectedCallback()
     */
    destroy() {
        this.hostElement.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
        this.slotObserver = null;
        this.slotState.clear();
        this.isInitialized = false;
    }
    /**
     * Check if a specific slot has content
     */
    hasSlot(name) {
        return this.slotState.get(name) ?? false;
    }
    /**
     * Get all slot states as a Map
     */
    getSlotState() {
        return this.slotState;
    }
    /**
     * Get all slot names that have content
     */
    getActiveSlots() {
        return Array.from(this.slotState.entries())
            .filter(([_, hasContent]) => hasContent)
            .map(([name]) => name);
    }
    /**
     * Manually trigger a slot state update
     */
    refresh() {
        this.updateSlotState();
    }
    handleSlotChange = () => {
        this.updateSlotState();
        this.onStateChange?.();
    };
    updateSlotState() {
        const newState = new Map();
        this.slotNames.forEach(name => {
            newState.set(name, this.checkSlotHasContent(name));
        });
        this.slotState = newState;
    }
    checkSlotHasContent(name) {
        return !!this.hostElement.querySelector(`[slot="${name}"]`);
    }
}
/**
 * Convenience function to create a SlotManager with automatic lifecycle management
 * Returns helper methods that can be called directly in lifecycle hooks
 */
function createSlotManager(hostElement, slotNames, onStateChange) {
    const manager = new SlotManager(hostElement, slotNames, onStateChange);
    return {
        manager,
        // Lifecycle hooks
        initialize: () => manager.initialize(),
        setupListeners: () => manager.setupListeners(),
        destroy: () => manager.destroy(),
        // Query methods
        hasSlot: (name) => manager.hasSlot(name),
        getSlotState: () => manager.getSlotState(),
        getActiveSlots: () => manager.getActiveSlots(),
        refresh: () => manager.refresh(),
    };
}

const irDrawerCss = ".ir__drawer{text-align:left !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-left:var(--ir-drawer-padding-left, var(--spacing));padding-right:var(--ir-drawer-padding-right, var(--spacing));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:0.5rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}";
const IrDrawerStyle0 = irDrawerCss;

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
const IrDrawer = /*@__PURE__*/ proxyCustomElement(class IrDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.drawerShow = createEvent(this, "drawerShow", 7);
        this.drawerHide = createEvent(this, "drawerHide", 7);
    }
    get el() { return this; }
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label;
    /** The direction from which the drawer will open. */
    placement;
    /** Disables the header. This will also remove the default close button. */
    withoutHeader;
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss = true;
    slotStateVersion = 0; // Trigger re-renders when slots change
    /** Emitted when the drawer opens. */
    drawerShow;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    // Create slot manager with state change callback
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    onDrawerShow = (event) => {
        this.emitDrawerShow(event);
    };
    onDrawerHide = (event) => {
        this.emitDrawerHide(event);
    };
    componentWillLoad() {
        // Initialize slot manager with host element
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    emitDrawerShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.drawerShow.emit();
    }
    emitDrawerHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.drawerHide.emit(e.detail);
    }
    render() {
        return (h("wa-drawer", { key: '65d4e552f955dc3bc9ee21c38da63b134c2c15a5', "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotManager.hasSlot('header-actions') && h("slot", { key: '1c0cbfcf7502f81d50c8dc4283b76ca5f44b0c4d', name: "header-actions", slot: "header-actions" }), this.slotManager.hasSlot('label') && h("slot", { key: '15bf6be1c4776f6e15305636f07bc388098aa037', name: "label", slot: "label" }), h("slot", { key: 'ad62cd4694abca1056272c8d3cfd722d53c9582a' }), this.slotManager.hasSlot('footer') && h("slot", { key: '77438de1ec6714ec4c58fed5894edd79552b94b3', name: "footer", slot: "footer" })));
    }
    static get style() { return IrDrawerStyle0; }
}, [1, "ir-drawer", {
        "open": [516],
        "label": [513],
        "placement": [513],
        "withoutHeader": [516, "without-header"],
        "lightDismiss": [516, "light-dismiss"],
        "slotStateVersion": [32]
    }]);
__decorate([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDrawer);
            }
            break;
    } });
}

export { IrDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-drawer2.js.map