import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '32fe22671f45d44aeffd07882aa416fb27ea25d1' }, h("ir-interceptor", { key: '903ecaedfbde1b4a00f5d755a5d8f1fbb5003039' }), h("ir-toast", { key: '5f094c7b9744e281671c4af2c238dc8c9b89c9e8' }), h("main", { key: 'cd9fa30d5d725a75eee83b78c042a4c06f0c5752', part: "main", class: "ir-page__container" }, h("header", { key: '725e7de37935bcdfdbb7a678dec615168b2d0c0f', part: "header", class: "tax-page__header" }, h("slot", { key: '73bae77456e0a5d832cf675bfd1470161899322f', name: "heading" }, h("div", { key: '00becdb305fd920f97470b6da21f3b9b36dd4718', class: "tax-page__heading" }, h("h3", { key: '53f60f2192d4b7c5adc35479bcf3a5d5d07d151e', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '95fe6a3e02af76dd209e1bca6b8dc61f97357b36', part: "description", class: "page__description" }, this.description, h("slot", { key: '33c5a77de16b5216275daf4b8971ee1ee318ed8a', name: "page-description" }))))), h("slot", { key: '014f1f203336f73006d903bfa5a1ad7505e8e38f', name: "page-header" })), h("div", { key: 'a664a2cdcb2aba957f439b12d4536907edc706b2', part: "body", class: 'page-body' }, h("slot", { key: '0cdf5e3d4856c473b79acb9be23de183f0fbf034' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
