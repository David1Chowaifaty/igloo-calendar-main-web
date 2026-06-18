'use strict';

var index = require('./index-CJ0kc5p1.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: '1bfd2dceb279b0727a3a05ace703da6ed2e22254' }, index.h("ir-interceptor", { key: 'ef9bcaffcefbc557b4cd4792322bb68fcc16d7bc' }), index.h("ir-toast", { key: '786a2814db82b01b9e8fac78700354c095f5523d' }), index.h("main", { key: '17dbe3c2029af497f70db7f7527b8b7ba4ac0db5', class: "ir-page__container" }, index.h("header", { key: '2edcef35d1fc7d172c09881db057649546884477', class: "tax-page__header" }, index.h("slot", { key: '5c4f80956dd0b4c777a9ef6f52baab9f2d4afb65', name: "heading" }, index.h("div", { key: '160d32db165f7e2be8fe53774c674f8f1aeb0a8a', class: "tax-page__heading" }, index.h("h3", { key: '7e072b3c184923f0f3b044da03c613482d6d1483', class: "page-title" }, this.label), this.description && (index.h("p", { key: '5409654daf6597855c80eb9c04571e5a6d4ee9f6', class: "page__description" }, this.description, index.h("slot", { key: '09f4323a3a4170ac8d1cfd98fbc37008b692b041', name: "page-description" }))))), index.h("slot", { key: 'e000cb52f25d5c5242953a7860af7d7a6b60c980', name: "page-header" })), index.h("div", { key: 'adb10127e931e62d07a81f1ca260ebc0b1573d28', part: "body", class: 'page-body' }, index.h("slot", { key: '653813cf5a540184b6fb30237554ab20bd29a961' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
