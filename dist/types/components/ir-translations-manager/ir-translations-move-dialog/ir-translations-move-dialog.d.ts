import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationEntry, TranslationTable } from '../types';
export interface TranslationEntryMoved {
    entry: TranslationEntry;
    fromTable: string;
    toTable: string;
}
/**
 * Moves one setup entry to another table through Move_Setup_Entry — the
 * backend re-homes the row, so nothing is re-created or soft-deleted here.
 *
 * The destination list is whatever the parent passes as `tables`: the manager
 * hands over the same set its header picker offers, so the "only used tables"
 * setting narrows both the same way. The search box is a local filter over
 * that list, and the source table is never offered as a destination.
 */
export declare class IrTranslationsMoveDialog {
    open: boolean;
    /** The row being moved. Its `tableName` is the source table. */
    entry: TranslationEntry | null;
    /** Candidate destinations — the tables the header picker shows. */
    tables: TranslationTable[];
    /** Language whose value is shown next to the key, so the user can tell rows with similar keys apart. */
    sourceCode?: string;
    closeDialog: EventEmitter<void>;
    /** Emitted once the API confirmed the move. The parent owns closing the dialog and updating its rows. */
    entryMoved: EventEmitter<TranslationEntryMoved>;
    query: string;
    targetId: string | null;
    isSubmitting: boolean;
    private dialogRef;
    private setupService;
    handleOpenChange(open: boolean): void;
    /** Every table but the one the row already lives in, narrowed by the search text. */
    private get candidateTables();
    /** Mirrors the Edit action's rule — a row Setup won't let us update can't be re-homed either. */
    private get isLocked();
    private handleMove;
    private renderSummary;
    private renderTableList;
    render(): any;
}
