import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '23fec9c9c5695188bd230ffdf0cb84a79b0156a7', class: "ir-ghs-filters__container" }, h("div", { key: 'a6cdb744c34802435a5e02fb2b939d1a3fc792b6', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '4c66880e5213a416f2204227c09c3e73ce869018', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '734ae1a4a9c997247a484fb75f9d51a1a10edfda', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'b5aca36833cdf3eeac9d17a8782dad03db1ccd0b', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '6fabf1d207e121bef267e644dbb4282f95480fe7', class: "ir-ghs-filters__body" }, h("div", { key: 'c7a798e08c4244a3964c6af8bc2c52279f0de63e', class: "ir-ghs-filters__group" }, h("label", { key: '38973372375136687cf905aaa13b08a261392163', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '271e7efc93d70ec1f1922924088dd09ebd7595dc', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'cb17c37e92a47ceba0cbc8097e2d01674d28ea80', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'b2ba3c8f6db52e26de378a3310014f1e026e8627', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'b6ccf4bf130b22ea0a2b066197dbce3db5ba0760', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '5cafbe753bf3889af6c81ca7017f28bc84e9e8b3', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'f53bcf1bbf20401a00560d32651aec6e3c4a393d', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '8a281c1e8892a543d12776d5a4c0ee1ab12aca8e', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '9466b903aeb5994f3c3ec38037337b6cb8eaff18', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '4fcd4115efb8da7f38b916fd84e856bec0007eb5', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'd25040624e4a2169cbb1f6d7044936f9d06541df', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '21695ccd8324468c838be7929ff99bfe421fd0f9', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'e2165927a301b209fc94c06b5af24421343c713e', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'cf3baa8e88120bc62acd62d4892180280e77b940', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '22d374765ac41cac5452c5163a16ef80e23760fe' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ed4db052f95a8ea750e9d9a7dcd9fe3e2d404c26' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '4900bdbb2f6eb97e839d0935126c0302d4fea088', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2d1572dd25660b6a8e5a2fa092e9b51db2050ac1' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'e82041e5c064e4f1e7165d8ff07d565a66e8cfe4' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '0e8c7f50c7da6697b06a2dc5be62836b7a5799cc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '6f74ff03f1c319e03b5c912cde6f3927df33d2e1' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'c71050287f947fdcd08ccfa0125b653a98286b91', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2f2e0e83702e85559bcfb830a29565819e33b5fd' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '1b9a57fe1af07169370184816f9d2ab6a69ad6e9' }, "Publish"), " to initiate review."), h("li", { key: 'eb753d2cc8834c8f82358660c798716aac8760f2', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'a5e64504ae251f9dc0058cfa45d2a46eea5dd46d' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '195220c2a65097b73b7eb4d22bd8333d24dd1219' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '8b9290217e75022d9bb7a4f634adc1b0c857d9f5' }, h("b", { key: 'b13448732860138793e0ad8cf3cc035c57202210' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '6ecd6c4da7ff5c4645b926a35c3e0ace194bfa84' }, "after"), " you have received final approval from Google.")))))));
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
