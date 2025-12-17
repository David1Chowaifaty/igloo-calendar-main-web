import { r as registerInstance, h } from './index-b3dce66a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: 'b89b2a4e53a994e89fb5e1b2e741d22334eb6246', class: "p-1" }, h("div", { key: 'e4752cb1398dc6cd0794b1b4d87ca951f8b90e5b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '39d58b5200dce3380a83786c53a641ee88123525', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '255b49a4c254966939770cf4a61c6376702c4632' }, this.service.name), h("span", { key: 'ca8e7abb9bfee213036b60334d5fb6ec6f187fab', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '305dfaa40c2a03323efe9d95c6579fbf32879d6f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '8b14bfdb1cf35c30c0e86df9d4280b56664fbb08' }, this.service.total_price)), h("div", { key: '527952c83ca388a27415e82c3f454bdccaa9d993' }, h("ir-label", { key: 'd34c5ccc56b016fe82d880864679f421f36d7a8d', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '81bd5edcee9f4a9606f3393d84c3fb4f1976c66a', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map