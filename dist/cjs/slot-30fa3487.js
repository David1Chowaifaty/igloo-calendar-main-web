'use strict';

const index = require('./index-35d81173.js');

/**
 * Call this function as soon as the click outside of annotated method's host is done.
 * @example
```
@ClickOutside()
callback() {
  // this will run when click outside of element (host component) is done.
}
```
 */
function ClickOutside() {
    return (proto, methodName, descriptor) => {
        const originalConnected = proto.connectedCallback;
        const originalDisconnected = proto.disconnectedCallback;
        const originalDidUnload = proto.componentDidUnload;
        proto.connectedCallback = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                const callback = this[methodName]?.bind(this);
                if (callback) {
                    registerClickOutside(this, host, callback);
                }
            }
            return originalConnected?.apply(this, args);
        };
        proto.disconnectedCallback = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDisconnected?.apply(this, args);
        };
        proto.componentDidUnload = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDidUnload?.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
function registerClickOutside(component, element, callback) {
    if (!element || !isDomAvailable())
        return;
    if (element.__irClickOutsideCleanup__)
        return;
    const handler = (event) => {
        if (isEventInsideHost(element, event)) {
            return;
        }
        callback.call(component, event);
    };
    window.addEventListener('click', handler, true);
    element.__irClickOutsideCleanup__ = () => {
        window.removeEventListener('click', handler, true);
    };
}
function unregisterClickOutside(element) {
    if (!element || !isDomAvailable())
        return;
    element.__irClickOutsideCleanup__?.();
    delete element.__irClickOutsideCleanup__;
}
function getClickOutsideHost(instance) {
    if (!isDomAvailable())
        return null;
    try {
        return index.getElement(instance);
    }
    catch {
        return null;
    }
}
function isEventInsideHost(host, event) {
    if (!event)
        return false;
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    if (Array.isArray(path) && path.includes(host)) {
        return true;
    }
    const target = event.target;
    if (!target)
        return false;
    if (host === target)
        return true;
    if (typeof host.contains === 'function' && host.contains(target))
        return true;
    return !!host.shadowRoot?.contains(target);
}
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

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
        return Array.from(this.hostElement.children).some(child => child.getAttribute('slot') === name);
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

exports.ClickOutside = ClickOutside;
exports.createSlotManager = createSlotManager;

//# sourceMappingURL=slot-30fa3487.js.map