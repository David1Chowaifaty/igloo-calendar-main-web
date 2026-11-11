import { t } from "../../../services/locale/t";
import { h } from "@stencil/core";
/**
 * Asks whether a language edit should cross into or out of the sync-guarded tables
 * (see `SYNC_GUARDED_TABLES`). Both edit paths await `ask()` mid-save, so the answer
 * comes back as a promise rather than an event.
 */
export class IrTranslationsSyncDialog {
    prompt = null;
    /** Guarded tables ticked in a `choose` prompt — none by default, so nothing guarded is written unless asked for. */
    checkedTables = [];
    dialogRef;
    resolveAnswer = null;
    /** Resolves with the user's answer, or `null` if they dismissed the dialog — the caller should then abort the save. */
    async ask(prompt) {
        // A prompt still open is superseded — treat it as dismissed.
        this.settle(null);
        this.prompt = prompt;
        this.checkedTables = [];
        this.dialogRef?.openModal();
        return new Promise(resolve => (this.resolveAnswer = resolve));
    }
    settle(answer) {
        const resolve = this.resolveAnswer;
        this.resolveAnswer = null;
        resolve?.(answer);
    }
    answer(answer) {
        this.settle(answer);
        this.dialogRef?.closeModal();
    }
    toggleTable(table, checked) {
        this.checkedTables = checked ? [...this.checkedTables, table] : this.checkedTables.filter(name => name !== table);
    }
    renderBody() {
        if (this.prompt?.kind === 'confirm') {
            return h("p", { class: "sync-dialog__text" }, "This key has duplicates in other tables. Apply these changes to them as well, or update only this key?");
        }
        if (this.prompt?.kind === 'choose') {
            return (h("div", { class: "sync-dialog__body" }, h("p", { class: "sync-dialog__text" }, "This key also has duplicates in the tables below. Duplicates in other tables will be updated. Tick a table to update its duplicates too."), h("div", { class: "sync-dialog__tables" }, this.prompt.tables.map(table => (h("wa-checkbox", { key: table, defaultChecked: this.checkedTables.includes(table), checked: this.checkedTables.includes(table), onchange: (e) => this.toggleTable(table, e.target.checked) }, table))))));
        }
        return null;
    }
    renderFooter() {
        if (this.prompt?.kind === 'confirm') {
            return [
                h("ir-custom-button", { size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.answer({ kind: 'none' }) }, "Only this key"),
                h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", onClickHandler: () => this.answer({ kind: 'all' }) }, "Sync duplicates"),
            ];
        }
        return [
            h("ir-custom-button", { size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.dialogRef?.closeModal() }, t('Lcz_Cancel', { fallback: 'Cancel' })),
            h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", onClickHandler: () => this.answer({ kind: 'tables', tables: this.checkedTables }) }, t('Lcz_Save', { fallback: 'Save' })),
        ];
    }
    render() {
        return (h("ir-dialog", { key: '61de6409c36e6ea2dc30a789b9e2ead53bf10766', label: "Sync duplicates", ref: el => (this.dialogRef = el), onIrDialogAfterHide: (e) => {
                e.stopPropagation();
                this.settle(null);
                this.prompt = null;
            } }, this.renderBody(), h("div", { key: 'd5b846d6bb061a521531700fd1917180122121a3', slot: "footer", class: "ir-dialog__footer" }, this.renderFooter())));
    }
    static get is() { return "ir-translations-sync-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-sync-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-sync-dialog.css"]
        };
    }
    static get states() {
        return {
            "prompt": {},
            "checkedTables": {}
        };
    }
    static get methods() {
        return {
            "ask": {
                "complexType": {
                    "signature": "(prompt: AskablePrompt) => Promise<SyncAnswer | null>",
                    "parameters": [{
                            "name": "prompt",
                            "type": "{ kind: \"confirm\"; } | { kind: \"choose\"; tables: string[]; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "SyncAnswer": {
                            "location": "import",
                            "path": "../sync-policy",
                            "id": "src/components/ir-translations-manager/sync-policy.ts::SyncAnswer",
                            "referenceLocation": "SyncAnswer"
                        },
                        "AskablePrompt": {
                            "location": "global",
                            "id": "global::AskablePrompt"
                        }
                    },
                    "return": "Promise<SyncAnswer>"
                },
                "docs": {
                    "text": "Resolves with the user's answer, or `null` if they dismissed the dialog \u2014 the caller should then abort the save.",
                    "tags": []
                }
            }
        };
    }
}
