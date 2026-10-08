'use strict';

var index = require('./index-CQkpA5n3.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: '96ba8ec93642427b0cffb89b93354e185f2919ed' }, index.h("ir-interceptor", { key: '5c6dcf8b4d05f71e9783a615566cadd0c9ed9c02' }), index.h("ir-toast", { key: '80ad10630d26782f45f037148fb6c2b97df76c47' }), index.h("main", { key: 'a6bfd55a1a7b164b73fe1592479cd3bbd800dd7a', part: "main", class: "ir-page__container" }, index.h("header", { key: 'b7f316c3ae2ee9cc098145e4f963f283ec091842', part: "header", class: "tax-page__header" }, index.h("slot", { key: '90f9a2962779ecb569ca5d019e65fd61e4d937e4', name: "heading" }, index.h("div", { key: '21900ed8c331fe3398029c3cce83bccd7019edd0', class: "tax-page__heading" }, index.h("h3", { key: '4a95199041ab0adee0a286534f24dfcc337ba11e', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: 'a9bee0df5f97401d04f7bdf747f0fd6194c03d6c', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '5dea753e89922671c2c84835f14b5ca4f979f73f', name: "page-description" }))))), index.h("slot", { key: '0281dbd004021753c1094ef9417bf12fcd49fc36', name: "page-header" })), index.h("div", { key: '342695c048e9daf1fcde3f89383ae8a232c4c3f0', part: "body", class: 'page-body' }, index.h("slot", { key: '596845479e809c68023b64d248e9ec9d7d6ed82f' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
