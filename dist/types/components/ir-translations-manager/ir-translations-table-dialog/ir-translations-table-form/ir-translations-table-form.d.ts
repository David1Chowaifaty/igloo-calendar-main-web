import { EventEmitter } from '../../../../stencil-public-runtime';
import { TranslationTable } from '../../types';
/**
 * Owns the table name draft and saves it directly — the dialog around this
 * form is a dumb open/close shell.
 *
 * Setup only lists tables that already have at least one row, so creating a
 * table and renaming an empty one are purely local (no API call); renaming a
 * non-empty table has to recreate every entry under the new TBL_NAME and
 * soft-delete the old rows, since there's no bulk-rename endpoint.
 */
export declare class IrTranslationsTableForm {
    formId: string;
    mode: 'create' | 'edit';
    table: TranslationTable | null;
    /** Names of the other tables, for duplicate detection. */
    existingNames: string[];
    ownerId: number;
    entryUserId: number;
    tableSaved: EventEmitter<{
        id: string;
        name: string;
        mode: 'create' | 'edit';
    }>;
    tableSaveFailed: EventEmitter<void>;
    submitDisabledChange: EventEmitter<boolean>;
    isSubmittingChange: EventEmitter<boolean>;
    name: string;
    isSubmitting: boolean;
    private nameInputRef?;
    private setupService;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private get isDuplicateName();
    private get isValid();
    private handleNameChange;
    private handleSubmit;
    render(): any;
}
