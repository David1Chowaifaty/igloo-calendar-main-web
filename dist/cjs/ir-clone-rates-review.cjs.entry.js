'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

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
        return (index.h("ir-dialog", { key: 'ccf521fa90d251b57442515866e34b26e6da7fdb', label: t.t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, index.h("dl", { key: '895a182512576806ba814753ea870b933a24f09e', class: "clone-rates-review__summary" }, this.rows.map(row => (index.h("div", { class: "clone-rates-review__row", key: row.label }, index.h("dt", null, row.label, ":"), index.h("dd", null, row.value))))), index.h("div", { key: 'd1fe2bdb9a4efc3bc1b5653e9cf9a6d86b69e584', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '5c500968bc59e7cb2ee604bb9f42d666d8eaca8b', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t.t('Lcz_GoBack', { fallback: 'Go back' })), index.h("ir-custom-button", { key: '9cff1bfbeaada30a555a180bfddd1b276e171b47', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

exports.ir_clone_rates_review = IrCloneRatesReview;
