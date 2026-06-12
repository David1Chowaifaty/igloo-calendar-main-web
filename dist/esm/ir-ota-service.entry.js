import { r as registerInstance, h } from './index-7e96440e.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: 'ba0c94d98e9b15cc0bc35637a5312883aaf2c5ff', class: "p-1" }, h("div", { key: '2f5f7d5e35784aa1c02c01f0c989cf407cf95170', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'a7425f272766f4ac8e5420e73b484dd43cc681f0', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'f59a586d69fcce093852efa13b9e503f39a9f14e' }, this.service.name), h("span", { key: '399ae6d338941fa6c6a96b88ee55bd366be540c4', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '32ab94358b880525e2bccf3afc77e4450288ad6c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '5cda1758f66e9457ce9b2a18c11947af12b552cb' }, this.service.total_price)), h("div", { key: 'aa4a56086744b63be06324a5010f34210d548fd4' }, h("ir-label", { key: '4650b930f55af1f5000dff82a25f1375d41cb6a3', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '2c9040822f3c0bae948cc4499e726b3ab98db005', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map