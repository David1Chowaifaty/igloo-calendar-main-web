import type { SyncAnswer, SyncPrompt } from '../sync-policy';
type AskablePrompt = Exclude<SyncPrompt, {
    kind: 'none';
}>;
/**
 * Asks whether a language edit should cross into or out of the sync-guarded tables
 * (see `SYNC_GUARDED_TABLES`). Both edit paths await `ask()` mid-save, so the answer
 * comes back as a promise rather than an event.
 */
export declare class IrTranslationsSyncDialog {
    prompt: AskablePrompt | null;
    /** Guarded tables ticked in a `choose` prompt — none by default, so nothing guarded is written unless asked for. */
    checkedTables: string[];
    private dialogRef;
    private resolveAnswer;
    /** Resolves with the user's answer, or `null` if they dismissed the dialog — the caller should then abort the save. */
    ask(prompt: AskablePrompt): Promise<SyncAnswer | null>;
    private settle;
    private answer;
    private toggleTable;
    private renderBody;
    private renderFooter;
    render(): any;
}
export {};
