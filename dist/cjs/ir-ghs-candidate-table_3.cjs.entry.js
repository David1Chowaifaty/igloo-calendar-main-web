'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const IrGhsCandidateTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggleSelection = index.createEvent(this, "toggleSelection", 7);
        this.toggleAll = index.createEvent(this, "toggleAll", 7);
    }
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isLoading = false;
    searchQuery = '';
    toggleSelection;
    toggleAll;
    render() {
        const countryName = this.countries.find(c => c.id === this.selectedCountryId)?.name || 'All';
        const selectedIds = this.selectedProperties.map(p => p.AC_ID);
        const allVisibleSelected = this.properties.length > 0 && this.properties.every(p => selectedIds.includes(p.AC_ID));
        return (index.h("div", { key: '27403346cfe8885af139553c280fd19cbaf5099f', class: "card mb-0 overflow-hidden shadow-sm border-0 position-relative", style: { flex: '1 1 0', minWidth: '0' } }, index.h("div", { key: 'fb8f7bcc1dde73cd61ecac3b79fd6a707b6e76e1', class: "card-header bg-white py-2 px-3 border-bottom d-flex align-items-center gap-3" }, index.h("h3", { key: 'bedc3b0eccd5e35c9e0f19bb1d49fa7bba9a324f', class: "h6 fw-bold mb-0 text-dark flex-grow-1 text-nowrap" }, "Candidate properties", index.h("span", { key: '3333cf24f6514322750948a625a275a0bf1dd952', class: "text-muted extra-small ms-2 fw-normal" }, "(", countryName, ")")), index.h("div", { key: '6b0b462465798b6f676ee2b820cd22e2d3424245', style: { width: '180px' } }, index.h("ir-input", { key: 'f05a6052d44ec6d2650962d679e74444a42d8f3d', size: "small", placeholder: "Search aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, index.h("wa-icon", { key: '610c6b2d99202f3fa47e655289218f6540a6f979', name: "search", slot: "start", style: { fontSize: '12px' } })))), index.h("div", { key: 'fcb0f319dcc91266a8e09dddb4f316a56e5b700b', class: "card-body p-0 position-relative overflow-auto", style: { maxHeight: '600px', minHeight: '400px' } }, this.isLoading && (index.h("div", { key: 'd4361916a944a48f0b149c09beb24ccb8851b741', class: "loading-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-50 z-index-2" }, index.h("ir-spinner", { key: '26f932fe7dcb1e46228b5b70c7b8d6e38a95990d' }))), index.h("div", { key: '1c14d6fcdf144bde8ff1147a35e126dd216c748a', class: "table-container p-0 m-0 table-responsive bg-white overflow-auto" }, this.isLoading && this.properties.length === 0 ? (index.h("div", { class: "d-flex align-items-center justify-content-center p-5", style: { minHeight: '300px' } }, index.h("ir-spinner", null))) : (index.h("table", { class: "table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, index.h("thead", null, index.h("tr", { class: "table-header bg-light" }, index.h("th", { class: "text-center py-1", style: { width: '30px' } }, this.properties.length > 0 && (index.h("div", { class: "d-flex align-items-center justify-content-center" }, index.h("wa-checkbox", { checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), index.h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '70px' } }, "Country"), index.h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '60px' } }, "Level2"), index.h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '60px' } }, "Username"), index.h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '140px' } }, "Property name"))), index.h("tbody", null, this.properties
            .filter(p => !this.searchQuery || p.aname.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .map(p => ({
            ...p,
            countryName: this.countries.find(c => c.id === p.COUNTRY_ID)?.name || 'Unknown',
        }))
            .sort((a, b) => {
            const countryCompare = a.countryName.localeCompare(b.countryName);
            if (countryCompare !== 0)
                return countryCompare;
            return (a.level2 || '').localeCompare(b.level2 || '');
        })
            .map(p => {
            return (index.h("tr", { class: "ir-table-row border-bottom", style: { cursor: 'pointer' }, onClick: () => {
                    this.toggleSelection.emit(p);
                } }, index.h("td", { class: "text-center py-1" }, index.h("div", { class: "d-flex align-items-center justify-content-center", onClick: (e) => e.stopPropagation() }, index.h("wa-checkbox", { checked: selectedIds.includes(p.AC_ID), onchange: (e) => {
                    e.stopPropagation();
                    this.toggleSelection.emit(p);
                } }))), index.h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.countryName }, p.countryName), index.h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.level2 }, p.level2), index.h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.aname }, p.aname), index.h("td", { class: "px-1 text-dark fw-bold text-start py-1 extra-small text-truncate", title: p.NAME }, p.NAME)));
        }), this.properties.length === 0 && (index.h("tr", null, index.h("td", { colSpan: 5, class: "text-center p-4 text-muted border-0 bg-white" }, index.h("p", { class: "mb-0 small" }, "No candidate properties found.")))))))))));
    }
};

const IrGhsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterApply = index.createEvent(this, "filterApply", 7);
        this.filterReset = index.createEvent(this, "filterReset", 7);
        this.countryChange = index.createEvent(this, "countryChange", 7);
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (index.h("div", { key: '599c2e6f8c7f2101d74d179c72f849c36a008290', class: "card mb-0 p-1 d-flex flex-column shadow-sm border", style: { width: '280px', flexShrink: '0' } }, index.h("div", { key: 'fbbea3fcc7b5564f77d0289fad248a2ad3880508', class: "d-flex align-items-center justify-content-between p-2 border-bottom mb-2" }, index.h("div", { key: '6ba42b40c4b41f718fa82ed7cbb936a1bd331e9f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("svg", { key: '0672539f48eb55966700577ae97b07d71921132f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'f3c64462c5909884e0556b7f0cbbf476e8179b57', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'f14635b011eb94e510c376df37c0ad5c5a7ea52c', class: "m-0 p-0 flex-grow-1 font-weight-bold", style: { fontSize: '13px' } }, "Filters"), index.h("ir-popover", { key: '384a64654dbb6bd73f237c8ddc91d001964d0228', placement: "right", trigger: "click", renderContentAsHtml: true, content: `
                  <div class="p-3 shadow-sm border rounded bg-white text-dark" style="width: 600px; text-align: left; z-index: 9999;">
                    <h6 class="fw-bold border-bottom pb-2 mb-3" style="color: var(--wa-color-brand-fill); font-size: 15px;">Google Hotels Onboarding Workflow Guide</h6>
                    <ul class="ps-3 mb-0" style="list-style-type: disc; font-size: 13px; line-height: 1.8;">
                      <li class="mb-2"><b>Step 1 - Selection:</b> Select candidate properties and click <b>Generate request</b> to download the onboarding XML listing.</li>
                      <li class="mb-2"><b>Step 2 - Upload:</b> Log in to the <b>Google Hotel Center</b> portal and upload the generated XML file to the property feed section.</li>
                      <li class="mb-2"><b>Step 3 - Processing:</b> Wait for Google's automated processing confirmation email (this confirms the XML is valid).</li>
                      <li class="mb-2"><b>Step 4 - Publication:</b> Once the confirmation email is received, return to the GHS portal and click <b>Publish</b> to initiate review.</li>
                      <li class="mb-2"><b>Step 5 - Final Approval:</b> Wait <b>1-2 working days</b> for Google to complete the manual verification and approval process.</li>
                      <li><b>Step 6 - Live Sync:</b> Only enable the "GOOGLE_HOTEL_ENABLED" flag in IR <b>after</b> you have received final approval from Google.</li>
                    </ul>
                  </div>
                ` }, index.h("span", { key: 'da6c0e74263f43dbcc8646debc045baadaa2584a', style: { cursor: 'pointer', display: 'inline-flex' } }, index.h("wa-icon", { key: '64be47087a85b9be22e0698c317534166a0f7917', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } }))))), index.h("div", { key: '70159090ff71c0e408bed15b5649e6ba06f5e7ac', class: "p-2 d-flex flex-column", style: { gap: '1.25rem' } }, index.h("div", { key: '049d840583ad6dda33df61c7c63d4123dc2fafe6', class: "filter-group m-0 p-0 border-0" }, index.h("label", { key: '8f10ceadf363257d0199d16902f5be1b80a7e497', class: "mb-2 d-block small font-weight-bold text-dark" }, "Countries"), index.h("ir-select", { key: 'a169b9f290730c2e66961f25572e6b758edee133', size: "sm", showFirstOption: true, firstOption: "Show all countries", selectedValue: this.selectedCountryId?.toString() || '', data: this.countries.map(c => ({ value: c.id.toString(), text: c.name })), onSelectChange: (e) => {
                this.countryChange.emit(e.detail ? parseInt(e.detail, 10) : null);
            } })), index.h("div", { key: '1c8b930141ec2d38ca61f9872171a638527771bb', class: "d-flex align-items-center justify-content-end pt-3 border-top filter-actions" }, index.h("ir-custom-button", { key: 'f8fdad8814bfa4484d4fbf75ac3f106cc90a01cf', type: "button", size: "small", variant: "neutral", appearance: "filled", style: { display: 'inline-block', marginRight: '1rem' }, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'a9816921c8402fc351b972f65fe85feb1dfdc7fe', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")))));
    }
};

const IrGhsSelectionBucket = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generateRequest = index.createEvent(this, "generateRequest", 7);
        this.removeAll = index.createEvent(this, "removeAll", 7);
        this.removeProperty = index.createEvent(this, "removeProperty", 7);
    }
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (index.h("div", { key: 'af4714e42aaea70126dd9ffce48b959e51703d5f', class: "card mb-0 overflow-hidden shadow-sm border-0 position-relative", style: { flex: '0 0 350px' } }, index.h("div", { key: 'c0bf871b9db201c41babfd0d0c6788967e82f2d8', class: "card-header bg-white py-2 px-3 border-bottom d-flex align-items-center justify-content-between flex-nowrap", style: { gap: '0.5rem' } }, index.h("div", { key: '129d39c5551a19562d0b29b091a6fe2155b62133', class: "d-flex align-items-center flex-nowrap overflow-hidden", style: { gap: '0.5rem' } }, index.h("h3", { key: '107f0ea02a58541346d31193ee141c8c56991934', class: "h6 fw-bold mb-0 text-dark text-nowrap" }, "To be added"), index.h("span", { key: '5c3bd7ab5774b5554d757ef3ce0533639e86da1f', class: "badge bg-primary text-white extra-small", style: { minWidth: '20px' } }, this.selectedProperties.length)), index.h("div", { key: '079ccaa0e4a9b3eac3fac59503f5eeac6be75739', class: "d-flex align-items-center", style: { gap: '0.75rem' } }, index.h("ir-custom-button", { key: '1623b15157e596a317c75327f35ab0527cb270ba', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), index.h("div", { key: 'b859f9bc349c741427c7f036ca2390300f97623f', class: "card-body p-0 position-relative overflow-auto", style: { maxHeight: '600px', minHeight: '400px' } }, index.h("div", { key: '645f2df4cdaf4c2e4faf8f7b26fa7c38c5cbe8b6', class: "table-container p-0 m-0 table-responsive bg-white" }, index.h("table", { key: '1e271a970e5f95679bb16de3debc8c9b7a1aaa63', class: "table align-middle mb-0" }, index.h("thead", { key: '48fd472d44580a4075d1e12f4c0fa614abf9b149' }, index.h("tr", { key: 'fed3e1de4bdaefc16f0ca3f64cd89c63d5a7a368', class: "table-header bg-light" }, index.h("th", { key: '31581c4f97bf1d61de174e65bcb9fcb8534a144f', class: "ps-3 text-start py-2 small fw-bold" }, "Property name"), index.h("th", { key: '011640573648a91572863199d86395a5ab5b3e95', class: "pe-3 text-end py-2 small fw-bold", style: { width: '50px' } }, this.selectedProperties.length > 0 && (index.h("button", { key: 'dc62d26453ced099b76e4fb6cdd80176a5839870', type: "button", class: "btn btn-sm btn-link text-danger p-0 d-inline-flex align-items-center justify-content-end", onClick: () => this.removeAll.emit(), title: "Remove all" }, index.h("svg", { key: '58d8aa3c103dfbeba4b38cf4274f2abdcbe9e606', xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, index.h("polyline", { key: '948faa721620d696e29212fc3e56338b5cb5d346', points: "3 6 5 6 21 6" }), index.h("path", { key: '4fd9e334048fb7db25659fc537c3cda41f844265', d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }))))))), index.h("tbody", { key: '078772fa2ce56d17219e8bff848c98a83648452b' }, this.selectedProperties.map(p => (index.h("tr", { class: "ir-table-row border-bottom" }, index.h("td", { class: "ps-3 text-dark text-start py-2 small font-weight-bold" }, p.NAME, index.h("div", { class: "text-muted extra-small fw-normal" }, p.aname)), index.h("td", { class: "pe-3 text-end py-2" }, index.h("button", { type: "button", class: "btn btn-sm btn-link text-danger p-0 d-inline-flex align-items-center justify-content-end", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, index.h("polyline", { points: "3 6 5 6 21 6" }), index.h("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }))))))), this.selectedProperties.length === 0 && (index.h("tr", { key: '3b9249d9a1bba2b6e9585af645060d1c7c8049a0' }, index.h("td", { key: '0fb4d17cc66ba47e2cb3f23649abfd0ac33eb176', colSpan: 2, class: "text-center p-4 text-muted border-0 bg-white" }, index.h("p", { key: 'f65625c8e156613207d4b5e4dd500a077edaa17a', class: "mb-0 small italic" }, "No properties selected yet."))))))))));
    }
};

exports.ir_ghs_candidate_table = IrGhsCandidateTable;
exports.ir_ghs_filters = IrGhsFilters;
exports.ir_ghs_selection_bucket = IrGhsSelectionBucket;

//# sourceMappingURL=ir-ghs-candidate-table_3.cjs.entry.js.map