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
        return (index.h("ir-dialog", { key: 'dc656581e4e95ddcf6e23e5d04b3a88648f90636', label: t.t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, index.h("dl", { key: 'ab645998d8da9595df51638f5005dc525a41ea9d', class: "clone-rates-review__summary" }, this.rows.map(row => (index.h("div", { class: "clone-rates-review__row", key: row.label }, index.h("dt", null, row.label, ":"), index.h("dd", null, row.value))))), index.h("div", { key: 'b51b7c4df3ea788ae9cfd39a63cfbe717d82fd73', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'e708f31d695b26c3882236673ad4df517a40220e', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t.t('Lcz_GoBack', { fallback: 'Go back' })), index.h("ir-custom-button", { key: '476aaf767918b555dc0dc6fdf12bf43312a2472f', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

exports.ir_clone_rates_review = IrCloneRatesReview;
