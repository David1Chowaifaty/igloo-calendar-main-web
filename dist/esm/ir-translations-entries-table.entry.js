import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { c as createColumnHelper, f as flexRender, u as useTable, g as getCoreRowModel } from './useTable-CXkYMQoa.js';
import { h as hasValue, f as setCopiedEntry } from './utils-Btr0LXV6.js';
import './types-vTVnj3si.js';
import './locales.store-CXJn6ls-.js';
import { t } from './t-CHjay2ar.js';
import { a as inlineSign, i as isRtlLanguage } from './direction-h66wLQy4.js';
import { h as showToast } from './utils-LYNfNy1h.js';
import './types-BWKgfE54.js';
import './moment-Mki5YqAR.js';
import './calendar-data-CiYzaNK0.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './ir-date-tLkbTntq.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irTranslationsEntriesTableCss = () => `.sc-ir-translations-entries-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-translations-entries-table{overflow-x:auto}.table--container.sc-ir-translations-entries-table,.data-table.sc-ir-translations-entries-table{height:100%}.ir-table-row.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-translations-entries-table tbody.sc-ir-translations-entries-table tr.sc-ir-translations-entries-table:last-child>td.sc-ir-translations-entries-table{border-bottom:0 !important}.cell--align-start.sc-ir-translations-entries-table{text-align:start !important}.cell--align-center.sc-ir-translations-entries-table{text-align:center !important}.cell--align-end.sc-ir-translations-entries-table{text-align:end !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-translations-entries-table,.ir-table-row.sc-ir-translations-entries-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-translations-entries-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-translations-entries-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-translations-entries-table svg.sc-ir-translations-entries-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-translations-entries-table .empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-translations-entries-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-translations-entries-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-translations-entries-table-h{--ir-cell-padding:0.55rem 0.75rem;--entries-table-font-size:var(--wa-font-size-s);--entries-table-key-width:220px;display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.--compact.sc-ir-translations-entries-table-h{--ir-cell-padding:0.3rem 0.6rem;--entries-table-font-size:var(--wa-font-size-xs, 0.8125rem)}.--empty.sc-ir-translations-entries-table-h{padding:1.5rem 1rem}.table--container.sc-ir-translations-entries-table{min-height:240px;max-height:50vh;overflow-x:auto;overflow-y:auto;overscroll-behavior-x:contain}@media (min-width: 1024px){.table--container.sc-ir-translations-entries-table{max-height:75vh}}.entries-table__table.sc-ir-translations-entries-table{width:100%;table-layout:fixed;font-size:var(--entries-table-font-size)}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{position:sticky;top:0;z-index:3;color:var(--wa-color-text-quiet);font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;white-space:nowrap}.entries-table__col--drag.sc-ir-translations-entries-table{width:32px}.entries-table__col--key.sc-ir-translations-entries-table{width:var(--entries-table-key-width)}.entries-table__col--notes.sc-ir-translations-entries-table{width:180px}.entries-table__col--lang.sc-ir-translations-entries-table{width:200px}.entries-table__col--actions.sc-ir-translations-entries-table{width:44px}@media (max-width: 575px){.sc-ir-translations-entries-table-h{--entries-table-key-width:150px}}.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:4}.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:4}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__key-head.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:5}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__source-head.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:5}.last__row.sc-ir-translations-entries-table{height:100%}.entries-table__key-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table::after,.entries-table__source-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table::after{content:'';position:absolute;inset-block:0;inset-inline-end:0;width:1px;background:var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__key-container.sc-ir-translations-entries-table{display:flex;align-items:center}.entries-table__key-icon.sc-ir-translations-entries-table{visibility:hidden}.entries-table__key.sc-ir-translations-entries-table:hover .entries-table__key-icon.sc-ir-translations-entries-table{visibility:visible}.entries-table__key-hidden-mark.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;font-size:0.8em;color:var(--wa-color-text-quiet)}.entries-table__dup-badge.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:0.35rem;padding-block:0.05rem;padding-inline:0.3rem;border:1px solid var(--wa-color-warning-border-quiet, #fde68a);border-radius:var(--wa-border-radius-s);background:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet, #92400e);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;line-height:1.2;cursor:help}.entries-table__key-text.sc-ir-translations-entries-table{flex:1;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace);font-size:0.95em;color:var(--wa-color-text-normal)}.ir-table-row.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{padding:0;text-align:center}.entries-table__drag-handle.sc-ir-translations-entries-table{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:var(--ir-cell-padding);color:var(--wa-color-text-quiet);cursor:grab}.entries-table__drag-handle.sc-ir-translations-entries-table:active{cursor:grabbing}.entries-table__drag-handle.--disabled.sc-ir-translations-entries-table{color:var(--wa-color-neutral-border-normal, #cbd5e1);cursor:not-allowed}.ir-table-row.entries-table__row--dragging.sc-ir-translations-entries-table{opacity:0.5}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-warning-fill-quiet, #fef3c7)}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{box-shadow:inset 3px 0 0 var(--wa-color-warning-fill-loud, #f59e0b)}.ir-table-row.entries-table__row--hidden.sc-ir-translations-entries-table{opacity:0.6}.ir-table-row.entries-table__row--deleted.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.entries-table__lang-head.sc-ir-translations-entries-table{display:inline-flex;align-items:center;gap:0.35rem}.entries-table__lang-code.sc-ir-translations-entries-table{text-decoration:none;cursor:help}.entries-table__lang-source.sc-ir-translations-entries-table{padding:0.05rem 0.3rem;font-size:0.6875rem;font-weight:var(--wa-font-weight-normal, 400);text-transform:lowercase;letter-spacing:0;color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}.entries-table__sr-only.sc-ir-translations-entries-table{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__value-cel.sc-ir-translations-entries-table{height:min-content !important}.ir-table-row.sc-ir-translations-entries-table td.entries-table__value-cell.sc-ir-translations-entries-table{padding:0 !important}.entries-table__cell-display.sc-ir-translations-entries-table{display:block;width:100%;padding:var(--ir-cell-padding);text-align:start;color:inherit;cursor:text}.entries-table__cell-display.sc-ir-translations-entries-table:hover{box-shadow:inset 0 0 0 1px var(--wa-color-neutral-border-normal, #cbd5e1)}.entries-table__table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:-2px}.entries-table__table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table:focus-visible .entries-table__cell-display.sc-ir-translations-entries-table{box-shadow:inset 0 0 0 1px var(--wa-color-neutral-border-normal, #cbd5e1)}.entries-table__cell-text.sc-ir-translations-entries-table{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__cell-missing.sc-ir-translations-entries-table{display:inline-block;padding:0.05rem 0.35rem;font-size:0.85em;color:var(--wa-color-warning-on-quiet, #92400e);background:var(--wa-color-warning-fill-quiet, #fef3c7);border-radius:var(--wa-border-radius-s)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;cursor:default;color:var(--wa-color-text-quiet)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table:hover{box-shadow:none}.entries-table__cell-lock.sc-ir-translations-entries-table{flex:0 0 auto;font-size:0.8em;opacity:0.6}.entries-table__cell-input.sc-ir-translations-entries-table{display:block;width:100%}.entries-table__cell-input.sc-ir-translations-entries-table::part(base),.entries-table__cell-input.sc-ir-translations-entries-table [part~="base"]{border-radius:var(--wa-border-radius-s)}.entries-table__cell-input.sc-ir-translations-entries-table::part(label),.entries-table__cell-input.sc-ir-translations-entries-table [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__actions.sc-ir-translations-entries-table{text-align:center}.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:0.45;transition:opacity var(--wa-transition-fast, 150ms) ease}.ir-table-row.sc-ir-translations-entries-table:hover .entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table,.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table:focus-within{opacity:1}@media (hover: none){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:1}}@media (prefers-reduced-motion: reduce){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{transition:none}}.entries-table__tooltip.sc-ir-translations-entries-table{--max-width:22rem}.entries-table__tooltip.sc-ir-translations-entries-table::part(body),.entries-table__tooltip.sc-ir-translations-entries-table [part~="body"]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;overflow-wrap:anywhere}.entries-table__group-row.sc-ir-translations-entries-table td.entries-table__group-cell.sc-ir-translations-entries-table{padding:0;background:var(--wa-color-neutral-fill-quiet);border-block-start:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-block-end:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__group-toggle.sc-ir-translations-entries-table{display:flex;align-items:center;gap:0.5rem;width:100%;padding-block:0.4rem;padding-inline:0.6rem;border:none;background:transparent;font:inherit;color:var(--wa-color-text-normal);cursor:pointer;text-align:start}.entries-table__group-toggle.sc-ir-translations-entries-table:hover,.entries-table__group-toggle.sc-ir-translations-entries-table:focus-visible{background:var(--wa-color-neutral-fill-normal, rgba(0, 0, 0, 0.04))}.entries-table__group-chevron.sc-ir-translations-entries-table{flex:0 0 auto;color:var(--wa-color-text-quiet);transition:rotate var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease);rotate:0deg}.entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:-90deg}.sc-ir-translations-entries-table-h:dir(rtl) .entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:90deg}.entries-table__group-name.sc-ir-translations-entries-table{font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__group-count.sc-ir-translations-entries-table{margin-inline-start:auto;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;white-space:nowrap}@media (prefers-reduced-motion: reduce){.entries-table__group-chevron.sc-ir-translations-entries-table{transition:none}}`;

/** Rows a PageUp/PageDown jumps. */
const PAGE_ROWS = 10;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const IrTranslationsEntriesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.entryChange = createEvent(this, "entryChange");
        this.editEntry = createEvent(this, "editEntry");
        this.duplicateEntry = createEvent(this, "duplicateEntry");
        this.moveEntry = createEvent(this, "moveEntry");
        this.deleteEntry = createEvent(this, "deleteEntry");
        this.clearFilters = createEvent(this, "clearFilters");
        this.reorderEntries = createEvent(this, "reorderEntries");
        this.toggleVisibility = createEvent(this, "toggleVisibility");
    }
    /** Rows to render, already filtered by the parent. */
    entries = [];
    /** Column order — the source language is expected first. */
    languages = [];
    /** Code of the reference language, marked in the header. */
    sourceCode;
    compact = true;
    /** True when the parent's filters hid every row, so the empty state can say so. */
    filtered = false;
    /** False while a search/status filter is active — reordering a filtered subset can't map cleanly onto the full list. */
    reorderEnabled = true;
    /** Ids of rows whose position differs from the last-loaded/saved order — highlighted while a reorder is pending. */
    changedEntryIds = new Set();
    /** True when `entries` span several setup tables — rows are then broken up by collapsible per-table header rows. */
    groupByTable = false;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge beside their key. */
    duplicates = new Map();
    /** Whether the notes column is included at all. */
    showNotes = true;
    entryChange;
    editEntry;
    duplicateEntry;
    /** "Move to table…" — the parent opens the move dialog for this row. */
    moveEntry;
    deleteEntry;
    clearFilters;
    reorderEntries;
    toggleVisibility;
    /** `${entryId}|${columnId}` of the open editor, or null. The only edit state that needs a re-render. */
    editingKey = null;
    /** Working copy of `entries`, live-reordered while a drag is in progress. */
    dragEntries = [];
    draggingId = null;
    /** `.table--container`'s current content-box width — language columns stretch to fill it instead of sitting fixed. */
    containerWidth = 0;
    /** Table names whose group is currently folded shut. Only meaningful while `groupByTable` is on. */
    collapsedTables = new Set();
    /**
     * The live edit. Deliberately not @State — keystrokes must not re-render the grid,
     * and the object identity is what makes a commit idempotent (see `EditSession`).
     */
    editSession = null;
    /**
     * The grid's single tab stop, as {visible row, navigable column} indices. Also not
     * @State: arrow keys move it by swapping `tabindex` on two `<td>`s directly, so
     * walking a 2,300-cell grid costs no re-renders at all.
     */
    activeCell = { row: 0, col: 0 };
    /** What to focus after the next render — set by anything that opens or closes an editor. */
    pendingFocus = null;
    /**
     * The session a pending 'input' focus was scheduled for. Typing faster than the
     * screen refreshes can queue two of these in one frame, and the first must not
     * declare the second one's editor focused — that would hand the keys back to an
     * input that doesn't have them yet, and they'd be lost.
     */
    pendingFocusSession = null;
    containerRef;
    containerResizeObserver;
    /** Latest pointer Y during a drag, read by the auto-scroll loop — not @State, it'd re-render on every dragover. */
    dragClientY = null;
    autoScrollRaf = null;
    /**
     * One tooltip serves the whole grid. Anchoring per element would mean a
     * `wa-tooltip` per cell — ~2,300 of them in the cross-table view — so hovers are
     * delegated and this single instance is re-anchored instead.
     */
    tooltipRef;
    tooltipTimer;
    componentWillLoad() {
        this.dragEntries = this.entries;
    }
    componentDidLoad() {
        if (this.containerRef) {
            this.containerResizeObserver = new ResizeObserver(entries => {
                const width = entries[0]?.contentRect.width;
                if (width) {
                    this.containerWidth = width;
                }
            });
            this.containerResizeObserver.observe(this.containerRef);
        }
    }
    disconnectedCallback() {
        this.containerResizeObserver?.disconnect();
        this.stopAutoScroll();
        clearTimeout(this.tooltipTimer);
    }
    // #region Shared tooltip
    /** Re-points the shared tooltip at whatever `[data-tooltip]` element the pointer is over. */
    handleTooltipOver = (event) => {
        const target = event.target?.closest?.('[data-tooltip]');
        this.showTooltipFor(target);
    };
    /** Shared by hover and by keyboard focus, so truncated cell text is readable either way. */
    showTooltipFor(target) {
        const tooltip = this.tooltipRef;
        if (!tooltip) {
            return;
        }
        const text = target?.dataset.tooltip;
        if (!target || !text) {
            this.hideTooltip();
            return;
        }
        if (tooltip.anchor === target && tooltip.open) {
            return;
        }
        // Re-anchoring a visible tooltip makes the bubble skate across the grid, so it
        // always closes first and re-opens on the new anchor after the usual hover beat.
        clearTimeout(this.tooltipTimer);
        tooltip.open = false;
        this.tooltipTimer = setTimeout(() => {
            tooltip.textContent = text;
            tooltip.anchor = target;
            tooltip.open = true;
        }, 250);
    }
    hideTooltip = () => {
        clearTimeout(this.tooltipTimer);
        if (this.tooltipRef) {
            this.tooltipRef.open = false;
        }
    };
    // #endregion
    /** A drag in progress owns row order locally — only resync from the parent once it's idle. */
    handleEntriesChange(newEntries) {
        if (!this.draggingId) {
            this.dragEntries = newEntries;
        }
    }
    componentDidRender() {
        this.syncActionTabStops();
        const pending = this.pendingFocus;
        if (!pending) {
            return;
        }
        this.pendingFocus = null;
        // wa-input's shadow DOM hasn't necessarily finished its first Lit render
        // synchronously after insertion, so focus() can run before the internal
        // <input> exists — defer past that render.
        requestAnimationFrame(() => {
            if (pending === 'cell') {
                this.cellElement(this.activeCell.row, this.activeCell.col)?.focus();
                return;
            }
            const session = this.pendingFocusSession;
            // Superseded by a later edit, or already handled by a pass queued alongside this one.
            if (!session || session !== this.editSession) {
                return;
            }
            const input = this.cellElement(this.activeCell.row, this.activeCell.col)?.querySelector('wa-input');
            if (!input) {
                // This frame ran ahead of the render that creates the input; the pass queued
                // by that render finds it. Leave the session pending for it.
                return;
            }
            this.pendingFocusSession = null;
            input.focus();
            session.focused = true;
            if (session.seeded) {
                // Editing began by typing over the cell: that first character is the value now.
                session.seeded = false;
                input.value = session.draft;
                input.input?.setSelectionRange(session.draft.length, session.draft.length);
                return;
            }
            // focus() alone leaves the caret at position 0, so typing would prepend.
            if (session.select === 'all') {
                input.input?.select();
            }
            else {
                input.input?.setSelectionRange(session.draft.length, session.draft.length);
            }
        });
    }
    /**
     * `ir-custom-button` renders a `wa-button` of its own, which would put a tab stop
     * in every single row — and the grid is meant to be one tab stop, entered with Tab
     * and walked with arrows. The trigger stays reachable through its own cell (Enter
     * opens the menu) and by mouse; it just isn't tabbable any more.
     *
     * Deferred a frame because child components render after this one, so the
     * `wa-button` doesn't exist yet on a first paint. `:not([tabindex])` keeps the
     * sweep idempotent across re-renders.
     */
    syncActionTabStops() {
        requestAnimationFrame(() => {
            this.containerRef?.querySelectorAll('td.entries-table__actions wa-button:not([tabindex])').forEach(button => button.setAttribute('tabindex', '-1'));
        });
    }
    // #region Grid geometry
    /** Every column arrow keys can land on, in visual order. */
    get navColumns() {
        return [
            { id: 'key', kind: 'key' },
            ...(this.showNotes ? [{ id: 'notes', kind: 'note' }] : []),
            ...this.languages.map(language => ({ id: language.code, kind: 'lang', code: language.code })),
            { id: 'actions', kind: 'actions' },
        ];
    }
    /**
     * Rows actually on screen. Grouped mode drops the rows of folded tables, and
     * navigation indices have to agree with what's rendered or arrow keys would
     * step into cells that don't exist.
     */
    get visibleEntries() {
        if (!this.groupByTable || this.collapsedTables.size === 0) {
            return this.dragEntries;
        }
        return this.dragEntries.filter(entry => !this.collapsedTables.has(entry.tableName ?? ''));
    }
    cellValue(entry, column) {
        return column.kind === 'note' ? (entry.meta?.notes ?? '') : (entry.values[column.code] ?? '');
    }
    /** Key and Actions are navigable but never editable; system-protected rows lock their values. */
    isCellEditable(entry, column) {
        return (column.kind === 'note' || column.kind === 'lang') && entry.meta?.isUpdateable !== false;
    }
    cellElement(row, col) {
        return this.containerRef?.querySelector(`td[data-row="${row}"][data-col="${col}"]`) ?? null;
    }
    /** Rows and columns come and go with filters — without this the single tab stop could end up on a cell that no longer exists. */
    clampActiveCell() {
        this.activeCell = {
            row: clamp(this.activeCell.row, 0, Math.max(0, this.visibleEntries.length - 1)),
            col: clamp(this.activeCell.col, 0, Math.max(0, this.navColumns.length - 1)),
        };
    }
    // #endregion
    // #region Editing
    /**
     * `select` follows the spreadsheet convention: arriving on a cell from the keyboard
     * selects its whole value so typing replaces it, while clicking into one puts the
     * caret after the text so a typo can be fixed without retyping the cell.
     */
    startEditing(entry, column, options = {}) {
        if (!this.isCellEditable(entry, column)) {
            return;
        }
        const { initial, select = 'all' } = options;
        const original = this.cellValue(entry, column);
        this.editSession = {
            key: `${entry.id}|${column.id}`,
            entryId: entry.id,
            columnId: column.id,
            field: column.kind === 'note' ? 'note' : 'lang',
            code: column.code,
            original,
            draft: initial ?? original,
            committed: false,
            seeded: initial !== undefined,
            select,
            focused: false,
        };
        this.editingKey = this.editSession.key;
        this.pendingFocus = 'input';
        this.pendingFocusSession = this.editSession;
        // Park focus on the cell right now, before the render that creates the input.
        // Otherwise focus sits on the outgoing input (about to be removed) or falls to
        // <body> when it is, and anything typed in that gap lands where this component
        // can't hear it. On the cell, the grid handler buffers it into this session.
        this.cellElement(this.activeCell.row, this.activeCell.col)?.focus({ preventScroll: true });
    }
    /**
     * Saves a session at most once, and only when its value actually moved. Each
     * emit is a live `Edit_Setup` write plus a toast in the manager, so flagging
     * `committed` *before* emitting matters: the trailing `change`/`blur` from the
     * input this commit is about to replace lands right back here.
     */
    commitSession(session) {
        if (!session || session.committed) {
            return;
        }
        session.committed = true;
        if (session.draft === session.original) {
            return;
        }
        // Read the row back out rather than closing over it — the parent patches
        // `entries` optimistically on every commit, so a cell edited twice in a row
        // must build on the patched version, not the one this editor opened over.
        const entry = this.dragEntries.find(item => item.id === session.entryId);
        if (!entry) {
            return;
        }
        const newEntry = session.field === 'note' ? { ...entry, meta: { ...entry.meta, notes: session.draft } } : { ...entry, values: { ...entry.values, [session.code]: session.draft } };
        this.entryChange.emit(newEntry);
    }
    closeEditor(focusCell = true) {
        this.editSession = null;
        this.editingKey = null;
        this.pendingFocusSession = null;
        if (focusCell) {
            this.pendingFocus = 'cell';
        }
    }
    /** Escape: discard the draft, and make sure the trailing blur can't resurrect it. */
    cancelEditing(session) {
        session.committed = true;
        this.closeEditor();
    }
    handleEditorBlur(session) {
        this.commitSession(session);
        // Keyboard navigation has already pointed `editingKey` at the next cell by the
        // time this fires, so only a genuine focus-out should close the editor.
        if (this.editingKey === session.key) {
            this.editSession = null;
            this.editingKey = null;
        }
    }
    /**
     * The three keys that end an edit. Shared with the cell handler, because a fast
     * Enter-Enter or Tab-Tab can land before the next editor's input has taken focus
     * and those keystrokes have to keep working rather than falling on the floor.
     * Returns whether the key was one of them.
     */
    handleEditKey(event, session) {
        if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelEditing(session);
            return true;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            this.commitSession(session);
            this.moveEditing(session, event.shiftKey ? -1 : 1, 0);
            return true;
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            this.commitSession(session);
            this.moveEditing(session, 0, event.shiftKey ? -1 : 1);
            return true;
        }
        return false;
    }
    handleEditorKeyDown(event, session) {
        if (this.handleEditKey(event, session)) {
            // The cell below must not handle this a second time.
            event.stopPropagation();
        }
    }
    /**
     * Moves the open editor through the grid, wrapping across row ends so Tab walks
     * the whole table the way a spreadsheet does. Key/Actions columns and locked
     * rows are stepped over rather than stopped on, and running off either end
     * leaves focus parked on the cell it started from instead of on nothing.
     */
    moveEditing(session, rowDelta, colDelta) {
        const rows = this.visibleEntries;
        const columns = this.navColumns;
        const fromRow = rows.findIndex(entry => entry.id === session.entryId);
        const fromCol = columns.findIndex(column => column.id === session.columnId);
        if (fromRow === -1 || fromCol === -1) {
            this.closeEditor(false);
            return;
        }
        let row = fromRow;
        let col = fromCol;
        const stop = () => {
            this.activeCell = { row: fromRow, col: fromCol };
            this.closeEditor();
        };
        // Bounded by the grid size — a table where every cell is locked must not spin.
        for (let step = 0; step <= rows.length * columns.length; step++) {
            if (colDelta !== 0) {
                col += colDelta;
                if (col >= columns.length) {
                    col = 0;
                    row += 1;
                }
                else if (col < 0) {
                    col = columns.length - 1;
                    row -= 1;
                }
            }
            else {
                row += rowDelta;
            }
            if (row < 0 || row >= rows.length) {
                stop();
                return;
            }
            if (this.isCellEditable(rows[row], columns[col])) {
                this.activeCell = { row, col };
                this.startEditing(rows[row], columns[col]);
                return;
            }
        }
        stop();
    }
    // #endregion
    // #region Keyboard navigation
    /** Moves the grid's single tab stop, swapping `tabindex` on the DOM directly so no re-render is needed. */
    focusCell(row, col) {
        const target = this.cellElement(row, col);
        if (!target) {
            return;
        }
        const previous = this.cellElement(this.activeCell.row, this.activeCell.col);
        if (previous && previous !== target) {
            previous.tabIndex = -1;
        }
        this.activeCell = { row, col };
        target.tabIndex = 0;
        // focus() would scroll the cell to the middle of the container; `nearest` keeps
        // the grid still unless the cell is genuinely off-screen.
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        this.showTooltipFor(target.querySelector('[data-tooltip]'));
    }
    /** Click, or Shift+Tab back into the grid — whatever the browser focused becomes the tab stop. */
    handleCellFocus(row, col, td) {
        if (this.activeCell.row === row && this.activeCell.col === col) {
            return;
        }
        const previous = this.cellElement(this.activeCell.row, this.activeCell.col);
        if (previous && previous !== td) {
            previous.tabIndex = -1;
        }
        this.activeCell = { row, col };
        td.tabIndex = 0;
    }
    activateCell(entry, column, row, col) {
        this.activeCell = { row, col };
        if (column.kind === 'key') {
            this.editEntry.emit(entry);
            return;
        }
        if (column.kind === 'actions') {
            const dropdown = this.cellElement(row, col)?.querySelector('wa-dropdown');
            if (dropdown) {
                dropdown.open = true;
            }
            return;
        }
        this.startEditing(entry, column);
    }
    /** A key that should open a cell and become its first character, rather than being a command. */
    isPrintable(event) {
        return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
    }
    handleGridKeyDown(event, row, col) {
        // While an editor is open it owns every key it cares about and stops those from
        // bubbling; anything that reaches here is meant for the text field.
        if (this.editingKey) {
            const pending = this.editSession;
            if (!pending || pending.focused) {
                return;
            }
            // The editor exists but its input is still a frame away from focus. Everything
            // typed in that gap belongs to it: without this, "Zed" would open the cell on
            // "Z" alone, and a fast Enter-Enter down a column would swallow the second one.
            if (this.handleEditKey(event, pending)) {
                return;
            }
            if (this.isPrintable(event)) {
                if (!pending.seeded) {
                    // Arriving on a cell from the keyboard selects its whole value, so the first
                    // character replaces it — exactly as it would with the input already focused.
                    pending.draft = pending.select === 'all' ? '' : pending.draft;
                    pending.seeded = true;
                }
                pending.draft += event.key;
                event.preventDefault();
            }
            return;
        }
        const rows = this.visibleEntries;
        const columns = this.navColumns;
        const entry = rows[row];
        const column = columns[col];
        if (!entry || !column) {
            return;
        }
        const lastRow = rows.length - 1;
        const lastCol = columns.length - 1;
        // Arrow keys are physical; the grid can be laid out either way (RTL languages,
        // RTL document), so the inline direction decides which one means "next column".
        const sign = inlineSign();
        const jumpsToEdge = event.ctrlKey || event.metaKey;
        switch (event.key) {
            case 'ArrowRight':
                this.focusCell(row, clamp(col + sign, 0, lastCol));
                break;
            case 'ArrowLeft':
                this.focusCell(row, clamp(col - sign, 0, lastCol));
                break;
            case 'ArrowDown':
                this.focusCell(clamp(row + 1, 0, lastRow), col);
                break;
            case 'ArrowUp':
                this.focusCell(clamp(row - 1, 0, lastRow), col);
                break;
            case 'Home':
                this.focusCell(jumpsToEdge ? 0 : row, 0);
                break;
            case 'End':
                this.focusCell(jumpsToEdge ? lastRow : row, lastCol);
                break;
            case 'PageDown':
                this.focusCell(clamp(row + PAGE_ROWS, 0, lastRow), col);
                break;
            case 'PageUp':
                this.focusCell(clamp(row - PAGE_ROWS, 0, lastRow), col);
                break;
            case 'Enter':
            case 'F2':
            case ' ':
                this.activateCell(entry, column, row, col);
                break;
            default:
                // Typing over a cell opens it on that character, as a spreadsheet would.
                if (this.isPrintable(event) && this.isCellEditable(entry, column)) {
                    this.activeCell = { row, col };
                    this.startEditing(entry, column, { initial: event.key });
                    break;
                }
                // Tab is deliberately not handled: the grid is one tab stop, so Tab leaves it.
                return;
        }
        event.preventDefault();
    }
    handleCellClick(entry, column, row, col) {
        this.activeCell = { row, col };
        if (column.kind === 'key') {
            this.editEntry.emit(entry);
            return;
        }
        // The dropdown's own trigger handles this; a click inside the open editor must
        // not tear down the session it lands in.
        if (column.kind === 'actions' || this.editingKey === `${entry.id}|${column.id}`) {
            return;
        }
        this.startEditing(entry, column, { select: 'end' });
    }
    // #endregion
    handleRowAction(action, entry) {
        switch (action) {
            case 'edit':
                this.editEntry.emit(entry);
                break;
            case 'duplicate':
                this.duplicateEntry.emit(entry);
                break;
            case 'copy':
                navigator.clipboard?.writeText(entry.key);
                break;
            case 'copy-row':
                // The clipboard gets only the key so it pastes cleanly into the Key
                // field; the translations wait in memory for the form to pick up.
                setCopiedEntry(entry);
                navigator.clipboard?.writeText(entry.key);
                showToast({ type: 'success', title: 'Row copied — paste its key into a new entry to reuse its translations.' });
                break;
            case 'move':
                this.moveEntry.emit(entry);
                break;
            case 'delete':
                this.deleteEntry.emit(entry);
                break;
            case 'toggle-visibility':
                this.toggleVisibility.emit(entry);
                break;
        }
    }
    // #region Drag and drop
    handleDragStart = (event, entry) => {
        if (!this.reorderEnabled) {
            event.preventDefault();
            return;
        }
        this.draggingId = entry.id;
        event.dataTransfer?.setData('text/plain', entry.id);
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
        }
        this.startAutoScroll();
    };
    /** Live-shifts the dragged row to the position of whichever row it's currently hovering. */
    handleDragOver = (event, overEntry) => {
        if (!this.reorderEnabled || !this.draggingId) {
            return;
        }
        event.preventDefault();
        this.dragClientY = event.clientY;
        if (this.draggingId === overEntry.id) {
            return;
        }
        const fromIndex = this.dragEntries.findIndex(entry => entry.id === this.draggingId);
        const toIndex = this.dragEntries.findIndex(entry => entry.id === overEntry.id);
        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
            return;
        }
        const next = [...this.dragEntries];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        this.dragEntries = next;
    };
    /** Catches dragover over the container's own padding/gaps (not just row cells) so the pointer Y stays fresh for auto-scroll. */
    handleContainerDragOver = (event) => {
        if (!this.reorderEnabled || !this.draggingId) {
            return;
        }
        event.preventDefault();
        this.dragClientY = event.clientY;
    };
    handleDragEnd = () => {
        const changed = this.dragEntries.length === this.entries.length && this.dragEntries.some((entry, index) => entry.id !== this.entries[index]?.id);
        if (changed) {
            this.reorderEntries.emit(this.dragEntries);
        }
        this.draggingId = null;
        this.stopAutoScroll();
    };
    /**
     * Native HTML5 drag has no scroll-follow of its own, so a row dragged past
     * the container's top/bottom edge would otherwise strand the user there —
     * nudge `.table--container`'s own scroll position each frame while the
     * pointer sits in either edge zone, faster the closer it is to the edge.
     */
    startAutoScroll() {
        if (this.autoScrollRaf !== null) {
            return;
        }
        const edgeZone = 48;
        const maxSpeed = 16;
        const tick = () => {
            if (!this.draggingId || this.dragClientY === null || !this.containerRef) {
                this.autoScrollRaf = null;
                return;
            }
            const rect = this.containerRef.getBoundingClientRect();
            let delta = 0;
            if (this.dragClientY < rect.top + edgeZone) {
                delta = -maxSpeed * Math.min(1, (rect.top + edgeZone - this.dragClientY) / edgeZone);
            }
            else if (this.dragClientY > rect.bottom - edgeZone) {
                delta = maxSpeed * Math.min(1, (this.dragClientY - (rect.bottom - edgeZone)) / edgeZone);
            }
            if (delta !== 0) {
                this.containerRef.scrollTop += delta;
            }
            this.autoScrollRaf = requestAnimationFrame(tick);
        };
        this.autoScrollRaf = requestAnimationFrame(tick);
    }
    stopAutoScroll() {
        if (this.autoScrollRaf !== null) {
            cancelAnimationFrame(this.autoScrollRaf);
            this.autoScrollRaf = null;
        }
        this.dragClientY = null;
    }
    renderDragHandle(entry) {
        const label = this.reorderEnabled ? `Reorder ${entry.key || 'key'}` : 'Clear filters to reorder';
        return (h("span", { class: `entries-table__drag-handle ${this.reorderEnabled ? '' : '--disabled'}`, draggable: this.reorderEnabled, "data-tooltip": label, "aria-label": label, onDragStart: (e) => this.handleDragStart(e, entry), onDragEnd: this.handleDragEnd }, h("wa-icon", { name: "grip-vertical", "aria-hidden": "true" })));
    }
    // #endregion
    renderValueCell(entry, column) {
        const isNote = column.kind === 'note';
        const language = isNote ? undefined : this.languages.find(item => item.code === column.code);
        const value = this.cellValue(entry, column);
        const session = this.editSession;
        const isEditing = !!session && session.key === `${entry.id}|${column.id}`;
        const ariaLabel = isNote ? `${entry.key} note` : `${language?.name} translation for ${entry.key || 'new entry'}`;
        const dir = !isNote && isRtlLanguage(column.code) ? 'rtl' : 'ltr';
        if (entry.meta?.isUpdateable === false) {
            return (h("span", { class: "entries-table__cell-display --readonly" }, hasValue(value) ? (h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (h("span", { class: "entries-table__cell-missing" }, "Missing")), h("wa-icon", { name: "lock", class: "entries-table__cell-lock", "aria-hidden": "true" })));
        }
        if (isEditing) {
            return (h("wa-input", { size: "s", value: value, class: "entries-table__cell-input", label: ariaLabel, autocomplete: "off", spellcheck: false, ref: el => {
                    // Not a JSX `dir` prop: every wa-* element declares `dir` as a
                    // non-reflecting Lit property, so Stencil would assign the property
                    // and the attribute directionality reads from would never be set.
                    el?.setAttribute('dir', dir);
                }, oninput: (e) => (session.draft = e.target.value), onKeyDown: (e) => this.handleEditorKeyDown(e, session), onblur: () => this.handleEditorBlur(session),
                // `change` fires on Enter *and* on blur, and neither is guaranteed once
                // the input is torn down mid-render — committing is idempotent per
                // session, so wiring both simply means the save can't be missed.
                onchange: () => this.commitSession(session) }));
        }
        return (h("span", { class: `entries-table__cell-display ${hasValue(value) ? '' : '--empty'}` }, hasValue(value) ? (h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (h("span", { class: "entries-table__cell-missing" }, "Missing"))));
    }
    /** The duplicate badge. Its tooltip rides the shared instance like every other hover target here. */
    renderDuplicateBadge(entry) {
        const duplicate = this.duplicates.get(entry.id);
        if (!duplicate) {
            return null;
        }
        // Other used tables only — the row's own table is never counted (see buildDuplicateMap).
        const tableCount = duplicate.tables.length;
        const rowCount = duplicate.siblings.length;
        const tables = duplicate.tables.join(', ');
        // Rows and tables diverge when a description repeats inside one table, which is
        // worth calling out rather than hiding behind a table count.
        const label = rowCount > tableCount
            ? `${rowCount} matching entries in ${tableCount} other ${tableCount === 1 ? 'table' : 'tables'} (${tables}) — language edits sync there`
            : `Also in ${tableCount} other ${tableCount === 1 ? 'table' : 'tables'} (${tables}) — language edits sync there`;
        return (h("span", { class: "entries-table__dup-badge", "data-tooltip": label, "aria-label": label,
            // The whole key cell opens the entry drawer — the badge is a hover target, not a way in.
            onClick: (event) => event.stopPropagation() }, h("wa-icon", { name: "clone", "aria-hidden": "true" }), tableCount));
    }
    renderKeyCell(entry) {
        const isHidden = entry.meta?.isVisible === false;
        return (h("div", { class: "entries-table__key-container" }, isHidden && (h("span", { class: "entries-table__key-hidden-mark", "data-tooltip": "Hidden from the app", "aria-label": `${entry.key || 'This key'} is hidden from the app` }, h("wa-icon", { name: "eye-slash", "aria-hidden": "true" }))), h("span", { class: "entries-table__key-text", "data-tooltip": entry.key }, entry.key), this.renderDuplicateBadge(entry), h("wa-icon", { class: "entries-table__key-icon", name: "pen-to-square" })));
    }
    renderLangHead(language) {
        return (h("span", { class: "entries-table__lang-head" }, h("abbr", { class: "entries-table__lang-code", "data-tooltip": language.name, "aria-label": language.name }, language.code.toUpperCase()), language.code === this.sourceCode && h("span", { class: "entries-table__lang-source" }, "source")));
    }
    renderActionsCell(entry) {
        return (h("wa-dropdown", { "onwa-select": (e) => this.handleRowAction(e.detail.item.value, entry) }, h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, h("wa-icon", { name: "ellipsis", label: `Actions for ${entry.key || 'entry'}` })), h("wa-dropdown-item", { value: "edit", disabled: entry.meta?.isUpdateable === false }, h("wa-icon", { slot: "icon", name: "pen" }), "Edit all languages"), h("wa-dropdown-item", { value: "copy" }, h("wa-icon", { slot: "icon", name: "clipboard" }), "Copy key"), h("wa-dropdown-item", { value: "copy-row" }, h("wa-icon", { slot: "icon", name: "clone" }), "Copy row"), h("wa-dropdown-item", { value: "move", disabled: entry.meta?.isUpdateable === false }, h("wa-icon", { slot: "icon", name: "arrow-right-arrow-left" }), "Move to table\u2026"), h("wa-dropdown-item", { value: "toggle-visibility" }, h("wa-icon", { slot: "icon", name: entry.meta?.isVisible === false ? 'eye' : 'eye-slash' }), entry.meta?.isVisible === false ? 'Show in app' : 'Hide from app'), h("wa-dropdown-item", { value: "delete", variant: "danger" }, h("wa-icon", { slot: "icon", name: "trash-can" }), t('Lcz_Delete', { fallback: 'Delete' }))));
    }
    buildColumns() {
        const helper = createColumnHelper();
        return [
            helper.display({
                id: 'drag',
                header: () => h("span", { class: "entries-table__sr-only" }, "Reorder"),
                cell: info => this.renderDragHandle(info.row.original),
            }),
            helper.accessor('key', {
                id: 'key',
                header: () => 'Key',
                cell: info => this.renderKeyCell(info.row.original),
            }),
            ...(this.showNotes
                ? [
                    helper.display({
                        id: 'notes',
                        header: 'Notes',
                        cell: info => this.renderValueCell(info.row.original, { id: 'notes', kind: 'note' }),
                    }),
                ]
                : []),
            ...this.languages.map(language => helper.accessor(row => row.values[language.code] ?? '', {
                id: language.code,
                header: () => this.renderLangHead(language),
                cell: info => this.renderValueCell(info.row.original, { id: language.code, kind: 'lang', code: language.code }),
            })),
            helper.display({
                id: 'actions',
                header: () => h("span", { class: "entries-table__sr-only" }, t('Lcz_Actions', { fallback: 'Actions' })),
                cell: info => this.renderActionsCell(info.row.original),
            }),
        ];
    }
    /**
     * The language column pinned beside the key. Deliberately "whichever is
     * leftmost" rather than a lookup by source code — pinning a column from the
     * middle of the row would park it on top of its neighbours.
     */
    get pinnedLanguageCode() {
        return this.languages[0]?.code;
    }
    renderCell(cell, rowIndex) {
        const columnId = cell.column.id;
        const isLangColumn = this.languages.some(language => language.code === columnId);
        const columns = this.navColumns;
        const colIndex = columns.findIndex(column => column.id === columnId);
        const column = colIndex === -1 ? null : columns[colIndex];
        const entry = cell.row.original;
        const isActive = !!column && this.activeCell.row === rowIndex && this.activeCell.col === colIndex;
        const isLocked = entry.meta?.isUpdateable === false;
        return (h("td", { key: cell.id, class: {
                'entries-table__key': columnId === 'key',
                'entries-table__source-cell': isLangColumn && columnId === this.pinnedLanguageCode,
                'entries-table__value-cell': isLangColumn || columnId === 'notes',
                'entries-table__actions': columnId === 'actions',
                'entries-table__drag-cell': columnId === 'drag',
            },
            // The cell itself is the focus target, not the content inside it: one uniform
            // roving tab stop for Key, Notes, language and Actions cells, and no focusable
            // button nested inside a focusable gridcell.
            tabindex: column ? (isActive ? '0' : '-1') : undefined, "data-row": column ? rowIndex : undefined, "data-col": column ? colIndex : undefined, "aria-readonly": column && (column.kind === 'note' || column.kind === 'lang') && isLocked ? 'true' : undefined, onKeyDown: column ? (e) => this.handleGridKeyDown(e, rowIndex, colIndex) : undefined, onFocus: column ? (e) => this.handleCellFocus(rowIndex, colIndex, e.currentTarget) : undefined, onClick: column ? () => this.handleCellClick(entry, column, rowIndex, colIndex) : undefined }, flexRender(cell.column.columnDef.cell, cell.getContext())));
    }
    renderRow(row, rowIndex) {
        const entry = row.original;
        return (h("tr", { key: row.id, class: {
                'ir-table-row': true,
                'entries-table__row--dragging': this.draggingId === entry.id,
                'entries-table__row--reordered': this.changedEntryIds.has(entry.id),
                'entries-table__row--hidden': entry.meta?.isVisible === false,
                'entries-table__row--deleted': entry.meta?.isDeleted === true,
            }, onDragOver: (e) => this.handleDragOver(e, entry), onDrop: (e) => e.preventDefault() }, row.getVisibleCells().map(cell => this.renderCell(cell, rowIndex))));
    }
    // #region Table grouping
    toggleGroup(name) {
        const next = new Set(this.collapsedTables);
        if (next.has(name)) {
            next.delete(name);
        }
        else {
            next.add(name);
        }
        this.collapsedTables = next;
    }
    renderGroupHeader(name, count) {
        const collapsed = this.collapsedTables.has(name);
        return (h("tr", { key: `group:${name}`, class: "entries-table__group-row" }, h("td", { class: "entries-table__group-cell", colSpan: (this.showNotes ? 4 : 3) + this.languages.length }, h("button", { type: "button", class: "entries-table__group-toggle", "aria-expanded": collapsed ? 'false' : 'true', onClick: () => this.toggleGroup(name) }, h("wa-icon", { class: "entries-table__group-chevron", name: "chevron-down", "aria-hidden": "true" }), h("span", { class: "entries-table__group-name" }, name), h("span", { class: "entries-table__group-count" }, count, " key", count === 1 ? '' : 's')))));
    }
    /**
     * Opens a group header row each time the table name changes and drops the rows
     * of collapsed groups. Rows arrive already sorted by table, so one pass suffices
     * and a group can never be reopened further down the list.
     */
    renderGroupedRows(rows) {
        const counts = new Map();
        rows.forEach(row => {
            const name = row.original.tableName ?? '';
            counts.set(name, (counts.get(name) ?? 0) + 1);
        });
        const nodes = [];
        let currentGroup = null;
        // Counts only the rows that actually render, so `data-row` lines up with
        // `visibleEntries` — the list arrow keys walk.
        let visibleIndex = 0;
        rows.forEach(row => {
            const name = row.original.tableName ?? '';
            if (name !== currentGroup) {
                currentGroup = name;
                nodes.push(this.renderGroupHeader(name, counts.get(name) ?? 0));
            }
            if (!this.collapsedTables.has(name)) {
                nodes.push(this.renderRow(row, visibleIndex));
                visibleIndex += 1;
            }
        });
        return nodes;
    }
    // #endregion
    renderEmptyState() {
        if (this.languages.length === 0) {
            return h("ir-empty-state", { message: "Add a language before creating translation keys." });
        }
        if (this.filtered) {
            return (h("ir-empty-state", { message: "No keys match the current search and filters." }, h("ir-custom-button", { appearance: "outlined", variant: "neutral", onClickHandler: () => this.clearFilters.emit() }, "Clear filters")));
        }
        return h("ir-empty-state", { message: "No keys in this table yet \u2014 add one to get started." });
    }
    render() {
        if (this.dragEntries.length === 0 || this.languages.length === 0) {
            return h(Host, { class: "--empty" }, this.renderEmptyState());
        }
        this.clampActiveCell();
        const columns = this.buildColumns();
        const table = useTable({
            data: this.dragEntries,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });
        // Fixed columns (drag handle, key, notes, actions) stay a constant width;
        // language columns split whatever's left in the container equally, with a
        // 200px floor below which the table falls back to its own horizontal
        // scroll instead of squeezing columns further.
        const notesColWidth = 180;
        const fixedColsWidth = 32 + 220 + 44 + (this.showNotes ? notesColWidth : 0);
        const minLangColWidth = 200;
        const langColWidth = Math.max(minLangColWidth, Math.floor((this.containerWidth - fixedColsWidth) / this.languages.length));
        const minWidth = fixedColsWidth + langColWidth * this.languages.length;
        return (h(Host, { class: this.compact ? '--compact' : '' }, h("div", { class: "table--container", ref: el => (this.containerRef = el), onDragOver: this.handleContainerDragOver, onMouseOver: this.handleTooltipOver, onMouseLeave: this.hideTooltip, onScroll: this.hideTooltip }, h("table", { role: "grid", class: "table data-table entries-table__table", style: { minWidth: `${minWidth}px` } }, h("colgroup", null, h("col", { class: "entries-table__col--drag" }), h("col", { class: "entries-table__col--key" }), this.showNotes && h("col", { class: "entries-table__col--notes", style: { width: `${notesColWidth}px` } }), h("col", { class: "entries-table__col--lang", span: this.languages.length, style: { width: `${langColWidth}px` } }), h("col", { class: "entries-table__col--actions" })), h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, scope: "col", class: {
                'entries-table__key-head': header.column.id === 'key',
                'entries-table__source-head': header.column.id === this.pinnedLanguageCode,
            } }, !header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, this.groupByTable ? this.renderGroupedRows(table.getRowModel().rows) : table.getRowModel().rows.map((row, index) => this.renderRow(row, index)), h("tr", { class: 'last__row' }, h("td", { colSpan: 10 }))))), h("wa-tooltip", { class: "entries-table__tooltip", ref: el => (this.tooltipRef = el), trigger: "manual", placement: "top" })));
    }
    static get watchers() { return {
        "entries": [{
                "handleEntriesChange": 0
            }]
    }; }
};
IrTranslationsEntriesTable.style = irTranslationsEntriesTableCss();

export { IrTranslationsEntriesTable as ir_translations_entries_table };
