import { flexRender, useTable } from "../../../utils/useTable";
import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { hasValue } from "../utils";
export class IrTranslationsEntriesTable {
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
    static get is() { return "ir-translations-entries-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-entries-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-entries-table.css"]
        };
    }
    static get properties() {
        return {
            "entries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry[]",
                    "resolved": "TranslationEntry[]",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Rows to render, already filtered by the parent."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationLanguage[]",
                    "resolved": "TranslationLanguage[]",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column order \u2014 the source language is expected first."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "sourceCode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Code of the reference language, marked in the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "source-code"
            },
            "compact": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "compact",
                "defaultValue": "true"
            },
            "filtered": {
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
                    "text": "True when the parent's filters hid every row, so the empty state can say so."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "filtered",
                "defaultValue": "false"
            },
            "reorderEnabled": {
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
                    "text": "False while a search/status filter is active \u2014 reordering a filtered subset can't map cleanly onto the full list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "reorder-enabled",
                "defaultValue": "true"
            },
            "changedEntryIds": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Set<string>",
                    "resolved": "Set<string>",
                    "references": {
                        "Set": {
                            "location": "global",
                            "id": "global::Set"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ids of rows whose position differs from the last-loaded/saved order \u2014 highlighted while a reorder is pending."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Set()"
            },
            "groupByTable": {
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
                    "text": "True when `entries` span several setup tables \u2014 rows are then broken up by collapsible per-table header rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group-by-table",
                "defaultValue": "false"
            },
            "duplicates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Map<string, DuplicateInfo>",
                    "resolved": "Map<string, DuplicateInfo>",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        },
                        "DuplicateInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::DuplicateInfo",
                            "referenceLocation": "DuplicateInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Entry id \u2192 the tables sharing that row's description; rows present here get a duplicate badge beside their key."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            }
        };
    }
    static get states() {
        return {
            "editingCell": {},
            "dragEntries": {},
            "draggingId": {},
            "containerWidth": {},
            "collapsedTables": {}
        };
    }
    static get events() {
        return [{
                "method": "entryChange",
                "name": "entryChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "editEntry",
                "name": "editEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "duplicateEntry",
                "name": "duplicateEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "deleteEntry",
                "name": "deleteEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "clearFilters",
                "name": "clearFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "reorderEntries",
                "name": "reorderEntries",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry[]",
                    "resolved": "TranslationEntry[]",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "toggleVisibility",
                "name": "toggleVisibility",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "entries",
                "methodName": "handleEntriesChange"
            }];
    }
}
