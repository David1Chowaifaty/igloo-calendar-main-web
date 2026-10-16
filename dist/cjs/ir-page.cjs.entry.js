'use strict';

var index = require('./index-IDeZZwEK.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (index.h(index.Host, { key: '54ae133f7dbe2909c3375a684ae5bfac62b3228c' }, index.h("ir-interceptor", { key: 'c8e0b88aa3d2a01c5b774501b50b8468b25e2cf6', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), index.h("ir-toast", { key: '290c23eaec1d9557b9128874ef9004b85bc4dcef' }), index.h("main", { key: '8cc106a8b14855befd16a7e7a687153c898bca46', part: "main", class: "ir-page__container" }, index.h("header", { key: 'fd18df44bc979520527c9c6edc61e48c6777626e', part: "header", class: "tax-page__header" }, index.h("slot", { key: '459c6c23415a571825ade8bd2b1f56bec8a01782', name: "heading" }, index.h("div", { key: '537fcf748a91f056cece9e9a2767271fe9255095', class: "tax-page__heading" }, index.h("h3", { key: 'dbdf852bfb48f15029943771f4595256bc267e42', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: '22feb41aa67a9e67e2b9be73e146786c82a03e8d', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '7aa2076515f1cd48f5890de68b9fe4bf3f27d318', name: "page-description" }))))), index.h("slot", { key: '6f556781460fec505d2823f69be2fbe736f2aba9', name: "page-header" })), index.h("div", { key: '17828e8a20d79b1b95d7dcdeae489ccfc080b8ac', part: "body", class: 'page-body' }, index.h("slot", { key: '60741aa2cac8ce382e57e0138df9c3f5d5ed9c1c' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
