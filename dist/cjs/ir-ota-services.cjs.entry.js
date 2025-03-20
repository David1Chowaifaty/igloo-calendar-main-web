'use strict';

var index = require('./index-Dt9a74kn.js');

const irOtaServicesCss = ".sc-ir-ota-services-h{display:block}.bottom-border.sc-ir-ota-services{border-bottom:1px solid rgba(0, 0, 0, 0.1)}";

const IrOtaServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.services = [];
    }
    render() {
        var _a, _b;
        if (!this.services || ((_a = this.services) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), index.h("div", { class: "card" }, (_b = this.services) === null || _b === void 0 ? void 0 : _b.map((service, idx) => (index.h(index.Fragment, null, index.h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
    }
};
IrOtaServices.style = irOtaServicesCss;

exports.ir_ota_services = IrOtaServices;
//# sourceMappingURL=ir-ota-services.entry.cjs.js.map

//# sourceMappingURL=ir-ota-services.cjs.entry.js.map