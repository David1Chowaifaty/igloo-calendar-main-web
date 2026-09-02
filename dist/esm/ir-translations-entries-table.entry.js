import { r as registerInstance, c as createEvent, h, H as Host } from './index-BYqrdgY9.js';
import { c as createColumnHelper, f as flexRender, u as useTable, g as getCoreRowModel } from './useTable-CXkYMQoa.js';
import { h as hasValue } from './utils-NDR1cITt.js';

const irTranslationsEntriesTableCss = () => `.sc-ir-translations-entries-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-translations-entries-table{overflow-x:auto}.table--container.sc-ir-translations-entries-table,.data-table.sc-ir-translations-entries-table{height:100%}.ir-table-row.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-translations-entries-table tbody.sc-ir-translations-entries-table tr.sc-ir-translations-entries-table:last-child>td.sc-ir-translations-entries-table{border-bottom:0 !important}.cell--align-start.sc-ir-translations-entries-table{text-align:start !important}.cell--align-center.sc-ir-translations-entries-table{text-align:center !important}.cell--align-end.sc-ir-translations-entries-table{text-align:end !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-translations-entries-table,.ir-table-row.sc-ir-translations-entries-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-translations-entries-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-translations-entries-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-translations-entries-table svg.sc-ir-translations-entries-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-translations-entries-table .empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-translations-entries-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-translations-entries-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-translations-entries-table-h{--ir-cell-padding:0.55rem 0.75rem;--entries-table-font-size:var(--wa-font-size-s);--entries-table-key-width:220px;display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.--compact.sc-ir-translations-entries-table-h{--ir-cell-padding:0.3rem 0.6rem;--entries-table-font-size:var(--wa-font-size-xs, 0.8125rem)}.--empty.sc-ir-translations-entries-table-h{padding:1.5rem 1rem}.table--container.sc-ir-translations-entries-table{min-height:240px;max-height:50vh;overflow-x:auto;overflow-y:auto;overscroll-behavior-x:contain}@media (min-width: 1024px){.table--container.sc-ir-translations-entries-table{max-height:75vh}}.entries-table__table.sc-ir-translations-entries-table{width:100%;table-layout:fixed;font-size:var(--entries-table-font-size)}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{position:sticky;top:0;z-index:3;color:var(--wa-color-text-quiet);font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;white-space:nowrap}.entries-table__col--drag.sc-ir-translations-entries-table{width:32px}.entries-table__col--key.sc-ir-translations-entries-table{width:var(--entries-table-key-width)}.entries-table__col--lang.sc-ir-translations-entries-table{width:200px}.entries-table__col--actions.sc-ir-translations-entries-table{width:44px}@media (max-width: 575px){.sc-ir-translations-entries-table-h{--entries-table-key-width:150px}}.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:4}.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:4}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__key-head.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:5}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__source-head.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:5}.last__row.sc-ir-translations-entries-table{height:100%}.entries-table__key-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table::after,.entries-table__source-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table::after{content:'';position:absolute;inset-block:0;inset-inline-end:0;width:1px;background:var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__key-container.sc-ir-translations-entries-table{display:flex;align-items:center}.entries-table__key-icon.sc-ir-translations-entries-table{visibility:hidden}.entries-table__key.sc-ir-translations-entries-table:hover .entries-table__key-icon.sc-ir-translations-entries-table{visibility:visible}.entries-table__key-hidden-mark.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;font-size:0.8em;color:var(--wa-color-text-quiet)}.entries-table__dup-badge.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:0.35rem;padding-block:0.05rem;padding-inline:0.3rem;border:1px solid var(--wa-color-warning-border-quiet, #fde68a);border-radius:var(--wa-border-radius-s);background:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet, #92400e);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;line-height:1.2;cursor:help}.entries-table__key-text.sc-ir-translations-entries-table{flex:1;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace);font-size:0.95em;color:var(--wa-color-text-normal)}.ir-table-row.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{padding:0;text-align:center}.entries-table__drag-handle.sc-ir-translations-entries-table{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:var(--ir-cell-padding);color:var(--wa-color-text-quiet);cursor:grab}.entries-table__drag-handle.sc-ir-translations-entries-table:active{cursor:grabbing}.entries-table__drag-handle.--disabled.sc-ir-translations-entries-table{color:var(--wa-color-neutral-border-normal, #cbd5e1);cursor:not-allowed}.ir-table-row.entries-table__row--dragging.sc-ir-translations-entries-table{opacity:0.5}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-warning-fill-quiet, #fef3c7)}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{box-shadow:inset 3px 0 0 var(--wa-color-warning-fill-loud, #f59e0b)}.ir-table-row.entries-table__row--hidden.sc-ir-translations-entries-table{opacity:0.6}.ir-table-row.entries-table__row--deleted.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.entries-table__lang-head.sc-ir-translations-entries-table{display:inline-flex;align-items:center;gap:0.35rem}.entries-table__lang-code.sc-ir-translations-entries-table{text-decoration:none;cursor:help}.entries-table__lang-source.sc-ir-translations-entries-table{padding:0.05rem 0.3rem;font-size:0.6875rem;font-weight:var(--wa-font-weight-normal, 400);text-transform:lowercase;letter-spacing:0;color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}.entries-table__sr-only.sc-ir-translations-entries-table{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__value-cel.sc-ir-translations-entries-table{height:min-content !important}.ir-table-row.sc-ir-translations-entries-table td.entries-table__value-cell.sc-ir-translations-entries-table{padding:0 !important}.entries-table__cell-display.sc-ir-translations-entries-table{display:block;width:100%;border:none;background:transparent;padding:var(--ir-cell-padding);font:inherit;text-align:start;color:inherit;cursor:text}.entries-table__cell-display.sc-ir-translations-entries-table:hover{box-shadow:inset 0 0 0 1px var(--wa-color-neutral-border-normal, #cbd5e1)}.entries-table__cell-display.sc-ir-translations-entries-table:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:-2px}.entries-table__cell-text.sc-ir-translations-entries-table{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__cell-missing.sc-ir-translations-entries-table{display:inline-block;padding:0.05rem 0.35rem;font-size:0.85em;color:var(--wa-color-warning-on-quiet, #92400e);background:var(--wa-color-warning-fill-quiet, #fef3c7);border-radius:var(--wa-border-radius-s)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;cursor:default;color:var(--wa-color-text-quiet)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table:hover{box-shadow:none}.entries-table__cell-lock.sc-ir-translations-entries-table{flex:0 0 auto;font-size:0.8em;opacity:0.6}.entries-table__cell-input.sc-ir-translations-entries-table{display:block;width:100%}.entries-table__cell-input.sc-ir-translations-entries-table::part(base),.entries-table__cell-input.sc-ir-translations-entries-table [part~="base"]{border-radius:var(--wa-border-radius-s)}.entries-table__cell-input.sc-ir-translations-entries-table::part(label),.entries-table__cell-input.sc-ir-translations-entries-table [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__actions.sc-ir-translations-entries-table{text-align:center}.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:0.45;transition:opacity var(--wa-transition-fast, 150ms) ease}.ir-table-row.sc-ir-translations-entries-table:hover .entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table,.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table:focus-within{opacity:1}@media (hover: none){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:1}}@media (prefers-reduced-motion: reduce){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{transition:none}}.entries-table__tooltip.sc-ir-translations-entries-table{--max-width:22rem}.entries-table__tooltip.sc-ir-translations-entries-table::part(body),.entries-table__tooltip.sc-ir-translations-entries-table [part~="body"]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;overflow-wrap:anywhere}.entries-table__group-row.sc-ir-translations-entries-table td.entries-table__group-cell.sc-ir-translations-entries-table{padding:0;background:var(--wa-color-neutral-fill-quiet);border-block-start:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-block-end:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__group-toggle.sc-ir-translations-entries-table{display:flex;align-items:center;gap:0.5rem;width:100%;padding-block:0.4rem;padding-inline:0.6rem;border:none;background:transparent;font:inherit;color:var(--wa-color-text-normal);cursor:pointer;text-align:start}.entries-table__group-toggle.sc-ir-translations-entries-table:hover,.entries-table__group-toggle.sc-ir-translations-entries-table:focus-visible{background:var(--wa-color-neutral-fill-normal, rgba(0, 0, 0, 0.04))}.entries-table__group-chevron.sc-ir-translations-entries-table{flex:0 0 auto;color:var(--wa-color-text-quiet);transition:rotate var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease);rotate:0deg}.entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:-90deg}.sc-ir-translations-entries-table-h:dir(rtl) .entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:90deg}.entries-table__group-name.sc-ir-translations-entries-table{font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__group-count.sc-ir-translations-entries-table{margin-inline-start:auto;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;white-space:nowrap}@media (prefers-reduced-motion: reduce){.entries-table__group-chevron.sc-ir-translations-entries-table{transition:none}}`;

const IrTranslationsEntriesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.entryChange = createEvent(this, "entryChange");
        this.editEntry = createEvent(this, "editEntry");
        this.duplicateEntry = createEvent(this, "duplicateEntry");
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
    entryChange;
    editEntry;
    duplicateEntry;
    deleteEntry;
    clearFilters;
    reorderEntries;
    toggleVisibility;
    editingCell = null;
    /** Working copy of `entries`, live-reordered while a drag is in progress. */
    dragEntries = [];
    draggingId = null;
    /** `.table--container`'s current content-box width — language columns stretch to fill it instead of sitting fixed. */
    containerWidth = 0;
    /** Table names whose group is currently folded shut. Only meaningful while `groupByTable` is on. */
    collapsedTables = new Set();
    cellInputRef;
    lastFocusKey = null;
    /** Live text of the cell being edited. Deliberately not @State — keystrokes must not re-render the grid. */
    draft = '';
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
        const tooltip = this.tooltipRef;
        if (!tooltip) {
            return;
        }
        const target = event.target?.closest?.('[data-tooltip]');
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
    };
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
        const focusKey = this.editingCell ? `${this.editingCell.entryId}:${this.editingCell.languageCode}` : null;
        if (focusKey && focusKey !== this.lastFocusKey) {
            // wa-input's shadow DOM hasn't necessarily finished its first Lit
            // render synchronously after insertion, so focus() can run before the
            // internal <input> exists — defer past that render.
            requestAnimationFrame(() => this.cellInputRef?.focus());
        }
        this.lastFocusKey = focusKey;
    }
    startEditing(entry, code) {
        this.draft = entry.values[code] ?? '';
        this.editingCell = { entryId: entry.id, languageCode: code };
    }
    commitDraft(entry, code) {
        // Idempotent per edit session — Enter/Tab commits and moves on, then the
        // outgoing input's native blur fires too (async, once it's actually
        // removed from the DOM); without this guard that blur would re-commit
        // using whatever cell's draft happens to be live by then.
        if ((entry.values[code] ?? '') === this.draft) {
            return;
        }
        this.entryChange.emit({ ...entry, values: { ...entry.values, [code]: this.draft } });
    }
    /**
     * Moves the edit caret through the grid, wrapping across row ends so Tab
     * walks the whole table the way a spreadsheet does.
     */
    moveEditing(entryId, code, rowDelta, colDelta) {
        const rowIndex = this.dragEntries.findIndex(entry => entry.id === entryId);
        const colIndex = this.languages.findIndex(language => language.code === code);
        if (rowIndex === -1 || colIndex === -1) {
            this.editingCell = null;
            return;
        }
        let nextRow = rowIndex + rowDelta;
        let nextCol = colIndex + colDelta;
        if (nextCol >= this.languages.length) {
            nextCol = 0;
            nextRow += 1;
        }
        else if (nextCol < 0) {
            nextCol = this.languages.length - 1;
            nextRow -= 1;
        }
        const nextEntry = this.dragEntries[nextRow];
        if (!nextEntry) {
            this.editingCell = null;
            return;
        }
        this.startEditing(nextEntry, this.languages[nextCol].code);
    }
    handleCellKeyDown(event, entry, code, originalValue) {
        if (event.key === 'Escape') {
            event.preventDefault();
            this.draft = originalValue;
            this.editingCell = null;
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            this.commitDraft(entry, code);
            this.moveEditing(entry.id, code, event.shiftKey ? -1 : 1, 0);
            return;
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            this.commitDraft(entry, code);
            this.moveEditing(entry.id, code, 0, event.shiftKey ? -1 : 1);
        }
    }
    handleCellBlur(entry, code) {
        // Keyboard navigation has already pointed editingCell at the next cell by
        // the time this fires, so only a genuine focus-out should close the editor.
        if (this.editingCell?.entryId === entry.id && this.editingCell?.languageCode === code) {
            this.editingCell = null;
        }
    }
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
    renderValueCell(entry, language) {
        const value = entry.values[language.code] ?? '';
        const isEditing = this.editingCell?.entryId === entry.id && this.editingCell?.languageCode === language.code;
        const ariaLabel = `${language.name} translation for ${entry.key || 'new entry'}`;
        if (entry.meta?.isUpdateable === false) {
            return (h("span", { class: "entries-table__cell-display --readonly", "aria-label": `${ariaLabel} (read-only)` }, hasValue(value) ? (h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (h("span", { class: "entries-table__cell-missing" }, "Missing")), h("wa-icon", { name: "lock", class: "entries-table__cell-lock", "aria-hidden": "true" })));
        }
        if (isEditing) {
            return (h("wa-input", { size: "s", value: value, class: "entries-table__cell-input", label: ariaLabel, autocomplete: "off", spellcheck: false, ref: el => (this.cellInputRef = el), oninput: (e) => (this.draft = e.target.value), onKeyDown: (e) => this.handleCellKeyDown(e, entry, language.code, value), onblur: () => this.handleCellBlur(entry, language.code), onchange: () => {
                    this.commitDraft(entry, language.code);
                } }));
        }
        return (h("button", { type: "button", class: `entries-table__cell-display ${hasValue(value) ? '' : '--empty'}`, "aria-label": hasValue(value) ? `Edit ${ariaLabel}` : `Add ${ariaLabel}`, onClick: () => this.startEditing(entry, language.code) }, hasValue(value) ? (h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (h("span", { class: "entries-table__cell-missing" }, "Missing"))));
    }
    /** The duplicate badge. Its tooltip rides the shared instance like every other hover target here. */
    renderDuplicateBadge(entry) {
        const duplicate = this.duplicates.get(entry.id);
        if (!duplicate) {
            return null;
        }
        const tableCount = duplicate.tables.length;
        // OCCURRENCES counts rows, not tables — they diverge when a description repeats
        // inside one table, which is worth calling out rather than hiding behind a table count.
        const label = duplicate.occurrences > tableCount
            ? `${duplicate.occurrences} entries across ${tableCount} tables: ${duplicate.tables.join(', ')}`
            : `Appears in ${tableCount} tables: ${duplicate.tables.join(', ')}`;
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
        return (h("wa-dropdown", { "onwa-select": (e) => this.handleRowAction(e.detail.item.value, entry) }, h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, h("wa-icon", { name: "ellipsis", label: `Actions for ${entry.key || 'entry'}` })), h("wa-dropdown-item", { value: "edit", disabled: entry.meta?.isUpdateable === false }, h("wa-icon", { slot: "icon", name: "pen" }), "Edit all languages"), h("wa-dropdown-item", { value: "copy" }, h("wa-icon", { slot: "icon", name: "clipboard" }), "Copy key"), h("wa-dropdown-item", { value: "toggle-visibility" }, h("wa-icon", { slot: "icon", name: entry.meta?.isVisible === false ? 'eye' : 'eye-slash' }), entry.meta?.isVisible === false ? 'Show in app' : 'Hide from app'), h("wa-dropdown-item", { value: "delete", variant: "danger", disabled: entry.meta?.isDeleteable === false }, h("wa-icon", { slot: "icon", name: "trash-can" }), "Delete")));
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
            ...this.languages.map(language => helper.accessor(row => row.values[language.code] ?? '', {
                id: language.code,
                header: () => this.renderLangHead(language),
                cell: info => this.renderValueCell(info.row.original, language),
            })),
            helper.display({
                id: 'actions',
                header: () => h("span", { class: "entries-table__sr-only" }, "Actions"),
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
    renderCell(cell) {
        const columnId = cell.column.id;
        const isLangColumn = this.languages.some(language => language.code === columnId);
        return (h("td", { key: cell.id, class: {
                'entries-table__key': columnId === 'key',
                'entries-table__source-cell': isLangColumn && columnId === this.pinnedLanguageCode,
                'entries-table__value-cell': isLangColumn,
                'entries-table__actions': columnId === 'actions',
                'entries-table__drag-cell': columnId === 'drag',
            }, onClick: columnId === 'key' ? () => this.editEntry.emit(cell.row.original) : undefined }, flexRender(cell.column.columnDef.cell, cell.getContext())));
    }
    renderRow(row) {
        const entry = row.original;
        return (h("tr", { key: row.id, class: {
                'ir-table-row': true,
                'entries-table__row--dragging': this.draggingId === entry.id,
                'entries-table__row--reordered': this.changedEntryIds.has(entry.id),
                'entries-table__row--hidden': entry.meta?.isVisible === false,
                'entries-table__row--deleted': entry.meta?.isDeleted === true,
            }, onDragOver: (e) => this.handleDragOver(e, entry), onDrop: (e) => e.preventDefault() }, row.getVisibleCells().map(cell => this.renderCell(cell))));
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
        return (h("tr", { key: `group:${name}`, class: "entries-table__group-row" }, h("td", { class: "entries-table__group-cell", colSpan: 3 + this.languages.length }, h("button", { type: "button", class: "entries-table__group-toggle", "aria-expanded": collapsed ? 'false' : 'true', onClick: () => this.toggleGroup(name) }, h("wa-icon", { class: "entries-table__group-chevron", name: "chevron-down", "aria-hidden": "true" }), h("span", { class: "entries-table__group-name" }, name), h("span", { class: "entries-table__group-count" }, count, " key", count === 1 ? '' : 's')))));
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
        rows.forEach(row => {
            const name = row.original.tableName ?? '';
            if (name !== currentGroup) {
                currentGroup = name;
                nodes.push(this.renderGroupHeader(name, counts.get(name) ?? 0));
            }
            if (!this.collapsedTables.has(name)) {
                nodes.push(this.renderRow(row));
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
        const columns = this.buildColumns();
        const table = useTable({
            data: this.dragEntries,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });
        // Fixed columns (drag handle, key, actions) stay a constant width; language
        // columns split whatever's left in the container equally, with a 200px
        // floor below which the table falls back to its own horizontal scroll
        // instead of squeezing columns further.
        const fixedColsWidth = 32 + 220 + 44;
        const minLangColWidth = 200;
        const langColWidth = Math.max(minLangColWidth, Math.floor((this.containerWidth - fixedColsWidth) / this.languages.length));
        const minWidth = fixedColsWidth + langColWidth * this.languages.length;
        return (h(Host, { class: this.compact ? '--compact' : '' }, h("div", { class: "table--container", ref: el => (this.containerRef = el), onDragOver: this.handleContainerDragOver, onMouseOver: this.handleTooltipOver, onMouseLeave: this.hideTooltip, onScroll: this.hideTooltip }, h("table", { class: "table data-table entries-table__table", style: { minWidth: `${minWidth}px` } }, h("colgroup", null, h("col", { class: "entries-table__col--drag" }), h("col", { class: "entries-table__col--key" }), h("col", { class: "entries-table__col--lang", span: this.languages.length, style: { width: `${langColWidth}px` } }), h("col", { class: "entries-table__col--actions" })), h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, scope: "col", class: {
                'entries-table__key-head': header.column.id === 'key',
                'entries-table__source-head': header.column.id === this.pinnedLanguageCode,
            } }, !header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, this.groupByTable ? this.renderGroupedRows(table.getRowModel().rows) : table.getRowModel().rows.map(row => this.renderRow(row)), h("tr", { class: 'last__row' }, h("td", { colSpan: 10 }))))), h("wa-tooltip", { class: "entries-table__tooltip", ref: el => (this.tooltipRef = el), trigger: "manual", placement: "top" })));
    }
    static get watchers() { return {
        "entries": [{
                "handleEntriesChange": 0
            }]
    }; }
};
IrTranslationsEntriesTable.style = irTranslationsEntriesTableCss();

export { IrTranslationsEntriesTable as ir_translations_entries_table };
