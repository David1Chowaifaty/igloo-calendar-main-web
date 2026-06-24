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
        return (index.h("wa-card", { key: '23fec9c9c5695188bd230ffdf0cb84a79b0156a7', class: "ir-ghs-filters__container" }, index.h("div", { key: 'a6cdb744c34802435a5e02fb2b939d1a3fc792b6', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '4c66880e5213a416f2204227c09c3e73ce869018', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '734ae1a4a9c997247a484fb75f9d51a1a10edfda', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'b5aca36833cdf3eeac9d17a8782dad03db1ccd0b', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '6fabf1d207e121bef267e644dbb4282f95480fe7', class: "ir-ghs-filters__body" }, index.h("div", { key: 'c7a798e08c4244a3964c6af8bc2c52279f0de63e', class: "ir-ghs-filters__group" }, index.h("label", { key: '38973372375136687cf905aaa13b08a261392163', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '37fd83898719bf7282e043070046d7a8eae43c22', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '377985c4c212a0a195ad1f4989e2ce5bab9b4f25', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'cd8a5de6dc5749ad4ee06126290271bdc5280891', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '2abe4c0fb41b4b6eb2bfdb6d8e91e813d5512819', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '2d68eb35ce3ae22046c11e773afdf79023a0a529', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'b1ffe6059273878a83c50f9464ca6eea969f2cc3', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '642f1322acffe8189bb9a598de41608c646055f2', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: 'e2d30348edd8b08a1713e311a50cf49266160d0e', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '3b37f922dc8a3c48bec8e1b9486e70a87bc0b637', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '14328d085f048a54be389f96c62c26e53586866e', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: 'dd6b9c52a46b594e5351352062a5a45034bcfddf', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: 'd5aa274bbdfd4180cb832a8665f712ef92b74345', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '2a9bfc5181796bb2740830a8c778e226f9097ea1', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '9e7516f432f47f48de927d5774e50962eb742f78' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '69a573dda2c6dc2ac1de5236428573841c98365d' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '4994bc0ee1782af8017adb625da2bb52a8c88a37', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '8c867182c0725aa599e67750251fb92612096901' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '51cf75e8cab0593e205efe9024a341acbcd84de0' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '9a96d8b4d9a1ba2335564d6aec27030a6c6c228b', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '8333bfbddd3849bc77d517e47c69b6b707495cdb' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'e3ff5b982114f9d19317f52fd45542adfc47bc9b', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '9611b245098bf4c3648022d684528248610f405d' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '3a4e9ac30e78cbec8f9518e8e5fc0bdcce104557' }, "Publish"), " to initiate review."), index.h("li", { key: '28e188b72973ea9c77e9d03ffbbbd9b1b16393ff', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'de88e92f7ff6a70130805b283892a7aebcf82aa9' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'e484f0d5a7ec395b43d2e3786980033bd3bdef95' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'a1ce44ff088800977c517fd42b3d4b237a110c07' }, index.h("b", { key: 'f72316b7cc3753d9899bb0bbb50d4db286ead7d6' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '8600105a4519a7f18cd06ad436b0f1c136d17667' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
