import { r as registerInstance, h, e as Host, F as Fragment } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-17663a35.js';

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}";

const IrExtraServices = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'dea45979b3846cc3f7b18a151aef2f28d86beffb' }, h("wa-card", { key: '9227fe430ea99fbeaa53fb501c7da7f1b55799c5' }, h("p", { key: 'd34361a17b83aeeca5de06a9e0f85f8da3d5a9bc', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: '46904e6a56e3dae40af863934ad36511492d2ad9', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: '2e563a1c5d40f9c2a42e45a46e6d1c0339332845', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '96a2a36f2a5f2600d778ddd994511c8529c47599', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: 'c588859801ef13964939fd0425a43df1f61824de' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
    }
};
IrExtraServices.style = irExtraServicesCss;

export { IrExtraServices as ir_extra_services };

//# sourceMappingURL=ir-extra-services.entry.js.map