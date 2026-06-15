'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irPageCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}";
const IrPageStyle0 = irPageCss;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: '22df40847b12a7a5742a40ca1ddd1c4c0cd1cfd6' }, index.h("ir-interceptor", { key: '34649d072de53d18a638a06e2b0ad8164f70b249' }), index.h("ir-toast", { key: '303d022f778223c1ba66e8244f95d6d8d88ba5fe' }), index.h("main", { key: '6e76fe65f279452c0f2b375172b7ccdf50f4464a', class: "ir-page__container" }, index.h("header", { key: '7e2d9e59fbd4ade9df4910dc6ddcaea518d0b8c7', class: "tax-page__header" }, index.h("slot", { key: 'b837d4bd05fe9ccde71b2c606ddbb0fe4055ad7b', name: "heading" }, index.h("div", { key: '34c84c1ae615af3cd43bb2bf156d2fadf2fead31', class: "tax-page__heading" }, index.h("h3", { key: '1ffef38aded4b1f0967c5b5559e8c90fe847d894', class: "page-title" }, this.label), this.description && (index.h("p", { key: '57bf0e2a9e4e9b8f79e0e9aa4d78d223da0a3d66', class: "page__description" }, this.description, index.h("slot", { key: '545aaeefb0219d0753c2d9bd4e17ce92ddfff783', name: "page-description" }))))), index.h("slot", { key: '0ed60e4797fcebe70f88152a104334e4c75cd9f3', name: "page-header" })), index.h("div", { key: '6cd5b1570dcfa80ae0bc8b47ce688e406388b224', part: "body", class: 'page-body' }, index.h("slot", { key: '97bc6441c9e93941abf33763344a9472f8db2427' })))));
    }
};
IrPage.style = IrPageStyle0;

exports.ir_page = IrPage;

//# sourceMappingURL=ir-page.cjs.entry.js.map