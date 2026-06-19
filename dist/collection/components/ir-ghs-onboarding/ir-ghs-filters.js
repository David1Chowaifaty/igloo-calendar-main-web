import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: 'b5e6cfec6491fde99fa9145996e5b7bc0dec782a', class: "ir-ghs-filters__container" }, h("div", { key: 'b137eca258058fab0682a2d9b585857767ad3f01', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '4ac9c302b04e89359e3a9a77791941cea410da20', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '699f08ca19221e05c24a4d1515ccfa734a0942f1', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '28e3f8d56fa896adca04e9452ab943e390ae18f2', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'bb073e7da1f5aef0492294cb6030a02d18e590c8', class: "ir-ghs-filters__body" }, h("div", { key: '765b3fac18824f2fa7d9f921c2268209d484aeae', class: "ir-ghs-filters__group" }, h("label", { key: 'f359395d9ac7678cb30a186933a0e34656baf6db', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '3ca64921ee380c402400b2fcdf3ac4f628a895ac', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '58dfe5f32bf1d9776c48dac14fd183e9b475e222', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'ac3a561126f62d1e2cf25d7e65fc5019f862b7e7', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '3c43de8085a269fffddb276d06227858095e52de', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: 'ff87464dc838bbc6738ef317e4b1984ab6992bf6', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'd4777cef60a7dbfe2c61a0d73f41523063ec9a91', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '9f2997feb2ff437bd50ac8984fa2b93856c65aec', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '9acf9536e506427209adc718d423fdbb172a2051', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '2af638c5dfc1e02e6759d18f3da522864b26440e', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'a777329767b4ea8ecad6b400e82e04eb845c3350', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '010c4f43782efe0e9567e0d6f224fe42330c4550', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'e553d10a334893299f9f3580e90dcef34cb8e9dc', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '409f33fc9f4750cb32f0a35551cde0dc6a14f5d5', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b89703587cb2628bacc05d55738e15bcc380f18f' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '5952b80e8c2872415f7c1af40974151856a359b3' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '37538def58dea5f155460755edc98e0d9663e15f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'dbacd97b34768e38538a872ad2d1fdc5ebc048f0' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '0bd0d6dc277702e66314d53377d47fbebb09eb7b' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '969b51cdcf04d61a01bd16e7edee73bd11231d46', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '7527b4aef2fd083973c3b055df5e585d23a58cb1' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '6b31e599d2b27fd6e6edff700dd0fa8dea68b588', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'a7e34ce5e394959d04a3f0c46092a84fd32ae41f' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'd7cb6628eabb2ada569ea8e45c9c20e3727de51f' }, "Publish"), " to initiate review."), h("li", { key: 'de8eb293e0d1bd742c28c6fe748710de51dab62b', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'a1033b7d1cc3258a0d8544692edd32a61d057a80' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '17b981dc3f26459325f2755a8b25ff75a904f621' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '3b5ed266534da582fc8e4d83985a1f926d816344' }, h("b", { key: 'f61a171ae323706c8dd62bcd13d693b7b4006557' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '06060a5bc88dd50e0b5c5c5b4788308403d9b7bc' }, "after"), " you have received final approval from Google.")))))));
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
