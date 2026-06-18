import { r as registerInstance, c as createEvent, h } from './index-D8DCR0yx.js';

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
        return (h("wa-card", { key: 'ebd92e13369ba2cd994ad7576bf5fef454dd6eeb', class: "ir-ghs-filters__container" }, h("div", { key: 'b4af80defb80526b4ec8d47f61318d09f8c82674', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '142240a125669060375f5cde8272f919ab1d6f47', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '3984bacfc07565ca1f1ad13123f2635d658b3b68', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '5afcff5f9bce4b0410768d7eb1a57ac06aca28c1', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '89a6db88f9af05019d9bc2a49ebc06a6f0f38cb8', class: "ir-ghs-filters__body" }, h("div", { key: '854832caa632182e8d2822564c903f3b7ca77414', class: "ir-ghs-filters__group" }, h("label", { key: 'e17d99326b196e3cf54c92bc5ce11de73a7a668f', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '2274dad6b40dafdbcd2fc6ffbb2d3b5006f9da04', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '4cbcf3e030358bbefaad83564c32ebb4d6a94079', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '7b7f4cbbfad701133c65d58d259f228d9bd2c875', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '5c7db3f9b1b638fe6b52497f12deea8cc60094c3', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'f983b2fa5bf9b5801f40aeb658215c5645109f02', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '8ed33be8b60c52c0a046a26071dd1c8d92a5a3ef', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'e06d70be99a4270d0503b6f7ce2c074d77f1d128', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'c53b2ea3dfa95019789a8878c8831de1a97b8c1e', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'bec0932787e96bb7ce48d306bfdfcda1057762b7', for: "ghs-help-icon", placement: "right" }, h("div", { key: '331a880aa1815d89051348b1f2635776a95e005a', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '0d6b568016f36695ca3d72804d844ee25c18bb1c', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '48daf81691655354b0e578c411198bdf932c079f', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'c3f88f0ce7a6d0f533f1ec3bf64e159ab31346ba', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'd93f0635c85e3bdf732c7d00fda7d9823cf8cd1d' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '23c0c35ff41b09157809e02d18aff12f4bfc90f6' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '1ac7775bc05d5f13c8624f90028089b00ae9ab12', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'c73ecf177520875867f280a92ce37182eaefe7d4' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'bac928e19fdf695f73ee32d744fb2a19f24c8e20' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '10e4e6795b835877726272541592d9e407dd3ac8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '64bcccf4b32d568b6a581262fa1a145c7f4f1800' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '5b8b2c914435814fe69194b76e95c4f141f8596e', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '582481c7168c58d001717b52150e7642dabd037a' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'fcd94204e19ed9b612d1aa81f59b782dba24052b' }, "Publish"), " to initiate review."), h("li", { key: '21ea2f04c377b3b05e3235127ebd468b67257eb3', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '29f7230982f42d6225592cdc8861e2037925238b' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'e237efa3ad56ce68dd8bd4a71746ff280a37d35b' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '30ad69bcb720135b58f9ca7409b9b111624f4de3' }, h("b", { key: '7093532d2eba891855986a190dfd8fd75692eea7' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'd075c80f54554e43c3d08614c7b98337e09fe4f7' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
