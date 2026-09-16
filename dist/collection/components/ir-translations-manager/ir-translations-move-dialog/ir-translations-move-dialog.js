import { SetupService } from "../../../services/setup/index";
import { showToast } from "../../../utils/utils";
import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
/**
 * Moves one setup entry to another table through Move_Setup_Entry — the
 * backend re-homes the row, so nothing is re-created or soft-deleted here.
 *
 * The destination list is whatever the parent passes as `tables`: the manager
 * hands over the same set its header picker offers, so the "only used tables"
 * setting narrows both the same way. The search box is a local filter over
 * that list, and the source table is never offered as a destination.
 */
export class IrTranslationsMoveDialog {
    open = false;
    /** The row being moved. Its `tableName` is the source table. */
    entry = null;
    /** Candidate destinations — the tables the header picker shows. */
    tables = [];
    /** Language whose value is shown next to the key, so the user can tell rows with similar keys apart. */
    sourceCode;
    closeDialog;
    /** Emitted once the API confirmed the move. The parent owns closing the dialog and updating its rows. */
    entryMoved;
    query = '';
    targetId = null;
    isSubmitting = false;
    dialogRef;
    setupService = new SetupService();
    handleOpenChange(open) {
        if (open) {
            // Start clean every time — a destination picked for one row must not carry over to the next.
            this.query = '';
            this.targetId = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    /** Every table but the one the row already lives in, narrowed by the search text. */
    get candidateTables() {
        const source = this.entry?.tableName;
        const query = this.query.trim().toLowerCase();
        return this.tables.filter(table => table.name !== source && (!query || table.name.toLowerCase().includes(query)));
    }
    /** Mirrors the Edit action's rule — a row Setup won't let us update can't be re-homed either. */
    get isLocked() {
        return this.entry?.meta?.isUpdateable === false;
    }
    handleMove = async () => {
        const entry = this.entry;
        const toTable = this.targetId;
        const fromTable = entry?.tableName;
        if (!entry || !fromTable || !toTable || this.isLocked) {
            return;
        }
        this.isSubmitting = true;
        try {
            // A code already used by the destination is a business exception — the interceptor toasts it and the dialog stays open.
            await this.setupService.moveSetupEntry({ old_tbl_name: fromTable, code_name: entry.key, new_tbl_name: toTable });
            showToast({ type: 'success', title: `Moved ${entry.key} to ${toTable}` });
            this.entryMoved.emit({ entry, fromTable, toTable });
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderSummary() {
        const entry = this.entry;
        if (!entry) {
            return null;
        }
        const sourceValue = this.sourceCode ? entry.values[this.sourceCode] : undefined;
        return (h("section", { class: "move-dialog__summary" }, h("code", { class: "move-dialog__key" }, entry.key), sourceValue && h("p", { class: "move-dialog__value" }, sourceValue), h("p", { class: "move-dialog__hint" }, "Currently in ", h("strong", null, entry.tableName)), this.isLocked && (h("p", { class: "move-dialog__locked", role: "alert" }, "This key is locked by Setup and cannot be moved."))));
    }
    renderTableList() {
        const tables = this.candidateTables;
        return (h("section", { class: "move-dialog__tables" }, h("wa-input", { class: "move-dialog__search", size: "s", "with-clear": true, label: "Move to", placeholder: "Search tables\u2026", autocomplete: "off", spellcheck: false, oninput: (e) => (this.query = e.target.value ?? '') }, h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" })), tables.length === 0 ? (h("p", { class: "move-dialog__empty" }, "No tables match.")) : (h("wa-radio-group", { class: "move-dialog__list", size: "s", orientation: "vertical", value: this.targetId ?? '', onchange: (e) => (this.targetId = e.target.value || null) }, tables.map(table => (h("wa-radio", { key: table.id, value: table.id }, table.name)))))));
    }
    render() {
        return (h("ir-dialog", { key: '4b6544869f2a12dd0c5bf6e210c6373b4c121017', label: "Move key", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("div", { key: '4bd0967784a9fae4d551964a9119974fcae75d94', class: "move-dialog__body" }, this.renderSummary(), this.renderTableList())), h("div", { key: '392d12bc4ad7b44118bcad18ba55b4bd0e5f73ec', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '37e24d027c51570d5f2c93f71f133922e54967da', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '8d545721f8d92e5d5ac6c7a6be22e251169d312d', size: "m", appearance: "accent", variant: "brand", disabled: !this.targetId || this.isLocked || this.isSubmitting, loading: this.isSubmitting, onClickHandler: this.handleMove }, "Move"))));
    }
    static get is() { return "ir-translations-move-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-move-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-move-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "attribute": "open",
                "defaultValue": "false"
            },
            "entry": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry | null",
                    "resolved": "TranslationEntry",
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
                    "text": "The row being moved. Its `tableName` is the source table."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "tables": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationTable[]",
                    "resolved": "TranslationTable[]",
                    "references": {
                        "TranslationTable": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationTable",
                            "referenceLocation": "TranslationTable"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Candidate destinations \u2014 the tables the header picker shows."
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
                    "text": "Language whose value is shown next to the key, so the user can tell rows with similar keys apart."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "source-code"
            }
        };
    }
    static get states() {
        return {
            "query": {},
            "targetId": {},
            "isSubmitting": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDialog",
                "name": "closeDialog",
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
                "method": "entryMoved",
                "name": "entryMoved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted once the API confirmed the move. The parent owns closing the dialog and updating its rows."
                },
                "complexType": {
                    "original": "TranslationEntryMoved",
                    "resolved": "TranslationEntryMoved",
                    "references": {
                        "TranslationEntryMoved": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-translations-manager/ir-translations-move-dialog/ir-translations-move-dialog.tsx",
                            "id": "src/components/ir-translations-manager/ir-translations-move-dialog/ir-translations-move-dialog.tsx::TranslationEntryMoved"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
