import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'c713dcde211567d8375f62a1c7c4bbd32c006e2a', style: { background: 'white' } }, h("ir-custom-button", { key: 'b4a50a165cb6f1ce8a00871131dbc2d417ee4299', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '792e623fc77e9682e1c35e7ce84621545b427c37', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '95f6ef90ba818abb8e28142f1bfb9fd78f2f3cbf', style: { background: 'white' } }, h("table", { key: 'b749cb4b0cdb8a76b67bb289165b51a09b6297c3', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'd9c4034b2be373dcf26ddb55febab0b4ad1453e6' }, "This", h("code", { key: 'db45b01f5245daddfda13340cefd91f4f7c7cefc' }, "<caption>"), "describes the table"), h("thead", { key: 'dbd887a3c8e102188de5b327046d6391684627da' }, h("tr", { key: 'fd890585300a2b81cc9d70c2a3962cfaadc4902f' }, h("th", { key: 'e5901f89fc214ad1fa6fa7d141724a7959659e00' }, "First column"), h("th", { key: '2c9fd4285f891b71e71d53418aea7524f2a0e8e5' }, "Second column"), h("th", { key: 'f5c9378cb830f12d16ab8eeb6368e9a7a6db1bf8' }, "Third column"), h("th", { key: '5c840cd96353e190ffa44504d76a66c21b7e7c62' }, "Final column"))), h("tbody", { key: '85236f33fb73a94c7381e4995850da8d4a9965a0' }, h("tr", { key: '1a025c28d411a52ed2374811f30f1f423b2bb5d9' }, h("td", { key: 'ba9c75be8e257b2e9b7c64cad89d7fda0f15e39e' }, "Data"), h("td", { key: 'c0969f9c59287195cad38720da260a86e86298b8' }, "Data"), h("td", { key: '7ea139c90b45c58f0e5e8e50a65e0cbc82692cd9' }, "Data"), h("td", { key: '01add9502409b303b24c703b357fe8f3da534935' }, "Data")), h("tr", { key: '12c7e4cf8b390121add7ff91fccfd5a66e0ee10d' }, h("td", { key: '761dea50d2c0726e805384f7a47bfb3f30889562' }, "Data"), h("td", { key: 'cb22c8dfa2b62fed9e86099a903b0d73091a1c22' }, "Data"), h("td", { key: 'e0406faa45313c7461740a337e957ecb578c6eff' }, "Data"), h("td", { key: '930a3e4abda6e7d78fa34c309dde1369d4de4e18' }, "Data")), h("tr", { key: '4014aef678ce9ea267b1ce20bed0cc9e103215ab' }, h("td", { key: '49ed33acb7bb7ad4ecbf074b66d4dba6be7572d4' }, "Data"), h("td", { key: 'd44c44679ff763bc222a4b52307d7e4c380ac064' }, "Data"), h("td", { key: 'acccc2a290573b9f50022913c465b269dab692fa' }, "Data"), h("td", { key: '8ec74e20cd5d4885fadb10d524844d3e1315a569' }, "Data")), h("tr", { key: 'cc94e0f9f38ae412486cb838781047fd46d3f11e' }, h("td", { key: '959b6dd7f31fbbb04b6e07101065be08d72888ab' }, "Data"), h("td", { key: '88c1fff39ab568a80f9e9fd0ca11cc17b219d3c5' }, "Data"), h("td", { key: 'd9fe255c7519e0f06abc8dc07d5c2faa783b9f80' }, "Data"), h("td", { key: 'd1404084e17372a52485d5ad505786ba3244ee5e' }, "Data")))))));
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
