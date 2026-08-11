'use strict';

var index = require('./index-CJa_TWt0.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: 'b17ad057dfeae511d022e2dcf71cacc41d8a8546' }, index.h("ir-interceptor", { key: '7cea096f1c9b10091609a5253ae1a05c25058452' }), index.h("ir-toast", { key: 'f452b8a90ea70e615c4bec547b846233bd88029c' }), index.h("main", { key: 'cf84fc28b56fda2822f8c671785112b473bc93e5', part: "main", class: "ir-page__container" }, index.h("header", { key: 'b8afbf9b2a933825a3bff90f280b90535030c4f8', part: "header", class: "tax-page__header" }, index.h("slot", { key: '6cb99a071819554a3163dfca8697cd27d64a4e25', name: "heading" }, index.h("div", { key: '2f2eb650e178f63e18b6983f284662321c5a2b6c', class: "tax-page__heading" }, index.h("h3", { key: '30737ccf5e97f658fbd71bd37172d2ed7c62ef88', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: '6d442c49c1abbab71ea6f4b6adf0d8e260b453b6', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '4799b22a17cedef849afef397eeadf691fe1163b', name: "page-description" }))))), index.h("slot", { key: '8859a2588a7f6cca0bf202b2813c1bbeeb07fa5b', name: "page-header" })), index.h("div", { key: 'd149c0afd361c8cfc1b2fb2fd11dcfe7b34ce83f', part: "body", class: 'page-body' }, index.h("slot", { key: 'c6d078ac0c181c38f60dc129610f784a1b313c9e' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
