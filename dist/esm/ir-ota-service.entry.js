import { r as registerInstance, h } from './index-CaNXuIlM.js';

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: 'b4888438d095c176747763824c031a1e90df785d', class: "p-1" }, h("div", { key: 'f5ae9b174c229238f25dfad45617f243c0ba46c9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'd60654f6842c66776d7090fbde189604c748e074', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'ef18e8b0d931c45efc66ca6b6e126c502230b3a1' }, this.service.name), h("span", { key: '25597e7bc2f650506c23e8dc90c3390ef5351b7a', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '27e21d86b54b586e46128114aa7a03ab29f22518', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'f78b9b2ca1b9ea26c9ee1bf5961ffb4f22c84db4' }, this.service.total_price)), h("div", { key: '7d69a32ac69877c8c805910d394d268615e078ec' }, h("ir-label", { key: '168f80f4cf7be32b80000a12834309f403818f10', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'e3c72793bb3a1be408e60c1b3a4a4429ce2c89eb', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
