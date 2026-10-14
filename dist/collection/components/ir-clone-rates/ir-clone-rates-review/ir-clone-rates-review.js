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
        return (h("ir-dialog", { key: '1127843081d5780988d1d9597efcff23591ff596', label: t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, h("dl", { key: '57137ee96f25916f7368f08bb662affdd9d6bc04', class: "clone-rates-review__summary" }, this.rows.map(row => (h("div", { class: "clone-rates-review__row", key: row.label }, h("dt", null, row.label, ":"), h("dd", null, row.value))))), h("div", { key: '6337d0698fa500663e24aa2b0f2eb8971f4cfe05', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b7bd73393f625da132c46007f4ffed58af8fc79e', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: '0d2538b316b0f825aa1d8cbb5ef5975aa36fb272', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
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
