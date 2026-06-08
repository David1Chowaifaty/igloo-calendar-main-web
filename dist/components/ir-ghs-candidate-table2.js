import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irGhsCandidateTableCss = ".sc-ir-ghs-candidate-table-h{display:block;flex:1 1 0;min-width:0}.ir-ghs-candidate-table__container.sc-ir-ghs-candidate-table{overflow:hidden;position:relative;display:flex;flex-direction:column;height:100%}.ir-ghs-candidate-table__header.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m);width:100%}.ir-ghs-candidate-table__title.sc-ir-ghs-candidate-table{margin:0;font-size:var(--wa-font-size-medium);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900);white-space:nowrap}.ir-ghs-candidate-table__controls.sc-ir-ghs-candidate-table{display:flex;align-items:center;gap:var(--wa-space-s)}.ir-ghs-candidate-table__country-select.sc-ir-ghs-candidate-table{width:200px}.ir-ghs-candidate-table__search-wrapper.sc-ir-ghs-candidate-table{width:280px}.ir-ghs-candidate-table__body.sc-ir-ghs-candidate-table{position:relative;flex-grow:1;overflow:auto;max-height:600px;min-height:400px}.ir-ghs-candidate-table__loading-overlay.sc-ir-ghs-candidate-table{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(255 255 255 / 0.5);z-index:2}.ir-ghs-candidate-table__table-wrapper.sc-ir-ghs-candidate-table{margin:0;padding:0;background:var(--wa-color-neutral-0);flex-grow:1}.ir-ghs-candidate-table__table.sc-ir-ghs-candidate-table{width:100%;border-collapse:separate;border-spacing:0}.ir-ghs-candidate-table__header-row.sc-ir-ghs-candidate-table{background-color:var(--wa-color-neutral-0)}.ir-ghs-candidate-table__header-cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200);position:sticky;top:0;background-color:var(--wa-color-neutral-0);z-index:10;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-200)}.ir-ghs-candidate-table__header-cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__header-center-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center;width:100%}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table{color:var(--wa-color-primary-600);text-decoration:underline;cursor:pointer}.ir-ghs-candidate-table__property-link.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-primary-700)}.ir-ghs-candidate-table__cell.sc-ir-ghs-candidate-table{padding:var(--wa-space-s) var(--wa-space-m);font-size:var(--wa-font-size-small);text-align:start;border-bottom:1px solid var(--wa-color-neutral-200)}.ir-ghs-candidate-table__cell--center.sc-ir-ghs-candidate-table{text-align:center}.ir-ghs-candidate-table__cell--muted.sc-ir-ghs-candidate-table{color:var(--wa-color-neutral-500)}.ir-ghs-candidate-table__cell--bold.sc-ir-ghs-candidate-table{font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.ir-ghs-candidate-table__cell--truncate.sc-ir-ghs-candidate-table{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ir-ghs-candidate-table__checkbox-wrapper.sc-ir-ghs-candidate-table{display:flex;align-items:center;justify-content:center}.ir-ghs-candidate-table__empty-state.sc-ir-ghs-candidate-table{text-align:center;padding:var(--wa-space-xl);color:var(--wa-color-neutral-500)}";
const IrGhsCandidateTableStyle0 = irGhsCandidateTableCss;

const tableCss = ".sc-ir-ghs-candidate-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-ghs-candidate-table{overflow-x:auto}.table.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-ghs-candidate-table tbody.sc-ir-ghs-candidate-table tr.sc-ir-ghs-candidate-table:last-child>td.sc-ir-ghs-candidate-table{border-bottom:0 !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sc-ir-ghs-candidate-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-ghs-candidate-table .empty-row.sc-ir-ghs-candidate-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-ghs-candidate-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-ghs-candidate-table,.ir-table-row.sc-ir-ghs-candidate-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-ghs-candidate-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-ghs-candidate-table td.sc-ir-ghs-candidate-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-ghs-candidate-table thead.sc-ir-ghs-candidate-table th.sortable.sc-ir-ghs-candidate-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-ghs-candidate-table:hover td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-ghs-candidate-table:active td.sc-ir-ghs-candidate-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-ghs-candidate-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-ghs-candidate-table svg.sc-ir-ghs-candidate-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-ghs-candidate-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-ghs-candidate-table,.data-table.sc-ir-ghs-candidate-table{height:100%}";
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
        return (h("wa-card", { key: '1dae26aba5ee1ad766b6693d292b41dc7fe425d5', class: "ir-ghs-candidate-table__container" }, h("div", { key: 'da9f46f7ca07806eefc01572b78a4eb889c77d86', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: 'ad25e1a513838fb2101e8883fc6f7339ae5208a3', class: "d-flex align-items-center gap-2" }, h("h3", { key: '26c92255b63fc3e5e48133f4251792f33d34a91c', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: '411d810977514dbae8cd0bca95e545537859b65c', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '0cb3ff8ffe159b4c97a7dee8df77cc288ba84690', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'a66b1f505bc861c47b0e5cdfbb34809f38d1e6b0', for: "ghs-help-icon", placement: "right" }, h("div", { key: '2ebcc0f2454f048eddfe77c02f1466af49fcc65a', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '510309cf38e99ef60dcc3916d6c337a0be6ec1ec', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '48bde3aa93ffa7e6bebd5a3d0e717f4943237752', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '9e7aa5023837b33cd0145b11090d07d85a4d2111', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2d80e7907027aafc3429144605d1cf31afe50e46' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '31e8972bbc4e1c5cc734ee1e04e3952ce13382ba' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '959ba42caa1d066c33a479e91a6f2df106229fdc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '3b11f931302f3eb62ab6feec28524224bcd04d46' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: 'f11850b3373a39ae1c9a041a11241fb319d3e8c3' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'e68bc7b8e8d41d7e61a8a6ae0abe90266e6258d2', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '72f4f3e446af0ee849765a5656ecf52b67ea5d65' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '53d91b303580e71c9753f9ca39f2f766942d9536', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'b6a408022f5c956dea64b16401d388720b598200' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '5d0f29810dfca09cc64d587f26426174c0099303' }, "Publish"), " to initiate review."), h("li", { key: 'f028c667c3a68d7d5610cf3a3ec9f58ec32a938c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '6f109e25cbe06eae307fe74b6ad380ad7ce8d5d1' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'd0a109def55c9d90e5d24a38ec8b4ba14c428a38' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '45f689ddb0b8357c5bc4f059cc2a7b0f483f0b5e' }, h("b", { key: '694945a0afe35159bcf875c1a66ee5f1de7985b2' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '353ae24eb9b3cb76e4fcdaa1d501c7c46cc9b705' }, "after"), " you have received final approval from Google."))))), h("div", { key: '3cb81dcfbd57dc90451c98ca7efbeb3808ea5211', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '141ac18210e45e40f27f3b3dfb6667eafb43c967', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'acde734010e7a1003b3d80c7afee45eeb5f46ad0', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: '4180e54b697c16cf22477660c73a41768424bd92', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '97f9704c422d3fc366f84698b6c2384c78e8a374', size: "small", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '24596cb9e9c7a0c8f8f44832b3fb705fe93e1d99', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '30c92489c0f0b813711121b8bbbc36278cd351ff', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '36f6e5e42cb62be4614c89c7ab02abc0dec19ad6', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: 'a54cc6a9edce43bcc15f3d710dda9bb6a4cc5f19' }))), h("div", { key: '0cd787f78c2c233257f2348aea9d984c42b9c6ab', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: '45e53d925a2e996dbc2ceb9876f1c2bc9b49c973', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '2c4db4c2267db59f1e157393ad6f9ddc66a6526c' }, h("tr", { key: '9c148fdc254253168272588df7619573bf8891c5', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: 'c5b8b759c04d7cf86bf72fb2c9adf5b17e9a4e02', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: 'a559411977422c3c9ea8641a180295e9dd61a4cf', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: 'd3bd38384d7fc7949447f216ff30113937cdb203', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: 'd96730b9ad1118376eca7a621090971272a0ff1e', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '862d62001407e04f740b9e362ba7ecb9d605ce40', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '2fecdf69f17e476627477ef022433e8c73e880ba', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: 'c613bb4145f7583dedae092d3d77c00dccfebcd4', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'bc5cca4db2e4b60448d54a0afe9c83f573d572fe', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: '67483e70bae72695ea7777de32be4a3edf079e68', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '265d923e096ccb22bae80e3e3eb1b483499f5e64' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: '6f64a8525827085c2bed01a07aeff9157fc33e65' }, h("td", { key: '084db212b86300c32860280818b7cf3195e86d35', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '42c69338c22593bd60473e7568b17056baeca608', class: "mb-0 small" }, "No candidate properties found."))))))))));
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