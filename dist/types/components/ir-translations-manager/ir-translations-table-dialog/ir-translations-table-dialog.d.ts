import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationTable } from '../types';
/**
 * Dumb open/close shell — the nested ir-translations-table-form owns the
 * draft, validation, and the actual save call.
 */
export declare class IrTranslationsTableDialog {
    open: boolean;
    formId: string;
    mode: 'create' | 'edit';
    table: TranslationTable | null;
    /** Names of the other tables, for duplicate detection. */
    existingNames: string[];
    ownerId: number;
    entryUserId: number;
    closeDialog: EventEmitter<void>;
    tableSaved: EventEmitter<{
        id: string;
        name: string;
        mode: 'create' | 'edit';
    }>;
    tableSaveFailed: EventEmitter<void>;
    saveDisabled: boolean;
    isSubmitting: boolean;
    private dialogRef;
    handleOpenChange(open: boolean): void;
    render(): any;
}
