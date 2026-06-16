import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';

const irGhsFiltersCss = ".sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}";
const IrGhsFiltersStyle0 = irGhsFiltersCss;

const IrGhsFilters$1 = /*@__PURE__*/ proxyCustomElement(class IrGhsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filterApply = createEvent(this, "filterApply", 7);
        this.filterReset = createEvent(this, "filterReset", 7);
        this.countryChange = createEvent(this, "countryChange", 7);
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: 'ca2e382f548f5e9fb70be2b12b59de85c00013a5', class: "ir-ghs-filters__container" }, h("div", { key: '68d69c7a94306110fd56019b5bb513d6d804932b', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '33ea6bfda764d434660ea979431f75e4e0eddc1a', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '852eafe99f20d4bd829b5ce8bd43c89363ebe3e8', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'd2ab13a947e7b309d568bc870092cc2368cebe70', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '219d4eb112b77f758dc4818c0236055250354dc4', class: "ir-ghs-filters__body" }, h("div", { key: 'acba8c97d9c8e475689107ddca892199fd1a5284', class: "ir-ghs-filters__group" }, h("label", { key: '5ac6cf97d56785f22824526f722d6437ccf8588d', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'a3fad8b47b32bfe91af7e99ddab8f2eb9585f266', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '6341cfc383e9194f233e877f94222e755a20b04c', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '996ff8504f06a11e9033809f367af8de2782bfc2', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '3d5f5c0e22902a54988d9b4734d60c29081d9d3e', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '0cf75b8626d1c731bd9667e375638b71e50aac1f', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'c1dac2ce39b42a29312f7a747e64f7f7f183fc6f', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '69705a4ad9c8b148f56fd244419d3813b5451382', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '2fdea6fdec9b8bf22f5d279d12574b915eb82310', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '5c53bedb11a4237034ac99249d11367f6112306f', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'eb08e412a910f6950dcc06338588d64da8b3c751', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'bb73ddb2d5c5288d23ae1f01940d7c9bd8faeef3', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'e3ecea8fed9ce6b850f5e1f38ed52203291c3b72', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '964abfca8ca400140cacb6e2b108c9d003573b05', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '8e8e89bf592af96b6325049b280c96e0c30f36eb' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ea20b92a4b64a4486a9e67998c5dbcaf5422429a' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'cde953521209f5e8daa69ed0575839cd92daee31', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2b681e3ba2cbe3d3ccfb78c88b5c30a3eb0b6741' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '9d5972de5dbb84c564b11f309dc7b5ecbd689830' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '8bc77beedc09c1e400967ba12128c34823d2f33a', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'bae5445467a8a164f71020cca63772f011ca6223' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '526bd99147c411a360527ee2d125277a9d315bc1', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '74685ea4433940485324e6a661f9f01496952ea3' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '619bd76ba9f39ace1e047aa306783c9beb8f81e3' }, "Publish"), " to initiate review."), h("li", { key: 'e72734cc98b4aad33c33ac91928d168d37544414', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ad87ef945042febf5a2117c8e6b424f873a3926f' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '33f36c47a836b2b66c5b52bfdaca0faddab5b560' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'e991bacd32aaf6ff95abc7b11b560a7e3ee00f74' }, h("b", { key: 'bc1971f4aa96cce56e567fb0f17706d4da27fd6e' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '0014599b7c9610ec2323c3d7bfab6a6b5863db29' }, "after"), " you have received final approval from Google.")))))));
    }
    static get style() { return IrGhsFiltersStyle0; }
}, [2, "ir-ghs-filters", {
        "countries": [16],
        "selectedCountryId": [2, "selected-country-id"],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-filters", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsFilters$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrGhsFilters = IrGhsFilters$1;
const defineCustomElement = defineCustomElement$1;

export { IrGhsFilters, defineCustomElement };

//# sourceMappingURL=ir-ghs-filters.js.map