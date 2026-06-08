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
        return (index.h("wa-card", { key: '16333e3f9e02a47b17bf306eed295872cae340f7', class: "ir-ghs-filters__container" }, index.h("div", { key: '876f907234a3ca573822d32dbee4041ee9d61fa7', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '1661a13d06bad7ff758bc63e74d46aacaf6b572b', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '24c6c7b68c008694d0ea780d397c38024521f275', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: 'b5dc385330ae84563e142e796b81a72453fe4b6c', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: '7e24af83c08ef70f879ec354010907724661ce47', class: "ir-ghs-filters__body" }, index.h("div", { key: 'f5ac3565743cc6d16c2829caa703f62bf095a81b', class: "ir-ghs-filters__group" }, index.h("label", { key: '5bdacda3b08bd0c92e15497904b9ff8263843f3b', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '5e82ffa53c5ea6ebbd7591cffd05285f25ccf9d6', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: '5500970224a9d28d35ca1cecb92a983274b17a59', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: 'ea18949d6e87594c3e1d8f2215c56f442307fe92', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'cf356c61ac3a12d55facb3fe779c3c10a59f91f6', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: 'd1329c2a62e7f02e62ebf98ca1028833539e4ddb', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: '4512b6cc5bf65e164513d506b02c8ee988433f9c', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: 'd09a1afca01308b20128f0406d7b1df6c4bd74e5', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, index.h("wa-icon", { key: 'c3eddd017c0da3fc1f2cb80e6ecb1273bb12a886', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '0b67e9bc02bf76cd76193236e7756415a9203b8f', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: '8f4c8c59f56699773ea32fd1344c138394428b10', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, index.h("h6", { key: 'a8957be62bda4f35c8ff0c90b769fa2d122010a5', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '72ca4d84086b09e51c98d7ff8db1ff93ca0b8198', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: '875c87095a6400832f850b2b9dfa681c1ae7c568', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '1821cc5140b66b6c81cd47d02af127dcf7d50e68' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: '8bc745df9224fd25881963f851d359260c7ecf6f' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: '8e9aa8cfeac1510977d57df016bd39ccdc2d65bc', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '7ec361eaa4bc95ca6da7ef53161fd67700799fdf' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: 'b991ddd8087b55e499bd847c346be2a88ef7723e' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: 'ca6ac067495734cafb2919393aeebac33c8ebe1e', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '84e522f25dad93735cbdbd5cf24412da1e62f337' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'd070c2da5a306cc3af2685bd3a8167837e7e3cf6', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'f4b55eafc377bd6593c1872973a9cf7be0738eb0' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: '46443df59bce8e5e96b09ebee31abe0f122749d9' }, "Publish"), " to initiate review."), index.h("li", { key: 'ee2b8fdaaa4c7ea42a78301c4db1a0a519c2947f', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'f6901ccd88d2337f2c407edd05366a65e6095ab0' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: 'a3aa7b2fce9ab79ddcca6ce1b69ae0de3269310c' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: 'd7270289d3a55ca09fa59eeba2555626351363ab' }, index.h("b", { key: 'bbe8988bb2e12835e32158db34da328871388af2' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: '943fd4caebbdd4502330476f0e336f2d9848c040' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = IrGhsFiltersStyle0;

exports.ir_ghs_filters = IrGhsFilters;

//# sourceMappingURL=ir-ghs-filters.cjs.entry.js.map