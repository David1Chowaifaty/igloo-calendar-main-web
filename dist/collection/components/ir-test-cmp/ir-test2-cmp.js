import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'de36a4dd1dd5bd403ea81daefca7be2ae4a42b3a', style: { background: 'white' } }, h("ir-custom-button", { key: 'a44ca89b1ba838709c6513c93cf017baab9a8a3e', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f3d7d654b122671c3d6cbb79064a72f06344d225', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'abbce2235d9f8c4c2e297f4f634c1c6ac2faec5f', style: { background: 'white' } }, h("table", { key: '6c34c37c44d860158a448b9545cd1b69bcc71b9f', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'bfc0237dfbd0d397cd1922fd21517ed4bd6b17ae' }, "This", h("code", { key: '4d8d71aebe535b4a2af2a1228dc4678558246c01' }, "<caption>"), "describes the table"), h("thead", { key: 'b465207d6be86cd397bd832bd379d833dee5c896' }, h("tr", { key: '9b653c710cb7a940784e60df3ae5e5f82a79f8ba' }, h("th", { key: '6a8145052dfde5bc90b39cec5903866e4293bc14' }, "First column"), h("th", { key: 'd513872662efcbedcccdb8b98ab35035c22f4568' }, "Second column"), h("th", { key: 'f4ad0762fa9845c51b7cf4a935dfa6aeb05fb20b' }, "Third column"), h("th", { key: 'a34b312c3b9ae6a5856ed32b223678d00f38d652' }, "Final column"))), h("tbody", { key: '9d6e032ac9144aaa91b1a036a9e0b1d2fe02a81f' }, h("tr", { key: '56d4e2ec8006d8c33a4f97a91e3869331417736c' }, h("td", { key: 'b2df5beab644958b3e5ce546776ab95f9160b2c8' }, "Data"), h("td", { key: '38a8ce484ca15665358563187dee9bd70e3a014f' }, "Data"), h("td", { key: '82f339199aa1e0e3fd31cd83ff19d85fdfac59b3' }, "Data"), h("td", { key: 'a6d6494885efa094e0f87c3ee6642a23abba35ad' }, "Data")), h("tr", { key: '81af1485921641e6f36cc5d16e29ad5bc4d12043' }, h("td", { key: '0c707ca5fea2f836062e86269b5d8be1877ce8d1' }, "Data"), h("td", { key: 'b3eb6945277338e2cadfb1393cc8e31d3a0bd1df' }, "Data"), h("td", { key: '8bf68ec57aaba2e20e4cc1f8a9996a9836af6f37' }, "Data"), h("td", { key: 'b673f178759050d40e374a98de4c54a3fdcae58c' }, "Data")), h("tr", { key: '86245306eb263d77afcf6adb23aa9a9644ab3631' }, h("td", { key: 'c5d621b0c9234698a4c8ba251aceb8cad8d3549f' }, "Data"), h("td", { key: '8f7f20cdcd44eaa0ab12da0c11ced5b5f58c46ba' }, "Data"), h("td", { key: 'a1a54b3fcbc2c88f6679fe6339975cdd3c72130c' }, "Data"), h("td", { key: 'a1bf308746ced62b032fc56c5e5586153136e4d8' }, "Data")), h("tr", { key: 'e0dca11250cfe83f836bcce7243d7d65f29db6de' }, h("td", { key: '1ad8ceebf84b47a4ff3301cbbc0fe4fcbaaaa5df' }, "Data"), h("td", { key: '35133989e9522d27fd3a750f826c09f92cf15fa3' }, "Data"), h("td", { key: '3d3cb8c0c4235dfce441cb0374eed05ed8fa8fe9' }, "Data"), h("td", { key: '8d85a424d4f8f4d35a61db0c638e171f17f0343a' }, "Data")))))));
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
