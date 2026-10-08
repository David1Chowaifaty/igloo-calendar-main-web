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
        return (index.h("wa-card", { key: '5baa822b6cceae6dddc3215e1445526eade6c450', class: "ir-ghs-filters__container" }, index.h("div", { key: '1e90b1b5b3258da6429c0582a62f1c830ac4513e', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: 'debbd7b4e469e974110f8592c83a4c7e97cc5d28', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '806faa3f67e84a2f09c55712888006567c606e12', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'faa9c60c66029129b552a427aac7da0b8ea84ed5', class: "ir-ghs-filters__title" }, t.t('Lcz_Filters', { fallback: 'Filters' })))), index.h("div", { key: 'e44c698a56738d50742206dccf2ad9d3bd0adf26', class: "ir-ghs-filters__body" }, index.h("div", { key: '6d93c4642e8f05743fa30ef0e3ee2678fc8384c7', class: "ir-ghs-filters__group" }, index.h("label", { key: '07016183a6814275ab4cbb10c8cb7deb9c314823', class: "ir-ghs-filters__label" }, t.t('Lcz_Countries', { fallback: 'Countries' })), index.h("wa-select", { key: 'afd95b4e08a9a983fed66770ebcc46d3557b4f01', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '47c62f31654cf9834d8946664b790d98023f3d33', value: "" }, t.t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '18bf00823cb94b2d0b174f8706c31c865eef2060', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'a10adcde938ba5639274c6cf4a06e3b8896e68f5', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '39cbf2bac02cc25df74611cfbe5859933dbea524', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'a1c5324a00c4df65ecb2a4699eec48e005672409', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t.t('Lcz_Apply', { fallback: 'Apply' }))), index.h("span", { key: '6443dad23c550a1c6750e6ad15146e0ae0240773', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: '78be8b28b62d6f57683ae4815029bf44bfe97413', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'aef625f32e6f9cf96e7df08f1beba9238c31e478', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '2391b990ea6d74a922c7b51f6632921ae0eab531', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: '6042b1df2e0d855dddd68c31777f0196a4e1da8b', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t.t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), index.h("ul", { key: 'b088fdf42909bb14574996feee37bd4a9821a410', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '75e0c811c6f88c3775435a54b712d59c79aae2b4', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), index.h("li", { key: '0adad3df0b95d89940d79d89352a7e5380680d7f', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), index.h("li", { key: 'b1b913efd3538ebf49ef18080062b2953900ff1d', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), index.h("li", { key: 'fe6f8678ea8ed50f3f79767931293027df73bf02', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), index.h("li", { key: '08579433a612afcf094f1e81d0c846b5a67eb841', style: { marginBottom: 'var(--wa-space-s)' } }, t.t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), index.h("li", { key: '9756b903833a06cbd27a192ae4acd6f5814871f3' }, t.t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
