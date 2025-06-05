import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSidebar {
    el: HTMLIrSidebarElement;
    /**
     * Identifier for the sidebar instance.
     */
    name: string;
    /**
     * Which side of the screen the sidebar appears on.
     * Options: `'left'` or `'right'`.
     */
    side: 'right' | 'left';
    /**
     * Whether to show the close (X) button in the sidebar header.
     */
    showCloseButton: boolean;
    /**
     * Whether the sidebar is open.
     * Can be used with two-way binding.
     */
    open: boolean;
    /**
     * Inline styles applied to the sidebar container.
     */
    sidebarStyles: Partial<CSSStyleDeclaration>;
    /**
     * Label text displayed in the sidebar header.
     */
    label: string;
    /**
     * Prevents the sidebar from closing when `toggleSidebar()` is called.
     * When true, emits `beforeSidebarClose` instead of toggling.
     */
    preventClose: boolean;
    /**
     * Event emitted when the sidebar is toggled open/closed.
     * Emits the current `open` state.
     */
    irSidebarToggle: EventEmitter;
    /**
     * Event emitted *before* the sidebar attempts to close,
     * but only if `preventClose` is set to true.
     */
    beforeSidebarClose: EventEmitter;
    private sidebarRef;
    componentDidLoad(): void;
    handleSidebarStylesChange(): void;
    handleOpenChange(newValue: boolean, oldValue: boolean): void;
    handleKeyDown(e: KeyboardEvent): Promise<void>;
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
    toggleSidebar(): Promise<void>;
    /**
     * Applies inline styles defined in `sidebarStyles` to the sidebar container.
     */
    private applyStyles;
    render(): any[];
}
