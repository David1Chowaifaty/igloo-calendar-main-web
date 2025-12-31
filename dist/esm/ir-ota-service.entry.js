import { r as registerInstance, h } from './index-7e96440e.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '19c269f5377b657f3353c492a81dcb0ea95bdb9b', class: "p-1" }, h("div", { key: '3aed0beaabd162afbbfdf6fcbe91d2d8b624c7cd', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '6afeff760151521be805f94e8a278c451be04897', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'ffe917dec7b9026713a84f8ecf84a09ceb54c6ca' }, this.service.name), h("span", { key: '4d6237c92596cd9b31e1c3297be310c122267a3d', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f8c416ed8997f47cafbb3e37350c6bf3916f1cfa', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '982e33b028c90ed12952d1033aa4fa0660620bbd' }, this.service.total_price)), h("div", { key: 'd2798ab6908ea6369f71bcf4e84140fd6dfab9d8' }, h("ir-label", { key: 'a87cfbd9400bd938b75d46dff3f84444beefc6d6', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '1fd1dc4d20b9f2ef335bf93f2d8082db065470e5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map