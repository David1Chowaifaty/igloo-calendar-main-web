import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '48eec1e8a222579847e5f959e46af68302a154b5' }, h("ir-interceptor", { key: 'caec85be3603c75d49d290f6858dd4893092c8e3' }), h("ir-toast", { key: 'e9a76d59a08cb1d36c84b2ac7ba73320ff487803' }), h("main", { key: '7a527c927b887a756893523ab3ae05fb79d5cd4a', class: "ir-page__container" }, h("header", { key: 'ae9e64f6dc111b5278a7fd853fe5459d42ce5851', class: "tax-page__header" }, h("slot", { key: '5d080ab588c84dea5cf789e378ddb7444797d136', name: "heading" }, h("div", { key: 'cfd58202ed01599e8b678e954b8ec2766f139b0d', class: "tax-page__heading" }, h("h3", { key: '84b6831ac8b1e062e1cb08055b13bdebdf88903d', class: "page-title" }, this.label), this.description && (h("p", { key: '9b6604653039d523e28dc7cbe2a6595c2a2e1357', class: "page__description" }, this.description, h("slot", { key: 'a64c08e97400955eea9276b3146c65feaabf6932', name: "page-description" }))))), h("slot", { key: 'cfab6fd2e5cbfe447db404922b6e8da30ffaaf9d', name: "page-header" })), h("div", { key: '9f35273cabfb6c1a15ea4ab55da83491c9afd3e1', part: "body", class: 'page-body' }, h("slot", { key: 'c4d30ce84a19152d13d6b9d27d0eb1198979008b' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
