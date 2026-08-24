import { r as registerInstance, c as createEvent, h } from './index-Kqbk9HdW.js';

const irGhsFiltersCss = () => `.sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}`;

const IrGhsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filterApply = createEvent(this, "filterApply");
        this.filterReset = createEvent(this, "filterReset");
        this.countryChange = createEvent(this, "countryChange");
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '60d95555d5465239c717bb03370c6a18b87082de', class: "ir-ghs-filters__container" }, h("div", { key: 'bafd45b4abc68898f7096fb643cbf6e395ff2ba4', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '78b1fca2112e35056fe8c000726ad4a6b0f0e030', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '5daaf5c493f90e1f2b007b976e686da8de5117ca', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'e9ad0884442d7a484699c75a360da747e32bd485', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'c1f94cce5b125396fddf3762ea12bb483ebbcf90', class: "ir-ghs-filters__body" }, h("div", { key: '7e07e9c60f076ad067df321f89993b416d645454', class: "ir-ghs-filters__group" }, h("label", { key: '9682deb9ea4c04f3084a723f8a0e12bb26aa70d7', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '625dc5c57bb25bbb4a7a515a5eec5e8249f16501', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'ad25d478ec0bb5e7ad9fab0e357f978d65654625', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '11758b85a31406da8ff6b4c173d83a9eef653181', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '352020afaf5561f178f5d606d29eba58ad81dc60', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'f1962b87071816fddb0388b1b8f0f550cfc4d6a7', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '4028502aeed4bbdd409bcf6acfe94d6307bbe5d8', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'b3fc4e5bd9ab0ca8b2c5cb7d5dde6d24a0af1b25', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '4ebc56da4e53b6d6cc327a3714e39a00127b3dc8', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '1dde27ebc147140852a23c7691b1421d22448709', for: "ghs-help-icon", placement: "right" }, h("div", { key: '92a3f37d75facbc670628057886a4e7f894f6342', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '39ba7091cda390f26a819c3cd5e2c519f6d6ed83', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '02497b8f9c1c06bceca5907d8c6a464ca00aec5a', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '4bc0026efd6f6fa3f34e3fbb1f394e0ffff07d79', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'befd90e16ac2557fa22f011c8ca344c532753d58' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '2ee15aad1df2285d6041fb816fbcfc9af9470f52' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'd3b06ea8752b893518a774b7ea9c94bd6005e1eb', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'f9e49fe3312a03a78dd2243b0734a003883f690d' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '878d68b3fa6c060e508504d3627879f39286aecc' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '6bd2ab86c9d4a46a156de4a8d68cd9619114e8e6', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '48acebbf4b7e77ab1b82745060a7d536f965ccc1' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '38b3be4562c2942deef1e6b000fbc192e20d3a92', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'a24d498506af90fb8581c5b79edf114e1171e7ba' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'dea8e57be5ab7849c62fb9acca259af1f4c73a54' }, "Publish"), " to initiate review."), h("li", { key: 'cfc251b26e9be1373be3c9d67a165a2e1d8e9a97', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '3cc3504fbb01202d044806dd810d9b8daf4a157e' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'd101133c2f351b88d207f2355ecff54a54b1fe3f' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'd900f02d5dd6d1f907f60a52422ed134c75af259' }, h("b", { key: '8f463ec34325d96a4ec8e6e425597fb8693c5526' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'eb573effc0d0a2a44f739fd213b57db30d62209d' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
