'use strict';

var index = require('./index-DgHWBwDV.js');

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: '665bd9c6eb46932bddf05c8ecc56ce1ee258526e' }, index.h("ir-interceptor", { key: '0bff71bd02ae27a778014ace95ff13452568ab2d' }), index.h("ir-toast", { key: '75b871eeadd51e03bb5cfcf20b65f881288846be' }), index.h("main", { key: '3d3496d2e74ec5bb8667bd7a484a6e5d79e261d1', part: "main", class: "ir-page__container" }, index.h("header", { key: 'bafffdd15580c53b568ae7bd7951922504f73917', part: "header", class: "tax-page__header" }, index.h("slot", { key: '54192604b266fdb823008cf344dc60a01d5e285d', name: "heading" }, index.h("div", { key: '90e31edb73c0096119e19d9eab069b60ee927d76', class: "tax-page__heading" }, index.h("h3", { key: '10a00dd0c5808fdd007207286313d67460a21bdb', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: '0bb1ddc8af2fea72e7218dacac18f13d0f4f2c38', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '8d5554765752fda90eca939e784cbe0d33884bad', name: "page-description" }))))), index.h("slot", { key: '57d1f230d330c895b0e43d6b4ad57f96bd8eba49', name: "page-header" })), index.h("div", { key: '5c6160565aae43e14e147cb6fad54a4452ed9107', part: "body", class: 'page-body' }, index.h("slot", { key: '78b989e15c8f69c731626a414f193fdc6c6b00a5' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
