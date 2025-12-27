import { r as registerInstance, h } from './index-b3dce66a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '0aee747776603ac37c67c35c3a461d688ff8c282', class: "p-1" }, h("div", { key: 'd89561a6146dd093a3b3004a8b2e1b5abeee5051', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '05ddb14cd5cac21e321d0118fecf02ac61d1d75e', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '66c55cca5a1b01a0e2b20845c32298003af2d874' }, this.service.name), h("span", { key: 'e04bd571444389b62e378a280acb5296bb522b80', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd597c006efc34780b986f7d556b6cb87ef2f2021', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '38e22c22c43e71981620ae0ad25334b4d833ac91' }, this.service.total_price)), h("div", { key: '4e857d75b7d706226511a521ee03c4ba2b8f25cf' }, h("ir-label", { key: 'cb1521f126a02e4d145004394ae6b765274d582d', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'ec55326acb45431f058a89457b0c58ff85e41d0b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map