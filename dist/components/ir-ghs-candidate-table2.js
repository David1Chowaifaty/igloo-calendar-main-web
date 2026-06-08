import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irGhsCandidateTableCss = ".sc-ir-ghs-candidate-table-h{display:block;flex:1 1 0;min-width:0}.ir-ghs-candidate-table__container.sc-ir-ghs-candidate-table{overflow:hidden;position:relative;display:flex;flex-direction:column;height:100%}.ir-ghs-candidate-table__header.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m);width:100%}.ir-ghs-candidate-table__title.sc-ir-ghs-candidate-table{margin:0;font-size:var(--wa-font-size-medium);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900);white-space:nowrap}.ir-ghs-candidate-table__controls.sc-ir-ghs-candidate-table{display:flex;align-items:center;gap:var(--wa-space-s)}.ir-ghs-candidate-table__country-select.sc-ir-ghs-candidate-table{width:200px}.ir-ghs-candidate-table__search-wrapper.sc-ir-ghs-candidate-table{width:280px}.ir-ghs-candidate-table__body.sc-ir-ghs-candidate-table{position:relative;flex-grow:1;overflow:auto;max-height:600px;min-height:400px}.ir-ghs-candidate-table__loading-overlay.sc-ir-ghs-candidate-table{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(255 255 255 / 0.5);z-index:2}.ir-ghs-candidate-table__table-wrapper.sc-ir-ghs-candidate-table{margin:0;padding:0;background:var(--wa-color-neutral-0);flex-grow:1}.ir-ghs-candidate-table__table.sc-ir-ghs-candidate-table{width:100%;border-collapse:separate;border-spacing:0}.ir-ghs-candidate-table__header-row.sc-ir-ghs-candidate-table{background-color:var(--wa-color-neutral-0)}.ir-ghs-candidate-table__header-cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200);position:sticky;top:0;background-color:var(--wa-color-neutral-0);z-index:10;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-200)}.ir-ghs-candidate-table__header-cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__header-center-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center;width:100%}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table{color:var(--wa-color-primary-600);text-decoration:underline;cursor:pointer}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-primary-700)}.ir-ghs-candidate-table__cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200)}.ir-ghs-candidate-table__cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__cell--muted.sc-ir-ghs-candidate-table{color:var(--wa-color-neutral-500)}.ir-ghs-candidate-table__cell--bold.sc-ir-ghs-candidate-table{font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.ir-ghs-candidate-table__cell--truncate.sc-ir-ghs-candidate-table{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ir-ghs-candidate-table__checkbox-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center}.ir-ghs-candidate-table__empty-state.sc-ir-ghs-candidate-table{text-align:center;padding:var(--wa-space-xl);color:var(--wa-color-neutral-500)}";
const IrGhsCandidateTableStyle0 = irGhsCandidateTableCss;

const tableCss = ".sc-ir-ghs-candidate-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-ghs-candidate-table{overflow-x:auto}.table.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-ghs-candidate-table tbody.sc-ir-ghs-candidate-table tr.sc-ir-ghs-candidate-table:last-child>td.sc-ir-ghs-candidate-table{border-bottom:0 !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-ghs-candidate-table .empty-row.sc-ir-ghs-candidate-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-ghs-candidate-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important}.selected.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-ghs-candidate-table,.ir-table-row.sc-ir-ghs-candidate-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-ghs-candidate-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-ghs-candidate-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-ghs-candidate-table svg.sc-ir-ghs-candidate-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-ghs-candidate-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-ghs-candidate-table,.data-table.sc-ir-ghs-candidate-table{height:100%}";
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
        return (h("wa-card", { key: '322cc8ac10e81f5de2cb2e5813fcfd58858ecc8f', class: "ir-ghs-candidate-table__container" }, h("div", { key: 'd0f135d6a202bd7f15cda4b8b23c10bf08fe7f00', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: '1b271bc7df317358b22b24c289908b971aa74949', class: "d-flex align-items-center gap-2" }, h("h3", { key: '02a21e6c12dfef2e9373240f6643ab190b9b9a0f', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: '2a52bbd4c2846441c4b33b7e4a8bfe1716cd7e84', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '45e371a085381fcf35155f1c12bac989db2a88e1', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '58952cbc8aeeda92649d7d8d68169c67c6e7ca7b', for: "ghs-help-icon", placement: "right" }, h("div", { key: 'bdd6ee64935659022ea4fc1e0bddacee01d9798d', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '978b6643e29d0631cf043ac147f50a470e747d17', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '982fea1b03ec7a8dd5c621fab96af7461690709d', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '150168703fd5ac94dd50aff36ce65fbd7763c762', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '30a16477b76f57e5264753f6373c448f1a66102a' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: 'b3785e4a50d9f5a6419f49527d160d961197a248' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '313eb20caebd2d62a8323af38c2a50826ca14b28', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '58470570d876344d18e0eeb0c9628c93b15bd4bd' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '9c5196fa1ae17021f24b4cbbb4e7e206e58e7979' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '0a31c25f0711aa6e541ddb6e43c5db0f1f5d76f8', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '3fcd52cba38b40a387e83cfaebb899907375e3e2' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '11a2a17b9e1508348d1734b0ecf08b221d03ea6d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '89d1071d897b756cc3b17de19f0868ab00b22de8' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'afa839e87f2d8115ecda1a5ba05980555553f18b' }, "Publish"), " to initiate review."), h("li", { key: 'f31f61e7c665abc2830dbad46a85994bc22e0e6a', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '07547eeb0b71b58def933314630f918167dbb2a4' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '31d422ef84f2c38f122c0d48200dc4edc46305ee' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '9c6f65b4f82a3298e81297b6993f01d7edeb6fd4' }, h("b", { key: 'bf110b69dfad4a5ebaec71769e5cd528018e9269' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '96ab20365957f74392915455efee20f18afd7e2f' }, "after"), " you have received final approval from Google."))))), h("div", { key: '49850640095e43812b32679ca88a7c38282028b2', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '8836e8cd8acbbc5d2ab11db2d840ef798f3b37c4', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '08e6ecf0f8db83eae3e2822562b2c9f99906d774', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: '243169eddbe1b9142386f841fb79461c71fa6ac2', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '5f3833d2a536090c1eefed9ca2b93a82bf4f526c', size: "small", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '888b7a36f5d2475b8696dd2379f4d7c8a9668d14', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: 'dc2d9abf9e61de165f936183a938e34e2c92489e', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '4dc2a241d41cf952a52730b3ebf0b8bc2dc0a469', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '86ccce1ce298f6c70a99b3efe87ed7500b8e95e4' }))), h("div", { key: 'f257b0c6d9d9c35a019812e31631f912f8b1b8af', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: '49e8b4f0c3c738a0a8def65c47c5769116c5196e', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '3d90636a4a0b1f9c479f1f581740bfecd9119f62' }, h("tr", { key: 'e00d634431e6ea2defdeb943b96bdfeedefcf2d9', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: '3bb188574b26fa643919a46c550d366aa3c00fad', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: '52706d01d8f739487e608e864e2f54cc3fe4a773', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '9f4e46f3531c505f7611aab9fd97b444162f8c2e', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '3c59b50d6d57d3a4674afe021e852a053607787c', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '16e8f27daed53365e6c37e4314e14a54aa1a9a5b', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '08e09d443ef5a9ed1260eb24130a26dd2b5ff346', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: '416cb82a1ed93371f2af6bacf8ae1ee817ef7a65', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'e30549e9e9f51c0799a26b2bb8be6caeb44c8674', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: 'b04b3c339e4bbcf512efc80d710781e1fe9bd7ed', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: 'd18788c4c12d7436460c93cd42deb463e9c0087c' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: 'dac6c5e5cb31677e677b140a0456179a6f06765a' }, h("td", { key: '13cb792315d91710208bfca8993d9315e5f21940', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '870d1f62010d9d82918a3042dc32abd92d633ad2', class: "mb-0 small" }, "No candidate properties found."))))))))));
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