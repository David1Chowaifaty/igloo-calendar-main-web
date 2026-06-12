import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '964416ee989f691b9c89d1ab4761fc8e67d3101c', class: "ir-ghs-filters__container" }, h("div", { key: '5351109080df0c820753c7536965b178ada406e5', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'd1057c849ed8a0274572237c4ee339bbb104045a', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '409dbc5febb53cab7d3783faa9937191653e4563', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '6b127cd2906afcfe0345178699855e0b3674b430', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'd609555bf57d65ead506fda4c44d254f82d202f9', class: "ir-ghs-filters__body" }, h("div", { key: 'cfd0944f869b205f83d5ca908e526d123c1c98dc', class: "ir-ghs-filters__group" }, h("label", { key: '3bca41373be2f283da538b66aa216b0ef17dfba2', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'b12232c5f2263155264ab3773ae8241e1721f2b0', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '5697800c8f7cac025d1e9c9541dfc657f6c5882b', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '4bf1475482732ab4d49c8eea464330bdb2b89818', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '2509e4259fef46fd220d71009d721b19a74ebe08', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '46fd1ba2f06ac41ca6c9c23eed6f1978d74db8ae', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '2a7d7128e3e18ded02ab25790f6fe1da5b4543c6', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'ef96ece0d63334ff7dcdea305d7b694d843aaaff', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '22dfbc7025d6de9be83b4180a7880026bca670f3', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '284d37b4998197a7521d57f7e8ba1ae93678848a', for: "ghs-help-icon", placement: "right" }, h("div", { key: '0c6e23ac16bb4c077cb207c0a7285319c30f0946', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'e7968c7822871afb85ce7483fe628f761a49c2f4', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'a6b6619f5de46cb6fc58562092ae76afd074c0ca', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '185398bdaf84ce325c154075e5aa783389afce92', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '19ccff7147864840c5fcfceebfd4ca332b5a7cbb' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '5bf74e53e0f16a402f14936e43de2d54bb9a224a' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '1b8b9a3439099daf2a0dd2d7fe90ca562d3d1359', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '5a4b4a0e2c11b850130e7cf2506471e6957e5be4' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '7a0142d29c44bbf0a330ef30bdc6c07b0a8f0d29' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'cc202d9a33cff2a397b7fe0cfda19d7c533e9acf', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '370df5c186ada473aae15d7a8453e85582e6a1ae' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '54415fcc2a8d1bab9addd4dc4a73cf7a297b8d6c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '62eb57ecd7fafdf0c95f688233cd28edd52ba8e6' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'c652ef812175242b8a0ba51a6a8341bdc10b74dd' }, "Publish"), " to initiate review."), h("li", { key: '82dc190e6894cad5788e0dcf23ccdc924227de29', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ba5931908cfb3aeb2b474e2d739bdec07ad230c6' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '72f1c246c1d38e1ea8bf1d1d016a8cacc4937aa2' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '44aba75dd7a95eac270d519745d68a81d99033a1' }, h("b", { key: '6246596c49aaca0da438387ed3666117ff1c46c6' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '756d6ebc35d1b22fad76ad1f2899bc3edef381e7' }, "after"), " you have received final approval from Google.")))))));
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
                            "id": "src/models/IBooking.ts::ICountry"
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
                "attribute": "selected-country-id",
                "reflect": false,
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
                "attribute": "is-loading",
                "reflect": false,
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
//# sourceMappingURL=ir-ghs-filters.js.map
