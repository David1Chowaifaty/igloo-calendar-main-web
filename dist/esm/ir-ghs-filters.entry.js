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
        return (h("wa-card", { key: '19feebabb658655aca55dcee9413d949407fc93b', class: "ir-ghs-filters__container" }, h("div", { key: '6832d47e1187c0bee33738b62f7da6cb3e4d74c8', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'a1a4e80b352fc7c0bbd96f20e907cbc797912214', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '07f70269f305ec4ef3e2bad9130d008f8b017049', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'df20369ac8368cce709ac0b03523017d671d0524', class: "ir-ghs-filters__title" }, t('Lcz_Filters', { fallback: 'Filters' })))), h("div", { key: 'af86f89880f2db8e4e0b95b1bf4aff45ffe74967', class: "ir-ghs-filters__body" }, h("div", { key: 'ab7ca49bba6c9f0686e26ba30b0c4d7a7a55ea36', class: "ir-ghs-filters__group" }, h("label", { key: '30b2be48d8c79dfddb7fea21fc0a10acfd51c3f5', class: "ir-ghs-filters__label" }, t('Lcz_Countries', { fallback: 'Countries' })), h("wa-select", { key: '1d293f57a0954ea5f9fd8361d5679387776f0fac', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '07dbf9ff269002aa823c5a83d8f0f1255f909471', value: "" }, t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '3075bac37f32a69a986d8daa9b2343b2dc30e9d7', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '4505fec84677ef6bcdebf62d8e4a919987a6a239', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '0b00c3f0d85d4cdea56f27afb0596d9280f5d9ce', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '705d494e2b0525bf2132f048079c0ad510cdb80a', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t('Lcz_Apply', { fallback: 'Apply' }))), h("span", { key: '86c2d96de2f228ed2610c38dabefdaa6dc355f3d', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, h("wa-icon", { key: '66d57c8a00fedfdc9f0ec8b2f33b76718fb6dbf6', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '909118d8d64e7e2d45e010b36160161299955440', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'e2fa54f28ac865fe2c9629cc014081431ee7d766', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, h("h6", { key: '18936ace7abd94f80e296368998b309a16a54fa0', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), h("ul", { key: 'dfe0e580dde25abf2c8e99d0fd93da641912efee', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '86c304d5e4b2f4bd41da2c5ec574c6d68e3c63a5', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), h("li", { key: '0688c04232c9029b89dd6aa60e58e3aef1a3366e', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), h("li", { key: '4e5046c14dbd82811539ef20a0082fc5676f8c74', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), h("li", { key: '056bffc2cd6d53ad9cf1f607703e72789bdb06bd', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), h("li", { key: '8d5e10957db2c7e17d1e7509c3d63574b1ee6d32', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), h("li", { key: 'e5892e13b60a558d80fb8713c69f558ecf9a32eb' }, t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
