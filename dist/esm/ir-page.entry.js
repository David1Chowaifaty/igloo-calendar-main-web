import { r as registerInstance, h, H as Host } from './index-C63jMJYk.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'be4e3821aef7b0fd3f2adbcabab6a54c99355de9' }, h("ir-interceptor", { key: '545b0a87fc0ed6cf3ca46ec6eb0aacc1724d2d5e' }), h("ir-toast", { key: '892df9943f8d41b043e8785b3f70027289e9c77d' }), h("main", { key: '975be6eab1a34345cfc501241f30a84d430ee3df', part: "main", class: "ir-page__container" }, h("header", { key: 'ec9874d66f53baf97739d1fb56070b4980079870', part: "header", class: "tax-page__header" }, h("slot", { key: 'd8c670d2e0b5e5cfe139eec09e7ede539a1f3c24', name: "heading" }, h("div", { key: 'f498cc53d33456c7392bd97c1f64a8d53f70dc0e', class: "tax-page__heading" }, h("h3", { key: 'd1336bf5bc668adb8b81c89ed08e93d6068924fe', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'f12b0aa9e8e033fb2aa80d302f1cb3f46820e8de', part: "description", class: "page__description" }, this.description, h("slot", { key: '2b1dbb5adaa70975658c8065631943746270fdde', name: "page-description" }))))), h("slot", { key: 'e325457ee54fd10ae2237ea9263bc6d8a2edc7ee', name: "page-header" })), h("div", { key: '55187cbfa6a933296907117fbcdfe3557d70e7f4', part: "body", class: 'page-body' }, h("slot", { key: '564434967ace5c47b0e0b7c37dc658aa8ff7c901' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
