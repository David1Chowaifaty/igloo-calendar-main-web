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
        return (index.h("wa-card", { key: '19c681f9da54afd92d75b1f6c0890024e97578bf', class: "ir-ghs-filters__container" }, index.h("div", { key: '169e4ac622575472ed1af58cdabbeab2bfe27373', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '575f7b367f6249ca62999e013f3ffc614ac0e6a1', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '9a9e3a7caab00b90a14102f7405944259e00a1f8', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '86c45d884214eb844d03ba341f3cfe2402b60cfe', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: 'b0463ea9160a9f4d7af65f2851d4770f928400de', class: "ir-ghs-filters__body" }, index.h("div", { key: '80a2dba269907c44ebb6c96e11d27fa80ea24fe3', class: "ir-ghs-filters__group" }, index.h("label", { key: '8dda9357e324f46b5b89bde4972ce92ec87d7e44', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '3239337f5c034b52ae99d1931ee389fb2b8b8a0a', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: 'ed75e9a58d4d62720a4320206e24c31550cbce43', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'd515f0e0b575e3b1fb6f51c3f8502299386d3528', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '1df29df585a1c9c4baa91bbe3e99b65a042068d0', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '134ea775bb3b086503a2529223eacc59e0e33a9b', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'd2fd4146a1ee164370a79090ef9b7a3dc94c4dca', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '82891765d3225d0d56cae02d73695a5ac47e1b1f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: 'afef5f521bc18719690707ddd5f4acbf591c38b9', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'd3a84c5290a054396ede1cd7812bed592948b36a', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '85cb7f376bef4015e064a7bbd3712cfba8a40740', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: 'a86537d1dc4b807416546864f8c3440bf97a0e10', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: 'a50f9aa20f71da55ff28127a7298d91cb5068d33', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '94dbeb1739c4570f930ebe528cdad2d8d7827306', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '57ba44e3d1a15118059e250b56c380e053a247be' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'cd4c6b84396f6a39453715e4ea2fe6c0da32e10c' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '18e081a32c2587438622e564f912d0987367f1be', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'd80431007bd220ddaf5d879f6cfb6b395d182a77' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '61170a58c2168708a7d60dee9c434ec7bf994312' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'd4ad5947309913fc3c6a364efb62e53debdecf29', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'ea3cf6218420547d0d93556e7ff0cf52014439e1' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '28053c0be678f315b7e7e883b69eb18ec2630f5c', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '84a8df2414b259faa6864c7522df93b68bebf1a4' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '3724032154a2909acadfb100dd27164725f573c9' }, "Publish"), " to initiate review."), index.h("li", { key: '901c05b8781dcefc9ab792ba301657ae85698877', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '3f42c43fe1aaa869adba7ccc7f2c0a6c2798f644' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '9f81039647ea62ab718fd5ff366f3a96f1312d05' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '1ee4118703e0543d715092c34fbd210d5cea1c46' }, index.h("b", { key: 'f0001ada35c8e2e3069c36d1d8f7b91a0a9d2cf1' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '67318eaaaea9d8506293e9e5554d6784549ef5f4' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
