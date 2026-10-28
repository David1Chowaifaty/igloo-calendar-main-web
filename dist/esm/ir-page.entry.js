import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: '527dda192942ce604d9a0a20353230b22f879c04' }, h("ir-interceptor", { key: 'f7f057779e5b482929685810416a4a8b53299c63', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '1567ccf0fc5500a9e1e6bfc676d158c075e85cb6' }), h("main", { key: '889b7b478f895201c12f5f6cc04d1328acf5b596', part: "main", class: "ir-page__container" }, h("header", { key: 'a06c538072e1736f722f3cd386c14d1318459601', part: "header", class: "tax-page__header" }, h("slot", { key: '327fab92c16fc1047b70aa4006b0d94df3c30c5e', name: "heading" }, h("div", { key: '4427f4444400ce96f826b00c62695ee0b274de02', class: "tax-page__heading" }, h("h3", { key: 'e29912ff1d34493c3caf454563f9b4119c4575c0', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '285225caccad4e5d5d7e9726846166730d8e8e1a', part: "description", class: "page__description" }, this.description, h("slot", { key: '6ce23dcbfd1b6296fb9cce1eb9d57e532e994615', name: "page-description" }))))), h("slot", { key: 'd47b9778bf5584e32c86983531a741073660ad11', name: "page-header" })), h("div", { key: '1eeeae853a76ac5f40dcbd6e34b6b528b919e4a7', part: "body", class: 'page-body' }, h("slot", { key: '5e44ce12c8234aa295157ca0519baa50a711736d' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
