import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

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
        return (h("wa-card", { key: '2acc4b4c7d47fbcc72705c94336c4ee098017c31', class: "ir-ghs-filters__container" }, h("div", { key: '479c2edeedcfaeba0d1b37b33ac5d3cd1cb80bfa', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'e018f9232adfa6d7f840ae47a2769da077fca0c4', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: 'ae5842b7fa923c83618d77d65c5ceddf65993432', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '0524a15a54bfd4701f6c0194095bfae3bc33e2db', class: "ir-ghs-filters__title" }, t('Lcz_Filters', { fallback: 'Filters' })))), h("div", { key: '1bf38580cdeaa6814f593d2c373f08de427dc069', class: "ir-ghs-filters__body" }, h("div", { key: '931f2c6085f61e2160ac7b34ef233fecf90b80bd', class: "ir-ghs-filters__group" }, h("label", { key: '5f50c6d2639c4fb67ea015e9e4940a03b6208b1f', class: "ir-ghs-filters__label" }, t('Lcz_Countries', { fallback: 'Countries' })), h("wa-select", { key: '90966724b0b3f8c529b473aeb9d779e1d1fa4ea9', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'defda2a1d26a48102d1099bd1a51edd6a28ed0bc', value: "" }, t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '25d5b37181e91031d47ec01e73237ae3574c0502', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '43a27a91d052f5a2ebfe57f747b57f23e04cb64d', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'e864c3acdf50407b3163e5714ffcbe73c68dba61', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '2ab5bf462fe6c9dee3dc7144731acb888af79167', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t('Lcz_Apply', { fallback: 'Apply' }))), h("span", { key: 'c4b68c49f5c30dd0d5a9fdafa71b4a6d41d5e83e', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, h("wa-icon", { key: '16201749f52618de9ac5fed13a8bb05e0d397fae', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '4d3a35f5ea82f608c269b6ce8a857533e5b56679', for: "ghs-help-icon", placement: "right" }, h("div", { key: '67a951d436dfef0b531b3fd8416af504abc873a3', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, h("h6", { key: 'c94c4fe52f3f451cee57cd9d0b4c34b9c6de9b2b', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), h("ul", { key: '70fea643bf472c0c80030b0f8693398d4685727e', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '4b27bbd4e6356bfd9be71c709066da5e5fd6208a', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), h("li", { key: 'af37dcf44980d02ebc9700b01043b9d59f90f9a2', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), h("li", { key: 'd40b39cbd521290150e084c242f4a7224160cbb9', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), h("li", { key: 'eb9598e5712050ba15bf6c492ae623921bff3b9a', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), h("li", { key: '06e50d9c10a89a0b9e87ade28b235b3dfe3ea333', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), h("li", { key: '5c2f78c47fb9382248699ef4ae20c801d12c56cf' }, t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
