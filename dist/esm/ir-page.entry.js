import { r as registerInstance, h, H as Host } from './index-CwWmK1sZ.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '283984db76019ca1e76a2816ccd4533e4ad490cf' }, h("ir-interceptor", { key: '480a146f1168b6c51b8e594de9c89fa2e434c160' }), h("ir-toast", { key: '8bc90bc9114181b8983187477394db96de27ecbc' }), h("main", { key: 'a5916717dfef28e5659038e3d9670f27717e2b40', part: "main", class: "ir-page__container" }, h("header", { key: 'de2fd78db6df4913f5de3a14026c42212df42620', part: "header", class: "tax-page__header" }, h("slot", { key: 'c609d69a5d04699e801882e8d98fd551a6f4a94b', name: "heading" }, h("div", { key: '509c358e55d636069e0ffed7964cd06ac3a3adcd', class: "tax-page__heading" }, h("h3", { key: '373d55a51a13d5f8df4d90578273fbc0bf81b37e', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '5ed89ef8cdd45436be27f3fc2a9d199c2743b76b', part: "description", class: "page__description" }, this.description, h("slot", { key: 'aa3966ef599f799f461923679e85685f189dce1b', name: "page-description" }))))), h("slot", { key: '68778566e1392dcba7ca39413395d331fb9fddcf', name: "page-header" })), h("div", { key: 'd63b0b6afdfc96d02a0a5fa550ff813eb7a63103', part: "body", class: 'page-body' }, h("slot", { key: '7667f3c7e31bf65f3454c02b9259688349cf5a41' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
