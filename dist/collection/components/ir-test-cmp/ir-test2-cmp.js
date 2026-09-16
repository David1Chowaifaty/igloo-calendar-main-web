import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'cbaadc0b420b8d091d2b9862b98967ab4733df57', style: { background: 'white' } }, h("ir-custom-button", { key: 'fd53d254a9b07a97d3b16b478b3cbbe616f0f623', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '92773581d5d7bc9f2bc1b40e78cfd6a08c2598d6', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c7c3a836f14e0112863df084e4830a9dd3d91c89', style: { background: 'white' } }, h("table", { key: 'b2bb007eda80bd66c3bbbf34bfb240066a5b7569', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '2a64321830e168dbdba6c438faf48bdcaf581827' }, "This", h("code", { key: '5830165beee13152aa390b493257196495044d93' }, "<caption>"), "describes the table"), h("thead", { key: 'd1d79e77a7efc5928b0856c1e2e4cadc69f8d303' }, h("tr", { key: '3ccb42704261eb75190b933d25e1997108300d02' }, h("th", { key: 'bfdc6646e40a1392cd3e00af3a13835bd3eb7867' }, "First column"), h("th", { key: '957a3337ea75a22e0d4f52feba46e746dbbb353e' }, "Second column"), h("th", { key: '60900fccbcbc452453cdbf1689e49d327a8df2d9' }, "Third column"), h("th", { key: 'a24e76d4714299fe6f1cf5257b6a8198f0fcdad8' }, "Final column"))), h("tbody", { key: 'e054621ff4e6b5a9a921bceaef349a6ae146fddd' }, h("tr", { key: '11afede6fd8d900e198a836c1a48c0801b6ae963' }, h("td", { key: '1ab905d83794d2f8692837a60a1c9aec57492c44' }, "Data"), h("td", { key: 'dccb5fe23402bcefab5e25644edadbcab7b746f1' }, "Data"), h("td", { key: '5aed1279ca429be7844e6adc8e872b1ab0cbd4fb' }, "Data"), h("td", { key: '132063b6e139d4bffcb54b97f7c7edef2e2789ef' }, "Data")), h("tr", { key: '58b5d5d208b80c8bc2e48071e438469365820a22' }, h("td", { key: '58d3506a9cabd064e347af1e852c5be763c1f77d' }, "Data"), h("td", { key: '7cf8818b9c14759e27fc241d591632cfc33a273f' }, "Data"), h("td", { key: '6a12d5416efa01802668340f222bb88adf35adc8' }, "Data"), h("td", { key: '4b79d041a00cfcc5087a79809787d43de8dfc4ff' }, "Data")), h("tr", { key: '5c3f29e8bd227703630d300f77f3109a2131a09e' }, h("td", { key: 'ec6813fee23968b24424a72db1f3ef2446f7da01' }, "Data"), h("td", { key: 'eff3bbdcd6cc8128ad579ad8a13a217d504277c9' }, "Data"), h("td", { key: '6719a80ecc2fb3d4ca0a5ec7309b7c43eae7bc4a' }, "Data"), h("td", { key: '8591a756d72070e1f19eae386b31d929923d6a45' }, "Data")), h("tr", { key: '0928f2d4e5adfcfa795de8df420c3233e3692fea' }, h("td", { key: 'b00c4d55d7894b0a83dd7fa185c92466a8b9e568' }, "Data"), h("td", { key: 'a47f8d87fc1fd3b594183ebbc205ca8be709af01' }, "Data"), h("td", { key: 'c93c619073469edc17c6e2da49231ee2b70c02d4' }, "Data"), h("td", { key: 'aa0885e25342c500d0d94f474950181236ecd8c8' }, "Data")))))));
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
