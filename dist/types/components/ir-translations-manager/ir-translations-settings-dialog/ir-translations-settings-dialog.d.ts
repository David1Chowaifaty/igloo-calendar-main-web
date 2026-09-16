import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationLanguage } from '../types';
export interface TranslationsSettingsSaved {
    usedTablesOnly: boolean;
    pinnedCodes: string[];
    showNotes: boolean;
}
/**
 * Settings for the entries grid — which tables the pickers offer, which
 * non-source languages show up as columns, and whether the notes column is
 * shown. Every control here edits a local draft only; nothing reaches the
 * parent (and nothing is persisted) until Save is clicked. Cancel — or
 * dismissing the dialog any other way — drops the draft entirely.
 */
export declare class IrTranslationsSettingsDialog {
    open: boolean;
    /** Hides setup tables nothing in this codebase reads — the same filter the table pickers apply. */
    usedTablesOnly: boolean;
    /** Every language this property exposes; the pin list only ever applies to the non-source ones. */
    languages: TranslationLanguage[];
    sourceCode?: string;
    /** Non-source language codes currently shown as columns. */
    pinnedCodes: string[];
    showNotes: boolean;
    /** Emitted once, only when Save is clicked. */
    saveSettings: EventEmitter<TranslationsSettingsSaved>;
    closeDialog: EventEmitter<void>;
    /** Working copies — edited freely, applied only on Save. */
    draftUsedTablesOnly: boolean;
    draftPinnedCodes: string[];
    draftShowNotes: boolean;
    private dialogRef;
    handleOpenChange(open: boolean): void;
    private get pinnableLanguages();
    private toggleDraftLanguage;
    private handleSave;
    private renderUsedTablesSection;
    private renderLanguagesSection;
    private renderNotesSection;
    render(): any;
}
