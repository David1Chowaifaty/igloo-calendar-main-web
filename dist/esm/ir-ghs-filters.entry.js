import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';

const irGhsFiltersCss = ".sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}";
const IrGhsFiltersStyle0 = irGhsFiltersCss;

const IrGhsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("wa-card", { key: '0277d90196f1c76e8945760accb70e884c40c6b5', class: "ir-ghs-filters__container" }, h("div", { key: 'eae443d131ff67f1a0ddba991cff0bf63af97814', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'd1eaa973b0eb1e67be6bd90c37df181301cdb1c0', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '678ff9eecb7948b6765156ff5d9af45771595473', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '31e172314ca1ca0739ec62195f5102f998f9f815', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'fc2e139f027552fb1002e58e6babd8c35fabd26e', class: "ir-ghs-filters__body" }, h("div", { key: '38d48695da31b80809065def8442e87432152213', class: "ir-ghs-filters__group" }, h("label", { key: '18e0fb50cfd7e5996b4120fd531f88b6d6d286f7', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '8201ee6ce8006137cbc253c752136beadf86fce4', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'b8143f22572c39505a6e69c19edb27274ccbbeea', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'aee1aa3bfeb2b05233c85fe5e47a1ccc2a83618f', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '87cdb9ab4308f33616d8f90c5d0af3c6de44d4da', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '6c61518f0f2c692c3f8627eac78e1252622c57cd', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '5109be1a3d3277036a86f06a6b49bf68db6f84a4', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'db103b270ccd143ae5a1ded84dbee002e2091a9e', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'd52c79c082d07faaed54e4899dd8830082b5964f', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '342dea392601c595c0183779fbe5948d74a7f6e2', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'f6f904f00a42d309f3a1ed79a6ecb6a1b14392eb', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'c4efcba1947ceae50cbc8c8c21a6c9248a109c23', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '51b4ca9bd32bb47c5ccfbc0d2c89c07407dc76f7', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '8ba68abd71f494255bcde62d146ee0576de89d56', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2942c805ba4f45982b5720677087244a49f918db' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'fd11e8920daf5b838230f2ad0ac785a188b7010e' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'ee71dc99858d11f95e2262d272785e479eecf498', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'dc308dac68539192544eec9c6b30aea4e8567aad' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '7aad65495a13e0802691befd3f21ff4c0301c635' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'd519cf079d830af05885b94d36a7524c52334b33', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '542b7c429969581ab9ca1bfbab6e1944b726d044' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '4bbad3f3d812b5616777c7f07aca6d2f3ecde38a', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2b38bb993e276ee5004c7987ea68b28536cea101' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'e56db64bbd11425734c779cad62bd8f230130290' }, "Publish"), " to initiate review."), h("li", { key: 'cde8d116332eeceeb1ab3b4987a45e3a5f323513', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b32227f6007a595b608e2aa014a070350faa0951' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '91b67c81754a694cf97e5e3be5fb325fbfdcff8c' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '84be3ba3cb711b75667eb83ea244559fdf00b302' }, h("b", { key: 'fdf2ddb3ccfb7d22a7c543ca9c0b62e73f5a76a9' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'e4b54a38e25c632a24349e0e354e497005942e35' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = IrGhsFiltersStyle0;

export { IrGhsFilters as ir_ghs_filters };

//# sourceMappingURL=ir-ghs-filters.entry.js.map