import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: '063113b1b5d78dcea652e92f9b10f38d24f0b6b9', class: "ir-ghs-filters__container" }, h("div", { key: '4f08739d605cfec40e84f7e7c7c51a222128f74c', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '51e850773b5f1fba9c6c629352f95367b931ed91', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '227cf41262e8925175a68a9c298bbf9543147bf2', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '048a6482e94578cee2285ce1d8a0181def235514', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '78bcd97a4baa08f24851edc6623741f0d413e801', class: "ir-ghs-filters__body" }, h("div", { key: 'accbca9a3926be7721face61e23dae4c077afd5d', class: "ir-ghs-filters__group" }, h("label", { key: '7fb7dec3c99b7b24f145c4c4f38a79339d24b4be', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '96c225d5673dc7ca68bd038a97b252687c6e7ce8', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '9cd8934eee8c6f5842dfd951eaee99c127043faf', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '780ea61a74a20d2549d0d7ecc3609597f78df2bf', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'fc762737ae20fd24a9fc3530e0cd4c68c401f8c9', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '005d678dd86ec3a5236f8a8076dd035f8d9efa10', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '0e321adc77bdcaba53100c783217c30257c62074', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '3b5c17a05d7ac16c57f17e8f68e2ec97421f1e84', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '87096092b91b3666ebf451a3e5aa7dd9cf779480', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'cf5b9f68046f43a0cdf21275861e777c58f940db', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'e9bfb0b6f0e33fe166612fadbda5c7a3bd1d83dd', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'fdd70718178de9aad8980b965fd2424f6f58f062', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '17722ba225dc5267fd5ff4e2ed79ecfa728dc9a9', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '449f4cead5d8d0444a3b51619854f328648c8494', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e69ecc6ca419c2b554152adabaad1e88d5c7ea6d' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '9f8ce893bf7680e68ac0a66b3dd0d161db4bc449' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'fcf14fb8474dddfe6938938c976843bb4811f59b', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '656ea90a2d811c7a976676abb666081781479ca4' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'd4840363d0300034ac30e53aba853a31a14fe8bb' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '5c4de9c12a11b3b923769a1ad7d4cac40429ad5e', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e45c52ad7e0a59ee38e064e9c6f3d94c2593f4af' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '7978d47f70478674b36533fb372b7021c4ddb193', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '44733801b42c793676fb74e208e9ff0b0bbede9f' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '982d4947a4934001735afcae99f9cea8d00b0cdb' }, "Publish"), " to initiate review."), h("li", { key: 'c449dc7c920e9597b38382e08881cdc3a4b694d1', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '352fb32d351c6dde6d49d4ba458b34b937398759' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'd29ced870b6de79b8b271d94f12a397673915fc9' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '314a6f388e1d0e1e2fbc2ed0935c50f1a0655ba1' }, h("b", { key: 'ff08cf3a40df29f04096dba4402d6b26dbe3fb0d' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'e362ba2b8daabcc6f485c2d855de6e5cd2d5c7f8' }, "after"), " you have received final approval from Google.")))))));
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
