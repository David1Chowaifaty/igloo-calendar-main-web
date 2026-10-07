import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'a3b0122316256866d6d008eb7c815d168afc6682' }, h("ir-interceptor", { key: 'ff7fccd83af2657f56f740093a9b04381094ddd3' }), h("ir-toast", { key: '64666f2fb64a06410d05ba268c6c5b449ef09458' }), h("main", { key: '44e6fdadba0ca5c7781fb491396fc5958e498d49', part: "main", class: "ir-page__container" }, h("header", { key: '9d88e1ba4773c3743a9c3adf68768d063e32d3df', part: "header", class: "tax-page__header" }, h("slot", { key: '5d4f8f50a562455e3ba22db8a6581eea75258b68', name: "heading" }, h("div", { key: '3e8a0d852c63b1898ef060b600eb9b9050b49495', class: "tax-page__heading" }, h("h3", { key: 'ea80e4a66d73d1425606bd375cd99fac7fa88a02', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'c32c4b63c17fc12d21b4c2df212b558b1a5a7105', part: "description", class: "page__description" }, this.description, h("slot", { key: '552e4983c8e60bb8f80994266439a4c9e487c314', name: "page-description" }))))), h("slot", { key: 'b3660d58fe727bb429e550860c873d29f7c25ff4', name: "page-header" })), h("div", { key: '17edbc761a90b2e34ccaac76c7d0d6fa41df964e', part: "body", class: 'page-body' }, h("slot", { key: '09b4ab237280e78e181df490a704b8018cf14643' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
