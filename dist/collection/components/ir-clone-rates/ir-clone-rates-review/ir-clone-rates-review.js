import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrCloneRatesReview {
    open = false;
    /** Summary lines rendered as label/value pairs. */
    rows = [];
    /** Shows the Confirm button as busy and blocks Go back while the copy request is in flight. */
    loading = false;
    /** Fired by Go back, the close button or Escape. The parent should set `open` to false. */
    goBack;
    confirmClone;
    dialogRef;
    componentDidLoad() {
        if (this.open)
            this.dialogRef?.openModal();
    }
    handleOpenChange(open) {
        if (open) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    render() {
        return (h("ir-dialog", { key: 'cbbdbe0a18082e562fa88e517e6a4712f80a1aaa', label: t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, h("dl", { key: '10e9cc0089a1e1ebc37495af96936dff67d4d336', class: "clone-rates-review__summary" }, this.rows.map(row => (h("div", { class: "clone-rates-review__row", key: row.label }, h("dt", null, row.label, ":"), h("dd", null, row.value))))), h("div", { key: 'ee35bc9d45b240eabfe9c5aeb6a836afadccdd44', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '086a20438dbf5cced94547184746ba4ea140594c', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: 'd01dd0b8fbd1c0eedc368af9c88bc5e6dbd7b9f5', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get is() { return "ir-clone-rates-review"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-clone-rates-review.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-clone-rates-review.css"]
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
            "rows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ReviewRow[]",
                    "resolved": "ReviewRow[]",
                    "references": {
                        "ReviewRow": {
                            "location": "import",
                            "path": "../clone-rates.utils",
                            "id": "src/components/ir-clone-rates/clone-rates.utils.ts::ReviewRow",
                            "referenceLocation": "ReviewRow"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Summary lines rendered as label/value pairs."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "loading": {
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
                    "text": "Shows the Confirm button as busy and blocks Go back while the copy request is in flight."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "goBack",
                "name": "goBack",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired by Go back, the close button or Escape. The parent should set `open` to false."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "confirmClone",
                "name": "confirmClone",
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
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
