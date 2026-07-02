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
        return (index.h("wa-card", { key: 'a39dc2c0dd5054f5015a6f749fcd87be08efe822', class: "ir-ghs-filters__container" }, index.h("div", { key: '08411e10d0c9d43b0ec4c58cff012107386fc571', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '8386ec1a67b87e4dfd25901185e7e01e87be3d1f', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '66b2a25e54b11c7307e7aa173730f8bb34e4af5e', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'e17f0b1467306e1685b43d83fb4f07723e3e66f3', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '4340c1bc420c5be2c65a1554c9da1dae09973bbc', class: "ir-ghs-filters__body" }, index.h("div", { key: '89542dd086260c1fbee9eb5b85da227e989329d5', class: "ir-ghs-filters__group" }, index.h("label", { key: '1172820558e94f8ab9603033f6277d0843e36cb6', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: 'c98321051cf5473688045868a9a4e7880abf5a8b', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '9bf4f1ac62fc60452e7d95363276ff87faca3db8', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'da16dfcd2076d8654eed53d252fc7cc9a0de6f7a', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '9a907c11ffc199b1b2f509fb91c7f5f8aa93051c', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '749a4e073af3514ac4451985658c7dd410c538ea', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '03e64b3771a4c7825c40a3e4387797c634e7d844', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '33ebbfbed8e6b2194e215c0aaee400c4aeebeabe', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '4bc463445e59b8c538ff25db5b77677f6683da3d', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'd9c52d8db34931614d2c14e4c54d025be909d35c', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '411824061c40d24210ba085cf8e24cff65efd8ec', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '5659c70047ce05790a666700faa5db0953b696b7', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '8175247658aedd113622d5fdd87d25b65b47a4e3', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'a88787b89c4d24e2fa40b543e9805b5ecbca1d43', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '8696a839447572b4afa2e61087278b8d621d2dbd' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'e32786d5e997bcd4f6d6365eda4c20a3667852d5' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: 'a9a2f8242d37657ae8ec9daf4e4e25c4105f4882', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '46958287c60d08f2640cedfe388c7aa7f75fd71f' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: 'e5f78b488ff216279145fd7d4381cb735b802079' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '3555d3eb7493b79c7ef9df7c42bca3ff5affd893', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '6b271e37de03654ad36343d812e64b3081012813' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '3b12f2dabb7f7d6264573b9390533fa7f09bb398', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '7e424be014fac84789683e48bcce94cc3ddfee9a' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'a55c2ea922a9343d4ba48701a74485c509f93717' }, "Publish"), " to initiate review."), index.h("li", { key: '55b903565cfeb08e007674c142144d81084d4ad6', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '56f78654a0d62706f4901d9877e682ed66e76537' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '03622f924ac3c4818746b9e879f7e07d13c2f935' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '01c12873285019c3a0970548593192511baf3f6f' }, index.h("b", { key: 'fdc374260cba739c3ac506cfefae64f7752cee05' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '159c8eab87e1f84b3d4685318c285ba38842d7a4' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
