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
        return (index.h("wa-card", { key: '10a2e015a139675d87b07ecaad8e51aef5f209b0', class: "ir-ghs-filters__container" }, index.h("div", { key: '221a3648f4f1f0434203f19cdb4a101a4a8abbcb', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: 'ed66f09046607a4deeac9de779c79d0f97e405b3', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: 'f9677a3bceb930d862c93432ce15180f0340bd1e', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '8bd0e34d23a12ae651378a3de6cf376c3e08fe39', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '3bfeaa7a99f48304dc73d036c627ba2a60588a14', class: "ir-ghs-filters__body" }, index.h("div", { key: '8a72ee53ef721cfb4b9941f1ef2519f13da82a62', class: "ir-ghs-filters__group" }, index.h("label", { key: 'ec2c4a6e33ca53cbf2062f7dd12870ec950155be', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '63efd78a185062bace10e6325c03b3a6965fd8a9', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '76e49f5ed01d25dcdc4a2c20e424a4229cc29896', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '710681ceaf4b1d86988a32a502fd46fcbfad0657', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'd49bdd654a05146cd6834f16257d6f2ea1528b5d', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '6319dc55937d28b177fe9be4e8a70b1925f0bec4', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'f6a337094041a91707d2f46d0118ddd21a95ec81', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: '5ba00fb4b79626857a782f9992a5d28197851cbf', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: 'f1670ccc29d3241f8e101c7260cfe764708a89db', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: 'c09a4b65677574db90cb2170b4987818c39e9322', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '30016803b6b6a0d531c956d930e6a52379d256fe', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: '0be5a10132babf8a54248237803f2f97ffd65fa5', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: 'ff01ff6cda2ca8ac150435615aa935c6a87a8b2b', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'faf7e2dcd3f0bb2196afb7897f01eaf07a500a9d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '090326e580e5343f51adc6cc78c982ba6d6cc273' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'ebcf158a1754b037210375a70a803ebce6ce23de' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '5a0a5ae117ee2ce51014e091b292642272158eaf', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '88f25fd7d54c0ccd7c9e966dda4485af54654efe' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: '370f1ecf240759c5415031ea01ccc296255fa155' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'd6a31465407097e98a58fad223ed536a8eca854f', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '80025c6914b02928fb94683ca308ffb4f959ec0b' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: '9acde5ba858b7ef294ddab9c49d412fb9f138a36', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'a142c352aa83a85f434292db113793aea868c210' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '6cf9bd794a77accf735a3732ab10644052dc7ba6' }, "Publish"), " to initiate review."), index.h("li", { key: 'f4a80fa621134fc47276eb7e967d2c1cf45e6257', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '22a9fd7869f805fb7e4f41df5941223cd59c1271' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'fec2adb77ed459df07fc5de84ae91aa219c035b4' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'a6b801e03349fa704f90293c98adc4b20547ccb2' }, index.h("b", { key: '2bbd324cada44fc7a582354e1e31efb11ca0ccc3' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '44a72310284225e368fad185bacf815b88e8f0e7' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = IrGhsFiltersStyle0;

exports.ir_ghs_filters = IrGhsFilters;

//# sourceMappingURL=ir-ghs-filters.cjs.entry.js.map