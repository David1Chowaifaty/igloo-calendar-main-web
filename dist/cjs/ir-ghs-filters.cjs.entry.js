'use strict';

var index = require('./index-P5Mginch.js');

const irGhsFiltersCss = () => `.sc-ir-ghs-filters-h{display:block}.ir-ghs-filters__container.sc-ir-ghs-filters{width:100%;display:flex;flex-direction:column}.ir-ghs-filters__header.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s)}.ir-ghs-filters__header-content.sc-ir-ghs-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-ghs-filters__title.sc-ir-ghs-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-ghs-filters__body.sc-ir-ghs-filters{display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-filters__group.sc-ir-ghs-filters{margin:0;padding:0;border:0}.ir-ghs-filters__label.sc-ir-ghs-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.small.sc-ir-ghs-filters{font-size:var(--wa-font-size-small)}.font-weight-bold.sc-ir-ghs-filters{font-weight:var(--wa-font-weight-bold)}.text-dark.sc-ir-ghs-filters{color:var(--wa-color-neutral-900)}.ir-ghs-filters__footer.sc-ir-ghs-filters{display:flex;align-items:center;justify-content:space-between;width:100%}.ir-ghs-filters__reset-btn.sc-ir-ghs-filters{margin-inline-end:var(--wa-space-m)}`;

const IrGhsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterApply = index.createEvent(this, "filterApply");
        this.filterReset = index.createEvent(this, "filterReset");
        this.countryChange = index.createEvent(this, "countryChange");
    }
    countries = [];
    selectedCountryId = null;
    isLoading = false;
    filterApply;
    filterReset;
    countryChange;
    render() {
        return (index.h("wa-card", { key: '7531672a763e32a056e569f06f813e524249837e', class: "ir-ghs-filters__container" }, index.h("div", { key: '12ea7bc1122979e1dc48b3de9e6768c883cb12cf', slot: "header", class: "ir-ghs-filters__header" }, index.h("div", { key: '5d51af4e23e81e7292bc97b63237287159f8cb32', class: "ir-ghs-filters__header-content" }, index.h("wa-icon", { key: '310282827116f4033757106d2f91fd34040fa31c', name: "filter", style: { fontSize: '18px' } }), index.h("h4", { key: '17f823b56d0dc997b144476288e553118bf9e759', class: "ir-ghs-filters__title" }, "Filters"))), index.h("div", { key: 'af721478d7ba03a524ab330572def7f284768bb6', class: "ir-ghs-filters__body" }, index.h("div", { key: '9103609c218b42d42895c22e245dac0cbd8fcc31', class: "ir-ghs-filters__group" }, index.h("label", { key: '36cbef33ccbf1aeb8cce622309ad700b7779778b', class: "ir-ghs-filters__label" }, "Countries"), index.h("wa-select", { key: '8df33550182d9ec96706ec37202f5e2ff79c8209', size: "s", value: this.selectedCountryId?.toString() || '', defaultValue: this.selectedCountryId?.toString() || '', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: (e) => {
                const val = e.target.value;
                this.countryChange.emit(val ? parseInt(val, 10) : null);
            } }, index.h("wa-option", { key: 'e1afb7806696a82e270c4c55b1fb137c64eeb59b', value: "" }, "Show all countries"), this.countries.map(c => (index.h("wa-option", { value: c.id.toString() }, c.name)))))), index.h("div", { key: '3e8e5b97d7c1393e4b133efb462200d07f4ef471', slot: "footer", class: "ir-ghs-filters__footer" }, index.h("div", { key: 'd2ff99a28e0d0bdb0630b5370cad27d44eade727', class: "d-flex align-items-center gap-2" }, index.h("ir-custom-button", { key: '9d96073da030d28161867a9e9d483fd95bed2b51', type: "button", size: "s", variant: "neutral", appearance: "filled", class: "ir-ghs-filters__reset-btn", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, disabled: this.isLoading }, "Reset"), index.h("ir-custom-button", { key: 'c5a43518efcdab0c7790c55112ee710c7bd68980', type: "button", size: "s", variant: "brand", appearance: "accent", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, "Apply")), index.h("span", { key: 'ca79cf53bab0693061aea31021fea0432a7e21f6', id: "ghs-help-icon", style: { cursor: 'pointer', display: 'inline-flex', marginInlineStart: 'auto' } }, index.h("wa-icon", { key: '7c6f800b707537ef4b6f52d45c225e40d89d6f69', name: "circle-info", style: { fontSize: '18px', color: 'var(--wa-color-brand-fill)' } })), index.h("wa-popover", { key: '36261282c3eae17689c4ec70981b23c60d3dd7d7', for: "ghs-help-icon", placement: "right" }, index.h("div", { key: 'a71d49105bc1af8263087897a73f34f07ddad20e', style: {
                padding: 'var(--wa-space-m)',
                background: 'var(--wa-color-neutral-0)',
                border: '1px solid var(--wa-color-neutral-200)',
                borderRadius: 'var(--wa-border-radius-m)',
                boxShadow: 'var(--wa-shadow-m)',
                maxWidth: '500px',
                width: 'auto',
                textAlign: 'start',
                zIndex: '9999',
            } }, index.h("h6", { key: 'd5f23cdc23dbec36389d7453df3762191a12a650', style: {
                color: 'var(--wa-color-brand-fill)',
                fontSize: '15px',
                fontWeight: 'var(--wa-font-weight-bold)',
                borderBottom: '1px solid var(--wa-color-neutral-200)',
                paddingBottom: 'var(--wa-space-xs)',
                marginBottom: 'var(--wa-space-m)',
                marginTop: '0',
            } }, "Google Hotels Onboarding Workflow Guide"), index.h("ul", { key: '3854343906387b00d198e1a2ff25371e6b25627e', style: { listStyleType: 'disc', fontSize: '13px', lineHeight: '1.6', paddingInlineStart: 'var(--wa-space-l)', marginBottom: '0' } }, index.h("li", { key: 'd7a228c5983c0558b599d4ded9f6a94057ff0ee4', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'd4ac1a7eec24233b3e0a837fc703d37001d5efd0' }, "Step 1 - Selection:"), " Select candidate properties and click ", index.h("b", { key: 'c28ad655cec6273ed380d8cd6ec84e5a897fc626' }, "Generate request"), " to download the onboarding XML listing."), index.h("li", { key: 'f7a53d5287af122f547cdf71cfce475cc1508a2b', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '82e421dc4943455633e4842eb33eb55c30808ab6' }, "Step 2 - Upload:"), " Log in to the ", index.h("b", { key: 'fea69fe42220df59148cbf36a2ed29ba9e3bda27' }, "Google Hotel Center"), " portal and upload the generated XML file to the property feed section."), index.h("li", { key: '5f2a16b932c8e34925de3bc1ac95b7e8e1eb487d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: '37585cd03b05cd9885c344431be4fc70c497a854' }, "Step 3 - Processing:"), " Wait for Google's automated processing confirmation email (this confirms the XML is valid)."), index.h("li", { key: 'a64e2069878dc98edf44b9cecf661a0677aca61d', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'b66354c6c78827c121f5689713b7be4870afef9a' }, "Step 4 - Publication:"), " Once the confirmation email is received, return to the GHS portal and click ", index.h("b", { key: 'a531fe5f512059a61f75a21443a2a60c7a35020b' }, "Publish"), " to initiate review."), index.h("li", { key: 'cc2a7789b2cbf49b83af20496e179952b8ff5746', style: { marginBottom: 'var(--wa-space-s)' } }, index.h("b", { key: 'aa5b2d4535828a95c42eda461319ef9d6eafe1a0' }, "Step 5 - Final Approval:"), " Wait ", index.h("b", { key: '3336c50106d138154615e1bd86519f82e2b33e2a' }, "1-2 working days"), " for Google to complete the manual verification and approval process."), index.h("li", { key: '2e39a3f82bd40a0dd1dd646c5fef84688a557d20' }, index.h("b", { key: '1104ebd6e0a500b8cc2d4968d7c4d8dd47a7bdc9' }, "Step 6 - Live Sync:"), " Only enable the \"GOOGLE_HOTEL_ENABLED\" flag in IR ", index.h("b", { key: 'dffef8f2b291d7bcf68b6cd75714922125ea2a6d' }, "after"), " you have received final approval from Google.")))))));
    }
};
IrGhsFilters.style = irGhsFiltersCss();

exports.ir_ghs_filters = IrGhsFilters;
