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
        return (h("wa-card", { key: '4d93a591f3fd2439fd22e12bf449178dd7118e53', class: "ir-ghs-candidate-table__container" }, h("div", { key: 'c83ade549269282d9cec0f953e49fa16c7a60f8e', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '7458c2505d75a93e36ba84cb7a60decbeb640f50', class: "d-flex align-items-center gap-2" }, h("h3", { key: '03a2f2a13a2c17f5d6e571459aaf9bc3e2cd93a3', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: 'c7d7d7ca735b0cf3981550e2e5749dfe8e417f1f', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '0903ac9ecf2bad69188a5a13d76507f9f1537667', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'd4dede62c64d16b2ac09d5d4de0771ef802436e4', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'a224a58d76f98349f5f05c2cb353bf20efc8cc57', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'c4ee31e25bebb95baf1bf00d55356a607f574534', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '8c5cca52cd4702c16cfd77d78461680cdefb84d7', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '7b9d61f94a45980e68a6f67483204ce90946ea97', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '21b6b4e37cfaa04bd14b3c45438814f9d15963c2' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'b8ff526a54ea2408babf530c4c7eb3466c33db85' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '772090838750d67848ea67558cbe9caf1a367253', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2a7ec32c5664d403a65dac8203228c964c92a14c' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '82aec1787784f967ecb1b8dd012d373e74536915' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '3d02f5f4a874df959f746f158e7f8321c7e9776d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '82908f5e0b70c6af74ca3892764b556b87b8019f' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'd3d779838784ac8c916b0beb47b07fcd34f89c05', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ea74d891be3336b9595c80d688a1b199d41c0e11' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '7df7f9688f30ef9f3b344c2d607023704c5a3fa1' }, "Publish"), " to initiate review."), h("li", { key: '1c9fe8c85a542d8bbedcdd88ac1815d9073b2bc3', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'bcfa110f3507b3820ee681c2c49a204335a6b538' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'c55331d3b4dc450284fe528c530c197361dd7217' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '63f2144084793eb4b99f3bc41966a28d87ee481c' }, h("b", { key: '5a73635745600a5e181e26fd4503ed5212f2fd03' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '8e05ddf7c768032a1d5a1b7918b68376498d50c1' }, "after"), " you have received final approval from Google."))))), h("div", { key: '8c06ddf6aa713adecf77d426098db58f27795513', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '517bef4240eaabc8c0aabaf0ee19e37b705b1e54', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '6203c677027a484c266cb4ed3e527cfba7b31ea0', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: '92551fcc1b4677d222126e444a225f5025358737', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: 'f68bb4ba287d7d8dddec07baec440b4dc1883b57', size: "small", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '8d08ee0e10c15891ef59a524f647237da79c98c2', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '6e9a26fb3a5e206e6e324e41e5cda5e31bd849ec', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '66c3e02e97602d7444a51ee9889c32f92ace34b8', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '3826d9ae956d61f289da9845ecc64eee882ac3e0' }))), h("div", { key: '3829432490d7f1cb5e33993352db9aa076d4a853', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: '7943b0823a0843b990298bc4d1ca386e1dadb186', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: 'e7ae377cac4f2cf4a39ecaec15c7da36914bc266' }, h("tr", { key: '09c9b01a5a42240d44c0eca7fbc591484fe4af41', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: 'ab7f95f138ce3da238eba2ad1eb65ac1fba97104', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '8dc3896536fe4c5e15944284a361d515f86a0610', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '38b3d79f76fcb01944fdaef35e7db83c4744dd5a', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '99ab1781581021c3586c3fb955afe3a16cfe362f', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '4cbdcaf4114763027899102bdb929cce0fb80a7f', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '20e55dea8f0cb10427c021f17dac6f317c2e169c', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: '11bd715954c89f5b6c778c25b1e0b9846edaf616', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: '6205cd88c0b2f23d42ebc0761a3a0ae3371e5ae8', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '8c3a9bdaa947b57597c64f11199dc8389e2bb56e', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '9cdb95b352d4928486a00b838f24987fbdddfe98' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: '83cc715ab44ee87b7d614d688a97612a1415c560' }, h("td", { key: 'efe9c9780a8bd805ab034102d33fcbbc7503fb8d', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '6a7727625e6cb08cf790b8c701c3424175c955f7', class: "mb-0 small" }, "No candidate properties found."))))))))));
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