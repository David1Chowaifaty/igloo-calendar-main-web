import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '86875128a5aee518c3c976152f5685dd8e45ca72' }, h("ir-interceptor", { key: 'cd8abc6ecab38098cb03dd325ba7e2132b41638c' }), h("ir-toast", { key: '3f15da99e43067e077d8ac3288c3040408e951e0' }), h("main", { key: '6aa34a31f714a756abec5d6288141356f6a91ec8', part: "main", class: "ir-page__container" }, h("header", { key: '6da715293405b1b3f9ad618e3aad103d15ea3f15', part: "header", class: "tax-page__header" }, h("slot", { key: '8e9ac6a74be61ca1b79d7365cc09e3eccfcf1abe', name: "heading" }, h("div", { key: '43b9d11e8214aea479aa15b12ef5c1c050026a4a', class: "tax-page__heading" }, h("h3", { key: '1e1ccb28e1174c5483179f89f36a6a93904dcbb2', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'ee36e00bb9620b7ca1d988b155236a3124f0d0aa', part: "description", class: "page__description" }, this.description, h("slot", { key: '8e433bd2699371ee7ed7525ab8efb54204a1214a', name: "page-description" }))))), h("slot", { key: '412cf64a15672f8dd9177135042c89e9b115e097', name: "page-header" })), h("div", { key: '6d937fddcb045059080df57f4bdf869d2d2694d8', part: "body", class: 'page-body' }, h("slot", { key: '38ffc1feda9d513d9f2fb5675a9aebc02bd13f35' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
