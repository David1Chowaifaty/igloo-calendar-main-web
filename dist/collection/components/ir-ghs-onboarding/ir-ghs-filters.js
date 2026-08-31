import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '350ceccaba90d9a5c1e630de4c402ddc0e031e46', class: "ir-ghs-filters__container" }, h("div", { key: '283a717d8e653a6bd2c05b644afcb3370e534f36', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '2f1eda88d1887290f0a4f42c3aefc07963788b33', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: 'd2bd437abefd191f10d28a4a855b9598ec5c1273', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '8f5124b693099d48ff0522f9c1e4a5b230d98c3b', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '2d0f488039c90b489b6898a6ca514fb57e4ed20b', class: "ir-ghs-filters__body" }, h("div", { key: '8885579f4f5c15d31b2b1ebce01c9afdb9af12ee', class: "ir-ghs-filters__group" }, h("label", { key: 'cbef962eeae3c69c39a1c57b597887ba6527a1ed', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '4b3f56660550a68ea89cf09aa822320317131d06', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '7e89c584b5c0482634e11b4b0042dbbf1389ac15', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '3b98402e5c1c1435dc322734e68f35953e7e46c3', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '8f4664afae1745492e39e979800dc7740cae4e98', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '6b3766f04f3bfab4dbfd3dfc78dd4db6ebac3935', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '3ff37e087ac477a28f388a73a8a2cac98a357239', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '61dc88093bf656b989b25ee492ff7f0c38ebd751', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'c841bfa7b45ac8390af1e85f9f99569b8783d0c6', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'f7a02da46c3acd95a01cfda0c02252130c0aae60', for: "ghs-help-icon", placement: "right" }, h("div", { key: '4800f555e68d2f52d332aa3a5b6bb7bbd6638b26', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'd9ea7b89d98332823641f2d0f160f5e4fdaf2778', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'fe3239c4eeaf692861de44d4881b3a7b2c4cb913', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '85e049013632e5d0952de400a40f0b8bf26643c7', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1950b1c35773f98d9dfb6b8f0f2309b8229094d4' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ef9a859d379fcc0bc0c67c3c58aaf9de468f8875' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '58c3bb9c0eca1c9d17184d7c2e888dde53142d17', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'd0b084ef39423195a9b991248b0ea43786ea9020' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'd4ed3a3ce02a0df40bd1fc10fdda446370dee2ee' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '56efb13bd6f6d3b06fbde502e87499e7b023b3bc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '9a7b805befa1c7fae4ebadd23cf09f5ed75ae9ad' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'fe62ec38eda467fe48f1f9236881709409bed50c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '7e557fb108c712e5021605b3615cff7bf4e3f848' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '9d4ee791f44abb24aea872c3ca9ab1f866b29349' }, "Publish"), " to initiate review."), h("li", { key: '0a7e599e6a513041f1a66bfa30da3647300cbe6b', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '75b3dc16b24fe187f35edb50d4c0d90ccef99e3a' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'f08f40710daee98f6971a1bd39d6b7e7be3fc9c2' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '0fdb152d2db0595e96010345840ed7065a981784' }, h("b", { key: '0a602b6c7f84a3d8e4a1636eacbf34e539678a4e' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '0c81013a61ee44520d434a706e8c88ea4dbf98c2' }, "after"), " you have received final approval from Google.")))))));
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
