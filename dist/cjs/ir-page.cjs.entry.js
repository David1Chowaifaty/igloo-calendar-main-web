'use strict';

var index = require('./index-DtXemfU-.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: 'f793c4edb7ab526ac33468b3793b6f44df81f4ea' }, index.h("ir-interceptor", { key: '71733dc55ff2dcaf2d7faf28f06e609ba26ef5b8' }), index.h("ir-toast", { key: '98999c1656927e896a01e353a1d4406e13c6257b' }), index.h("main", { key: '517572141c9cb6a9ddc8254f8cf5e366dde38021', class: "ir-page__container" }, index.h("header", { key: 'd9b867978e94cd5122d2f74702ed1d258922c6ce', class: "tax-page__header" }, index.h("slot", { key: 'ef668ba411b5d391e0ea646f0c4fb694ce8a2c3d', name: "heading" }, index.h("div", { key: '48292f2e8a22f51d9a1a975e6ff3b8482853d90f', class: "tax-page__heading" }, index.h("h3", { key: '5e9123161ef3e28d8deeb1159ae2c59ec10ca3fb', class: "page-title" }, this.label), this.description && (index.h("p", { key: '127881333a1526620f4766701ef95c5352da8d12', class: "page__description" }, this.description, index.h("slot", { key: '66637866158eee637254aad7de846baf65409ec6', name: "page-description" }))))), index.h("slot", { key: '784a772b021a8497907e8e845943b81da1df0fba', name: "page-header" })), index.h("div", { key: 'fc6f894dd680f5b6b872f449225366f342de8da1', part: "body", class: 'page-body' }, index.h("slot", { key: 'c798e85a35884f76e29ae6514c406d98c2f4f7b0' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
