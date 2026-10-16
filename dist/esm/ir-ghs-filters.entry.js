import { r as registerInstance, c as createEvent, h } from './index-CwWmK1sZ.js';

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
        return (h("wa-card", { key: 'c4fc5b1b1a14da67c8a347e951cdfc6cb0cbb5c6', class: "ir-ghs-filters__container" }, h("div", { key: '845be90b4729b8326610a88a944e4fba396a4f7c', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '4f45a150148991f3629c86f52bf8c41617ef665e', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '0efdbfcfa626f185c785227f2bb6de904f873db0', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '8519c32abd150eed4e66d6ef50c69bf099c3ad4c', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'b0097c7632bb154ff08ad55ad85569cde3e03a1d', class: "ir-ghs-filters__body" }, h("div", { key: '830baf807d073fa0bf50304bbff8d6e4da5314f3', class: "ir-ghs-filters__group" }, h("label", { key: '4f0c81f6f6e033df52c15e5aad654e52e79525c2', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '9cb72d1f58d4117af0e2cd5ece2781f73e0019a9', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'b433acf01f61b44ef4bd82b0547112651eb3ac57', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'f7b80c1a2ce0c43699e36663cc5472ce8261702c', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '49049a2d9a69fb9c3fe0ee595c372044b4185424', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'e278e0d00783ada12fc67d0be980149afb613411', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'a003ba0661d81d1544bb4666ef520c2d8bfb9b22', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '33ddfcd275e793e2d7f2a447f825feb7dbb75d6f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '0764942e7544d21681a0aa1297b054ea6d64dd52', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'a6757f21a84fc942f6225d95edf716558cbbef16', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'b2327dbeba376505b2016e760618cc7520820662', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '4290c6964917fc1cccc1e06b23b6693a88396ffd', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '0eceb1452fddb6ce457e2981ecef7c90b869c6da', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'bc0d8bbb74b18b7c67fb9600ce1c14f39020b6c8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1b712c7820de63938863297ef82c75e75f4aad3a' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'fb365245220ab661cfc0686309437840c95fc005' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '471a3bf17d78310be54865a80d9bf5579b5d17a7', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1c4b4dc21d37a5cbb3b6c51e3e1c541747cc350c' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'f135882badaa51a86e43ee2e2c51fb34097e7001' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'b709b0c774cbab8753ba2e878aa7052117d59601', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '406f965e142bb735d1175095ba230d6ad789a345' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '8b21588579e7e85e2e9d6fcd4d36120e15843703', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '6c024aecfc912bc2b79a53b4f30e73b9c1b8be4b' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '193acf205e236d8a271a8e64b222b5584951167f' }, "Publish"), " to initiate review."), h("li", { key: '07ddeb1dde3b3617bf20d906f5b173a840fa7196', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2d7d0a4f1b6c28d975e42f32221b8304ec032c6c' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'b7e7c03a5173208144966fbecfeb77bbf66a1d3c' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '592aede96894aa62b3f0a9e03fb266f4a54e43e8' }, h("b", { key: 'f331bff68580d5525804f5c86ffd231026dae33a' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '555152df6eb7739338fb555e96aaf86f0b0cef1b' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
