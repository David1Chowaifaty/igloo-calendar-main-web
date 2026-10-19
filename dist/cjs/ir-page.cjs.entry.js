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
        return (index.h(index.Host, { key: 'e96f385b08e267c7ab83ccc1cc52bb2dbbee4dae' }, index.h("ir-interceptor", { key: '958c10c764189e35e1b007aa806f448b6ed7ebe8', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), index.h("ir-toast", { key: 'cfc017e8d9338e4bababcbcf3da7414c6045ed01' }), index.h("main", { key: '1b5d8363b5a374184cc253fc19d989bf1e1ff2cb', part: "main", class: "ir-page__container" }, index.h("header", { key: 'd82f45e8db1535eee5c9c8a000e1009388ae5b8c', part: "header", class: "tax-page__header" }, index.h("slot", { key: '85823c2e55c05ba1c32babc85648f46d061c1cbb', name: "heading" }, index.h("div", { key: 'b9c792871be95bddc007e82a65e91bc4e362a36d', class: "tax-page__heading" }, index.h("h3", { key: '055aed5901b155704e00ee542bac0dc2af019cd0', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: 'd363281b25830f6d5a5997af1e87e61778195dbf', part: "description", class: "page__description" }, this.description, index.h("slot", { key: 'bba1320dbc2f34f0b3548cff7c6de1a7878749eb', name: "page-description" }))))), index.h("slot", { key: '5c2c1d2c14bca7370a3f404627c1b95e2d7e5bd1', name: "page-header" })), index.h("div", { key: '4248d5a721c4a7dcb972e40bacaeca24475bd263', part: "body", class: 'page-body' }, index.h("slot", { key: '1a4d5892aa1478689cef3d3bf5104e15a655992f' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
