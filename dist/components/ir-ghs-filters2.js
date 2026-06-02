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
        return (h("wa-card", { key: 'f5420602dd732a3f09baae240ec4d203d2cf07cc', class: "ir-ghs-filters__container" }, h("div", { key: '989993c3f2ec0290f2be5f47c6e7ca8d314aa14c', slot: "header", class: "ir-ghs-filters__header" }, h("div", { key: '30ae139ce6ee8867a13029a62bcc588058db9322', class: "ir-ghs-filters__header-content" }, h("wa-icon", { key: '6dc3adf8418aef62d06157eee9ad66c0a9fd8924', name: "filter", style: { fontSize: '18px' } }), h("h4", { key: 'b6cbba159e23c94f35c26feb90ad904c06d1597c', class: "ir-ghs-filters__title" }, "Filters"))), h("div", { key: '0856af6a3d33df0047dabe5d83fef2f18fd0a63d', class: "ir-ghs-filters__body" }, h("div", { key: '05ce4523313c14ce77029eb01ba76ab7db20df58', class: "ir-ghs-filters__group" }, h("label", { key: '05f34aad0f879d1f8a30b1ec2597bfc9181fe51d', class: "ir-ghs-filters__label" }, "Countries"), h("wa-select", { key: 'c0d1350ac6ea4ea9626090967db8adf66752da79', size: "small", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, h("wa-option", { key: '15ae06a8e5a20ee3ded7d30ec66a46e1234addbe', value: "" }, "Show all countries"), this.countries.map(c => (h("wa-option", { value: c.id.toString() }, c.name)))))), h("div", { key: '3634ac8ece9e3aeb9d37b7a6ea53b90c72294b15', slot: "footer", class: "ir-ghs-filters__footer" }, h("div", { key: '810908de41eb8b450f73d96acf744424b790f612', class: "d-flex align-items-center gap-2" }, h("ir-custom-button", { key: '1c8971ec623f5cfb249b0e67058d27eb521920fb', type: "button", size: "small", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), h("ir-custom-button", { key: '0674a01fcfcc124145ee5191289a00b9698d671e', type: "button", size: "small", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), h("span", { key: '3b192eaf2484a78ad7e32fe71392c41859ed0df6', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginLeft: 'auto' } }, h("wa-icon", { key: 'd443ca9d587f52769172751adf10a5febf0e85d4', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), h("wa-popover", { key: 'a37815b15d668c90cfe2041ceada90e17451be67', for: "ghs-help-icon", placement: "right" }, h("div", { key: '79773600d844adb21872b2ca025466f36c8d112d', style: { padding: 'var(--wa-space-m)', background: 'var(--wa-color-neutral-0)', border: '1px solid var(--wa-color-neutral-200)', borderRadius: 'var(--wa-border-radius-m)', boxShadow: 'var(--wa-shadow-m)', maxWidth: '500px', width: 'auto', textAlign: 'left', zIndex: '9999' } }, h("h6", { key: 'd3e67924c132279816ea9b915481e902abd9502d', style: { color: 'var(--wa-color-brand-fill)', fontSize: '15px', fontWeight: 'var(--wa-font-weight-bold)', borderBottom: '1px solid var(--wa-color-neutral-200)', paddingBottom: 'var(--wa-space-xs)', marginBottom: 'var(--wa-space-m)', marginTop: '0' } }, "Google Hotels Onboarding Workflow Guide"), h("ul", { key: '3fba32308fc232785538779fc9a108c5e0495a41', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, h("li", { key: '798be0882836aedb3343c31969289fc08ef7e3ee', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '9164fed38fcd83e4246a1c9f6c000c8d9447f9b5' }, "Step 1 - Selection:"), " Select candidate properties and click ", h("b", { key: '7d344ccaf14f6af5e02592ef49f55f480c351669' }, "Generate request"), " to download the onboarding XML listing."), h("li", { key: '6fce7f7e44060f2bd1b8ce92bd678496390321b9', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '5dc7ae26854d3c97b76e36f2a6ac866408cf20f3' }, "Step 2 - Upload:"), " Log in to the ", h("b", { key: '047531b1bceb80e0335d9905f08e4defa51be479' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), h("li", { key: 'fb858dca13770be68dbd948ade52903f557bc488', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '0af76169c8a75e9a2e9219bcc9d523819d02b798' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), h("li", { key: 'b17d2ff7a1777b5895ec4179b9df23ada879f2fc', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: '9494d1e526778ef3ecf7db7b5a08fb55835d4c93' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", h("b", { key: 'c5d1445dbe1f3d7415abb30bac8f1aa19401ea0e' }, "Publish"), " to initiate review."), h("li", { key: '20e77a8dea4805d56332a7ae40d94e38efbbcd61', style: { marginBottom: 'var(--wa-space-s)' } }, h("b", { key: 'd21ac8106c1da9ee854fb72a10ffecfd09b7e9c1' }, "Step 5 - Final Approval:"), " Wait ", h("b", { key: '84a67ec01a4a6c75b6550e2d3613fd50eafa6629' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), h("li", { key: '68686bb524b42d3ae8df7e5eb20ffd3c4232316f' }, h("b", { key: 'ef4fa8383e520cea34758fa8837c8841af7e8762' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", h("b", { key: '25938e3c63c56976aad8068c0dd45da32317e24e' }, "after"), " you have received final approval from Google.")))))));
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