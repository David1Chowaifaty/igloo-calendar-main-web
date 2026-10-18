import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irCloneRatesReviewCss = () => `.sc-ir-clone-rates-review-h{display:contents}.clone-rates-review__summary.sc-ir-clone-rates-review{display:flex;flex-direction:column;gap:var(--wa-space-s);margin:0}.clone-rates-review__row.sc-ir-clone-rates-review{display:flex;flex-wrap:wrap;gap:var(--wa-space-2xs)}.clone-rates-review__row.sc-ir-clone-rates-review dt.sc-ir-clone-rates-review{font-weight:var(--wa-font-weight-bold)}.clone-rates-review__row.sc-ir-clone-rates-review dd.sc-ir-clone-rates-review{margin:0}`;

const IrCloneRatesReview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goBack = createEvent(this, "goBack");
        this.confirmClone = createEvent(this, "confirmClone");
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
        return (h("ir-dialog", { key: 'e3de03a0bd754c69c0bf6a0d22b6b6473838eaaa', label: t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, h("dl", { key: 'a70dfb4e95ab7a1146987e9c23821390e316c406', class: "clone-rates-review__summary" }, this.rows.map(row => (h("div", { class: "clone-rates-review__row", key: row.label }, h("dt", null, row.label, ":"), h("dd", null, row.value))))), h("div", { key: '0d3e859d643b96153173b2ca94b0d074d451a0fc', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'a45ec4902ebfda9931de30ad78153839f1acff4f', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: '2d00dc5b88fe4aa6f4442419947361fc7589a370', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

export { IrCloneRatesReview as ir_clone_rates_review };
