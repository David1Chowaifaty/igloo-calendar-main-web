'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irGhsFiltersCss = ".sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}";
const IrGhsFiltersStyle0 = irGhsFiltersCss;

const IrGhsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterApply = index.createEvent(this, "filterApply", 7);
        this.filterReset = index.createEvent(this, "filterReset", 7);
        this.countryChange = index.createEvent(this, "countryChange", 7);
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (index.h("wa-card", { key: '49a6e8ab9c58d2fab66ca416eae5002bfbb31589', class: "ir-ghs-filters__container" }, index.h("div", { key: '1c78999db03ccd92c11ba49add9d69dab9b8208d', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '2bb230e94273d093a48b9029b45f7f3bfb207582', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'f0d66f4e24a9de3e4301e5f953747692b39a4f6c', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '352b0bb8ffa901012b7c3b9733ce3d6a16ac997f', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: 'ca389e90dc0f62999e93a5e59710874bfe893cb9', class: "ir-ghs-filters__body" }, index.h("div", { key: 'c9a1c9e04ad8de7e3ce52a456767f787df037176', class: "ir-ghs-filters__group" }, index.h("label", { key: '6082d2afb1f1fc84a9b57a8e94594bf393d2bf34', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '5f61cda20384ce72a339e07ae60aa0f55e23a38e', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '6341a4053f61bc1bb601550ba2060d170574ce12', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'ce7305fe78e20724cd95af4219607b17c20ea8da', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '4a0936b1084f4327e55b268e6a1ed292964d5d33', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '0a690ace9aa3a6cc07c4f44a6df8290bb9064c93', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '327db28848ebd2608d90fdf12947bf9b37904d15', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '28c8619c69de84fbea72b5d28c9314b926b2b52f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '3b19545529c421ab29fd25082ee312899b9aab9b', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'b36017e8adfdefdcebda07198a02b129632ce5f7', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: 'c5ca0b13fc6710c1465539fe6da83ca7aaf96cb6', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '1f284d1ad8b66d877b38780058e0558f3bb737d9', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '7460a8aa6b28e9c1d8903881110a647f4d2a0681', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '8355ea5cfc03d082ba1fa7cb0c1264f90bd51c29', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '63bab520b7587b0bdeb684ff04df9fb2302f74e5' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'c7079a08c51ee3fecafd19a348b7acb77e60a849' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '942aa2eec599889824f601c8a42da38adbbab3f7', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'c4b0aa7c8e7ee8f93e3ff49e6c78f48ca13e334c' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: 'd1f8fceb5c89a3a353709af941c72031e6881c07' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '7600b20e73b08e1f545962927f48fdc5e9cbb5c7', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '61e57c2d2409b33ccecd9cb68ebdf10d9b16a311' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '6500a9801a7f84fe8e26341706d1266b3db2014d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'c2ece068e287b24204959665df2148b834c97bb0' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '769f3d21770d17cea5c883aad609fddda347fa04' }, "Publish"), " to initiate review."), index.h("li", { key: '03c8c4957801bc55f85040d59432f99bb74f2413', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '7cbb0683aacdb3cba95869417354f4aa8fb9777c' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '334a425243032dc61ea628432c8b4166555e9866' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '3fe99f69ea50734cb4f01074d469c7a3f6a5e3c9' }, index.h("b", { key: 'ee437c12749afe5c3045fd2f6c17637ded60df99' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '4b20ac3d4673ac258d57aaa0098f76fb266ff77d' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = IrGhsFiltersStyle0;

exports.ir_ghs_filters = IrGhsFilters;

//# sourceMappingURL=ir-ghs-filters.cjs.entry.js.map