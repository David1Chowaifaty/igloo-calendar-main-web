'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irGhsFiltersCss = ".sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}";
const IrGhsFiltersStyle0 = irGhsFiltersCss;

const IrGhsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterApply = index.createEvent(this, "filterApply", 7);
        this.filterReset = index.createEvent(this, "filterReset", 7);
        this.countryChange = index.createEvent(this, "countryChange", 7);
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (index.h("wa-card", { key: 'deada05c7071261e57d3bc1f58fe0d7da1186884', class: "ir-ghs-filters__container" }, index.h("div", { key: 'db2fd52029e54216f4e32fb6cd2bffd506189bbc', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: 'cc22b573e8a2c96c9446fef14e595df76e64cd34', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '6e7e67bbdf59b8851a35398540273b5c60d4e45c', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '016d6a1d628172023923f7306d42917d7f8ef5e4', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '6095d90be52991d3ee90f066fc7ea3eda38a792a', class: "ir-ghs-filters__body" }, index.h("div", { key: '831952a208cb0feb488b70d0a96accded8d451cc', class: "ir-ghs-filters__group" }, index.h("label", { key: 'ff097d8b87f2df671d2d4295628d27cf816d0564', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '5cc011ac702efad3d47514269bce74520069b1cf', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '0b1bd1f5cd710c9b7eee122491473aa7a850dc74', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'e74c6f2daf822da051ee9b5a1dad9755b6d8aedb', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'ca2a04a76d45f5f0c73635e7bd4a67447382455e', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '1d8876dde7d4ca4eeef88dbfd0972f93f1686499', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'a12eb07f60a87475608b9de08598d37a840974ed', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '01320b754aa5a35365c2fa211d00e5a20ddba90c', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '7cdb7d3d76cf07c3d976e8b4ce3d8041af9e6a14', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '052d3625293a690b50e4857790655f90e2cbc63c', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '1ff9fc5c93246afdb3b7d06a4c59158a38d5b843', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '8e87c26ef1ff63b6613e596295699a764ace7987', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '9d859cade355ef86cbe9cad2da56946014fdcc03', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '3783530346ed4aad4679d88b0e8712e34befffa4', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '0a291cd1659a685cd8ced092201067f74b57016e' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '7c37fac573f2a3f3c551eaf50295b5304ad8b842' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '2428a663ed8ae8f74e8bcbad5fecf18fc0328d1b', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'ee28b01e0b4edbc45e46f79d18d2d8abdb4fb8f5' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '09de1880fe22c6d7623bcaf0a6db6aea37e44a83' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '3909bbf6730702875db8689a771a37c255bdecaa', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'e0ca9dd623ddb91c56d73407391aa434e36b0bc6' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '94fc46ed2281e65ceb11680d53a21a59d59c668d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '281540fa74931584dc614f3d7a011e11c8926a78' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '93e174c85889f4badb975c5fca2a8eec15b8efa3' }, "Publish"), " to initiate review."), index.h("li", { key: 'a0a419bebd6780a633a59a3a00258e4342b9095e', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'b948a643d65d04000f04b20889f7cedc09b38772' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '4653f76f56b56ec0ceea1cd2d9cdd19f576cf7cb' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'df1b61360ab7d3753c210864fdbed315b2af681e' }, index.h("b", { key: '9f9980cf3a3a26e620425ecc45bc194a4e29fcec' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: 'e8f13242598297c6b176b8d78335ac50e63fbbc1' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = IrGhsFiltersStyle0;

exports.ir_ghs_filters = IrGhsFilters;

//# sourceMappingURL=ir-ghs-filters.cjs.entry.js.map