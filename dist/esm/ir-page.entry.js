import { r as registerInstance, h, H as Host } from './index-Nexq2OjX.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'f793c4edb7ab526ac33468b3793b6f44df81f4ea' }, h("ir-interceptor", { key: '71733dc55ff2dcaf2d7faf28f06e609ba26ef5b8' }), h("ir-toast", { key: '98999c1656927e896a01e353a1d4406e13c6257b' }), h("main", { key: '517572141c9cb6a9ddc8254f8cf5e366dde38021', class: "ir-page__container" }, h("header", { key: 'd9b867978e94cd5122d2f74702ed1d258922c6ce', class: "tax-page__header" }, h("slot", { key: 'ef668ba411b5d391e0ea646f0c4fb694ce8a2c3d', name: "heading" }, h("div", { key: '48292f2e8a22f51d9a1a975e6ff3b8482853d90f', class: "tax-page__heading" }, h("h3", { key: '540e812f7f7468af0a60baf3ff8662bcf64628e4', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'd470460b58857a8ce3324d2bfec849959397a404', part: "description", class: "page__description" }, this.description, h("slot", { key: '5494fdec769725e67d41ea8b23b654e06071e4ea', name: "page-description" }))))), h("slot", { key: '72b27e9fe3e78b64b2f2e7608c89a91ecba8e5e4', name: "page-header" })), h("div", { key: '3d55a96ea413868733ffdbec22446dea876d9c6a', part: "body", class: 'page-body' }, h("slot", { key: '3729eb390dfdb8253be32dd737d1e374d85a4f19' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
