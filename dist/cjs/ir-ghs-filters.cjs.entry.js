'use strict';

var index = require('./index-CJa_TWt0.js');

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
        return (index.h("wa-card", { key: 'e9ddfa90798ae2514204aac79fec182f899b450b', class: "ir-ghs-filters__container" }, index.h("div", { key: '19a26be194a2fd079ccff20cbf038245813bbff6', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '6614a4253aea1f23be39514d6fc122e73bcaca35', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '2a41fa6f664a9b33faa412eeb06ab127add8f7bb', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '0480d90cb4675230c440ad0bb33aab049baea9b1', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '6d1d20996e0bd26def7be3bba4e9949f9075d7a3', class: "ir-ghs-filters__body" }, index.h("div", { key: 'e79d7e97417b7012907be77533bc8da7ef56a89c', class: "ir-ghs-filters__group" }, index.h("label", { key: 'e8288660dd2c3e0710c2eca2667f462ba42964f0', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '0d5653d039ae8fb10ece813454c6c4679f921ed3', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '5f241ab133c9be47782c753f060df2788ef80ed1', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'b71fd5426696bacc9ea1bd2aade72751f7ab35a7', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'f2b1622ed66d1d79890215e4645f0e177a28482b', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: 'e101729698e669aedd3dd3757c489a6d1574dd2a', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'beab001f107b3d9a86e965b2f2b259a5426e39d0', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: 'b4b5c65cfdbb9ae18abe76cc5c2f63df0ba972d6', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: '5b184b83bb3fdfbc6c19eed5185a36457bd71902', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'cd5745fb9507b4faca35c3c915b5b874ab7f1769', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '040197caf642811ff186f457dc47fc7fcef97fac', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '2c4cade4257e7997cfa68af05f7edf3c2d612770', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '459952aa00d770f63cf95be3179f15bcb96ca41a', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'ead8635f8afc4ee13394434c0b6521c3ffb75d12', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '5ad4688a23965bf3c303779465bf2ade3ce18fd6' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'b18e86d663db531bb1457e0019fd71575a0e59eb' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '8a7dd5f02e25d180896908d1dad39a51f75a92d8', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '061a856ed200477f2d21daa3efff24f4eda2a73d' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '03e943f7a7b964d1a6d154a0fe781cbd10c599d2' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '739ce20f52938c2af6d98480caf8cf913be0ff67', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'c6c43c3e92880a62c12014395975ee57bc6700b2' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'e4307b774546c4a188aeaeca623af8021fee5b9c', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'ba113c99ffb5f763cf302e06d4b367adfcae02ea' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'c68f17ddd230ed58d772f5f7dc3402795bca61e7' }, "Publish"), " to initiate review."), index.h("li", { key: '692d9d2bc1ddc4293676dad29bdfeec73aeed08d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'eadcdfdb571846cf23268e4f6dd70dbb0940bff9' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'b4328c1b8d97162d75a875b6ed109af53716c208' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '63cf9a8bad14e5c4ef5e4c35fb3b274a650eac67' }, index.h("b", { key: '5b05bfcd12872d1ccb67c4dcc5cb01dc706a4bbc' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: 'be107dd20cef3c4d58116fa83b0ee3a6a8f322e5' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
