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
        return (h(Host, { key: 'bf56430e33fe5e3c90b795ac176f89d1997804d7' }, h("ir-interceptor", { key: 'd4c0bdbd44d55d638a6d030d512783197c48140e', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '0dcc0b1b3f2ae6876d29c11d6a1b3f56a705d28a' }), h("main", { key: '9263de4a68426a093bb023ec77d99bf4fb26b2a2', part: "main", class: "ir-page__container" }, h("header", { key: '943f9ff99501d674129f3f96a33ccb1c17ff6605', part: "header", class: "tax-page__header" }, h("slot", { key: '0819757d55bb6e020706f7503c7ddf645429ee11', name: "heading" }, h("div", { key: '451ec95bd04ed297519556a6754f6c03f407759b', class: "tax-page__heading" }, h("h3", { key: '346011bb183fec40823cfc50a02b57b5cda4a3b8', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'fb861c1b4df8081790a2f5293bd1fc369be82f9b', part: "description", class: "page__description" }, this.description, h("slot", { key: 'ceecaa36574c67b1e6e3d858ff2c800ab34c0272', name: "page-description" }))))), h("slot", { key: '9aa2a367ea8795a245761e51c46b911ecf47ea2b', name: "page-header" })), h("div", { key: 'c8a3370627acfb4ccb6d8dfd501304c2c3a03dcb', part: "body", class: 'page-body' }, h("slot", { key: 'cd467a427fcc2d90cdcadf87d9eb1db87cee28e0' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
