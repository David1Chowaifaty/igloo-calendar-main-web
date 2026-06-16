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
        return (index.h("div", { key: 'f05c426cf7d8c52f75af010d4dbb593d7d976bee', class: "p-1" }, index.h("div", { key: 'd864b65eba53d98060e4ab7568478f1ec27cece7', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'd56fab0233772be940633100b068b6debdbbf129', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '9c536cecd0a8c37eb048182df5dd60833e7d7e7f' }, this.service.name), index.h("span", { key: 'cac1ad411bbc7b74a69dc7a88a7c16cb54d8dc82', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'd24e646ccfc40f890a3291f6c759810f4d229e94', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'd8ebefbb7ee7e0dc17c6b21aa0823b74de98f93c' }, this.service.total_price)), index.h("div", { key: '7609c36c57b2de49c231b2a62e6059150eb5bd4e' }, index.h("ir-label", { key: '92acce82f260b546b1211a1db2d760b079cf2aa5', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '869205cfa30377416c6ef44e3080bc05c2540da2', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map