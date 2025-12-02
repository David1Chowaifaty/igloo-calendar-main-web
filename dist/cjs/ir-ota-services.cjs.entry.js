'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irOtaServicesCss = ".sc-ir-ota-services-h{display:block}.bottom-border.sc-ir-ota-services{border-bottom:1px solid rgba(0, 0, 0, 0.1)}";
const IrOtaServicesStyle0 = irOtaServicesCss;

const IrOtaServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    services = [];
    render() {
        if (!this.services || this.services?.length === 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), index.h("div", { class: "card" }, this.services?.map((service, idx) => (index.h(index.Fragment, null, index.h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
    }
};
IrOtaServices.style = IrOtaServicesStyle0;

exports.ir_ota_services = IrOtaServices;

//# sourceMappingURL=ir-ota-services.cjs.entry.js.map