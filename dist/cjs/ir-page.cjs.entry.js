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
        return (index.h(index.Host, { key: '8f65f0891d9fef8f2242dcff53c5a16239c0db7a' }, index.h("ir-interceptor", { key: '68d03a31b0d73f86af41668dda2e7fb76c17a253' }), index.h("ir-toast", { key: '9bacdecf9b025eca3f2b64f5dc783e07a32833c7' }), index.h("main", { key: 'e08f372add6dcf7bda307a11152532883267ff55', class: "ir-page__container" }, index.h("header", { key: 'c4e008f69317561c84d84933c91926d1a622e976', class: "tax-page__header" }, index.h("slot", { key: 'c91b7b6ee629e3dbe20cd0172aadee5c7b5c0102', name: "heading" }, index.h("div", { key: 'f7eb6d2be8e43d3240fc211c9d0f0adb11a0772b', class: "tax-page__heading" }, index.h("h3", { key: 'bc74a5ec23d826d04fbe169fede8f82b1ab017bc', class: "page-title" }, this.label), this.description && (index.h("p", { key: 'c496c8b2ade2d4d13df644d7127c316fba936c23', class: "page__description" }, this.description, index.h("slot", { key: 'df3a388b2e0cbf2aca6924f16b6ad698e8be0341', name: "page-description" }))))), index.h("slot", { key: 'd36f7c3384b3c3881550d5bdc6b94e08ffd74153', name: "page-header" })), index.h("div", { key: '85118da6c01ff34a1ac9f25e604cec007cd3ce7a', part: "body", class: 'page-body' }, index.h("slot", { key: '09ffe859ad86232c0d671e2772375ab60ca0e79d' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
