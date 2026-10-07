'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
require('./locale-scope-C7rmpwuA.js');

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
        return (index.h("wa-card", { key: '3dacb1a59353ee9514ddd905e4fdd108b41a4f80', class: "ir-ghs-filters__container" }, index.h("div", { key: 'd5ff9bc7581d51f10a66648f74134d96c020574a', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '79e76fbadaac4562384a25190ca1e3d8af746b44', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '7869b19ec94516b6c2b5b339cc7627bdabfc3928', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '3be39c094d388c1415ae00a024c700a011e49c02', class: "ir-ghs-filters__title" }, t.t('Lcz_Filters', { fallback: 'Filters' })))), index.h("div", { key: 'de94b94814627e9271ed5e8dca41bca855703478', class: "ir-ghs-filters__body" }, index.h("div", { key: '38e55818deb10acb4c259edb2b2eefd1fc8f7ac3', class: "ir-ghs-filters__group" }, index.h("label", { key: '100ad2087b4343d10a8df0d3fe0c3042fc6c9d6e', class: "ir-ghs-filters__label" }, t.t('Lcz_Countries', { fallback: 'Countries' })), index.h("wa-select", { key: '08373f6c6ef83cb90971c4cbfc1d6b3e64e46e7f', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: 'e299c0f7c0f00cc5db522c7b89392ef4a72af055', value: "" }, t.t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '7d275360ca065454b05995858a6b813ee8c0cf0b', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '0223aa8e1e77efb037bab96bce3a6be4aef45936', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '69a731b0b5393e8b20266a74d5eb659b6467b1ed', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '20f41f71bc3bedfb31cbc422cfe8c0ed693a5d61', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t.t('Lcz_Apply', { fallback: 'Apply' }))), index.h("span", { key: '98cbe04a0e6bdcacb805d8814ac2e6a9a3d4108f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: 'f656456d0d3e45e3be820c8fbb5a96d2aeb07403', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '1adeb4ef87781e22c2b7e97a3fee6c2af421add8', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: 'bf3125662864aa2381c57fc87338b51d1303954d', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: '302e6952d8e23f69897fa8e0d73222529390df38', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t.t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), index.h("ul", { key: '9e1a00dfe1d9a6228509df6852e3d234a12fb518', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '9cd27c0dbdc780325975cac759852938fe2bd494', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), index.h("li", { key: '97a4ea9c245c89ee1e3a5b30f229af01e06b90ee', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), index.h("li", { key: '3c8f5074a1b0ad1a3a98b1cf969be1153ca51057', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), index.h("li", { key: '30e3591dc58b681576bb781a0d1d2a170356c5e9', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), index.h("li", { key: '6ac5f1210b80a7c4863571776059ea8cfae18750', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), index.h("li", { key: '0d32753bad3887d79c136ecd2bd67acb6ba1ed54' }, t.t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
