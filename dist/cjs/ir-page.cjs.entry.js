'use strict';

var index = require('./index-OzksjAXP.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: 'fe96ea18cc08fa73a0ca8b0dd7542474e6cd428a' }, index.h("ir-interceptor", { key: 'c37234c6de364f6df4df5ba0acefa4a8828095db' }), index.h("ir-toast", { key: 'db3da5359010f54172d3b7c3c19406a64908f78a' }), index.h("main", { key: '435b1071ee9b1c12f17e31aaac841465c407ef04', class: "ir-page__container" }, index.h("header", { key: '9d5d59e381c66d2b28231834182c6f2e4cfae6f6', class: "tax-page__header" }, index.h("slot", { key: 'bb079d9eeb797eb1ded19a8b9915d6de21964b1b', name: "heading" }, index.h("div", { key: '8bed770904de8034bf2aef02da9bc4ffb608dc02', class: "tax-page__heading" }, index.h("h3", { key: '9d37b46623da50690a26f630831bb4a38c91adf5', class: "page-title" }, this.label), this.description && (index.h("p", { key: '441ffb65fcab7efb0d8b59bf143b2e3812ab2012', class: "page__description" }, this.description, index.h("slot", { key: '16cbe510d9741565cb72016c9c94cd01eaf70872', name: "page-description" }))))), index.h("slot", { key: '87e93a17723c992869f5bc9cfbc84963a6393404', name: "page-header" })), index.h("div", { key: '02b9c549ceaf7181312b53e7147b6d19953b970f', part: "body", class: 'page-body' }, index.h("slot", { key: '7c6b77f00176039f21b66a9d608d8a3bb52e90a6' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
