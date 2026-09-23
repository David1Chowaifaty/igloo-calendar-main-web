import { h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrGhsFilters {
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("wa-card", { key: 'c196b47dd74c371f4e4df0c10ec78e47d6e52727', class: "ir-ghs-filters__container" }, h("div", { key: '0c2db9c483c0c9ff35e77cc07470ddf8a6eb7f1e', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'dce21d6bc17b950eb054e18ba4fc5741862ae0c3', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: 'a927ded5c471898fd23355caf115d05587242cd1', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: '979171de0b939e04b4d3100cfbcdbc0afc3411ae', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'db3c7b21aaacaa558af6b7ec8305bdf56859b590', class: "ir-ghs-filters__body" }, h("div", { key: 'ed491abedbb225e5293e771b855d9dadbe019323', class: "ir-ghs-filters__group" }, h("label", { key: 'fe61d823eb92e3b82ab6ec2a8fd544807d3a8c0d', class: "ir-ghs-filters__label" }, t('Lcz_Countries', { fallback: 'Countries' })), h("wa-select", { key: '7a7e4d3103bcfb96ae941e9da07ea09bb93f9c38', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'db71d588480f8ac79393fda6b03a4b3e5ca0bd7e', value: "" }, t('Lcz_ShowAllCountries', { fallback: 'Show all countries' })), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '9a2cf562929a53c40e36f29ba82f1d8b073d2b3a', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '2d581b84dd8a6c5b01fdfb4de90bafdb79ba1cc8', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '170f0b384b7989cc0cbe40b840e86bf39b3c22dc', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'ac7a4619d144f84cbe01fdb26c957b461c8014e6', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t('Lcz_Apply', { fallback: 'Apply' }))), h("span", { key: '66c234bcd83ea10d02b35f0beedc53bd51e33211', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, h("wa-icon", { key: 'f62851716f9a8bd5e57a35604835276377663221', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '5c037d80281185e322c128e6e63b9c61fd6c96d9', for: "ghs-help-icon", placement: "right" }, h("div", { key: '4c700bd309c752434585d298717ac7aebb075d62', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, h("h6", { key: 'e2aff57d229fa8e2f8e84756748ee751bb9548fc', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), h("ul", { key: '701cd8fcefe6c106b03ada76e3c43a50cfb09c1b', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '93ef8518dc9a1ff76473f354b7eeb3f1f6a28863', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), h("li", { key: 'bdc3f2cd47ac643d887587775648f9c23b9eabb9', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), h("li", { key: '6601dbe41a695c3fe3521fbf5a85659aaf2bebf2', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep3Processing', { fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid)." })), h("li", { key: '585ce62fbc72f4a1ce02d2b053cc9e43828131ed', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), h("li", { key: 'dfc9a6a1e8c8d4959444b34fd7745e29e3e3890d', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), h("li", { key: '5fc9fb9da93d899a5a43f57c705a0e9c43915d16' }, t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        }))))))));
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
