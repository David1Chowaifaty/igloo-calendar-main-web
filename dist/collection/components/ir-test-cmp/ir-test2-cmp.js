import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '5234200cdd2a0221c4f1e816716eaf67cb4cac32', style: { background: 'white' } }, h("ir-custom-button", { key: 'fd4bfc332f9d222f4f0ebd5715567ea6d7f15df4', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'b5395c37983a52a9661ee831c1a235ca8cef2426', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '737b9db7d4872b95f59012d83d8a1f7ba319b0dc', style: { background: 'white' } }, h("table", { key: '349b55e60278d679fb82df3747ad93065cda397b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '93c8e03ed181be47062800fcaa41b103437298b6' }, "This", h("code", { key: '2dd511ded683afb9b07c5ce17f215ef20e2c6e96' }, "<caption>"), "describes the table"), h("thead", { key: 'e931eb8165ef0fe9131244207820493db888ffb2' }, h("tr", { key: '54b750d1c9c5488a2dcc55737db6edceda1129cb' }, h("th", { key: 'ead70558c65e1b6f3e90df2d9528407d635de18d' }, "First column"), h("th", { key: '55e3eeacf66f874fac0730b1dfd38a14e052f51a' }, "Second column"), h("th", { key: '9c871340dba0cff388036039373a210592686fc5' }, "Third column"), h("th", { key: 'f8d0b93dd2466cd057ba7e394c19c1e598a83f80' }, "Final column"))), h("tbody", { key: 'fee8979ef8e6bcb6fa31fcf907bbf4108a0144dc' }, h("tr", { key: '0107d9c8221a4867a4cf5e8762f60740e064991d' }, h("td", { key: '02084956d7d4f2d68e9799b80b1ad9f4bd386812' }, "Data"), h("td", { key: 'b20dead776ed8fb4fb4852271e31273918567885' }, "Data"), h("td", { key: '073471742d314c595011adca83414ba96f51c7bc' }, "Data"), h("td", { key: 'b0e3c9cf63857e68b4f10488e0a9fbbb5eb9903e' }, "Data")), h("tr", { key: 'e16158da2c0f8393229a6894aba749824e0443a9' }, h("td", { key: 'b42997ae023cff67354594e9fbbfc9e6c46a4aca' }, "Data"), h("td", { key: 'f021019ae14d9b2291533ca0c13e040479820df8' }, "Data"), h("td", { key: '252c08fb0e4666e351e05180dbef4cfe176de6dd' }, "Data"), h("td", { key: 'ac6706b9fd39e70c8fc12c07efd73b2a2610380c' }, "Data")), h("tr", { key: '3981e3055fa547b08b3c81f8a686fb0839a359af' }, h("td", { key: 'ff3243275105c61bc3e5aad2e6b43f133397d94b' }, "Data"), h("td", { key: '1fd3cd7d4d4c16e296de7824f73f72cd461bf679' }, "Data"), h("td", { key: 'f210118b67784c8dbf3a484d2163695335c3c957' }, "Data"), h("td", { key: 'e83a45eca75e89324621edd0a53fe7948be3dc0f' }, "Data")), h("tr", { key: '9626d89f211ec8773f04a1b086d95f2f37be6dc1' }, h("td", { key: '436855bec84d6ff00ae2a3602bb9d8d16e03028a' }, "Data"), h("td", { key: 'fc71f0e8a5d0a9c938353367d26583923db2b683' }, "Data"), h("td", { key: '05cd336d7b3ca5e12a091990428b261ee2745375' }, "Data"), h("td", { key: 'e691f53fdd1ac2ca27ea8ed4257634f2c4fdca9d' }, "Data")))))));
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
