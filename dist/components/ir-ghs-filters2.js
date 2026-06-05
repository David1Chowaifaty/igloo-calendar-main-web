import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irGhsFiltersCss = ".sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:280px;flex-shrink:0;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}";
const IrGhsFiltersStyle0 = irGhsFiltersCss;

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
        return (h("wa-card", { key: '78cdedd0701a798edd191cea32109422f5f105b0', class: "ir-ghs-filters__container" }, h("div", { key: '0eafc971d78c7760e87e1f0a8702718dd47d2d93', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: 'a4c3195d3280212976091481024a92f8ca1cc5d6', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '49064ffdb8a5b0365c3cb60a4a89baa832dcb624', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'e91dca40d4b1c64f990d1d907e3d155a5e1cb061', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: 'b7a68930e59ec71e8d6be3d24e8317d32ac83030', class: "ir-ghs-filters__body" }, h("div", { key: '0e5847591272e19eb4f4d9e70e0d87396159afbf', class: "ir-ghs-filters__group" }, h("label", { key: 'ae6196717afcf22b2766ac1c6d598eda73aed45e', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: '46afe50be1c6d24fd643bb61f10321d3007b2ed4', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: 'b054d18deb0c16119009e30f34683d74ddbb8e4a', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '57a397998b48ab2deff8e5c9629790fab7398c3b', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: 'ad43c75a748f9dfe0a89a4b0c8d85f9014ad9b22', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '06b0df40c36dc094be04f59803608cba05d62a42', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: 'a15ef88ad16554292384f5108f112022f9e036d8', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '239cad5b921d4a9c028e10f0f47720a1ca29a3cf', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: '7bbc2abfaf77a0afd04cedfaa27b86a020ce1456', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: '6f03a4a1152d68085e008c862983fbea0c35edcc', for: "ghs-help-icon", placement: "right" }, h("div", { key: '0d9a1e7c6be13959bea7864ce0b7b9a111866842', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'bb06872b71c9b352e1387b7d201b3d0fe98f590d', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '3939692c268e22cff2b8e94645c5c0e86e58ba02', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '7e780c8984da41fce939acaed525df7a8a3aa227', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'd036f053f4f2363c2bdc1770e14458bc07c7fddd' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '6160b66494f96808426b05b9f65574358d3d49fd' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: 'c77c497ac47f77fb1c96eb560d6308fb76b38e7a', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'ea0b4fd1237cb1a5dbcf4562aaaf26162440baf7' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '1366f8cdc1ed366eafdd93812c24897660e8c7c7' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'ff742faae5f69fcffd2dfad8ad27760aaec7963d', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '2fcbbf7fc446c22cfe99dd512ceec5b638fefd65' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: '2a73f089d8f2ec80568307cc3e6fd44d63934c77', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '38fc358a9d10905ce1e13f9425267e82b71525da' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: '1fdb64a22f31a441c57884748617aa5fa8e30046' }, "Publish"), " to initiate review."), h("li", { key: 'a7c42c1f5ed9b70b203d29321a90f96fba11c4f9', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '66f07e625d4122cdb0fa023331769de423918ff5' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '39a7f55a5b0cf0001f1f52a05b85963be9e7b4d3' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: 'b7c52aad8e0d876986cf48d67fa5a87b0846c7ba' }, h("b", { key: '60926e5d2dec1f28b4f5d018dbcb57ccaa717e9a' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '331b7fa54604160392a9ae9911298dcf0406dc1a' }, "after"), " you have received final approval from Google.")))))));
    }
    static get style() { return IrGhsFiltersStyle0; }
}, [2, "ir-ghs-filters", {
        "countries": [16],
        "selectedCountryId": [2, "selected-country-id"],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-filters", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsFilters);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGhsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-ghs-filters2.js.map