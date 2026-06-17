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
        return (index.h(index.Host, { key: 'e5a2e71bde796341588573ede68f5cd21a794ee7' }, index.h("ir-interceptor", { key: 'be46042405c1221efe13d8d858dec3ed91c9c253' }), index.h("ir-toast", { key: '8d2962d23f62e6bba2271ff464c3efbd2e5ca538' }), index.h("main", { key: '806002262c3b7854c907a4ca3be4dad8ae49e392', class: "ir-page__container" }, index.h("header", { key: 'ff696481bdd219444f4c9274262dd589a4071ac8', class: "tax-page__header" }, index.h("slot", { key: '97037eb966311cd9e6fa9588610110ae0c36e4a3', name: "heading" }, index.h("div", { key: 'c5c354075fa2830a77050adca01422db4ada72c6', class: "tax-page__heading" }, index.h("h3", { key: 'ace9a0e87d536abbb453c94fd6310384472561c0', class: "page-title" }, this.label), this.description && (index.h("p", { key: 'ef9ea423ff4a511e1d44789150ca1a3aeae79d81', class: "page__description" }, this.description, index.h("slot", { key: '1d624ddf1498d40d9a0d3e966e4796819ed253db', name: "page-description" }))))), index.h("slot", { key: '86ec727a1529d2ce51fd778bbfc20af75ef9fff0', name: "page-header" })), index.h("div", { key: 'fc29ee1cfab2aa94a7668d67498a6838a2470ed3', part: "body", class: 'page-body' }, index.h("slot", { key: '1f2b91b912791e64f5d42e9eefe0b58e79b4b1c8' })))));
    }
};
IrPage.style = irPageCss();

exports.ir_page = IrPage;
