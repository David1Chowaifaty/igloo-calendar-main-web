import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '3c7a92222ecfb14451dae069ec3f817f5668acc5' }, h("ir-interceptor", { key: '4cd36c6ccc7d8ffa97b490eac86e9134d1180166' }), h("ir-toast", { key: 'd7a662d9863bef8c64359c7db666edf6e134b4b6' }), h("main", { key: '3217978e16d1d4cbb2cbc55ee3ecf62397cc3c1b', class: "ir-page__container" }, h("header", { key: 'd6332317f4bd831e1267f9cdcbe605404daef959', class: "tax-page__header" }, h("slot", { key: '658dd34f084c3d60f9baa4988cb948669de0b60f', name: "heading" }, h("div", { key: '6a49a39a2e1d930dfda700028865457963fab7b9', class: "tax-page__heading" }, h("h3", { key: '3a9995805a0455fbc4a6e70508647c6599ac3534', class: "page-title" }, this.label), this.description && (h("p", { key: '672df31d87b7a4d975f348af210c3eac0b61a6aa', class: "page__description" }, this.description, h("slot", { key: '35f0184510dcd32cc73c5c333c7c31a89f08b411', name: "page-description" }))))), h("slot", { key: 'e941a5006c5f4d150e7f8c4fa82c5d661868a8e3', name: "page-header" })), h("div", { key: '92111e81d9c92a492cd6a87e84e4302126615821', part: "body", class: 'page-body' }, h("slot", { key: '68cbcbabc44b07f92a0d26e76517da091484da5a' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
