import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irGhsCandidateTableCss = ".sc-ir-ghs-candidate-table-h{display:block;flex:1 1 0;min-width:0}.ir-ghs-candidate-table__container.sc-ir-ghs-candidate-table{overflow:hidden;position:relative;display:flex;flex-direction:column;height:100%}.ir-ghs-candidate-table__header.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m);width:100%}.ir-ghs-candidate-table__title.sc-ir-ghs-candidate-table{margin:0;font-size:var(--wa-font-size-medium);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900);white-space:nowrap}.ir-ghs-candidate-table__controls.sc-ir-ghs-candidate-table{display:flex;align-items:center;gap:var(--wa-space-s)}.ir-ghs-candidate-table__country-select.sc-ir-ghs-candidate-table{width:200px}.ir-ghs-candidate-table__search-wrapper.sc-ir-ghs-candidate-table{width:280px}.ir-ghs-candidate-table__body.sc-ir-ghs-candidate-table{position:relative;flex-grow:1;overflow:auto;max-height:600px;min-height:400px}.ir-ghs-candidate-table__loading-overlay.sc-ir-ghs-candidate-table{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(255 255 255 / 0.5);z-index:2}.ir-ghs-candidate-table__table-wrapper.sc-ir-ghs-candidate-table{margin:0;padding:0;background:var(--wa-color-neutral-0);flex-grow:1}.ir-ghs-candidate-table__table.sc-ir-ghs-candidate-table{width:100%;border-collapse:separate;border-spacing:0}.ir-ghs-candidate-table__header-row.sc-ir-ghs-candidate-table{background-color:var(--wa-color-neutral-0)}.ir-ghs-candidate-table__header-cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200);position:sticky;top:0;background-color:var(--wa-color-neutral-0);z-index:10;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-200)}.ir-ghs-candidate-table__header-cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__header-center-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center;width:100%}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table{color:var(--wa-color-primary-600);text-decoration:underline;cursor:pointer}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-primary-700)}.ir-ghs-candidate-table__cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200)}.ir-ghs-candidate-table__cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__cell--muted.sc-ir-ghs-candidate-table{color:var(--wa-color-neutral-500)}.ir-ghs-candidate-table__cell--bold.sc-ir-ghs-candidate-table{font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.ir-ghs-candidate-table__cell--truncate.sc-ir-ghs-candidate-table{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ir-ghs-candidate-table__checkbox-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center}.ir-ghs-candidate-table__empty-state.sc-ir-ghs-candidate-table{text-align:center;padding:var(--wa-space-xl);color:var(--wa-color-neutral-500)}";
const IrGhsCandidateTableStyle0 = irGhsCandidateTableCss;

const tableCss = ".sc-ir-ghs-candidate-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-ghs-candidate-table{overflow-x:auto}.table--container.sc-ir-ghs-candidate-table,.data-table.sc-ir-ghs-candidate-table{height:100%}.ir-table-row.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-ghs-candidate-table tbody.sc-ir-ghs-candidate-table tr.sc-ir-ghs-candidate-table:last-child>td.sc-ir-ghs-candidate-table{border-bottom:0 !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-ghs-candidate-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-ghs-candidate-table,.ir-table-row.sc-ir-ghs-candidate-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-ghs-candidate-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-ghs-candidate-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-ghs-candidate-table svg.sc-ir-ghs-candidate-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-ghs-candidate-table .empty-row.sc-ir-ghs-candidate-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-ghs-candidate-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-ghs-candidate-table{position:sticky !important;right:0;background-color:white}";
const IrGhsCandidateTableStyle1 = tableCss;

const IrGhsCandidateTable = /*@__PURE__*/ proxyCustomElement(class IrGhsCandidateTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toggleSelection = createEvent(this, "toggleSelection", 7);
        this.toggleAll = createEvent(this, "toggleAll", 7);
        this.activateProperty = createEvent(this, "activateProperty", 7);
        this.countryChange = createEvent(this, "countryChange", 7);
    }
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
        return (h("wa-card", { key: 'c4deed75aaae1fdab211d3e3bf908881ed8110dc', class: "ir-ghs-candidate-table__container" }, h("div", { key: '11ab3c610b1a0e150c5e8182c9289f5175fce65b', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '540d60059367ac929e8d009c97458a66ac0d1993', class: "d-flex align-items-center gap-2" }, h("h3", { key: '3a353aac4df38f9f782170964e04faabbd675f74', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: 'dd228664f1ac1a759e1b7c3c4df1fc36583a5e76', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '757118dad29e197786e13faabd3d4ae0a47b58db', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'c474b7d06f0f629d218406963fda2f6c35838500', for: "ghs-help-icon", placement: "right" }, h("div", { key: '8c142f1556c8cb9b21e1bf51c3d955bb073b1abd', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'f7e4808adb32157b6afd348048acfc81a0221a83', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: 'e1805cf8cac5b1d53a5c8d828200a272ece42255', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '918d2a6043b5002596f984acdf66a1939c241452', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '893f67d39f48acd2fa68a14e35f9bf771631f0be' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '157533092567e9238676bbc4a7efc6d7ca92fda4' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '6dc7d2b39cb436e728ae2e771702e4cbc66d6dac', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'f2b93ed9bb354315d838e73e6c247e7bcebf77dc' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '4c89bd9c81c932531f49bf74f49ef34834e30a61' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '4e697f55913cb351fce25ff92cda0f159f945973', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '79fce1c5d058fe5ac7f305339bfe691de27c90a7' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '4b105cce8b688840850962652b854e421a5075f2', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ff37250e95ec22d3a8b2e18851944d3f523c1713' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'f2edd4e6924669ce6a3250a3b36b593454cd6284' }, "Publish"), " to initiate review."), h("li", { key: '586eca96322a0f9a7a6c98bbce656eb2fda771fc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '7bb96ae1b726cba2095eb8a741a777658721ddca' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '5f56577a5fadae36ed1e5f3c1742e58a895f7f79' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '3fe0da0a3be0e4449769e05ceb5930609c3ca640' }, h("b", { key: '790e139f2b79312450fbce743af44f71b3dcb2a3' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '541461ed6b2423fd76a62d53168b790e323b971e' }, "after"), " you have received final approval from Google."))))), h("div", { key: 'b938d14ffae2b29da640ce30b788e7349e7f4604', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '89da05248dbdb9a204896e02a6859160b298096f', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '57043ac0161f9e4b5a2b2b62cebfc86b74eeae01', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: 'e4374588144e2b9bbbbb7f431f8f46df0b049a5b', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: 'd7c916569c7fafd96af55ea70b5ed0335d33e544', size: "small", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '570cd8674e65621b37f0e16f0759e2a30f8e999e', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '31569f6914e453e96962ffb10edfbd9b714034aa', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '1936f149f7a484d531833372219849b2f752cf03', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: 'cc795d700a3bc0d1ea1a28dba19a4e6055b454c4' }))), h("div", { key: 'c909b2699e70fb6d28e27e5135b4fa11aed1ff2b', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: '3d8b648c8f91691e3ce6273fa33f372fe222c0fd', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '07f17a64d52bd498f84b395cb397384168b67f71' }, h("tr", { key: '1fdb1f0c6c7a5d12371608781dfa199c97f5041c', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: 'c698863b851422d0989d3f3002e4c759cdc9ebf1', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '99025253a68b3c7cbee4216a41755180b7f6ba39', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: 'a18f4104c5c8b77e534bf8408afe36e228f1ec64', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '32e92d177581c15f4db87cf922006c9f75d788b8', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: 'f2cf4020c0092b64535221a5a3901aedf118fb9f', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: 'fe99537a48d07447e6e9b3d1a001e2743a4a23dc', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: 'bd148b6fe0a60bf3bc98d7d71f603dccec269731', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'b0e526f29b30dd8a555826c552f184dc798a5f90', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '441419ed7e2610eea38d62019055ee498e2924d5', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: 'e8f9b4f7426d6c9a2f6a94793e9417f8c638b654' }, this.properties
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
                } })))));
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: 'b19254de133d0e7f509943040df424a508aa1d05' }, h("td", { key: '988e3ce7fba6d99d83a2902556d94668058b46ed', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '308e15202b814030f3bed589a863b0a0a0eef29d', class: "mb-0 small" }, "No candidate properties found."))))))))));
    }
    static get style() { return IrGhsCandidateTableStyle0 + IrGhsCandidateTableStyle1; }
}, [2, "ir-ghs-candidate-table", {
        "properties": [16],
        "countries": [16],
        "selectedCountryId": [2, "selected-country-id"],
        "selectedProperties": [16],
        "propertyToActivate": [16],
        "isLoading": [4, "is-loading"],
        "baseUrl": [1, "base-url"],
        "searchQuery": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-candidate-table", "ir-input", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-candidate-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsCandidateTable);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGhsCandidateTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-ghs-candidate-table2.js.map