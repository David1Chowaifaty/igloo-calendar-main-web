import { r as registerInstance, h, H as Host } from './index-CaNXuIlM.js';

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '80f693e862be35c65c1940f3c55500b5003074e9' }, h("ir-interceptor", { key: 'c48881071ddd051a9b72e6d38b18cf8b46266f64' }), h("ir-toast", { key: 'bce105f9f130be7bec2e649c68a1b88687fd416d' }), h("main", { key: '5009693b2de4a5d0ecd66f86e07a0a21ee99165a', part: "main", class: "ir-page__container" }, h("header", { key: 'fec2c2fb6b47612ff74636b80fcecfdd99539ae4', part: "header", class: "tax-page__header" }, h("slot", { key: '2b083ef23cc45d6db01673c352f76c83519bcb93', name: "heading" }, h("div", { key: 'ba590087d23cb19065673ebdaf632c400af0a634', class: "tax-page__heading" }, h("h3", { key: 'c276afb6edcb7cf20a355627e13c29e209bc78f6', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '5e8ddb06a2f50d5227b0e9cb65a50eb5741a86bc', part: "description", class: "page__description" }, this.description, h("slot", { key: '2575b144ce5f6f4e6c07b6bdf9d5135fae7299a8', name: "page-description" }))))), h("slot", { key: 'd3357399ff34025747caefc1600b2401fca9894c', name: "page-header" })), h("div", { key: 'd278bccf0f4e3e75fec1d73c8b142ef7aa5a3af6', part: "body", class: 'page-body' }, h("slot", { key: '89d768ccbf978a28a3198263db6679c6a13dd224' })))));
    }
};
IrPage.style = irPageCss();

export { IrPage as ir_page };
