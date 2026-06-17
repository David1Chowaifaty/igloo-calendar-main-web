import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '9bf6600ea4c5882a96fce4169dc0939a684f9867', class: "ir-ghs-filters__container" }, h("div", { key: '93aa65a3c3a3d340c3c163604aefef6adcdcc9b5', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '6849f10c5c3b51d0c3ff70678207c5bd79c48587', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '10ffb2214d356a99e9bb9fa882ec10d6b7176b05', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '3bca26f5bea87e5cdab639fc336b6b1b6e9bbcfe', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '1d7985477a3fa8389f4a78ef47812f99e52c41d4', class: "ir-ghs-filters__body" }, h("div", { key: 'bd89bbba661e23b91d39945d6a195cf0df2d0c5c', class: "ir-ghs-filters__group" }, h("label", { key: 'cedfab802a326a89075fbef6c38ca8c6766e56d3', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'f40aca105a31eb29609c81ec62a89e86e5e7047b', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '4c46b61aae102b5f229d68a8c9efe926f6b10fb3', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'e46015757f5df97b9f3df5b8fff451b3f7fee1a0', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '5b0fe7d30cef1a9681c1a83dafb1278206e8d750', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'f3c0c20cf20531edc2d227d647dbcc83df3be6ae', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '273e462f3ca738da094b08d427c0d1f5066011e5', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '5150b5458806da20492efb21b597b7753095ba95', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'de09049f9a04e161b1aba28fc48ba517d3d9fd14', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '02d97d494dd49575d8c02a2157af7184fe3ccaf3', for: "ghs-help-icon", placement: "right" }, h("div", { key: '9a27d527dd81658da2b3817a1090771ac5483eb9', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '3688822845b47d41556f3c3f4c95785e2a57c54e', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'c550e8eec4d5fdb61f528a8454712b292f2392e4', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'c16f544f4780d849691b8ae3a8c029eb80034d96', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'dc8ac955108dc40840d09c52d8a57d68b89bdf0d' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'dc8c33f86dd28b14b3c51381c871237e5f63649e' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'd52d974ccdd451209ca832413e4cfcd381a4c7b8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'eae3e223b333c6a3d29296b560fbb04886776055' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '82f35e72d1e35b0238d019baae81903153ef3479' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '0e59d5ac31e47f3aede5799704b00b1918d66bbc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e4b7911a8e94233872bae7ed5a7ead96756a5376' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '1e126d883275565c6e19ce0e5878f9a65b11a8dc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '4751b57f411933bf18f16ed1e58faef22b149287' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'd725e518074e8a6ca8f2a78dcfbfe6815fc8e2bf' }, "Publish"), " to initiate review."), h("li", { key: '2b041af15cd6971d3e30a4f4c02cf65562fcc6bf', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '350f88e7aa77d1fcf338053498659cc6e62da825' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'a41d4d9d53d0a80f6405adadac964c57ba2652d4' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'bb357ecd1af85a5ccc0c70b2be9693f20eb74759' }, h("b", { key: '6e82d8d3646f364afa553d378054ae28341ab341' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'e339c0d50fb483ab3c943c893f6e5edd44a988bf' }, "after"), " you have received final approval from Google.")))))));
    }
    static get is() { return "ir-ghs-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ghs-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ghs-filters.css"]
        };
    }
    static get properties() {
        return {
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "../../models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "selectedCountryId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-country-id",
                "defaultValue": "null"
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-loading",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "filterApply",
                "name": "filterApply",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "filterReset",
                "name": "filterReset",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "countryChange",
                "name": "countryChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
