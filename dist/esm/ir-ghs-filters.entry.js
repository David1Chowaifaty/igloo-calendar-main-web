import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { t } from './t-DTGA0v_q.js';
import './locales.store-DsOXxI8k.js';

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
        return (h("wa-card", { key: 'a99c532ed99c0afc018451010706e935f8c10cc5', class: "ir-ghs-filters__container" }, h("div", { key: '2514407d870f33ec8ad5c485951624a2e0e39e15', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '13492f32e022a53c4aa700d4f90731b2de9a7164', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '429651728241a24a867c1673d04d5ed1f8bfb4e1', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'e08f25a03076e25d50decb51623c34282021c69e', class: "ir-ghs-filters__title" }, t('Lcz_Filters', { fallback: 'Filters' })))), h("div", { key: 'cf21e45cb907111ed15b951f417f33f8272ee17e', class: "ir-ghs-filters__body" }, h("div", { key: '5aec457a6d867ebfb74a12a7c122fad117be2ace', class: "ir-ghs-filters__group" }, h("label", { key: 'b9f19d1619af845dbbaab6579314cbf562a70f7c', class: "ir-ghs-filters__label" }, t('Lcz_Countries', { fallback: 'Countries' })), h("wa-select", { key: 'eefee97615fe730a12f4382d552528390b5f4730', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '78563ba4a637e16fc8714b660778c26c9abc9af8', value: "" }, t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '9db8790798d5f5744dfe2be3370542a9cc72ae8b', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'dcf31605ebab6502fe3664ee817103aa00795b9d', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '2840245995ddc7aec415ae67886b5cd90b82d0a5', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '26bd0ae8b8d64de35a05a65687c4364966abcf20', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t('Lcz_Apply', { fallback: 'Apply' }))), h("span", { key: '4fc71a8ba3eb7f148b18920548781a7025b8ef1b', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, h("wa-icon", { key: '487d07508879c6f855ece4e6918d5d085bde0139', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '30208e5fde93fb15d33e6e4745735d35361a62ac', for: "ghs-help-icon", placement: "right" }, h("div", { key: '8aeab64b51ff693698e03ce35910c1fd8c946917', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, h("h6", { key: 'b0513096df3735eddae1553ef2f31095d56698c0', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), h("ul", { key: '8a74e9b051f2ea154736b4f4d3458053ac65011b', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '81b1aaa3b9ce6155f596ab67c4507db6579d40e6', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), h("li", { key: '2edfe7488b7652f2f121632319ca1b01fd09b341', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), h("li", { key: '47bd5dc22d82036c4014cf3596eab1ae1d03f465', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), h("li", { key: 'e77dd1dbc26e4f901ab31659b8ad960dcc12c5e1', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), h("li", { key: 'd09c8aa4dd44c57ebc369ab860412a25676c0e26', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), h("li", { key: 'a988fd2a7e19e2c2e4ff4bf8209b801d5bd13184' }, t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
