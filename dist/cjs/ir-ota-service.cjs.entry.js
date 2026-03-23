'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: '5bf8205a1c6a34d5783ea80c0745da363e506156', class: "p-1" }, index.h("div", { key: 'b868f9677d74c1d6c6b3154ef1e37068b718a82e', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'e6959584391a969f300c0d0f7733cd0bc0c35fee', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'edd86ada73b47b5c58877cecb2cdc3bed4203c6a' }, this.service.name), index.h("span", { key: 'ad40c3e5ba2ca8f1706e39588d523832061fee71', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'edba1cf941c094cf42f2f5e74dd1cc1cb0f7d58b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '6fb18a96546408a09aa01eaa302c040a93b58d48' }, this.service.total_price)), index.h("div", { key: 'a632d98645abd6e76720ac39528a3210c8c5a281' }, index.h("ir-label", { key: '4df180f3c68f1871e46d4e64892fef6737d79a37', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '248432460951a2638ef7b89b1f2b362d7859e96a', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map