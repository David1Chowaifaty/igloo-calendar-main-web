import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'd297fc04f7d784b3b704eabdc716dc17d09c1ec3' }, h("ir-interceptor", { key: 'd39ba0176ef24187aceda904642dc0033151f977' }), h("ir-toast", { key: 'db1c898301750ec72bc415c9992fc9bba7e17e39' }), h("main", { key: '1a8336388c4af1e2eca4ca42a39b37decf5254f8', class: "ir-page__container" }, h("header", { key: 'add9a406db9d4bf693f35f5e9f128f34150ce056', class: "tax-page__header" }, h("slot", { key: '3d3472b2116a0b4fe98a9302bc7acf6ee37b63c2', name: "heading" }, h("div", { key: 'eba3225e793e38581d5edb2bf3309daea4e018d6', class: "tax-page__heading" }, h("h3", { key: 'a2995940a1f438b92825ceb943ba3855878951e5', class: "page-title" }, this.label), this.description && (h("p", { key: '697a37952b09c87051939c34e089b6cb0c46742d', class: "page__description" }, this.description, h("slot", { key: 'ba5ed340aefe76f0aa921214d9a5382dd696ddc3', name: "page-description" }))))), h("slot", { key: 'e5342b6fd74635ea432dfec0221d21d6871bf94a', name: "page-header" })), h("div", { key: '406d3194430319522455079f36960de7611b09f2', part: "body", class: 'page-body' }, h("slot", { key: 'dc3117fe3a1ac4c6aba48fecea63b6137930af13' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
