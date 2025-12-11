import { r as registerInstance, h } from './index-b3dce66a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: 'f1dd4965a6697f7c3699b5ab3a17de4668e2db8d', class: "p-1" }, h("div", { key: '9003f5e0d0fd0343536587eaaebf7bb774f4ae15', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4bd852f4fa26ebafa173068f53b4046774a601e1', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '1781d2a7df97a0c1c293768674907dc535921ea3' }, this.service.name), h("span", { key: '8344f82d4b9ab00b20982c4e2b6086cf327f14f1', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f44c667aad9dce54294ab915f6a6defa19090397', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'ceb03d48b4c0b0e73831e7ceaf3c71055455f563' }, this.service.total_price)), h("div", { key: '9608013e7cafb63cf1e45329dfc7f150699a8dad' }, h("ir-label", { key: 'e358bc7e73b57fddc222f4e5170c3b263a013bcd', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '0fff2db68081d06724fd023498df7388076d28b5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map