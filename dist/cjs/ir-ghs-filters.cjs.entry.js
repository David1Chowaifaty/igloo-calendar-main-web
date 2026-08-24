'use strict';

var index = require('./index-DgHWBwDV.js');

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
        return (index.h("wa-card", { key: 'c49777bd2c74c307df7ab3bc37fe9ba45f18abcd', class: "ir-ghs-filters__container" }, index.h("div", { key: '4663fda3f154c3fc4967f3501f60391b771cfb13', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '2238e520df107b4525d8d7be186dc5066dd032a6', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'b2c6028bf4f3a096cd3268af921e0737dbba19d0', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'ccaf750d24cb0058cbf508bcd5a232b98a4109e9', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '93c8f58d73fea706a43307f9290b94c6a8eb3538', class: "ir-ghs-filters__body" }, index.h("div", { key: '0a59c510b004b04f932d72610a1adc500b8fba8f', class: "ir-ghs-filters__group" }, index.h("label", { key: 'cd0cfcbc264868b5226bd01093deb557df7fedc5', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '61a0f5157d7b7aeedca4bef526e00a9e4f5b49fc', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: 'a4dfce94a8a795f08bd74ded3bb46fdabbd9e2dd', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '38ee1bb6f6575873e3ab9165d1fa475d2eb72857', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: '03d1fbb833f7487554b34b7f208f9f15b4819436', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '9b68340daf434beeb7679ed39db57eae60de17e7', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '54fe3f775be77afc2293aaf02ceaa66a7889beb6', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: 'd19473cd7e20c56a0109d88b4144539b7f541fe9', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '0a4937e642bd55a75bdb9ef9cde0e51cc984eb41', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'bfd68a5b30249f842e5ee77f0b44573fb2075c06', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '2a4300392f291ff95767791fa9a7d428d4974718', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: 'b024a0165571944a6fe5724f279b565328e7b278', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '1578dc87187f286348e09ca849e3c0dae4d9cc84', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'cb2bd0445f0e717310d1dfea880271d91b53dbd6', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '85dfb44ded986c412d45cd4bdc2765af6508fb5b' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '3c6f3e35eac1f9107247fdb0c92527cab3e57573' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '65b044096f86528aa8df03a822cbe99d0b6f96d4', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '8d5956f791d090d8a57840c9705d0a20e73893ae' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '8e3dba6c7ae03a99f675cbf28e37e054800259d3' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'd4ee3e7d4e3323de2af778a6bb6038495efc6c1d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '14ba52b93221a254e848f725d28cc93fad039424' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '919b85b9f929888b260207162c39cf04a7bd8d1c', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '765e44b57ca37d0134de149663cbf4d0ba84ce10' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '5a0cfde2aeb3308300cb49cc3a9037e5addbd5db' }, "Publish"), " to initiate review."), index.h("li", { key: '89fd6149def14f8861b386c27ffd81a5f117beea', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '0654177267413ada28c5ba045da1314d2c460394' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'fe1ca8808cf26703ee2944aadbd14d82ab1e45ea' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '0158a76d11bd99b8c5b07bf44547ed450d8322d2' }, index.h("b", { key: '8e0dc26334d68918d82ab7d78428e97b91b4f2ec' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '43d91d834257ef683035db6416eca84434ee66b1' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
