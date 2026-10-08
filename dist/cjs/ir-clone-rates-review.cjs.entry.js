'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
require('./locale-scope-C7rmpwuA.js');

const irCloneRatesReviewCss = () => `.sc-ir-clone-rates-review-h{display:contents}.clone-rates-review__summary.sc-ir-clone-rates-review{display:flex;flex-direction:column;gap:var(--wa-space-s);margin:0}.clone-rates-review__row.sc-ir-clone-rates-review{display:flex;flex-wrap:wrap;gap:var(--wa-space-2xs)}.clone-rates-review__row.sc-ir-clone-rates-review dt.sc-ir-clone-rates-review{font-weight:var(--wa-font-weight-bold)}.clone-rates-review__row.sc-ir-clone-rates-review dd.sc-ir-clone-rates-review{margin:0}`;

const IrCloneRatesReview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.goBack = index.createEvent(this, "goBack");
        this.confirmClone = index.createEvent(this, "confirmClone");
    }
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
        return (index.h("ir-dialog", { key: 'cbbdbe0a18082e562fa88e517e6a4712f80a1aaa', label: t.t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, index.h("dl", { key: '10e9cc0089a1e1ebc37495af96936dff67d4d336', class: "clone-rates-review__summary" }, this.rows.map(row => (index.h("div", { class: "clone-rates-review__row", key: row.label }, index.h("dt", null, row.label, ":"), index.h("dd", null, row.value))))), index.h("div", { key: 'ee35bc9d45b240eabfe9c5aeb6a836afadccdd44', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '086a20438dbf5cced94547184746ba4ea140594c', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t.t('Lcz_GoBack', { fallback: 'Go back' })), index.h("ir-custom-button", { key: 'd01dd0b8fbd1c0eedc368af9c88bc5e6dbd7b9f5', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

exports.ir_clone_rates_review = IrCloneRatesReview;
