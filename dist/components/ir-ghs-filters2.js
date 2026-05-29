import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-popover2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const IrGhsFilters = /*@__PURE__*/ proxyCustomElement(class IrGhsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filterApply = createEvent(this, "filterApply", 7);
        this.filterReset = createEvent(this, "filterReset", 7);
        this.countryChange = createEvent(this, "countryChange", 7);
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (h("div", { key: '599c2e6f8c7f2101d74d179c72f849c36a008290', class: "card mb-0 p-1 d-flex flex-column shadow-sm border", style: { width: '280px', flexShrink: '0' } }, h("div", { key: 'fbbea3fcc7b5564f77d0289fad248a2ad3880508', class: "d-flex align-items-center justify-content-between p-2 border-bottom mb-2" }, h("div", { key: '6ba42b40c4b41f718fa82ed7cbb936a1bd331e9f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0672539f48eb55966700577ae97b07d71921132f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f3c64462c5909884e0556b7f0cbbf476e8179b57', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f14635b011eb94e510c376df37c0ad5c5a7ea52c', class: "m-0 p-0 flex-grow-1 font-weight-bold", style: { fontSize: '13px' } }, "Filters"), h("ir-popover", { key: '384a64654dbb6bd73f237c8ddc91d001964d0228', placement: "right", trigger: "click", renderContentAsHtml: true, content: `
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
                ` }, h("span", { key: 'da6c0e74263f43dbcc8646debc045baadaa2584a', style: { cursor: 'pointer', display: 'inline-flex' } }, h("wa-icon", { key: '64be47087a85b9be22e0698c317534166a0f7917', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } }))))), h("div", { key: '70159090ff71c0e408bed15b5649e6ba06f5e7ac', class: "p-2 d-flex flex-column", style: { gap: '1.25rem' } }, h("div", { key: '049d840583ad6dda33df61c7c63d4123dc2fafe6', class: "filter-group m-0 p-0 border-0" }, h("label", { key: '8f10ceadf363257d0199d16902f5be1b80a7e497', class: "mb-2 d-block small font-weight-bold text-dark" }, "Countries"), h("ir-select", { key: 'a169b9f290730c2e66961f25572e6b758edee133', size: "sm", showFirstOption: true, firstOption: "Show all countries", selectedValue: this.selectedCountryId?.toString() || '', data: this.countries.map(c => ({ value: c.id.toString(), text: c.name })), onSelectChange: (e) => {
                this.countryChange.emit(e.detail ? parseInt(e.detail, 10) : null);
            } })), h("div", { key: '1c8b930141ec2d38ca61f9872171a638527771bb', class: "d-flex align-items-center justify-content-end pt-3 border-top filter-actions" }, h("ir-custom-button", { key: 'f8fdad8814bfa4484d4fbf75ac3f106cc90a01cf', type: "button", size: "small", variant: "neutral", appearance: "filled", style: { display: 'inline-block', marginRight: '1rem' }, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'a9816921c8402fc351b972f65fe85feb1dfdc7fe', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")))));
    }
}, [2, "ir-ghs-filters", {
        "countries": [16],
        "selectedCountryId": [2, "selected-country-id"],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-filters", "ir-custom-button", "ir-popover", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsFilters);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGhsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-ghs-filters2.js.map