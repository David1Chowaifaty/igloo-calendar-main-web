import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'd841de672480a57f81e2f83a8e4590d4332c78d1', style: { background: 'white' } }, h("ir-custom-button", { key: '289962dc5d2845e18a176eb236a6155b02c94bd8', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '49a067130ddebc3d0f6bcf0c12d77a98b5aa0480', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '5a7a8cf2cb8f8980a0cbb49ef440a951dec624e7', style: { background: 'white' } }, h("table", { key: '0e7cb3496bbae19ec98999b897156b3b26fd7e18', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '69e6be1cb49678a63a0e8325ac965d9ddcbe2061' }, "This", h("code", { key: '6040f853e5633bfd0e7e968617f65040513c3242' }, "<caption>"), "describes the table"), h("thead", { key: 'cfcd38476ce9bfa793001808e0009e7e857cd9cf' }, h("tr", { key: '678278e1b105440af2e60e479f7d0957f17e62a1' }, h("th", { key: '5eb8ece335dbb61316d7177d5623825633ebae58' }, "First column"), h("th", { key: '27ce48d8557561e450198ec4f376518764b411f6' }, "Second column"), h("th", { key: 'f53d1b9a2135fb8239162a9c55c708ae71245521' }, "Third column"), h("th", { key: 'eab4fb3753f26654a4ae029647d8790d5aba829d' }, "Final column"))), h("tbody", { key: '33e7ab1724898735feef73a699d097dbeb0f1110' }, h("tr", { key: 'e0ac49e8ae7c0255b0408a4c63a253d782a2ff6a' }, h("td", { key: '48b3821fcf2a2bdaed6c3455d81c9887088015d3' }, "Data"), h("td", { key: '36495e7e37568e57c1c8df6a1701dd15417213fd' }, "Data"), h("td", { key: '40aabb27763402dd2c528d0dccc385cba44f0c08' }, "Data"), h("td", { key: '2bec355c3ff39ee9f2a2c5a00a6a09ee681934e8' }, "Data")), h("tr", { key: '240fff61766cd4b44d3a570ac87d76427dfcccdd' }, h("td", { key: 'f0e7b93be84fdd55b55c0c517958bcfd6c495d08' }, "Data"), h("td", { key: 'df47cce02ea3cf9d16253743ec31788387d6d227' }, "Data"), h("td", { key: '0e53ebbdd2a2b08a4225ec3b767ae1ae9a1ba0ea' }, "Data"), h("td", { key: '996a72bbaf37faa333d3702237073421b0738f4a' }, "Data")), h("tr", { key: '593ff636db373bb32359e7f623261d71a552623c' }, h("td", { key: '2760e1e8992925a91d21431723036affd97fb865' }, "Data"), h("td", { key: 'be9c0a1b816ff28d487d79c48aed1c15d1122c85' }, "Data"), h("td", { key: '346c745014c264b508a5d7cf0e2e68dae3f4c903' }, "Data"), h("td", { key: '6dc5c9835e33f90d5613a4b799822f61a7d23042' }, "Data")), h("tr", { key: 'be18ddf17ea346a0e508301ad85e8d0ff990f360' }, h("td", { key: 'a39db605f0d4a190c2b4c0feda0e922d1aa55b64' }, "Data"), h("td", { key: '54d923544936ed3093a483d2f2658021c81c8e43' }, "Data"), h("td", { key: '9d89eecac771c2c897ed5a90b2a3dbac35de3433' }, "Data"), h("td", { key: 'b4e0242b3b877dc0c721ae4d486480c76127150f' }, "Data")))))));
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
