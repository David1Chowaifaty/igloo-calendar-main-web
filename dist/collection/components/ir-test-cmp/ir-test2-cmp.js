import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '02c36902454bea7677559bfbec581bf1dc938bbb', style: { background: 'white' } }, h("ir-custom-button", { key: '17f4e4cb3d027c35d5ee09bdcb37b925df446668', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '04804c4be8c0e5bfba10be33c2193bb19f0cca1d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '25b32cf3ca7e0938aec1030440346f18b138581f', style: { background: 'white' } }, h("table", { key: 'ca053c69353df35da70c080a95398ee34f81a0fc', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0b4178bce9642a0b9d0efac69827aa2e66a0be42' }, "This", h("code", { key: '1275334ce0cf8342a8571396c29e39552b6f95fb' }, "<caption>"), "describes the table"), h("thead", { key: '63a4d42c780cc7cb57d2c31698f4c7fbbd10a51d' }, h("tr", { key: '4b717121f97f77eea1670e68417f6cc7c12149c6' }, h("th", { key: 'e775b7da40693c17ef797f16e74ef561146777cf' }, "First column"), h("th", { key: 'aec227f4d2f8685ee356d64403651c44b650e076' }, "Second column"), h("th", { key: '88ba11db3a96a6f779b0c40730976aa31dff7f91' }, "Third column"), h("th", { key: '979aee8988fb7d11a2305c8638cd8528c72a6e99' }, "Final column"))), h("tbody", { key: '4a496aeb8d82bc40f5e10276f27b693252a5e0fa' }, h("tr", { key: '25ade951991519de29164378537ec37d575c40c4' }, h("td", { key: 'de0f17c3b5ab897fc0f2965b152acd511c0d67df' }, "Data"), h("td", { key: '1daddfc701f7c390598201fb9d24a8b3243a24a1' }, "Data"), h("td", { key: '3743ee9cb4f01f96fad85ff1b7b73693b6d808b5' }, "Data"), h("td", { key: '5f2d053c8db05ba40b9e57c7d9e7b49661fe283a' }, "Data")), h("tr", { key: '483f166a9ce4b88ed86cf837aee7af1e31a1690c' }, h("td", { key: '1a7c14d62466cc265b81b586c07836d669634eeb' }, "Data"), h("td", { key: 'c6c97d1788385246790973a9e2ea7bc68ed0872a' }, "Data"), h("td", { key: '902db9566b80aa2b034bf551d158fbd39fd98071' }, "Data"), h("td", { key: '760122223e3bd882c2fb73ed6b0060a8896fbd91' }, "Data")), h("tr", { key: '568ff2d3d2f0788ffcbc2492240aaa16cdb3c902' }, h("td", { key: '5c0b531f5bd60a6bfb558fd36a03ddb5af482aaf' }, "Data"), h("td", { key: '153cc00e935b9a9714e4f347f13bdfbb45139552' }, "Data"), h("td", { key: '49590c62ca5f4e835c75740bf7f6cf6e0f794019' }, "Data"), h("td", { key: 'd51bb3d07ecd84526989961eb8609fcaa92fe17d' }, "Data")), h("tr", { key: 'd74a801c57fadd3f2f272d24bf764ca742ec1ad8' }, h("td", { key: 'd45461b69af397be19742a3dabc9578adfd9e17c' }, "Data"), h("td", { key: '09ead56ebb156624c245440c709582f5e0c81880' }, "Data"), h("td", { key: '22ee2ebf1129e26870901ee82b537603319bdc28' }, "Data"), h("td", { key: '2221091b006d7ae2d8f49051c8ec28c5636ac933' }, "Data")))))));
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
