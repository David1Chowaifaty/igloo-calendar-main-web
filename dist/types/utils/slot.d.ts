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
export declare class SlotManager {
    private readonly hostElement;
    private readonly slotNames;
    private readonly onStateChange?;
    private slotState;
    private slotObserver;
    private isInitialized;
    constructor(hostElement: HTMLElement, slotNames: readonly string[], onStateChange?: () => void);
    /**
     * Initialize the slot state. Call this in componentWillLoad()
     */
    initialize(): void;
    /**
     * Setup slot listeners and observers. Call this in componentDidLoad()
     */
    setupListeners(): void;
    /**
     * Remove all listeners and cleanup. Call this in disconnectedCallback()
     */
    destroy(): void;
    /**
     * Check if a specific slot has content
     */
    hasSlot(name: string): boolean;
    /**
     * Get all slot states as a Map
     */
    getSlotState(): ReadonlyMap<string, boolean>;
    /**
     * Get all slot names that have content
     */
    getActiveSlots(): string[];
    /**
     * Manually trigger a slot state update
     */
    refresh(): void;
    private handleSlotChange;
    private updateSlotState;
    private checkSlotHasContent;
}
/**
 * Convenience function to create a SlotManager with automatic lifecycle management
 * Returns helper methods that can be called directly in lifecycle hooks
 */
export declare function createSlotManager(hostElement: HTMLElement, slotNames: readonly string[], onStateChange?: () => void): {
    manager: SlotManager;
    initialize: () => void;
    setupListeners: () => void;
    destroy: () => void;
    hasSlot: (name: string) => boolean;
    getSlotState: () => ReadonlyMap<string, boolean>;
    getActiveSlots: () => string[];
    refresh: () => void;
};
