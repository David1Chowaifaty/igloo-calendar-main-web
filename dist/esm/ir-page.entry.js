import { r as registerInstance, h, H as Host } from './index-BYqrdgY9.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '384c164c59d6c55dd69aeb80a05ae823c55bd424' }, h("ir-interceptor", { key: 'b11a80c3bac0fbab7a56976df2f1dde063fb6491' }), h("ir-toast", { key: '08cb2ddb9321d9dfd43550d32715ade56e3a8d4b' }), h("main", { key: '9aae5d3da7e0630d360ad95cc67ed01f3d8e65ea', part: "main", class: "ir-page__container" }, h("header", { key: '16b7a618d64fcfb3c23385a81304d3e5f29e8d0c', part: "header", class: "tax-page__header" }, h("slot", { key: '5f44646e3a875bd558ae1a7eeaab3adf91bbf11c', name: "heading" }, h("div", { key: '741e3154694fcbcd9070cb497f52baf65e74c49c', class: "tax-page__heading" }, h("h3", { key: '9ec745328ff117be5192c0c364428888ca849a30', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '8bdefb1081f629e3d9c3c8dfbb169ec729849e17', part: "description", class: "page__description" }, this.description, h("slot", { key: '07baafbff635e243db7f6311a7a59bdd1f5a0ec5', name: "page-description" }))))), h("slot", { key: '48e38e10d466f5fdbebe36d722259d28b91c98a7', name: "page-header" })), h("div", { key: '648e89aeb3e173311afdd344a69bf81187c31549', part: "body", class: 'page-body' }, h("slot", { key: 'c0d74726b0295d230378f5341f2a23a6561402bb' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
