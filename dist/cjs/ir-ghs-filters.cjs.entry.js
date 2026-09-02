'use strict';

var index = require('./index-P5Mginch.js');

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
        return (index.h("wa-card", { key: 'e9ddfa90798ae2514204aac79fec182f899b450b', class: "ir-ghs-filters__container" }, index.h("div", { key: '19a26be194a2fd079ccff20cbf038245813bbff6', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '6614a4253aea1f23be39514d6fc122e73bcaca35', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '2a41fa6f664a9b33faa412eeb06ab127add8f7bb', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '0480d90cb4675230c440ad0bb33aab049baea9b1', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '6d1d20996e0bd26def7be3bba4e9949f9075d7a3', class: "ir-ghs-filters__body" }, index.h("div", { key: 'e79d7e97417b7012907be77533bc8da7ef56a89c', class: "ir-ghs-filters__group" }, index.h("label", { key: 'e8288660dd2c3e0710c2eca2667f462ba42964f0', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: 'cc0999a3aadc8d536b4352e7a4c707c42eac548e', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '167393860ffc6b5fc343bb3dcdf0a85632b8ceda', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '521368c401f0112644ee73004ed35d4f3185cc1f', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'c3ac1dc40382fa0a554e0ebfab35150366738bf9', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: 'f5b78e47edf6f46d2425a3338e3f124daaa2483c', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '1f071726faf5c2360fdf2bf4007455170181e1e2', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '8525c3938cafdfe72110254dd65e87f4d88208dd', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: '1d440c1b672ba22956dfcbb90d2f193b9d85f85b', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'ce2402e979411fb3632c0e2f96cf364b0abcd651', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: 'a52813ff52202de1283694514ff1a2f83e0bf89d', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: '119b48cb75b0d9d8c5384740cb4eceaa68f9f490', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: 'b01e826bcecdef684459748931c66cc2da52bfb6', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'd0df275fddc85eba0c70f2e7e19a2c215ef7a286', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'bbe20fafc3a30266c20c2cb39db887801589b787' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'a9d180d348d10dc87cdde4986fe51ad3090f08f9' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: 'bdf0e1a95cbea54e9f1d5750250d81482ca47379', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '3aedb4bc8973f77d4c2cc9b86d563df2a01d26c1' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '872c39f50135ed43ba547fe1814a61794f7aefc2' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '08a3a6de32d4345b8cfb5f6848f82dc6888c8394', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '591577a5adec1d3fab2d3354d13e5ee88a252b4e' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '8ff05fbb1aa9355afc86c485bccc10b168a7f4fd', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '77d0db0d046513f8eab4551097c9063fc739f76b' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'e68f099f98807f3505dc3eb6d3453f6e118d9862' }, "Publish"), " to initiate review."), index.h("li", { key: 'ac60cde7bf83f42f30d4bfff2660cc6c19573aed', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '398f767f3852eec9c9866de3ab9b0d9d8ea53f18' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'fd19e1cd5552a66872b14f652ef23a299ae6ff9b' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '800cfd741d230b8c60fcc0c410565a924685a04f' }, index.h("b", { key: 'c744da258bc5731c92b3f10ccdbc1a5aea1dad80' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '02548b39077e09560a32ad9f712dd365e7526668' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
