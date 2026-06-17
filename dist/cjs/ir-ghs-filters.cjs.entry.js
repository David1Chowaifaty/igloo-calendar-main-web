'use strict';

var index = require('./index-DtXemfU-.js');

const irGhsFiltersCss = () => `.sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}`;

const IrGhsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterApply = index.createEvent(this, "filterApply");
        this.filterReset = index.createEvent(this, "filterReset");
        this.countryChange = index.createEvent(this, "countryChange");
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (index.h("wa-card", { key: '49a6e8ab9c58d2fab66ca416eae5002bfbb31589', class: "ir-ghs-filters__container" }, index.h("div", { key: '1c78999db03ccd92c11ba49add9d69dab9b8208d', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '2bb230e94273d093a48b9029b45f7f3bfb207582', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'f0d66f4e24a9de3e4301e5f953747692b39a4f6c', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '352b0bb8ffa901012b7c3b9733ce3d6a16ac997f', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: 'ca389e90dc0f62999e93a5e59710874bfe893cb9', class: "ir-ghs-filters__body" }, index.h("div", { key: 'c9a1c9e04ad8de7e3ce52a456767f787df037176', class: "ir-ghs-filters__group" }, index.h("label", { key: '6082d2afb1f1fc84a9b57a8e94594bf393d2bf34', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: 'a1e00040b48f2897815c3c9f2f4ee2186e7d2da9', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '2004958bfc7cbf24ed7510625a98a26a417eff6f', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'ccb4a7b5c6c059756de8672aa7c8d2e09f48a1d1', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'ae1ec7ff5aa9b2c2eb76021ba56ecc14d66a3ebc', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '2575ce503e29b6979be8360bb4cd7fb175f1ce5d', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '1e8643fc0d9627dca9fd8438240d117d64839dd1', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '57e86856ff8d76df2ad5c5ac5c565fae8a3271e7', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '46001a4cb77c565dbedd6b5aec10d96de4064c62', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '6bfa503eb632f0aad0cf6fd407c84ac50d23a128', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '58f01a1c261fb7a18f7e29dd124576f851c3b686', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '97f6521264609ad2deea8caf9acb9d093365bc90', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '239dd405b97b3e8a2f6c5cac54eba22628be6087', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'f2fad7c6fd1f6dd328f3259ca73b6608c1c87978', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '17a23485485e0a354284c81a99ba9c7d1d8181ad' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '5c8147714552f075059274524d556e71db50ab31' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: 'fc8ce23003dac3577a12ef4a5d4fb1d1259998f7', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '00a3c0a7e49c83ad062d82cd558b6987e65899f8' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '461fd5dd441aa73954832ec9484bb42665d2a74c' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'c2b90afc6e5779be56d2f269f4c18ce9b7a6d34d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'bb7a5fa4e9e5787fe4c8b7b34c26403c3252525d' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'fd75a66133016b003bd625ec72d5068df1582bb8', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '94fa3915a552a6467eb87cae1648b7af35e4e3a0' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'deef958982bd84ab8ea2b3d3823bb3c29d9d5a14' }, "Publish"), " to initiate review."), index.h("li", { key: '15d5fe1835ca857dc4f929d2ab924923e38b95d3', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '3800879a4e8721f1f6ee917b6773897073c697a2' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'fe9a71ce9ebaaa28039f2dcc5c4580c38992f374' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'b3b2a505dd10e10573a249fcc3596a9d2aa24156' }, index.h("b", { key: 'ac3ea3351d4732515ea562648c46b3f8700e628f' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '0cbb5c5925b2c1e739387e7cb7784c1686fd2733' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
