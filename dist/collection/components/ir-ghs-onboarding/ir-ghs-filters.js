import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '252f57f95ec179e1ea505ef174f36db11e85bace', class: "ir-ghs-filters__container" }, h("div", { key: '0f1e0db54dc5e56ee2c8980a82e0fb0c097673c8', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '9e4a880ae7891087692abb381b55d766f3c206fd', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: 'ebfe6689097f46c84c103e9b3c9e0e4bf39f0571', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '1dd6001073630a4937697a0b56b2dabc920af2ec', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'cc51856803f0483cf8824f2f281df407dde7420c', class: "ir-ghs-filters__body" }, h("div", { key: 'e5124882b6a50e275120aefdaf103ea72bfb3bcc', class: "ir-ghs-filters__group" }, h("label", { key: 'd845a9d53d260fc6ea2f500fab115a8cfd140bbd', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'b16a93382348621a9a2a9ef43e3de7300ef9d9fc', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '3f504d42cd7aab72d5f59e852e6523e1ee489870', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'b42f0841cf569fb72fb98df5f2d4416a2b4584e1', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '7184473f744fccf63ba8a71e4337ad994d013eae', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '41a0160efaae26451333faaf4a7d7c9d0fa1b512', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '91f80b937f72274bdc4f97ad29781c8e708fdc14', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '60015877187016b91fba5e408d06c3da382f2b45', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'cf3055044d5a5a6311f650577ae01637dcfeac35', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '3c51e501646ecc777f57273050a812c6cb5544a0', for: "ghs-help-icon", placement: "right" }, h("div", { key: '964d0ba9d4bc46678cd9f0afb854c04683cb4711', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'e4078bf59efa9a7644a78b04fca70891cf01f9d0', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '62e684fa4617463daecf8917e719f12bb2b03aeb', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '77e9c2449f29edc562c1296f4be14cb193903ab8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '3b4b275fbd6a0435871932c43d201279946cf5dc' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ed7a0008df85fd6715ef2e13a27b98c56ac488f2' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'c22e4a01d3439b5cda7713fe9e2a132cbf151fc1', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '950ffebd4dfde5d71fac85e8156f065889a969e3' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '271e98158226afbbb77e06a35a7f1da3dfc3a9e3' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'f0facfa8045179dd98ab318354b7fb8f7c2a5e04', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2a818bda38cb28829414e15b6d1cc8a70923d72a' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '1057d52410bcc98c919a54d4f66abd10a1807d7d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '47d0c47a08235263ff88694ab8ea5b9c5801b6db' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'ca1ec098069a3155deb883b3b0715566b1cc54d0' }, "Publish"), " to initiate review."), h("li", { key: 'e6c8afa64d90ac82c1a6d3ccaf015896e03b7a48', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'cc2c76aa48a4273adc87f8a21d582f9aaf7f8d40' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'f23655e5301f9d2e9b3f673b665c8c5bf009d81a' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'b7bdeb179b086d1470a40698eca44aea7101578f' }, h("b", { key: '707be1e7fd0ed03e1d3107b0deaafa1c10a0a0cd' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '85e2bb6e2a6f8afb2c23d7ac703a149460de17cd' }, "after"), " you have received final approval from Google.")))))));
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
