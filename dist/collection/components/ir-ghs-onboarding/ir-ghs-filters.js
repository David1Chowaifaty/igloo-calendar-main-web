import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '8b4ea094d6acbab816070171cf012fef6aeef303', class: "ir-ghs-filters__container" }, h("div", { key: '2afca1dae8b5ca8f74f66959d62681fb3a7a218d', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '33d633c0895a25974e13b1e49c22033205b57733', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '38e85c9ea46f41ed5e653e5ad5fa1d887614d7e2', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'a40e277098844a263769b780dd8983b92216e126', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '59218384460853fdb72314b828e42f84200b474b', class: "ir-ghs-filters__body" }, h("div", { key: 'cc924fa0e2bab70073edf37e89bb279f36128e76', class: "ir-ghs-filters__group" }, h("label", { key: '2a4093a70ec04804a04cb951e564420071ba2c44', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'ddd445116f7c4c1608a6c3ffa29f7fe545421d71', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '5d8cb36992804e03ebad1f40156e368a6a56d2f9', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '46fc96d5e16c45ed61776980d2a4c008acd5628c', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '9ec6dbfd2e5cfaeb21c894ca303c11f805008d31', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '3c452c0eb8eb03849ee309b0573ff20b5bb5e56f', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '6ce646ccec335c00e551906d7671e04965e74757', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '110ba2b4a1ca6298638355fbb9fb6096ad1be36a', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '4343aaa2ea77b27dd090cbfb633c23f137573512', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '46c3f299bc340aac28a7676b46f9cbd167fbaf26', for: "ghs-help-icon", placement: "right" }, h("div", { key: '3774964b1025348ea7f7143233c0cd92daf48067', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'e4b5bc7d3e3d25b75990c9bcdd7a5d631348ecf4', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'da9a4b3e4601a8789e71b32f863f1b56de08c572', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '87b7d6fd6b5e84d5b7050a18022f9fcb1596ce76', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ce593b97d012f5a460c75bb4f683c2007ac08cb0' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '2a99f667bdf13787e4409d174bd89a0904af7891' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'f50ce85cbfd0d099b67511bd1a0684afba52a3dd', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'f09bec11690fc31ac56f313d6112e1b2dadb52af' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '65a32ed00e3fa8153a3c4390fba8854575f96afe' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '89dc33270447774448005313fccc1819436d6642', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ac6ae078deec6fadaa8f81d01e55a002239d3b70' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '692adbe62bef28d468fe6d1a1c82671846f32e23', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '459cbde9d9fa8387333a399e2e84a8d4efd6c7b4' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '9a6f3b06b6268ad8ebe026903374f36a25f9b925' }, "Publish"), " to initiate review."), h("li", { key: '07b786bcc308058c6c8a64cc1b84e602a5f7db45', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'c3144f7b8e84d0ba46d33b8e671cbb08070ef5f1' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'd71a35957050947dbc157fa58f13dea8897ceef6' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '15f1616f4ae193b667f87f8fd7e655d91de88cd9' }, h("b", { key: '258b90f970231957ad2ae1a561bdc352c34c893f' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '7a7d09b8cf808fb0fe17b1104026a6b7350271cf' }, "after"), " you have received final approval from Google.")))))));
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
