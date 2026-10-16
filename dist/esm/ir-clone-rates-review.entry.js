import { r as registerInstance, c as createEvent, h } from './index-CwWmK1sZ.js';

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
        return (h("ir-dialog", { key: '83d84a5babee10037751d012da990d4ae76c49a2', label: "Review your selections", lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: () => this.goBack.emit() }, h("dl", { key: '98d0b44809c3b3d25279289f2ae40ef05fdb0e3e', class: "clone-rates-review__summary" }, this.rows.map(row => (h("div", { class: "clone-rates-review__row", key: row.label }, h("dt", null, row.label, ":"), h("dd", null, row.value))))), h("div", { key: 'abef60a14509f2cfbe51ef5eb487c61feeb88c3f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '2457d2be2595836804641ff8afc2790831a197cc', size: "m", appearance: "outlined", variant: "neutral", disabled: this.loading, onClickHandler: () => this.goBack.emit() }, "Go back"), h("ir-custom-button", { key: '3cddadad8b87af1ca5958d065869faf3309953ff', size: "m", variant: "brand", loading: this.loading, onClickHandler: () => this.confirmClone.emit() }, "Confirm"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrCloneRatesReview.style = irCloneRatesReviewCss();

export { IrCloneRatesReview as ir_clone_rates_review };
