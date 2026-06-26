'use strict';

var index = require('./index-DYQrLNin.js');

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
        return (index.h("wa-card", { key: '4d94f6a52a6d46485f9b193a693c72bed9309b28', class: "ir-ghs-filters__container" }, index.h("div", { key: '7814f2d2245bf01c389e806f993be6c86172d0bb', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '64ce9d5fc1e936ed29fea0ca718efefb9f66640b', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'a463669da2ca5d2e7c3b0d3c1ebea2b9ac85fb60', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '208a10f9b0f19b26c399ab8ce68af267ce8e9f90', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '1b7c336a8b443a46032b5bcce986ecab98bf9149', class: "ir-ghs-filters__body" }, index.h("div", { key: '6851121d894dfa81578e1f9f338d8a64436b451f', class: "ir-ghs-filters__group" }, index.h("label", { key: '566d832682d4c387045ec2168bff0dc05b44115a', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '3b58ca2d97c25b870a434b9bd0610eb28c3d6b35', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '6c6c78e204275c52c8e91507b0f081acb31dc270', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '3dbd20941970cbce54d76dd3208a4d404611fbc1', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '022a61b2560b4f2c2d15c5597617869dbae71c54', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '73f7ef6b76c24e01338635bbb5b730bc81b9e5dd', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'f45ecc07ebf1e0fcde0a07b3dc2e4731e995c053', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '0c325c2e1194f6bf1fe849b2c488f5b212ba841c', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '1a48406bb6c599d971852ef6cba52bee66dd05e2', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '64242d68ee8539ee05b75d86bb7efab3370b65e0', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '160f873766c8f0c9f454b0ecfa83a2fb4c0bb619', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '4a24c0cefd89f98fb8bf5eb92f84878ca6ad83b1', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '0f7598be6fcdfc7db8a41ca20613f03764019f45', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '6bc1b933d2a4c76dee06d689ecc2a9c35fc7c9a1', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '419221635dd6e2497ffaa0a7bfe525c703be73cf' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '63758a377932c8f60de16dd8caf47ab97bde8e1b' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '23f9e6ec72a7eeb595bde46bcf023cc7669f145e', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '3ed42120c316ab7006a1069ff1cbfaddf42172eb' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '6b0ddd4478a7346401bdfa69774207b46775171b' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '73f750b3bb090127c7d09655ca4817696a104711', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '0958688ab2fe6257847846f021b9d57e0efdf0a4' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '64745df1cc83e36ad8b0f61daa98cfa7bc010efa', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '0bb0c9f45545a475cc086cd1460932b7d83bba28' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '4e9523024118875293ebb56f2d237fcf8ff02d60' }, "Publish"), " to initiate review."), index.h("li", { key: '89e7ae2b93934b72d61c7c91e9f55f261248097a', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '8e8443f353030cb64693d04caee65644619c790b' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '022a2b8c05d00514b9c7227db893032d50e74d37' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'c5fd5abf84f7f0e48b3ec77fc28cbc120ddd1c27' }, index.h("b", { key: 'd4e374c64ed55add921ae53aae45491c33d70a59' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '6e507d32d997b82223f109610db707db547f8a3e' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
