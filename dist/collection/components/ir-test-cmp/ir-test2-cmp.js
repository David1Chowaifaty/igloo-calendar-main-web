import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'ddc2ae66b4e10a9988f4348747c2860467b1dfff', style: { background: 'white' } }, h("ir-custom-button", { key: '19aae67e7d811992e88393f41e069bf089dc44e4', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'd601d0be721a61063ee0932c4a4ff445e0daac2e', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '75f3d0becb28bd29b5cc91229ab3dcff05d67b9e', style: { background: 'white' } }, h("table", { key: '3e5939a4eddc47f096ba749186588a6def08b7b8', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'd5e611110e85e4508f69209b220cc003c7180ef8' }, "This", h("code", { key: '7bc531103906556a269112c0b009353c9220229d' }, "<caption>"), "describes the table"), h("thead", { key: 'b16f5dc64fb22036afb82d72f6cecadd3065bc22' }, h("tr", { key: '218018c4d7cc5007aca906d4eac16c4c187220a8' }, h("th", { key: 'e9e5729b3f356e46f703de3beecaa60be25870ad' }, "First column"), h("th", { key: '85b22acc210e069798fae0a3c78753f830fdfa24' }, "Second column"), h("th", { key: 'd60202ad64e4dd748e2adc80d9e29ed7431a25aa' }, "Third column"), h("th", { key: 'd0f4c3ebeb1b1e124449722d58eaed5dac4f57ce' }, "Final column"))), h("tbody", { key: 'e9edb7d746d279cc6454ab36452bed353397badc' }, h("tr", { key: '82b7b16274991325445707822a9c73fabb572b2c' }, h("td", { key: 'a803f7c65c832880fde2db44ffd750db29ce01a5' }, "Data"), h("td", { key: '2cbe434f02f0244eb67fe4f93de2a9fac3a57d31' }, "Data"), h("td", { key: 'a3cd7e3a22ab15a4dc166abc395c2fe06d842668' }, "Data"), h("td", { key: '2f1475f4de3ab808621044da9c854c616ade47e4' }, "Data")), h("tr", { key: '6ced62c291907424776f203e5c998d0f248e9018' }, h("td", { key: 'a4ca491c1d8b7769916dc387e28cc9fc0d91bbc6' }, "Data"), h("td", { key: 'f22662dff29506f33dda2322e3a0639213839fc1' }, "Data"), h("td", { key: '331e01e8089ffc64fe0001815efe73e5e514c9c2' }, "Data"), h("td", { key: '706a1d37f1ea12ef81d7c0cab437a1847485b01a' }, "Data")), h("tr", { key: '84de1052aff1e37093494de904c363d71117703e' }, h("td", { key: '616beb346ba5b267c933478c0509608c39e510c8' }, "Data"), h("td", { key: 'fe3b0a8c509b9a9585b018b678a7b0379bdbe616' }, "Data"), h("td", { key: '7dd23303816a61c77b488787a2d48b3a165a5972' }, "Data"), h("td", { key: 'c3a832886427b245565db255cdd01d97e74750d9' }, "Data")), h("tr", { key: 'b9c3f447fa70b9c25030944ac87e0fb12a04bc07' }, h("td", { key: '1529241e8a7d28473ffac8f4ebbbcb6c238e202d' }, "Data"), h("td", { key: '136624359eec92dd6d036c8b771d41407c2a413f' }, "Data"), h("td", { key: '7767b22a3608b2da788a4f5891d48c22d5a0b0dc' }, "Data"), h("td", { key: 'f0d6196cbf9eb077536d5a3cca551f8460d8d92e' }, "Data")))))));
    }
    static get is() { return "ir-test2-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
}
