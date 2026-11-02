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
        return (h("ir-dialog", { key: 'd5d90e5799e21ef38066b993ccdc37aefb367573', label: t('Lcz_ReviewYourSelections', { fallback: 'Review your selections' }), lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, h("dl", { key: 'a85765bd85975360272bb18bce2422fdd494fe12', class: "clone-rates-review__summary" }, this.rows.map(row => (h("div", { class: "clone-rates-review__row", key: row.label }, h("dt", null, row.label, ":"), h("dd", null, row.value))))), h("div", { key: 'd165a41b6735fd1e9db280666af6ff89cba5187f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '5978984767d68eded124d0e57768c89e1393ec1d', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: 'cd630bc4270b5060f956badbf63cbdce9c8e1aac', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

export { IrCloneRatesReview as ir_clone_rates_review };
