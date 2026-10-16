import { EventEmitter } from '../../../stencil-public-runtime';
import { DuplicateInfo, TranslationEntry, TranslationLanguage } from '../types';
export declare class IrTranslationsEntriesTable {
    /** Rows to render, already filtered by the parent. */
    entries: TranslationEntry[];
    /** Column order — the source language is expected first. */
    languages: TranslationLanguage[];
    /** Code of the reference language, marked in the header. */
    sourceCode?: string;
    compact: boolean;
    /** True when the parent's filters hid every row, so the empty state can say so. */
    filtered: boolean;
    /** False while a search/status filter is active — reordering a filtered subset can't map cleanly onto the full list. */
    reorderEnabled: boolean;
    /** Ids of rows whose position differs from the last-loaded/saved order — highlighted while a reorder is pending. */
    changedEntryIds: Set<string>;
    /** True when `entries` span several setup tables — rows are then broken up by collapsible per-table header rows. */
    groupByTable: boolean;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge beside their key. */
    duplicates: Map<string, DuplicateInfo>;
    /** Whether the notes column is included at all. */
    showNotes: boolean;
    entryChange: EventEmitter<TranslationEntry>;
    editEntry: EventEmitter<TranslationEntry>;
    duplicateEntry: EventEmitter<TranslationEntry>;
    /** "Move to table…" — the parent opens the move dialog for this row. */
    moveEntry: EventEmitter<TranslationEntry>;
    deleteEntry: EventEmitter<TranslationEntry>;
    clearFilters: EventEmitter<void>;
    reorderEntries: EventEmitter<TranslationEntry[]>;
    toggleVisibility: EventEmitter<TranslationEntry>;
    /** `${entryId}|${columnId}` of the open editor, or null. The only edit state that needs a re-render. */
    editingKey: string | null;
    /** Working copy of `entries`, live-reordered while a drag is in progress. */
    dragEntries: TranslationEntry[];
    draggingId: string | null;
    /** `.table--container`'s current content-box width — language columns stretch to fill it instead of sitting fixed. */
    containerWidth: number;
    /** Table names whose group is currently folded shut. Only meaningful while `groupByTable` is on. */
    collapsedTables: Set<string>;
    /**
     * The live edit. Deliberately not @State — keystrokes must not re-render the grid,
     * and the object identity is what makes a commit idempotent (see `EditSession`).
     */
    private editSession;
    /**
     * The grid's single tab stop, as {visible row, navigable column} indices. Also not
     * @State: arrow keys move it by swapping `tabindex` on two `<td>`s directly, so
     * walking a 2,300-cell grid costs no re-renders at all.
     */
    private activeCell;
    /** What to focus after the next render — set by anything that opens or closes an editor. */
    private pendingFocus;
    /**
     * The session a pending 'input' focus was scheduled for. Typing faster than the
     * screen refreshes can queue two of these in one frame, and the first must not
     * declare the second one's editor focused — that would hand the keys back to an
     * input that doesn't have them yet, and they'd be lost.
     */
    private pendingFocusSession;
    private containerRef?;
    private containerResizeObserver?;
    /** Latest pointer Y during a drag, read by the auto-scroll loop — not @State, it'd re-render on every dragover. */
    private dragClientY;
    private autoScrollRaf;
    /**
     * One tooltip serves the whole grid. Anchoring per element would mean a
     * `wa-tooltip` per cell — ~2,300 of them in the cross-table view — so hovers are
     * delegated and this single instance is re-anchored instead.
     */
    private tooltipRef?;
    private tooltipTimer?;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Re-points the shared tooltip at whatever `[data-tooltip]` element the pointer is over. */
    private handleTooltipOver;
    /** Shared by hover and by keyboard focus, so truncated cell text is readable either way. */
    private showTooltipFor;
    private hideTooltip;
    /** A drag in progress owns row order locally — only resync from the parent once it's idle. */
    handleEntriesChange(newEntries: TranslationEntry[]): void;
    componentDidRender(): void;
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
    private syncActionTabStops;
    /** Every column arrow keys can land on, in visual order. */
    private get navColumns();
    /**
     * Rows actually on screen. Grouped mode drops the rows of folded tables, and
     * navigation indices have to agree with what's rendered or arrow keys would
     * step into cells that don't exist.
     */
    private get visibleEntries();
    private cellValue;
    /** Key and Actions are navigable but never editable; system-protected rows lock their values. */
    private isCellEditable;
    private cellElement;
    /** Rows and columns come and go with filters — without this the single tab stop could end up on a cell that no longer exists. */
    private clampActiveCell;
    /**
     * `select` follows the spreadsheet convention: arriving on a cell from the keyboard
     * selects its whole value so typing replaces it, while clicking into one puts the
     * caret after the text so a typo can be fixed without retyping the cell.
     */
    private startEditing;
    /**
     * Saves a session at most once, and only when its value actually moved. Each
     * emit is a live `Edit_Setup` write plus a toast in the manager, so flagging
     * `committed` *before* emitting matters: the trailing `change`/`blur` from the
     * input this commit is about to replace lands right back here.
     */
    private commitSession;
    private closeEditor;
    /** Escape: discard the draft, and make sure the trailing blur can't resurrect it. */
    private cancelEditing;
    private handleEditorBlur;
    /**
     * The three keys that end an edit. Shared with the cell handler, because a fast
     * Enter-Enter or Tab-Tab can land before the next editor's input has taken focus
     * and those keystrokes have to keep working rather than falling on the floor.
     * Returns whether the key was one of them.
     */
    private handleEditKey;
    private handleEditorKeyDown;
    /**
     * Moves the open editor through the grid, wrapping across row ends so Tab walks
     * the whole table the way a spreadsheet does. Key/Actions columns and locked
     * rows are stepped over rather than stopped on, and running off either end
     * leaves focus parked on the cell it started from instead of on nothing.
     */
    private moveEditing;
    /** Moves the grid's single tab stop, swapping `tabindex` on the DOM directly so no re-render is needed. */
    private focusCell;
    /** Click, or Shift+Tab back into the grid — whatever the browser focused becomes the tab stop. */
    private handleCellFocus;
    private activateCell;
    /** A key that should open a cell and become its first character, rather than being a command. */
    private isPrintable;
    private handleGridKeyDown;
    private handleCellClick;
    private handleRowAction;
    private handleDragStart;
    /** Live-shifts the dragged row to the position of whichever row it's currently hovering. */
    private handleDragOver;
    /** Catches dragover over the container's own padding/gaps (not just row cells) so the pointer Y stays fresh for auto-scroll. */
    private handleContainerDragOver;
    private handleDragEnd;
    /**
     * Native HTML5 drag has no scroll-follow of its own, so a row dragged past
     * the container's top/bottom edge would otherwise strand the user there —
     * nudge `.table--container`'s own scroll position each frame while the
     * pointer sits in either edge zone, faster the closer it is to the edge.
     */
    private startAutoScroll;
    private stopAutoScroll;
    private renderDragHandle;
    private renderValueCell;
    /** The duplicate badge. Its tooltip rides the shared instance like every other hover target here. */
    private renderDuplicateBadge;
    private renderKeyCell;
    private renderLangHead;
    private renderActionsCell;
    private buildColumns;
    /**
     * The language column pinned beside the key. Deliberately "whichever is
     * leftmost" rather than a lookup by source code — pinning a column from the
     * middle of the row would park it on top of its neighbours.
     */
    private get pinnedLanguageCode();
    private renderCell;
    private renderRow;
    private toggleGroup;
    private renderGroupHeader;
    /**
     * Opens a group header row each time the table name changes and drops the rows
     * of collapsed groups. Rows arrive already sorted by table, so one pass suffices
     * and a group can never be reopened further down the list.
     */
    private renderGroupedRows;
    private renderEmptyState;
    render(): any;
}
