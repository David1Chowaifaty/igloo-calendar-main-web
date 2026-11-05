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
        return (h(Host, { key: '2192382cd6d462d6713cbf02a41ff8218f594ca1' }, h("ir-interceptor", { key: 'cd810cf5f6ff7c25117cd4b2e455b570fdb3abea', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: 'b1325f12641748eae044198e8aeed0b9b88c4711' }), h("main", { key: '2a319063fac3c4c596dafbaf0f011a043ad8f5c6', part: "main", class: "ir-page__container" }, h("header", { key: '0e57e4bb9097a532340a68b3090bf28a00d999bb', part: "header", class: "tax-page__header" }, h("slot", { key: '43058e33bac55435642942d46869bb9f20a74c49', name: "heading" }, h("div", { key: '86e9ad99a3abc96497e7e07e8f13b9c0b1ac0480', class: "tax-page__heading" }, h("h3", { key: '86274455d2d0ef8d1095e1602ca1c2f0c108ba4d', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '0be0f34c51722772e93c1b2751e4094b9205d930', part: "description", class: "page__description" }, this.description, h("slot", { key: 'baecb060a52da03a014451a8a7be2fc2ba6d3af3', name: "page-description" }))))), h("slot", { key: 'dd52628c8f3b3aac5ffbe7ac4b15d3e42c35e0e5', name: "page-header" })), h("div", { key: '22c452212eeb78dd82ec1317b3a4b4ea51d9e865', part: "body", class: 'page-body' }, h("slot", { key: 'd47a673a24a97fb1465298790ec8a27a0b14d517' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
