import { r as registerInstance, h } from './index-BYqrdgY9.js';

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '1656e8cb7822df0c07cdc99299e600f713bd1748', class: "p-1" }, h("div", { key: '78ae1272d62e787a608d607dbcb0a9d000f1cf17', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '6afb73e474849d1dc0c635fe5684a75837b4ee26', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a307e57c60071b08cf4cf2623bcbf3f8a9807be2' }, this.service.name), h("span", { key: 'fbce05d93ebec76dbd5e211fa8f7fc8b18567dfd', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '67a40a84640c3162b6e0cedec54c110dfd6b2caf', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '7e5ae550b291086d8fa5af009f8ebe6dd4786a40' }, this.service.total_price)), h("div", { key: '1a0208357455e23f83cdc02d45420be620819301' }, h("ir-label", { key: '801777a9efe0df062b4acbf386fdacb54c248502', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '8ee162790612f8e7ee1c9f8619352338b219aad1', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
