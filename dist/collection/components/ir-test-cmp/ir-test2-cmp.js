import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '06ea9ab6abbe0ace3c14c6cc7a1895d63d826a39', style: { background: 'white' } }, h("ir-custom-button", { key: '29ab99b83f03eccc144ec2ebfaec70a06b1bf6e3', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '835052f19d5cf07fef33475a1d31f10e19e6a595', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '77eb15a52c864b91d2dd65bb8ee6c99773534403', style: { background: 'white' } }, h("table", { key: '8a71d22cb6213f143cee88ce67b890d9d5cf9c34', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '206f521594af5f144580592dd30de6ddd3b864b5' }, "This", h("code", { key: 'c17f849d33c53577c92e4db4a74db7c98b5fcb41' }, "<caption>"), "describes the table"), h("thead", { key: '3de65c78af1190b7a19d21e7500c89b735cd7f3c' }, h("tr", { key: '708ed2d0ddbfc7a4bb8ea3c1c2103bb25d2839f5' }, h("th", { key: '56c22618c9baaaa6ed6f42b66c1d2640150f0e5d' }, "First column"), h("th", { key: 'a0841103f3cf79ea14b3d7b387d1f3dc813c8426' }, "Second column"), h("th", { key: 'fa8c984d69643bf5dd9d06a58e6ce48c2d4f3350' }, "Third column"), h("th", { key: 'dc8f21b1425eff3419f560203e61be9743a8cf69' }, "Final column"))), h("tbody", { key: 'c3332c88124d83f705fc10c107c3814703db2b5e' }, h("tr", { key: 'a33625d1f4c089b0f5d4aa026283966e407aaad5' }, h("td", { key: '5cd8f773f034a0d79843ef7a9d86565f2ad0aa32' }, "Data"), h("td", { key: '53189aa0216b287eb9c1bb80dfc86c82eecfbd29' }, "Data"), h("td", { key: 'aca93f713c5588128f1aea0ec273fd34e6871076' }, "Data"), h("td", { key: 'cb23eb488e38f233f9bc2d307053118f845b11da' }, "Data")), h("tr", { key: '3df32cee58b4ec309559e784cc67b670191809da' }, h("td", { key: '9b822244ab4d99e5549b1437ec99dc7fdcaa4f1f' }, "Data"), h("td", { key: '0f39a7772305310a1dd41aeedde2e3a3de97e2b3' }, "Data"), h("td", { key: 'e0e08df9cff4cada7d863ffbf4f5c9aeaeb6b2a2' }, "Data"), h("td", { key: '4c5dbfa546cee520d3929fec339dff345df203a7' }, "Data")), h("tr", { key: '5d79ad93e6a66f16402697b10509aec819be3894' }, h("td", { key: '68940409623afffe180c90dd8207741fe87f4386' }, "Data"), h("td", { key: '7dd41a5d3f5011bde7df8ef6f15c7bcd9903d39b' }, "Data"), h("td", { key: '505dd1e58aef931fe976fce6d12661b2a257f616' }, "Data"), h("td", { key: '5aeefccac7a13a4306a99256073f8c0249e71442' }, "Data")), h("tr", { key: '7ed3ae0247baa61de79cc0ae951a7ef408ae6699' }, h("td", { key: '68144448d1045cf1d1c37439bbac96138211ecd5' }, "Data"), h("td", { key: '53e844d385f7de815904b5d5be99bc51df549747' }, "Data"), h("td", { key: 'cd24118b0ef6f80b39299331b8a68342d51e234c' }, "Data"), h("td", { key: '8f436e770ebcc3651f900019a9b02705d68c1aef' }, "Data")))))));
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
