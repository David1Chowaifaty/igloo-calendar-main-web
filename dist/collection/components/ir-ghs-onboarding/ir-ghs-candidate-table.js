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
        return (h("wa-card", { key: 'ee9eb7af0105bb4fbcc00b8bb29fb69615f3f3b0', class: "ir-ghs-candidate-table__container" }, h("div", { key: '215a1f6289633496c4c4a8b23af0bf7985105d70', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '989a9a04cbdd6d9321d66259f5c0844619765273', class: "d-flex align-items-center gap-2" }, h("h3", { key: '7ad11c1aa7fb6b6ae350ab30737ab572ba686ce1', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: '7332d5cde5f7de38c5070d151351da7c08573246', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '963750bacef4b31158ea6b02ba3350e1529129f2', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '73737d18bd2ce26a8e58868366865b2ee2c52eec', for: "ghs-help-icon", placement: "right" }, h("div", { key: '432c0c670c1b0d6aecf19efce0bcc9701c648622', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '7cc51b8023ba006cbf95691ba2cb5b591b863e19', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'ee0c87e2ca42ae4ad371881ae5ce0da85d70a6f4', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '61d7d757a1b718fa384db1e0bf4d81d9b6046db2', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '21d6d47011a5cf75124aac34563c68aad213774c' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'f7d8fd8d8e7abbc7b83d312c420380717e126a3b' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'eabbf8788ae65907408a92503b43fc3406dc9121', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '262dce42480ce7a503bf2dc28ea308a55dddc713' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '53a36ef5811acbcb45b1cb44ae2c2e34f1c28bfb' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '43e47db64334c5582d0091d2c65a27f6c38bc39c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1de822ea3af06a10cec8c6f926384ee013436730' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '94c7c8c0509c4b3d27b595912948c7896bd74032', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'c4ce32cc8486ac71fe5dea75f567a2bb95010946' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '6a11484633200917f911c36bffd236486b733966' }, "Publish"), " to initiate review."), h("li", { key: '3a063b5672d42d301b591b524634c36f6b1bdd7e', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'aee08f9aca5496e97d43dece25f9ed221ed8bd01' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'db09cf847a831e771cf31d29430c7c3c419ad600' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'ddf13e0e017279af277e0f45a45635b5fd5bec65' }, h("b", { key: '81e9715c1e50b7da8149a695e9a63d4d7f1d1ac7' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '550cc435002409712b4febfe15e71be3d01e175e' }, "after"), " you have received final approval from Google."))))), h("div", { key: 'd694f323e2d76539b73f05077094f23d066a28f8', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '5b95046a1333edb4d9acf915413450565ad3ad99', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'f9b232274d2efbc914aac672a5af670e46bafe1e', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: 'df4f5298cc049a1afa8035972a52d123d5bc03f3', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: 'd23a110493a260cc5945600c75421b7f64379e3e', size: "s", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: 'fdd126a4ba061ac237979182f5165e1b864efd67', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '1ae8f13a3f6538446a93efa09ac0deda8207a23e', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: 'a711145c47a761b3cb8a2245f9398c57e240b4a6', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: 'e35341c74b17e6b42ba6150f1311ec0edc291821' }))), h("div", { key: '95f2eda295145d745c32a35844775a61a96204e4', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'df29509c939becbc414828f97f9ac4e2c887a80d', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '05131d207c59a35c951e897b964f34d51c9e3a91' }, h("tr", { key: '6f27ae4dd7d493d502827e7661e34d1dcd3cea8e', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: 'b18391afe9c1c73259c71a79839ea94fd819f8ef', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '221515626413796188d3d4bac6b2ad10651f1f15', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '113c5d4c54b5207ca859c052a2721080cce42503', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '651cb039aceb45e4598045bf03dc2771a8fe1c8c', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: 'c043dd9be8f7f5edc4c3cb734491840a8759dcb9', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '3a3d2eb393e8b1fbc4c142d42af87391f53d767f', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: '9fb336844ee3bc384a46dedcc47327467acb3948', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: '06d05c9bbef33e9b63f021159971793c4a0bed2a', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '44b428c70eac3896c4cd8549ac2862b993d7e388', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '146fd9b02a334a5ff060d9e06514bf2d00a8c2ee' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: 'cef8feeafbf902b0d0b55d9130a416b5183f9932' }, h("td", { key: '45b4b2e3ecda562b1efd0865c0f9cb5483e60d8e', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '6c7f7ad62af4d210cf1e0df524755e7942107da9', class: "mb-0 small" }, "No candidate properties found."))))))))));
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
