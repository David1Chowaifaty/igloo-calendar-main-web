import { r as registerInstance, c as createEvent, h } from './index-BvoylR5O.js';

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
        return (h("wa-card", { key: '829de0fabac4e56e41a4ea6f15e21cd7aba93aa5', class: "ir-ghs-filters__container" }, h("div", { key: '0f3ebd1c0891c464c97f4e8946915728691953d3', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'e922118825e8ff8e819650afe639554ac9e807f8', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '86c4755077f35cd8711779f39d7d59abb4f1a56a', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '063a02e3ee8cfe38204d0bc0db34931f0686e634', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '90f3bc649219fb42bcabd04d2c87359888bb8cd9', class: "ir-ghs-filters__body" }, h("div", { key: '692a34b3a3f536ca1503dc76e8d85f8e989b6afb', class: "ir-ghs-filters__group" }, h("label", { key: '4db30469e7ba28f794ab11e2bead82c95d838f98', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'b7177bfd4e4a5145deae51522459d84f1b0f5b34', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '4afefa06d2c2c185c181a13a5ef1685965ced60a', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'cdc495361a6f7236618b84488962f20b484930e5', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'acd91181d4e0e30577acb8b54aad9896454ade6e', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'ee6ee658d9cf771ab8d58a11307fa443389a87ac', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '78f0e73f57404920a639bfb8fc384bd2b3e98ff8', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '1a55cce7e1e502898142ad6a9912800f270327bf', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '4ed18043cca13224bbe630e7501a84bddb3061c0', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '724a65b9f7b18a819b34f2ec206a01c7c1ef899c', for: "ghs-help-icon", placement: "right" }, h("div", { key: '0d50d628bfd725c6fd107c220af5cd2574c60205', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '7e338721a70addb40d26dbbdbce1732f209babe0', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'e33556d00317b7c48b82bfb8b43ae20a6575005e', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '9ce811d0a981e80ef78230e9f7d052dae22d31de', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '9035182d53d9b8b13598847333dbe301f7242b9e' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '789add3bebb5a0330e6ed4b853adc620aa529a61' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '3eb3c105a1a261b75f6fcf45ea76286857878a03', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e3dd846c62e9d3e66c571b2afbc7cd53ecdf7b45' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '674b62fc38ac07171dabdec01c2b867b56f212e6' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'f40f952f5dd065fb291488c7b53d40d702dba6a7', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '9a4ab6d1a2f24ae46bd02090bb844a85bade965b' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '8840b61c56dadd431e3661364167b451c4f3e0ae', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '385ab2f544dc59da48030be8fdcee188d9023a78' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '96d352a5515881701bbbe4deed56e6462ba9ab05' }, "Publish"), " to initiate review."), h("li", { key: 'c721e8a5db88766e6e9b121ed7b64a7d63b4802c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'a0715f61a090dd86d7e803bf2df245b69b1c3666' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'cded722a45b7802e87b279d9b0e7785f3b7c1dce' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '3b618290d309af61d0841fca185f3998b4935dc7' }, h("b", { key: '621c480fb3ca8c2f65ec3e6180d1851e3c5d67c2' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'cbf78dd2facb00709230a4eb0d002b76032fe19e' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
