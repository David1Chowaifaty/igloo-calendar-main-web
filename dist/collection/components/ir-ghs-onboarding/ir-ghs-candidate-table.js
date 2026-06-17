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
        return (h("wa-card", { key: '6e4c639285f2f6c812d14492261dceae255cb8a7', class: "ir-ghs-candidate-table__container" }, h("div", { key: '25b1ae16b43ab33e17009ed4843c7d4a93558849', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: 'aee4d4bfdb540f8c6915eef61c25c8ca03598ad9', class: "d-flex align-items-center gap-2" }, h("h3", { key: '63d9a26e561f8b738199e99aae2be9801546708c', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: '1bec26503fd65bf8701fdbcdb66f2a4808499449', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '22a4da0b82b8e584a38ba50957fd1d04e5f628c3', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '13a264af14aa538f195bafcb51404bf34ead4aba', for: "ghs-help-icon", placement: "right" }, h("div", { key: '0e5066ce517a61a73c263d6f7022fc057f5f36ce', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'ce64a1c3c8c1997a894afaa929a74b6308f3f37d', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '5e86725e5d8df64353f8160423c03a0aed64c3fd', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '3f70c59a3a3f6396be535a726efa24afcde35f1d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '17fa4c0e2bc9d39131874c91e419ab4bf607d43b' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'ad1dc7d26481e99c8571e7e36eb80527e36576ef' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '3eb862623494d19b00cafbcc36d3c1ea8d6b79b6', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '98cd7cf57eab9c17cf1421d3ea44bda3ab603455' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'e910cc1553337530569b152978de2dd3beab1570' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '638c1b31e94f87509ecfd957be0a3b020b57e7a8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'edaa3b493b9f68c10c144bc5cb871b000fea9bee' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '068dbb01413b187581857bd8b6f039859e561121', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'e02a7b4739df5c6f404425a82e51eec8a6b067a2' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '8d228fae830a99d6f6dd6aa462b027005b4f6508' }, "Publish"), " to initiate review."), h("li", { key: '4346e45d0551808cf927e5d953ac0d20ad0fa377', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b2ea182282fd2ddf91a31dd2bf1d94ff90bb78c0' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '9039b54ed6425e82dbebffa635835134c19c4b70' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '6ecf1f2a1edbda961406c77e7d741c4c7c4f304a' }, h("b", { key: '0792fc47552e831d6ea3ed94927618a2a3fc3245' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '4185ce901f9e5d64dbee20f9e3e71bedd681a306' }, "after"), " you have received final approval from Google."))))), h("div", { key: '1ebaa4ca9a34c652b748d55bea9182a105e327fc', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '8d743c2eab5bcfb9ab3651e70248b2487fb265d2', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '35c04dc8a8050cdb6f30ed2ec987ef40c34a1b89', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: 'ee3545bc7f9a85d755f1f62da6b382e11443342e', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: 'ca0c8d68b1df29f4e3072cf803f3d2319293307b', size: "s", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: 'b01528f91973bd13be6d9a41404b586cc967a26a', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '371d60b5d10f284a2422e40954443c39a1a59abd', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '3159b68499e8b63e2b0f7f0b7d05cd26075e5605', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '55412d6b6a3f2c7a8703240c82c94cb51abfc9e3' }))), h("div", { key: 'c204962dafc5e377bcb234a245d0009cdb421389', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'd9a5c128310bf67bc57e6f514047b352de317c08', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: 'b35d2a511e7a836f7e77f37daed07fe741df0eaf' }, h("tr", { key: '674018e1bab76de8a18ea4fb8318faf9b16df2d8', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: 'd1befdc09ce6d6bdd5fc683cec981712677ca129', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '5728429b652067c73523d2bd6e88a23c16e485e2', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '01c5da4e25d76ea32c60eb8ecc80ea1f4b4e09d0', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '76d963d8a0353158d82cebc4eefe548370144c9d', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '46b47069700e40a350a7d7c7db4e9e30d09a79c3', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '7fa8d5b00c7af4f3a6f75b65609d88c1c67fd7e3', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: '6a3d991cacef9b111c9535f96031011e7687b5ea', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: '645007b8766546e3ea28d8c396eca30d96d45b8c', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '208d4ba429094afac5afb0d8b2f46ecb7f63b14d', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '5242e1b352480eb5c8a858b2866b44db39ad5c78' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: '03d2b496e1d226074dd6a215b9b7630b437e2239' }, h("td", { key: 'f4a8666160b35ad097b0034d049bac1ce173e4ae', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '01fd2615dc9c996cdd52e3118b5030bfd1a1b0f5', class: "mb-0 small" }, "No candidate properties found."))))))))));
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
