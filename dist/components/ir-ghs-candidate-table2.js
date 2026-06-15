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
        return (h("wa-card", { key: '7958aa2a5b5f1f08a84841a1808821fd25df6e9d', class: "ir-ghs-candidate-table__container" }, h("div", { key: '7f3c3f2e5cdd3e8cd091101e7d99260ad3943533', slot: "header", class: "ir-ghs-candidate-table__header" }, h("div", { key: 'b93075a31376fed0b7ae62f7c1c98a24affb8991', class: "d-flex align-items-center gap-2" }, h("h3", { key: '05b3865b95888f66ca1a3217e47a4a141e322dee', class: "ir-ghs-candidate-table__title" }, "Candidate properties"), h("span", { key: 'fcb77f000d7ae9d6cc19bb4858d8b1aadc417f7b', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: 'a88881d45c15748f3ff7e9d45ff6844b7f4b8d90', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '914cc2a4901f12ed017e5e1f0e158ea90482b4ff', for: "ghs-help-icon", placement: "right" }, h("div", { key: '1d3c97b2480f6cdf7c5f0b63d2cb68d97a8f745a', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: '0c1bb87486f978de84d4312167bfbba78d938945', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '5e57627fa2b6f9c1dbaecd181715df60a41d159b', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: 'bd8c7f8fb8d4e533b7fcb7c0279c8d17d507f6a4', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '3ec1dc7f5b8399184670cd5bfcb9f0c678e4ed85' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '31bc07132acf00437716960255372ea7b1db99d7' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '37e07fd918cb65314959085bc96b66b15591c01c', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '478efeb77f07938aef661b2c1ac20b52f92798c1' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '27d8911c4d8b7fc6b5e028e39df2b833afad7734' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: '5dbb1ca8619ac809e34a0626a141df56c3304a49', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '4af3f2e5dc43264b0127368475f98a04d7aedfe5' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '43fd1c911ab3097ff4ac24e301999ad623cf923f', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '1e3b19e6e3269324648c70d35cab2442f36a0358' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'a8b8bcdbf4490fa412ce9d6ebc9dffbd0c60113d' }, "Publish"), " to initiate review."), h("li", { key: '25eed23b0ddcd8369cd392e00d0eb18ca230631a', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '5e2a08c5fee4bbbdd1b9bccfd4dd0f9b539ed275' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: 'c59b82a95fb71889ef744894386c929cbed4ffa1' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'b7a1978be974c1236d2f83baf9d16eac0cabba7e' }, h("b", { key: 'd9faeea1726d5d3478c7d5a4c6e2695893a70d4b' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: 'a2626af3e35afeb2db467aa88c54efebde02a52b' }, "after"), " you have received final approval from Google."))))), h("div", { key: '8a3b0fbe4ba560d23ab189cce3a3f4a8ad1dc2f2', class: "ir-ghs-candidate-table__controls" }, h("wa-select", { key: '7f85360a79a6d7b35783e98841d6bc14affda8f4', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', class: "ir-ghs-candidate-table__country-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '968dc0db803d37b1b4fa025acd3d43decc64dd72', value: "" }, "All countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))), h("div", { key: '184b4c6e2f3e9ac9259b190f988780e0f290b463', class: "ir-ghs-candidate-table__search-wrapper" }, h("ir-input", { key: '73978d05a2a01bb79b7f8f1632fd62cf9535afa8', size: "small", placeholder: "Search by name or aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '100515afd782c38a3eb714929d16865e7a7e48c2', name: "search", slot: "start", style: { fontSize: '12px' } }))))), h("div", { key: '61e2cb2645c292a178691841b72e9ea33e3307f6', class: "ir-ghs-candidate-table__body" }, this.isLoading && (h("div", { key: '365bd6fbc6154fb2cbce39e7074b29e5b0d4df94', class: "ir-ghs-candidate-table__loading-overlay" }, h("ir-spinner", { key: '3b1c125f19bd0a447ae58ae0f50f39480c966412' }))), h("div", { key: 'e078104869642c78fc84a056d2243535249040ed', class: "ir-ghs-candidate-table__table-wrapper table--container" }, h("table", { key: 'b3484715706317953a401430ec1fe2a7cc9f16bf', class: "ir-ghs-candidate-table__table table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", { key: '4777062162bdaeff360a92de06388f0b76a1e1fe' }, h("tr", { key: '3049081305bd10fbb95890a6d5e4ac45640566d0', class: "ir-ghs-candidate-table__header-row table-header" }, h("th", { key: '79afe516afb93b36e65edba1dc34d6e26adf6e32', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { key: 'd7f2bc42226efd6cfa6f35923be94543c0c33a99', class: "ir-ghs-candidate-table__checkbox-wrapper" }, h("wa-checkbox", { key: '5533bc151230e18321dc1023405eb21d12c6a0dc', checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { key: '25a2c4efb46353bcc92bad4fa05f2fcf168c8468', class: "ir-ghs-candidate-table__header-cell", style: { width: '70px' } }, "Country"), h("th", { key: '9710ba52c01b99843544083f58f2c80854f79106', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Level2"), h("th", { key: '5c5c0e42f5136077bbe3a464e6271835eb079955', class: "ir-ghs-candidate-table__header-cell", style: { width: '60px' } }, "Username"), h("th", { key: 'f376ceaf831750ee5d61938a816f745f216a3899', class: "ir-ghs-candidate-table__header-cell", style: { width: '140px' } }, "Property name"), h("th", { key: 'c280d45686cdd7cff18b5da064d1d89ec7e9b4f7', class: "ir-ghs-candidate-table__header-cell ir-ghs-candidate-table__header-cell--center", style: { width: '65px' } }, h("div", { key: 'f8a400eb61865541e1deb75b81e9eba475076abf', class: "ir-ghs-candidate-table__header-center-wrapper" }, "Activate?")))), h("tbody", { key: '6b05e7f31862c0613d3e82b9dda03fc79180d26c' }, this.properties
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
        }), !this.isLoading && this.properties.length === 0 && (h("tr", { key: 'ff3b7db1eaa3eace362a1ed55aaa632f4db0e763' }, h("td", { key: 'c19f77b6670cf4a659a45eecd8dc990797c15b21', colSpan: 6, class: "ir-ghs-candidate-table__empty-state border-0 bg-white" }, h("p", { key: '69f570384a23415178a14eb08734eadc6be9cfed', class: "mb-0 small" }, "No candidate properties found."))))))))));
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