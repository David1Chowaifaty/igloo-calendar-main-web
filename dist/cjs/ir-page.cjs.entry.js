'use strict';

var index = require('./index-P5Mginch.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: 'c884b2eae22afc7309ee8a910a1abcc4e3c51189' }, index.h("ir-interceptor", { key: 'cafedfe207b0b349a79a0f5fdf0df4ebb977c123' }), index.h("ir-toast", { key: '364ddccd8faadc0849029ca156cbdd0720c533c2' }), index.h("main", { key: '728d0db1d7116f9624823767c2f4ad613b3445b9', part: "main", class: "ir-page__container" }, index.h("header", { key: 'a589a69727e662c2615cf5d6f8ffc132fd22dabc', part: "header", class: "tax-page__header" }, index.h("slot", { key: '7bb452d09ec33c448a6945eae9127b1b4497efda', name: "heading" }, index.h("div", { key: '6d543ec9efb062b5ba8073526e680ba2b7f68fd4', class: "tax-page__heading" }, index.h("h3", { key: '42bf0b2253d554bf534b4fc6dc3f429792ececa0', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: '1e5a9bc2ba5d98974fbbf83e06d35f49efbb264c', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '41834c766b97a6eb614e0a1721001591cf29f123', name: "page-description" }))))), index.h("slot", { key: '44328be3706b91fd011d9c7b09aed1f64318badb', name: "page-header" })), index.h("div", { key: 'b6d1ffe6f04198223636045d77fa538353fed9c6', part: "body", class: 'page-body' }, index.h("slot", { key: '73613ceab24356a75cef4fa2fcdd74bd262da021' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
