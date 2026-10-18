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
        return (index.h("wa-card", { key: '7ee8ed2fa70e93f84a22ce599b2fd2ba99a25c22', class: "ir-ghs-filters__container" }, index.h("div", { key: '0762fb83c36d2944c8f5d5e67e00b5b490d0d7fa', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: 'c0fed6de5a7511ca2821b74d92d5ce7a902efc72', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'ce150573c19ff4946f8d912fc898316f5600827b', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'b22a5b843e99b919bd3eb027e99ac3292b795671', class: "ir-ghs-filters__title" }, t.t('Lcz_Filters', { fallback: 'Filters' })))), index.h("div", { key: '5fa931f5b4a391b9affc3a7958496ddaec8fce38', class: "ir-ghs-filters__body" }, index.h("div", { key: '41e8320ccbd7a1825325562a250294def6a9fa3c', class: "ir-ghs-filters__group" }, index.h("label", { key: '2a07921babd529803dcafb5b9582f860062c71a9', class: "ir-ghs-filters__label" }, t.t('Lcz_Countries', { fallback: 'Countries' })), index.h("wa-select", { key: 'b3d30561ae805f017699738c83d971cfa92b33ec', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '043f86f435f7c2dd9d91cdeb5ecdc28694d9708f', value: "" }, t.t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '57678e22092ad01355d265f0bfe79e2f386788b8', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'ec29070661f3f056592ba6baee0b4367d6ebd04f', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '12a70941589ab9021b2bc44fa086425eacc9d4b9', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '3235fa9908504731806bdb1500dfebf444d11dd9', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t.t('Lcz_Apply', { fallback: 'Apply' }))), index.h("span", { key: '0da43a2c96217ccc0004797448a95acd7ee604bf', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: '3798d0e22468b362018668e4a2cd0194ca9fe69a', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '2288615c86120fa7bf733d739e17d35b4f212228', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '2040b269cdf2ada256ce7397a7cf172426e3f709', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: '50d50c4a03372c44ef52d1d04390ca16be04ed95', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t.t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), index.h("ul", { key: '34b9bb447afdb7f3c11ff4422c22dcdcb2f81142', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'aee0ae0a8f3836face49adc523b5c5babe49219a', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), index.h("li", { key: 'f97ac7ed9dcf8007c87e97cbfb32e7b50f93fa23', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), index.h("li", { key: '55eac43da9febd49f565343c32ef6c32edd47b01', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), index.h("li", { key: 'e07bb702f636866ad3bf904602bd7d514bf5a2fd', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), index.h("li", { key: '80410632cf84b9dfe84dc99897070d1fcbdbc75f', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), index.h("li", { key: '6530f7a2d0d30fc2b833452260297cc83319d94c' }, t.t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
