import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '55a40bc091a0a27dc6adf1c09ad846fb7c50a63c', style: { background: 'white' } }, h("ir-custom-button", { key: 'f4aa04c9316c1700b6a93023f918399376a22551', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c8c85b9a770bb0489861d1e4489edb55d693ac4c', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '681a7abcfa4fe14f412eff7b13e9533a35c6c3af', style: { background: 'white' } }, h("table", { key: '7070fcb6a8d40312fe8cfe0c7236e7efb41ef8ac', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '214b7aa3708b130707d44f241df4dd3139287982' }, "This", h("code", { key: '9f04ddedf1aa9531eaf135d0cf6d6256a84859a3' }, "<caption>"), "describes the table"), h("thead", { key: 'b90467d9670785e6fe091880c5a0ecb33eabe8b7' }, h("tr", { key: 'fa6ba940515352b09e32289bcda2acfcd71ccac4' }, h("th", { key: 'f33be3d9f04995036b92acff8e0dd96a8e222253' }, "First column"), h("th", { key: 'd86bce6a26fe22ac68e3d3a411dd9fb1e396de3a' }, "Second column"), h("th", { key: '25e591da6e19fd667bb8140e6043190510346d30' }, "Third column"), h("th", { key: '9bc49fdff61ad986821dae1f0113af861cd55c57' }, "Final column"))), h("tbody", { key: 'd08d2e413d39b2323602f261d0b9dd4cb7b8e287' }, h("tr", { key: '820fc2cc7440e198d2b99379fae8d4ae60382db3' }, h("td", { key: '6b3069c7e07606446d4dde19db58f3d59be71147' }, "Data"), h("td", { key: '0047c8b787dbc625456863a7f085eab6320dcc2c' }, "Data"), h("td", { key: '26fcacda47f5d3e208575a1c3142afd26e9d8130' }, "Data"), h("td", { key: 'dfc97d1adc5d94c6728aaf065ff7e834f6d8b561' }, "Data")), h("tr", { key: 'f53abe4edecc1e3d5f5d64b9a21682c73dd25612' }, h("td", { key: '06a36aa3c9db3402a3fcf4e0286d9d47cc4d2387' }, "Data"), h("td", { key: '18e6dad9a05c8df6e9960762d47bcad1b9e9eba1' }, "Data"), h("td", { key: 'a4b1f5ca56cfaa1d1e9010b3abff5bce0305f9d3' }, "Data"), h("td", { key: '1ea533b2482a0065d392757260162726fb4984e8' }, "Data")), h("tr", { key: 'adf6613d8adc93324a163a99cc2312bedc57bf41' }, h("td", { key: '765b3e79dcfbbe5d6a868c5e3dcad890fb2b6a6d' }, "Data"), h("td", { key: '08634022c31a662ff05bb937dda215af87fe69db' }, "Data"), h("td", { key: '553f6a497f7351cd8c53e28d95de855fd955c96c' }, "Data"), h("td", { key: 'e29f31664b4025d1d17d78dbf72c811f71950204' }, "Data")), h("tr", { key: '40ed56d92e738c0d405c18150bb948b007866140' }, h("td", { key: '6e72763785ea7bc6de3242ecb16ff0a549ec6fcb' }, "Data"), h("td", { key: '1f3614457b1afba72ef43b6a94f39c0a899d19d7' }, "Data"), h("td", { key: 'e6b69432bbb8dc6f41a23f683a22c90499385c98' }, "Data"), h("td", { key: 'c517bda16c54ed5b2e64e68e1c28723d96d01a44' }, "Data")))))));
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
