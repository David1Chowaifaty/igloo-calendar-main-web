import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '8a2de4ae3fb116b41885c517d4896919ed734664', style: { background: 'white' } }, h("ir-custom-button", { key: '09dbd15329d6ce168dd41465427e61ee988f7b84', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c8791b84fafe93a87825e0d4ea39563149df668e', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '46846a38be8ca1d3476ffd0e38436c53c8c6bf96', style: { background: 'white' } }, h("table", { key: 'c55381b7891c1739c05f3fb42e0a48bc26e179ca', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'cc71531197283493b048be5564bd2fd504bcc399' }, "This", h("code", { key: '529580f03d1b323d884b6746616da006ed406b65' }, "<caption>"), "describes the table"), h("thead", { key: 'd8e83ac7fa1c85fd5d55485a4acc8500c05b6259' }, h("tr", { key: '9cb11b53ea2c8ccc6de9719c81e0b61f8c68ee13' }, h("th", { key: 'ee68256caf2c945f5c00085f75263e55e786344e' }, "First column"), h("th", { key: '57d70a17039370e8dc3f76c0e01aaeff92ceff3d' }, "Second column"), h("th", { key: 'bf6b48da8871dff18664b01aa67250f5521a0209' }, "Third column"), h("th", { key: '5f6124d19c3fae33fce922b7830eb3da3f396fcb' }, "Final column"))), h("tbody", { key: '390a716160dda3f4f38e733efdc8cb8c70399fe1' }, h("tr", { key: '50bb1bdb944514df28b3195eee2cd492180ad660' }, h("td", { key: 'f19c5e1bdef1ba0af5846aa6c0a8f566d18d5268' }, "Data"), h("td", { key: '5c494dc2d21727309184e94892e068773d42553f' }, "Data"), h("td", { key: '7881e6fca591f044aebee5624ba46fd7bc7c365d' }, "Data"), h("td", { key: '7eef267d302f63ad905e10c361fd929dae1afe9e' }, "Data")), h("tr", { key: 'de534c99056e8cdf1dc2eb820abf5b8adb2ba416' }, h("td", { key: 'e8f4fc34cdd98f9ef53d08ee3efc27c885e901d8' }, "Data"), h("td", { key: 'd208312aff88955b7458824bd5206873bb734fa6' }, "Data"), h("td", { key: 'b7b3847254d77daf59a0adbfe5da3ddcd08a17a5' }, "Data"), h("td", { key: '46eeeb22b3880b26d82d901a19e52653d2004273' }, "Data")), h("tr", { key: '8e2d4ad23a6379d5798360627893ca40423a9f4b' }, h("td", { key: 'b867134447473aaa303bb87a36d37fab94190949' }, "Data"), h("td", { key: 'bd62f5b285c7b1432a61b2cf908f6d8a8e5d176d' }, "Data"), h("td", { key: 'fc3c41239526487cf518f281c14ed4adeefda714' }, "Data"), h("td", { key: '944707a289d6614c93f5fed28ed37fdf5c75e42e' }, "Data")), h("tr", { key: '2437814c6d9ef9b9646a39f0461e781ce2fdfc5d' }, h("td", { key: 'b6e121d34886e4d69d3d183de9c8889ff98f6f4e' }, "Data"), h("td", { key: 'bdd6984d35df89b2560633549e7ec0a918d23d64' }, "Data"), h("td", { key: '0cca733e44c0b66b45a6de0a29490a9e38ca65ed' }, "Data"), h("td", { key: '7c707fbd678f146cd2208090d53f35c852ae6ce3' }, "Data")))))));
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
//# sourceMappingURL=ir-test2-cmp.js.map
