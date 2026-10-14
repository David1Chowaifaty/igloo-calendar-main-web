import { h } from "@stencil/core";
import axios from "axios";
import { t } from "../../services/locale/t";
export class IrGhsCandidateTable {
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    propertyToActivate = null;
    isLoading = false;
    baseUrl;
    searchQuery = '';
    toggleSelection;
    toggleAll;
    activateProperty;
    countryChange;
    async handlePropertyLinkClick(e, p) {
        e.preventDefault();
        e.stopPropagation();
        try {
            console.log('Switching context to property:', p.AC_ID);
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Get_Ac_By_AC_ID_Adv`, {
                AC_ID: p.AC_ID,
                Bypass_Caching: true,
                IS_BACK_OFFICE: true,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            if (data.My_Result) {
                const propertyJson = JSON.stringify(data.My_Result);
                localStorage.setItem('_Selected_Ac', propertyJson);
                sessionStorage.setItem('_Selected_Ac', propertyJson);
                sessionStorage.setItem('_Page', 'acgeneral.aspx');
                console.log('Storage updated. Opening link...');
                window.open(`https://x.igloorooms.com/manage/acgeneral.aspx`, '_blank');
            }
        }
        catch (error) {
            console.error('Failed to switch property context', error);
            window.open(`https://x.igloorooms.com/manage/acgeneral.aspx`, '_blank');
        }
    }
    render() {
        const selectedIds = this.selectedProperties.map(p => p.AC_ID);
        const allVisibleSelected = this.properties.length > 0 && this.properties.every(p => selectedIds.includes(p.AC_ID));
        return (h("wa-card", { key: 'cab360fea950957ef90b9fd0a09c08f2928587f3', class: "ir-ghs-candidate-table__container" }, h("div", { key: '429ded6187b8661ceddc6202159fb7b39eca2368', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: 'c62da910ee0961337711c2f729400151695a5d5a', class: "d-flex align-items-center gap-2" }, h("h3", { key: 'fef3f51360fa0ef5857e552fc77f385b87a5b938', class: "ir-ghs-candidate-table__title" }, t('Lcz_CandidateProperties', { fallback: 'Candidate properties' })), h("span", { key: '8da9c447e3f89a367597274ad544f9686691a0b0', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: 'f8d8ea593f34bd1caf5b63d6202638eee2d465f0', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'f4c74183ccc45e86ce52450d6b735d9f4cea6c44', for: "ghs-help-icon", placement: "right" }, h("div", { key: '93ee5027a4bc90d2fbd9a4b3801ede15f3fcf814', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, h("h6", { key: '48ea42102e6709e676fe18da7a7d23bf1aa4966e', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, t('Lcz_GoogleHotelsOnboardingWorkflowGuide', { fallback: 'Google Hotels Onboarding Workflow Guide' })), h("ul", { key: '52c10f5fe44a8623f583b76f65dafff8cf8692d7', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'e2a237bbc94c2800e3be978cf452f4f7c7f05a6d', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep1Selection', {
            fallback: 'Step 1 - Selection: Select candidate properties and click Generate request to download the onboarding XML listing.',
        })), h("li", { key: '5950711b4a87c99bd67aa0fde4d45c8133f0cb0e', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep2Upload', {
            fallback: 'Step 2 - Upload: Log in to the Google Hotel Center portal and upload the generated XML file to the property feed section.',
        })), h("li", { key: '924cb0d2ad9bcf3e9f27f6393e8b773cb823b32b', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep3Processing', {
            fallback: "Step 3 - Processing: Wait for Google's automated processing confirmation email (this confirms the XML is valid).",
        })), h("li", { key: '87ba4a8e0484a7a8a4f921c9dceaf96ce8674f6e', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep4Publication', {
            fallback: 'Step 4 - Publication: Once the confirmation email is received, return to the GHS portal and click Publish to initiate review.',
        })), h("li", { key: '9136681036ab770cc155b228ab7fdd2da0596ac7', style: { marginBottom: 'var(--wa-space-s)' } }, t('Lcz_GhsStep5FinalApproval', {
            fallback: 'Step 5 - Final Approval: Wait 1-2 working days for Google to complete the manual verification and approval process.',
        })), h("li", { key: '60cea3ef3210b5287a6ddc51666d87c98319fbd4' }, t('Lcz_GhsStep6LiveSyncFull', {
            fallback: 'Step 6 - Live Sync: Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR after you have received final approval from Google.',
        })))))), h("div", { key: 'de0f1cfde02760c5b535b7c9abe3d1e6be73fb5d', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '5af59f7e83d0ba05f35cf1c6c7427068a6ac6bc8', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'b132c3b773694b4d72d07d6e3180bb43aeb036ee', value: "" }, t('Lcz_AllCountries', { fallback: 'All countries' })), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: 'f68b386ebf171379519d1200ffd38a9c59f47c5a', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '957ad1d3e50b1e1a8b33a4edd3532e42965de692', size: "s", placeholder: t('Lcz_SearchByNameOrAname', { fallback: 'Search by name or aname...' }), value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '973b0363646df35ba2b9b9d9801ffbf6f44c7a8a', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '31db9f9b01787a920f1577d2f834658daf84e0eb', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: 'a234fdd57fc9923becd4944fe9e7d967942da8f9', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: 'c37ab75a38a02830244c2b48bf2657ada0822ba1' }))), h("div", { key: '30dbd51dcea4062adc06c68cf77d583100cf7c16', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'a01a8e28ca8c3e5c7624f5496f23fa0e75c43cd5', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: 'c30169044027edb827f76e6eb04c97bd89cc8d2a' }, h("tr", { key: 'a33b5776c90e8ebb7721d3b6c4c5ff019ed8c5fa', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: '5f728db8667d86db71674ab225917976cec03dd2', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '041106ef1ae9f4309c6e205edbdd5baff8d75ade', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '8d1d7bc6723595e4f593ff67ec4a611684359106', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: e => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: 'c176f469e1a85ebcf3c4f9c8605daf479034e645', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, t('Lcz_Country', { fallback: 'Country' })), h("th", { key: '34a344ae459ca0b676f2546dd04be49a4fe14c65', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, t('Lcz_Level2', { fallback: 'Level2' })), h("th", { key: '9850767e9fe6c6c8cdec9e6451a0dc430de73fb4', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, t('Lcz_Username', { fallback: 'Username' })), h("th", { key: 'dbddf003f6c62c90eda62eddf72610ba61706590', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'bbd76d9700ecb43178ef086c34b4603c77b1281f', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '6073dde41ad8718b3b85016f88837d9868d54a00', class: "ir-ghs-candidate-table__header-center-wrapper" }, t('Lcz_ActivateQuestion', { fallback: 'Activate?' }))))), h("tbody", { key: '38457890f3752bb88edc4b3402ad3c051ab717f1' }, this.properties
            .filter(p => !this.searchQuery || p.aname.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.NAME.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .map(p => ({
            ...p,
            countryName: this.countries.find(c => c.id === p.COUNTRY_ID)?.name || t('Lcz_Unknown', { fallback: 'Unknown' }),
        }))
            .sort((a, b) => {
            const countryCompare = a.countryName.localeCompare(b.countryName);
            if (countryCompare !== 0)
                return countryCompare;
            return a.NAME.localeCompare(b.NAME);
        })
            .map(p => {
            return (h("tr", { class: "ir-ghs-candidate-table__row ir-table-row", style: { cursor: 'pointer' }, onClick: () => {
                    this.toggleSelection.emit(p);
                } }, h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--center" }, h("div", { class: "ir-ghs-candidate-table__checkbox-wrapper", onClick: e => e.stopPropagation() }, h("wa-checkbox", { checked: selectedIds.includes(p.AC_ID), onchange: e => {
                    e.stopPropagation();
                    this.toggleSelection.emit(p);
                } }))), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.countryName }, p.countryName), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.level2 }, p.level2), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.aname }, h("div", { onClick: e => this.handlePropertyLinkClick(e, p) }, h("a", { href: `https://x.igloorooms.com/manage/acgeneral.aspx?p=${p.aname}`, target: "_blank", rel: "noopener noreferrer", class: "ir-ghs-candidate-table__property-link" }, p.aname))), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--bold ir-ghs-candidate-table__cell--truncate", title: p.NAME }, p.NAME), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--center" }, h("div", { class: "ir-ghs-candidate-table__checkbox-wrapper", onClick: e => e.stopPropagation() }, h("wa-switch", { key: `switch-${p.AC_ID}-${this.propertyToActivate?.AC_ID === p.AC_ID}`, checked: this.propertyToActivate?.AC_ID === p.AC_ID, onchange: (e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        this.activateProperty.emit(p);
                    }
                    else {
                        // Prevent default toggle off visually if we only allow activation
                        // Actually the parent component controls state via propertyToActivate
                    }
                } })))));
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: 'f821cef2089ebf80dff344c39676c10d26ee1e73' }, h("td", { key: '0fd88de6f9264c3e5c8c8c57e7be1dbeb19c71fe', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '11433bf037aedbdd935582270105266f9e528838', class: "mb-0 small" }, t('Lcz_NoCandidatePropertiesFound', { fallback: 'No candidate properties found.' })))))))))));
    }
    static get is() { return "ir-ghs-candidate-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ghs-candidate-table.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ghs-candidate-table.css", "../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "properties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GHS_Candidate_Property[]",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
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
            "selectedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GHS_Candidate_Property[]",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
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
            "propertyToActivate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GHS_Candidate_Property | null",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
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
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "base-url"
            }
        };
    }
    static get states() {
        return {
            "searchQuery": {}
        };
    }
    static get events() {
        return [{
                "method": "toggleSelection",
                "name": "toggleSelection",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GHS_Candidate_Property",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
                        }
                    }
                }
            }, {
                "method": "toggleAll",
                "name": "toggleAll",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "activateProperty",
                "name": "activateProperty",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GHS_Candidate_Property",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
                        }
                    }
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
