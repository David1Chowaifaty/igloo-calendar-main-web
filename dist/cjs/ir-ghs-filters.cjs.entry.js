'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

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
        return (index.h("wa-card", { key: 'cd17bec0c5bf3f62c1153853621ad1a8e0435fa7', class: "ir-ghs-filters__container" }, index.h("div", { key: 'a42ac968c321e4b730555d43fc32c9f7579d88b0', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '3d8e8a3e85a59d5d849661f79c17dae7d990acbb', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'e65a98f9b0c4fe2917d956da54f2bc9cb5ab7c4a', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'aaafffcdf5aa6320a96bd76314d247d8b78c4e6d', class: "ir-ghs-filters__title" }, t.t('Lcz_Filters', { fallback: 'Filters' })))), index.h("div", { key: '1835a7bb4943682ac781838c57429fb846ccaeb3', class: "ir-ghs-filters__body" }, index.h("div", { key: '9600d29331b5062e152ea8e788fd338b1f99cbb9', class: "ir-ghs-filters__group" }, index.h("label", { key: '6437ccd56dd13cf6f564ed28f5e65c25dcacc755', class: "ir-ghs-filters__label" }, t.t('Lcz_Countries', { fallback: 'Countries' })), index.h("wa-select", { key: 'cf2326d7758a2070711439d6840add5ee067cdb2', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: 'd7264cf3fc8e391120faba54979a0fb08b849c31', value: "" }, t.t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '2dc4eab37b0e70ea8258e45f1d91e3627378a39b', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'a235a969c630b0a4d5f8bd415e464f26a3a2ee2d', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: 'dc860d93b73b93ff4ff3577341e0869c7c33e303', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'aef90c66327e795a9b8a2a36b1bb705a7f83bee3', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t.t('Lcz_Apply', { fallback: 'Apply' }))), index.h("span", { key: 'd370630c7ff95cfcf9e06b60ec95aacbdbfb537f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: '0bc4f0434e5fe1e71217f337d02c1f33a7903e85', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '96d532741b4580a0b0497105610d1b3a7c878b87', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: 'e2529484814ac306bac4f9ebef1c5d8021645286', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: 'd736010609bb055da24ff42eacd2acebd8758c77', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t.t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), index.h("ul", { key: '1f9b0fd11c4ceff9c517005cef4545cc8d0527b9', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '6d332c755869b75d796c1445fc2975d3e4c5f657', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), index.h("li", { key: '82cbd44d50f676cb3fd701bbbaea5985c607d113', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), index.h("li", { key: 'e1a1b5d960d73b3429657a3ee8139c56c5986f71', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), index.h("li", { key: '064b1e8435738e36e3f561d3dd5a5957cf9ec99a', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), index.h("li", { key: '67cc2c4f6e47993d294cca72032a8d3dd82b0221', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), index.h("li", { key: 'c5cd4f0081b984d53cc6c4a1679b71a99fc7aa6a' }, t.t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
