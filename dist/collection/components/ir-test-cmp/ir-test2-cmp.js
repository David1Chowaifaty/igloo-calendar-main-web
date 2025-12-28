import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '33dd1f2f97575b2b42c56963ad9a00d0b934531f', style: { background: 'white' } }, h("ir-custom-button", { key: 'd3a2b6a0599e09f57a3b75c19b72af66e54e896f', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '265d8c60f23ee852ef14e925e4cc1ced9a02521d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'a3148779f928908041e8383075a1e1c7230d5105', style: { background: 'white' } }, h("table", { key: '97676a49f5563a0e11a733c1b501cc0977bd43b0', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '06070e68ec08622a89c44f5d6b28caabce164d00' }, "This", h("code", { key: 'b5725a3c740666a89d91bfb1d68ddb527d9626b3' }, "<caption>"), "describes the table"), h("thead", { key: 'e1926370ec3d2056f48f23ec8e15427b23570482' }, h("tr", { key: '3bb6476a1344927179c0b95dea4c30450f827bca' }, h("th", { key: 'e568eaabaae21cb20321e22195f84fe720bae654' }, "First column"), h("th", { key: 'bddf08f628d162eb3f0bcfb98c5edbf6f7c09dee' }, "Second column"), h("th", { key: '651366c207321799c9a16688a061d7be28eb74ec' }, "Third column"), h("th", { key: 'eb3f5d428398baae476ddc2544d4af510b4c827c' }, "Final column"))), h("tbody", { key: '14c85cff07bcdcd9d9a5637445fd814a8290baeb' }, h("tr", { key: 'f6ce2472bd7217bee4f79fe31d92a12c98acd87c' }, h("td", { key: '627e58a01566b1c272f34c8216cb5da3a540f166' }, "Data"), h("td", { key: '5efe65e46f9a4f215fa5cfc57fcb305d118b6bb8' }, "Data"), h("td", { key: '8a38cc339559b1921d9369d957ad685db0a71208' }, "Data"), h("td", { key: '6167cd49930bd6343aa521cd7e58a4f548a85d78' }, "Data")), h("tr", { key: 'f862d0b2a763a8f0b714c0af48c757b8a6ae0b56' }, h("td", { key: '8803d1afa20369809efd2f2b381f1c44b7be43fd' }, "Data"), h("td", { key: '84e4b415e86a98ff354294d01512363be4e66213' }, "Data"), h("td", { key: '46df631e9c426bb2d58bd3330e7c0cc0fd246bf1' }, "Data"), h("td", { key: 'bb751053da7132812578f1617765ed356cf2cd10' }, "Data")), h("tr", { key: '733ae9bbc1a68f9fbbb10b0f9b30f1cdffcb4db9' }, h("td", { key: 'd3bde9d3abe7764494cc70f2e404bc9b518f8390' }, "Data"), h("td", { key: '37ad15160300b233e3a588227d606c97c7cc808a' }, "Data"), h("td", { key: 'f34626821bba1e15f66db76fe7c3dbd93dae5d8e' }, "Data"), h("td", { key: '86b045bc1b80220c15b3aab2ffa908167078e038' }, "Data")), h("tr", { key: '23decc81723d7e61ac09e2ec8d3aea8008ff8b20' }, h("td", { key: '619a39a2300ec5ed2471f39f4904cabad1c8c9e0' }, "Data"), h("td", { key: '56de7188b34c51bc9455a7dea6c04c3a12db73fe' }, "Data"), h("td", { key: '232eacc641d65c2037a006c9325b01d45e3f6a6a' }, "Data"), h("td", { key: '89f52409b3b6c231920e1c02ab10f130d49165be' }, "Data")))))));
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
