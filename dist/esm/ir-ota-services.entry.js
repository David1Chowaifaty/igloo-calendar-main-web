import { r as registerInstance, h, F as Fragment, H as Host } from './index-b3dce66a.js';

const irOtaServicesCss = ".sc-ir-ota-services-h{display:block}.bottom-border.sc-ir-ota-services{border-bottom:1px solid rgba(0, 0, 0, 0.1)}";
const IrOtaServicesStyle0 = irOtaServicesCss;

const IrOtaServices = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    services = [];
    render() {
        if (!this.services || this.services?.length === 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), h("div", { class: "card" }, this.services?.map((service, idx) => (h(Fragment, null, h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
    }
};
IrOtaServices.style = IrOtaServicesStyle0;

export { IrOtaServices as ir_ota_services };

//# sourceMappingURL=ir-ota-services.entry.js.map