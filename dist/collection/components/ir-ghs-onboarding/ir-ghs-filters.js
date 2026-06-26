import { h } from "@stencil/core";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: 'ca2e382f548f5e9fb70be2b12b59de85c00013a5', class: "ir-ghs-filters__container" }, h("div", { key: '68d69c7a94306110fd56019b5bb513d6d804932b', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '33ea6bfda764d434660ea979431f75e4e0eddc1a', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '852eafe99f20d4bd829b5ce8bd43c89363ebe3e8', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'd2ab13a947e7b309d568bc870092cc2368cebe70', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '219d4eb112b77f758dc4818c0236055250354dc4', class: "ir-ghs-filters__body" }, h("div", { key: 'acba8c97d9c8e475689107ddca892199fd1a5284', class: "ir-ghs-filters__group" }, h("label", { key: '5ac6cf97d56785f22824526f722d6437ccf8588d', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'f3d7dbff9d63a4795a04756140b6d25666704267', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'e36b178576819c699abf283742111ad2bb2404a4', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: 'a7822f644abe227e958a4dd67d6d649be0938fa0', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'cf5d27801f4e2d50b42d61ccf14de98a95980c21', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '33bddc07db8587e84e633d28e6fb0823de6aedec', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'e1923d7375a3185431a44f82dc29f13fb16d16a7', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: 'fdd9d24676174e00ddc5ab6c312cca039c8bbcf2', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '45155d2ceeaa818b64b90440fdfed25ec188325e', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '3616ff1459f541f001de78d358d73c6bb5f4410c', for: "ghs-help-icon", placement: "right" }, h("div", { key: '888910abae389b8fd2c3630d8e8d736169d969e7', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'be98893bac5883d771ef7d475d0382a6876b4dc2', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'a1f2e484f0db4318920e97e8c9647bafc6e4f92e', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '3e0a6f5cbdce23d3bbd0b3f303d872108387a71f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'f380a51571068622248414a2627165248f32091f' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ea5e8c38af037e7a1ef6d7e7bab2a37217300158' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'd39d4a42f5d508e2786658d890a9d6bde06392d0', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '6c3bfe3416e073285af820ff82c4a1b4bf59d1d2' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '48d5af19969bb4bbbb5f7563d07bfd788b3c0ab6' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '123b723fd0567a29debde5c3089a57a413bdf76d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '0f2725976791f9372a45b80e7e37604dab0cd5f8' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '7448817a107b827c1f53c1f09d4436e5bf4d3501', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '31a83c979e0d6027252fcbd14a62562c0e523a74' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '8623699723962f7a940356797147925e177707e2' }, "Publish"), " to initiate review."), h("li", { key: 'db9f248253b4106135a02621b4be75e341524e1f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '0228f748e73f565f12fcfba18fb7db0f63f1660a' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '3ee446216db3118f38edb195972ffcb71e3c47cb' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '63508cdcbebb0fd90c32012f66bf7e725d418c74' }, h("b", { key: 'ef3478347fa569cefb1450ed6287e16d82899423' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '9015c0d2ba3c336f4429b27e90ec2fada88ac669' }, "after"), " you have received final approval from Google.")))))));
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
