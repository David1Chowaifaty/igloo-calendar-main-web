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
        return (index.h("wa-card", { key: 'c8e1daa0079a2657e714bd93538346e986fab3dc', class: "ir-ghs-filters__container" }, index.h("div", { key: '5d2f0f043eadc83eebec17fb0c83d304ff0cffda', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '094049554da50ba742b6e614776405ce92897d4e', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '9c0fa368fb4a623945ad2fa4cc2fda88f46fb948', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '74d6bd8e12b134d112f17fa9f5a8eed0ca5ebc44', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '01d6bec2a9109fab2a3c1039274423ac7478ae60', class: "ir-ghs-filters__body" }, index.h("div", { key: 'a76f638fac1fbf58ad9c632e99d67f544ab20eb2', class: "ir-ghs-filters__group" }, index.h("label", { key: 'a37668dd2fae4c8a204989015e5bd2c77bbffa74', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '6e9b43bcf8a7960ae5d9a9918e0175657120b536', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '5a1be4d8089cc22a8c2cbf6186148e2f1502902e', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '58be439762abd11f07e0375471c40df454befd18', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '820a76fae4f6065906b28838223a4c9eb321a95f', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: 'c6901e251bee9cac8f292a8a4030f98b6f5d597a', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '35d7c08f023c830e65e1f4f11e2bd06909bbc841', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '8b8308853f20ff719f492d4b544472a580bb6c92', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '2f532be23bd82c807e188ca48df33c70dcb12a85', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '3e511a4386d57a66f8ecc7dbaf94c5f3f52dc9eb', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '32f2b6d5012ac7588183a6d51ef9e08842fdb19c', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '3a2b810565062dd088a6072c92907a11fd0b5507', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '0f151db174730dbac4bdf985bc4791efa3ac1c9c', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'c23cfa05e958c95427493e9a2ae66d4c5bdbd727', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '54dec2a0c1b87b37631a5c5680e2acf0583cf483' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '98464ca140596b0c2d027d3d723b812e8c0f1c82' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: 'cbaf242019dc55c080c0b7214c2969063a3f8202', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'e9cdea7fd51bdbd1e30b53ba5a441f8fcee7089f' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '438354bb0c862cccf5ce43ea0992b565734a995b' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '1ad843d7f0cf0d39359339a3bbd24e30319c6ec9', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '4225e026e01326761c0bdbc6168482049de262c7' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'fc2635847a8b0c04f7f5a886e1ba9228b94fdcd9', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '1f65b7c6883e692572ddee7210cf40dd33ae33a0' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '6b7e8e75ee805949095d4ef10b863adea4a91a76' }, "Publish"), " to initiate review."), index.h("li", { key: '3fff3757f76ac256237e5751a28a1c47a6245f3f', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'f1b4cf7fc32ebe72250d20f99b295db2ab4b0303' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '11a7a0abb91e5c9a2ed5f1e1c59f2ef1cc76a9ba' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '367dfaa715dff4f14e16ae59bb911f0c8ecae258' }, index.h("b", { key: '48f6774134b39e560e792045c7aed1fc16a1c767' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: 'abc8448c42a943712a8a04c543098f90a7030821' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
