import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e2fa212ede01fa7e1b7092f414936861df304710', style: { background: 'white' } }, h("ir-custom-button", { key: 'f69d23f42b11bd05654ec1b45359ef39446cf556', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '51838844c5af769f0b258240c5ed6974278fee43', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'cc37d235de57ecc300300170a8d5cf394235f4b6', style: { background: 'white' } }, h("table", { key: 'a6cdb629bb29a763fe4c6ffa6de6f0af28e6de48', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '29a53dfb691ab5035eee5d34fb80f248491294c1' }, "This", h("code", { key: '792570bd61a0bb603c13e69930b9a40b736c0a43' }, "<caption>"), "describes the table"), h("thead", { key: 'c1d5ddaccbf1cfca8f799ee16e9d8a7f8a51f660' }, h("tr", { key: '9f450e3bd862664d82df6e7bcffacc4b844adbd7' }, h("th", { key: '22806853f0f788f7c344083b0f28e6b88010babe' }, "First column"), h("th", { key: '91ea3c2d74ae4ae7d463d287acb828b35e6455a3' }, "Second column"), h("th", { key: 'a7d2f35c5ffc19dca11170003b08a36a9f4ed4f5' }, "Third column"), h("th", { key: 'b9c638597591c6d6f9b398541ddd64016007ddda' }, "Final column"))), h("tbody", { key: 'e199d2f8ef9ba7353e373e7e89fa4578e09308ce' }, h("tr", { key: 'cc673f1d9fd9fddf52a6aa82cec31164d5fe697b' }, h("td", { key: 'fd5c7e4cc55d0a58d7de1917b5c21ff0f0f7f491' }, "Data"), h("td", { key: '7fe38571b8f079609a503bb6feeb41052d1c9dd7' }, "Data"), h("td", { key: '7bd8852efe53eb7a3c894649ce314fba6c617d1c' }, "Data"), h("td", { key: 'c5444a5e86b133bef851047ec780599fefa26f84' }, "Data")), h("tr", { key: '1a79c1cdde516c27f72dcfd8435bc3e4eb6ad7bc' }, h("td", { key: 'c8c21e0f87cffbc90d2be5b9daffc916e16050aa' }, "Data"), h("td", { key: '9714074cdccd55966f667624c76ff3e3d97bc255' }, "Data"), h("td", { key: 'bfb5e422e0c52b5345fc31ba1221a292feaef4e6' }, "Data"), h("td", { key: '1aa6e1a7093a2bcc9c31ca8f80559500237683b2' }, "Data")), h("tr", { key: 'ec1336706742f69fafc317b34d92b3a1e4cf5b1c' }, h("td", { key: '1a730ac64a0a21aa396f904cfba8ba1eccdb92db' }, "Data"), h("td", { key: '2ee7e44a31d16f85e9f70c2bb1a54e3e69d50aef' }, "Data"), h("td", { key: '33ada7f659fe8405cffd52bbbc6e8b4f0b5c6b22' }, "Data"), h("td", { key: '21b86ba50883505229ad48a8bf9bd257d03f4cc1' }, "Data")), h("tr", { key: '309146c809de39b7a3e9d083b5231e77da167caa' }, h("td", { key: 'b54a592f02ae27c6167ea0b430ec1c6405eebace' }, "Data"), h("td", { key: '5f2dcdcf0b47b3785b8a8a548a4ab24dd67ad09a' }, "Data"), h("td", { key: 'a2f96679fd90794602280c40c3587d8ded1e85c9' }, "Data"), h("td", { key: 'b87cafa325d6ac72c5b4aa7ef33cf1d9ae5353b7' }, "Data")))))));
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
