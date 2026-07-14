'use strict';

var index = require('./index-Du1V06mp.js');

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
        return (index.h("wa-card", { key: '023ff64886014b6cefe23e3ff570a79f7a40c6cb', class: "ir-ghs-filters__container" }, index.h("div", { key: 'f260af62bdc1bd64670f2f2f9d4b48f79138637b', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: 'f7e213d3275d4aa824f3c07ae80fe4bca324050d', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'e9658257bd93cac5e3d1eaab70ba259d5f6524ae', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'ca5ba6a29f4f3de9600d1a6cc3256e2a5e1abf12', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '28383371785f7550cd3b04e0ba2912183e51c1eb', class: "ir-ghs-filters__body" }, index.h("div", { key: 'c33dde7e5fa8660ccbf1dd209a2590932379b809', class: "ir-ghs-filters__group" }, index.h("label", { key: 'd7c2046858d48df5b928a001bae171d6762dc098', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '2cfd2351f68e28824ef58d047e0643bf442521c3', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '801258f791c14eba4534641027760aa6c21a3ab7', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '134a491f79ab808106d6cb4f9cb67a0ed552f676', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'd7d11c9a39cf236ef340158c177b43eb31814596', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '11972e2cdf12de311b0366282bc475d76538fd40', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '9932b5ddc15827b6f85a572ac13310ca8d474239', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: 'f8c74f3d23bbfed3bf0f7be4741fad1365f79837', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '5ff01b9cf91ad7797b05c66c86fee2305d64d12e', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'cdab94ed58076467bbf79cf42f8e15877c14ccf1', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '1bd5a4e5a05500ba589622f324fa70691f21bf04', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: 'cbdc7e6396f2eb26774ade028e044ee8d2042d4d', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '9f1428a79455df7f84e3891a181ef49922afac08', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '5eff0519342d01004b6d89aec58fcaf2f9019645', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '2c6d73c6d58c2189495c5e92c52e9befe1c085dc' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'e12247cb9fb70a71ba53ef4efbae6d4af62870ef' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '8b41a0a1298ed1962fc3d0ce6868e4f5b0705824', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '9e1d7c9c24ba83dac88dc3bc7ae324ede13339a0' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: 'd0c4e798b9781a5b5830ea605daa1433debf25f9' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'c7d65639fbc708f7778ce8ea3e48c56e4dba20ac', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'ac4a2d1f286945f9df995fc70dd0d38fd71e8dd9' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '8336e81ba01f8a656715eac4219a7abf06f94151', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '9d67272832fcffa588c8a8ef883731d95ae4e775' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'b7f20229dd38b09694c6e4a87c8119ef2b4071f5' }, "Publish"), " to initiate review."), index.h("li", { key: 'cfd193badd5bd1467fff336c33066a107c9b72ba', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'e2dc8379c125e7bacf418a0c66620f9e7f60cc6a' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '6ab99b5e4a6683c06ca58e23b676aa040e1b1227' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'd7c97cf3678e3343f2f49c0322bbcfc10caa1533' }, index.h("b", { key: '5c764098da69e792e70177cd3bceae7fca6adb71' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: 'da544f9caaf9c56f98925ab843dd0de0b9686682' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
