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
        return (h("wa-card", { key: '5ca2ca8c45d6aa6bd2662699416f907d608b9306', class: "ir-ghs-candidate-table__container" }, h("div", { key: '597c4b11b36f538c358bd4c0bc20e4738f4bc9bc', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '19f53fe9b159ce16af7ab55e8cedbe12d68b9b3c', class: "d-flex align-items-center gap-2" }, h("h3", { key: '9ff1a71a00895e766ed4ff3e283d07a2d8ef60f1', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: '6fa2cd3b9d6cd1842f768824beecc19cd9918807', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: 'ceecc3afe2e2cbc30a1f28f3e7e7db818942e92a', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '9ebafb8024a0e29ad6389fbb20e367a70af14d92', for: "ghs-help-icon", placement: "right" }, h("div", { key: '8c77022c0e9fcce2a719fdc57277d33fb9537f00', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '499f5b15081100060bdca8ccd17447831cb8667e', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '84e0247e0c297216991ea84e1c7365eec5545bbe', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '405afb0d076f48cbe51f15a0aab680540f848b60', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1e3cd85a8e7825a509297eacebe70b80557d22d9' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'bbfcdfa499341d435112e6e53c4bd963f1ba7639' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'c60e52f8b7510df0b85b8fa41086412c1b169691', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '63c56c2e055614a73a8038acee7e21790560ea7d' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '1d7dface300764f23e298dd4ef54c8e4b8e3df44' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '5f7a47edd137fe71ad751e0b6445b11dfba9bc9e', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '909445d4ebcb68f15a090f2cf129c00349372723' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'a652efaff514a368a1f27e671a56ddade578237c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b5d459224c675e5e0da50d6ee40b0283dd88dbfd' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'a7f5cef85061b492d09e6d7e80f5effe82f8170a' }, "Publish"), " to initiate review."), h("li", { key: 'd879b69db4204b50b302034b5ba903f63ecd8015', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '8239fdd136367abbfe0727fc8a17c3492142ae71' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '9470d84b9f27261ef7bda2d37db0485354fa5f0d' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'c067834accf74c17e710f0d6f0a8bc0054a7fbf0' }, h("b", { key: '95d2aa53d7c24a6b9f1153d8e7a15fd6e0ed8385' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '6fcc6c8ac1f053520f453290e9154bdbf6fe1091' }, "after"), " you have received final approval from Google."))))), h("div", { key: '6b9b315f576bd60c9445f0ea4c41dd68c561616f', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '8e0f59fa48c7cee2fcb7ddbf1c9361cd5f9ec090', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '35825e0fa9115468c1cc62df67833f162439272c', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: '80505fe1ed7b8cd27903e92101868c6ee100df11', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '39a3abfe3897efd17089e0d32ece242be822970a', size: "s", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '660dcc80832b1e17f8d32a9f464e561cc3ed93ed', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: 'a69e0c9a3d1c82ed7df98bc127a6914b20f50e4a', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: 'adda4d7e46210ab4f1063ce7515c38f8809532e4', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '3b734a8898b612497251c809572cf5b56c9cb23b' }))), h("div", { key: '2e94ad8116e1e0ee3e025e2d083870006fb432fd', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'cd5d91db88b0132e6aee98b7bb7c968c64477fc4', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '3c86cdf044eaffd569c96b9e954ff4b54a7f23d1' }, h("tr", { key: 'c8f3fde1d12dcbc223ab8b1a6ca9b49bc8972016', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: '8af4b52c32b19f816534fe80e818695570eb9e5c', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: 'd79197d3fc246851030592100c990cdf8ea9955b', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '6624e57be5d225db70a52617cbd0495359e5a0cb', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '0a91cbcff30cfb23d1727400c0c97b0d79da4243', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '029b9b574becc9beed601bfceedf10f411c58b67', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '0a23e5599fdd79c58c068ab65b7b751140164f41', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: '6698fb1a23e96760246a1d455bfe957bf195ad73', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'c5dea746dad6d9ff3eb14234771fce2d9a6347c8', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '8a182faeca36aee19b0c7c47254035d75f4eebc7', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: 'bd9a296d5c5ec0fc0e77b9c7e013217affcba3d5' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: '12d9f54e9309a863064b057c24676c2db2527f94' }, h("td", { key: 'a41bbc5065e5a96eb6ebb2cad6fdcd51a09c6f96', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: 'bded10abda49a1c17c2adf7d96039e9ded5a4114', class: "mb-0 small" }, "No candidate properties found."))))))))));
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
