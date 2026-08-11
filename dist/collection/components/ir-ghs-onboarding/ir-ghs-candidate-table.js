import { h } from "@stencil/core";
import axios from "axios";
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
        return (h("wa-card", { key: '022b38fb64eb3b3aaf68015d06e4888a246b4c58', class: "ir-ghs-candidate-table__container" }, h("div", { key: 'b323936081215700a71190c477cfc3bb295c501b', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '935f1c7f38c675fe4e63d661aeb913059d0f2124', class: "d-flex align-items-center gap-2" }, h("h3", { key: '3329112ca20087773951d823d09358c0acdaca7d', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: 'ed94bdc8aa0eb99eda42da60940c21099db86c13', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '91b2e4ddf84fa7339d46d14e12b613ba08a031ee', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'e5f400f24bec8b6e9f9625a4136661caf26e5f43', for: "ghs-help-icon", placement: "right" }, h("div", { key: '61fc8804acf28eacbf6177e301928b4cd0bced91', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'd398bdf28ad33387d187ec88bc90d3aac0f9ba6f', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'a287e9e87c189f28ce4c93a1f8fc80e6f0c07c76', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'c98b9ab7c9176847d2d73aa7a6b7039b8fc3de7b', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '257faac099f4ea2f9fd5bc5186567b2bfae103f7' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'b609fcb4c5a3351a88a6d872114b150691f1cee2' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '97a72455b29044395dd4ec440fd02519a09e564f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e49b096d25d75f0533a67c5bee63bd3eb5dcb29d' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '87117169a1072de8b69730faaec14da88c8faecb' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '0d7e342894dc297801210200a55f402bf9f49b15', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '32d594bcdc3f4e0c13fffc8e0c1423254ec5ea40' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'a5591dfc4c3e5e3bb5a441f7b49be7e20b6f1978', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1c133c2257ba427e01e404106a93b93c6bb28c5c' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'f491bda9c3df3a1295aee322d4a27ae2472ee2dd' }, "Publish"), " to initiate review."), h("li", { key: '7e79514e12b76c6188498ea9231e46be800a7717', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '5a6d4c9faca1fd49026e6500a60105e191cd9952' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'bbe12fc5d7697cd3be1763516cc4ba334cb1c701' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'd70f3a6b97b2f9a93583769dbaf2f89c27651192' }, h("b", { key: '8bd15c6757c53a5eb0a5342e9c3215eb85f6b9c8' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '10d1dba15c57e10898c6d7faad3e6f7454577c59' }, "after"), " you have received final approval from Google."))))), h("div", { key: 'b14deade3d71036bbe2e62ed3ba52fc19f369e28', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: 'fa3564b2e10784b6aab41144fa5323ec9a4aa118', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'a75f9e4f60fa206f7e69833005a9f15b5c9259c5', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: 'ed4ebe7bf55cc0183802aa37cc84d50ecfeed551', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '6caf46f826c88a44ae10a22bcac45014f10e3810', size: "s", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: 'f5c7a634ab30e8c86441f0822e4a814482aeab1b', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: 'dc13c53c0713772e36f7cffe2cf8847438b29517', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '491ed92ef35e33b2cb6375f8d0a54ef24fa83c58', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '9d949ef5b19a7ab22a4178ea47d182b822a0a72a' }))), h("div", { key: '9ed7123cd1d479a36be7a914a056e1a0c2be4683', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'fa5fc3c9583cd69e2cfb95f6329f0b24a11242a6', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: 'd4f935943199c93fc2c61e2967b7a604b6a2d3c8' }, h("tr", { key: '2baa8d8e945073adff61b6f352549fce24d5cefe', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: '8ccc11293657d84a3357a2188220edb9c164c38b', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '4516809780bad8ccc07b5a64745d672fcbca60f8', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '84a53f71c44365b7f28e734e2b38c14a167ec4f8', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '53e0e51990d08547339d6423b8e481d5cdeb7996', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '38ece5f07842b1f14f5c2cbfadeb60da7f4f99c0', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '96154e897437893c3705469351fc0c785e65a8ac', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: 'df9fcdbb01e3247cd5e208f469fd0b97dbbe7f31', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'fc3ed90d7318e49df01cab709258862174026012', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: 'f6d4e2ba5a13430bf49aeb5ab46a9f09daa769f1', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '6d97faf67305384eb900197effa3d5632aeba30d' }, this.properties
            .filter(p => !this.searchQuery ||
            p.aname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            p.NAME.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .map(p => ({
            ...p,
            countryName: this.countries.find(c => c.id === p.COUNTRY_ID)?.name || 'Unknown',
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
                } }, h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--center" }, h("div", { class: "ir-ghs-candidate-table__checkbox-wrapper", onClick: (e) => e.stopPropagation() }, h("wa-checkbox", { checked: selectedIds.includes(p.AC_ID), onchange: (e) => {
                    e.stopPropagation();
                    this.toggleSelection.emit(p);
                } }))), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.countryName }, p.countryName), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.level2 }, p.level2), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--muted ir-ghs-candidate-table__cell--truncate", title: p.aname }, h("div", { onClick: (e) => this.handlePropertyLinkClick(e, p) }, h("a", { href: `https://x.igloorooms.com/manage/acgeneral.aspx?p=${p.aname}`, target: "_blank", rel: "noopener noreferrer", class: "ir-ghs-candidate-table__property-link" }, p.aname))), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--bold ir-ghs-candidate-table__cell--truncate", title: p.NAME }, p.NAME), h("td", { class: "ir-ghs-candidate-table__cell ir-ghs-candidate-table__cell--center" }, h("div", { class: "ir-ghs-candidate-table__checkbox-wrapper", onClick: (e) => e.stopPropagation() }, h("wa-switch", { key: `switch-${p.AC_ID}-${this.propertyToActivate?.AC_ID === p.AC_ID}`, checked: this.propertyToActivate?.AC_ID === p.AC_ID, onchange: (e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        this.activateProperty.emit(p);
                    }
                    else {
                        // Prevent default toggle off visually if we only allow activation
                        // Actually the parent component controls state via propertyToActivate
                    }
                } })))));
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: '37a4f567a7fe672cd502beb844172b746f419da7' }, h("td", { key: '2f6875cb0ff8cf7cfbfa1fb87a6776effcf04f71', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '6247ecd1e84c403f0d8791b4bfdce6305c4bab8f', class: "mb-0 small" }, "No candidate properties found."))))))))));
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }",
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }",
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }",
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
