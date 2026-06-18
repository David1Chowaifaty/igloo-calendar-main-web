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
        return (index.h(index.Host, { key: 'dd0d5d02bd5a75036eb4623249384f3f6b84039d' }, index.h("ir-interceptor", { key: 'b3e5d2371c1403a78fc463d197459d5053ea38d6' }), index.h("ir-toast", { key: 'ec7caf535426b4ff2595e5cb4a1200cffdd097cc' }), index.h("main", { key: 'fc7904e2605879d6669cd5311edbd2256a175d9f', class: "ir-page__container" }, index.h("header", { key: 'd15d20c4e1c96c916eefc9b2202bc2b110ecc27f', class: "tax-page__header" }, index.h("slot", { key: 'bd6ac3d2b30e1c212c4f3f470287ea2c7a534217', name: "heading" }, index.h("div", { key: 'f25d0e9af5a731d5ac395c0a29f63c5b97e0d519', class: "tax-page__heading" }, index.h("h3", { key: '3ee55788c3859b02d2e87179c9b2cc7925427959', class: "page-title" }, this.label), this.description && (index.h("p", { key: 'd37611120be793bb1fa16de7744811f5ad970489', class: "page__description" }, this.description, index.h("slot", { key: '0b11120c93341b00ae6ea250084f83c146828c14', name: "page-description" }))))), index.h("slot", { key: '7988ecd43d07f7ef94051854eb44784913d8c30e', name: "page-header" })), index.h("div", { key: '76fceeb6b0957d21f030ded612a9fa75cee014f5', part: "body", class: 'page-body' }, index.h("slot", { key: '6a0edbf070bf05be9c3fa80a99120bec5b60f029' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
