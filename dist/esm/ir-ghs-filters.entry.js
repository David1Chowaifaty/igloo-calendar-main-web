import { r as registerInstance, c as createEvent, h } from './index-BxxIyJIp.js';

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
        return (h("wa-card", { key: '7361592c988913496fea33b9dece54551a1da1a3', class: "ir-ghs-filters__container" }, h("div", { key: '16677a34004f98e853c20ae3c231f759285ff336', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'e1344b426f09df6cbfaaf210e2fcd1d25c1716f9', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '41dc9450ba0db5217aec8bf12dcc34fc96d444aa', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '214de40a66b5a4a21e4af8e459e2d642be777dd2', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '4e543dc64a3b1390284ebc31bec32514ecdc66dd', class: "ir-ghs-filters__body" }, h("div", { key: '67fe773a6a9d89bead2a19f50fe78f7f423ddad8', class: "ir-ghs-filters__group" }, h("label", { key: 'a0d9ff23f376b29cddf5a2add8749a825f669ecb', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '4eceaa15dab1a4ec553b2ed312315d1f2a060781', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'ede34e2749dcc08eb6391d8a88e35eec9bdaabe2', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '266bc053076b56745fdca667eca425a571695e4a', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'ea5aeaa18436ce0bf95ebeed6c9c60a1b5c0d0fe', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '3e8ed0857971d3be9b50bd3fe9ecce1fab68cb82', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '5b06c495612cc9744a1fbb9f7cbca822be10a7d6', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'ea2d3f3eafd9e356a094b2bb7559ca08d87eaafe', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'c5ef36ff6a73ceaf5c1e74a8fa975ec7047aeba7', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'cfa982809520937f15928b7e9277e791d2c04eee', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'f07332f2dbacf7d8a5a414f21dc1d232d46b6af9', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'ea4a07e9292778041672a047c010dcc2f064e141', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'a156c28934f1637e9e49ecaadf3ba26490f34ef9', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'e552d249f8c5779c5e56df8454afb74f9a078b7f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b9996cc3786dd1c702ddf1126c04263bfddc8192' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '9dddd267cd56acbe3be913dabc2643f79a303fba' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '8088e207cbf260e0506a0c095f02df681c6edf49', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '4eabc8db69f408593cd742209b08255ec3a6a475' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '830ed8cea1fc6c01d12a6495f67e7a76acd07dc5' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '533cca82bb3c3197765e74d003b4fa7eacd40fe5', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '4e3f8cbca86597b72106e264afbfca2f20bfc269' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '51af2eed85c5ecc9c8d75a587aa4cecab521fb11', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '8c8757bd236a5f1a92cafd583a009f0b2256f458' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '38e6c0c446612e652459c2322c385d240f323209' }, "Publish"), " to initiate review."), h("li", { key: 'be9d04846fbd8837924026a37bdf1e4b2de470fd', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '0d5c5246353e3b89c661e1f098ccff5300bc68a5' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '04a4455b46f9897774b72ba167bb62715b354591' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'e6336c535aaead746412147ff6dfdad7780a2177' }, h("b", { key: 'c6cc3e302a5fdb67722fff53072bc03bff52a6f2' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'f82335edbcdf755851f729e28d0b95781ffd1a1d' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

export { IrGhsFilters as ir_ghs_filters };
