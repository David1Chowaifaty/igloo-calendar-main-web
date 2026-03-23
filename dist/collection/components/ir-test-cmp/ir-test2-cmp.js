import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '46f8861c4bbcc422ea3c0208b1113f31e536994f', style: { background: 'white' } }, h("ir-custom-button", { key: 'c86693e0ee9a45576666d229448f747525593958', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '14ff3a6cc14a5115c1f9f94de018ab93ab27b1dc', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '178fcb398638999fdfd96b34d7954fea534a1ea2', style: { background: 'white' } }, h("table", { key: 'd11de4ccc38b34dbad6cebdaefb1aa263e3c2c57', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'ee63711d94ad36feea4cb057b91f1e22e484be25' }, "This", h("code", { key: '67efc45ae828c03b9df823fad93cbb7963f67986' }, "<caption>"), "describes the table"), h("thead", { key: '263838f1c772f70ed126f17130aa73d211978aa4' }, h("tr", { key: '0e9ba0ae650c8651c9036ba1fd39fc3576038d6c' }, h("th", { key: 'a52a901e294bb48357213f2e35b05c7c5d0d2ce7' }, "First column"), h("th", { key: '09f3089127a6a1dcff29948b69637f3e1a439a6d' }, "Second column"), h("th", { key: '37bdfd46fdeb579acee2846d58358a47c7597cd6' }, "Third column"), h("th", { key: '711fc63a92810e05276f41815eeb84ae1380c427' }, "Final column"))), h("tbody", { key: 'b4859e42d1d3ef0a9162d81aa58531254221a61f' }, h("tr", { key: '9bfd85d76e7ffe77c8958991063f4324ef7e8d06' }, h("td", { key: '35a0eab4553d28f21f1a149982c4eed231b5cf7e' }, "Data"), h("td", { key: '87a4d1ebd8fa634aed99b5e5f01c59fa635af14c' }, "Data"), h("td", { key: '5316494b5bb474800d1b7eefe333f7d3fdcef1f8' }, "Data"), h("td", { key: '80369021af31bb356afa3141ce2905c58754787c' }, "Data")), h("tr", { key: '8ab964057d247060e46ea7ae06911e5be6cf39f3' }, h("td", { key: '5f25c83594948e9ea3a64c9de333c5e12b875cb4' }, "Data"), h("td", { key: '6ad7573de8c90a5e6d2b5927398f528d566ec6c3' }, "Data"), h("td", { key: '30e9a619ffc58e3840aa5d57ba636beb87dba1ec' }, "Data"), h("td", { key: 'bdaa84d97468ac275fe6e8b6064a91e608c68f36' }, "Data")), h("tr", { key: '5d5a2455bfdcf12a28ead539c965373b5532f709' }, h("td", { key: '33ae89d407b0cdd4d543202d5d0442aa93b9c981' }, "Data"), h("td", { key: '12fd2e6b4303e704250b6f2c658902384e939695' }, "Data"), h("td", { key: '545fb520d91c50bb3f2144c763852db06c3975f9' }, "Data"), h("td", { key: 'dba395697a087a70fa666accfcbca67f96bc5919' }, "Data")), h("tr", { key: '11d6d7af2ae4659079dce4a77e8bd19d50f5f3f3' }, h("td", { key: '621c528e736f0321b042b6d2059503f54068ace1' }, "Data"), h("td", { key: '2144c21b1a1443f3c3df4c690c4a933f58d20653' }, "Data"), h("td", { key: '95da1bb7f4a48e267ca40eedd7a148311d816526' }, "Data"), h("td", { key: '793e4a490c3e87bc7f4cba83c59833927111dd19' }, "Data")))))));
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
